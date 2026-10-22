---
id: relationships.social-life-in-new-city
name: Social Life in a New City
description: "Build a social circle from nothing after a move: a map of local places and listings, weekly outings and a regular group, neighbours and newcomer networks, and reviews that show who your people are becoming."
category: personal
version: 1.0.0
tags: [relationships, social-life-in-new-city, everyone, renter, relocation, newcomer, neighbourhood, community]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - person
    - purchase-decision
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Social Life in a New City
          description: "Building a social circle from scratch after relocating, using meetups, neighbours, colleagues and communities to find your people."
          projects:
            - name: What you want from a social life here
              description: |-
                ## Purpose
                After a move it is easy to say yes to everything for a month, burn out, then retreat to the sofa for the winter. Writing down what you actually want from life in this city, such as two close friends, a weekly sport, people to eat with on Sundays or simply someone to call if you are ill, turns a vague hope into targets you can steer by. Do it in the first fortnight, while the city still feels open.

                ## Milestones
                1. A list of three to five kinds of connection you want, written in plain words.
                2. One sentence on what a good ordinary week here would look like in six months.
                3. The one or two things you miss most from your old social life named.
                4. A first-quarter goal chosen, such as one regular group and three people you would text.

                ## Notes
                Aim for what fits your temperament, not the busiest possible diary. A quieter person with two reliable friends is better settled than someone with forty acquaintances.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written page listing the kinds of connection you want, a picture of a good week in six months and one goal for the first quarter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down three kinds of connection you want in this city"
                - "Describe a good ordinary week here six months from now"
                - "Name the parts of your old social life you miss most"
                - "Choose one goal for the first three months and pin it somewhere visible"
            - name: Walking map of third places near home
              description: |-
                ## Purpose
                Friendships in a new city usually grow from places you can reach on foot without planning: a café with a big table, a pub quiz, a climbing wall, a library with evening events. Walking every street within fifteen minutes of your front door and marking these places gives you a list of low-effort spots to become known in. Renters on short leases benefit most, because the map also shows what the area offers before the next lease decision.

                ## Milestones
                1. Every street within a fifteen-minute walk covered at least once.
                2. A map or list of at least ten third places with what happens there and when.
                3. Three places starred as the most promising for repeat visits.
                4. Opening hours and regular events for those three written down.

                ## Notes
                Look for noticeboards in cafés, laundrettes and libraries while you walk. They often list groups that never appear online.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A saved map or list of at least ten local third places, with three starred and their regular events noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk a fifteen-minute loop from home this weekend with your phone map open"
                - "Pin every café, bar, gym, library or venue that hosts regular events"
                - "Photograph community noticeboards you pass and note anything recurring"
                - "Star the three places you would happily visit every week"
            - name: Weekly social time budget after the move
              description: |-
                ## Purpose
                Moving brings a new job, new commute and a home still half in boxes, so social plans get squeezed into whatever is left. Deciding how many evenings and weekend hours you will genuinely give to meeting people, and protecting them in your calendar, stops the first three months slipping by with nothing booked. Two evenings and one weekend slot a week is a sensible starting point for most people.

                ## Milestones
                1. Your fixed commitments for a typical week written out: work, commute, chores, sleep.
                2. A number of social evenings and weekend hours agreed with yourself.
                3. Those slots blocked as recurring entries in your calendar.
                4. A rule for what happens when a slot has nothing in it, such as a solo outing to a starred place.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least two weekly social slots are blocked in your calendar as recurring entries, with a written fallback plan for empty ones."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your fixed weekly commitments since the move"
                - "Decide how many evenings and weekend hours go to meeting people"
                - "Block those slots in your calendar as recurring events"
                - "Write a fallback plan for any slot that has nothing booked"
            - name: Newcomer listings and event sources shortlist
              description: |-
                ## Purpose
                Every city has a handful of places where events are actually posted, from a local listings newsletter and a meetup app to the council's welcome events and a neighbourhood forum, and dozens of dead pages that waste your evenings. Finding the five sources that are current and suit your interests means the weekly search for something to do takes ten minutes instead of an hour.

                ## Milestones
                1. At least ten possible sources found: apps, newsletters, venue mailing lists, forums, council pages.
                2. Each source checked for events posted in the last fortnight.
                3. A shortlist of five live sources saved in one note with links.
                4. Newsletters subscribed to and the dead sources unfollowed.

                ## Notes
                Search for the city name plus words like newcomers, new in town or expats. Many cities have a long-running newcomers' club that rarely advertises.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A note listing five live event sources for the city, each with a link and the date of its most recent event."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search for newcomer groups and event listings for your city"
                - "Check each source for events posted in the last two weeks"
                - "Save the best five sources with links in one note"
                - "Prune and replace any source that has gone quiet @recurring(quarterly)"
            - name: Introducing yourself to the neighbours
              description: |-
                ## Purpose
                People who know three or four neighbours by name report feeling far more at home, and neighbours are the ones who take in parcels, lend a ladder and notice if something is wrong. Knocking on a few doors in the first month, while being new is a natural excuse, is much easier than starting after a year of nodding on the stairs. Renters in flats can do the same with the people on their landing.

                ## Milestones
                1. The neighbours either side, opposite or on your landing greeted by name.
                2. Their names and one detail about each written down that day.
                3. Your number given to at least one neighbour for emergencies or parcels.
                4. Any building or street message group joined.

                ## Notes
                A short note through the door with your name and flat number works well where knocking feels intrusive. Keep it friendly and brief.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least three neighbours know your name and you know theirs, with names written down and one exchange of phone numbers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Knock on two neighbouring doors at a weekend afternoon and say hello"
                - "Write each neighbour's name and one detail in your phone"
                - "Offer your number for parcels or emergencies to one neighbour"
                - "Ask whether the building or street has a message group"
            - name: Warm introductions from people you already know
              description: |-
                ## Purpose
                Friends, former colleagues and family usually know someone in a city they do not live in, and an introduction from a mutual contact gets a far warmer reply than a cold message. Asking your existing network directly, with the city named and a line about what you are looking for, often produces three or four coffees in the first month.

                ## Milestones
                1. A short message drafted that names the city and what kind of people you would like to meet.
                2. The message sent to at least fifteen people across friends, family and old colleagues.
                3. Every introduction offered followed up within three days.
                4. At least three coffees or calls arranged with people introduced.

                ## Notes
                Make it easy for the introducer: offer a ready-made two-line blurb about you that they can forward.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "An introduction request sent to at least fifteen contacts, with at least three resulting meetings or calls in the diary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a short message asking who people know in the city"
                - "Write a two-line blurb about you that introducers can forward"
                - "Send the message to at least fifteen friends, relatives and old colleagues"
                - "Reply to every introduction within three days and suggest a time"
            - name: Library and community centre programme scan
              description: |-
                ## Purpose
                Public libraries and community centres run free or cheap groups that newcomers rarely hear about: book clubs, conversation cafés, craft circles, walking groups, repair cafés. Their programmes are printed, regular and full of people who live nearby, which makes them one of the best low-cost ways in for someone watching a tight post-move budget.

                ## Milestones
                1. Library membership set up at the nearest branch.
                2. The current programme of the library and one community centre collected.
                3. Two regular sessions chosen to try within the month.
                4. Both sessions attended once and a note made of whether to return.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Library membership active and two library or community centre sessions attended, each with a written return or skip decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Join your nearest library and pick up its events programme"
                - "Find the programme for the closest community centre"
                - "Choose two regular sessions to try this month"
                - "Attend both and note whether each is worth a second visit"
            - name: Late-evening travel and safety plan
              description: |-
                ## Purpose
                Saying yes to evenings in an unfamiliar city is much easier when you already know how you will get home at midnight. Working out the last trains and buses, a trusted taxi option, which streets feel fine after dark and who knows where you are lets you accept invitations on the spot instead of hesitating. It matters most in the first months, before the routes feel familiar.

                ## Milestones
                1. Last departures home from the three areas you are most likely to go out in noted.
                2. A licensed taxi or ride app set up with a payment method.
                3. A habit agreed of sharing your location or plans with one person on nights out.
                4. Your local emergency number and nearest late-opening pharmacy saved in your phone.

                ## Notes
                Meeting people from apps or listings for the first time is safest in busy public places. Tell someone where you are going and when you expect to be home.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved note with last departures from three areas, a working taxi option and a named person you share plans with on nights out."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the last trains or buses home from three likely nightlife areas"
                - "Install and set up one licensed taxi or ride app"
                - "Agree with one person that you will share plans on nights out"
                - "Save the local emergency number and a late-night pharmacy in your phone"
            - name: Loneliness dip plan for the first months
              description: |-
                ## Purpose
                Most people who relocate hit a low point somewhere between month two and month six, when the novelty fades and new acquaintances are not yet friends. Expecting the dip, and writing down in advance what helps you and who you will call, makes it a passing stage rather than proof that the move was a mistake. If the low mood lasts for weeks or affects sleep and work, it is worth talking to your doctor.

                ## Milestones
                1. The likely timing of a dip written down, with the signs you tend to show.
                2. Three things that reliably lift your mood listed, at least one outside the home.
                3. Two people from home named as the ones to call on a bad evening.
                4. A local doctor registered with and a helpline number saved.

                ## Notes
                Feeling lonely after a move is normal and says nothing about whether you are likeable. Keep the plan short enough to read on a bad night.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page plan naming your warning signs, three mood lifts, two people to call and a saved helpline number, with a local doctor registered."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the signs that you are starting to feel isolated"
                - "List three things that reliably lift your mood here"
                - "Tell two friends from home they are your bad-evening call"
                - "Register with a local doctor and save a helpline number"
            - name: One new thing every Saturday
              description: |-
                ## Purpose
                Newcomers who settle fastest tend to share one boring habit: they go somewhere new every week, whether or not they feel like it. A fixed Saturday outing, chosen on Thursday from your shortlist of sources, adds up to more than twenty fresh places and dozens of faces in the first six months.

                ## Milestones
                1. Saturday blocked in your calendar for an outing every week.
                2. A tracker showing each week's outing and whether you spoke to anyone.
                3. Twelve consecutive weeks completed with no more than two skipped.
                4. The two outings worth repeating identified from the tracker.

                ## Notes
                Start from the **Habit tracker** template. Count it as done if you went, even if nobody talked to you.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of the tracker filled in with at least ten Saturday outings logged."
                cadence: rolling
              tasks:
                - "Set up a habit tracker for one new outing a week"
                - "Go to one new place or event and log it in the tracker @recurring(weekly:sat)"
                - "Mark which outings led to a conversation"
                - "Pick the two outings worth repeating after twelve weeks"
            - name: Becoming a regular at one local spot
              description: |-
                ## Purpose
                Being recognised by the barista, the bar staff or the people at the next table is the first sign of belonging, and it comes from repetition, not charm. Going to the same place at the same time each week means the same faces see you, and by the sixth visit a nod becomes a conversation.

                ## Milestones
                1. One place chosen from your walking map with a regular weekly slot.
                2. Six visits made on the same day and time.
                3. Your name known by at least one member of staff or fellow regular.
                4. At least one conversation that went beyond small talk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six visits logged to the same place at the same weekly time, with at least one staff member or regular who knows your name."
                cadence: rolling
              tasks:
                - "Choose one café, bar or venue from your map for a weekly visit"
                - "Visit your chosen spot at the same time each week @recurring(weekly:wed)"
                - "Introduce yourself by name to someone there by the third visit"
                - "Note any regulars you start to recognise"
            - name: New people log with follow-up notes
              description: |-
                ## Purpose
                In the first months you meet more people than you can remember, and promising connections fade because nobody followed up. A simple log with each person's name, where you met, one detail and the next step lets you send the message that turns an acquaintance into a plan, and helps you recall the dog's name next time.

                ## Milestones
                1. A log set up with columns for name, where met, detail, contact and next step.
                2. Everyone met since the move entered, as far as you can recall.
                3. A weekly pass done for six weeks, with each next step either sent or dropped.
                4. At least five people moved from met once to seen twice.

                ## Notes
                Start from the **Person** template for anyone you want to keep in touch with. Keep the log private.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A people log with every new contact since the move and a weekly follow-up pass completed for six weeks running."
                cadence: rolling
              tasks:
                - "Create a people log with name, place met, detail and next step"
                - "Add everyone you have met since the move"
                - "Send the follow-ups due from the past week @recurring(weekly:sun)"
                - "Mark who you have now seen at least twice"
            - name: Monthly new-city social review
              description: |-
                ## Purpose
                Without a look back it is hard to tell whether things are improving, and a quiet fortnight can feel like failure when the month as a whole went well. A twenty-minute review each month of who you saw, which places worked and how you felt shows real progress and tells you what to drop.

                ## Milestones
                1. A short review template with questions on people, places, energy and next month.
                2. The first review completed with names and counts from your log.
                3. One thing to stop and one thing to try chosen each month.
                4. Six months of reviews kept together for comparison.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews completed, each naming people seen, one thing to stop and one thing to try."
                cadence: rolling
              tasks:
                - "Write four review questions on people, places, energy and next month"
                - "Count the people you saw twice or more this month"
                - "Run the twenty-minute monthly review with your log @recurring(monthly:25)"
                - "Choose one thing to stop and one to try next month"
            - name: Yes to invitations for the first six months
              description: |-
                ## Purpose
                Early invitations in a new city are often half-hearted, a colleague's leaving drinks or a neighbour's barbecue, and turning them down signals that you are not looking. A rule of accepting every reasonable invitation for six months, with a short list of exceptions, builds a reputation as someone who turns up, which brings better invitations later.

                ## Milestones
                1. A personal rule written, with clear exceptions such as cost or safety.
                2. Every invitation in a month recorded with your answer.
                3. At least eighty percent of reasonable invitations accepted over three months.
                4. The rule reviewed at six months and loosened or kept.

                ## Notes
                You can leave after an hour. Turning up for part of the evening still counts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An invitation record covering three months that shows at least eighty percent of reasonable invitations accepted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write your yes rule and the exceptions in one sentence each"
                - "Record each invitation and your answer in your notes"
                - "Check your acceptance rate for the month @recurring(monthly:5)"
                - "Decide at six months whether to keep or loosen the rule"
            - name: Committing to one weekly group for eight sessions
              description: |-
                ## Purpose
                One-off events rarely produce friends, because nobody sees you twice. Choosing a single weekly group, such as a running club, choir, five-a-side team, language class or board games night, and committing to eight sessions in a row gives the same people time to get to know you. Most people find the group feels different around the fourth week.

                ## Milestones
                1. One weekly group chosen that meets within thirty minutes of home.
                2. Eight sessions attended with no more than one missed.
                3. The names of at least five members known.
                4. One plan made with a group member outside the session.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight of nine consecutive sessions of one weekly group attended, with at least five members known by name."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one weekly group within thirty minutes of home"
                - "Attend this week's session of your weekly group @recurring(weekly:tue)"
                - "Learn and note the names of five members"
                - "Suggest a coffee or drink to one member after a session"
            - name: Sending the first invitation each month
              description: |-
                ## Purpose
                Newcomers often wait to be invited, while locals with full lives rarely think to ask. Sending one simple invitation a month yourself, a walk, a coffee, a cheap curry, to someone you have met twice moves friendships forward far faster than waiting, and most people are pleased to be asked.

                ## Milestones
                1. A short list of low-cost invitation ideas you are comfortable with.
                2. One invitation sent each month for six months.
                3. At least three of those invitations turned into a meeting.
                4. One person who has since invited you back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly invitations sent in six months, with at least three meetings that happened and one return invitation received."
                cadence: rolling
              tasks:
                - "List five cheap invitation ideas you would enjoy"
                - "Send one invitation to someone you have met twice @recurring(monthly:10)"
                - "Suggest a specific day and time rather than an open offer"
                - "Note who said yes and who invited you back"
            - name: Keeping your home support while you settle
              description: |-
                ## Purpose
                Friends and family from your old life are your safety net while the new one is still thin, but the early months are when those calls quietly stop. Agreeing a light rhythm with two or three people, such as a monthly long call, keeps your support in place without using it to avoid the new city on every free evening.

                ## Milestones
                1. Two or three people from home chosen as your core support.
                2. A rough call rhythm agreed with each of them.
                3. A rule agreed with yourself that home calls do not replace planned outings.
                4. Six months of regular contact kept with each person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A call with each of two or three named people from home held at least monthly for six months."
                cadence: rolling
              tasks:
                - "Choose two or three people from home as your core support"
                - "Agree a rough call rhythm with each of them"
                - "Have a long catch-up call with one of them @recurring(monthly:20)"
                - "Tell them about one new person or place each time"
            - name: Thursday scan of the weekend listings
              description: |-
                ## Purpose
                Good events in a new city often fill up or sell out by Friday, and deciding on Saturday morning usually ends in staying in. A fifteen-minute scan of your five sources every Thursday evening, with one thing booked, means the weekend already has a plan before tiredness sets in.

                ## Milestones
                1. A Thursday reminder set to check your five sources.
                2. One event booked or noted for each weekend.
                3. Eight Thursday scans done in a row.
                4. A note kept of which sources produced the events you enjoyed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Thursday scans done, each ending with one weekend event booked or noted."
                cadence: rolling
              tasks:
                - "Scan your five event sources and book one weekend plan @recurring(weekly:thu)"
                - "Buy tickets early for anything likely to sell out"
                - "Invite one person from your log to join you"
                - "Mark which source each good event came from"
            - name: Local customs and social etiquette primer
              description: |-
                ## Purpose
                Cities differ in how people make plans, whether they invite people home, how punctual they are, who pays for rounds and how direct conversation is. Learning the local norms early, especially after a move to another country or region, prevents misreadings such as taking polite reserve for rejection or a casual 'we should get coffee' for a real plan.

                ## Milestones
                1. Five questions about local social norms written down.
                2. Answers gathered from two long-term residents and one newcomer guide or forum.
                3. A one-page note of the norms that differ most from where you came from.
                4. One habit of your own adjusted in light of the note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of local social norms built from at least two residents' answers, with one of your own habits adjusted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five questions about how people here make and keep plans"
                - "Ask two long-term residents for their honest answers"
                - "Read one newcomer guide or forum thread on local etiquette"
                - "Write a one-page note of the norms that surprised you"
            - name: Local language through conversation exchanges
              description: |-
                ## Purpose
                After a move abroad, the language decides whether you can join anything beyond the international bubble, and classes alone rarely build speaking confidence. A weekly conversation exchange, where you trade half an hour in your language for half an hour in theirs, improves speaking and introduces you to a local who has chosen to spend time with a newcomer.

                ## Milestones
                1. Your current level assessed with a free placement test.
                2. One exchange partner or conversation group found.
                3. Twelve weekly sessions completed.
                4. One ordinary social situation, such as ordering, small talk or a phone call, handled entirely in the local language.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twelve weekly language exchange sessions completed, with a placement test result before and after."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Take a free online placement test in the local language"
                - "Find an exchange partner or conversation café near home"
                - "Hold this week's language exchange session @recurring(weekly:mon)"
                - "Retake the placement test after twelve sessions"
            - name: Your newcomer story in two sentences
              description: |-
                ## Purpose
                You will be asked 'so what brings you here?' hundreds of times, and a flat answer ends the conversation while a good one opens it. Preparing a short, true story of why you moved and what you are looking for, with a hook such as a hobby you want to restart, gives people an easy way to help or invite you.

                ## Milestones
                1. A two-sentence answer to why you moved, written and said aloud.
                2. A follow-up line naming what you are hoping to find here.
                3. Both tested at three events and adjusted.
                4. A version for work settings and one for social settings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two tested versions of your newcomer story, one for work and one for social settings, each with a line on what you are looking for."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write two sentences on why you moved here"
                - "Add one line on what you are hoping to find in the city"
                - "Try the story at your next three events"
                - "Adjust the wording to whatever got the warmest response"
            - name: Local knowledge for conversations with residents
              description: |-
                ## Purpose
                Residents warm to newcomers who are curious about their city: its football team, its food, its old rivalries and what changed in the last decade. Reading one local news source a week and learning a little history gives you questions to ask and stories to share, and shows people you mean to stay.

                ## Milestones
                1. One local newspaper, newsletter or podcast chosen and followed.
                2. Three local talking points noted each month.
                3. One walking tour or local history talk attended.
                4. A resident asked about their favourite local spot and the answer visited.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local news source followed for three months, one walking tour attended and a resident's recommendation visited."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Subscribe to one local newspaper, newsletter or podcast"
                - "Read the local news source and note one talking point @recurring(weekly:sun)"
                - "Book a walking tour or local history talk"
                - "Ask a resident for their favourite spot and go there"
            - name: Turning event acquaintances into a second meeting
              description: |-
                ## Purpose
                Pleasant conversations at events evaporate unless someone suggests a next step before leaving, and newcomers often feel too new to ask. Practising a simple close, such as swapping numbers and naming a specific next event, and then messaging within two days, turns one-off chats into the repeated contact that friendships need.

                ## Milestones
                1. One or two closing lines you are comfortable saying written down.
                2. Numbers or handles swapped with someone at three separate events.
                3. A message sent within two days to every new contact.
                4. Two second meetings that happened as a result.

                ## Notes
                Linking the follow-up to something concrete, such as the same quiz next week, feels far less forward than an open coffee offer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "Contact details swapped at three events and two second meetings held within sixty days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write two closing lines that suggest a specific next meeting"
                - "Swap contact details with one person at your next event"
                - "Message each new contact within two days of meeting"
                - "Record which second meetings happened in your people log"
            - name: Going out alone with confidence
              description: |-
                ## Purpose
                Waiting until you have someone to go with is the trap that keeps newcomers at home, because you need to go out to meet that someone. Building comfort with solo outings, starting with low-pressure ones such as a cinema or a talk and moving to a bar quiz or social dance class, widens what you can say yes to on any given night.

                ## Milestones
                1. A ladder of six solo outings written, from easy to stretching.
                2. The first three rungs done.
                3. One solo outing where you started a conversation yourself.
                4. The top rung completed, such as a social event where everyone is a stranger.

                ## Notes
                Sitting at a bar counter or a shared table invites conversation far more than a corner table.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "All six rungs of a solo outing ladder completed, including at least one conversation you started yourself."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write six solo outings from easy to stretching"
                - "Do the easiest one this week"
                - "Sit at a shared table or counter on your next solo outing"
                - "Complete the hardest rung and note how it went"
            - name: District-by-district weekend exploration
              description: |-
                ## Purpose
                Many newcomers know their own street and their office and nothing in between, which makes it hard to suggest plans or join in when people mention places. Exploring one district a month, its market, park, best café and evening scene, builds a mental map of the city and often reveals where people like you actually spend their time.

                ## Milestones
                1. A list of the city's districts or neighbourhoods drawn up.
                2. Six districts explored, one each month.
                3. A two-line note on each: what it is like and one place worth returning to.
                4. One district identified where you would like to spend more social time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six districts explored over six months, each with a written note and one place worth returning to."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "List the districts of the city you have not yet visited"
                - "Spend half a day exploring one new district @recurring(monthly:12)"
                - "Write two lines on the district and one place to return to"
                - "Pick the district that felt most like your kind of place"
            - name: Choosing an anchor community to invest in
              description: |-
                ## Purpose
                After a few months of sampling, spreading yourself across ten groups leaves you known slightly everywhere and well nowhere. Comparing the three groups you have tried most on how much you like the people, how often they meet and whether they socialise afterwards, then committing to one, is the step that turns acquaintances into friends.

                ## Milestones
                1. The three most promising groups listed from your outing tracker.
                2. Each scored on people, frequency, after-session socialising and cost.
                3. One chosen as your anchor, with the reasons written down.
                4. A role or extra commitment taken on in that group, such as helping set up.

                ## Notes
                The group with the friendliest people beats the one with the most interesting activity. You are choosing a crowd, not a hobby.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three groups and a recorded choice of one anchor community, with one extra commitment taken on in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the three groups you have enjoyed most so far"
                - "Score each on people, frequency, socialising after and cost"
                - "Choose one as your anchor and write down why"
                - "Offer to help with setting up, welcoming or organising in that group"
            - name: Local volunteering role as a way in
              description: |-
                ## Purpose
                Volunteering gives newcomers a reason to be somewhere every week, a shared task that makes conversation easy and contact with residents of all ages who rarely use meetup apps. A regular role at a food bank, park group, library or sports club also makes you useful to the city, which helps it feel like yours.

                ## Milestones
                1. Three local volunteering options found that fit your free time.
                2. One taster shift done at each, or at the two most promising.
                3. A regular role agreed with one organisation.
                4. Three months of regular shifts completed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A regular volunteering role agreed with one local organisation and at least three months of shifts completed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Search a local volunteering directory for roles near you"
                - "Book taster shifts with your two favourite options"
                - "Agree a regular role and schedule with one organisation"
                - "Ask a fellow volunteer to grab a drink after a shift"
            - name: Shared house or solo flat for the next lease
              description: |-
                ## Purpose
                For renters, who you live with shapes your social life more than any app. A house share can give you instant company and a ready-made social circle, while living alone gives you space to host and rest. Weighing the trade-offs honestly before the next lease, including cost, privacy and how lonely the last months felt, means the next move supports the life you want here.

                ## Milestones
                1. Your current living situation rated on company, privacy, cost and hosting space.
                2. Two or three realistic options priced, such as a shared house, a smaller studio or a flat with one friend.
                3. Questions for potential housemates about how social the house is written down.
                4. A decision recorded at least two months before the lease ends.

                ## Notes
                Ask any prospective house share how often housemates eat or go out together. A shared house where everyone shuts their doors gives the costs without the company.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two housing options on company, privacy and cost, with a decision made before the lease notice date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note your lease end date and the notice period"
                - "Rate your current home on company, privacy, cost and hosting space"
                - "Price two or three alternative living options"
                - "Write the questions you would ask potential housemates"
            - name: Finding your cultural, faith or diaspora community
              description: |-
                ## Purpose
                For many people, a community that shares their language, faith or background is the fastest place to feel at home in a new city, with food, festivals and people who understand what you left behind. Finding one or two such communities gives you familiarity alongside the effort of meeting locals, and often practical help with the city itself.

                ## Milestones
                1. Communities connected to your background, faith or language found in the city.
                2. One gathering, service, festival or social night attended.
                3. One person from that community you can ask for practical local advice.
                4. A decision on how regularly you want to be involved.

                ## Notes
                Some people want close ties and some want an occasional taste of home. Both are fine; decide what suits you rather than what anyone expects.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one gathering of a cultural, faith or diaspora community attended, with a decision recorded on how often to take part."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for groups linked to your background, faith or language in the city"
                - "Attend one gathering, service or festival"
                - "Ask one member for advice on settling into the city"
                - "Decide how regularly you want to take part"
            - name: Joining a social sports league or team
              description: |-
                ## Purpose
                Recreational leagues for netball, five-a-side, softball, volleyball or quiz teams are built to mix strangers, often place solo players on a team and usually head to a pub or café afterwards. Signing up for a season gives you ten or more fixed evenings with the same people and a shared reason to talk.

                ## Milestones
                1. Two or three social leagues found that accept individual players.
                2. Fees, level and match nights compared.
                3. Registration done for one season.
                4. The season completed and a decision made on the next one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Registered for one full season of a social league as an individual player, with a decision on the next season recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find social leagues that accept individual players"
                - "Compare fees, level and match nights for the best two"
                - "Register for the next season of your chosen league"
                - "Stay for the after-match drink at least half the time"
            - name: Co-working, studio or club membership decision
              description: |-
                ## Purpose
                A paid membership, whether a co-working desk, a climbing gym, a pottery studio or a members' club, can give a newcomer a daily or weekly community, but fees add up fast after the costs of a move. Comparing a few options on cost, how social the members are and whether there are member events stops you paying for somewhere you only use alone.

                ## Milestones
                1. Three membership options shortlisted with monthly costs.
                2. A trial day or visit done at each, timed to coincide with a member event if possible.
                3. Each scored on cost, community and convenience.
                4. A decision recorded, with a review date three months after joining.

                ## Notes
                Start from the **Purchase decision** template. Ask current members how often they actually see each other outside the space.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three memberships, a decision recorded and a three-month review date set."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist three memberships with their monthly costs"
                - "Book a trial visit at each on a member event day"
                - "Score each option on cost, community and convenience"
                - "Record the decision and a date to review it"
            - name: Weekends in the city or weekends back home
              description: |-
                ## Purpose
                Going back to your old city or family most weekends feels comforting, but it removes the Saturday nights and Sunday lunches where new friendships form. Counting how many weekends you actually spend away and agreeing a limit, such as one in four, gives the new city a fair chance without cutting you off from home.

                ## Milestones
                1. The last eight weekends counted: in the city or away.
                2. A target ratio agreed, such as three weekends in four spent here.
                3. Trips home planned in advance so they do not swallow spontaneous plans.
                4. The ratio checked again after three months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written weekend ratio target, with trips home for the next three months planned in advance and the ratio checked at three months."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many of the last eight weekends you spent in the city"
                - "Agree a ratio of weekends in the city to weekends away"
                - "Put the next three months of trips home in the calendar"
                - "Recount the ratio after three months"
            - name: Housewarming for neighbours and new acquaintances
              description: |-
                ## Purpose
                A housewarming is one of the few occasions where inviting people you barely know feels completely normal, and it is best held in the first three months. Mixing neighbours, colleagues and people from your groups in one room lets them meet each other and puts you at the centre of a small new network.

                ## Milestones
                1. A date chosen and a simple format decided, such as drinks and snacks for three hours.
                2. Invitations sent to neighbours, colleagues and group members.
                3. Food, drink and enough seating or standing space arranged.
                4. The party held and thank-you messages sent the next day.

                ## Notes
                Renters should check the tenancy for any limits on gatherings and warn the neighbours they did not invite. Better still, invite them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A housewarming held within the first three months, with neighbours and people from at least two other settings invited."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a date and a simple drop-in format for the housewarming"
                - "Invite neighbours, colleagues and people from your groups"
                - "Arrange food, drink and extra cups and chairs"
                - "Send a thank-you message to everyone who came"
            - name: First festive season in the new city
              description: |-
                ## Purpose
                The first big holiday season after a move can be the loneliest point of the year if everyone you know leaves town and you have no plans. Deciding early whether you will travel home, host an orphans' gathering for others who are staying or join a community event avoids waking up on the day with nothing arranged.

                ## Milestones
                1. A decision made by early autumn: travel home, stay and host, or stay and join something.
                2. Travel booked or a gathering organised accordingly.
                3. At least one plan in the city for the days around the holiday.
                4. A note made afterwards of what to repeat next year.

                ## Notes
                Other newcomers and international residents are often in the same position. A shared meal for people staying in town is easy to organise and much appreciated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A plan for the festive season decided by early autumn, with travel booked or a gathering arranged and a note written afterwards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide whether you will travel home or stay for the holidays"
                - "Ask other newcomers who else is staying in town"
                - "Book travel or set a date for a gathering"
                - "Start planning the festive season by early autumn @recurring(yearly)"
            - name: Celebrating your birthday in the new city
              description: |-
                ## Purpose
                A birthday in a city where you know a handful of people can feel exposing, and many newcomers skip it. Organising something small and easy to say yes to, such as a picnic, a pub table or a group activity, gives acquaintances a reason to show up and often marks the point where they start treating you as a friend.

                ## Milestones
                1. A low-pressure format chosen that does not depend on a big turnout.
                2. Invitations sent three weeks ahead to everyone you would like to see.
                3. The celebration held, however many came.
                4. Thank-you messages sent and the guest list kept for next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday gathering held in the city with invitations sent three weeks ahead and the guest list saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a birthday format that works for five or fifteen people"
                - "Send invitations three weeks before the date"
                - "Book a table or space if needed"
                - "Plan your birthday gathering a month ahead @recurring(yearly)"
            - name: Six-month settling-in review
              description: |-
                ## Purpose
                Six months is long enough to see patterns and early enough to change course before habits set. Comparing where you are with the goals you wrote in your first fortnight, using your people log and monthly reviews, shows what has worked, who matters most so far and what to change for the second half of the year.

                ## Milestones
                1. Your first-fortnight goals and the six monthly reviews gathered together.
                2. A count of people you now see regularly and people you could call in a crisis.
                3. Three things that worked and two that did not named.
                4. Goals for months seven to twelve written down.
              priority: high
              deadlineOffsetDays: 183
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written six-month review with counts of regular contacts, what worked and what did not, and goals for months seven to twelve."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your first goals, people log and monthly reviews"
                - "Count the people you see regularly and could call in a crisis"
                - "Ask the agent to summarise patterns across your monthly reviews"
                - "Write your goals for the next six months"
            - name: First anniversary of the move
              description: |-
                ## Purpose
                Marking a year in the city turns a long, uneven stretch into an achievement, and gives you a natural reason to gather the people who made it bearable. A small celebration with new friends, plus a private look back at how far things have come since the first lonely weeks, helps you see the city as home rather than a posting.

                ## Milestones
                1. A note written comparing your social life now with the first month.
                2. A small gathering or meal held with people you met this year.
                3. One thank-you said to someone who made a difference.
                4. Goals for year two written down.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A gathering held around the move anniversary and a written look back with goals for the second year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a page comparing your social life now with your first month"
                - "Invite people you met this year to a meal or drink"
                - "Thank one person who made the first year easier"
                - "Mark the anniversary of your move each year @recurring(yearly)"
            - name: Hosting visiting friends and mixing your two worlds
              description: |-
                ## Purpose
                When friends or family from home come to stay, it is tempting to spend the whole visit as a tourist, but introducing them to your new people helps both sides understand your life here. Planning a visit that includes one evening with new friends also gives those friends a glimpse of who you were before the move.

                ## Milestones
                1. Dates agreed with the visitor and sleeping arrangements sorted.
                2. An itinerary drafted with your favourite local places.
                3. One evening planned that mixes visitors with new friends.
                4. Feedback from the visitor on how your new life seemed to them.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hosted visit completed that included at least one evening shared between your visitor and new local friends."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree dates and sleeping arrangements with your visitor"
                - "List your five favourite local places to show them"
                - "Invite two new friends to join one evening of the visit"
                - "Ask your visitor what they noticed about your new life"
            - name: Moving for a partner's job or study
              description: |-
                ## Purpose
                The partner who follows often arrives with no office, no course and no built-in contacts, while the other is busy with a new role. Without a plan, one partner's social life becomes the couple's, and resentment builds quietly. Setting up independent routes in for the following partner, and agreeing how much of the couple's free time goes to each person's new contacts, keeps the move fair.

                ## Milestones
                1. The following partner's own goals for social life written down separately.
                2. At least two independent routes in chosen, such as a class, job search groups or a partner network.
                3. An agreement on splitting free evenings between joint and individual plans.
                4. A check-in after three months on how each of you is settling.

                ## Notes
                Many large employers and universities run networks for relocating partners. Ask the partner's HR or international office.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The following partner has two independent weekly activities and a three-month check-in on settling has been held."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the following partner's own social goals separately"
                - "Ask the employer or university about relocating partner networks"
                - "Agree how many evenings go to joint and individual plans"
                - "Hold a settling-in check-in after three months"
            - name: Newcomer parent networks through school and nursery
              description: |-
                ## Purpose
                Children open doors to other families, but the school gate can feel closed when everyone else has known each other since nursery. Using the predictable routines of drop-off, class groups, parent associations and weekend activities lets a newcomer parent build a network quickly, which helps children settle too.

                ## Milestones
                1. The class or nursery parent message group joined.
                2. Two parents introduced to at drop-off or pick-up.
                3. One playdate or park meeting arranged with another family.
                4. One school or nursery event volunteered for.

                ## Notes
                Weekend children's activities, such as swimming lessons or football, often lead to friendlier conversations than the rushed school gate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The class message group joined, one family playdate held and one school or nursery event volunteered for within sixty days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the teacher or nursery how to join the class parent group"
                - "Introduce yourself to two parents at drop-off or pick-up"
                - "Suggest a park meeting or playdate with one family"
                - "Volunteer for one school or nursery event"
            - name: Remote worker with no office to meet people
              description: |-
                ## Purpose
                Remote workers who relocate lose the easiest source of new contacts, the office, and can go days without a real conversation. Building in a weekly day in a café or co-working space, a lunchtime class and a local professional meetup gives you the incidental contact that office workers take for granted.

                ## Milestones
                1. One day a week moved out of the home office.
                2. A local professional or industry meetup attended.
                3. A lunchtime or late-afternoon class found to break up the day.
                4. One regular face from your work-day routine known by name.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One work day a week spent outside the home for eight weeks and one local professional meetup attended."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a café or co-working space that welcomes laptop workers"
                - "Work from outside the home for the whole day @recurring(weekly:fri)"
                - "Find and attend one local professional meetup"
                - "Book a lunchtime class to break up a home working day"
            - name: International newcomer network after a move abroad
              description: |-
                ## Purpose
                Arriving in a new country brings paperwork, culture shock and language gaps all at once, and other international residents are often the people who understand that best. A small network of fellow newcomers gives quick friendships and practical tips, as long as it sits alongside efforts to meet locals rather than replacing them.

                ## Milestones
                1. One international newcomers' group or forum for the city joined.
                2. Two of its events attended.
                3. A short list of practical tips gathered on banks, doctors and housing from other newcomers.
                4. A balance agreed between international and local social plans.

                ## Notes
                International groups tend to have high turnover as people move on. Keep investing in local ties too, so your circle does not empty each summer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two international newcomer events attended, a practical tips list saved and a written balance between local and international plans."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Join one international newcomers' group or forum for the city"
                - "Attend two of its events in the next month"
                - "Collect practical tips from other newcomers in one note"
                - "Decide how to balance international and local plans each month"
            - name: Graduate or first job in an unfamiliar city
              description: |-
                ## Purpose
                Starting a first job in a city where university friends did not follow means leaving a ready-made social world for one you must build yourself, often on a starting salary. Using graduate intake groups, alumni networks, young professional societies and cheap shared activities gives a structure that replaces the halls and clubs of student life.

                ## Milestones
                1. Graduate or new starter colleagues contacted for a social meet outside work.
                2. Your university's alumni group for the city found and joined.
                3. One young professional or social society tried.
                4. A low-cost monthly social budget set and kept for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One alumni or young professional group joined, one new starter social organised and a monthly social budget kept for three months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Suggest a social meet to your fellow new starters"
                - "Search for your university's alumni group in the city"
                - "Try one young professional or social society event"
                - "Set a monthly budget for going out that fits a starting salary"
            - name: Relocating later in life or in retirement
              description: |-
                ## Purpose
                Moving in your fifties, sixties or later, perhaps to be near grandchildren or somewhere cheaper, means building a circle when work and school no longer provide one. Daytime groups, from walking clubs and choirs to courses for older learners and volunteering, are often livelier than evenings and full of others who have also moved.

                ## Milestones
                1. Daytime groups and classes within easy reach listed.
                2. Two groups tried in the first two months.
                3. One regular weekly commitment kept that is not tied to family.
                4. A few local people who would notice if you were unwell.

                ## Notes
                If you moved to be near family, protect at least one weekly activity that is yours alone, so your social life does not depend on their schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One weekly daytime group attended for eight weeks and at least two local contacts who check in with you."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List daytime groups and classes near your new home"
                - "Try two of them within the next two months"
                - "Commit to one weekly activity that is yours alone"
                - "Swap numbers with two local people who could check on you"
            - name: Short-term renter or frequent mover
              description: |-
                ## Purpose
                Contract workers, trainees and renters on six or twelve month leases often decide it is not worth making friends somewhere they will soon leave, and end up isolated in every city. Using fast-start tactics, such as drop-in groups, short courses and portable communities like running clubs or language exchanges that exist everywhere, gives a real social life even for a short stay.

                ## Milestones
                1. The length of your stay and a realistic social goal for it written down.
                2. One portable community chosen that exists in most cities.
                3. That community joined in the first two weeks.
                4. Contact kept with at least two people after you leave.

                ## Notes
                Communities that exist in many cities carry over: a running club, a climbing gym chain or a language exchange makes each next move easier.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A portable community joined within two weeks of arrival and contact kept with at least two people after leaving the city."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the length of your stay and one social goal for it"
                - "Choose a community type you could find in any city"
                - "Join that community in your first two weeks"
                - "Swap contact details with two people before you leave"
            - name: Starting your own meetup in the city
              description: |-
                ## Purpose
                If the group you want does not exist, whether a sketching walk, a book club for one genre or a dinner for people from your home region, starting it is often the quickest route to a circle built around your interests. Organisers meet everyone who comes, and a small monthly group with a regular core can run for years with modest effort.

                ## Milestones
                1. A clear group idea, format and meeting place chosen.
                2. The first event listed on two of your event sources.
                3. Three monthly events held.
                4. A regular core of at least four people returning.

                ## Notes
                Fix the time and place, such as the first Wednesday at the same café, so people can come without checking the details each time.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three monthly meetups held with the same time and place and at least four people attending more than once."
                cadence: rolling
              tasks:
                - "Write a one-line description of the group you wish existed"
                - "Choose a fixed monthly time and a free or cheap venue"
                - "Post next month's meetup on two event sources @recurring(monthly:7)"
                - "Thank attendees and remind them of the next date"
            - name: Welcome supper for newer arrivals
              description: |-
                ## Purpose
                Once you have been in the city a year, you know things the newest arrivals desperately want to know, and remembering the first lonely months makes it easy to help. Hosting a simple supper or drinks for a handful of recent newcomers each season repays the kindness you received and keeps your own circle growing.

                ## Milestones
                1. Four to six newer arrivals identified through work, groups or neighbours.
                2. A simple supper or drinks held.
                3. A short list of your best local tips shared with them.
                4. At least two guests introduced to each other who stayed in touch.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A welcome supper held for at least four newer arrivals, with a tips list shared and two guests staying in touch afterwards."
                cadence: cyclic
              tasks:
                - "Ask your groups and colleagues who has recently moved here"
                - "Write your ten best tips for a newcomer in this city"
                - "Invite four to six newer arrivals for supper or drinks @recurring(quarterly)"
                - "Introduce guests who share an interest to each other"
            - name: Neighbourhood role in a residents' group or local project
              description: |-
                ## Purpose
                Residents' associations, community gardens, street parties and tenants' groups bring together people who live within a few streets and plan to stay, the most stable kind of local network. Taking on a small role, such as minute-taker, watering rota or street party organiser, turns you from a newcomer into part of how the neighbourhood runs.

                ## Milestones
                1. The residents' group, tenants' association or community project for your area found.
                2. Two meetings or work days attended.
                3. One small role taken on.
                4. Six months in that role completed.

                ## Notes
                Renters are welcome in most residents' groups and tenants' associations. Ask if you are unsure.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A small role held in a local residents' group or community project for six months."
                cadence: rolling
              tasks:
                - "Find the residents' group or community project for your area"
                - "Attend the next meeting or work day"
                - "Volunteer for one small role"
                - "Attend the monthly neighbourhood meeting or work day @recurring(monthly:22)"
            - name: Introducing your new friends to each other
              description: |-
                ## Purpose
                By the end of a first year, many newcomers have separate small circles that never meet: the running club, the neighbours, the colleagues. Bringing them together around a picnic, a games evening or a group outing strengthens each friendship and creates a wider web that does not depend on you alone.

                ## Milestones
                1. The separate circles in your new life listed.
                2. A mixed event planned that suits people who do not know each other.
                3. The event held with people from at least three circles.
                4. Any new friendships between guests noted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One mixed gathering held with guests from at least three separate circles in your new life."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the separate social circles you have built here"
                - "Choose an activity that gives strangers something to do together"
                - "Invite two or three people from each circle"
                - "Introduce guests by mentioning something they have in common"
            - name: Stay-or-move decision after two years
              description: |-
                ## Purpose
                Around two years in, many people ask whether this city is home or a chapter, and the answer depends heavily on whether the social life has taken root. Weighing friendships, community ties and how you feel on an ordinary Tuesday alongside work and cost gives an honest basis for renewing a lease, buying or planning the next move.

                ## Milestones
                1. The people you would genuinely miss listed.
                2. Your social life scored against the goals from your first fortnight.
                3. Work, cost and family factors written down alongside.
                4. A decision recorded: stay and deepen, stay for a set period, or plan a move.

                ## Notes
                Leaving is not a failure if the city never fitted. Moving with lessons learned about settling makes the next city faster.
              priority: medium
              deadlineOffsetDays: 730
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stay-or-move decision that weighs named friendships and community ties against work, cost and family factors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the people and places you would miss if you left"
                - "Score your social life against the goals from your first fortnight"
                - "Write down work, cost and family factors for staying or going"
                - "Record your decision and the date you will revisit it"
---

# Social Life in a New City

This area is for anyone who has moved to a city where nobody knows their name yet, whether for work, study, a partner or a fresh start, and whether you rent a room or own the flat. It starts with foundations (what you want from a social life here, a map of nearby places, a time and money budget, the listings worth following, neighbours and warm introductions), then the weekly machinery of outings, a regular group and follow-ups, the skills of going alone and learning local customs, decisions about which communities to commit to, the dated moments of a first year, versions for remote workers, parents, students, trailing partners and people moving abroad, and finally the work of becoming a connector who welcomes the next newcomer.

What repeats is a Thursday look at weekend listings, a Saturday outing, a midweek regular slot, a Sunday follow-up pass over new contacts, a monthly invitation you send first, a monthly social review on the 25th and yearly marks for your move anniversary, birthday and the festive season. The Habit tracker, Person and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
