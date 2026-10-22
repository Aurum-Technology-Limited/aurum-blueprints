---
id: family-parenting.school-holiday-childcare
name: School Holiday Childcare Planning
description: "A year of school holidays mapped and covered in advance: term dates, leave split between parents, clubs and camps booked before they fill, a holiday budget and backup plans for the days that go wrong."
category: personal
version: 1.0.0
tags: [family-parenting, school-holiday-childcare, parent, knowledge-worker, holiday-clubs, summer-camps, annual-leave, childcare-costs]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - savings-goal
    - operational-checklist
    - purchase-decision
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: School Holiday Childcare Planning
          description: "Covering school holidays with holiday clubs, camps, family help and leave, planned well before each break arrives."
          projects:
            - name: Year-ahead school holiday date map
              description: |-
                ## Purpose
                Every plan in this area depends on knowing exactly which days the children are not in school, and schools publish half terms, training days and the summer finish at different times. Putting a full school year of closures into one calendar, for every child, turns a vague worry into a countable list of days.

                ## Milestones
                1. Term dates for the current and next school year collected from each child's school.
                2. Every half term, end-of-term early finish and staff training day entered in the family calendar.
                3. Days where only one child is off school marked separately.
                4. The total number of weekdays off school counted for the year.

                ## Notes
                Training days are often announced later than term dates. Check the school newsletter in September and January, not just the website.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar shows every school closure day for the next twelve months for each child, with a total weekday count noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the term dates page from each child's school website"
                - "Enter every half term, training day and early finish in the family calendar"
                - "Count the weekdays off school for the year and write the total down"
                - "Check each school's website for newly published term dates @recurring(yearly)"
            - name: Holiday childcare gap count for the year
              description: |-
                ## Purpose
                Once the closure days are known, the real question is how many of them no adult can cover. Laying each week of holiday against both parents' work patterns, known trips and family help shows the true number of days to buy in, which is usually smaller than feared in some breaks and much larger in summer.

                ## Milestones
                1. A week-by-week grid of every holiday period with each adult's availability filled in.
                2. Days already covered by family, existing leave or a partner's day off marked as covered.
                3. The remaining uncovered days counted per break and for the whole year.
                4. The two hardest weeks of the year identified and flagged for early action.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A grid shows covered and uncovered days for every holiday week of the year, with a total of uncovered days per break."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw a simple grid with one row per holiday week and one column per adult"
                - "Mark each adult's working days and known commitments in the grid"
                - "Add days already offered by grandparents or other family"
                - "Count uncovered days per break and circle the two hardest weeks"
            - name: Annual school holiday childcare budget
              description: |-
                ## Purpose
                Holiday clubs commonly cost more per day than term-time wraparound care, and summer alone can cost as much as several months of term-time childcare. Pricing the uncovered days at realistic local rates gives a yearly figure you can save towards instead of finding it all in July.

                ## Milestones
                1. A typical daily price for holiday clubs, sports camps and a holiday nanny noted from three local sources.
                2. Uncovered days for each break multiplied out by the likely provider type.
                3. Extras added: early drop-off fees, trips, lunches, travel and kit.
                4. A yearly total and a monthly saving figure agreed by both parents.

                ## Notes
                Price per child, not per family. Sibling discounts exist but rarely exceed ten percent.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yearly holiday childcare budget, broken down by break and per child, agreed by both parents with a monthly saving figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the daily price of three local holiday clubs or camps"
                - "Multiply the uncovered days per break by the likely daily price"
                - "Add early drop-off fees, trips, lunches and travel to the total"
                - "Agree the yearly figure and the monthly saving amount with your partner"
            - name: Annual leave split between parents for holidays
              description: |-
                ## Purpose
                Two parents with five weeks of leave each can cover ten holiday weeks if they take turns, but most couples take their leave together and pay for cover twice. Deciding at the start of the leave year who takes which weeks, and how many shared family weeks you want, is the single biggest saving in this area.

                ## Milestones
                1. Both parents' leave entitlement, carry-over and leave year start dates written down.
                2. The number of weeks taken together as a family agreed.
                3. Each remaining holiday week allocated to one parent or marked for bought-in cover.
                4. Leave requests for the allocated weeks submitted at both workplaces.

                ## Notes
                Popular weeks such as the first week of summer go fast in many teams. Request early, and ask whether unpaid parental leave is available for a few extra days.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every holiday week of the coming year is allocated to a parent, to shared family leave or to bought-in cover, with leave requests submitted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down both parents' leave balances and leave year start dates"
                - "Agree how many weeks you want off together as a family"
                - "Allocate each remaining holiday week to one parent or to paid cover"
                - "Submit leave requests for the allocated weeks at both workplaces"
                - "Check both adults' remaining leave balances against the plan @recurring(monthly:15)"
            - name: Childcare cost support check for holiday clubs
              description: |-
                ## Purpose
                Many countries offer help that can be used on registered holiday clubs, such as a government top-up account, tax credits, employer schemes or free holiday activity places for eligible families. Checking which apply to you, and which local clubs can accept them, can take a meaningful share off the holiday bill.

                ## Milestones
                1. The childcare support schemes in your country listed with the eligibility rules for each.
                2. Your household's eligibility checked against each scheme's income and work rules.
                3. Any account or application set up before the next break's booking window opens.
                4. Shortlisted providers asked whether they are registered to accept the scheme.

                ## Notes
                Only registered or approved providers can usually be paid through these schemes. In the UK, for example, Tax-Free Childcare needs reconfirming every three months, and a missed reconfirmation stops payments.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Eligibility for each available childcare support scheme is checked and recorded, and any scheme you qualify for is set up before the next booking window."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your government's childcare support pages for holiday club help"
                - "Check your household against each scheme's income and work rules"
                - "Open the account or submit the application for any scheme you qualify for"
                - "Reconfirm your eligibility for the childcare support scheme @recurring(quarterly)"
            - name: Children's own holiday wishes conversation
              description: |-
                ## Purpose
                A child booked into a football camp they dread will make the week miserable for everyone, and older children often have strong views about which friends they want to be with. A short talk with each child before booking gives you their top choices, their worries and which friends' families to coordinate with.

                ## Milestones
                1. Each child asked what they would most like to do in the next break and what they would hate.
                2. Friends they would like to attend clubs with written down.
                3. One thing each child is looking forward to included in the plan.
                4. Any worries about new places or new groups noted for the settling plan.

                ## Notes
                Keep the menu short for younger children. Three real options work better than an open question.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each child's top choices, dislikes and preferred friends are written down before any booking for the next break is made."
                cadence: rolling
              tasks:
                - "Ask each child to pick their favourite from three holiday options"
                - "Write down which friends each child would like to be with"
                - "Message one friend's parent to compare plans for the next break"
                - "Ask each child what they want from the coming break @recurring(quarterly)"
            - name: Backup carer list for holiday emergencies
              description: |-
                ## Purpose
                Camps cancel, children wake with a temperature, and a grandparent falls ill on the Monday of half term. A short list of people who have agreed in advance to step in, with what they can and cannot do, means one phone call instead of a scramble and a missed day of work.

                ## Milestones
                1. Three or more people who have agreed to be emergency holiday cover, with their usual availability.
                2. Each person's contact details, travel time and any limits recorded.
                3. Your workplace's emergency dependant leave rules noted for each parent.
                4. A sick-child plan agreed: which parent stays home first, and for how long.

                ## Notes
                Most holiday clubs exclude children for 48 hours after sickness or diarrhoea. Plan for two lost days, not one.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least three named backup carers, with contact details and limits, is saved where both parents can reach it from their phones."
                cadence: rolling
              tasks:
                - "Ask three people whether they could cover an emergency holiday day"
                - "Save each backup carer's number, travel time and limits in one shared note"
                - "Read your employer's policy on emergency time off for dependants"
                - "Reconfirm the backup carers are still available @recurring(quarterly)"
            - name: Local holiday club and camp shortlist
              description: |-
                ## Purpose
                Word of mouth from other parents, not adverts, is how most families find the best value and best-run clubs, and the options change every year. Building a shortlist of six to ten local providers, with ages, hours, prices and registration status, gives you a ready menu whenever a booking window opens.

                ## Milestones
                1. Six to ten providers found through school notices, the local council directory and other parents.
                2. Each provider's age range, daily hours, price per day and location recorded.
                3. Registration or inspection status checked for each provider.
                4. A first-choice and fallback provider marked for each child.

                ## Notes
                Start from the **Vendor** template for each provider you are likely to use more than once. Check the drop-off and collection times carefully: a 9:30 to 3:00 camp does not cover a working day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shortlist of at least six providers is recorded with hours, prices, ages and registration status, and a first choice is marked for each child."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask in the class parent chat which holiday clubs families rate"
                - "Search your local council's family information directory for holiday clubs"
                - "Record ages, hours, daily price and location for each provider"
                - "Check each provider's registration or inspection status online"
                - "Mark a first choice and a fallback for each child"
            - name: Booking window calendar for popular providers
              description: |-
                ## Purpose
                Good summer camps often open bookings in spring and fill within days, and early-bird prices disappear well before the holidays. A calendar of when each shortlisted provider opens booking, with a reminder set a week ahead, is what separates first-choice places from leftover ones.

                ## Milestones
                1. The usual booking opening date for each shortlisted provider found or asked for.
                2. A reminder set a week before each opening date.
                3. Mailing lists joined for providers that announce openings by email.
                4. Early-bird deadlines and deposit amounts recorded next to each date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar lists the booking opening date and early-bird deadline for every shortlisted provider, with reminders set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email each shortlisted provider to ask when bookings usually open"
                - "Join the mailing list of every provider that announces dates by email"
                - "Add each booking opening date to your calendar with a reminder a week ahead"
                - "Scan provider websites and emails for newly announced booking dates @recurring(monthly:3)"
            - name: Pre-break holiday cover planning session
              description: |-
                ## Purpose
                Each school break needs the same short meeting about six to eight weeks before it starts: who is working which days, what is booked, what is missing and what it costs. Holding it on a fixed rhythm means nothing is left to the week before, when places have gone and leave cannot be moved.

                ## Milestones
                1. A standing planning session agreed by both parents, roughly six weeks before each break.
                2. A one-page agenda used every time: dates, cover grid, bookings, money, open gaps.
                3. Every open gap leaving the meeting with an owner and a deadline.
                4. Notes from each session kept in one place for comparison.

                ## Notes
                Start from the **Meeting notes** template so every session follows the same five headings.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A planning session is held before each school break, and every uncovered day leaves it with an owner and a deadline."
                cadence: cyclic
              tasks:
                - "Book a recurring 30-minute planning session with your partner"
                - "Write the five-heading agenda and save it as a reusable note"
                - "Hold the pre-break planning session for the next school holiday @recurring(quarterly)"
                - "Review the next break's cover grid and close any new gaps @recurring(monthly:12)"
            - name: Half-term week cover routine
              description: |-
                ## Purpose
                Half terms are short enough to feel manageable and so tend to be planned last, which is exactly why they cause the most last-minute leave requests. A fixed pattern for a five-day break, such as two days per parent and one bought-in day, makes each half term a quick copy of the last one.

                ## Milestones
                1. A default half-term pattern agreed, naming who covers which days.
                2. One reliable provider identified for the bought-in day or days.
                3. The default pattern applied to every half term in the year.
                4. Any half term that cannot follow the pattern flagged early.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every half term in the school year has cover agreed at least four weeks before it starts, using the default pattern or a recorded exception."
                cadence: cyclic
              tasks:
                - "Agree a default split of half-term days between the two parents"
                - "Choose one provider for the bought-in half-term day"
                - "Apply the default pattern to each half term in the family calendar"
                - "Flag any half term where the default pattern will not work"
            - name: Holiday childcare sinking fund
              description: |-
                ## Purpose
                Summer clubs for two children can land as one large bill in a few weeks of spring when deposits are due. Paying a fixed amount into a separate pot every month, sized from the yearly budget, spreads the cost evenly and stops the holidays draining the current account.

                ## Milestones
                1. A separate savings pot or account opened and named for holiday childcare.
                2. A monthly standing order set at the yearly budget divided by twelve.
                3. Deposits and fees paid from the pot rather than the main account.
                4. The pot balance checked against upcoming bookings before each booking window.

                ## Notes
                Start from the **Savings goal** template. If you start part-way through the year, divide what is left of the budget by the months before summer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dedicated holiday childcare pot receives a fixed monthly amount, and the summer deposits are paid from it without dipping into other savings."
                cadence: rolling
              tasks:
                - "Open a separate savings pot named for holiday childcare"
                - "Set a monthly standing order equal to the yearly budget divided by twelve"
                - "Transfer the monthly amount into the holiday childcare pot @recurring(monthly:25)"
            - name: Holiday booking and payment tracker
              description: |-
                ## Purpose
                Across several children, providers and breaks it is easy to pay a deposit twice, forget a balance due date or miss a cancellation deadline. One tracker of every booking, with dates, amounts paid, amounts due and refund terms, keeps the money and the places in step.

                ## Milestones
                1. A single tracker listing every holiday booking by child, provider and date.
                2. Deposit, balance, due date and payment method recorded for each.
                3. Cancellation and refund terms summarised in one line per booking.
                4. Confirmation emails filed in one folder linked from the tracker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every holiday booking for the year appears in one tracker with amounts paid, balances due and cancellation terms, reconciled monthly."
                cadence: rolling
              tasks:
                - "Create a tracker with columns for child, provider, dates, paid, due and refund terms"
                - "Enter every existing holiday booking and its confirmation details"
                - "Make an email folder for holiday booking confirmations"
                - "Reconcile the tracker against bank payments and provider emails @recurring(monthly:18)"
            - name: Daily holiday club bag and kit checklist
              description: |-
                ## Purpose
                Compared with school, holiday clubs ask for more: packed lunch, two snacks, a water bottle, sun cream applied before arrival, swimming kit on set days and a named hat. A printed checklist by the door, and a bag packed the night before, makes the 7:45 drop-off survivable on a working day.

                ## Milestones
                1. Each provider's daily kit list gathered from the welcome pack.
                2. A combined checklist printed and kept by the front door.
                3. Every item of kit and every container labelled with the child's name.
                4. A night-before packing slot built into the evening routine during holiday weeks.

                ## Notes
                Start from the **Operational checklist** template. Clubs often run activity days such as swimming or trips that need extra kit, so read the weekly timetable on Friday.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A printed kit checklist is by the door, all kit is named, and no child is sent to a club without lunch, water or required kit during a holiday week."
                cadence: rolling
              tasks:
                - "Copy the daily kit list from each provider's welcome pack"
                - "Print one combined checklist and stick it by the front door"
                - "Label lunch boxes, bottles, hats and swim kit with each child's name"
                - "Read the club's weekly timetable for swimming or trip days"
            - name: Work calendar blocking for school holidays
              description: |-
                ## Purpose
                Leave approved in January is easily undone by a meeting someone books in your diary in June. Blocking every holiday week in your work calendar, marking reduced-hours days and telling your team which weeks you are away makes the childcare plan hold up against work pressure.

                ## Milestones
                1. Every approved leave day for school holidays blocked as out of office in your work calendar.
                2. Days with early pick-ups or shortened hours marked as unavailable after a set time.
                3. Your team and manager told which weeks you are away or on reduced hours.
                4. Handover notes planned for any leave longer than a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All school holiday leave and reduced-hours days for the next three months are blocked in your work calendar and visible to your team."
                cadence: rolling
              tasks:
                - "Block every approved holiday leave day as out of office in your work calendar"
                - "Mark early pick-up days with a hard stop time in your calendar"
                - "Post your holiday leave weeks in the team's shared calendar or channel"
                - "Block the next break's leave and early finishes in your work calendar @recurring(quarterly)"
            - name: Holiday childcare swap ledger with other families
              description: |-
                ## Purpose
                Two or three families who each take all the children for a day can turn a five-day half term into two or three days off work each, at no cost. A simple ledger of who hosted whom, and for how long, keeps the arrangement fair and stops it quietly ending in resentment.

                ## Milestones
                1. Two or three families agreed to swap holiday days, with children of similar ages.
                2. Basic rules set: hours, food, screen time, outings and who to call.
                3. A shared ledger recording every hosted day and child count.
                4. The balance between families reviewed after each break.

                ## Notes
                Count children, not days. Hosting four children for a day is not the same as hosting one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared ledger records every swapped holiday day between the families, and the balance is reviewed and settled after each break."
                cadence: rolling
              tasks:
                - "Message two families whose children get on with yours about swapping days"
                - "Agree hours, food, screens and outings rules in one short message"
                - "Set up a shared ledger of hosted days and children per day"
                - "Review the swap balance with the other families @recurring(monthly:28)"
            - name: Training day and closure day quick cover
              description: |-
                ## Purpose
                Single closure days for staff training, polling stations, heating failures or industrial action hit at short notice and rarely line up with booked clubs. A ready plan for one-off days, including which providers take single-day bookings, means you are not burning a day of leave for each one.

                ## Milestones
                1. Providers that accept single-day or same-week bookings identified.
                2. A default rule agreed for one-off closures, such as alternating parents.
                3. Work arrangements noted for days when working from home with a child is possible.
                4. Known closure days for the year already covered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every known training or closure day this school year has named cover, and at least two providers taking single-day bookings are recorded."
                cadence: rolling
              tasks:
                - "Ask shortlisted providers whether they take single-day bookings"
                - "Agree which parent covers the next one-off closure day"
                - "Book cover for every training day already announced"
                - "Read the school newsletter for newly announced closure days @recurring(monthly:6)"
            - name: After-break holiday cover review
              description: |-
                ## Purpose
                Every break teaches something: the club with the late start, the week the swap fell through, the day that cost twice what it should. A ten-minute review in the first week back captures it while it is fresh, so the next plan improves instead of repeating the same mistakes.

                ## Milestones
                1. A short review held within a week of each break ending.
                2. What worked, what failed and what it cost written in three lines each.
                3. Each child's verdict on their clubs recorded.
                4. One change carried into the plan for the next break.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written review exists for each school break, with at least one change carried into the next break's plan."
                cadence: cyclic
              tasks:
                - "Ask each child which club or day they enjoyed most and least"
                - "Write three lines each on what worked, what failed and the cost"
                - "Hold the after-break review in the first week back @recurring(quarterly)"
            - name: Vetting a holiday club's safeguarding and staffing
              description: |-
                ## Purpose
                Standards at holiday clubs vary from inspected settings with permanent staff to pop-up camps run by students over summer, and a glossy website tells you little. Knowing which questions to ask about ratios, background checks, first aid, allergies and collection rules lets you judge any provider in a ten-minute call.

                ## Milestones
                1. A list of ten safeguarding and staffing questions written and saved.
                2. Each shortlisted provider asked the questions, by phone or email.
                3. Answers compared, with any provider that cannot answer clearly removed.
                4. The provider's written safeguarding and collection policies read.

                ## Notes
                Useful questions: staff to child ratio by age, background checks for all adults, first aiders on site, how allergies and medicines are handled, the collection password rule, and what happens if a child goes missing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every shortlisted provider has answered the same ten safeguarding and staffing questions, and the answers are recorded side by side."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write ten questions on ratios, background checks, first aid and collection"
                - "Ask each shortlisted provider the questions by phone or email"
                - "Read each provider's safeguarding and collection policies"
                - "Remove any provider that cannot answer clearly from the shortlist"
            - name: Reading camp terms and cancellation policies
              description: |-
                ## Purpose
                Camp terms often hide the costly parts: non-refundable deposits, no credit for sickness, minimum booking blocks and late collection fees by the minute. Learning what to look for in the small print before paying saves money and arguments when plans change.

                ## Milestones
                1. The terms of the two most likely providers read in full.
                2. Deposit, refund, sickness credit and late collection rules summarised for each.
                3. Any unfair or unclear term queried with the provider in writing.
                4. A short personal checklist of terms to check before any future booking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of refund, sickness, minimum booking and late collection terms exists for each provider you book with."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to summarise a provider's terms into refund, sickness and late fee rules"
                - "Read the cancellation terms of your two most likely providers in full"
                - "Email the provider about any term that is unclear"
                - "Write a five-point checklist of terms to check before every booking"
            - name: Requesting temporary flexible hours for the summer
              description: |-
                ## Purpose
                Many employers will agree a temporary pattern for the summer, such as compressed hours, a nine-day fortnight or shifted start times, when asked in good time with a clear plan. A well-made request can cover several weeks of childcare gaps without using leave.

                ## Milestones
                1. Your employer's flexible working and summer hours policies read.
                2. A proposed temporary pattern written, with start and end dates.
                3. A plan for how meetings, cover and deadlines will be handled during the pattern.
                4. The request discussed with your manager and the answer recorded.

                ## Notes
                Frame it as temporary with a review date. Managers agree to a trial far more easily than to a permanent change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written request for a temporary summer working pattern has been discussed with your manager, and the outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your employer's flexible working and summer hours policies"
                - "Write the proposed temporary pattern with start and end dates"
                - "List how meetings and deadlines will be covered during the pattern"
                - "Book a conversation with your manager to discuss the request"
            - name: Working from home with children off school
              description: |-
                ## Purpose
                Most remote workers end up with at least a few holiday days when the children are home and the laptop is open. Structuring the day around two protected focus blocks, a box of independent activities and an honest status message to colleagues turns an impossible day into a workable short one.

                ## Milestones
                1. A daily shape agreed: two focus blocks timed for the children's quietest periods.
                2. An activity box prepared for each child with things they can do alone.
                3. A rule agreed with the children for when they can interrupt.
                4. Your team told which days are childcare-at-home days and your reachable hours.

                ## Notes
                This works for a day or two, not for a fortnight. A child under about seven still needs active supervision, so plan it as reduced capacity, not a normal working day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "On home-with-children days you complete two protected focus blocks, and your team knows your reachable hours in advance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose two focus blocks that match the children's quietest times"
                - "Fill a box for each child with puzzles, books and craft they can do alone"
                - "Agree a simple interruption signal with the children"
                - "Set a status message giving your reachable hours on home days"
            - name: Bank of low-cost holiday home days
              description: |-
                ## Purpose
                Some holiday days will always be covered by a parent at home, and a long day with nothing planned tends to end in screens and squabbles. A ready list of cheap and free things nearby, such as library reading challenges, free museums, parks with water play and packed-lunch walks, makes those days easy to fill.

                ## Milestones
                1. At least twenty free or cheap activities within an hour of home listed.
                2. Each activity tagged by weather, age and cost.
                3. Library holiday reading challenges and council summer events added.
                4. A rainy-day shortlist of five indoor options ready.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least twenty local low-cost activities, tagged by weather, age and cost, is ready before the next break."
                cadence: rolling
              tasks:
                - "List ten free places within an hour of home the children enjoy"
                - "Check the library for holiday reading challenges and events"
                - "Tag each activity by weather, age range and cost"
                - "Add newly found free activities and events to the list @recurring(monthly:9)"
            - name: Readiness for older children staying home alone
              description: |-
                ## Purpose
                At some point an older child asks to stay home for a morning instead of going to a club, and the answer depends on maturity, the length of time and local guidance rather than one magic age. Building up in short, planned steps lets you and the child both find out whether it works before relying on it for holiday cover.

                ## Milestones
                1. Local guidance on leaving children at home alone read.
                2. A readiness conversation held covering safety, the door, cooking and phones.
                3. A written house rules sheet with emergency contacts on the fridge.
                4. Three short trial periods completed and reviewed with the child.

                ## Notes
                Most guidance says young children should never be left alone and that responsibility stays with the parent. Start with an hour while you are nearby, and never leave an older child in charge of younger siblings until both are clearly ready.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A decision on whether your child can stay home alone, for how long and under which rules, is written down after at least three short trials."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the official local guidance on leaving children home alone"
                - "Talk through door, cooking, phone and emergency rules with your child"
                - "Write a house rules sheet with emergency numbers for the fridge"
                - "Try a one-hour trial while you are close by, then review it together"
            - name: Handbook for relatives covering holiday weeks
              description: |-
                ## Purpose
                Grandparents, aunts and older cousins often cover whole holiday weeks, sometimes with children they see only a few times a year. A short handbook with routines, food, allergies, medicines, screen rules and who to call lets them look after the children confidently and keeps the rules consistent.

                ## Milestones
                1. A two-page handbook covering daily routine, food, allergies and bedtimes.
                2. Medicines, doctor's details and a signed note of consent for emergencies included.
                3. Screen, outing and treat rules written in a sentence each.
                4. A copy given to every relative who covers a holiday week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every relative covering a holiday week has a current copy of a two-page handbook including routines, allergies, medicines and contacts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a two-page relative's handbook from your notes"
                - "Add allergies, medicines, the doctor's details and emergency contacts"
                - "Write the screen, outing and treat rules in one sentence each"
                - "Send or print a copy for each relative covering a holiday week"
            - name: Holiday nanny versus clubs comparison
              description: |-
                ## Purpose
                With two or three children, a temporary nanny or student childcarer for the summer can cost about the same as clubs for everyone and saves the morning dash across town. Comparing total cost, hours covered, flexibility and the children's preferences side by side settles which route suits your family this year.

                ## Milestones
                1. Full summer cost worked out for clubs for all children, including extras.
                2. A realistic cost for a temporary nanny worked out, including any employer costs.
                3. Hours, travel, sickness cover and flexibility compared for each option.
                4. A decision recorded, with reasons, before the main booking window.

                ## Notes
                Start from the **Purchase decision** template. If you employ someone directly, check what employer obligations apply in your country, even for a few weeks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of summer clubs and a temporary nanny, with total cost and hours for each, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the cost of clubs for every child across the summer"
                - "Get two quotes or rates for a temporary summer nanny"
                - "Compare hours, travel time and sickness cover for both options"
                - "Record the decision and the reasons before booking opens"
            - name: Shared summer nanny with another family
              description: |-
                ## Purpose
                Splitting a summer nanny between two families of similar-aged children can bring the cost per family close to clubs while giving the children a familiar carer and longer hours. It works only when the families agree the details before the first day, not after the first disagreement.

                ## Milestones
                1. A family found with compatible ages, hours, location and parenting style.
                2. Hosting arrangements, cost split and holiday dates agreed in writing.
                3. A nanny recruited and checked jointly.
                4. A short review point agreed after the first two weeks.

                ## Notes
                Decide in advance what happens if one family's child is ill or away. That single question breaks more shares than money does.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written summer nanny-share agreement covering hours, hosting, costs and absences is signed by both families before the nanny starts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask in the class chat whether any family would share a summer nanny"
                - "Meet the other family to compare hours, location and house rules"
                - "Write a one-page share agreement covering costs, hosting and absences"
                - "Interview and reference-check candidates together"
            - name: Day camp or residential camp decision
              description: |-
                ## Purpose
                From about eight or nine, some children are ready for a residential camp of a few nights, which covers several working days and builds independence, but costs more and suits only some children. Weighing readiness, cost and what the child wants avoids sending a reluctant child away or keeping back one who is ready.

                ## Milestones
                1. Your child's readiness discussed: nights away before, homesickness, self-care.
                2. Two residential and two day camp options compared on cost and days covered.
                3. The residential camp's supervision, contact rules and medical arrangements checked.
                4. A decision made with your child and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on day or residential camp for the coming summer is made with your child, with cost and days covered recorded for both options."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your child how they feel about a few nights away at camp"
                - "Compare two residential and two day camps on cost and days covered"
                - "Check the residential camp's phone, supervision and medical rules"
                - "Record the decision you made together"
            - name: Cutting the holiday childcare bill by a fifth
              description: |-
                ## Purpose
                After a year of records you can see where the holiday money actually went, and most families find savings in early-bird prices, sibling discounts, swap days and support schemes they did not use. Setting a target of a twenty percent reduction focuses the review on the biggest lines first.

                ## Milestones
                1. Last year's actual holiday childcare spend totalled by break and provider.
                2. The three biggest cost lines identified.
                3. At least four specific savings listed with an estimated amount each.
                4. Next year's budget reduced by the savings you commit to.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of at least four costed savings is agreed and next year's holiday childcare budget is set at least twenty percent below last year's actual spend."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total last year's holiday childcare spend from the payment tracker"
                - "Mark the three biggest cost lines"
                - "List four savings, such as early-bird prices or swap days, with amounts"
                - "Set next year's budget after the agreed savings"
            - name: Holiday drop-off and pick-up route plan
              description: |-
                ## Purpose
                Unlike school, holiday clubs are often in different places, open later and close earlier, and two children at two venues can make an ordinary commute impossible. Testing the route and times before the first day shows whether a provider is workable or whether you need a closer one, an earlier start or a lift share.

                ## Milestones
                1. Opening and closing times of each booked provider listed against your work hours.
                2. Door-to-door travel times from home to each venue and on to work tested.
                3. Late collection risk days identified and a lift share or backup arranged.
                4. A morning and evening route written for each holiday week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written route for each holiday week shows drop-off and pick-up times that fit both parents' working hours, tested once in advance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each venue's opening and closing times next to your working hours"
                - "Time the trip from home to each venue and on to work"
                - "Arrange a lift share for any day you cannot make collection"
                - "Write the morning and evening route for each holiday week"
            - name: Employer holiday childcare benefits check
              description: |-
                ## Purpose
                Some employers offer things parents never hear about: backup care days with an agency, discounted or on-site holiday clubs, extra paid days in summer or salary-sacrifice schemes. A twenty-minute look through the benefits portal, and one question to HR, can cover days you would otherwise pay for.

                ## Milestones
                1. Both parents' employee benefits portals and handbooks searched for childcare help.
                2. HR asked directly about backup care, holiday clubs and summer hours.
                3. Each benefit found recorded with how to book it and any annual limit.
                4. Benefits worked into the year's holiday cover grid.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Both parents' employers have been checked for holiday childcare benefits, and each benefit found is recorded with how to book it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search your benefits portal for backup care or holiday club offers"
                - "Email HR asking what holiday childcare support the company offers"
                - "Record each benefit with booking steps and annual limits"
                - "Add any backup care days to the holiday cover grid"
            - name: Six-week summer holiday cover plan
              description: |-
                ## Purpose
                Summer is the break that decides whether the year works: around six weeks in many school systems, longer in some, with clubs filling by spring. A plan that names cover for every weekday, combining leave, clubs, family, swaps and trips, is the main deliverable of this area each year.

                ## Milestones
                1. Every summer weekday assigned to a parent, family member, provider or family trip.
                2. All club and camp places booked and deposits paid.
                3. Relatives' weeks confirmed with dates and travel.
                4. A printed summer plan on the fridge and a copy shared with every adult involved.
                5. A contingency named for each week in case a booking falls through.

                ## Notes
                Plan to have this finished by Easter. Late spring is when the popular camps and most annual leave requests close.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every weekday of the summer holiday has named cover recorded in the family calendar, with all bookings paid and a contingency for each week."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Copy the summer weeks from the gap grid into a dedicated summer plan"
                - "Book first-choice camps for each child as soon as booking opens"
                - "Confirm dates with each relative covering a summer week"
                - "Print the summer plan and share it with every adult involved"
                - "Name a contingency for each summer week"
            - name: Christmas break cover plan
              description: |-
                ## Purpose
                The Christmas break is short but awkward: many clubs close, family is busy with their own plans, and work often has year-end deadlines. Sorting the working days between the end of term and the new year early, especially the days between Christmas and New Year, avoids last-minute leave fights.

                ## Milestones
                1. Each working day in the Christmas break identified for both parents.
                2. Workplace shutdown days and any compulsory leave noted.
                3. Every remaining working day allocated to a parent, relative or open provider.
                4. Plans for the first days of January, before school returns, confirmed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every working day of the Christmas school break has named cover agreed at least six weeks before term ends."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which days each workplace is closed over Christmas"
                - "List the working days in the break that need cover"
                - "Ask which local clubs open between Christmas and New Year"
                - "Allocate each remaining day and add it to the family calendar"
            - name: Spring holiday cover plan
              description: |-
                ## Purpose
                Spring break, around Easter in many countries, often clashes with financial year-end at work and with grandparents' own trips. Treating it as a planned event with bookings made by late winter keeps it from becoming two weeks of patched days.

                ## Milestones
                1. The spring break dates confirmed for every child's school.
                2. Each parent's leave and work deadlines in those weeks noted.
                3. Clubs or camps booked for uncovered days.
                4. Any family trips and travel days entered in the plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cover for every working day of the spring break is booked or assigned at least four weeks before it starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the spring break dates for every child's school"
                - "Note each parent's leave and work deadlines in the break"
                - "Book clubs for every uncovered spring weekday"
                - "Enter family trips and travel days in the spring plan"
            - name: Autumn half-term week plan
              description: |-
                ## Purpose
                The autumn half term arrives only a few weeks into the school year, while everyone is still adjusting, and it is easy to realise its date only when the newsletter mentions it. Planning it in the summer, alongside the new school year's term dates, makes it the easiest break of the year instead of the most forgotten.

                ## Milestones
                1. The autumn half-term dates confirmed for each child as soon as term dates are out.
                2. The week's cover agreed before the summer holiday ends.
                3. Any club places booked, especially popular sports or arts weeks.
                4. One family outing chosen for a covered day off.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The autumn half-term week has cover agreed and any club places booked before the summer holiday ends."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the autumn half-term dates for each child's school"
                - "Agree which parent covers which autumn half-term days"
                - "Book any club places for the remaining days"
                - "Pick one outing for a day a parent has off"
            - name: Settling a nervous child into a new holiday camp
              description: |-
                ## Purpose
                Shy or anxious children can find a camp full of strangers, older children and new adults overwhelming, and a bad first morning can make the whole week a battle. Preparing them with a visit or photos, a friend on the same week and a predictable goodbye helps most children settle by lunchtime.

                ## Milestones
                1. The camp's website, photos or venue looked at together before the first day.
                2. A friend booked into the same week where possible.
                3. Camp staff told in advance about any worries, routines or needs.
                4. A short, consistent goodbye routine practised at home.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your child attends the first day of a new camp after a preparation visit or photo walkthrough, with staff briefed about their worries."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look at the camp's photos or venue with your child"
                - "Ask a friend's parent whether their child can join the same week"
                - "Email camp staff a short note about your child's worries"
                - "Practise a quick, cheerful goodbye at home"
            - name: Last-week-of-summer routine reset
              description: |-
                ## Purpose
                Six weeks of later nights and different routines make the first week of term hard, and the final summer week is often the most poorly covered of all. Planning that week for lighter cover, earlier bedtimes and uniform and bag checks lets the family start the new year rested rather than frantic.

                ## Milestones
                1. Cover for the last summer week confirmed early, since many camps finish sooner.
                2. Bedtimes and wake-up times moved back towards school times over five days.
                3. School bags, shoes and uniform checked for size.
                4. The first week of term's pick-ups and clubs written into the calendar.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The last summer week has confirmed cover and the children are back on school bedtimes for at least three nights before term starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your camps run in the last week of the summer holiday"
                - "Move bedtimes fifteen minutes earlier each night in the final week"
                - "Try on school shoes and uniform and list anything to replace"
                - "Write the first week of term's pick-ups into the calendar"
            - name: First school year without year-round nursery
              description: |-
                ## Purpose
                Nursery usually runs almost all year, so the first year of school brings about thirteen weeks of holidays that families with a new school starter have never had to cover. Planning that first year early, while you still have nursery contacts and can ask about holiday places for siblings or former children, prevents the first summer shock.

                ## Milestones
                1. The first school year's holidays counted and compared with the nursery calendar.
                2. Your nursery asked whether it offers holiday places for former children.
                3. Clubs that take four- and five-year-olds identified, since many start at five or six.
                4. Cover for the first half term arranged before term starts.

                ## Notes
                Many holiday clubs have a minimum age above the school starting age. Check age limits before falling in love with a provider.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A holiday cover plan for the first school year exists, with providers that accept your child's age for each break."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the holiday weeks in the first school year"
                - "Ask the nursery whether it takes former children in school holidays"
                - "List holiday clubs whose minimum age fits your child"
                - "Arrange cover for the first half term before term starts"
            - name: Holiday cover for a child with additional needs
              description: |-
                ## Purpose
                Mainstream holiday clubs may not suit a child with additional needs, and inclusive schemes or funded places often need applications months ahead. Knowing which local providers can meet your child's needs, what support or funding exists and how to brief staff makes the holidays safer and calmer for the child.

                ## Milestones
                1. Inclusive or specialist holiday schemes in your area identified.
                2. Any local authority or charity funding for holiday support applied for.
                3. A one-page profile of your child written for holiday staff.
                4. A visit or meeting with the chosen provider held before the first day.

                ## Notes
                Some schemes allocate funded places by application in the spring. Ask your child's school or support worker which local schemes families use.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A provider able to meet your child's needs is booked for the next break, with a one-page profile shared with staff before the first day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your child's school which inclusive holiday schemes families use"
                - "Check for local funding for holiday support and its application date"
                - "Write a one-page profile of your child for holiday staff"
                - "Arrange a visit to the chosen provider before the first day"
            - name: Solo-parent holiday cover plan
              description: |-
                ## Purpose
                Single parents have half the leave of a two-parent household to cover the same thirteen weeks, so bought-in care, family help and swaps carry far more of the load. A plan built around that reality, using every support scheme and reciprocal arrangement available, protects both your job and your own rest.

                ## Milestones
                1. The year's uncovered holiday days counted against your leave alone.
                2. Every support scheme and employer benefit you qualify for in use.
                3. At least one reciprocal swap or regular family helper in place.
                4. One holiday week protected as genuine time off with the children.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A year's holiday cover plan for a single-parent household shows every uncovered day filled and at least one protected family week."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Count uncovered holiday days against your own leave allowance"
                - "List every scheme and employer benefit you can use for holiday care"
                - "Ask one family or relative to commit to regular holiday days"
                - "Mark one holiday week as protected family time"
            - name: Holiday plans for ages eleven to thirteen
              description: |-
                ## Purpose
                Children at the start of secondary school often refuse clubs they see as babyish but are not yet ready for long days alone. Finding activity-based camps, sports courses, half-day arrangements and friend-group plans that suit this age gives them some independence while keeping the working day covered.

                ## Milestones
                1. Camps, courses and sports academies that take this age group listed.
                2. Your child's interests and friends' plans gathered.
                3. A mix of activity days, home days and friend days agreed with your child.
                4. Check-in times and phone rules agreed for any unsupervised hours.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A holiday plan agreed with your eleven to thirteen year old covers every working day with activities, supervised days or agreed short periods alone."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List camps and courses that accept children aged eleven to thirteen"
                - "Ask your child which activities and friends they want in the break"
                - "Agree a mix of activity, home and friend days together"
                - "Set check-in times and phone rules for any time alone"
            - name: Teenager holiday structure with work and volunteering
              description: |-
                ## Purpose
                Teenagers no longer need childcare in the usual sense, but a long summer with no structure can mean late nights, isolation or trouble. Helping them build a loose plan of a part-time job, volunteering, a course or a project gives the weeks shape while you are at work.

                ## Milestones
                1. Your teenager's own ideas for the holiday gathered first.
                2. Legal rules for young people's working hours in your country checked.
                3. At least one structured commitment, such as a job, volunteering or a course, arranged.
                4. Weekly check-in times and household jobs agreed.

                ## Notes
                Many countries limit the hours and types of work younger teenagers can do, so check the local rules before they accept a job.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your teenager has at least one structured holiday commitment in place and agreed weekly check-ins before the break starts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your teenager what they would like to do with the holiday"
                - "Check the local rules on young people's working hours"
                - "Help them apply for one job, volunteering role or course"
                - "Agree weekly check-in times and household jobs for the break"
            - name: Holiday cover for freelance and shift work
              description: |-
                ## Purpose
                Freelancers and shift workers have no annual leave to allocate and often irregular rotas, so the standard leave split does not apply. Planning around known shift patterns, quieter client periods and providers with flexible booking lets you cover holidays without turning down the work that pays for them.

                ## Milestones
                1. Shift rotas or client deadlines for each holiday period gathered.
                2. Holiday weeks where income can drop without strain identified.
                3. Providers that allow flexible or ad hoc day bookings shortlisted.
                4. Clients told in advance about reduced availability in key holiday weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A holiday cover plan matched to your shift rota or client schedule is in place for the next break, with flexible providers recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect shift rotas or client deadlines for the next break"
                - "Identify holiday weeks where you can afford to take less work"
                - "Shortlist providers that allow flexible day bookings"
                - "Tell key clients your reduced availability for the holiday weeks"
            - name: Siblings at schools with different holiday dates
              description: |-
                ## Purpose
                Children at different schools, such as an independent school and a state school, or schools in different districts, can have holidays that only partly overlap. Mapping the mismatch and choosing which weeks to treat as shared family time stretches leave further and avoids paying for half-empty weeks.

                ## Milestones
                1. Each school's holiday dates laid side by side for the year.
                2. Overlapping weeks marked as the first choice for family leave.
                3. Non-overlapping weeks covered child by child.
                4. One family trip or week off placed in a fully shared week.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A side-by-side calendar of each school's holidays shows overlapping weeks used for family leave and cover for every non-overlapping day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay each school's holiday dates side by side for the year"
                - "Highlight the weeks when all children are off together"
                - "Plan child-by-child cover for the weeks that do not overlap"
                - "Place the family trip in a fully shared holiday week"
            - name: Holiday weeks agreed across two households
              description: |-
                ## Purpose
                When parents live apart, holiday time is both a childcare question and a fairness question, and leaving it to each break invites conflict. Agreeing the split of each break and who pays for which clubs well ahead lets both parents book leave and camps with confidence.

                ## Milestones
                1. The year's holiday weeks listed and divided between the two homes.
                2. Responsibility for booking and paying clubs agreed for each parent's weeks.
                3. Handover days and times fixed for each break.
                4. The agreed holiday plan shared in writing with both households.

                ## Notes
                Keep messages short and factual. If your arrangement is set out in a parenting plan or court order, work within it and ask a mediator for help where you cannot agree.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of every holiday week between both households, with booking and payment responsibility for clubs, is agreed by both parents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the year's holiday weeks with a proposed split between homes"
                - "Agree who books and pays for clubs in each parent's weeks"
                - "Set handover days and times for every break"
                - "Send the agreed holiday plan in writing to the other parent"
            - name: Holiday cover around a parent's work travel
              description: |-
                ## Purpose
                A conference or client trip in a school holiday leaves one parent covering alone, often for longer hours. Spotting travel early, either moving it, adding extra bought-in cover or bringing in a relative for those days, stops one partner absorbing the whole week.

                ## Milestones
                1. All known work travel for the next six months checked against holiday dates.
                2. Clashing trips moved or flagged to the team as hard to move.
                3. Extra cover arranged for the at-home parent during each unavoidable trip.
                4. A rule agreed that new holiday-period travel is discussed before accepting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every work trip falling in a school holiday has either been moved or has extra cover arranged for the at-home parent."
                cadence: rolling
              tasks:
                - "Compare both parents' upcoming work travel with holiday dates"
                - "Ask to move any trip that clashes with a holiday week"
                - "Arrange extra cover for the at-home parent during unavoidable trips"
                - "Agree to talk before accepting any new holiday-period travel"
            - name: Holiday childcare cost forecast to age fourteen
              description: |-
                ## Purpose
                Most families need holiday care from the first school year until each child can manage alone, often eight or nine years per child, and the costs rise with prices and overlap between siblings. A forecast of the yearly cost until the youngest is fourteen shows the peak years and helps set saving and work decisions.

                ## Milestones
                1. A row per year from now until the youngest child is fourteen.
                2. Expected uncovered days and price per day entered for each year.
                3. The peak cost years identified and noted.
                4. Monthly saving or work-pattern changes agreed for the peak years.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A yearly holiday childcare cost forecast runs until the youngest child is fourteen, with the peak years and a response to them recorded."
                cadence: rolling
              tasks:
                - "Create a table with one row per year until the youngest is fourteen"
                - "Estimate uncovered days and daily price for each year"
                - "Mark the peak cost years"
                - "Update the forecast with last year's actual holiday spend @recurring(yearly)"
            - name: Parent-run holiday camp rota
              description: |-
                ## Purpose
                Four or five families can run their own holiday week, each parent hosting one day with a planned activity, so every parent works four days and pays nothing. It takes more organising than a simple swap but can cover whole weeks, and the children often prefer it to commercial camps.

                ## Milestones
                1. Four or five families signed up for a shared holiday week.
                2. Ground rules agreed on hours, food, outings, allergies and emergency contacts.
                3. A day-by-day rota with a host and activity for each day.
                4. Each family's consent and medical details shared with every host.

                ## Notes
                Keep group sizes manageable for one adult, and agree how many children each host can safely take on an outing.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A parent-run rota covers at least one full holiday week with a named host and activity for each day and shared medical details."
                cadence: cyclic
              tasks:
                - "Invite four families to run a shared holiday week together"
                - "Agree hours, food, outings and safety rules in writing"
                - "Build a rota with a host and planned activity for each day"
                - "Confirm the hosting rota with the families for the next break @recurring(quarterly)"
            - name: Advance booking strategy for oversubscribed camps
              description: |-
                ## Purpose
                Popular camps can sell out within hours of opening, and families who get places usually have accounts set up, children's details saved and a plan for who books what. Treating booking day like a small operation, especially with several children, turns a lottery into a routine.

                ## Milestones
                1. Accounts created and children's details, medical notes and payment saved in advance.
                2. Each parent assigned specific bookings to make at opening time.
                3. A fallback list ready if first choices are full.
                4. Waiting list places requested where first choices sell out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "On each major booking day, accounts are ready in advance and every child has a first-choice or fallback place booked within a day of opening."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Create accounts with each popular provider before booking opens"
                - "Save each child's details and medical notes in their accounts"
                - "Split the bookings between both parents for opening time"
                - "Join the waiting list for any first choice that sells out"
            - name: Annual holiday childcare retrospective
              description: |-
                ## Purpose
                Once a year, usually after summer, the whole system deserves a proper look: what the year cost, which providers to keep, how leave was used and what changes as the children get older. The answers set next year's booking order and budget before term dates are even out.

                ## Milestones
                1. The year's total holiday cost compared with the budget.
                2. Each provider rated keep, try again or drop, with the children's views.
                3. Leave use per parent compared with the original split.
                4. Next year's budget, provider list and booking order written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly retrospective records total cost against budget, a keep or drop decision for each provider and next year's booking order."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Compare the year's holiday spend with the budget"
                - "Rate each provider keep, try again or drop with the children"
                - "Compare each parent's leave use with the agreed split"
                - "Hold the annual holiday childcare retrospective with your partner @recurring(yearly)"
---

# School Holiday Childcare Planning

This area is for working parents who face roughly thirteen weeks of school holidays a year with perhaps five or six weeks of annual leave each, and need the gap filled without panic. It starts with the foundations (a year of term dates, a gap count, a budget, a leave split and a provider shortlist), moves through the routines that keep each break covered, the skills of vetting clubs and working with children at home, the decisions between nannies, camps and swaps, the big dated breaks from summer to Christmas, the situations that change the picture, and ends with multi-year forecasts and parent-run cover schemes.

What repeats is a quarterly planning session before each break, a monthly look at provider booking windows, a monthly transfer into the holiday fund, a monthly reconciliation of bookings and payments, quarterly reconfirmation of backup carers and childcare support, and a yearly retrospective that sets next year's booking order. The Vendor, Meeting notes, Savings goal, Operational checklist and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
