---
id: mental-wellbeing.loneliness-isolation-support
name: Loneliness & Isolation Support
description: "A clear picture of who is in your life, small daily and weekly contact habits, befriending, groups and volunteering, and plans for living alone, moving somewhere new, retiring or losing a partner."
category: personal
version: 1.0.0
tags: [mental-wellbeing, loneliness-isolation-support, everyone, retiree, living-alone, befriending, community, social-connection]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - course
    - purchase-decision
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Loneliness & Isolation Support
          description: "Addressing loneliness with small steps toward contact, community and meaning, for people living alone, new to an area or recently bereaved."
          projects:
            - name: Three-question loneliness baseline score
              description: |-
                ## Purpose
                Loneliness is easy to dismiss on a good day and to overstate on a bad one, so a short validated scale gives you a fixed starting point. The three-item loneliness scale used in many population surveys takes two minutes, and repeating it monthly shows whether the steps in this area are working rather than relying on mood.

                ## Milestones
                1. The three-item loneliness scale found from a reputable research or health source.
                2. Your first score recorded with the date and a line on how the week had been.
                3. The highest-scoring question noted, since it points to what is most missing.
                4. The baseline saved where the monthly review will find it.

                ## Notes
                Start from the **Metrics log** template. A score is a tracking tool, not a diagnosis; if loneliness sits alongside persistent low mood, raise both with your doctor.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline loneliness score is recorded in a log, with the highest-scoring question noted beside it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the three-item loneliness scale from a university or health service source"
                - "Answer the three questions honestly for the past fortnight"
                - "Record the score, date and highest-scoring question in a log"
                - "Save the log somewhere the monthly review will use it"
            - name: Map of who is in your life now
              description: |-
                ## Purpose
                People who feel lonely often underestimate the contacts they have and overlook the ones that have quietly faded. Drawing three circles, close, friendly and familiar faces, with every name you can think of shows where the gaps are: often not a lack of people but an empty inner circle, or a circle nobody has seen in months.

                ## Milestones
                1. Every person you have any contact with written into one of three circles.
                2. Each name marked with roughly when you last spoke properly.
                3. Up to five faded contacts flagged as worth reviving.
                4. The emptiest circle identified as the first one to work on.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-circle map lists every current contact with last-contact dates and five flagged people to revive."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draw three circles for close, friendly and familiar contacts"
                - "Write in every name you can think of, including shopkeepers and neighbours"
                - "Mark beside each name roughly when you last had a real conversation"
                - "Flag up to five faded contacts worth getting back in touch with"
                - "Add new names and move people between circles @recurring(quarterly)"
            - name: One-week contact diary
              description: |-
                ## Purpose
                A week of noting every conversation, how long it lasted and how you felt afterwards turns a vague sense of being alone into evidence. Most people find a pattern quickly: a long silent stretch from Friday night to Monday, or plenty of contact that is all transactional and none that feels like being known.

                ## Milestones
                1. Seven days of conversations logged with who, how long and whether in person or remote.
                2. The longest gap without a real conversation identified.
                3. Contacts split into transactional and personal.
                4. Two times of the week picked as the main targets for change.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A seven-day contact diary is complete, with the longest silent stretch and two target times written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a diary page with columns for who, how long and how it felt"
                - "Log every conversation for seven days, including short ones"
                - "Mark each contact as transactional or personal"
                - "Circle the two times of the week that feel emptiest"
            - name: Naming the kind of connection you are missing
              description: |-
                ## Purpose
                Researchers describe at least three kinds of loneliness: missing one close confidant, missing a circle of friends, and missing a sense of belonging to a group or place. Someone with a loving partner can still lack a wider circle, and a busy social diary can still leave nobody to confide in, so naming yours stops you fixing the wrong thing.

                ## Milestones
                1. The difference between intimate, relational and collective loneliness understood.
                2. Each kind rated for how much it applies to you right now.
                3. One sentence written on what would ease the strongest one.
                4. Two projects in this area chosen to match that sentence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note names your main kind of loneliness and the two projects chosen to address it first."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a short explainer on intimate, relational and collective loneliness"
                - "Rate each kind from one to five for your life right now"
                - "Write one sentence on what would ease the highest-rated kind"
                - "Pick the two projects in this area that match that sentence"
            - name: Talking to your doctor about loneliness
              description: |-
                ## Purpose
                Many health services now treat loneliness as a health issue and can refer people to a social prescribing link worker, community connector or local wellbeing service. A short appointment where you say plainly that you feel isolated can open doors to groups, befriending and practical help that are hard to find alone, and lets your doctor check for anything underneath, such as low mood or hearing loss.

                ## Milestones
                1. An appointment booked with loneliness or isolation given as the reason.
                2. Three points prepared: how long it has lasted, your baseline score and what you have tried.
                3. A referral to a link worker or local service asked for.
                4. The outcome and any contact names written down.

                ## Notes
                People often worry this wastes the doctor's time. It does not; isolation affects sleep, mood and physical health, and doctors are used to hearing about it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "An appointment about loneliness has taken place and the referral or advice given is written down with contact details."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment and say it is about feeling isolated"
                - "Write down how long it has lasted and your baseline score"
                - "Ask whether a social prescribing or community link worker is available"
                - "Record any referral, name and number you are given"
            - name: Phone lines and befriending numbers by the phone
              description: |-
                ## Purpose
                Late evenings, weekends and festive days are when loneliness tends to peak and when friends are least available. Having the numbers for a free friendship line, a listening service and a crisis line written down in advance means a bad night does not have to be spent in silence.

                ## Milestones
                1. A free telephone friendship or befriending line for your age group and country found.
                2. A listening service and your country's crisis number added.
                3. All the numbers on one card by the phone and saved in your mobile.
                4. The friendship line called once on an ordinary day so it feels familiar.

                ## Notes
                If loneliness ever turns into thoughts of not wanting to be alive, call your crisis line or emergency number straight away.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card with at least three working support numbers, including a crisis line, is by the phone and saved in your mobile."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search for a free friendship phone line in your country"
                - "Add a listening service and your country's crisis number"
                - "Write the numbers on a card and save them in your phone"
                - "Call the friendship line once on an ordinary afternoon"
                - "Check every number on the card still connects @recurring(yearly)"
            - name: Daily check-in arrangement for living alone
              description: |-
                ## Purpose
                For anyone living alone, and especially for older people, one quiet fear is falling ill and nobody noticing for days. Agreeing a simple daily signal with a friend, relative or neighbour, a morning text or curtains opened by nine, gives reassurance on both sides and a guaranteed small contact every day.

                ## Milestones
                1. One person agreed as your daily check-in partner, with a back-up named.
                2. The signal, the time and what happens if it is missed all agreed.
                3. A spare key or key safe arrangement settled with someone trusted.
                4. The routine kept for a full month without gaps.

                ## Notes
                If you are older or have a health condition, ask about a personal alarm or telecare service as well as a human check-in.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A daily check-in with a named partner and back-up has run for thirty days, with a written plan for a missed signal."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask one friend, relative or neighbour to be your daily check-in partner"
                - "Agree the signal, the time and what they do if it is missed"
                - "Arrange a spare key with someone you trust"
                - "Send your morning check-in message @recurring(daily)"
            - name: Transport, money and mobility barriers check
              description: |-
                ## Purpose
                Plenty of loneliness is practical: the bus stopped running, the taxi is too expensive, stairs are hard, or the evening class costs more than the pension allows. Listing what actually stops you getting out, and finding the concessionary fares, community transport and free activities that exist locally, often removes more isolation than any amount of willpower.

                ## Milestones
                1. Every practical barrier to going out listed, with the worst three marked.
                2. Concessionary travel, community transport or lift schemes in your area checked.
                3. Free or low-cost activities within reach listed.
                4. One barrier removed, such as a travel pass applied for or a lift arranged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of your top three barriers exists, each with at least one local fix found and one fix already in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everything that practically stops you going out"
                - "Check what concessionary travel or community transport you qualify for"
                - "Ask the library or council for a list of free local activities"
                - "Act on one fix this month, such as applying for a travel pass"
            - name: Hearing and eyesight check before conversations get harder
              description: |-
                ## Purpose
                Untreated hearing loss makes group conversation exhausting, so people quietly stop going, and poor eyesight makes evening travel and recognising faces harder. A hearing test and an eye test are quick, often free for older adults, and fixing either can make every other project in this area easier.

                ## Milestones
                1. A hearing test booked with your doctor, an audiologist or a high street provider.
                2. An eye test done and any new prescription filled.
                3. Any hearing aid offered fitted and worn daily for a month.
                4. Venues with hearing loops noted for future outings.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Hearing and eye tests are done within two months, with any aids or glasses fitted and in daily use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the situations where you struggle to hear or see clearly"
                - "Book a hearing test and an eye test"
                - "Wear any new hearing aid every day for the first month"
                - "Book the next hearing and eye checks @recurring(yearly)"
            - name: Places within twenty minutes of home
              description: |-
                ## Purpose
                Most areas have more going on than newcomers or long-time residents realise: library groups, community centre timetables, faith and cultural centres, sports clubs, repair cafés and walking groups. A single list of what meets where and when, within twenty minutes on foot or by bus, turns 'I should get out more' into a choice between real options.

                ## Milestones
                1. Library, community centre and noticeboard listings collected.
                2. At least fifteen regular activities listed with day, time and cost.
                3. Each one marked as easy, possible or not for you.
                4. Three activities picked to try first.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of at least fifteen local activities with times and costs exists, with three of them picked to try."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Photograph the noticeboards at the library and community centre"
                - "Search your council's community directory for regular groups"
                - "List fifteen activities with day, time and cost"
                - "Mark three to try in the next month"
            - name: Sunday contact plan for the week
              description: |-
                ## Purpose
                Contact that is left to chance tends not to happen, especially once a week fills with chores and tiredness. Ten minutes each Sunday deciding who you will call, message and see, and putting it in the diary, gives every week at least a few fixed points of connection.

                ## Milestones
                1. A Sunday slot set aside for planning the week's contact.
                2. Each week's plan holding at least one call, one message and one face-to-face meeting.
                3. Plans written in the diary rather than kept in your head.
                4. Eight weeks of plans made in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Sunday plans are recorded, each with at least one call, one message and one in-person meeting."
                cadence: rolling
              tasks:
                - "Choose a regular Sunday time for planning the week's contact"
                - "Plan one call, one message and one meeting for the week ahead @recurring(weekly:sun)"
                - "Put each planned contact in the diary with a time"
                - "Note at the end of each week which plans actually happened"
            - name: One real conversation every day
              description: |-
                ## Purpose
                Small exchanges count for more than people think: a few minutes with the person at the bakery counter, a neighbour or a dog walker can lift mood and make bigger contact easier. Aiming for one conversation a day that goes beyond 'thanks' keeps the social muscle in use on days when nothing is planned.

                ## Milestones
                1. A personal definition of a real conversation written down, such as two exchanges beyond pleasantries.
                2. Daily conversations ticked off for four weeks.
                3. At least twenty of twenty-eight days met.
                4. One familiar face from these exchanges known by name.

                ## Notes
                Start from the **Habit tracker** template. On days with no plans, a library, café counter or local shop is the easiest place to find one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-eight days are tracked with a real conversation on at least twenty, and one new name has been learned."
                cadence: rolling
              tasks:
                - "Write down what counts as a real conversation for you"
                - "Have one conversation beyond pleasantries and tick it off @recurring(daily)"
                - "Ask one regular face their name this week"
            - name: A standing weekly fixture in the diary
              description: |-
                ## Purpose
                Friendship grows from repeated, easy time with the same people, which is why a weekly fixture such as a choir, a walking group, a quiz team or a community lunch does more than occasional big outings. Committing to one fixture for twelve weeks, including the weeks you do not feel like going, is the most reliable way to move strangers towards friends.

                ## Milestones
                1. One weekly activity committed to, meeting at the same time and place.
                2. The first three sessions attended.
                3. Attendance kept up for twelve weeks, missing no more than two.
                4. At least two members known well enough to chat with beyond the activity.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of one weekly group are attended with no more than two missed, and two members are known by name."
                cadence: rolling
              tasks:
                - "Decide on one weekly activity to commit to for twelve weeks"
                - "Tell the organiser you are new and plan to keep coming"
                - "Attend your weekly fixture and talk to one person there @recurring(weekly:tue)"
                - "Count your attendance at the end of twelve weeks"
            - name: Keep-in-touch rotation for friends and family
              description: |-
                ## Purpose
                Friendships usually fade through neglect rather than disagreement, and people who live far away drift first. A rotation of fifteen to twenty people, with a few contacted each month by call, message, card or visit, keeps the wider circle alive without anyone needing to be in touch every week.

                ## Milestones
                1. A list of fifteen to twenty people you want to keep in your life.
                2. The list split so four or five people are contacted each month.
                3. Every person contacted at least once in a four-month cycle.
                4. Anyone who replies warmly moved to more frequent contact.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every person on a rotation list of at least fifteen has been contacted within four months."
                cadence: rolling
              tasks:
                - "List fifteen to twenty people you would miss if they drifted away"
                - "Split them into four monthly groups"
                - "Contact this month's group by call, message or card @recurring(monthly:9)"
                - "Move anyone who responds warmly onto your Sunday plan"
            - name: Becoming a regular at one local place
              description: |-
                ## Purpose
                Sociologists call cafés, pubs, libraries and markets 'third places' because they offer company without an invitation. Going to the same place at the same time each week means staff and other regulars start to recognise you, and being recognised is often the first step out of feeling invisible.

                ## Milestones
                1. One welcoming place chosen within easy reach.
                2. A regular weekly time fixed.
                3. Staff or regulars greeting you by face or name.
                4. Ten visits made in the same time slot.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly visits are made to the same place at the same time, with at least one person there greeting you by name."
                cadence: rolling
              tasks:
                - "Pick a café, library or market you could visit weekly"
                - "Choose a day and time in the quieter hours when people chat"
                - "Visit your regular place and speak to someone there @recurring(weekly:wed)"
                - "Note when staff or regulars start recognising you"
            - name: Eating with other people once a week
              description: |-
                ## Purpose
                Eating alone at every meal is one of the clearest markers of isolation, particularly after bereavement or retirement, and shared meals tend to lift both mood and appetite. One meal a week with others, whether a community lunch, a lunch club, a friend's kitchen table or a meal you host, gives the week a warm fixed point.

                ## Milestones
                1. Community lunches, lunch clubs or shared meal schemes nearby found.
                2. One shared meal a week in place for a month.
                3. At least one meal hosted or co-organised by you.
                4. Eight shared meals recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight shared meals with other people are recorded over two months, including one you hosted."
                cadence: rolling
              tasks:
                - "Find a community lunch or lunch club within reach"
                - "Invite one person to share a simple meal"
                - "Arrange this week's shared meal and note who came @recurring(weekly:thu)"
            - name: Plan for long evenings and empty weekends
              description: |-
                ## Purpose
                Diaries from a contact week usually show that loneliness clusters: Sunday afternoons, the hour after work, bank holidays. A ready plan for those stretches, a call booked, an outing, a class or an absorbing project, means the hardest hours are faced with something in hand rather than an empty room.

                ## Milestones
                1. Your two hardest times of the week named from the contact diary.
                2. A menu of at least six things to do in those slots, three of them with other people.
                3. Something planned for each hard slot every Friday.
                4. Six weeks in which the hard slots had a plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks are recorded in which each of your two hardest slots had a planned activity, at least half involving people."
                cadence: rolling
              tasks:
                - "Name the two times of the week that feel loneliest"
                - "Write a menu of six things to do in those times"
                - "Fill next week's hardest slots with a plan @recurring(weekly:fri)"
                - "Book one recurring activity that falls in a hard slot"
            - name: Monthly connection score and review
              description: |-
                ## Purpose
                Changes in loneliness are slow and easy to miss, so a monthly re-score against your baseline, with a glance at the contact plans and the weekly fixture, shows whether things are moving. It also catches the months when a friend moves away or a group folds, before isolation sets back in.

                ## Milestones
                1. The loneliness scale re-scored on the same day each month.
                2. Each month's score logged beside the baseline.
                3. One line noted on what helped and what dropped away.
                4. Six monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scores are recorded against the baseline, each with a line on what helped and what slipped."
                cadence: rolling
              tasks:
                - "Re-score the loneliness scale and log the result @recurring(monthly:24)"
                - "Compare the score with your baseline and last month"
                - "Write one line on what helped and one on what slipped"
            - name: Getting to know five neighbours by name
              description: |-
                ## Purpose
                Neighbours are the people most likely to notice if something is wrong and the easiest to see without planning, yet many people living alone know none of them by name. Learning five names over a few months, through small favours, a card at a holiday or a street event, builds a safety net and a sense of belonging to the place.

                ## Milestones
                1. The neighbours you recognise listed, with names where known.
                2. Five neighbours known by name.
                3. One small favour given or received.
                4. Phone numbers swapped with at least one neighbour for emergencies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five neighbours are known by name and phone numbers have been swapped with at least one of them."
                cadence: rolling
              tasks:
                - "List the neighbours you recognise and any names you know"
                - "Introduce yourself to one neighbour you have never spoken to"
                - "Do one small neighbourly act, such as taking in a parcel @recurring(monthly:14)"
                - "Swap numbers with one neighbour for emergencies"
            - name: How loneliness changes thinking and behaviour
              description: |-
                ## Purpose
                Long loneliness makes the mind more alert to rejection, so neutral faces look cool, a slow reply feels like a snub and staying in starts to feel safer. Knowing this pattern is common and well studied takes some of the shame away and explains why reaching out feels harder the longer you have been alone.

                ## Milestones
                1. A reputable summary of loneliness research read.
                2. The rejection-alert loop explained in your own words.
                3. Two recent moments when the loop affected you noted.
                4. One counter-step chosen for the next time it happens.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explains the loneliness and rejection-alert loop with two examples from your own life."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a reputable summary of research on loneliness and the brain"
                - "Write the rejection-alert loop in three sentences of your own"
                - "Note two recent times a reply or a look felt like rejection"
                - "Choose what you will do differently next time"
            - name: Messages that make the first move easy
              description: |-
                ## Purpose
                Lonely people often wait to be invited while everyone else assumes they are busy, so nothing happens. A handful of ready-written messages, a specific invitation, a 'thought of you' note and a re-opener after a long silence, take the hardest part out of reaching first.

                ## Milestones
                1. Five message openers drafted for different situations.
                2. Each invitation naming a specific day, place and activity.
                3. Ten first-move messages sent over a month.
                4. Replies counted and the drafts adjusted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten first-move messages are sent within a month from prepared drafts, with replies counted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft five short openers for restarting contact"
                - "Rewrite each in your own voice with a specific day and place"
                - "Send two first-move messages this week"
                - "Count the replies after a month and adjust the drafts"
            - name: Turning acquaintances into friends
              description: |-
                ## Purpose
                Studies of friendship suggest it takes dozens of hours together for an acquaintance to become a casual friend and many more for a close one. Picking two people you already like and deliberately moving from activity-only contact to a coffee, then a walk, then something at home, is how most adult friendships actually form.

                ## Milestones
                1. Two acquaintances chosen who you enjoy talking to.
                2. One invitation beyond your usual setting made to each.
                3. A second meeting held with at least one of them.
                4. Contact with one of them happening without you always starting it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Two acquaintances have each been invited to something beyond the usual setting, with a repeat meeting held with at least one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Name two acquaintances you would like to know better"
                - "Invite one of them for a coffee after the usual activity"
                - "Suggest a second, different outing within a month"
                - "Notice whether they begin to suggest meeting too"
            - name: Testing the belief that nobody wants to hear from you
              description: |-
                ## Purpose
                Thoughts such as 'they have their own lives' or 'I would only be a nuisance' feel like facts and stop many calls before they start. Treating the belief as a prediction, writing down what you expect, contacting five people and recording what actually happens, usually shows the belief is far gloomier than reality.

                ## Milestones
                1. The belief written down with how strongly you hold it, out of a hundred.
                2. A prediction made for how five people will respond to contact.
                3. Five contacts made and the actual responses recorded.
                4. The belief re-rated after the results.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five contacts are made with predictions and outcomes written side by side, and the belief is re-rated afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the belief down and rate how true it feels out of a hundred"
                - "Predict how five specific people will respond if you get in touch"
                - "Contact all five within a week and record what happened"
                - "Re-rate the belief and note the difference"
            - name: Video calls and group chats for staying in touch
              description: |-
                ## Purpose
                Grandchildren's photos, family group chats and video calls with friends abroad all run on smartphones and tablets, and not being able to use them can quietly cut people off. Learning to make a video call, join a group chat and share a photo, with help from a library digital session or a patient relative, opens contact that does not depend on travel.

                ## Milestones
                1. A device set up to suit you, with large text if needed.
                2. A video call made and received without help.
                3. Membership of at least one family or friends group chat.
                4. A weekly video call in place with someone who lives far away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can make a video call and post in a group chat unaided, and a weekly video call with a distant contact is in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your library or community centre about free digital skills sessions"
                - "Practise making a video call with a relative who can be patient"
                - "Join a family or friends group chat"
                - "Set up a regular video call with someone who lives far away"
            - name: Enjoying your own company on purpose
              description: |-
                ## Purpose
                Solitude and loneliness are different: one is chosen and restful, the other feels imposed. Planning solo time you look forward to, a museum on your own, a cinema matinee, a walk with a flask, makes time alone less of a threat and makes it easier to go out without waiting for a companion.

                ## Milestones
                1. Five solo outings or home activities you might enjoy listed.
                2. One solo outing taken each month for three months.
                3. Each outing rated for enjoyment afterwards.
                4. A short list of solo activities you would happily repeat.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three monthly solo outings are completed and rated, with at least two you would choose to repeat."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List five things you could enjoy doing on your own"
                - "Take yourself on a planned solo outing @recurring(monthly:20)"
                - "Rate each outing out of ten afterwards"
                - "Keep a short list of the ones worth repeating"
            - name: Asking for help without feeling like a burden
              description: |-
                ## Purpose
                Many isolated people are generous helpers who find it almost impossible to ask for anything back, which keeps relationships one-sided and thin. Practising small, specific requests, a lift, a hand with a form, a second opinion on a purchase, gives others a chance to be useful and tends to deepen the connection.

                ## Milestones
                1. Three small things you could ask for help with listed.
                2. Three different people asked over a month.
                3. How each person responded noted.
                4. One request turned into a regular exchange of favours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three specific requests for help are made to three different people in a month, with their responses recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three small things you would welcome help with"
                - "Ask one person for one specific thing this week"
                - "Note how each person responded"
                - "Offer something back where it feels natural"
            - name: Choosing a group built around a shared activity
              description: |-
                ## Purpose
                Groups organised around doing something together, singing, gardening, walking, making or repairing, are easier to join than purely social ones because the activity carries the conversation. Comparing three options on travel, cost, size and how welcoming they are to newcomers, and trying each once, avoids committing to the first one you find.

                ## Milestones
                1. Three activity groups shortlisted from your local list.
                2. Each tried at least once.
                3. Each scored on travel, cost, size and welcome.
                4. One chosen and the organiser told you will be back.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three activity groups are tried and scored, and one is chosen with a start date recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three activity groups that meet near you"
                - "Contact each organiser to ask how they welcome newcomers"
                - "Attend one session of each"
                - "Score them and choose one to commit to"
            - name: Finding a volunteering role with built-in company
              description: |-
                ## Purpose
                Volunteering gives purpose, a reason to leave the house and ready-made colleagues, and it suits people who find socialising for its own sake awkward. Roles differ hugely in how much contact they offer, so looking for team-based ones such as a charity shop shift, a food bank, a hospital welcome desk or a conservation group matters more than the cause alone.

                ## Milestones
                1. Your available hours, skills and limits written down.
                2. Three team-based roles found through a volunteering centre or listings site.
                3. One taster shift or induction attended.
                4. A regular shift agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A regular team-based volunteering shift is agreed after at least one taster session."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the hours you can give and anything you cannot do"
                - "Search a volunteering centre for team-based roles near you"
                - "Ask about a taster shift for your top choice"
                - "Agree a regular shift once the taster feels right"
            - name: Requesting a befriending service
              description: |-
                ## Purpose
                Befriending charities match isolated people, often older or housebound, with a volunteer who calls or visits every week. For someone with few contacts left it can provide a reliable conversation within weeks, and some services also run telephone groups or outings.

                ## Milestones
                1. Befriending services in your area or by phone identified.
                2. A self-referral, or a referral through your doctor or link worker, made.
                3. A first call or visit from a matched volunteer held.
                4. The arrangement reviewed after six weeks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A befriending referral has been made and a first call or visit from a matched volunteer has taken place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search for telephone and visiting befriending services near you"
                - "Make a self-referral or ask your link worker to refer you"
                - "Write down a few things you would enjoy talking about"
                - "Review after six weeks whether the match is working"
            - name: A weekly class with the same faces
              description: |-
                ## Purpose
                Adult education classes, from languages to pottery to local history, put the same people in a room every week with something to talk about, which is exactly the condition friendships need. Choosing a term-long course rather than a one-off workshop gives the group time to gel.

                ## Milestones
                1. A term-long course chosen that runs at a time you can keep.
                2. Enrolment and any fee or concession sorted.
                3. Every session attended bar one.
                4. A classmate met outside class, or contact details swapped.

                ## Notes
                Start from the **Course** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A term-long course is completed with no more than one missed session and contact made with a classmate outside class."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Browse adult education and community course listings for next term"
                - "Choose a course of at least eight weeks at a time you can keep"
                - "Enrol and check whether concessions apply"
                - "Suggest a coffee with a classmate after the fourth session"
            - name: Reconnecting with three friends you lost touch with
              description: |-
                ## Purpose
                Old friends share history that new ones cannot, and most are pleased to hear from someone they lost touch with, even after years. Tracking down three, sending a warm low-pressure message and suggesting a call is often faster than building new friendships from scratch.

                ## Milestones
                1. Three lost friends chosen.
                2. Current contact details found for each.
                3. A message sent to each without expecting a fast reply.
                4. A call or meeting held with at least one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Messages are sent to three lost friends and a call or meeting is held with at least one within two months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three friends you lost touch with and still miss"
                - "Find current contact details through mutual friends or social media"
                - "Send each a short message with no pressure to reply quickly"
                - "Get back in touch with one more lapsed friend @recurring(quarterly)"
            - name: Deciding whether a pet or a borrowed dog fits your life
              description: |-
                ## Purpose
                A dog brings daily walks and easy conversations with other owners, and a cat brings company at home, but both bring costs, ties and vet bills for many years. Weighing it up properly, and trying lighter options first such as dog borrowing, fostering or volunteering at a shelter, avoids a decision that becomes a burden.

                ## Milestones
                1. Yearly costs, daily time and travel limits of owning a pet worked out.
                2. A lighter option such as dog borrowing or fostering tried for a month.
                3. Housing rules and any health limits checked.
                4. A decision recorded to adopt, keep borrowing or not go ahead.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on pet ownership is made after a month of borrowing, fostering or shelter volunteering."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Work out the yearly cost and daily time a pet would need"
                - "Check your tenancy or building rules on pets"
                - "Sign up for a dog-borrowing scheme or shelter volunteering for a month"
                - "Record your decision and the reasons"
            - name: Housing options with more company built in
              description: |-
                ## Purpose
                For some people, especially older adults rattling around a family home, the setting itself is the problem. Co-housing, homeshare schemes that pair an older householder with a younger lodger, retirement communities and simply moving closer to family all change daily contact, and each deserves a look before a crisis forces the choice.

                ## Milestones
                1. Four housing options listed with costs and trade-offs.
                2. One homeshare, co-housing or retirement scheme visited.
                3. The options discussed with family or a trusted adviser.
                4. A decision recorded to stay, plan a move or revisit in a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four housing options are compared in writing, one is visited, and a decision with a review date is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List four housing options that would bring more daily company"
                - "Find out costs and waiting times for each"
                - "Visit one homeshare, co-housing or retirement scheme"
                - "Talk the options through with family or an adviser"
            - name: Online communities that lead to real meetings
              description: |-
                ## Purpose
                Interest-based online groups, local community forums and meet-up platforms can be a bridge, especially for people with limited mobility or odd working hours, but endless browsing can replace contact rather than lead to it. Choosing one or two communities with a local or video meeting element keeps online time pointed at real people.

                ## Milestones
                1. Two online communities found around an interest you have.
                2. Each checked for friendliness, moderation and real or video meet-ups.
                3. Regular posting or replying in one for a month.
                4. One meet-up or video gathering attended.

                ## Notes
                Meet people from online groups in a public place the first time, and tell someone where you are going.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One online community is chosen and joined, with a meet-up or video gathering attended within two months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for local or interest-based groups that hold meet-ups"
                - "Read a week of posts to judge the tone and moderation"
                - "Reply to or start three conversations in the group"
                - "Attend one meet-up or video gathering"
            - name: A festive season you do not spend alone by default
              description: |-
                ## Purpose
                Christmas, Eid, Diwali, Lunar New Year and other big holidays can feel loneliest of all because everyone else seems busy. Planning six weeks ahead, with community meals, volunteering shifts, open-house invitations or a deliberately enjoyable day alone, means the day happens on your terms.

                ## Milestones
                1. Plans for the main holiday and the days around it made six weeks ahead.
                2. At least one shared meal or gathering booked.
                3. A volunteering shift or community event considered.
                4. A comfortable plan for any time alone written down.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for the festive period exists, with at least one shared gathering booked six weeks ahead."
                cadence: cyclic
              tasks:
                - "Start planning the festive season six weeks ahead @recurring(yearly)"
                - "Find community meals or open-house events on the main day"
                - "Ask about a volunteering shift on the day or the day before"
                - "Plan what you will enjoy during any time alone"
            - name: Planning your own birthday
              description: |-
                ## Purpose
                Birthdays that pass unmarked can sting for weeks afterwards. Taking charge of it yourself, a lunch you organise, a small outing with one or two people or a treat you plan for yourself, removes the waiting and gives friends an easy way to show up.

                ## Milestones
                1. A birthday plan chosen six weeks ahead.
                2. Invitations sent to two or more people.
                3. The day marked with at least one shared moment.
                4. Thanks sent to those who came or got in touch.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A birthday plan with at least two invited people is carried out, and thank-you messages are sent."
                cadence: cyclic
              tasks:
                - "Decide how you would like to mark your birthday this year @recurring(yearly)"
                - "Invite two or more people with a specific date and place"
                - "Book anything that needs booking"
                - "Send a thank-you to everyone who came or called"
            - name: Hosting tea or a simple meal for four
              description: |-
                ## Purpose
                Being the one who invites changes how people see you and how you see yourself, from someone waiting to be included to someone who brings people together. A simple tea or soup lunch for three guests, kept small and easy, is enough to make that shift.

                ## Milestones
                1. A date and a simple menu chosen.
                2. Three people invited, mixing close and newer contacts.
                3. The gathering held.
                4. A follow-up message sent and the next gathering pencilled in.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A small gathering for at least three guests is held within six weeks, with the next one pencilled in."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date and a menu you could make without stress"
                - "Invite three people, including one newer contact"
                - "Host the gathering and keep it to about two hours"
                - "Send a follow-up message and suggest a next time"
            - name: Going to a community event on your own
              description: |-
                ## Purpose
                Walking into a fete, a talk, a festival or a community open day alone is daunting, and many people stay home rather than go without company. Choosing an event with something to do, arriving early when it is quieter and setting a modest goal of one conversation makes it manageable.

                ## Milestones
                1. One event in the next month chosen.
                2. A plan made for arrival time, what to do and when you can leave.
                3. The event attended alone.
                4. At least one conversation had and a note made of what was easier than expected.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A community event is attended alone within a month, with at least one conversation and a short reflection written."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one community event in the next month"
                - "Plan when you will arrive and when you are allowed to leave"
                - "Go alone and start one conversation"
                - "Write down what was easier than you expected"
            - name: A group holiday for people travelling solo
              description: |-
                ## Purpose
                Holidays can underline loneliness when everyone else seems to travel in pairs, yet many operators run group trips designed for solo travellers, with no single supplement and shared meals. A short group break gives company for several days and often leaves you with contacts afterwards.

                ## Milestones
                1. Three solo-friendly group trips compared on cost, pace and group size.
                2. One trip booked within your budget.
                3. The trip taken.
                4. Contact kept with at least one fellow traveller afterwards.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A group trip for solo travellers is taken, with contact kept with at least one fellow traveller afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search for group holidays designed for solo travellers"
                - "Compare three trips on cost, pace and group size"
                - "Book the trip that fits your budget and energy"
                - "Swap contact details with one fellow traveller"
            - name: Living alone for the first time
              description: |-
                ## Purpose
                Living alone after a separation, children leaving home or a partner moving into care brings a silence that can be startling. Setting up routines for the first three months, a reason to leave the house most days, a regular guest and a plan for evenings, helps the home feel like yours rather than empty.

                ## Milestones
                1. A daily reason to go out established for weekdays.
                2. One guest invited home each week or fortnight.
                3. An evening routine that includes some contact by phone or in person.
                4. Three months lived alone with these routines in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three months of living alone are completed with a daily reason to go out and a guest at home at least fortnightly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down what you will do to leave the house each weekday"
                - "Invite one person round in the next fortnight"
                - "Plan an evening routine with a call or message built in"
                - "Look back after three months at what made home feel less empty"
            - name: Building a social life after moving to a new area
              description: |-
                ## Purpose
                Moving to a new town for work, family or a cheaper home cuts every casual tie at once, and it takes most people a year or more to rebuild. The first ninety days are when newcomer energy is highest, so joining things early, saying yes to invitations and telling people you are new pays off most then.

                ## Milestones
                1. Three groups or activities tried in the first month.
                2. One weekly commitment in place by week six.
                3. Ten people known by name by day ninety.
                4. One local friend met outside an organised activity.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Ten local people are known by name and one weekly commitment is in place within ninety days of moving."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Tell neighbours and colleagues that you have just moved here"
                - "Try three local groups in the first month"
                - "Say yes to every reasonable invitation for the first ninety days"
                - "Count the people you know by name at day ninety"
            - name: Social life after losing a partner
              description: |-
                ## Purpose
                After a partner dies, invitations from couple friends often dry up, outings that were always shared feel impossible alone, and the house is quiet in a new way. When the first rawness has eased, usually months rather than weeks, gently rebuilding a social life on your own terms is part of living on, not disloyalty.

                ## Milestones
                1. Couple friendships that have gone quiet listed, with one approached directly.
                2. One activity you used to do together tried again with a friend.
                3. A group or club joined that includes other people living alone.
                4. A regular contact in place for the evenings and weekends that are hardest.

                ## Notes
                This is about company and routine. For support with grief itself, a bereavement service or counsellor is the right place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One lapsed couple friendship is rekindled and one group that includes other people living alone has been joined."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the friends you mostly saw as a couple"
                - "Contact one of them and suggest meeting just the two of you"
                - "Retry one shared activity with a friend for company"
                - "Look for a club for widowed people or people living alone"
            - name: Replacing workplace company after retirement
              description: |-
                ## Purpose
                Work supplies daily conversation, shared jokes and a reason to get dressed, and retirement removes all of it on one day. Planning replacements in the months around retirement, a weekly commitment, regular contact with former colleagues and a role that uses your skills, prevents the slow drift into seeing almost nobody.

                ## Milestones
                1. The social contact your job gave you listed honestly.
                2. Two former colleagues you want to keep seeing contacted.
                3. A weekly commitment in place within three months of finishing work.
                4. A role that uses your skills, paid or voluntary, explored.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Within three months of retiring, a weekly commitment is in place and two former colleagues are seen regularly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the daily contact your job gave you"
                - "Arrange a regular catch-up with two former colleagues"
                - "Book a weekly commitment to start soon after your last day"
                - "Explore one role that uses your work skills"
            - name: Staying connected while caring for someone at home
              description: |-
                ## Purpose
                Carers often lose touch with friends because they cannot leave the person they care for, plan ahead or afford to go out. Arranging regular respite, finding a carers' group and keeping two friendships alive by phone protects the carer's own life and makes the caring more sustainable.

                ## Milestones
                1. A carer's assessment or local carers' service contacted about respite.
                2. A carers' group, in person or online, joined.
                3. Two friends asked for a regular phone call that fits caring hours.
                4. Respite used to see someone at least monthly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Respite cover is used at least monthly to see a friend, and a carers' group has been attended at least twice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your local carers' service about a carer's assessment and respite"
                - "Find a carers' group that meets at a time you can manage"
                - "Ask two friends for a regular call that fits around caring"
                - "Use respite cover to see a friend in person @recurring(monthly:18)"
            - name: Working from home without becoming isolated
              description: |-
                ## Purpose
                Remote and freelance workers can go days speaking only on video calls about work, and the absence of casual chat builds up unnoticed. Building in at least one day a week among other people, at a co-working space, a library desk or a café, plus one social plan after work, keeps working life from shrinking your world.

                ## Milestones
                1. Your in-person contact on working days counted for one week.
                2. One day a week worked among other people.
                3. A weekly non-work chat with a colleague or fellow freelancer scheduled.
                4. One after-work social plan each week for a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month is completed in which every week included a day working among other people and one after-work social plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count how many working days last week had in-person contact"
                - "Find a co-working space, library desk or café to work from"
                - "Spend one working day among other people @recurring(weekly:mon)"
                - "Set up a weekly non-work chat with a colleague or fellow freelancer"
            - name: Bringing company in when you are housebound
              description: |-
                ## Purpose
                Illness, disability or frailty can make leaving the house rare, and isolation then deepens quickly. Turning the home into the meeting place, with visiting befrienders, mobile library or faith visitors, telephone groups and friends invited in, keeps contact going when going out is not possible.

                ## Milestones
                1. Home-visiting services in your area listed, including befriending and mobile library.
                2. A telephone or video group joined that meets weekly.
                3. A regular visitor in place at least once a week.
                4. A monthly note kept of who visited or called.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least one weekly visitor and one weekly telephone or video group are in place, logged for two months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List home-visiting services such as befriending, mobile library and faith visitors"
                - "Join a weekly telephone or video group"
                - "Ask a friend or relative to make a weekly visit"
                - "Note who visited or called this month and fill any gaps @recurring(monthly:28)"
            - name: Keeping an eye on an isolated older relative
              description: |-
                ## Purpose
                Adult children and other relatives often live hours away from a parent who is becoming isolated, and guilt does not help either side. A planned routine of twice-weekly calls, a local contact who visits, and help finding groups and befriending in their area gives your relative more company than occasional rushed visits.

                ## Milestones
                1. Your relative's own view of their contact and loneliness heard.
                2. Calls happening on two fixed days each week.
                3. A neighbour, friend or local service agreed as a nearby contact.
                4. One local group or befriending service tried by your relative.

                ## Notes
                Ask before arranging anything. Older people often resist help that is organised over their heads but welcome it when they choose it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twice-weekly calls have run for two months, a nearby contact is agreed and one local service has been tried by your relative."
                cadence: rolling
              tasks:
                - "Ask your relative how often they see or speak to people"
                - "Call your relative on your two fixed days @recurring(weekly:mon,thu)"
                - "Find one nearby contact who can drop in occasionally"
                - "Help them try one local group or befriending service"
            - name: Starting a small group of your own
              description: |-
                ## Purpose
                When nothing local fits, starting a group yourself, a walking group, a book club, a lunch club or a craft circle, eases your own loneliness and other people's at once. Keeping it simple, monthly, free and in a public venue makes it easier to sustain past the enthusiasm of the first few meetings.

                ## Milestones
                1. A group idea chosen with a free public venue and a regular slot.
                2. The first meeting advertised on noticeboards and local online groups.
                3. Three meetings held.
                4. One co-organiser recruited to share the work.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new group has held three regular meetings and has one co-organiser sharing the work."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a group idea and a free public venue"
                - "Write a short notice with day, time and who it is for"
                - "Post the notice on noticeboards and local online groups"
                - "Send the reminder for the next meeting @recurring(monthly:3)"
                - "Ask a regular to co-organise with you"
            - name: Volunteering as a befriender for someone else
              description: |-
                ## Purpose
                Once your own connections are steadier, befriending an isolated person through a charity turns experience into help for someone else. Most schemes train volunteers, check references and ask for an hour a week over at least six months, and the regular contact often eases the befriender's loneliness too.

                ## Milestones
                1. A befriending charity's role and training requirements checked.
                2. Application, background check and training completed.
                3. A match made and weekly contact started.
                4. Six months of contact kept, with supervision used when needed.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Training is completed and six months of weekly contact are kept with a matched person through a befriending charity."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find a befriending charity that trains volunteers near you"
                - "Apply and complete the required checks and training"
                - "Call or visit your matched person @recurring(weekly:wed)"
                - "Use the charity's supervision when a conversation worries you"
            - name: When loneliness has lasted for years
              description: |-
                ## Purpose
                Loneliness that persists despite real effort is often tangled up with social anxiety, low mood, past rejection or difficulty trusting people, and more groups alone may not shift it. Asking your doctor or a therapist about psychological support aimed at the thinking and habits that keep you isolated is a reasonable next step, not a failure.

                ## Milestones
                1. A written summary of how long loneliness has lasted and what you have tried.
                2. Your monthly scores brought to an appointment.
                3. Psychological support options discussed with your doctor or a therapist.
                4. A referral or self-referral made, or a reasoned decision recorded.

                ## Notes
                If you feel hopeless or have thoughts of ending your life, contact a crisis line or emergency services now rather than waiting for an appointment.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An appointment about long-lasting loneliness is held with your summary and scores, and a referral or decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write half a page on how long loneliness has lasted and what you tried"
                - "Gather your monthly loneliness scores"
                - "Book an appointment to discuss psychological support"
                - "Record the referral made or the decision reached"
---

# Loneliness & Isolation Support

Loneliness is common, painful and more fixable than it feels, and it weighs most on people living alone, newcomers to an area, the recently bereaved and retirees. This area starts with a clear picture (a baseline score, a map of who is in your life, a week's contact diary and a conversation with your doctor), then the weekly machinery of contact plans, fixtures and keep-in-touch rotations, the skills of making the first move and turning acquaintances into friends, choices about groups, volunteering, befriending and housing, a few occasions worth planning, versions for living alone, moving, widowhood, retirement, caring and being housebound, and finally starting a group or becoming a befriender yourself.

What repeats is small and social: a daily conversation and check-in, a Sunday contact plan, a weekly fixture, a regular local place and a shared meal, a monthly keep-in-touch rotation and connection score, and yearly plans for birthdays and the festive season. The Metrics log, Habit tracker, Course, Purchase decision and Trip templates pair with the baseline score, the daily conversation habit, a term-long class, the pet decision and a group holiday. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
