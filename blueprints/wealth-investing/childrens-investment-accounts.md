---
id: wealth-investing.childrens-investment-accounts
name: Children's Investment Accounts
description: "Child investment accounts chosen and opened on purpose, funded automatically and by family gifts within the annual limits, reviewed each birthday and handed over at 18 with a plan the child understands."
category: personal
version: 1.0.0
tags: [wealth-investing, childrens-investment-accounts, parent, junior-accounts, custodial-accounts, family-gifts, handover]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - monthly-budget-bills
    - metrics-log
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Children's Investment Accounts
          description: "Opening and funding investment accounts for children, such as junior ISAs or custodial accounts, and planning handover."
          projects:
            - name: Children's account options map for your country
              description: |-
                ## Purpose
                Most countries offer two or three ways to invest for a child, and they differ on who owns the money, how it is taxed and when the child can touch it: a junior ISA in the UK, a UTMA or UGMA custodial account in the US, or an informal in-trust account in Canada or Australia are examples. Mapping the options open to your family on one page, before choosing a provider, avoids opening the wrong type and finding out years later that it cannot be moved.

                ## Milestones
                1. A one-page table of every child investment account type available where you live.
                2. Each type scored on ownership, tax treatment, annual limit, access age and transfer rules.
                3. Types that do not suit your family crossed out with a one-line reason.
                4. One or two account types left as the working shortlist.

                ## Notes
                Use the government's or tax authority's own guidance pages as the source, not a provider's marketing. Accounts aimed purely at course fees belong in a separate education plan.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of at least two child account types available in your country, ending in a shortlist of one or two, is in the family records."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the child account types your government's guidance pages describe"
                - "Note the annual limit and access age for each type"
                - "Record who legally owns the money in each type"
                - "Cross out the types that do not suit your family and say why"
            - name: Child's name or parent's name decision
              description: |-
                ## Purpose
                Money paid into an account in the child's name usually becomes theirs for good: you cannot take it back for a family emergency, and they gain full control at 18 or 21 depending on the account and country. Keeping investments in your own name, earmarked for the child, keeps flexibility but changes the tax picture and gives the child no legal protection. Deciding this deliberately is the first fork in the road for every payment that follows.

                ## Milestones
                1. The irrevocability and control age of each shortlisted account type written down.
                2. A parent-held earmarked option compared on flexibility, tax and protection.
                3. A decision recorded on how much goes into the child's name and how much stays with you.
                4. Both parents, and anyone else contributing, told the decision and the reason.

                ## Notes
                Many families split it: a modest amount in the child's name, the rest earmarked in a parent's account until the child's maturity is clearer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on which share of the child's money sits in their name and which in a parent's name, with reasons, is agreed by both parents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the age at which the child gains full control in each account type"
                - "Check whether money in the child's name can ever be withdrawn early"
                - "Compare a parent-held earmarked account on tax and flexibility"
                - "Record the split you have chosen and share it with the other parent"
            - name: Identity documents for opening a child's account
              description: |-
                ## Purpose
                Providers will ask for the child's full legal name, date of birth, address and often a tax or national identification number, plus proof of identity for the adult opening it. Gathering these before you start an application avoids the half-finished form that sits for months because a number arrives by post after the baby's first birthday.

                ## Milestones
                1. The child's birth certificate or equivalent located and copied.
                2. The child's tax or national identification number confirmed, or applied for if not yet issued.
                3. Your own proof of identity and address current and to hand.
                4. All documents saved in one secure folder ready for the application.

                ## Notes
                In some countries the child's number is issued automatically before a certain age, so check the official guidance before applying separately. Keep copies in a secure folder, never in an unencrypted email.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A secure folder holds the child's birth record, identification number and the parent's identity proof, ready for any provider's application."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the child's birth certificate and make a scanned copy"
                - "Check whether the child has a tax or national identification number yet"
                - "Confirm your own photo ID and proof of address are in date"
                - "Save every document in one secure folder labelled with the child's name"
            - name: Provider shortlist for the child's account
              description: |-
                ## Purpose
                Platform fees that look small on a balance of a few thousand become a large share of returns over eighteen years, and some providers do not offer child accounts at all or set minimums too high for a modest monthly amount. Comparing three providers on the same criteria gives a choice you will not need to revisit for a decade.

                ## Milestones
                1. Three providers offering your chosen account type shortlisted.
                2. Each scored on platform fee, fund charges, minimum monthly payment, fund range and cost of transferring out.
                3. Whether relatives can pay in directly checked for each.
                4. A provider chosen and the reason written down.

                ## Notes
                Start from the **Purchase decision** template. Check the fee for transferring out as well as in: it decides whether switching later is cheap.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen from a written comparison of at least three, scored on fees, minimums, fund range, family payments and exit costs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three providers that offer your chosen child account type"
                - "Record the platform fee, fund charges and minimum monthly payment for each"
                - "Check whether grandparents can pay into each one directly"
                - "Note the cost of transferring out of each provider"
                - "Choose a provider and write one line on why"
            - name: Opening the first child's investment account
              description: |-
                ## Purpose
                Once the type and provider are settled, opening the account is an afternoon's work that still slips for months in most busy households. Getting it open, with a first payment invested rather than sitting as cash, is the point where the plan starts compounding.

                ## Milestones
                1. Application submitted with you as the registered contact or custodian.
                2. The account open and its number recorded in the family register.
                3. A first payment made and invested in the chosen fund, not left as cash.
                4. The welcome pack and terms saved in the child's document folder.

                ## Notes
                Many platforms hold new money as cash until you place a buy instruction. Check the holdings page a week after the first payment.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The child's account is open, its number is in the family register and the first payment is invested in the chosen fund."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Start the application with the documents folder open beside you"
                - "Make the first payment into the new account"
                - "Check the holdings page shows the fund, not uninvested cash"
                - "Save the welcome pack and terms in the child's folder"
            - name: Purpose and handover letter for the account
              description: |-
                ## Purpose
                A short letter saying why the money was set aside, who contributed and what you hope it is used for gives the account a story your child can read at handover, when the law usually lets them spend it however they like. Writing it now, while the reasons are fresh, is far easier than reconstructing them when the child is 17.

                ## Milestones
                1. A one-page letter covering the purpose, the main contributors and your hopes for the money.
                2. The letter stored with the account records, not on a single device.
                3. A note of when you intend to give it to the child.
                4. The letter reread and updated on the child's birthday each year.

                ## Notes
                Hopes, not conditions: in most child accounts the money legally becomes the child's at the control age whatever the letter says.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page letter explaining the account's purpose and contributors is stored with the account records and names an intended handover date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three sentences on why you opened this account"
                - "List the people who have paid in so far"
                - "Store the letter with the account records"
                - "Reread and update the letter on the child's birthday @recurring(yearly)"
            - name: Monthly contribution amount that fits the budget
              description: |-
                ## Purpose
                The right monthly amount is the one you can keep paying through a job change, a second child and a nursery bill, not the one that looks best on a projection. Testing a figure against the household budget, and agreeing what happens if money gets tight, makes the contribution something that lasts eighteen years.

                ## Milestones
                1. The household budget reviewed with childcare and other committed costs included.
                2. A monthly figure chosen that still works if one income drops.
                3. A floor agreed: the smallest amount you would keep paying in a lean year.
                4. The figure and the floor written in the child's account register.

                ## Notes
                Start from the **Monthly budget and bills** template. Your own emergency fund and pension usually come first; a child account funded by cutting your pension contributions is rarely a good trade.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A monthly contribution and a lean-year floor are agreed against the household budget and written in the account register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up committed monthly costs including childcare"
                - "Test your chosen amount against a month with one income lower"
                - "Agree the lowest amount you would keep paying in a lean year"
                - "Write the amount and the floor in the account register"
            - name: Fund choice for an eighteen-year horizon
              description: |-
                ## Purpose
                Money that will not be touched for well over a decade can usually ride out more short-term swings than a parent's own savings, but the fund still has to be one you will not panic out of during a crash. Choosing one diversified, low-cost fund on written criteria, rather than the platform's highlighted fund of the month, keeps the child's account simple to explain and simple to hand over.

                ## Milestones
                1. Written criteria for the fund: diversification, a ceiling on the ongoing charge and a risk level.
                2. Two or three candidate funds compared on those criteria using their factsheets.
                3. One fund chosen, with the reason recorded.
                4. A rule written for what would make you change it.

                ## Notes
                This is a choice to make from your own research or with an adviser; the project organises the decision, it does not recommend a fund.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One fund is chosen for the child's account against written criteria, with the reasons and a change rule recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three criteria the child's fund must meet"
                - "Compare two or three candidate funds on their factsheets"
                - "Record the fund you chose and why"
                - "Write the one condition that would make you switch fund"
            - name: Child account register and document folder
              description: |-
                ## Purpose
                Families with two children and help from grandparents can end up with five or six accounts across three providers, and nobody remembers which is which. A single register listing every account, its type, provider, registered contact and where the paperwork lives means a partner, an executor or the child at 18 can find everything.

                ## Milestones
                1. Every account held for each child listed with provider, type and account number.
                2. The registered contact or custodian named for each.
                3. Where statements and logins are kept noted, without writing passwords in the register.
                4. A second adult told where the register is.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every account held for each child with provider, type, number and registered contact, and a second adult knows where it is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account held for each child, including small ones from relatives"
                - "Add the provider, type, account number and registered contact for each"
                - "Note where statements are kept without writing down any passwords"
                - "Show your partner or a trusted adult where the register lives"
                - "Bring the register up to date after any account change @recurring(yearly)"
            - name: Moving idle cash savings into the investment account
              description: |-
                ## Purpose
                Gifts from birth often sit in a children's cash account earning less than inflation for years. Deciding how much of that cash the child might need in the next five years, and investing the rest within the account's annual limit, can make a real difference by age 18.

                ## Milestones
                1. Every cash balance held for the child listed with its interest rate.
                2. An amount kept as cash for near-term costs agreed.
                3. The remainder moved into the investment account within the annual limit.
                4. Any amount over the limit noted for next year's allowance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Cash held for the child beyond an agreed near-term reserve is moved into the investment account within the annual limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every cash balance held for the child and its interest rate"
                - "Decide how much cash to keep for costs in the next five years"
                - "Check how much of this year's allowance is still unused"
                - "Move the remainder into the investment account"
            - name: Automatic monthly contribution and yearly step-up
              description: |-
                ## Purpose
                Contributions that rely on remembering stop in the first busy month. A standing payment on the day after payday, raised a little each year as income grows, does most of the work of building the account without any willpower.

                ## Milestones
                1. A standing order or direct debit set up for the agreed amount.
                2. The payment date set within a few days of payday.
                3. An annual step-up amount agreed.
                4. Twelve months of payments arrived without a gap.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly contributions have reached the child's account by standing payment, with one annual step-up applied."
                cadence: rolling
              tasks:
                - "Set up a standing payment for the agreed monthly amount"
                - "Move the payment date to just after payday"
                - "Check the payment arrived and was invested @recurring(monthly:8)"
                - "Raise the monthly amount by your agreed step @recurring(yearly)"
            - name: Annual allowance tracker across all contributors
              description: |-
                ## Purpose
                Tax-free child accounts usually have one annual limit per child, shared by everyone who pays in, and going over it can mean refunds or penalties. When parents, grandparents and godparents all contribute, a running total checked each quarter stops two generous relatives breaking the limit in the same final month.

                ## Milestones
                1. This year's limit and the date it resets written at the top of the tracker.
                2. Every contributor listed with their expected yearly amount.
                3. A running total updated each quarter.
                4. Contributors warned in time when the total nears the limit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows each child's total contributions against the annual limit, updated every quarter, with no year over the limit."
                cadence: rolling
              tasks:
                - "Write this year's limit and reset date at the top of the tracker"
                - "List everyone who pays in and their usual yearly amount"
                - "Update the running total from the provider's statement @recurring(quarterly)"
                - "Message contributors when the total passes three quarters of the limit"
            - name: Birthday and festival gift routing with a gift log
              description: |-
                ## Purpose
                Relatives often want to give money but do not know how, so it arrives as cash in a card and gets spent. Sending the account's payment details ahead of birthdays and festivals, and keeping a gift log, turns occasional generosity into a real part of the account and gives your child a record of who helped.

                ## Milestones
                1. Payment details for the child's account, or a gifting link if the provider offers one, ready to share.
                2. A gift log with date, giver, amount and occasion.
                3. Thank-you notes sent for each gift into the account.
                4. Cash gifts paid in within a month of receipt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every money gift for the child over the past year appears in the gift log and was paid into the account within a month."
                cadence: rolling
              tasks:
                - "Find out whether your provider offers a gifting link or reference for relatives"
                - "Start a gift log with date, giver, amount and occasion"
                - "Send the payment details to relatives before birthday and festival season @recurring(yearly)"
                - "Pay cash gifts into the account within a month of receiving them"
            - name: Child benefit or allowance investing routine
              description: |-
                ## Purpose
                Where the state pays a regular child benefit or allowance, investing some or all of it is one of the easiest ways to fund a child's account, because the household never got used to spending it. A routine that moves it on a fixed day, with a clear decision about how much, stops it disappearing into the weekly shop.

                ## Milestones
                1. The amount and payment date of any child benefit or allowance confirmed.
                2. A decision on how much of it goes into the account.
                3. A standing transfer set for two days after it arrives.
                4. A full year of transfers completed.

                ## Notes
                If your household does not receive a child payment, use a regular windfall instead, such as a tax refund or a share of an annual bonus.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The agreed share of the child payment has moved into the child's account every month for twelve months."
                cadence: rolling
              tasks:
                - "Check the amount and date of the child payment your household receives"
                - "Decide what share of it goes into the child's account"
                - "Set a standing transfer for two days after it lands"
                - "Confirm this month's transfer went through @recurring(monthly:19)"
            - name: Quarterly value log for each child's account
              description: |-
                ## Purpose
                Statements arrive at different times from different providers, and without a log nobody can tell whether a child's account is growing as expected or quietly falling behind. Recording each account's value, total paid in and fees once a quarter builds a picture that makes the birthday review take minutes.

                ## Milestones
                1. A log with columns for date, value, total contributed and fees for each account.
                2. Past statements backfilled for at least the last year.
                3. Values recorded every quarter.
                4. Growth shown separately from contributions as a simple line.

                ## Notes
                Start from the **Metrics log** template. Expect falls in some quarters; the log is for spotting missed payments and creeping fees, not for reacting to markets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly entries of value, contributions and fees exist for each child's account."
                cadence: rolling
              tasks:
                - "Create a value log from the metrics log template"
                - "Backfill values from the last four statements"
                - "Add a column for total contributions so growth stands apart from top-ups"
                - "Record each account's value, contributions and fees @recurring(quarterly)"
            - name: Birthday review of the child's account
              description: |-
                ## Purpose
                A child's birthday is an easy date to remember and lines up with how families count the years left before handover. A once-a-year review covering contributions, fees, fund, allowance use and the time remaining keeps the account on track without fiddling in between.

                ## Milestones
                1. A one-page checklist for the review agreed.
                2. Contributions, value and fees compared with last year.
                3. The fund and the provider confirmed or flagged for change.
                4. One action for the coming year written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated review note exists for the child's most recent birthday, covering value, fees, fund, allowance use and one action."
                cadence: cyclic
              tasks:
                - "Write a one-page birthday review checklist"
                - "Compare this year's value and fees with last year's"
                - "Decide whether the fund and provider still fit"
                - "Run the birthday review for each child's account @recurring(yearly)"
            - name: Year-end top-up before the allowance resets
              description: |-
                ## Purpose
                Annual limits on tax-free child accounts are usually use-it-or-lose-it, so any unused allowance disappears when the tax year ends. Checking six weeks before the deadline gives time to decide whether a top-up is affordable and for relatives to contribute if they want to.

                ## Milestones
                1. The date the child account allowance resets recorded.
                2. Remaining allowance calculated six weeks before.
                3. A top-up decision made, including the decision not to top up.
                4. Any top-up paid in at least a week before the deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each year a recorded decision on the remaining allowance is made at least a week before the tax year ends."
                cadence: cyclic
              tasks:
                - "Record the date the child account allowance resets"
                - "Work out the remaining allowance six weeks before the reset @recurring(yearly)"
                - "Decide whether a top-up is affordable this year"
                - "Tell relatives about any space left if they asked to be told"
            - name: Tax record for income in the child's name
              description: |-
                ## Purpose
                Accounts held outside a tax-free wrapper can create taxable income or gains for the child, and in some countries income on money a parent gave is taxed as the parent's above a small threshold, as with the UK's parental gift rule or the US kiddie tax. Keeping an annual record of dividends, interest and gains, and of who gave the money, makes any return straightforward and avoids an unwelcome letter years later.

                ## Milestones
                1. The source of money in each taxable child account recorded: parent, grandparent or other.
                2. Each year's dividends, interest and realised gains noted from the tax statement.
                3. Whether any amount crosses a reporting threshold checked against official guidance or with an accountant.
                4. The tax statement filed with the account records.

                ## Notes
                Tax-free child accounts usually need no annual reporting. This project is for custodial or bare accounts held outside a wrapper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each taxable child account has a yearly record of income and gains with the money's source, and threshold questions are answered in writing."
                cadence: cyclic
              tasks:
                - "List which child accounts sit outside a tax-free wrapper"
                - "Note who gave the money in each of those accounts"
                - "File the annual tax statement and note the income figures @recurring(yearly)"
                - "Ask an accountant whether parental gifts produce income above the threshold"
            - name: Contact details and access upkeep with the provider
              description: |-
                ## Purpose
                Moving house, a new surname or a changed phone number can lock you out of a child's account just when you need a statement or a transfer. Checking once a year that the provider holds current details, and that a second adult has whatever access the account allows, prevents months of identity checks later.

                ## Milestones
                1. Your address, email and phone confirmed as current with each provider.
                2. Any second adult's access or authority confirmed where the account allows it.
                3. Two-step login switched on for the online account.
                4. The provider's phone number recorded in the account register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child account's provider holds current contact details, two-step login is on, and the check is dated within the past year."
                cadence: rolling
              tasks:
                - "Log in and check the address and email the provider holds"
                - "Turn on two-step login for the child's account"
                - "Add the provider's phone number to the account register"
                - "Confirm contact details with every provider @recurring(yearly)"
            - name: How junior account rules work where you live
              description: |-
                ## Purpose
                Child accounts come with rules that are easy to get wrong: who may pay in, whether money can ever come out early, what happens at 16 and 18, and what happens if the child dies or the family moves abroad. An evening with the official guidance and a page of notes avoids the most expensive misunderstandings.

                ## Milestones
                1. Official guidance for your child account type read in full.
                2. Rules on contributions, early access, transfers and maturity summarised on one page.
                3. Three questions you could not answer sent to the provider.
                4. The answers added to the summary.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your child account's rules exists, with the provider's written answers to three open questions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the official guidance for your child account type"
                - "Summarise who can pay in, early access and maturity rules on one page"
                - "Send the provider your three unanswered questions"
                - "Add the provider's answers to the summary"
            - name: Eighteen-year compounding scenarios
              description: |-
                ## Purpose
                Small monthly amounts look pointless until you see what eighteen years of growth can do, and big targets look reachable until you test them against realistic returns. Running three scenarios, low, middle and high growth, with your actual contribution plan sets expectations for you and for the relatives who pay in.

                ## Milestones
                1. Three growth assumptions chosen from a published source rather than guessed.
                2. Projected value at 18 for each, using your contribution plan.
                3. The effect of fees shown by rerunning one case with a higher charge.
                4. A one-paragraph summary ready to share with contributors.

                ## Notes
                Projections are illustrations, not promises. Use real-terms figures so the result is in today's money.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sheet shows the projected value at 18 under three growth assumptions and one higher-fee case, with a summary paragraph."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick three growth assumptions from a published source"
                - "Ask the agent to build a projection sheet from your contribution plan"
                - "Rerun the middle case with a fee one percentage point higher"
                - "Write a one-paragraph summary for contributors"
            - name: Who pays tax on a child's investment income
              description: |-
                ## Purpose
                Rules on children's investment income vary more than most parents expect: some income is the child's, some is treated as the parent's, and the answer can depend on who gave the money and which account holds it. Learning the rule that applies to your accounts before the balance grows means you choose account types with the tax consequence in view.

                ## Milestones
                1. Your tax authority's guidance on children's savings and investment income read.
                2. Whether parental gifts are treated differently from relatives' gifts noted.
                3. Each child account labelled with whose income it counts as.
                4. Open questions listed for an accountant, if any remain.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child account is labelled with whose income it counts as for tax, based on the tax authority's published guidance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your tax authority's guidance on children's investment income"
                - "Note whether gifts from parents are taxed differently from other gifts"
                - "Label each child account with whose income it counts as"
                - "List any open questions to put to an accountant"
            - name: Reading the factsheet for the child's fund
              description: |-
                ## Purpose
                Fund factsheets and key information documents tell you the ongoing charge, what the fund holds, its risk rating and how it has behaved, but they are written for professionals. Learning to read the one for your child's fund means you can explain it to grandparents now and to the child later.

                ## Milestones
                1. The current factsheet and key information document downloaded.
                2. Ongoing charge, top holdings, regional split and risk rating noted.
                3. Every unfamiliar term looked up.
                4. A three-line plain-English summary written for the family.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-line plain-English summary of the child's fund, covering cost, contents and risk, is saved with the account records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the factsheet and key information document for the fund"
                - "Note the ongoing charge, regional split and risk rating"
                - "Look up every term on the factsheet you could not explain"
                - "Write a three-line summary of the fund for the family"
            - name: Assets in a child's name and student aid assessments
              description: |-
                ## Purpose
                In some countries, money held in the child's own name counts more heavily against means-tested student support than money held by a parent; the US federal aid formula is a well-known example. Knowing how your system treats each account type, years before any application, lets you decide where new money goes without a nasty surprise at 17.

                ## Milestones
                1. Your country's rules on how student support assessments treat a child's assets found.
                2. Each child account classed as counted, partly counted or ignored.
                3. The likely effect noted for your family's circumstances.
                4. Any change to where new contributions go decided and recorded.

                ## Notes
                Investing for course fees themselves is a separate plan. This project is only about how accounts in the child's name are assessed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child account is classed by how student support assessments treat it, with a recorded decision about where new money goes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find how your student support system treats assets in a child's name"
                - "Class each child account as counted, partly counted or ignored"
                - "Note what this means for a family with your income"
                - "Decide whether new contributions should go somewhere else"
            - name: Transfer rules between children's account types
              description: |-
                ## Purpose
                Older child accounts, such as the UK's child trust funds, often carry higher charges and fewer fund choices than newer ones, and some can be transferred into the current type. Learning which transfers are allowed, which close the old account and which trigger tax stops you cashing out by mistake.

                ## Milestones
                1. Every transfer route between your child account types listed.
                2. Each route marked allowed, allowed with conditions or not allowed.
                3. The correct transfer method for each allowed route noted, so nothing is cashed out first.
                4. A decision on any transfer worth making.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the allowed transfer routes between your child account types and records a decision on each existing account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every child account you hold and its type"
                - "Check which transfers between those types are allowed"
                - "Note that transfers must go provider to provider, not via a withdrawal"
                - "Decide whether any existing account is worth transferring"
            - name: Duties of the registered contact or custodian
              description: |-
                ## Purpose
                Whoever opens a child's account usually becomes its registered contact or custodian, with a legal duty to manage it for the child's benefit and not their own. Knowing what you may and may not do, such as whether you can withdraw to pay for a school trip, protects both you and the child.

                ## Milestones
                1. The provider's terms on the registered contact's role read.
                2. What counts as using money for the child's benefit noted for your account type.
                3. The rules on changing the registered contact understood.
                4. A one-page note of your duties kept with the account register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of the registered contact's powers and duties, drawn from the provider's terms and official guidance, is kept with the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the section of the terms that describes your role"
                - "Note what withdrawals, if any, you are allowed to make"
                - "Check how the registered contact can be changed"
                - "File a one-page duties note with the account register"
            - name: Switching a child's account to a cheaper provider
              description: |-
                ## Purpose
                Charges on a child's account opened years ago may not have kept pace with the market, or the money may sit in an old fund with a high ongoing charge. Comparing the total yearly cost against two alternatives and switching through a formal transfer can save a meaningful sum by age 18.

                ## Milestones
                1. Current total yearly cost calculated from platform and fund charges.
                2. Two alternative providers costed for the same balance.
                3. Exit fees and any time out of the market checked.
                4. A switch made through a formal transfer, or a decision to stay recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cost comparison of the current and two alternative providers ends in a completed transfer or a recorded decision to stay."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the current total yearly cost in money, not percentages"
                - "Cost the same balance with two other providers"
                - "Check exit fees and how long the money would be out of the market"
                - "Start the transfer from the new provider's side, or record why you stayed"
            - name: Cash child account to invested account switch
              description: |-
                ## Purpose
                Many children's tax-free accounts are opened as cash by default, which suits money needed soon but tends to lose value against inflation over a decade or more. Weighing the years left before handover against your comfort with ups and downs decides whether to move some or all of it into an invested version.

                ## Milestones
                1. Years remaining until the child gains control written down.
                2. The cash account's rate compared with inflation over recent years.
                3. A decision on how much to move, recorded with the reasons.
                4. Any switch done as a transfer so the tax-free status is kept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on moving the child's cash account into an invested account, with any switch completed by formal transfer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the years left until the child gains control"
                - "Compare the cash rate with inflation for the last five years"
                - "Decide how much, if any, to move into an invested account"
                - "Request the switch as a transfer to keep the tax-free status"
            - name: Consolidating scattered savings for one child
              description: |-
                ## Purpose
                Savings bonds from a great-aunt, a bank account from a naming ceremony and a small fund from a grandparent are easy to lose track of, and each may carry its own fees or a poor rate. Bringing them into one or two accounts, where the rules allow, makes the money visible and far easier to hand over.

                ## Milestones
                1. Every holding in the child's name found, including paper certificates.
                2. Each holding's rules on withdrawal and transfer checked.
                3. Holdings that can be combined moved into the main account.
                4. Holdings that must stay put listed in the register with a reason.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every holding in the child's name is either merged into the main account or listed in the register with a reason it stays separate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for paper certificates and passbooks in the child's name"
                - "Check the withdrawal and transfer rules for each holding"
                - "Move the holdings that allow it into the main account"
                - "List the rest in the register with the reason they stay"
            - name: Fairness rules across siblings
              description: |-
                ## Purpose
                With two or three children born years apart, equal monthly payments do not produce equal pots, and grandparents may favour the eldest without meaning to. Agreeing what fair means in your family, whether equal contributions, equal pots at 18 or support based on need, prevents resentment when the accounts are handed over.

                ## Milestones
                1. A family definition of fairness written down.
                2. Each child's total contributions and current value compared.
                3. Any catch-up plan for a younger child agreed.
                4. Grandparents and other contributors told the family's approach.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fairness rule for the children's accounts is agreed by both parents and shared with regular contributors."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether fair means equal payments, equal pots or based on need"
                - "Compare each child's contributions and current value"
                - "Agree any catch-up plan for a younger child"
                - "Tell grandparents and godparents the approach you chose"
                - "Compare sibling totals and adjust payments if needed @recurring(yearly)"
            - name: Pension account for a child decision
              description: |-
                ## Purpose
                Some countries let parents open a pension for a child, sometimes with a government top-up on contributions, while others only allow it once the child has earned income, as with a custodial Roth IRA in the US. The money is locked away for decades, so it suits families who have already funded their own retirement and the child's main account.

                ## Milestones
                1. Whether a child pension exists where you live, and its rules, confirmed.
                2. Any government top-up or earned-income condition noted.
                3. Your own pension and the child's main account confirmed as funded first.
                4. A yes or no decision recorded with the reason.

                ## Notes
                Money in a child pension cannot normally be touched until the child reaches pension age. Treat it as a gift to their much older self.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes or no decision on a pension for the child, based on the local rules and your own pension position."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether a pension for a child can be opened where you live"
                - "Note any government top-up or earned-income rule"
                - "Confirm your own pension is on track before going further"
                - "Record a yes or no decision with one line of reasoning"
            - name: Placing a large one-off gift for a child
              description: |-
                ## Purpose
                An inheritance or generous gift from a grandparent can be several times a child account's annual limit, and where it goes decides who controls it and how it is taxed. Mapping the options, such as spreading it over several years' allowances, a parent-held earmarked account or a trust set up with professional help, lets the giver and parents agree before the money is spent or left in cash.

                ## Milestones
                1. The amount, the giver's wishes and any timing constraints written down.
                2. How much can go into tax-free child accounts this year and in later years worked out.
                3. The remaining options listed, with any trust referred to a specialist rather than set up yourself.
                4. A placement plan agreed with the giver and recorded.

                ## Notes
                Trust structures and gifting tax rules belong with a specialist and with the family trusts area; this project only decides where this child's money sits.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written placement plan for the gift, agreed with the giver, shows how much goes into child accounts each year and where the rest sits."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the gift amount and what the giver hopes it is for"
                - "Work out how much fits in the child's allowance this year and next"
                - "List where the rest could sit and who would control it"
                - "Agree the plan with the giver and record it"
            - name: Risk check five years before handover
              description: |-
                ## Purpose
                Around 13, the question shifts from growth to readiness: the child will soon control the money, and a large fall just before handover could shape how they see investing for life. A deliberate check of the fund, the balance and the child's likely plans decides whether to keep the current fund or move part of it somewhere steadier.

                ## Milestones
                1. Years to handover, current value and the fund's risk level written down.
                2. The child's likely plans for the money discussed in general terms.
                3. A decision on keeping or adjusting the fund recorded with reasons.
                4. A date set to look again at 16.

                ## Notes
                Investing specifically for course fees is covered elsewhere; this check is about the handover itself. Agree any change with an adviser if the sum is large.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the fund's risk level is made between the child's 13th and 14th birthdays, with a follow-up date at 16."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the years to handover, current value and fund risk level"
                - "Ask your child in general terms what they might want the money for"
                - "Decide whether to keep the current fund or adjust part of it"
                - "Set a reminder to look again at 16"
            - name: First birthday or naming day gift appeal
              description: |-
                ## Purpose
                Early celebrations bring a wave of gifts, and relatives are often glad to give something lasting instead of more toys. A short, warm note with the account details, sent before a naming ceremony, christening or first birthday, can seed the account in a single weekend.

                ## Milestones
                1. A short gift note written, with payment details or a gifting link.
                2. The note sent at least two weeks before the event.
                3. Each gift recorded in the gift log.
                4. Thank-you notes sent within a month.

                ## Notes
                Keep it optional and light. Some relatives will still want to give a present, and that is fine.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gift note went out at least two weeks before the event and every resulting gift is logged and thanked within a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a short, warm note with the account's payment details"
                - "Send the note at least two weeks before the celebration"
                - "Record every gift from the celebration in the gift log"
                - "Send thank-you notes within a month"
            - name: Showing a ten-year-old their own account
              description: |-
                ## Purpose
                Children who see their own account grow grasp long-term saving in a way that lectures rarely manage. One sit-down around age 10, looking at the statement, the gift log and the outline of the purpose letter, makes the account real to them years before they control it.

                ## Milestones
                1. A simple one-page view prepared: value, total paid in and growth.
                2. The sit-down held, with the child asking questions.
                3. The child's questions written down for next time.
                4. A plan agreed for how often to show them again.

                ## Notes
                Wider money lessons belong in a separate plan; keep this one about their account.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The child has seen their account's value, contributions and growth in one sit-down, and their questions are recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Prepare a one-page view of value, payments in and growth"
                - "Hold a twenty-minute sit-down with the statement and gift log"
                - "Write down the questions your child asked"
                - "Agree how often you will show them the account again"
            - name: Teen co-management from sixteen
              description: |-
                ## Purpose
                In some countries a teenager can take over managing their own child account at 16, though they cannot withdraw until 18; elsewhere the custodian keeps sole control until the account matures. Either way, giving a 16-year-old read access or a say in the next fund decision is a low-risk rehearsal for handover.

                ## Milestones
                1. The rules on teenage management for your account type confirmed.
                2. The teenager given whatever access the account allows.
                3. One real decision, such as reviewing the fund, made together.
                4. Who holds which login and authority written in the register.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the child's 17th birthday they have had access to their account and made one recorded decision on it with you."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your child can manage the account from 16"
                - "Set up the access the provider allows for a teenager"
                - "Review the fund together and record what you decided"
                - "Update the register with who holds which authority"
            - name: Preparing for the age-of-majority handover
              description: |-
                ## Purpose
                At 18, or 21 in some places, the account becomes the child's outright, and most providers either convert it automatically or ask the young person to act. Starting 18 months ahead gives time to check the provider's process, gather the child's own identity documents and agree how the first months of control will go.

                ## Milestones
                1. The provider's maturity process and dates confirmed in writing.
                2. The child's own identity documents and bank account ready.
                3. A plain conversation held about what the money is for and what happens next.
                4. The purpose letter ready to hand over.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three months before handover the provider's process is confirmed in writing, the child's documents are ready and the purpose letter is prepared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the provider in writing how the account matures and what the child must do"
                - "Help your child get their own photo ID and bank account"
                - "Talk through what the money is for and the first year after handover"
                - "Prepare the purpose letter to give on the day"
            - name: Handover day and conversion to an adult account
              description: |-
                ## Purpose
                On the day the account matures, the child may need to log in, verify their identity and choose whether to keep investing, move to an adult tax-free account or withdraw. Planning the day itself, with you present but not deciding, avoids the account freezing in limbo or being cashed out on impulse.

                ## Milestones
                1. The child's own login set up and identity verified with the provider.
                2. The child's choice made: keep invested, convert to an adult account or withdraw.
                3. The purpose letter and gift log handed over.
                4. Your name removed from the account and the family register updated.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The matured account is in the child's sole name with their chosen next step done, and the family register shows the change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sit with your child while they set up their own login"
                - "Let your child choose to keep investing, convert or withdraw"
                - "Hand over the purpose letter and gift log"
                - "Update the family register to show the account has passed to them"
            - name: Grandparents paying into a grandchild's account
              description: |-
                ## Purpose
                Grandparents are often the biggest contributors to a child's account, but they may not be able to pay in directly, may prefer privacy about amounts, or may be giving from their own retirement savings without checking. Agreeing how they pay in, how it is recorded and what they hear back each year keeps their help easy and well documented.

                ## Milestones
                1. How grandparents can pay in confirmed with the provider.
                2. A regular or occasional giving arrangement agreed with them.
                3. Their gifts recorded in the gift log with dates.
                4. A short yearly summary sent to them.

                ## Notes
                If grandparents are making large or regular gifts, their own tax and estate position is a matter for them and their adviser; point them there rather than advising.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Grandparents have a confirmed way to pay in, their gifts are logged, and they received a yearly summary of the account."
                cadence: rolling
              tasks:
                - "Ask the provider how grandparents can pay into the account"
                - "Agree with grandparents whether gifts are regular or occasional"
                - "Log each grandparent gift with its date"
                - "Send grandparents a short yearly summary of the account @recurring(yearly)"
            - name: Separated parents sharing one child's account
              description: |-
                ## Purpose
                When parents live apart, the account is usually registered to one of them, which can leave the other unsure what is in it or whether contributions are being used properly. A written agreement on who is the registered contact, who pays what and how information is shared reduces conflict and protects the child's money.

                ## Milestones
                1. The registered contact confirmed and recorded.
                2. Each parent's contributions agreed in writing.
                3. A way of sharing statements with the other parent set up.
                4. What happens if the registered contact needs to change agreed.

                ## Notes
                If a court order or formal arrangement covers the child's finances, follow it and take legal advice on anything it does not cover.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written agreement names the registered contact, each parent's contributions and how statements are shared, and both parents have confirmed it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm who is the registered contact on the account"
                - "Write down what each parent will contribute"
                - "Agree how the other parent will see statements"
                - "Send the other parent the latest statement @recurring(quarterly)"
            - name: Starting small on a tight budget
              description: |-
                ## Purpose
                Several providers accept very small monthly payments, and a steady amount from birth can matter more than a large one started at 12. For single-parent or lower-income households the aim is a sustainable amount, any government-funded child savings scheme checked, and family gifts directed in, without guilt about what others can afford.

                ## Milestones
                1. Providers with low or no monthly minimums identified.
                2. Any government-funded or matched child savings scheme you qualify for checked.
                3. A small monthly amount set up that you could keep paying in a tight month.
                4. Relatives told that small gifts into the account are welcome.

                ## Notes
                Some countries run matched savings schemes for lower-income families; a government match can beat any investment return, so check those first.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A small, sustainable monthly payment is running into the child's account, and eligibility for any government or matched scheme is recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find providers with the lowest monthly minimum for child accounts"
                - "Check whether you qualify for any government or matched child savings scheme"
                - "Set up the smallest amount you could keep paying in a tight month"
                - "Tell relatives that small gifts into the account are welcome"
            - name: Disabled child's account and future means-tested support
              description: |-
                ## Purpose
                For a child who may rely on means-tested benefits or care funding as an adult, money that becomes theirs outright at 18 can reduce that support, and they may not have capacity to manage it. Specialist accounts exist in some countries, such as ABLE accounts in the US, and trusts are often used instead, so this decision needs specialist advice before money builds up in the child's name.

                ## Milestones
                1. The adult benefits and care funding your child may rely on listed.
                2. How assets in their name would affect each one found out.
                3. Specialist options in your country identified, including disability-specific accounts.
                4. Advice taken from a specialist adviser or charity and the plan recorded.

                ## Notes
                A disability charity can often point you to advisers who know this field. Pause large contributions to an account in the child's name until you have advice.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan, informed by specialist advice, sets out where money for the disabled child is held and how it affects future support."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the adult benefits and care funding your child may rely on"
                - "Find out how savings in their name would affect each one"
                - "Ask a disability charity to recommend a specialist adviser"
                - "Record the advice and where new money for the child will go"
            - name: Kinship carers, adoptive and foster families
              description: |-
                ## Purpose
                Children who have been in state care sometimes have a government-funded account already opened for them, and kinship carers or special guardians may be unsure whether they can act as its registered contact. Working out what exists, who is allowed to manage it and how to add to it means the child does not lose money already set aside for them.

                ## Milestones
                1. Any existing account opened for the child by a government or agency identified.
                2. Who can act as registered contact under your care arrangement confirmed.
                3. Access transferred or set up in your name where allowed.
                4. A plan for adding to the account recorded.

                ## Notes
                The child's social worker or the placing agency is usually the first contact. In the UK, for example, a charity manages junior ISAs for looked-after children.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any existing account for the child is found, the right registered contact is in place under your care arrangement and a contribution plan is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the child's social worker whether an account was opened for them"
                - "Check whether your care arrangement lets you be the registered contact"
                - "Apply to become the registered contact if you are eligible"
                - "Record how and when you plan to add to the account"
            - name: Moving countries with a child's account
              description: |-
                ## Purpose
                Moving abroad can stop new contributions to a tax-free child account, change how its growth is taxed in the new country and make the provider unwilling to keep you as a customer. Checking the rules before you move means you can keep the account, pause it properly or open something suitable in the new country.

                ## Milestones
                1. The provider's policy for customers who move abroad confirmed in writing.
                2. Whether contributions can continue after the move checked.
                3. How the new country taxes the account found out, with professional help if needed.
                4. A plan recorded: keep, pause or open a new-country account.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan for each child account covers contributions, tax in the new country and the provider's policy, made before the move."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the provider what happens to the account when you move abroad"
                - "Check whether contributions are allowed after you become non-resident"
                - "Ask a cross-border tax adviser how the new country taxes the account"
                - "Record whether you will keep, pause or replace the account"
            - name: Teenager's earnings matched into their account
              description: |-
                ## Purpose
                Teenagers with a first paper round or weekend job are at a good moment to see how investing works with their own money. Offering to match part of what they save into their account, at a rate you can afford, rewards the habit and adds to the pot without a lecture.

                ## Milestones
                1. A matching rate and yearly cap agreed with the teenager.
                2. How their savings reach the account set up.
                3. Matched amounts paid in each month.
                4. Their savings and your match shown together at the birthday review.

                ## Notes
                In some countries a teenager's own earnings open extra options, such as a custodial retirement account; check the earned-income rules first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written matching rate and cap are in place, and matched amounts have reached the teenager's account for six months."
                cadence: rolling
              tasks:
                - "Agree a matching rate and yearly cap with your teenager"
                - "Set up how their savings reach the account"
                - "Pay this month's matched amount into the account @recurring(monthly:28)"
                - "Show their savings and your match together at the birthday review"
            - name: Tracing a forgotten government-seeded child account
              description: |-
                ## Purpose
                Several countries have run schemes that opened accounts automatically for children born in certain years, and many were never claimed because the letters went to an old address. If your child was born in those years, a search through the official tracing service can turn up money nobody knew existed.

                ## Milestones
                1. Whether a past government scheme covered your child's birth year checked.
                2. A tracing request made through the official service.
                3. Any account found linked to your current details.
                4. The account added to the register and a decision made on transferring it.

                ## Notes
                In the UK, child trust funds for children born between 2002 and 2011 are a well-known example. Use only the official tracing service, never a paid finder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tracing request through the official service is completed for each eligible child, and any account found is in the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether any government scheme opened accounts in your child's birth year"
                - "Submit a tracing request through the official service"
                - "Update the provider with your current address if an account turns up"
                - "Add any account found to the register and decide whether to transfer it"
            - name: Using the child's own tax allowances in a custodial account
              description: |-
                ## Purpose
                In taxable custodial accounts the child usually has their own yearly allowances for income and gains, and money given by grandparents may not fall under parental rules. Realising gains each year up to the child's allowance, then rebuying, can reset the cost base and reduce tax at handover, but the rules vary and mistakes are costly.

                ## Milestones
                1. The child's yearly allowances for income and gains confirmed.
                2. Unrealised gains in the account calculated each year.
                3. Any gains realised within the allowance, with rebuying rules respected.
                4. Each sale and its tax position recorded.

                ## Notes
                Check the rules on rebuying the same investment soon after selling, which can cancel the effect. An accountant's view is worth having in the first year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's unrealised gain is recorded and any gain realised stayed within the child's allowance, confirmed by the year's tax statement."
                cadence: cyclic
              tasks:
                - "Confirm the child's yearly allowances for income and gains"
                - "Ask an accountant how rebuying rules apply to the account"
                - "Calculate unrealised gains against the allowance @recurring(yearly)"
                - "Record each sale and the gain realised"
            - name: Layering several account types for one child
              description: |-
                ## Purpose
                Families who can save more than a single child account allows need a clear order for where money goes next: the tax-free child account first, then perhaps a parent-held earmarked account, a custodial account or a child pension. Writing the order down, with the reason for each layer, stops new money landing wherever is easiest that month.

                ## Milestones
                1. Each available account type ranked in fill order.
                2. The yearly amount intended for each layer set.
                3. Control age, tax and access written beside each layer.
                4. The order shared with everyone who contributes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fill order for the child's accounts states yearly amounts, control and tax for each layer and is shared with contributors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank the account types available to your child in fill order"
                - "Set a yearly amount for each layer"
                - "Note control age, tax and access beside each layer"
                - "Ask the agent to draft a one-page summary of the order for contributors"
            - name: Backup plan if the registered contact dies or loses capacity
              description: |-
                ## Purpose
                If the parent managing the account dies or becomes unable to act, the account can freeze until someone with legal authority steps in, which can take months. A short plan naming who should take over, matched to the guardian named in your will and the provider's own process, keeps the child's money managed.

                ## Milestones
                1. The provider's process when a registered contact dies or loses capacity confirmed.
                2. A named person agreed to take over, ideally the guardian in your will.
                3. The account register and this plan stored where that person can find them.
                4. Your will or guardianship wishes checked to mention the child's accounts.

                ## Notes
                Making or changing a will or power of attorney is work for a solicitor or lawyer; this project prepares what they need.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written backup plan names who takes over each child account, matches the will's guardian, and is stored where that person can find it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the provider what happens if the registered contact dies"
                - "Agree the arrangement with the person you would want to take over"
                - "Tell your lawyer the child accounts exist when you next review your will"
                - "Check the backup plan still matches your will and guardian @recurring(yearly)"
            - name: Handover options when the child is not ready at eighteen
              description: |-
                ## Purpose
                Some young people are not ready for a sizeable sum at 18, because of addiction, a controlling partner, a mental health crisis or simple immaturity, yet in most child accounts the law gives them control regardless. Knowing what you can and cannot do, and what can still be done for future money, lets you act honestly rather than hoping.

                ## Milestones
                1. The legal limits on delaying or restricting handover for your account type confirmed.
                2. Future contributions redirected to a parent-held or trust arrangement if concerns are serious.
                3. A plan for the handover conversation drafted, with support people identified.
                4. Specialist legal or family advice taken where there is a safety risk.

                ## Notes
                You usually cannot keep money that is legally the child's. If there is a safety concern, speak to a specialist well before the handover date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan sets out what can legally be done about the handover, where future money goes and who supports the conversation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm whether the account's handover can be delayed in any way"
                - "Redirect new contributions away from the child's name if concerns are serious"
                - "Draft how you will raise your worries with your child"
                - "Book specialist advice if there is a safety risk"
---

# Children's Investment Accounts

This area is for parents opening and running investment accounts for their children, from a junior tax-free account or custodial account set up at birth to the day the money passes to the child at 18 or 21. It starts with the foundations (the account types where you live, whose name the money sits in, a provider, a fund and a contribution you can sustain), then the machinery that keeps the accounts funded and inside their limits, the rules worth learning, the decisions about switching, fairness and large gifts, the dated moments from a first birthday gift appeal to handover day, situations such as separated parents, grandparents, a disabled child or kinship care, and finally specialist work on the child's own tax allowances, layering accounts and backup plans.

What repeats is a monthly check that contributions and child payments arrived, a quarterly value log and allowance tally, and a yearly round of birthday reviews, contribution step-ups, year-end top-ups, tax records and contact checks. The Purchase decision, Monthly budget and bills and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
