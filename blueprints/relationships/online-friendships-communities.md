---
id: relationships.online-friendships-communities
name: Online Friendships & Communities
description: "A map of the friends you have made online, privacy and safety settings that fit, rhythms for game nights and check-ins, safe first meetups, and the skills to moderate and run a community."
category: personal
version: 1.0.0
tags: [relationships, online-friendships-communities, everyone, gaming, forums, online-safety, meetups, moderation]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - metrics-log
    - operational-checklist
    - purchase-decision
    - trip
    - risk-register
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Online Friendships & Communities
          description: "Nurturing friendships formed online through gaming, forums or social platforms, including meeting in person safely."
          projects:
            - name: Map of online friends and where you met them
              description: |-
                ## Purpose
                Online friendships tend to live inside whichever app they started in, so a person you have gamed with for four years can be one platform shutdown away from gone. Writing down who your online friends are, where you know them from, what you actually know about them and how close you feel turns a scattered set of usernames into a circle you can look after. It takes an evening, and the rest of this area builds on it.

                ## Milestones
                1. A list of every online friend you would miss, with the username and platform where you know them.
                2. Each entry marked as close, regular or occasional.
                3. What you reliably know about each person noted, such as first name, country and rough age.
                4. The five people you most want to keep for years highlighted.

                ## Notes
                Start from the **Person** template. Keep it to people you actually talk to, not everyone you follow; a list of twelve is more useful than a list of two hundred.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved list of online friends showing platform, username, closeness tier and known details, with five people marked as priorities."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Scroll your recent chats and servers and write down every friend you would miss"
                - "Add the platform and username beside each name"
                - "Mark each friend as close, regular or occasional"
                - "Highlight the five friendships you most want to keep for years"
            - name: Privacy settings audit across social and gaming accounts
              description: |-
                ## Purpose
                Gaming profiles, forum accounts and social apps often show more than people realise: a real name pulled from a payment account, a city in a bio, an online status, or photos carrying location data. Going through each account once, as a stranger would see it, closes the gaps before someone you have never met pieces them together. It is worth doing before any first meetup and before joining a new community.

                ## Milestones
                1. Every active account listed, including old forums and gaming launchers.
                2. Each profile viewed logged out to see what a stranger sees.
                3. Real name, city, workplace and school removed from public profiles unless you chose to show them.
                4. Location data stripped from shared photos and automatic location tagging turned off.
                5. Friend lists and online status set to the visibility you want.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active social, gaming and forum account has been checked from a stranger's view, with public real name, location and workplace removed or deliberately kept."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every social, gaming and forum account you still use"
                - "View each profile logged out to see what a stranger sees"
                - "Remove your real name, city and workplace from public bios"
                - "Turn off location tagging in your camera and sharing apps"
                - "Set friend lists and online status to friends only"
            - name: Separate community email and usernames
              description: |-
                ## Purpose
                Using the same handle everywhere means one search connects your gaming tag to your professional profile, your old forum posts and sometimes your home town. A dedicated email address for communities and usernames that do not reuse your real name give you a buffer you can lower deliberately, friend by friend, rather than all at once.

                ## Milestones
                1. A separate email address set up only for community and gaming sign-ups.
                2. Each username searched to see what else it links to.
                3. Any handle that leads to your real name or workplace replaced or retired.
                4. A short note of which identity you use on which platform.

                ## Notes
                This is not about hiding from friends. It means the people you trust learn your name because you told them, not because a search engine did.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Community accounts use a dedicated email address and usernames that a web search does not link to your real name or employer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search each of your usernames in a web search and note what it links to"
                - "Create an email address used only for community and gaming accounts"
                - "Move community accounts to the new email address one by one"
                - "Retire any handle that leads straight to your real name"
            - name: Two-step sign-in and recovery codes on community accounts
              description: |-
                ## Purpose
                Hijacked gaming and chat accounts are a common route for scamming your friends: the attacker messages your contacts as you, asking for money, gift cards or a quick click on a link. Turning on two-step sign-in and saving recovery codes for every community account takes about an hour and protects the people who trust messages from you.

                ## Milestones
                1. Two-step sign-in turned on for every chat, gaming and forum account, using an authenticator app where offered.
                2. Recovery codes saved somewhere you can reach if your phone is lost.
                3. A unique password set for each account in a password manager.
                4. Sessions on old devices signed out.

                ## Notes
                If an account is ever taken over, warn your friends on another channel first, then recover the account. Telling people quickly limits the damage.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every community account has two-step sign-in on, a unique password and saved recovery codes, with old device sessions signed out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn on two-step sign-in for your main chat app today"
                - "Repeat for each gaming launcher and forum account on your list"
                - "Save every set of recovery codes somewhere offline"
                - "Sign out sessions on devices you no longer use"
            - name: Personal rules for sharing details online
              description: |-
                ## Purpose
                Most oversharing happens gradually: a city mentioned in voice chat, a school logo in a photo, a birthday post that confirms your age. Deciding in advance which details you share with whom, in tiers from public channel to trusted friend, means you are not making the call in the warmth of a late-night conversation. The rules also make it easier to say no without seeming cold.

                ## Milestones
                1. Three or four tiers written down, such as public channel, regular friend, close friend and met in person.
                2. Details placed in each tier: first name, city, workplace, face photos, phone number, home address.
                3. A friendly line ready for when someone asks for something above their tier.
                4. The rules shared with anyone in your household who chats with the same people.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of sharing tiers lists which personal details go to public channels, regular friends, close friends and people met in person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the tiers you want, from public channel to met in person"
                - "Place each personal detail into the tier where it belongs"
                - "Draft one friendly sentence for turning down a request for more"
                - "Check recent posts and photos for anything above its tier"
            - name: One-week log of your online social time
              description: |-
                ## Purpose
                Online time blurs together, so it is hard to tell whether the hours go to friends you care about or to scrolling a busy server where nobody knows your name. Logging one ordinary week, split into real conversation, group activity and passive browsing, gives you numbers to decide from instead of a vague sense of too much or too little.

                ## Milestones
                1. Seven days of online social time recorded by app and by type.
                2. Totals worked out for conversation, group activity and passive scrolling.
                3. The two or three people or places that gave the most back named.
                4. One change chosen from what the week showed.

                ## Notes
                Start from the **Metrics log** template. Your phone's screen time report helps, but it cannot tell a real chat from scrolling, so keep your own tally alongside it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A seven-day log of online social time split by type, with totals and one chosen change written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note today's screen time figures for your chat and gaming apps"
                - "Tally each session as conversation, group activity or scrolling for seven days"
                - "Add up the totals for each type at the end of the week"
                - "Write down the one change the numbers suggest"
            - name: Audit of servers, forums and groups you belong to
              description: |-
                ## Purpose
                Many people sit in thirty servers and group chats and are active in three. The rest add noise, pings and a low hum of obligation. Sorting every community into keep, mute or leave makes room for the places where you actually know people.

                ## Milestones
                1. Every server, forum, board and group chat you belong to listed.
                2. Each one marked keep, mute or leave, with a one-line reason.
                3. Communities marked leave exited, after a goodbye where you had friends.
                4. The keep list reduced to places where you know at least a few people by name.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every community you belong to has been sorted into keep, mute or leave, and everything on the leave list has been exited."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every server, forum and group chat you are a member of"
                - "Mark each one keep, mute or leave with a one-line reason"
                - "Say goodbye in any group you are leaving where friends will notice"
                - "Leave or mute the rest in one sitting"
            - name: Notification settings that keep group chats calm
              description: |-
                ## Purpose
                A busy server can send hundreds of pings a day, and the friends who actually message you get lost among them. Setting notifications so that direct messages and mentions come through while big channels stay silent means you see what matters and stop feeling on call.

                ## Milestones
                1. Large servers and groups set to mentions only or muted.
                2. Direct messages from close friends allowed through, including during quiet hours if you want.
                3. Mass mentions suppressed in large groups where the app allows.
                4. Quiet hours set across every chat and gaming app.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Chat and gaming apps are set so only direct messages and personal mentions notify, with quiet hours in place across every app."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set your busiest server to notify on mentions only"
                - "Allow direct messages from close friends through quiet hours"
                - "Suppress mass mentions in every large group"
                - "Choose quiet hours and apply them in each chat app"
            - name: Backup contact routes with close online friends
              description: |-
                ## Purpose
                Platforms ban accounts by mistake, shut down, get hacked or fall out of fashion, and a friendship that lives only inside one app can vanish overnight. Agreeing a second way to reach each close online friend, such as an email address or another messaging app, costs one slightly awkward message and protects years of friendship.

                ## Milestones
                1. A second contact route agreed with each of your closest online friends.
                2. The routes saved outside the original platform.
                3. Friends told how to reach you if your main account disappears.
                4. For the closest few, a way for them to learn if something happens to you, if you both want that.

                ## Notes
                Offer before you ask. Sharing your backup contact first makes it easy for the other person to match it, and just as easy to decline without awkwardness.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each close online friend has a second agreed contact route saved outside the platform where you met."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Send your backup contact to your closest online friend first"
                - "Ask the rest of your close friends which second route suits them"
                - "Save every backup route in your contacts outside the original app"
                - "Recheck that each backup contact still works @recurring(yearly)"
            - name: Weekly message round to close online friends
              description: |-
                ## Purpose
                Online friendships drift silently because nothing forces contact: no school gate, no office, no shared street. A short weekly round of messages to your closest online friends, asking about the specific thing they mentioned last time, keeps the thread warm between game nights and makes it obvious when someone has gone quiet.

                ## Milestones
                1. A weekly slot chosen for the message round.
                2. Close friends messaged individually, not just in the group.
                3. Most messages picking up something the friend told you before.
                4. Anyone silent for a month noticed and followed up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Personal messages go to each close online friend in most weeks, and anyone silent for four weeks is followed up individually."
                cadence: rolling
              tasks:
                - "Pick a weekly half hour for messaging close online friends"
                - "Send a personal message to each close online friend @recurring(weekly:sun)"
                - "Note one thing each friend mentioned so you can ask about it next time"
                - "Follow up with anyone who has been silent for a month"
            - name: Standing weekly game night or voice hangout
              description: |-
                ## Purpose
                Friendships formed in a game or a server are held together by doing things together, and once the shared activity stops, conversation often stops too. A fixed weekly session with a small group, at a time everyone can usually make, gives the friendship a heartbeat that survives busy months.

                ## Milestones
                1. A group of three to six agreed on a fixed weekly time.
                2. The activity agreed or rotated so nobody drops out from boredom.
                3. A simple rule for cancelling that does not kill the session.
                4. The session running for eight weeks in a row.

                ## Notes
                Keep it going when only two people turn up. A small session still counts, and cancelling for low numbers is how standing nights die.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly game night or voice hangout has run at its fixed time for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Propose a fixed weekly time to three to six online friends"
                - "Agree what you will play or do for the first month"
                - "Show up to the weekly session even if only two can make it @recurring(weekly:fri)"
                - "Rotate who picks the activity each month"
            - name: Monthly watch party or co-working session
              description: |-
                ## Purpose
                Not every online friend games, and not every friendship survives on text alone. A monthly shared activity with a different shape, such as watching a film in sync, co-working with cameras on, reading the same book or cooking the same recipe on a call, gives quieter friends a way to spend time together that is not about winning.

                ## Milestones
                1. Two or three friends interested in a monthly shared session.
                2. A format chosen and the tools to sync it tested.
                3. A fixed day of the month agreed.
                4. Three monthly sessions held.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly watch parties or co-working sessions have been held with the same small group."
                cadence: rolling
              tasks:
                - "Ask two friends which shared activity they would enjoy each month"
                - "Test a sync tool or call set-up before the first session"
                - "Host the monthly shared session @recurring(monthly:14)"
                - "Ask after each session whether to keep the format or change it"
            - name: Weekly contribution to a community you value
              description: |-
                ## Purpose
                Communities run on the people who answer questions, share their work, welcome newcomers and post the build log nobody asked for. Friendships tend to form around regular contributors, because people learn their names. One deliberate contribution a week, in one community you care about, does more for belonging than hours of reading.

                ## Milestones
                1. One community chosen as your main place to contribute.
                2. A weekly contribution in place: an answer, a post, a review or a welcome.
                3. Your name recognised by a handful of regulars.
                4. At least one conversation moved from the public channel to a direct chat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One meaningful contribution has been posted each week in a chosen community for at least two months."
                cadence: rolling
              tasks:
                - "Choose the one community where you most want to be known"
                - "Post one helpful answer, piece of work or welcome @recurring(weekly:wed)"
                - "Reply to anyone who responds to your posts within a day"
                - "Note the regulars whose names you now recognise"
            - name: Monthly server and group tidy
              description: |-
                ## Purpose
                Communities pile up: a server joined for one event, a group chat for a trip three years ago, a forum that changed hands. A short monthly tidy keeps the keep list honest, and it is also the moment to check that no community has drifted into a tone you no longer want around you.

                ## Milestones
                1. A recurring monthly slot for the tidy.
                2. Communities joined that month reviewed against your keep, mute or leave rules.
                3. Dead groups left and notification settings checked.
                4. Any community with a worsening tone flagged for a decision.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly tidy of servers and groups has been done for three months running, with dead groups left and settings checked."
                cadence: rolling
              tasks:
                - "Leave or mute any community you have not opened in a month @recurring(monthly:17)"
                - "Review communities joined this month against your keep rules"
                - "Check that notification settings still match your quiet hours"
                - "Flag any group whose tone has turned for a proper decision"
            - name: Monthly balance check of online and offline time
              description: |-
                ## Purpose
                For some people online friendships are the main ones, and that is fine. The useful question is not whether online time is too much but whether it fits the rest of your life: sleep, work, the people in the house, getting outside. A monthly ten-minute check against two or three markers you choose catches drift before it becomes a habit you resent.

                ## Milestones
                1. Two or three markers chosen, such as bedtime, offline plans per week or screen hours after midnight.
                2. A monthly check recorded against the markers.
                3. One adjustment made whenever a marker slips two months running.
                4. A view after six months of whether the balance feels right.

                ## Notes
                Pick markers that matter to you. Someone housebound may want more online time, not less.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly checks against two or three chosen balance markers have been recorded for six months, with any adjustments noted."
                cadence: rolling
              tasks:
                - "Choose two or three markers that show your online time fits your life"
                - "Record this month's figures against each marker @recurring(monthly:9)"
                - "Make one adjustment when a marker slips two months in a row"
                - "Look back over six months of checks and write a short verdict"
            - name: Quarterly export of conversations worth keeping
              description: |-
                ## Purpose
                Years of jokes, support and late-night conversations sit on servers you do not control, and channels get deleted, accounts get banned and apps close with a few weeks' notice. Exporting the conversations and photos you would hate to lose, a few times a year, keeps the history of a friendship even if the platform goes.

                ## Milestones
                1. The conversations and channels you would hate to lose listed.
                2. Each app's data export or download feature found and tested.
                3. A first full export saved in a dated folder.
                4. Exports repeated each quarter.

                ## Notes
                Keep exports private. They contain other people's words, so they are for your memories, not for sharing or quoting elsewhere.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated export of important conversations and photos exists for each key platform and has been refreshed within the last three months."
                cadence: rolling
              tasks:
                - "List the conversations and channels you would hate to lose"
                - "Find the data export option in each app and request a first copy"
                - "Save each export in a dated folder with your other backups"
                - "Repeat the export for your key platforms @recurring(quarterly)"
            - name: Quarterly privacy and account security sweep
              description: |-
                ## Purpose
                Apps change their defaults, new features quietly share more, and old devices stay signed in. A short sweep each quarter, run from the same checklist, keeps the work done in the first privacy audit from wearing away.

                ## Milestones
                1. A checklist built from your first privacy audit and account security set-up.
                2. Profiles reviewed from a stranger's view.
                3. Connected apps, bots and third-party log-ins reviewed and removed where unused.
                4. Signed-in devices checked and old sessions ended.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly security and privacy checklist has been completed and dated for each of the last two quarters."
                cadence: rolling
              tasks:
                - "Turn your first privacy audit into a short checklist"
                - "Run the privacy and security checklist across all accounts @recurring(quarterly)"
                - "Remove bots and connected apps you no longer use"
                - "End sessions on devices you do not recognise"
            - name: Quarterly review of your online friendships
              description: |-
                ## Purpose
                Closeness online shifts quickly: a game falls out of favour, a server splits, someone starts a new job and vanishes. Looking at your friend map each quarter shows who has become closer, who has drifted and who you have been meaning to message for weeks, so effort goes where you want it rather than where the notifications point.

                ## Milestones
                1. The friend map updated with any new or lost friendships.
                2. Closeness tiers adjusted to reflect the last three months.
                3. One drifting friendship chosen for deliberate effort.
                4. One friendship that has quietly ended accepted without guilt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The online friend map is updated each quarter, with one friendship chosen for effort and the change recorded."
                cadence: cyclic
              tasks:
                - "Open your friend map and add anyone new from the last three months"
                - "Move friends between tiers based on how often you actually talk"
                - "Pick one drifting friendship and message them this week"
                - "Review your online friend map @recurring(quarterly)"
            - name: Annual review of your online community life
              description: |-
                ## Purpose
                Once a year it is worth stepping back from individual friendships to the whole picture: which communities you gave time to, what you got back, who you met in person and what you want more or less of next year. The review is also when to re-run the time log and archive the projects in this area that no longer fit.

                ## Milestones
                1. The year's online friendships, communities and meetups listed.
                2. A note of what gave the most and what drained the most.
                3. Two or three intentions set for the coming year.
                4. Projects in this area archived or reactivated to match.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written annual review of online friendships and communities exists, with two or three intentions for the next year."
                cadence: cyclic
              tasks:
                - "Hold your annual online community review @recurring(yearly)"
                - "Ask the agent to summarise your quarterly friendship notes into a one-page year in review"
                - "Note what gave you the most this year and what drained you"
                - "Write two or three intentions for the year ahead"
            - name: Spotting scams, catfishing and money requests
              description: |-
                ## Purpose
                Scams aimed at online friendships follow a few well-worn scripts: a new friend who escalates intimacy fast, a crisis that needs money or gift cards, an investment tip, a push to move to a less moderated app, or a hijacked friend account asking for a quick favour. Learning the patterns once, with real examples, makes them easy to recognise when they arrive wrapped in warmth.

                ## Milestones
                1. The common scripts learned: friendship and romance scams, account takeover, fake giveaways, investment pitches and sextortion.
                2. A personal rule written: no money, gift cards, codes or intimate images to anyone you have not met, whatever the story.
                3. A habit in place of checking strange requests from a friend on a second channel.
                4. The reporting routes for your main platforms and your country's fraud reporting service saved.

                ## Notes
                If you have already sent money or images, it is not your fault and it is still worth acting: stop contact, keep the evidence, report to the platform and to the police or fraud service, and tell someone you trust.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule on money, codes and images, plus reporting routes for each main platform and the national fraud service, saved where you can find them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your national fraud service's guide to friendship and romance scams"
                - "Write your personal rule on money, gift cards, codes and images"
                - "Agree with close friends to check odd requests on a second channel"
                - "Save the reporting links for each platform you use"
            - name: Checking an online friend is who they say they are
              description: |-
                ## Purpose
                Most online friends are exactly who they say, but before you share more personal details or plan to meet, it is reasonable to check. A few gentle steps, such as a live video call, a reverse image search of their photos and noticing whether their story holds together over time, protect you without treating a friend as a suspect.

                ## Milestones
                1. A video call held where you can see and hear the person live.
                2. Profile photos checked with a reverse image search.
                3. Their story checked for consistency: age, location, work and the hours they are usually online.
                4. Any mismatch raised openly or treated as a reason to slow down.

                ## Notes
                Someone who repeatedly refuses a video call, always has a broken camera and pushes for secrecy is showing the clearest warning sign there is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before sharing details above the regular-friend tier, a live video call and a reverse image search have been done, with any mismatches noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Suggest a short video call to the friend you are getting closer to"
                - "Run their profile photos through a reverse image search"
                - "Note whether their stories about age, place and work have stayed consistent"
                - "Slow down and talk to someone you trust if anything does not match"
            - name: Joining a new community without lurking for months
              description: |-
                ## Purpose
                Plenty of people read a forum or server for a year without posting and wonder why nobody knows them. The first weeks set the pattern: reading the rules, a short introduction, a couple of useful replies and turning up to a voice event move you from stranger to regular faster than any amount of reading.

                ## Milestones
                1. The rules and pinned posts read, and the norms for self-promotion and off-topic chat understood.
                2. A short introduction posted in the right channel.
                3. Five useful replies or contributions made in the first month.
                4. One voice event, community game or live session attended.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within a month of joining, an introduction, five contributions and attendance at one live community event are done."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the rules and pinned posts of the community you just joined"
                - "Post a short introduction that mentions what you are into"
                - "Reply usefully to five threads over the next month"
                - "Join one voice event, game session or live stream in the community"
            - name: Reading tone in text and repairing misunderstandings
              description: |-
                ## Purpose
                Text strips out tone, timing and facial expression, so a short reply reads as cold, a joke reads as a jab and a slow reply reads as a snub. Learning to ask before assuming, to state your tone when it matters and to repair quickly when something lands badly saves many online friendships that would otherwise end over a misread message.

                ## Milestones
                1. A habit of asking a clarifying question before reacting to a message that stings.
                2. A few phrases ready for signalling tone, such as saying you are joking or not annoyed.
                3. One recent misunderstanding repaired with a direct message.
                4. A personal rule to move heated text conversations to voice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recent misunderstanding has been repaired in a direct message, and a written rule moves heated exchanges from text to voice."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Recall the last message that stung and write how else it could have been meant"
                - "Write three phrases you can use to make your tone clear"
                - "Message one friend to clear up a recent misunderstanding"
                - "Suggest a voice call the next time a text exchange starts heating up"
            - name: From text chat to voice and video calls
              description: |-
                ## Purpose
                Many online friendships stay in text for years because the first call feels like a big step, especially for people with social anxiety or who first connected through writing. A gradual route, from voice notes to voice chat during a game to a short video call, deepens the friendship and is also the most reliable way to know who you are talking to.

                ## Milestones
                1. A voice note or two exchanged with a close text-only friend.
                2. A voice call held during a shared activity, which takes the pressure off talking.
                3. A first short video call held, with an agreed end time.
                4. A preferred call format agreed for the future.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one close text-only friendship has moved to a voice call and a first short video call."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Send one close text friend a short voice note"
                - "Suggest voice chat during your next game or shared activity"
                - "Propose a twenty-minute video call with an agreed end time"
                - "Ask afterwards which format they would like to use from now on"
            - name: Moving a group-chat friendship into one-to-one
              description: |-
                ## Purpose
                Group servers are where online friendships start, but closeness grows in one-to-one conversation. Plenty of people stay friendly with someone in a group for years without ever messaging them directly, because it feels forward. A few low-key moves, such as replying privately to something they posted or inviting them to a two-person game, turn a group acquaintance into a friend.

                ## Milestones
                1. Two or three group acquaintances chosen who you would like to know better.
                2. A private message sent to each, picking up something they posted.
                3. One two-person activity done with at least one of them.
                4. A note of which conversations took off and which stayed polite.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Private conversations have been started with two or three group acquaintances, and at least one two-person activity completed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Name two or three people in your groups you would like to know better"
                - "Message each privately about something they posted"
                - "Invite one of them to a two-person game, call or activity"
                - "Note which conversations grew and which stayed polite"
            - name: Handling harassment, trolls and pile-ons
              description: |-
                ## Purpose
                Almost everyone active online meets a troll, a persistent harasser or a pile-on at some point, and the instinct to argue back usually makes it worse. Knowing in advance how to block, mute, document and report on each of your platforms, and who you would tell, means you respond with a plan rather than in a panic at two in the morning.

                ## Milestones
                1. Block, mute, restrict and report features located on each main platform.
                2. A simple method for documenting abuse: screenshots with usernames, dates and links saved in one folder.
                3. A rule for not engaging, and a friend who will read hostile messages for you when it is bad.
                4. The point at which you would go to the police or seek legal advice written down.

                ## Notes
                Threats of violence, sharing intimate images without consent and stalking are crimes in many countries. Save the evidence before blocking, because some platforms hide content from you once you block.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written plan names the block and report tools on each platform, a documentation folder exists and the threshold for going to the police is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the block, mute and report tools on each platform you use"
                - "Create a folder for dated screenshots in case you ever need evidence"
                - "Ask one trusted friend to be the person who reads hostile messages for you"
                - "Write down the point at which you would contact the police"
            - name: Deciding whether to meet an online friend in person
              description: |-
                ## Purpose
                Meeting someone you have known online for years can be one of the best days of a friendship, and occasionally a serious mistake. Before agreeing a date, check honestly: how long you have known them, whether you have done a video call, whether their story holds up and whether either of you is feeling pushed. A written yes, not yet or no makes the decision yours rather than the moment's.

                ## Milestones
                1. A checklist answered: length of friendship, video call done, identity consistent, no pressure or secrecy.
                2. Your gut feeling noted separately from the checklist.
                3. A trusted person told about the plan and asked for their view.
                4. A decision recorded: yes with a safety plan, not yet with a condition, or no.

                ## Notes
                For anyone under 18, meeting an online friend should involve a parent or carer, every time.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes, not yet or no on meeting a specific online friend, based on a written checklist and the view of one trusted person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down how long and how well you have known the friend you might meet"
                - "Answer the checklist on video calls, consistency and pressure"
                - "Tell a trusted person about the plan and ask what they think"
                - "Record your decision and any condition attached to it"
            - name: Choosing where your group moves when a platform changes
              description: |-
                ## Purpose
                Servers shut, apps change their pricing or rules, games lose their player base, and a friend group can scatter if nobody decides where to go next. Comparing two or three alternatives on privacy, cost, moderation tools and whether everyone can actually use them, then moving together on a set date, keeps the group intact.

                ## Milestones
                1. The reason for moving written in a sentence the group agrees with.
                2. Two or three alternative platforms compared on privacy, cost, moderation, accessibility and device support.
                3. A decision made with the group and a moving date set.
                4. Everyone moved across, with a pinned message on the old platform pointing the way.

                ## Notes
                Start from the **Purchase decision** template. Do not wait for a perfect option: a slightly worse platform that everyone joins beats a better one that half the group never installs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The group has chosen a new platform from a written comparison, and at least three quarters of active members have joined it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one sentence the group agrees on about why you are moving"
                - "Compare two or three alternatives on privacy, cost and moderation"
                - "Ask the agent to draft a short comparison post for the group to vote on"
                - "Set a moving date and pin a pointer on the old platform"
            - name: Leaving a community that has turned sour
              description: |-
                ## Purpose
                Communities change: a new moderator team, a toxic clique, arguments creeping into every channel, or a culture that rewards cruelty. Staying out of loyalty can cost more than it gives. Leaving well means keeping the friendships worth keeping, saving what you want to keep and going without a public scene.

                ## Milestones
                1. The reasons for leaving written down, including whether anything could change them.
                2. Friends you want to keep contacted privately with a backup route.
                3. Anything you want saved exported before you go.
                4. The community left, quietly or with a short goodbye.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The community has been left after friends worth keeping were contacted privately and any wanted content was exported."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what has changed and whether anything would make you stay"
                - "Message the friends you want to keep with a way to reach you elsewhere"
                - "Export or save anything you want to keep from the community"
                - "Leave with a short goodbye or quietly, without a parting argument"
            - name: Availability boundaries and read receipts
              description: |-
                ## Purpose
                Being online all the time creates an unspoken expectation of instant replies, and read receipts and online status turn every delay into a signal. Deciding when you are and are not available, and telling close friends, protects sleep, work and family time without leaving anyone wondering whether you are upset with them.

                ## Milestones
                1. Your realistic availability written down: the times you reply and the times you do not.
                2. Read receipts, typing indicators and online status set to what you are comfortable with.
                3. Close friends told your rhythm in a casual message.
                4. A kind line ready for friends who expect more than you can give.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Read receipts and online status are set deliberately, and close friends have been told when you usually reply."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the hours you are happy to reply to messages"
                - "Change read receipts and online status to match"
                - "Tell close online friends your usual reply rhythm in a casual message"
                - "Draft a kind line for when someone expects faster replies than you can give"
            - name: Sending gifts without sharing your home address
              description: |-
                ## Purpose
                Swapping gifts, birthday cards and fan merchandise is a lovely part of online friendship, but it is also how a home address ends up with someone you have never met. Parcel lockers, collection points and wishlist services that hide addresses let you give and receive without making that call before you are ready.

                ## Milestones
                1. Your options for receiving post without your home address listed, such as parcel lockers or collection points.
                2. A wishlist set up that hides your address from the giver, if you want one.
                3. A way to send gifts digitally or to a friend's chosen collection point.
                4. Your rule on when to share a real address added to your sharing tiers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A way to send and receive gifts without revealing a home address is set up and written into your sharing tiers."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the nearest parcel locker or collection point to your home"
                - "Set up a wishlist that hides your address, if you want one"
                - "Ask a friend how they would like to receive a gift from you"
                - "Add your rule on sharing a home address to your sharing tiers"
            - name: Introducing online friends to a sceptical partner or family
              description: |-
                ## Purpose
                Partners, parents and old friends sometimes treat online friends as less real, or as a worry, especially when a meetup or a trip is on the table. A little openness, such as talking about these friends by name, letting family say hello on a call and sharing your safety plan, usually turns suspicion into curiosity.

                ## Milestones
                1. Your online friends mentioned by name and story in everyday conversation at home.
                2. The specific worry of your partner or family asked about and listened to.
                3. A short hello arranged on a call or during a game.
                4. Your safety plan shared before any meetup.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The people at home have met at least one online friend on a call, and their main worry has been heard and answered."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your partner or family what worries them about your online friends"
                - "Tell one story about an online friend over dinner this week"
                - "Arrange a quick hello between a family member and a friend on a call"
                - "Share your meetup safety plan with them before any meeting"
            - name: First in-person meetup with an online friend
              description: |-
                ## Purpose
                Once you have decided to meet, the plan decides how the day goes. A public place in daytime, your own way there and back, a trusted person who knows where you are and when to expect a message, and a time limit for the first meeting make it safe enough to relax and enjoy it.

                ## Milestones
                1. A busy public place and a daytime slot agreed, with no pick-up from your home.
                2. Your own transport there and back arranged.
                3. A trusted person given the friend's name, username, photo, the location and your check-in times.
                4. A short first meeting held, with an easy way to leave or extend it.
                5. A check-in message sent to your trusted person afterwards.

                ## Notes
                Keep your drink with you, meet on neutral ground and do not go back to anyone's home on the first meeting, however well it goes.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first meeting took place in a public place in daytime, with your own transport and a trusted person who received check-in messages."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a busy public place and daytime slot for the first meeting"
                - "Arrange your own transport there and back"
                - "Send a trusted person the friend's details and your check-in times"
                - "Message your trusted person when you arrive and when you leave"
            - name: Convention or fan event with online friends
              description: |-
                ## Purpose
                Conventions, tournaments and fan events are where many online friends meet for the first time, often as a big group. Tickets, rooms and budgets need sorting months ahead, and sharing a hotel room with people you have only met online is a decision worth making deliberately rather than by default.

                ## Milestones
                1. The event chosen and tickets bought.
                2. Accommodation booked, with a clear decision on room sharing and a fallback.
                3. A budget covering ticket, travel, room, food and merchandise.
                4. A meeting point and group chat for the day agreed.
                5. Your own way home and a quiet exit option planned.

                ## Notes
                Start from the **Trip** template. Pay your share of a room directly to the hotel where you can, rather than sending money to one person.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Tickets, accommodation and a written budget are in place for the event, with a meeting point and your own way home agreed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist the events your online friends are planning to attend"
                - "Buy your ticket and decide whether you will share a room"
                - "Book accommodation with free cancellation"
                - "Agree a meeting point and a group chat for the day"
            - name: Organising a meetup for your server or forum
              description: |-
                ## Purpose
                A community that has talked online for years often wants to meet, and someone has to pick a city, a date and a venue. Organising a meetup well means thinking about the people who cannot travel, members under 18, accessibility, cost and a code of conduct that applies in person too.

                ## Milestones
                1. Interest gauged with a poll on city, date and budget.
                2. A public, accessible venue booked, with an age policy set.
                3. A code of conduct for the meetup posted.
                4. A remote option ready for members who cannot travel.
                5. A short photo thread posted afterwards, with consent for any faces shown.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A community meetup was held at a public, accessible venue with a posted code of conduct and a remote option for members who could not travel."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Post a poll on city, date and budget for a community meetup"
                - "Book a public, accessible venue and set the age policy"
                - "Post a code of conduct for the meetup"
                - "Set up a stream or call for members who cannot travel"
                - "Ask permission before posting any photos with faces"
            - name: First overnight visit with an online friend
              description: |-
                ## Purpose
                Staying with an online friend, or hosting one, is a bigger step than meeting for coffee: you depend on each other for a bed, transport and company for days. Booking your own room for the first visit, or keeping a funded way out if you stay with them, keeps the trip enjoyable even if the chemistry is different in person.

                ## Milestones
                1. At least one short daytime meeting done before any overnight visit.
                2. Accommodation decided: your own room nearby, or their place with a backup booking you can use.
                3. Money for a hotel night and a ticket home set aside.
                4. Your trusted person given the address and check-in times.
                5. Expectations about plans, costs and alone time talked through before travel.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The overnight visit happened with backup accommodation, money for an early return and a trusted person who had the address."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your friend how they picture the visit, including time apart"
                - "Book a nearby room or a refundable backup booking"
                - "Set aside money for a hotel night and a ticket home"
                - "Send your trusted person the address and your check-in times"
            - name: Group holiday with friends mostly met online
              description: |-
                ## Purpose
                A rented house with six friends from a server can be the trip of a lifetime or a week of quiet friction over money and mess. Agreeing costs, payment, rooms, house rules and what happens if someone wants to leave, before anyone books, does most of the work.

                ## Milestones
                1. The group, dates and destination agreed in a poll.
                2. A shared cost sheet in place, with each person paying through the booking platform where possible.
                3. Rooms allocated and house rules agreed, including quiet hours.
                4. A cancellation policy and an early-leave option agreed in writing.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written group agreement on costs, rooms, house rules and cancellations exists before the accommodation is booked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a poll on dates, destination and budget"
                - "Set up a shared cost sheet before anyone books"
                - "Agree rooms, quiet hours and house rules in the group chat"
                - "Write down what happens if someone cancels or wants to leave early"
            - name: Community anniversary event online
              description: |-
                ## Purpose
                Servers and forums that last five or ten years are rare, and marking the date gives members a reason to come back, share memories and welcome the newer crowd. An online event with a short programme, a memory thread and a group activity costs little and strengthens the community for the year ahead.

                ## Milestones
                1. The founding date confirmed and a programme of one to two hours planned.
                2. A memory thread opened in the week before.
                3. A group activity such as a game, quiz or watch party run on the day.
                4. Thanks posted to the founders and long-standing moderators.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary event with a memory thread and a group activity has been held on or near the community's founding date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the founding date of your community"
                - "Plan a one to two hour programme with a group activity"
                - "Open a memory thread a week before the event"
                - "Add the community anniversary to your calendar @recurring(yearly)"
            - name: Online friendships when housebound or chronically ill
              description: |-
                ## Purpose
                For people with chronic illness, disability or caring duties that keep them at home, online friends are often the main social life, not an extra. Building a circle that understands cancelled plans, low-energy hangouts and flare-ups, and having a way to say you are unwell without explaining, makes those friendships sustainable.

                ## Milestones
                1. Communities found where members share your condition or situation, if you want that.
                2. A low-energy hangout format agreed, such as quiet co-working or text-only game nights.
                3. A short message or status ready for bad days.
                4. One or two friends who know enough to check in if you go quiet.

                ## Notes
                Peer communities are valuable for support but are not medical advice. Check any treatment idea with your own clinician.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A low-energy hangout runs most weeks, and one or two friends know to check in if you go quiet."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look for a community for people living with your condition or situation"
                - "Agree a low-energy hangout format with two or three friends"
                - "Write a short status message for bad days"
                - "Join your low-energy hangout @recurring(weekly:tue)"
            - name: Understanding your teenager's online friends
              description: |-
                ## Purpose
                Most teenagers have friends they know only online, and a ban rarely works; it just moves the friendships out of sight. Parents who know the platforms, ask about friends by name and agree clear rules on personal details, money and meeting in person are the ones teenagers come to when something feels wrong.

                ## Milestones
                1. The apps and games your teenager uses listed, and their safety settings checked together.
                2. A regular, unhurried conversation about online friends, by name.
                3. Family rules agreed on personal details, money, images and meeting in person.
                4. Your teenager clear that they can tell you about anything that worried them without losing their device.

                ## Notes
                Grooming often starts with flattery, gifts and requests for secrecy. A teenager who feels safe telling you is the strongest protection there is.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Family rules on online friends are written and agreed with your teenager, and the safety settings on each app they use have been checked together."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your teenager to show you the game or app they enjoy most"
                - "Check safety and privacy settings on each app together"
                - "Agree written family rules on details, money, images and meetups"
                - "Tell your teenager plainly they will not lose their device for telling you something"
            - name: Finding online communities later in life
              description: |-
                ## Purpose
                Retirement, a move, losing a partner or reduced mobility can shrink a social circle fast, and online communities built around a hobby, local history, a sport or a book can fill some of that gap. Starting with one community that matches a real interest, and getting comfortable with its platform, works better than joining several at once.

                ## Milestones
                1. One interest chosen and two or three communities around it found.
                2. The platform set up, with help from someone if needed, and privacy settings checked.
                3. A regular weekly time to take part.
                4. A first video meeting or online event attended.

                ## Notes
                Older adults are targeted more often by friendship and romance scams. Read the scams project first and keep the rule on money.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "You have taken part in one online community each week for two months, with privacy settings checked and one live event attended."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one interest you would enjoy talking about with others"
                - "Find two or three online communities built around it"
                - "Ask a family member or friend to help set up the platform if needed"
                - "Take part in your chosen community @recurring(weekly:thu)"
            - name: Keeping gaming friendships alive as a new parent
              description: |-
                ## Purpose
                Babies, new jobs and caring roles can turn nightly sessions into one rare hour a fortnight, and friends who play every evening stop expecting you. Telling the group what has changed, switching to games and formats that survive interruptions, and keeping one protected slot means the friendships last until time frees up again.

                ## Milestones
                1. The group told plainly what your new availability looks like.
                2. A switch to formats that cope with pauses, such as turn-based or asynchronous games.
                3. One protected monthly session agreed with your partner or household.
                4. A short chat thread kept alive between sessions.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One protected monthly session has been agreed at home and attended with your gaming group for three months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Tell your gaming group what your availability now looks like"
                - "Suggest one turn-based or asynchronous game you can play between naps"
                - "Agree a protected monthly session with your partner or household"
                - "Play your protected monthly session @recurring(monthly:26)"
            - name: Coming back to a community after a long break
              description: |-
                ## Purpose
                After a year away for exams, illness, burnout or a busy job, returning to a server can feel like walking into a party where the in-jokes have changed. A light re-entry, such as skimming the recent highlights, messaging the one or two friends you knew best and posting a simple hello, usually goes better than people fear.

                ## Milestones
                1. The last few months of announcements and highlights skimmed.
                2. The one or two friends you were closest to messaged privately.
                3. A short return post made, without long apologies.
                4. One live event or session joined in the first two weeks back.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Within two weeks of returning, close friends have been messaged, a return post made and one live session attended."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Skim the announcements and highlights from the months you missed"
                - "Message the one or two friends you knew best before posting publicly"
                - "Post a short hello without a long apology"
                - "Join one live session in your first two weeks back"
            - name: When an online friend dies or vanishes
              description: |-
                ## Purpose
                Sometimes an online friend disappears without explanation, and the community learns weeks later that they died. Grief for someone you never met in person is real, and the people around you often do not recognise it. Knowing how to find out what happened respectfully, share the news with care and mark the loss together helps everyone left behind.

                ## Milestones
                1. Gentle checks made through backup contacts or mutual friends, without intrusive digging.
                2. The news, once confirmed, shared in the community with care and a content note.
                3. A memorial thread, channel or in-game gathering held.
                4. Support found for yourself, such as a friend, a bereavement service or your doctor if the loss weighs heavily.

                ## Notes
                Respect the family's wishes about what is shared publicly. A memorial channel can stay open quietly for as long as people want it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The loss has been confirmed through a backup contact or mutual friend, shared with care and marked with a community memorial."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Try the backup contact or a mutual friend if someone has gone silent"
                - "Agree with moderators how and where to share confirmed news"
                - "Set up a memorial thread or a gathering in the game you shared"
                - "Remember your friend on the anniversary of their death @recurring(yearly)"
            - name: Stepping up as a volunteer moderator
              description: |-
                ## Purpose
                Every community you enjoy is held together by volunteers who remove spam, settle arguments and protect vulnerable members. Becoming one is a way to give back and to know the community properly, but it takes hours, thick skin and consistency. Starting with a clear agreement on role, time and tools prevents the slow burnout many moderators describe.

                ## Milestones
                1. The role and expected hours agreed with the existing moderators.
                2. Moderation tools, logs and the escalation route learned.
                3. A first month spent shadowing or handling one set channel.
                4. A weekly slot for the moderation queue in your calendar.
                5. Personal limits written down, including what you will not handle.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A moderator role with agreed hours, learned tools and a weekly queue slot has been held for at least two months."
                cadence: rolling
              tasks:
                - "Ask the moderators what the role involves and how many hours it takes"
                - "Learn the moderation tools and the escalation route"
                - "Work through the moderation queue @recurring(weekly:mon)"
                - "Write down what you will not handle and pass it upwards"
            - name: Writing community rules and a code of conduct
              description: |-
                ## Purpose
                Rules written after a crisis tend to be long, angry and aimed at one person. A short code of conduct written in a calm month, covering harassment, personal details, members under 18, self-promotion and what happens when someone breaks it, lets moderators act consistently and gives members something to point at.

                ## Milestones
                1. Codes of conduct from two or three well-run communities read for structure.
                2. A draft of under a page covering behaviour, personal details, age, promotion and enforcement.
                3. Feedback gathered from members and moderators.
                4. The final version pinned with a date and a review date.

                ## Notes
                Spell out the enforcement steps, such as warning, timeout and ban, so members know what to expect and moderators do not have to improvise.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A code of conduct under one page, with enforcement steps, is pinned in the community with a review date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the codes of conduct of two or three well-run communities"
                - "Ask the agent to draft a one-page code covering your community's needs"
                - "Post the draft for member and moderator feedback"
                - "Review the pinned code with the moderation team @recurring(yearly)"
            - name: Founding a small server or forum of your own
              description: |-
                ## Purpose
                When no existing community fits your interest, your local scene or your friend group, starting one is easier than it looks and harder to sustain than people expect. A small, focused space with a few clear channels, a couple of co-moderators and a regular event grows better than a sprawling one with forty empty channels.

                ## Milestones
                1. A one-line purpose for the community written.
                2. The platform set up with a handful of channels and basic safety and verification settings.
                3. Two co-moderators invited before opening.
                4. A regular event on the calendar to give people a reason to return.
                5. A monthly feedback thread running for members.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A community with a written purpose, two co-moderators, a regular event and a monthly feedback thread has run for three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-line purpose for your community"
                - "Set up five or fewer channels with verification and safety settings on"
                - "Invite two people you trust as co-moderators before opening"
                - "Post a monthly feedback thread for members @recurring(monthly:21)"
            - name: Safety plan if you are doxxed or stalked online
              description: |-
                ## Purpose
                Having your address, workplace or family details posted publicly, or being followed across platforms by one person, is frightening and can spill into offline life. A plan made calmly in advance, or the moment it starts, covers evidence, reports, locking down accounts, warning the people around you and getting help from the police or a specialist support service.

                ## Milestones
                1. Evidence captured with screenshots, links, usernames and dates before anything is removed.
                2. Reports made to each platform, and removal requests filed with search engines where the law allows.
                3. Accounts locked down, and people at home, at work and in your friend group warned.
                4. The police or a specialist online abuse service contacted, with a reference number recorded.
                5. A dated log kept of incidents and actions taken.

                ## Notes
                Start from the **Risk register** template. If you believe you are in physical danger, contact emergency services first. This project organises your response; it is not legal advice.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated incident log, platform reports and a police or support service reference number exist, and people close to you have been warned."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Screenshot every post with usernames, links and dates before reporting"
                - "Report each post to the platform and keep the confirmations"
                - "Lock your accounts and tell people at home and work what to watch for"
                - "Contact the police or a specialist online abuse service and note the reference"
            - name: Moderator burnout and handing over a community
              description: |-
                ## Purpose
                Long-running communities often rest on one or two people who have been moderating for years and are quietly exhausted. Spotting burnout, sharing the load and planning who takes over, including admin access, bots, domain names and any money, protects both the moderators and the community if someone has to step back suddenly.

                ## Milestones
                1. An honest check of hours spent and how the role feels.
                2. Duties listed and shared across at least two other people.
                3. A handover document covering ownership, admin access, bots, domains and any money.
                4. Ownership or admin rights held by at least two trusted people.
                5. A monthly check-in running among the moderation team.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A handover document exists, admin rights are held by at least two trusted people and the moderation team meets monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down how many hours a week moderation is really taking"
                - "List every duty and hand at least two to someone else"
                - "Write a handover document covering ownership, bots, domains and money"
                - "Hold a short check-in with the moderation team @recurring(monthly:3)"
            - name: Archiving a community before it closes
              description: |-
                ## Purpose
                When a forum shuts down, a game's servers go offline or an old group space is about to be deleted, years of writing, art and shared history can vanish with a few weeks' notice. Organising an archive with members' consent, and pointing everyone to where the community continues, preserves the history without exposing anyone who would rather be forgotten.

                ## Milestones
                1. The closure date and what will be lost confirmed.
                2. Members asked for consent, with an easy way to opt out of the archive.
                3. Key threads, art and records exported and stored in a private or members-only location.
                4. A pointer posted to where the community continues.
                5. The archive's location and keeper recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before the closure date, a consented archive of key threads and media is stored privately and members know where the community continues."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the closure date and what will be deleted"
                - "Post a consent notice with a simple way to opt out of the archive"
                - "Export key threads, art and records to private storage"
                - "Post a pointer to where the community is moving next"
---

# Online Friendships & Communities

This area is for anyone whose friends live partly or mostly online: the people from a game, a server, a forum or a fandom you talk to more often than some neighbours. It starts with foundations (a map of online friends, privacy and account security, sharing tiers, a time log and backup contacts), moves into the weekly and monthly machinery of check-ins, game nights, contributions and tidies, then the skills of spotting scams, checking who people are, joining well and handling harassment, the decisions about meeting in person, moving platforms and leaving, events from a first meetup to conventions and anniversaries, versions for housebound people, parents of teenagers, retirees, new parents and returners, and finally moderation, founding a community, doxxing safety and archiving.

What repeats is a weekly message round, game night and community contribution, a monthly watch party, server tidy and balance check, quarterly exports, security sweeps and friendship reviews, and a yearly look back at the whole picture. The Person, Metrics log, Operational checklist, Purchase decision, Trip and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
