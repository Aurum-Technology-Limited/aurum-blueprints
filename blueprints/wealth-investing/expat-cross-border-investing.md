---
id: wealth-investing.expat-cross-border-investing
name: Expat & Cross-Border Investing
description: "Every account mapped by country, your tax residency and reporting duties settled, currency and transfers handled on a routine, and pensions, homes and wrappers left behind decided on purpose."
category: personal
version: 1.0.0
tags: [wealth-investing, expat-cross-border-investing, everyone, expat, tax-residency, currency, tax-treaties, pensions-abroad]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Expat & Cross-Border Investing
          description: "Investing and saving for retirement across countries, handling currency, residency, tax treaties and pensions left behind."
          projects:
            - name: Map of your money in every country
              description: |-
                ## Purpose
                Anyone who has lived in two or more countries tends to leave a trail: a pension from the first job, a dormant brokerage account, a savings account kept open for a card that still works. Before any residency, tax or currency decision you need one map showing every account, pension, property and debt by country, currency and rough value, because the forgotten account is usually the one behind a missed foreign asset filing.

                ## Milestones
                1. Every country you have lived, worked or held money in listed with the years.
                2. Each account, pension, policy, property and loan entered with its country, currency, provider and account number.
                3. A rough value for every item converted into one chosen currency at a stated rate and date.
                4. Items you cannot currently access, such as accounts with no online login, flagged for follow-up.

                ## Notes
                Keep account numbers in a secure document rather than a shared spreadsheet. Old pensions you cannot find are a separate tracing job; list them here as unknown and move on.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single map lists every account, pension, property and debt across all countries with currency, provider and a value in one base currency."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every country you have lived, worked or banked in since leaving school"
                - "Add each account, pension and property with its currency and provider"
                - "Convert every value into your base currency at one dated rate"
                - "Flag the accounts you cannot log in to and note how to reach each provider"
                - "Refresh the map's values and add any new accounts @recurring(yearly)"
            - name: Tax residency position in each country
              description: |-
                ## Purpose
                Tax residency is decided separately by each country under its own tests, such as days present, a permanent home, family ties or where your work is based, and it is possible to be resident in two countries at once or briefly in neither. Getting your position written down, with the facts behind it and a professional's view, is the base for every filing, treaty claim and investment choice in this area.

                ## Milestones
                1. The residency tests used by each country you are tied to found in the tax authority's own guidance.
                2. Your facts for the current tax year listed against each test: days, homes, family and work.
                3. A cross-border tax adviser's view of your residency in each country recorded in writing.
                4. Any treaty tie-breaker that applies, and the country it points to, noted.
                5. The date you expect your residency position to change written down, if it will.

                ## Notes
                Residency rules turn on detail and shift with travel patterns. Treat this as preparing the facts for a professional, not reaching your own conclusion.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your tax residency in each relevant country for the current year is recorded in writing, with the facts and the adviser's view behind it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find each country's official guidance on who counts as tax resident"
                - "List your days, homes, family ties and workplace for this tax year"
                - "Send the fact list to a cross-border tax adviser and ask for a written view"
                - "Record which country a treaty tie-breaker points to if you are resident in both"
                - "Recheck your residency facts against each country's tests @recurring(yearly)"
            - name: Citizenship-based tax and reporting duties check
              description: |-
                ## Purpose
                A few countries, the United States being the best known, tax and require reports from their citizens wherever they live, and some people only learn they hold such a citizenship through a parent or a birthplace. If that applies to you or your partner, it shapes which funds you can hold, which accounts banks will open and what you must file every year, so it needs checking before you invest anywhere new.

                ## Milestones
                1. Every citizenship held by you and your partner listed, including any by birth or descent.
                2. Each citizenship checked for tax or reporting duties that apply while living abroad.
                3. Any filings that should have been made in past years identified with a professional.
                4. A list of investment types to avoid because of those duties agreed with an adviser.

                ## Notes
                If past filings were missed, most authorities have formal routes to catch up. Ask a specialist before filing anything on your own.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every citizenship in the household is checked for tax and reporting duties abroad, with any catch-up filings and restricted investment types recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every citizenship you and your partner hold, including by birth or descent"
                - "Check whether each country taxes or requires reports from citizens living abroad"
                - "Ask a specialist whether any past years need catch-up filings"
                - "Write down the investment types those rules make costly to hold"
            - name: Platform and bank access check after a move
              description: |-
                ## Purpose
                Many brokers, pension platforms and banks restrict or close accounts once you report a foreign address, sometimes allowing you to hold but not buy, sometimes forcing a sale. Asking each provider in writing what happens when you move abroad, before you go or straight after, avoids a forced sale at a bad moment or an account frozen just when you need it.

                ## Milestones
                1. Every investment platform, pension provider and bank on your map asked what changes for non-resident customers.
                2. Each provider's answer recorded as full access, hold only, or account closure.
                3. A plan for every account marked hold only or closure, with a date to act.
                4. Logins, two-factor codes and phone numbers tested from abroad.

                ## Notes
                Two-factor codes sent by text to a home number you are about to cancel are a common way to lose access. Move them to an app or a number you will keep.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every provider has confirmed in writing what happens to your account as a non-resident, with an action and date for each restricted account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write to each platform and bank asking what changes if you live abroad"
                - "Record each answer as full access, hold only or closure"
                - "Move two-factor codes off any phone number you will cancel"
                - "Set a date to act on every account that will be restricted"
            - name: Choosing your long-term base currency
              description: |-
                ## Purpose
                Wealth spread across countries has to be measured in something, and the right yardstick is the currency you expect to spend most in when you stop working, which may not be the one you earn in now. Deciding on a base currency, even provisionally, tells you which exchange rate moves are real risks and which are just noise on a statement.

                ## Milestones
                1. Your likely places of retirement and big future costs listed with their currencies.
                2. A base currency chosen with a sentence explaining why.
                3. A rough split of future spending by currency, such as 70 percent in one and 30 in another.
                4. The base currency written into your money map and investment notes.

                ## Notes
                If you genuinely do not know where you will end up, a split between two currencies is a reasonable placeholder until you do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A base currency and an approximate future spending split by currency are written down with the reasoning."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List where you expect to live after work and the currency of each place"
                - "Estimate what share of future spending falls in each currency"
                - "Choose a base currency and write one sentence on why"
                - "Record the base currency at the top of your money map"
            - name: Cross-border tax adviser who knows both systems
              description: |-
                ## Purpose
                A domestic accountant in either country usually sees only their half of the picture, and the costly mistakes in expat finances sit exactly where the two systems meet. Finding a tax adviser who works with your specific pair of countries, and agreeing their scope and fees in writing, gives you someone to send the questions this area keeps raising.

                ## Milestones
                1. Three firms or advisers shortlisted who state experience with your two countries.
                2. Each asked the same five questions about scope, fees and which returns they prepare.
                3. One adviser engaged with a written engagement letter and fee basis.
                4. A first meeting held, with notes on what they need from you each year.

                ## Notes
                Start from the **Meeting notes** template. Ask how they are paid: fixed fees for tax work are usual, and anyone also selling investment products has a conflict worth noting.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cross-border tax adviser covering both your countries is engaged with a signed engagement letter and notes from a first meeting."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search professional directories for advisers who name both your countries"
                - "Send the same five scope and fee questions to three of them"
                - "Sign an engagement letter with the one whose answers fit best"
                - "Write up the first meeting, including the documents they want each year"
            - name: Double tax treaty summary for your countries
              description: |-
                ## Purpose
                Most pairs of countries have a treaty deciding who taxes pensions, dividends, interest, property and gains, and at what reduced rates, yet few expats ever read the one that applies to them. A one-page summary of the articles that matter for your money, checked by your adviser, turns vague worries about being taxed twice into specific rules you can plan around.

                ## Milestones
                1. The treaty between your countries found on a tax authority or government website.
                2. The articles on residence, pensions, dividends, interest, capital gains and property summarised in plain words.
                3. The relief method, credit or exemption, noted for each type of income you have.
                4. The summary reviewed by your cross-border adviser and corrected.

                ## Notes
                Treaties sit alongside each country's domestic rules and do not replace them, so the summary is a map for questions, not the final answer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page treaty summary covering six income types, reviewed by your adviser, sits in your document archive."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the tax treaty between your two countries from an official site"
                - "Summarise the articles on pensions, dividends, interest and gains in plain words"
                - "Note whether each income type gets a credit or an exemption"
                - "Ask your adviser to check the summary against your situation"
            - name: Two-country document archive
              description: |-
                ## Purpose
                Cross-border tax questions are often settled years later by paperwork: a residency certificate, the statement showing what a fund was worth on the day you arrived, the final return in the country you left. A single archive organised by country and tax year means you can answer an authority's letter, or your adviser's question, in an afternoon rather than a month.

                ## Milestones
                1. A folder structure set up by country, then tax year, then document type.
                2. Passports, visas, residence permits and entry and exit records scanned in.
                3. Tax returns, assessments and residency certificates from the last six years filed.
                4. Statements showing investment values on each date you changed residency saved.
                5. A note recording where originals are kept and who else can find them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An archive organised by country and tax year holds six years of returns, residency papers and move-date statements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create folders by country, then tax year, then document type"
                - "Scan passports, visas and residence permits into the archive"
                - "File the last six years of returns and assessments from each country"
                - "Save the statements showing investment values on each date you moved"
                - "File the year's returns, certificates and statements in the archive @recurring(yearly)"
            - name: Emergency fund in your spending currency
              description: |-
                ## Purpose
                An emergency fund held in the wrong currency, or in a country you cannot easily reach, can lose a tenth of its value in a bad exchange rate month just when you need it. Keeping three to six months of spending in the currency you actually pay bills in, at a bank you can access from where you live, removes one avoidable risk before you invest the rest.

                ## Milestones
                1. Monthly essential spending worked out in your local currency.
                2. A target of three to six months chosen and written down.
                3. The fund held in local currency at an institution you can reach from where you live.
                4. A smaller buffer noted for any costs you still pay in another country.

                ## Notes
                Check the deposit protection scheme that covers the bank you choose, and how it treats non-resident customers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three to six months of essential spending sits in your local currency at an accessible bank, with the target written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out a month of essential spending in your local currency"
                - "Choose a target of three to six months and write it down"
                - "Check the deposit protection that covers your chosen bank"
                - "Move the fund into local currency at a bank you can reach"
                - "Check the fund still covers your target number of months @recurring(yearly)"
            - name: Travel day log for residency tests
              description: |-
                ## Purpose
                Days in a country are the backbone of most residency tests, and reconstructing them from boarding passes and passport stamps at the end of a year is slow and unreliable. A running log of where you slept each night, brought up to date monthly, gives you and your adviser evidence that holds up if an authority asks.

                ## Milestones
                1. A log with date, country, reason for travel and supporting evidence columns.
                2. The current tax year filled in from calendars, bookings and stamps.
                3. Day counts per country totalled each month.
                4. A warning threshold set for any country where you are near a test limit.

                ## Notes
                Some countries count part days or days in transit differently. Ask your adviser how each one counts before relying on your totals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A day log covering the full tax year, with monthly totals per country, is ready to hand to your adviser."
                cadence: rolling
              tasks:
                - "Set up a log with date, country, reason and evidence columns"
                - "Fill in this tax year from your calendar, bookings and stamps"
                - "Ask your adviser how each country counts arrival and departure days"
                - "Update the day log and monthly totals per country @recurring(monthly:3)"
            - name: Dual tax-year calendar
              description: |-
                ## Purpose
                Countries run different tax years, one ending in April, another in December, a third in June, so filing deadlines, allowance resets and payment dates for two systems rarely line up. One calendar holding every deadline for both countries prevents the commonest expat penalty: a return or payment simply forgotten because it sat outside the rhythm you grew up with.

                ## Milestones
                1. The start and end of the tax year in each country recorded.
                2. Every filing, payment on account and reporting deadline for both countries added.
                3. Reminders set a month before each deadline.
                4. Your adviser's own document deadlines included.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every filing and payment deadline for both countries appears in one calendar with a reminder a month before each."
                cadence: cyclic
              tasks:
                - "Write down when the tax year starts and ends in each country"
                - "Add every filing, payment and reporting deadline for both countries"
                - "Set a reminder one month before each deadline"
                - "Confirm next year's deadlines for both countries with your adviser @recurring(yearly)"
                - "Send your adviser the documents needed for both returns @recurring(yearly)"
            - name: Foreign account and asset reporting routine
              description: |-
                ## Purpose
                Many countries require residents, and some require citizens, to declare accounts, investments or property held abroad above a threshold, often on a separate form from the tax return and with penalties that dwarf any tax due. Knowing which declarations apply to you and which accounts fall in, then filing them on a fixed annual routine, keeps a paperwork slip from turning into a fine.

                ## Milestones
                1. Every foreign asset declaration that applies to you identified with your adviser.
                2. The thresholds, and the accounts that fall within each declaration, listed.
                3. The highest balance in each account during the year collected, where the form asks for it.
                4. Each declaration filed for the current year with a copy in the archive.

                ## Notes
                Thresholds often count the combined total of all foreign accounts, so several small accounts can trigger a filing together.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every foreign account and asset declaration that applies is filed on time for the year, with copies archived."
                cadence: cyclic
              tasks:
                - "Ask your adviser which foreign asset declarations apply to you"
                - "List the accounts that count towards each declaration's threshold"
                - "Collect the highest yearly balance for each account the form needs"
                - "File the foreign account and asset declarations for the year @recurring(yearly)"
            - name: Monthly transfer between countries
              description: |-
                ## Purpose
                Regular payments across borders, such as funding an investment account at home, paying a mortgage left behind or sending money to family, can lose 2 to 4 percent each time through poor exchange rates and hidden margins. Setting one monthly routine through a chosen provider, on a fixed day and for a fixed amount, makes the cost visible and keeps contributions going without thought.

                ## Milestones
                1. Every regular cross-border payment listed with amount, currency and purpose.
                2. One provider set up for these transfers after comparing costs.
                3. A fixed monthly transfer day and amount agreed.
                4. The rate and total cost of each transfer recorded for a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Regular cross-border payments run monthly through one chosen provider, with three months of rates and costs recorded."
                cadence: rolling
              tasks:
                - "List every regular payment you send across borders"
                - "Pick a fixed day each month for the transfers"
                - "Make the monthly transfer and note the rate and fee @recurring(monthly:20)"
                - "Compare three months of costs with the mid-market rate for the same days"
            - name: Quarterly currency exposure check
              description: |-
                ## Purpose
                Holdings drift between currencies as markets move and new savings arrive, and an expat can find most of their wealth in a currency they will never spend. A short quarterly check of how much you hold in each currency against your planned spending split shows when the mismatch has grown large enough to act on.

                ## Milestones
                1. Holdings grouped by the currency of their underlying assets, not just the account currency.
                2. The current split compared with your planned spending split.
                3. A tolerance band written down, such as ten percentage points either way.
                4. Four quarterly checks recorded in a year.

                ## Notes
                Start from the **Metrics log** template. A fund priced in one currency can hold assets in many; look at the fund's own currency breakdown.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly records show your wealth split by currency against your planned spending split and tolerance band."
                cadence: rolling
              tasks:
                - "Group your holdings by the currency of the assets inside them"
                - "Write down the tolerance band that would make you act"
                - "Record the currency split against your target in the log @recurring(quarterly)"
            - name: Exchange rate log for cost basis
              description: |-
                ## Purpose
                When you sell an investment, the country taxing the gain usually wants the cost and the sale price in its own currency on the dates of each, and some count the currency movement itself as part of the gain. Recording the rate on the date of every purchase, sale and transfer as it happens saves hunting for historic rates later and keeps the numbers consistent across both returns.

                ## Milestones
                1. A log with date, transaction, amount, currency and official rate columns.
                2. The rate source each tax authority accepts identified.
                3. Every purchase, sale and large transfer for the year recorded with its rate.
                4. The log handed to your adviser with the year's statements.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every purchase, sale and large transfer for the year has its date and accepted exchange rate recorded in one log."
                cadence: rolling
              tasks:
                - "Ask your adviser which exchange rate source each authority accepts"
                - "Set up a log with date, amount, currency and rate columns"
                - "Enter the month's trades and transfers with their rates @recurring(monthly:28)"
                - "Send the year's log to your adviser with your statements"
            - name: Withholding tax and foreign tax credit records
              description: |-
                ## Purpose
                Dividends and interest paid across borders often have tax taken at source, sometimes at a higher rate than the treaty allows, and the credit for it is only claimed if someone keeps the paper trail. An annual record of income, tax withheld and the treaty rate shows what to claim as a credit and where a reclaim might be worth the trouble.

                ## Milestones
                1. Every account paying foreign dividends or interest listed.
                2. Tax withheld at source collected from annual tax certificates.
                3. The withheld rate compared with the treaty rate for each source.
                4. Credits claimed on your return and any reclaim decision recorded.

                ## Notes
                Reclaims from some countries take months and several forms. Weigh the amount against the effort before starting one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly record shows foreign income, tax withheld and the treaty rate for each source, with credits claimed and reclaims decided."
                cadence: cyclic
              tasks:
                - "List every account that pays you foreign dividends or interest"
                - "Download the annual tax certificates showing tax withheld @recurring(yearly)"
                - "Compare each withheld rate with the treaty rate"
                - "Decide whether any over-withheld amount is worth reclaiming"
            - name: Residency certificate and treaty relief forms
              description: |-
                ## Purpose
                Paying the reduced treaty rate on dividends, or getting exemption on a foreign pension, often depends on a certificate of tax residence or a form lodged with the paying institution, and many of these expire after one to three years. A yearly round to renew them keeps pension and investment income from being taxed at the full default rate.

                ## Milestones
                1. Every payer that needs proof of residency or a treaty form listed.
                2. Expiry dates for each certificate or form recorded.
                3. Current forms lodged with each payer.
                4. Renewal dates added to the dual tax-year calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payer holds a current residency certificate or treaty form, with expiry dates in your calendar."
                cadence: cyclic
              tasks:
                - "List each pension and investment payer that needs proof of residency"
                - "Request a certificate of tax residence from the tax authority"
                - "Send current treaty forms to every payer and keep copies"
                - "Renew residency certificates and treaty forms before they lapse @recurring(yearly)"
            - name: Address and identity checks with providers abroad
              description: |-
                ## Purpose
                Banks and platforms must keep customer identity and address records current, and an expat who misses a review letter sent to an old address can find an account frozen. Keeping each provider's record of you up to date, and answering identity reviews promptly, protects access to money you rarely log in to.

                ## Milestones
                1. The address, phone, email and tax residency each provider holds checked.
                2. Every out-of-date detail corrected with the provider.
                3. A forwarding or mail-scanning arrangement set up for paper post in your old country.
                4. Identity review requests answered within their deadline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every provider holds your current address, contact details and tax residency, with no unanswered identity review."
                cadence: rolling
              tasks:
                - "Log in to each provider and check the address and tax residency held"
                - "Correct any out-of-date details with each provider"
                - "Set up mail forwarding or scanning in the country you left"
                - "Confirm contact and tax residency details with every provider @recurring(yearly)"
            - name: Combined holdings statement across countries
              description: |-
                ## Purpose
                Separate statements in separate currencies from separate countries make it almost impossible to answer simple questions such as how much you own or how much is in shares. A quarterly one-page statement combining every holding in your base currency gives you, your partner and your adviser the same picture to make decisions from.

                ## Milestones
                1. A template listing every holding with country, currency, asset type and value.
                2. Values converted into your base currency at one dated rate.
                3. Totals by asset type and by country shown.
                4. Four quarterly statements saved in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four quarterly one-page statements combine every holding in your base currency with totals by asset type and country."
                cadence: rolling
              tasks:
                - "Build a one-page template with country, currency, asset type and value"
                - "Pick one official rate source for converting values"
                - "Ask the agent to combine the quarter's statements into the one-page format @recurring(quarterly)"
                - "Share the statement with your partner or adviser"
            - name: How your new country taxes foreign funds
              description: |-
                ## Purpose
                Funds that are ordinary and tax-efficient at home can be punished abroad: some countries tax gains on non-local funds as income, tax unrealised growth each year, or demand annual reporting the fund manager does not provide. Learning these rules in your country of residence before buying anything prevents a portfolio that looks fine on paper and costs you at every tax return.

                ## Milestones
                1. The rules on foreign or non-reporting funds in your country of residence summarised.
                2. Each fund you hold checked for its status under those rules.
                3. A list of fund types that work well locally and those to avoid.
                4. Questions on any doubtful holding answered by your adviser.

                ## Notes
                Fund status lists are often published by the tax authority or the fund manager. Check the share class, not just the fund name.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of how your country of residence taxes foreign funds exists, with every current holding marked as suitable or to review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the tax authority's guidance on foreign or offshore funds"
                - "Check each fund you hold against the reporting or approved fund lists"
                - "Write a list of fund types that suit your country and those to avoid"
                - "Bring doubtful holdings to your adviser with the fund documents"
            - name: Cross-border dividend and interest withholding
              description: |-
                ## Purpose
                Withholding tax depends on where the company is based, where the fund is domiciled, where the account is held and where you live, and the layers can quietly cost a dividend investor a percentage point a year. Understanding the chain, and which layers a treaty can or cannot recover, helps you judge funds on their after-tax yield rather than the headline.

                ## Milestones
                1. The withholding layers for a typical holding traced: underlying company, fund and payer.
                2. The difference between recoverable and unrecoverable withholding understood.
                3. Your three largest income-producing holdings costed on an after-tax basis.
                4. Findings noted where they would change a future fund choice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your three largest income-producing holdings have their withholding layers traced and an after-tax yield worked out."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how fund domicile affects tax withheld on dividends"
                - "Trace the withholding layers for your largest income holding"
                - "Work out after-tax yield for your three biggest income holdings"
                - "Note any holding where domicile would change the choice next time"
            - name: Currency risk for long-horizon investors
              description: |-
                ## Purpose
                Exchange rates can move 20 or 30 percent over a few years, which matters a great deal for cash and bonds but tends to matter less for global shares held over decades. Learning how currency risk behaves in each asset class, and when hedged share classes are typically used, lets you decide on purpose rather than react to one year's statement.

                ## Milestones
                1. The difference between currency risk on shares, bonds and cash understood and written down.
                2. How hedged fund share classes work, and what they cost, summarised.
                3. Your own exposure compared with your base currency spending plan.
                4. A written view on where, if anywhere, you would consider hedged versions.

                ## Notes
                This is about understanding the trade-offs. Any decision on hedging belongs in your investment policy and, if you use one, with your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains currency risk by asset class and records where you would and would not consider hedged funds."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introduction to currency risk in shares, bonds and cash"
                - "Compare the costs of a hedged and unhedged share class of one fund"
                - "Write down which holdings carry currency risk against your spending currency"
                - "Record where you would consider hedging and why"
            - name: How foreign pensions are taxed where you live
              description: |-
                ## Purpose
                A pension built in one country and drawn in another can be taxed by either, both or, through mismatched rules, neither, and lump sums that are tax-free at home are sometimes fully taxable abroad. Understanding how your country of residence treats each pension you left behind, before you draw from it, avoids an irreversible withdrawal taxed in the worst way.

                ## Milestones
                1. Each foreign pension listed by type: state, workplace or private.
                2. How your country of residence taxes income and lump sums from each type summarised.
                3. The treaty article on pensions checked for which country has taxing rights.
                4. Points needing professional confirmation listed and asked.

                ## Notes
                Take no lump sum or transfer from a foreign pension until your adviser has confirmed the tax treatment in both countries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each foreign pension has its tax treatment where you live summarised and confirmed by your adviser before any withdrawal."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each pension you hold abroad by type"
                - "Look up how your country of residence taxes foreign pension income"
                - "Check the treaty pension article for which country can tax each one"
                - "Ask your adviser to confirm the treatment of any lump sum"
            - name: Remittance and foreign income rules
              description: |-
                ## Purpose
                Some countries tax new residents only on foreign income and gains they bring into the country, or exempt foreign income for a set number of years, but the rules on what counts as bringing money in are strict and easy to break with a single card payment. Learning exactly how your country's scheme works, if it has one, decides how you set up accounts from day one.

                ## Milestones
                1. Whether your country of residence has a remittance, foreign income or new resident scheme confirmed.
                2. The conditions, time limits and any claim deadline written down.
                3. What counts as bringing money in summarised, including card payments and gifts.
                4. An account structure agreed with your adviser if you claim the scheme.

                ## Notes
                Mixing clean capital with foreign income in one account is the classic mistake. Ask your adviser how to keep them separate before any money moves.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your eligibility for any foreign income or remittance scheme is recorded, with its conditions and an agreed account set-up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your new country has a foreign income or new resident scheme"
                - "Write down its conditions, time limit and claim deadline"
                - "List the actions that count as bringing foreign money in"
                - "Agree an account set-up with your adviser before moving any money"
            - name: Exit taxes and deemed disposal rules
              description: |-
                ## Purpose
                Leaving a country can itself be a tax event: some countries treat departing residents as if they sold their investments on the day they left, and some tax certain funds every few years as if sold. Knowing whether any such rule touches you, and roughly what it is worth, lets you plan the move date and holdings rather than discover a bill afterwards.

                ## Milestones
                1. Whether the country you live in has an exit or departure tax confirmed.
                2. Any periodic deemed disposal rule on funds identified.
                3. An estimate of the amount at stake prepared with your adviser.
                4. Timing or holding changes that would reduce it listed for decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Exit and deemed disposal rules affecting you are confirmed, with an estimated amount and options listed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find out whether your country taxes residents when they leave"
                - "Check whether any of your funds face periodic deemed disposal"
                - "Ask your adviser to estimate the amount at stake"
                - "List timing or holding changes that would change the bill"
            - name: Social security coverage while working abroad
              description: |-
                ## Purpose
                Working in another country normally means paying into its social security system, but agreements between some countries let a posted worker stay in the home system for a period, and contributions in one country can sometimes count towards a pension in another. Knowing which system you are in, and holding the certificate that proves it, protects future pension rights in both places.

                ## Milestones
                1. The social security agreement, if any, between your countries found.
                2. Which country's system you contribute to confirmed with your employer or the authority.
                3. A certificate of coverage obtained where an agreement applies.
                4. Contribution records from each country saved.

                ## Notes
                Forecasting and claiming a state pension is its own job; this project is only about not leaving gaps while you work across borders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your social security system is confirmed, with a certificate of coverage where an agreement applies and contribution records saved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your two countries have a social security agreement"
                - "Ask your employer which system you are paying into"
                - "Apply for a certificate of coverage if an agreement applies"
                - "Save the contribution record from each country in your archive"
            - name: Deciding the future of a pension left behind
              description: |-
                ## Purpose
                Pensions from a previous country can usually stay put, sometimes move to a scheme in your new country or an overseas scheme recognised by the old country's tax authority, or be drawn from abroad later. Transfers can carry heavy tax charges, lost guarantees and high fees from firms that specialise in selling them, so the choice deserves a written comparison rather than a cold call.

                ## Milestones
                1. Each provider's rules on transfers abroad and paying non-resident members confirmed.
                2. Options compared: leave, transfer to the new country, or a recognised overseas scheme.
                3. Charges, guarantees, tax and currency for each option set side by side.
                4. Regulated advice taken where the rules require it, and a decision recorded.

                ## Notes
                Be wary of anyone who contacts you unprompted about moving a pension abroad. Check the receiving scheme's recognised status with the tax authority yourself.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of keeping or transferring each pension left behind is complete and a decision is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each provider about transfers abroad and paying non-resident members"
                - "List the leave, transfer and overseas scheme options for each pension"
                - "Set charges, guarantees, tax and currency side by side for each option"
                - "Check any receiving scheme's recognised status with the tax authority"
                - "Record the decision for each pension and why"
            - name: Where to hold investments after the move
              description: |-
                ## Purpose
                After a move you can usually keep a home-country platform, open one in your new country, or use an international platform aimed at expats, and each choice changes costs, tax reporting and what you can buy. Comparing them against the same few criteria leads to a deliberate set-up instead of whatever happened to stay open.

                ## Milestones
                1. Criteria agreed: residency acceptance, cost, tax reporting, funds available, deposit protection.
                2. At least one platform of each type scored against them.
                3. A main platform chosen for new money.
                4. A plan for existing holdings, kept or moved, written down.

                ## Notes
                Start from the **Purchase decision** template. Moving holdings can mean selling them, so ask whether an in-specie transfer is possible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main platform for new investments is chosen from a scored comparison of home, local and international options."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the five criteria your platform must meet"
                - "Score one home, one local and one international platform"
                - "Ask whether existing holdings can transfer without being sold"
                - "Record the platform chosen for new money and the plan for old holdings"
            - name: Screening commission-paid expat investment products
              description: |-
                ## Purpose
                Expats are a well-known target for long-term savings plans and offshore bonds sold on commission, often with charges of several percent a year and penalties for leaving in the first ten years. A written screen for any product you are offered, or already hold, makes the true cost and the exit penalty visible before you sign or decide to stay in.

                ## Milestones
                1. Every savings plan, bond or policy you hold or are offered listed.
                2. Annual charges, establishment charges and surrender penalties for each found in the documents.
                3. The seller's regulator and how they are paid confirmed.
                4. A keep, stop contributions, or surrender decision recorded for each product held.

                ## Notes
                Surrendering early can lock in a loss, while staying in can cost more over time. Get the numbers from the provider in writing and ask an adviser who is not paid from the product.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every expat savings plan or bond held or offered is screened for charges, penalties and seller regulation, with a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List any savings plan, offshore bond or policy you hold or are offered"
                - "Find the yearly, set-up and surrender charges in the documents"
                - "Ask the seller in writing how they are paid and who regulates them"
                - "Request a written surrender value for each plan you hold"
                - "Record keep, stop paying in, or surrender for each one"
            - name: Deciding what to do with the home left behind
              description: |-
                ## Purpose
                Keeping a former home when you move abroad can protect a route back and earn rent, but it brings non-resident landlord tax, a mortgage lender's consent, insurance changes and the gain rules of two countries. A clear comparison of letting, selling before you go and leaving it empty settles one of the biggest single assets in an expat's plan.

                ## Milestones
                1. The mortgage lender's terms for letting while you live abroad confirmed in writing.
                2. Tax on rent and on a later sale checked for both countries with your adviser.
                3. Net yearly figures for letting, selling and leaving empty set side by side.
                4. A decision recorded, with the date it will next be reviewed.

                ## Notes
                Running a let is a separate job; this project settles the decision before you leave. Insurers often limit cover on homes left empty beyond a set number of days.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision to let, sell or leave the former home empty is recorded with lender, tax and insurance positions confirmed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your mortgage lender in writing about letting while you live abroad"
                - "Ask your adviser how each country taxes rent and a later sale"
                - "Check how long your insurer allows the home to stand empty"
                - "Compare net figures for letting, selling and leaving it empty"
            - name: Choosing a currency transfer provider
              description: |-
                ## Purpose
                Banks often add a margin of 2 to 4 percent to the exchange rate on international transfers, while specialist providers typically charge well under one percent for the same move. Comparing a few regulated providers on the real all-in cost of a typical transfer, and on how they safeguard customer money, can save hundreds a year on regular transfers alone.

                ## Milestones
                1. A typical transfer amount and currency pair chosen for comparison.
                2. Three regulated providers and your bank quoted for the same amount on the same day.
                3. Each provider's safeguarding arrangements and limits checked.
                4. One provider chosen and an account verified.

                ## Notes
                Start from the **Purchase decision** template. Compare the amount received, not the advertised fee.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A transfer provider is chosen from same-day quotes from three regulated providers and your bank, compared on amount received."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a typical transfer amount and currency pair to compare"
                - "Get same-day quotes from three providers and your bank"
                - "Check each provider's regulator and how it safeguards client money"
                - "Open and verify an account with the provider you choose"
            - name: Using local tax wrappers on a temporary stay
              description: |-
                ## Purpose
                Your new country may offer its own tax-free or tax-deferred accounts, but money locked away until a set age, or wrappers that lose their benefit when you leave, may suit a five-year stay badly. Weighing each local wrapper against your expected time in the country, and what happens to it if you go, tells you which are worth opening.

                ## Milestones
                1. Your expected length of stay written down, with a likely range.
                2. Each local tax-advantaged account listed with its lock-in and what happens on leaving.
                3. How your home country, or next country, would treat each wrapper checked.
                4. A decision recorded for each: use, use partly, or skip.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each local tax-advantaged account is assessed against your expected stay and a use or skip decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how long you expect to stay, with a likely range"
                - "List each local tax-advantaged account and its lock-in rules"
                - "Ask what happens to each account if you leave the country"
                - "Record a use, part use or skip decision for each account"
            - name: Home-country wrappers that stop sheltering abroad
              description: |-
                ## Purpose
                Tax-free accounts at home, such as savings wrappers or education accounts, often give no shelter at all in a new country of residence, which may tax their income and gains in full, and the home provider may block new contributions. Checking each one and deciding whether to keep, freeze or unwind it stops you paying wrapper fees for a benefit you no longer get.

                ## Milestones
                1. Every home-country tax-advantaged account listed.
                2. Each provider's rules on contributions while non-resident confirmed.
                3. How your country of residence taxes each account's income and gains checked with your adviser.
                4. A keep, freeze or unwind decision recorded for each, with timing.

                ## Notes
                Unwinding in a hurry can lose a shelter that cannot be rebuilt if you return. Count the value of keeping it for a possible move home.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every home-country wrapper has its non-resident rules and local tax treatment checked, with a keep, freeze or unwind decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every tax-advantaged account you hold in your home country"
                - "Ask each provider whether you can still contribute as a non-resident"
                - "Ask your adviser how your new country taxes each account"
                - "Record a keep, freeze or unwind decision with timing for each"
            - name: Multi-currency cash and account structure
              description: |-
                ## Purpose
                Expats often collect a current account in each country, a savings account they forgot and a card for every trip, each in a different currency. A deliberate structure, with one account per job such as income, spending, transfers and investing, makes money easier to follow, cheaper to move and simpler to report.

                ## Milestones
                1. Every cash account listed with currency, country and purpose.
                2. A target structure drawn up with one purpose per account.
                3. Redundant accounts closed after checking for reporting or residency links.
                4. Salary, bills and investment contributions routed to match the structure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cash accounts are reduced to a written structure with one purpose each, and redundant accounts are closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cash account with its currency, country and purpose"
                - "Sketch the account structure you want, one purpose per account"
                - "Close the accounts you no longer need"
                - "Redirect salary, bills and investing to match the new structure"
            - name: Financial checklist before moving abroad
              description: |-
                ## Purpose
                The months before a move are the cheapest time to fix cross-border problems: accounts can still be changed as a resident, platform terms checked, gains possibly realised under familiar rules and paperwork gathered while you have a local address. A dated checklist worked through in the last eight to twelve weeks avoids the frozen account and missing statement that trouble so many first years abroad.

                ## Milestones
                1. A checklist covering accounts, pensions, property, tax, insurance and documents drafted.
                2. Statements showing every investment's value on or near the departure date requested.
                3. Providers told of the move or scheduled to be told, with access tested from abroad.
                4. The last tax return and departure notice for the country you leave scheduled.

                ## Notes
                Start from the **Operational checklist** template. Opening accounts in your new country is often easier once you have a local address, so note which steps belong after arrival.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on a pre-move checklist is ticked off or dated before departure, including value statements and provider notifications."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a pre-move checklist from the operational checklist template"
                - "Request statements showing every investment value at departure"
                - "Tell each provider about the move or note when you will"
                - "Test logging in to every account over a foreign connection"
                - "Book a meeting with your adviser before the departure date"
            - name: First 90 days of investing in a new country
              description: |-
                ## Purpose
                Three months after arrival decide a lot: whether you register correctly with the tax authority, whether you claim a new resident scheme in time, and whether savings sit idle in the wrong currency. A short plan for those 90 days keeps regular investing going without making any irreversible move before you understand the local rules.

                ## Milestones
                1. Registration with the local tax authority and any tax number completed.
                2. Any new resident scheme claim deadline confirmed and in the calendar.
                3. A local bank account open and salary arriving in it.
                4. Regular investing restarted through the chosen platform, or a written reason to wait.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 90 days of arrival you are registered for tax locally, any scheme deadline is in the calendar and investing has resumed or is paused on purpose."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Register with the local tax authority and get your tax number"
                - "Put the deadline for any new resident tax scheme in your calendar"
                - "Open a local bank account and route your salary to it"
                - "Restart monthly investing or write down why you are waiting"
            - name: Split-year tax return for the year you arrive
              description: |-
                ## Purpose
                Filing for the year you move is usually the hardest tax job an expat ever does: two countries, part-year residency, income earned in both and possibly a split-year or arrival rule in one of them. Preparing the facts early, with move dates, income by country and foreign tax paid, keeps the first return accurate and sets the pattern for every year after.

                ## Milestones
                1. Exact move dates and the residency status for each part of the year confirmed.
                2. Income, gains and tax paid split by country and by period.
                3. Both countries' returns for the move year filed.
                4. Any double taxation relief claimed, with workings saved.

                ## Notes
                Ask your adviser whether either country offers a split-year treatment you must claim, rather than one applied automatically.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Returns for the move year are filed in both countries, with income split by period and relief for foreign tax claimed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down exact departure and arrival dates"
                - "Split income, gains and tax paid by country and period"
                - "Ask your adviser whether a split-year treatment must be claimed"
                - "File the move-year return in each country and save the workings"
            - name: Moving back home after years abroad
              description: |-
                ## Purpose
                Returning home reverses every step of leaving, and it is the move most expats plan least: investments bought abroad may be taxed badly at home, foreign pensions need new paperwork and the timing of the return can change the tax on gains. Planning the return a year ahead gives time to sell, keep or restructure holdings under the rules that suit each one.

                ## Milestones
                1. A target return date, and the tax year it falls in, agreed.
                2. Every holding abroad checked for how it will be taxed once back home.
                3. Holdings to sell before returning, sell after returning or keep listed.
                4. Re-registration with home platforms, banks and the tax authority planned.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A return plan lists every holding with its tax treatment at home and a sell, keep or restructure decision with timing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a target return date and note its tax year"
                - "Ask your adviser how each foreign holding will be taxed at home"
                - "Decide which holdings to sell before, sell after or keep"
                - "List the platforms and banks to re-register with once home"
            - name: Large one-off cross-border transfer
              description: |-
                ## Purpose
                Moving a large sum, such as a house deposit, business sale proceeds or an inheritance, across currencies exposes you to exchange rate swings, transfer limits and anti-money-laundering checks that can hold funds for days. Planning the transfer with source-of-funds paperwork ready, a chosen provider and a view on splitting it into tranches avoids a deposit that arrives short or late.

                ## Milestones
                1. The amount, currencies and the date the money must arrive written down.
                2. Source of funds documents gathered for the sending and receiving institutions.
                3. Provider chosen and transfer limits confirmed, with any forward contract considered.
                4. Funds received and the rate achieved recorded for tax records.

                ## Notes
                Forward contracts can fix a rate for a future date but usually need a deposit and cannot be cancelled freely. Understand the terms before agreeing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A large transfer arrives in full by its deadline, with source of funds documents accepted and the rate recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the amount, currencies and the date money must land"
                - "Gather source of funds documents for both institutions"
                - "Confirm the provider's limits and how long its checks take"
                - "Record the rate achieved in your exchange rate log"
            - name: Final return and deregistration in the country you leave
              description: |-
                ## Purpose
                Leaving a country for tax purposes usually means telling the authority, filing a final or part-year return and sometimes settling tax on departure, and skipping it can leave you treated as resident for years. A dated plan for the formal exit closes the old system cleanly and gives you a document proving when residency ended.

                ## Milestones
                1. The authority's departure notification process found and completed.
                2. The final or part-year return filed.
                3. Any departure tax or outstanding balance settled.
                4. Written confirmation of the end of residency saved in the archive.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The departure is notified, the final return filed, any balance paid and confirmation of non-residency archived."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the tax authority's process for notifying departure"
                - "Submit the departure notification with your leaving date"
                - "File the final part-year return with your adviser"
                - "Save the authority's confirmation that residency has ended"
            - name: Fixed-term international assignment package
              description: |-
                ## Purpose
                An employer posting of two to five years often comes with a package: housing, tax equalisation, home leave and a pension arrangement that may differ from home. Understanding what the package covers, and what it leaves to you, lets you invest the extra pay sensibly and avoid a gap in pension saving while abroad.

                ## Milestones
                1. The assignment letter's tax, pension and benefit terms summarised.
                2. How tax equalisation or protection works for you confirmed with HR.
                3. Pension saving during the assignment checked against your normal level.
                4. A plan for investing allowances or extra pay recorded.

                ## Notes
                Tax equalisation usually means the employer settles the host country's tax and deducts a notional home tax from you. Ask what happens to investment income, which is often excluded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The assignment terms are summarised, pension saving is matched to your normal level and a plan for the extra pay is written."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the tax, pension and benefit terms of your assignment letter"
                - "Ask HR how tax equalisation treats your investment income"
                - "Check pension saving during the posting against your usual level"
                - "Decide where any extra pay or allowances will be invested"
            - name: Retiring abroad on income from another currency
              description: |-
                ## Purpose
                Retiring to a different country means income from pensions and investments in one currency paying bills in another, often taxed under the new country's rules and a treaty. Planning the income in the currency you will spend, and how much exchange rate movement your budget can absorb, protects a retirement that cannot easily be repaired by working longer.

                ## Milestones
                1. Retirement spending estimated in the destination currency.
                2. Each income source listed with its currency, tax treatment and payment method.
                3. The budget tested against a 20 percent fall in the exchange rate.
                4. A plan for paying pensions into an account in the destination country agreed.

                ## Notes
                Some state pensions paid abroad are not increased each year in certain countries. Check with the paying authority before deciding where to live.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A retirement income plan in the destination currency is written and stress-tested against a 20 percent exchange rate fall."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate yearly retirement spending in the destination currency"
                - "List each income source with its currency and tax treatment"
                - "Test the budget against a 20 percent exchange rate fall"
                - "Ask each pension payer how they pay members living abroad"
            - name: Mixed-nationality couple investing together
              description: |-
                ## Purpose
                When partners hold different citizenships or residencies, one may face reporting duties or fund restrictions the other does not, and joint accounts can pull the stricter rules over both. Deciding which accounts are joint, which are individual and whose name new investments go into keeps the household within both sets of rules.

                ## Milestones
                1. Each partner's citizenships, residencies and reporting duties listed side by side.
                2. Investment types restricted for either partner identified.
                3. A rule agreed for which accounts are joint and which individual.
                4. Ownership of existing holdings checked against the rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written household rule sets which investments are held jointly or individually, based on both partners' reporting duties."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each partner's citizenships, residencies and reporting duties"
                - "Note any investment types either partner should avoid"
                - "Agree which accounts are joint and which are individual"
                - "Check who owns each joint holding and whether it still fits the rule @recurring(yearly)"
            - name: Children growing up between two countries
              description: |-
                ## Purpose
                Children of expats may hold one or two citizenships, live in a third country and study in a fourth, and accounts opened for them in one system can be taxed oddly or closed in another. Checking which countries can claim them for tax, and which account types work across all of them, stops a savings plan for a child becoming a filing headache when they reach adulthood.

                ## Milestones
                1. Each child's citizenships and likely countries of study listed.
                2. Account types for children checked for treatment in each relevant country.
                3. A preferred account type and owner agreed for each child.
                4. Notes on future filing duties the child may inherit written for them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each child has a chosen savings account type checked against every country that may tax or report on it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each child's citizenships and likely countries of study"
                - "Check how each country treats children's investment accounts"
                - "Choose an account type and owner for each child's savings"
                - "Write a note on reporting duties each child may face as an adult"
            - name: Location-independent worker without a clear tax home
              description: |-
                ## Purpose
                Remote workers who move every few months can end up resident nowhere on paper yet treated as resident somewhere by an authority that counts days differently, and many platforms and banks will not open an account without a clear tax residency. Settling on a defensible tax home, and building investments around it, is what makes long-term saving possible on the move.

                ## Milestones
                1. The last two years of locations and days summarised.
                2. Candidate tax homes compared with your adviser on ties and obligations.
                3. A tax home chosen and the steps to establish it taken.
                4. Investment accounts aligned with the chosen residency.

                ## Notes
                Being resident nowhere is rarely as clean as it sounds. Expect banks, platforms and pension providers to ask for proof of residency.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tax home is chosen with your adviser, the steps to establish it are taken and investment accounts match it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise where you spent each month of the last two years"
                - "Ask your adviser which countries could claim you as resident"
                - "Take the steps needed to establish the tax home you choose"
                - "Update every platform and bank with your new tax residency"
            - name: Cross-border commuter between two countries
              description: |-
                ## Purpose
                Living in one country and working in the next, whether daily or weekly, often means salary taxed where you work, investments taxed where you live and a pension in the employer's country. Mapping which country taxes what, and where each type of saving is best held, turns a confusing payslip and two returns into a routine.

                ## Milestones
                1. Which country taxes your salary, investments and pension contributions confirmed.
                2. Any special frontier worker rules between your countries checked.
                3. Pension saving through the employer compared with saving where you live.
                4. Each type of saving matched to a country and account.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note shows which country taxes your salary, investments and pension, with each type of saving placed in a country."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check which country taxes your salary and which your investments"
                - "Look up any frontier worker rules between your two countries"
                - "Compare saving in the employer's pension with saving where you live"
                - "Write down which country each type of saving will sit in"
            - name: Wills and succession rules across countries
              description: |-
                ## Purpose
                Assets in several countries can fall under different inheritance laws, including forced heirship rules that fix shares for children, and a will valid in one country may be slow or ineffective in another. Recording which law could apply to each asset, and having wills or choices of law drafted by lawyers in the relevant countries, spares a partner years of probate in a language they may not speak.

                ## Milestones
                1. Assets listed by country with the succession law that could apply to each.
                2. Lawyers in the relevant countries asked whether separate wills or a choice of law are needed.
                3. Wills drafted together so they do not revoke each other.
                4. Beneficiary nominations on foreign pensions and policies checked against the wills.

                ## Notes
                Several wills must be drafted together to avoid one cancelling another. This project prepares the questions; the lawyers draft the documents.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Assets in every country are covered by wills or choices of law drafted by lawyers there, with foreign nominations matching."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List assets by country and the inheritance law that might apply"
                - "Ask a lawyer in each country whether a separate will is needed"
                - "Have the wills drafted together so none revokes another"
                - "Check every foreign pension and policy nomination matches the wills"
                - "Review wills and foreign nominations after any move or birth @recurring(yearly)"
            - name: Realising gains before residency changes
              description: |-
                ## Purpose
                Tax on an investment gain depends heavily on where you are resident when you sell, so the same sale can cost nothing in one year and a meaningful sum in the next. With a move planned, listing gains and losses on every holding and asking your adviser about timing in both countries can be worth more than any fee saving, though anti-avoidance rules for short absences make professional input essential.

                ## Milestones
                1. Gains and losses on every taxable holding listed in both currencies.
                2. Each country's treatment of sales before and after the move date confirmed.
                3. Any rules taxing gains of people who return within a set period noted.
                4. A sale timing plan agreed with your adviser.

                ## Notes
                Some countries tax gains made during a short absence when you return. A move made solely to sell tax-free can backfire.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sale timing plan for every taxable holding is agreed with your adviser, with each country's rules around the move date noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the gain or loss on every taxable holding in both currencies"
                - "Ask your adviser how each country taxes sales before and after the move"
                - "Check rules that tax gains for people returning within a few years"
                - "Agree which sales to make before the move and which after"
            - name: Foreign currency mortgage risk review
              description: |-
                ## Purpose
                Borrowing in one currency against income in another, such as a mortgage at home repaid from a foreign salary, means a 15 percent currency move can raise repayments, or the debt measured in your income currency, by the same amount. Reviewing the mismatch, how much movement your budget can take and whether switching or overpaying would reduce it keeps a quiet risk from becoming a forced sale.

                ## Milestones
                1. Each loan listed with its currency and the currency of the income repaying it.
                2. Repayments recalculated at a 10 and a 20 percent weaker exchange rate.
                3. Lender options for switching currency or term checked.
                4. A decision recorded to accept, reduce or remove the mismatch.

                ## Notes
                Some lenders charge to switch currency or treat non-resident borrowers differently at renewal. Ask well before any fixed rate ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every loan with a currency mismatch has repayments stress-tested at a 20 percent weaker rate and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each loan with its currency and the currency you repay it from"
                - "Recalculate repayments at a 10 and a 20 percent weaker rate"
                - "Ask the lender about switching currency or terms at renewal"
                - "Record whether you accept, reduce or remove the mismatch"
            - name: Funds acceptable to two tax systems at once
              description: |-
                ## Purpose
                For expats with obligations in two countries, such as a citizenship that taxes worldwide income plus local residency, many standard funds are punished by one system or the other, leaving a narrow set that works in both. Building a short approved list of fund types and specific funds that pass both tests means every future purchase starts from something already checked.

                ## Milestones
                1. The fund rules of both countries summarised side by side.
                2. Fund types acceptable to both identified, such as individual bonds, local reporting funds or direct shares.
                3. A shortlist of specific funds or holdings checked against both rule sets.
                4. The list confirmed by your adviser and added to your investment notes.

                ## Notes
                Review the list with your adviser whenever either country changes its fund rules. It is a screen of what is allowed, not a recommendation of what to buy.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shortlist of funds that pass both countries' fund rules is confirmed by your adviser and kept with your investment notes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set the two countries' fund tax rules side by side"
                - "Identify the fund types that pass both sets of rules"
                - "Check a shortlist of specific funds against both"
                - "Ask your adviser to confirm the shortlist"
---

# Expat & Cross-Border Investing

This area is for anyone whose money now crosses a border: people who have moved abroad, are about to, are on a posting or plan to retire somewhere else. It starts with foundations (a map of every account by country, your tax residency, citizenship duties, platform access, base currency and the adviser who knows both systems), then the routines that keep two tax systems and several currencies in order, the rules worth learning, the decisions about pensions, homes and wrappers left behind, the moves themselves, the situations that change the picture, and finally specialist work on wills, gain timing, currency debt and funds that suit two countries at once.

What repeats is a monthly day log, transfer and exchange rate record, a quarterly currency check and combined statement, and a yearly round of foreign asset declarations, residency certificates, withholding records, provider details and deadlines for both tax years. The Meeting notes, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
