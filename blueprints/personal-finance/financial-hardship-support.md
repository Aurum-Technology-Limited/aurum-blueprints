---
id: personal-finance.financial-hardship-support
name: Financial Hardship Support
description: "A calm route through a money crisis: the shortfall measured, food, heat and housing protected first, hardship schemes, food banks, grants and breathing space claimed, and a way back out when income recovers."
category: personal
version: 1.0.0
tags: [personal-finance, financial-hardship-support, everyone, hardship, food-banks, grants, breathing-space, crisis-support]
author: Aurum Technology
starter_structure:
  templates:
    - weekly-meal-plan
    - monthly-budget-bills
    - meeting-notes
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Financial Hardship Support
          description: "Using hardship schemes, food banks, grants and creditor breathing space when income falls below essential costs."
          projects:
            - name: Essentials shortfall figure for this month
              description: |-
                ## Purpose
                When money runs short it is easy to feel that everything is unaffordable, which makes it impossible to ask for the right help. Listing the income you can count on this month against rent, energy, food, water, local tax and travel gives one shortfall figure, and every adviser, grant form and hardship team will ask for exactly that number.

                ## Milestones
                1. All income expected this month listed with the date each payment lands.
                2. Essential costs listed at their real monthly amounts, with arrears kept separate.
                3. One shortfall figure written down, monthly and weekly.
                4. The figure saved where you can read it out on a phone call.

                ## Notes
                Count only money that will definitely arrive. A hoped-for refund or late invoice belongs in a separate maybe column.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written shortfall figure for this month, built from dated income and essential costs, saved somewhere you can find it during a call."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every payment due to reach your account this month with its date"
                - "Write down rent, energy, water, food, local tax and travel at real amounts"
                - "Subtract essentials from income to get the shortfall figure"
                - "Save the figure in a note on your phone for calls with advisers"
            - name: Seven-day crisis triage list
              description: |-
                ## Purpose
                In the first days of a crisis, the danger is not the total owed but the few things that will cause real harm within a week: no food in the house, a meter about to run out, a court date, a missed prescription. A short list of what is due in the next seven days, sorted by harm rather than by who shouts loudest, tells you where the little money you have must go first.

                ## Milestones
                1. Everything due or running out in the next seven days written on one page.
                2. Each item marked by the harm if it is missed: safety, housing, heat, food or other.
                3. The top three items each given an action and a day.
                4. Items that can safely wait listed separately so they stop crowding your head.

                ## Notes
                Food, heat, medication and keeping your home come before any unsecured debt, however insistent the letters are.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page list of everything due within seven days, sorted by harm, with an action and a day set for the top three items."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down everything due or running out in the next seven days"
                - "Mark each item with the harm caused if it is missed"
                - "Choose the three items that must be dealt with first"
                - "Put a day against each of those three actions"
            - name: Crisis contacts and free advice sheet
              description: |-
                ## Purpose
                Searching for help while panicking leads straight to paid debt firms and lookalike sites that charge for what free services give away. One sheet with a free debt advice charity, a welfare benefits adviser, your local council's crisis support line, the nearest food bank referral route and a mental health crisis number means the right door is one call away.

                ## Milestones
                1. A free, regulated debt advice service found and its number written down.
                2. Your local authority's crisis or welfare assistance contact added.
                3. The nearest food bank and how to get a referral noted.
                4. A mental health crisis line included alongside the money contacts.
                5. The sheet saved on your phone and printed for the fridge.

                ## Notes
                Genuine debt advice is free. If a service asks for an upfront fee or pushes one product before looking at your budget, walk away.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contacts sheet with at least five free crisis and advice services, saved on your phone and printed at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a free debt advice charity and save its phone and webchat details"
                - "Look up your council's crisis support or local welfare assistance page"
                - "Add the nearest food bank and the agencies that can refer you"
                - "Save a mental health crisis line on the same sheet"
                - "Check every number on the sheet still works @recurring(yearly)"
            - name: Bare-minimum budget for roof, heat and food
              description: |-
                ## Purpose
                A normal budget assumes there is enough to go round; a crisis budget asks the smaller question of what keeps you housed, warm, fed and safe. Setting a bare-minimum figure for each of those, below which you will not go, shows how much is genuinely available for anything else and gives creditors an honest picture.

                ## Milestones
                1. A minimum weekly amount set for food and household basics.
                2. Rent or mortgage, energy and water payments protected in the plan.
                3. Medication, essential travel and phone credit included as protected costs.
                4. The amount left after protected costs written down, even if it is zero.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written bare-minimum budget that protects housing, energy, water, food, medication and essential travel, with the remaining amount stated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a weekly minimum for food, toiletries and cleaning basics"
                - "Add housing, energy and water as protected payments"
                - "Include medication, essential travel and phone credit"
                - "Work out what remains after the protected costs"
            - name: Hardship evidence folder
              description: |-
                ## Purpose
                Almost every hardship scheme, grant and creditor asks for the same proof: identity, income, tenancy or mortgage, recent bills, bank statements and anything that explains the drop. Keeping one folder, paper or digital, turns each new application from a lost afternoon into ten minutes, and stops applications stalling for want of a document.

                ## Milestones
                1. Photo ID and proof of address scanned or photographed.
                2. The last three months of bank statements and payslips or benefit letters saved.
                3. Current energy, water, local tax and housing bills in the folder.
                4. A short letter or note explaining what caused the hardship and when.
                5. Medical, redundancy or separation evidence added where it applies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds ID, proof of address, three months of statements, income proof, current bills and a written explanation of the hardship."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Photograph your ID and a recent proof of address into one folder"
                - "Download three months of bank statements from every account"
                - "Add current energy, water, local tax and housing bills"
                - "Write a few lines on what caused the hardship and when it started"
                - "File every new letter about money into the folder @recurring(monthly:28)"
            - name: Local hardship support map
              description: |-
                ## Purpose
                Help in a crisis is patchy and local: one town has a community pantry and a council crisis fund, the next has a baby bank and a warm space but no fuel vouchers. Mapping what exists within reach of your home, with opening times and how to get in, means you can use it the week you need it rather than discovering it a month late.

                ## Milestones
                1. Food banks, community pantries and social supermarkets near you listed with opening times.
                2. Council crisis funds, fuel voucher schemes and household support funds noted with eligibility.
                3. Warm spaces, community fridges and free meal sessions added.
                4. Baby banks, clothing banks and furniture schemes listed where relevant.
                5. The map saved with addresses and how to get a referral for each.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of at least eight local support services with opening times, eligibility and referral route for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your council website for crisis support and household support funds"
                - "List food banks, pantries and community fridges within reach"
                - "Ask a local advice centre what else operates in your area"
                - "Note the referral route and opening times for each service"
            - name: Telling your bank you are in financial difficulty
              description: |-
                ## Purpose
                Banks and card providers usually have a financial difficulty team that can stop charges, pause interest or agree a breathing period, but they rarely act until you tell them. A single call or secure message, with your shortfall figure ready, often prevents fees snowballing on an overdraft and means future missed payments are treated as hardship rather than neglect.

                ## Milestones
                1. The financial difficulty or support team contact found for each bank and card provider.
                2. Each told about the change in circumstances, with your shortfall figure.
                3. Any agreement on charges, interest or payment pauses confirmed in writing.
                4. A note made of who you spoke to, the date and what was agreed.

                ## Notes
                You can ask for a note of vulnerability on your account if illness, bereavement or mental health is part of the picture.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every bank and card provider has been told about the hardship, and any agreed changes are confirmed in writing and noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the financial difficulty contact for each bank and card provider"
                - "Call or message each one with your shortfall figure ready"
                - "Ask for charges and interest to be paused while you get advice"
                - "Ask for written confirmation of anything agreed"
            - name: Separate basic bank account for incoming money
              description: |-
                ## Purpose
                If you owe money to the bank where your wages or benefits arrive, it may be able to take what it is owed before you can pay for food or rent. Moving incoming money to a basic account at a bank you owe nothing to protects it, and basic accounts usually have no overdraft and no credit check to open.

                ## Milestones
                1. A list of which banks you owe money to and which you do not.
                2. A basic or fee-free account opened at a bank you owe nothing to.
                3. Wages, benefits and any other income redirected to the new account.
                4. Essential direct debits moved across so they come from protected money.

                ## Notes
                Talk to a free debt adviser before moving money if you are unsure; they can confirm whether set-off is a risk with your bank.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All income arrives in an account at a bank you owe nothing to, and essential direct debits are paid from it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every bank you owe money to, including overdrafts and loans"
                - "Apply for a basic account at a bank you owe nothing to"
                - "Give the new account details to your employer and benefit office"
                - "Move rent, energy and water payments to the new account"
            - name: Statutory breathing space through an approved adviser
              description: |-
                ## Purpose
                Some countries give people in debt a legal pause, such as the 60-day breathing space in England and Wales, during which most creditors must freeze interest, charges and enforcement. It can only be started by an approved debt adviser, and it buys time to get proper advice without letters and calls piling up.

                ## Milestones
                1. Whether a statutory breathing space exists where you live confirmed.
                2. An appointment with an approved debt adviser booked.
                3. The adviser's view on whether a breathing space suits you recorded.
                4. If started, the start and end dates noted and all creditors listed on it.
                5. The things you must keep paying during the pause written down.

                ## Notes
                A breathing space does not cancel debts, and ongoing bills such as rent and energy still need paying during it. A longer version may exist for people receiving mental health crisis treatment.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved adviser has assessed you for breathing space, and the decision and any start and end dates are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your country offers a statutory debt breathing space"
                - "Book a free debt advice appointment and ask about breathing space"
                - "List every creditor with account numbers for the adviser"
                - "Write the breathing space end date where you will see it"
            - name: Food bank referral and first visit
              description: |-
                ## Purpose
                Many food banks work through referral, from an advice centre, GP surgery, school, social worker or housing officer, and each voucher covers a few days of food. Knowing how to get referred and what to bring makes the first visit less daunting, and asking about dietary needs, toiletries and cooking costs means the parcel fits what you can actually use.

                ## Milestones
                1. The nearest food bank's referral routes and opening times confirmed.
                2. A referral obtained from an agency that already knows your situation.
                3. Dietary, cultural and cooking needs explained when collecting.
                4. The parcel collected and any extra help offered at the food bank noted.

                ## Notes
                Food banks often host advisers on site. Ask whether you can speak to one while you are there; it is often the quickest route to further help.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A food bank referral obtained and the first parcel collected, with any on-site advice or extra help noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your advice centre, GP surgery or school for a food bank referral"
                - "Check the food bank's opening times and what to bring"
                - "Tell the volunteers about dietary needs and whether you can cook"
                - "Ask whether an adviser is available on site during your visit"
            - name: Friday cash and essentials check
              description: |-
                ## Purpose
                Money in a crisis changes week by week, and a shortfall noticed on Friday can still be fixed before Monday's direct debits. Ten minutes each Friday checking the balance, what leaves next week and what food and meter credit are left catches gaps early enough to ask for help rather than miss a payment.

                ## Milestones
                1. A fixed Friday slot for the check, kept for four weeks running.
                2. Balance, next week's outgoings and food and meter credit checked each time.
                3. Any gap flagged and an action set the same day.
                4. A running note of weeks with and without a gap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The Friday check has been done for at least four consecutive weeks, with any gap given an action the same day."
                cadence: rolling
              tasks:
                - "Choose a Friday time and set a reminder for the check"
                - "Check the balance against next week's outgoings @recurring(weekly:fri)"
                - "Write down the action for any gap the same day"
                - "Note at the end of the month how many weeks had a gap"
            - name: Support applications tracker
              description: |-
                ## Purpose
                During a crisis it is common to have six applications in the air at once: a crisis payment, a grant, a social tariff, a benefit claim, a council tax reduction and a charity referral. A single tracker with what was sent, when, the reference and when to chase stops applications quietly lapsing and shows at a glance what money is still to come.

                ## Milestones
                1. A tracker with columns for scheme, date sent, reference, expected decision and outcome.
                2. Every current application entered, including phone applications.
                3. A chase date set for each pending application.
                4. Outcomes and amounts recorded as decisions arrive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists every hardship application with its reference and outcome, and pending ones are chased on their chase date."
                cadence: rolling
              tasks:
                - "Create a tracker with scheme, date, reference, chase date and outcome"
                - "Enter every application you have made in the last three months"
                - "Chase any application past its expected decision date @recurring(monthly:12)"
                - "Record each decision and amount as it arrives"
            - name: Hardship arrangement expiry calendar
              description: |-
                ## Purpose
                Most hardship help is temporary: a three-month payment pause, a six-month interest freeze, a year on a water assistance scheme, a limit on food bank vouchers. When these end without warning, payments jump back to full. A calendar of every end date, with a reminder a month ahead, gives time to renew, extend or plan for the step up.

                ## Milestones
                1. Every temporary arrangement listed with its start and end date.
                2. A reminder set one month before each end date.
                3. The full payment that resumes after each one written alongside.
                4. A renewal or extension request sent for each arrangement still needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every temporary hardship arrangement has an end date in the calendar with a reminder one month ahead, and none has lapsed unexpectedly."
                cadence: rolling
              tasks:
                - "List every payment pause, freeze, reduced tariff and scheme with its end date"
                - "Set a calendar reminder one month before each end date"
                - "Write the full payment that resumes next to each arrangement"
                - "Review upcoming end dates and request extensions @recurring(monthly:20)"
            - name: Prepayment meter credit routine
              description: |-
                ## Purpose
                On a prepayment meter, running out of credit means no heat or light, and many households quietly go without rather than ask. A weekly check of credit and emergency credit, knowing the supplier's friendly credit hours and where to get fuel vouchers, means the meter never runs dry by surprise.

                ## Milestones
                1. Your meter's emergency credit amount and friendly credit hours known.
                2. A weekly check of credit and debt recovery rate in place.
                3. The supplier told if you are struggling to top up.
                4. Local fuel voucher or top-up support schemes noted for emergencies.

                ## Notes
                Tell your supplier if you have run out or are rationing heat. They have obligations to help customers in that position, including temporary credit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Meter credit is checked weekly, the supplier knows about any difficulty, and a fuel voucher source is noted for emergencies."
                cadence: rolling
              tasks:
                - "Find your meter's emergency credit amount and friendly credit hours"
                - "Check meter credit and the weekly debt recovery rate @recurring(weekly:mon)"
                - "Call the supplier if you cannot top up this week"
                - "Note where to get fuel vouchers in your area"
            - name: Cupboard and food parcel meal plan
              description: |-
                ## Purpose
                A food parcel goes further when it is planned around rather than dipped into, and the same goes for whatever is already in the cupboard and freezer. Planning the week's meals on Sunday from what you have, then buying only the gaps, stretches a small food budget and cuts waste of the fresh items that go off first.

                ## Milestones
                1. A list of what is in the cupboard, fridge and freezer each Sunday.
                2. A week of meals planned from those items first.
                3. A short shopping list of gaps within the weekly food minimum.
                4. Fresh items used early in the week and tins later.

                ## Notes
                Start from the **Weekly meal plan** template. Batch cooking in one session saves energy as well as food.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Sunday meal plan built from what is in the house is written for four weeks running, with shopping kept within the weekly food minimum."
                cadence: rolling
              tasks:
                - "Write down everything in the cupboard, fridge and freezer"
                - "Plan the week's meals from what you have before shopping @recurring(weekly:sun)"
                - "Write a gaps-only shopping list within the weekly food minimum"
                - "Cook a batch meal that covers at least two days"
            - name: Monthly hardship budget reset
              description: |-
                ## Purpose
                In a crisis, income, arrangements and costs shift every month: a grant arrives, a pause ends, a benefit is reassessed. Resetting the bare-minimum budget at the start of each month keeps the plan real and shows whether the shortfall is shrinking, steady or growing, which is the figure every adviser will ask for at the next review.

                ## Milestones
                1. The bare-minimum budget updated at the start of each month.
                2. New income, ended arrangements and changed costs reflected.
                3. This month's shortfall or surplus recorded next to last month's.
                4. Any widening gap taken to an adviser within the month.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The hardship budget has been reset monthly for at least three months, with each month's shortfall recorded beside the last."
                cadence: rolling
              tasks:
                - "Set up the budget sheet from the monthly budget and bills template"
                - "Reset the bare-minimum budget for the new month @recurring(monthly:3)"
                - "Record this month's shortfall next to last month's"
                - "Book an adviser call if the gap has widened two months running"
            - name: Twice-weekly post and email session
              description: |-
                ## Purpose
                Unopened envelopes are one of the most common reasons a manageable crisis becomes a court claim or a missed deadline, because fear makes post easy to avoid. Opening everything at a set time twice a week, ideally with a cup of tea or someone beside you, keeps deadlines visible and shrinks the dread.

                ## Milestones
                1. Two fixed times each week for opening post and money emails.
                2. Every letter sorted into act now, file or bin.
                3. Any letter with a deadline added to the calendar the same day.
                4. Four weeks of sessions kept without a pile building up.

                ## Notes
                Court papers, enforcement letters and disconnection notices always go in act now. If you are unsure what a letter means, take a photo to an adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Post and money emails are opened at two set times a week for four weeks, with every deadline entered in the calendar."
                cadence: rolling
              tasks:
                - "Open every unopened money letter you have today"
                - "Open post and money emails at your set times @recurring(weekly:tue,fri)"
                - "Add any deadline from a letter to the calendar straight away"
                - "Photograph letters you do not understand for your adviser"
            - name: Money stress check-in with someone you trust
              description: |-
                ## Purpose
                Financial crisis and poor mental health feed each other: worry disrupts sleep, poor sleep makes letters harder to face, and avoidance makes the debt worse. A short monthly conversation with a friend, relative or support worker about how you are coping, not just the numbers, catches the slide before it turns into not answering the phone at all.

                ## Milestones
                1. One person chosen and asked to be your check-in contact.
                2. A monthly check-in arranged with a fixed day.
                3. A short list of warning signs agreed, such as not opening post.
                4. Your doctor or a support line contacted if the warning signs appear.

                ## Notes
                If you have thoughts of harming yourself, contact a crisis line or emergency services now. Debt can always be dealt with later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named person holds a monthly check-in with you and knows the warning signs that mean you need more support."
                cadence: rolling
              tasks:
                - "Ask one trusted person to be your monthly check-in contact"
                - "Agree three warning signs that mean you need more help"
                - "Talk through how you are coping with your check-in contact @recurring(monthly:25)"
                - "Save your doctor's number next to the crisis contacts sheet"
            - name: Charitable grant search sessions
              description: |-
                ## Purpose
                There are thousands of small charitable funds for people in need, many tied to a trade, an employer, a place, a health condition or military service, and most are never claimed because nobody knows they exist. A monthly hour on a free grant search tool, with your evidence folder to hand, regularly turns up help for an essential item or a specific bill.

                ## Milestones
                1. A free online grant search tool used with your circumstances entered.
                2. A shortlist of funds whose criteria you clearly meet.
                3. At least one application sent each month while the need lasts.
                4. Each application added to the support tracker.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three grant search sessions held, with each eligible application sent and logged in the support tracker."
                cadence: rolling
              tasks:
                - "Run a free grant search with your work history, area and health details"
                - "Shortlist funds whose criteria you clearly meet"
                - "Send one grant application and log it @recurring(monthly:14)"
                - "Ask your adviser whether they can apply on your behalf"
            - name: How local crisis and welfare assistance schemes work
              description: |-
                ## Purpose
                Councils and devolved governments often run emergency funds for food, fuel and essential household items, under names such as local welfare assistance, crisis grants or household support funds. Knowing who runs yours, whether it pays cash, vouchers or goods, and how often you can apply means you can ask for the right thing the first time.

                ## Milestones
                1. The name and operator of your local crisis scheme found.
                2. What it pays for and in what form, cash, vouchers or goods, noted.
                3. Eligibility rules and how often you can apply written down.
                4. The application route and typical decision time recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on your local crisis scheme covering what it pays, eligibility, repeat limits, how to apply and decision times."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the name of your area's crisis or welfare assistance scheme"
                - "Read the eligibility rules and repeat application limits"
                - "Note whether it pays cash, vouchers or goods"
                - "Ask an adviser how quickly decisions usually arrive"
            - name: How energy and water hardship funds work
              description: |-
                ## Purpose
                Many energy suppliers run charitable trusts or hardship funds that can clear arrears, and water companies often have schemes that cap or reduce bills for low-income households. These differ from social tariffs and usually need an income and expenditure statement and proof of advice. Understanding the routes before applying avoids wasted forms and rejected claims.

                ## Milestones
                1. Your energy supplier's hardship fund or trust identified, or noted as absent.
                2. Any independent energy trusts open to customers of all suppliers found.
                3. Your water company's assistance or bill cap scheme identified.
                4. The evidence each scheme asks for listed against your folder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the energy and water hardship schemes open to you, their eligibility and the evidence each requires."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Search your energy supplier's website for a hardship fund or trust"
                - "Check whether an independent energy trust accepts applications now"
                - "Find your water company's low-income assistance scheme"
                - "List the evidence each scheme asks for"
            - name: What a breathing space moratorium does and does not stop
              description: |-
                ## Purpose
                People often expect a breathing space to stop every bill, or fear it will appear as bankruptcy on their file. Learning exactly which debts are paused, which payments must continue, what creditors can and cannot do during it and what happens on the last day lets you use the time well rather than simply wait.

                ## Milestones
                1. Which debts are covered and which are excluded understood.
                2. The ongoing payments you must keep making listed.
                3. What creditors are barred from doing during the pause noted.
                4. A plan for the final week agreed with your adviser.

                ## Notes
                Rules differ by country. Use your official government guidance or your adviser's explanation rather than forum posts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of what your breathing space covers, what must still be paid and what happens at the end, checked with an adviser."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guidance on breathing space for your country"
                - "List the debts it covers and the payments that must continue"
                - "Write down what creditors cannot do during the pause"
                - "Ask your adviser what should happen in the final week"
            - name: How charitable and occupational benevolent grants work
              description: |-
                ## Purpose
                Benevolent funds exist for former members of trades, professions, armed forces and large employers, and for people with particular conditions or from particular places, and they often help with things public schemes will not. Understanding how they assess need, why they usually want a referral from an adviser and why they rarely pay debts directly makes applications far more likely to succeed.

                ## Milestones
                1. Every trade, employer, profession and service link in your history listed.
                2. Benevolent funds connected to each link identified.
                3. What these funds usually pay for, and what they exclude, noted.
                4. Which funds need an adviser or professional to apply for you confirmed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of benevolent funds linked to your work, service, health or place, with what each pays for and how to apply."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every employer, trade, profession and service link in your life"
                - "Search for a benevolent fund connected to each one"
                - "Note what each fund pays for and excludes"
                - "Check whether each fund needs an adviser to apply"
            - name: What has to happen before disconnection or eviction for arrears
              description: |-
                ## Purpose
                Fear of losing heat or home often drives people to pay the loudest creditor instead of the most important one. Knowing the steps a supplier or landlord must normally follow, such as notices, minimum periods, court involvement and protections for vulnerable households, tells you how much time you really have and the points at which to get help.

                ## Milestones
                1. The usual steps before an energy or water disconnection where you live noted.
                2. The notice and court stages for eviction for rent or mortgage arrears noted.
                3. Protections for vulnerable households, such as winter rules, written down.
                4. The point at which you must contact a housing or debt adviser marked.

                ## Notes
                This is background, not legal advice. If you have a notice in hand, contact a housing or debt adviser the same day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page timeline of the steps before disconnection and eviction where you live, with the point to contact an adviser marked."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your regulator's guidance on energy and water disconnection"
                - "Read your national housing advice site on arrears and possession"
                - "Note protections for vulnerable households and winter months"
                - "Mark on the timeline when you must call an adviser"
            - name: Advance payments and emergency loans and what they cost later
              description: |-
                ## Purpose
                Benefit advances, budgeting loans and salary advances solve this week but are repaid from future income, often by deductions that shrink every payment for a year. Understanding how much comes off, for how long and what happens if circumstances change helps you take one only when it closes a real gap and not a recurring one.

                ## Milestones
                1. The advances and interest-free loans available to you listed.
                2. The repayment amount and period for each worked out.
                3. The effect on your bare-minimum budget for the next twelve months shown.
                4. A rule agreed for when you would and would not take one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note shows each available advance or emergency loan with its repayment amount, period and effect on your monthly budget."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the benefit advances and interest-free loans you could ask for"
                - "Work out the deduction and repayment period for each"
                - "Subtract the deduction from next year's bare-minimum budget"
                - "Write a one-line rule for when an advance makes sense"
            - name: Energy arrears grant application
              description: |-
                ## Purpose
                Energy arrears are a priority debt and grow quickly in winter, but supplier hardship funds and independent trusts can sometimes clear them entirely. An application backed by an income and expenditure statement and proof that you have had advice stands the best chance, and success resets the account so ongoing payments become affordable.

                ## Milestones
                1. Current arrears confirmed with the supplier and noted.
                2. An income and expenditure statement completed, ideally with an adviser.
                3. The application sent with all requested evidence.
                4. The outcome recorded and the supplier told.

                ## Notes
                Many funds open and close during the year. If yours is closed, ask your supplier for a payment arrangement based on what you can afford meanwhile.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An energy arrears grant application has been submitted with full evidence and its outcome recorded in the support tracker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your supplier for the exact arrears figure in writing"
                - "Complete an income and expenditure statement with an adviser"
                - "Send the grant application with all requested evidence"
                - "Record the outcome and tell the supplier if the grant is paid"
            - name: Water bill assistance scheme application
              description: |-
                ## Purpose
                Water cannot usually be cut off for households, which makes it tempting to leave unpaid, but arrears still build and can end up with collectors. Many water companies offer low-income schemes that cap the bill, cut it by a percentage or match payments to clear arrears, and applying is often a short form.

                ## Milestones
                1. Your water company's assistance schemes and eligibility found.
                2. The application completed with income evidence.
                3. The new bill amount or arrears plan confirmed in writing.
                4. A renewal date noted if the scheme needs reapplying.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An application to the water company's assistance scheme has been decided, with the new bill or arrears plan confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your water company's low-income assistance schemes"
                - "Complete the application with your income evidence"
                - "Ask for the new bill amount in writing"
                - "Reapply before the scheme expires @recurring(yearly)"
            - name: Local tax hardship reduction application
              description: |-
                ## Purpose
                Local property taxes are a priority debt with strong enforcement, yet many councils run reduction schemes and discretionary hardship relief that people in crisis never ask for. Applying for any reduction, and asking for the instalments to be spread over twelve months instead of ten, can lower the monthly amount straight away.

                ## Milestones
                1. Every reduction, discount and exemption you might qualify for checked.
                2. An application for income-based reduction or hardship relief sent.
                3. Instalments spread over twelve months where the council allows it.
                4. The revised bill received and the new amount added to the budget.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A local tax reduction or hardship relief application has been decided and the revised monthly amount is in your budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your council's reductions, discounts and exemptions pages"
                - "Apply for income-based reduction or discretionary hardship relief"
                - "Ask for instalments over twelve months instead of ten"
                - "Reapply for the reduction when the council asks @recurring(yearly)"
            - name: Local crisis payment for food or fuel
              description: |-
                ## Purpose
                Local crisis payments and vouchers exist for the days when there is no money for food or energy before the next payment, and they can bridge a few days to a couple of weeks. Applying early in the day with your shortfall figure and the date of your next income ready gives the best chance of a same-day or next-day decision.

                ## Milestones
                1. Eligibility for your local crisis scheme confirmed.
                2. The application made with the shortfall and next income date.
                3. A decision received and any payment or voucher collected.
                4. The application and outcome logged in the support tracker.

                ## Notes
                If you are refused, ask why and whether a review is possible. Many refusals are for missing information rather than ineligibility.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A crisis payment application has been decided, with any payment or voucher collected and logged in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm you meet your local crisis scheme's eligibility rules"
                - "Apply in the morning with your shortfall and next income date"
                - "Collect any voucher or payment as soon as it is issued"
                - "Ask for the reason and a review if the application is refused"
            - name: Grant for a broken fridge, cooker or bed
              description: |-
                ## Purpose
                Losing a fridge, cooker, washing machine or bed is a crisis of its own when there is no money to replace it, and it drives food costs up fast. Local welfare schemes, furniture charities and benevolent funds often supply the item rather than cash, but most want a referral and a quote, so preparing those first speeds things up.

                ## Milestones
                1. The essential item and why it is needed written in two sentences.
                2. Schemes that supply household items found and ranked by fit.
                3. A referral from an adviser or support worker obtained.
                4. The item delivered or a decision recorded.

                ## Notes
                Ask the agent to draft a short, factual statement of need you can adapt for each application.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two applications for the essential item have been made, and the item delivered or each decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a short statement of need for the item"
                - "List local schemes and charities that supply household items"
                - "Ask your adviser or support worker for a referral"
                - "Send applications to the two best-fitting schemes"
            - name: Covering a short gap with an advance, family loan or credit union
              description: |-
                ## Purpose
                For a gap of a few weeks, the choice of how to cover it matters more than the amount: a benefit advance, a family loan, a credit union loan and a high-cost lender can differ by hundreds in true cost. Comparing them side by side, and ruling out unlicensed lenders entirely, avoids turning a short gap into a long debt.

                ## Milestones
                1. The exact gap amount and the date the next income closes it written down.
                2. Each option compared on total cost, repayment and consequences if missed.
                3. Any lender checked against the financial regulator's register.
                4. One option chosen, or a decision that the gap must be met by grants instead.

                ## Notes
                Anyone lending informally who takes bank cards, ID or threatens you is an illegal lender. Report them through your country's illegal money lending service.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three ways to cover a short gap, with the chosen option and its total repayment recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the gap amount and the date your next income arrives"
                - "Compare a benefit advance, a family loan and a credit union loan"
                - "Check any lender on the financial regulator's register"
                - "Record the option chosen and how it will be repaid"
            - name: Employer or union hardship fund request
              description: |-
                ## Purpose
                Some employers run hardship funds, interest-free salary advances or employee assistance programmes with free money advice, and many trade unions offer hardship grants to members. These are among the least advertised sources of help and often the quickest, because they already know who you are.

                ## Milestones
                1. Your employer's hardship, advance and assistance programmes checked.
                2. Your union's hardship grant rules checked, if you are a member.
                3. A request made through the right confidential channel.
                4. The outcome recorded and any repayment terms noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Employer and union hardship options have been checked, and a request made through any that apply with its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the staff intranet or handbook for hardship and advance schemes"
                - "Call the employee assistance programme for free money advice"
                - "Ask your union about member hardship grants"
                - "Record any outcome and repayment terms in the tracker"
            - name: Reducing benefit deductions to an affordable level
              description: |-
                ## Purpose
                Repayments for advances, overpayments, rent arrears and fines can be taken straight from benefits, sometimes leaving well under the amount the benefit was designed to provide. You can often ask for deductions to be reduced or paused on hardship grounds, and an adviser can check whether every deduction is correct.

                ## Milestones
                1. Every deduction listed with its reason, amount and end date.
                2. Each deduction checked by an adviser for accuracy.
                3. A hardship request to reduce or pause deductions sent.
                4. The new payment amount confirmed on your next statement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All benefit deductions are listed and checked, a hardship reduction has been requested, and the outcome is visible on a statement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every deduction on your benefit statement with its reason"
                - "Ask a welfare adviser to check each deduction is correct"
                - "Request a reduction or pause on hardship grounds"
                - "Check the next statement shows the agreed change"
            - name: Data, phone and hygiene essentials at no cost
              description: |-
                ## Purpose
                Without phone credit or data you cannot call your adviser, check your benefit account or apply for help, and toiletries and period products are often the first things cut. Data banks, free SIM schemes, hygiene banks and period product schemes exist in many areas, and a short search can cover these for months.

                ## Milestones
                1. A free data or SIM scheme found and applied for if you need one.
                2. Free numbers for your bank, adviser and benefit office noted.
                3. A hygiene bank or period product scheme located.
                4. Any low-cost broadband or mobile social tariff checked.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Free data, hygiene and period product sources are identified and used where needed, and free contact numbers are saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a library or advice centre about free data and SIM schemes"
                - "Save the free-to-call numbers for your bank and benefit office"
                - "Find a hygiene bank or period product scheme nearby"
                - "Check whether your mobile or broadband provider has a social tariff"
            - name: 48-hour response to a disconnection or eviction notice
              description: |-
                ## Purpose
                Disconnection warnings, possession notices and court claims are frightening, but they also mark the moment when acting quickly makes the biggest difference. Responding within 48 hours, by calling the sender, getting advice and putting any reply in writing, keeps options open that disappear once deadlines pass.

                ## Milestones
                1. The notice read, its type identified and its deadline written down.
                2. A housing or debt adviser contacted within 48 hours.
                3. The sender contacted with an offer or request for time, confirmed in writing.
                4. Any court form returned before its deadline.

                ## Notes
                Never ignore a court claim. Responding, even to admit the debt and offer what you can afford, is almost always better than silence.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 48 hours of the notice, an adviser has been contacted and the sender has a written response, with any court deadline met."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the deadline from the notice on the calendar"
                - "Call a housing or debt adviser the same day"
                - "Contact the sender to ask for time or make an offer"
                - "Send any court response before the deadline and keep proof"
            - name: First payday after the gap
              description: |-
                ## Purpose
                Pressure comes from every side when money finally arrives after a crisis: arrears, creditors, overdue treats for the children. Deciding beforehand how the first payment will be split, starting with the protected essentials and the arrangements already agreed, stops it disappearing in two days and the gap reopening.

                ## Milestones
                1. The date and amount of the first income after the gap confirmed.
                2. A split agreed in advance: essentials, agreed arrangements, then anything else.
                3. Payments made in that order on the day the money lands.
                4. A small amount set aside toward next month's essentials.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first income after the gap was split according to a written plan made in advance, with essentials and agreed arrangements paid first."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the date and amount of the next income"
                - "Write the order in which the money will be paid out"
                - "Pay protected essentials and agreed arrangements on the day it lands"
                - "Set aside a small sum toward next month's essentials"
            - name: Winter hardship preparation
              description: |-
                ## Purpose
                Winter brings higher energy use, darker evenings and often the end of seasonal work, while some help such as winter fuel support only opens at certain times. Preparing in early autumn, with fuel scheme applications in, the meter or account in credit where possible and warm spaces noted, makes the coldest months less of a cliff edge.

                ## Milestones
                1. Winter fuel and heating support schemes checked and applications sent.
                2. Your supplier told about any vulnerability, such as illness, age or young children.
                3. Warm spaces and free meal sessions for the winter noted.
                4. A winter energy amount added to the bare-minimum budget.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before winter, fuel support applications are sent, the supplier has your vulnerability details, and a winter energy figure is in the budget."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Check which winter fuel and heating schemes open this autumn"
                - "Ask your supplier to add you to its priority services register"
                - "List local warm spaces and their opening times"
                - "Start winter preparation each autumn @recurring(yearly)"
            - name: School holiday food gap plan
              description: |-
                ## Purpose
                Free school meals stop during the holidays, so families already in hardship face several extra weeks of lunches at once. Holiday activity and food programmes, holiday vouchers and community lunch clubs often fill the gap, but places go fast and booking usually opens weeks ahead.

                ## Milestones
                1. Holiday food and activity programmes in your area found.
                2. Places booked for each eligible child before they fill.
                3. Any holiday food vouchers claimed through the school or council.
                4. The extra lunch cost of remaining days added to the food minimum.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each school holiday, eligible children have places on a food programme or vouchers claimed, and remaining costs are budgeted."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school office about holiday food and activity programmes"
                - "Book places as soon as booking opens"
                - "Claim any holiday food vouchers through the school or council"
                - "Add the cost of the remaining lunches to the food minimum"
            - name: Three-month hardship review with an adviser
              description: |-
                ## Purpose
                After three months of crisis measures the picture usually looks different: some help has arrived, some arrangements are ending and the shortfall may be shrinking or stuck. Sitting down with an adviser to compare the budget now with the first month shows whether to continue, step up to a formal debt solution or start planning the way out.

                ## Milestones
                1. The first month's and this month's shortfall figures side by side.
                2. Help received, arrangements in place and arrangements ending listed.
                3. An adviser appointment held to review the next three months.
                4. The agreed next step recorded, with a date.

                ## Notes
                Start from the **Meeting notes** template to capture what the adviser recommends.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An adviser review held around the three-month mark, with the agreed next step and date written in your meeting notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the first month's and this month's shortfall side by side"
                - "List help received and arrangements ending in the next three months"
                - "Book a review appointment with your adviser"
                - "Write down the agreed next step and its date"
            - name: Support for families with children in hardship
              description: |-
                ## Purpose
                Children add costs that cannot wait, such as nappies, formula, school uniform, shoes and trips, and parents in crisis often go without themselves to cover them. Free school meals, uniform grants, baby banks and child-specific charity funds exist for exactly this, but each needs its own application.

                ## Milestones
                1. Free school meal eligibility checked and applied for for each child.
                2. School uniform and trip support asked about at each school.
                3. Baby bank or children's clothing bank located if needed.
                4. Child-focused grant funds identified and one application sent.

                ## Notes
                Schools can often help quietly with trips, uniform and equipment if a parent asks the office or family support worker in confidence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Free school meals, uniform support and at least one child-focused grant have been applied for where eligible, with outcomes recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Apply for free school meals for each eligible child"
                - "Ask each school in confidence about uniform and trip support"
                - "Find a baby bank or children's clothing bank if needed"
                - "Apply for the uniform grant before each school year @recurring(yearly)"
            - name: Hardship support while caring for someone
              description: |-
                ## Purpose
                Unpaid carers often lose income by cutting work hours while costs rise with heating, travel and special diets, and a crisis can leave both carer and the person cared for at risk. Carer-specific grants, carer centres and respite funds exist alongside general help, and a carer's assessment can open support that eases money pressure.

                ## Milestones
                1. A carer's assessment requested from your local authority.
                2. A local carers' centre contacted for advice and grants.
                3. Carer-specific charitable grants searched and one applied for.
                4. Extra costs of caring listed for any benefit or grant form.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A carer's assessment is requested, a carers' centre contacted, and at least one carer-specific grant application made."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Request a carer's assessment from your local authority"
                - "Contact your local carers' centre about hardship help"
                - "List the extra costs that caring adds each month"
                - "Apply for one carer-specific grant"
            - name: Hardship support with a health condition or disability
              description: |-
                ## Purpose
                Illness and disability often cause hardship twice: income falls just as costs for heating, travel, diet and equipment rise. Condition-specific charities run grant funds and welfare advice lines, and medical evidence of how the condition affects you strengthens nearly every hardship request you make.

                ## Milestones
                1. Charities linked to your condition found with their grant and advice services.
                2. A letter from your doctor or specialist describing the condition's impact obtained.
                3. Extra disability or illness costs listed for applications.
                4. At least one condition-specific grant or advice service used.

                ## Notes
                Ask creditors to record your condition as a vulnerability. Many will pause collection activity while you get treatment or advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Condition-specific charities are identified, medical evidence obtained, and at least one grant or welfare advice service used."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search for charities linked to your condition that offer grants"
                - "Ask your doctor for a letter describing the condition's impact"
                - "List the extra costs your condition creates each month"
                - "Call the charity's welfare advice line about your situation"
            - name: Hardship support for people over pension age
              description: |-
                ## Purpose
                Pensioners in hardship are among the least likely to claim help, often because of pride, confusion about rules or not being online. Pension top-up credits, housing and local tax help, winter fuel support and older people's charity grants can add a meaningful sum each week, and a free check by an older people's advice service takes most of the work away.

                ## Milestones
                1. A free benefit and support check booked with an older people's advice service.
                2. Pension credit or the local equivalent checked and claimed if eligible.
                3. Housing and local tax help applied for where available.
                4. Older people's charity grants identified for any essential need.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A free support check by an older people's advice service is completed and every eligible pension-age entitlement is claimed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a free support check with an older people's advice service"
                - "Check eligibility for pension top-up credit and claim if eligible"
                - "Apply for housing and local tax help where available"
                - "Repeat the support check after any change in income @recurring(yearly)"
            - name: University hardship fund application
              description: |-
                ## Purpose
                Students who run out of money mid-term can usually apply to their university or college hardship fund, which may give a grant, a short-term loan or emergency food vouchers. Funds look at the gap between your loan and essential costs, so a clear budget and bank statements are what make a claim succeed.

                ## Milestones
                1. Your institution's hardship fund rules and deadlines found.
                2. A term budget showing the gap between income and essential costs.
                3. The application sent with bank statements and evidence.
                4. The outcome received and the student support team told of any ongoing need.

                ## Notes
                Student unions and advice services can check your application before you send it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A hardship fund application with a term budget and statements has been submitted to your institution and its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your institution's hardship fund page and deadlines"
                - "Write a term budget showing the gap in essential costs"
                - "Ask the students' union advice service to check the application"
                - "Submit the application with bank statements"
            - name: Self-employed hardship when work dries up
              description: |-
                ## Purpose
                When contracts end or a business stalls, self-employed people often fall through the gaps: no redundancy pay, uncertain benefit rules and tax bills based on last year's better income. Trade benevolent funds, tax payment arrangements and checking benefit eligibility early can bridge the gap while you decide whether to rebuild or change course.

                ## Milestones
                1. Income for the next three months estimated honestly, at its lowest likely level.
                2. Any tax bills due listed and a payment arrangement requested if needed.
                3. Benefit eligibility checked with a self-employed specialist adviser.
                4. Trade or professional benevolent funds searched for a grant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A low-case income estimate, a tax payment arrangement where needed and a benefit check have been completed, with any grant applied for."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Estimate the lowest likely income for the next three months"
                - "Ask the tax authority for a payment arrangement on any bill due"
                - "Book a benefit check with an adviser who knows self-employment"
                - "Search trade and professional funds for a hardship grant"
            - name: Rent arrears hardship plan with your landlord
              description: |-
                ## Purpose
                Most landlords would rather receive a realistic plan than start possession proceedings, but many tenants avoid the conversation until a notice arrives. Talking early, with your shortfall figure, any housing help you have applied for and a small affordable arrears payment, keeps the tenancy safe and gives a record of good faith if things go to court.

                ## Milestones
                1. Arrears confirmed with the landlord or agent in writing.
                2. Discretionary housing payments or local rent help applied for.
                3. A written arrangement agreed for current rent plus a sum toward arrears.
                4. Every payment under the arrangement made and recorded.

                ## Notes
                Start from the **Meeting notes** template so you have a dated record of each conversation with your landlord.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written rent arrears arrangement is in place, housing help has been applied for, and payments under it are recorded monthly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the landlord or agent to confirm the arrears in writing"
                - "Apply to the council for a discretionary housing payment"
                - "Offer a written plan for current rent plus an amount toward arrears"
                - "Record each arrangement payment and keep receipts @recurring(monthly:2)"
            - name: Emergency money after leaving an abusive relationship
              description: |-
                ## Purpose
                Financial abuse often leaves people with no access to money, debts in their name and no credit history of their own at the moment they leave. Specialist domestic abuse services can help with emergency funds, safe banking, refuge costs and coerced debt, and planning money safely makes leaving less likely to end in going back.

                ## Milestones
                1. A specialist domestic abuse service contacted for safety and money support.
                2. A bank account opened that the other person cannot see or access.
                3. Emergency grants and crisis payments for people leaving abuse applied for.
                4. Debts taken on under pressure listed for an adviser who understands coerced debt.

                ## Notes
                Your safety comes first. Use a device and accounts the other person cannot access, and contact emergency services if you are in danger.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A specialist service is supporting you, a private bank account is open, and emergency funding and coerced debts have been raised with an adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Contact a domestic abuse helpline from a safe phone"
                - "Open a bank account the other person cannot see or access"
                - "Ask the specialist service about emergency grants and crisis payments"
                - "List debts taken on under pressure for a specialist adviser"
            - name: Supporting a friend or relative through a money crisis
              description: |-
                ## Purpose
                Watching someone you love struggle with money is hard, and the instinct to lend or pay off a debt can help for a week and hurt for a year. Practical support such as sitting with them while they open post, coming to an advice appointment or helping with forms often does more good, and agreeing boundaries early protects the relationship.

                ## Milestones
                1. A conversation held about what kind of help they actually want.
                2. Free advice services suggested and, if they agree, a first appointment booked.
                3. A clear decision made about whether you will lend or give money, and how much.
                4. Regular practical help agreed, such as a weekly post session.

                ## Notes
                Ask for their consent before speaking to any creditor or adviser on their behalf; most will need it in writing.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The person has been connected to free advice, your decision on lending or giving money is clear, and a regular form of practical help is agreed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask what kind of help they would welcome, without judgement"
                - "Offer to sit with them while they call a free advice service"
                - "Decide what you can afford to lend or give and say so clearly"
                - "Agree a regular slot to help with post and forms"
            - name: Complaint when a supplier ignores hardship rules
              description: |-
                ## Purpose
                Energy, water and telecoms providers are usually bound by rules on treating customers in difficulty fairly, such as offering affordable plans and not forcing unaffordable repayments. When a supplier refuses or ignores you, a formal complaint followed by the independent ombudsman can win a fair arrangement and sometimes compensation.

                ## Milestones
                1. What went wrong written down with dates, calls and amounts.
                2. A formal complaint sent to the supplier quoting its own hardship policy.
                3. The supplier's final response received or the deadline passed.
                4. The complaint escalated to the ombudsman if unresolved.

                ## Notes
                Keep paying what you can afford during a complaint, and keep proof of every payment.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint has been sent and either resolved by the supplier or escalated to the ombudsman, with all correspondence saved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a dated timeline of calls, letters and amounts"
                - "Find the supplier's published policy for customers in difficulty"
                - "Send a formal complaint quoting that policy"
                - "Escalate to the ombudsman once the deadline for a final response passes"
            - name: Stepping off hardship support as income recovers
              description: |-
                ## Purpose
                Leaving a crisis is a process, not a single day: arrangements end, reduced tariffs need cancelling or will be reviewed, and creditors expect payments to rise. Planning the exit, telling each organisation in good time and building a small buffer before the last help ends prevents a sudden cliff edge and a second crisis a few months later.

                ## Milestones
                1. Every hardship arrangement listed with what happens when it ends.
                2. Each organisation told of the change in circumstances as their rules require.
                3. A small essentials buffer started before the last support ends.
                4. A note of what helped most kept in case it is ever needed again.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every hardship arrangement has an exit step recorded, each organisation has been informed, and a starter buffer exists before support ends."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each arrangement and what happens when your income rises"
                - "Tell each organisation about the change within its required time"
                - "Start a small essentials buffer from the first spare money"
                - "Write down which services helped most and keep the note"
---

# Financial Hardship Support

This area is for the weeks when income has fallen below what the essentials cost and ordinary budgeting advice no longer fits. It starts with the first week of a crisis (the shortfall figure, what is due in the next seven days, the free advice contacts, a bare-minimum budget, food bank referral and breathing space from creditors), then the routines that keep you afloat, the knowledge that makes crisis schemes and grants less confusing, and the specific applications for energy, water, local tax and essential items. After that come dated moments such as a disconnection notice or winter, versions for families, carers, people with health conditions, pensioners, students, the self-employed, renters and anyone leaving an abusive relationship, and finally helping someone else and stepping back off support.

The rhythm is a Friday cash check, a Sunday meal plan built round the cupboard and any food parcel, a Monday meter check, post opened twice a week, and monthly sessions on different days for the budget reset, the support applications tracker, arrangement expiry dates, grant searches and a stress check-in with someone you trust, with yearly renewals of the schemes that need reapplying. The Weekly meal plan, Monthly budget and bills and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
