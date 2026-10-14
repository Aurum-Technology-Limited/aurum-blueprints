---
id: personal-finance.housemate-expense-splitting
name: Housemate Expense Splitting
description: "Fair, written rules for splitting rent, bills and shared food with housemates, an expense app and settle-up routine everyone uses, and clean money handovers when people move in or out."
category: personal
version: 1.0.0
tags: [personal-finance, housemate-expense-splitting, renter, student, house-share, bill-splitting, shared-groceries, housemates]
author: Aurum Technology
starter_structure:
  templates:
    - household-chores
    - metrics-log
    - meeting-notes
    - purchase-decision
    - weekly-meal-plan
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Housemate Expense Splitting
          description: "Splitting rent, bills and shared groceries fairly with housemates using clear agreements and expense-sharing apps."
          projects:
            - name: Shared household costs inventory
              description: |-
                ## Purpose
                Most house share arguments start with a cost nobody listed: the water bill that arrives twice a year, the TV licence, the router fee, the cleaning products one person always buys. Writing down every shared cost, its amount, how often it is billed and whose name it is in gives the house one agreed list to split before any money changes hands.

                ## Milestones
                1. A list of every shared cost in the house, from rent to washing-up liquid.
                2. Each cost tagged with its amount, billing frequency and the name on the account.
                3. Quarterly and annual bills converted to a monthly figure.
                4. A monthly total per person shown at the bottom of the list.
                5. The list saved where every housemate can see it.

                ## Notes
                Ask the landlord or letting agent which bills, if any, are already included in the rent before you list them. Paying separately for water or local property tax that the rent already covers is a common first-year mistake.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared list shows every household cost with its amount, frequency, account holder and a monthly figure per person, seen by all housemates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bill and shared purchase the house paid in the last three months"
                - "Ask the landlord which bills are already included in the rent"
                - "Convert each quarterly or annual bill into a monthly figure"
                - "Share the finished list in the house group chat and ask what is missing"
            - name: First house meeting about money
              description: |-
                ## Purpose
                The first fortnight in a new house sets the habits for the whole year. A 45-minute sit-down with a short agenda, covering rent, bills, food, cleaning supplies, guests and how people prefer to be reminded about money, is far easier than raising each issue after it has already caused friction.

                ## Milestones
                1. An agenda covering rent, bills, food, supplies, guests and reminders.
                2. A time agreed when every housemate can attend.
                3. Decisions and open questions written down during the meeting.
                4. Notes shared with the whole house within a day.

                ## Notes
                Ask everyone how they like to be reminded about money they owe. Some people prefer a private message, others a group nudge, and knowing this early saves a lot of awkwardness later.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A house money meeting has been held with every housemate present, and written decisions were shared within 24 hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a six-point agenda for the first money meeting"
                - "Find a 45-minute slot that every housemate can make"
                - "Take notes of every decision and open question"
                - "Post the meeting notes to the house group chat the next day"
            - name: Rent split by room size and features
              description: |-
                ## Purpose
                Splitting rent equally feels fair until one person has the ensuite, the double room with a bay window or the parking space and another has the box room above the kitchen. Agreeing a method, whether equal shares, floor area or a points system for features, settles the biggest number in the house once and in writing.

                ## Milestones
                1. Each bedroom measured and its features listed: ensuite, size, light, storage, parking.
                2. Two or three split methods worked out as a monthly amount per person.
                3. One method chosen by everyone in the house.
                4. Each person's monthly rent share written into the house money agreement.

                ## Notes
                Points systems work well: give each feature a value, add the points up per room and share the rent in proportion. Keep the method simple enough that a new housemate can check it in five minutes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every housemate has agreed a written rent share per room, with the method used to reach it recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure each bedroom and note its ensuite, storage and natural light"
                - "Work out each person's rent under an equal split and a size-based split"
                - "Score each room's features and test a points-based split"
                - "Hold a house vote on the method and record the agreed shares"
            - name: Utility bill split rules for the house
              description: |-
                ## Purpose
                Energy, water and broadband are shared, but use is not: one housemate works nights and showers twice a day, another is away every weekend. Deciding up front whether bills are split equally, by days each person is in residence or with an agreed adjustment stops every bill turning into a debate.

                ## Milestones
                1. A default rule chosen for each utility: equal, by days in residence or adjusted.
                2. What counts as being away, and for how many days, defined.
                3. A pointer agreed to the guest rule for anyone staying regularly.
                4. The rules added to the house money agreement.

                ## Notes
                Splits by day sound fairest but create admin. Many houses keep equal splits and only adjust for absences longer than two weeks.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules state how each utility bill is split and what length of absence changes a person's share."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each utility bill and who in the house uses the most of it"
                - "Agree a minimum absence length that changes a person's share"
                - "Test the draft rules on last quarter's energy bill"
                - "Write the agreed rules into the house money agreement"
            - name: Whose name goes on each bill account
              description: |-
                ## Purpose
                Whoever is named on an energy, broadband or water account is usually the person the supplier chases for the whole amount, and a missed payment lands on their credit file alone. Spreading accounts across housemates, or at least recording who carries which risk, means one person is not quietly carrying everyone's debt.

                ## Milestones
                1. Each bill account matched to its named account holder.
                2. The monthly amount each person owes suppliers in their own name written down.
                3. Accounts reassigned or given a second named person where the supplier allows it.
                4. A rule agreed that shared money reaches the account holder before each bill is due.

                ## Notes
                Some suppliers allow more than one named person on an account. Ask, because it spreads the liability and lets anyone in the house speak to the supplier.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A record shows the named holder of every bill account and the supplier liability each housemate carries, with any changes made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which housemate's name is on each bill account"
                - "Total the monthly amount each named holder owes a supplier"
                - "Ask each supplier whether a second name can be added to the account"
                - "Agree that shared money reaches the account holder five days before each bill"
            - name: Joint tenancy liability explained for the house
              description: |-
                ## Purpose
                On many shared tenancies every tenant is responsible for the whole rent and any damage, not just their own room, so one housemate's missed payment can be claimed from the others or their guarantors. Knowing which kind of tenancy you signed shows how exposed each person really is, and why the house money system matters.

                ## Milestones
                1. The tenancy agreement read for a joint liability clause or individual room contracts.
                2. Each person's exposure noted: whole rent, own room only or something in between.
                3. Guarantors told plainly what they have signed up to.
                4. Any unclear wording taken to a housing advice service.

                ## Notes
                This is about understanding your own contract, not legal advice. A free housing advice service or a student union advice centre can read the clause with you.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note records the tenancy type, each housemate's rent exposure and the answers to any questions put to an adviser."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the liability clause in your tenancy agreement"
                - "Write down whether you hold a joint tenancy or a room-only contract"
                - "Explain to each guarantor what the clause means for them"
                - "Take any unclear wording to a free housing advice service"
            - name: Rent collection method and payment day
              description: |-
                ## Purpose
                Some houses each pay the landlord directly, others route everything through one lead tenant who forwards the full amount. Each carries a risk: partial payments flagged as arrears, or one person fronting the whole rent when a housemate is late. Choosing the route and a collection day a few days before rent is due removes both.

                ## Milestones
                1. The landlord's preferred payment route confirmed.
                2. A method chosen: individual payments or collection by one person.
                3. A collection day set at least three days before rent day.
                4. Standing orders in place from every housemate for the agreed date and amount.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every housemate has a standing order for the agreed rent share on the agreed collection day, and the landlord has confirmed the route."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the landlord or agent whether they accept individual rent payments"
                - "Pick a collection day at least three days before rent is due"
                - "Set up a standing order for your rent share"
                - "Confirm in the group chat once every standing order is in place"
            - name: Choosing an expense-sharing app for the house
              description: |-
                ## Purpose
                Shared expenses apps keep a running balance of who owes whom, so nobody has to remember the cleaning spray from three weeks ago. Picking one that every housemate will actually install, that handles uneven splits and recurring bills, and that works with their banks matters more than which has the most features.

                ## Milestones
                1. Two or three apps compared on uneven splits, recurring expenses, currencies and cost.
                2. Each housemate's phone and bank checked for compatibility.
                3. One app chosen and a house group created.
                4. Every housemate added and the first expense logged.

                ## Notes
                A shared spreadsheet works too if the house prefers it. The point is one record that everyone trusts and checks.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One expense app, or a shared spreadsheet, is set up as a house group and holds at least one logged expense from each housemate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Shortlist three expense-sharing apps that handle uneven splits"
                - "Ask each housemate which app they already use"
                - "Create the house group in the chosen app"
                - "Log the first shared expense so everyone sees how it works"
            - name: Shared bills pot or house account
              description: |-
                ## Purpose
                Bills paid from one housemate's personal account mix shared money with their own and leave them short whenever a transfer is late. A separate pot, joint bills account or dedicated sub-account that everyone pays into on the same day keeps the shared money visible and the bills paid on time.

                ## Milestones
                1. A choice made between a joint account, a sub-account in one name or a shared pot app.
                2. The pot opened and every bill set to come out of it.
                3. Each housemate's monthly contribution arriving by standing order.
                4. A small buffer agreed and built for bills that come in higher than expected.

                ## Notes
                A joint bank account can link your credit file with everyone named on it. Many house shares use a sub-account or a shared pot instead to avoid that.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All shared bills are paid from one pot funded by a standing order from each housemate, with an agreed buffer sitting in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare a joint account, a sub-account and a shared pot app for the house"
                - "Open the chosen pot and move each bill payment to it"
                - "Set up your monthly standing order into the pot"
                - "Check the pot covers next month's bills and buffer @recurring(monthly:26)"
            - name: Written house money agreement
              description: |-
                ## Purpose
                Verbal deals made on moving-in day are remembered differently by the time someone leaves. A one or two page agreement, acknowledged in writing by everyone, covering rent shares, bill rules, the food kitty, guests, late payment and moving out, is the document you point to when there is a disagreement.

                ## Milestones
                1. A draft covering rent, bills, food, supplies, guests, late payment and leaving.
                2. Every housemate's comments taken and changes made.
                3. The final version acknowledged in writing by all housemates.
                4. The agreement saved where everyone can reach it.
                5. A review agreed once a year and whenever someone new moves in.

                ## Notes
                Keep it in plain words. It is an agreement between housemates rather than a legal contract, but it is useful evidence if a dispute ever reaches an adviser.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A house money agreement covering rent, bills, food, guests, late payment and leaving has been acknowledged in writing by every housemate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a house money agreement from the rent and bill decisions"
                - "Circulate the draft and collect every housemate's changes"
                - "Get a written yes from each housemate on the final version"
                - "Reread the agreement with the house and update it @recurring(yearly)"
            - name: Monthly settle-up day
              description: |-
                ## Purpose
                Small debts drift: a takeaway here, a bulk buy of toilet roll there, and suddenly one person is owed a sizeable sum and too polite to ask. A fixed settle-up day each month, when everyone checks the app and clears their balance, keeps every debt small and every conversation short.

                ## Milestones
                1. A settle-up day agreed, a few days after most housemates are paid.
                2. Everyone's balance in the app cleared to zero on that day.
                3. A rule agreed for small balances: carried forward or cleared.
                4. Three months in a row settled without anyone being chased.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every housemate's balance in the shared app is cleared to zero on settle-up day for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree a settle-up day a few days after most housemates are paid"
                - "Check the app balances and pay what you owe @recurring(monthly:3)"
                - "Set a threshold below which balances roll on to next month"
                - "Mark the month settled in the house group chat"
            - name: Weekly shared receipts logging
              description: |-
                ## Purpose
                Expenses logged the same week are accurate; expenses logged a month later are guesses and arguments. A short weekly slot when everyone adds any shared purchase still sitting as a paper receipt or in their banking app keeps the house balance true.

                ## Milestones
                1. A rule that shared purchases go into the app within seven days.
                2. A weekly reminder set on each housemate's phone.
                3. Receipt photos attached to purchases over an agreed amount.
                4. No shared purchase older than a week missing from the app.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full month, every shared purchase appears in the app within seven days, with receipts attached above the agreed amount."
                cadence: rolling
              tasks:
                - "Agree the amount above which a receipt photo is attached"
                - "Set a weekly phone reminder to log shared purchases"
                - "Add this week's shared purchases and receipt photos to the app @recurring(weekly:sun)"
                - "Clear the pile of paper receipts once they are logged"
            - name: Shared groceries kitty routine
              description: |-
                ## Purpose
                Pooling money into a kitty for staples such as milk, bread, oil, rice, coffee and teabags ends the endless small debts over who bought the last loaf. Each person pays in the same amount each week, one person shops from it, and anything outside the agreed list stays personal.

                ## Milestones
                1. A written list of what the kitty pays for and what stays personal.
                2. A weekly contribution set from a month of past staples spending.
                3. A kitty card, pot or envelope chosen and topped up.
                4. One month run with the kitty covering every staple on the list.

                ## Notes
                Keep the list short. Kitties break down when they cover expensive items that one person eats far more of than the others.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written staples list and a weekly kitty contribution have covered every shared staple for a full month without one person topping it up."
                cadence: rolling
              tasks:
                - "Write the list of staples the kitty pays for"
                - "Add up last month's staples spend to set the weekly amount"
                - "Pay your share into the kitty @recurring(weekly:fri)"
                - "Post the kitty balance in the group chat after each shop"
            - name: Household supplies buying rota
              description: |-
                ## Purpose
                Toilet roll, bin bags, washing-up liquid, dishwasher tablets and bleach run out at the worst moment and are usually replaced by the same tidy housemate. A buying rota, or a supplies list paid from the kitty, spreads both the cost and the errand fairly.

                ## Milestones
                1. A list of the household supplies the house shares.
                2. A rota or kitty rule agreed for who buys and who pays.
                3. A low-stock signal agreed, such as a shared list or a note on the fridge.
                4. Three months run with supplies bought by different people.

                ## Notes
                Start from the **Household chores** template and add a supplies column to the rota.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A supplies rota has run for three months with purchases spread across all housemates and logged in the app."
                cadence: rolling
              tasks:
                - "List the household supplies everyone uses"
                - "Draw up a monthly buying rota with one name per month"
                - "Check stock and buy what is low on the monthly supplies run @recurring(monthly:12)"
                - "Log supplies bought from your own pocket in the app"
            - name: Monthly meter readings log
              description: |-
                ## Purpose
                Estimated bills are rarely right, and when an actual reading finally arrives the catch-up bill can be large, often just after someone has moved out. Taking dated, photographed readings each month keeps bills accurate and gives the house evidence for any final split.

                ## Milestones
                1. Every meter's location and serial number recorded.
                2. A log with date, reading and photo link for each meter.
                3. Readings submitted to each supplier in the same week.
                4. Twelve months of readings in the log.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The meter log holds monthly dated readings with photos for every meter, submitted to suppliers, for at least six months."
                cadence: rolling
              tasks:
                - "Find each meter and note its serial number"
                - "Set up a meter log from the metrics log template"
                - "Photograph each meter and submit the readings @recurring(monthly:28)"
                - "Compare each bill with the logged reading when it arrives"
            - name: Quarterly bill share recalculation
              description: |-
                ## Purpose
                Contributions set in September go stale: energy prices change, a partner starts staying over, the broadband deal rolls onto a higher price. A quick quarterly check of actual bills against what everyone pays into the pot keeps contributions matched to costs before a shortfall builds up.

                ## Milestones
                1. Actual shared bills for the last three months totalled.
                2. The total compared with contributions paid into the pot.
                3. Contributions changed for the next quarter if the gap is over an agreed amount.
                4. Changed standing orders confirmed by every housemate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the pot's contributions are compared with actual bills and adjusted within a week when the gap exceeds the agreed amount."
                cadence: cyclic
              tasks:
                - "Total the last three months of shared bills @recurring(quarterly)"
                - "Compare the total with what went into the bills pot"
                - "Propose new contributions if the gap is over the agreed amount"
                - "Ask each housemate to confirm their updated standing order"
            - name: Monthly house money check-in
              description: |-
                ## Purpose
                Ten minutes over dinner once a month catches problems while they are still small: a bill that jumped, a housemate who is short this month, a guest who has started staying four nights a week. A fixed check-in with a three-item agenda makes money a routine topic rather than a confrontation.

                ## Milestones
                1. A monthly date and a standing three-item agenda agreed.
                2. Upcoming bills and any changes raised at each check-in.
                3. Notes kept of decisions and who is doing what.
                4. Six check-ins held in a row.

                ## Notes
                Start from the **Meeting notes** template. Keep it short, because a check-in that runs over an hour soon stops happening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly check-ins have been held, each with written notes of decisions and actions."
                cadence: rolling
              tasks:
                - "Agree a monthly evening for the house money check-in"
                - "Write a three-item standing agenda"
                - "Hold the check-in and post the notes @recurring(monthly:20)"
                - "Follow up every action from the previous check-in"
            - name: Shared contract end dates register
              description: |-
                ## Purpose
                Broadband, energy and TV packages taken out by the house roll onto higher prices when the deal ends, and nobody notices because the bill goes to one person's inbox. A register of every shared contract, its end date and how the house decides on renewal gives everyone time to agree; the comparison itself belongs in the bill switching area.

                ## Milestones
                1. Every shared contract listed with provider, monthly price and end date.
                2. The account holder and notice period noted for each.
                3. A reminder set a month before each end date.
                4. A rule agreed for how the house decides on renewal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every shared contract with end date, notice period and account holder, with a reminder set a month before each end."
                cadence: rolling
              tasks:
                - "List every shared contract and its end date"
                - "Note the notice period and account holder for each contract"
                - "Set a reminder a month before each contract ends"
                - "Review the register for contracts ending soon @recurring(quarterly)"
            - name: Shared bills and receipts archive
              description: |-
                ## Purpose
                When someone disputes a bill share or moves out a year later, the house needs the actual bills, not memories. A shared folder holding each bill, the meter photos and the house agreement, saved monthly, takes minutes to keep and settles most arguments with a single link.

                ## Milestones
                1. A shared folder created with a sub-folder for each bill.
                2. Every account holder saving their bills into it.
                3. The house money agreement and meter photos stored alongside.
                4. Twelve months of bills saved without gaps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The shared folder holds every shared bill for the last twelve months, the house agreement and the meter photos."
                cadence: rolling
              tasks:
                - "Create a shared folder with a sub-folder for each bill"
                - "Save the house money agreement and meter photos in it"
                - "Download this month's bills into the shared folder @recurring(monthly:5)"
                - "Give every housemate access to the folder"
            - name: Reading a utility bill before splitting it
              description: |-
                ## Purpose
                Utility bills mix a daily standing charge, unit prices, estimated or actual readings, credits and catch-up charges, and splitting the headline figure can hide a mistake that costs the whole house. Learning to read one properly means you spot an estimate, or an old tenant's debt, before anyone pays their share of it.

                ## Milestones
                1. The standing charge, unit rate and usage found on a real bill.
                2. Estimated and actual readings told apart.
                3. The billing period checked against the house's move-in date.
                4. One bill checked against the meter log and any error queried.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One shared bill has been annotated with its standing charge, unit rate, reading type and period, and checked against the meter log."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark the standing charge and unit rate on the latest energy bill"
                - "Find whether the readings on it are estimated or actual"
                - "Check the billing period against your move-in date"
                - "Query any charge that predates the house's tenancy with the supplier"
            - name: Pro rata maths for part-month stays
              description: |-
                ## Purpose
                People move in on the 17th, leave on the 3rd or spend six weeks away over summer, and splitting by gut feel always favours someone. Knowing how to split a bill or rent by days, and agreeing the formula in advance, gives a figure anyone can check on a phone calculator.

                ## Milestones
                1. The daily rate method understood: the bill divided by its days, multiplied by days in residence.
                2. A worked example done for a mid-month move-in.
                3. A rule agreed on whether rent, bills or both are pro rated.
                4. The formula written into the house agreement.

                ## Notes
                When several people are away at different times, count occupant days: add up everyone's days in the house, then share the bill in proportion to each person's days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pro rata formula for rent and bills, tested on one worked example, is in the house agreement."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Work through one bill split by days for a mid-month move-in"
                - "Calculate occupant days for a month when two people were away"
                - "Agree whether rent or only bills are pro rated"
                - "Add the formula and a worked example to the house agreement"
            - name: Uneven splits and recurring entries in the app
              description: |-
                ## Purpose
                Most houses only ever press the equal split button, then argue about the exceptions. Learning to log shares, exact amounts, recurring monthly bills and settlements properly lets the app handle the room-size rent split, the vegetarian who skips the meat order and the couple who pay a larger share.

                ## Milestones
                1. A recurring entry set for each fixed monthly bill.
                2. One purchase logged with uneven shares or exact amounts.
                3. Settlements recorded so balances match real bank transfers.
                4. A one-page how-to written for new housemates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The app holds recurring entries for each fixed bill, at least one uneven split and a one-page how-to for newcomers."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set each fixed monthly bill as a recurring expense in the app"
                - "Log one purchase using shares instead of an equal split"
                - "Record a real bank transfer as a settlement in the app"
                - "Write a one-page app how-to for the next new housemate"
            - name: Asking a housemate for money they owe
              description: |-
                ## Purpose
                The hardest part of shared money is not the maths, it is asking someone you live with to pay up. Practising a few calm, specific scripts for the first reminder, the second and the sit-down conversation makes it easier to ask early, before resentment builds.

                ## Milestones
                1. Three short scripts written: a friendly nudge, a firm follow-up and a request to talk.
                2. Each housemate's preferred reminder style known.
                3. One overdue amount raised using a script.
                4. A note made of what worked, for next time.

                ## Notes
                Be specific: the amount, what it was for and the date you would like it by. Vague requests are easy to ignore and easy to resent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written reminder scripts exist and at least one overdue amount has been raised using them, with the outcome noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a friendly first reminder with the amount, reason and date"
                - "Write a firmer follow-up for an amount still unpaid after a week"
                - "Ask the agent to suggest calmer wording for the request to talk"
                - "Use one script on the next overdue amount and note how it went"
            - name: Local property tax rules for shared houses
              description: |-
                ## Purpose
                Many places charge a local property tax that treats shared houses in particular ways: a house of full-time students may be exempt, a single non-student can make the whole house liable, and a discount may apply to one person but not the others. Understanding the rules where you live avoids a surprise bill months into the tenancy.

                ## Milestones
                1. Whether the tax is included in the rent or charged to the tenants confirmed.
                2. The house's exemption or discount status worked out from the local authority's rules.
                3. Proof of student status sent wherever an exemption depends on it.
                4. A rule agreed on how the bill, or any discount, is shared.

                ## Notes
                In the UK, for example, a council tax bill can land in full on a house mixing students and workers. Who covers it is a house decision worth making early.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records whether the house pays the tax, its exemption or discount status, the proof sent and how the bill is shared."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check whether local property tax is included in your rent"
                - "Read your local authority's rules for student and shared houses"
                - "Send proof of student status if an exemption applies"
                - "Confirm the house's exemption or discount is still current @recurring(yearly)"
            - name: True monthly cost per housemate
              description: |-
                ## Purpose
                Rooms advertised at a lower rent can cost more once bills, the kitty and shared extras are added. Working out your full monthly cost of living in this house gives a figure to budget against, to compare with any other room you are offered, and to check that the split still looks fair.

                ## Milestones
                1. Rent share, bills share, kitty and supplies added into one monthly figure.
                2. Last year's one-off shared costs averaged into the total.
                3. The figure compared with each housemate's to spot uneven shares.
                4. The figure saved for comparison with any future room or renewal offer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A monthly cost per housemate, including rent, bills, kitty, supplies and averaged one-offs, is recorded and dated."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add your rent, bills share, kitty and supplies into one monthly figure"
                - "Average last year's one-off shared costs into the total"
                - "Compare your figure with each housemate's to spot uneven shares"
                - "Save the figure for the next tenancy renewal"
            - name: Bills-included packages for house shares
              description: |-
                ## Purpose
                Some companies bundle energy, water, broadband and sometimes TV into one fixed monthly price per person and bill each housemate separately. That removes the account holder risk and the chasing, but often costs more and can carry usage caps, so it is worth pricing against the house's actual bills before anyone signs.

                ## Milestones
                1. The house's actual monthly bills total known from the inventory.
                2. Two or three bundle quotes gathered for the same number of people.
                3. Usage caps, exit fees and the handling of one late payer compared.
                4. A decision recorded to sign up or keep managing bills directly.

                ## Notes
                Start from the **Purchase decision** template. Check what happens when a housemate leaves mid-contract, because some bundles bill the remaining tenants for the empty room.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bundle quotes have been compared against the house's actual bills and a decision to switch or stay is recorded with the reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the house's actual monthly bill total from the inventory"
                - "Get quotes from two bills-included providers for the house"
                - "Compare caps, exit fees and how each provider handles a late payer"
                - "Record the house's decision and the reason for it"
            - name: Hiring a cleaner for shared areas
              description: |-
                ## Purpose
                Paying a fortnightly cleaner for the kitchen, bathroom and hallway can end the biggest source of house share tension, but only if everyone agrees to pay. Pricing it per person, agreeing what the cleaner covers and deciding what happens if one housemate opts out settles the question before anyone books.

                ## Milestones
                1. Two or three quotes for cleaning the common areas at an agreed frequency.
                2. A monthly cost per person worked out.
                3. A yes from every housemate, or an agreed answer for anyone who opts out.
                4. A payment route set through the bills pot or the app.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on a shared cleaner is recorded with quotes, cost per person and how payment and opt-outs are handled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get quotes for fortnightly cleaning of the kitchen and bathroom"
                - "Work out the monthly cost per housemate"
                - "Ask each housemate for a yes or no and their reason"
                - "Add the cleaner as a regular payment from the bills pot if agreed"
            - name: House heating and energy use agreement
              description: |-
                ## Purpose
                Energy is usually the most argued-about bill in a shared house because use is invisible: one person likes 22 degrees, another runs an electric heater in their room every evening. Agreeing thermostat settings, heating hours and rules on portable heaters keeps the bill predictable and an equal split fair.

                ## Milestones
                1. The current thermostat setting and heating schedule recorded.
                2. A house setting and schedule agreed for winter.
                3. A rule agreed on portable heaters, tumble dryers and other heavy appliances.
                4. The first winter bill compared with the previous one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed heating schedule, thermostat setting and appliance rule are written down, and the first winter bill has been compared with last year's."
                cadence: cyclic
              tasks:
                - "Note the current thermostat setting and heating times"
                - "Propose a winter heating schedule to the house"
                - "Agree a rule for portable heaters and tumble dryer use"
                - "Revisit the heating agreement before the cold months start @recurring(yearly)"
            - name: Partners and frequent overnight guests
              description: |-
                ## Purpose
                Partners who stay four nights a week use hot water, heating, Wi-Fi and the kitchen, and the other housemates quietly pay for it. Agreeing a night count above which a guest contributes, and a simple way to work out the amount, takes the sting out of a conversation nobody wants to start.

                ## Milestones
                1. A threshold agreed, such as more than three nights a week averaged over a month.
                2. A contribution set, for example a share of bills but not rent.
                3. The rule written into the house agreement.
                4. The rule applied once and the contribution logged in the app.

                ## Notes
                Check your tenancy too. Some agreements limit long-staying guests or require the landlord to be told if someone effectively lives there.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written guest threshold and contribution rule exists, and it has been applied at least once with the contribution logged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Propose a nights-per-week threshold for regular guests"
                - "Work out a fair bills contribution for a guest over the threshold"
                - "Check the tenancy for limits on long-staying guests"
                - "Add the guest rule to the house agreement"
            - name: Choosing how the house shares food
              description: |-
                ## Purpose
                Food is where house shares differ most: some cook together every evening, some share only milk and oil, some keep labelled shelves and nothing else. Choosing a model deliberately, and naming the exceptions for vegans, big eaters and people who are rarely home, avoids a kitty that one person feels they subsidise.

                ## Milestones
                1. Each housemate's eating pattern and diet noted.
                2. Three models compared: fully communal, staples only and fully separate.
                3. One model chosen with its exceptions written down.
                4. Cupboard and fridge space allocated to match.

                ## Notes
                If the house chooses communal cooking, plan the cooking nights and the shopping list together. Start from the **Weekly meal plan** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A food-sharing model with written exceptions is agreed by every housemate, and cupboard space is allocated to match."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each housemate how often they eat at home and any diet needs"
                - "Compare communal cooking, staples only and separate food"
                - "Agree the model and list its exceptions"
                - "Reallocate cupboard and fridge shelves to match the model"
            - name: Register of jointly bought household items
              description: |-
                ## Purpose
                Over a year the house buys a vacuum, a microwave, a secondhand sofa and a better router, and by moving-out day nobody remembers who paid what. A register of shared items with price, date and contributors makes the buyout or sale straightforward instead of a guessing game.

                ## Milestones
                1. Every jointly bought item listed with price, date and contributors.
                2. A buyout rule agreed, such as half the price after a year.
                3. Personal items lent to the house noted separately.
                4. The register updated whenever anything new is bought.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every jointly bought item with price, date, contributors and an agreed buyout rule."
                cadence: rolling
              tasks:
                - "List every item the house bought together with price and date"
                - "Note who contributed to each item and how much"
                - "Agree a simple buyout rule for when someone leaves"
                - "Check the register is complete and add new items @recurring(yearly)"
            - name: Deposit contributions record between housemates
              description: |-
                ## Purpose
                Deposits are often paid by one person, by parents or in uneven amounts, then returned as a single sum to the lead tenant. Recording who paid what, and how any deductions will be shared, protects everyone's money when it comes back, which is often after the house has split up.

                ## Milestones
                1. Each housemate's deposit contribution and who paid it recorded.
                2. The deposit protection reference saved in the shared folder.
                3. A rule agreed for deductions: room damage to that room's tenant, common areas split.
                4. How the returned deposit will be paid out to each person agreed.

                ## Notes
                Getting the deposit back from the landlord belongs in the rent and deposits area. This project is about who among the housemates is owed what.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A record signed off by all housemates shows each deposit contribution, its payer, the deduction rule and the payout method."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Record what each housemate or their family paid towards the deposit"
                - "Save the deposit protection reference in the shared folder"
                - "Agree how deductions for rooms and common areas will be split"
                - "Agree whose account receives the refund and how it is paid out"
            - name: Shared streaming and subscriptions
              description: |-
                ## Purpose
                Streaming services, a music family plan and the TV package often sit on one person's card, with the others paying back when they remember, or not at all. Deciding which subscriptions are house costs, which are personal and which are split only between the people who use them keeps the cost fair.

                ## Milestones
                1. Every subscription the house uses listed with cost and payer.
                2. Each one marked as a house cost, personal, or split between its users.
                3. Recurring entries set in the app for the split ones.
                4. Shared subscriptions nobody uses cancelled.

                ## Notes
                Check each service's terms on sharing. Family plans usually require everyone to live at the same address, which a house share does, but some have other limits.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every shared subscription is listed, classed as house or personal, and split ones appear as recurring entries in the app."
                cadence: rolling
              tasks:
                - "List every subscription anyone in the house shares"
                - "Ask who actually uses each one"
                - "Set up split subscriptions as recurring entries in the app"
                - "Review shared subscriptions for anything unused @recurring(quarterly)"
            - name: Move-in day money snapshot
              description: |-
                ## Purpose
                Day one is the only clean chance to separate your costs from the previous tenants'. Photographing every meter, recording who moved in on which date and listing anything left behind gives the house clean starting figures for every bill split that follows.

                ## Milestones
                1. Dated photos of every meter on the move-in day.
                2. Readings sent to each supplier with the house's start date.
                3. Each housemate's move-in date recorded.
                4. Items left by previous tenants listed and their fate agreed.

                ## Notes
                If you moved in a while ago, take the readings today and note the date. A late starting point is far better than none.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Dated meter photos, supplier readings, move-in dates and a list of inherited items are saved in the shared folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph every meter with the date showing on move-in day"
                - "Send the readings and start date to each supplier"
                - "Write down each housemate's move-in date"
                - "List anything the previous tenants left and agree what to do with it"
            - name: New housemate joining mid-tenancy
              description: |-
                ## Purpose
                When someone leaves and a replacement moves in, the deposit, rent share, bills, kitty and shared items all change hands at once, often with the landlord's paperwork lagging behind. Running the changeover as one checklist means the newcomer pays from their first day and the leaver is not charged for months they are gone.

                ## Milestones
                1. The landlord's consent and paperwork for the replacement confirmed.
                2. Rent and bills for the changeover month worked out by days.
                3. The deposit handover between outgoing and incoming tenant documented.
                4. The newcomer added to the app, bills pot, agreement and group chat.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The changeover has a written record of consent, pro rata figures, deposit handover and the newcomer added to every shared system."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the landlord has approved the replacement in writing"
                - "Work out the changeover month's rent and bills by days"
                - "Record how the deposit passes from the leaver to the newcomer"
                - "Add the new housemate to the app, the pot and the agreement"
            - name: Final settle-up when a housemate leaves
              description: |-
                ## Purpose
                Once a housemate has moved out and moved on, unpaid balances are rarely recovered. A final settle-up in their last week, with a closing meter reading, the app balance cleared, a share of bills not yet issued and shared items bought out, ends the arrangement cleanly for everyone.

                ## Milestones
                1. A closing meter reading taken on the leaving day.
                2. An estimate agreed for their share of bills not yet issued.
                3. The leaver's app balance cleared to zero.
                4. Shared items bought out or left, according to the register.
                5. Bill accounts in the leaver's name transferred or a handover agreed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the leaver's last day the app balance is zero, an estimate for unbilled costs is paid and accounts in their name are handed over."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take and photograph a closing meter reading on the leaving day"
                - "Estimate the leaver's share of bills not yet issued"
                - "Clear the leaver's app balance before they hand back keys"
                - "Transfer any bill account in the leaver's name to a remaining housemate"
            - name: Splitting end-of-tenancy costs and deductions
              description: |-
                ## Purpose
                At the end of a tenancy the house faces the final clean, any deposit deductions and the last bills all at once, often after people have scattered to new addresses. Agreeing in advance how room damage, common-area cleaning and final bills are shared, and gathering evidence before checkout, stops one person absorbing the lot.

                ## Milestones
                1. A rule agreed for each type of cost: own room, common areas and final bills.
                2. Checkout cleaning jobs shared out, or a paid cleaner booked and split.
                3. Common areas photographed before checkout.
                4. Final bills split and the returned deposit paid out according to the deposit record.

                ## Notes
                Challenging a deduction with the landlord is covered in the rent and deposits area. This project is about sharing the result fairly once it is known.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Final bills, cleaning and any deductions are split by the agreed rule, and every housemate has received their share of the deposit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree how room, common-area and final bill costs will be split"
                - "Split the checkout cleaning jobs or book and share a cleaner"
                - "Photograph the common areas on checkout day"
                - "Pay out each housemate's share of the returned deposit"
            - name: Tenancy renewal money review
              description: |-
                ## Purpose
                Before re-signing for another year, the house has a natural moment to ask who is staying, whether a rent increase is shared equally or by room, whether guarantors need to sign again and whether the split still feels fair. Doing this two months before the renewal date leaves time to find a replacement or a new place.

                ## Milestones
                1. Each housemate's plan to stay or leave known two months ahead.
                2. Any rent increase split using the house's existing method, or the method revisited.
                3. Guarantor forms or renewals arranged.
                4. The rent split and house agreement updated for the new term.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Two months before renewal, every housemate's plans, the split of any rent increase and guarantor arrangements are recorded."
                cadence: cyclic
              tasks:
                - "Ask each housemate whether they plan to stay another year"
                - "Split any rent increase using the house's existing method"
                - "Check whether guarantors need to sign again"
                - "Start the renewal money review two months before the end date @recurring(yearly)"
            - name: First student house money setup
              description: |-
                ## Purpose
                Your first student house often means signing for a year before you know your housemates well, with a loan that arrives in lumps at the start of each term. Setting up the shared money basics before term starts, and matching loan dates to rent dates, avoids the October scramble when the first big bills land.

                ## Milestones
                1. The tenancy, rent schedule and included bills understood by everyone.
                2. Rent payment dates matched to loan and part-time pay dates.
                3. Bill accounts, the app and the bills pot set up before term starts.
                4. Guarantor details and any parental contributions recorded.

                ## Notes
                Many student lets charge rent termly. Check whether yours is monthly or paid in instalments each term before setting standing orders.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before term starts, rent dates are matched to each student's income dates and the app, bills pot and accounts are set up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your rent is due monthly or in termly instalments"
                - "Line up your loan instalment dates against rent dates"
                - "Set up the bills pot and app group with housemates before term"
                - "Record any guarantor or parental contribution to rent"
            - name: Splitting costs when incomes differ widely
              description: |-
                ## Purpose
                In a house with a junior nurse, a software developer and a part-time student, an equal split can be easy for one and a stretch for another. Some houses keep rent and bills equal but make the extras, such as takeaway night, the TV package or a cleaner, opt-in rather than reshaping the whole system.

                ## Milestones
                1. Essential costs separated from discretionary shared spending.
                2. Each housemate asked privately which extras they want to join.
                3. An approach agreed: equal for essentials, opt-in for extras.
                4. Opt-in extras set up as separate groups in the app.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The house has agreed in writing which costs are equal and which extras are opt-in, with opt-in groups set up in the app."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split the cost list into essentials and shared extras"
                - "Ask each housemate privately which extras they want to join"
                - "Create a separate app group for opt-in extras"
                - "Explain the opt-in rule to any new housemate when they arrive"
            - name: Couples sharing a room in a house share
              description: |-
                ## Purpose
                When two people share a double room, the house has to decide whether rent is charged per room or per person, and whether bills follow heads or rooms. A couple uses one bedroom but two people's hot water and kitchen time, so agreeing the formula openly prevents quiet resentment on both sides.

                ## Milestones
                1. Options compared: rent per room, per person, or a room rate plus a premium.
                2. The couple's share of bills agreed per person.
                3. The couple's view and the rest of the house's view both heard.
                4. The agreed shares recorded and set as recurring entries in the app.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Rent and bill shares for the couple's room are agreed by the whole house and set up in the app."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out rent shares per room and per person for comparison"
                - "Calculate bills split by head instead of by room"
                - "Discuss both options at the next house check-in"
                - "Set the agreed shares as recurring entries in the app"
            - name: Living as a lodger with a live-in landlord
              description: |-
                ## Purpose
                Lodgers usually pay one inclusive amount to a landlord who lives in the home, so the questions change: what the rent covers, whether bills can rise mid-year and who pays for extra heating or laundry. Getting those answers in writing at the start protects the lodger, who often has fewer rights than a tenant.

                ## Milestones
                1. What the inclusive rent covers listed: energy, water, broadband, food, laundry.
                2. How and when the amount can change written down.
                3. Payment method, day and receipts agreed.
                4. Notice period and deposit terms understood.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note from the landlord lists what the rent covers, how it can change, the payment day and the notice terms."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the landlord to list what the inclusive rent covers"
                - "Ask how much notice they give before raising the amount"
                - "Agree a payment day and ask for a receipt each time"
                - "Check the notice period and deposit terms in writing"
            - name: Summer months in a student house
              description: |-
                ## Purpose
                Student tenancies often run twelve months while the house empties over summer, so rent, standing charges and broadband are still paid for rooms nobody is using. Agreeing in spring who stays, how bills are shared while people are away and whether subletting is allowed avoids an argument when the July bill lands.

                ## Milestones
                1. Who is staying over summer, and for how long, known by spring.
                2. Summer bills split by occupant days or a reduced flat rate agreed.
                3. Subletting checked against the tenancy and the landlord asked.
                4. Heating, broadband and appliances set for a mostly empty house.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "By late spring the house has recorded who stays over summer, how summer bills are split and the landlord's answer on subletting."
                cadence: cyclic
              tasks:
                - "Ask each housemate their summer dates in the house"
                - "Agree how standing charges and broadband are split while people are away"
                - "Ask the landlord in writing whether short sublets are allowed"
                - "Start the summer money plan each spring @recurring(yearly)"
            - name: Working from home in a shared house
              description: |-
                ## Purpose
                A housemate at home all day heats the house, runs a laptop and monitors and boils the kettle twenty times while the others are out. Some houses ignore it and others agree a small monthly top-up from the home worker; either is fine if it is decided openly and reviewed when working patterns change.

                ## Milestones
                1. Extra daytime use estimated from meter readings or appliance wattages.
                2. Options weighed: no change, a flat top-up or heating only the home worker's room.
                3. A decision recorded with a date to review it.
                4. Any employer home-working allowance or tax relief checked by the home worker.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states whether the home worker contributes extra, how much and when it will be reviewed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare weekday and weekend meter readings for one month"
                - "Estimate the extra daytime energy cost of home working"
                - "Propose a flat top-up or a room-heating rule to the house"
                - "Ask your employer whether a home-working allowance is available"
            - name: International housemates and cross-border payments
              description: |-
                ## Purpose
                International students and new arrivals may not have a local bank account for weeks, may be paid in another currency and may expect sharing to work the way it did at home. Setting up a way for them to pay the house in that gap, without high transfer fees or cash going missing, keeps them included from the first day.

                ## Milestones
                1. Each housemate's payment method confirmed, including anyone without a local account.
                2. A low-fee route for paying the house from a foreign account chosen.
                3. A receipt rule agreed for anyone who pays in cash.
                4. The app set to the house currency with conversions logged at the actual rate.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every housemate has a working way to pay the house, with the low-fee transfer route and cash receipt rule recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each housemate how they can pay before they have a local account"
                - "Compare transfer fees for paying the house from a foreign account"
                - "Agree to give a written receipt for any cash handed over"
                - "Set the house currency in the app and log conversions at the actual rate"
            - name: Housemates paid termly or irregularly
              description: |-
                ## Purpose
                A student whose loan lands three times a year, or a freelancer paid when invoices clear, can struggle with monthly bills even when the money is there across the year. Agreeing a schedule, such as paying a term of bills upfront into the pot, keeps the house's cash flow steady without singling anyone out.

                ## Milestones
                1. Each irregular earner's income dates known by the house.
                2. A schedule agreed: termly upfront payments or a buffer held in the pot.
                3. The schedule set up as standing orders or planned transfers.
                4. One full cycle completed without the pot running short.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed payment schedule for irregular earners has run one full term or quarter without the bills pot falling short."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask each irregular earner when their money usually arrives"
                - "Work out a term of bills as a single upfront figure"
                - "Agree the payment schedule and set up the transfers"
                - "Check after one cycle that the pot never fell short"
            - name: When a housemate stops paying
              description: |-
                ## Purpose
                Sooner or later many shared houses meet the housemate whose rent share or bills stop arriving. A clear ladder, from a private conversation to a written payment plan to getting advice, protects the others, who may be liable for the whole rent, while giving the person who is struggling a fair chance.

                ## Milestones
                1. The overdue amount and timeline written down with evidence.
                2. A private conversation held and a written payment plan offered.
                3. Advice sought from a housing or debt advice service if the plan fails.
                4. A decision recorded on informing the landlord and covering the gap meanwhile.

                ## Notes
                Joint tenants can be chased for a missing share. Get free advice before deciding to cover it, withhold anything or involve the landlord.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written record shows the overdue amount, the payment plan offered and the house's decision on next steps."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the overdue amounts with dates and app screenshots"
                - "Ask to talk privately and offer a written payment plan"
                - "Book a call with a free housing or debt advice service"
                - "Record the house's decision on telling the landlord"
            - name: Recovering money from a former housemate
              description: |-
                ## Purpose
                Once someone has left owing the house money, a polite message is often ignored. A calm, documented process, with an itemised final request, a formal letter and, as a last step, the small claims route in your country, gives a real chance of recovery and tells you when the amount is not worth chasing.

                ## Milestones
                1. An itemised statement of what is owed, with evidence.
                2. A dated final request sent by message and email.
                3. A formal letter before action sent if there is no reply.
                4. A decision recorded to claim, accept a partial amount or write it off.

                ## Notes
                Small claims procedures and fees vary by country. Read the official court guidance or speak to a free advice service before filing; this project organises your evidence and is not legal advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An itemised claim with evidence, a dated final request and a recorded decision to claim or write off all exist."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build an itemised statement of the debt with evidence"
                - "Send a dated final request by message and email"
                - "Ask the agent to draft a letter before action from the statement"
                - "Read the official small claims guidance before deciding to file"
            - name: Running the house accounts as treasurer
              description: |-
                ## Purpose
                In larger or longer-running houses one person often ends up holding the bills pot, paying the landlord and chasing balances. Doing that job transparently, with a monthly statement, a second person able to see the pot and a handover note, protects the treasurer from suspicion and the house from depending on one phone.

                ## Milestones
                1. A monthly statement layout showing money in, money out and balance.
                2. A second housemate given view access to the pot.
                3. Statements posted to the house every month.
                4. A handover note written for the next treasurer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Monthly statements have been posted for three months running and a second housemate can view the pot."
                cadence: rolling
              tasks:
                - "Draft a one-page monthly statement layout"
                - "Give a second housemate view access to the bills pot"
                - "Post the monthly house statement with balance and bills paid @recurring(monthly:25)"
                - "Write a handover note listing every account and payment"
            - name: Systems for a large shared house
              description: |-
                ## Purpose
                In a house of six to ten people, a licensed multi-occupancy property or a co-living space, one kitty and one group chat stop working: balances get large, decisions stall and nobody knows who bought what. Splitting into kitchen or floor groups, with one bills pot, a treasurer and a voting rule, keeps a big house as fair as a small one.

                ## Milestones
                1. Shared costs sorted into whole-house and kitchen or floor groups.
                2. One bills pot and a named treasurer for whole-house costs.
                3. A separate app group for each kitchen or floor.
                4. A voting rule agreed for whole-house spending decisions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Whole-house and sub-group costs are separated, each with its own app group, and a voting rule for shared spending is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort shared costs into whole-house and kitchen or floor groups"
                - "Create a separate app group for each kitchen or floor"
                - "Agree a majority rule for whole-house purchases over a set amount"
                - "Name a treasurer for whole-house bills"
---

# Housemate Expense Splitting

This area is for renters and students sharing a house or flat, including anyone about to move in with people they barely know. It starts with the foundations (a full list of shared costs, a first money meeting, fair rent and bill rules, whose name sits on which account, the app and a written house agreement), then the routines that keep balances small, the skills of reading bills and doing pro rata sums, decisions about food, cleaners, heating and guests, the moments when people move in and out, versions for students, couples, lodgers, home workers and international housemates, and finally the harder work of chasing unpaid shares and running a big house.

What repeats is a weekly receipt round and kitty top-up, a monthly settle-up day, meter readings, a bills pot check, a supplies run and a short house check-in, quarterly bill and contract reviews, and a yearly look at the agreement, the heating, the renewal and the summer plan. The Household chores, Metrics log, Meeting notes, Purchase decision and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
