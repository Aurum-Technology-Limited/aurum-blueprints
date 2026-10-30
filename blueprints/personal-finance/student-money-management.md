---
id: personal-finance.student-money-management
name: Student Money Management
description: "A term-by-term income map, a weekly allowance that lasts to the next loan payment, part-time work and support funds organised, and plans for summers, placements and leaving university."
category: personal
version: 1.0.0
tags: [personal-finance, student-money-management, student, maintenance-loan, bursaries, term-budget, part-time-work, hardship-funds]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - savings-goal
    - metrics-log
    - purchase-decision
    - job-application
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Student Money Management
          description: "Managing loans, part-time income, rent and living costs through university terms so money lasts until the next payment."
          projects:
            - name: Term-by-term student income map
              description: |-
                ## Purpose
                Most students know their total loan for the year but not when each part arrives or how long it has to last. A single page showing every source of money, each payment date and the gap until the next one turns a vague annual figure into something you can plan a week around.

                ## Milestones
                1. Every income source listed: loan instalments, grants, bursaries, family help and job pay.
                2. Each payment's expected date and amount written beside it for the whole academic year.
                3. The longest gap between payments identified, usually the run from the spring payment to the autumn one.
                4. Fixed costs such as rent and phone set against each payment so the money left over is visible.

                ## Notes
                Use the dates in your award letter, not the start of term. First payments often arrive a few days after you register, not on day one.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One page lists every income source for the academic year with dates and amounts, and shows rent and fixed costs against each payment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your funding award letter from your student finance account"
                - "List every income source with its expected date and amount"
                - "Add rent and other fixed costs under each payment date"
                - "Mark the longest gap between payments in a different colour"
            - name: Maintenance loan application and payment dates
              description: |-
                ## Purpose
                Late applications are the most common reason a first payment arrives weeks into term, leaving students borrowing from friends to pay rent. Applying early, sending any household income evidence asked for, and confirming that your university has registered you means the first instalment lands when it should.

                ## Milestones
                1. An application submitted before the funding body's recommended date for on-time payment.
                2. Any evidence requested, such as parental income or identity documents, sent and acknowledged.
                3. The award letter checked for the right course, university and year of study.
                4. Registration at the university confirmed so the first instalment is released.

                ## Notes
                If a parent or partner needs to supply income details, give them the deadline in writing. A missing household income form holds up the whole application.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An award letter showing the correct course and university is saved, and the first instalment date is confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the funding body's deadline for payment at the start of term"
                - "Gather passport, bank details and household income details before starting"
                - "Send the parent or partner income form request with a written deadline"
                - "Check the award letter for course, university and year of study"
            - name: Choosing a student bank account
              description: |-
                ## Purpose
                Student accounts differ mainly in the size of the interest-free overdraft, how it is released in stages, and what happens to it after graduation. Comparing three on those points, rather than on the free gift, decides how much a mistake costs you in your final year.

                ## Milestones
                1. Three student accounts compared on overdraft size, staged release and graduate terms.
                2. Proof of student status and address requirements checked for each.
                3. One account opened and its sort code and number given to the funding body.
                4. The overdraft amount you actually agreed to written in your income map.

                ## Notes
                Opening an account involves a credit check, so apply for one, not several. An arranged overdraft is still borrowing that must be repaid.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One student account is open, its details are registered with the funding body and its overdraft terms are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare three student accounts on overdraft size and graduate terms"
                - "Check what proof of student status each bank asks for"
                - "Open the chosen account and confirm the details with the funding body"
                - "Write the overdraft limit and its interest-free end date in your income map"
            - name: Weekly allowance from each loan instalment
              description: |-
                ## Purpose
                Several thousand in an account feels like plenty in week one and runs out by week eight. Taking off rent and fixed costs, then dividing what is left by the number of weeks until the next payment, gives one weekly figure you can spend without guilt or guesswork.

                ## Milestones
                1. Rent, phone, travel passes and course costs taken off the instalment first.
                2. The remainder divided by the number of weeks until the next payment, including holidays.
                3. The weekly amount moved, or scheduled to move, into a separate spending account or pot.
                4. The figure rechecked after the first month against what you actually spent.

                ## Notes
                Start from the **Monthly budget and bills** template and change the period to weeks. Count holiday weeks too; rent and food do not stop at the end of term.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly spending figure exists for the current instalment, and that amount moves to a separate pot each week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Subtract rent and fixed costs from the next instalment amount"
                - "Count the weeks until the following payment, holidays included"
                - "Divide the remainder to find your weekly allowance"
                - "Set up a weekly standing order into a separate spending pot"
            - name: Year's course costs forecast
              description: |-
                ## Purpose
                Field trips, lab kit, art materials, printing credits and core textbooks can add several hundred to a year, and they tend to fall in the first few weeks of term. Asking your department for the expected costs up front lets you set the money aside before the allowance is worked out.

                ## Milestones
                1. The department's list of required costs for the year obtained or confirmed.
                2. Each cost listed with the month it is due.
                3. Costs that the department or a hardship fund will subsidise identified.
                4. The total built into the income map before the weekly allowance is set.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated list of the year's course costs is in the income map, with any subsidies noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email your course administrator asking for the year's expected extra costs"
                - "Ask second-year students which costs surprised them"
                - "List each cost with the month it falls due"
                - "Add the total to your income map before setting the weekly allowance"
            - name: Bursary, scholarship and grant search
              description: |-
                ## Purpose
                Universities, charities, employers and professional bodies give money that many eligible students never claim, often because the deadline is early or the scheme sounds too narrow. A methodical search against your own circumstances, such as household income, subject, home area or caring role, turns up awards that do not need repaying.

                ## Milestones
                1. Your university's bursary and scholarship pages read in full, with criteria matched to your situation.
                2. At least two external sources checked, such as a charity grants search or your professional body.
                3. A list of awards you qualify for, with deadlines and the evidence each needs.
                4. Applications submitted for every award on the list before its deadline.

                ## Notes
                Some university bursaries are paid automatically once you share household income with the funding body, so check that consent box on your loan application.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A list of awards you qualify for exists with deadlines, and an application has been sent for each one before its deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your university's bursary and scholarship pages against your circumstances"
                - "Search an educational charity grants directory using your subject and home area"
                - "Ask the agent to draft a personal statement you can adapt for each application"
                - "Check for new bursary and scholarship rounds at the start of each academic year @recurring(yearly)"
            - name: Student finance documents and logins folder
              description: |-
                ## Purpose
                Award letters, tenancy agreements, enrolment confirmations and bank letters are needed at awkward moments, often when applying for something else in a hurry. One folder, paper or digital, with the logins stored in a password manager, saves hours each year and stops payments stalling over a missing document.

                ## Milestones
                1. A folder holding award letters, tenancy agreement, enrolment proof and bank account details.
                2. Logins for the funding body, university portal and bank saved in a password manager.
                3. Your customer reference numbers written on one page at the front.
                4. A copy of the folder stored somewhere other than your laptop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds every current award letter, tenancy and enrolment document, with reference numbers on its front page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder called student money in your cloud storage"
                - "Save award letters, tenancy and enrolment confirmation into it"
                - "Store funding body, university and bank logins in a password manager"
                - "Add the new year's award letter and tenancy to the folder @recurring(yearly)"
            - name: Student ID, railcard and discount set-up
              description: |-
                ## Purpose
                One student discount card, a young person's or student railcard and the discounts that come with your university email can save more each year than they cost within a few uses. Setting them up in the first fortnight means the savings start with the first train home and the first textbook order.

                ## Milestones
                1. Your university ID card collected and your student email activated.
                2. A railcard or local transport student pass bought if you travel more than a few times a year.
                3. The two or three discount schemes that cover shops you already use signed up to.
                4. Expiry dates for each card written in your calendar.

                ## Notes
                Discounts only save money on things you were going to buy anyway. Unsubscribe from the marketing emails that come with them.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your student ID, a travel discount card and no more than three discount schemes are active, with expiry dates in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Collect your university ID card and activate your student email"
                - "Work out whether a railcard pays for itself on your trips home"
                - "Sign up to discount schemes only for shops you already use"
                - "Renew the railcard and discount cards before they expire @recurring(yearly)"
            - name: Belongings cover in halls or a shared house
              description: |-
                ## Purpose
                Laptops, phones and bikes are stolen from student housing every term, and replacing a laptop mid-year can wipe out a month's allowance. Checking whether your halls include contents cover, whether a family home policy extends to you, or whether you need a policy of your own, closes the gap before it matters.

                ## Milestones
                1. Your halls or tenancy paperwork checked for included contents cover and its limits.
                2. Any family home insurance checked for cover of a student living away.
                3. The value of your laptop, phone and other valuables listed.
                4. Cover in place that includes items taken out of the house, or a decision recorded not to buy it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note states which policy covers your belongings, its limit per item, and whether it covers items outside the house."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your halls or tenancy paperwork for included contents cover"
                - "Ask whoever holds the family home insurance whether it extends to you"
                - "List your laptop, phone, bike and other valuables with replacement costs"
                - "Recheck belongings cover before each new tenancy starts @recurring(yearly)"
            - name: Sunday student money check-in
              description: |-
                ## Purpose
                Five minutes each Sunday comparing your balance with your weekly allowance catches an overspend while it is still a few pounds, not a month's food money. Kept up, it is the single habit that most often decides whether the instalment lasts.

                ## Milestones
                1. A fixed time each Sunday set for a five-minute balance check.
                2. Each week's spending compared with the weekly allowance and the difference noted.
                3. Any overspend carried into the next week's figure rather than ignored.
                4. Eight consecutive weekly check-ins completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly check-ins are recorded, each with the week's spend against the allowance."
                cadence: rolling
              tasks:
                - "Choose a Sunday time and set a reminder on your phone"
                - "Note this week's spend against the weekly allowance @recurring(weekly:sun)"
                - "Adjust next week's figure if this week ran over"
                - "Look for the category behind any overspend and write it down"
            - name: Loan instalment day routine
              description: |-
                ## Purpose
                Instalment day is when money is most likely to disappear on a celebration, a shopping trip or an overdue bill nobody planned for. A fixed routine for that day, paying rent first, refilling the buffer and setting the weekly transfers, protects the term's money in the first hour.

                ## Milestones
                1. A written list of what happens on payment day, in order.
                2. Rent or the next accommodation instalment paid the day the money arrives.
                3. The weekly spending transfers for the coming term scheduled.
                4. The routine followed for one full academic year of instalments.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On each instalment day of the year, rent is paid and weekly transfers are scheduled within 24 hours, recorded in the income map."
                cadence: cyclic
              tasks:
                - "Write the payment-day list in the order rent, buffer, weekly transfers"
                - "Pay rent or the accommodation instalment on the day the loan arrives"
                - "Schedule this term's weekly transfers into the spending pot"
                - "Tick the instalment off in the income map once the routine is done"
            - name: Shared-kitchen food budget and batch cooking
              description: |-
                ## Purpose
                Food is usually the biggest flexible cost after rent, and in a shared kitchen with one fridge shelf it drifts towards takeaways and meal deals. A weekly food budget, a short shopping list and two batch-cooked meals in the freezer drawer cut the bill without living on toast.

                ## Milestones
                1. A weekly food budget set as part of the weekly allowance.
                2. Five cheap meals you can cook from the shared kitchen written down.
                3. Two batch-cooked meals frozen in portions most weeks.
                4. Four weeks of food spending kept within budget.

                ## Notes
                Shopping with one or two flatmates for staples such as rice, oil and tins cuts the cost per portion without needing a full shared kitty.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly food spending stays within the set budget for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Set a weekly food budget inside your weekly allowance"
                - "Write down five cheap meals you can cook in the shared kitchen"
                - "Plan the week's meals and shopping list before the shop @recurring(weekly:sat)"
                - "Batch cook and freeze two meals in portions"
            - name: Part-time job hours and payslip tracker
              description: |-
                ## Purpose
                Student jobs with variable shifts make it easy to be paid for fewer hours than you worked, taxed on the wrong code, or pushed past the hours your course or visa allows. Logging shifts and checking each payslip against them keeps the pay right and the workload safe for your studies.

                ## Milestones
                1. A log with date, hours, rate and expected pay for every shift.
                2. Each payslip checked against the log and any gap raised with the employer.
                3. Your tax code checked on the first payslip and corrected if it is an emergency code.
                4. Weekly hours kept within your own study limit and any visa limit.

                ## Notes
                Start from the **Metrics log** template. Many universities suggest no more than about 15 hours a week of term-time work for full-time students.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive payslips match the shift log, and term-time weekly hours stay within your set limit."
                cadence: rolling
              tasks:
                - "Set up a shift log with date, hours, rate and expected pay"
                - "Record this week's shifts and total hours @recurring(weekly:thu)"
                - "Check the payslip against your shift log on payday @recurring(monthly:28)"
                - "Raise any underpayment with your manager in writing"
            - name: Student overdraft use tracker
              description: |-
                ## Purpose
                An interest-free student overdraft is useful in a gap between payments, but it quietly becomes the default balance and is still owed after graduation. A monthly note of how much is used, and why, keeps it as a bridge rather than a second income.

                ## Milestones
                1. The overdraft limit and the date the interest-free period ends recorded.
                2. Each month's lowest balance written down.
                3. A rule agreed with yourself for when the overdraft may be used.
                4. The overdraft back to zero, or a falling trend, by the end of the academic year.

                ## Notes
                Going past an arranged limit can bring fees and returned payments. If you are close, contact the bank before it happens, not after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record of the lowest balance exists for the year, and the overdraft is at zero or falling at the end of the academic year."
                cadence: rolling
              tasks:
                - "Write down the overdraft limit and when the interest-free period ends"
                - "Record the month's lowest balance and the reason for it @recurring(monthly:3)"
                - "Write one sentence on when you will allow yourself to use the overdraft"
                - "Ask the bank about the graduate overdraft terms in your final year"
            - name: End-of-term money review
              description: |-
                ## Purpose
                Each term's end is a natural pause to see whether the instalment lasted, what went over and what the next term needs to change. Half an hour then is worth more than any amount of good intentions on payment day.

                ## Milestones
                1. The term's total spend compared with the money available at its start.
                2. The two biggest overspends named and their cause noted.
                3. One change chosen for the next term, such as a lower social cap or a cheaper phone plan.
                4. The next term's weekly allowance recalculated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A short written review exists for each term of the year, naming one change carried into the next term."
                cadence: cyclic
              tasks:
                - "Total the term's spending from your bank app"
                - "Name the two categories that went furthest over"
                - "Choose one change to make next term and write it down"
                - "Recalculate the weekly allowance for the next term @recurring(quarterly)"
            - name: Travel home tickets booked in advance
              description: |-
                ## Purpose
                Trips home at the end of term, reading week and Christmas are predictable, yet many students buy tickets on the day at several times the advance price. Booking as soon as cheap fares are released, with a railcard or coach discount, keeps travel inside the budget.

                ## Milestones
                1. Every planned trip home for the year listed with likely dates.
                2. The date advance fares are usually released for your route noted.
                3. Tickets booked at least four weeks ahead for the main trips.
                4. Travel spending for the year totalled and compared with walk-up prices.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main trips home for the year are booked at least four weeks ahead, and the saving against walk-up fares is recorded."
                cadence: cyclic
              tasks:
                - "List the trips home you expect to make this year"
                - "Find out when advance fares are released on your usual route"
                - "Check fares for the next trip home and book once cheap tickets appear @recurring(quarterly)"
                - "Compare coach and lift-share prices with the train for one trip"
            - name: One-month-rent student buffer
              description: |-
                ## Purpose
                A broken laptop, a late payment or an emergency trip home is what usually pushes students into high-cost borrowing. Building a small buffer, roughly one month's rent, kept in a separate pot you do not see every day, absorbs those shocks while you are studying.

                ## Milestones
                1. A buffer target set, such as one month's rent.
                2. A separate savings pot opened and named.
                3. A fixed amount moving into it each month, from job pay or the instalment.
                4. The target reached and refilled after any use.

                ## Notes
                Start from the **Savings goal** template. Even a small amount each month adds up over a year of study.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate pot holds a balance equal to one month's rent, refilled within two months of any withdrawal."
                cadence: rolling
              tasks:
                - "Decide your buffer target and write it down"
                - "Open a separate savings pot and name it buffer"
                - "Move a fixed amount into the buffer pot @recurring(monthly:7)"
                - "Write down what counts as a real emergency for the buffer"
            - name: Nights out and social spending cap
              description: |-
                ## Purpose
                Pre-drinks, taxis, society socials and birthday meals are where student budgets most often slip, because each one feels small. A fixed weekly social amount in its own pot makes it easy to say yes to the things you care about and no to the rest.

                ## Milestones
                1. A weekly social spending cap chosen as part of the allowance.
                2. A separate pot or card used only for social spending.
                3. Free or cheap alternatives noted for the weeks the pot runs low.
                4. Six weeks with social spending inside the cap.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Social spending stays inside the weekly cap for six consecutive weeks, shown by the separate pot's history."
                cadence: rolling
              tasks:
                - "Choose a weekly social cap that fits your allowance"
                - "Move the week's social money into its own pot @recurring(weekly:fri)"
                - "List free events from the students' union and your societies"
                - "Agree a split for taxis and rounds with friends before going out"
            - name: Yearly student finance reapplication
              description: |-
                ## Purpose
                In most systems funding is not renewed automatically: each year needs a new application, often with updated household income. Reapplying as soon as the window opens means the autumn payment arrives on time and gaps between years do not open up.

                ## Milestones
                1. The date applications open for the next academic year noted.
                2. The application submitted in the first month of the window.
                3. Updated household income evidence sent if requested.
                4. The new award letter checked and saved in the documents folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Next year's application is submitted within a month of the window opening and the award letter is saved."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Find out when applications for next year open"
                - "Submit next year's funding application in the first month of the window @recurring(yearly)"
                - "Ask your household for updated income details if needed"
                - "Compare the new award letter with this year's amounts"
            - name: How household income sets your loan
              description: |-
                ## Purpose
                Maintenance support is often means-tested on household income, which surprises students whose parents earn a middle income but contribute little. Understanding how the assessment works, who counts as household and what evidence is used makes it easier to plan and to spot a wrong award.

                ## Milestones
                1. The income bands and maximum amounts for your funding system written down.
                2. Who counts in your household for the assessment, and which tax year is used, understood.
                3. The expected parental or partner contribution worked out from your award.
                4. A conversation held with your household about whether that contribution will be paid.

                ## Notes
                If a household member's income has fallen by a large amount, many systems allow a current-year reassessment. See the reassessment project in this area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains your income band, which household income was used, and the contribution your family is expected to make."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the funding body's guide to household income assessment"
                - "Note which tax year and whose income was used for your award"
                - "Work out the gap between maximum support and your award"
                - "Talk with your household about the expected contribution"
            - name: Tax on student wages and emergency tax refunds
              description: |-
                ## Purpose
                Students on a new job are often put on an emergency tax code and taxed on earnings that would be below the personal allowance. Knowing how your tax code works and how to claim back overpaid tax after a summer or holiday job returns money that is yours.

                ## Milestones
                1. Your tax code found on your latest payslip and its meaning understood.
                2. Total earnings for the tax year compared with the personal allowance.
                3. Any overpaid tax identified and a refund claimed from the tax authority.
                4. Payslips and end-of-year statements stored in the documents folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your tax code is confirmed correct with the tax authority, and any overpayment for the last tax year is claimed back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your tax code on your latest payslip and look up what it means"
                - "Set up an online account with the tax authority"
                - "Add up the year's earnings and compare them with the personal allowance"
                - "Check your tax position after each summer or holiday job @recurring(yearly)"
            - name: Student money mule and scam warning signs
              description: |-
                ## Purpose
                Students are targeted by offers to earn quick cash by letting someone use their bank account, by fake rental listings and by messages claiming to be from the funding body. Knowing the signs protects your account, your loan and your future ability to bank.

                ## Milestones
                1. The common student scams written down: account-use offers, fake lets, fake funding body messages.
                2. Your funding body's official contact methods saved.
                3. A rule set: never pay a holding deposit before seeing a property or verifying the landlord.
                4. Your bank's fraud number saved in your phone.

                ## Notes
                Letting someone move money through your account is a crime even if you are told it is a job. Report any approach to your bank and the university.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short list of student scams and the official contact details for your funding body and bank are saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your university's guidance on scams targeting students"
                - "Save the funding body's official contact details in your phone"
                - "Save your bank's fraud number under a clear name"
                - "Tell your flatmates about the account-use offers circulating"
            - name: Building a credit history safely at university
              description: |-
                ## Purpose
                Graduates who have never had a bill or credit agreement in their name can struggle to rent or get a phone contract later. A few small, controlled steps while studying, such as being on the electoral roll at your term address and paying a phone bill on time, build a record without taking on debt you do not need.

                ## Milestones
                1. Your registration to vote at your term address confirmed, where the system allows it.
                2. Your free credit report checked once for errors.
                3. At least one regular bill in your name paid on time each month.
                4. A written rule against store cards and payday loans.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your credit report has been checked once this year and shows at least one account in your name paid on time."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Register to vote at your term address if your country allows it"
                - "Check your free credit report for errors"
                - "Put one small regular bill in your name and pay it by direct debit"
                - "Write down which kinds of borrowing you will not use as a student"
            - name: Reading a student let for hidden costs
              description: |-
                ## Purpose
                Student house contracts often hide costs in the small print: a summer retainer, a guarantor requirement, joint liability for the whole rent, or bills capped at a fair-use limit. Reading the contract before signing, with the students' union's free checking service if there is one, avoids the clauses that cost most.

                ## Milestones
                1. The contract's length, total rent and payment dates written on one page.
                2. Guarantor, joint liability and summer retainer clauses identified.
                3. Any bills-included cap or fair-use limit noted.
                4. Questions raised with the landlord or agent in writing before signing.

                ## Notes
                Most students' unions offer a free contract check. Use it before signing, not after a dispute starts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the contract's cost clauses exists and the students' union check is done before signing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the letting agent for the contract a week before signing"
                - "Book the students' union contract check"
                - "List the total rent, payment dates and any summer retainer on one page"
                - "Email the landlord any questions about bill caps and joint liability"
            - name: Free and discounted campus resources map
              description: |-
                ## Purpose
                Universities pay for software licences, library loans, gym access, careers advice, printing allowances and counselling that students then buy elsewhere. A short map of what is free or cheap on your campus stops you paying twice.

                ## Milestones
                1. Software available free through the university listed.
                2. Library, interlibrary loan and e-book access set up.
                3. Campus sports, printing and careers services listed with costs.
                4. Any paid subscription replaced by a free campus version cancelled.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page map of free campus resources exists and at least one paid service has been replaced by a free one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the IT service's page for free software licences"
                - "Set up library and e-book access with your student login"
                - "List campus gym, printing and careers services with their costs"
                - "Cancel any paid service the university provides for free"
            - name: Second-year housing cost comparison
              description: |-
                ## Purpose
                House hunting for second year often starts within weeks of arriving, before students know who they want to live with or what they can afford. Comparing private houses, halls and purpose-built blocks on total yearly cost, including bills and summer months, avoids signing up in a rush.

                ## Milestones
                1. Three options listed with weekly rent, contract length and what bills are included.
                2. Total yearly cost worked out for each, including any summer months and travel.
                3. Contract terms checked against the reading-the-let project.
                4. One option chosen and the reasons written down.

                ## Notes
                In many university towns there is more student housing than students. Waiting until you are sure of your housemates rarely leaves you homeless.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three housing options are compared on total yearly cost, and the choice with its reasons is written down before signing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the university accommodation office when most students sign"
                - "Shortlist three options with rent, contract length and bills"
                - "Work out the total yearly cost of each including summer and travel"
                - "Write down the choice and why before signing anything"
            - name: Living at home versus moving out cost comparison
              description: |-
                ## Purpose
                Commuting from the family home can cut costs sharply, but travel time, train fares and a lower loan rate for students living at home can narrow the gap. Working out both on a yearly basis lets you decide on numbers and time, not only on assumptions.

                ## Milestones
                1. Yearly loan amount for living at home and living away both looked up.
                2. Rent, bills, food and travel costed for each option.
                3. Weekly commuting hours estimated and set against study and work time.
                4. A decision recorded, with any contribution to the family home agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of yearly costs and commuting time for both options exists, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the loan amount for living at home and living away"
                - "Cost rent, bills, food and travel for each option for a year"
                - "Time a test commute at rush hour"
                - "Agree with your family what you will contribute if you live at home"
            - name: Laptop and study kit purchase decision
              description: |-
                ## Purpose
                A laptop is often the largest single purchase of a student's first year, and buying the most powerful model is rarely needed unless the course demands it. Checking the department's minimum specification, education pricing and refurbished options gives a machine that lasts the course at a sensible price.

                ## Milestones
                1. Your department's minimum specification for the course found.
                2. Three options compared, including at least one refurbished or education-priced model.
                3. Warranty and insurance cover for each noted.
                4. A laptop bought within the budget set before shopping.

                ## Notes
                Start from the **Purchase decision** template. Some universities run laptop loan or grant schemes for students on lower incomes, so ask before buying.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A laptop meeting the department's minimum specification is bought within a budget written down before shopping."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your department for the minimum laptop specification"
                - "Check whether the university runs a laptop loan or grant scheme"
                - "Compare three models including one refurbished option"
                - "Set a budget before visiting any shop or website"
            - name: Cutting textbook and course material costs
              description: |-
                ## Purpose
                Reading lists often name new editions that cost a great deal, while most titles are in the library, available as e-books, or sold on by last year's students. Checking each title before buying keeps course material spending to the books you will really use.

                ## Milestones
                1. This term's reading list checked against the library and e-book catalogue.
                2. Books you must own separated from those you only need to read once.
                3. Secondhand copies or older editions bought where the lecturer allows them.
                4. Last year's books sold or passed on.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "This term's reading list is checked title by title, and spending on course books is recorded and lower than buying everything new."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check each reading list title in the library and e-book catalogue"
                - "Ask the lecturer whether an older edition is acceptable"
                - "Look for copies from students in the year above"
                - "List last year's books for sale at the start of term"
            - name: Finding term-time work that fits your timetable
              description: |-
                ## Purpose
                The right student job pays on time, fits around lectures and does not push study into the small hours. Campus jobs, flexible agency work and roles in the students' union usually fit term life better than shift work with late finishes.

                ## Milestones
                1. Your available hours each week worked out from your timetable.
                2. A maximum number of weekly work hours set.
                3. At least three applications sent to roles that fit those hours.
                4. A job accepted with hours and pay rate confirmed in writing.

                ## Notes
                Start from the **Job application** template. Check the university job shop first; its employers expect exam and deadline periods.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A part-time job with written hours and pay rate fits within your weekly hour limit."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark your free hours on this term's timetable"
                - "Set a maximum number of weekly work hours"
                - "Check the university job shop and students' union vacancies"
                - "Send three applications for roles that fit those hours"
            - name: Catered or self-catered halls decision
              description: |-
                ## Purpose
                Catered halls look expensive until you add up a year of food shopping, but meal times, missed meals and weekend gaps change the sums. Comparing both on cost per meal actually eaten, for your timetable and appetite, gives a clearer answer than headline rent.

                ## Milestones
                1. Weekly rent for catered and self-catered options listed.
                2. Meals per week included, and which are likely to be missed, estimated.
                3. A weekly food budget for self-catering set beside the catered premium.
                4. A choice made and recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows cost per meal eaten for both options, and the halls choice is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the weekly rent of catered and self-catered rooms"
                - "Check meal times against your likely timetable"
                - "Estimate a weekly food budget if self-catering"
                - "Work out the cost per meal eaten for each option"
            - name: Moving-in costs before the first term
              description: |-
                ## Purpose
                Bedding, kitchen kit, a first food shop, deposits and travel to university can cost several hundred before the first instalment arrives. Listing and spreading these costs over the summer avoids starting term already in the overdraft.

                ## Milestones
                1. A list of everything needed for the room and kitchen, checked against what halls provide.
                2. Items borrowed or bought secondhand where possible.
                3. Deposit and first rent dates confirmed and money set aside.
                4. Total moving-in spending recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All moving-in costs are listed, paid or set aside before the move date, without using the overdraft."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check what your halls or house already provides"
                - "List the room and kitchen items you still need"
                - "Ask family and friends for spare kitchen kit and bedding"
                - "Set aside the deposit and first rent before shopping for extras"
            - name: Freshers week spending plan
              description: |-
                ## Purpose
                Freshers week packs wristbands, society fees, nights out and takeaways into the days before the weekly routine settles, and it is easy to spend a month's allowance. A set amount for the week, with priorities chosen in advance, lets you join in without regret.

                ## Milestones
                1. A total spending limit for freshers week set.
                2. The two or three societies you most want to join chosen, with their fees.
                3. Free freshers events listed alongside the paid ones.
                4. The week's spending totalled against the limit.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Freshers week spending is totalled and stays within the limit set before the week began."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a total spending limit for freshers week"
                - "Pick the societies you most want to join and note their fees"
                - "List the free events on the freshers programme"
                - "Total the week's spending on the last day"
            - name: Money advice appointment with student support
              description: |-
                ## Purpose
                University money advisers know the local bursaries, hardship funds and payment plans better than any website, and an appointment is free. Going with your income map and questions ready, before a crisis, gets the most from half an hour.

                ## Milestones
                1. An appointment booked with the university or students' union money adviser.
                2. Your income map, award letter and bank statements brought along.
                3. A list of the support and schemes suggested written down.
                4. The follow-up actions agreed and given dates.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A money advice appointment has taken place and its suggested follow-up actions are listed with dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a money advice appointment through student services"
                - "Write down three questions about your own situation"
                - "Bring your income map, award letter and recent statements"
                - "Put each follow-up action from the meeting into your calendar"
            - name: Summer vacation money plan
              description: |-
                ## Purpose
                The longest gap between payments is usually the summer, when the last instalment has to cover rent on a twelve-month contract, food and travel until autumn. Planning the summer by spring, with a job, a lower-cost living arrangement or savings set aside, stops the overdraft filling up when there is no loan coming.

                ## Milestones
                1. Summer costs listed, including any rent on your term address.
                2. Expected summer income from work or family written down.
                3. Any gap between the two closed with a job, a sublet where the contract allows it, or savings.
                4. The overdraft balance at the start of autumn no higher than at the end of the summer term.

                ## Notes
                Some funding systems pay a long-course or extra-weeks allowance for courses that run into the summer. Check your award letter.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written summer plan shows costs, income and how any gap is closed, and the overdraft is no higher in autumn than at the end of the summer term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every summer cost including rent on your term address"
                - "Write down expected summer income from work and family"
                - "Apply for summer jobs before the end of the spring term"
                - "Start next summer's plan as soon as the spring instalment arrives @recurring(yearly)"
            - name: Graduation day costs
              description: |-
                ## Purpose
                Gown hire, extra guest tickets, photographs, family travel and a celebration meal can add up to a surprising amount at a time when the last loan payment is long gone. Deciding in advance what you will and will not pay for keeps the day memorable without starting graduate life in debt.

                ## Milestones
                1. The costs of gown hire, guest tickets and photographs found.
                2. Family members asked who will pay for their own travel and accommodation.
                3. Optional extras chosen or declined in advance.
                4. Total graduation spending recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Graduation costs are agreed with family in advance and total spending is recorded after the day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up gown hire, guest ticket and photograph prices"
                - "Agree with family who pays for their travel and accommodation"
                - "Decide which optional extras you will skip"
                - "Record total graduation spending afterwards"
            - name: Final term money wind-down
              description: |-
                ## Purpose
                The last term brings the final loan instalment, the end of the tenancy, the switch from a student to a graduate account and the start of a job hunt, all at once. Working through them in order means the deposit comes back, the overdraft has a repayment plan and nothing auto-renews at a student address.

                ## Milestones
                1. The date of the final instalment and the end of the tenancy noted.
                2. A plan to get the deposit back, including an end-of-tenancy clean and inventory check.
                3. The graduate overdraft terms checked and a plan set to clear it before fees begin.
                4. Student-only subscriptions, discounts and memberships cancelled or switched.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The deposit is returned, the student account is converted with a written overdraft repayment plan, and student subscriptions are cancelled."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Note the final instalment date and the tenancy end date"
                - "Book an inventory check and plan the end-of-tenancy clean"
                - "Read your bank's graduate overdraft terms and fee start date"
                - "Cancel or switch student-only subscriptions and discounts"
            - name: International student money set-up
              description: |-
                ## Purpose
                International students face fee instalments, currency exchange costs, proof-of-funds rules and limits on term-time work, often without access to local loans. Setting up how money moves from home, when fees are due and how many hours you may legally work protects both your budget and your visa.

                ## Milestones
                1. Fee instalment dates and amounts confirmed with the university.
                2. A low-cost way to transfer money from home chosen and tested with a small amount.
                3. The term-time work hour limit on your visa written down.
                4. A local bank account opened and linked to your budget.

                ## Notes
                Breaking visa work limits can end your studies. If unsure, ask the university's international student advisers rather than an employer.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fee dates, a tested transfer route, a local account and your visa work limit are all recorded on one page."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Confirm fee instalment dates and amounts with the finance office"
                - "Compare transfer fees and exchange rates on two money transfer services"
                - "Send a small test transfer before the first fee payment"
                - "Write your visa's term-time work hour limit at the top of your budget"
            - name: Mature student with household bills
              description: |-
                ## Purpose
                Mature students often carry a mortgage or rent, family costs and existing debts that a student loan was never designed to cover. Mapping household outgoings against student funding, any adult learner grants and part-time income shows early whether the course is affordable as planned.

                ## Milestones
                1. Household outgoings listed in full alongside student funding.
                2. Adult learner, dependants and other mature student grants checked.
                3. The monthly gap or surplus worked out.
                4. A plan agreed with your partner or household for any gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly household budget combining student funding and household bills exists, with any gap and the plan to close it written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every household outgoing beside your student funding"
                - "Check the funding body's grants for adult learners and dependants"
                - "Work out the monthly gap or surplus"
                - "Agree with your household how any shortfall will be met"
            - name: Student parent childcare and grant support
              description: |-
                ## Purpose
                Studying with children brings childcare costs that do not stop for reading week, and many student parents are unaware of the specific grants and university nursery places available to them. Finding and claiming that support early can decide whether the course is manageable.

                ## Milestones
                1. Childcare grants and dependants' allowances from the funding body checked.
                2. University nursery places and fee reductions asked about.
                3. Applications sent for every scheme you qualify for.
                4. Childcare costs and support built into the weekly allowance.

                ## Notes
                Some general childcare support schemes and student childcare grants cannot both be claimed at once. Check before applying for both.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every childcare grant and allowance you qualify for has been applied for, and the support is included in your weekly budget."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the funding body's pages on childcare grants and dependants' allowances"
                - "Ask the university nursery about places and fee reductions"
                - "Apply for each scheme you qualify for"
                - "Confirm the childcare grant claim for the new academic year @recurring(yearly)"
            - name: Disabled students' allowance and extra costs
              description: |-
                ## Purpose
                Disability-related study costs, such as specialist equipment, software, note-takers or extra travel, can be funded separately from the main loan in many systems. Applying early, with the right evidence and a needs assessment, means support is in place before coursework deadlines arrive.

                ## Milestones
                1. The funding body's disabled students' support scheme and its evidence rules checked.
                2. Medical or diagnostic evidence gathered.
                3. A needs assessment attended and its recommendations received.
                4. Equipment and support in place, with any contribution you must make recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A needs assessment has been completed and the recommended support is in place, with any personal contribution recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the funding body's guide to disabled students' support"
                - "Ask your doctor or specialist for the evidence the scheme requires"
                - "Contact the university disability service about the application"
                - "Book the needs assessment once the application is accepted"
            - name: Estranged students and care leavers support
              description: |-
                ## Purpose
                Students without family support can often be assessed as independent, receive the maximum loan and qualify for care leaver bursaries and year-round accommodation. Getting the right evidence to the funding body and the university's named contact opens up support that many go without.

                ## Milestones
                1. The funding body's rules for independent status read.
                2. Evidence from a professional, such as a social worker or teacher, obtained.
                3. The university's named contact for estranged students or care leavers met.
                4. Year-round accommodation and specific bursaries applied for.

                ## Notes
                Charities that support estranged students can help with the evidence letter and with what to say to the funding body.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your funding application is assessed as independent, and the university's estranged or care leaver support is applied for."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the funding body's guidance on independent student status"
                - "Ask a social worker, teacher or doctor for a supporting letter"
                - "Contact the university's named contact for estranged students or care leavers"
                - "Apply for year-round accommodation and specific bursaries"
            - name: Placement year finances
              description: |-
                ## Purpose
                A placement or sandwich year often means a reduced loan, a salary, tax and possibly a move to a new city with a second deposit. Planning the year's income and costs before accepting an offer shows whether a lower-paid placement is affordable and what the year can set aside.

                ## Milestones
                1. The reduced loan for a placement year and any tuition fee reduction confirmed.
                2. Placement salary after tax worked out.
                3. Rent, deposit and travel in the placement city costed.
                4. A plan for any surplus, such as the buffer or the final year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written placement year budget shows loan, salary after tax and placement city costs, with any surplus allocated."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the placement year loan and fee amounts with the funding body"
                - "Work out the placement salary after tax"
                - "Cost rent, deposit and travel in the placement city"
                - "Set aside part of each placement payslip for final year @recurring(monthly:25)"
            - name: Study abroad or exchange year budget
              description: |-
                ## Purpose
                An exchange or year abroad brings flights, visas, a foreign bank account, insurance and a cost of living that can be very different from home. Most funding systems and universities offer travel grants or mobility funding, but they must be claimed before departure.

                ## Milestones
                1. Living costs in the host city researched and listed.
                2. Travel grants, mobility funding and university awards applied for.
                3. Visa, insurance and flight costs set aside.
                4. A way to access money abroad without high card fees set up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A year-abroad budget with host city costs, confirmed grants and travel costs exists before departure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Research rent, food and transport costs in the host city"
                - "Ask the study abroad office which travel grants you can claim"
                - "Set aside visa, insurance and flight costs"
                - "Compare card fees for spending abroad and pick one card to use"
            - name: Parents agreeing a student allowance
              description: |-
                ## Purpose
                Families who contribute to a student's costs often do so in irregular top-ups that leave both sides unsure what is expected. Agreeing a fixed amount, its timing and what it covers, ideally in line with the household contribution the funding assessment assumes, removes awkward phone calls.

                ## Milestones
                1. The expected household contribution from the funding award understood by both sides.
                2. A fixed amount, frequency and purpose agreed.
                3. A standing order set up to the student's account.
                4. The arrangement reviewed once a year when the new award letter arrives.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written family agreement states the allowance amount, frequency and what it covers, and a standing order is in place."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Share the award letter's expected household contribution with your family"
                - "Agree an amount, frequency and what it covers"
                - "Set up the agreed standing order @recurring(monthly:1)"
                - "Review the agreement when the new award letter arrives"
            - name: University hardship fund application
              description: |-
                ## Purpose
                When money runs out mid-term, a university hardship fund can give a grant or short-term loan, but applications need bank statements and a clear explanation. Applying as soon as a shortfall is visible, rather than after rent is missed, gives the best chance of help in time.

                ## Milestones
                1. The hardship fund's criteria and evidence list read.
                2. Three months of bank statements and your income map gathered.
                3. A written statement of the shortfall and its cause prepared.
                4. The application submitted and a decision received.

                ## Notes
                Hardship funds expect to see that you have claimed your full loan and any bursaries. Speak to the money adviser if anything is missing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A hardship fund application with statements and a written explanation is submitted, and the decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the hardship fund's criteria and evidence list"
                - "Download three months of bank statements"
                - "Ask the agent to draft a clear statement of the shortfall and its cause"
                - "Submit the application and note the expected decision date"
            - name: Mid-year reassessment after a household income drop
              description: |-
                ## Purpose
                If a parent loses a job or a household's income falls sharply, many funding systems let the student ask for a reassessment based on current-year income. A successful request can raise the loan for the rest of the year, but it needs an estimate of the new income and evidence later.

                ## Milestones
                1. The rules for current-year income reassessment checked.
                2. An estimate of this year's household income prepared with your family.
                3. The reassessment request submitted with supporting evidence.
                4. The revised award and payment schedule added to the income map.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reassessment request is submitted with an income estimate, and the revised award is recorded in the income map."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the funding body's rules on current-year income reassessment"
                - "Estimate this year's household income with your family"
                - "Submit the reassessment form with supporting evidence"
                - "Add the revised award and payment dates to the income map"
            - name: Repeating a year, changing course or suspending studies
              description: |-
                ## Purpose
                Repeating a year, switching course or taking time out can affect how many years of funding remain, whether loan payments stop and whether an overpayment must be repaid. Checking the funding consequences before deciding avoids a debt or a funding shortfall in the final year.

                ## Milestones
                1. The funding rules on previous study and remaining years of support read.
                2. The university's finance and student support teams asked about your situation.
                3. The effect on loan payments and any overpayment written down.
                4. The decision made with the funding consequences known.

                ## Notes
                Tell the funding body promptly if you suspend or withdraw. Payments made after you stop attending are usually reclaimed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records how the change affects remaining funding years and loan payments, before the decision is made."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the funding body's rules on previous study"
                - "Book a meeting with student support about your options"
                - "Write down the effect on loan payments and remaining funding years"
                - "Notify the funding body as soon as a change is confirmed"
            - name: Postgraduate funding plan
              description: |-
                ## Purpose
                Master's and doctoral study is funded very differently from undergraduate study: separate loans, studentships with stipends, departmental scholarships and employer sponsorship, many with deadlines a year ahead. Mapping the options early shows whether the course is affordable and which applications to prioritise.

                ## Milestones
                1. Postgraduate loans, studentships and scholarships for your subject listed with deadlines.
                2. Total cost of fees and living costs for the course worked out.
                3. Applications submitted for the funding you qualify for.
                4. A funding decision recorded before accepting a place.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A funding plan lists confirmed sources against total course costs, and is complete before accepting a postgraduate place."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List postgraduate loans, studentships and scholarships for your subject"
                - "Ask your intended department about funded places and deadlines"
                - "Total the fees and living costs for the full course"
                - "Submit funding applications in deadline order"
            - name: Freelance and self-employed income while studying
              description: |-
                ## Purpose
                Tutoring, design work, content creation and online selling can earn more than a shift job, but self-employed income usually needs registering with the tax authority and tax set aside. Getting the records right from the first payment avoids an unexpected tax bill in final year.

                ## Milestones
                1. The tax authority's rules for registering self-employment checked.
                2. A simple income and expenses record kept for every job.
                3. A share of each payment set aside in a separate pot.
                4. A tax return filed on time, if one is required.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every freelance payment is recorded with expenses, and a set-aside pot covers the estimated tax for the year."
                cadence: rolling
              tasks:
                - "Check whether your freelance income needs registering with the tax authority"
                - "Start an income and expenses record for every job"
                - "Move a share of each freelance payment into a tax pot @recurring(monthly:20)"
                - "Put the tax return deadline in your calendar"
---

# Student Money Management

Student money arrives in lumps, three or so loan payments a year plus whatever a job, a bursary or family can add, and it has to stretch across rent, food, course costs and a social life until the next lump lands. This area is for students from the month before enrolment to the week after graduation: it starts with the foundations of mapping income, applying on time and setting a weekly allowance, then the routines that keep the money lasting, the knowledge that saves real sums, the decisions about housing, kit and work, the dated events from freshers week to the final term, the situations of international, mature, parent, disabled, estranged and placement students, and the specialist cases of hardship funds, reassessments and changes of course.

What repeats is a Sunday money check-in, a weekly food plan and social money pot, a monthly look at payslips, the overdraft and the buffer, a check at the end of each term, and the yearly round of reapplying for funding, renewing cover and the railcard. The Monthly budget and bills, Savings goal, Metrics log, Purchase decision and Job application templates pair with the allowance, the buffer, the payslip tracker, the laptop decision and the term-time job search. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
