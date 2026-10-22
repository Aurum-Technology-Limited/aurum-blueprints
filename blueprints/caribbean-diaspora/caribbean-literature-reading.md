---
id: caribbean-diaspora.caribbean-literature-reading
name: Caribbean Literature Reading
description: "A starter shelf and reading queue, writers from every corner of the region, poetry and plays read aloud, book clubs, prize seasons and literary festivals, and Caribbean books shared with children, teenagers and family across the water."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, caribbean-literature-reading, everyone, books, reading-list, poetry, book-club, literary-festivals]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - habit-tracker
    - meeting-notes
    - trip
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Caribbean Literature Reading
          description: "Reading Caribbean literature: novelists, poets and playwrights from across the region, a reading list, book clubs and literary festivals."
          projects:
            - name: Ten-book Caribbean starter shelf
              description: |-
                ## Purpose
                Caribbean literature spans English, French, Spanish, Dutch and a dozen creoles, which makes it hard to know where to begin. A first shelf of ten books, mixing a few classics such as Sam Selvon's The Lonely Londoners and Jean Rhys's Wide Sargasso Sea with living writers and at least one poetry collection, gives you a footing in the region within a few months and shows which strands you want to follow next.

                ## Milestones
                1. Ten titles chosen, covering at least five countries and both men and women writers.
                2. At least two poetry collections or plays among the ten.
                3. Each title located: owned, borrowed, on hold at the library or ordered.
                4. The first book started within a week of choosing the list.

                ## Notes
                Ask relatives what they read at school or loved later; their picks make good conversation as well as good reading. Ten is enough. A list of fifty quickly becomes a guilt list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of ten Caribbean books from at least five countries, each one located, with the first book started."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down three Caribbean books you have heard of but never read"
                - "Ask two relatives or friends which Caribbean book they would hand a first-time reader"
                - "Pick ten titles covering at least five countries"
                - "Find each title at the library, a bookshop or second hand"
            - name: Island-by-island reading map
              description: |-
                ## Purpose
                Most readers know a handful of names from Trinidad, Jamaica and Barbados and nothing at all from Belize, Suriname, Curaçao or the smaller islands. A simple map of the region, one row per country with the writers you know and a gap where you know none, turns a vague sense of Caribbean literature into a picture you can fill in on purpose.

                ## Milestones
                1. A table with one row for each country and territory in the region, from the Bahamas to Suriname.
                2. At least one writer named against every English-speaking country.
                3. Gaps marked clearly, including the French, Spanish and Dutch Caribbean.
                4. Three gaps chosen to fill first and added to the reading queue.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A country-by-country table of the region with known writers listed and at least three gaps chosen to fill next."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the countries of the region in a simple table, one row each"
                - "Add every Caribbean writer you have already read to their country's row"
                - "Look up one writer for each empty row in the English-speaking Caribbean"
                - "Choose three empty rows to fill first"
            - name: Caribbean reading queue
              description: |-
                ## Purpose
                Book recommendations arrive from everywhere: a cousin on WhatsApp, a festival programme, a prize shortlist, a line in another novel. Keeping one queue, with where each suggestion came from and why it caught your eye, stops good books being lost and makes choosing the next one a two-minute job.

                ## Milestones
                1. One queue with columns for title, author, country, source, format and status.
                2. Every suggestion scattered across phone notes and messages moved into it.
                3. Titles sorted into next up, later and maybe.
                4. Five books marked as next up, each one already findable.

                ## Notes
                Start from the **Reading queue** template. Keep the source column: a book recommended by someone whose taste you trust deserves to jump the queue.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One reading queue holds every current Caribbean book suggestion, with source and country recorded and five books marked next up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a reading queue from the reading queue template"
                - "Copy every book suggestion from your phone notes and messages into it"
                - "Add columns for country, source and format"
                - "Mark five books as next up"
                - "Prune titles you no longer want to read @recurring(quarterly)"
            - name: Library card and Caribbean catalogue search
              description: |-
                ## Purpose
                Public libraries in London, New York, Toronto and across the region hold more Caribbean writing than most bookshops, and an online library account usually brings ebooks and audiobooks too. Joining, learning to search by subject and placing holds turns the starter shelf from a shopping bill into something you can read for free.

                ## Milestones
                1. An active library card with a working online account.
                2. The catalogue searched for every title on the starter shelf.
                3. Holds placed on the first three titles you want.
                4. The library's ebook and audiobook app linked to your card.
                5. The interlibrary loan process for scarce titles noted.

                ## Notes
                Subject searches such as Caribbean fiction or West Indian poetry often find older titles that a keyword search misses. Ask a librarian about interlibrary loan before buying a scarce book.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A working library card with online access, holds placed on at least three Caribbean titles and the interlibrary loan process written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Join your local public library or renew your card online"
                - "Search the catalogue for each title on your starter shelf"
                - "Place holds on the three titles you want first"
                - "Link the library's ebook and audiobook app to your card"
                - "Check holds and return dates in your library account @recurring(monthly:7)"
            - name: Bookshops and Caribbean publishers shortlist
              description: |-
                ## Purpose
                A few publishers keep much Caribbean writing in print, among them Peepal Tree Press in Leeds, Ian Randle Publishers in Kingston and Papillote Press, alongside independent and Black-owned bookshops in diaspora cities and bookshops back home. Knowing where to look, and which shops will order a title in, saves hours of searching and puts your money with the people keeping these books alive.

                ## Milestones
                1. Three Caribbean publishers' catalogues bookmarked.
                2. Two bookshops, local or online, that stock or will order Caribbean titles.
                3. One bookshop back home noted for buying books during visits.
                4. The list saved alongside the reading queue.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved list of at least three Caribbean publishers and two bookshops that stock or order Caribbean titles, with one publisher newsletter joined."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Browse the catalogue of one Caribbean publisher and note three titles"
                - "Find two bookshops near you or online that will order Caribbean books"
                - "Ask relatives back home which bookshop they use"
                - "Sign up for one publisher's newsletter"
            - name: Reading notebook for Caribbean books
              description: |-
                ## Purpose
                Ideas from a novel fade within weeks unless something is written down: a line of creole dialogue that sang, a village you want to look up, a character who reminded you of an uncle. A notebook with a page per book, a few quotations and your own reactions becomes the raw material for book club talk, reviews and the yearly look back.

                ## Milestones
                1. A paper notebook or notes app chosen and kept in one place.
                2. A standard page layout: title, author, country, dates read, lines worth keeping, reactions, what to read next.
                3. An entry for every Caribbean book started since install.
                4. The first monthly read-back done, with one link between books noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reading notebook with a standard page layout and an entry for every Caribbean book started since install."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a paper notebook or a notes app for your reading notes"
                - "Write the page headings you will use for each book"
                - "Fill in a page for the book you are reading now"
                - "Read back over the month's entries and note links between books @recurring(monthly:14)"
            - name: Tracking down out-of-print Caribbean books
              description: |-
                ## Purpose
                Many important Caribbean books, including much of the old Heinemann Caribbean Writers Series, have drifted out of print, and copies now sit in second-hand shops, university libraries and relatives' shelves. A want list and a few patient search habits find them at fair prices instead of paying collector rates on impulse.

                ## Milestones
                1. A want list of out-of-print titles, with any edition you prefer noted.
                2. A price ceiling set for each title.
                3. Older relatives asked whether any of the titles sit on their shelves.
                4. At least one title found, borrowed or bought.

                ## Notes
                Check for a recent reissue first: several older Caribbean titles have come back into print in new editions. Try interlibrary loan before paying a high price.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A want list of out-of-print Caribbean titles with price ceilings, and at least one title found within six months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the Caribbean titles you cannot find new"
                - "Set a price ceiling for each title on the want list"
                - "Ask older relatives whether any of these sit on their shelves"
                - "Search second-hand listings for the want list titles @recurring(quarterly)"
            - name: Protected weekly reading time
              description: |-
                ## Purpose
                Reading lists usually fail for want of hours, not interest. Picking two fixed slots a week, such as the bus home on Tuesday and Sunday afternoon, and guarding them like an appointment, is enough for most people to finish a novel a month.

                ## Milestones
                1. Two weekly reading slots chosen and in the calendar.
                2. A simple rule for the phone during reading time.
                3. Four weeks of slots ticked off or honestly marked as missed.
                4. Slots moved or changed after the first month based on what slipped.

                ## Notes
                Start from the **Habit tracker** template. Thirty minutes kept beats two hours planned and skipped.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two reading slots a week kept for at least six of the first eight weeks, tracked in a habit tracker."
                cadence: rolling
              tasks:
                - "Pick two fixed reading slots in your week and put them in the calendar"
                - "Set up a habit tracker from the habit tracker template"
                - "Leave the phone in another room during each slot"
                - "Tick off the week's reading slots and move any that slipped @recurring(weekly:sun)"
            - name: Monthly next-book pick from the queue
              description: |-
                ## Purpose
                Deciding what to read next is where momentum dies: the queue is long and every choice seems to rule out another. Choosing next month's book on a fixed date, alternating country, form and decade, keeps the reading varied and stops a finished book being followed by a fortnight of nothing.

                ## Milestones
                1. A one-line rule for alternating country, form and decade.
                2. Next month's book chosen and in hand before the current one ends.
                3. Each pick and the reason for it noted in the queue.
                4. Six months of picks with no two consecutive books from the same country.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A next book chosen on the same date each month for six months, each one different in country or form from the last."
                cadence: rolling
              tasks:
                - "Write a one-line rule for alternating country and form"
                - "Check the next pick is in hand before the current book ends"
                - "Note each month's pick and why in the reading queue"
                - "Choose next month's book from the queue @recurring(monthly:3)"
            - name: Poem a week from Caribbean poets
              description: |-
                ## Purpose
                Poetry is where much of the region's best writing lives, from Derek Walcott and Kamau Brathwaite to Lorna Goodison, Grace Nichols and Kei Miller, yet many prose readers skip it. One poem a week, read twice and once aloud, takes ten minutes, and after a year you have met fifty poems you can return to.

                ## Milestones
                1. An anthology or collection of Caribbean poetry on hand.
                2. A list of poems read, with poet, country and one line you liked.
                3. Five favourite poems copied into the reading notebook.
                4. Two poets from the list followed up with a full collection.

                ## Notes
                An anthology is the easiest start because it samples many voices at once. Ask the library for a recent anthology of Caribbean poetry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least forty Caribbean poems read and logged with poet and country over twelve months, with five favourites copied out."
                cadence: rolling
              tasks:
                - "Borrow or buy one anthology of Caribbean poetry"
                - "Start a list of poems read with poet, country and one line you liked"
                - "Copy your five favourite poems into the reading notebook"
                - "Read one Caribbean poem twice, the second time aloud @recurring(weekly:wed)"
            - name: New releases and prize lists watch
              description: |-
                ## Purpose
                Each year brings new Caribbean novels, collections and memoirs, but they are easy to miss outside the region's own press and a few specialist bookshops. A quarterly sweep of publishers' catalogues, prize longlists and magazine reviews catches them while they are new, when author events and book club conversation are liveliest.

                ## Milestones
                1. A list of sources: at least three publishers, two prizes and two magazines.
                2. All sources bookmarked in one folder.
                3. The first sweep done and new titles added to the reading queue with their source.
                4. At least one new release read within the year it came out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sweep of at least five sources completed each quarter for a year, with new titles added to the reading queue."
                cadence: rolling
              tasks:
                - "List the publishers, prizes and magazines you will check"
                - "Bookmark each source in one folder"
                - "Add every new title that interests you to the reading queue"
                - "Sweep your sources for new Caribbean books @recurring(quarterly)"
            - name: Caribbean literary magazines and journals
              description: |-
                ## Purpose
                Caribbean writing often appears first in magazines and journals: Wasafiri, Bim in Barbados, the online magazine PREE, and Small Axe for criticism, among others. Reading one issue or a few pieces a month introduces writers before they have books and keeps you inside the current conversation about the region's literature.

                ## Milestones
                1. Two magazines looked at and one chosen to follow.
                2. A subscription taken or free online access bookmarked.
                3. One issue or three pieces read in most months.
                4. Three new writers found this way and added to the queue.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One issue or three pieces from a Caribbean literary magazine read in at least ten months of a year, with three new writers added to the queue."
                cadence: rolling
              tasks:
                - "Look at the current issues of two Caribbean literary magazines"
                - "Choose one to subscribe to or follow online"
                - "Add any writer you want more of to the reading queue"
                - "Read one issue or three pieces from your chosen magazine @recurring(monthly:18)"
            - name: Long-distance buddy read with family
              description: |-
                ## Purpose
                Reading the same book as a sister in Arima, a cousin in Brooklyn or a grandmother in Mandeville gives a regular phone call something to talk about beyond news and errands. A shared book, read at an agreed pace and discussed on a monthly video or voice call, keeps two people close across the water.

                ## Milestones
                1. A reading buddy in another country agreed.
                2. A first title chosen that both of you can get as an ebook or a posted copy.
                3. A pace agreed in chapters per call.
                4. Three books read and talked through together.

                ## Notes
                Pick shorter books for the first round. Ebooks avoid the cost and delay of posting books between countries.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three books read and discussed on calls with a relative or friend in another country within six months."
                cadence: rolling
              tasks:
                - "Ask one relative or friend in another country to read a book with you"
                - "Choose a title you can both get as an ebook or a posted copy"
                - "Agree how many chapters to read before each call"
                - "Hold the book call with your reading buddy @recurring(monthly:22)"
            - name: Joining or starting a Caribbean book club
              description: |-
                ## Purpose
                A book club turns solitary reading into a regular evening of argument and laughter, but the wrong group, too large, too rarely meeting or never actually reading the book, fizzles fast. Checking what already exists through libraries, churches, diaspora associations and bookshops, then deciding whether to join or start one, gives you a group that meets.

                ## Milestones
                1. Two or three existing clubs found, with their meeting pattern and recent books.
                2. One club visited as a guest.
                3. A decision to join or start recorded with the reason.
                4. If starting, five founding members invited and a first date set.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to join a named club or start one, with a first meeting attended or booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your library and two bookshops about Caribbean or Black literature book clubs"
                - "Visit one existing club as a guest"
                - "Decide whether to join it or start your own and write down why"
                - "Invite five people if you are starting your own"
            - name: Running monthly book club meetings
              description: |-
                ## Purpose
                Clubs that last share three habits: a book chosen well ahead, a host who brings two or three questions, and a short note of what was said. Running meetings to that pattern, with a rotating host and a list planned a season ahead, keeps eight to twelve people turning up for years.

                ## Milestones
                1. The next three books agreed by the group.
                2. A host rota covering six meetings.
                3. Notes kept for every meeting, including the next book and date.
                4. A short review with members after six meetings on what to change.

                ## Notes
                Start from the **Meeting notes** template for each session. Alternate a long novel with a short one or a poetry collection so people who fell behind can catch up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly meetings held with the book chosen in advance and notes kept for each."
                cadence: rolling
              tasks:
                - "Agree the next three books with the group"
                - "Set up a host rota for the next six meetings"
                - "Write up the meeting notes the day after each meeting"
                - "Send the date, book and three questions a week before the meeting @recurring(monthly:10)"
            - name: OCM Bocas Prize shortlist reading season
              description: |-
                ## Purpose
                The OCM Bocas Prize for Caribbean Literature, awarded through the Bocas Lit Fest in Trinidad, picks out the year's strongest books by Caribbean writers across fiction, poetry and nonfiction. Reading the shortlist each year, and comparing your pick with the judges', is a ready-made reading season with a satisfying ending.

                ## Milestones
                1. This year's longlist or shortlist found on the festival website.
                2. Every shortlisted book located or on hold.
                3. At least three shortlisted books read before the winner is announced.
                4. Your own winner recorded, then compared with the judges' choice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three books from the year's shortlist read before the winner is announced, with your own pick recorded."
                cadence: cyclic
              tasks:
                - "Look up the most recent shortlist on the Bocas Lit Fest website"
                - "Place library holds on the shortlisted books"
                - "Write a short verdict on each shortlisted book you finish"
                - "Check whether the new longlist or shortlist is out @recurring(yearly)"
            - name: A book from every country in twelve months
              description: |-
                ## Purpose
                Reading one book from each of twelve different Caribbean countries in a year breaks the habit of returning to the same two or three islands. Logging each finished book on the reading map makes the gaps visible and gives the year a shape you can see.

                ## Milestones
                1. Twelve countries chosen from the reading map, starting with the gaps.
                2. A book lined up for each country.
                3. Each finished book logged against its country.
                4. A year-end count of countries covered.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve books from twelve different Caribbean countries finished within one year, each logged on the reading map."
                cadence: cyclic
              tasks:
                - "Choose twelve countries from your reading map"
                - "Find one book for each country, starting with the gaps"
                - "Log each finished book against its country on the map @recurring(monthly:27)"
                - "Count the countries covered at the end of the year"
            - name: Annual Caribbean reading review
              description: |-
                ## Purpose
                Once a year, looking back over what you read shows patterns you cannot see month to month: perhaps every book was a novel, or every writer lived in London. An hour with the notebook and queue, a count by country, form and writer, and three goals for the coming year keeps the reading growing in the directions you care about.

                ## Milestones
                1. The year's books counted by country, form and writer.
                2. Your three best books of the year named, with a line on each.
                3. Three reading goals set for the coming year.
                4. The queue reordered to serve those goals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written yearly review listing books read by country and form, a top three and three goals for the next year."
                cadence: cyclic
              tasks:
                - "Ask the agent to tally the year's notebook entries by country and form"
                - "Choose your three best books of the year and say why"
                - "Set three reading goals for the coming year"
                - "Hold your annual Caribbean reading review @recurring(yearly)"
            - name: Windrush generation novelists in London
              description: |-
                ## Purpose
                In the 1950s a remarkable group of Caribbean writers was at work in London, among them Sam Selvon, George Lamming, V.S. Naipaul, Andrew Salkey and Edgar Mittelholzer, many first heard on the BBC radio programme Caribbean Voices. Reading four of their books in order shows how migrant life, colonial schooling and the island left behind shaped modern Caribbean fiction.

                ## Milestones
                1. A four-book route chosen, such as The Lonely Londoners, In the Castle of My Skin, Miguel Street and Escape to an Autumn Pavement.
                2. Each book read with a notebook page.
                3. Links between the books noted: shared streets, jobs, homesickness and humour.
                4. A one-page comparison written.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four novels by 1950s Caribbean writers in London read in order, with a one-page comparison of how each treats migration or home."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Borrow The Lonely Londoners by Sam Selvon"
                - "Read In the Castle of My Skin by George Lamming next"
                - "Note how each book handles leaving home and arriving in London"
                - "Write one page comparing the four books"
            - name: Reading nation language and creole on the page
              description: |-
                ## Purpose
                Selvon wrote The Lonely Londoners in a Trinidadian voice from narration to dialogue, Louise Bennett wrote her poems in Jamaican, and Kamau Brathwaite called this nation language: the speech of the people treated as a literary language. Learning to hear it as you read, instead of translating it in your head, changes how these books sound and how much of their humour comes through.

                ## Milestones
                1. Three texts written wholly or partly in creole chosen.
                2. A passage from each read aloud and recorded.
                3. Notes on how each writer spells and shapes creole on the page.
                4. Brathwaite's essay History of the Voice read.

                ## Notes
                If the creole is not your own, listen to the writer reading before you read. If it is your own, notice where the written version differs from how your family speaks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Passages from three books written in creole read aloud and recorded, with notes on how each writer puts the language on the page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a recording of Louise Bennett performing one of her poems"
                - "Read one page of The Lonely Londoners aloud"
                - "Note how each writer spells creole words on the page"
                - "Read Brathwaite's essay History of the Voice"
            - name: Reading Caribbean poetry aloud
              description: |-
                ## Purpose
                Much Caribbean poetry is written for the voice: Brathwaite's drumming rhythms, Goodison's incantations, Walcott's long lines that roll like surf. Practising three poems aloud until they feel natural, and comparing your reading with recordings of the poets, opens poems that seem difficult on the silent page.

                ## Milestones
                1. Three poems by different Caribbean poets chosen.
                2. A recording of each poet reading their own work found.
                3. Your own reading of each poem recorded and listened back to.
                4. One poem read to another person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three Caribbean poems practised aloud, recorded and compared with the poets' own readings, with one read to another person."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three poems by different Caribbean poets"
                - "Find a recording of each poet reading their own work"
                - "Record yourself reading each poem and listen back"
                - "Read your favourite to a friend or relative"
            - name: Slow read of Derek Walcott's Omeros
              description: |-
                ## Purpose
                Omeros, Derek Walcott's book-length poem set mostly among fishermen in St Lucia, retells Homer through Achille, Hector and Helen, and was published two years before he won the Nobel Prize in 1992. At around three hundred pages of verse it rewards a slow read of a chapter or two a week, with a guide nearby, far more than a rush.

                ## Milestones
                1. A copy obtained, ideally with a reading guide or study alongside.
                2. A weekly pace set and kept.
                3. A running list of characters and places.
                4. The poem finished, with a page on what it does with Homer.

                ## Notes
                Read a passage aloud each session. The poem moves in loose three-line stanzas that carry best in the voice.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Omeros read to the end within six months at a set weekly pace, with a closing page of notes written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get a copy of Omeros and a reading guide to go with it"
                - "Set a weekly pace of one or two chapters"
                - "Keep a list of characters and places as they appear"
                - "Write a page on what the poem does with Homer once you finish"
            - name: Wide Sargasso Sea beside Jane Eyre
              description: |-
                ## Purpose
                Jean Rhys, who grew up in Dominica, wrote Wide Sargasso Sea to give a life to Bertha Mason, the Creole wife locked in the attic of Charlotte Brontë's Jane Eyre. Reading the two together is one of the clearest ways to see Caribbean writers answering the English books they were taught, and it makes both novels richer.

                ## Milestones
                1. Copies of both novels in hand.
                2. The chapters of Jane Eyre in which Bertha appears reread.
                3. Wide Sargasso Sea read in full.
                4. A page comparing Antoinette and Bertha written or discussed with others.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both novels read, with a one-page comparison of Antoinette in Wide Sargasso Sea and Bertha in Jane Eyre."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find the chapters of Jane Eyre in which Bertha Mason appears"
                - "Reread those chapters before starting Wide Sargasso Sea"
                - "Note each place where the two books tell the same events differently"
                - "Write a page or talk the pair over with your book club"
            - name: Reading Caribbean plays from the page
              description: |-
                ## Purpose
                Caribbean theatre has a strong written tradition, from Walcott's Dream on Monkey Mountain and Errol John's Moon on a Rainbow Shawl to Errol Hill's Man Better Man and Trevor Rhone's Old Story Time, but plays are rarely read outside school. Reading them as scripts, with a voice for each character and the cast list in front of you, opens a part of the literature most readers never reach.

                ## Milestones
                1. Three plays from different islands chosen.
                2. Each play read with the cast list and stage directions in view.
                3. One play read aloud with friends taking parts.
                4. One play seen in performance or in a recording.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three Caribbean plays read, one of them aloud with others taking parts, and one seen performed live or recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Borrow a collection of Caribbean plays from the library"
                - "Choose three plays from different islands"
                - "Organise a read-through of one play with friends taking parts"
                - "Check local theatres for a Caribbean play in production"
            - name: Dub poetry on the page and on record
              description: |-
                ## Purpose
                Dub poetry grew in Jamaica and London in the 1970s, with poets such as Linton Kwesi Johnson, Mutabaruka, Michael Smith and Jean Binta Breeze speaking verse over reggae rhythms. Reading the printed poems beside the recordings shows how sound, politics and spelling work together, and why Johnson became one of very few living poets published as a Penguin Modern Classic.

                ## Milestones
                1. One printed collection of dub poetry in hand.
                2. Recordings of at least five of its poems found and heard.
                3. Three poems compared line by line, page against performance.
                4. The events behind two poems looked up and noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dub poems read on the page and heard on record, with notes comparing the printed and performed versions of three."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Borrow a collection by Linton Kwesi Johnson or Jean Binta Breeze"
                - "Listen to recordings of the same poems"
                - "Mark where the performed version departs from the printed one"
                - "Read about the events behind two of the poems"
            - name: French Caribbean writing in translation
              description: |-
                ## Purpose
                Martinique, Guadeloupe, Haiti and French Guiana gave the world Aimé Césaire, Maryse Condé, Patrick Chamoiseau, Édouard Glissant and Jacques Roumain, yet English-speaking readers in the region often never meet them. A five-book route in good translations, from Césaire's Notebook of a Return to the Native Land to Condé's I, Tituba, puts the French Caribbean back on your map.

                ## Milestones
                1. Five French Caribbean books available in English chosen.
                2. The translator of each edition noted.
                3. At least three of the five read.
                4. The reading map updated for each country covered.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three books from the French-speaking Caribbean read in translation, with translators noted and the reading map updated."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose five French Caribbean books available in English"
                - "Note the translator of each edition"
                - "Read Masters of the Dew by Jacques Roumain"
                - "Add each finished book to the reading map"
            - name: Spanish-speaking Caribbean reading list
              description: |-
                ## Purpose
                Cuba, the Dominican Republic and Puerto Rico share the region's history of plantation, migration and island life, and their writers are often better known in the US than in the English-speaking islands next door. Alejo Carpentier's The Kingdom of This World, Julia Alvarez's In the Time of the Butterflies and Junot Díaz's The Brief Wondrous Life of Oscar Wao draw lines between Havana, Santo Domingo, New Jersey and the rest of the region.

                ## Milestones
                1. A list of six Cuban, Dominican and Puerto Rican books.
                2. Three of them read.
                3. One link to an English-speaking Caribbean book noted for each.
                4. The Spanish Caribbean rows of the reading map filled in.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three books from the Spanish-speaking Caribbean read, with links to English-speaking Caribbean books noted in the notebook."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Borrow The Kingdom of This World by Alejo Carpentier"
                - "Add five more Cuban, Dominican or Puerto Rican books to the queue"
                - "Note one link to an English-speaking Caribbean book for each"
                - "Mark the Spanish Caribbean rows on your reading map"
            - name: Dutch Caribbean and Surinamese writing
              description: |-
                ## Purpose
                Suriname, Aruba, Curaçao and Bonaire have literatures in Dutch, Sranan Tongo and Papiamentu, and only part of them has been translated into English. Finding what is available, such as Cynthia McLeod's The Cost of Sugar or Frank Martinus Arion's Double Play, fills one of the biggest gaps on most readers' maps.

                ## Milestones
                1. A list of Surinamese and Dutch Caribbean titles available in English.
                2. At least two of them read.
                3. A short list of untranslated writers to watch for.
                4. One purchase request made to the library for a title it lacks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two Dutch Caribbean or Surinamese books read, with a list of untranslated writers to watch for."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search your library catalogue for Surinamese and Curaçaoan writers"
                - "Read The Cost of Sugar by Cynthia McLeod"
                - "List writers not yet in English to watch for translations"
                - "Ask your library to buy one translated title it lacks"
            - name: Indo-Caribbean writing and indentureship stories
              description: |-
                ## Purpose
                Between 1838 and 1917 indentured labourers from India were brought to Guyana, Trinidad, Suriname, Jamaica and other colonies, and their descendants have written some of the region's finest books. A route from Naipaul's A House for Mr Biswas through Ramabai Espinet's The Swinging Bridge to Ingrid Persaud's Love After Love, with Gaiutra Bahadur's history Coolie Woman alongside, traces that long story.

                ## Milestones
                1. Four Indo-Caribbean books chosen from at least two countries.
                2. All four read with a notebook page each.
                3. Notes on how each book remembers the crossing and the plantation years.
                4. One conversation with an older relative or friend about the books.

                ## Notes
                Coolie appears in some titles as a historical term. Many people find it offensive in conversation, so take care how you use it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four Indo-Caribbean books read across at least two countries, with notes on how each treats indenture and what followed it."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Choose four Indo-Caribbean books from at least two countries"
                - "Read A House for Mr Biswas by V.S. Naipaul"
                - "Note how each book remembers the crossing from India"
                - "Ask an older relative or friend which of these books they know"
            - name: Guyana and Belize mainland Caribbean writing
              description: |-
                ## Purpose
                Guyana and Belize sit on the mainland, with rainforest, savannah and great rivers that island writing rarely touches, and their writers bring that landscape into Caribbean literature. Wilson Harris's Palace of the Peacock, Edgar Mittelholzer's Corentyne Thunder, Grace Nichols's poetry and Zee Edgell's novels of Belize make a short route through that other Caribbean.

                ## Milestones
                1. Four mainland titles chosen, with at least one from Belize.
                2. Three of them read.
                3. Notes on how landscape and distance shape each book.
                4. The reading map rows for Guyana and Belize updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three books by Guyanese or Belizean writers read, with the reading map updated for both countries."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find one novel by Zee Edgell at the library or second hand"
                - "Read the opening chapter of Palace of the Peacock twice"
                - "Add three Guyanese or Belizean writers to the queue"
                - "Update the map rows for Guyana and Belize"
            - name: Choosing between translations of one book
              description: |-
                ## Purpose
                When a Caribbean book was written in French, Spanish or Dutch, the translator decides how creole speech sounds in English, and two translations can read like different books. Comparing the opening pages of two editions before buying, for a book such as Césaire's Notebook which exists in several English versions, means you read the voice you will enjoy most.

                ## Milestones
                1. One translated book with at least two English versions chosen.
                2. The first two pages of each version read side by side.
                3. Notes on how each translator handles creole speech and place names.
                4. An edition chosen, with one line on why.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two translations of the same book compared on their opening pages, with the chosen edition and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one translated book with at least two English versions"
                - "Read the first two pages of each translation side by side"
                - "Note how each translator handles creole speech"
                - "Choose an edition and write one line on why"
            - name: Balance audit of your Caribbean reading
              description: |-
                ## Purpose
                Left alone, most Caribbean reading lists fill with the same few famous men from the largest islands. Counting your last twenty books by writer, country, decade and form, then adding writers such as Jamaica Kincaid of Antigua, Merle Collins of Grenada, Caryl Phillips of St Kitts or Tiphanie Yanique of the Virgin Islands where the gaps show, broadens the list deliberately.

                ## Milestones
                1. The last twenty Caribbean books you read listed.
                2. Counts by writer's gender, country, decade and form.
                3. The three biggest gaps named.
                4. Five gap-filling titles added to the top of the queue.

                ## Notes
                Check every suggested writer and title yourself before adding it; lists drafted by anyone, the agent included, can contain books that do not exist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your last twenty books counted by writer, country, decade and form, with five titles added to fill the three largest gaps."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the last twenty Caribbean books you read"
                - "Count them by writer, country, decade and form"
                - "Ask the agent to suggest writers from the countries missing from your list"
                - "Add five gap-filling titles to the top of the queue"
            - name: Short story route out of a reading slump
              description: |-
                ## Purpose
                After a heavy novel or a busy season, a long book can feel impossible and weeks pass without reading. Short story collections such as Olive Senior's Summer Lightning, Sam Selvon's Ways of Sunlight and Edwidge Danticat's Krik? Krak! offer a whole story in twenty minutes and are often the quickest way back to regular reading.

                ## Milestones
                1. One Caribbean short story collection kept within reach.
                2. One story read per sitting, with no pressure to finish the book.
                3. Two collections finished.
                4. The monthly book pick resumed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two short story collections finished during a slump, followed by a return to the monthly book pick."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Keep one Caribbean short story collection by the bed"
                - "Read one story a sitting without aiming to finish the book"
                - "Note the story you liked best in each collection"
                - "Go back to the monthly book pick once two collections are done"
            - name: Nonfiction to read beside the novels
              description: |-
                ## Purpose
                Many Caribbean novels assume you know the history behind them: plantation slavery, emancipation, indenture, the labour unrest of the 1930s, independence. Pairing a novel with a history or memoir, such as C.L.R. James's The Black Jacobins with a Haitian novel or Jamaica Kincaid's A Small Place with Annie John, fills in what the fiction leaves unsaid.

                ## Milestones
                1. Three novel and nonfiction pairings chosen.
                2. At least one pair read within a month of each other.
                3. Three things the history changed in your reading noted.
                4. The pairings shared with your book club or reading buddy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three novel and nonfiction pairings chosen and at least one pair read, with a note of what the history added."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a novel you have read whose history you want to know better"
                - "Find a history or memoir that covers the same time and place"
                - "Read the nonfiction book within a month of the novel"
                - "Write down three things the history changed in your reading"
            - name: Bocas Lit Fest trip to Port of Spain
              description: |-
                ## Purpose
                The Bocas Lit Fest in Port of Spain is the region's biggest literary festival, with readings, panels, launches and prize announcements over several days, and many readers time a visit home around it. Planning flights, a place to stay and your sessions early means you see the writers you came for rather than finding them on the last afternoon.

                ## Milestones
                1. This year's festival dates confirmed on the official website.
                2. A trip budget with flights and accommodation booked.
                3. At least five sessions chosen, with two marked as unmissable.
                4. Two books by featured authors read before travelling.
                5. Notes and any signed books recorded after the festival.

                ## Notes
                Start from the **Trip** template. Dates are announced each year, so confirm them on the festival website before booking anything.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Flights and accommodation booked for the confirmed festival dates, with at least five sessions chosen and two featured authors read beforehand."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check the festival website for this year's dates and programme release"
                - "Set up a trip plan from the trip template"
                - "Book flights and somewhere to stay once dates are confirmed"
                - "Read two books by featured authors before you travel"
            - name: Calabash festival weekend in Treasure Beach
              description: |-
                ## Purpose
                Calabash, held by the sea at Treasure Beach on Jamaica's south coast, mixes readings by Caribbean and international writers with music in a famously relaxed setting. Checking whether it runs this year, how to reach St Elizabeth from your arrival airport, and where to stay in a small community that fills fast turns a someday idea into a booked weekend.

                ## Milestones
                1. Whether and when the festival runs this year confirmed.
                2. Road transport from the airport planned.
                3. Accommodation booked in or near Treasure Beach.
                4. A list of the writers you plan to hear, with one book by each read.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Festival dates confirmed, transport and accommodation booked, and one book read by each writer you most want to hear."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check the Calabash website for whether and when the festival runs this year"
                - "Work out the road route from your arrival airport to Treasure Beach"
                - "Book a room early in Treasure Beach or a nearby town"
                - "Read one book by each writer you most want to hear"
            - name: Author readings and launches in your city
              description: |-
                ## Purpose
                Writers from the region tour London, New York, Toronto, Miami and Birmingham more often than most readers realise, through bookshops, libraries, universities and diaspora festivals. A quarterly check of event listings, and going to one reading a season, puts faces to names and often brings a signed copy and a conversation.

                ## Milestones
                1. Event emails from two bookshops and the library set up.
                2. A university Caribbean studies centre or diaspora festival followed for events.
                3. One reading or launch attended, with a question prepared.
                4. Each event noted in the reading notebook.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least three readings or launches by Caribbean writers attended in a year, each noted in the reading notebook."
                cadence: rolling
              tasks:
                - "Sign up for event emails from two bookshops and your library"
                - "Follow the events page of a university Caribbean studies centre near you"
                - "Prepare one question for the author before each event"
                - "Check listings for Caribbean author events in your city @recurring(quarterly)"
            - name: Hosting a Caribbean poetry evening
              description: |-
                ## Purpose
                An evening where friends and family each read a Caribbean poem aloud, with food and a little music, introduces poetry to people who would never open an anthology. Two hours with eight to fifteen guests, each bringing one poem or choosing from a printed selection, is enough to make it memorable.

                ## Milestones
                1. A date and a room booked or a home space cleared.
                2. Guests invited and asked to bring one poem.
                3. A printed selection of twenty poems ready for guests without their own.
                4. The evening held, with the poems and readers listed afterwards.

                ## Notes
                Ask an elder to read Louise Bennett or a poem they learned at school; it often becomes the moment people remember.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A poetry evening held with at least eight guests and ten Caribbean poems read aloud, with the poems listed afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a date and a room big enough for twelve people"
                - "Print a selection of twenty Caribbean poems for guests without their own"
                - "Invite guests and ask each to bring one poem"
                - "Write down which poems were read and by whom"
            - name: Literary visit on your next trip home
              description: |-
                ## Purpose
                Home looks different once you have read its writers: the Port of Spain of Miguel Street, the Barbados village of In the Castle of My Skin, the St Lucia coast of Omeros. Planning one literary stop on your next visit, such as a writer's old school, a national library collection or a place from a novel, gives the trip a thread and often starts conversations with relatives who remember.

                ## Milestones
                1. One place chosen that links to a book you have read.
                2. Opening times or access checked before travelling.
                3. The relevant chapter or poem reread the night before.
                4. A photograph and short note added to the reading notebook.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One literary place visited on a trip home, with a photograph and note added to the reading notebook."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one place connected to a book you have read from home"
                - "Check opening times or access before you travel"
                - "Reread the relevant chapter or poem the night before"
                - "Add a photograph and a short note to your reading notebook"
            - name: Caribbean picture books and folk tales for young children
              description: |-
                ## Purpose
                Children growing up abroad rarely see a Caribbean child, a mango tree or a market in the books at school. A small shelf of picture books by Caribbean authors and illustrators, Anansi stories and the children's poems of John Agard and Grace Nichols, read from at bedtime, gives them books that look like their family.

                ## Milestones
                1. Ten picture books and folk tale collections on a dedicated shelf.
                2. At least one Anansi collection for reading aloud.
                3. A grandparent or other relative reading or telling a story on a call.
                4. The children's three favourites noted, for buying as gifts later.

                ## Notes
                Anansi is the clever spider of West African and Caribbean folk tales. Ask relatives how the stories were told to them; their versions are often better than the printed ones.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shelf of at least ten Caribbean picture books and folk tales, read from at least weekly for three months."
                cadence: rolling
              tasks:
                - "Ask your children's librarian for Caribbean picture books"
                - "Find a collection of Anansi stories to read aloud"
                - "Ask a grandparent to read or tell one story on a video call"
                - "Read a Caribbean story at bedtime @recurring(weekly:fri)"
            - name: Caribbean books for a teenage reader
              description: |-
                ## Purpose
                Teenagers often drift from reading just as Caribbean coming-of-age novels become right for them: Jamaica Kincaid's Annie John, Zee Edgell's Beka Lamb and Edwidge Danticat's Behind the Mountains all follow young people working out who they are. Offering a few of these without turning them into homework, and reading one at the same time, gives a teenager stories close to their own questions.

                ## Milestones
                1. The teenager's current reading tastes asked about, not assumed.
                2. Three Caribbean coming-of-age books offered for them to choose from.
                3. One book read by both of you at the same time.
                4. One relaxed conversation about it held.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least one Caribbean coming-of-age book read by the teenager, with you reading the same book alongside."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the teenager what kinds of stories they enjoy at the moment"
                - "Offer three Caribbean coming-of-age novels and let them choose"
                - "Read the same book alongside them"
                - "Talk about the book over a meal, not as a test"
            - name: Rereading the books from school back home
              description: |-
                ## Purpose
                Many who went to school in the region met Michael Anthony's The Year in San Fernando, Naipaul's Miguel Street, Lamming's In the Castle of My Skin or Merle Hodge's Crick Crack, Monkey as set books, often too young to enjoy them. Rereading them as adults, decades and an ocean away, is a different experience and a good excuse to compare notes with old classmates.

                ## Milestones
                1. The set books you remember listed, with the help of classmates if needed.
                2. Three of them found and reread.
                3. A note on each about what you notice now that you missed then.
                4. One book discussed with an old classmate.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three books from your school years reread, with a note on how each reads differently now and one discussed with an old classmate."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down the set books you remember from school"
                - "Find copies of three of them"
                - "Note after each one what you noticed now that you missed then"
                - "Message an old classmate about one of the books"
            - name: Migration novels for a newcomer abroad
              description: |-
                ## Purpose
                Newly arrived in London, Toronto or New York, many Caribbean people find their own experience already written down: the cold and loneliness of Selvon's Londoners, the clashing hopes of Andrea Levy's Small Island, Paule Marshall's Brooklyn in Brown Girl, Brownstones, David Chariandy's Scarborough in Brother. Reading a few in your first years abroad puts words to what you are living through and shows how others came through it.

                ## Milestones
                1. One Caribbean novel set in your new city found.
                2. Three migration novels read within your first two years abroad.
                3. Scenes that match your own experience marked in the notebook.
                4. One book passed on to another newcomer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three Caribbean migration novels read, including one set in the city where you now live."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find one Caribbean novel set in the city where you now live"
                - "Read Small Island or Brown Girl, Brownstones next"
                - "Mark any scene that matches something you have lived"
                - "Pass one of the books on to another newcomer you know"
            - name: Reading in later life with audiobooks and large print
              description: |-
                ## Purpose
                Failing eyesight, tired evenings or a long hospital stay can end a lifetime of reading unless the format changes. Library large print, audiobooks of Caribbean books read by Caribbean voices and the home delivery service many libraries offer keep an older reader in books, whether that reader is you or a parent.

                ## Milestones
                1. The reader's preference for large print, audio or both agreed with them.
                2. The library audiobook app installed and working on their device.
                3. The library's home delivery service asked about and joined if eligible.
                4. One Caribbean title arriving each month for three months.

                ## Notes
                Set the app up in person if you can, and write the login steps on a card kept by the device.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An older reader set up with large print or audiobooks and receiving at least one Caribbean title a month for three months."
                cadence: rolling
              tasks:
                - "Ask the reader whether large print, audiobooks or both would suit them"
                - "Set up the library audiobook app on their phone or tablet"
                - "Ask the library about its home delivery service"
                - "Order next month's large print or audio title @recurring(monthly:12)"
            - name: Following new Caribbean poets and prizewinners
              description: |-
                ## Purpose
                A new generation of Caribbean poets is winning major prizes, among them Kei Miller, Ishion Hutchinson, Roger Robinson, Safiya Sinclair, Jason Allen-Paisant and Vladimir Lucien. Reading a recent collection from four of them in a year keeps your sense of Caribbean poetry current rather than fixed in the 1970s.

                ## Milestones
                1. A list of eight poets who have published in the last ten years.
                2. Four recent collections read.
                3. One recorded or live reading by a listed poet watched.
                4. Notes on what the new poetry does that older poetry did not.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four recent collections by living Caribbean poets read within twelve months, with notes on each."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List eight Caribbean poets who have published in the last ten years"
                - "Borrow one collection by Kei Miller or Ishion Hutchinson"
                - "Watch a recorded reading by one of the poets"
                - "Note what each collection does that older poetry did not"
            - name: Caribbean speculative fiction and fantasy
              description: |-
                ## Purpose
                Folklore figures such as the soucouyant, an old woman who sheds her skin at night and flies as a ball of fire, feed a strong vein of Caribbean speculative fiction: Nalo Hopkinson's Brown Girl in the Ring, Karen Lord's Redemption in Indigo, Monique Roffey's The Mermaid of Black Conch and Marlon James's Black Leopard, Red Wolf. Reading these widens what Caribbean literature means and is often the way in for readers who prefer genre fiction.

                ## Milestones
                1. Three Caribbean speculative novels chosen.
                2. All three read.
                3. The folklore each one draws on looked up and noted.
                4. One title recommended to a friend who reads fantasy.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three Caribbean speculative novels read, with the folklore each one draws on noted."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Borrow Brown Girl in the Ring by Nalo Hopkinson"
                - "Look up the folklore figures that appear in each book"
                - "Recommend one title to a friend who reads fantasy"
                - "Add the Caribbean speculative writers you find to the queue"
            - name: Caribbean literary criticism and theory
              description: |-
                ## Purpose
                Behind the novels and poems sits a body of thinking about them: Kenneth Ramchand's The West Indian Novel and Its Background, Lamming's The Pleasures of Exile, Brathwaite on nation language, Glissant's Poetics of Relation and Sylvia Wynter's essays. Reading two or three of these gives an experienced reader the vocabulary to say why a book matters, not only whether they liked it.

                ## Milestones
                1. Two works of criticism chosen as a starting pair.
                2. Both read with notes.
                3. A one-page summary of each main argument.
                4. One idea from each applied to a novel you know well.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two works of Caribbean criticism read and summarised, with one idea from each applied to a novel you know well."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Choose two works of Caribbean criticism to start with"
                - "Read The Pleasures of Exile by George Lamming"
                - "Write a one-page summary of each book's main argument"
                - "Apply one idea from each to a novel you know well"
            - name: Writing reviews of Caribbean books
              description: |-
                ## Purpose
                Small presses and debut Caribbean writers depend on readers' reviews to be noticed at all. Writing a short, honest review of each Caribbean book you finish, on a reading site, a blog or a bookshop page, helps those books find readers and sharpens your own thinking about them.

                ## Milestones
                1. A place to publish reviews chosen.
                2. A three-paragraph review format settled.
                3. Three reviews published.
                4. A review published in each of six consecutive months.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One review of a Caribbean book published each month for six months on a public reading site or blog."
                cadence: rolling
              tasks:
                - "Choose a reading site, blog or bookshop page to post reviews on"
                - "Draft a three-paragraph review format covering story, strengths and who it suits"
                - "Ask the agent to tighten your first review without changing your opinion"
                - "Publish one review of a Caribbean book you finished @recurring(monthly:25)"
            - name: Cataloguing a personal Caribbean library
              description: |-
                ## Purpose
                Over the years a Caribbean shelf grows to hundreds of books, including signed copies from festivals, early editions from the old Caribbean Writers Series and books inherited from parents with names written inside. A catalogue with edition, condition, inscription and provenance protects what matters when books are lent, moved, insured or passed on.

                ## Milestones
                1. A spreadsheet or cataloguing app chosen.
                2. Every book entered with edition, condition and any inscription.
                3. Signed, early and inherited copies photographed and flagged.
                4. A note left with the catalogue on who should have the special copies.

                ## Notes
                Heat and humidity are hard on paper. Keep valued books off outside walls and out of direct sun, and check the shelf after the rainy season if your books live in the region.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every book on the Caribbean shelf catalogued, with signed, early and inherited copies photographed and flagged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a spreadsheet or cataloguing app for the collection"
                - "Enter each book with edition, condition and any inscription"
                - "Photograph signed, early and inherited copies"
                - "Check the shelf for damp, insects and sun damage @recurring(yearly)"
            - name: Leading a library reading group on Caribbean writing
              description: |-
                ## Purpose
                Libraries in diaspora cities and back home often welcome a volunteer to lead a reading group, especially around Black History Month, Caribbean American Heritage Month in the US or an independence anniversary. Leading a public group, with library copies, a season plan and questions that welcome first-time readers, shares what you have learned with people who may never have read a Caribbean book.

                ## Milestones
                1. A librarian's agreement to host the group.
                2. A six-book season chosen from titles the library can supply in sets.
                3. Three open questions written for each book.
                4. Six sessions run, with attendance and feedback noted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A library reading group agreed with a librarian and six monthly sessions run on a published list of Caribbean books."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your library's adult services team whether they want a Caribbean reading group"
                - "Draft a six-book season using titles the library can supply in sets"
                - "Write three open questions for each book that suit first-time readers"
                - "Confirm the room and remind members of the next session @recurring(monthly:5)"
---

# Caribbean Literature Reading

This area is for anyone who wants to read Caribbean literature with intent, whether you grew up with Miguel Street as a set text or first met Andrea Levy's Small Island in a London bookshop. It starts with foundations (a ten-book starter shelf, a reading map of the region, a queue, a library card and the publishers worth knowing), moves through the routines and book clubs that keep you reading, the skills of reading creole, poetry, plays and dub aloud, routes through the French, Spanish, Dutch, Indo-Caribbean and mainland literatures, decisions about translations and balance, festivals such as Bocas and Calabash, plans for children, teenagers, newcomers and older readers, and finally criticism, reviewing, a catalogued library and leading a public reading group.

What repeats is a weekly reading slot, a weekly poem and bedtime story, a monthly book pick, magazine read, buddy-read call, book club and review, a quarterly sweep for new releases and author events, and a yearly prize season and reading review. The Reading queue, Habit tracker, Meeting notes and Trip templates pair with the queue, the weekly reading slot, book club meetings and the Bocas trip. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
