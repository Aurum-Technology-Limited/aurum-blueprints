---
id: personal-finance.personal-insolvency-debt-relief
name: Personal Insolvency & Debt Relief
description: "An honest insolvency test, free regulated advice, a full creditor schedule and the paperwork, decisions and routines that carry you through bankruptcy, an IVA or a debt relief order and out the other side."
category: personal
version: 1.0.0
tags: [personal-finance, personal-insolvency-debt-relief, everyone, bankruptcy, iva, debt-relief-order, insolvency, debt-advice]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - savings-goal
    - monthly-budget-bills
    - vendor
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Personal Insolvency & Debt Relief
          description: "Understanding bankruptcy, individual voluntary arrangements and debt relief orders when debts become unmanageable."
          projects:
            - name: Personal insolvency test on your own numbers
              description: |-
                ## Purpose
                Insolvency has two everyday tests: you cannot pay your debts as they fall due, or everything you owe is more than everything you own. Running both tests on your real figures, with essential bills paid first, tells you whether you are looking at a tight month or at a problem a formal debt solution exists to solve. It also gives the adviser a starting point instead of a feeling.

                ## Milestones
                1. Monthly take-home income written down from the last three payslips or benefit statements.
                2. Essential living costs and priority bills totalled for a normal month.
                3. Contractual monthly debt payments totalled and set against what is left.
                4. Total owed set against the realistic value of everything you own.
                5. A one-line result recorded: cash flow shortfall, balance sheet shortfall, both or neither.

                ## Notes
                Use the minimum contractual payments, not what you have been managing to pay. Passing or failing this test is not a legal conclusion; it is the evidence you take to a qualified adviser.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated sheet shows monthly income, essential costs, contractual debt payments, total debts and total assets, with the shortfall written as a single number."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your monthly take-home pay from the last three payslips"
                - "Total the essential bills you must pay before any debt"
                - "Add up the contractual monthly payment on every debt"
                - "List what you own with a cautious resale value for each item"
                - "Record the monthly and overall shortfall on one dated sheet"
            - name: Court papers and enforcement letters triage
              description: |-
                ## Purpose
                Court claims, statutory demands, bailiff notices and repossession letters each carry a deadline, and missing one can turn a debt you could have challenged or paid in instalments into a judgment or an enforcement visit. Opening everything, sorting by deadline and getting the urgent ones in front of an adviser within days is the first job when debts have got out of hand.

                ## Milestones
                1. Every unopened letter from a creditor, court or enforcement agent opened and dated.
                2. Each document labelled by type: reminder, default notice, court claim, judgment, demand or enforcement notice.
                3. The response deadline on each court or legal document written in red on the front.
                4. Anything with a deadline under 21 days shown to a debt adviser or legal advice service.
                5. A response sent or filed for every court document before its deadline.

                ## Notes
                A court form usually states its own reply period; trust the form, not a rule of thumb. Ignoring a claim does not make it go away, and a judgment entered by default is far harder to deal with than a reply sent on time.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every creditor, court and enforcement document is opened, labelled by type and deadline, and every court document has a response sent before its stated date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open every unopened envelope from creditors, courts and collectors today"
                - "Sort the letters into piles by type and the date on each"
                - "Write the reply deadline in red on every court or legal document"
                - "Phone a free debt advice line about anything due within 21 days @priority(high)"
                - "File or send a reply to each court document before its deadline"
            - name: Full creditor schedule for a debt relief application
              description: |-
                ## Purpose
                Every formal debt solution starts with a complete list of who you owe, and a creditor left off can fall outside the arrangement and keep chasing you afterwards. A schedule with each creditor's name, address, account reference, balance, type of debt and whether it is joint or secured is exactly what an adviser, insolvency practitioner or official receiver will ask for first.

                ## Milestones
                1. Every creditor listed, including family loans, overpaid benefits, tax arrears, buy now pay later and catalogue accounts.
                2. Name, postal address, account reference and current balance recorded for each.
                3. Each debt marked as secured or unsecured, sole or joint, and priority or non-priority.
                4. Debts sold to collection agencies traced to the current owner.
                5. The schedule cross-checked against a statutory credit report from each credit reference agency.

                ## Notes
                Include debts you dispute and debts you think are too old to chase; mark them as such rather than leaving them out. Your adviser decides how they are treated.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated creditor schedule lists every debt with creditor address, reference, balance, type and ownership, checked against at least one full credit report."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request your free statutory credit report from each credit reference agency"
                - "List every creditor with address, account reference and balance"
                - "Mark each debt as secured or unsecured and sole or joint"
                - "Trace any debt sold on to a collection agency to its current owner"
                - "Update the balances on the schedule from the latest statements @recurring(monthly:18)"
            - name: Priority and non-priority debt sort
              description: |-
                ## Purpose
                Some debts carry consequences far worse than others: mortgage or rent arrears can cost you your home, unpaid energy can mean disconnection, council or property tax and court fines can lead to enforcement or even prison in some places. Sorting debts by consequence rather than by size or by who shouts loudest makes sure the money you do have protects the home, the heating and your liberty first.

                ## Milestones
                1. Every debt on the creditor schedule tagged as priority or non-priority.
                2. The worst realistic consequence of non-payment noted beside each priority debt.
                3. Current arrears on each priority debt totalled.
                4. A payment order agreed with your adviser that covers priority debts before any card or loan.

                ## Notes
                A card company phoning daily is not a priority creditor. A quiet letter about property tax arrears can be. Ask your adviser which debts count as priority under your local rules.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each debt is tagged priority or non-priority with its consequence noted, and a written payment order puts every priority debt first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tag each debt on your schedule as priority or non-priority"
                - "Write the worst realistic consequence beside every priority debt"
                - "Total the arrears owed on housing, energy, tax and fines"
                - "Agree a payment order with your adviser that puts priority debts first"
            - name: Free regulated debt advice appointment
              description: |-
                ## Purpose
                Bankruptcy, an individual voluntary arrangement and a debt relief order each suit different people, and choosing the wrong one can cost a home, years of payments or a fee for nothing. Free, regulated debt advice charities and services give a full assessment at no cost, and some are the only route into certain solutions. Booking one early, with your figures ready, means the advice is about your situation rather than a general leaflet.

                ## Milestones
                1. A free debt advice service that is regulated or licensed in your country chosen.
                2. The first appointment booked, by phone, online or in person.
                3. Your insolvency test, creditor schedule and budget sent before the appointment.
                4. The adviser's options, recommendation and next steps written down the same day.
                5. A follow-up date or case reference recorded.

                ## Notes
                Start from the **Meeting notes** template. If a firm asks for money before giving advice, or calls you after you filled in a web form, check its regulation before saying anything else.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A first appointment with a free, regulated debt adviser has taken place, with written notes of options, recommendation and next steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find two free debt advice services regulated in your country"
                - "Book the earliest appointment with one of them"
                - "Send your creditor schedule and budget before the appointment"
                - "Write up the adviser's options and recommendation the same day"
            - name: Standard income and expenditure statement
              description: |-
                ## Purpose
                Creditors, insolvency practitioners and official receivers judge what you can afford using a standard budget format with trigger figures for food, housekeeping, travel and other spending. Completing one carefully, with evidence for anything above the guideline, decides whether you qualify for a low-income solution, how much an arrangement will ask of you, and whether the budget is one you can actually live on for years.

                ## Milestones
                1. Every household income source recorded, including partner contributions, benefits and maintenance.
                2. Spending grouped into the categories the standard statement uses.
                3. Each category compared with the published guideline figure.
                4. A written reason and evidence ready for any category above its guideline.
                5. A monthly surplus or deficit figure agreed with your adviser.

                ## Notes
                Do not shave figures to look like a better payer. An arrangement built on a budget you cannot live on is the commonest reason it fails in the second year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed income and expenditure statement in the standard format, with every above-guideline item explained and a surplus figure agreed with an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your adviser which standard statement format they use"
                - "Pull three months of bank statements to find real spending figures"
                - "Fill in each category and compare it with the guideline figure"
                - "Write a reason and gather evidence for any category above the guideline"
                - "Refresh the statement figures against current bills @recurring(quarterly)"
            - name: Asset and equity inventory before any formal solution
              description: |-
                ## Purpose
                What you own decides which solutions are open to you and what you could lose in them. A debt relief order usually has a low asset limit, bankruptcy can mean a trustee selling assets above modest allowances, and an IVA may ask you to release equity towards the end. A clear list of the home, vehicles, savings, pensions, valuables and money owed to you lets your adviser show exactly what each option would put at risk.

                ## Milestones
                1. Home equity estimated from a recent valuation and the mortgage redemption figure.
                2. Vehicles listed with make, age, likely sale value and any finance outstanding.
                3. Savings, pensions, shares and insurance policies with a cash value listed.
                4. Items worth more than a few hundred pounds each listed with a cautious value.
                5. Money owed to you, such as refunds or loans to friends, recorded.

                ## Notes
                Value things at what they would actually sell for, not what you paid. Do not sell, give away or transfer anything while you are deciding; see the preference payments project first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated asset list gives a realistic value for the home equity, vehicles, savings, pensions and valuable items, ready to share with an adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lender for a mortgage redemption figure"
                - "Check two recent sale prices for similar homes nearby"
                - "Look up the trade value of each vehicle you own"
                - "List savings, pensions and any policy with a cash-in value"
            - name: Insolvency evidence and document pack
              description: |-
                ## Purpose
                Applications stall when the paperwork is missing: an insolvency practitioner may ask for months of bank statements, an official receiver for payslips and pension statements, an intermediary for proof of benefits. Gathering the full pack once, in one folder, means an application can be submitted the week you decide rather than six weeks later while interest and charges keep piling up.

                ## Milestones
                1. Photo ID and proof of address scanned.
                2. The last three months of payslips or benefit award letters, and six months of bank statements, saved.
                3. The latest statement or letter from every creditor filed against the creditor schedule.
                4. Tenancy agreement or mortgage statement, pension statements and vehicle documents added.
                5. Everything stored in one folder, paper and digital, with an index page.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One indexed folder holds ID, proof of address, income evidence, six months of bank statements and the latest letter from every creditor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create one folder, paper and digital, for every insolvency document"
                - "Download six months of statements for every bank account you hold"
                - "Scan your ID, proof of address and latest payslips"
                - "File the newest letter from each creditor against the schedule"
                - "Write an index page listing everything in the folder"
            - name: Debt advert and fee trap red flags check
              description: |-
                ## Purpose
                Search results for debt help are crowded with lead generators that pass your details to whichever firm pays most, and with firms that charge large set-up fees for arrangements free services would recommend against. Knowing the warning signs before you fill in any form protects both your money and your choice of solution.

                ## Milestones
                1. The regulator or licensing body for debt advice and insolvency practitioners in your country identified.
                2. A short list of red flags written: cold calls, pressure to sign quickly, fees before advice, claims that debts can be written off with no downsides.
                3. Any firm already in contact with you checked on the official register.
                4. Unwanted contact from lead generators stopped in writing.

                ## Notes
                A government-sounding name or a logo that looks official proves nothing. Check the register yourself, using an address you typed in, not a link from an advert.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written red flags list exists, and every firm that has contacted you has been checked on the official register with the result noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official register for debt advisers and insolvency practitioners"
                - "Write a list of five warning signs of a fee trap"
                - "Check each firm that has contacted you against the register"
                - "Write to any unwanted firm asking it to delete your details"
            - name: Avoiding preference payments and asset transfers before applying
              description: |-
                ## Purpose
                In bankruptcy a trustee can look back at the years before the application and reverse payments that favoured one creditor, such as repaying a parent in full, or transfers of property for less than it was worth. These can be undone, and in some cases count as misconduct. Knowing what not to do while you decide keeps the process clean and protects the people you would most like to protect.

                ## Milestones
                1. Your adviser asked how far back a trustee can look and what counts as a preference or undervalue transaction.
                2. Any repayments to family or friends, or transfers of property, in recent years listed honestly.
                3. A written rule kept: no gifts, sales below value or selective repayments until a route is chosen.
                4. Anything already done disclosed to your adviser before applying.

                ## Notes
                This is the area where good intentions cause the most trouble. Paying back your mother before your bank feels fair, but it can be the first thing a trustee reverses.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Recent payments to friends or family and transfers of property are listed and disclosed to your adviser, and a written no-transfer rule is in place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your adviser what counts as a preference or undervalue transaction"
                - "List every repayment to family or friends in the last few years"
                - "List any property, car or money you have given or sold cheaply"
                - "Tell your adviser about everything on both lists before applying"
            - name: How bankruptcy works in your jurisdiction
              description: |-
                ## Purpose
                Bankruptcy is often imagined as either a disaster or a clean slate, and in practice it is neither. Learning the real mechanics where you live, including who applies, what it costs, who takes control of assets, how long until discharge, what income payments may be required and what restrictions apply, means you can weigh it properly against the alternatives rather than fear or romanticise it.

                ## Milestones
                1. The official government guidance on bankruptcy for your country read in full.
                2. Application cost, discharge period and income payment rules written down.
                3. The role of the official receiver or trustee explained in your own words.
                4. The restrictions during bankruptcy listed, such as credit limits and company director rules.
                5. Three questions about your own case written for your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of bankruptcy in your country covers cost, discharge period, income payments, the trustee's role and restrictions, plus three questions for your adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your government's official guide to applying for bankruptcy"
                - "Write down the fee, discharge period and income payment rules"
                - "List the restrictions that apply while you are bankrupt"
                - "Write three questions about your own case for your adviser"
            - name: How individual voluntary arrangements work
              description: |-
                ## Purpose
                An IVA, or a similar court-approved repayment arrangement in other countries, usually means affordable monthly payments for five or six years, supervised by a licensed insolvency practitioner, after which remaining unsecured debt is written off. The details decide whether it suits you: creditor voting thresholds, annual reviews, equity release clauses for homeowners, fees taken from payments, and what happens if a payment is missed.

                ## Milestones
                1. Official guidance on voluntary arrangements in your country read.
                2. Length, creditor approval threshold and fee structure written down.
                3. The terms usually found in standard conditions, such as annual reviews and windfall clauses, summarised.
                4. What happens if the arrangement fails noted, including the risk of bankruptcy.
                5. A list of questions to ask any insolvency practitioner prepared.

                ## Notes
                Fees in an IVA are usually taken from your monthly payments rather than paid upfront. An upfront fee request is worth questioning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary covers length, approval threshold, fees, standard conditions and failure consequences of a voluntary arrangement, with a question list for practitioners."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the official guidance on voluntary arrangements for your country"
                - "Note the usual length, approval threshold and how fees are taken"
                - "Summarise the standard conditions on reviews and windfalls"
                - "Write a question list to put to any insolvency practitioner"
            - name: Debt relief order eligibility and limits
              description: |-
                ## Purpose
                Where a debt relief order or similar low-cost scheme exists, it can clear qualifying debts after about a year for people with little spare income and few assets, for a small fee. It has strict limits on total debt, surplus income, assets and vehicle value, and it can only be applied for through an approved intermediary. Checking each limit against your own figures shows quickly whether this route is open to you.

                ## Milestones
                1. The current limits for total debts, monthly surplus, assets and vehicle value written down from official guidance.
                2. Your own figures set beside each limit.
                3. Any limit you narrowly miss flagged for your adviser.
                4. Whether you have had a similar order in recent years checked.
                5. A clear yes, no or borderline result recorded.

                ## Notes
                Limits change from time to time, so always use the current official figures. A borderline case is a question for an approved intermediary, not a reason to tweak your budget.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Each official eligibility limit is written beside your own figure, with a recorded yes, no or borderline result shared with your adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the current official limits for a debt relief order"
                - "Write your own debt, surplus, asset and vehicle figures beside each limit"
                - "Check whether you have had a similar order in recent years"
                - "Ask an approved intermediary about any borderline figure"
            - name: Debts that survive bankruptcy and other solutions
              description: |-
                ## Purpose
                Not everything is written off. In many countries student loans, court fines, child maintenance, debts from fraud and some personal injury claims survive bankruptcy, and secured lenders keep their rights over the home or car. Marking which of your debts would remain after each solution prevents the nasty surprise of finishing years of payments still owing a large sum.

                ## Milestones
                1. The official list of debts not covered by bankruptcy, an IVA and a debt relief order found for your country.
                2. Each debt on your creditor schedule marked as covered or not covered under each solution.
                3. The total that would remain after each solution calculated.
                4. A plan for paying surviving debts agreed with your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every debt on the schedule is marked covered or not covered under each formal solution, with the remaining total per solution calculated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official list of debts each solution does not cover"
                - "Mark every debt on your schedule as covered or not under each route"
                - "Total what would remain after each solution"
                - "Ask your adviser how to handle the debts that would survive"
            - name: Limitation periods and old debts check
              description: |-
                ## Purpose
                Debts that have gone unpaid and unacknowledged for long enough can become unenforceable through the courts in many countries, and some older credit agreements cannot be enforced if the paperwork was never right. Checking old debts before including them in a formal solution can reduce what you owe, but acknowledging one in writing can restart the clock, so the order of steps matters.

                ## Milestones
                1. The limitation period for unsecured consumer debts in your country noted.
                2. Each debt with no payment or written acknowledgement for several years flagged.
                3. Copies of the original credit agreement requested where enforceability is in doubt.
                4. Your adviser's view on each flagged debt recorded before any letter is sent.

                ## Notes
                Do not make a token payment or sign anything accepting an old debt until your adviser has looked at it. That one act can make it enforceable again.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every old debt is flagged with its last payment date, and your adviser's view on whether it is still enforceable is written beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the limitation period for consumer debts in your country"
                - "Note the last payment date on each old debt"
                - "Request a copy of the credit agreement for any doubtful debt"
                - "Ask your adviser before replying to any letter about an old debt"
            - name: Public insolvency register and credit file effects
              description: |-
                ## Purpose
                Bankruptcy, an IVA and a debt relief order usually appear on a public register for their duration and stay on your credit file for around six years from the start. Knowing exactly what will be visible, to whom and for how long helps you plan conversations with employers, landlords and family, and stops you overpaying a company that promises to clean your file.

                ## Milestones
                1. The public register for your country found and an existing entry searched as an example.
                2. How long each solution stays on the register and on credit files written down.
                3. Who routinely checks these records listed, such as landlords, lenders and some employers.
                4. Your own plan written for who you will tell and when.

                ## Notes
                Nobody can legally remove an accurate insolvency entry early. Offers to do so are a scam.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records how long each solution stays on the register and credit file, who checks them, and your plan for who you will tell."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official insolvency register for your country"
                - "Write how long each solution stays on the register and credit file"
                - "List the people and firms likely to check your record"
                - "Decide who you will tell yourself, and when"
            - name: Guarantors, co-signers and joint debts in insolvency
              description: |-
                ## Purpose
                When you become insolvent, a creditor can usually turn to anyone who guaranteed the debt or shares it with you, and they may be asked for the full balance. Parents who signed as guarantors, a former partner on a joint loan and a friend who co-signed a car agreement all need to know before you apply, so they can get their own advice rather than learning from a demand letter.

                ## Milestones
                1. Every debt with a guarantor, co-signer or joint borrower identified.
                2. What each of them could be asked to pay written down.
                3. Each person told in person or by letter before you apply.
                4. Each person pointed to free debt advice of their own.

                ## Notes
                You cannot protect a guarantor by repaying them or their debt ahead of other creditors; that can be reversed later. The kind thing is early warning and good advice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every guaranteed or joint debt is identified, and each guarantor or joint borrower has been told before any application and pointed to free advice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every guaranteed, co-signed or joint debt on your schedule"
                - "Write what each guarantor or joint borrower could be asked to pay"
                - "Tell each person before you apply and explain the timing"
                - "Give each of them the details of a free debt advice service"
            - name: Side-by-side comparison of formal debt solutions
              description: |-
                ## Purpose
                The choice between bankruptcy, a voluntary arrangement, a debt relief order and an informal plan is a trade between cost, length, what you risk losing and how it affects your work and home. Putting the options on one page with your own numbers, rather than the averages in a leaflet, turns a frightening choice into a comparison you can discuss calmly with an adviser and anyone you share a household with.

                ## Milestones
                1. Each realistic option listed with its total cost, length and monthly payment for your figures.
                2. What each option puts at risk recorded: home, car, savings, pension or job.
                3. The debts each option would leave behind noted.
                4. Effects on your work, tenancy and household for each option written down.
                5. The comparison reviewed with your adviser and their recommendation added.

                ## Notes
                An informal plan can look cheaper per month but cost far more over its life. Include the length and total paid, not just the monthly figure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison shows cost, length, risks, surviving debts and work effects for each realistic option, with the adviser's recommendation added."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every option your adviser said is open to you"
                - "Fill in total cost, length and monthly payment for each option"
                - "Record what each option puts at risk for your household"
                - "Go through the comparison with your adviser and note their view"
            - name: Written decision on your debt relief route
              description: |-
                ## Purpose
                Months of worry can end in drift, with letters still arriving and no application made. Writing down the route you have chosen, why, what you accept losing and the date you will apply turns the comparison into action, and gives you something to return to when doubt or a creditor's phone call makes you wobble.

                ## Milestones
                1. The chosen route written in one sentence.
                2. Three reasons for choosing it and the main trade-off accepted.
                3. The people who need to know listed, with dates to tell them.
                4. A target application date set and the first step booked.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated one-page decision record names the chosen route, the reasons and accepted trade-offs, and a target application date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your chosen route and three reasons for it on one page"
                - "Write down the main trade-off you are accepting"
                - "Set a target application date with your adviser"
                - "Book the first concrete step towards applying this week"
            - name: Family home decision in bankruptcy or an IVA
              description: |-
                ## Purpose
                The home is usually the biggest question. In bankruptcy a trustee may claim your share of any equity, and a partner or relative can sometimes buy that share; in an IVA a homeowner may be asked to try to release equity near the end. Understanding which outcome is likely for your home, and what your household can do about it, needs to happen before you apply, not after.

                ## Milestones
                1. Your share of the equity worked out using a current valuation and the redemption figure.
                2. Your adviser asked how the home is likely to be treated under each route.
                3. Options such as a third-party purchase of your share or an equity release clause explored.
                4. Everyone who lives in the home told what could happen and when.
                5. A plan recorded for the home under your chosen route.

                ## Notes
                Negative or very low equity changes the picture completely. Do not assume the house will be sold; ask what the rules say for your figures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your equity share is calculated, the treatment of the home under each route is confirmed with an adviser, and a written plan for the home exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out your share of equity from a valuation and redemption figure"
                - "Ask your adviser how the home is treated under each route"
                - "Ask whether a relative or partner could buy your share"
                - "Tell everyone living in the home what the plan is"
            - name: Car and work vehicle decision before applying
              description: |-
                ## Purpose
                Many people need a car to keep their job, and most formal solutions allow a modest vehicle that is genuinely needed, while a valuable car may be sold and replaced with a cheaper one. A car on hire purchase or lease usually goes back to the finance company. Working out where your vehicle stands, and what you would use instead, prevents losing your way to work in the first month.

                ## Milestones
                1. Each vehicle's value, finance type and outstanding balance recorded.
                2. Your need for the vehicle for work, caring or health written down with evidence.
                3. Your adviser's view on whether each vehicle is likely to be kept.
                4. A back-up transport plan for getting to work if a vehicle goes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each vehicle's value and finance position are recorded, its likely treatment confirmed with an adviser, and a back-up transport plan written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the trade value and finance balance on each vehicle"
                - "Write down why you need the car, with evidence from work or caring"
                - "Ask your adviser whether the car is likely to be kept"
                - "Price the bus, train or lift-share route to work as a back-up"
            - name: Basic bank account with a bank you do not owe
              description: |-
                ## Purpose
                Any bank you owe money to can usually take funds from your current account to cover a loan or overdraft with them, and accounts are often frozen briefly when bankruptcy begins. Opening a basic account with a bank where you have no debts, and moving your wages and essential bills there before you apply, keeps your income safe and the rent paid.

                ## Milestones
                1. Every bank you owe money to listed.
                2. A basic or fee-free account opened with a bank that is not on that list.
                3. Wages or benefits redirected to the new account.
                4. Rent, energy and other essential direct debits moved across.
                5. The old account emptied of anything not needed for its own debt.

                ## Notes
                Most countries require large banks to offer a basic account to people with poor credit. Ask for it by name if the branch suggests you will not qualify.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your income now arrives in an account at a bank you owe nothing to, with every essential direct debit paid from it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every bank you owe money to, including overdrafts"
                - "Apply for a basic account at a bank not on that list"
                - "Give your employer or benefits office the new account details"
                - "Move rent, energy and other essential direct debits to the new account"
            - name: Choosing an insolvency practitioner for an IVA
              description: |-
                ## Purpose
                If an IVA is your route, the insolvency practitioner you pick will run it for five or six years, and firms vary in fees, flexibility and how they handle payment breaks or variations. Comparing two or three licensed practitioners, found yourself rather than through an advert, gives you a supervisor you can work with when life changes partway through.

                ## Milestones
                1. Two or three practitioners found through the official register or a free adviser's referral.
                2. Each one's fees, proposal timeline and policy on missed payments and variations written down.
                3. Each checked for complaints or regulatory action.
                4. One practitioner chosen and the reasons recorded.

                ## Notes
                Start from the **Vendor** template. Your free adviser can often refer you to a practitioner and explain what to look for.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three licensed practitioners are compared on fees, timeline and variation policy, and one is chosen with written reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find three licensed practitioners through the official register"
                - "Ask each about fees, timeline and how they handle payment breaks"
                - "Check each firm for complaints or regulatory action"
                - "Choose one practitioner and write down why"
            - name: Saving the application fee for bankruptcy or a DRO
              description: |-
                ## Purpose
                Bankruptcy and debt relief orders usually carry an application fee that must be paid in full before the application goes in, and finding a lump sum is hard when every spare pound has gone to creditors. Some places allow the fee in instalments or offer charitable help. Once advice confirms the route, putting debt payments on hold where advised and saving the fee in a separate pot gets the application moving.

                ## Milestones
                1. The current fee for your chosen route confirmed from official guidance.
                2. Instalment options and charity grants for the fee checked.
                3. A separate savings pot opened at a bank you do not owe.
                4. The full fee saved and the application date set.

                ## Notes
                Start from the **Savings goal** template. Only stop paying non-priority creditors on the advice of your adviser, and keep paying priority debts throughout.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The full application fee for your chosen route is saved in a separate pot at a bank you do not owe, with an application date set."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the current application fee for your route"
                - "Ask your adviser about paying in instalments or charity help"
                - "Open a separate pot for the fee at a bank you do not owe"
                - "Move the agreed amount into the fee pot on payday @recurring(monthly:26)"
            - name: Debt relief order application through an approved intermediary
              description: |-
                ## Purpose
                Applications for a debt relief order are made online by an approved intermediary on your behalf, using your creditor list, budget and asset details. Getting every figure and creditor right first time matters, because a creditor left off is not covered and false information can lead to the order being revoked. Preparing for the intermediary session makes it a single appointment rather than three.

                ## Milestones
                1. An approved intermediary booked through a free debt advice service.
                2. Creditor schedule, budget, asset list and income evidence sent ahead.
                3. Every entry on the draft application checked line by line with the intermediary.
                4. The application submitted and the fee paid.
                5. The decision letter received and filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A debt relief order application, checked line by line against your creditor schedule, is submitted with the fee paid and the decision letter filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a session with an approved intermediary"
                - "Send your creditor schedule, budget and asset list in advance"
                - "Check every creditor and figure on the draft before it is sent"
                - "File the decision letter in your insolvency folder"
            - name: Online bankruptcy application submission
              description: |-
                ## Purpose
                Where you can apply for your own bankruptcy online, the form asks for every creditor, asset, income source and the reasons the debts built up, and an adjudicator decides within weeks. Completing it in one prepared sitting, with the document pack beside you and an adviser available for questions, reduces mistakes that cause delays or later questions from the official receiver.

                ## Milestones
                1. The application fee saved and the online account created.
                2. Every section completed from the creditor schedule and asset list.
                3. The section on how the debts arose written honestly and plainly.
                4. The application submitted and the reference number filed.
                5. The order or the adjudicator's questions received and answered.

                ## Notes
                Ask the agent to help turn your notes into a plain account of how the debts built up, then check every fact yourself before it goes in.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The online bankruptcy application is submitted with every creditor and asset from your schedule, and the reference and outcome are filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the online account for the bankruptcy application"
                - "Ask the agent to draft a plain account of how the debts built up"
                - "Complete every section using your schedule and asset list"
                - "Submit the application and file the reference number"
            - name: IVA proposal and creditor vote
              description: |-
                ## Purpose
                Creditors decide whether an IVA starts at all: it begins only once those holding enough of the debt by value vote to accept the proposal, and they can ask for changes such as higher payments or a longer term. Reading the proposal carefully before it goes out, and knowing in advance what changes you could and could not accept, keeps you from agreeing under pressure to an arrangement that will fail.

                ## Milestones
                1. The draft proposal read in full, with every figure checked against your budget.
                2. The maximum monthly payment you could sustain written down before the vote.
                3. Creditors' proposed modifications reviewed with your practitioner.
                4. The final decision recorded: accepted, accepted with changes or rejected.
                5. A copy of the approved arrangement and its standard conditions filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The IVA proposal has been checked against your budget before issue, and the creditors' decision and approved terms are filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check every figure in the draft proposal against your budget"
                - "Write down the highest monthly payment you could keep up"
                - "Go through any creditor modifications with your practitioner"
                - "File the approved arrangement and its conditions"
            - name: Official receiver interview preparation
              description: |-
                ## Purpose
                After a bankruptcy order, the official receiver or trustee usually holds an interview, by phone or in person, to go through your finances, how the debts arose and any assets. It is a fact-finding conversation rather than a trial, but answers are recorded and must be accurate. Preparing documents and a short timeline means it is over in one sitting and nothing is left for later letters.

                ## Milestones
                1. The interview date and format confirmed and the requested documents listed.
                2. A one-page timeline of how the debts built up prepared.
                3. Bank statements, payslips and asset documents gathered in order.
                4. The interview attended and any follow-up requests written down.
                5. Every follow-up request answered by its deadline.

                ## Notes
                Start from the **Meeting notes** template to record what was asked and what you agreed to send.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The interview is attended with a timeline and requested documents, and every follow-up request is answered by its deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the interview date and the documents requested"
                - "Write a one-page timeline of how the debts built up"
                - "Put the requested documents in the order they were listed"
                - "Answer every follow-up request before its deadline"
            - name: First 30 days after an order or approval
              description: |-
                ## Purpose
                Payments must stop or change, creditors must be told and direct debits to old lenders need cancelling in the first month after a bankruptcy order, debt relief order or approved IVA. Working through a short list in order prevents double payments, bounced debits and missed first instalments, and lets you feel the pressure lift.

                ## Milestones
                1. Every creditor confirmed as notified by the official receiver, intermediary or practitioner.
                2. Direct debits and standing orders to included creditors cancelled.
                3. The first IVA or income payment set up, if one applies.
                4. Any creditor still collecting told in writing and the details passed on.
                5. Everyone who needs to know, such as an employer where required, informed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within 30 days of the order or approval, every included creditor's payments are cancelled and the first required payment is set up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm which creditors have been notified and when"
                - "Cancel direct debits and standing orders to included creditors"
                - "Set up the first IVA or income payment on the right date"
                - "Send a written note to any creditor still taking payments"
            - name: Bankruptcy discharge day checks
              description: |-
                ## Purpose
                In many places discharge from bankruptcy is automatic after a set period, but nobody sends a party invitation and records do not always update themselves. Confirming discharge, getting written proof, and checking that included debts show correctly on credit files closes the chapter properly and gives you evidence if a lender or landlord asks later.

                ## Milestones
                1. The expected discharge date confirmed with the official receiver or trustee.
                2. A certificate or letter of discharge requested and filed.
                3. The public register checked for the updated status.
                4. Each credit file checked and any included debt still showing as active disputed.

                ## Notes
                Income payments and the trustee's claim on assets owned at the start may continue after discharge. Ask what still applies to you.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written proof of discharge is filed, the register shows the change, and every included debt is shown correctly on each credit file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm your expected discharge date with the official receiver"
                - "Request a certificate or letter of discharge"
                - "Check the public register shows your discharged status"
                - "Dispute any included debt still showing as active on a credit file"
            - name: IVA completion certificate and closing checks
              description: |-
                ## Purpose
                When the last IVA payment is made, the practitioner issues a completion certificate and creditors should mark the debts as settled. Delays are common, especially if the final review or equity clause is still open. Tracking the closing steps, and chasing anything outstanding, makes sure years of payments end with clean records rather than a loose end.

                ## Milestones
                1. The final payment date and any outstanding conditions confirmed with the practitioner.
                2. The completion certificate received and copies saved.
                3. Copies sent to each credit reference agency if needed.
                4. Every included debt shown as settled on each credit file.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The IVA completion certificate is filed and every included debt shows as settled on each credit file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your practitioner what remains before completion"
                - "Save copies of the completion certificate in two places"
                - "Send the certificate to each credit reference agency if needed"
                - "Chase any debt not yet marked as settled"
            - name: Creditor contact log and call scripts
              description: |-
                ## Purpose
                Before and during a formal solution, creditors and collectors call, write and text, and a vague memory of who said what is useless if something goes wrong. A single log of every contact, plus two short scripts for the calls you dread, means you say the same accurate thing each time and have dates ready if a collector breaks the rules or chases a debt that is already included.

                ## Milestones
                1. A log with columns for date, creditor, method, what was said and any action.
                2. A script for calls before applying, giving your adviser's name and asking for written contact only.
                3. A script for calls after an order or arrangement, giving the reference number.
                4. Three months of contacts logged without gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of creditor contacts are logged with date, method and outcome, and both call scripts are kept by the phone."
                cadence: rolling
              tasks:
                - "Set up a contact log with date, creditor, method and outcome"
                - "Write a short script for calls before you apply"
                - "Write a second script giving your order or arrangement reference"
                - "Log every creditor call, letter and message from the week @recurring(weekly:fri)"
            - name: Living within the approved insolvency budget
              description: |-
                ## Purpose
                An IVA, an income payments arrangement or a debt relief order all rest on a budget, and that budget has to survive birthdays, broken washing machines and rising prices for years. A monthly comparison of actual spending against the approved figures shows early when the budget is too tight, which is the moment to talk to your supervisor rather than missing a payment.

                ## Milestones
                1. The approved budget copied into a monthly tracker.
                2. Actual spending compared with each category every month.
                3. A small buffer category agreed for irregular costs if your arrangement allows one.
                4. Six months of comparisons completed and any persistent overspend raised with the supervisor.

                ## Notes
                Start from the **Monthly budget and bills** template. A budget that is breaking is a reason to ask for a review, not to borrow quietly, which most arrangements forbid.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly comparisons of spending against the approved budget are recorded, with any persistent gap raised with the supervisor."
                cadence: rolling
              tasks:
                - "Copy the approved budget figures into a monthly tracker"
                - "Compare last month's spending with the approved budget @recurring(monthly:3)"
                - "Set aside the agreed amount for irregular costs on payday @recurring(monthly:28)"
                - "Write to your supervisor if one category runs over three months in a row"
            - name: Income payments arrangement upkeep
              description: |-
                ## Purpose
                In bankruptcy, if your income is above your reasonable household needs, you may be asked to pay part of it for around three years through an income payments arrangement or order. Payments are reviewed when pay or household costs change, and missed ones are pursued. Keeping a simple record of what was paid and when, with payslips filed, makes reviews quick and disputes rare.

                ## Milestones
                1. The arrangement's amount, start date, end date and payment method written down.
                2. A standing order set up for the payment date.
                3. Each payment confirmed and recorded monthly.
                4. Payslips kept for every month of the arrangement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every income payment for the life of the arrangement is recorded with its date, and each month's payslip is filed."
                cadence: rolling
              tasks:
                - "Write down the payment amount, start date and end date"
                - "Set up a standing order for the agreed payment date"
                - "Check the income payment left your account and record it @recurring(monthly:8)"
                - "File each month's payslip in your insolvency folder"
            - name: Change of circumstances reporting to your trustee or supervisor
              description: |-
                ## Purpose
                Most formal solutions require you to report changes such as a pay rise, a new job, a partner moving in, a move of house or a car purchase within a set time. Failing to report can lead to a failed IVA, a revoked debt relief order or extended bankruptcy restrictions. A monthly check against a short list makes reporting a routine instead of something remembered too late.

                ## Milestones
                1. The list of reportable changes and time limits taken from your order or arrangement.
                2. The contact details for your trustee, supervisor or official receiver kept with the list.
                3. A monthly check carried out against the list.
                4. Every reportable change sent in writing with the date recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of reportable changes exists, and every change in the last twelve months was reported in writing within its time limit."
                cadence: rolling
              tasks:
                - "Copy the list of reportable changes from your order or arrangement"
                - "Keep your trustee or supervisor's contact details with the list"
                - "Check whether anything reportable changed this month @recurring(monthly:20)"
                - "Report each change in writing and record the date sent"
            - name: Annual IVA review with the supervisor
              description: |-
                ## Purpose
                Most IVAs include a yearly review of income and spending, and payments can go up if your income has risen. Arriving with organised payslips, bills and an honest budget makes the review fair and fast, and it is the right moment to raise any category that has become unworkable.

                ## Milestones
                1. The review month noted and the supervisor's document list obtained.
                2. Payslips, bills and bank statements for the year gathered.
                3. An updated income and expenditure statement completed.
                4. The review outcome and any payment change recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Each annual IVA review is completed on time with an updated budget, and its outcome is filed."
                cadence: cyclic
              tasks:
                - "Ask your supervisor which month the review falls in"
                - "Gather the year's payslips, bills and statements for the review @recurring(yearly)"
                - "Complete an updated income and expenditure statement"
                - "Record the review outcome and any new payment amount"
            - name: Windfall and inheritance declaration rule
              description: |-
                ## Purpose
                Inheritances, lottery wins, large bonuses, mis-sold insurance refunds and compensation payments received during a formal solution usually have to be declared, and some or all of the money may go to creditors. Hiding one is among the commonest reasons arrangements fail and restrictions are extended. A clear rule, written down in advance, makes declaring automatic rather than agonising.

                ## Milestones
                1. The windfall terms in your order or arrangement read and summarised.
                2. Examples listed: inheritance, bonus, tax refund, compensation, prize, gifts.
                3. A rule written: anything above the stated amount reported within the time limit.
                4. Any windfall received so far declared in writing.

                ## Notes
                Refunds for mis-sold products on debts taken before the order often belong to the arrangement or the trustee, even if they arrive years later.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written windfall rule taken from your arrangement's terms is in place, and every qualifying sum received has been declared in writing."
                cadence: rolling
              tasks:
                - "Read the windfall terms in your order or arrangement"
                - "Write a one-line rule on what you must report and when"
                - "Check for any bonus, refund or gift that needs declaring @recurring(quarterly)"
            - name: Creditors still chasing after an order or arrangement
              description: |-
                ## Purpose
                Collectors sometimes keep writing or phoning after a debt is included in bankruptcy, a debt relief order or an IVA, often because a debt was sold on or a system did not update. A standard reply with your reference number, and a clear point at which to involve your trustee, supervisor or the regulator, stops the chasing without you paying something you no longer owe.

                ## Milestones
                1. A standard letter written giving the type of order or arrangement, date and reference.
                2. Each chasing creditor sent the letter and the date logged.
                3. Any creditor that continues reported to your trustee or supervisor.
                4. Persistent breaches complained about to the creditor and then the regulator if needed.

                ## Notes
                Never pay an included debt to make the calls stop. Ask the agent to draft the standard letter, then check the reference and dates yourself.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every creditor chasing an included debt has received a written notice with your reference, and any repeat contact has been escalated."
                cadence: rolling
              tasks:
                - "Ask the agent to draft a standard notice letter with your reference"
                - "Send the notice to each creditor still chasing an included debt"
                - "Pass on any repeat contact to your trustee or supervisor"
                - "Complain to the creditor, then the regulator, about persistent breaches"
            - name: IVA payment break and variation requests
              description: |-
                ## Purpose
                Five or six years is a long time, and redundancy, illness, a new baby or a separation can make the agreed payment impossible. Many arrangements allow short payment breaks or a formal variation agreed by creditors, but only if you ask before arrears build up. Knowing the procedure and asking at the first sign of trouble is often the difference between a varied IVA and a failed one.

                ## Milestones
                1. The payment break and variation terms in your arrangement found and summarised.
                2. Evidence of the change in circumstances gathered.
                3. A written request sent to the supervisor before a payment is missed.
                4. The outcome and any new payment schedule recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written request for a payment break or variation is sent before any payment is missed, with evidence, and the outcome is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the payment break and variation terms in your arrangement"
                - "Gather evidence of the change, such as a redundancy letter or fit note"
                - "Write to your supervisor before the next payment is due"
                - "Record the outcome and any new payment schedule"
            - name: Insolvency paperwork archive
              description: |-
                ## Purpose
                Years after an order or arrangement ends, a lender, landlord or employer may ask for proof, or a debt you thought had gone may resurface after being sold on. A tidy archive of the order or arrangement, every notice, the completion or discharge certificate and your creditor correspondence answers those questions in minutes.

                ## Milestones
                1. One archive folder set up with sections for the order, payments, correspondence and certificates.
                2. Every letter from the trustee, supervisor or official receiver filed by date.
                3. Digital copies of the key documents stored in a second place.
                4. The archive kept for at least six years after the solution ends.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An archive holds the order or arrangement, every official letter by date and the final certificate, with digital copies stored in a second place."
                cadence: rolling
              tasks:
                - "Set up archive sections for order, payments, letters and certificates"
                - "Scan the order or arrangement and store a copy in a second place"
                - "File this month's letters from the trustee or supervisor @recurring(monthly:25)"
            - name: Sole trader facing bankruptcy or an IVA
              description: |-
                ## Purpose
                Self-employed people face extra questions: whether they can keep trading, what happens to tools, stock and business bank accounts, how tax arrears are treated and how customers and suppliers are told. A plan agreed with an adviser who understands self-employed insolvency can let the business keep earning, which matters to creditors as much as to you.

                ## Milestones
                1. Business debts, tax arrears and personal debts separated on the creditor schedule.
                2. Tools, vehicle, stock and equipment needed to trade listed with values.
                3. Your adviser's view recorded on whether you can keep trading under each route.
                4. A separate business account and a tax set-aside routine in place.
                5. A short script prepared for customers and suppliers who ask.

                ## Notes
                If you trade through a limited company rather than as a sole trader, company insolvency is a separate matter; ask a specialist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Business and personal debts are separated, trading assets are listed, and a written plan from an adviser says whether and how you will keep trading."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Separate business debts and tax arrears from personal debts"
                - "List the tools, vehicle and stock you need to keep trading"
                - "Ask a self-employed debt specialist whether you can keep trading"
                - "Set aside tax from each month's takings into a separate pot @recurring(monthly:5)"
            - name: Couple where one partner is insolvent
              description: |-
                ## Purpose
                When only one partner goes through a formal solution, the other is not personally liable for sole debts, but joint accounts, joint loans, a shared mortgage and a household budget tie the two together. Agreeing how money will flow, which accounts stay joint and what the partner's income means for the budget protects the relationship and the solvent partner's credit.

                ## Milestones
                1. Joint accounts and joint debts identified and their treatment confirmed with your adviser.
                2. A financial disassociation request considered for any joint account that is closed.
                3. How the solvent partner's income is counted in the household budget agreed.
                4. A monthly money conversation in place between the two of you.

                ## Notes
                The solvent partner should get their own free advice, separate from yours, especially on joint debts and the home.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Joint accounts and debts are identified and their treatment agreed, the household budget split is written down, and a monthly money talk is happening."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every joint account and joint debt the two of you hold"
                - "Ask your adviser how each joint item is treated under your route"
                - "Agree in writing how your partner's income counts in the budget"
                - "Hold a short money talk with your partner @recurring(monthly:14)"
            - name: Renting while in bankruptcy or a debt relief order
              description: |-
                ## Purpose
                Rent arrears are a priority debt, and while past arrears can be included in some solutions, a landlord can still seek possession in certain circumstances. Future rent always has to be paid. Knowing your tenancy position, deciding when to tell your landlord, and planning for the credit check at your next move keeps a roof over your head through and after the solution.

                ## Milestones
                1. Current rent arrears and the tenancy type confirmed.
                2. Your adviser's view on including arrears and on possession risk recorded.
                3. Rent paid in full and on time from the first month after the order.
                4. A short reference pack ready for the next tenancy: landlord reference, rent payment record and order details.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Rent is paid in full every month after the order, arrears treatment is confirmed with an adviser, and a reference pack for the next tenancy exists."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm your rent arrears balance and tenancy type"
                - "Ask your adviser how arrears and possession risk are affected"
                - "Check the rent arrears balance is falling or cleared @recurring(monthly:12)"
                - "Ask your current landlord for a written payment reference"
            - name: Retiree with pension income and unmanageable debts
              description: |-
                ## Purpose
                Older people often carry debts into retirement on a fixed income that will never rise much, which can make a long repayment plan pointless. In many countries private pensions not yet in payment are protected in bankruptcy, while pension income being drawn is counted as income. Getting advice that accounts for the state pension, private pensions, lump sums and age-related benefits points to the right route for a retired life.

                ## Milestones
                1. Every pension listed: state, workplace and private, in payment or not.
                2. Any lump sum already taken or planned recorded.
                3. Benefits for older people checked so income is as high as it can be before the budget is set.
                4. Your adviser's view on how pensions are treated under each route written down.
                5. A family member or friend told, if you want someone alongside you.

                ## Notes
                Do not take a pension lump sum to pay creditors before taking advice; it can be the wrong move and cannot be reversed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every pension and lump sum is listed, benefits are checked, and your adviser's view on how pensions are treated under each route is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every pension you have and whether it is being drawn"
                - "Note any lump sum taken or planned"
                - "Run a benefits check for people over pension age"
                - "Ask your adviser how pensions are treated under each route"
            - name: Jobs, directorships and licences affected by insolvency
              description: |-
                ## Purpose
                Some roles have rules about insolvency: company directors may be barred during bankruptcy, people in regulated finance, legal or security work may need to tell an employer or regulator, and some public offices are restricted. Checking your contract, professional body rules and any licence conditions before applying avoids a disciplinary surprise and lets you tell the right person in the right way.

                ## Milestones
                1. Your employment contract and staff handbook checked for financial disclosure clauses.
                2. Your professional body or licensing authority's rules on insolvency read.
                3. Any directorships listed and their status under each route checked.
                4. A plan for who to tell at work, when and how written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Contract, professional body and directorship rules on insolvency are checked, and a written plan says who at work must be told and when."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your contract and handbook for financial disclosure clauses"
                - "Read your professional body's rules on insolvency"
                - "List any directorships you hold and check the rules on each"
                - "Write down who at work you must tell and when"
            - name: Supporting a relative through insolvency
              description: |-
                ## Purpose
                Parents, adult children and siblings facing bankruptcy or an IVA often need practical help more than money: someone to open letters with, sit in on an adviser call or keep track of deadlines. Offering money can backfire if it pays one creditor ahead of others. A clear, limited role, agreed with them, helps without taking over or getting entangled.

                ## Milestones
                1. The kind of help they want agreed, in their words.
                2. Their consent recorded with the adviser if you are to speak on their behalf.
                3. A weekly check-in in place for as long as they want it.
                4. A rule agreed not to give or lend money without talking to their adviser first.

                ## Notes
                Your relative stays in charge of their own decisions. Your job is company, organisation and a second pair of eyes.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your role is agreed with your relative, any consent to speak for them is recorded with the adviser, and weekly check-ins are taking place."
                cadence: rolling
              tasks:
                - "Ask your relative what kind of help they actually want"
                - "Arrange written consent with their adviser if you will speak for them"
                - "Phone them for a short check-in on letters and deadlines @recurring(weekly:wed)"
                - "Agree not to give or lend money without their adviser's view"
            - name: Debt worry and mental health support plan
              description: |-
                ## Purpose
                Unmanageable debt and poor mental health feed each other: worry leads to unopened post, which leads to more charges and more worry. Having a short plan for the bad days, with a support line number, someone to call, and the knowledge that some countries offer extra protection from creditors during mental health crisis treatment, keeps you able to act on the advice you are given.

                ## Milestones
                1. A free mental health support line and a debt advice line written on one card.
                2. One trusted person told what is going on.
                3. Your doctor told, if worry is affecting sleep, eating or work.
                4. Any mental health protections from creditors in your country asked about with your adviser.
                5. A weekly ten-minute check-in kept for three months.

                ## Notes
                If you ever feel unsafe, contact emergency services or a crisis line immediately. Debt can always be dealt with later; you come first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A support card with two helpline numbers exists, one trusted person knows, and twelve weekly check-ins have been recorded."
                cadence: rolling
              tasks:
                - "Write a mental health line and a debt advice line on one card"
                - "Tell one trusted person what is happening with your debts"
                - "Ask your adviser about creditor protections during mental health treatment"
                - "Do a ten-minute check-in on sleep, worry and post @recurring(weekly:sun)"
            - name: Responding to a statutory demand or creditor petition
              description: |-
                ## Purpose
                Once a creditor is owed more than a set amount, it can serve a statutory demand and then petition for your bankruptcy, which you did not choose and cannot time. The window to apply to set aside a demand is short, often around 18 days, and a petition hearing has a fixed date. Treating either as an emergency, with specialist advice the same week, keeps every option open, including disputing the debt or proposing an alternative.

                ## Milestones
                1. The date of service and every deadline on the document written down.
                2. Specialist advice obtained the same week from a debt charity or solicitor.
                3. A decision recorded: dispute, pay, propose an arrangement or let it proceed.
                4. Any application to set aside or court response filed before its deadline.
                5. The hearing attended, in person or by representative, if one is listed.

                ## Notes
                This is legal territory with strict deadlines. Use this project to organise documents and dates; the conclusions belong to a qualified adviser or solicitor.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every deadline on the demand or petition is recorded, specialist advice is obtained within a week, and any response is filed before its deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the service date and every deadline on the document"
                - "Call a debt charity or solicitor for specialist advice this week"
                - "Record your decision on whether to dispute, pay or propose an alternative"
                - "File any application or response before the deadline"
            - name: Annulment, revocation and failed arrangement options
              description: |-
                ## Purpose
                Sometimes circumstances change sharply: an inheritance could clear the debts, an IVA is about to fail after missed payments, or a debt relief order no longer fits because income has risen. Annulling a bankruptcy, varying or ending an IVA, or moving from one solution to another are specialist steps with their own costs and risks, and they need planning with a practitioner rather than a sudden decision.

                ## Milestones
                1. The change in circumstances and its numbers written down.
                2. Each realistic option listed, such as annulment, variation, full and final settlement or moving to bankruptcy.
                3. Costs, timescale and risks of each option confirmed with a practitioner.
                4. The chosen option and its next steps recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Options for annulment, variation or changing solution are compared with a practitioner, and the chosen option and its next steps are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what has changed and the figures involved"
                - "List each realistic option open to you now"
                - "Ask a practitioner for the cost and risk of each option"
                - "Record the option you choose and its first step"
            - name: First year after discharge money system
              description: |-
                ## Purpose
                Old habits and new credit offers can quietly pull you back in the year after discharge or completion. Setting up a cash-based system with a small buffer, a single low-limit card used and cleared monthly if you choose, and an annual check that every included debt shows as settled turns a hard-won fresh start into a lasting one.

                ## Milestones
                1. A monthly budget built on income after the solution ends.
                2. A small savings buffer started and growing monthly.
                3. Any new credit limited to one low-limit product cleared in full each month, if used at all.
                4. Every included debt shown correctly on each credit file one year on.

                ## Notes
                Lenders who target people just out of insolvency often charge very high rates. If you are offered credit the week after discharge, read the rate before the limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months after discharge or completion, a budget is running, a buffer is growing and no new arrears exist, with credit files checked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build a monthly budget on your income after the solution ends"
                - "Add to the post-discharge savings buffer on payday @recurring(monthly:15)"
                - "Decide in writing whether you will use any credit this year"
                - "Check every credit file shows included debts as settled @recurring(yearly)"
---

# Personal Insolvency & Debt Relief

This area is for anyone whose debts have grown past the point where budgeting, overpaying or a repayment plan can fix them, and who needs to understand bankruptcy, individual voluntary arrangements and debt relief orders before choosing. It starts with the foundations (an honest insolvency test, court letters triaged, a full creditor schedule, priority debts sorted and a free regulated adviser booked), then the knowledge of how each formal solution works and which debts survive it, the decisions about the route, the home, the car and the bank account, the dated steps of applying, interviews and discharge, the routines that keep an arrangement on track, versions for sole traders, couples, renters, retirees and relatives, and finally statutory demands, variations and life after discharge.

What repeats is a weekly creditor log, a monthly check against the approved budget and the income payment, a monthly look at anything you must report, a quarterly windfall check and refresh of your figures, and the yearly IVA review and credit file check. The Meeting notes, Savings goal, Monthly budget and bills and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
