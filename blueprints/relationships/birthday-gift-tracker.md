---
id: relationships.birthday-gift-tracker
name: Birthday & Gift Tracker
description: "Every birthday that matters in one register with reminders, gift ideas captured year round, a record of past presents, a budget that survives the busy months and plans for milestone birthdays."
category: personal
version: 1.0.0
tags: [relationships, birthday-gift-tracker, everyone, birthdays, gift-ideas, cards, reminders]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - purchase-decision
    - savings-goal
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Birthday & Gift Tracker
          description: "Keeping track of friends' and partners' birthdays, gift ideas and past presents so important days are never forgotten."
          projects:
            - name: Birthday register of the people who matter
              description: |-
                ## Purpose
                Most forgotten birthdays come not from a lack of care but from a date that lives in one head, or on one social network that stopped showing it. A single register with name, birthday, birth year if known, relationship and how you usually mark the day is the base every other project in this area reads from. Built in one sitting from your contacts, old cards and family, it ends the guesswork for good.

                ## Milestones
                1. A register with columns for name, birthday, birth year if known, relationship, posting address and usual way of marking the day.
                2. Every partner, close friend and immediate family member entered with a confirmed date.
                3. Dates copied over from phone contacts, old calendars and social networks, then checked.
                4. Gaps marked clearly so they can be collected later rather than guessed.

                ## Notes
                Keep birth years where you know them: they are what tell you a 40th is coming. A spreadsheet or the notes field in your contacts both work; one place matters more than which place.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single register holds a confirmed birthday for every partner, close friend and immediate family member, with the remaining gaps marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the twenty people whose birthdays you would be upset to miss"
                - "Copy the birthdays already stored in your phone contacts into the register"
                - "Add birth years where you know them so milestone ages show up"
                - "Mark every unknown date as a gap instead of guessing"
            - name: Gift, card or message tiers for your birthday list
              description: |-
                ## Purpose
                Buying presents for forty people is how gift budgets collapse and birthdays start to feel like a tax. Sorting the register into three tiers, a present, a card or a message on the day, sets a fair level of effort for each person before the year starts instead of deciding under pressure the week before. It also makes it obvious when someone has quietly moved closer or further away.

                ## Milestones
                1. Every person in the register given one tier: gift, card or message.
                2. The gift tier capped at a number your budget can carry, often eight to fifteen people.
                3. A short reason noted for anyone whose tier changed since last year.
                4. The tier shown beside each name in the register.

                ## Notes
                Tiers are private working notes, not a ranking anyone sees. Children in a friend's family often sit in the gift tier even when their parents sit in the card tier.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every name in the register carries a gift, card or message tier, and the gift tier fits within the yearly budget."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add a tier column to your birthday register"
                - "Place each person in the gift, card or message tier"
                - "Count the gift tier and check it against what you can afford"
                - "Note why anyone moved tier compared with last year"
            - name: Birthday reminders set two weeks and two days ahead
              description: |-
                ## Purpose
                A reminder on the day itself is useful for a message and useless for a present or a posted card. Two alerts per birthday, fourteen days out to choose and order and two days out to write, wrap and post, give enough lead time for almost everything without filling the calendar with noise. Setting them once from the register means the system works even in a chaotic month.

                ## Milestones
                1. Every gift-tier and card-tier birthday in your calendar as a yearly repeating event.
                2. A fourteen-day alert on gift-tier birthdays and a two-day alert on all of them.
                3. Message-tier birthdays set to alert on the morning of the day only.
                4. A test reminder received on the phone you actually carry.

                ## Notes
                Birthday events imported from social networks vanish when the person changes their privacy settings. Create your own events from the register instead.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every birthday in the register exists as a repeating calendar event with alerts matching its tier, confirmed by one test alert."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a yearly repeating calendar event for each gift-tier birthday"
                - "Add a fourteen-day and a two-day alert to each gift-tier event"
                - "Set message-tier birthdays to alert on the morning only"
                - "Check every birthday reminder survived any phone or calendar change @recurring(yearly)"
            - name: Gift ideas file for each close person
              description: |-
                ## Purpose
                Good presents are usually spotted months before the birthday, in a passing comment or a shop window, and then forgotten by the time they are needed. A page per close person holding ideas, links, prices and the date each was noted turns gift buying from a late-night search into picking the best of five options. Ideas noted in March are often better than anything found in the week before.

                ## Milestones
                1. A page for each gift-tier person, with ideas, links, approximate prices and the date each idea was noted.
                2. At least three ideas recorded for each of the next three birthdays.
                3. Ideas already bought or no longer relevant struck through rather than deleted.
                4. Each page linked from that person's row in the register.

                ## Notes
                Start from the **Person** template. Note why an idea came up as well as what it is; the context is what makes a gift feel chosen.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every gift-tier person has an ideas page, and the next three birthdays each have at least three recorded ideas with prices."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create an ideas page for each person in the gift tier"
                - "Write down every gift idea you can remember for the next three birthdays"
                - "Add a price and a link or shop name to each idea"
                - "Link each ideas page from the person's row in the register"
            - name: Record of presents you have given
              description: |-
                ## Purpose
                Giving the same scarf two years running, or a much smaller present to one sibling than the other, is the mistake a gift record prevents. A simple log of who received what, when, what it cost and how it landed also shows which kinds of present really delight each person. Reconstructing the last two years from order histories and photos takes an evening.

                ## Milestones
                1. A log with date, person, occasion, gift, cost and reaction.
                2. The last two years of birthday presents reconstructed from order histories, bank statements and photos.
                3. Repeated gifts and uneven spending between siblings or friends spotted and noted.
                4. A habit agreed of adding each new gift to the log in the week it is given.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gift log covers at least the last two years of birthday presents, with the cost and reaction recorded for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your online order history for gifts from the past two years"
                - "Enter each gift with date, person, cost and how it was received"
                - "Highlight any present you have given the same person twice"
                - "Add a reaction column so you remember what really landed"
            - name: Yearly birthday and gift budget
              description: |-
                ## Purpose
                Birthdays cluster, so a single expensive month can wreck a budget even when the yearly total is reasonable. Setting a yearly figure, splitting it by person and by month, and seeing which months carry three birthdays at once tells you how much to set aside and when. Limits decided in January are far easier to keep than ones decided at the till.

                ## Milestones
                1. A yearly gift total agreed, alone or with a partner.
                2. A guideline amount set for each person in the gift tier.
                3. Birthdays plotted by month, with the heavy months highlighted.
                4. A monthly set-aside amount calculated so the heavy months are covered.

                ## Notes
                Include cards, postage, wrapping and delivery charges: together they often add a fifth to the cost of the gifts themselves.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written yearly gift budget exists with per-person guidelines and a monthly set-aside amount that covers the busiest months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up what you spent on birthdays and gifts last year"
                - "Set a guideline amount for each person in the gift tier"
                - "Mark the months with three or more gift-tier birthdays"
                - "Revisit the yearly total and per-person amounts each January @recurring(yearly)"
            - name: Gathering missing birthdays and addresses
              description: |-
                ## Purpose
                Every register has gaps: a newer friend, a partner's sibling, the children of close friends. Asking directly is far less awkward than it feels, and one friendly message to a few people usually fills most gaps within a week. Posting addresses are worth collecting in the same pass, since a card without one is only a good intention.

                ## Milestones
                1. A list of every gap in the register, both dates and addresses.
                2. Gaps filled for close people by asking them or a mutual friend.
                3. Birthdays of friends' children collected where you give them presents.
                4. No more than a handful of gaps left, each with a plan to fill it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Missing birthdays and addresses for gift-tier and card-tier people in the register are reduced to five or fewer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every missing birthday and posting address in the register"
                - "Ask close friends for their date and address in one message"
                - "Ask a mutual friend or relative for the dates you feel awkward requesting"
                - "Update the register and calendar as answers arrive"
            - name: Sizes, allergies and dislikes notes
              description: |-
                ## Purpose
                Clothes in the wrong size, scented candles for someone with asthma and chocolates for a friend with a nut allergy are all avoidable with a few remembered facts. Keeping clothing and ring sizes, allergies, dietary rules, colours they never wear and hobbies they have given up beside each person's ideas page saves returns and quiet disappointment.

                ## Milestones
                1. Clothing, shoe and ring sizes noted for a partner and anyone you buy clothes for.
                2. Allergies, dietary rules and fragrance sensitivities recorded for each gift-tier person.
                3. A short list of what each person dislikes or already has too much of.
                4. A date beside each size so you know when it may be out of date.

                ## Notes
                Sizes change, especially for children and after big life events. The date beside each note tells you when to check again.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each gift-tier person has a dated notes section covering sizes, allergies and dislikes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the sizes you already know for each gift-tier person"
                - "Note the allergies, dietary rules and scent sensitivities you are aware of"
                - "Check sizes discreetly from clothing labels or by asking a partner or parent"
                - "Add a short dislikes list to each ideas page"
            - name: Card, wrap and postage drawer
              description: |-
                ## Purpose
                A last-minute card bought at a petrol station costs three times as much and looks it. A small drawer stocked with general and children's birthday cards, stamps for home and abroad, paper, tape, tags and ribbon means the two-day reminder can be acted on that same evening.

                ## Milestones
                1. A single drawer or box set aside for cards and wrapping.
                2. At least ten blank or general birthday cards plus a few for children.
                3. Stamps for home and international post kept in the drawer.
                4. Paper, tape, scissors, ribbon and tags stored together.

                ## Notes
                Multipacks from charity shops, galleries and museum shops are cheaper and less generic than single cards.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stocked drawer holds at least ten cards, stamps for home and overseas post and a full set of wrapping supplies."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Clear one drawer or box for cards and wrapping"
                - "Count the cards you have and buy enough for the next three months"
                - "Buy a strip of stamps for home post and a few for overseas"
                - "Restock cards, stamps and tape in the drawer @recurring(quarterly)"
            - name: Monthly birthday look-ahead
              description: |-
                ## Purpose
                Fourteen-day alerts catch individual birthdays, but they cannot show you that next month holds four of them and a festive posting deadline. A ten-minute look at the coming month, on the same date every month, lets you order things together, plan the spending and spot the birthday that needs more than a card.

                ## Milestones
                1. A fixed monthly date for the look-ahead in your calendar.
                2. Next month's birthdays listed with tier, budget and whether a gift is chosen.
                3. Anything needing posting, ordering or booking given a buy-by date.
                4. Milestone ages coming up in the next six months flagged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A look-ahead is completed every month for at least six months, with every coming gift-tier birthday given a buy-by date."
                cadence: rolling
              tasks:
                - "Pick a fixed day near the end of each month for the look-ahead"
                - "List next month's birthdays with tier and budget beside each"
                - "Set a buy-by date for anything that must be ordered or posted"
                - "Run the birthday look-ahead for the coming month @recurring(monthly:24)"
            - name: On-the-day birthday messages for the wider circle
              description: |-
                ## Purpose
                Colleagues, old school friends and neighbours in the message tier do not need a present, but a personal message on the day is noticed and remembered. A two-minute check of today's birthdays each morning, with one line that mentions something real about the person, keeps a wide circle warm at almost no cost.

                ## Milestones
                1. Message-tier birthdays alerting each morning from your calendar.
                2. Messages sent before midday so they arrive on the day itself.
                3. Each message mentioning one specific thing rather than a generic greeting.
                4. A note made of any reply worth following up with a call or a coffee.

                ## Notes
                A voice note or a photo of a shared memory often lands better than text. Skip public posts for people who keep their birthday private.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every message-tier birthday over three months receives a personal message on the day, with none missed."
                cadence: rolling
              tasks:
                - "Glance at today's birthdays in your calendar over breakfast @recurring(daily)"
                - "Write one specific line about each person before sending"
                - "Send birthday messages before midday so they arrive on the day"
                - "Note any reply worth following up with a call or a coffee"
            - name: Two-week countdown before each close birthday
              description: |-
                ## Purpose
                Fourteen days is enough to order almost anything, post abroad, book an experience or make something by hand, and not long enough to forget. Running the same short sequence from the fourteen-day alert, choose, order, write, wrap and deliver, removes the scramble that leads to generic presents and late cards.

                ## Milestones
                1. A gift chosen from the ideas page within two days of the fourteen-day alert.
                2. The gift ordered or bought with delivery at least five days before the birthday.
                3. The card written and the gift wrapped two days before.
                4. The gift and card delivered, posted or handed over in time, and logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each gift-tier birthday across a year, the present is in hand five days early and logged after the day."
                cadence: cyclic
              tasks:
                - "Open the person's ideas page when the fourteen-day alert fires"
                - "Order the chosen gift with delivery due five days before the birthday"
                - "Write the card and wrap the gift when the two-day alert fires"
                - "Log the gift, cost and date in your record of presents"
            - name: Weekly sweep of captured gift ideas
              description: |-
                ## Purpose
                Ideas arrive as screenshots, voice notes, saved posts and scribbles on receipts, then scatter. A five-minute sweep once a week moves anything captured into the right person's ideas page, so the file stays the one place to look. A single capture spot on your phone, a note or a chat with yourself, makes the sweep almost automatic.

                ## Milestones
                1. One capture spot on your phone for gift ideas as they occur.
                2. A weekly sweep that empties it into the ideas pages.
                3. Screenshots and saved posts filed with the person's name and a price.
                4. The capture spot empty after each sweep.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The capture spot is emptied into the ideas pages every week for at least two months in a row."
                cadence: rolling
              tasks:
                - "Choose one note or a chat with yourself as the gift idea capture spot"
                - "Pin the capture spot to your phone's home screen"
                - "Move captured ideas into each person's ideas page @recurring(weekly:sun)"
                - "Delete screenshots once the idea behind them is filed"
            - name: Gift spending log against the budget
              description: |-
                ## Purpose
                Budgets only work if spending is recorded against them while there is still time to adjust. Logging each gift, card and postage cost as it happens, and checking the running total monthly, shows whether a heavy December needs a quieter spring. It also produces the real figure for next year's budget.

                ## Milestones
                1. A running spending total kept beside the yearly budget.
                2. Every purchase logged with person, item and cost, postage included.
                3. A monthly check of spending against the year-to-date allowance.
                4. Any overspend matched by a planned saving later in the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every gift purchase for a year is logged, and monthly checks keep total spending within ten percent of the budget."
                cadence: rolling
              tasks:
                - "Add a spending column and running total to your budget sheet"
                - "Log each gift and postage cost on the day you pay"
                - "Compare year-to-date gift spending with the budget @recurring(monthly:12)"
                - "Decide where to trim if spending runs more than a tenth over"
            - name: Gifts received log and thank-you notes
              description: |-
                ## Purpose
                People who post a present rarely hear whether it arrived, and an unthanked gift is remembered for years. Recording what you received, from whom and when you thanked them helps you reply promptly and gives a fair sense of what to give back. It matters most after your own birthday and the festive season, when presents arrive in batches.

                ## Milestones
                1. A received log with date, giver, gift and date thanked.
                2. Every gift from your last birthday or festive season thanked by message or card.
                3. Thank-you notes sent within a week of opening.
                4. Children in the household involved in thanking for their own presents.

                ## Notes
                A photo of you using the gift says thank you more convincingly than any card.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every gift received over a year is logged and thanked within seven days of being opened."
                cadence: rolling
              tasks:
                - "Start a received log with giver, gift and date thanked"
                - "Write down every present from your last birthday while you remember"
                - "Send thanks for any gift not yet acknowledged"
                - "Check the received log for anyone still unthanked @recurring(monthly:8)"
            - name: Gift stash bought ahead in the sales
              description: |-
                ## Purpose
                Buying presents in the January and summer sales, at craft fairs and on holiday cuts costs and gives far better choice than the fortnight before a birthday. A stash only saves money if it is tracked: an unlabelled box at the back of a wardrobe produces duplicates and forgotten gifts. A labelled stash with a list of who each item is for avoids both.

                ## Milestones
                1. One storage spot for bought-ahead gifts.
                2. A stash list with item, intended person, cost and date bought.
                3. Items bought only for a named person or a clear general use.
                4. A quarterly check that nothing in the stash has been forgotten or outgrown.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The stash list matches the stash box, and every item has a named recipient or is given within twelve months."
                cadence: rolling
              tasks:
                - "Choose one box or shelf as the gift stash"
                - "Write a stash list with item, person, price and date bought"
                - "Buy ahead only for named people or clearly general gifts"
                - "Check the stash list against the coming birthdays @recurring(quarterly)"
            - name: Overseas cards and parcels posted on time
              description: |-
                ## Purpose
                International post can take two or three weeks, customs forms add delay, and many countries restrict food, batteries and liquids. Knowing each overseas person's posting lead time, and keeping a digital fallback for when the post is slow, makes far-away birthdays as reliable as local ones.

                ## Milestones
                1. Every overseas person in the register marked with a posting lead time.
                2. Their reminders moved earlier to give enough time to post.
                3. A note of items the destination country restricts or charges duty on.
                4. A fallback chosen for each, such as an e-card or a gift delivered locally.

                ## Notes
                For parcels, ordering from a shop in the recipient's country often costs less than the postage alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every overseas birthday card or parcel for a year arrives on or before the day, or the fallback is used in time."
                cadence: cyclic
              tasks:
                - "Mark each overseas person in the register with their country"
                - "Look up your postal service's delivery times for each of those countries"
                - "Move those people's reminders earlier to match the lead time"
                - "Check the published last posting dates before the festive season @recurring(yearly)"
            - name: Shared household birthday calendar
              description: |-
                ## Purpose
                In many couples one person carries every birthday on both sides of the family, and resentment builds quietly. A shared calendar both partners can see, with each person responsible for their own side and a monthly glance together, spreads the load and ends the 'did you get something for your mum' conversation the night before.

                ## Milestones
                1. One shared calendar holding every family and friend birthday the household marks.
                2. Each birthday assigned to the partner responsible for it.
                3. A monthly joint check of the coming month.
                4. Joint gifts agreed with who buys and who writes the card.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared calendar holds every household birthday assigned to one partner, and it is reviewed together each month."
                cadence: rolling
              tasks:
                - "Create a shared calendar both of you can edit"
                - "Copy every household birthday into it from both of your lists"
                - "Assign each birthday to the partner who will handle it"
                - "Look through next month's shared birthdays together @recurring(monthly:28)"
            - name: Annual refresh of the birthday register
              description: |-
                ## Purpose
                Within a year a register drifts: babies are born, friends pair up, people move house and some friendships cool. A yearly pass to add new people, update addresses and retire the names you no longer mark keeps the reminders honest and the budget realistic.

                ## Milestones
                1. New babies, partners and friends from the past year added.
                2. Changed addresses updated for everyone in the card and gift tiers.
                3. Names you no longer mark moved to an archive, not deleted.
                4. Calendar reminders matched to the refreshed register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Once a year the register gains new people, current addresses and archived names, and the calendar reminders match it."
                cadence: cyclic
              tasks:
                - "List births, new partners and new friends from the past year"
                - "Check addresses for everyone you post cards to"
                - "Archive names you no longer mark rather than deleting them"
                - "Refresh the whole birthday register and its reminders @recurring(yearly)"
            - name: Hearing gift clues in ordinary conversation
              description: |-
                ## Purpose
                The best presents come from something said in passing: a broken coffee grinder, a band they loved at sixteen, a class they would never book for themselves. Noticing and noting these clues takes deliberate practice for a month or two, after which it becomes automatic and the ideas file fills itself.

                ## Milestones
                1. The clue types that matter written down: complaints, nostalgia, wishes, new hobbies and things they admire.
                2. At least ten clues noted in the first month of paying attention.
                3. Each clue filed with the date and the context in which it was said.
                4. One gift given from a noted clue, with the reaction recorded.

                ## Notes
                Write the clue down within an hour. Details such as the exact model or colour fade fast.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least ten dated gift clues are recorded within a month, and one coming gift is chosen from them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the five clue types on the first page of your ideas file"
                - "Note any clue within an hour of hearing it"
                - "Review a month of clues and file them under each person"
                - "Choose one coming gift from a noted clue"
            - name: Birthday card messages that sound like you
              description: |-
                ## Purpose
                Many people sign cards with a name and best wishes because a blank card feels intimidating. A simple structure, a specific memory, something you admire and a wish for the year ahead, makes a card worth keeping in three or four sentences. Practising on a handful of cards builds a habit that lasts.

                ## Milestones
                1. A three-part structure for card messages written in your ideas file.
                2. A small bank of openings and closings in your own words.
                3. Five cards written using the structure.
                4. Milestone-birthday cards given a longer message built around a shared memory.

                ## Notes
                Keep the final wording yours. Help with remembering is fine; a card that sounds like someone else is not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five consecutive birthday cards each include a specific memory or detail, not only a greeting and a name."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the memory, admiration and wish structure"
                - "Collect three openings and three closings you would naturally say"
                - "Draft the next card message on paper before writing it in the card"
                - "Ask the agent to suggest memories from your notes for a milestone card"
            - name: A five-question method for choosing a gift
              description: |-
                ## Purpose
                Staring at a shopping site without a brief produces generic presents. Five questions turn a vague intention into a shortlist in ten minutes: what do they love, what do they use every day, what would they never buy themselves, what are they working towards and what would remind them of you. They work for anyone from a toddler to a grandparent.

                ## Milestones
                1. The five questions written at the top of your ideas file.
                2. The questions answered for your partner and two closest friends.
                3. A three-gift shortlist produced from the answers for the next birthday.
                4. A note of which question led to the gift that landed best.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Shortlists for the next three birthdays are built from the five questions, and the most useful question is noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Copy the five questions into your ideas file"
                - "Answer them for your partner and two closest friends"
                - "Build a three-gift shortlist for the next birthday from the answers"
                - "Record which question produced the best-received gift"
            - name: Wrapping awkward shapes and fabric wrapping
              description: |-
                ## Purpose
                Even a carefully chosen present looks undersold in a crumpled bag. A few techniques, a box with hidden seams, a bottle, a soft parcel and a fabric square knotted in the Japanese furoshiki style, cover most gifts and cut paper waste. An hour of practice with scrap paper is enough.

                ## Milestones
                1. A box wrapped with tight corners and the tape hidden.
                2. A bottle and a soft item wrapped neatly.
                3. A gift wrapped in a reusable fabric square.
                4. The card and wrap drawer stocked with what the chosen techniques need.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A box, a bottle, a soft item and a fabric wrap have each been wrapped neatly at least once."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Practise wrapping an empty box with hidden tape on scrap paper"
                - "Try wrapping a bottle and a soft item"
                - "Learn one fabric wrap knot from a short video"
                - "Add any missing supplies to your card and wrap drawer"
            - name: Experience gifts that actually get used
              description: |-
                ## Purpose
                Vouchers for a spa day, a cooking class or a balloon flight are often never redeemed: they expire, need booking at awkward times or require a companion. Choosing experiences that fit the person's real diary, checking expiry and booking rules, and offering to go together makes the gift happen rather than sit in a drawer.

                ## Milestones
                1. Expiry dates, booking windows and cancellation rules checked before buying.
                2. Experiences chosen to fit the person's location, mobility and free time.
                3. A date suggested or booked alongside the voucher where it suits.
                4. A follow-up to check the experience was used, noted in the gift record.

                ## Notes
                Vouchers from small businesses can be lost if the business closes. Buying close to the date the experience is used lowers that risk.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every experience gift given in a year is booked or used within six months, checked and noted in the gift record."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check expiry and booking rules for any experience you are considering"
                - "Confirm the person's free days and travel limits before choosing"
                - "Offer a date or to go with them when giving the voucher"
                - "Ask after three months whether the experience has been used"
            - name: Homemade gifts that look intentional
              description: |-
                ## Purpose
                Homemade gifts can be the most treasured present of the year or an awkward obligation, and the difference is mostly planning and finish. Picking a craft you can do well, starting four weeks out and packaging it properly, a labelled jar, a framed print, a bound set of recipe cards, makes it feel chosen rather than cheap.

                ## Milestones
                1. One craft chosen that suits your skills and the recipient.
                2. A test version made before the real one.
                3. The gift finished at least a week before the birthday.
                4. Packaging and a label that explain what it is and how to use or store it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "One homemade gift is finished, packaged and labelled at least a week before the birthday it is for."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one homemade gift you can make well"
                - "Make a test version and note what to improve"
                - "Finish the real gift a week ahead of the birthday"
                - "Add a label with ingredients, care instructions or the story behind it"
            - name: Using wish lists without losing the surprise
              description: |-
                ## Purpose
                Wish lists end duplicate presents and guessing, but used rigidly they turn gifts into order fulfilment. Agreeing how your circle uses them, as a source of ideas and price range with freedom to go off-list or add a small surprise, keeps the usefulness and the warmth. The same rules make your own list easier for others.

                ## Milestones
                1. One wish list format agreed with close family or friends.
                2. Each list including a range of prices and any sizes.
                3. An understanding that buyers may go off-list or add a small surprise.
                4. Items marked as bought without the recipient seeing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Close family uses one wish list format with price ranges and hidden purchase marking for at least one round of birthdays."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask close family whether they would use shared wish lists"
                - "Choose a list tool that lets buyers mark items secretly"
                - "Add your own list with a range of prices and your sizes"
                - "Agree out loud that off-list surprises are welcome"
            - name: Choosing where your birthday tracker lives
              description: |-
                ## Purpose
                Birthday data spread across a phone calendar, a social network, a paper diary and a partner's memory is the main reason dates slip. Comparing a calendar, a spreadsheet, a notes app and a reminder app against a few criteria, sharing, backup, privacy and alerts, settles where the register lives for years.

                ## Milestones
                1. Four options compared on sharing, backup, privacy, alerts and cost.
                2. One home chosen for the register and one for reminders, if different.
                3. All birthday data moved into the chosen home.
                4. Old copies deleted or marked as no longer kept up to date.

                ## Notes
                Avoid tools that need every friend to sign up. The register should work even if the person you are tracking is on no network at all.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One chosen tool holds all birthday data after comparing at least four options, and old copies are retired."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the criteria that matter most to you, privacy included"
                - "Compare calendar, spreadsheet, notes app and reminder app options"
                - "Pick one home for the register and move all birthday data into it"
                - "Mark old lists as retired so nobody updates the wrong copy"
            - name: Agreeing gift limits with the wider family
              description: |-
                ## Purpose
                As families grow, the number of adult-to-adult presents multiplies until birthdays become a costly swap of things nobody needs. Proposing a limit, such as presents for children only, a spending cap or a family draw where each adult buys for one other, works best when raised early, framed as a choice rather than a complaint, and agreed by everyone at once.

                ## Milestones
                1. A written proposal with one or two options and the reason behind them.
                2. The proposal raised with the family at least two months before the next busy round.
                3. An agreed rule written down and shared with everyone.
                4. The rule followed for one full year and then reviewed.

                ## Notes
                Expect one or two people to keep giving anyway. Accept it graciously rather than reopening the agreement.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written gift limit is agreed by the wider family and followed through one full year of birthdays."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the limit you would like to propose and why"
                - "Talk it through with your partner or one sibling first"
                - "Raise it with the family in a group message or at a gathering"
                - "Share the agreed rule in writing with everyone"
            - name: Moving people from gifts to cards kindly
              description: |-
                ## Purpose
                Friendships change, and swapping presents with someone you now see once a year can feel like duty for both of you. A short, honest message suggesting cards from now on is usually met with relief, and it frees budget for the people you are closest to now.

                ## Milestones
                1. The people where present swapping has become a duty identified.
                2. A short, warm message drafted for each.
                3. The change agreed and the register tier updated.
                4. The first card-only birthday marked with a thoughtful card.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each person you chose to move has agreed to cards only, and their register tier reflects it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark anyone in the gift tier where swapping now feels dutiful"
                - "Draft a warm message proposing cards instead of presents"
                - "Send it well away from their birthday, never the week before"
                - "Move each person who agrees to the card tier in the register"
            - name: Fair group gift collections among friends
              description: |-
                ## Purpose
                Group presents for a friend's birthday often leave one person chasing money for weeks and quietly covering the shortfall. A simple routine, a set amount per person, a deadline, one payment method and a clear message about who is in, makes group gifts fair and quick.

                ## Milestones
                1. A suggested amount per person, with an easy way to opt out.
                2. A collection deadline a week before the purchase.
                3. A private note showing who has paid.
                4. The card signed by everyone who contributed.

                ## Notes
                Keep amounts modest and let people give less without comment. A group gift should never be the reason someone skips the celebration.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One group gift is collected with all contributions in before the deadline and nobody covering a shortfall."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the gift and a per-person amount with two other friends"
                - "Send one clear message with the amount, deadline and payment details"
                - "Keep a private note of who has paid"
                - "Pass the card around or gather a line from every contributor"
            - name: Low-clutter and consumable gift rule
              description: |-
                ## Purpose
                Many adults already own more than they need, and another ornament becomes a guilty item at the back of a cupboard. Deciding on a default of consumables, experiences, donations or genuinely needed items for the adults on your list cuts waste and often costs less, while keeping objects for the people who love them.

                ## Milestones
                1. The people on your list who prefer fewer possessions identified.
                2. A list of consumable and experience ideas at each price level.
                3. A preference recorded in the register for each person: object, consumable, experience or donation.
                4. One full round of birthdays given under the rule.

                ## Notes
                Charity donations as gifts work best when the charity is one the recipient cares about, not one you do.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every gift-tier person has a recorded gift-type preference, followed for one full round of birthdays."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the people on your list who have asked for fewer things"
                - "List consumable gift ideas at three price levels"
                - "Add a gift-type preference beside each person in the register"
                - "Choose a charity each donation recipient actually supports"
            - name: Making amends for a forgotten birthday
              description: |-
                ## Purpose
                Even a good system fails once, and how you handle the miss matters more than the miss. A quick, honest apology on the day you realise, without long excuses, followed by something chosen with care rather than an expensive panic buy, usually repairs it completely. Then find out why the reminder failed.

                ## Milestones
                1. An honest message sent the day the miss is noticed.
                2. A belated card or gift chosen from the ideas page, not bought in a panic.
                3. A call or meet-up with the person within two weeks.
                4. The reason the reminder failed found and fixed in the register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within two weeks of a missed birthday, an apology, a belated card or gift and a fix to the reminder are all done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send a short, honest apology the moment you realise"
                - "Pick a belated gift or card from their ideas page"
                - "Arrange a call or a meet-up within two weeks"
                - "Find out why the reminder failed and fix it"
            - name: Choosing a big-ticket birthday gift
              description: |-
                ## Purpose
                When a present costs a week's wages, a bicycle, a watch, a camera or a musical instrument, it deserves the same care as any major purchase. Comparing three options on fit, quality, warranty and returns, and checking the recipient's real preferences without spoiling the surprise, prevents an expensive mistake.

                ## Milestones
                1. A clear maximum agreed, alone or with others who are contributing.
                2. Three options compared on fit, quality, warranty and return terms.
                3. The recipient's preferences checked through a partner, friend or past comments.
                4. The gift bought with a gift receipt and the warranty registered.

                ## Notes
                Start from the **Purchase decision** template. Check that the returns window still runs after the birthday, not only after the purchase date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A big-ticket gift is bought within the agreed maximum after comparing three options, with gift receipt and warranty filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the most you will spend and who else is contributing"
                - "Shortlist three options and compare warranty and return terms"
                - "Ask a trusted person about the recipient's real preferences"
                - "Buy with a gift receipt and file the warranty details"
            - name: Unwanted gifts, returns and regifting rules
              description: |-
                ## Purpose
                Everyone receives presents they will not use, and everyone gives some. Deciding your own rules, when to return with a gift receipt, when regifting is fine and how to label things so they never go back to the giver, avoids hurt feelings and a cupboard of guilt. Including gift receipts as standard makes it easy for others too.

                ## Milestones
                1. A written rule for returning, regifting or donating unused presents.
                2. A regift shelf with each item labelled with who gave it.
                3. Gift receipts included with every present you give by default.
                4. The current pile of unused gifts cleared under the new rule.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every unused gift at home is labelled with its giver and then returned, donated or earmarked under a written rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your rule for returning, regifting or donating unused presents"
                - "Label every unused gift with who gave it and when"
                - "Donate or return the items that suit no one on your list"
                - "Ask for a gift receipt at every checkout from now on"
            - name: Partner's birthday from first idea to the day
              description: |-
                ## Purpose
                Your partner's birthday carries more expectation than any other, and it often shrinks to a rushed dinner booking because work got busy. Starting six weeks out with their ideas page, a conversation about how they like to spend the day, a present, a card and any bookings makes it feel considered without needing to be extravagant.

                ## Milestones
                1. How your partner wants to spend the day this year established: quiet, social, away or at home.
                2. A present and card chosen four weeks ahead.
                3. Bookings, childcare or time off arranged three weeks ahead.
                4. The day delivered and a note made of what they loved, for next year.

                ## Notes
                Some people dislike surprise parties intensely. Ask a close friend of theirs before planning one.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The partner's birthday is planned four weeks ahead and delivered with a present, a card and the kind of day they asked for."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your partner's ideas page six weeks before their birthday"
                - "Ask how they would most like to spend the day this year"
                - "Book any meal, activity, childcare or time off four weeks ahead"
                - "Note what they loved most for next year's plan"
            - name: Milestone birthday gift for a 30th, 40th or 50th
              description: |-
                ## Purpose
                Round-number birthdays are when people remember who made an effort, and the gifts for them often need months of lead time: a commissioned piece, a trip, a present pooled from several friends. Spotting the milestone in the register early and planning backwards from the date avoids settling for whatever is available the month before.

                ## Milestones
                1. Milestone ages in the next year identified from the birth years in the register.
                2. A gift chosen three months ahead, with others involved if it is a joint present.
                3. Commissioning, booking or collecting started against a buy-by date.
                4. The gift given on the day with a card that marks the age.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A milestone gift is chosen at least three months ahead and given on the day itself."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find every 30th, 40th, 50th or later milestone in the next year"
                - "Choose the gift three months ahead and agree who is joining in"
                - "Commission or book anything with a long lead time"
                - "Write a longer card that reflects on the decade just passed"
            - name: Memory book for a grandparent's 80th or 90th
              description: |-
                ## Purpose
                Older relatives often say they want nothing, and they usually mean things. A book of letters, photos and memories from children, grandchildren and old friends is the gift most kept and reread. It needs two to three months: time to ask, chase, scan old photographs and print.

                ## Milestones
                1. A list of family and friends to ask for a page, with contact details.
                2. Requests sent with a page format and a deadline six weeks ahead.
                3. Contributions collected, scanned and arranged.
                4. The book printed and given on the day, with spare copies for close family.

                ## Notes
                Print in large type with plenty of photographs. Ask a relative who knows the old friends to reach the people you cannot.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A printed memory book with contributions from at least ten people is given on the birthday."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List everyone who should be asked for a page"
                - "Ask the agent to draft the request with a page format and a deadline"
                - "Chase missing contributions two weeks before the deadline"
                - "Order the printed book at least three weeks before the birthday"
            - name: Festive season gift list and budget
              description: |-
                ## Purpose
                The end-of-year gift season, whether Christmas, Hanukkah, Diwali or another festival, can cost more than a whole year of birthdays and lands all at once. A separate list of names, budgets, ideas and posting deadlines, started in early autumn and paid from a pot that fills through the year, stops it eating into January.

                ## Milestones
                1. A festive gift list with each person, their budget and an idea.
                2. A savings pot filling monthly from the start of the year.
                3. Overseas and posted gifts sent before the last posting dates.
                4. What was given recorded for next year's list.

                ## Notes
                Start from the **Savings goal** template to build the pot.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every festive gift is bought within the set total and paid from the savings pot, with posted gifts sent before the deadlines."
                cadence: cyclic
              tasks:
                - "Copy last year's festive list and update the names"
                - "Set a total and a per-person amount for the season"
                - "Start a festive savings pot with a small monthly transfer"
                - "Start the festive gift list each September @recurring(yearly)"
            - name: Your own birthday wish list and plans
              description: |-
                ## Purpose
                People who care about you will ask what you would like, and 'nothing really' leaves them guessing and buying things you do not need. Keeping a short, honest wish list across price levels, and deciding how you want to spend the day, makes it easier for them and gets you a birthday you enjoy.

                ## Milestones
                1. A wish list with at least six ideas across low, middle and higher prices.
                2. The list shared with the people who usually ask.
                3. A plan for how you would like to spend the day.
                4. Thanks sent for every gift, recorded in the received log.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shared wish list across three price levels exists a month before your birthday, and every gift received is thanked."
                cadence: cyclic
              tasks:
                - "Write six wish list ideas across three price levels"
                - "Share the list with the people who usually ask"
                - "Decide how you want to spend the day and tell the right people"
                - "Update your wish list a month before your birthday @recurring(yearly)"
            - name: Party presents for your children's classmates
              description: |-
                ## Purpose
                Parents of school-age children can face twenty party invitations a year, each needing a present by Saturday. A small stock of suitable gifts at an agreed price, a few for each age, plus cards and wrap, makes weekend mornings calmer and keeps spending even between children.

                ## Milestones
                1. A price per party present agreed in the household.
                2. Five to eight age-suitable gifts kept in stock.
                3. Your child choosing from the stock and signing the card.
                4. The stock refreshed as your child moves up an age group.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A stock of at least five party presents at an agreed price is kept, and no party present is bought on the way there."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Agree a price limit for party presents with your partner"
                - "Buy five age-suitable gifts in a sale or a multipack"
                - "Keep children's cards and wrap beside the stock"
                - "Let your child choose a present and sign the card for each party"
            - name: Birthdays on a student or tight budget
              description: |-
                ## Purpose
                When money is short, birthdays can feel like a test you are bound to fail. Time, skill and attention cost little: a cooked meal, a playlist with notes, a handwritten letter, a photo printed and framed. A small per-person amount and a list of low-cost ideas let you mark every important birthday without borrowing.

                ## Milestones
                1. A small per-person amount set for the year, however low.
                2. A list of at least ten low-cost or free gift ideas.
                3. Close friends told honestly that you are keeping gifts small this year, if you want to.
                4. Each important birthday marked within the amount.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every gift-tier birthday in a year is marked within the per-person amount, with nothing borrowed to pay for gifts."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set a per-person amount you can afford without borrowing"
                - "List ten gift ideas that cost little but take thought"
                - "Tell close friends you are keeping gifts small this year"
                - "Keep a tally of each birthday spend against the amount"
            - name: Gift for a new partner's first birthday together
              description: |-
                ## Purpose
                First birthdays in a new relationship are hard to pitch: too big feels like pressure, too small like indifference. Matching the gift to how long you have been together, choosing personal over expensive and checking with a friend who knows them well usually lands it right.

                ## Milestones
                1. A sensible price range set for yourself, based on how long you have been together.
                2. Three ideas based on things they have actually mentioned.
                3. A gift and card chosen that are personal but not overwhelming.
                4. The gift and their reaction recorded on their ideas page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first-birthday gift within a set price range, based on something the partner mentioned, is given and recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what they have mentioned liking in recent weeks"
                - "Set a price range that matches how long you have been together"
                - "Ask a mutual friend for a sense check if you are unsure"
                - "Record the gift and their reaction for next year"
            - name: Godchildren, nieces and nephews through the ages
              description: |-
                ## Purpose
                Aunts, uncles and godparents often buy for the same children for eighteen years, and a gift that delighted a four-year-old embarrasses a fourteen-year-old. A short note per child of current interests, refreshed each year with a parent, and a sense of how gifts will change, from toys to books to experiences to money towards something, keeps you relevant.

                ## Milestones
                1. Each child listed with age, interests and what their parents prefer.
                2. A gift approach sketched for each age band.
                3. Interests refreshed yearly with a parent before the birthday.
                4. A note of anything the child is saving towards.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each child you buy for has an interests note refreshed in the past year and an age-appropriate gift plan."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List each child with their age and current interests"
                - "Ask a parent what the child is into and what to avoid"
                - "Sketch how your gifts will change as each child grows"
                - "Check each child's interests with a parent before their birthday @recurring(yearly)"
            - name: Birthdays of someone who has died
              description: |-
                ## Purpose
                The birthday of a parent, partner, child or friend who has died often arrives harder than expected, and the register still holds the date. Deciding ahead how you want to spend the day, a visit, a favourite meal, a message to others who loved them, turns a date that ambushes you into one you meet on your own terms.

                ## Milestones
                1. The date kept in the register with a gentle reminder a week ahead.
                2. A plan for how you want to spend the day.
                3. Others who loved the person invited to join or share memories.
                4. Support arranged for the day if you think you may need it.

                ## Notes
                If the day brings grief that overwhelms ordinary life, talk to your doctor or a bereavement service.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A plan for the late person's birthday is made a week ahead each year, with others invited to share it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Change the reminder to a gentle alert a week ahead"
                - "Decide how you would like to spend the day this year"
                - "Invite family or friends to share a memory or join you"
                - "Plan the day a week before their birthday @recurring(yearly)"
            - name: Gifts for an older relative in care or with dementia
              description: |-
                ## Purpose
                Ordinary presents often do not suit someone in a care home or living with dementia: there is little space, there are rules on electrical items, and new gadgets can confuse more than comfort. Asking the care team, choosing sensory, familiar and easy-to-use gifts and labelling clothing makes a present welcome and safe.

                ## Milestones
                1. The care home's rules on gifts, food and electrical items checked.
                2. A list of suitable ideas: familiar music, soft blankets, large photo albums, favourite treats.
                3. Clothing labelled with their name before it is given.
                4. The birthday visit planned around their best time of day.

                ## Notes
                Check any food gift against swallowing or dietary plans with the care staff first.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A birthday gift chosen within the care setting's rules is given during a visit at the relative's best time of day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the care team about rules on gifts, food and electrical items"
                - "List familiar or sensory gifts that suit them now"
                - "Label any clothing or blanket with their name"
                - "Book the birthday visit for their best time of day"
            - name: Birthday and gift customs across cultures and faiths
              description: |-
                ## Purpose
                Customs differ more than people expect: some cultures celebrate name days, some avoid sets of four or sharp objects as gifts, some open presents later rather than in front of the giver, and some faiths do not mark birthdays at all. Learning the customs of the friends, relatives and colleagues on your list avoids an unintended offence.

                ## Milestones
                1. The cultures and faiths represented on your list noted.
                2. Gift customs and taboos for each researched or asked about.
                3. Name days or alternative celebrations added to the register.
                4. Notes added to each relevant person's page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Customs notes exist for each culture or faith in your register, and any name days are added as dates."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note the cultures and faiths represented in your register"
                - "Look up gift customs and taboos for each one"
                - "Ask a friend from that background what is appreciated"
                - "Add name days or other celebration dates to the register"
            - name: Coordinating relatives' gifts for a child's birthday
              description: |-
                ## Purpose
                Grandparents, aunts and godparents often all buy the same toy, or wildly different amounts, for a child's birthday. A parent sharing a short list of ideas at different prices, and keeping track of who is giving what, avoids duplicates and lets bigger items be shared.

                ## Milestones
                1. A list of ideas at three price levels for the child.
                2. The list shared with relatives a month before the birthday.
                3. A record of who is buying what, so nothing is duplicated.
                4. Thank-you messages or drawings sent from the child afterwards.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Relatives buy from a shared list with no duplicate presents, and the child thanks each giver."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of ideas at three price levels for your child"
                - "Share the list with relatives a month ahead"
                - "Keep track of who has claimed which idea"
                - "Help your child send a thank-you drawing or message to each giver"
            - name: Patterns review of your gift history
              description: |-
                ## Purpose
                Once the gift record holds three or more years, it can answer questions no memory can: which people always get the same type of present, who receives more than your closeness justifies, which gifts got the warmest reactions and how spending has crept. An afternoon reading it closely sharpens every future choice.

                ## Milestones
                1. Three or more years of gift data gathered in one place.
                2. Spending per person and per year totalled.
                3. Repeated gift types and best-received gifts highlighted.
                4. Three changes for next year written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of at least three years of gift history includes spending totals and three changes for next year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Combine the gift record and received log into one sheet"
                - "Total spending per person and per year"
                - "Ask the agent to summarise patterns and repeated gift types"
                - "Write three changes for next year's giving"
            - name: Yearly birthday letter to a child until 18
              description: |-
                ## Purpose
                Writing a letter on each birthday, about who they were that year, what they loved and what you noticed, creates an extraordinary gift to hand over at eighteen. It takes an hour a year, but only if the habit and safe storage are set up from the start.

                ## Milestones
                1. A safe place chosen for the letters, both a physical box and a backed-up folder.
                2. This year's letter written within a week of the birthday.
                3. A photo of the child that year kept with the letter.
                4. A plan recorded for when and how the full set will be handed over.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A letter is written within a week of each birthday and stored safely, with a handover plan recorded."
                cadence: cyclic
              tasks:
                - "Choose a box and a backed-up folder for the letters"
                - "Write this year's letter about who they are right now"
                - "Add a photo from this year to go with the letter"
                - "Write the next birthday letter in the week of the birthday @recurring(yearly)"
            - name: Tagged gift ideas database with price bands
              description: |-
                ## Purpose
                For people with large families or wide circles, a page per person stops scaling. A table of ideas tagged by person, price band, type and season lets you filter for every experience idea under a set amount, or everything noted for July birthdays, and makes group and festive shopping far faster.

                ## Milestones
                1. Every existing idea moved into one table with person, price band, type and date noted.
                2. Saved views for upcoming birthdays, each price band and each gift type.
                3. Bought ideas linked to the record of presents.
                4. The table used to choose gifts for one full month of birthdays.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All gift ideas sit in one tagged table with saved views, used to choose gifts for one full month of birthdays."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose a table tool that supports tags and saved views"
                - "Move every idea from the person pages into the table"
                - "Tag each idea by person, price band, type and season"
                - "Create saved views for next month's birthdays and each price band"
---

# Birthday & Gift Tracker

This area is for anyone who wants the birthdays of partners, friends and family remembered on time and marked with gifts that feel chosen rather than grabbed. It starts with the foundations (a register of dates, tiers for who gets a gift, a card or a message, reminders, ideas pages, a record of presents and a budget), then the weekly and monthly routines that keep it running, the skills behind spotting clues, writing cards, wrapping and giving experiences, decisions about tools, family gift limits and clutter, the big occasions from a partner's birthday to a grandparent's 90th, versions for parents, tight budgets, new partners, carers and the bereaved, and finally the specialist work of reading your gift history and keeping long-running traditions.

What repeats is a morning glance at the day's birthdays, a Sunday sweep of captured gift ideas, monthly checks on the 8th, 12th, 24th and 28th for thank-yous, spending, the look-ahead and the shared calendar, a quarterly stash and supplies check, and yearly refreshes of the register, budget, festive list and posting dates. The Person, Purchase decision and Savings goal templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
