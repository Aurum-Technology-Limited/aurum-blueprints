---
id: personal-finance.divorce-financial-settlement
name: Divorce Financial Settlement
description: "Safe first steps, a full map of what you both own and owe, disclosure done properly, the home, pensions, debts and maintenance decided, and a binding order carried through to independent accounts."
category: personal
version: 1.0.0
tags: [personal-finance, divorce-financial-settlement, everyone, parent, separation, disclosure, maintenance, pensions]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - vendor
    - meeting-notes
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Divorce Financial Settlement
          description: "Untangling finances after separation: disclosure, splitting assets and debts, maintenance and setting up independent accounts."
          projects:
            - name: First-fortnight money safety after separation
              description: |-
                ## Purpose
                Separation often starts with a scramble: one person moves out, joint cards are still live and nobody is sure who is paying the mortgage this month. Spending the first two weeks securing your own logins, agreeing that neither of you moves large sums and making sure financial post reaches you protects you from sudden withdrawals and missed payments before any negotiation begins.

                ## Milestones
                1. Passwords and PINs changed on every account in your sole name, including email and banking apps.
                2. A written proposal sent to your ex that neither of you moves large sums from joint accounts.
                3. Post from banks, lenders and pension schemes redirected or collected so statements reach you.
                4. A list of shared devices and logins your ex may still be able to use, with each one dealt with.

                ## Notes
                Do not empty a joint account, even if you fear the other person will. A sudden withdrawal can sour negotiations and may have to be accounted for later. Speak to a solicitor first if you are worried about money disappearing.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within 14 days, sole-name logins are changed, financial post reaches you and a written no-large-withdrawals proposal has been sent to your ex."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every login, PIN and shared device your ex may know"
                - "Change passwords and PINs on accounts in your sole name"
                - "Email your ex proposing neither of you moves large sums from joint accounts"
                - "Redirect post for bank, card and pension letters to where you now live"
            - name: Opening a sole bank account of your own
              description: |-
                ## Purpose
                Anyone whose wages, benefits or child payments land in a joint account depends on the other person's goodwill to reach them, and some banks freeze a joint account when either holder reports a dispute. A current account in your sole name, ideally at a bank where you hold nothing jointly, gives your income somewhere to arrive and your bills somewhere to leave from that nobody else can see.

                ## Milestones
                1. A current account open in your sole name, with statements going to an email only you use.
                2. Your salary or main income redirected into it from the next pay date.
                3. Any benefit or child payments in your name switched to it.
                4. A small standing buffer kept in it so the first bills from it do not bounce.

                ## Notes
                Choose a different bank from your joint accounts if you can, so the two never sit side by side in one app or on one statement.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current account in your sole name is open and your next salary or main income payment lands in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare two or three banks where you hold no joint accounts"
                - "Open a sole current account using a private email address"
                - "Give your employer the new account details before the payroll cut-off"
                - "Move any benefit payments in your name to the new account"
            - name: Map of every joint and sole account
              description: |-
                ## Purpose
                Settlements are built on a complete list of what exists, and the accounts people forget are usually the small ones: an old savings account, a store card, a pension from a job ten years ago. Listing every account, loan, policy and pension held by either of you, and whose name each is in, makes disclosure faster and stops surprises turning up late in negotiations.

                ## Milestones
                1. Every bank, savings, credit, loan, mortgage, investment and pension account listed with provider and last four digits.
                2. Each account marked as yours, your ex's or joint.
                3. Life and other insurance policies listed with who owns them and who is covered.
                4. Accounts you believe exist but cannot yet evidence flagged for follow-up.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated table lists every account, loan, pension and policy held by either partner, each marked sole or joint."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Start a table with provider, account type, owner and last four digits"
                - "Search old emails and post for providers you have forgotten"
                - "Use your country's pension tracing service to find old workplace pensions"
                - "Mark accounts you believe your ex holds but cannot prove"
                - "Recheck the map for accounts opened or closed since @recurring(quarterly)"
            - name: Separation-date balances snapshot
              description: |-
                ## Purpose
                The value of accounts on the day you separated can matter as much as their value at settlement, and statements from that date get harder to obtain as months pass. Downloading statements that cover the separation date now gives you, your solicitor or a mediator a fixed reference point when one of you later asks where money went.

                ## Milestones
                1. Statements covering the separation date saved for every account on the map.
                2. The balance on the separation date recorded beside each account.
                3. Large movements in the three months before separation noted, with the reason where known.
                4. The snapshot saved as a dated document that is never edited afterwards.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated, unedited record shows every account's balance on the separation date, backed by saved statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the date you consider the separation began"
                - "Download statements covering that date for each account you can access"
                - "Note balances and any large transfer in the three months before"
                - "Save the snapshot as a read-only copy in your settlement folder"
            - name: Interim bill-paying agreement while separated
              description: |-
                ## Purpose
                Between separation and settlement there can be a year or more in which the mortgage or rent, property tax, utilities and children's costs still need paying, often from accounts you both use. A short written agreement on who pays which bill, from which account, protects the household's credit record and avoids an argument every time a direct debit leaves.

                ## Milestones
                1. Every household bill listed with amount, due date and paying account.
                2. Each bill assigned to one person or split in an agreed proportion.
                3. The agreement written down and accepted by both of you, by email if not in person.
                4. A line in the agreement stating that it is temporary and does not decide the final settlement.

                ## Notes
                Ask your solicitor or mediator how to word the interim arrangement so that paying a bill now is not read as agreeing to pay it for ever.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written interim agreement names who pays each household bill until settlement, accepted by both partners in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every household bill with its amount and due date"
                - "Propose who covers each bill until the settlement"
                - "Send the proposal by email and keep the reply"
                - "Check each interim bill was paid as agreed @recurring(monthly:7)"
            - name: Living costs on one income after separation
              description: |-
                ## Purpose
                Most first budgets after separation are wrong because they carry over costs from the shared home and miss new ones: a second set of furniture, travel for handovers, a phone that used to sit on a family plan. Building a realistic budget for your own household tells you what you need to live on, which is the figure you will carry into disclosure and maintenance talks.

                ## Milestones
                1. Three months of your own spending reviewed and sorted into essential, flexible and ending.
                2. New post-separation costs added, including housing, handover travel and duplicate household items.
                3. A monthly budget for your new household with a total for essential needs.
                4. The needs total saved where you can quote it in disclosure and maintenance discussions.

                ## Notes
                Start from the **Monthly budget and bills** template. Aim for honest figures rather than generous or thin ones: a needs total you cannot support with statements will be challenged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly budget for your own household exists, with an essential needs total supported by three months of statements."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pull three months of your own card and account statements"
                - "Mark each cost as essential, flexible or ending with the separation"
                - "Add new costs such as rent, handover travel and duplicate furniture"
                - "Compare actual spending with the one-income budget @recurring(monthly:9)"
            - name: Credit file check for financial links to your ex
              description: |-
                ## Purpose
                Credit reference agencies link people who have held joint credit, and that link can stay on file after the joint account closes, so an ex-partner's missed payments may show up when you next apply. Checking every credit file now shows which joint products still exist, and lets you ask for the link to be removed once nothing joint remains.

                ## Milestones
                1. Your credit report from each main agency downloaded.
                2. Every joint account and financial association listed.
                3. Errors or unfamiliar searches disputed with the agency.
                4. A request to remove the association sent once all joint credit is closed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Reports from every main agency are checked, joint links are listed and a removal request is lodged once joint credit has closed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your free credit report from each main agency"
                - "List every joint account and financial association shown"
                - "Dispute any search or account you do not recognise"
                - "Recheck your credit files for links to your ex @recurring(yearly)"
            - name: Secure folder for settlement paperwork
              description: |-
                ## Purpose
                Disclosure, mediation and court each ask for the same documents in slightly different forms: payslips, tax returns, pension statements, valuations. One secure folder, kept somewhere your ex cannot reach, saves hours each time a request arrives and keeps sensitive papers out of the shared home and any shared cloud accounts.

                ## Milestones
                1. A folder with sections for income, accounts, property, pensions, debts and correspondence.
                2. Storage chosen that your ex has never had a password to, with two-step sign-in switched on.
                3. The statements gathered for the account map and balances snapshot filed.
                4. A second copy kept in a separate place in case one is lost.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder that only you can open holds income, account, property, pension, debt and correspondence sections, with a backup copy elsewhere."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a private storage account your ex has never had access to"
                - "Set up sections for income, accounts, property, pensions, debts and letters"
                - "File every statement already gathered for the account map"
                - "Back up the folder to a second secure location @recurring(quarterly)"
            - name: Choosing a route to the financial settlement
              description: |-
                ## Purpose
                Separating couples can agree finances between themselves, through mediation, through solicitor negotiation, through a collaborative process or by asking a court to decide, and the cost and time can differ by tens of thousands and many months. Comparing the routes against your situation, including any history of abuse or concealment, lets you pick a starting point deliberately instead of drifting into the most expensive one.

                ## Milestones
                1. Each route written down with typical cost, time and how much control you keep.
                2. Factors that rule a route out for you, such as safety concerns, noted.
                3. A first route chosen and a fallback named.
                4. Your ex told in writing which route you propose.

                ## Notes
                Many places expect separating couples to at least consider mediation before going to court, often through a short information meeting. Check what applies where you live.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of settlement routes ends in a chosen first route and a fallback, proposed to your ex in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the settlement routes available where you live"
                - "Note typical cost and timescale for each from two sources"
                - "Ask a solicitor or mediator whether any route is unsuitable for you"
                - "Write to your ex proposing the route you have chosen"
            - name: Shortlisting a family law solicitor
              description: |-
                ## Purpose
                Even couples who agree everything usually need a lawyer to check the deal and turn it into a binding order, and those who disagree need one sooner. Comparing two or three family law specialists on experience and fees, and arriving at the first meeting with a prepared summary, keeps the most expensive advice in your settlement short and focused.

                ## Milestones
                1. Three solicitors shortlisted, each specialising in financial matters on separation.
                2. Fee structures compared, including fixed-fee packages and hourly rates.
                3. A one-page summary of your situation ready for the first meeting.
                4. One solicitor instructed, or a decision recorded to use one only to review an agreement.

                ## Notes
                Start from the **Vendor** template. Many firms offer a short first meeting at a fixed price; take your account map and balances snapshot to it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three solicitors are compared on specialism and fees, and one is instructed or chosen for review only, with the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your law society's directory for family law specialists"
                - "Ask each firm for its fee structure in writing"
                - "Ask the agent to draft a one-page summary from your account map"
                - "Book a first meeting with your preferred solicitor"
            - name: Settlement correspondence and deadline log
              description: |-
                ## Purpose
                Over months of emails, letters and meetings it becomes easy to lose track of what was offered, what was agreed and what is due by when. A single log of every exchange and deadline, reviewed once a week, means you can answer your solicitor's question about who said what in seconds and never miss a date for documents or a hearing.

                ## Milestones
                1. A log with columns for date, sender, summary, action and deadline.
                2. Every exchange since separation entered.
                3. Upcoming deadlines copied into your calendar with reminders.
                4. Each entry pointing to the matching document in your settlement folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every settlement letter, email and meeting since separation sits in one dated log, and no deadline in it has been missed."
                cadence: rolling
              tasks:
                - "Create the log with date, sender, summary, action and deadline"
                - "Enter every exchange since the separation began"
                - "Add each deadline to your calendar with a reminder a week before"
                - "Review the log and the coming week's deadlines @recurring(weekly:fri)"
            - name: Monthly watch on joint accounts during separation
              description: |-
                ## Purpose
                Joint accounts and joint credit often stay open long after people separate, and either holder can usually spend from them or raise the balance. Checking each one monthly catches unexpected withdrawals, new borrowing or missed payments early, while there is still time to raise them before they shape the settlement.

                ## Milestones
                1. Every joint account and card listed with your online access confirmed.
                2. A monthly balance and any notable transactions recorded for each.
                3. Any unexpected movement raised in writing with your ex or solicitor.
                4. Joint accounts closed or switched to need both signatures once agreed.

                ## Notes
                Many banks can change a joint account so that withdrawals need both holders to agree. Ask each bank what it offers before assuming nothing can be done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each joint account's balance is recorded every month from separation until it closes, with every unexpected movement raised in writing."
                cadence: rolling
              tasks:
                - "Confirm you have online access to every joint account"
                - "Ask each bank what restrictions it can place on a joint account"
                - "Record joint balances and unusual transactions @recurring(monthly:3)"
                - "Raise any unexpected movement in writing within a week"
            - name: Legal and mediation costs budget and tracker
              description: |-
                ## Purpose
                Legal and mediation fees are one of the few settlement costs you control directly, and they can swallow a large share of a modest asset pool. Setting a budget for each stage, deciding how you will fund it and checking every bill against it each month shows quickly when a dispute is costing more than the amount at stake.

                ## Milestones
                1. Estimates obtained for each stage: advice, mediation, negotiation, drafting the order and any hearing.
                2. A funding plan written, covering savings, borrowing or a request for a contribution to costs.
                3. Every invoice entered against the budget for its stage.
                4. A written threshold at which you ask whether a disputed item is worth further fees.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stage-by-stage legal budget exists and every fee invoice is recorded against it within a month of arriving."
                cadence: rolling
              tasks:
                - "Ask your solicitor for a written estimate for each stage"
                - "Write down how each stage will be paid for"
                - "Set the amount below which a disputed item is not worth fighting over"
                - "Enter new invoices against the stage budget @recurring(monthly:20)"
            - name: Income evidence file kept current
              description: |-
                ## Purpose
                Disclosure usually asks for the last twelve months of payslips, the latest tax return and evidence of benefits, bonuses and other income, and those figures go stale as the case runs on. Saving each payslip and income letter the month it arrives means an updated disclosure takes minutes, and any change in income is visible early.

                ## Milestones
                1. Twelve months of payslips or self-employed accounts saved in the settlement folder.
                2. The latest tax return and year-end tax statement filed.
                3. Benefits, bonuses, rental and investment income each backed by a document.
                4. Any change in income since disclosure noted for your solicitor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The settlement folder holds every payslip and income letter for the last twelve months, with nothing missing for the current month."
                cadence: rolling
              tasks:
                - "Gather the last twelve months of payslips or business accounts"
                - "File your latest tax return and year-end tax statement"
                - "Save this month's payslip and income letters @recurring(monthly:28)"
                - "Tell your solicitor about any change in income as soon as it happens"
            - name: Child maintenance payment record
              description: |-
                ## Purpose
                Whether child maintenance is arranged between parents, through a statutory service or within a court order, disputes about missed or late payments are settled by records. Logging every payment due and received, with dates and amounts, protects both the paying and the receiving parent and gives clear evidence if the arrangement needs to be enforced or changed.

                ## Milestones
                1. The agreed amount, frequency and payment method written at the top of the record.
                2. Every payment due logged with the amount and date actually paid.
                3. Arrears, if any, totalled and raised in writing.
                4. The record shared with the other parent or the maintenance service when asked.

                ## Notes
                Payments by bank transfer with a clear reference are far easier to prove than cash. If you pay or receive cash, send a short receipt by text the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child maintenance payment due since the arrangement began is logged with amount and date, and any arrears are totalled."
                cadence: rolling
              tasks:
                - "Write the agreed amount, frequency and method at the top of the record"
                - "Set up a standing order with a clear reference if you are the payer"
                - "Log the payment due and the payment made @recurring(monthly:5)"
                - "Check whether income changes mean a recalculation is due @recurring(yearly)"
            - name: Shared children's costs ledger between homes
              description: |-
                ## Purpose
                Beyond regular maintenance, children bring costs that separated parents often agree to split: school trips, uniform, clubs, phones, birthday parties, dental work. A shared ledger where each parent logs what they paid and the agreed share, settled once a month, replaces dozens of awkward messages with one transfer.

                ## Milestones
                1. The shared costs and the split for each agreed in writing.
                2. A ledger both parents can see, with date, item, amount and who paid.
                3. A receipt attached or photographed for each entry.
                4. One balancing payment made each month and recorded.

                ## Notes
                An expense-sharing app works well if both parents will actually use it. Keep the ledger factual; comments about the other parent belong somewhere else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's shared children's costs are logged with receipts and settled by a single recorded balancing payment."
                cadence: rolling
              tasks:
                - "Agree in writing which children's costs are shared and in what split"
                - "Set up a ledger or expense app both parents can see"
                - "Photograph each receipt when you pay a shared cost"
                - "Settle the month's balance with one transfer @recurring(monthly:15)"
            - name: Pause rule before agreeing money terms
              description: |-
                ## Purpose
                Offers often arrive at the worst moments: late at night, after an argument, at a handover with the children watching. A personal rule that you never accept, sign or reject a financial proposal on the day it arrives, and always run it past your adviser first, stops decisions made in anger or exhaustion from becoming a binding settlement.

                ## Milestones
                1. A written rule with a minimum waiting period, such as 48 hours, before replying to any financial proposal.
                2. A standard holding reply saved and ready to send.
                3. Your solicitor or a trusted person named as the first person each proposal goes to.
                4. Every proposal since the rule began logged with the date you replied.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No financial proposal has been accepted or rejected within 48 hours of arriving since the rule was written, as the correspondence log shows."
                cadence: rolling
              tasks:
                - "Write your waiting rule in a note pinned on your phone"
                - "Save a short holding reply that acknowledges a proposal without answering it"
                - "Name the person each proposal goes to before you respond"
                - "Note in the correspondence log when each reply was sent"
            - name: How full financial disclosure works
              description: |-
                ## Purpose
                Most financial settlements rest on full and frank disclosure: each person sets out income, assets, debts, pensions and needs on a standard form or in an agreed format, backed by documents. Learning what the form asks for, which documents must be attached and what happens if something is left out takes an evening and makes the rest of the process far easier to follow.

                ## Milestones
                1. The disclosure form or format used where you live identified, for example Form E in England and Wales.
                2. A list of every attachment the form requires.
                3. What happens after incomplete or late disclosure noted in your own words.
                4. Questions you still have written down for your solicitor or mediator.

                ## Notes
                Disclosure is often a continuing duty: if something material changes after you submit, you are expected to update it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of the sections and required attachments of your local disclosure form, plus open questions for your adviser, is filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official financial disclosure form used where you live"
                - "Read the guidance notes that come with it"
                - "List every document the form asks you to attach"
                - "Write down questions for your solicitor or mediator"
            - name: Completing your own financial disclosure
              description: |-
                ## Purpose
                Your disclosure is the evidence the whole settlement is built on, and errors or gaps lead to questionnaires, delay and lost trust. Working through it section by section, using the account map, balances snapshot and income file you have already built, produces a complete, signed document on time, with nothing that needs explaining later.

                ## Milestones
                1. Every section completed in draft with figures taken from your own records.
                2. All required attachments gathered and labelled to match the form.
                3. Values you cannot yet confirm marked as estimates, with their source.
                4. The final version checked by your adviser, signed and exchanged by the agreed date.

                ## Notes
                Do not round down or leave things out to look poorer. Assets that come to light after a settlement can be grounds for reopening it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your financial disclosure is complete, signed, checked by your adviser and exchanged on or before the agreed date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Note the exchange date agreed for disclosure"
                - "Fill in the income, account and debt sections from your own records"
                - "Label each attachment to match the section it supports"
                - "Send the draft to your adviser for checking a week before exchange"
            - name: Matrimonial and pre-marital assets explained
              description: |-
                ## Purpose
                People often assume that what they brought into the marriage, inherited or were given stays theirs, but how those assets are treated varies by country, by how they were used and by what the family needs. Learning the general principles and listing which of your assets have a pre-marriage or inherited story prepares you for the conversation with your solicitor, rather than replacing it.

                ## Milestones
                1. The general approach to marital and non-marital property where you live summarised in your own words.
                2. Each asset with a pre-marriage, inherited or gifted origin listed with its history.
                3. Evidence of origin, such as old statements or probate papers, gathered.
                4. Your solicitor's view on each listed asset written down.

                ## Notes
                Mixing an inheritance into a joint account or the family home can change how it is viewed. Record dates and amounts, and leave the conclusion to your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pre-marital, inherited or gifted asset is listed with its history and evidence, and your solicitor's view on each is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an official guide to how property is divided on divorce where you live"
                - "List each asset with a pre-marriage, inherited or gifted origin"
                - "Find statements or papers that show where each one came from"
                - "Ask your solicitor how each listed asset is likely to be treated"
            - name: How pensions are treated on divorce
              description: |-
                ## Purpose
                Pensions are often the largest asset after the home and the most overlooked, especially when one partner stepped back from work to raise children. Learning the main approaches, such as sharing a pension, offsetting it against other assets or earmarking future payments, and why a transfer value can mislead, means you will recognise a fair pension proposal when you see one.

                ## Milestones
                1. The main pension options on divorce where you live summarised.
                2. The difference between a transfer value and the income a pension provides understood and noted.
                3. Every pension held by either of you listed from the account map.
                4. Questions about the pensions written down for your adviser.

                ## Notes
                Two pensions with the same transfer value can pay very different incomes in retirement, which is why many advisers suggest a specialist report when pensions are large or of different types.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of pension options on divorce sits beside a list of every pension both partners hold, with open questions for your adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read an official guide to pensions on divorce where you live"
                - "Write a short note on sharing, offsetting and earmarking"
                - "List every pension both of you hold with its latest value"
                - "Mark which pensions are final salary or defined benefit schemes"
            - name: Spousal maintenance options explained
              description: |-
                ## Purpose
                Spousal maintenance, sometimes called alimony, can range from nothing to a lifelong income, depending on needs, earning capacity, the length of the marriage and local law. Understanding the forms it can take, including a fixed term, a lump sum instead or a nominal order, helps both the paying and the receiving partner judge proposals against the budgets they have built.

                ## Milestones
                1. The forms spousal maintenance can take where you live listed.
                2. The factors usually weighed noted in plain language.
                3. The gap or surplus from your one-income budget set beside them.
                4. Your adviser's view on a realistic range recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the forms of spousal maintenance where you live and the factors weighed, with your adviser's view of a realistic range."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read an official guide to spousal maintenance where you live"
                - "List the forms maintenance can take, such as fixed term or lump sum"
                - "Set your one-income budget gap beside the factors considered"
                - "Ask your adviser what range they think is realistic"
            - name: How child maintenance is worked out
              description: |-
                ## Purpose
                Many countries use a published formula for child maintenance based on the paying parent's income, the number of children and how many nights they spend in each home. Running the official calculator with your own figures before talks begin gives both parents a shared starting point, and shows how a change in the overnight pattern changes the amount.

                ## Milestones
                1. The official child maintenance calculator or formula for where you live found.
                2. A calculation run with current incomes and overnight care.
                3. A second calculation run for any care pattern being discussed.
                4. Results saved with the date and the figures used.

                ## Notes
                Child maintenance and the split of assets are usually handled separately. Ask your adviser how the two interact where you live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Dated results from the official child maintenance calculator exist for the current care pattern and each pattern under discussion."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official child maintenance calculator for where you live"
                - "Run it with current incomes and overnight care"
                - "Run it again for each care pattern being discussed"
                - "Save the results with the figures you used"
            - name: Tax on transferring assets during separation
              description: |-
                ## Purpose
                Moving a second property, shares or a business stake from one spouse to the other can trigger tax, and in some countries the relief for transfers between spouses ends a set time after separation or at the divorce itself. Knowing the rules that apply to your assets, and the dates that matter, lets you raise timing with your adviser before it becomes expensive.

                ## Milestones
                1. Assets that could carry a tax charge on transfer listed.
                2. The tax authority's guidance on transfers between separating spouses summarised.
                3. Any date after which a transfer is treated less favourably noted.
                4. A tax adviser's view obtained where the sums are significant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of transferable assets with possible tax charges and the relevant dates is filed, with a tax adviser's view where sums are large."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List assets other than your main home that might be transferred"
                - "Read the tax authority's guidance on transfers between separating spouses"
                - "Note any deadline after which the tax treatment changes"
                - "Ask a tax adviser to review any large transfer before it is agreed"
            - name: Reviewing your ex's financial disclosure
              description: |-
                ## Purpose
                Once disclosure is exchanged there is usually a short window to ask questions and request missing documents, and anything you do not raise then becomes harder to raise later. Reading your ex's disclosure line by line against your own account map and balances snapshot shows what is missing, what looks low and where you need more evidence.

                ## Milestones
                1. Every figure in your ex's disclosure checked against your account map and snapshot.
                2. Missing documents and unexplained gaps listed.
                3. A draft list of questions prepared for your adviser.
                4. The final questions sent within the agreed deadline.

                ## Notes
                Keep questions proportionate. Asking for ten years of statements on a small account can cost more in fees than the account is worth.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written list of questions and document requests about your ex's disclosure reaches your adviser before the agreed deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the deadline for questions on the disclosure"
                - "Compare each account in the disclosure with your account map"
                - "Mark figures that look low or have no supporting document"
                - "Ask the agent to turn your notes into a numbered question list"
            - name: Rehousing budget for both households
              description: |-
                ## Purpose
                Housing is usually the biggest need in a settlement, especially where children will spend time in both homes. Researching what a suitable home costs to buy or rent in the areas each of you needs to live in, with the bedrooms the children need, puts a real figure on housing need that mediators and courts can work with.

                ## Milestones
                1. The area each person needs to live in, and why, written down.
                2. Bedroom needs stated for each home.
                3. Three comparable homes to buy or rent found for each household, with prices.
                4. Mortgage capacity or affordable rent estimated for each person.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three priced comparable homes for each household, with bedroom needs and borrowing or rent capacity, are documented."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down where each of you needs to live, such as near school or work"
                - "Find three comparable homes for each household with their prices"
                - "Estimate what each of you could borrow or afford in rent on your own income"
                - "Save the property listings to your settlement folder"
            - name: Keep, sell or buy out the family home
              description: |-
                ## Purpose
                Deciding what happens to the family home usually decides the shape of the rest of the settlement. Setting the three main options side by side, a sale and split, one partner buying the other out, or a delayed sale while the children are young, with real figures for each, turns an emotional question into a decision you can explain.

                ## Milestones
                1. An up-to-date valuation from at least two agents or a formal valuer.
                2. The mortgage redemption figure and any early repayment charge confirmed.
                3. Net equity worked out for each option after sale costs and charges.
                4. A preferred option chosen, with the reasons and a fallback written down.

                ## Notes
                Staying in the home is not always affordable even with a fair share of equity. Check the running costs, repairs and insurance as well as the mortgage.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of sale, buy-out and delayed sale, using current valuations and mortgage figures, ends in a chosen option and a fallback."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book valuations from two estate agents"
                - "Request a mortgage redemption statement showing any early repayment charge"
                - "Work out net equity for each option after costs"
                - "Record your preferred option and fallback with the reasons"
            - name: Buy-out mortgage affordability check
              description: |-
                ## Purpose
                Buying out a partner means taking on the whole mortgage, plus the money to pay them, on a single income, and lenders treat maintenance, benefits and recent job changes in their own ways. Speaking to a broker before agreeing a buy-out shows whether the deal you are negotiating is one you can actually finance.

                ## Milestones
                1. A broker who regularly handles divorce buy-outs chosen.
                2. Your income, including any maintenance to be received or paid, set out as a lender will see it.
                3. An agreement in principle or a written maximum borrowing figure obtained.
                4. The buy-out figure checked against that maximum before it is agreed.

                ## Notes
                Some lenders will only count maintenance once it is set out in a court order, so the timing of the order can change what you can borrow.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written borrowing figure from a broker or lender, reflecting single income and maintenance, is checked against the proposed buy-out sum."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two brokers whether they handle divorce buy-outs"
                - "List your income and maintenance the way a lender would assess it"
                - "Get an agreement in principle or a written borrowing limit"
                - "Compare that limit with the buy-out sum under discussion"
            - name: Pension valuations and specialist report
              description: |-
                ## Purpose
                Pension values on annual statements are not always comparable, especially for final salary or public sector schemes, and some schemes take months to produce the valuation needed for divorce. Requesting formal valuations early, and deciding whether a specialist pension report is justified, stops the pension question holding up the whole settlement.

                ## Milestones
                1. A valuation for divorce requested from every pension scheme on the account map.
                2. Each valuation received and filed with its date.
                3. A decision recorded on whether a specialist pension report is needed.
                4. If one is commissioned, the report's recommendations summarised for negotiation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated divorce valuation from every pension scheme is filed, and the decision on a specialist report is recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write to each pension scheme asking for a valuation for divorce"
                - "Chase any scheme that has not replied within six weeks"
                - "Ask your adviser whether a specialist pension report is justified"
                - "Summarise the report's options on one page if one is commissioned"
            - name: Splitting joint debts and loans
              description: |-
                ## Purpose
                Joint debts stay the responsibility of both borrowers until they are repaid or refinanced, whatever a settlement says about who should pay them. Agreeing how each loan, card and overdraft is dealt with, and making sure the lender's records match, protects you from being chased for a debt your ex agreed to clear.

                ## Milestones
                1. Every joint and sole debt listed with balance, rate and monthly payment.
                2. Each debt allocated to be cleared from proceeds, transferred or kept.
                3. Lenders asked about moving joint debts into one name.
                4. Joint debts paid off or refinanced so only one name remains on each.

                ## Notes
                An order between you and your ex does not bind a lender. Until the debt is in one name, the lender can still pursue either of you for the full balance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every joint debt is allocated in the settlement and, by implementation, cleared or refinanced so only one person remains liable."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every joint debt with balance, rate and payment"
                - "Ask each lender whether a joint debt can move into one name"
                - "Propose how each debt is handled in the settlement"
                - "Confirm joint debt payments are still being made @recurring(monthly:12)"
            - name: Dividing savings, investments and shares
              description: |-
                ## Purpose
                Savings and investments look simple to split until you account for notice periods, tax-sheltered accounts that cannot be transferred, shares that have grown in value and employee share schemes that vest later. Listing each holding with what can be moved, sold or kept, and the cost of each, avoids splitting a headline figure that is worth different amounts to each of you.

                ## Milestones
                1. Each savings and investment holding listed with value, owner and type.
                2. Holdings that cannot be transferred between people identified.
                3. Tax or charges on selling or moving each holding noted.
                4. A split agreed that compares values after tax and charges.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every savings and investment holding is listed with its transfer rules, tax and charges, and the agreed split compares after-tax values."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each savings and investment holding with its current value"
                - "Check which holdings can be transferred and which must be sold"
                - "Note employee share schemes and their vesting dates"
                - "Ask your adviser to compare the proposed split on after-tax values"
            - name: Dividing cars, contents and personal belongings
              description: |-
                ## Purpose
                Arguments over furniture and cars can cost more in legal fees than the items are worth, yet they still need settling. A shared list of household contents and vehicles, with second-hand values and who wants what, lets most items be agreed directly between you and keeps the lawyers for the larger questions.

                ## Milestones
                1. A list of furniture, appliances, vehicles and valuable items with second-hand values.
                2. Items of sentimental value or needed for the children marked.
                3. Each item allocated, with a balancing payment if the totals differ much.
                4. Collection dates agreed for items leaving the home.

                ## Notes
                Use second-hand prices, not what you paid. Most household contents are worth far less than people expect.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of contents and vehicles with second-hand values is agreed, every item is allocated and collection dates are set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk through the home room by room listing items worth dividing"
                - "Look up second-hand values for vehicles and larger items"
                - "Mark the items you want and the items the children need in each home"
                - "Agree collection dates by email"
            - name: Clean break or ongoing maintenance decision
              description: |-
                ## Purpose
                A clean break ends financial claims between spouses so neither can come back for more, while ongoing maintenance keeps a link that may last years. Comparing the two with numbers, including what a capitalised lump sum would need to be and how secure ongoing payments are, helps both partners decide which risk they would rather carry.

                ## Milestones
                1. Projected maintenance over its likely term set out year by year.
                2. An equivalent lump sum estimated with your adviser.
                3. The risks of each option written down, including the payer's job security and remarriage.
                4. A preferred structure chosen and recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a clean break and ongoing maintenance, with an estimated lump sum equivalent, ends in a chosen structure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write out projected maintenance for each year of its likely term"
                - "Ask your adviser what lump sum might replace it"
                - "List the risks of each option for both of you"
                - "Record which structure you prefer and why"
            - name: Settlement offer comparison model
              description: |-
                ## Purpose
                Offers are rarely like for like: one gives more equity and less pension, another adds maintenance but drops the car. A simple model that converts every proposal into the same measures, such as capital in hand, pension, housing secured, debts carried and income for the next five years, lets you compare offers on substance and explain a counter-offer clearly.

                ## Milestones
                1. A spreadsheet with the same rows for every offer: capital, pension, housing, debts and income.
                2. Each offer made so far entered.
                3. The minimum acceptable outcome agreed with your adviser.
                4. Every new offer entered and compared before you reply.

                ## Notes
                Pension and cash are not worth the same pound for pound. Ask your adviser how to show them fairly in the model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every settlement offer received is entered in one model using the same five measures and compared against your agreed minimum."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a sheet with rows for capital, pension, housing, debts and income"
                - "Enter each offer made so far"
                - "Agree your minimum acceptable outcome with your adviser"
                - "Ask the agent to summarise how the latest offer differs from the last"
            - name: Preparing for the first mediation meeting
              description: |-
                ## Purpose
                Mediation sessions are short and paid by the hour, so arriving with documents, figures and a clear list of what matters to you makes each one count. Preparing for the first joint session also means knowing what you will not agree on the day and what you want the mediator to record.

                ## Milestones
                1. Your account map, one-income budget and disclosure brought in an organised pack.
                2. A list of your three priorities and the points where you could be flexible.
                3. Questions for the mediator written down.
                4. Notes from the session written up within a day, including any proposals made.

                ## Notes
                Start from the **Meeting notes** template. Proposals made in mediation are usually not binding until turned into a legal agreement, so check anything you agree with your solicitor.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend the first mediation session with an organised pack and written priorities, and your notes are written up within 24 hours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book your mediation information meeting"
                - "Write your three priorities and where you could give ground"
                - "Pack your account map, budget and disclosure for the session"
                - "Write up the session notes the same evening"
            - name: Preparing for a court financial hearing
              description: |-
                ## Purpose
                Where negotiation fails, a court process usually involves a first appointment, a hearing aimed at settlement and, less often, a final hearing, each with its own documents and deadlines. Preparing for each one with your solicitor, a summary of your position and a realistic view of costs keeps you informed in a process that can otherwise feel like it is happening to you.

                ## Milestones
                1. The hearing date, location and required documents confirmed.
                2. A one-page summary of your position and proposals prepared with your solicitor.
                3. Your legal costs to date and the estimate to the end of the case recorded.
                4. Notes on the outcome and next steps written up after the hearing.

                ## Notes
                Many hearings are designed to encourage settlement on the day. Go knowing your minimum outcome from the offer comparison model.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each hearing is attended with a prepared position summary and cost figures, and outcome notes are written within two days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the hearing date and the documents required"
                - "Prepare a one-page position summary with your solicitor"
                - "Update your legal costs to date before the hearing"
                - "Write up what was decided and the next steps afterwards"
            - name: Turning the agreement into a consent order
              description: |-
                ## Purpose
                An agreement reached in mediation or by email is often not legally binding until a court approves it as a financial order, and without one either person may be able to bring a claim years later. Having the agreement drafted into a consent order, checked, signed and approved closes that risk and gives banks and pension schemes the document they need to act.

                ## Milestones
                1. The agreed terms written down in full and checked by both sides.
                2. A draft order prepared by a solicitor and reviewed line by line.
                3. The order and supporting financial summary signed and submitted.
                4. An approved, sealed order received and filed.

                ## Notes
                Names and procedures differ by country, and in some places a separation agreement plays this role. Ask your solicitor what makes the agreement binding where you live.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A court-approved financial order reflecting the agreed terms is received and filed in your settlement folder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the agreed terms in full and send them to your solicitor"
                - "Read the draft order line by line against the agreed terms"
                - "Sign and return the order and financial summary"
                - "File the sealed order in your settlement folder"
            - name: Timing the final divorce order around the money
              description: |-
                ## Purpose
                In some countries, finalising the divorce before the financial order is approved can end rights such as survivor benefits from a spouse's pension, or affect claims on the home. Agreeing the order of the two steps with your solicitor, and holding back the final application until the finances are secured where that is advised, avoids losing protections by applying too early.

                ## Milestones
                1. Your solicitor's advice on the sequence of the final divorce and the financial order recorded.
                2. Benefits that would end on the final divorce, such as pension survivor rights, listed.
                3. A decision recorded on when to apply for the final order.
                4. The final order applied for at the agreed point.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on when to apply for the final divorce order, based on your solicitor's advice about the financial order, is filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your solicitor whether to wait for the financial order before finalising"
                - "List the benefits that would end when the divorce is final"
                - "Record the agreed sequence in your correspondence log"
                - "Apply for the final order at the agreed point"
            - name: Implementation checklist after the financial order
              description: |-
                ## Purpose
                A financial order is only paper until its terms are carried out: money transferred, the house sold or refinanced, pension shares completed, joint accounts closed. A checklist with every action, who does it and by when, worked through until each item is evidenced, prevents the common problem of a settlement agreed but never fully delivered.

                ## Milestones
                1. Every action in the order listed with an owner and a deadline.
                2. Lump sums and transfers paid or received, with bank evidence saved.
                3. Property and vehicle ownership changed into the right names.
                4. Joint accounts closed and every remaining item ticked off with evidence.

                ## Notes
                If the other person does not carry out the order, tell your solicitor quickly. Enforcement routes exist, but delay makes them harder.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every term of the financial order has a recorded completion date and saved evidence, with no item outstanding."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every action in the order with who does it and by when"
                - "Send the order to each bank, lender and land registry that needs it"
                - "Save evidence of each transfer as it completes"
                - "Close the remaining joint accounts once their balances are split"
            - name: Completing the pension share after the order
              description: |-
                ## Purpose
                A pension sharing order sets the percentage, but the receiving partner still has to choose where the share goes, and the scheme has its own forms, fees and time limits. Following the share through to completion, and setting up the receiving pension correctly, makes sure the value agreed in the settlement actually arrives.

                ## Milestones
                1. The order and required forms sent to the pension scheme within its time limit.
                2. Any scheme charges paid as the order directs.
                3. If receiving, a destination pension chosen and its details given to the scheme.
                4. Written confirmation of the completed share and the new pension's value filed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written confirmation that the pension share has completed, showing the new pension's value, is filed within the scheme's time limit."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the scheme's time limit and charges for carrying out the share"
                - "Send the order and forms to the pension scheme"
                - "Open the pension that will receive the share if you are the recipient"
                - "File the scheme's completion letter in your settlement folder"
            - name: Updating wills, beneficiaries and nominations
              description: |-
                ## Purpose
                Pension nominations, life insurance beneficiaries and old wills often still name an ex-partner years after divorce, and they pay out to whoever is named. Reviewing every one of them as soon as the settlement allows, and making a new will, means your money goes where you now intend.

                ## Milestones
                1. Every pension, life policy and death-in-service benefit listed with its current nominee.
                2. Nominations updated wherever you are free to change them.
                3. Any life cover the order requires you to keep for your ex or the children recorded.
                4. A new will made with professional help and stored safely.

                ## Notes
                In some places divorce changes how an existing will is read, but separation alone may not. Do not wait for the final order to check your nominations.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pension, policy and benefit nomination reflects your post-separation wishes, and a new will is signed and stored."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every nomination and beneficiary form you have signed"
                - "Ask your employer for the death-in-service nomination form"
                - "Update each nomination you are free to change"
                - "Book an appointment to make a new will"
                - "Review your nominations and will together @recurring(yearly)"
            - name: Two-home children's budget agreement
              description: |-
                ## Purpose
                Children in two homes need two beds, two sets of everyday clothes and a plan for the big annual costs like school uniform, birthdays and holidays. Agreeing a yearly budget for the children's costs across both homes, including which parent buys what, cuts the number of money conversations at handovers and gives the children consistency.

                ## Milestones
                1. Duplicate items each home needs listed with costs.
                2. Annual costs such as uniform, trips, clubs and birthdays forecast for the school year.
                3. Each cost assigned to one parent or to the shared children's ledger.
                4. The agreement written down and shared with the other parent.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written yearly children's budget assigns every forecast cost to a parent or the shared ledger and is accepted by both parents."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List the items the children need in each home"
                - "Forecast the school year's uniform, trips, clubs and birthdays"
                - "Agree which parent covers each cost"
                - "Review the children's budget before each new school year @recurring(yearly)"
            - name: Money safety when leaving economic abuse
              description: |-
                ## Purpose
                Where one partner controlled the money, monitored spending or ran up debts in the other's name, separating brings real financial risk as well as emotional strain. A quiet, step-by-step plan made with a specialist support service covers a safe account, documents, access to emergency funds and coerced debts, without alerting the other person too early.

                ## Milestones
                1. A specialist domestic abuse or economic abuse service contacted.
                2. An account opened that the other person cannot see, with alerts going somewhere safe.
                3. Copies of key documents and evidence of controlling behaviour stored away from the home.
                4. Debts taken out in your name under pressure listed for advice.

                ## Notes
                Your safety comes first. If you are in danger, call the emergency services. Ask the support service before changing anything the other person might notice.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hidden account, documents stored outside the home and a list of coerced debts are in place, planned with a specialist support service."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Contact a specialist economic abuse or domestic abuse service"
                - "Open an account with alerts sent to a device only you use"
                - "Store copies of key documents somewhere outside the home"
                - "List debts taken out in your name under pressure for an adviser"
            - name: Rebuilding financial independence after years at home
              description: |-
                ## Purpose
                Stepping back from work to raise children can leave a partner with no recent payslips, a thin credit file and little view of the household's finances. Building your own income plan, credit history and savings habit alongside the settlement turns maintenance and capital into a base for independence rather than the only support.

                ## Milestones
                1. Your own income options listed, such as returning to work, retraining or increasing hours.
                2. A card or account in your name used lightly and cleared each month to build a credit history.
                3. A savings pot in your name receiving a fixed amount each month.
                4. A target date for covering your essential costs without spousal maintenance written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Within twelve months you hold a credit history in your own name, a savings pot fed monthly and a written date for covering essentials alone."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down three ways you could raise your own income"
                - "Put one small regular bill on a card in your name and clear it in full"
                - "Move a fixed amount into your own savings each payday @recurring(monthly:26)"
                - "Set a target date to cover essentials from your own income"
            - name: Divorce close to retirement
              description: |-
                ## Purpose
                Separating in your fifties or sixties leaves less time to rebuild pensions and savings, and the split of pensions and the home often decides retirement income for both of you. Projecting each person's retirement income under each settlement option, including state pension entitlement, shows whether a proposal leaves both of you with enough to live on.

                ## Milestones
                1. State pension forecasts obtained for both of you.
                2. Projected retirement income under each settlement option worked out.
                3. Survivor benefits that will be lost on divorce identified.
                4. The minimum retirement income each of you needs written down for negotiation.

                ## Notes
                State pension rules for divorced people differ by country, and some let you build on an ex-spouse's record. Check with your state pension service.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Projected retirement income for both partners under each settlement option, using state pension forecasts, is documented."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request your state pension forecast"
                - "Ask your adviser to project retirement income under each option"
                - "List the survivor benefits that end on divorce"
                - "Write down the minimum retirement income you need"
            - name: Separating as an unmarried couple
              description: |-
                ## Purpose
                Couples who lived together without marrying or registering a partnership often have far fewer financial claims against each other than married couples, and many are surprised by it. Working out whose name is on the property, the accounts and the debts, and what any cohabitation agreement says, shows what you can claim and what the children may be entitled to.

                ## Milestones
                1. Legal ownership of the home and how it is held recorded from the title or tenancy.
                2. Contributions each of you made to the deposit and mortgage documented.
                3. Any cohabitation agreement or declaration of trust found and summarised.
                4. A solicitor's view obtained on claims for you and for the children.

                ## Notes
                Claims on behalf of children are often separate from claims between partners. Ask about both.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ownership, contributions and any agreement are documented, and a solicitor's view of claims for you and the children is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the title register or find the tenancy agreement for the home"
                - "List what each of you paid towards the deposit and mortgage"
                - "Look for any cohabitation agreement or declaration of trust"
                - "Book advice on claims for you and for the children"
            - name: Business interests in the settlement
              description: |-
                ## Purpose
                When one or both partners own a business, its value, the income it pays and the cash it holds all become part of the settlement, and owners and non-owners often see them very differently. Preparing accounts, agreeing how the business will be valued and planning how a share could be paid without crippling it keeps intact the income both households may rely on.

                ## Milestones
                1. Three years of business accounts, tax returns and management figures gathered.
                2. A decision recorded on whether a single joint expert values the business.
                3. Cash held in the business beyond its working needs identified.
                4. Options for paying out a share, such as over time or offset against other assets, compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A business valuation approach is agreed and at least two ways of paying out the share are compared in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect three years of business accounts and tax returns"
                - "Ask your adviser about appointing a single joint valuer"
                - "Identify cash beyond what the business needs to trade"
                - "Compare paying out over time with offsetting against other assets"
            - name: Tracing undisclosed or hidden assets
              description: |-
                ## Purpose
                Sometimes disclosure does not add up: a lifestyle that outruns declared income, money moved to relatives, a business that suddenly stops making a profit. Building an evidenced case from statements, public records and spending patterns, and taking it to your solicitor, is the effective response, and it must be done lawfully.

                ## Milestones
                1. Specific discrepancies listed with the documents that show them.
                2. Public records such as property and company registers checked.
                3. Unexplained transfers totalled with dates.
                4. Your solicitor's advice obtained on next steps and their likely cost.

                ## Notes
                Do not access your ex's private email, accounts or devices without permission. Evidence obtained that way can be excluded and may be unlawful.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A documented list of disclosure discrepancies, checked against public records, is given to your solicitor and their advice is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each disclosure figure that does not match what you know"
                - "Search public property and company registers"
                - "Total unexplained transfers with dates from statements you hold"
                - "Ask your solicitor whether the evidence justifies further steps"
            - name: Varying maintenance after circumstances change
              description: |-
                ## Purpose
                Ongoing maintenance orders and agreements can usually be reviewed when income, needs or living arrangements change a lot, such as a job loss, a new partner moving in or a child leaving education. Knowing when a review is worth seeking, what evidence is needed and what applying costs helps both payer and recipient respond to change rather than letting arrears or resentment build.

                ## Milestones
                1. The terms of your maintenance order and any review or end dates summarised.
                2. The change in circumstances evidenced with documents.
                3. The likely outcome and cost discussed with an adviser.
                4. A variation agreed between you or applied for, or a decision not to proceed recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on whether to seek a variation, based on documented changes and adviser input, is recorded along with any application made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your maintenance terms for any review or end dates"
                - "Gather evidence of the change in income or needs"
                - "Ask an adviser whether a variation is likely to be worth it"
                - "Check whether circumstances justify a maintenance review @recurring(yearly)"
            - name: Cross-border assets in an international divorce
              description: |-
                ## Purpose
                Couples with homes, pensions or accounts in more than one country, or who have lived abroad, may be able to divorce in more than one place, and the choice can change the financial outcome significantly. Mapping assets by country, understanding which courts could hear the case and taking early advice from a lawyer with international experience can matter more than any later negotiation.

                ## Milestones
                1. Every asset listed with the country where it is held.
                2. Countries with a possible claim to hear the divorce identified.
                3. Advice obtained from a family lawyer with international experience.
                4. Currency, tax and enforcement issues for each foreign asset noted.

                ## Notes
                Where proceedings start can be time sensitive. Seek advice promptly if either of you might begin the case abroad.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An asset map by country exists and advice from an international family lawyer on where to divorce is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every asset with the country it is held in"
                - "Note each country either of you has lived in or holds citizenship of"
                - "Book advice from a family lawyer with international experience"
                - "Record currency and tax issues for each foreign asset"
---

# Divorce Financial Settlement

This area is for anyone untangling money after a marriage, civil partnership or long relationship ends, with or without children. It runs from the first fortnight's safety steps, a sole account and a full map of what you both hold, through the routines that keep separation finances in order, the knowledge behind disclosure, pensions and maintenance, the big decisions about the home, debts and offers, and the dated steps from mediation to a binding order and its implementation, then versions for parents, people leaving economic abuse, later-life and unmarried couples, and finally business interests, hidden assets and international cases.

What repeats is a weekly look at the correspondence and deadline log, monthly checks of joint accounts, interim bills, legal fees, income evidence and child maintenance, a monthly settling of shared children's costs, and yearly reviews of nominations, maintenance and the children's budget. The Monthly budget and bills, Vendor and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
