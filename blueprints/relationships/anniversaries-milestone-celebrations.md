---
id: relationships.anniversaries-milestone-celebrations
name: Anniversaries & Milestone Celebrations
description: "Every relationship date recorded and remembered, a budget and countdown for each anniversary, gift themes by year, and plans for the milestone years worth marking properly."
category: personal
version: 1.0.0
tags: [relationships, anniversaries-milestone-celebrations, everyone, retiree, parent, anniversaries, milestones, traditions]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - purchase-decision
    - trip
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Anniversaries & Milestone Celebrations
          description: "Remembering and marking relationship anniversaries and milestones with thoughtful plans, gifts and traditions that grow over the years."
          projects:
            - name: Register of your relationship dates
              description: |-
                ## Purpose
                Ask most couples when they first met, first kissed or moved in and the answers drift by months or come out as two different dates. Writing every date that matters to either of you into one shared register, checked against old messages, photos and documents, settles the question once and gives every reminder and plan in this area a reliable source.

                ## Milestones
                1. A single shared note listing the dates you met, first went out, became a couple, got engaged, married or registered a partnership, and moved in.
                2. Each uncertain date checked against a message, photo, ticket or document.
                3. Any date you remember differently discussed and one version agreed, with the other noted.
                4. The register saved where both partners can open it on their phones.

                ## Notes
                Include dates only one of you cares about. A date that matters to your partner and not to you is exactly the one that gets forgotten.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared register lists at least five relationship dates, each confirmed by a message, photo or document, and both partners can open it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every relationship date either of you can remember in one note"
                - "Search old messages and photos to confirm the uncertain dates"
                - "Agree one version of any date you remember differently"
                - "Share the register so both of you can open it from your phones"
            - name: Anniversary reminders set three weeks ahead
              description: |-
                ## Purpose
                Getting reminded on the morning of an anniversary means you have already run out of time to book a table, order a gift or arrange a sitter. Setting each date from the register as a yearly calendar event with an alert three weeks and three days before turns remembering into a system rather than a memory test.

                ## Milestones
                1. Every date from the register added as a yearly event in your calendar.
                2. Alerts set at three weeks and at three days before each one.
                3. The main anniversary shared to your partner's calendar as well, if you both plan it.
                4. One test alert received on your phone to prove the settings work.

                ## Notes
                Calendar apps sometimes drop repeating events when you change phone or account. The yearly check below catches that before it matters.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every date in the register exists as a yearly calendar event with alerts three weeks and three days before."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add each date from the register as a yearly calendar event"
                - "Set alerts at three weeks and three days before each event"
                - "Share the main anniversary event with your partner's calendar"
                - "Check every anniversary reminder still exists and alerts correctly @recurring(yearly)"
            - name: Agreeing which anniversaries you mark and how
              description: |-
                ## Purpose
                One partner may count the first date, the wedding and the day you got the keys, while the other thinks one dinner a year is plenty, and the gap only shows when someone feels let down. A short honest conversation about which dates you each want to mark, and roughly how big, prevents most anniversary disappointment before it starts.

                ## Milestones
                1. Each partner's list of dates they would like marked, written separately first.
                2. An agreed set of dates you celebrate together, with a size for each: a card, an evening, a day or a trip.
                3. Any date one of you wants to keep private or low-key named and respected.
                4. The agreement added to the register next to each date.

                ## Notes
                Write your lists before comparing them. Talking first tends to make the quieter partner agree to whatever the keener one suggests.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The register shows, next to each date, whether you mark it and at what size, agreed by both partners."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your own list of dates you would like to mark, without conferring"
                - "Ask your partner to write theirs the same way"
                - "Compare the lists over a coffee and agree a size for each date"
                - "Note the agreed size beside each date in the register"
            - name: Yearly anniversary budget and savings pot
              description: |-
                ## Purpose
                Anniversary spending usually lands in one month alongside everything else, so a nice dinner or a weekend away becomes a stretch or a source of guilt. Agreeing a yearly figure for anniversaries and milestones, then saving it monthly into its own pot, means the money is ready whenever the date arrives, and the bigger years can be saved for well in advance.

                ## Milestones
                1. What you spent on your last two anniversaries worked out, including travel and childcare.
                2. A yearly anniversary figure agreed that fits the household budget.
                3. A separate pot or savings space opened and named for anniversaries.
                4. A monthly transfer set so the yearly figure builds by the date.

                ## Notes
                Start from the **Savings goal** template. Add a little extra each year towards the next milestone anniversary rather than funding it all in the final year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named anniversary pot receives an agreed monthly transfer that reaches the yearly figure before the anniversary date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up what your last two anniversaries cost, travel and sitters included"
                - "Agree a yearly anniversary figure with your partner"
                - "Open a separate savings pot named for anniversaries"
                - "Move this month's share into the anniversary pot @recurring(monthly:18)"
            - name: Traditional and modern anniversary gift themes
              description: |-
                ## Purpose
                Anniversary gift themes such as paper for the first year, cotton for the second, tin for the tenth and silver for the twenty-fifth give a useful brief when you are stuck, though the traditional and modern lists differ and vary by country. Building your own reference for the next fifteen years, with one idea per year you would both enjoy, saves a scramble every time.

                ## Milestones
                1. A table of traditional and modern themes for years one to fifteen, plus 20, 25, 30, 40 and 50.
                2. The years where the lists disagree marked, with the theme you prefer chosen.
                3. One gift or experience idea noted against each of the next five years.
                4. The reference saved next to the register.

                ## Notes
                Treat themes as a prompt, not a rule. A paper gift can be concert tickets, a printed map of where you met or a letter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved table of anniversary themes for at least twenty milestone years, with one idea written against each of the next five."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a traditional and a modern anniversary theme list"
                - "Build a table for years one to fifteen and the big milestone years"
                - "Pick your preferred theme where the two lists disagree"
                - "Write one idea against each of your next five anniversaries"
            - name: Milestone years map for the next decade
              description: |-
                ## Purpose
                Big anniversaries like the fifth, tenth or twenty-fifth have a habit of arriving as a surprise in the year they fall, when it is too late to save or book anything ambitious. Mapping which milestones fall in the next ten years, for your relationship and for close family, shows which years need early money and planning and which can stay simple.

                ## Milestones
                1. The next ten years listed with every anniversary that falls in each.
                2. Milestone years for you as a couple marked: 1, 5, 10, 15, 20, 25 and beyond.
                3. Parents' and close relatives' milestone anniversaries added where you know them.
                4. The two or three biggest years flagged with a rough budget and a start-planning date.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year map shows every milestone anniversary for you and close family, with the biggest years given a budget and planning start date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the next ten years down the side of a page"
                - "Add which of your anniversaries fall in each year"
                - "Ask a parent or sibling for any family anniversary dates you lack"
                - "Flag the biggest years and give each a rough budget"
            - name: Anniversary history file of past celebrations
              description: |-
                ## Purpose
                After a few years nobody remembers whether the leather wallet was the third anniversary or the fourth, which restaurant was disappointing or what you promised to do next time. A simple history file listing each anniversary's plan, gift, place and verdict stops you repeating a flop and makes the milestone years easier to plan with a nod to the past.

                ## Milestones
                1. One entry per past anniversary you can reconstruct, with year, plan, gifts and place.
                2. A verdict line for each: what you would repeat and what you would skip.
                3. Photos or receipts linked where they exist.
                4. The file stored next to the register so planning starts from it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A history file holds an entry for every anniversary you can reconstruct, each with plan, gift, place and a one-line verdict."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scroll photos by date to reconstruct each past anniversary"
                - "Write one entry per year with plan, gifts and place"
                - "Add a one-line verdict to each entry"
                - "Add this year's anniversary plan, gift and verdict to the file @recurring(yearly)"
            - name: Shared photo archive of your years together
              description: |-
                ## Purpose
                Couple photos usually sit scattered across two phones, old laptops, social media and a box of prints, which makes any slideshow, album or milestone party a weekend of digging. Gathering them into one shared, backed-up archive organised by year means the raw material for every future celebration is already in order.

                ## Milestones
                1. Photos of the two of you from both phones gathered into one shared album or folder.
                2. Older photos from laptops, social media and prints collected, with prints scanned or photographed.
                3. The archive organised into one folder per year together.
                4. A second backup copy stored somewhere separate.

                ## Notes
                Scan a handful of prints a week rather than planning a big scanning day that never comes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared archive holds your couple photos sorted by year, with prints scanned and a second backup copy in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a shared album or folder that both partners can add to"
                - "Move couple photos from both phones into it"
                - "Scan or photograph ten old prints each week until the box is done"
                - "Add the month's best photos of you both to the archive @recurring(monthly:28)"
            - name: Anniversaries that clash with holidays or birthdays
              description: |-
                ## Purpose
                Anniversaries in late December, on Valentine's Day or a week from a partner's birthday are easily swallowed, merged into one present or celebrated at inflated prices. Deciding in advance how to handle a clashing date, by marking it on a different day, splitting gifts or alternating years, keeps it from quietly disappearing.

                ## Milestones
                1. Every anniversary within two weeks of a birthday or public holiday identified.
                2. A rule agreed for each clash, such as celebrating on a fixed alternative date.
                3. The alternative date added to the calendar as its own event.
                4. Gift expectations for clashing dates agreed so one present is not doing two jobs.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each clashing anniversary has a written rule and, where agreed, a separate calendar event on its alternative date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check which anniversaries fall within two weeks of a birthday or holiday"
                - "Agree with your partner how each clash will be handled"
                - "Add any alternative celebration date to the calendar"
                - "Write the agreed gift rule for clashing dates in the register"
            - name: Three-week anniversary countdown
              description: |-
                ## Purpose
                Most rushed anniversaries are the result of starting a week late rather than a lack of care. A fixed countdown that begins three weeks out, with booking in week one, the gift in week two and the card and final details in week three, makes even a busy year feel planned rather than improvised.

                ## Milestones
                1. A countdown checklist written with three weekly stages.
                2. Week one covering bookings, sitters and time off.
                3. Week two covering the gift or experience, ordered with delivery time to spare.
                4. Week three covering the card, the day's timings and any surprise logistics.

                ## Notes
                If you only do one thing in week one, book the table or the sitter. Those run out first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each anniversary has its booking, gift and card done by the end of the countdown, recorded against the three stages."
                cadence: cyclic
              tasks:
                - "Write the three-week countdown checklist in your notes"
                - "Book any table, tickets or sitter in the first week"
                - "Order the gift with at least five days' delivery margin"
                - "Start the three-week anniversary countdown @recurring(yearly)"
            - name: Monthly moments note for the anniversary letter
              description: |-
                ## Purpose
                By the anniversary most of the year has blurred into a few headlines, and the small moments that made it yours are gone. Writing two or three lines each month, a funny exchange, a hard week you got through, a place you found, gives you a year of material for the card or letter without staring at a blank page.

                ## Milestones
                1. A private note created for this year's moments.
                2. At least two lines added in each month of the year.
                3. The note read back before writing the anniversary card or letter.
                4. A fresh note started the day after each anniversary.

                ## Notes
                Keep it private and honest. Hard months belong in it too, because getting through them is often what the letter is really about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The moments note has at least two entries for each of the twelve months before the anniversary."
                cadence: rolling
              tasks:
                - "Create a private note titled with this year of your relationship"
                - "Write two lines about the past month together @recurring(monthly:14)"
                - "Read the whole note before writing the anniversary card"
                - "Start a fresh note the day after the anniversary"
            - name: Annual anniversary letters to each other
              description: |-
                ## Purpose
                Cards say happy anniversary; a letter says what the year meant, and after a decade the stack of them becomes the best record of your relationship you will ever have. Writing each other a one-page letter every anniversary, and keeping them together, is cheap, private and grows more valuable every year.

                ## Milestones
                1. An agreement that you both write a letter each anniversary.
                2. This year's letters written, exchanged and read.
                3. A box, folder or envelope where every letter is kept together.
                4. Older cards and notes you still have added to the collection.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both partners have written and exchanged an anniversary letter this year and all past letters are kept in one place."
                cadence: cyclic
              tasks:
                - "Ask your partner whether they would like to swap anniversary letters"
                - "Choose a box or folder to keep every letter in"
                - "Gather any old cards and notes you still have into it"
                - "Write your one-page anniversary letter the weekend before @recurring(yearly)"
            - name: Same-spot anniversary photo each year
              description: |-
                ## Purpose
                A photo of the two of you in the same place, pose or doorway every anniversary costs nothing and turns, after ten or twenty years, into the picture series friends and grandchildren love most. Choosing the spot and the framing now, while you are both still in the early frames, is what makes the series possible.

                ## Milestones
                1. A spot chosen that you can return to every year, such as your front door or a favourite bench.
                2. A framing written down: distance, pose and whether one of you holds the date.
                3. This year's photo taken and saved in its own album.
                4. A backup plan agreed for years you are away or the spot changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An album holds a photo from the chosen spot for each anniversary since starting, with the framing notes saved alongside."
                cadence: cyclic
              tasks:
                - "Pick a spot you can realistically return to every year"
                - "Write down the framing so each year matches"
                - "Create a dedicated album for the series"
                - "Take the same-spot photo on the anniversary @recurring(yearly)"
            - name: Post-anniversary debrief
              description: |-
                ## Purpose
                Couples rarely say out loud what they loved about an anniversary or what fell flat, so the same mistakes repeat and the best ideas are forgotten. A ten-minute debrief the week after, with the same three questions each year, quietly improves every celebration and surfaces things a partner would never raise unprompted.

                ## Milestones
                1. Three standing questions agreed, such as what was best, what to skip and what to try next year.
                2. This year's answers from both partners written down.
                3. One idea for next year moved into the register or milestone map.
                4. Any hurt feelings from the day talked through calmly rather than left.

                ## Notes
                Keep it light. This is a planning chat over a cup of tea, not a performance review of your partner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written answers to the three debrief questions exist for this year's anniversary, with one idea carried forward to next year."
                cadence: cyclic
              tasks:
                - "Agree three debrief questions you will reuse every year"
                - "Write down both sets of answers in the history file"
                - "Move one idea for next year into the milestone map"
                - "Ask each other the three debrief questions the week after @recurring(yearly)"
            - name: Family and friends' anniversary cards calendar
              description: |-
                ## Purpose
                Parents, grandparents, siblings and close couple friends notice when their wedding anniversary is remembered, especially the milestone ones, and it is usually one partner who silently carries this. Keeping a shared list of their dates and checking it at the start of each month means cards and messages go out on time and the job is shared.

                ## Milestones
                1. A list of family and friends' anniversaries with names, year married and address.
                2. Milestone years in the coming twelve months marked for something more than a card.
                3. An agreement on which partner handles which side of the family.
                4. A small stock of blank cards and stamps kept at home.

                ## Notes
                This list is for other couples' anniversaries. Keep birthdays in your birthday tracker so the two lists stay short.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every anniversary on the family and friends list in the past year received a card or message on or before the day."
                cadence: rolling
              tasks:
                - "Ask a parent for the anniversary dates of close relatives"
                - "Build a list with names, year married and postal address"
                - "Buy a stock of six blank cards and some stamps"
                - "Check the list for next month's anniversaries and send cards @recurring(monthly:3)"
            - name: Six-month milestone look-ahead
              description: |-
                ## Purpose
                Booking a special restaurant, arranging leave or finding a sitter for a weekend can need several months' notice, which a three-week countdown cannot give. Looking six months ahead once a quarter catches any milestone, family celebration or clash early enough to plan it properly and spread the cost.

                ## Milestones
                1. A quarterly slot in the calendar for the look-ahead.
                2. Every anniversary and milestone in the next six months listed at each look-ahead.
                3. Leave requests, deposits or early bookings made for anything that needs them.
                4. The milestone map updated with anything new.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly look-aheads completed in a year, each listing the next six months of milestones with any early bookings made."
                cadence: rolling
              tasks:
                - "Put a quarterly milestone look-ahead in the calendar"
                - "List every anniversary and milestone due in the next six months @recurring(quarterly)"
                - "Request leave for any milestone that needs a day off"
                - "Update the milestone map with anything new you find"
            - name: Relationship milestones log beyond anniversaries
              description: |-
                ## Purpose
                Some of the moments most worth celebrating never land on an anniversary: the first home, a debt paid off, a first pet, a thousand days together, the first holiday without the children. Logging these as they happen gives you dates to mark in future years and a fuller story of the relationship than the wedding date alone.

                ## Milestones
                1. A milestones log started with any past firsts you can date.
                2. New milestones added within a month of happening.
                3. Two or three logged milestones chosen as dates you will mark each year.
                4. Those chosen dates added to the register and reminders.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A milestones log lists every shared first from the past year with its date, and at least two are set up as yearly reminders."
                cadence: rolling
              tasks:
                - "Start a log with any past firsts you can put a date on"
                - "Work out your thousand-day and other round-number dates"
                - "Add this month's new firsts or achievements to the log @recurring(monthly:22)"
                - "Choose two logged milestones to mark every year"
            - name: Taking turns to plan the anniversary
              description: |-
                ## Purpose
                When one partner always plans the anniversary, it becomes their job and the other's surprise, and resentment or flat predictability tends to follow. Alternating years, or splitting the day between morning and evening, shares the work, brings in two styles of celebration and gives each of you the pleasure of being surprised.

                ## Milestones
                1. A pattern agreed: alternate years, split days or one plans and the other gifts.
                2. Whose turn it is this year written in the register.
                3. A rough spending limit agreed for the planner of each year.
                4. Both partners comfortable that the pattern feels fair after one full cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written turn-taking pattern is in the register, and this year's planner and spending limit are named."
                cadence: cyclic
              tasks:
                - "Suggest a turn-taking pattern to your partner"
                - "Write this year's planner and spending limit in the register"
                - "Hand the planner the history file and debrief notes"
                - "Confirm whose turn it is to plan, three months out @recurring(yearly)"
            - name: Writing an anniversary card worth keeping
              description: |-
                ## Purpose
                Many people freeze over an anniversary card and fall back on a line and a signature, yet the card is often what a partner keeps for decades. Practising a simple structure, one specific memory from the year, one thing you admire, one thing you look forward to, makes heartfelt writing quick and repeatable.

                ## Milestones
                1. A three-part structure for anniversary messages written down.
                2. A short bank of opening lines and specific memories collected.
                3. One practice message written for a friend's or relative's anniversary card.
                4. This year's card written using the structure, at least three days early.

                ## Notes
                Specific beats eloquent. 'The night we got lost in the rain looking for that tiny restaurant' says more than any poem.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written card structure exists and this year's anniversary card contains a specific memory, an admiration and a hope."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-part structure for your anniversary messages"
                - "List five specific memories from this year you could use"
                - "Practise the structure on a relative's anniversary card"
                - "Draft this year's card three days before the date"
            - name: Learning your partner's celebration style
              description: |-
                ## Purpose
                Some people feel most loved by a quiet day at home with a handwritten note; others want a surprise party, a fancy restaurant or a carefully chosen object. Finding out exactly how your partner likes to be celebrated, by asking and by noticing what lit them up in past years, stops you planning the anniversary you would want instead of the one they would.

                ## Milestones
                1. Your partner's answers to five questions about celebrations written down.
                2. Past anniversaries and birthdays reviewed for what they visibly enjoyed most.
                3. A short profile written: private or public, planned or spontaneous, gift or experience.
                4. Your own answers shared so they can plan for you too.

                ## Notes
                Ask about the shape of a perfect day, not about gifts. People are often vague about presents but very clear about the feel of a day.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written celebration profile for each partner exists, based on their own answers and at least two past celebrations."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your partner to describe their perfect low-key anniversary day"
                - "Ask what the best celebration they have ever had felt like"
                - "Look back through the history file for what they enjoyed most"
                - "Write a short celebration profile and swap yours with theirs"
            - name: Keeping an anniversary surprise secret
              description: |-
                ## Purpose
                Surprises usually leak through shared bank statements, calendar invites, delivery notifications or a friend who mentions it in passing. Learning the practical side of secrecy, from payments and parcels to briefing helpers, means a surprise anniversary plan stays a surprise without you lying awkwardly for weeks.

                ## Milestones
                1. The likely leak points in your household listed: shared accounts, calendars, deliveries, phones.
                2. A payment method and delivery address chosen that your partner will not see.
                3. Helpers briefed with exactly what they can and cannot say.
                4. One surprise carried off without your partner guessing.

                ## Notes
                Check first that your partner actually enjoys surprises. Some people find them stressful, and the celebration profile will tell you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One anniversary surprise delivered with no leak through payments, deliveries or helpers, confirmed by your partner's genuine reaction."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the ways a surprise could leak in your household"
                - "Pick a payment method and delivery address your partner will not see"
                - "Brief each helper on exactly what to say if asked"
                - "Plan a cover story for the day that needs no outright lie"
            - name: Handmade gift for an early anniversary year
              description: |-
                ## Purpose
                The early anniversary themes of paper, cotton, leather, linen and wood suit handmade gifts beautifully, and a made thing usually means more than a bought one at a fraction of the price. Learning one simple craft well enough to produce something personal, such as a bound book of letters, a printed cotton bag or a carved wooden box, gives you a gift no shop has.

                ## Milestones
                1. This year's theme and one handmade project chosen to match it.
                2. Materials and a short tutorial or class lined up.
                3. One practice piece made to learn the technique.
                4. The finished gift completed a week before the anniversary.

                ## Notes
                Start six weeks out. A first attempt at any craft usually takes twice as long as the tutorial suggests.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A handmade gift matching this year's anniversary theme is finished at least a week before the date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check this year's theme in your gift themes reference"
                - "Choose one handmade project that suits the theme"
                - "Buy materials and find a beginner tutorial or class"
                - "Make one practice piece before starting the real gift"
            - name: Anniversary photo book of the year
              description: |-
                ## Purpose
                Thousands of photos on a phone are rarely looked at, while a printed book of the year sits on the shelf and gets pulled out by visitors and children. Designing a twenty to forty page book from the year's best couple photos, with a few captions, makes a gift that works for almost any anniversary and builds into a shelf of years.

                ## Milestones
                1. The year's best 60 to 100 photos of you both chosen from the archive.
                2. A photo book service and size chosen that you will reuse each year.
                3. The book laid out with short captions and dates.
                4. The book ordered with enough time for printing and delivery.

                ## Notes
                Choose a format you can keep for years so the books line up on a shelf.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed photo book covering the past year of your relationship has arrived before the anniversary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose 60 to 100 photos from the year in the shared archive"
                - "Pick a photo book service and size to reuse each year"
                - "Lay out the book with short captions and dates"
                - "Order it at least three weeks before the anniversary"
            - name: Cooking your wedding or first-date meal at home
              description: |-
                ## Purpose
                Recreating the meal from your wedding, your first date or a honeymoon restaurant brings back the occasion more strongly than almost anything else, and costs a fraction of going out. Working out the menu, practising the hardest dish once and serving it on the anniversary makes a night in feel as special as any booking.

                ## Milestones
                1. The original menu reconstructed from photos, the venue or memory.
                2. Recipes found for each course, simplified where needed.
                3. The trickiest dish practised once in the weeks before.
                4. The full meal served at home on or near the anniversary.

                ## Notes
                Many restaurants and caterers will share a recipe or ingredient list if you explain why you are asking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "The recreated meal has been cooked and served at home within a week of the anniversary."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the menu you remember from the original occasion"
                - "Ask the venue or caterer if they would share a recipe"
                - "Practise the hardest dish once a few weeks before"
                - "Shop for the full meal two days before the anniversary"
            - name: Short anniversary toast for a family gathering
              description: |-
                ## Purpose
                Milestone anniversaries often come with a family meal or party where someone, often one of the couple, is expected to say a few words. Preparing a two-minute toast with a story, a thank you and a raised glass, and practising it aloud, turns a moment many people dread into one of the highlights of the evening.

                ## Milestones
                1. A two-minute outline: a short story, thanks to the guests, a word about the years ahead.
                2. The toast written out and cut to fit two minutes when spoken.
                3. The toast practised aloud at least three times, once in front of someone.
                4. Key lines reduced to a small card to hold on the day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A two-minute anniversary toast has been written, rehearsed aloud three times and reduced to a prompt card."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick one short story that sums up your years together"
                - "Write the toast out in full, then cut it to two minutes"
                - "Rehearse it aloud three times, once for a friend"
                - "Copy the key lines onto a small prompt card"
            - name: Trip, party or gift for a milestone year
              description: |-
                ## Purpose
                Facing a fifth, tenth or twenty-fifth anniversary, many couples drift between a big trip, a party and a significant gift without deciding, and end up doing a rushed version of one. Comparing the three options against your budget, your celebration styles and what you will remember, then choosing early, gives the milestone the planning time it deserves.

                ## Milestones
                1. The three options, trip, party and gift, each sketched with a rough cost.
                2. Each option scored against budget, both partners' preferences and practicality.
                3. One option chosen, with a budget and a start-planning date.
                4. The decision written in the milestone map.

                ## Notes
                Combinations work. A small family meal plus a short trip often beats one large event that stretches the budget.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision for the next milestone anniversary names the format, budget and planning start date, agreed by both partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch a trip, a party and a gift option with rough costs"
                - "Score each option against your celebration profiles"
                - "Agree one format and a budget with your partner"
                - "Write the decision and planning start date in the milestone map"
            - name: Choosing an anniversary jewellery or keepsake piece
              description: |-
                ## Purpose
                An eternity ring, a watch, an engraved piece or a family keepsake is often the biggest single anniversary purchase a couple makes, and it is easy to overspend or buy something that is never worn. Comparing a short list of pieces against your budget, your partner's actual taste and the jeweller's terms leads to a choice that is still worn in twenty years.

                ## Milestones
                1. A budget fixed before visiting any shop.
                2. Your partner's taste checked through what they already wear, or a trusted friend.
                3. Three options compared on price, materials, sizing, warranty and returns.
                4. One piece bought, with receipt and any valuation stored safely.

                ## Notes
                Start from the **Purchase decision** template. Ask about resizing and exchange terms before buying a ring as a surprise.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One keepsake piece bought within the agreed budget, chosen from three compared options, with receipt and exchange terms saved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Fix a firm budget before looking at any pieces"
                - "Note what styles and metals your partner already wears"
                - "Compare three options on price, warranty and exchange terms"
                - "File the receipt and any valuation with your household papers"
            - name: Meaningful anniversary on a tight budget
              description: |-
                ## Purpose
                A year of redundancy, a new baby or saving for a house can leave almost nothing for an anniversary, and some couples skip it entirely rather than do something small. Planning a deliberately low-cost anniversary, built on time, place and attention rather than money, keeps the tradition going and often becomes one of the best remembered.

                ## Milestones
                1. A spending ceiling agreed for this year's anniversary.
                2. Ten free or very cheap ideas listed, such as revisiting where you met or a picnic at sunset.
                3. One plan chosen and the day protected in both diaries.
                4. The anniversary celebrated within the ceiling and recorded in the history file.

                ## Notes
                Say openly that this is a small year. Lowered expectations agreed together feel very different from a partner quietly doing less.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The anniversary is celebrated within an agreed spending ceiling and logged in the history file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a spending ceiling for this year's anniversary"
                - "List ten free or very cheap anniversary ideas together"
                - "Choose one and block the day in both diaries"
                - "Record what you did and spent in the history file"
            - name: Repairing a forgotten or disappointing anniversary
              description: |-
                ## Purpose
                Forgetting an anniversary, or delivering one that clearly hurt, can sting far beyond the day because it reads as a sign of how much you care. Acknowledging it plainly, making a proper second attempt and fixing the system that failed rebuilds trust faster than grand gestures or excuses.

                ## Milestones
                1. A plain apology given without excuses about work or stress.
                2. Your partner asked what would feel like a genuine make-up, not guessed.
                3. A second celebration delivered within a few weeks.
                4. The failure point fixed, such as a missing reminder or a plan left too late.

                ## Notes
                Fix the cause, not just the evening. A make-up dinner without new reminders means the same thing next year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "An apology given, a make-up celebration held within four weeks, and the cause recorded with the fix that prevents it recurring."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Apologise plainly for the missed or disappointing anniversary"
                - "Ask your partner what would feel like a real make-up"
                - "Book the make-up celebration within the next four weeks"
                - "Fix the reminder or habit that let the date slip"
            - name: Experiences over objects anniversary rule
              description: |-
                ## Purpose
                After several years, anniversary gifts can pile up as things neither of you needed, while the trips and evenings are what you actually talk about. Deciding whether to switch to experiences, keep objects only for milestone years or set a one-in, one-out rule makes gift-giving easier and the house less cluttered.

                ## Milestones
                1. Past anniversary gifts listed and sorted into used and loved versus forgotten.
                2. A rule agreed, such as experiences every year and an object only on milestone years.
                3. A list of experience ideas started that fit both of you.
                4. The rule written in the register for both partners to follow.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written gift rule for anniversaries is agreed by both partners and added to the register."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List past anniversary gifts and mark which still get used"
                - "Discuss whether experiences would suit you both better"
                - "Agree a gift rule and write it in the register"
                - "Start a list of experience ideas you both would enjoy"
            - name: Refreshing an anniversary tradition gone stale
              description: |-
                ## Purpose
                That same restaurant on the same night was lovely for the first five years and now feels like a habit nobody wants to break. Reviewing your anniversary traditions honestly, keeping the parts that still mean something and changing the rest, keeps the day special without abandoning what makes it yours.

                ## Milestones
                1. Every recurring anniversary tradition listed.
                2. Each one rated by both partners as keep, change or drop.
                3. One new element chosen to try this year.
                4. The updated tradition written into the history file.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each anniversary tradition is rated keep, change or drop by both partners and one new element is scheduled for this year."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every tradition you repeat each anniversary"
                - "Rate each one separately as keep, change or drop"
                - "Compare ratings and pick one new thing to try"
                - "Write the updated tradition into the history file"
            - name: Just the two of you or friends and family
              description: |-
                ## Purpose
                Certain anniversaries are best kept private and others deserve a crowd, and couples often disagree without saying so until the invitations are out. Deciding together which anniversaries include others, and who, avoids one partner feeling their private day was given away or the other feeling their milestone went unseen.

                ## Milestones
                1. Each partner's preference noted for small, medium and milestone anniversaries.
                2. A default agreed for ordinary years and for milestone years.
                3. A rough guest circle agreed for the next milestone that includes others.
                4. The decision noted in the milestone map.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written default for which anniversaries include others, with a guest circle for the next such milestone, is agreed by both partners."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your partner which anniversaries they would like to share with others"
                - "Agree defaults for ordinary and milestone years"
                - "Sketch the guest circle for your next shared celebration"
                - "Note the agreed default in the milestone map"
            - name: First wedding anniversary
              description: |-
                ## Purpose
                The first wedding anniversary often arrives just as wedding costs, thank-you cards and a new routine have taken all the energy, yet it sets the tone for every year after. Planning it deliberately, with the paper theme, a look back at the wedding and perhaps the top tier of the cake, starts your anniversary traditions well.

                ## Milestones
                1. A plan agreed that suits your budget after the wedding.
                2. A paper-themed gift or letter prepared by each of you.
                3. Wedding photos, video or vows revisited together on the day.
                4. One tradition chosen to repeat every year from now on.

                ## Notes
                If you froze the top tier of the cake, check with the baker how long it keeps. Many couples bake a small replica of the wedding cake instead.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first anniversary is celebrated with a paper gift or letter from each partner and one tradition recorded to repeat."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a budget and a rough plan for your first anniversary"
                - "Make or buy a paper gift for your partner"
                - "Find the wedding photos or video to watch together"
                - "Write down one tradition you will repeat every year"
            - name: Recreating your first date
              description: |-
                ## Purpose
                Going back to where you first met or had your first date, ordering what you ordered and telling the story to each other again, is one of the simplest anniversary plans and one of the most moving. It works at any stage, from the first anniversary of dating to the fortieth year of marriage, and adapts if the original place has gone.

                ## Milestones
                1. The details of the first date pieced together: place, time, food, what each of you wore.
                2. The venue checked as still open, or a close substitute found.
                3. The evening booked on or near the anniversary date.
                4. A photo taken in the same spot for the history file.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first-date recreation has taken place within a week of the anniversary, with a photo saved in the history file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Piece together the details of your first date from messages and memory"
                - "Check whether the original venue is still open"
                - "Book the venue or the closest substitute for the anniversary"
                - "Take a photo in the same spot for the history file"
            - name: Anniversary weekend away
              description: |-
                ## Purpose
                Getting a night or two away from home, work and children is the anniversary many couples remember most, but it needs leave, childcare, bookings and money lined up well in advance. Planning a weekend away from about three months out keeps costs down and the stress low enough that you actually rest.

                ## Milestones
                1. Dates agreed and leave approved for both partners.
                2. Childcare, pet care or house sitting arranged for every night away.
                3. Travel and accommodation booked within the anniversary budget.
                4. A loose plan for the weekend that includes at least one unplanned afternoon.

                ## Notes
                Start from the **Trip** template. Midweek or shoulder-season dates near the anniversary are often far cheaper than the weekend itself.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A weekend away near the anniversary is booked within budget, with leave and care arrangements confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree dates for the weekend and request leave"
                - "Arrange childcare or pet care for every night away"
                - "Book travel and somewhere to stay within the anniversary budget"
                - "Plan one special meal and leave one afternoon free"
            - name: Tenth anniversary celebration
              description: |-
                ## Purpose
                Ten years together or married is the first milestone most friends and family notice, and often comes during a busy stretch of careers, mortgages or young children. Giving it real planning, with a budget saved in advance and a format you both chose, marks a decade properly rather than as a slightly better dinner.

                ## Milestones
                1. The format agreed using the trip, party or gift decision.
                2. A budget confirmed from the anniversary pot.
                3. Bookings, guests or gifts arranged at least two months ahead.
                4. A ten-year look back prepared: photos, a letter or a short slideshow.

                ## Notes
                Tin and aluminium are the traditional tenth anniversary themes; diamond appears on some modern lists.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tenth anniversary is celebrated in the agreed format, within budget, with a ten-year look back shared between you."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Confirm the tenth anniversary format and budget together"
                - "Make the main bookings or invitations two months ahead"
                - "Gather ten photos, one from each year, for a look back"
                - "Write a ten-year letter to your partner"
            - name: Silver anniversary party for your 25th
              description: |-
                ## Purpose
                Twenty-five years is when many couples finally throw the party, often with children who are now adults and friends from every stage of life. Planning a silver anniversary gathering properly, with venue, guest list, food, a few words and a look back over the years, takes four to six months and is far easier with a clear plan.

                ## Milestones
                1. Date, venue, budget and size of party agreed.
                2. Guest list finalised and invitations sent at least eight weeks ahead.
                3. Food, drink and any music or entertainment booked.
                4. A photo display or slideshow of 25 years prepared.
                5. Thank-you messages sent within two weeks of the party.

                ## Notes
                Adult children often want to help or host. Decide early whose party it is so nobody is planning a duplicate in secret.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A silver anniversary party is held on the agreed date within budget, with thank-you messages sent to guests within two weeks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the date, budget and size of the party with your partner"
                - "Shortlist three venues and visit your favourite"
                - "Send invitations at least eight weeks before the party"
                - "Ask your children or friends to help gather photos for a display"
            - name: Ruby or golden anniversary gathering for your own marriage
              description: |-
                ## Purpose
                Reaching forty or fifty years together usually means a gathering spanning three or four generations, with guests who may be frail, far away or no longer driving. Planning your own ruby or golden celebration around accessibility, a manageable pace and the stories only you can tell makes it a day you enjoy rather than one you survive.

                ## Milestones
                1. The kind of gathering you both want decided, and who in the family will help.
                2. A step-free venue chosen with seating, toilets and parking that suit older guests.
                3. Travel help arranged for guests who cannot easily get there.
                4. A short look back prepared, such as photos from each decade or a reading of your vows.
                5. Rest built into the day for both of you.

                ## Notes
                A lunchtime gathering often suits older guests and young great-grandchildren better than an evening party.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ruby or golden anniversary gathering is held at an accessible venue, with travel help arranged for every guest who needed it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Talk together about the kind of gathering you both want"
                - "Ask one family member to act as your helper and organiser"
                - "Check that the shortlisted venue is step-free with good seating"
                - "Choose one photo from each decade for a look back display"
            - name: First year of dating milestones without overdoing it
              description: |-
                ## Purpose
                New couples often wonder whether to mark one month, three months or six months, and a lavish gift at month two can feel like pressure. Agreeing a light touch for the first year, a note or a small treat at three and six months and something more at twelve, keeps the early dates fun and leaves room to grow.

                ## Milestones
                1. The date you count from agreed between you.
                2. A light-touch plan for the three-month and six-month marks.
                3. A sensible budget set for the first anniversary of dating.
                4. The first anniversary of dating marked and logged in the history file.

                ## Notes
                If you are not sure what your partner expects, ask with a smile. Guessing big or small both carry risk this early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The first anniversary of dating is marked in a way both partners agreed in advance and recorded in the history file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with your partner which date you count from"
                - "Plan something small for the three-month and six-month marks"
                - "Set a budget for your first anniversary of dating"
                - "Log the first anniversary in the history file afterwards"
            - name: Anniversaries with babies and young children
              description: |-
                ## Purpose
                With a baby or toddlers at home, a long dinner out can feel impossible and the anniversary slips to a tired takeaway. Planning around naps, bedtimes and the help you actually have, for example a lunch date while grandparents babysit or a late dinner at home once the children are asleep, keeps the day for the two of you during the most stretched years.

                ## Milestones
                1. The realistic window for time together worked out around feeds, naps and bedtime.
                2. Childcare or family help booked for that window.
                3. A plan chosen that fits the energy you will really have.
                4. Children included in one small way if you both want, such as a card they decorate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Time alone together on or near the anniversary is planned around the children's routine, with any needed childcare confirmed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out the best window for time together around the children's routine"
                - "Ask grandparents or a sitter to cover that window"
                - "Choose a plan that suits the energy you will have that day"
                - "Help the children make a card for the anniversary"
            - name: Long-distance anniversary across time zones
              description: |-
                ## Purpose
                When you are apart on your anniversary, the day can feel lonelier than an ordinary one unless you plan it as carefully as you would together. Choosing a shared call time that works in both zones, sending a parcel timed to arrive on the day and doing one activity together over video makes the anniversary feel marked rather than missed.

                ## Milestones
                1. A call slot agreed that falls on the anniversary in both time zones, or a deliberate choice of whose date to use.
                2. A gift or parcel sent with international delivery times allowed for.
                3. One shared activity planned over video, such as cooking the same meal.
                4. A date set for celebrating again in person when you next meet.

                ## Notes
                Overseas parcels can take two to three weeks and may attract import charges for the recipient. Send early or order locally to their address.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The anniversary is marked with a planned call and a delivered gift, and an in-person celebration date is agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a call time that falls on the anniversary in both zones"
                - "Send a gift with at least three weeks for international delivery"
                - "Choose one activity you can do together over video"
                - "Set a date to celebrate again when you are next together"
            - name: Anniversary during illness or a hospital stay
              description: |-
                ## Purpose
                Serious illness, treatment or a hospital stay can coincide with an anniversary, and the ill partner often feels guilty that the day is lost. A gentle, adapted celebration, a favourite meal brought in, a letter, a short visit with the wedding photos, can mean more than any ordinary year, as long as it fits the energy and rules of the day.

                ## Milestones
                1. The unwell partner asked what they would like, and what they would rather skip.
                2. Hospital or care setting rules on visiting, food and flowers checked.
                3. A short adapted plan agreed that fits their energy.
                4. A proper celebration pencilled in for when health allows.

                ## Notes
                Many wards do not allow fresh flowers. Check with the ward or the care team before bringing food or gifts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "An adapted anniversary is marked within the care setting's rules, and a later celebration date is noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your partner gently what they would like on the day"
                - "Check the ward's rules on visiting times, food and flowers"
                - "Plan a short visit with a letter or photos from your wedding"
                - "Pencil in a proper celebration for when health allows"
            - name: Wedding anniversary after a partner has died
              description: |-
                ## Purpose
                The first wedding anniversary after a partner's death is often one of the hardest days of the year, and later ones can still catch people off guard. Deciding in advance how you want to spend it, alone, with family, at a meaningful place or doing something they loved, and telling a few people, means you are not facing the day unprepared or unsupported.

                ## Milestones
                1. A plan for the day chosen, even a simple one, with a backup if it feels too much.
                2. One or two people told the date and asked to be in touch.
                3. A small ritual chosen, such as visiting a favourite place or cooking their recipe.
                4. Bereavement support contacts written down in case the day is harder than expected.

                ## Notes
                There is no right way to mark it, and plans can change on the morning. If grief feels overwhelming, talk to your doctor or a bereavement service.
              priority: high
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A written plan for the anniversary exists, at least one person has agreed to be in touch, and support contacts are listed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Think about how you would most like to spend the day"
                - "Tell one or two close people the date and ask them to call"
                - "Write down a bereavement support contact for the day"
                - "Arrange contact with a friend or family member the week before @recurring(yearly)"
            - name: Family anniversary for a blended family
              description: |-
                ## Purpose
                In a stepfamily the wedding anniversary can feel like the adults' day while the children were also part of becoming a family, sometimes reluctantly. Choosing a date to mark as the family's own, such as the day you all moved in together, and celebrating it in a way the children help shape, can build belonging without forcing it.

                ## Milestones
                1. A family date chosen that the children feel part of, not only the wedding.
                2. Each child asked what they would enjoy doing, with no pressure to join in.
                3. A simple yearly family celebration agreed.
                4. The couple's own wedding anniversary kept separately for the two of you.

                ## Notes
                Respect the other parent and the children's loyalties. A family day should never feel like a replacement for the family they had before.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A family anniversary date is agreed with input from each child, and the first celebration of it has taken place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Talk with your partner about which date could be the family's day"
                - "Ask each child what they would enjoy, making joining in optional"
                - "Plan a simple first family anniversary"
                - "Hold the family anniversary celebration @recurring(yearly)"
            - name: Couples with more than one wedding date
              description: |-
                ## Purpose
                Some couples have a legal registration on one date and a ceremony or religious wedding on another, or a civil partnership later converted to marriage, which leaves real confusion about which year you are counting. Agreeing which date carries the anniversary, how you count the years and whether the other date gets its own marking avoids awkwardness at every milestone.

                ## Milestones
                1. Every formal date listed with the document or record that shows it.
                2. One date agreed as the main anniversary and the counting rule written down.
                3. A decision on how, or whether, the other dates are marked.
                4. The register and milestone map updated to match.

                ## Notes
                Keep copies of the certificates with your household papers. The date on an official record is what any authority will use, whatever you celebrate.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The main anniversary date and the counting rule are agreed and recorded in the register, with every formal date listed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every formal date with the record that shows it"
                - "Agree which date counts as your main anniversary"
                - "Decide how you will mark the other dates, if at all"
                - "Update the register and milestone map to match"
            - name: Organising your parents' ruby or golden anniversary
              description: |-
                ## Purpose
                Adult children often want to mark a parent's fortieth or fiftieth wedding anniversary but start late, disagree among siblings about cost and scale, or plan something the parents never wanted. Agreeing a plan with siblings, checking discreetly what your parents would enjoy and sharing out costs and tasks fairly makes it a gift rather than a family argument.

                ## Milestones
                1. Your parents' wishes established, directly or through someone close to them.
                2. Siblings agreed on format, budget and how costs are split.
                3. A lead organiser named and tasks shared out in writing.
                4. The celebration delivered and a keepsake, such as a photo book, given.

                ## Notes
                Agree the money split in writing before booking anything. Unequal incomes among siblings are a common source of tension, so consider contributions by ability rather than equal shares.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Your parents' milestone anniversary is celebrated in a format they wanted, with costs and tasks shared as agreed in writing by the siblings."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Message your siblings to start planning the anniversary"
                - "Find out discreetly what kind of celebration your parents would enjoy"
                - "Agree the budget and cost split in writing"
                - "Ask relatives for old photos for a keepsake book"
            - name: Ten-year anniversary time capsule
              description: |-
                ## Purpose
                A box sealed on one anniversary and opened ten years later, holding letters to your future selves, a few objects and predictions, is a tradition that only works if you start it. Choosing what goes in, where it is stored and when it opens gives a future milestone anniversary something no money can buy.

                ## Milestones
                1. A sturdy box and a safe storage place chosen.
                2. Letters to your future selves written and sealed.
                3. Objects, photos and predictions for ten years on added.
                4. The opening date added to the register and calendar.

                ## Notes
                Avoid storing it anywhere damp. A loft or garage can ruin paper and photos within a few years.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sealed time capsule is stored safely, with its contents listed and its opening date set as a calendar event."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a sturdy box and a dry place to keep it"
                - "Write a letter each to your future selves"
                - "Add objects, photos and three predictions for ten years on"
                - "Add one small item or note to the capsule @recurring(yearly)"
            - name: Recorded interviews with each other every five years
              description: |-
                ## Purpose
                Voices, phrasing and the way you tell your own story change over the decades, and few couples have any recording of how they talked about each other at thirty or at sixty. Interviewing each other on video with the same questions every fifth anniversary builds a private record that becomes priceless for you and, later, for your family.

                ## Milestones
                1. A fixed set of ten questions written, such as what you first noticed and what surprised you most this time.
                2. The first interviews recorded, about twenty minutes each.
                3. The recordings stored in two places with clear file names.
                4. The next interview date added to the milestone map.

                ## Notes
                Ask the agent to suggest interview questions, then cut the list to the ten that feel like you.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Video interviews of both partners answering the same ten questions are recorded and stored in two places, with the next date set."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to suggest twenty interview questions for a couple"
                - "Cut the list to the ten questions you will reuse every five years"
                - "Record each other's answers on video"
                - "Back up the recordings in two separate places"
            - name: Relationship history book for a milestone
              description: |-
                ## Purpose
                For a twenty-fifth, fortieth or fiftieth anniversary, a bound book telling the story of your relationship, with photos, letters, tickets and memories from friends and family, becomes an heirloom children and grandchildren will keep. It takes months to gather and design, so starting a year ahead is the difference between a rushed album and a real history.

                ## Milestones
                1. An outline of chapters by period or decade.
                2. Photos, letters and documents gathered and scanned for each chapter.
                3. Short memories requested from friends and family and collected.
                4. Text and captions written and checked by both partners.
                5. The book designed, printed and delivered before the anniversary.

                ## Notes
                Ask contributors for memories in a single short paragraph each. Open requests produce either nothing or ten pages.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A printed relationship history book with photos, documents and at least five contributed memories arrives before the milestone anniversary."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Outline the book's chapters by period or decade"
                - "Scan the photos and letters for the first chapter"
                - "Ask five friends or relatives for a one-paragraph memory each"
                - "Choose a book printer and note its production lead time"
            - name: Commissioning anniversary art from a local maker
              description: |-
                ## Purpose
                Commissioned pieces, such as a painting of the church or registry office, an illustrated map of the places you have lived, or a piece of pottery glazed with your dates, make milestone gifts that are truly one of a kind. Commissioning well means finding the right maker, giving a clear brief and leaving enough lead time, since good artists are often booked months ahead.

                ## Milestones
                1. Three makers shortlisted whose past work suits the piece you have in mind.
                2. A written brief with size, subject, references, budget and deadline sent.
                3. A quote, timeline and any deposit agreed in writing.
                4. The finished piece received with a week to spare before the anniversary.

                ## Notes
                Ask to see a sketch or draft at an agreed stage. It is much easier to change direction early than at the final reveal.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A commissioned piece is delivered at least a week before the anniversary, made to a written brief within the agreed budget."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three local makers whose past work you love"
                - "Write a brief with subject, size, references and budget"
                - "Agree the quote, deposit and delivery date in writing"
                - "Ask to see a sketch before the maker starts the final piece"
---

# Anniversaries & Milestone Celebrations

This area is for anyone who wants relationship anniversaries and milestones to be remembered and marked well, whether you have been together eight months or forty years. It starts with the foundations (a register of your dates, reminders, an agreement on what you celebrate, a budget and a map of the milestone years ahead), then the yearly machinery that makes each anniversary easy, the skills behind good cards, gifts and surprises, the choices about trips, keepsakes and tight years, the big occasions from the first to the golden anniversary, versions for new couples, parents, long-distance couples, illness, bereavement and blended families, and finally the long-range projects that turn decades into a family record.

What repeats is a three-week countdown before each anniversary, a monthly note of moments for the anniversary letter, a savings transfer on the 18th, a family anniversaries check on the 3rd, a quarterly look ahead at coming milestones and a short debrief after each celebration. The Savings goal, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
