---
id: caribbean-diaspora.caribbean-tax-residency-pensions
name: Caribbean Tax Residency and Pensions
description: "Know where you are tax resident, use the treaty between your two countries, get every pension and social security payment to the right bank, and keep the records that prove it."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, caribbean-tax-residency-pensions, everyone, retiree, double-taxation, social-security, pensions-abroad, residence-test]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - risk-register
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Caribbean Tax Residency and Pensions
          description: "Understanding tax residency between the Caribbean and abroad: double taxation, pensions and social security paid overseas, and keeping records."
          projects:
            - name: Inventory of your tax ties in both countries
              description: |-
                ## Purpose
                Tax residency is decided by ties, not by passport: where your home is, where you work, where your spouse and children live, where your accounts and property sit and how many days you spend in each place. Writing every tie down on one page for each country is the starting point for every later decision in this area, and it is the first thing a cross-border adviser will ask to see.

                ## Milestones
                1. A one-page list of ties for each country covering homes, work, family, accounts, property, memberships and health cover.
                2. Days spent in each country over the last two tax years estimated from passports and travel records.
                3. Ties likely to change in the next two years, such as selling a house or a spouse moving, marked.
                4. The inventory dated and saved where your adviser can see it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated tie inventory for both countries, covering homes, family, work, accounts and estimated days, is saved for your adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every home you own or rent in each country, with addresses"
                - "Note where your spouse, partner and dependent children live"
                - "Estimate days in each country for the last two years from passport stamps"
                - "Mark the ties you expect to change in the next two years"
            - name: Taxpayer numbers for every country you deal with
              description: |-
                ## Purpose
                Pension providers, banks and tax offices on both sides want a taxpayer number before they pay you or file for you: a National Insurance number, a Social Security Number, a Social Insurance Number, a Jamaican TRN, a Trinidad and Tobago BIR file number or a Barbados TIN. Collecting them on one secure sheet, and applying for missing ones before you move, stops payments stalling for weeks.

                ## Milestones
                1. Every taxpayer and social security number you hold listed with its issuing country.
                2. Any number you need but lack identified, with the application route noted.
                3. Applications made for missing numbers and their reference numbers kept.
                4. The sheet stored securely, with a copy given to whoever helps with your returns.

                ## Notes
                Treat this sheet like a passport and never email the full numbers in plain text.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A secure sheet lists every taxpayer and social security number for both countries, with applications lodged for any that were missing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your existing taxpayer and social security numbers on old payslips"
                - "Check which numbers your home island needs from a new resident"
                - "Apply for any missing taxpayer number through the home tax authority"
                - "Store the number sheet in an encrypted document folder"
            - name: Travel day count log
              description: |-
                ## Purpose
                Almost every residence test counts days, and they count differently: some count any day you are present at midnight, some count part days, and many use a threshold somewhere around half the year. A running log built from boarding passes and passport stamps, updated monthly, is the evidence you need if a tax office ever asks where you were.

                ## Milestones
                1. A log with columns for date out, date in, country, purpose and running totals for each tax year.
                2. The last two tax years reconstructed from passports, boarding passes and bank statements.
                3. The counting rule each country uses written at the top of the log.
                4. Monthly updates kept for at least six months in a row.

                ## Notes
                Start from the **Metrics log** template. Keep airline emails or boarding passes as proof, because a log on its own is weaker evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A day count log covers the last two tax years and every month since, with each country's counting rule recorded at the top."
                cadence: rolling
              tasks:
                - "Create the day count log with country totals for each tax year"
                - "Reconstruct the last two years of travel from passports and airline emails"
                - "Write each country's day counting rule at the top of the log"
                - "Add the month's travel dates and country totals to the log @recurring(monthly:3)"
            - name: Residence test worked through for the country abroad
              description: |-
                ## Purpose
                The UK uses a statutory residence test of automatic tests and ties, Canada weighs residential ties, and the US taxes its citizens and green card holders wherever they live. Working through the published test for the country you live in or are leaving, with your own facts, shows whether you will still count as resident after the move and which ties weigh most.

                ## Milestones
                1. The tax authority's official guidance on residence found and saved.
                2. Your facts run through each step of the test, with the outcome noted.
                3. Ties that could keep you resident listed in order of weight.
                4. The provisional outcome confirmed or corrected by a qualified adviser.

                ## Notes
                Online residence calculators are a starting point. Treat the result as a question for your adviser, not a conclusion.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written residence test outcome for the country abroad, confirmed or corrected by a qualified adviser, is saved with the guidance used."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the tax authority's official residence guidance"
                - "Work through each step of the test using your tie inventory"
                - "List the ties that could keep you resident after the move"
                - "Book time with an adviser to confirm the provisional outcome"
            - name: Residence and income tax scope on your home island
              description: |-
                ## Purpose
                Caribbean tax laws use their own terms: resident, ordinarily resident and domiciled can each lead to a different result, and some islands tax residents on worldwide income while others tax foreign income only when it is brought onto the island. Finding out how your island treats a returning national tells you whether pensions from abroad will be taxed at home, and how.

                ## Milestones
                1. The home tax authority's guidance on residence and the scope of income tax found.
                2. Whether the island taxes worldwide income or only income brought in noted.
                3. Any special treatment of foreign pensions or returning nationals written down.
                4. Open questions listed and sent to a local accountant or the tax office.

                ## Notes
                Rules differ widely between Trinidad and Tobago, Jamaica, Barbados, Guyana, the Bahamas and the OECS islands, and they change. Use the current law, not what a cousin was told years ago.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note on how your home island decides residence and taxes foreign income and pensions, with open questions sent to a local professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the residence guidance on the home island's tax authority website"
                - "Note whether foreign income is taxed when earned or only when brought in"
                - "Look for any exemption or relief on foreign pensions"
                - "Email your open questions to the tax office or a local accountant"
            - name: Double tax treaty check between your two countries
              description: |-
                ## Purpose
                A double taxation agreement decides which country may tax each kind of income, and private pensions, government pensions and social security often sit in separate articles with different answers. Some Caribbean countries have treaties with the UK, US or Canada and some do not, while CARICOM members also have a regional agreement among themselves. Knowing whether a treaty covers you, and what its pension articles say, is the base of every pension decision here.

                ## Milestones
                1. Whether a treaty exists between your two countries confirmed from an official treaty list.
                2. The full treaty text saved, with the pension, government service and social security articles marked.
                3. A plain summary of which country taxes each of your income types written.
                4. The summary checked by an adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Treaty status between your two countries is confirmed, the text saved and a summary of its pension articles checked by an adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the official treaty list on the tax authority site of the country abroad"
                - "Save the full treaty text and mark the pension articles"
                - "Ask the agent to draft a plain summary of the pension articles for your adviser"
                - "Note any income type the treaty does not mention"
            - name: Cross-border tax adviser shortlist and engagement
              description: |-
                ## Purpose
                Few accountants know both the system you are leaving and the one you are joining, and a mistake in the year of the move can take years to unwind. Finding an adviser with real two-country experience, or a pair of advisers on each side who will talk to each other, is worth more than any online calculator.

                ## Milestones
                1. Three advisers or firms shortlisted who state experience with your two countries.
                2. Each asked the same five questions about experience, fees and who files where.
                3. One adviser, or a pair, engaged with a written scope and fee.
                4. Notes from the first meeting saved with the engagement letter.

                ## Notes
                Start from the **Meeting notes** template. Ask professional bodies for members who work cross-border, and be wary of anyone who sells pension transfers as well as giving tax advice.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adviser or pair of advisers covering both countries is engaged with a written scope, chosen from a shortlist of three."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your professional body or diaspora association for cross-border adviser names"
                - "Send each shortlisted adviser the same five questions"
                - "Compare fees, experience and who files in which country"
                - "Sign an engagement letter with the adviser you choose"
            - name: Income map by source and country
              description: |-
                ## Purpose
                Each income stream has a source country, a payer, a tax treatment and often tax taken before you see it: a UK workplace pension, a US Social Security payment, Canadian rent, interest from a credit union in Kingston, a consulting fee in Bridgetown. One map of them all shows where double taxation could bite and what each country needs to be told.

                ## Milestones
                1. Every income stream listed with payer, source country, gross amount and currency.
                2. Tax deducted at source noted for each stream.
                3. Each stream marked with the country expected to tax it under the treaty.
                4. Streams with an unknown treatment flagged for your adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of every income stream shows payer, country, amount, tax deducted and expected taxing country, with unknowns flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every income stream from the last tax year with payer and country"
                - "Note the tax already deducted from each stream"
                - "Mark which country should tax each stream under the treaty"
                - "Flag streams with an unknown treatment for your adviser"
            - name: Pension and social security inventory
              description: |-
                ## Purpose
                Working lives that cross the water leave pensions scattered: national insurance contributions from early jobs at home, a state pension abroad, two or three workplace schemes and a personal plan. An inventory with scheme names, reference numbers, contacts and estimated values makes claiming, tracing and planning possible, for you and for whoever helps you later.

                ## Milestones
                1. Every state, workplace and private pension listed, including early contributions back home.
                2. Scheme reference numbers, contact details and latest statements gathered.
                3. Each pension's earliest payment age and estimated value noted.
                4. Pensions you cannot yet trace marked for follow-up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pension inventory lists every state, workplace, private and home-country scheme with reference numbers, payment ages and estimated values."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every employer you worked for in each country, with the years"
                - "Match each employer to a pension scheme and reference number"
                - "Request a current statement from every scheme you can identify"
                - "Mark the pensions you cannot trace for follow-up"
            - name: Tax and pension document vault
              description: |-
                ## Purpose
                Tax offices on both sides can look back several years, and pension claims ask for marriage certificates, old payslips and proof of contributions from decades ago. A single vault organised by country and year, with scans of returns, P60s, W-2s, T4s, NIS cards and residence letters, means nothing is lost in the move.

                ## Milestones
                1. A folder structure by country, then tax year, then document type.
                2. The last six years of returns and assessments for both countries scanned in.
                3. Birth and marriage certificates and old NIS cards scanned for pension claims.
                4. A backup kept outside the house and one trusted person told where it is.

                ## Notes
                Keep the original certificates. Scans help, but some pension offices still want originals or certified copies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A secure vault holds six years of returns for both countries and the identity and contribution papers pension claims need, with a backup."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create country and tax year folders in a secure cloud drive"
                - "Scan the last six years of returns and assessments"
                - "Scan birth and marriage certificates and old NIS cards"
                - "Add the year's returns and assessments to the vault @recurring(yearly)"
            - name: Monthly tax and pension paperwork hour
              description: |-
                ## Purpose
                Letters from two tax offices and several pension payers pile up fast, and a missed form from abroad can mean emergency tax or a suspended pension. One fixed hour a month to open, file and answer everything keeps both countries' paperwork small and stops anything reaching a final notice.

                ## Milestones
                1. A fixed monthly date for the paperwork hour in the calendar.
                2. One tray or folder for unopened tax and pension post.
                3. Every letter from the month filed in the vault and answered or diarised.
                4. Six sessions completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly paperwork sessions are recorded, with every tax and pension letter filed and answered or diarised."
                cadence: rolling
              tasks:
                - "Pick a monthly date for the paperwork hour and put it in the calendar"
                - "Set up one tray for tax and pension post"
                - "Open, file and answer the month's tax and pension letters @recurring(monthly:12)"
                - "Check messages in each online tax and pension account @recurring(monthly:22)"
            - name: Two-country tax filing calendar
              description: |-
                ## Purpose
                Tax years do not line up: the UK year ends on 5 April, the US and Canada use the calendar year, and many Caribbean islands use the calendar year with their own filing and payment dates. One calendar holding every filing, payment and form deadline for both countries, rebuilt each year, is how late penalties are avoided.

                ## Milestones
                1. Each country's tax year, filing deadline and payment dates in one calendar.
                2. Form deadlines added, such as foreign account reports or non-resident forms where they apply.
                3. Reminders set a month before each deadline.
                4. Which adviser files which return noted against each date.

                ## Notes
                Start from the **Operational checklist** template. Check dates on the official sites each year, because they move and holiday extensions differ.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A filing calendar covering both countries' returns, payments and forms is in use and was checked against official sources this year."
                cadence: cyclic
              tasks:
                - "Write both countries' tax years and filing deadlines into one calendar"
                - "Add a reminder one month before each deadline"
                - "Note which adviser files which return"
                - "Check every date against the official tax authority sites @recurring(yearly)"
            - name: Foreign tax credit and withholding record
              description: |-
                ## Purpose
                Relief from double taxation usually needs proof: the certificate showing tax withheld from a pension, the assessment from the other country and the exchange rate used. A running record of tax paid abroad, with documents attached, turns each year's credit claim into a copying job instead of a hunt.

                ## Milestones
                1. A record with columns for income, country, tax withheld, date, exchange rate and document reference.
                2. Last year's withholding certificates collected for every stream.
                3. Each entry converted using the exchange rate method your tax authority accepts.
                4. The record handed to your adviser with each year's return papers.

                ## Notes
                Authorities differ on whether they want the rate on the day, a monthly rate or a yearly average from a named source. Find out which, then use it every year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A withholding record with linked certificates covers every income stream for the last tax year and was given to your adviser."
                cadence: rolling
              tasks:
                - "Set up the withholding record with a row for each income stream"
                - "Request last year's withholding certificates from every payer"
                - "Find which exchange rate method each tax authority accepts"
                - "Add new withholding certificates to the record as they arrive @recurring(quarterly)"
            - name: Monthly pension payment check
              description: |-
                ## Purpose
                Pensions paid across borders can arrive short, late or not at all: a changed exchange rate, a new bank charge, an emergency tax code or a payment suspended after a missed form. Checking each payment against what you expected, the week it lands, catches problems while they are one month old instead of one year old.

                ## Milestones
                1. Expected gross, tax and net amounts listed for each pension.
                2. Each month's payments checked against the list within a week of arrival.
                3. Any shortfall or bank charge queried with the payer in writing.
                4. A year of payments recorded with the exchange rate on the day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of pension payments are checked against expected amounts, with every shortfall queried in writing."
                cadence: rolling
              tasks:
                - "List expected gross, tax and net amounts for each pension"
                - "Check each pension payment against its expected amount @recurring(monthly:8)"
                - "Write to the payer about any shortfall the same week"
                - "Note the exchange rate on each payment date"
            - name: Life certificates for pensions paid abroad
              description: |-
                ## Purpose
                Pension payers abroad periodically send a life certificate, sometimes called a proof of life form, that must be signed by an approved witness and returned by a deadline or the pension stops. Knowing who sends one, in which month, and who in your district can witness it keeps money arriving without the scramble of a suspended payment.

                ## Milestones
                1. Every pension that needs a life certificate listed with its usual month.
                2. Approved witnesses for each form identified near where you live.
                3. Each certificate returned by tracked post or online before its deadline.
                4. Copies of returned certificates filed in the vault.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every life certificate due this year was witnessed and returned before its deadline, with copies filed and no pension suspended."
                cadence: cyclic
              tasks:
                - "Ask each pension payer whether and when it sends life certificates"
                - "Find an approved witness, such as a justice of the peace, near home"
                - "Return each life certificate by tracked post before its deadline @recurring(yearly)"
                - "File a copy of each signed certificate in the vault"
            - name: Quarterly tax instalments where you owe them
              description: |-
                ## Purpose
                Pensions and rent paid without tax deducted can leave you owing instalments during the year: estimated tax in the US, instalments in Canada, or quarterly payments on some islands for income outside PAYE. Setting the amounts once with your adviser and paying on a fixed date each quarter avoids interest and a large bill at filing time.

                ## Milestones
                1. Whether you must pay instalments in each country confirmed with your adviser.
                2. Amounts and due dates for the year written into the filing calendar.
                3. Each instalment paid and its receipt filed.
                4. The amounts reviewed after any large change in income.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All four instalments for the year were paid by their due dates in each country where they are owed, with receipts filed."
                cadence: cyclic
              tasks:
                - "Ask your adviser whether you owe instalments in either country"
                - "Add instalment dates and amounts to the filing calendar"
                - "Pay the quarter's instalment and file the receipt @recurring(quarterly)"
                - "Recalculate the instalments after any large change in income"
            - name: Address and bank details kept current with every payer
              description: |-
                ## Purpose
                Pension offices and tax authorities write to the last address they hold, and a returned letter can trigger a suspended payment or a missed assessment. A list of every office that holds your address and bank details, updated in one sitting whenever anything changes, is the cheapest protection in this area.

                ## Milestones
                1. Every tax office, pension payer and bank holding your details listed with its update method.
                2. Current address, phone, email and bank details confirmed with each one.
                3. The date of each confirmation recorded.
                4. The list rechecked every year and after any move.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payer and tax office on the list has confirmed your current address and bank details within the last twelve months."
                cadence: rolling
              tasks:
                - "List every office that pays you or taxes you, with its update method"
                - "Confirm your current address and bank details with each one"
                - "Record the date each update was confirmed"
                - "Recheck that every payer holds your current details @recurring(yearly)"
            - name: Annual tax residence review before year end
              description: |-
                ## Purpose
                Residence can change without a move: a few extra weeks home caring for a parent, a new contract abroad or a house bought can tip a test either way. Re-running your position once a year, before the tax year ends, means you choose the outcome rather than discover it on an assessment.

                ## Milestones
                1. The day count and tie inventory updated for the current year.
                2. Both countries' tests re-run with any changes in your facts.
                3. Risks to your expected status logged with an action and a date.
                4. The year's position confirmed with your adviser before the tax year ends.

                ## Notes
                Start from the **Risk register** template, with one row for each tie or day count that could change your status.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "This year's residence position for both countries is written down and confirmed with your adviser before the earlier tax year end."
                cadence: cyclic
              tasks:
                - "Update the tie inventory with anything that changed this year"
                - "Re-run both residence tests with this year's facts @recurring(yearly)"
                - "Log each risk to your residence status in the risk register"
                - "Confirm the year's position with your adviser before year end"
            - name: Annual pension statement round-up
              description: |-
                ## Purpose
                Values, contribution records and scheme contacts drift out of date quietly, and an error in a contribution record is far easier to fix within a year or two than after twenty. Requesting a statement from every pension once a year, and comparing it with last year's, keeps the inventory true and catches missing years early.

                ## Milestones
                1. A statement or online valuation obtained for every pension in the inventory.
                2. This year's contribution record compared with last year's.
                3. Inventory values and contact details updated.
                4. Any missing year or wrong figure queried with the scheme in writing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current statement for every pension is filed this year and any missing contribution year has been queried in writing."
                cadence: cyclic
              tasks:
                - "Request this year's statement from every pension in the inventory @recurring(yearly)"
                - "Compare this year's contribution record with last year's"
                - "Update values and contact details in the pension inventory"
                - "Query any missing year or wrong figure with the scheme in writing"
            - name: Residence, ordinary residence and domicile explained
              description: |-
                ## Purpose
                Three words do a lot of work in tax law on both sides of the water, and they are easy to mix up. Residence is usually about days and ties in a given year, ordinary residence about your settled pattern of life, and domicile, broadly, about the place you regard as your permanent home, which some islands still use to decide what they tax. Learning the difference lets you follow your adviser rather than nod along.

                ## Milestones
                1. A short definition of each term written in your own words.
                2. The terms your home island's law uses identified.
                3. The terms the country abroad uses identified.
                4. Three questions about your own position answered or sent to your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note defines residence, ordinary residence and domicile and shows which terms each of your two countries uses."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the official guidance on residence in each country"
                - "Write a one-line definition of each term in your own words"
                - "Note which terms each country's tax law uses"
                - "Send your adviser three questions about your own position"
            - name: How treaties decide who taxes your pension
              description: |-
                ## Purpose
                Treaty pension articles often give the right to tax a private pension to the country where you live, while a government service pension, such as a civil service or armed forces pension, may stay taxable where it is paid from. Social security can follow yet another rule. Working through the articles with your own pensions as the examples explains why two pensions of the same size can be taxed in different places.

                ## Milestones
                1. The private pension, government service and social security articles of your treaty read.
                2. Each pension in your inventory labelled with the article that probably applies.
                3. Whether your treaty relieves double tax by exemption or by credit understood.
                4. Your labels checked by your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each pension in your inventory carries a treaty article label and a relief method, checked by your adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the pension and government service articles of your treaty"
                - "Label each pension in your inventory with the article that may apply"
                - "Find out whether your treaty uses exemption or credit to relieve double tax"
                - "Ask your adviser to check your labels"
            - name: Reading a state pension forecast and contribution record
              description: |-
                ## Purpose
                A state pension forecast shows what you are on course for and which years are missing, but statements use their own language: qualifying years, gaps, credits, contracted out periods. Learning to read your own record line by line, for each state system you paid into, shows exactly where the money and the gaps are.

                ## Milestones
                1. A current forecast or contribution statement downloaded for each state system you paid into.
                2. Qualifying years and gaps counted on each.
                3. Unfamiliar terms looked up on the official site or asked about.
                4. A one-page summary of each forecast added to the pension inventory.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of each state pension forecast, with qualifying years and gaps counted, is in the pension inventory."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download your state pension forecast or contribution statement online"
                - "Count the qualifying years and the gaps on each statement"
                - "Look up any unfamiliar terms on the official pension site"
                - "Add a one-page summary of each forecast to the inventory"
            - name: Social security agreements between the Caribbean and abroad
              description: |-
                ## Purpose
                Social security agreements can let contributions paid in one country count towards a pension in another, and can decide whether a pension paid abroad rises each year or stays frozen. Agreements link some Caribbean countries with the UK or Canada and not others, and CARICOM has its own agreement for people who worked across member states. Finding out which ones cover your work history can add years to a pension you thought was small.

                ## Milestones
                1. Every country you worked in listed with years and contributions.
                2. Whether an agreement links each pair of countries checked on official sources.
                3. What each relevant agreement covers, such as combining years or yearly increases, noted.
                4. The office that handles claims under each agreement identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists every social security agreement that covers your work history, what it allows and which office handles the claim."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every country you paid contributions in, with the years"
                - "Check the official list of social security agreements for each country"
                - "Note what each relevant agreement lets you combine or claim"
                - "Write down the office that handles claims under each agreement"
            - name: Home island income tax basics for a returning resident
              description: |-
                ## Purpose
                Arriving home after decades away, many returnees find the island's tax system unfamiliar: the personal allowance, PAYE from a local job, rules on interest and dividends, and the annual return. A few hours with the tax authority's own guides prevents a first-year penalty and the cost of paying someone to explain the basics.

                ## Milestones
                1. The home tax authority's guide for individuals read.
                2. The personal allowance, filing deadline and payment methods for this year noted.
                3. Where foreign pension income goes on the local return understood.
                4. An online account with the tax authority opened where one exists.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records the allowance, filing date, payment methods and foreign pension reporting for your island, and an online account is open where offered."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download the individual taxpayer guide from the home tax authority"
                - "Note this year's allowance, filing date and payment methods"
                - "Find where foreign pension income goes on the local return"
                - "Open an online account with the home tax authority if it offers one"
            - name: Tracing early NIS contributions back home
              description: |-
                ## Purpose
                Many people who left the Caribbean in their twenties paid into a national insurance scheme first, such as NIS in Jamaica, Barbados or Guyana, or the National Insurance Board in Trinidad and Tobago or the Bahamas, and never claimed anything. A few years of contributions can lead to a pension or a one-off grant on their own, or combine with years abroad under a social security agreement.

                ## Milestones
                1. Your NIS number found, or the scheme asked to trace it from your name and date of birth.
                2. A contribution statement received from the national insurance office.
                3. Missing years matched to employers and old payslips where you have them.
                4. What the record entitles you to confirmed in writing.

                ## Notes
                Write to the scheme directly. Be wary of agents who charge to trace contributions the office will look up for you.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A contribution statement from the home national insurance scheme is in hand, with your entitlement confirmed in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search old papers at home for an NIS card or number"
                - "Write to the national insurance office for a contribution statement"
                - "Match missing years to employers and old payslips"
                - "Ask the office in writing what the record entitles you to"
            - name: Filling gaps in a state pension record
              description: |-
                ## Purpose
                Some state pensions let you pay voluntary contributions to fill missing years, including from abroad, and UK voluntary National Insurance is a well known example; others have strict time limits or bar people who have left. Working out whether each gap can be filled, what it costs and how long the extra pension takes to repay the cost gives a clear yes or no.

                ## Milestones
                1. Gap years in each state pension record listed.
                2. Eligibility to pay voluntary contributions from abroad confirmed with the pension office.
                3. The cost of each gap year compared with the extra yearly pension it buys.
                4. A decision recorded for each gap year, with payment made where you chose to fill it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every gap year has a recorded decision to fill it or leave it, based on cost and confirmed eligibility from the pension office."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the gap years from your latest contribution record"
                - "Ask the pension office whether you can pay voluntary contributions from abroad"
                - "Compare the cost of each year with the extra yearly pension"
                - "Record your decision for each gap year"
            - name: Choosing where each pension is paid
              description: |-
                ## Purpose
                A pension can be paid into an account in the country that pays it and moved across by you, or paid straight into a local bank back home, often in local currency. The choice affects conversion costs, how fast money arrives, which tax forms the bank asks for and whether you need to keep an overseas account at all. Deciding pension by pension, with real costs side by side, avoids paying twice on every payment.

                ## Milestones
                1. Payment options listed for each pension, by bank country and currency.
                2. Fees and exchange margins compared on one typical monthly payment.
                3. Each scheme's rules for overseas members, such as fees or tax forms, noted.
                4. A payment destination chosen for each pension and the change instructed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each pension has a chosen payment bank and currency, based on a written cost comparison, and each payer has been instructed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each payer which countries and currencies it can pay into"
                - "Compare fees and exchange margins on one typical payment"
                - "Check whether your overseas bank lets non-residents keep accounts"
                - "Send each payer the bank details you chose"
            - name: Pension lump sum timing around the move
              description: |-
                ## Purpose
                Taking a lump sum that is tax-free in the paying country may still be taxable on your home island if you are resident there when it is paid, and the reverse can happen too. Whether to draw it before you leave, after you arrive or not at all is one of the largest tax decisions in a move home, and it cannot be undone once paid.

                ## Milestones
                1. Lump sum options and amounts confirmed with each scheme.
                2. The tax treatment before and after the move set out for both countries.
                3. The figures checked by your adviser in writing.
                4. A decision recorded with the chosen date and reasons.

                ## Notes
                Do not let a moving date force this decision. Get the written view first, then book the flight if timing matters.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on each lump sum, with before and after net figures checked by your adviser, is saved in the vault."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each scheme for current lump sum options and amounts"
                - "Ask your adviser how each country taxes the lump sum before and after the move"
                - "Set out both timings side by side with net amounts"
                - "Record the decision and the date you chose"
            - name: Claiming or deferring the state pension
              description: |-
                ## Purpose
                Several state pensions pay more if you claim later, but deferral can work differently for people living abroad, and a pension that is frozen rather than increased in your country of residence changes the sums. Working out the trade-off for your own pension, health and residence before the claim date gives you a decision rather than a default.

                ## Milestones
                1. The deferral rules for each state pension found on official sites.
                2. Whether the pension is increased each year where you will live checked.
                3. Claiming now and claiming later compared over ten and twenty years.
                4. A decision recorded and the claim or deferral made.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to claim or defer each state pension, based on a ten and twenty year comparison and the uprating rule where you live."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official deferral rules for each state pension"
                - "Check whether the pension is increased yearly in your country of residence"
                - "Compare claiming now and later over ten and twenty years"
                - "Record your decision before the claim date"
            - name: Scrutinising a pension transfer offer
              description: |-
                ## Purpose
                Returnees with pensions abroad are a favourite target for transfer offers promising better returns or tax-free access through an overseas scheme. Some transfers are legitimate, many are expensive, and some are scams that empty a lifetime's savings. Testing any offer against the regulator's warnings and an independent adviser's view, before signing anything, protects the pension you already have.

                ## Milestones
                1. The firm checked against the financial regulator's register and warning list.
                2. Every fee, exit charge and the receiving scheme's status written down.
                3. An independent adviser with no stake in the transfer consulted.
                4. A written decision to transfer or stay put.

                ## Notes
                Cold calls, pressure to act fast and promises of early access are warning signs. Report a suspected scam to the regulator.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any transfer offer has been checked on the regulator's register and reviewed by an independent adviser, with a written decision filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the firm on the financial regulator's register and warning list"
                - "Write down every fee and exit charge in the offer"
                - "Ask an independent adviser with no stake in the transfer for a view"
                - "Record your decision and file the offer papers"
            - name: Non-resident landlord set-up for a house abroad
              description: |-
                ## Purpose
                Keeping the house in Toronto, London or New York and letting it after you move home means rent taxed where the house is, often with tax withheld by the letting agent or tenant unless you register or file the right form. Getting the non-resident landlord arrangements right from the first month avoids withholding you then have to claw back.

                ## Milestones
                1. The country's non-resident landlord rules found and read.
                2. Registration or approval to receive rent with less withholding applied for where available.
                3. Your letting agent told of your non-resident status in writing.
                4. A rent and expenses record set up for the first year's return.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Non-resident landlord registration or forms are filed, the agent is told in writing and a rent record exists for the first year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance for non-resident landlords"
                - "Apply for any registration that reduces withholding on rent"
                - "Tell your letting agent in writing that you are now non-resident"
                - "Update the rent record with the month's rent, repairs and fees @recurring(monthly:18)"
            - name: Selling the house abroad before or after the move
              description: |-
                ## Purpose
                Your main home is often exempt from tax on its gain while you live in it, but the relief can shrink once you become non-resident, and the home island may tax the gain too if you are resident there when you sell. Comparing a sale before departure with one a year or two later, using real valuations and your adviser's reading of both countries' rules, puts a number on the choice.

                ## Milestones
                1. A current valuation and the original cost with improvements gathered.
                2. Each country's treatment of the gain before and after the move written down.
                3. Net proceeds compared for selling now and selling later.
                4. A decision recorded and shared with any co-owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of net proceeds for selling before and after the move, reviewed by your adviser, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get a current valuation of the house"
                - "Gather purchase and improvement costs from old papers"
                - "Ask your adviser how each country taxes the gain before and after the move"
                - "Compare net proceeds for selling now and selling later"
            - name: Bank tax residence self-certification forms updated
              description: |-
                ## Purpose
                Banks and credit unions on both sides must ask where you are tax resident and report your accounts under international information exchange rules. A form still saying you live in Birmingham when you live in Barbados can mean wrong reports, withholding on interest or a frozen account. Updating every self-certification form when your residence changes keeps the reporting matched to the truth.

                ## Milestones
                1. Every bank, credit union and investment account listed with its country.
                2. A current tax residence self-certification lodged with each.
                3. Taxpayer numbers given wherever the form asks for them.
                4. Copies of each form kept in the vault.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account you hold has a current tax residence self-certification on file showing your present country and taxpayer number."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account you hold in each country"
                - "Ask each bank for its tax residence self-certification form"
                - "Complete and return each form with your taxpayer numbers"
                - "File copies of the returned forms in the vault"
            - name: Year of departure tax return
              description: |-
                ## Purpose
                The year you leave is the one most likely to go wrong: part resident and part not, a departure form to file, perhaps split-year treatment, and in some countries a deemed sale of investments on leaving. Treating that return as an event with its own plan, adviser and checklist means it is filed correctly and on time from overseas.

                ## Milestones
                1. Your departure date and residence status for the year confirmed with your adviser.
                2. Any departure form the country you left requires filed.
                3. Income split between the resident and non-resident parts of the year.
                4. The final return filed on time, with the acknowledgment in the vault.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The departure year return and any departure form are filed by the deadline, with acknowledgments saved in the vault."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm your exact departure date from travel records"
                - "Ask your adviser which departure forms the country you left requires"
                - "Gather income records for the resident and non-resident parts of the year"
                - "File the departure year return and save the acknowledgment"
            - name: First tax return as a resident back home
              description: |-
                ## Purpose
                Your first return on the island sets the pattern: registration confirmed, foreign pensions declared correctly, credit claimed for tax taken abroad and the local deadline met. Preparing it as a dated event, with a local accountant if you need one, avoids the penalties and letters that follow a missed first filing.

                ## Milestones
                1. Registration with the home tax authority confirmed.
                2. All income for the year gathered, including foreign pensions and withholding certificates.
                3. The return prepared and checked against the treaty position.
                4. The return filed and any tax paid by the local deadline.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your first home island return is filed and any tax paid by the local deadline, with foreign pensions and credits declared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm your registration with the home tax authority"
                - "Gather the year's foreign pension statements and withholding certificates"
                - "Book a local accountant if you are unsure how to declare foreign pensions"
                - "File the return and pay any balance before the deadline"
            - name: State pension claims ahead of pension age
              description: |-
                ## Purpose
                Most state pensions are not paid automatically: you have to claim, often within a window of a few months before pension age, and claims from abroad take longer by post. Making each claim in good time, with documents ready, means the first payment arrives on time rather than months in arrears.

                ## Milestones
                1. The claim window and method for each state pension confirmed.
                2. Birth certificate, marriage certificate and bank details ready.
                3. Each claim submitted, with proof of submission kept.
                4. The award letter received and checked against your forecast.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every state pension claim is submitted inside its claim window, with proof of submission and the award letter checked against the forecast."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the claim window for each state pension on its official site"
                - "Gather the identity and bank documents each claim needs"
                - "Submit each claim and keep proof of submission"
                - "Check the award letter against your latest forecast"
            - name: Certificate of tax residence for treaty relief
              description: |-
                ## Purpose
                To pay a pension without tax in the source country, payers often need a certificate of residence from your home island's tax authority, or a treaty claim form stamped by it. Requesting the certificate early, and sending it with each payer's own form, can switch a pension from taxed at source to paid gross or at a reduced rate.

                ## Milestones
                1. Payers that need a residence certificate or treaty form identified.
                2. The certificate requested from the home tax authority.
                3. Each payer's treaty form completed and sent with the certificate.
                4. The change in tax deducted confirmed on the next payment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each payer that needs it holds your certificate of residence and treaty form, and the next payment shows the reduced deduction."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each payer what it needs to apply treaty relief"
                - "Request a certificate of tax residence from the home tax authority"
                - "Send each payer its completed treaty form with the certificate"
                - "Check the next payment shows the reduced tax"
            - name: Responding to a tax authority enquiry
              description: |-
                ## Purpose
                An enquiry from a tax office about your residence, a foreign pension or an undeclared account is stressful, more so when it arrives late at an old address. Treating it as a dated event, with the deadline noted, your adviser told the same day and every document sent by a trackable route, is how enquiries close quickly.

                ## Milestones
                1. The enquiry deadline and the information requested written down.
                2. Your adviser informed and a response plan agreed.
                3. Documents gathered from the vault and the day count log.
                4. A complete reply sent before the deadline with proof of delivery.

                ## Notes
                Ask for more time in writing before the deadline if you need it. Silence is treated far worse than a request for an extension.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete reply to the enquiry was sent before its deadline by a trackable route, with copies kept in the vault."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the enquiry deadline and exactly what is asked for"
                - "Send a copy of the letter to your adviser the same day"
                - "Ask the agent to draft a covering letter listing every enclosed document"
                - "Send the reply by a trackable route before the deadline"
            - name: Year-end review with your cross-border adviser
              description: |-
                ## Purpose
                One meeting each year, a few weeks before the earlier of your two tax year ends, is where residence, instalments, lump sums and treaty claims get looked at together. Arriving with the day count, income map and withholding record prepared makes the meeting shorter, cheaper and more useful.

                ## Milestones
                1. The meeting booked before the earlier tax year end.
                2. Day count, income map and withholding record sent a week ahead.
                3. Agreed actions written down with dates.
                4. The actions completed before the tax year closes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "This year's adviser review took place before the earlier tax year end and every agreed action is completed or dated."
                cadence: cyclic
              tasks:
                - "Book the year-end meeting with your adviser @recurring(yearly)"
                - "Send the day count, income map and withholding record a week before"
                - "Write up the agreed actions with dates"
                - "Complete the agreed actions before the tax year ends"
            - name: Retiring home on pensions from two countries
              description: |-
                ## Purpose
                Retirees moving home to St Lucia or Guyana after a working life in London often hold a state pension, a workplace pension and a small NIS pension back home, each taxed and paid by different rules. Bringing them into one retirement income plan, with expected net amounts after tax in both countries and a calendar of when each lands, shows what you will really live on.

                ## Milestones
                1. Each pension's gross amount, payment date and currency listed.
                2. Tax in each country estimated for each pension with your adviser.
                3. Expected monthly net income in local currency calculated.
                4. A payment calendar shared with your spouse or whoever helps with your money.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retirement income plan shows each pension's net monthly amount in local currency after tax in both countries, shared with your spouse or helper."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each pension's gross amount, payment date and currency"
                - "Ask your adviser to estimate tax on each pension in both countries"
                - "Work out your expected monthly net income in local currency"
                - "Share the payment calendar with your spouse or helper"
            - name: Snowbird retiree splitting the year
              description: |-
                ## Purpose
                Spending the northern winter home in Jamaica and the summer with grandchildren in Brooklyn or Brampton is a lovely life, and a residence trap if the days drift. Planning the split each year against both countries' tests, and the health cover rules that depend on residence, keeps you clearly resident where you mean to be.

                ## Milestones
                1. The days each country's tests allow before your status changes noted.
                2. A yearly travel plan drawn up within those limits.
                3. Health cover residence rules in the country abroad checked.
                4. Actual days compared with the plan at mid-year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A yearly travel plan keeps days within both countries' limits, with actual days compared to it at mid-year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note the day limits in each country's residence test"
                - "Draw up next year's travel plan within those limits"
                - "Check how long you can be away before losing health cover abroad"
                - "Compare actual days with the plan at mid-year @recurring(yearly)"
            - name: US citizens and green card holders in the Caribbean
              description: |-
                ## Purpose
                The US taxes its citizens and green card holders on worldwide income wherever they live, so a move home to Trinidad or Barbados does not end US filing. Foreign account reports, foreign tax credits and the question of whether to keep a green card all need settling, ideally before the first full year abroad.

                ## Milestones
                1. Your continuing US filing duty confirmed with a US-qualified adviser.
                2. Foreign account reporting thresholds checked against your accounts.
                3. The method of relieving double tax on each income type agreed.
                4. A decision recorded on keeping or giving up a green card, with its consequences.

                ## Notes
                Giving up a green card or citizenship has its own tax rules and can carry an exit charge. Take advice before any step.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A US-qualified adviser has confirmed your filing duties abroad, and account reports and a relief method are agreed in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a US-qualified adviser who handles filers living abroad"
                - "List every non-US account and its highest balance in the year"
                - "Ask the adviser which relief method suits each income type"
                - "File the foreign bank account report by its deadline @recurring(yearly)"
            - name: Canadian pensions paid to the islands
              description: |-
                ## Purpose
                Canada Pension Plan and Old Age Security can be paid abroad, but Old Age Security has a minimum residence rule for payment outside Canada, and non-residents usually have tax withheld at source unless a treaty reduces it. Former Canadian residents moving home to Jamaica or Grenada need to know which payments continue, at what withholding, and which forms reduce it.

                ## Milestones
                1. Whether each Canadian benefit can continue abroad confirmed.
                2. The withholding rate for your country of residence checked.
                3. Any form that reduces withholding identified and filed.
                4. Payment bank and currency set for each benefit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each Canadian benefit is confirmed as payable abroad, with its withholding rate checked and any reducing form filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the residence rule for receiving each benefit outside Canada"
                - "Find the withholding rate for your country of residence"
                - "File any form that reduces withholding under the treaty"
                - "Set the payment bank and currency for each benefit"
            - name: Survivor pensions across borders
              description: |-
                ## Purpose
                When a spouse dies, survivor pensions from state and workplace schemes in two or three countries must each be claimed separately, often with certified death and marriage certificates sent abroad. Knowing in advance which benefits exist, and keeping a claim pack ready, makes the claims manageable at the hardest time.

                ## Milestones
                1. Survivor benefits under each partner's pensions listed.
                2. The documents each claim would need written down.
                3. Certified copies of the marriage certificate kept in the vault.
                4. Both partners know where the claim pack is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A survivor claim pack lists each partner's survivor benefits and the documents needed, and both partners know where it is."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each pension scheme what it pays a surviving spouse"
                - "List the documents each survivor claim requires"
                - "Order certified copies of your marriage certificate"
                - "Show your partner where the claim pack is kept"
            - name: Mid-career return with pensions left abroad
              description: |-
                ## Purpose
                Returning home at 40 for a job in Kingston or Port of Spain leaves workplace pensions and state contributions behind that will not pay out for twenty years or more. Deciding what to leave in place, what to combine and how to keep the contacts alive for two decades stops those pensions becoming lost.

                ## Milestones
                1. Each left-behind pension listed with its value, charges and earliest access age.
                2. Options to leave, combine or keep contributing assessed with an adviser.
                3. A decision recorded for each pension.
                4. Each scheme given your new address abroad.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every pension left abroad has a recorded decision and holds your current overseas address."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pension you are leaving behind with its value and charges"
                - "Ask an adviser about leaving, combining or continuing contributions"
                - "Record a decision for each pension"
                - "Send each scheme your new overseas address"
            - name: Managing a parent's pension paid from abroad
              description: |-
                ## Purpose
                Many parents back home live on a pension from their working years in England, New York or Toronto, and as they age the forms, life certificates and tax letters fall to a son or daughter. Getting proper authority to act, such as a power of attorney or an appointee arrangement each payer recognises, lets you deal with the pension office without your parent on every call.

                ## Milestones
                1. Your parent's pensions and tax obligations listed with their consent.
                2. The authority each payer accepts from a family member identified.
                3. That authority set up and registered with each payer.
                4. Life certificates and tax letters routed to you.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each of your parent's pension payers has registered your authority to act, and life certificates and tax letters now reach you."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sit with your parent and list their pensions and tax letters"
                - "Ask each payer what authority it accepts from a family member"
                - "Register your authority with each payer once it is in place"
                - "Check your parent's pension arrived and their post is answered @recurring(monthly:25)"
            - name: Investment exit tax review before leaving
              description: |-
                ## Purpose
                Some countries treat you as selling your investments on the day you stop being resident, taxing gains you have not cashed, and Canada's departure tax is the best known example. Others tax gains made while away if you return within a few years. Reviewing shares, investment property and business interests for these rules before the move lets your adviser plan sales, elections or timing.

                ## Milestones
                1. Every investment, property and business interest listed with cost and current value.
                2. Exit and temporary non-residence rules checked for the country you are leaving.
                3. Your adviser's written estimate of any charge on leaving received.
                4. A plan for sales, elections or timing agreed before the departure date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written estimate of any exit charge and an agreed plan for sales or elections exist before your departure date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List investments, property and business shares with cost and value"
                - "Ask your adviser whether an exit charge or return rule applies"
                - "Get a written estimate of any tax due on leaving"
                - "Agree any sales or elections before the departure date"
            - name: Tie-breaker analysis when both countries claim you
              description: |-
                ## Purpose
                When both countries' own tests make you resident in the same year, the treaty's tie-breaker article decides, usually by looking in turn at your permanent home, your centre of vital interests, your habitual abode and your nationality. Working through each step with evidence and your adviser settles which country has the main taxing right and what evidence to keep building.

                ## Milestones
                1. Dual residence for the year confirmed under both countries' rules.
                2. Evidence gathered for each tie-breaker step: homes, family, economic ties and days.
                3. Your adviser's written view on where the tie-breaker lands.
                4. Steps to support the intended outcome listed and started.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adviser's written view on the tie-breaker outcome is on file, with evidence gathered for each step of the article."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm with your adviser that both countries treat you as resident"
                - "Gather evidence for permanent home, family, economic ties and days"
                - "Ask your adviser for a written view on the tie-breaker outcome"
                - "List the ties you can change to support the intended result"
            - name: Five-year retirement income tax projection
              description: |-
                ## Purpose
                Pensions start at different ages, lump sums come once, exchange rates move and allowances change, so the tax picture in year one of retirement is rarely the picture in year five. A simple projection of income and tax in both countries for the first five years shows when tax peaks, when drawing a private pension earlier or later would help, and how much to set aside.

                ## Milestones
                1. Each pension's start year and expected amount set out for five years.
                2. Estimated tax and credits in each country added for each year.
                3. Years with unusually high tax highlighted.
                4. The projection reviewed with your adviser and refreshed each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year table of income and tax in both countries exists, has been reviewed by your adviser and is refreshed yearly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set out each pension's start year and amount for five years"
                - "Ask the agent to build a five-year income and tax table from your figures"
                - "Highlight the years where tax looks unusually high"
                - "Review the projection with your adviser @recurring(yearly)"
            - name: Double tax dispute through mutual agreement
              description: |-
                ## Purpose
                If both countries tax the same income and neither will give credit, most treaties let you ask the tax authorities to settle it between themselves through a mutual agreement procedure. The request has time limits and needs a clear file of facts and assessments, so it is specialist work for an adviser, but knowing it exists stops you simply paying twice.

                ## Milestones
                1. The double taxation identified, with both assessments in hand.
                2. The treaty's time limit for a request checked.
                3. A request prepared with your adviser and sent to the competent authority.
                4. The outcome and any refund recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A mutual agreement request is lodged within the treaty time limit, or a written reason from your adviser for not lodging one is on file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Put both assessments for the same income side by side"
                - "Check the treaty's time limit for a mutual agreement request"
                - "Prepare the request with your adviser"
                - "Record the outcome and any refund"
---

# Caribbean Tax Residency and Pensions

This area is for anyone whose income or pension spans the Caribbean and the UK, US or Canada: the nurse retiring home to Barbados on two pensions, the engineer back in Port of Spain with a pension left in Toronto, or the retiree who winters in Montego Bay and summers in Birmingham. It starts with foundations (your ties in each country, taxpayer numbers, a day count, both residence tests, the treaty and an adviser), then the monthly and yearly routines, what to learn about residence, treaties and social security, the decisions on lump sums, gaps and where pensions are paid, the dated events of leaving, arriving and claiming, situations for retirees, US persons, Canadians, widows and carers, and finally the specialist work of exit charges, tie-breakers and double tax disputes.

What repeats is record keeping: a monthly paperwork hour and pension payment check, a running day count, quarterly withholding records and instalments, and a yearly round of life certificates, filing dates, statements and a residence review before the tax year ends. The Metrics log, Meeting notes, Operational checklist and Risk register templates pair with the projects that name them. Everything here is organisational, so confirm each conclusion with the tax authority and a qualified cross-border adviser. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
