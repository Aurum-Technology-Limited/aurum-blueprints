---
id: personal-finance.rent-payments-deposits
name: Rent Payments & Deposits
description: "Rent that always lands on time with proof it was paid, a deposit you know is protected, rent increases handled with evidence, and a tenancy that ends with the deposit back in your account."
category: personal
version: 1.0.0
tags: [personal-finance, rent-payments-deposits, renter, tenancy, deposit-protection, rent-increase, check-out]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - operational-checklist
    - remediation-plan
    - metrics-log
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Rent Payments & Deposits
          description: "Managing rent payments, deposit protection, rent increases and getting deposits back at the end of a tenancy."
          projects:
            - name: Money terms of your tenancy agreement on one page
              description: |-
                ## Purpose
                Most tenancy agreements run to twenty pages, but the money in them comes down to about ten facts: the rent, the due date, how it must be paid, the deposit amount and where it is held, the length of the fixed term, any break clause, any rent review clause, permitted fees and who pays which bills. Pulling those onto one page means you can answer any money question about the tenancy in seconds, and spot a clause that will cost you before it does.

                ## Milestones
                1. The signed agreement located and read in full once, with money clauses marked.
                2. A one-page summary listing rent, due date, payment method, deposit, fixed term, break clause, rent review clause, fees and bill responsibilities.
                3. Any clause you do not understand written down as a question.
                4. Each open question answered by the landlord, agent or a free housing advice service, with the answer noted.

                ## Notes
                If you never received a signed copy of the agreement, ask for one in writing now. A clause that conflicts with the law where you live is usually unenforceable, but get that confirmed by an adviser rather than assuming.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary of at least eight money terms from the signed agreement exists, with every open question answered and noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the signed tenancy agreement and save a copy in your tenancy folder"
                - "Ask the AI agent to list the money clauses, then check each against the agreement"
                - "Write the one-page summary of rent, deposit, term, break and review clauses"
                - "Send any unanswered questions to the landlord or agent in writing"
            - name: Rent standing order timed to payday
              description: |-
                ## Purpose
                A rent payment that leaves your account two days before your salary arrives is the most common reason rent goes late, and late rent can mean fees, a poor reference and in time a notice to leave. Setting a standing order for the exact amount, a day or two after pay lands and before the due date, with the reference the landlord asked for, makes paying rent something that happens without you.

                ## Milestones
                1. The rent amount, due date, payee details and required payment reference confirmed in writing.
                2. A standing order set up from the account your salary lands in, timed between payday and the due date.
                3. The first payment seen leaving your account and acknowledged by the landlord or agent.
                4. A note made of what to change if your payday or the rent ever moves.

                ## Notes
                Most landlords ask for a standing order rather than a direct debit, because you control a standing order and they cannot change the amount. If rent rises, you must edit the standing order yourself, so put that step in your rent increase plan.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A standing order for the correct rent and reference is live, and the first payment through it has been acknowledged by the landlord or agent."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your payday against the rent due date in the agreement"
                - "Confirm the payee name, account details and reference with the agent by email"
                - "Set up the standing order to leave a day after payday"
                - "Ask the landlord or agent to confirm the first payment arrived"
            - name: Deposit protection confirmation
              description: |-
                ## Purpose
                In many countries a landlord must place your deposit in a government-backed protection scheme or with a bond authority within a set number of days, and give you the scheme's details. Renters who never check often discover at the end of the tenancy that their deposit was never protected, which makes getting it back slower and harder. Confirming protection now, while the landlord is responsive, costs half an hour.

                ## Milestones
                1. The rules for deposit protection where you live found, including the deadline for protecting it.
                2. The scheme name and deposit reference obtained from the landlord or agent.
                3. The deposit looked up on the scheme's own website and the amount and dates matched.
                4. The protection certificate and any required information saved in your tenancy folder.

                ## Notes
                Some places have no protection scheme and the landlord simply holds the money. In that case, get a written receipt for the deposit and a statement of the conditions for its return. If your deposit should be protected and is not, speak to a housing advice service before raising it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The deposit is found on the scheme's own site with the correct amount and dates, and the certificate is saved, or a written receipt exists where no scheme applies."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up whether deposits must be protected where you rent and by when"
                - "Ask the agent in writing for the scheme name and deposit reference"
                - "Check the deposit on the scheme's website using that reference"
                - "Recheck the protection is still in place after each renewal @recurring(yearly)"
            - name: Move-in condition evidence pack
              description: |-
                ## Purpose
                Deposit deductions are decided on evidence, and the strongest evidence a tenant can have is a dated record of the property's condition on the day they moved in. An inventory written by the landlord's side often misses marks, stains and worn items, and you usually have only a few days to add comments. Photographing every room and returning an annotated inventory protects the deposit years later.

                ## Milestones
                1. Dated photos and short videos of every room, wall, floor, appliance and fitting taken within the first days.
                2. Meter readings photographed on the move-in day.
                3. The check-in inventory read line by line, with every disagreement or omission written in.
                4. The annotated inventory returned to the agent by email, with a reply confirming receipt.

                ## Notes
                Take close-ups of existing damage with something for scale beside it, and wide shots that show where each mark sits. Store the originals somewhere the file dates are kept, such as cloud storage, not only on your phone.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated photo set covering every room and an annotated inventory acknowledged by the agent are stored together in the tenancy folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph every room in order, walls, floors, ceilings and fittings"
                - "Photograph the meter readings and note them with the date"
                - "Write your comments against each line of the check-in inventory"
                - "Email the annotated inventory to the agent and ask for confirmation"
            - name: Rent affordability check against take-home pay
              description: |-
                ## Purpose
                Landlords and referencing firms often test rent against gross salary, commonly at around 30 times the monthly rent a year, but what matters to you is how much of your take-home pay is left after rent and the bills that come with renting. Knowing your real rent-to-income share tells you whether the tenancy is sustainable, how much headroom a rent increase would eat, and what you can afford at the next move.

                ## Milestones
                1. Monthly take-home pay averaged over the last three months.
                2. Total housing cost calculated: rent plus any service charges, bills and insurance the tenancy requires.
                3. Housing cost as a share of take-home pay written down.
                4. A ceiling for future rent set, with the increase that would push you past it noted.

                ## Notes
                There is no single safe percentage, but many money guidance services treat housing above about a third of take-home pay as a warning sign. Use the figure to plan, not to judge yourself.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your housing cost as a share of take-home pay and a written ceiling for future rent are recorded with the date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Average your take-home pay from your last three payslips"
                - "Add up rent and every cost the tenancy obliges you to pay"
                - "Work out housing cost as a share of take-home pay"
                - "Recalculate the share after any pay change or rent change @recurring(yearly)"
            - name: Tenancy paperwork folder
              description: |-
                ## Purpose
                When a deposit is disputed or a rent payment questioned, the tenant who can produce the agreement, the deposit certificate, the inventory and the emails within minutes is usually the one who wins. A single folder, paper or digital, holding every tenancy document in a set order turns a stressful argument into sending a few attachments.

                ## Milestones
                1. One folder created with sections for agreement, deposit, inventory, safety certificates, payments and correspondence.
                2. The agreement, deposit certificate, check-in inventory and move-in photos filed.
                3. Safety certificates and any official renter guide the landlord must give you filed, or requested if missing.
                4. A backup copy kept somewhere other than your phone.

                ## Notes
                Name files with the date first, such as 2026-03-01 inventory, so they sort in order. Keep the folder for at least a year after the deposit is returned.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the agreement, deposit certificate, inventory, photos and safety certificates, with a backup copy stored separately."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a tenancy folder with six labelled sections"
                - "File the agreement, deposit certificate and check-in inventory"
                - "Ask the landlord for any safety certificate you have not been given"
                - "Copy the folder to a second location as a backup"
            - name: Rent payment ledger with bank references
              description: |-
                ## Purpose
                Agents do misallocate payments, landlords change, and a dispute about arrears two years from now will turn on whether you can show each payment. A simple ledger of every rent payment, with date, amount, bank reference and any receipt, built in five minutes a month, is proof that no statement export can match once your bank only keeps a few years of history online.

                ## Milestones
                1. A ledger with columns for month, amount due, amount paid, date paid, bank reference and receipt.
                2. Every payment since the tenancy began entered from your statements.
                3. Any shortfall or late payment marked with the reason and how it was settled.
                4. The ledger kept current each month for at least six months.

                ## Notes
                Start from the **Metrics log** template if you want the ledger to sit alongside your other money logs. A screenshot of the statement line each month is enough evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger shows every rent payment since the tenancy began with date and bank reference, and has been updated for six consecutive months."
                cadence: rolling
              tasks:
                - "Set up the rent ledger with six columns"
                - "Enter every past rent payment from your bank statements"
                - "Mark any late or short payment with how it was settled"
                - "Record this month's rent payment and its bank reference @recurring(monthly:3)"
            - name: Verified payee details for rent
              description: |-
                ## Purpose
                Emails claiming that a landlord or agent has new bank details are a well-known way of stealing rent, and the money is often unrecoverable once sent. Writing down the verified payee details and a phone number you got independently, and agreeing a rule that any change is confirmed by a call to that number, closes the gap before anyone tries it.

                ## Milestones
                1. The landlord's or agent's payee name, account details and a phone number you found yourself recorded.
                2. Your bank's payee name check result noted when the payee was set up.
                3. A written rule that no change to payment details is acted on without a call to the recorded number.
                4. The landlord or agent told about your rule, so they expect the call.

                ## Notes
                Find the agent's phone number from their official website or the agreement, never from the email asking for the change. Report any suspicious request to your bank straight away.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Verified payee details and an independently sourced phone number are recorded, and the call-to-confirm rule has been sent to the landlord or agent."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the payee details from the agreement into your tenancy folder"
                - "Find the agent's phone number on their official website"
                - "Email the agent that you will confirm any change of bank details by phone"
                - "Recheck the saved payee against the agreement when the tenancy renews"
            - name: Upfront costs ledger for a new let
              description: |-
                ## Purpose
                Moving into a rented home usually needs a holding deposit, the first month's rent, a security deposit, moving costs and sometimes referencing or guarantor service fees, all inside two or three weeks, while the old deposit may not come back for a month or more. Listing every upfront cost with its due date and whether it is refundable shows how much cash the move really needs and which fees may not be allowed.

                ## Milestones
                1. Every upfront cost listed with amount, due date and who it is paid to.
                2. Each cost marked refundable, credited to rent, or non-refundable.
                3. Any fee checked against the rules on permitted tenant fees where you live.
                4. The total cash needed, and the date the old deposit is expected back, side by side.

                ## Notes
                Ask whether the holding deposit will be credited to the first month's rent or the security deposit, and get that answer in writing before you pay it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of every upfront cost for the move, each marked refundable or not, with a total and the expected return date of the old deposit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every payment the agent says is due before the keys"
                - "Ask in writing what happens to the holding deposit"
                - "Check each fee against the permitted fees rules where you live"
                - "Total the cash needed and compare it with your available savings"
            - name: One month's rent buffer pot
              description: |-
                ## Purpose
                A late salary, a surprise bill or a payday that falls on a bank holiday can leave the rent account short on the day it matters. Holding one month's rent in a separate pot, and topping it back up after any use, means a timing gap never turns into late rent, a fee or a difficult conversation with the landlord.

                ## Milestones
                1. A separate savings pot named for the rent buffer.
                2. A monthly transfer set that will fill the pot to one month's rent within a set number of months.
                3. The pot reaching one full month's rent.
                4. A rule written for when the buffer may be used and how fast it is refilled.

                ## Notes
                Start from the **Savings goal** template. This is a timing buffer for rent only; a wider emergency fund is a separate goal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate pot holds at least one month's rent, with a written rule for its use and refill."
                cadence: rolling
              tasks:
                - "Open or name a savings pot for the rent buffer"
                - "Decide how many months it will take to fill the pot"
                - "Transfer this month's amount into the rent buffer @recurring(monthly:26)"
                - "Write down when the buffer may be used and how fast to refill it"
            - name: Next-move deposit fund
              description: |-
                ## Purpose
                The deposit on your current home is tied up until after you leave, and often returns weeks after the next landlord wants a new one. Saving a separate amount equal to the next deposit while you rent means a move, planned or forced, never depends on getting the old deposit back in time or borrowing to bridge the gap.

                ## Milestones
                1. A target set equal to five or six weeks' rent at the level you expect to pay next.
                2. A named pot opened and a monthly transfer set.
                3. Half the target saved.
                4. The full target saved and left untouched until a move.

                ## Notes
                Once a move is over and the old deposit returns, put it straight back into this fund so it is ready for the move after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named pot holds an amount at least equal to the expected deposit for your next home."
                cadence: rolling
              tasks:
                - "Estimate the deposit for a home like yours at today's rents"
                - "Open a named pot for the next deposit"
                - "Move this month's contribution into the deposit fund @recurring(monthly:20)"
                - "Return the old deposit to this fund when it is refunded"
            - name: Landlord correspondence log
              description: |-
                ## Purpose
                Phone calls with a landlord or agent leave no trace, and a promise made on the doorstep is hard to prove at check-out. Keeping every request, agreement and reply in writing, and filing it in one place each month, gives you a dated record of repairs reported, permissions given and rent agreed, which is what a deposit adjudicator or adviser will ask for.

                ## Milestones
                1. A correspondence section in the tenancy folder, sorted by date.
                2. A short follow-up email sent after every phone call or visit, confirming what was said.
                3. All past emails and messages with the landlord or agent filed.
                4. The log kept current each month.

                ## Notes
                A one-line email such as confirming that you agreed on the phone today that I can hang pictures is enough. Messaging apps are fine, but export them into the folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contact with the landlord or agent for the last six months exists in writing in the tenancy folder."
                cadence: rolling
              tasks:
                - "Search your email and messages for every exchange with the landlord"
                - "File past correspondence in date order in the tenancy folder"
                - "Send a confirming email after your next phone call with the agent"
                - "File this month's landlord emails and messages @recurring(monthly:18)"
            - name: Quarterly condition photo record
              description: |-
                ## Purpose
                Move-in photos show the start and check-out photos show the end, but a dispute is often about when damage happened: a leak that marked the ceiling, a carpet worn by a faulty door. A quick set of photos every three months builds a timeline that shows gradual wear and when a problem appeared, which is hard for anyone to argue with.

                ## Milestones
                1. A standard photo route through the home, in the same order each time.
                2. A dated set of photos taken each quarter and filed.
                3. Any new mark or defect photographed close up and reported in writing.
                4. At least four quarterly sets on file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated quarterly photo sets of the whole home are filed in the tenancy folder."
                cadence: cyclic
              tasks:
                - "Write down your photo route through the home"
                - "Take the first quarterly set and file it with the date"
                - "Photograph every room on your route and file the set @recurring(quarterly)"
            - name: Repairs reported in writing
              description: |-
                ## Purpose
                Tenants who keep quiet about a dripping tap or a damp patch can end up charged for the damage it later causes, while those who report promptly in writing shift responsibility to the landlord. Reporting every defect by email, with a photo and a date, and chasing in writing, protects both the deposit and your right to have the home kept in repair.

                ## Milestones
                1. A list of current defects in the home, each with a photo.
                2. Every defect reported to the landlord or agent by email.
                3. A tracking list showing date reported, date chased and date fixed.
                4. A monthly walk-round habit for spotting new problems early.

                ## Notes
                If a repair is urgent, such as no heating or a serious leak, phone first and then confirm by email the same day. For repairs that are ignored, a local housing advice service can explain your options.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every known defect has been reported by email with a photo, and a tracking list shows the date of each report and repair."
                cadence: rolling
              tasks:
                - "List and photograph every defect you know about now"
                - "Email each defect to the landlord or agent with the photo"
                - "Chase any repair that has had no reply after fourteen days"
                - "Walk round the home and note any new defects @recurring(monthly:15)"
            - name: Deposit-friendly home care routine
              description: |-
                ## Purpose
                Most deposit deductions are for cleaning, mould and small damage that built up quietly: limescale on taps, black mould behind furniture, grease on the oven, picture hook holes. A short monthly routine of the jobs that cause those charges keeps the home close to check-out standard all along, so the final clean is a day, not a week.

                ## Milestones
                1. A list of the six or seven jobs that most often lead to deductions in a home like yours.
                2. A monthly slot set for those jobs.
                3. Ventilation habits in place for bathrooms and drying laundry, with any persistent damp reported.
                4. Oven, limescale and extractor filters clean at each quarterly photo check.

                ## Notes
                Mould caused by a building defect is the landlord's problem, but mould from blocked vents and drying clothes indoors is often charged to the tenant. Reporting persistent damp in writing early protects you either way.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of deduction-prone jobs exists and has been worked through monthly for three months."
                cadence: rolling
              tasks:
                - "List the jobs that most often cause deposit deductions"
                - "Clear trickle vents and extractor fans of dust"
                - "Work through the deduction-prone jobs list @recurring(monthly:9)"
                - "Report any damp that returns within a week of cleaning"
            - name: Rent review and fixed-term end dates
              description: |-
                ## Purpose
                Rent increases and the end of a fixed term almost never arrive without a clause or a rule that told you when they could happen. Putting the earliest date rent can be reviewed, the notice the landlord must give and the fixed-term end date in your calendar gives you months, not days, to compare the market, budget for a rise or plan a move.

                ## Milestones
                1. The rent review clause and the legal notice period for increases where you live noted.
                2. The fixed-term end date and the date the tenancy rolls on noted.
                3. Reminders set three months before each of those dates.
                4. The dates rechecked whenever the tenancy is renewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The earliest rent review date and fixed-term end date are in your calendar with reminders three months ahead."
                cadence: rolling
              tasks:
                - "Find the rent review clause and fixed-term end date in the agreement"
                - "Look up how much notice a landlord must give for a rent increase"
                - "Add reminders three months before each date"
                - "Confirm the review and end dates still match the agreement @recurring(yearly)"
            - name: Annual tenancy money review
              description: |-
                ## Purpose
                Once a year it is worth looking at the whole tenancy as a money decision: what you paid in rent, how that compares with similar homes nearby, whether the deposit is still protected, whether your contents insurance reflects where you live now, and whether this is the year to stay, renegotiate or move. An hour on the anniversary keeps the biggest bill in most renters' budgets under review.

                ## Milestones
                1. The year's total rent from your ledger written down.
                2. Three comparable homes nearby noted with their asking rents.
                3. Deposit protection, payee details and the review dates rechecked.
                4. A one-line decision recorded for the coming year: stay as is, negotiate, or plan a move.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated annual note holds the year's rent total, three local comparables and a recorded decision for the year ahead."
                cadence: cyclic
              tasks:
                - "Pick the tenancy anniversary as the review date"
                - "Total last year's rent from the ledger"
                - "Note three comparable local asking rents"
                - "Hold the annual tenancy money review and record the decision @recurring(yearly)"
            - name: Agent rent statement reconciliation
              description: |-
                ## Purpose
                Letting agents keep a rent account for each tenant, and a payment posted to the wrong account or a fee added in error can sit there unnoticed until it appears as arrears on a reference. Asking once a year for the agent's statement of your rent account and checking it against your own ledger catches errors while the evidence is fresh.

                ## Milestones
                1. The agent's rent statement for your tenancy requested in writing.
                2. Each line matched to a payment in your own ledger.
                3. Any difference raised with the agent in writing, with your bank evidence attached.
                4. A statement showing a zero balance, or a corrected one, filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An agent rent statement matched line by line to your ledger, with any differences corrected in writing, is filed each year."
                cadence: cyclic
              tasks:
                - "Email the agent asking for a statement of your rent account"
                - "Match each line against your own payment ledger"
                - "Send the agent bank evidence for any missing payment"
                - "Request and reconcile the agent's rent statement @recurring(yearly)"
            - name: Deposit protection rules where you live
              description: |-
                ## Purpose
                The rules on deposits vary widely: how much a landlord can take, how fast it must be protected, what information you must receive, how long they have to return it, and what happens if they break the rules. Learning the version that applies to your tenancy, from an official or advice-service source, means you know what to expect and when to ask for help.

                ## Milestones
                1. The official guidance on tenancy deposits for your country or region read.
                2. The deposit cap, protection deadline and return deadline written down.
                3. The information the landlord must give you about the deposit listed.
                4. The free advice service for renters in your area noted for future questions.

                ## Notes
                Rules differ between nations within the same country, and between tenancy types. A lodger in the landlord's home, a student in halls and a tenant on an ordinary residential tenancy can all have different protections.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of the deposit cap, protection deadline, return deadline and required information for your tenancy type, with its official source."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the official tenancy deposit guidance for where you live"
                - "Write down the cap, protection deadline and return deadline"
                - "List the information the landlord must give you about the deposit"
                - "Save the contact details of a free renters' advice service"
            - name: Fair wear and tear versus damage
              description: |-
                ## Purpose
                Landlords can usually deduct for damage and missing cleaning, but not for the gradual wear that comes from normal living, and not to replace an old item with a new one at your expense. Understanding how adjudicators think about wear, the age of items and apportionment lets you read a proposed deduction and see whether it is fair before you agree to it.

                ## Milestones
                1. The deposit scheme's or adviser's guide to wear and tear read.
                2. The idea of apportionment understood: a charge reduced by the item's age and expected life.
                3. A list of the items in your home most likely to be argued about, with their age if known.
                4. Three worked examples written out, such as a five-year-old carpet with a stain.

                ## Notes
                Ask the landlord for the age of carpets, curtains and appliances at the start. It is much easier to get now than at check-out.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains wear versus damage and apportionment, with three worked examples for items in your home."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a deposit scheme's guide to fair wear and tear"
                - "Ask the landlord the age of carpets, curtains and main appliances"
                - "Write out three apportionment examples for items in your home"
                - "Add the item ages to your tenancy folder"
            - name: How rent increases can happen where you live
              description: |-
                ## Purpose
                Depending on where you rent, rent may rise only through a clause in the agreement, through a formal notice with a set notice period, by agreement at renewal, or within a cap set by law. Knowing which routes apply to you, and which forms or notices must be used, tells you whether a proposed increase is valid and what your choices are.

                ## Milestones
                1. The routes by which rent can rise on your tenancy type listed.
                2. Required notice periods and any limit on how often rent can rise noted.
                3. Any rent cap or control that applies in your area checked.
                4. The body that can review a disputed increase, if one exists, noted.

                ## Notes
                An increase you agree to, even informally by paying it, may be harder to challenge later. Check the rules before paying a new amount.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the valid routes for a rent increase on your tenancy, the notice required and any review body, with sources."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read official guidance on rent increases for your tenancy type"
                - "Note the notice period and how often rent can rise"
                - "Check whether any rent cap or control applies in your area"
                - "Write down who can review a disputed increase"
            - name: Reading check-in and check-out reports
              description: |-
                ## Purpose
                Inventory reports use a vocabulary of their own, such as good, fair, light marks, professionally cleaned and domestic clean, and a deduction often rests on the gap between two words. Learning to read and compare the two reports line by line means you can spot where a condition has been described differently without anything having changed.

                ## Milestones
                1. The difference between condition and cleanliness entries understood.
                2. Common inventory terms and what they usually imply written down.
                3. Your own check-in report re-read with those terms in mind.
                4. A comparison method ready for check-out: each line, check-in wording, check-out wording, your evidence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of inventory terms and a line-by-line comparison template for check-out exist in the tenancy folder."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a sample inventory report from a deposit scheme or clerk"
                - "Write a short glossary of the condition terms used"
                - "Re-read your check-in report and mark vague entries"
                - "Set up a comparison table for check-out day"
            - name: Rent arrears process explained
              description: |-
                ## Purpose
                Missing a rent payment sets off a process with fixed steps and deadlines that differ by country: reminder letters, arrears thresholds, formal notices, court or tribunal stages. Knowing those steps before you ever need them means that if money gets tight you act early, while every option is still open, instead of waiting for a letter you do not understand.

                ## Milestones
                1. The stages a landlord must follow over arrears where you live written down in order.
                2. The arrears level at which formal action can usually begin noted.
                3. The point at which free housing or debt advice should be sought marked.
                4. Contact details for a free housing advice line saved.

                ## Notes
                Rent is a priority debt: missing it can cost you your home. If you ever fall behind, contact the landlord and an advice service before the next payment is due, not after a notice arrives.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of the arrears process stages, thresholds and an advice contact is filed in the tenancy folder."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read official guidance on rent arrears for your tenancy type"
                - "List the stages a landlord must follow in order"
                - "Note the arrears level that can trigger formal action"
                - "Save a free housing advice line number in your phone"
            - name: Permitted and banned tenant fees
              description: |-
                ## Purpose
                Several countries now limit what landlords and agents can charge tenants, banning fees for things like referencing, inventories or contract renewals, and capping holding deposits and default charges. Knowing the list where you live lets you challenge an unlawful fee before paying it, or reclaim one already paid.

                ## Milestones
                1. The list of permitted payments for your tenancy type found from an official source.
                2. Any fee you have paid during this tenancy checked against the list.
                3. Any fee that looks unlawful raised in writing, citing the rule.
                4. The outcome recorded and any refund matched to your bank statement.

                ## Notes
                In England, for example, the Tenant Fees Act sets out the payments a landlord may take. Check the equivalent rules for wherever you rent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every fee paid in this tenancy has been checked against the official permitted list, with any unlawful fee challenged in writing."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the official list of permitted tenant payments where you rent"
                - "List every fee you have paid to the landlord or agent"
                - "Mark any fee that is not on the permitted list"
                - "Write to the agent about any fee that looks unlawful"
            - name: How deposit dispute resolution works
              description: |-
                ## Purpose
                Where deposits are protected, the scheme usually offers a free adjudication service that decides disputes on written evidence alone, with strict time limits for each side. Understanding how it works, what evidence counts and how long each stage takes before you need it means you can build the right record during the tenancy, not scramble for it afterwards.

                ## Milestones
                1. Your deposit scheme's dispute rules and time limits read.
                2. The kinds of evidence adjudicators give weight to listed.
                3. Gaps in your current evidence noted, such as missing move-in photos or receipts.
                4. A plan to fill those gaps added to your tenancy folder.

                ## Notes
                Adjudicators generally start from the position that the deposit belongs to the tenant, and the landlord must prove a deduction is justified. Your job is to make sure their evidence can be checked against yours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of your scheme's dispute stages and time limits, and a list of evidence gaps with how each will be filled, is filed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your deposit scheme's dispute resolution guide"
                - "Write down each stage and its time limit"
                - "List the evidence you have and the evidence you are missing"
                - "Plan how to fill each evidence gap before you move out"
            - name: Negotiating a proposed rent increase
              description: |-
                ## Purpose
                Proposed rises are often an opening figure, and landlords who value a reliable tenant may accept less to avoid a void period, re-letting fees and redecoration. Responding with local comparable rents, your payment record and a specific counter-offer in writing gives you a real chance of a smaller rise, or a rise in return for something you value.

                ## Milestones
                1. The proposed increase checked as validly made under your agreement and local rules.
                2. Three to five comparable homes nearby listed with their asking rents.
                3. A written counter-offer sent, with your payment record and comparables attached.
                4. The agreed rent confirmed in writing and the standing order changed to match.

                ## Notes
                Asking rents on listing sites run higher than achieved rents. Look for similar homes that have stayed listed for weeks, which suggests the asking rent is too high.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written counter-offer with comparables was sent, and the final agreed rent is confirmed in writing with the standing order updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the increase was proposed in the way your agreement requires"
                - "List five comparable local homes with their asking rents"
                - "Send a written counter-offer with your payment record attached"
                - "Update the standing order once the new rent is agreed"
            - name: Stay, renegotiate or move cost comparison
              description: |-
                ## Purpose
                Moving to escape a rent rise can cost more than the rise itself once removal, overlap rent, a new deposit, cleaning and time off work are counted. Setting the true cost of a move against two years of the higher rent, and against the rents you could get elsewhere, turns a gut reaction into a decision you can stand behind.

                ## Milestones
                1. The full cost of a move estimated: removal, overlap rent, cleaning, new deposit gap, fees and time off.
                2. Two years of rent at the current, proposed and best realistic alternative levels set side by side.
                3. Non-money factors listed, such as commute, schools and space.
                4. A decision recorded with the numbers behind it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-year cost comparison of staying versus moving, with a recorded decision, is saved in the tenancy folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get two removal quotes for your current home"
                - "Estimate the overlap rent and deposit gap a move would need"
                - "Ask the AI agent to lay out two years of rent under each option"
                - "Record your decision and the figures behind it"
            - name: Cash deposit versus deposit replacement scheme
              description: |-
                ## Purpose
                Some agents offer a deposit replacement product: a small non-refundable fee instead of five or six weeks' rent held as a deposit. It frees up cash at the start, but the fee is never returned and you usually remain liable for any damage or unpaid rent, often with fewer protections than a protected cash deposit. Comparing the two over the likely length of your tenancy shows which one really costs less.

                ## Milestones
                1. The replacement product's fee, renewal charges and what you remain liable for written down.
                2. The cash deposit's cost estimated, including the interest you would lose on the money.
                3. Both options compared over the expected length of the tenancy.
                4. A choice made and recorded with its reasons.

                ## Notes
                Read who decides disputes under the replacement product and whether claims against you can be passed to a debt collector. That is often where the two options differ most.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of the cash deposit and the replacement product over the expected tenancy length is recorded with a final choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent for the replacement product's full terms in writing"
                - "Note the fee, any renewal charge and your remaining liability"
                - "Compare total cost with a cash deposit over your expected stay"
                - "Record which option you chose and why"
            - name: Moving the rent due date to match payday
              description: |-
                ## Purpose
                Rent dates set by when you happened to move in, not when you get paid, can leave you stretching every month or paying with a credit card. Many landlords will move the due date for a reliable tenant if you offer to pay a one-off pro-rata amount to bridge the change, which removes a monthly squeeze for good.

                ## Milestones
                1. The gap between payday and the current due date worked out in days.
                2. A proposed new due date and the one-off pro-rata amount calculated.
                3. The request sent to the landlord or agent in writing.
                4. The new date confirmed in writing and the standing order moved.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement to a new rent due date is filed, and the standing order has moved to match."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the days between payday and the rent due date"
                - "Calculate the pro-rata rent for the changeover period"
                - "Email the landlord proposing the new date and bridging payment"
                - "Move the standing order once the new date is confirmed"
            - name: Rent payment reporting to credit files
              description: |-
                ## Purpose
                In several countries rent payments can now be reported to credit reference agencies, through a free service your landlord or bank offers or a paid one you sign up to. For a renter with a thin credit file, a record of rent paid on time can help a future application; for one who sometimes pays late, it can hurt. Deciding deliberately, and checking it is reported correctly, matters more than the default.

                ## Milestones
                1. The rent reporting options available to you listed, with any cost.
                2. A decision made on whether to opt in, based on your payment record.
                3. If opted in, the first reported payments seen correctly on your credit file.
                4. Reporting checked periodically against your rent ledger.

                ## Notes
                Never pay for a service whose only benefit is something your bank or a free scheme already offers. Ask the agent first whether they report rent.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on rent reporting exists, and if you opted in, your credit file shows rent payments matching your ledger."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent and your bank whether they offer rent reporting"
                - "Compare any rent reporting services and their costs"
                - "Decide whether to opt in based on your payment history"
                - "Check reported rent payments match your ledger @recurring(quarterly)"
            - name: Paying rent months in advance
              description: |-
                ## Purpose
                Landlords sometimes ask for three, six or twelve months' rent upfront from students, the newly self-employed or people new to the country without a local credit history. It can win a tenancy, but it puts a large sum at risk if the landlord fails, sells or the tenancy ends early. Deciding with the risks written down, and the terms agreed, protects that money.

                ## Milestones
                1. The landlord's reason for wanting rent in advance understood.
                2. Alternatives tried, such as a guarantor or a guarantor service.
                3. If paying in advance, written terms covering refund on early end, sale of the property and how the payment is recorded.
                4. The payment recorded in the ledger as covering specific months.

                ## Notes
                Some places treat rent paid far in advance as part of the deposit, which then must be protected or capped. Check the rules before agreeing, and never pay in cash.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on paying in advance exists, and any advance payment is covered by written refund terms and logged against specific months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the landlord why they want rent in advance"
                - "Check whether a guarantor would be accepted instead"
                - "Get written terms for refund if the tenancy ends early"
                - "Log the advance payment against the months it covers"
            - name: Asking for a rent reduction at renewal
              description: |-
                ## Purpose
                Rents fall as well as rise, and a renewal is the one moment a landlord weighs your rent against the cost and risk of an empty home. If local asking rents have dropped, or the home has problems that have not been fixed, a polite written request with evidence can bring a lower rent or a freeze and some agreed works.

                ## Milestones
                1. Evidence gathered: local comparables, time similar homes stay listed, and outstanding repairs.
                2. A clear request written: the rent you are asking for and why.
                3. The request sent before the renewal date, with time for a reply.
                4. The outcome recorded and any new rent confirmed in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written request for a reduction or freeze, with evidence, was sent before renewal, and the outcome is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how long similar local homes are staying on the market"
                - "List outstanding repairs with the dates you reported them"
                - "Write the request stating the rent you are asking for"
                - "Send the request well before the renewal date"
            - name: Change of landlord or agent handover
              description: |-
                ## Purpose
                When a home is sold with you in it, or the landlord changes agent, your deposit and rent payments are at their most likely to go astray. Confirming in writing who now holds the deposit, whether it has been re-protected, where rent should go and who handles repairs closes the gap before money ends up in the wrong place.

                ## Milestones
                1. Written notice of the change received, from both old and new parties if possible.
                2. The new payee details confirmed by phone to a number you found independently.
                3. The deposit's new holder and protection reference confirmed.
                4. Your rent ledger and the old agent's final statement showing nothing outstanding.

                ## Notes
                Do not change your standing order on the strength of a single email. Fraudsters target exactly this moment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new payee, deposit holder and protection reference are confirmed in writing, and the old agent's final statement shows a zero balance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the outgoing agent for a final statement of your rent account"
                - "Confirm the new bank details by phone before changing the payment"
                - "Get the deposit's new protection reference in writing"
                - "Update the payee record and landlord contacts in your folder"
            - name: Mid-tenancy inspection preparation
              description: |-
                ## Purpose
                Inspections by the landlord or agent usually happen once or twice a year, and the notes they take can resurface as evidence at check-out. Preparing for an inspection, by tidying, fixing small things you are allowed to fix and listing repairs you want raised, turns it into a chance to show the home is cared for and to get your outstanding repairs on their record.

                ## Milestones
                1. The inspection date and the notice given confirmed in writing.
                2. Small tenant jobs done, such as bulbs, limescale and tidy outside space.
                3. A written list of outstanding repairs ready to hand over.
                4. A copy of the inspection report requested and filed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written repair list was handed over at the inspection and the inspection report is filed in the tenancy folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the inspection date and time in writing"
                - "Do the small jobs that are the tenant's responsibility"
                - "Write a list of outstanding repairs to hand over"
                - "Ask for a copy of the inspection report afterwards"
            - name: Giving notice and final rent calculation
              description: |-
                ## Purpose
                Leaving a tenancy has a money sequence that is easy to get wrong: notice served in the right form on the right day, rent paid only to the true end date, the standing order cancelled after the last payment and not before. Working it out in writing avoids paying a month you did not owe, or leaving arrears that come out of the deposit.

                ## Milestones
                1. The notice period, required form and any break clause conditions confirmed from the agreement.
                2. Notice served in writing with proof of delivery.
                3. The final rent due calculated to the last day, including any pro-rata amount, and agreed with the agent.
                4. The standing order cancelled after the final payment has cleared.

                ## Notes
                Notice periods often have to end on a particular day of the rental period. Get the agent to confirm the end date in writing before you book removals.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notice was served with proof of delivery, the final rent figure was agreed in writing, and the standing order was cancelled after the last payment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the notice period and form required in the agreement"
                - "Serve notice in writing and keep proof of delivery"
                - "Ask the agent to confirm the end date and final rent figure"
                - "Cancel the standing order after the final rent has cleared"
            - name: Check-out cleaning and inspection preparation
              description: |-
                ## Purpose
                Most deposit deductions are decided in the last week of a tenancy. Cleaning to the standard recorded at check-in, putting back anything that was moved, and taking your own dated photos on the last day give you the evidence to answer any deduction claimed, and remove the reasons for most of them.

                ## Milestones
                1. The check-in inventory used as a room-by-room checklist.
                2. Cleaning done to the check-in standard, with receipts kept if professionals were used.
                3. Final meter readings, keys returned and the condition photographed on the last day.
                4. Attendance at the check-out inspection, or a written request for the report if you cannot attend.

                ## Notes
                Start from the **Operational checklist** template. If the inventory said professionally cleaned at the start, check whether your agreement can require the same at the end, and keep the receipt if you pay for one.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated last-day photo set, final meter readings and a key return receipt are filed, and the check-out report has been received."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Turn the check-in inventory into a room-by-room cleaning checklist"
                - "Book any professional cleaning at least two weeks ahead"
                - "Photograph every room and the meters on the last day"
                - "Get a receipt when you hand back the keys"
            - name: Full deposit return request
              description: |-
                ## Purpose
                Deposits do not always come back on their own, and the clock on most return deadlines only starts once one side asks. Asking in writing for the full deposit on the day you leave, tracking the deadlines, and replying to any proposed deduction with your evidence, gets most deposits back in full or with only fair deductions.

                ## Milestones
                1. A written request for the full deposit sent on the day the tenancy ends.
                2. The return deadline for your deposit scheme or local rules noted in your calendar.
                3. Any proposed deduction answered in writing, line by line, with evidence.
                4. The deposit, or the agreed amount, seen in your bank account and logged.

                ## Notes
                Agree only the deductions you accept, and say clearly that you dispute the rest. Accepting a partial payment is usually not the same as accepting the deductions, but say so in writing.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The deposit, or an amount agreed in writing, has arrived in your bank account, with each deduction either accepted or formally disputed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the agent requesting the full deposit on your last day"
                - "Add the deposit return deadline to your calendar"
                - "Reply to each proposed deduction with your evidence"
                - "Log the returned deposit and move it into your next deposit fund"
            - name: Deposit dispute submission
              description: |-
                ## Purpose
                When negotiation fails, the deposit scheme's adjudication is usually free and decided on paper, so the case is won by whoever submits clear, organised evidence on time. Building a short submission that takes each disputed deduction in turn, with the check-in entry, check-out entry, photos and your response side by side, gives the adjudicator an easy decision in your favour where the facts support you.

                ## Milestones
                1. The dispute raised with the scheme within its time limit.
                2. A table of each disputed deduction with check-in wording, check-out wording, photos and your response.
                3. Supporting documents attached: agreement, inventories, photos, correspondence and receipts.
                4. The adjudicator's decision received and any payment logged.

                ## Notes
                Keep the submission factual and short. Adjudicators read hundreds of cases, and a clear table persuades more than a long letter. You can ask the AI agent to arrange your evidence into the table, but check every line yourself.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A dispute was submitted within the scheme's time limit with a per-deduction evidence table, and the adjudicator's decision is filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the time limit for raising a dispute with your scheme"
                - "Build a table of each disputed deduction and its evidence"
                - "Attach the agreement, both inventories, photos and emails"
                - "Submit the dispute and file the scheme's acknowledgement"
            - name: Holding deposit refund when a let falls through
              description: |-
                ## Purpose
                A holding deposit secures a home while referencing is done, and in many places it must be refunded within a set number of days if the landlord pulls out or the deadline for agreement passes. Knowing when it is refundable, and asking for it promptly in writing, stops a week's rent disappearing when a let falls through for reasons that are not your fault.

                ## Milestones
                1. The holding deposit amount, date paid and the agreed deadline for signing written down.
                2. The reason the let fell through recorded in writing.
                3. The rules on holding deposit refunds where you live checked.
                4. A written refund request sent and the money seen back in your account.

                ## Notes
                A holding deposit can often be kept if you gave misleading information or pulled out yourself. Be honest in referencing and keep the agent's written timeline.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written refund request was sent and either the holding deposit is back in your account or the landlord's written reason for keeping it is filed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the holding deposit amount and the date you paid it"
                - "Check the rules on holding deposit refunds where you rent"
                - "Email the agent asking for the refund and the reason for any delay"
                - "Confirm the refund has reached your bank account"
            - name: First-time renter's money set-up
              description: |-
                ## Purpose
                First tenancies bring costs and processes that nobody explains: referencing, a guarantor, a deposit bigger than you expected, bills in your name and rent that is now the biggest payment you make. Working through them in order, before you sign, means the first year goes smoothly and you leave with a good reference and your deposit back.

                ## Milestones
                1. A maximum rent set from take-home pay, before viewings begin.
                2. Documents for referencing gathered: identity, proof of income, previous address history.
                3. A plan for a guarantor or an alternative, if one will be needed.
                4. The tenancy signed with rent payment and deposit protection set up in the first week.

                ## Notes
                Read the agreement before you sign, not on the day. Ask an older friend or a renters' advice service to look over anything unusual.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A maximum rent, a complete referencing document set and a guarantor plan are in place before a tenancy is signed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out the most rent you can pay from your take-home pay"
                - "Gather your ID, payslips and address history in one folder"
                - "Ask a possible guarantor whether they would be willing"
                - "Read the full agreement at least a day before signing"
            - name: Guarantor arrangement for a student or young renter
              description: |-
                ## Purpose
                Parents or relatives who sign as guarantor can become liable for the whole rent of a shared house, not just their own child's share, and sometimes for renewals they never saw. Agreeing exactly what is being guaranteed, for how long and for whom, before signing protects the guarantor's money and the family relationship.

                ## Milestones
                1. The guarantee document read by the guarantor, with the liability cap, if any, and duration noted.
                2. A limit on the guarantee to one tenant's share or a fixed amount requested where possible.
                3. A written note of how the guarantor will be told about missed payments.
                4. The guarantee end date diarised and released in writing when the tenancy ends.

                ## Notes
                In a joint tenancy, each tenant is often liable for the full rent, and so are their guarantors. Ask for a capped guarantee before signing, because it is very hard to change later.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The guarantor has a written note of the amount and length of their liability, and a release has been requested in writing at the end of the tenancy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent for the guarantee document before the tenancy is signed"
                - "Ask whether the guarantee can be capped to one tenant's share"
                - "Agree how the guarantor will hear about any missed payment"
                - "Confirm with the guarantor whether the guarantee still runs @recurring(yearly)"
            - name: Tenant changeover in a joint tenancy
              description: |-
                ## Purpose
                Once one person leaves a shared tenancy and another moves in, the deposit stays with the landlord, but the money inside it belongs to different people with different damage records. Agreeing in writing how the leaver's share is paid out, what the new tenant pays in, and how the agreement and protection are updated avoids the remaining tenants paying for damage they did not cause.

                ## Milestones
                1. The landlord's consent to the change and the process confirmed in writing.
                2. A walk-round with the leaving tenant, with dated photos of their room and shared areas.
                3. The leaver's deposit share settled directly between tenants or through the landlord, with written agreement.
                4. A new agreement or variation signed and the deposit protection updated with the new names.

                ## Notes
                This is about the tenancy and deposit records. Splitting the shared bills and groceries belongs with your housemate money arrangements.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The landlord has updated the agreement and deposit protection with the new names, and a signed note records how the leaver's share was settled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the landlord in writing how they handle a tenant changeover"
                - "Do a photo walk-round with the person leaving"
                - "Agree in writing how the leaver's deposit share is paid"
                - "Check the deposit protection now lists the new tenant"
            - name: Pet deposit and pet rent terms
              description: |-
                ## Purpose
                Pet-friendly landlords may ask for a higher deposit, extra monthly rent or a requirement for pet damage insurance, depending on what local rules allow. Agreeing the terms in writing, recording the condition of floors, doors and gardens, and keeping on top of pet wear protects both your deposit and the right to keep the animal.

                ## Milestones
                1. Written consent for the pet, naming the animal, in the agreement or a side letter.
                2. Any extra deposit, pet rent or insurance requirement checked against local rules.
                3. Pet-prone areas photographed at move-in: floors, door frames, carpets and garden.
                4. A quarterly check for scratches, odours and garden damage, with repairs done early.

                ## Notes
                Professional carpet and flea treatment at check-out is commonly requested for pet tenancies. Ask now whether it will be required, and keep receipts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written pet consent and the agreed pet terms are filed, and four quarterly pet-wear checks with photos have been done."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Get written consent for the pet that names the animal"
                - "Check any extra pet deposit or rent against local rules"
                - "Photograph floors, door frames and garden for pet wear"
                - "Check for pet damage and fix small marks early @recurring(quarterly)"
            - name: Referencing as self-employed or newly arrived
              description: |-
                ## Purpose
                Referencing firms are built for salaried tenants with a long local address history, so freelancers, contractors and people who have just moved country are often refused or asked for months of rent upfront. Assembling the evidence they do accept, and knowing the alternatives, gives you a fair chance at the home you want without overpaying to secure it.

                ## Milestones
                1. Income evidence gathered: accounts or tax returns, bank statements and contracts or an employer letter.
                2. Proof of identity and right to rent ready where required.
                3. Alternatives listed: a paid guarantor service, a relative as guarantor, a larger deposit within legal limits.
                4. An application submitted with a covering note explaining your circumstances.

                ## Notes
                Ask the agent which referencing firm they use and what it accepts before you apply, so a failed application does not cost you a holding deposit.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete referencing pack and a written list of alternatives exist before an application is made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent which referencing firm they use and what it accepts"
                - "Gather twelve months of bank statements and income evidence"
                - "List guarantor and guarantor service options"
                - "Write a short covering note explaining your income"
            - name: Rent paid partly by housing support
              description: |-
                ## Purpose
                If part of the rent comes from a housing benefit or allowance, the payment often arrives on a different date, in arrears, or to you rather than the landlord, and gaps open between what arrives and what is due. Mapping when each part of the rent is paid and by whom, and covering any shortfall on time, keeps the account clear.

                ## Milestones
                1. The amount and payment date of the housing support written down next to the rent due date.
                2. Whether the support goes to you or the landlord confirmed.
                3. Your top-up amount and the date you pay it set up as a standing order.
                4. A check each month that the support arrived and the rent account is clear.

                ## Notes
                Report changes in income or household straight away; overpayments are usually clawed back later. A free benefits adviser can check whether a direct payment to the landlord is possible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written map of who pays which part of the rent and when exists, and the rent account has shown no arrears for three months."
                cadence: rolling
              tasks:
                - "Write down the support amount, date and who it is paid to"
                - "Set up a standing order for your share of the rent"
                - "Check the housing support arrived and the rent is covered @recurring(monthly:12)"
                - "Ask an adviser whether support can be paid to the landlord directly"
            - name: Lodger arrangements in a landlord's home
              description: |-
                ## Purpose
                Renting a room in someone's own home usually gives you fewer rights than an ordinary tenancy: the deposit may not need protecting, notice can be short and rent may include bills. Agreeing the money terms in writing, getting a receipt for the deposit and keeping your own record makes up for some of the protections the law does not give you.

                ## Milestones
                1. A written agreement covering rent, what it includes, the deposit, notice and house rules.
                2. A signed receipt for any deposit, with the conditions for its return.
                3. Dated photos of your room and any furniture supplied.
                4. Rent paid by bank transfer, never cash, and recorded in your ledger.

                ## Notes
                Check what your status actually is with a housing advice service. Some lodger arrangements are in fact tenancies, which changes the deposit rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lodger agreement and a signed deposit receipt are filed, and every rent payment has been made by bank transfer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the householder for a written lodger agreement"
                - "Get a signed receipt for the deposit with return conditions"
                - "Photograph your room and supplied furniture"
                - "Switch any cash rent payment to a bank transfer"
            - name: Rent arrears repayment agreement
              description: |-
                ## Purpose
                If you have fallen behind on rent, the most important step is a realistic repayment agreement in writing, made early, with free housing or debt advice behind it. Landlords usually prefer a plan that clears the arrears steadily over one that promises everything and fails, and a written agreement kept to is strong evidence if the matter ever goes further.

                ## Milestones
                1. The exact arrears figure agreed with the landlord or agent.
                2. A free housing or debt adviser contacted and your budget reviewed.
                3. A repayment offer made in writing, paid on top of the full current rent.
                4. Every repayment made on time and recorded until the arrears are cleared.

                ## Notes
                Start from the **Remediation plan** template. Keep paying the full current rent first; offering a small arrears payment you can sustain is better than a large one you cannot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written repayment agreement exists and the arrears balance on the agent's statement has fallen every month since."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent for a statement showing the exact arrears"
                - "Book a call with a free housing or debt advice service"
                - "Send a written repayment offer on top of the current rent"
                - "Pay the agreed arrears instalment and log it @recurring(monthly:5)"
            - name: Challenging a rent increase through a tribunal
              description: |-
                ## Purpose
                In some places a tenant can refer a rent increase to a tribunal, rent officer or similar body, which decides the market rent for the property. It can work in your favour, but it can also set a rent higher than proposed, and there are strict deadlines. Preparing the case carefully, with advice, decides whether challenging is worth the risk.

                ## Milestones
                1. Whether a review body exists for your tenancy type, and its deadline, confirmed.
                2. Advice taken from a housing adviser on the likely outcome and risks.
                3. Evidence assembled: comparables, condition of the home and repair history.
                4. A decision recorded to apply or not, and if applying, the application sent before the deadline.

                ## Notes
                The body generally sets the market rent for the home as it is, which can be higher than the landlord asked. Take advice before applying.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to challenge, backed by adviser input and comparables, and any application submitted before the deadline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check whether a tribunal or rent officer can review your increase"
                - "Note the deadline for applying and put it in your calendar"
                - "Speak to a housing adviser about the risks of applying"
                - "Assemble comparables and your repair history as evidence"
            - name: Reclaiming an unprotected deposit
              description: |-
                ## Purpose
                Where the law requires a deposit to be protected and the landlord failed to do it, or did it late, tenants can in some places claim it back along with a penalty set by law. It is a serious step that can affect your relationship with the landlord and has time limits, so the work is gathering the facts and getting advice before deciding.

                ## Milestones
                1. Proof that the deposit was paid, and when.
                2. Evidence from the protection schemes that it was not protected, or was protected late.
                3. Advice from a housing adviser or solicitor on the claim and its time limit.
                4. A decision recorded, and if proceeding, a formal letter before action sent.

                ## Notes
                Do not threaten a claim before getting advice. A landlord's late protection can sometimes limit what you can recover, and the rules on time limits are strict.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on making a claim, supported by evidence of payment, scheme search results and written adviser input."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find your bank record of paying the deposit"
                - "Search each protection scheme for your deposit"
                - "Book an appointment with a housing adviser or solicitor"
                - "Record your decision and the time limit you were given"
            - name: Ten-year rent cost history
              description: |-
                ## Purpose
                Renters who have moved several times rarely know what renting has cost them in total, how fast their rent has risen, or what share of income it took in each home. A long-run record of every tenancy, rent and increase shows the real trend, gives you evidence in future negotiations, and feeds any bigger decision about where and how to live.

                ## Milestones
                1. Every past tenancy listed with address, dates, starting rent and each increase.
                2. Total rent paid per year calculated for as far back as records allow.
                3. Average yearly increase worked out and compared with local wage growth.
                4. The history added to each year at the annual review.

                ## Notes
                Start from the **Metrics log** template if you want to chart it. Old statements are often available from your bank on request.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A record of every tenancy and rent change for at least five years, with yearly totals and an average increase, is saved."
                cadence: cyclic
              tasks:
                - "List every address you have rented with move-in and move-out dates"
                - "Add the starting rent and each increase for each tenancy"
                - "Ask the AI agent to turn the history into yearly totals and an average rise"
                - "Add the year's rent and any increase to the history @recurring(yearly)"
---

# Rent Payments & Deposits

This area is for renters who want the money side of a tenancy to be boring in the best way: rent paid on time with a record to prove it, a deposit that is protected and comes back in full, and no surprises when the rent goes up or the tenancy ends. It starts with the foundations (the money terms of your agreement, a payment set-up timed to payday, deposit protection and move-in evidence), then the routines that keep records and the property in deposit-ready shape, the rules worth knowing about deposits, fees and rent increases, the decisions about negotiating, staying or moving, the events from a change of landlord to check-out day, versions for first-time renters, guarantors, joint tenants, pet owners, lodgers and people on housing support, and finally the specialist work of arrears agreements, challenges and long-run rent history.

What repeats is a monthly rent record and buffer top-up, a monthly correspondence file and walk-round for defects, quarterly condition photos, and a yearly review of the rent, the review dates, the agent's rent statement and the deposit's protection. The Savings goal, Operational checklist, Remediation plan and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
