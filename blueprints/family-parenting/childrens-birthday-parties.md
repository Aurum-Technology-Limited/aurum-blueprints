---
id: family-parenting.childrens-birthday-parties
name: Children's Birthday Parties
description: "A budget and guest list settled early, invitations that answer every question, allergy-safe food, a run sheet for the day and calm machinery for the parties your children are invited to."
category: personal
version: 1.0.0
tags: [family-parenting, childrens-birthday-parties, parent, party-planning, invitations, party-food, budget]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - savings-goal
    - purchase-decision
    - vendor
    - metrics-log
    - trip
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Children's Birthday Parties
          description: "Planning children's birthday parties: themes, venues, invitations, food, party bags and keeping the budget in check."
          projects:
            - name: Birthday party budget for each child
              description: |-
                ## Purpose
                Children's parties drift from a modest tea to several hundred pounds once a venue, entertainer, cake and party bags are added one at a time. Setting a ceiling per child per year, split into the big lines before anything is booked, gives you a number to say yes or no against and keeps siblings' parties roughly fair.

                ## Milestones
                1. A yearly party ceiling agreed for each child, written in one place.
                2. The ceiling split across venue, food and cake, entertainment, invitations and party bags.
                3. A ten percent contingency held back for the extras that always appear.
                4. Last year's actual spend, if known, set beside the new figures.

                ## Notes
                A per-guest figure is the easiest way to sanity check the total: divide the budget by the number of children invited and see whether it still looks sensible.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each child has a written yearly party budget split into at least five lines, with a contingency, agreed by both parents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down roughly what each child's last party cost"
                - "Agree a yearly party ceiling per child with your partner"
                - "Split each ceiling into venue, food, entertainment, invitations and bags"
                - "Compare the budget with what was actually spent after the party @recurring(yearly)"
            - name: Choosing this year's birthday format
              description: |-
                ## Purpose
                A whole-class party is not the only option: a family tea, a trip out with three friends, a sleepover or a day of the child's choosing can mean more and cost less. Deciding the format first, with your child's real wishes in the room, stops you booking a soft play hall for a child who would rather have two friends and a film.

                ## Milestones
                1. Four or five formats listed with a rough cost and effort for each.
                2. Your child's own preference heard and written down in their words.
                3. One format chosen and explained to your child.
                4. Any format you ruled out recorded as an option for next year.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One party format is chosen for this birthday, with your child's preference and the cost of each option written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List five possible formats from family tea to whole-class party"
                - "Ask your child what would make their birthday feel special"
                - "Put a rough cost beside each format using the budget"
                - "Tell your child which format you have chosen and why"
            - name: Guest list rules and the whole-class question
              description: |-
                ## Purpose
                Who to invite causes more upset than any other party decision, for your child and for the children left out. A simple rule, such as age plus one guests or everyone in the class or only a handful, decided before your child starts promising invitations in the playground, keeps the list fair and defensible.

                ## Milestones
                1. A guest number set from the budget and the venue size.
                2. A rule chosen: whole class, all the girls or boys, or a small named group.
                3. Your child's list drafted against that rule, with family friends added separately.
                4. A plan for handing out invitations that does not leave children out in front of others.

                ## Notes
                Many schools ask that invitations go home in book bags only if the whole class is invited. If it is a small group, send them to parents directly.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A final guest list exists that follows a stated rule, with the number of children matching the budget and venue."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide the maximum number of children the budget and space allow"
                - "Choose one invitation rule and explain it to your child"
                - "Draft the guest list with your child against that rule"
                - "Check the school's policy on handing out invitations"
            - name: Picking the party date and time slot
              description: |-
                ## Purpose
                Clashing with a classmate's party on the same Saturday, a half-term weekend or a football tournament can halve your acceptances. Checking the school calendar, the class parents' group and key families before fixing a date, and choosing a slot that suits the age group, avoids a half-empty hall.

                ## Milestones
                1. The school term dates and big local events for the birthday month checked.
                2. Two or three possible dates tested against known clashes.
                3. A time slot chosen to suit the age: late morning for under-fives, afternoon for older children.
                4. The date and slot in the shared family calendar and confirmed with any venue.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A party date and two-hour slot are fixed, checked against school dates and known clashes, and entered in the family calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up school term dates for the birthday month"
                - "Ask in the class parents' group about parties already planned"
                - "Choose a date and a slot that suits your child's age"
                - "Add the party to the shared family calendar"
            - name: Guest allergy and dietary register
              description: |-
                ## Purpose
                At most parties at least one child has a food allergy, an intolerance or a religious or family dietary rule, and finding out at the table is too late. A simple register built from the RSVPs, checked before you shop, lets you plan safe food rather than improvise around it.

                ## Milestones
                1. The invitation asks parents to name allergies and dietary needs when they reply.
                2. A register with each child's name, need and severity as the parent described it.
                3. Every menu item checked against the register and labelled where needed.
                4. A conversation held with the parent of any child with a serious allergy about what is safe.

                ## Notes
                Never guess what a child with a serious allergy can eat. Ask the parent, and invite them to stay or to send safe food if they prefer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written register lists every guest's allergies and dietary needs, and each party food item has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a line about allergies and dietary needs to the invitation"
                - "Build the register from each reply as it comes in"
                - "Phone the parent of any child with a serious allergy"
                - "Ask nursery or school for their allergy policy at the start of each year @recurring(yearly)"
            - name: Eight-week party planning timeline
              description: |-
                ## Purpose
                Most party stress comes from doing in the last week what should have been done in the first: venues booked up, invitations sent too late, a cake order missed. Working backwards from the date to a week-by-week list of jobs turns one overwhelming event into eight small weeks of work.

                ## Milestones
                1. The party date written at the bottom of a page and eight weeks counted back.
                2. Jobs placed in the right week: venue, invitations, entertainer, food, cake, bags.
                3. Each job given an owner, you, your partner or a helper.
                4. The timeline pinned where both adults will see it each week.

                ## Notes
                Start from the **Operational checklist** template. Book the venue and entertainer first, as popular ones go two to three months ahead for Saturday slots.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week-by-week timeline covering eight weeks before the party exists, with every job given a week and an owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count back eight weeks from the party date on one page"
                - "Place the venue, invitation, food, cake and bag jobs in their weeks"
                - "Give every job an owner and share the page with your partner"
                - "Tick off the week's jobs each Sunday evening"
            - name: RSVP tracker and parent contact list
              description: |-
                ## Purpose
                Half the invitations will come back late or not at all, and on the day you will need a phone number for every child's grown-up. A single tracker of who is coming, who to collect them, any needs and a contact number turns final numbers and drop-off safety into a five-minute check.

                ## Milestones
                1. A tracker with each guest's name, parent name, number, reply and dietary need.
                2. A reply-by date set and printed on the invitation.
                3. Non-replies chased politely two days after the reply-by date.
                4. Final numbers confirmed to the venue and caterer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every invited child has a recorded reply and a contact number for the collecting adult before final numbers go to the venue."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a simple tracker with name, parent, number and reply"
                - "Add a reply-by date to the invitation wording"
                - "Send a friendly reminder to anyone who has not replied"
                - "Print the final list to keep by the door on the day"
            - name: Theme and wish list conversation with your child
              description: |-
                ## Purpose
                Children change their passions quickly, and a dinosaur party booked in March can feel babyish by May. Asking a few open questions six to eight weeks out, and giving them two or three real choices within budget, gets a theme they still love on the day and a wish list relatives can use.

                ## Milestones
                1. Your child's current interests listed in their own words.
                2. Two or three theme options offered that fit the budget.
                3. One theme chosen by your child and noted with any colours or characters.
                4. A short wish list ready to share with grandparents and close family.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A theme chosen by your child and a wish list of five to ten ideas are written down eight weeks before the party."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your child what they love playing and watching right now"
                - "Offer two or three theme options that fit the budget"
                - "Write down the chosen theme, colours and favourite characters"
                - "Share a short wish list with grandparents and godparents"
            - name: Reusable party kit box
              description: |-
                ## Purpose
                Families with two or three children host several parties a year and buy the same candles, bunting, tablecloths and cake knife every time. One labelled box of reusable kit, kept in the loft or under a bed, cuts cost and waste and means a last-minute family tea can be pulled together in an hour.

                ## Milestones
                1. A list of reusable items you buy for every party.
                2. Reusable plates, cups and a washable tablecloth or bunting bought or gathered.
                3. Candles, a lighter, cake knife, matches, bin bags and tape in one labelled box.
                4. A contents list taped inside the lid.

                ## Notes
                Plain colours outlast themes. Add one themed item per party and keep the base kit neutral.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One labelled box holds reusable tableware, decorations and cake kit for twenty children, with a contents list inside the lid."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the items you have bought new for the last two parties"
                - "Gather or buy reusable plates, cups and washable bunting"
                - "Pack candles, lighter, cake knife and bin bags in a labelled box"
                - "Check the kit box and restock anything used up @recurring(quarterly)"
            - name: Family birthday calendar with early reminders
              description: |-
                ## Purpose
                Birthdays do not move, yet the planning usually starts three weeks out, when every good venue is taken. A calendar of every child's birthday with a reminder eight weeks ahead, plus a monthly glance at what is coming, turns each party into something you start on time rather than rescue.

                ## Milestones
                1. Every child's birthday in the shared family calendar as a yearly event.
                2. A planning reminder set eight weeks before each birthday.
                3. Cousins' and godchildren's birthdays added where you send a card or gift.
                4. A monthly check that the next two birthdays have a plan started.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each child's birthday has a yearly calendar entry and an eight-week planning reminder, and each party's timeline starts within a week of that reminder."
                cadence: rolling
              tasks:
                - "Add every child's birthday to the family calendar as a yearly event"
                - "Set a reminder eight weeks before each birthday"
                - "Check which birthdays fall in the next two months @recurring(monthly:3)"
                - "Ask each child what they would like for their birthday this year @recurring(yearly)"
            - name: Monthly party savings pot
              description: |-
                ## Purpose
                Paying for a whole party in one month can wreck that month's budget, especially when two children have birthdays close together. Moving a fixed amount into a separate pot every month, sized from the yearly party budgets, means the money is already there when the venue deposit is due.

                ## Milestones
                1. A monthly amount worked out from the total yearly party budget.
                2. A separate savings pot or labelled account set up.
                3. A standing transfer in place on a fixed day.
                4. The pot balance checked against the next party's estimate before booking.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate party pot receives a fixed transfer every month and covers each party's deposit without borrowing from the household budget."
                cadence: rolling
              tasks:
                - "Add up all the children's yearly party budgets and divide by twelve"
                - "Open or label a separate savings pot for parties"
                - "Move this month's party saving into the pot @recurring(monthly:25)"
                - "Check the pot balance before paying any venue deposit"
            - name: Present cupboard for other children's parties
              description: |-
                ## Purpose
                Primary school children can be invited to twenty parties a year, and a dash to the shop on Saturday morning is expensive and stressful. A small stock of suitable gifts, cards and wrapping, bought in sales and kept in one place, makes every invitation a five-minute job.

                ## Milestones
                1. A gift spend per party agreed so the cupboard stock matches it.
                2. Six to eight gifts suited to your children's age groups in one place.
                3. Cards, wrapping paper, tape and gift tags kept with them.
                4. A note of which gifts went to which child so nobody gets the same one twice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The present cupboard holds at least four ready gifts and wrapping at all times, and no gift has been bought on the morning of a party for three months."
                cadence: rolling
              tasks:
                - "Clear one shelf or box to be the present cupboard"
                - "Buy four gifts at the agreed spend for your children's age groups"
                - "Check the present cupboard and wrapping stock @recurring(monthly:12)"
                - "Pick up two gifts in the sales to top up the cupboard @recurring(quarterly)"
            - name: Weekly invitation check and RSVP habit
              description: |-
                ## Purpose
                Invitations arrive crumpled at the bottom of book bags, in class chat threads and by text, and an unanswered one is awkward for the host. A fixed weekly moment to find every invitation, check the calendar and reply is a small courtesy that other parents notice.

                ## Milestones
                1. One place agreed for invitations once they are found, such as a clip on the fridge.
                2. A weekly check of book bags, class chats and messages for new invitations.
                3. Each invitation answered within a few days, with any allergy or pick-up details.
                4. Accepted parties added to the family calendar with the address and collection time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every party invitation received in a term is answered before its reply-by date and appears in the family calendar."
                cadence: rolling
              tasks:
                - "Choose one place to keep invitations once they are found"
                - "Empty book bags and scan class chats for invitations @recurring(weekly:fri)"
                - "Reply to each open invitation and add it to the family calendar"
                - "Note any allergy or pick-up detail the host needs to know"
            - name: Thank-you notes routine after each party
              description: |-
                ## Purpose
                Thank-you notes teach gratitude and let other parents know the gift arrived, but they are easily forgotten once the party is over. Keeping a list of who gave what as presents are opened, and sitting down with your child within a week, makes the job short and lets younger children draw instead of write.

                ## Milestones
                1. A helper or older sibling noting each giver and gift as presents are opened.
                2. Cards or a simple template ready before the party.
                3. Notes written, drawn or recorded by your child within seven days.
                4. Every note delivered by hand, in book bags or by message.

                ## Notes
                For very young children a photo of them holding the gift with a one-line message from you is enough.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every guest who gave a present receives a thank-you note within ten days of the party, using a gift list kept on the day."
                cadence: rolling
              tasks:
                - "Buy or print a pack of thank-you cards before the party"
                - "Ask a helper to list each gift and giver as presents are opened"
                - "Sit with your child to write or draw the notes within a week"
                - "Deliver the notes through book bags or by message"
            - name: Post-party debrief and cost log
              description: |-
                ## Purpose
                By next year you will have forgotten that the pizza ran out, the entertainer overran and nobody ate the sandwiches. Ten minutes after each party recording real costs, numbers, food left over and what the children loved gives the next party a head start and a realistic budget.

                ## Milestones
                1. Actual costs for each budget line recorded within a week.
                2. Guest numbers, food quantities and leftovers noted.
                3. Three things to repeat and three to change written down.
                4. Supplier details and comments added to your contacts book.

                ## Notes
                Start from the **Metrics log** template, with one row per party.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each party has a log entry with actual costs, guest numbers, food quantities and at least three lessons, recorded within a week."
                cadence: cyclic
              tasks:
                - "Collect receipts and add up the real cost of the party"
                - "Note how many children came and how much food was left"
                - "Write three things to repeat and three to change"
                - "Read last year's debrief before planning the next party @recurring(yearly)"
            - name: Big party and small party year rotation
              description: |-
                ## Purpose
                Many families find a big party every year for every child is too much money and energy, especially with three children. Alternating big party years with smaller celebrations, agreed openly and applied to every sibling, keeps birthdays special without anyone feeling short-changed.

                ## Milestones
                1. A rotation written showing which child has a big or small year for the next three years.
                2. What counts as a small year defined, for example a trip out with two friends.
                3. The rotation explained to the children at an age-appropriate level.
                4. Exceptions agreed in advance for milestone ages.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A three-year rotation shows each child's big and small party years, has been explained to the children and is applied without dispute."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Sketch a three-year table of big and small party years per child"
                - "Define what a small year includes so it still feels special"
                - "Explain the rotation to the children together"
                - "Review the rotation after the last birthday of the year @recurring(yearly)"
            - name: Photo consent for guests at your parties
              description: |-
                ## Purpose
                Some families cannot have their child's picture shared online for safety, custody or personal reasons, and a cheerful group photo on social media can cause real harm. Asking about photos on the invitation and following a simple rule on the day protects every guest and saves an awkward conversation afterwards.

                ## Milestones
                1. A line on the invitation asking parents to say if photos are not allowed.
                2. Children who must not be photographed noted in the RSVP tracker.
                3. A family rule agreed: group photos shared only privately with guests' parents.
                4. Helpers and relatives briefed on the rule before the party starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every party invitation asks about photo consent, and no photo of a guest is posted publicly without their parent's agreement."
                cadence: rolling
              tasks:
                - "Add a photo consent line to your standard invitation wording"
                - "Mark any child who must not be photographed in the tracker"
                - "Brief relatives with cameras on the photo rule as they arrive"
                - "Share group photos only in a private message to guests' parents"
            - name: Party supplier and venue contacts book
              description: |-
                ## Purpose
                Good local entertainers, hall bookers, cake makers and hire firms are found through word of mouth and then lost in old messages. Keeping them in one contacts book with prices, notes and what other parents said means next year's booking is a phone call rather than an evening of searching.

                ## Milestones
                1. A contacts list with name, service, price, booking lead time and notes.
                2. Recommendations from other parents added as they come up.
                3. Your own experience added after each party.
                4. Out-of-date entries checked and removed once a year.

                ## Notes
                Start from the **Vendor** template for any supplier you use more than once.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "One contacts book lists at least eight local party suppliers with prices and notes, checked within the last twelve months."
                cadence: rolling
              tasks:
                - "Gather supplier names from old messages and receipts into one list"
                - "Add prices, lead times and a one-line comment for each"
                - "Ask the class parents' group for the best entertainers they have used"
                - "Check each supplier is still trading and update prices @recurring(yearly)"
            - name: Running party games for under-fives
              description: |-
                ## Purpose
                Toddlers and pre-schoolers lose interest in any game after about five minutes and melt down if they lose. Learning a set of short, no-elimination games such as pass the parcel with a prize in every layer, musical bumps where nobody goes out and a bubble session lets you fill an hour without tears.

                ## Milestones
                1. Eight short games chosen that need no reading and have no losers.
                2. Music, props and any prizes for each game gathered in one bag.
                3. Each game tried once at home with your own child.
                4. A running order written with quieter games after food.

                ## Notes
                Under-fives usually come with a parent. Plan for the grown-ups too: somewhere to stand, a hot drink and a clear end time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of eight tested games with props packed and a running order that fills sixty minutes for under-fives."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List eight games that need no reading and have no losers"
                - "Wrap a pass the parcel with a small treat in every layer"
                - "Try two of the games at home with your own child"
                - "Write a running order with calm games straight after food"
            - name: Party games and activities for ages six to ten
              description: |-
                ## Purpose
                Primary-age children love competition, teams and a challenge, but they also argue about rules and can spot a babyish game at once. A plan with a treasure hunt, team relays, a craft table and a big finish, run with clear rules and a whistle, keeps twenty children busy and on side.

                ## Milestones
                1. Five or six games chosen with team and solo options.
                2. Rules for each game written in one or two lines you can read aloud.
                3. A treasure hunt or challenge trail prepared with clues at the right reading level.
                4. Prizes planned so that every child goes home with something.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ninety-minute games plan with written rules, a prepared treasure hunt and prizes for every child is ready a week before the party."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your child which games they enjoyed at recent parties"
                - "Write two-line rules for each game you will run"
                - "Hide and test the treasure hunt clues with a sibling or friend"
                - "Buy a whistle and enough small prizes for every guest"
            - name: Baking and decorating the birthday cake
              description: |-
                ## Purpose
                Homemade cakes are often the part children remember, but trying a new design for the first time the night before the party is a recipe for a collapsed sponge at midnight. A practice bake a few weeks ahead, with a design you have tested and a timeline for baking, cooling and icing, makes the real one calm.

                ## Milestones
                1. A design chosen that matches your skill and the theme.
                2. A practice cake baked and decorated, with notes on what to change.
                3. Tins, colouring, decorations and a board or box in the house.
                4. A bake plan: sponge two days before, icing the day before.

                ## Notes
                Check every ingredient, including sprinkles and colourings, against the allergy register. A shop cake decorated at home is a fine fallback.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice cake has been made using the chosen design, and a two-day bake plan with every ingredient checked for allergens is written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a cake design that fits your skills and the theme"
                - "Bake and decorate a practice cake a few weeks ahead"
                - "Buy tins, colouring and decorations checked against the allergy register"
                - "Write a two-day bake plan and put it in the calendar"
            - name: Party food quantities for twenty children
              description: |-
                ## Purpose
                Most parents overcater by a third and throw away trays of sandwiches, then run short of the one thing everyone wanted. Learning realistic quantities per child, what children actually eat at parties and what can be made the day before gives you a menu that is safe, cheap and gone by the end.

                ## Milestones
                1. A menu of five to seven items children reliably eat, checked against the register.
                2. Quantities per child worked out and multiplied by final numbers.
                3. A prep plan splitting jobs into the day before and the morning of the party.
                4. Food for accompanying adults planned separately if they are staying.

                ## Notes
                A useful rough guide is two to three sandwich quarters, a handful of crisps, some fruit and veg sticks and one sweet treat per child before the cake. Adjust after each party using your debrief log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A menu with per-child quantities, a shopping list for the final guest number and a two-day prep plan is written a week before the party."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a menu of five to seven foods children reliably eat"
                - "Work out quantities per child and multiply by the final number"
                - "Split the preparation into day-before and morning jobs"
                - "Write the shopping list and book a delivery slot"
            - name: Invitations that answer every parent's questions
              description: |-
                ## Purpose
                Parents need to know whether to stay, when to collect, where to park, what to wear and whether food is a meal or a snack, and an invitation that misses these leads to forty messages. A standard wording you reuse, with all the practical details, cuts the questions and protects the end time.

                ## Milestones
                1. Standard wording with date, start and end time, address, parking and reply-by date.
                2. Lines for drop-off or stay, allergies, photo consent and what to wear.
                3. A note on gifts if you have a gift policy.
                4. The wording saved for reuse at every future party.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable invitation wording covers time, place, parking, drop-off, allergies, photos, clothing and reply-by date, and is saved for future parties."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the agent to draft invitation wording with every practical detail"
                - "Add a clear end and collection time in bold"
                - "Say whether parents should stay or may drop off"
                - "Save the final wording somewhere you will find it next year"
            - name: Handling a room of excited children
              description: |-
                ## Purpose
                Twenty children full of sugar in a hall can tip from fun to chaos in a minute, and it is hard to be heard over the noise. A few crowd techniques, such as a signal for quiet, a sit-down spot, a pre-planned calm activity and a known adult for upset children, keep the party safe and stop the birthday child from becoming overwhelmed.

                ## Milestones
                1. A quiet signal chosen and practised with your child beforehand.
                2. A calm activity ready for when energy gets too high.
                3. One adult named to look after upset or hurt children.
                4. A plan for the birthday child if they become overwhelmed.

                ## Notes
                Excitement peaks just before food and just before going home. Put a sit-down activity at both points.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quiet signal, a calm-down activity, a named comfort adult and a plan for the birthday child are written on the run sheet before the party."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose a quiet signal and practise it with your child"
                - "Prepare a sit-down activity such as a story or colouring table"
                - "Ask one adult to be the go-to person for upset children"
                - "Agree a quiet corner your child can retreat to if overwhelmed"
            - name: Coaching your child as host and guest
              description: |-
                ## Purpose
                Being the centre of attention, opening presents in public, losing at games and sharing new toys are hard for young children, and meltdowns at their own party are common. Rehearsing greeting guests, saying thank you for any gift and coping with losing turns party manners into skills they also use at other children's parties.

                ## Milestones
                1. Your child has practised greeting a guest at the door.
                2. A rule agreed on opening presents now or after the party.
                3. A role-play of losing a game and saying well done.
                4. A short chat after each party they attend about what went well.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your child has rehearsed greeting, thanking and losing gracefully at least twice before their party, and a present-opening rule is agreed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Role-play greeting a guest at the door with your child"
                - "Decide together whether presents are opened at the party or after"
                - "Practise losing a quick board game and saying well done"
                - "Talk through what went well after the next party they attend"
            - name: Choosing the party venue
              description: |-
                ## Purpose
                Home, a community hall, soft play, a sports centre or a farm each change the budget, the guest number, the work and the mess. Comparing three venues on the same criteria, including cost per child, what is included, the cancellation terms and how many adults you need, avoids a deposit on somewhere that does not fit.

                ## Milestones
                1. Three venues shortlisted that suit the age group and guest number.
                2. Each compared on price per child, inclusions, duration and cancellation terms.
                3. One visited or called with a list of questions.
                4. A venue booked with the deposit, terms and contact recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask what happens if numbers drop, and whether you may bring your own cake and food.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A venue is booked after comparing three options on price per child, inclusions and cancellation terms, with the booking confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three venues that take your guest number"
                - "Compare price per child, inclusions and cancellation terms"
                - "Call or visit your favourite with a written list of questions"
                - "Pay the deposit and file the booking confirmation"
            - name: Booking a children's entertainer safely
              description: |-
                ## Purpose
                An entertainer will be in charge of a room of other people's children, so checking credentials matters as much as checking reviews. Asking about public liability insurance, safeguarding checks, what the show includes and what happens if they fall ill means you book someone safe as well as fun.

                ## Milestones
                1. Two or three entertainers found through parent recommendations.
                2. Each asked for insurance, a background check and references.
                3. Show length, age range, set-up space and noise needs confirmed.
                4. A written booking with price, arrival time and a cancellation policy.

                ## Notes
                Start from the **Vendor** template. Ask what the entertainer does if a child is upset or will not join in.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One entertainer is booked in writing after confirming insurance, a background check and their cancellation policy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask other parents for entertainers their children enjoyed"
                - "Request proof of insurance and a background check from each"
                - "Confirm show length, age range and space needed"
                - "Get the booking, price and arrival time confirmed in writing"
            - name: Joint party with a classmate
              description: |-
                ## Purpose
                Two children with birthdays close together and the same friends can share a venue, an entertainer and half the work, often for much less than two separate parties. It works when the parents agree costs, guest list, cake and who runs the day before booking, not after.

                ## Milestones
                1. Both families agree in principle and both children are keen.
                2. Costs split agreed in writing, including deposits and extras.
                3. A shared guest list built from both children's lists.
                4. Two cakes or one, and two sets of candles, agreed with both children.

                ## Notes
                Agree in advance what happens if one family needs to pull out after the deposit is paid.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written agreement with the other family covers cost split, guest list, cake and roles before any deposit is paid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Message the other parent to suggest a joint party"
                - "Agree the cost split and who pays which deposits"
                - "Merge the two guest lists into one"
                - "Decide on cakes and candles so both children get their moment"
            - name: Party bags rethink
              description: |-
                ## Purpose
                Plastic bags of sweets and small toys can cost three to five pounds a child and are often thrown away by Monday. Deciding what goes home, a single book, a slice of cake, seeds to plant or something made at the party, saves money and waste without disappointing children who expect a bag.

                ## Milestones
                1. The cost and contents of your last party bags written down.
                2. Three alternatives priced per child.
                3. One option chosen and your child consulted.
                4. Bags or gifts prepared and counted before the party.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A party bag option is chosen after pricing three alternatives, and enough are ready for every guest and sibling the day before."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up what your last party bags cost per child"
                - "Price three alternatives such as a book, seeds or a craft kit"
                - "Choose one with your child"
                - "Make up enough bags for every guest plus two spares"
            - name: Presents policy for your child's party
              description: |-
                ## Purpose
                Thirty presents can overwhelm a small child and the house, and some families struggle with the cost of gifts. A clear, kind policy such as no gifts, a book swap, a small contribution towards one larger present or a charity collection, stated on the invitation, sets expectations for everyone.

                ## Milestones
                1. Options considered: open gifts, no gifts, book swap, pooled gift or charity.
                2. One option chosen with your child, who understands what it means.
                3. Gentle wording for the invitation agreed.
                4. A plan for any guests who bring gifts anyway.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A presents policy is chosen with your child and stated in the invitation wording before invitations go out."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Talk with your child about how many presents they really want"
                - "Choose between open gifts, a book swap, a pooled gift or charity"
                - "Write one kind sentence for the invitation"
                - "Decide how to thank guests who bring a gift anyway"
            - name: Cutting party costs your child will not notice
              description: |-
                ## Purpose
                Children remember the games, the cake and their friends, not the brand of napkins or a hired chocolate fountain. Going through the budget line by line to remove spending children do not see can free a third of the cost for the things they do remember.

                ## Milestones
                1. Last party's spending sorted into things the children noticed and things they did not.
                2. Three savings chosen, such as home-made decorations or a shorter venue slot.
                3. The money saved moved to the item your child cares about most.
                4. Final spend compared with the budget in the debrief.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three specific savings are chosen and the party comes in at or under budget, as shown in the debrief log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your child what they remember most from their last party"
                - "Mark each budget line as noticed or not noticed"
                - "Choose three cuts and write the saving next to each"
                - "Put the saving towards the thing your child cares about most"
            - name: Gift and attendance rules for invitations received
              description: |-
                ## Purpose
                Several parties in one weekend, gifts at fifteen pounds each and lifts across town add up fast for families with more than one child. A household rule on gift spend, how many parties per weekend and when it is fine to decline makes each invitation a quick decision rather than a debate.

                ## Milestones
                1. A standard gift spend agreed for classmates and for close friends.
                2. A limit on parties per weekend for each child.
                3. A polite decline message ready to send.
                4. The rules shared with the other parent or carers who do party runs.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written household rules set the gift spend, the weekend party limit and a decline message, and all adults who handle invitations know them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many parties each child went to last term"
                - "Agree a gift spend for classmates and for close friends"
                - "Set a limit on parties per weekend for each child"
                - "Write a friendly decline message you can reuse"
            - name: Inflatable and equipment hire safety checks
              description: |-
                ## Purpose
                Bouncy castles, soft play sets and garden games are popular, but accidents on inflatables are common and hire firms vary widely in standards. Checking that the firm has insurance, safety-tested equipment, proper anchoring and clear supervision rules before you pay protects every child who uses it.

                ## Milestones
                1. Two or three hire firms compared on insurance, safety testing and reviews.
                2. Space, ground surface and power supply checked against the firm's requirements.
                3. Supervision rules written: age groups, numbers at once, no shoes or food.
                4. A named adult on the inflatable at all times during the party.

                ## Notes
                Ask about wind limits. Many firms will not set up or will deflate in strong wind, so plan an alternative.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Equipment is hired only from a firm with insurance and a current safety test, and written supervision rules name an adult on duty."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each hire firm for insurance and safety test certificates"
                - "Measure the space and check the ground and power supply"
                - "Write the supervision rules for the inflatable"
                - "Name the adults who will take turns watching it"
            - name: First birthday celebration plan
              description: |-
                ## Purpose
                First birthdays are usually more for the adults than the baby, who will need a nap and may cry at the cake. Planning around the baby's routine, keeping the guest list to people the baby knows, and choosing food that suits babies and grown-ups makes it a happy family occasion rather than an exhausted one.

                ## Milestones
                1. A time chosen that fits around the baby's naps and feeds.
                2. A guest list of family and close friends with adult numbers known.
                3. Food planned for adults, older children and the baby.
                4. A quiet room set up where the baby can rest.

                ## Notes
                Check whole nuts, grapes and popcorn are out of reach of babies and toddlers at the party.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first birthday party takes place at a time fitted around the baby's sleep, with a quiet room ready and choking-hazard foods kept out of reach."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a party time that falls between the baby's naps"
                - "Draw up a guest list of family and close friends"
                - "Plan food for adults and baby-safe finger food"
                - "Set up a quiet room for the baby to rest during the party"
            - name: Outdoor party with a wet weather plan
              description: |-
                ## Purpose
                Garden and park parties are cheap and give children room to run, but a single downpour can leave twenty children in your kitchen. Deciding the indoor fallback, the cut-off time for switching and how guests will be told, before the invitations go out, turns bad weather into a minor change.

                ## Milestones
                1. An outdoor plan with games, shade, toilets and a base for food.
                2. A wet weather fallback chosen: a hall, a gazebo or a scaled-down indoor plan.
                3. A cut-off time set for deciding, usually the evening before.
                4. A message drafted to tell guests if the plan changes.

                ## Notes
                Public parks often need permission for gazebos or larger groups. Check with the local council or park owner.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An outdoor party plan includes a booked or prepared wet weather fallback, a decision time and a drafted message to guests."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check toilets, shade and any permission needed at the park"
                - "Choose a wet weather fallback and book it if needed"
                - "Set the evening-before cut-off for deciding"
                - "Draft the change of plan message to guests"
            - name: Party day run sheet and helper roles
              description: |-
                ## Purpose
                On the day you will not have time to think, and every adult will ask you what to do. A run sheet with times, who is on the door, who runs games, who serves food and who handles candles and cake lets you enjoy your child's party instead of directing traffic.

                ## Milestones
                1. A timed run sheet from set-up to last guest collected.
                2. Named helpers for door, games, food, cake and clean-up.
                3. A packing list for everything that goes to the venue.
                4. Helpers sent the run sheet two days before.

                ## Notes
                Start from the **Operational checklist** template. Put the collection time in large print by the door and do not let any child leave with an adult who is not on the RSVP list without checking.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed run sheet with named helpers and a packing list is shared two days before, and every child is handed back to a known adult."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a timed run sheet from set-up to last pick-up"
                - "Ask four adults to take door, games, food and cake roles"
                - "Make a packing list of everything that goes to the venue"
                - "Send the run sheet to helpers two days before"
            - name: Hosting a birthday sleepover
              description: |-
                ## Purpose
                Sleepovers become the party of choice from about eight or nine, and they bring their own questions: how many, what about bedtime, what if a child wants to go home at midnight. Setting the numbers, rules and a plan for homesick children with the other parents beforehand makes the night fun and the morning manageable.

                ## Milestones
                1. Guest number set at what you can supervise overnight, often four to six.
                2. Each parent told the plan, sleeping arrangements, film ratings and their contact number.
                3. Rules agreed with your child on lights out, phones and noise.
                4. A plan for a homesick child to be collected or comforted.

                ## Notes
                Ask every family about allergies, bedwetting, medication and night fears privately, and keep their answers confidential.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sleepover runs with a set guest number, written rules agreed with your child and a phone number for every guest's parent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the guest number and lights out time with your child"
                - "Send each parent the plan and ask privately about any needs"
                - "Decide where phones and tablets will be kept overnight"
                - "Prepare a breakfast and a set collection time"
            - name: Teenage milestone birthday celebration
              description: |-
                ## Purpose
                Thirteenth, sixteenth and eighteenth birthdays carry weight, and teenagers want a say in everything, often including not having you there. Planning together, with clear agreements on numbers, supervision, alcohol, transport home and how gatecrashers will be handled, keeps a big night safe without taking it over.

                ## Milestones
                1. A meeting with your teenager on what they want and what you will pay for.
                2. Agreements written on numbers, supervision, alcohol and an end time.
                3. Transport home arranged for every guest.
                4. A plan for gatecrashers, invitations shared online and anyone who becomes unwell.

                ## Notes
                Rules on alcohol and venues differ by age and country. Check the law where you live and the venue's own policy.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written agreement with your teenager covers numbers, supervision, alcohol, end time and transport, and every guest has a way home."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your teenager how they would like to mark the birthday"
                - "Agree numbers, end time and the rule on alcohol in writing"
                - "Ask your teenager not to post the invitation publicly"
                - "Make sure every guest has a confirmed lift or taxi home"
            - name: Birthday at school or nursery
              description: |-
                ## Purpose
                Many schools and nurseries have rules on birthday treats, from no homemade food to no sweets at all, because of allergies. Knowing the policy and agreeing how the day is marked, such as a book donated to the class library or a sticker for each child, avoids a cake being turned away at the door.

                ## Milestones
                1. The school or nursery's birthday and food policy found.
                2. A way to mark the day chosen within that policy.
                3. Anything sent in labelled with ingredients if food is allowed.
                4. Your child told what will happen in class on their birthday.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your child's birthday is marked at school or nursery in a way that follows its written birthday and food policy."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the class teacher or key worker about the birthday policy"
                - "Choose a book, stickers or approved treat to send in"
                - "Label any food with a full ingredient list"
                - "Check whether the policy has changed each new school year @recurring(yearly)"
            - name: Experience day out with a few friends
              description: |-
                ## Purpose
                Older children often prefer a trip to a trampoline park, climbing wall, cinema or theme park with three or four close friends over a big party. A small outing needs its own planning: tickets, transport, how many adults, permissions from other parents and a meeting point if someone gets lost.

                ## Milestones
                1. An outing chosen with your child and priced for the group.
                2. Tickets booked and the number of adults set for the age and activity.
                3. Each parent given the plan, timings and a signed permission if needed.
                4. A meeting point and phone numbers agreed with every child.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day out runs with booked tickets, enough adults for the group and written permission and contact details from each family."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your child which outing and which friends they would choose"
                - "Book tickets and decide how many adults are needed"
                - "Send each parent the plan and ask for any medical details"
                - "Agree a meeting point the children can find if separated"
            - name: Party for a child with additional needs
              description: |-
                ## Purpose
                Noise, crowds, surprises and unstructured time can turn a party into an ordeal for an autistic child or one with sensory, mobility or medical needs. Shaping the party around what your child can enjoy, with a visual timetable, a quiet space and fewer guests if that is better, makes it their celebration rather than an endurance test.

                ## Milestones
                1. A list of what your child finds hard and enjoyable at events.
                2. A format and guest number chosen around those needs.
                3. A visual timetable or social story for the day prepared.
                4. A quiet space and a plan for leaving early if needed.

                ## Notes
                Some venues offer quiet sessions or private hire for families with additional needs. Ask before booking.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The party plan includes a visual timetable, a quiet space and a guest number chosen around your child's needs, shared with helpers beforehand."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write what your child finds hard and what they enjoy at events"
                - "Ask local venues about quiet sessions or private hire"
                - "Make a visual timetable of the party with your child"
                - "Brief helpers on the quiet space and early exit plan"
            - name: Birthday parties across two households
              description: |-
                ## Purpose
                After separation, children worry about whether both parents will come, which home the party is at and whether they will be caught in the middle. Agreeing the birthday arrangements with the other parent early, in writing and well before the day, protects your child's birthday from adult tension.

                ## Milestones
                1. A conversation with the other parent about who hosts and who attends.
                2. Costs and presents agreed so nothing is duplicated or competitive.
                3. Arrangements written down in a short message both parents confirm.
                4. Your child told the plan by both parents, calmly and in the same words.

                ## Notes
                If the parents cannot be in the same room, two smaller celebrations are usually kinder than one tense party.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both parents have confirmed in writing who hosts, who attends, cost split and presents for the birthday at least four weeks before."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Message the other parent to start planning the birthday"
                - "Agree who hosts, who attends and how costs are split"
                - "Confirm the arrangements in one written message"
                - "Revisit the birthday arrangements with the other parent @recurring(yearly)"
            - name: Shared party for twins or siblings
              description: |-
                ## Purpose
                Twins and siblings with birthdays a few weeks apart often end up with one shared party, which saves money but can leave each child feeling like half a guest of honour. Giving each child their own cake, song, guests and a choice within the shared plan keeps the economy without losing the individual.

                ## Milestones
                1. Each child asked separately what they want from the party.
                2. Separate cakes or separate candles and songs planned.
                3. Each child's own guests on the list, with shared friends agreed.
                4. One part of the day chosen by each child alone.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The shared party plan gives each child their own cake or song, their own guests and one element they chose alone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each child privately what matters most to them"
                - "Plan two cakes or two separate candle moments"
                - "Build the guest list with each child's own friends"
                - "Let each child choose one game or food on their own"
            - name: A good party on a tight budget
              description: |-
                ## Purpose
                When money is short the pressure to match other families' parties can be painful, but children rarely need more than friends, games, cake and a bit of fuss. A home or park party with simple food and classic games can cost a fraction of a venue party and be just as loved.

                ## Milestones
                1. A firm ceiling set that does not touch essential bills.
                2. A free or low-cost location chosen, such as home, a park or a friend's garden.
                3. Classic games and a home-made cake planned in place of paid entertainment.
                4. Food bought in bulk or shared with another family.

                ## Notes
                It is fine to say no gifts or to invite fewer children. Many parents are quietly relieved when someone sets a simpler standard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A party is held within a stated low ceiling, without paid venue or entertainment, and the final cost is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a firm spending ceiling that leaves bills untouched"
                - "Choose home, a park or a friend's garden as the venue"
                - "Plan three classic games that need no hired kit"
                - "Write a short shopping list and stick to it"
            - name: Party to help a child settle at a new school
              description: |-
                ## Purpose
                A child who has moved schools or areas may have few friends to invite and worry nobody will come. A small, low-pressure party or activity with a handful of classmates, organised with help from the teacher and other parents, can turn acquaintances into friends faster than a term of playtimes.

                ## Milestones
                1. The class teacher asked who your child plays with or gets on with.
                2. A small format chosen that does not depend on a big turnout.
                3. Parents of invited children contacted personally, not just through book bags.
                4. A follow-up playdate arranged with one or two children afterwards.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A small party with at least three classmates takes place, and at least one follow-up playdate is booked within a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the teacher which classmates your child gets on with"
                - "Choose a small activity that works with four or five children"
                - "Message the invited children's parents personally"
                - "Book a playdate with one guest within a month of the party"
            - name: Birthday close to Christmas or the summer holidays
              description: |-
                ## Purpose
                Children born in late December or the long summer break often find friends away, venues full and their birthday absorbed into other celebrations. Choosing a different party date, such as a half birthday, or booking early around the holidays gives them a celebration that is clearly theirs.

                ## Milestones
                1. The usual clash for your child's birthday identified.
                2. A party date chosen away from the clash, or a half birthday agreed.
                3. Venues and guests contacted earlier than usual.
                4. Birthday presents and wrapping kept separate from festive ones.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A party date clear of the holiday clash is chosen and booked at least ten weeks ahead, with presents kept separate from festive gifts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note which holiday or festival your child's birthday clashes with"
                - "Ask your child whether a half birthday party appeals"
                - "Book the venue ten weeks ahead of the chosen date"
                - "Buy birthday wrapping paper that is not festive"
            - name: Your allergic child at other people's parties
              description: |-
                ## Purpose
                For a child with a serious food allergy, every party invitation needs a plan: what the host is serving, who carries the medication and whether you stay. A routine of phoning the host, sending safe food and a labelled kit lets your child go to parties with friends without either of you dreading it.

                ## Milestones
                1. A standard message to hosts explaining the allergy and what helps.
                2. A safe treat box kept ready so your child has their own cake and snacks.
                3. A decision rule on when you stay and when your child can go alone.
                4. The emergency plan from your child's clinician copied for hosts if you leave.

                ## Notes
                Follow the allergy action plan from your child's clinician. Hosts are not medical staff and should not be expected to judge symptoms.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every party your allergic child attends has a confirmed conversation with the host, safe food sent and medication present with a trained adult."
                cadence: rolling
              tasks:
                - "Write a short message to hosts explaining the allergy"
                - "Freeze safe cupcakes for your child to take to parties"
                - "Restock the safe treat box and check medication dates @recurring(monthly:18)"
                - "Agree with your child when you will stay at a party"
            - name: Food safety plan for catering thirty children
              description: |-
                ## Purpose
                Home catering for a big party means food sitting out for hours, small children near hot drinks and allergens in shared bowls. A written plan for chilling, serving times, choking hazards for under-fives and keeping allergen-free food separate is what experienced hosts use to keep everyone safe.

                ## Milestones
                1. Each food item listed with its storage needs and maximum time out of the fridge.
                2. Choking hazards for under-fives identified and prepared safely, such as grapes cut lengthways.
                3. Allergen-free food prepared first, labelled and served separately.
                4. Hot drinks kept on a separate table away from children.

                ## Notes
                Your local food safety authority publishes guidance on how long food can safely sit at room temperature. Use it to set serving times.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written food safety plan covers chilling, serving times, choking hazards and separate allergen-free food, and every helper has read it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every party food with its storage needs and time out"
                - "Note choking hazards and how you will prepare each one"
                - "Plan to make allergen-free food first and keep it covered"
                - "Set up a separate table for hot drinks away from children"
            - name: Safeguarding and first aid plan for drop-off parties
              description: |-
                ## Purpose
                Once parents drop off and leave, you are responsible for every child in the room, including their safety, medicines and who takes them home. A plan for headcounts, a stocked first aid kit, a first aider on hand, toilet supervision and checked collection makes you a host other parents trust.

                ## Milestones
                1. A headcount routine at arrival, after each move and before collection.
                2. A first aid kit checked and a helper with first aid training named.
                3. Medicines and medical notes for any child logged with the parent's instructions.
                4. A collection rule: children leave only with the adult named on the RSVP.

                ## Notes
                A short paediatric first aid course is worth doing if you host often. Keep the venue address and nearest emergency department written on the run sheet.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written safeguarding plan names a first aider, sets a headcount routine and a collection rule, and every child is signed back to a named adult."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the headcount routine on the party run sheet"
                - "Ask a helper with first aid training to be on hand"
                - "Check the first aid kit contents and expiry dates @recurring(quarterly)"
                - "Collect each parent's mobile number and collection name at drop-off"
            - name: Shared party kit library with other families
              description: |-
                ## Purpose
                Every family in a class buys the same tableware, bunting, games and cake tins, uses them twice a year and stores them the rest of the time. A small lending library run with a few other families cuts everyone's costs and waste, and works best with a simple loan log and clear rules on breakages.

                ## Milestones
                1. Three to six families agree to pool their party kit.
                2. An inventory of shared items with photos and who stores them.
                3. Lending rules written on booking, cleaning and breakages.
                4. A shared loan log in use for every borrowing.

                ## Notes
                Keep it small to start. A shared spreadsheet and one storage box per family is enough.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "At least three families share a written inventory and lending rules, and each loan is recorded in a shared log."
                cadence: rolling
              tasks:
                - "Ask two or three families in the class if they would share kit"
                - "List what each family can lend, with photos"
                - "Write simple rules for booking, cleaning and breakages"
                - "Update the loan log and chase overdue items @recurring(monthly:28)"
---

# Children's Birthday Parties

This area covers children's birthday parties from the first conversation about what your child wants to the last thank-you note, for parents who want a good party without a month of stress or a frightening bill. It opens with the foundations (budget, format, guest list, date, allergies and a back-planned timeline), moves through the year-round machinery of birthday reminders, a party pot and a present cupboard, then the skills of running games, baking and handling a room of excited children, the venue, entertainer and gift decisions, dated events from a first birthday to a sleepover or an eighteenth, the situations that change the plan, and finally food safety, safeguarding and a shared kit library for experienced hosts.

What repeats is a monthly look at upcoming birthdays, a monthly transfer into the party pot, a weekly check of the book bag for invitations, quarterly kit and first aid checks, and a yearly reset of budgets, allergy notes and arrangements with the other parent where there is one. The Operational checklist, Savings goal, Purchase decision, Vendor, Metrics log and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
