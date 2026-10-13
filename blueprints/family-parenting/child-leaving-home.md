---
id: family-parenting.child-leaving-home
name: Child Leaving Home
description: "A move-out timeline, the cooking, laundry, money and admin skills a young adult needs before the door closes, a calm moving day, and a plan for how parents and child adjust afterwards."
category: personal
version: 1.0.0
tags: [family-parenting, child-leaving-home, parent, young-adults, life-skills, money-basics, moving-out, empty-nest]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - operational-checklist
    - habit-tracker
    - purchase-decision
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Child Leaving Home
          description: "Preparing a young adult to move out, with life skills, money basics and the emotional adjustment for both child and parents."
          projects:
            - name: Move-out date and countdown timeline
              description: |-
                ## Purpose
                Most families know roughly when a child will leave but never write the date down, so the skills, paperwork and purchases all get squeezed into the final fortnight. Fixing a target month and working backwards turns six or twelve months of loose intentions into a sequence, with the slow jobs such as passports, bank accounts and tenancy checks started first.

                ## Milestones
                1. A target move-out month agreed with your young adult and written on the family calendar.
                2. The months between now and then divided into three phases: skills, paperwork and kit, final weeks.
                3. Every slow job with a lead time over four weeks listed against its start month.
                4. The timeline shared with anyone else who will help, such as the other parent or a grandparent.

                ## Notes
                Hold the date loosely if it depends on exam results, a job offer or a tenancy. A timeline built on a best guess is still far better than none.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written timeline exists with a target move-out month and every job over four weeks long placed against a start month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your young adult which month they expect to move and write it down"
                - "List every job that needs more than four weeks of notice"
                - "Split the months ahead into skills, paperwork and final-weeks phases"
                - "Share the timeline with the other adults who will help"
            - name: Life skills audit with your young adult
              description: |-
                ## Purpose
                Parents tend to overestimate what a teenager can do alone because they have watched it done a thousand times, and teenagers tend to overestimate it for the same reason. Going through a list of thirty everyday tasks together, with each one marked as can do, can do with help or never tried, shows exactly where the next few months of practice should go.

                ## Milestones
                1. A list of about thirty tasks covering food, laundry, cleaning, money, admin, health and safety.
                2. Each task marked by your young adult first, then discussed with you.
                3. The ten weakest tasks picked out and ranked by how soon they will matter.
                4. A practice slot booked for the first three of those ten.

                ## Notes
                Let them mark the list before you add your view. The point is a shared picture, not a test they can fail.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A marked list of about thirty life skills exists, with the ten weakest ranked and the first three booked for practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a thirty-item list of everyday tasks for living alone"
                - "Ask your young adult to mark each one before you comment"
                - "Rank the ten weakest skills by when they will first be needed"
                - "Book practice slots for the top three in the next fortnight"
            - name: Agreeing what you will and will not pay for
              description: |-
                ## Purpose
                Unspoken assumptions about money cause more friction in the first year away than almost anything else: one side expects rent help, the other expects nothing to be asked. Deciding before the move which costs you will cover, which they cover, and what happens in a genuine emergency gives both of you a fixed reference point for the awkward conversations later.

                ## Milestones
                1. A list of the likely monthly and one-off costs of their first year away.
                2. Each cost assigned to you, to them, or shared, with any amount or cap you are offering.
                3. An agreed definition of what counts as an emergency you would step in for.
                4. The agreement written in a short note both of you have read.

                ## Notes
                Agree a review point, such as after the first three months, so the deal can change without anyone feeling it was broken.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A short written agreement lists who pays for each major cost of the first year and defines an emergency, read by both parent and child."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the expected costs of their first year living away"
                - "Decide privately with any co-parent what you can afford to cover"
                - "Talk through each cost and mark it as yours, theirs or shared"
                - "Write the agreement down and set a date to review it"
            - name: First independent monthly budget
              description: |-
                ## Purpose
                A young adult's first budget usually lives in their head and runs out in week three. Building one on paper with real figures for rent, bills, food, travel, phone and fun, against the income they will actually have, shows them before the move whether the plan works and where the gap is.

                ## Milestones
                1. Their expected monthly income written down from wages, loans, allowance or savings.
                2. Fixed costs listed with real quotes where possible: rent, bills, phone, travel.
                3. A realistic weekly food figure based on a trial shop, not a guess.
                4. A budget that balances, or a written plan for how the shortfall will be closed.

                ## Notes
                Start from the **Monthly budget and bills** template. Build it in a format they will keep using, such as a banking app or a simple spreadsheet, not one only you understand.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written monthly budget in your young adult's own file shows income, fixed costs, food and spending money, and it balances or names how the gap closes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your young adult to write down every source of income they expect"
                - "Gather real quotes for rent, bills, phone and travel"
                - "Build the budget together in a format they choose"
                - "Compare their actual spending against the budget @recurring(monthly:28)"
            - name: Their own current account and debit card
              description: |-
                ## Purpose
                Teenage and junior accounts often carry limits, parental controls or your name, and a landlord or employer will want an ordinary adult account in their name alone. Opening one a few months before the move gives them time to learn the app, set up alerts and get a payment history before rent depends on it.

                ## Milestones
                1. The options compared for a fee-free adult current account they can manage on their phone.
                2. An account opened in their sole name with a debit card and banking app working.
                3. Low-balance and large-payment alerts switched on.
                4. Any wages, loan or allowance payments redirected to the new account.

                ## Notes
                This is about practical set-up, not financial advice. Let them choose the provider; your role is to help with identity checks and the first login.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your young adult has an adult current account in their sole name, with the app working, alerts on and their income paid into it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Help them list what they need from an account, such as no fees and a good app"
                - "Gather the identity documents the bank will ask for"
                - "Sit with them while they open the account and log in"
                - "Switch on low-balance and large-payment alerts together"
            - name: Identity documents and records folder to hand over
              description: |-
                ## Purpose
                Landlords, employers, banks and doctors will ask for documents that have sat in your filing cabinet for eighteen years: birth certificate, passport, tax or national insurance number, vaccination history, exam certificates. Gathering them into one folder, scanning them and deciding which originals travel and which stay safely at home avoids a panicked phone call during a right-to-rent check.

                ## Milestones
                1. Every key document located: birth certificate, passport, driving licence, tax number, exam certificates, health records.
                2. Expired or missing documents identified and renewals started.
                3. Clear scans saved in a secure folder your young adult can access.
                4. A decision recorded on which originals go with them and which stay at home.

                ## Notes
                Passport renewals can take weeks at busy times of year, so check expiry dates first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds every key identity and record document, with scans your young adult can open and a note of where each original lives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the expiry date on their passport and any driving licence"
                - "Find the birth certificate, tax number letter and exam certificates"
                - "Scan each document into a secure shared folder"
                - "Check passport and licence expiry dates again before travel season @recurring(yearly)"
            - name: Comparing first-home options for a non-student move
              description: |-
                ## Purpose
                Young adults leaving for work or an apprenticeship rather than university have no halls to fall back on, so the choice is between a room in a shared house, a lodger arrangement, a small flat or staying local a little longer. Comparing the real monthly cost, the commute and the deposit for each option stops a rushed decision made from a single viewing.

                ## Milestones
                1. Three types of housing near the new job or course compared side by side.
                2. Monthly cost, deposit, bills included and commute time recorded for each.
                3. At least two viewings done, in person or by video, with notes.
                4. A first choice and a fallback agreed with your young adult.

                ## Notes
                Rooms advertised with bills included can look dearer but are often simpler for a first move. Check what the word bills actually covers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three housing options with cost, deposit and commute exists, and a first choice and fallback have been agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your young adult what commute and budget they can live with"
                - "Collect three real listings for different types of housing"
                - "Record cost, deposit, bills and commute for each in one table"
                - "Arrange at least two viewings and write notes straight after"
            - name: Family conversation about hopes and worries
              description: |-
                ## Purpose
                Leaving home stirs up excitement and fear on both sides, and those feelings tend to leak out as rows about packing or curfews. One planned, unhurried conversation where each person says what they are looking forward to, what worries them and what they need from the others clears the air before the logistics take over.

                ## Milestones
                1. A relaxed time and place chosen, away from exam stress or work deadlines.
                2. Each family member has said one hope and one worry about the move.
                3. Two or three specific requests noted, such as how often to call or how to handle visits.
                4. A short note of what was agreed kept where everyone can find it.

                ## Notes
                Include brothers and sisters who are staying at home. Their room, chores and attention will change too.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A family conversation has taken place with each person naming a hope and a worry, and the resulting requests are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a relaxed evening or a walk with no time pressure"
                - "Think through your own hope and worry before the conversation"
                - "Ask each person for one hope, one worry and one request"
                - "Write up the requests and share them with the family"
            - name: Emergency plan for the first year away
              description: |-
                ## Purpose
                Lost keys at midnight, a phone stolen on a night out, a sudden illness or a landlord who will not fix the boiler: each is easier when a young adult already knows the first three steps. A one-page plan covering who to call, where key numbers are kept and what money is set aside for a genuine emergency removes the panic from the first crisis.

                ## Milestones
                1. A one-page list of emergency numbers: family, a local friend, landlord, doctor, bank card loss line.
                2. The plan saved on their phone and on paper in their room.
                3. An agreed emergency fund or route to money that does not depend on your phone being answered.
                4. Steps written down for a lost phone, lost keys and feeling unwell alone.

                ## Notes
                Make sure at least one emergency contact lives near their new home, not just near yours.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your young adult holds a one-page emergency plan on phone and paper, with a local contact and an agreed route to emergency money."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the emergency numbers they will need in the new town"
                - "Agree what counts as an emergency and how money reaches them"
                - "Write the steps for a lost phone, lost keys and illness"
                - "Review the emergency plan together before each new academic or tenancy year @recurring(yearly)"
            - name: Saturday cook-together sessions
              description: |-
                ## Purpose
                Watching a parent cook does not teach anyone to cook. A standing Saturday session where your young adult plans, shops for and cooks one meal with you beside them, then gradually without you, builds the confidence to feed themselves on a small budget long before the move.

                ## Milestones
                1. A standing weekly slot agreed that fits around their work or social plans.
                2. The first four sessions cooked side by side with you explaining as you go.
                3. Later sessions led entirely by them, with you only tasting and washing up.
                4. A running list of every meal cooked, with notes on cost and what to change.

                ## Notes
                Start from the **Habit tracker** template if you want a visible record of sessions. Let them choose at least half the dishes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight Saturday sessions have been cooked, the last four led entirely by your young adult, with a meal list kept."
                cadence: rolling
              tasks:
                - "Agree a regular Saturday time for the cooking session"
                - "Choose next week's dish together and write the shopping list"
                - "Cook one meal together, with them in charge from week five @recurring(weekly:sat)"
                - "Add the dish, cost and one improvement to the running meal list"
            - name: Laundry handed over to your young adult
              description: |-
                ## Purpose
                Shrunk jumpers, pink shirts and a basket left for a fortnight are rites of passage best gone through at home where the machine is familiar. Handing over their whole laundry cycle months before the move, from sorting to drying to putting away, means the shared-house launderette will hold no surprises.

                ## Milestones
                1. Care labels and the washing machine settings explained once, with a cheat sheet on the wall.
                2. A weekly laundry day agreed and kept for at least two months.
                3. Bedding changed and washed by them on a regular cycle.
                4. No parent rescues needed for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your young adult has washed, dried and put away their own laundry every week for two months, including bedding, without parental help."
                cadence: rolling
              tasks:
                - "Walk through the machine settings and care symbols together"
                - "Pin a one-page laundry cheat sheet by the machine"
                - "Leave the weekly wash entirely to them @recurring(weekly:sun)"
                - "Add stain removal and hand washing to the cheat sheet"
            - name: Monthly allowance paid as a lump sum
              description: |-
                ## Purpose
                Teenagers used to asking for money when they need it never learn to make a month's money last. Switching whatever you already give, for lunches, travel, clothes and phone, into one monthly payment they manage alone lets them practise running out, borrowing from themselves and planning ahead while the stakes are low.

                ## Milestones
                1. Everything you currently pay for day to day totalled into one monthly figure.
                2. The lump sum paid into their own account on a fixed date.
                3. A rule agreed that there are no top-ups mid-month except in a real emergency.
                4. Three months completed, with a short chat after each about what went well.

                ## Notes
                Expect the first month to go badly. The lesson is in the second and third.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of a single monthly allowance have been paid and managed by your young adult with no unplanned top-ups."
                cadence: rolling
              tasks:
                - "Add up what you spend on their lunches, travel, clothes and phone"
                - "Agree the monthly figure and the no top-up rule with them"
                - "Pay the monthly allowance into their account @recurring(monthly:25)"
                - "Ask them what went well and what ran short this month @recurring(monthly:26)"
            - name: Paying a share of household bills from home
              description: |-
                ## Purpose
                Rent and bills come out of an account whether or not you remembered, and a first missed payment can hurt a young adult's credit history. Asking a working or older teen to pay a small fixed share of the household bills from their own account by standing order rehearses exactly that discipline while they still live with you.

                ## Milestones
                1. A small, fair monthly contribution agreed, linked to their income.
                2. A standing order set up by them from their own account.
                3. The household bills they are contributing to shown to them with real figures.
                4. Six months of on-time payments.

                ## Notes
                Some parents quietly save the contribution and hand it back as a moving-out fund. Decide whether you will say so in advance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your young adult has paid an agreed share of household bills by standing order on time for six months."
                cadence: rolling
              tasks:
                - "Show them the household bills with real monthly figures"
                - "Agree a fair contribution that fits their income"
                - "Help them set up a standing order from their own account"
                - "Check the contribution arrived and mention it if it did not @recurring(monthly:3)"
            - name: Eight-week pre-move countdown checklist
              description: |-
                ## Purpose
                Goodbyes, results, shifts and packing crowd the last two months before a move, and the jobs that only take ten minutes are the ones forgotten. A week-by-week checklist that starts eight weeks out, covering address changes, prescriptions, deliveries and packing, keeps the final weeks calm.

                ## Milestones
                1. A checklist with jobs grouped into eight weekly blocks.
                2. Each week's jobs reviewed every Monday and ticked off by whoever owns them.
                3. Address changes, deliveries and transport booked by week three.
                4. The final week left for packing and goodbyes only.

                ## Notes
                Start from the **Operational checklist** template. Give your young adult ownership of at least half the jobs.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An eight-week checklist with named owners has been worked through, and every address change and booking was done before the final week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft the eight weekly blocks of pre-move jobs"
                - "Assign each job to your young adult or to you"
                - "Go through this week's block of the move checklist together @recurring(weekly:mon)"
                - "Keep the final week clear of anything except packing and goodbyes"
            - name: Agreed weekly contact slot after the move
              description: |-
                ## Purpose
                Some parents text daily and are hurt by one-word replies; some young adults vanish for a fortnight and then call in a crisis. Agreeing one regular, low-pressure contact slot, such as a Wednesday evening call, gives both sides something to rely on without either feeling watched or forgotten.

                ## Milestones
                1. A preferred contact method and frequency agreed before the move.
                2. One weekly slot fixed that suits their timetable or shifts.
                3. An understanding that missing a slot is fine if a quick message is sent.
                4. The arrangement reviewed together after the first six weeks.

                ## Notes
                Resist adding extra check-ins in the first month. Trust built early lasts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly contact slot has been agreed and kept for six weeks, then reviewed and adjusted with your young adult."
                cadence: rolling
              tasks:
                - "Ask how and how often they would like to keep in touch"
                - "Fix one weekly slot in both your calendars"
                - "Keep the weekly call or video chat, short if needed @recurring(weekly:wed)"
                - "Review the arrangement together after six weeks"
            - name: Care package and visit rhythm
              description: |-
                ## Purpose
                Sending a parcel of favourite snacks, a toiletries refill and a handwritten note says you are thinking of them without asking for anything back. Planning a small parcel each quarter and pencilling in visits both ways avoids the two extremes of constant drop-ins and months of silence.

                ## Milestones
                1. A list of the things they miss or run out of, kept on your phone.
                2. A modest budget per parcel agreed with any co-parent.
                3. One parcel sent each quarter with a handwritten note.
                4. Visits in both directions pencilled into the year's calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A parcel has been sent each quarter for a year and visits both ways were planned on the calendar in advance."
                cadence: cyclic
              tasks:
                - "Start a list of things they miss or run out of"
                - "Agree a budget for each parcel"
                - "Pack and post a care parcel with a handwritten note @recurring(quarterly)"
                - "Pencil next year's visits both ways into the family calendar @recurring(yearly)"
            - name: Accounts and subscriptions moved into their name
              description: |-
                ## Purpose
                Streaming, music, phone, gym, cloud storage and travel cards often sit on a parent's card or a family plan, which is cheap until it becomes confusing who pays for what. A simple tracker of every shared account, with a date for moving each one across, untangles them gradually without a sudden cut-off.

                ## Milestones
                1. Every shared account and subscription listed with its cost and whose card pays.
                2. A decision recorded for each: move to them, keep shared, or cancel.
                3. Login details and payment cards updated for every account moving across.
                4. No account left in limbo three months after the move.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker lists every shared account with a decision, and within three months of the move each one is moved, kept by agreement or cancelled."
                cadence: rolling
              tasks:
                - "List every subscription and account that covers your young adult"
                - "Mark each as move to them, keep shared or cancel"
                - "Move or cancel the next account on the tracker @recurring(monthly:8)"
                - "Remove your card details from any account now in their name"
            - name: Your own monthly adjustment check-in
              description: |-
                ## Purpose
                Parents are often told the leaving will be hard for the child, and are then surprised by their own low weeks, restlessness or relief. A short monthly check-in with yourself, and a partner or friend if you have one, makes room to notice how you are really doing and to act early if the quiet house is weighing on you.

                ## Milestones
                1. A monthly time set aside to reflect on how the change feels.
                2. Three questions written down that you answer each time.
                3. One person you trust who knows you are going through this.
                4. A note of when you would seek more support, such as from your doctor or a counsellor.

                ## Notes
                Persistent low mood or sleep loss is worth raising with your doctor rather than waiting out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reflections have been recorded for six months after the move, with a named trusted person and a written threshold for seeking help."
                cadence: rolling
              tasks:
                - "Write three questions you will ask yourself each month"
                - "Tell one trusted person that this change may be hard for you"
                - "Answer your three questions and note anything to act on @recurring(monthly:20)"
                - "Decide in advance what would prompt you to talk to your doctor"
            - name: Ten dependable meals cooked solo
              description: |-
                ## Purpose
                A young adult who can cook ten cheap, filling meals without a recipe will eat well, spend less and make friends in a shared kitchen. Choosing the ten together, mixing batch cooks, one-pan dinners and a few breakfasts, and having them cook each one alone twice turns occasional practice into a working repertoire.

                ## Milestones
                1. Ten meals chosen, including two batch cooks, two vegetarian options and two quick breakfasts.
                2. Each recipe written on a card or saved in one place with a rough cost per portion.
                3. Every meal cooked alone twice with no help.
                4. A shopping list of store-cupboard staples that covers most of the ten.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your young adult has cooked each of ten chosen meals alone at least twice and holds the recipes with portion costs."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose ten meals together that suit their taste and budget"
                - "Write each recipe with a cost per portion in one place"
                - "Have them cook one of the ten alone for the family @recurring(weekly:thu)"
                - "Draw up a store-cupboard staples list from the ten recipes"
            - name: Food shopping on a tight weekly budget
              description: |-
                ## Purpose
                Shopping hungry, buying for one and forgetting what is already in the fridge are the three quickest ways to blow a food budget. Letting your young adult plan and do the family's weekly shop, or their own share of it, against a fixed amount teaches lists, own-brand swaps, unit prices and use-by dates by doing rather than lecturing.

                ## Milestones
                1. A fixed weekly food budget agreed for the practice shops.
                2. A meal plan and list written by them before each shop.
                3. Unit prices and own-brand swaps used without prompting.
                4. Four shops in a row brought in on or under budget.

                ## Notes
                Show them how to freeze bread, mince and leftovers. Freezing is the cheapest skill in the kitchen.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Your young adult has planned and done four consecutive weekly shops on or under an agreed budget using a written list."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree a fixed amount for the practice weekly shop"
                - "Show them how to compare unit prices on the shelf labels"
                - "Hand them the list, budget and bags for the weekly shop @recurring(weekly:fri)"
                - "Go through the receipt together and spot one saving"
            - name: Basic home fixes every tenant should know
              description: |-
                ## Purpose
                Landlords take days to respond, and a young adult who can reset a tripped fuse, bleed a radiator, unblock a sink or turn off the water at the stopcock can handle most small problems that night. Walking through each one in your own home, with them doing it, makes these jobs ordinary rather than frightening.

                ## Milestones
                1. The fuse box, stopcock, boiler controls and meters located and explained at home.
                2. Each basic fix done by your young adult at least once.
                3. A small toolkit of screwdriver, plunger, torch and radiator key packed for the move.
                4. A clear line agreed on what to fix themselves and what to report to the landlord.

                ## Notes
                Gas, electrics beyond a reset and anything structural are always the landlord's job. Teach them to report, photograph and keep a written record.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your young adult has done each of six basic home fixes at least once and has a packed toolkit and a written list of what to report instead."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Show them where the fuse box, stopcock and meters are"
                - "Let them reset a trip switch and bleed a radiator themselves"
                - "Practise unblocking a sink and changing a light bulb"
                - "Pack a small toolkit for their new home"
            - name: Reading a tenancy agreement and inventory
              description: |-
                ## Purpose
                First tenancy agreements are often signed on a phone in five minutes, and the inventory skipped entirely, which is how deposits get lost. Reading a sample or real agreement together and practising a photo inventory teaches what to look for: who pays which bills, the notice period, joint liability with housemates and how the deposit is protected.

                ## Milestones
                1. A sample or actual tenancy agreement read clause by clause together.
                2. A list of questions about rent, bills, notice, repairs and joint liability written down.
                3. A practice photo inventory of a room done, with dates on every picture.
                4. Your young adult knows where to get independent advice before signing, such as a housing charity or advice service.

                ## Notes
                This is for understanding the document, not legal advice. If something looks unusual, point them to an independent advice service rather than reassuring them yourself.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your young adult has read a tenancy agreement with you, written their questions, done a dated photo inventory and knows where to get independent advice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a sample tenancy agreement or ask for the real one early"
                - "Read it together and list every question it raises"
                - "Practise a dated photo inventory of their current bedroom"
                - "Note the advice service they can contact before signing"
            - name: Registering with a doctor and dentist near the new home
              description: |-
                ## Purpose
                Many young adults leave home still registered with the family doctor and only discover the problem when they are ill two hundred miles away. Registering near the new address in the first fortnight, moving any repeat prescriptions and knowing where the nearest urgent care is means illness becomes an inconvenience, not a crisis.

                ## Milestones
                1. The nearest doctor's surgery and dentist to the new address identified before the move.
                2. Registration completed within two weeks of arrival.
                3. Repeat prescriptions moved to a pharmacy near the new home.
                4. Their medical history summary, allergies and vaccination record saved on their phone.

                ## Notes
                Once they are adults, their health records are theirs. Help them gather the information, then step back.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your young adult is registered with a doctor near their new home, prescriptions are moved and their health summary is on their phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Help them find the nearest surgery and dentist to the new address"
                - "Save their allergies, conditions and vaccination record on their phone"
                - "Remind them to register in the first fortnight after arrival"
                - "Check repeat prescriptions are set up at a new local pharmacy"
            - name: Personal safety plan for nights out and travel
              description: |-
                ## Purpose
                Moving to a new town means unfamiliar streets, new friends and no parent a phone call away with the car. Talking through a few practical habits, such as sharing locations with a friend, keeping a taxi fund untouched, knowing the late bus home and watching drinks, prepares them without frightening them.

                ## Milestones
                1. A conversation held about nights out, drinks, getting home and looking after friends.
                2. Location sharing set up with a trusted friend or housemate, by their choice.
                3. A ring-fenced getting-home fund agreed that is never spent on anything else.
                4. Safe routes and late transport from the town centre to the new home noted.

                ## Notes
                Keep it practical and two-way. Ask what they already do and what their friends do before offering your own ideas.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your young adult has a getting-home fund, a chosen location-sharing arrangement and noted late transport routes for the new town."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask what safety habits they and their friends already use"
                - "Talk through getting home late and looking after a friend in trouble"
                - "Agree a ring-fenced getting-home fund"
                - "Look up late buses and taxi firms for the new town together"
            - name: Payslips, tax codes and first-job paperwork
              description: |-
                ## Purpose
                Starting a first proper job brings a contract, a payslip full of deductions and letters from the tax authority that few school leavers can read. Going through a real or sample payslip line by line, and filing the contract and starter forms in one place, means they can spot an emergency tax code or missing hours rather than shrugging at a short pay packet.

                ## Milestones
                1. A real or sample payslip read line by line: gross pay, tax, social insurance, pension, net pay.
                2. Their tax code checked against the tax authority's online account.
                3. Employment contract, starter forms and payslips saved in one folder.
                4. Your young adult knows who to ask at work if a payslip looks wrong.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your young adult can explain each line of their payslip, has checked their tax code online and keeps employment documents in one folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Go through a payslip line by line together"
                - "Help them set up their online account with the tax authority"
                - "Check their tax code matches what they expect"
                - "Create one folder for the contract, starter forms and payslips"
            - name: Credit, overdrafts and buy-now-pay-later pitfalls
              description: |-
                ## Purpose
                Young adults are offered overdrafts, credit cards and pay-later checkouts within weeks of moving out, often before they understand how interest or missed payments affect them for years. Learning how each one works, what a credit file is and how to say no to an offer keeps a small mistake from following them into their first mortgage application.

                ## Milestones
                1. How an overdraft, a credit card and a pay-later plan each charge money explained with a real example.
                2. Their own free credit report viewed together, even if it is nearly empty.
                3. A personal rule written down on when they would use credit, if ever.
                4. Pay-later options switched off or limited in the apps they shop with, if they choose.

                ## Notes
                This is education, not financial advice. Free independent money guidance services explain these products well for young people.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your young adult has seen their own credit report and written a personal rule on using overdrafts, cards and pay-later plans."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a free independent guide to credit for young people"
                - "Work through one real example of overdraft or card interest"
                - "Help them view their own free credit report"
                - "Ask them to write their personal rule on borrowing"
            - name: Practising adult admin with calls, forms and letters
              description: |-
                ## Purpose
                Many young adults have never phoned a stranger to book something, filled in a form without help or replied to an official letter. Handing them one real piece of household or personal admin each month, such as booking their own dental appointment or querying a bill, builds the confidence to sort problems out when you are not in the next room.

                ## Milestones
                1. A list of a dozen real admin tasks they will face after moving out.
                2. One task handed over each month, done by them start to finish.
                3. A simple system for post and documents that they choose and use.
                4. At least one difficult phone call made, such as a complaint or a refund request.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Your young adult has completed six real admin tasks alone over six months, including at least one complaint or refund call."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List a dozen admin jobs they will meet after moving out"
                - "Hand over one real admin task for them to finish alone @recurring(monthly:15)"
                - "Help them choose a simple system for post and documents"
                - "Rehearse a tricky phone call before they make it"
            - name: Cleaning and sharing chores in a shared house
              description: |-
                ## Purpose
                Shared houses fall out over washing up far more than over rent. Taking full responsibility for one area at home, such as the bathroom or kitchen, for a couple of months, and talking through how housemates split chores fairly, prepares them both to clean properly and to have the rota conversation without a row.

                ## Milestones
                1. One room at home handed over completely, with the products and kit explained.
                2. A weekly cleaning slot kept for two months without reminders.
                3. A shared-house chore rota drafted as a practice example.
                4. A few phrases rehearsed for raising a cleaning problem with a housemate.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your young adult has kept one room clean on a weekly slot for two months and drafted a sample shared-house rota."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Hand over one room and show which products go where"
                - "Leave that room's weekly clean entirely to them @recurring(weekly:tue)"
                - "Draft a sample shared-house chore rota together"
                - "Role-play raising a messy-kitchen problem with a housemate"
            - name: Mobile phone contract in their own name
              description: |-
                ## Purpose
                Keeping their phone on a parent's family plan becomes a problem when they want an upgrade, run up roaming charges or need a contract to build a credit history. Deciding whether to move the number to a contract or SIM-only plan in their name before the move avoids a lost number or a surprise bill later.

                ## Milestones
                1. The current contract end date and any early exit fee checked.
                2. Two or three plans in their name compared on monthly cost and data.
                3. A decision made and the number transferred with no gap in service.
                4. Your name and card removed from their account.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your young adult's phone number sits on a plan in their own name, paid from their account, with your details removed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the end date and exit fee on the current phone contract"
                - "Compare two or three plans in their name"
                - "Help them transfer the number without losing it"
                - "Remind them to check their contract end date before it rolls over @recurring(yearly)"
            - name: Deciding what happens to their bedroom
              description: |-
                ## Purpose
                Turning a bedroom into a study the week after they leave can feel like eviction, while keeping it as a shrine can stall everyone's adjustment. Talking openly about what happens to the room, when, and where they will sleep on visits home settles one of the most quietly emotional questions of the move.

                ## Milestones
                1. Your own plans for the room discussed with any partner before raising it.
                2. Your young adult's wishes heard, including what they want left in place.
                3. A timing agreed, such as no changes for the first six months.
                4. A clear answer on where they sleep when they come home.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A plan for the bedroom is agreed with your young adult, with a date for any changes and a confirmed place for them to sleep on visits."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Agree your own plans for the room with any partner first"
                - "Ask your young adult what matters to them about the room"
                - "Settle a timing for any changes"
                - "Confirm where they will sleep on visits home"
            - name: Kitting out a first kitchen on a budget
              description: |-
                ## Purpose
                Shops sell enormous starter kits full of things nobody uses, while the essentials, a decent pan, a sharp knife and a tin opener, get forgotten. Checking what the new place already provides, borrowing from relatives and buying only what is missing keeps the spend low and the cupboards useful.

                ## Milestones
                1. An inventory of what the new home already provides.
                2. A short list of essentials, matched to the ten meals they can cook.
                3. Spare items gathered from your home, grandparents or friends.
                4. Only the missing items bought, within an agreed budget.

                ## Notes
                Start from the **Purchase decision** template for anything over a small amount, such as a microwave or a set of pans.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of kitchen essentials exists, spares have been gathered and only missing items were bought within the agreed budget."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the landlord or housemates what the kitchen already has"
                - "Write a list of essentials matched to their regular meals"
                - "Ask relatives for spare pans, plates and utensils"
                - "Buy only the missing items within the agreed budget"
            - name: Contents insurance for belongings and gadgets
              description: |-
                ## Purpose
                Losing a laptop to a shared-house break-in or a phone to a night out can cost hundreds, and many young adults assume a parent's home policy covers them when it may not. Checking what existing cover extends to and comparing a simple contents or gadget policy if needed removes one of the most common first-year money shocks.

                ## Milestones
                1. Your own home insurance checked for any cover of belongings away from home.
                2. The value of their laptop, phone and other items listed.
                3. Any accommodation or bank account cover checked.
                4. A decision made on whether extra cover is needed, with the policy saved if bought.

                ## Notes
                Read the exclusions, especially for unlocked rooms and unattended items. This is about comparing documents, not a product recommendation.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Existing cover has been checked, belongings valued and a recorded decision made on whether to buy extra contents or gadget insurance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your home policy for cover of a child's belongings away"
                - "List the value of their laptop, phone and other valuables"
                - "Compare two contents or gadget policies if cover is missing"
                - "Review the insurance renewal and their belongings list together @recurring(yearly)"
            - name: Transport plan for life without the family car
              description: |-
                ## Purpose
                Lifts to work, the station and the supermarket disappear the day a child leaves home. Mapping how they will get to work or college, do a big shop and travel home for visits, with the costs of passes, railcards or a bike, often changes which area they should live in and how much they need each month.

                ## Milestones
                1. Their regular journeys in the new town listed with distance and frequency.
                2. Costs of passes, discount railcards, bike or car-sharing compared.
                3. The cheapest workable route home for visits found.
                4. Transport costs added to their monthly budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A transport plan covers daily journeys, the weekly shop and trips home, with costs added to your young adult's budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the journeys they will make each week in the new town"
                - "Compare travel passes, railcards and a second-hand bike"
                - "Find the cheapest route and fare for trips home"
                - "Add the monthly transport cost to their budget"
            - name: House rules for visits back home
              description: |-
                ## Purpose
                The first visit home often brings a clash: they are used to coming and going freely, and you are used to a quieter house. Agreeing a lighter set of house rules for adult visits, covering guests, late nights, chores and meals, lets them be treated as the adult they are becoming without the household being turned upside down.

                ## Milestones
                1. Your own expectations for visits written down with any partner.
                2. Their expectations heard, including friends or a partner staying over.
                3. A short set of visit rules agreed on guests, meals, chores and letting you know plans.
                4. The rules checked after the first long visit and adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A short set of house rules for visits home has been agreed with your young adult and adjusted after the first long visit."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what matters most to you about visits home"
                - "Ask what they expect when they come back to stay"
                - "Agree three or four simple visit rules together"
                - "Revisit the rules after the first long visit"
            - name: Sorting the childhood belongings left behind
              description: |-
                ## Purpose
                Wardrobes full of old school uniform, boxes of toys and shelves of certificates stay exactly where they were for years after a child leaves, until a house move forces a hurried clear-out. Sorting them together now into keep, give away and pass on, with a time limit for anything stored, respects their history and frees up your space.

                ## Milestones
                1. One or two sorting sessions arranged with your young adult present.
                2. Belongings divided into take, keep at home, give away and recycle.
                3. Stored items boxed, labelled and kept to an agreed number of boxes.
                4. A date agreed for reviewing what is still stored.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Childhood belongings have been sorted with your young adult, stored items fit into an agreed number of labelled boxes and a review date is set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a sorting session date with your young adult"
                - "Set out four piles: take, keep at home, give away, recycle"
                - "Box and label everything staying at home"
                - "Agree a date to look through the stored boxes again"
            - name: Moving day plan and transport booking
              description: |-
                ## Purpose
                Moving day is usually a borrowed car packed to the roof, a long drive and a tearful goodbye in a car park, with a forgotten duvet discovered at midnight. A written plan covering transport, the packing list, arrival time, keys and how long you will stay keeps the practical side smooth so the emotional side has room.

                ## Milestones
                1. Transport booked, whether family car, hired van or a courier for boxes.
                2. A packing list ticked off, with bedding and a first-night box packed last.
                3. Key collection time and arrival plan confirmed with the landlord or accommodation.
                4. An agreed plan for when you will leave, so the goodbye is not drawn out or rushed.

                ## Notes
                Ask your young adult how they want the goodbye to go. Many prefer a short one once the bed is made.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Moving day happened to a written plan with transport booked, keys collected on time and the first-night box unpacked before you left."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the car, van or courier for moving day"
                - "Pack a first-night box with bedding, charger, toiletries and snacks"
                - "Confirm the key collection time and parking with the landlord"
                - "Agree with your young adult when and how you will say goodbye"
            - name: First week settling-in plan
              description: |-
                ## Purpose
                The first week sets habits: whether they introduce themselves to housemates, find the supermarket, register with a doctor and eat proper food, or retreat to their room. A light plan for the first seven days, written by them with your suggestions, gives structure without you hovering.

                ## Milestones
                1. A list of first-week jobs: doctor registration, local shop, route to work or college, meeting housemates.
                2. A rough plan for the first weekend, which is often the loneliest point.
                3. One agreed check-in during the first week, not daily calls.
                4. First-week jobs ticked off by them by the end of week one.

                ## Notes
                Homesickness in the first fortnight is common and usually passes. Listen, do not rush to bring them home.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your young adult wrote and completed a first-week plan covering registration, local shops, their route and meeting housemates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Help them draft a list of first-week jobs"
                - "Suggest a plan for the first weekend in the new place"
                - "Agree one check-in call during the first week"
                - "Ask at the end of week one which jobs are done"
            - name: Farewell meal before they go
              description: |-
                ## Purpose
                Packing and logistics tend to swallow the final weeks before a move, and the chance to mark the moment passes. A farewell meal with family, grandparents or close friends, at home or somewhere they choose, gives everyone a proper goodbye and gives your young adult a memory to take with them.

                ## Milestones
                1. A date chosen at least a week before moving day.
                2. The guest list and place decided by your young adult.
                3. A small gesture prepared, such as a card from everyone or a family recipe book.
                4. The meal held and a photo or two taken.

                ## Notes
                A handwritten letter from you, given privately before they leave, often matters more than any present.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A farewell meal chosen by your young adult was held at least a week before moving day, with a small keepsake given."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your young adult how they would like to mark leaving"
                - "Book or plan the meal at least a week before moving day"
                - "Collect cards or notes from family and friends"
                - "Write your own private letter to give them before they go"
            - name: First visit home after the move
              description: |-
                ## Purpose
                The first trip home is often more complicated than either side expects: they have changed, the house has changed, and old roles snap back within an hour. Planning the visit lightly, with travel booked, a meal they love and space for them to see friends, lets it feel like a welcome rather than a return to childhood.

                ## Milestones
                1. Dates and travel agreed and, if you are paying, booked early for cheaper fares.
                2. Their room or bed ready and any visit house rules shared in advance.
                3. One family meal or outing planned, with the rest of the time left open.
                4. A quiet chat during the visit about how the first weeks have really gone.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first visit home took place on agreed dates, with travel booked, one planned family meal and a conversation about the first weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree dates for the first visit home"
                - "Book travel early if you are paying for it"
                - "Plan one family meal and leave the rest of the visit open"
                - "Make time for an unhurried chat about the first weeks"
            - name: First trip to see their new place
              description: |-
                ## Purpose
                Seeing where your young adult now lives answers dozens of unspoken questions, and being shown round by them marks a quiet shift in roles. Waiting for an invitation, arriving with something useful and letting them host, even if that means a takeaway on the sofa, makes the visit theirs.

                ## Milestones
                1. An invitation from them, rather than a visit you announce.
                2. A date that suits their work, study and housemates.
                3. A useful gift chosen, such as a food shop, a plant or something on their list.
                4. The visit kept short enough to leave them wanting the next one.

                ## Notes
                Notice what you see without commenting on mess or housemates. Save any real concern for a calm later conversation.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You have visited your young adult's new home at their invitation, on a date they chose, and kept the visit to an agreed length."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Let them know you would love to visit when they are ready"
                - "Agree a date and how long you will stay"
                - "Pick a useful gift from things they have said they need"
                - "Let them plan where you eat and what you do"
            - name: Moving away for an apprenticeship or first job
              description: |-
                ## Purpose
                A school leaver starting work in another town gets none of the welcome weeks, halls or student support that university brings, and may be the youngest in the workplace. Planning for a first payday that may be a month away, finding housing without a student market and building a social life outside work all need more help than parents expect.

                ## Milestones
                1. The gap between moving and first payday calculated and covered.
                2. Housing found that fits the shift pattern and commute.
                3. Workplace start details confirmed: hours, dress, travel, who to report to.
                4. Two ways to meet people outside work identified, such as a club or volunteering group.

                ## Notes
                First payday is often paid monthly in arrears, so the first month may need bridging.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A plan covers the cash gap before first payday, confirmed housing and start details, and two ways to meet people outside work."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work out when the first pay will arrive and the gap to bridge"
                - "Help them search for housing that fits their shift pattern"
                - "Confirm hours, dress code and who they report to on day one"
                - "Look up clubs or volunteering groups near the new job"
            - name: Leaving home with a disability or long-term condition
              description: |-
                ## Purpose
                Independent living is realistic for many young adults with a disability or long-term health condition, but the support that school and children's services arranged does not follow them automatically. Planning early which adjustments, equipment, care or benefits they will need, and who in adult services or their new college or employer to contact, prevents a gap in support in the first months.

                ## Milestones
                1. A list of the daily support, equipment and adjustments they currently rely on.
                2. Contacts identified in adult health and social services and at the new college or employer.
                3. Applications for any support or reasonable adjustments made well before the move.
                4. A written plan for medication, appointments and what happens if support falls through.

                ## Notes
                Transfers between children's and adult services can take many months. Start this project as soon as a move is likely, and put your young adult's own wishes at the centre.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Support needs are listed, adult service and college or employer contacts are named, applications are submitted and a written contingency plan exists."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every type of support, equipment and adjustment they use now"
                - "Ask their current professionals who handles adult services in the new area"
                - "Contact the disability or support team at the new college or employer"
                - "Write a contingency plan for medication and missed support"
            - name: Single parent when your only child leaves
              description: |-
                ## Purpose
                For a single parent, a child leaving can mean coming home to an empty house for the first time in eighteen years, often with no partner to share the evenings or the worry. Planning ahead for the first months, with people to see, something new to start and a way of marking the change, makes the quiet easier to live with.

                ## Milestones
                1. The first three weekends after the move planned with company or an activity.
                2. One new commitment chosen, such as a class, club or volunteering role.
                3. A friend or relative briefed to check in on you in the first month.
                4. Household routines adjusted for one: shopping, cooking and evenings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The first three weekends after the move are planned, one new regular commitment has started and a named person is checking in on you."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Fill the first three weekends after the move with plans"
                - "Sign up for one new class, club or volunteering role"
                - "Ask a friend to check in during the first month"
                - "Rethink the weekly shop and meals for a household of one"
            - name: Your own plans after the last child leaves
              description: |-
                ## Purpose
                When the youngest leaves, the daily structure built around school runs, meals and lifts disappears at once, and many parents find twenty spare hours a week with nothing planned for them. Deciding what you want to do with that time, whether study, work changes, fitness or a long-postponed project, turns a loss into a start.

                ## Milestones
                1. The hours freed up each week estimated honestly.
                2. Three things you have postponed for years written down.
                3. One of the three started within two months of the last child leaving.
                4. Household routines and spending reviewed for the smaller household.

                ## Notes
                Couples may want to plan this together, but keep at least one plan that is just yours.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three postponed plans are written down and one has started within two months of your last child leaving home."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate how many hours a week the move will free up"
                - "Write down three things you have postponed while raising children"
                - "Choose one to start and book the first step"
                - "Review the household budget for the smaller household"
            - name: When your young adult is anxious about moving out
              description: |-
                ## Purpose
                Some young adults feel more dread than excitement about leaving, and pushing harder usually makes it worse. Breaking the move into smaller steps, such as trial nights away, a visit to the new town and meeting future housemates first, alongside any support they already have, builds confidence at a pace they can manage.

                ## Milestones
                1. Their main worries listed in their own words.
                2. A ladder of small steps agreed, from easiest to hardest.
                3. At least three steps completed before moving day, such as a solo trip or a night away.
                4. Any existing professional support told about the move and its timing.

                ## Notes
                If anxiety is stopping them sleeping, eating or functioning, contact their doctor or existing support rather than handling it alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A ladder of small steps toward the move is written with your young adult and at least three steps are completed before moving day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask them to name their biggest worries about moving out"
                - "Build a ladder of small steps from easiest to hardest together"
                - "Arrange a visit to the new town before moving day"
                - "Let any professional supporting them know about the move"
            - name: Leaving home between two parents' houses
              description: |-
                ## Purpose
                When parents live apart, a young adult leaving home may be moving out of two houses, each with its own expectations about help, money and visits. Agreeing between parents who provides what, how holidays will be split and how both of you stay informed spares them from being the go-between at an already busy time.

                ## Milestones
                1. A conversation between parents, in person or in writing, about the move.
                2. Contributions to money, kit and moving day agreed and written down.
                3. A fair plan for holidays and visits that the young adult has had a say in.
                4. One shared way of hearing news, so neither parent relies on the child to pass it on.

                ## Notes
                Their wishes about holidays carry real weight now they are an adult. Agree the logistics between yourselves and let them choose the rest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both parents have agreed in writing who contributes what to the move and a holiday plan your young adult has approved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Contact the other parent to plan the move together"
                - "Agree in writing who covers which costs and moving-day jobs"
                - "Ask your young adult how they want holidays split"
                - "Set up one shared way for both parents to hear news"
            - name: Young adult moving to another country
              description: |-
                ## Purpose
                Moving abroad for work, study or a gap year adds visas, overseas bank accounts, health cover, time zones and a much more expensive trip home in an emergency. Working through the paperwork and contingencies months in advance, with your young adult leading, makes a long distance feel manageable for both of you.

                ## Milestones
                1. Visa or permit requirements confirmed from official government sources.
                2. Health cover, banking and phone arrangements in the new country sorted.
                3. Copies of passport, visa and insurance stored securely where both of you can reach them.
                4. A plan for emergencies abroad, including the nearest embassy or consulate and how a flight home would be paid for.

                ## Notes
                Use official government sources for visa rules. Agencies and forums are often out of date.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Visa, health cover, banking and phone arrangements are confirmed, document copies are stored securely and an emergency plan for abroad exists."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Look up visa rules on the official government website"
                - "Compare health cover options for living in that country"
                - "Store copies of passport, visa and insurance in a shared secure folder"
                - "Note the embassy details and agree how an emergency flight would be paid"
            - name: Acting as a rent guarantor
              description: |-
                ## Purpose
                Landlords often ask a parent to guarantee a young tenant's rent, and on a joint tenancy that guarantee can sometimes cover the whole household's rent, not just your child's share. Reading the guarantor agreement carefully, understanding the limit of what you are promising and deciding whether you can carry that risk is worth doing before the signing deadline arrives.

                ## Milestones
                1. The guarantor agreement obtained in full before any deadline.
                2. The extent of the guarantee noted: your child's share or the whole rent, and for how long.
                3. Independent advice sought on anything unclear before signing.
                4. A decision recorded, with alternatives such as a guarantor service considered if you decline.

                ## Notes
                This is organisational, not legal advice. Ask for the guarantee to be limited to your child's share where possible, and keep a signed copy.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The guarantor agreement has been read in full, its limits recorded, advice sought on unclear points and a decision made before the deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the letting agent for the full guarantor agreement early"
                - "Note whether the guarantee covers one share or the whole rent"
                - "Take any unclear clauses to an independent advice service"
                - "Record your decision and keep a signed copy if you agree"
            - name: Health consent and next-of-kin conversations at eighteen
              description: |-
                ## Purpose
                Once a child is an adult, doctors, universities and employers will usually not share information with parents without their consent, which can come as a shock in an emergency. Talking with your young adult about who they want as next of kin or emergency contact, and whether they want to give consent for you to be informed, settles this calmly in advance.

                ## Milestones
                1. A conversation held about what changes legally and practically at eighteen.
                2. Their chosen emergency contact recorded with their college, employer and doctor.
                3. Their decision recorded on whether any consent to share information is given.
                4. Any formal arrangements they choose, such as a lasting power of attorney where available, discussed with a professional.

                ## Notes
                The choice is theirs. Your role is to explain why it matters and accept the answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Your young adult has chosen and recorded an emergency contact with their college or employer and doctor, and made a stated decision on consent to share information."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read up on what information can be shared once a child turns eighteen"
                - "Talk through emergency contacts and consent with your young adult"
                - "Help them record their chosen contact with their college or employer and doctor"
                - "Ask the agent to summarise the options for formal arrangements in your country"
            - name: Mentoring another family through the first leaving year
              description: |-
                ## Purpose
                Parents who have been through a child's first year away know which worries were worth having and which were not. Offering a friend, neighbour or newer parent at school a few conversations through their own child's move passes on that hard-won perspective and often helps you make sense of your own experience.

                ## Milestones
                1. One family identified whose child is about to leave home.
                2. Your own notes written up: what helped, what you would skip, what surprised you.
                3. Three conversations held across their first year: before the move, after the first month and after the first visit home.
                4. Your notes shared in a form they can keep.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "You have held three conversations with another parent across their child's first year away and shared written notes from your own experience."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down what helped and what you would skip from your own experience"
                - "Offer a friend or newer parent a chat before their child moves"
                - "Arrange follow-ups after the first month and first visit home"
                - "Share your notes with them in a form they can keep"
---

# Child Leaving Home

This area is for parents whose son or daughter is about to move out, whether to a student house, a first job in another city, an apprenticeship or a flat of their own. It starts with the foundations (a target date, an honest skills audit, a first budget, documents and an agreement on who pays for what), then the routines that hand over cooking, laundry, bills and admin while they still live with you, the practical skills to learn together, the decisions about phones, insurance, kit and the bedroom left behind, the moving day and first visits, the situations that change the picture, and finally the specialist work of guarantor agreements, consent at eighteen and helping other families.

What repeats is a Saturday cook-together, a Sunday laundry handover, a monthly allowance paid as a lump sum, a weekly contact slot once they have gone, a quarterly care package and a monthly check on how you are adjusting yourself. The Monthly budget and bills, Operational checklist, Habit tracker and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
