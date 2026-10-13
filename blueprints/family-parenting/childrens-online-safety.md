---
id: family-parenting.childrens-online-safety
name: Children's Online Safety
description: "Content filters, privacy settings and age-correct accounts on every device, a no-blame promise to tell you, and a calm plan for grooming, scams, sextortion and the other risks children meet online."
category: personal
version: 1.0.0
tags: [family-parenting, childrens-online-safety, parent, parental-controls, privacy-settings, grooming, sextortion, digital-footprint]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Children's Online Safety
          description: "Protecting children online with parental controls, privacy settings, age-appropriate apps and honest talks about strangers and sharing."
          projects:
            - name: Who can reach each child online audit
              description: |-
                ## Purpose
                Parents tend to know which apps a child uses but not who can message them inside those apps, which profiles are public and which games allow voice chat with strangers. Sitting with each child and going through every app for contact, visibility and sharing gives a single picture of the real exposure, so the settings work that follows starts with the biggest gaps.

                ## Milestones
                1. Every app, game and website account each child uses listed with the username they use on it.
                2. Each one marked for who can message, who can see the profile and whether voice or video chat is on.
                3. The three accounts with the widest open contact named as the first to fix.
                4. The audit saved where both parents can find it again.

                ## Notes
                Start from the **Risk register** template. Do the audit with your child rather than behind their back: they know features you will miss, and it sets the tone for everything after.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of every account each child uses, marked for messaging, profile visibility and voice chat, with the top three gaps named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each child to show you the apps and games they used this week"
                - "List every account with its username and the device it lives on"
                - "Mark who can message, see the profile or voice chat on each account"
                - "Circle the three accounts most open to strangers"
            - name: Family online safety ground rules
              description: |-
                ## Purpose
                Children follow rules they understand and helped to write, and most online harm starts with a few predictable moves: sharing a full name or school, accepting a stranger, moving a chat to a private app, sending a photo. Agreeing five or six short rules on those moves, written in your children's own words and stuck where devices are charged, gives everyone the same script.

                ## Milestones
                1. A family conversation held about what each person already knows about staying safe online.
                2. Five or six rules agreed covering personal details, strangers, private chats, photos and telling an adult.
                3. The rules written in plain words a younger child can read, and signed by everyone.
                4. A copy displayed where devices are charged or used most.

                ## Notes
                Keep these about behaviour and safety. Time limits and device curfews belong with your screen time rules, so keep the two documents separate and short.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of online safety rules agreed and signed by every family member is displayed at home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each child what they think the riskiest thing online is"
                - "Draft five rules on details, strangers, private chats, photos and telling"
                - "Rewrite the rules in your youngest child's words and get everyone to sign"
                - "Print the rules and put them up by the charging spot"
            - name: Content filters on home broadband and mobile data
              description: |-
                ## Purpose
                Most broadband providers and mobile networks offer free network-level filters that block adult content on every device on that connection, but many are switched off by default or were never turned on for the children's SIMs. Turning them on at the router and on each child's mobile plan gives a baseline that works even on a friend's tablet brought into the house.

                ## Milestones
                1. The broadband provider's family filter switched on and tested from a child's device.
                2. Adult content blocking confirmed as active on every SIM a child uses.
                3. Any guest or older-child wifi network checked so it does not bypass the filter.
                4. The admin login for the router stored somewhere a child cannot reach.

                ## Notes
                Network filters stop most accidental exposure but not a determined teenager using another network. Treat them as the floor, not the whole plan.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Family filtering is active on the home broadband and on every child's SIM, tested by trying a blocked site from each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log into your broadband account and find the family filter setting"
                - "Switch the filter on and test it from a child's tablet"
                - "Ask the mobile network to confirm adult content blocking on each child SIM"
                - "Change the router admin password from the default"
                - "Test that the filter still blocks from a child's device @recurring(monthly:16)"
            - name: Privacy settings sweep on every child account
              description: |-
                ## Purpose
                Default settings on social, video and gaming apps favour reach, so a new account is often public, searchable by phone number and open to messages from anyone. Going through each account once and setting it to private, friends-only messaging and no contact syncing closes the doors strangers use most, and gives you a record to check against after app updates.

                ## Milestones
                1. Every account from the audit set to private or the most restricted visibility available.
                2. Direct messages limited to approved friends, or switched off, on each account.
                3. Find-by-phone-number, contact syncing and suggested-account features turned off.
                4. A short note of each account's settings saved for the quarterly recheck.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every child account is set to private with restricted messaging and contact discovery off, and the settings are written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Start with the account your audit marked as most open"
                - "Set the profile to private and messages to friends only"
                - "Turn off contact syncing and find-by-phone-number on each app"
                - "Write down the settings you chose for every account"
            - name: Location sharing and live map settings
              description: |-
                ## Purpose
                Without realising it, a child can broadcast where they are through live maps in chat apps, location tags on posts, photo metadata and a school uniform in the background. Deciding together which apps may know their location and who may see it, then switching off the rest, stops strangers piecing together a home address or a daily route.

                ## Milestones
                1. Every app with location permission on each child's device listed.
                2. Live location sharing on social and chat apps switched off or limited to family.
                3. Location tagging on the camera and in posting apps turned off.
                4. A family decision recorded on which parents and children can see each other's location.

                ## Notes
                Family location tracking is a trust decision as much as a safety one. Agree it openly with older children rather than adding it quietly.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No child's location is visible to anyone outside the agreed family list, checked app by app on each device."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open location permissions on each child's phone and list the apps"
                - "Switch off live map sharing in social and chat apps"
                - "Turn off location tags in the camera settings"
                - "Agree with each child who in the family can see their location"
            - name: Age-correct child accounts under a family group
              description: |-
                ## Purpose
                Many children's accounts were made with a made-up birth year so they could join early, which quietly switches off the protections platforms apply to under-16s and under-13s. Recreating or correcting accounts with real ages, linked to a parent in the platform's family group, restores those defaults and gives you the approval and recovery controls the platforms build for parents.

                ## Milestones
                1. Every account checked for the birth date it was created with.
                2. Accounts with a false age corrected or replaced, after saving anything the child wants to keep.
                3. Each child's main device account linked to a parent in the platform's family group.
                4. Purchase and download approvals routed to a parent where the platform allows it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every child account carries the child's real age and sits under a parent-managed family group with approvals switched on."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the birth date on each child's device and app accounts"
                - "Back up photos and saves before replacing any account with a false age"
                - "Add each child to the family group on their phone or console platform"
                - "Turn on ask-to-buy or download approval for children under 13"
            - name: Strong passwords and two-step sign-in for children
              description: |-
                ## Purpose
                Sharing passwords is a sign of friendship at school, and children reuse the same one everywhere, which is how most child accounts get taken over and used to message their friends. Setting each child up with unique passwords, two-step sign-in on the accounts that matter and a parent-held recovery route means a fall-out at school does not become a hacked account.

                ## Milestones
                1. Each child's main accounts given a unique passphrase they can remember.
                2. Two-step sign-in switched on for email, gaming and social accounts that support it.
                3. Recovery email and phone set to a parent on every child account.
                4. A rule agreed that passwords are shared only with parents, never friends.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every child account has a unique password, a parent as the recovery contact and two-step sign-in where offered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Teach each child to build a three-word passphrase"
                - "Replace any password used on more than one account"
                - "Switch on two-step sign-in for each child's email and gaming accounts"
                - "Set a parent's email as the recovery address on every child account"
                - "Check each child's main accounts for unknown sign-ins @recurring(monthly:24)"
            - name: Safe search and restricted modes on browsers and video apps
              description: |-
                ## Purpose
                Search engines and video platforms carry their own content settings, separate from your network filter, and they reset when a child signs out, uses a new browser or opens a different profile. Locking safe search on, setting video apps to their child or restricted modes and removing stray browsers stops the commonest route to graphic content, which is a search typed in innocence.

                ## Milestones
                1. Safe search locked on in every browser and search app a child uses.
                2. Video apps set to a child profile or restricted mode, with autoplay considered.
                3. Unused or secondary browsers removed from younger children's devices.
                4. A test search for a borderline term run on each device to confirm the setting holds.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Safe search and restricted video modes are on and tested on every device each child uses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every browser and video app on each child's devices"
                - "Lock safe search on in each browser while signed in as the child"
                - "Switch video apps to the child profile or restricted mode"
                - "Run a test search on each device to check the filter holds"
            - name: No-blame promise and trusted adults list
              description: |-
                ## Purpose
                The single biggest reason children hide online trouble is fear of losing their phone or getting into trouble themselves, which is exactly the lever groomers and blackmailers use. Making a spoken and written promise that telling you will never cost them their device, and naming two other adults they could go to, keeps the channel open when it matters most.

                ## Milestones
                1. A clear promise made to each child that reporting something will not mean losing their device.
                2. Two trusted adults outside the household named by each child and asked if they agree.
                3. The trusted adults told briefly what to do if a child comes to them.
                4. The promise repeated after any incident so the child sees it was kept.

                ## Notes
                If a child does tell you something hard, the first sentence you say decides whether they tell you next time. Thank them before asking any questions.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each child can name the no-blame promise and two trusted adults, and those adults have agreed to the role."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Tell each child in your own words that telling you will never cost them their device"
                - "Ask each child to pick two other adults they would trust"
                - "Phone those adults and explain what to do if a child comes to them"
                - "Write the promise and the names on the family ground rules page"
                - "Repeat the no-blame promise to each child @recurring(quarterly)"
            - name: Monthly online safety chat with each child
              description: |-
                ## Purpose
                Few children bring up online worries out of nowhere, but they will mention them inside a regular, low-stakes conversation that is clearly not an interrogation. A short monthly chat per child, on a walk or in the car, with the same few questions, builds the habit of talking about online life before anything goes wrong.

                ## Milestones
                1. A set of four or five open questions written that suit each child's age.
                2. A monthly slot chosen for each child, away from screens and siblings.
                3. Three months of chats held without turning any of them into a lecture.
                4. Anything raised followed up within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-to-one online safety chat happens with each child every month, with any concerns noted and followed up."
                cadence: rolling
              tasks:
                - "Write four open questions such as what was the weirdest thing you saw online"
                - "Pick a car ride or walk for each child's chat"
                - "Hold a short online safety chat with each child @recurring(monthly:12)"
                - "Note anything that needs follow-up in a private parent log"
            - name: Safety check before any new app or game
              description: |-
                ## Purpose
                A new app usually arrives because a friend has it, and the decision gets made in the moment of asking. Running every request through the same short safety checklist, covering who can contact them, what is public, whether there is live chat and how to report, turns a tense yes or no into a routine five minutes and means settings are right from the first login.

                ## Milestones
                1. A one-page checklist of safety questions for any new app or game.
                2. The checklist used on the next three requests before the app went on.
                3. Settings for each approved app set at install, not afterwards.
                4. A short list kept of apps refused and why, so the answer is consistent.

                ## Notes
                Start from the **Operational checklist** template. Independent parent review sites that rate apps for contact and content risk save a lot of reading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new app or game installed in the last three months went through the written safety checklist first."
                cadence: rolling
              tasks:
                - "Write the checklist questions on contact, visibility, live chat and reporting"
                - "Bookmark an independent parent review site for apps and games"
                - "Set privacy and chat settings with your child before the first login"
                - "Record each refused app and the reason in one shared note"
            - name: Quarterly privacy settings recheck after app updates
              description: |-
                ## Purpose
                Apps add features and reset defaults in updates, so a profile you made private in spring can have a new public map, a new messaging tab or a new discovery feed by summer. A quarterly pass through each child's accounts against the settings note you made catches the drift before strangers do.

                ## Milestones
                1. The saved settings note opened beside each account in turn.
                2. Any setting that has changed or any new feature put back to the agreed position.
                3. New accounts added since the last check brought into the note.
                4. The date of the check written on the note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child account is checked against the written settings note once a quarter, with each check dated."
                cadence: cyclic
              tasks:
                - "Open each child account beside the saved settings note @recurring(quarterly)"
                - "Reset anything a recent update changed back to the agreed setting"
                - "Add any new accounts to the settings note"
                - "Ask your child which new features they have noticed in their apps"
            - name: Friends and followers review with your child
              description: |-
                ## Purpose
                Lists of friends and followers grow quietly, and a few accounts in them are often people the child has never met, sometimes adults posing as children. Scrolling through the list together once a month and asking a simple question about each unfamiliar name teaches the child to do it themselves and removes risky contacts without a confrontation.

                ## Milestones
                1. A monthly time agreed to look through friend lists together.
                2. Every contact the child has not met in real life identified.
                3. Unknown contacts removed or blocked by the child, not by you.
                4. The child able to explain how they decide who to accept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each child's friend and follower lists are reviewed together once a month, with unknown contacts removed."
                cadence: rolling
              tasks:
                - "Agree a monthly time to look through friend lists together"
                - "Review friends and followers with each child @recurring(monthly:20)"
                - "Ask how they know each name they cannot place"
                - "Let your child remove or block the unknown accounts themselves"
            - name: Keeping up with new apps, trends and risks
              description: |-
                ## Purpose
                Online risks change faster than any parent can track on their own: a new challenge, a new anonymous messaging app, a new scam aimed at gamers. Subscribing to one or two reliable parent alert sources and spending twenty minutes a month on them keeps you informed without the panic of viral warnings that turn out to be hoaxes.

                ## Milestones
                1. One or two reputable online safety alert sources chosen, such as a national child protection charity or the school's newsletter.
                2. A monthly slot set to read them.
                3. A habit of checking any viral warning against those sources before sharing it.
                4. Anything relevant passed on to the other parent or carers in a short message.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You read the chosen safety alert sources monthly and check viral warnings against them before acting or sharing."
                cadence: rolling
              tasks:
                - "Subscribe to one child protection charity's parent updates"
                - "Read the latest online safety alerts for twenty minutes @recurring(monthly:5)"
                - "Check any viral warning against your sources before forwarding it"
                - "Send the other parent a two-line summary of anything relevant"
            - name: Weekly parental control alerts triage
              description: |-
                ## Purpose
                Control tools generate blocked-site alerts, new-contact notices and download requests that pile up unread until they are useless. A fixed ten minutes once a week to clear them, deciding what is noise, what needs a word and what needs action, keeps the tool working for you instead of becoming one more ignored inbox.

                ## Milestones
                1. All parental control and family group notifications routed to one parent's phone.
                2. A weekly ten-minute slot set to clear them.
                3. A simple rule written for which alerts need a conversation.
                4. Alert noise reduced by switching off notifications that never matter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Parental control alerts are cleared every week and none sit unread for more than seven days."
                cadence: rolling
              tasks:
                - "Route every family group and control tool alert to one parent"
                - "Clear the week's parental control alerts @recurring(weekly:sun)"
                - "Write a rule for which alerts trigger a chat with the child"
                - "Turn off alert types that have never needed action"
            - name: Agreed device spot checks for younger children
              description: |-
                ## Purpose
                For children under about 12, an open-device rule where a parent can look at messages and apps, agreed in advance and done openly, is a normal safety layer rather than spying. Making the checks predictable, brief and done together keeps them protective and keeps trust, and the agreement makes clear when they will stop.

                ## Milestones
                1. An agreement made with each younger child that devices can be looked at with them present.
                2. The age or stage at which spot checks will end written down.
                3. Spot checks done together roughly every couple of weeks without drama.
                4. Any concern found handled under the no-blame promise.

                ## Notes
                Checking secretly tends to backfire: children learn to hide things, and the first big discovery becomes about your snooping instead of their safety.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written spot-check agreement with each younger child exists, with an end age, and checks are done together."
                cadence: rolling
              tasks:
                - "Explain to each younger child why you look at devices together"
                - "Write the age at which spot checks will stop"
                - "Sit with a younger child and look through recent chats together @recurring(weekly:wed)"
                - "Thank your child after each check, whatever you find"
            - name: Family password manager and account recovery file
              description: |-
                ## Purpose
                When a child's account is hacked or locked, recovery depends on knowing the original email, the birth date used and the backup codes, which nobody can find at the moment they are needed. A family password manager with a shared vault for children's accounts, plus a recovery file, makes lock-outs a ten-minute fix rather than a lost account full of photos.

                ## Milestones
                1. A family password manager chosen with a shared vault parents can open.
                2. Every child account's username, recovery email and backup codes stored in it.
                3. Older children given their own vault while parents keep recovery details.
                4. The recovery file checked once a year for closed or new accounts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every child account's login and recovery details are stored in a shared parent vault, reviewed yearly."
                cadence: rolling
              tasks:
                - "Pick a password manager that supports a shared family vault"
                - "Add each child account with its recovery email and backup codes"
                - "Set up an own vault for any child over about twelve"
                - "Review the vault for closed and new accounts @recurring(yearly)"
            - name: Online safety plan for each school year
              description: |-
                ## Purpose
                Each new school year brings new class group chats, a jump in independence and often a new device, and the online plan that suited last year quietly stops fitting. A set point each September, or whenever your school year starts, to update rules, settings and the level of oversight for each child keeps protection matched to age.

                ## Milestones
                1. Each child's current rules, settings and oversight level written in one line each.
                2. One protection loosened for each child where they have shown they can manage it.
                3. Any new risk for the coming year, such as a new phone or new school, planned for.
                4. The updated plan shared with the other parent and any regular carers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated online safety plan for each child is updated at the start of every school year and shared with carers."
                cadence: cyclic
              tasks:
                - "Write each child's current rules and oversight level in one line"
                - "Update each child's online safety plan for the new school year @recurring(yearly)"
                - "Choose one protection to loosen for each child this year"
                - "Send the updated plan to the other parent and regular carers"
            - name: Understanding how online grooming works
              description: |-
                ## Purpose
                Grooming rarely looks like a stranger asking for photos on day one; it looks like a friendly older gamer, lots of compliments, gifts of game currency, a move to a private app and a request for secrecy. Learning the usual stages lets you recognise the pattern in a child's description of a new friend and explain it to them without scaring them away from all online contact.

                ## Milestones
                1. The common stages of online grooming read about from a child protection charity source.
                2. A short list of warning signs written for your own reference.
                3. An age-appropriate explanation practised for each child.
                4. Each child able to name two signs that an online friend is not safe.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can list the usual stages of grooming and each child can name two warning signs of an unsafe online friend."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a child protection charity's guide to online grooming"
                - "Write your own list of six warning signs"
                - "Practise a two-minute explanation suited to each child's age"
                - "Ask each child to tell you two signs an online friend is not safe"
            - name: Teaching children to spot scams and phishing
              description: |-
                ## Purpose
                Children are targeted by scams built for them: free game currency generators, fake giveaway accounts, account verification links and sellers of cheap skins who vanish after payment. Teaching three habits, never typing a password after clicking a link, never paying outside the official store and asking before claiming anything free, protects their accounts and your card.

                ## Milestones
                1. A handful of real scam examples aimed at children collected to show them.
                2. Three scam rules agreed and added to the family ground rules.
                3. Each child able to pick out the fake from two example messages.
                4. Saved card details removed from any device or account a child uses unsupervised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child correctly spots a scam in two example messages, and no child device holds saved card details."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Collect three real examples of scams aimed at young gamers"
                - "Show each child the examples and ask what gives them away"
                - "Agree three scam rules and add them to the ground rules"
                - "Remove saved card details from every device a child uses alone"
            - name: Sextortion awareness for parents and teenagers
              description: |-
                ## Purpose
                Financially motivated sextortion, where someone posing as a peer gets an intimate image and then demands money, now targets teenage boys especially, and the pressure is designed to be overwhelming within hours. Knowing the script, and making sure your teenager knows the three things to do (stop replying, do not pay, tell an adult), can turn a crisis into a contained incident.

                ## Milestones
                1. You have read a reputable explanation of how sextortion scams run.
                2. Each teenager told plainly that it happens, that it is not their fault and that you will help, not punish.
                3. The three steps agreed: stop replying, do not pay, tell an adult and keep the evidence.
                4. The relevant police reporting route and image takedown service noted where you can find them fast.

                ## Notes
                This is the conversation parents most often put off. A short, matter-of-fact talk in the car works better than a sit-down, and saying it will not make you angry matters more than any detail.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each teenager has been told the three steps for sextortion, and the reporting and takedown routes are saved on a parent's phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a child protection charity's guide to sextortion"
                - "Save the police reporting route and an image takedown service on your phone"
                - "Tell each teenager the three steps and that you will help, not punish"
                - "Check a week later that they can repeat the steps back"
            - name: Talking about pornography before they find it
              description: |-
                ## Purpose
                Many children first see pornography by accident, often before 12 and usually on someone else's phone, and what they see shapes ideas about bodies, consent and relationships. Having a calm first conversation earlier than feels comfortable, and making it clear they can talk to you about what they saw, means you are part of the story rather than the last to hear.

                ## Milestones
                1. An age-appropriate first conversation planned for each child from about eight or nine.
                2. The first conversation held, covering what to do if they see something upsetting.
                3. A follow-up held with older children on consent, real relationships and how porn differs.
                4. A trusted resource for children their age shared with them.

                ## Notes
                Keep this about online content and what to do when they see it. Wider puberty and relationships talks have their own place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child of eight or over has had a first conversation about online pornography and knows they can raise it without trouble."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a parent guide on talking to children about online pornography"
                - "Plan the words for a first short conversation with each child"
                - "Hold the first conversation in a relaxed setting"
                - "Share an age-appropriate resource your child can read alone"
            - name: Spotting fakes, misinformation and AI images
              description: |-
                ## Purpose
                Every day children meet edited videos, AI-generated images and confident false claims, sometimes used to bully a classmate with a fake picture. Teaching a few quick checks, such as who posted it, where else it appears and whether it is built to make you angry, gives them a defence that works on any app and helps them question what they see before sharing it.

                ## Milestones
                1. A short set of checks agreed for anything surprising seen online.
                2. Two or three family sessions held looking at real and fake examples together.
                3. Each child able to use a reverse image search with help.
                4. A rule agreed never to share or make fake images of real people.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child can apply three checks to a suspicious post, and a no-fakes-of-real-people rule is in the family ground rules."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose three quick checks your children can remember"
                - "Find a few real and fake images to look at together"
                - "Show each child how a reverse image search works"
                - "Add a rule about never making fake images of real people"
            - name: Digital footprint lessons for children
              description: |-
                ## Purpose
                Most children post with the next five minutes in mind, not the university admissions tutor or employer who may search their name in ten years. Showing them what a search of their own name finds, and talking through what stays forever even on disappearing apps, builds the habit of the pause before posting.

                ## Milestones
                1. A search done together on each older child's name and usernames.
                2. Anything public they would not want a teacher to see identified and removed.
                3. The idea that screenshots outlast disappearing messages talked through with real examples.
                4. A simple test agreed, such as would I be fine with my grandparent seeing this.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child over ten has searched their own name with you and removed anything they would not want a teacher to see."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Search each older child's name and usernames together"
                - "Remove or privatise any public post they would rather hide"
                - "Explain why screenshots outlast disappearing messages"
                - "Agree a one-line test to use before posting anything"
            - name: Reporting and blocking tools on each platform
              description: |-
                ## Purpose
                When something goes wrong, children and parents often do not know where the report button is, whether blocking alerts the other person or how to save evidence first. Learning the report, block, mute and restrict tools on each app your children use, and having your child show them back to you, means the first response is quick and calm.

                ## Milestones
                1. The report, block and mute tools found on every app from the audit.
                2. Each child has shown you how to block and report on their main apps.
                3. The difference between blocking, muting and restricting understood for each app.
                4. A rule agreed to screenshot before blocking when something is serious.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child can demonstrate blocking and reporting on their main apps, and the screenshot-first rule is agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the report and block options on each app from the audit"
                - "Ask each child to show you how they would block and report"
                - "Check whether blocking notifies the other person on each app"
                - "Agree to screenshot evidence before blocking anything serious"
            - name: In-game chat, voice and livestream risks
              description: |-
                ## Purpose
                Popular games put children in voice chat with adult strangers, let anyone send friend requests and gift in-game currency, and livestreams add live comments from viewers you cannot see. Understanding how chat, gifting and streaming work in the specific games your children play lets you switch off the risky parts and keep the fun ones.

                ## Milestones
                1. The chat, voice, friend request and gifting settings understood for each game your children play.
                2. Voice chat with strangers switched off or limited to friends for younger children.
                3. Gifting and trading from unknown players blocked where possible.
                4. Each child knows that gifts from online strangers are a warning sign.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every game each child plays has chat, voice and gifting set to the agreed level, checked by playing a session together."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Play twenty minutes of each child's main game with them"
                - "Find the chat, voice and friend request settings in each game"
                - "Limit voice chat to friends for younger children"
                - "Explain why gifts from online strangers are a warning sign"
                - "Play a session of your child's current favourite game with them @recurring(monthly:14)"
            - name: AI chatbots and companion apps for children
              description: |-
                ## Purpose
                Chatbots are built into search, messaging and homework apps, and companion apps that play a friend or partner are popular with lonely teenagers, sometimes with weak age checks and adult content. Knowing which ones your children use, what the platforms allow and how to talk about them helps you set sensible limits and keep the chatbot from becoming the confidant you never hear about.

                ## Milestones
                1. The chatbots and AI features your children can reach identified.
                2. Companion or role-play apps checked for age limits and content settings.
                3. A family rule agreed about what personal details never go into a chatbot.
                4. A conversation held about why a chatbot is not a substitute for a real person in a crisis.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child's access to chatbots and companion apps is known and set, and a no-personal-details rule is agreed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask each child which AI chat tools they have tried"
                - "Check the age limits and content settings of any companion app"
                - "Agree what personal details never go into a chatbot"
                - "Talk about who to turn to instead when they feel low"
            - name: Sharenting audit of photos you post
              description: |-
                ## Purpose
                Parents create much of a child's online footprint before the child can object, and public photos with school uniforms, house numbers or full names can be scraped, searched or misused. Going through what you and close family have posted, tightening audiences and asking older children's permission sets a standard you can then ask grandparents and friends to follow.

                ## Milestones
                1. Your public posts of the children found and listed.
                2. Posts showing uniforms, home exteriors, full names or birth dates removed or made private.
                3. A family rule agreed that children over about eight are asked before a photo goes up.
                4. Close relatives told politely about the new rule.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No public post by a parent shows a child's school, home or full name, and an ask-first rule is shared with relatives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scroll your public profiles for photos of the children"
                - "Remove or privatise posts showing uniforms, house numbers or full names"
                - "Ask each older child which existing photos they want taken down"
                - "Message close relatives about the ask-first rule"
            - name: Photo consent for school, clubs and parties
              description: |-
                ## Purpose
                Schools, sports clubs and party hosts all ask for photo consent, often on a rushed form at the start of term, and a yes can mean pictures on a public website or social media with your child's name. Deciding once what you are happy with, and keeping the answer consistent across every form, avoids surprises and protects children with particular safety needs.

                ## Milestones
                1. Each school, club and regular activity's photo consent choices checked.
                2. A family position recorded: group shots, named photos, public web and social media.
                3. Consent forms updated to match that position.
                4. A short line ready to send to party hosts asking them not to post your child publicly.

                ## Notes
                Families with a child in care, an adopted child or a child at risk from a former partner should treat this as essential, not optional.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every school and club holds photo consent that matches one written family position."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school office what your current photo consent covers"
                - "Write your family position on group, named and public photos"
                - "Update consent forms at each club and activity"
                - "Draft a polite line for party hosts about posting photos"
            - name: Deciding how much monitoring each child needs
              description: |-
                ## Purpose
                Monitoring ranges from nothing, through activity reports and keyword alerts, to reading every message, and the right level depends on age, history and how much the child is told. Making a deliberate, written choice per child, rather than installing the strongest tool by default, protects younger children and preserves an older child's trust.

                ## Milestones
                1. The monitoring options available on your devices and tools listed from lightest to heaviest.
                2. A level chosen for each child with the reasons written down.
                3. Each child told what is monitored and why.
                4. A review date set for stepping monitoring down.

                ## Notes
                Covert reading of a teenager's messages is often discovered and can damage trust for years. If you think it is needed, that is usually a sign to get outside advice.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written monitoring level exists for each child, each child has been told it, and a review date is set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the monitoring options your devices and tools offer"
                - "Choose a level for each child and write down why"
                - "Tell each child what is monitored and what is not"
                - "Set a date to review whether to step monitoring down"
            - name: Smart speakers, cameras and connected toys
              description: |-
                ## Purpose
                Baby monitors, home cameras, smart speakers and connected toys collect children's voices and images and have been hacked through default passwords. Changing default logins, updating firmware and checking what each device records and shares keeps the home network from becoming a window into the children's bedrooms.

                ## Milestones
                1. Every connected device in the house that sees or hears the children listed.
                2. Default passwords changed and firmware updated on each.
                3. Voice recording history and sharing settings reviewed and limited.
                4. Any device without security updates retired or kept off the network.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every camera, speaker and connected toy has a changed password, current firmware and limited recording settings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every device at home with a camera or microphone"
                - "Change the default password on each device"
                - "Update firmware and review voice recording history settings"
                - "Retire any device that no longer gets security updates"
                - "Check cameras and speakers for firmware updates @recurring(quarterly)"
            - name: In-app purchase locks and loot box limits
              description: |-
                ## Purpose
                Games are designed to sell, and loot boxes, battle passes and gifting can drain a card or pull a child into gambling-like spending without any adult noticing. Requiring approval for every purchase, using prepaid gift cards instead of saved cards and talking about how loot boxes work protects money and helps children recognise the design.

                ## Milestones
                1. Purchase approval switched on for every child account that allows it.
                2. Saved bank cards replaced with prepaid credit or a capped allowance.
                3. Loot boxes and random-reward items explained to each gamer in the family.
                4. A monthly game spending limit agreed per child.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No child account can spend without approval or beyond an agreed monthly limit, and each gamer can explain what a loot box is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Switch on purchase approval on every console and phone account"
                - "Replace saved cards with prepaid gift cards"
                - "Explain how loot boxes work using a game your child plays"
                - "Agree a monthly game spending limit with each child"
                - "Check each child's game spending against the limit @recurring(monthly:28)"
            - name: Group chat rules for class and friend chats
              description: |-
                ## Purpose
                Class group chats can have 30 or more members, include people nobody quite knows, and are where exclusion, forwarded images and pile-ons happen fastest. Agreeing a few rules, such as leaving chats with unknown members, never forwarding images of others and telling you if a chat turns nasty, prepares a child for the first big group they are added to.

                ## Milestones
                1. Each child's current group chats listed with roughly how many members.
                2. Three or four group chat rules agreed and added to the family ground rules.
                3. Each child knows how to leave a group and how to turn off being added by anyone.
                4. Group invite settings changed so only contacts can add them.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Group invite settings are contacts-only on each child's phone and the group chat rules are in the family ground rules."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each child which group chats they are in and how big they are"
                - "Agree three rules for group chats"
                - "Change group invite settings to contacts only"
                - "Show each child how to leave a group quietly"
            - name: Posting videos and livestreaming decision
              description: |-
                ## Purpose
                Wanting to post dance videos, gaming clips or livestreams is common from about nine, and public videos of children attract comments, followers and offers that parents never see. Deciding together whether posting is allowed, to whom and under what conditions, turns a recurring argument into a clear agreement with conditions your child can earn.

                ## Milestones
                1. The platforms your child wants to post on checked for minimum age and live features.
                2. A decision made on public, friends-only or no posting, with reasons.
                3. Conditions agreed, such as no uniform, no home exterior, comments off, no live without a parent nearby.
                4. A date set to revisit the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on video posting and livestreaming exists for each child who asks, with conditions and a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the minimum age and live features of the platforms your child wants"
                - "Ask your child what they want to post and who for"
                - "Agree conditions such as comments off and no school uniform"
                - "Write the decision and a date to revisit it"
            - name: Family internet safety day activity
              description: |-
                ## Purpose
                Many countries mark an annual safer internet day each February, and schools often run lessons on it, which gives a natural moment to do something online-safety related at home without it feeling like a lecture. A short family activity, such as a quiz, a settings race or children teaching parents one thing, keeps the topic positive and annual.

                ## Milestones
                1. The date of this year's safer internet day noted.
                2. A 30 to 45 minute family activity chosen and planned.
                3. The activity held, with each child teaching the adults one thing.
                4. One new rule or setting adopted as a result.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family online safety activity is held on or near safer internet day each year, with one change adopted from it."
                cadence: cyclic
              tasks:
                - "Look up the date of this year's safer internet day"
                - "Plan a short online safety activity for the family @recurring(yearly)"
                - "Ask each child to prepare one thing to teach the adults"
                - "Agree one new rule or setting after the activity"
            - name: School online safety evening and questions
              description: |-
                ## Purpose
                Schools teach online safety and filter their own networks and devices, but parents rarely know what is covered or what the school does when an incident happens off school premises. Attending the parent session, or asking for a short meeting if there is none, lines up home and school messages and tells you who to contact if something happens.

                ## Milestones
                1. The school's online safety policy and staff contact found.
                2. The next parent session attended, or a short meeting requested.
                3. Answers recorded on what the school teaches, filters and does about off-site incidents.
                4. Home rules adjusted to match the school's language where useful.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "You hold written answers from the school on teaching, filtering and off-site incidents, with a named staff contact."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the school's online safety policy on its website"
                - "Write three questions about teaching, filtering and off-site incidents"
                - "Attend the parent session or request a short meeting"
                - "Save the named staff contact for online safety incidents"
            - name: Holiday and travel online safety
              description: |-
                ## Purpose
                Holidays mean new devices, hotel and cafe wifi, kids' clubs with new friends, and posts that announce an empty house. A short pre-trip routine, checking filters on travel data, agreeing what gets posted and when, and briefing children on holiday friendships, keeps the usual protections in place away from home.

                ## Milestones
                1. Filters and restrictions confirmed on any travel SIM or eSIM.
                2. A family rule agreed to post holiday photos after you return.
                3. Children briefed on sharing details with holiday friends.
                4. Devices set to avoid automatically joining open wifi networks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each family trip, travel data filters are checked and a post-after-return rule is agreed."
                cadence: cyclic
              tasks:
                - "Check that any travel SIM has adult content filters on"
                - "Agree that holiday photos get posted after you are home"
                - "Turn off automatic joining of open wifi on children's devices"
                - "Talk with the children about what to share with holiday friends"
            - name: Sleepovers and friends' houses online rules
              description: |-
                ## Purpose
                A lot of first exposure to unsuitable content or risky apps happens at a friend's house, late at night, on an older sibling's device or an unfiltered network. A short conversation before sleepovers and visits, and a friendly word with the hosting parent, covers the gap your home settings cannot.

                ## Milestones
                1. A two-minute pre-sleepover talk agreed for every visit.
                2. A friendly message ready for hosting parents about devices and films.
                3. A code word or text agreed so a child can ask to be collected without explaining.
                4. Each child knows what to do if friends show them something upsetting.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each sleepover a short online safety talk happens and a collection code word is in place."
                cadence: rolling
              tasks:
                - "Agree a code word your child can text to be collected"
                - "Write a friendly message for hosting parents about devices"
                - "Have a two-minute talk before each sleepover or visit"
                - "Ask afterwards how the evening went, without grilling"
            - name: Starting secondary school online safety reset
              description: |-
                ## Purpose
                The move to secondary school often coincides with a first smartphone, huge new group chats and pressure to join platforms early, and it is the peak age for first contact from strangers. Resetting settings, rules and oversight in the summer before the move, with your child involved, means they start with protections in place instead of catching up after a problem.

                ## Milestones
                1. Privacy, location and contact settings reviewed on every account before term starts.
                2. Group chat and photo rules refreshed for a bigger, older peer group.
                3. Your child knows which staff member to go to at the new school.
                4. A check-in held six weeks into term about online life at the new school.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every account is reviewed before secondary school starts, and a six-week check-in about online life is held."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book an evening in the summer holidays for the settings review"
                - "Review privacy, location and contact settings with your child"
                - "Refresh the group chat and photo rules for the new school"
                - "Hold a check-in six weeks into the first term"
            - name: Online safety for under-fives on shared devices
              description: |-
                ## Purpose
                Toddlers and preschoolers use a parent's phone or a family tablet, swipe out of a children's app in seconds and land in open video platforms, app stores or the parent's messages. Setting up a locked-down child profile, guided access or app pinning, and using curated apps only, keeps the youngest within a safe space without constant hovering.

                ## Milestones
                1. A child profile or kids' mode set up on the shared tablet.
                2. Guided access or app pinning learned and used on parents' phones.
                3. Only curated children's apps and video services available to under-fives.
                4. App store purchases and downloads locked behind a parent password.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Under-fives can only reach curated apps in a locked child profile or pinned app, with downloads locked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a child profile or kids' mode on the family tablet"
                - "Learn how to pin a single app on your own phone"
                - "Remove open video apps from devices toddlers use"
                - "Lock app store downloads behind a parent password"
            - name: First accounts for eight to twelve year olds
              description: |-
                ## Purpose
                Between eight and twelve most children open their first messaging, gaming and video accounts, often before the platform's minimum age and usually because friends have them. Supervising each first account, choosing child-designed versions where they exist and setting every privacy control from day one gives them a protected starter space to practise in.

                ## Milestones
                1. Each first account opened together, with the real age and a parent's recovery email.
                2. Child-specific versions of apps or games used where available.
                3. Privacy, contact and chat settings set before first use.
                4. A three-month review agreed for each new account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every first account for a child aged eight to twelve was opened with a parent, with real age and settings in place from day one."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether a child-specific version of the requested app exists"
                - "Open the account together using the real birth date"
                - "Set privacy and chat options before the first message is sent"
                - "Diary a three-month review of each new account"
            - name: Teenagers' online privacy and stepping back
              description: |-
                ## Purpose
                Teenagers need growing privacy to develop judgement, and heavy-handed controls at 15 mostly teach them to use a second account. Shifting from controls to coaching, with agreed safety lines that stay non-negotiable and a clear exit route if something goes wrong, keeps you in the loop for the risks that really matter.

                ## Milestones
                1. Controls and monitoring that will be removed listed with dates or conditions.
                2. Three non-negotiable safety lines agreed, such as no meeting online contacts alone.
                3. Your teenager trusted to manage their own privacy settings with an occasional check-in.
                4. The no-blame promise repeated in teenage terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan names which controls end and when, plus three non-negotiable safety lines your teenager has agreed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List each control you plan to remove and when"
                - "Agree three non-negotiable safety lines with your teenager"
                - "Hand over privacy settings management with an occasional check-in"
                - "Repeat the no-blame promise in words that suit a teenager"
            - name: Online safety for a child with additional needs
              description: |-
                ## Purpose
                Children with learning disabilities, autism or social communication difficulties can be more trusting online, take messages literally and find it harder to spot manipulation, and they are disproportionately targeted. Adapting rules into concrete, visual steps and using tighter contact settings for longer gives them access to the friendships online can offer with extra safeguards.

                ## Milestones
                1. Family rules rewritten as concrete steps or a visual card.
                2. Contact limited to an approved list of known people on every account.
                3. Social stories or role-play used to practise what to do when a stranger messages.
                4. School or specialist staff consulted so home and school approaches match.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A visual online safety card exists, and every account is limited to an approved contact list."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Turn the family rules into a visual card with pictures"
                - "Limit every account to an approved list of known contacts"
                - "Role-play what to do when a stranger sends a message"
                - "Ask the school how they teach online safety to your child"
            - name: Helping a child after seeing something upsetting
              description: |-
                ## Purpose
                Violent clips, self-harm content, cruel memes and graphic news reach children through feeds and group chats, and the worry often shows as sleep problems or clinginess rather than words. Knowing how to respond calmly, what to ask, and when to bring in school or a health professional helps a child process what they saw and keeps them telling you next time.

                ## Milestones
                1. A calm first response planned: listen, thank, reassure, do not interrogate.
                2. Steps ready for reporting the content and removing it from the child's feed.
                3. Signs that a child needs more help written down.
                4. A professional contact noted, such as the school or your family doctor, for when worries persist.

                ## Notes
                If a child talks about self-harm or suicide after seeing content, contact your doctor or an urgent mental health line the same day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written calm-response plan exists, with reporting steps, warning signs and a professional contact."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a charity guide on helping children with upsetting online content"
                - "Write the first three things you will say if it happens"
                - "Learn how to reset or retrain a child's video and social feed"
                - "Save the school and doctor contacts in one place"
            - name: Grooming concern response plan
              description: |-
                ## Purpose
                If you find messages that suggest an adult is grooming your child, the instinct is to confront the person or delete everything, which can warn them and destroy the evidence police need. Having a written plan for the first hour, covering preserving evidence, not confronting, reporting to police and the platform, and supporting your child, means you act well under shock.

                ## Milestones
                1. A one-page first-hour plan written and stored where both parents can find it.
                2. The national police and child protection reporting routes noted.
                3. Evidence steps listed: screenshots with usernames and dates, no deleting, device not wiped.
                4. A plan for what you will say to your child so they do not feel blamed.

                ## Notes
                Start from the **Operational checklist** template. If a child is in immediate danger or a meeting has been arranged, call the emergency number first.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A one-page grooming response plan with evidence steps and reporting contacts is saved where both parents can reach it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your country's police and child protection online reporting routes"
                - "Write the evidence steps for screenshots, usernames and dates"
                - "Write what you will say to your child first"
                - "Save the plan in a place both parents can open quickly"
            - name: Responding when a nude image of your child is shared
              description: |-
                ## Purpose
                Images shared between teenagers spread fast, and both the child in the picture and those forwarding it can be at legal and emotional risk. Knowing in advance that you will stay calm, will not share or forward the image yourself, and will use the platform, school, police and hash-based takedown services for under-18s means the response limits harm rather than adding to it.

                ## Milestones
                1. You know not to view, save or forward the image, even as evidence, and to describe it instead.
                2. Takedown routes noted, such as a service for under-18s that hashes images to stop re-upload.
                3. The school's safeguarding lead and the police non-emergency route saved.
                4. A plan for supporting your child, including counselling options, written down.

                ## Notes
                Legal rules on images of under-18s are strict and vary by country. Let the police or the school safeguarding lead handle evidence.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written response plan names takedown services, the school safeguarding lead and police contacts, plus support for your child."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find an image takedown service for under-18s in your country"
                - "Save the school safeguarding lead's contact details"
                - "Write the rule never to view, save or forward the image"
                - "List counselling options to offer your child afterwards"
            - name: Online harassment evidence and platform reporting
              description: |-
                ## Purpose
                When a child is targeted by nasty messages, fake accounts or posts on a platform, the report succeeds or fails on evidence: usernames, dates, links and screenshots that platforms and police can act on. Keeping a simple evidence log, using each platform's escalation routes and knowing when the threshold for police is met turns helpless watching into steady action.

                ## Milestones
                1. An evidence log set up with date, platform, username, link and screenshot columns.
                2. Each incident reported through the platform's own form, with reference numbers kept.
                3. Escalation routes noted for when a platform does not respond.
                4. Threats, hate content or sexual content identified as things to report to police.

                ## Notes
                Work with the school too if classmates are involved; this project covers the online evidence and platform side.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An evidence log with platform reference numbers exists for any harassment, with escalation routes noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create an evidence log with date, platform, username, link and screenshot"
                - "Report each incident through the platform's own form"
                - "Record every reference number the platform gives you"
                - "Note the escalation route for a platform that does not respond"
            - name: Recovering a hacked or impersonated child account
              description: |-
                ## Purpose
                Hacked gaming and social accounts are often used to send scams or abuse to a child's friends, and fake accounts in a child's name can be set up to bully them. Knowing the recovery and impersonation reporting routes for each main platform, and warning friends quickly, limits the damage to hours rather than weeks.

                ## Milestones
                1. The account recovery page for each main platform bookmarked.
                2. Impersonation reporting routes noted for each social platform.
                3. A short message ready for warning friends that the account was hacked.
                4. Linked email accounts and saved payment details checked after any recovery.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Recovery and impersonation reporting routes for each main platform are bookmarked and a friends warning message is drafted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Bookmark the account recovery page for each main platform"
                - "Note how to report an impersonation account on each social app"
                - "Ask the agent to draft a short warning message for friends"
                - "Check linked email and payment details after any recovery"
            - name: Removing a child's personal details from the web
              description: |-
                ## Purpose
                Your children's names, schools, photos and sports results end up on club websites, local news, old blogs and data broker sites, and a few searches can join them into an address and a routine. Searching thoroughly once, then sending removal requests to sites and search engines, shrinks what a stranger could find before your child is old enough to manage it.

                ## Milestones
                1. A search done on each child's full name with school, town and club names.
                2. Every page found listed with what it shows.
                3. Removal or edit requests sent to site owners, clubs and search engines.
                4. A repeat search done each year to confirm removals and catch new pages.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Removal requests have been sent for every page exposing a child's school or address, and the search is repeated yearly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search each child's full name with school, town and club names"
                - "List each page found and what it reveals"
                - "Send removal requests to site owners and clubs"
                - "Use the search engines' removal forms for pages about minors"
                - "Repeat the search on each child's name @recurring(yearly)"
            - name: Yearly whole-family online safety review
              description: |-
                ## Purpose
                Over a year children change apps, ages and friendship groups, and the protections set up in a burst of worry can drift into irrelevance or become too tight. A yearly review of the audit, settings, rules, monitoring levels and incident plans, done as a family where children are old enough, keeps the set-up current and gives children a say in loosening it.

                ## Milestones
                1. The account audit updated for each child.
                2. Settings, monitoring levels and ground rules each kept, changed or dropped.
                3. Incident plans and reporting contacts checked as still accurate.
                4. A short family meeting held to share the changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly review updates the audit, rules, monitoring levels and incident plans, shared at a family meeting."
                cadence: cyclic
              tasks:
                - "Update the account audit for each child"
                - "Hold the yearly family online safety review @recurring(yearly)"
                - "Check that reporting contacts in the incident plans still work"
                - "Share the changes at a short family meeting"
---

# Children's Online Safety

This area is for parents who want their children to enjoy the internet without being found, tricked or hurt by the people and content on it. It starts with the foundations (an audit of who can reach each child, filters, privacy settings, location sharing, age-correct accounts and a no-blame promise to tell you), then the routines that keep those settings honest, the knowledge you and your children need about grooming, scams, sextortion, pornography and fakes, the decisions about photos, monitoring and connected devices, the dated moments, the variants for each age, and finally the incident plans for when something serious happens.

What repeats is a monthly online safety chat, a monthly look at friends and followers, a weekly glance at control alerts, a quarterly privacy settings recheck after app updates and a yearly review of the whole set-up. The Risk register, Operational checklist and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
