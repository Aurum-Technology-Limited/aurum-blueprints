---
id: relationships.thoughtful-gestures-surprises
name: Thoughtful Gestures & Surprises
description: "Notice what the people closest to you love, then turn it into hidden notes, posted cards, well-timed good-luck kits and small surprises between the big occasions."
category: personal
version: 1.0.0
tags: [relationships, thoughtful-gestures-surprises, everyone, partners, friends, surprises, handwritten-notes]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - savings-goal
    - habit-tracker
    - metrics-log
    - vendor
    - trip
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Thoughtful Gestures & Surprises
          description: "Planning small surprises, notes and thoughtful gestures for partners and friends that show attention between big occasions."
          projects:
            - name: Shortlist of the people you most want to surprise
              description: |-
                ## Purpose
                Attention spread across forty people turns into nobody getting much, so the first decision is who sits at the centre: usually a partner and four or five friends or relatives. Writing the shortlist down, with one line on what is happening in each person's life right now, gives every later gesture a home and makes it obvious when someone has gone months without one.

                ## Milestones
                1. A list of five to seven people you want to show more attention to this year.
                2. One line beside each name on what is going on in their life right now.
                3. Each person tagged as partner, close friend or family.
                4. A separate occasional list for people you would like to remember now and then.

                ## Notes
                Keep the core list short. You can add someone once you have kept up with the first five for three months.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written shortlist of five to seven names, each with a note on their current life, exists in your notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the five to seven people you most want to make feel noticed"
                - "Note one current thing in each person's life beside their name"
                - "Tag each name as partner, close friend or family"
                - "Move everyone else to an occasional list"
            - name: Gesture profile for each person on your shortlist
              description: |-
                ## Purpose
                Good surprises come from detail: the exact coffee order, the biscuit they always take, the flowers they think look funereal, the author they keep meaning to read. A one-page profile per person turns half-remembered facts into something you can act on at short notice, and stops you buying the wrong thing for the tenth time.

                ## Milestones
                1. A profile page for each person on your shortlist.
                2. Favourite food, drink, snack and treat recorded for each.
                3. Dislikes, allergies and things they have asked people not to buy noted.
                4. Current interests, worries and projects written in a line or two.
                5. Each profile checked against something they said in the last month.

                ## Notes
                Start from the **Person** template. Write what you know, not what you assume; a blank field is a prompt to listen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every shortlisted person has a profile with at least five specific likes and two dislikes or allergies recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a profile page for the first person on your shortlist"
                - "Write down their exact coffee, tea or drink order"
                - "Record allergies, dislikes and things they never want bought"
                - "Add one current worry and one current project to each profile"
                - "Fill in the remaining profiles over the next fortnight"
            - name: Phone capture list for things people mention
              description: |-
                ## Purpose
                Most perfect gesture ideas arrive in passing: a friend says she misses the bakery from her old town, your partner mentions a band they loved at sixteen. Unless the remark goes somewhere within a minute it is gone. A single capture note on your phone, swept into the profiles once a week, keeps these offhand comments until you can use them.

                ## Milestones
                1. One capture note pinned to the home screen of your phone.
                2. At least ten passing remarks captured in the first month.
                3. Each captured item moved into the right person's profile within a week.
                4. The capture note emptied at every weekly sweep.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The capture note holds no item older than seven days, and at least ten remarks reached profiles in the first month."
                cadence: rolling
              tasks:
                - "Pin a capture note called Things people mention to your phone's home screen"
                - "Add the last three things people mentioned that you can still remember"
                - "Set a widget or shortcut that opens the note in one tap"
                - "Sweep the capture note into each person's profile @recurring(weekly:sat)"
            - name: Finding out how each person feels about surprises
              description: |-
                ## Purpose
                Some people light up at a party in their honour; others find it mortifying, and a surprise that ignores that is really about the giver. Knowing whether each person prefers private or public, planned or spontaneous, small or lavish saves you from the well-meant gesture that makes someone squirm.

                ## Milestones
                1. Each shortlisted person placed on a scale from loves surprises to prefers warning.
                2. A public or private preference recorded for each.
                3. At least two people asked directly in a natural conversation.
                4. Anything they have said about past surprises that went badly noted in their profile.

                ## Notes
                Asking a partner straight out is fine. For friends, a story about a surprise you saw go wrong is an easy way in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every profile records a surprise preference and a public or private preference, with at least two confirmed directly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Recall how each person reacted to the last surprise they were given"
                - "Ask your partner whether they like surprises, and how big"
                - "Bring up a surprise story with two friends and note their reactions"
                - "Record each person's surprise and privacy preference in their profile"
            - name: Yearly fund for small gestures
              description: |-
                ## Purpose
                Small gestures add up: a bunch of tulips, a posted parcel and two coffees dropped round can cost as much as a meal out in a month without anyone noticing. Setting a modest yearly figure, saved monthly into its own pot, lets you say yes to the spontaneous idea without guilt and without raiding the birthday budget.

                ## Milestones
                1. The last three months of spending on flowers, cards, treats and postage added up.
                2. A yearly gestures figure chosen that fits the household budget.
                3. A separate pot or envelope set up for it.
                4. A monthly amount moving into the pot automatically.

                ## Notes
                Start from the **Savings goal** template. Most of the best gestures in this area cost little or nothing; the fund is for the ones that do.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named gestures pot exists with a standing monthly transfer that reaches the yearly figure you chose."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add up what you spent on flowers, cards, treats and postage in the last three months"
                - "Choose a yearly figure for small gestures"
                - "Open a savings pot or envelope named for gestures"
                - "Set up a standing monthly transfer into the pot"
            - name: Gesture supplies drawer at home
              description: |-
                ## Purpose
                The moment a note or a small parcel would make someone's day is often the moment you discover there are no stamps, no blank cards and no pen that works. A drawer stocked with the basics turns a passing idea into a five-minute job instead of a shopping trip that never happens.

                ## Milestones
                1. One drawer or box cleared and kept for gesture supplies.
                2. Blank cards, notelets, sticky notes, envelopes and a book of stamps in it.
                3. A good pen, tape, string, tissue paper and a few padded envelopes added.
                4. A short restock list taped inside the drawer.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single drawer holds at least ten blank cards, a book of stamps, padded envelopes and wrapping basics, with a restock list inside."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Clear one drawer or box for cards, notes and wrapping basics"
                - "Buy ten blank cards, a pad of sticky notes and a book of stamps"
                - "Add padded envelopes, tape, string and tissue paper"
                - "Tape a restock list inside the drawer"
                - "Restock cards, stamps and envelopes from the list @recurring(quarterly)"
            - name: Ideas bank of gestures sorted by time and cost
              description: |-
                ## Purpose
                When you have ten minutes and want to do something kind, the hardest part is thinking of what. A bank of forty ideas, sorted into free and five minutes, under the price of a coffee, and worth an afternoon, lets you pick one in seconds and match it to the energy and money you actually have that week.

                ## Milestones
                1. At least forty gesture ideas written down.
                2. Every idea tagged by time needed and rough cost.
                3. Ideas marked as suitable for a partner, a friend or both.
                4. At least ten ideas that need no money at all.

                ## Notes
                Borrow shamelessly from gestures people have made for you; they are proof of what lands.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bank of at least forty gesture ideas exists, each tagged by time and cost, with ten that cost nothing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every thoughtful thing someone has done for you that you still remember"
                - "Ask the agent to suggest twenty more small gestures that cost under the price of a coffee"
                - "Tag every idea as five minutes, an hour or an afternoon"
                - "Mark each idea for a partner, a friend or both"
            - name: Calendar of big days that are not birthdays
              description: |-
                ## Purpose
                The days people remember being supported on are rarely birthdays: the first morning in a new job, the driving test, the hospital appointment, moving day, the date a parent died. Putting these on a calendar as people mention them, with a reminder the day before, gives you the moments where one text or a dropped-off coffee matters most.

                ## Milestones
                1. A calendar or list set up just for other people's big days.
                2. Every upcoming big day you currently know about entered with a reminder the day before.
                3. Hard anniversaries, such as a bereavement date, added where you know them.
                4. New dates added on the day you hear about them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated calendar holds every known upcoming big day for your shortlist, each with a reminder the day before."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a separate calendar for other people's big days"
                - "Enter every interview, exam, move or appointment you know is coming"
                - "Add known hard anniversaries for people on your shortlist"
                - "Set each entry to remind you the day before"
            - name: Three-month look back at gestures given and received
              description: |-
                ## Purpose
                Before building new habits, it helps to see the pattern you already have. Listing the gestures you gave and received over the last three months usually turns up a few surprises: a partner who gets the leftovers of your attention, one friend who always makes the first move, a relative you only think of in December.

                ## Milestones
                1. Every gesture you made in the last three months listed by person.
                2. Gestures you received listed the same way.
                3. Relationships that are lopsided in either direction marked.
                4. One neglected person chosen as the first to receive something.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-column list of gestures given and received in the last three months exists, with one neglected person chosen to start with."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Scroll your messages and photos from the last three months for gestures you made"
                - "List gestures you received from each person in the same period"
                - "Mark the relationships that are lopsided in either direction"
                - "Choose one neglected person to make the first gesture for this week"
            - name: Sunday ten-minute gesture planning slot
              description: |-
                ## Purpose
                Thoughtfulness that depends on remembering in the moment tends to happen in bursts and then vanish for months. Ten minutes every Sunday with the big-days calendar, the capture list and the ideas bank is enough to choose one gesture for the week ahead and put it in the diary.

                ## Milestones
                1. A recurring ten-minute slot on Sunday evenings blocked in your calendar.
                2. One gesture chosen and scheduled each week.
                3. The coming fortnight's big days checked and a plan made for each.
                4. Eight weeks of the slot kept in a row.

                ## Notes
                Start from the **Habit tracker** template. If Sunday is busy, any fixed day works; what matters is that it repeats.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly planning slot has been kept for eight consecutive weeks with at least one gesture scheduled each time."
                cadence: rolling
              tasks:
                - "Block ten minutes on Sunday evenings for gesture planning"
                - "Choose and schedule one gesture for the week ahead @recurring(weekly:sun)"
                - "Check the big-days calendar for the next fortnight"
                - "Mark each kept slot on a habit tracker"
            - name: Monthly unprompted gesture for one friend
              description: |-
                ## Purpose
                Friends often get attention only when something goes wrong or a date comes round. Picking one friend a month for a gesture with no reason behind it, a book left on their doorstep or a voice note about a walk you once did together, tells them they are on your mind on an ordinary Tuesday.

                ## Milestones
                1. A rotation order set for the friends on your shortlist.
                2. One unprompted gesture delivered to a friend each month.
                3. Each gesture noted in that friend's profile so you do not repeat it.
                4. Every friend on the list reached at least once in six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each friend on your shortlist has received at least one unprompted gesture in any six-month window, logged in their profile."
                cadence: rolling
              tasks:
                - "Put your shortlisted friends in a rotation order"
                - "Pick this month's friend and an idea from the ideas bank @recurring(monthly:9)"
                - "Deliver the gesture without tying it to any occasion"
                - "Log the gesture in that friend's profile"
            - name: Hidden notes for your partner
              description: |-
                ## Purpose
                Hidden in a coat pocket, a lunchbox or the book they are halfway through, a two-line note costs nothing and gets kept far longer than most presents. Hiding one a week, in places that change, keeps the habit light and gives your partner small finds on ordinary days.

                ## Milestones
                1. A stack of small cards or sticky notes kept somewhere private.
                2. A list of a dozen hiding places your partner will find within a few days.
                3. One note hidden each week for two months.
                4. At least half the notes mentioning something specific from that week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight hidden notes delivered over two months, each in a different place, with half referring to something specific."
                cadence: rolling
              tasks:
                - "Keep a stack of small cards somewhere your partner will not look"
                - "List a dozen places your partner will find a note within days"
                - "Hide one short note in a new place @recurring(weekly:wed)"
                - "Write about something from that week rather than a general compliment"
            - name: Thinking-of-you messages with a shared memory
              description: |-
                ## Purpose
                Messages that just say you are thinking of someone are pleasant; one with an old photo and a line about the night the tent flooded is remembered. Sending one memory-based message a week, rotating through your shortlist, keeps friendships warm between meetings using nothing but your camera roll.

                ## Milestones
                1. An album of favourite photos with each shortlisted person gathered on your phone.
                2. One memory message sent each week.
                3. Each message naming a specific moment rather than a general sentiment.
                4. Every person on the shortlist sent at least one in two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One memory message sent per week for eight weeks, reaching every shortlisted person at least once."
                cadence: rolling
              tasks:
                - "Gather your favourite photos with each shortlisted person into one album"
                - "Send one photo with a line about that specific moment @recurring(weekly:fri)"
                - "Note in each profile which photos you have already sent"
                - "End each message with a question so it can become a conversation"
            - name: A posted card or letter every month
              description: |-
                ## Purpose
                Post that is not a bill or a parcel has become rare, which is exactly why a handwritten card lands so well. Sending one a month, rotating between friends, family and your partner, adds up to twelve kept cards a year for the price of stamps.

                ## Milestones
                1. Postal addresses for everyone on your shortlist in one place.
                2. One card or letter posted each month.
                3. Each card naming something specific about the person or a recent conversation.
                4. A note of who has received post and when.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve cards or letters posted in a year, each logged with recipient and date."
                cadence: rolling
              tasks:
                - "Collect postal addresses for everyone on your shortlist"
                - "Write and post one card or letter @recurring(monthly:14)"
                - "Log who received post and when"
                - "Keep two stamped blank cards in your bag for spare moments"
            - name: Follow-up message after someone's big day
              description: |-
                ## Purpose
                Asking how it went the evening after someone's interview, scan or first day back at work shows you were listening when they told you. A Monday check of the big-days calendar, with follow-ups set as reminders, turns good intentions into messages that arrive on time rather than a week late.

                ## Milestones
                1. Every big day on the calendar paired with a follow-up reminder for that evening or the next morning.
                2. Follow-ups sent for every big day in a month.
                3. Replies noted in profiles where they reveal something to remember.
                4. A second check-in sent a week later for anything that went badly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one full month, every big day on the calendar received a follow-up message within 24 hours."
                cadence: rolling
              tasks:
                - "Review this week's big days and set follow-up reminders @recurring(weekly:mon)"
                - "Send a good-luck message on the morning of each big day"
                - "Send a how-did-it-go message the same evening or the next morning"
                - "Check back a week later on anything that went badly"
            - name: Quarterly surprise for your partner
              description: |-
                ## Purpose
                Between notes and birthdays there is room for something bigger once a season: tickets to the comedian they quoted all week, a takeaway from the town where you met, a clear Saturday with the chores already done. One planned surprise a quarter keeps the feeling of being thought about without turning every week into a production.

                ## Milestones
                1. Four quarterly surprise windows placed in the calendar for the year.
                2. An idea chosen at least three weeks before each window.
                3. Bookings or purchases made in time and kept secret.
                4. A note afterwards on how it landed and what to repeat.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four partner surprises delivered within the year, one per quarter, each with a short note on how it landed."
                cadence: cyclic
              tasks:
                - "Mark four surprise windows in the year, one per quarter"
                - "Choose the next surprise from your partner's profile three weeks ahead @recurring(quarterly)"
                - "Book or buy what the surprise needs and hide the evidence"
                - "Write two lines afterwards on how it landed"
            - name: Monthly gestures spend and log check
              description: |-
                ## Purpose
                Without a glance at the numbers, small treats drift above what you meant to spend, and without a log you end up giving the same chocolates twice. A short monthly check of spending against the gestures fund, and of the log by person, keeps both honest.

                ## Milestones
                1. A simple log of every gesture with date, person, idea and cost.
                2. Spending compared with the monthly amount in the gestures fund.
                3. People with no gesture in three months flagged.
                4. Repeated gestures spotted and swapped for something new.

                ## Notes
                Start from the **Metrics log** template. Free gestures go in the log too; they are most of what matters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The gestures log is updated monthly for six months, with spend compared to the fund and neglected people flagged each time."
                cadence: rolling
              tasks:
                - "Set up a gestures log with date, person, idea and cost"
                - "Compare this month's spend with the gestures fund @recurring(monthly:28)"
                - "Flag anyone with no gesture in the last three months"
                - "Swap any repeated gesture for a new idea from the bank"
            - name: Seasonal small-gesture plan
              description: |-
                ## Purpose
                Each season offers gestures that would not work in any other: the first strawberries dropped round in early summer, a flask of soup on a cold touchline, a sprig of lilac from the garden. Planning three seasonal ideas at the turn of each quarter puts the calendar to work for you.

                ## Milestones
                1. Three gesture ideas listed for each season of the year.
                2. Each idea matched to a person on your shortlist.
                3. The current season's ideas scheduled in the first fortnight of the quarter.
                4. Ideas that worked kept for next year's list.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four-season list holds three matched ideas per season, and the current quarter's ideas are scheduled."
                cadence: cyclic
              tasks:
                - "Ask the agent for seasonal produce, flowers and events in your region by month"
                - "List three seasonal gesture ideas for each quarter"
                - "Match each idea to someone on your shortlist"
                - "Schedule this season's ideas at the start of the quarter @recurring(quarterly)"
            - name: Yearly refresh of profiles and the shortlist
              description: |-
                ## Purpose
                People change: a friend goes vegetarian, your partner falls out of love with a band, a colleague becomes a close friend. Rereading every profile and the shortlist once a year keeps your gestures aimed at the person as they are now, not as they were when you first wrote it down.

                ## Milestones
                1. Every profile reread and corrected.
                2. Outdated likes removed and new interests added.
                3. The shortlist reconsidered, with people added or moved to the occasional list.
                4. The year's three best-received gestures noted for each person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every profile shows a review date within the last twelve months and the shortlist has been reconfirmed."
                cadence: cyclic
              tasks:
                - "Reread each profile and strike out anything no longer true @recurring(yearly)"
                - "Add new interests, worries and dislikes picked up this year"
                - "Decide who joins or leaves the shortlist"
                - "Note the three best-received gestures for each person"
            - name: Writing short notes that sound like you
              description: |-
                ## Purpose
                Faced with a blank card, many people freeze and fall back on a line that could be to anyone. A simple pattern, one specific thing you noticed, why it mattered to you, and a light sign-off, makes notes quick to write and unmistakably yours, and it improves with a few weeks of practice.

                ## Milestones
                1. The notice, meaning and sign-off pattern written on a card in your supplies drawer.
                2. Ten practice notes drafted for people on your shortlist.
                3. At least five of them delivered.
                4. A list of your own natural phrases and sign-offs kept for reference.

                ## Notes
                Handwriting matters less than people fear. A short note in a messy hand beats a long printed one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten notes drafted using the three-part pattern, with at least five delivered within a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the notice, meaning, sign-off pattern on a card for your drawer"
                - "Draft three practice notes for people on your shortlist"
                - "Read each note aloud and cut any line that could be about anyone"
                - "Collect phrases and sign-offs that sound like you"
            - name: Quietly fixing the small annoyances people mention
              description: |-
                ## Purpose
                Some of the most appreciated gestures are invisible: the wobbly chair leg mended, the bike tyre pumped, the frayed charger by the bed replaced, the gutter cleared at an older friend's house. Hearing a complaint as a small job, and doing it without being asked, says you listened more clearly than flowers do.

                ## Milestones
                1. A list of five small frustrations people close to you have mentioned recently.
                2. One fixed each month, without announcing it in advance.
                3. Basic tools and spares, such as batteries and bulbs, kept ready.
                4. The reaction to each fix noted, including whether they would rather have been asked.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least one mentioned annoyance fixed unasked each month for six months, each recorded in the gestures log."
                cadence: rolling
              tasks:
                - "List five small frustrations your partner or friends have mentioned lately"
                - "Fix one small annoyance someone mentioned @recurring(monthly:20)"
                - "Keep batteries, bulbs and a basic tool kit ready"
                - "Check before touching anything personal or valuable that they would welcome it"
            - name: Recruiting accomplices for a surprise
              description: |-
                ## Purpose
                Many good surprises need help: a flatmate to let you in, a colleague to keep someone late, a sibling who knows their ring size. Learning to brief helpers clearly, tell each only what they need to know and keep messages off shared devices stops most surprises leaking before the day.

                ## Milestones
                1. A list of likely helpers for each person on your shortlist.
                2. A short helper brief written covering what, when and what not to say.
                3. A private channel set up for helpers, away from shared family devices.
                4. One surprise delivered with help and no leak.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One surprise delivered with at least one helper briefed in writing, without the recipient finding out beforehand."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List who could help you surprise each person on your shortlist"
                - "Write a three-line helper brief covering what, when and what not to say"
                - "Set up a private group chat away from any shared devices"
                - "Thank every helper afterwards with a note or small treat"
            - name: Timing a gesture so it lands
              description: |-
                ## Purpose
                The same bunch of flowers means something different on a random Tuesday, the morning of a hard meeting, or a fortnight after a funeral when everyone else has gone quiet. Learning to choose the day before rather than the day after, and the quiet weeks after a crisis rather than the crowded first day, makes small gestures count for more.

                ## Milestones
                1. Three timing rules written down from your own experience of being supported.
                2. The quiet weeks after a big event, usually two to four, marked for anyone going through one.
                3. Three gestures deliberately timed and their effect noted.
                4. The times of day that suit each person recorded in their profile.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three gestures delivered at deliberately chosen times, with written notes comparing their effect to untimed ones."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down when support meant most to you and why"
                - "Mark the quiet weeks after any bereavement, birth or move you know of"
                - "Time your next three gestures on purpose and note the reaction"
                - "Record the times of day that suit each person in their profile"
            - name: Three home-made treats worth giving
              description: |-
                ## Purpose
                Home-made granola, shortbread or chutney left on a doorstep is a gift that clearly took time. Mastering three reliable recipes that keep well and travel in a jar or tin gives you an instant gesture whenever someone needs cheering, at a fraction of shop prices.

                ## Milestones
                1. Three recipes chosen that keep for at least a week.
                2. Each made twice until it comes out reliably.
                3. Jars, tins and labels stocked in the supplies drawer.
                4. Ingredients and allergy information written on each label.

                ## Notes
                Check each person's profile for allergies before giving food, and list the ingredients on the label every time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recipes each made successfully twice, with labelled jars or tins ready to give."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three recipes that keep for a week and travel well"
                - "Make the first recipe and note what to change next time"
                - "Buy jars, tins and plain labels for the supplies drawer"
                - "Give your first batch to someone on your shortlist"
            - name: Packing a care parcel that arrives intact
              description: |-
                ## Purpose
                Parcels that arrive crushed, melted or stuck in customs undo the thought behind them. Knowing what travels, how to pack it and what your postal service allows for food, liquids and overseas addresses means care parcels arrive the way you packed them.

                ## Milestones
                1. Your postal service's rules on food, liquids and batteries read.
                2. A box size and padding method chosen that fits a standard postage band.
                3. A test parcel sent and its condition on arrival checked.
                4. A short list of items that travel well kept in the supplies drawer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test care parcel arrives intact within the expected time, and a written list of items that travel well exists."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your postal service's rules on food, liquids and batteries"
                - "Find the largest box size in the cheapest postage band"
                - "Send a test parcel to a friend and ask how it arrived"
                - "Write a list of treats that survive the post"
            - name: Making a playlist with a note for each track
              description: |-
                ## Purpose
                Music chosen for one person, with a line on why each song is there, takes an evening to put together and gets replayed for years. Building a playlist around a theme, such as songs from the summer you met or music for their long commute, is a small craft that suits partners and friends alike.

                ## Milestones
                1. A theme chosen for one specific person.
                2. Twelve to twenty tracks chosen and put in order.
                3. A line written for each track explaining why it is there.
                4. The playlist shared with its notes on a printed card or in a message.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One themed playlist of twelve to twenty tracks, with a written note per track, delivered to a named person."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose a person and a theme for the playlist"
                - "Shortlist thirty tracks and cut to the best twelve to twenty"
                - "Write one line for each track on why it made the list"
                - "Share the playlist with its notes on a printed card"
            - name: Photo prints and mini albums from your phone
              description: |-
                ## Purpose
                Thousands of shared photos sit unseen in camera rolls. Printing a handful, framing one, or making a twenty-page mini album of a trip you took together produces something people stick on the fridge, and learning one print service and a simple layout makes it easy to repeat.

                ## Milestones
                1. A print service chosen for small prints and mini albums.
                2. One set of six prints ordered for someone on your shortlist.
                3. A twenty-page mini album laid out and ordered.
                4. Delivery times noted so future prints arrive before they are needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Six prints and one mini album delivered to people on your shortlist, with the service's turnaround time recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a print service and note its turnaround time"
                - "Choose six photos for one person and order them as prints"
                - "Lay out a twenty-page mini album of a trip you shared"
                - "Frame one print and leave it where they will find it"
            - name: Choosing where gesture reminders live
              description: |-
                ## Purpose
                Profiles, the capture list, big days and the gestures log only help if they live somewhere you will actually open. Deciding between your calendar, a notes app, a paper notebook or this app, and putting everything in one place, saves hunting across four tools when an idea strikes.

                ## Milestones
                1. Two or three options compared on speed of capture, reminders and privacy.
                2. One home chosen for profiles and the capture list.
                3. Reminders for big days and recurring gestures set in the chosen tool.
                4. Old scraps of ideas moved across and the other places cleared.

                ## Notes
                Privacy matters here: a partner who shares your tablet or calendar should not stumble on next month's surprise.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One tool is chosen and recorded as the home for profiles, capture list and reminders, with older scraps moved into it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every place you currently keep gift and gesture ideas"
                - "Compare two or three tools on capture speed, reminders and privacy"
                - "Move every scrap of ideas into the chosen tool"
                - "Check that no shared device or calendar shows planned surprises"
            - name: Swapping costly gestures for effort ones
              description: |-
                ## Purpose
                When money is tight, or gestures have quietly become a habit of buying things, the thought can get lost in the spending. Replacing half your bought gestures for three months with time and skill, a cooked meal, a repaired zip, an afternoon helping in a garden, often lands better and costs very little.

                ## Milestones
                1. Last quarter's gestures sorted into bought and made or done.
                2. Ten effort-based ideas added to the ideas bank.
                3. Half of all gestures for the next three months made or done rather than bought.
                4. Reactions to the two kinds compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For three months, at least half of logged gestures are made or done rather than bought."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sort last quarter's gestures into bought and made or done"
                - "Add ten effort-based ideas to the ideas bank"
                - "Make or do at least every second gesture for the next three months"
                - "Compare how bought and effort gestures were received"
            - name: Rebalancing attention between partner and friends
              description: |-
                ## Purpose
                Many people pour gestures into one relationship and let others go hungry: a new partner gets everything while old friends drift, or a long marriage is taken for granted while friends get the effort. Using your look back and gestures log to set a deliberate balance for the next quarter corrects the drift before anyone feels it.

                ## Milestones
                1. The share of gestures over the last three months worked out by person.
                2. A target balance for the next quarter written down.
                3. The two most neglected people given a gesture in the first fortnight.
                4. The balance checked again at the end of the quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target balance is recorded, and the end-of-quarter log shows every shortlisted person received at least two gestures."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count gestures per person from your log or look back"
                - "Write a target balance across partner, friends and family for the next quarter"
                - "Send a gesture to the two most neglected people this fortnight"
                - "Recount at the end of the quarter and adjust"
            - name: Recovering when a surprise falls flat
              description: |-
                ## Purpose
                Sooner or later a surprise misfires: the party for someone who wanted a quiet night, the weekend away that clashed with a deadline, the gift that touched a sore spot. Handling it well, by owning it without sulking, asking what would have worked and updating their profile, matters more to the relationship than the original gesture ever did.

                ## Milestones
                1. The misfire acknowledged to the person without a long defence of your intentions.
                2. Their view of what would have worked asked for and listened to.
                3. Their profile updated with what you learned.
                4. One smaller, better-matched gesture made within a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The misfire has been acknowledged, the lesson recorded in the person's profile and a better-matched gesture delivered within a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Say plainly that the surprise missed and that you want to get it right"
                - "Ask what would have felt good instead"
                - "Update their profile with the lesson"
                - "Plan a smaller gesture that fits what they told you"
            - name: Giving without keeping score
              description: |-
                ## Purpose
                It is easy to start counting: three cards sent, none received, a coffee dropped round and no thanks. Separating gestures that are gifts from needs that should be said out loud stops resentment building, and shows you when a relationship needs a conversation rather than another surprise.

                ## Milestones
                1. Relationships where your gestures feel unreturned listed.
                2. For each, a decision recorded: keep giving freely, give less, or raise it in conversation.
                3. What you were hoping to get back written down honestly.
                4. One month of gestures given with no tally kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each lopsided relationship has a written decision on whether to keep giving, give less or talk about it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the relationships where your gestures feel unreturned"
                - "Write what you were hoping to get back from each"
                - "Decide for each whether to give freely, give less or talk"
                - "Stop counting for one month and note how it feels"
            - name: Choosing a local florist, baker or maker to rely on
              description: |-
                ## Purpose
                Last-minute gestures go far better with a supplier who knows you: a florist who will do a small, unfussy bunch for same-day delivery, a bakery that takes orders for one, a local maker for personalised pieces. Picking one or two and testing them once means you are ready when something comes up at short notice.

                ## Milestones
                1. Two or three local florists, bakers or makers compared on price, delivery area and cut-off times.
                2. One chosen and a first small order placed.
                3. Contact details, cut-off times and minimum order saved.
                4. Quality and delivery reliability noted after the first order.

                ## Notes
                Start from the **Vendor** template.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One local supplier is chosen and tested with an order, with contact details and cut-off times saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find three local florists, bakers or makers that deliver"
                - "Compare prices, delivery areas and same-day cut-off times"
                - "Place one small test order for someone on your shortlist"
                - "Save the supplier's details and cut-off times in a vendor record"
            - name: Closing the loop on small promises you made
              description: |-
                ## Purpose
                Offering to send a recipe, lend a book or ask your cousin about a job are gestures waiting to happen, and the ones forgotten quietly erode trust. Writing small promises down as you make them and clearing the list weekly turns them into the most reliable thoughtfulness you can offer.

                ## Milestones
                1. Every small promise from the last month you can remember written down.
                2. Each one kept or honestly withdrawn.
                3. New promises added to the list on the day they are made.
                4. The list cleared weekly for two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No small promise on the list is older than two weeks, sustained for two months."
                cadence: rolling
              tasks:
                - "Write down every small promise you made in the last month"
                - "Keep or honestly withdraw each old promise this week"
                - "Add each new promise to the list the day you make it"
                - "Clear the small promises list @recurring(weekly:thu)"
            - name: Surprise visit to a friend who lives far away
              description: |-
                ## Purpose
                Turning up in a friend's city for a weekend they did not expect is one of the biggest gestures you can make, and one of the easiest to get wrong if they are away or exhausted. Planning with a trusted insider, your own place to stay and a fallback if the timing collapses makes it a delight rather than an imposition.

                ## Milestones
                1. An insider, such as their partner or flatmate, briefed and checking dates.
                2. Flexible travel and your own accommodation booked.
                3. A plan for the reveal that makes it easy for them to say not today.
                4. A fallback plan written in case they are ill or away.

                ## Notes
                Start from the **Trip** template. Book somewhere to stay rather than assuming their sofa is free.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The visit happens on the planned weekend, with your own accommodation booked and the insider having confirmed the dates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a trusted insider which weekends your friend is free and well"
                - "Book flexible travel and your own place to stay"
                - "Plan a reveal that lets them say not today"
                - "Write down a fallback if they are ill or away"
            - name: Mystery day out with sealed clues
              description: |-
                ## Purpose
                A day where your partner or a close friend knows only what to wear and when to be ready, with sealed envelopes revealing each next stop, turns an ordinary Saturday into a story. It works best when every stop comes from their profile: their favourite café, a place from your shared past, something they said they wanted to try.

                ## Milestones
                1. A route of three or four stops chosen from the person's profile.
                2. Bookings and timings confirmed for each stop.
                3. A sealed clue written for each stage, with what to wear and bring told in advance.
                4. A rain plan ready for any outdoor stop.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The mystery day runs on its date with every stop booked and a sealed clue opened at each stage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three or four stops from the person's profile"
                - "Book each stop and check opening times for the day"
                - "Write a sealed clue envelope for every stage"
                - "Send a message the night before saying only what to wear and when"
            - name: Welcome-home surprise after a trip or hospital stay
              description: |-
                ## Purpose
                Coming home tired to an empty fridge and a cold house is flat; coming home to milk, bread, clean sheets and a note is unforgettable. When a partner, flatmate or friend who has given you a key is returning from a long trip, a work stint or a hospital stay, a short checklist makes the welcome easy to prepare.

                ## Milestones
                1. The return date and time confirmed, and access to the home arranged.
                2. Basic groceries, a ready meal and one comforting treat bought.
                3. The home aired and warmed, with a bed made up in clean sheets.
                4. A short note left, plus flowers or a candle if they would like that.

                ## Notes
                After a hospital stay, check with them or their family what they can eat and whether visitors are welcome before doing anything.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the return day the home has groceries, a ready meal, a clean bed and a note in place before the person arrives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the return time and how you will get in"
                - "Buy milk, bread, a ready meal and one comfort treat"
                - "Air the place, set the heating and make the bed with clean sheets"
                - "Leave a short welcome note where they will see it first"
            - name: Good-luck kit before an exam, interview or race
              description: |-
                ## Purpose
                On the night before a big test, people usually feel alone with their nerves. A small kit, a note, their favourite snack, a spare pen or blister plasters, arriving a day ahead says you know what is happening and you are on their side whatever the result.

                ## Milestones
                1. The date of the exam, interview, audition or race confirmed.
                2. A kit assembled with a note and two or three practical items.
                3. The kit delivered or posted to arrive a day ahead.
                4. A small treat planned for afterwards, whatever the result.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A good-luck kit with a note arrives at least a day before the event, and an after-event treat is delivered."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the date and time of the exam, interview or race"
                - "Pack a note, a favourite snack and two practical items"
                - "Post or deliver the kit so it arrives a day ahead"
                - "Plan a small treat for afterwards, whatever the result"
            - name: Celebrating a friend's quiet win
              description: |-
                ## Purpose
                Passing a driving test, clearing a debt, finishing a course, six months sober, a first payslip after a long search: quiet wins often go unmarked because there is no card for them. Noticing one and marking it with a message, a cake or a toast tells your friend the effort was seen.

                ## Milestones
                1. A recent or upcoming quiet win identified for someone on your shortlist.
                2. A gesture chosen that matches how private they want it kept.
                3. The celebration delivered within a week of the win.
                4. The win noted in their profile.

                ## Notes
                Some wins, such as sobriety or debt, are private. Celebrate one to one unless they say otherwise.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A quiet win for a named person is marked within a week with a gesture matching their privacy preference."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Think of a recent quiet win among the people on your shortlist"
                - "Check their privacy preference before choosing the gesture"
                - "Deliver a cake, card or toast within a week of the win"
                - "Add the win to their profile so you can ask about it later"
            - name: Open-when letters for someone going away
              description: |-
                ## Purpose
                Sealed letters labelled for moments, open when you miss home, open after a terrible day, open on your first free weekend, give a partner on a posting abroad or a friend leaving for a long trip something to reach for when you cannot be there. Writing eight to twelve takes a few evenings, and they are often kept for life.

                ## Milestones
                1. The departure date confirmed and your own finish date set a week before it.
                2. Eight to twelve open-when labels chosen for moments they are likely to face.
                3. Each letter written, sealed and labelled.
                4. The set packaged and handed over before departure.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Eight to twelve sealed, labelled letters are handed over before the departure date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the departure date and set yourself a finish date"
                - "List eight to twelve moments they are likely to face while away"
                - "Write one letter an evening and seal it with its label"
                - "Package the set and hand it over before they leave"
            - name: Two-minute gestures for parents of young children
              description: |-
                ## Purpose
                With a baby or toddlers in the house, nobody has an evening free to plan a surprise, and gestures between partners are the first thing to go. A list of two-minute gestures, the coffee made before they wake, the night feed taken without asking, a note on the steriliser, keeps attention alive in a season of exhaustion, and reminds you that friends with new babies need the same.

                ## Milestones
                1. Fifteen gestures listed that take two minutes or less and need no planning.
                2. The list pinned somewhere both partners see it.
                3. Twenty gestures exchanged between you in a month.
                4. A friend with young children sent one low-effort gesture, such as a doorstep meal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A two-minute gestures list is pinned up, and at least twenty gestures were exchanged in one month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write fifteen gestures that take two minutes or less"
                - "Pin the list on the fridge or inside a cupboard door"
                - "Leave a doorstep meal for a friend with a new baby"
                - "Ask a grandparent or friend for one free hour to plan something bigger"
            - name: Thoughtful gestures on a student budget
              description: |-
                ## Purpose
                Students and anyone on a tight income can still be the most thoughtful person in a group, because the gestures that land are rarely expensive. A list of free and nearly free ideas, a revision snack box, a printed photo, a cooked meal in a shared kitchen, a lift to the station, keeps you generous without touching the rent.

                ## Milestones
                1. Twenty gestures listed that cost nothing or the price of a snack.
                2. A tiny monthly gestures amount set, even if it is two coffees.
                3. One free gesture made for a housemate, coursemate or partner each week for a month.
                4. Shared-kitchen and exam-season ideas added to the ideas bank.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twenty low-cost ideas are listed, and at least four gestures were made in one month within the set amount."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List twenty gestures that cost nothing or the price of a snack"
                - "Set a tiny monthly amount for gestures"
                - "Make one free gesture for a housemate or coursemate this week"
                - "Plan an exam-season treat for your study group"
            - name: Gestures for a partner working nights or long shifts
              description: |-
                ## Purpose
                When one of you works nights, twelve-hour shifts or on call, you can go days barely seeing each other awake. Gestures that bridge the gap, a packed meal for the night shift, a note on the pillow, a dark and quiet bedroom ready for the morning after, keep the connection running between handovers.

                ## Milestones
                1. Their shift pattern for the next month copied into your calendar.
                2. A handful of gestures matched to before, during and after a shift.
                3. A note or packed food left for at least one shift each week.
                4. Their sleep space kept quiet and ready after night shifts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Over four weeks, at least one shift gesture was left every week and recorded in the gestures log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy your partner's shift pattern into your calendar"
                - "List gestures for before, during and after a shift"
                - "Pack food or leave a note for one of their shifts @recurring(weekly:tue)"
                - "Ready a dark, quiet bedroom for their sleep after nights"
            - name: Gestures for an older friend or neighbour living alone
              description: |-
                ## Purpose
                For an older friend or neighbour on their own, a knock on the door with a slice of cake, a newspaper picked up or help with a fiddly phone setting can be the high point of the week. A light monthly rhythm, agreed so it never feels like a duty visit, keeps the friendship warm on their terms.

                ## Milestones
                1. Their preferences on visits, calls and food asked about directly.
                2. A monthly visit or gesture agreed or naturally established.
                3. Your number swapped for theirs and a trusted contact of theirs.
                4. Practical help offered in a way that leaves them in charge.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A gesture or visit happens each month for six months, at times the friend has said suit them."
                cadence: rolling
              tasks:
                - "Ask your neighbour or friend when visits and calls suit them"
                - "Drop round with a small treat or help with one task @recurring(monthly:5)"
                - "Swap phone numbers and note a trusted contact of theirs"
                - "Offer help with phones, forms or shopping without taking over"
            - name: Gentle gestures for people who dislike surprises
              description: |-
                ## Purpose
                For people who are anxious, autistic or who simply hate being caught off guard, a surprise can feel like an ambush. Gestures announced in advance, offered as a choice, or delivered without an audience still show you were thinking of them while respecting how they like things to happen.

                ## Milestones
                1. The people on your shortlist who dislike surprises identified from their profiles.
                2. Five gestures written that can be offered ahead as a simple yes or no.
                3. Sensory dislikes such as strong scents, noise or crowds noted for each.
                4. Two announced gestures delivered and the reactions noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each surprise-averse person has an announced-gesture approach in their profile, and two such gestures have been delivered."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Identify which people on your shortlist dislike surprises"
                - "Write five gestures that can be offered in advance as a yes or no"
                - "Note scent, noise or crowd dislikes in their profiles"
                - "Offer your next gesture with a day's notice and a choice"
            - name: Gestures for friends and partners far away
              description: |-
                ## Purpose
                Distance makes gestures harder but more noticed: a pizza delivered to their door in another city, a book sent from a shop near them, a card timed to arrive on the right day in their time zone. Finding services that deliver locally to each person, and knowing postal times, makes long-distance surprises dependable.

                ## Milestones
                1. One local delivery option found for each faraway person, such as a bakery, florist or takeaway app.
                2. Postal times to their country or region noted.
                3. Their time zone added to their profile.
                4. One locally delivered gesture made for each faraway person.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every faraway person on your shortlist has a local delivery option and postal time recorded, and has received one gesture."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a bakery, florist or takeaway that delivers near each faraway person"
                - "Note postal times to each person's country or region"
                - "Add each person's time zone to their profile"
                - "Check international postal cut-off dates before the winter holidays @recurring(yearly)"
            - name: Gestures early in a new relationship
              description: |-
                ## Purpose
                In the first months, a gesture that is too big can feel like pressure, while none at all can read as indifference. Matching the scale to the stage, a link to the band they mentioned, their coffee order ready on the second date, a short note rather than jewellery, shows attention without rushing anything.

                ## Milestones
                1. A rough sense of scale written down for the first three months.
                2. A small profile started from what they have told you so far.
                3. Three small gestures made that refer to something they said.
                4. Their response to each noted so the scale can grow with the relationship.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three small, specific gestures were made within the first three months, each referring to something the person said."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down what feels right in scale for the first three months"
                - "Start a short profile from things they have told you"
                - "Make one small gesture that refers to something they said"
                - "Note how they responded before going any bigger"
            - name: Year-long secret project for someone you love
              description: |-
                ## Purpose
                Some of the most treasured gestures take a whole year to make: fifty-two letters for a partner, a book of a friend's late mother's recipes gathered from relatives, a jar of a hundred and fifty remembered moments. A long secret project needs a defined finished form, a weekly slot and a hiding place, or it stalls by spring.

                ## Milestones
                1. One project chosen with a clear finished form, such as a book, jar or box.
                2. Materials bought and a hiding place sorted.
                3. A weekly contribution kept for at least forty weeks of the year.
                4. The finished piece assembled and given at a moment you chose.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The project is finished in its planned form and given, with weekly contributions on record for at least forty weeks."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose the project and decide what the finished piece looks like"
                - "Buy the materials and pick a hiding place"
                - "Add this week's contribution to the secret project @recurring(weekly:tue)"
                - "Decide the date and setting for handing it over"
            - name: Coordinating a group surprise from many friends
              description: |-
                ## Purpose
                A box of thirty letters from friends, a video of messages from people across the years, or a book where everyone writes a page can show someone how widely they are loved. Gathering it means chasing busy people, holding a firm deadline and making sure nobody lets it slip to the recipient.

                ## Milestones
                1. A list of contributors and their contact details gathered with an insider's help.
                2. A clear brief sent with format, length and a deadline two weeks before you need it.
                3. Contributions collected in one private place, with reminders sent.
                4. The finished piece assembled and presented.

                ## Notes
                Ask for short contributions. Three sentences from forty people is easier to gather, and to read, than a page from ten.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Contributions from at least three quarters of those invited are assembled into one piece and presented on the planned date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather contributor names and contacts with an insider's help"
                - "Ask the agent to draft a short brief with format, length and deadline"
                - "Collect contributions in one private shared folder"
                - "Chase missing contributions a week before the deadline"
            - name: Treasure hunt with clues around the home or town
              description: |-
                ## Purpose
                A treasure hunt of riddle clues, each leading to the next spot and ending at a small gift or a place with shared meaning, is one of the most memorable surprises you can make for a partner, a friend or a whole group. Getting the difficulty, route and timing right is a craft that improves with every hunt you build.

                ## Milestones
                1. An ending chosen, such as a gift, a meal or a place that means something to you both.
                2. Six to ten clue spots mapped, walkable in under two hours.
                3. Every clue written and tested by someone who does not know the answers.
                4. Clues placed on the day with a backup hint card in your pocket.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hunt of six to ten tested clues is completed by the recipient within the planned time, finishing at the chosen spot."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the ending of the hunt and work backwards"
                - "Map six to ten clue spots within a two-hour walk"
                - "Write the clues and test them on someone else"
                - "Keep a backup hint card in your pocket on the day"
---

# Thoughtful Gestures & Surprises

This area is for anyone who wants a partner and close friends to feel noticed on ordinary days, not only on birthdays and anniversaries. It starts with foundations (a shortlist, a profile for each person, a capture list, how each person feels about surprises, a big-days calendar and an ideas bank), moves through the weekly and monthly habits that keep gestures coming, then skills such as writing notes, timing and enlisting helpers, decisions about tools, suppliers and balance, occasions like a surprise visit or open-when letters, variants for parents, students, shift workers, older neighbours and people who dislike surprises, and ends with ambitious work such as a year-long secret gift and a treasure hunt.

What repeats is a Saturday sweep of the capture list, a Sunday planning slot, weekly hidden notes, memory messages, follow-ups after big days and a promises check, a monthly posted card, friend gesture, small fix and spend check, a quarterly partner surprise and seasonal plan, and a yearly profile refresh. The Person, Savings goal, Habit tracker, Metrics log, Vendor and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
