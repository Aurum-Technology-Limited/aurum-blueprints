---
id: relationships.marriage-proposal-planning
name: Marriage Proposal Planning
description: "A proposal planned with care: readiness checked, a ring chosen and paid for, blessings asked, the place, words and day rehearsed, and family and friends told in the right order."
category: personal
version: 1.0.0
tags: [relationships, marriage-proposal-planning, everyone, proposal, engagement-ring, family-blessing, engagement, surprise-planning]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - purchase-decision
    - vendor
    - trip
    - risk-register
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Marriage Proposal Planning
          description: "Planning a meaningful proposal, from ring shopping and family blessings to the moment itself and telling friends afterwards."
          projects:
            - name: Checking you are both ready to marry
              description: |-
                ## Purpose
                A surprise proposal should only ever surprise someone about the when and the how, never the whether. Before spending anything, make sure you have talked openly about marriage, children, where you want to live and the timing, so that the question you ask is one your partner has already said they would welcome. Couples who skip this risk a public moment that goes badly for both of them.

                ## Milestones
                1. At least one unhurried conversation held about whether you both want to marry, and roughly when.
                2. Any deal-breakers raised, such as children, faith or where to live, and an honest answer heard on each.
                3. A shared sense of the timeframe, for example within the next year, without the exact date given away.
                4. Your own decision to go ahead written down privately, with the reasons.

                ## Notes
                This is a readiness check, not the full premarital conversation about money, roles and faith. If big disagreements surface, pause the proposal plan rather than hoping the ring will settle them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written private note confirming you have both said you want to marry, the rough timeframe you share, and your decision to proceed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a calm evening this week to talk about marriage in general terms"
                - "Ask your partner how they picture the next two or three years together"
                - "Listen for any hesitation about timing and note it honestly afterwards"
                - "Write a short private note on whether you are ready to plan the proposal"
            - name: Proposal style brief for your partner
              description: |-
                ## Purpose
                Some people dream of a crowd and a photographer, while others would be mortified by anything that is not private. Writing a one-page brief about how your partner, not you, would most like to be asked keeps every later choice of place, ring and audience pointed at the right person. Base it on things they have actually said and reacted to, not on what looks good online.

                ## Milestones
                1. A one-page brief describing public or private, planned or spontaneous, and simple or elaborate.
                2. Three or more pieces of evidence for each preference, such as comments about friends' proposals.
                3. A clear list of things to avoid, for example a crowd, a stadium screen or a family audience.
                4. The brief checked against every major decision before it is booked.

                ## Notes
                If you cannot tell whether your partner would want family present, ask a trusted friend of theirs rather than guessing.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page written brief of your partner's proposal preferences, each backed by at least one remembered comment or reaction."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every comment your partner has made about other people's proposals"
                - "Decide where they would sit between private and public on a scale of one to five"
                - "Write the things they would hate to have happen during a proposal"
                - "Ask the agent to turn your notes into a one-page proposal style brief"
            - name: Total proposal budget, ring and moment together
              description: |-
                ## Purpose
                Ring prices take most of the attention, but the dinner, travel, photographer, flowers and a celebration afterwards can add a third again. Setting one figure for the whole thing, then splitting it between the ring and the moment, stops the ring swallowing the budget and avoids a proposal that starts the marriage in debt.

                ## Milestones
                1. One total figure agreed with yourself that does not require borrowing you would regret.
                2. The total split into ring, moment, celebration and a contingency of around a tenth.
                3. Any savings already available counted and the shortfall known.
                4. The split written into the planning notes and dated.

                ## Notes
                Rules of thumb about months of salary were invented by advertisers. The right figure is the one your finances can carry comfortably.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written proposal budget with a single total and separate figures for ring, moment, celebration and contingency."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check how much you could set aside without touching emergency savings"
                - "Price a rough version of the moment you have in mind, including travel"
                - "Split the total between ring, moment, celebration and contingency"
                - "Save the budget where you keep the rest of the proposal plans"
            - name: Ring fund with a monthly transfer
              description: |-
                ## Purpose
                Buying a ring from savings rather than credit means the engagement starts without a repayment hanging over it. A separate savings pot with an automatic payday transfer turns the ring figure from your budget into a date when the money will be there, which in turn tells you the earliest sensible month to propose.

                ## Milestones
                1. A separate savings space opened, ideally one your partner cannot see in a shared banking app.
                2. A monthly transfer amount set that reaches the ring figure by a target month.
                3. The first transfer made.
                4. A target month for having the full amount written in the timeline.

                ## Notes
                Start from the **Savings goal** template. If you share accounts, a pot named for something dull keeps the secret better than one called Ring.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separate ring fund exists with an automatic monthly transfer and a written month by which it reaches the ring budget."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open a savings pot your partner will not notice in shared banking"
                - "Divide the ring figure by the months you have to find the monthly amount"
                - "Set up the automatic transfer from your main account"
                - "Move the ring fund transfer across on payday @recurring(monthly:25)"
            - name: Proposal timeline worked back from the date
              description: |-
                ## Purpose
                Custom rings can take eight to twelve weeks, popular restaurants book out a month ahead and a family blessing needs a visit you can arrange without suspicion. Working backward from a target date shows which steps must start now and which can wait, so nothing is rushed in the final fortnight.

                ## Milestones
                1. A target proposal date or window chosen, with a backup a few weeks later.
                2. Lead times listed for the ring, location bookings, photographer and blessing.
                3. A start date for each step worked back from the proposal date.
                4. The timeline saved somewhere private and reviewed in the weekly planning hour.

                ## Notes
                Add two weeks of slack to any ring order. Resizing, engraving and delivery delays are common.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A private written timeline with a target date and a start date for the ring, bookings, photographer and family blessing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target proposal window and a fallback window"
                - "Ask two jewellers what lead time they quote for your kind of ring"
                - "Work back from the date to find when each step must start"
                - "Put the start dates in a private calendar with reminders"
            - name: Secrecy plan for a surprise proposal
              description: |-
                ## Purpose
                Most surprises are spoiled by small leaks: a jeweller's email in a shared inbox, a card statement, an over-excited friend or a ring box in a coat pocket. Thinking through every place the secret could slip before you start shopping keeps the moment yours to reveal.

                ## Milestones
                1. Every shared channel listed, including email, banking, calendars, delivery apps and devices.
                2. A private email address or account used for jewellers and bookings.
                3. A safe hiding place for the ring chosen away from shared drawers and luggage.
                4. A rule agreed with each confidant about who they may and may not tell.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of shared accounts and devices with a privacy fix for each, plus a chosen ring hiding place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account, calendar and device your partner can see"
                - "Set up a separate email address for jewellers and bookings"
                - "Turn off order notifications that appear on shared screens"
                - "Choose a hiding place for the ring that your partner never opens"
            - name: Finding your partner's ring size discreetly
              description: |-
                ## Purpose
                Get the size two steps wrong and the ring cannot go on during the moment, and some designs, such as full eternity bands, cannot be resized at all. Getting a reliable size without giving the game away is one of the few proposal steps with a real right answer, so it deserves its own plan.

                ## Milestones
                1. One reliable source of the size found, such as a ring they already wear on the same finger.
                2. The ring traced or pressed into soap or measured by a jeweller while they are out.
                3. The size cross-checked through a second route, such as a close friend or family member.
                4. The confirmed size, and which finger it was measured from, written in your notes.

                ## Notes
                If in doubt, size slightly larger. A ring that is a little loose can still be worn on the day and adjusted later, while one that is too small cannot go on at all.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ring size confirmed by two separate methods, recorded with the finger it applies to."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your partner already wears a ring on their ring finger"
                - "Borrow a ring they wear and have a jeweller size it the same day"
                - "Ask a trusted friend or sibling to confirm the size casually"
                - "Record the size and the finger it was taken from"
            - name: Reading your partner's jewellery taste
              description: |-
                ## Purpose
                People who have never mentioned engagement rings still have strong views on yellow or white metal, delicate or bold, sparkly or plain. Studying what they already wear, and what they compliment on others, narrows the choice before you ever see a display case and makes a ring they love far more likely.

                ## Milestones
                1. Photos taken of the jewellery your partner wears most, noting metal colour and scale.
                2. A list of any rings they have admired on friends, in films or online.
                3. Their daily life considered, such as working with their hands or wearing gloves.
                4. A one-line taste summary, for example warm gold, low setting, minimal stones.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written one-line taste summary supported by photos of at least three pieces your partner wears often."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the earrings, necklaces and rings your partner wears most often"
                - "Note whether they mostly wear yellow, white or rose coloured metal"
                - "Write down how their work and hobbies would treat a ring"
                - "Summarise their taste in one line for the jeweller"
            - name: Choosing one or two trusted confidants
              description: |-
                ## Purpose
                Planning entirely alone means guessing at ring sizes, missing family customs and having nobody to keep your partner busy on the day. Choosing one or two people who can keep a secret, and briefing each on their exact role, gives you help without turning the plan into public knowledge.

                ## Milestones
                1. One or two confidants chosen for discretion rather than closeness alone.
                2. Each person given a specific role, such as sizing, distraction or the celebration.
                3. Each told who else knows and who must not.
                4. A plan for when wider family will be told, so nobody feels left out later.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No more than two named confidants, each with a written role and a clear rule about who else may know."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the people who know your partner well and keep secrets reliably"
                - "Pick no more than two and decide what you need each to do"
                - "Tell each confidant their role and who else is in on it"
                - "Note which family members will be told only after the proposal"
            - name: Weekly proposal planning hour
              description: |-
                ## Purpose
                Proposal plans tend to stall for weeks and then pile up in a panic, because they live in the gaps of a normal life and cannot be discussed at home. One protected hour each week, somewhere private, to move the next step forward keeps the timeline honest until the day itself.

                ## Milestones
                1. A regular private slot chosen, such as a lunch break or a solo coffee on Sunday.
                2. Each session ending with the next step written down and a date beside it.
                3. The timeline updated every week with anything that has slipped.
                4. The planning hour retired once the proposal and the first week afterwards are done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A planning hour held on at least three weeks in every four until the proposal, each ending with a dated next step."
                cadence: rolling
              tasks:
                - "Pick a private weekly slot when your partner is busy elsewhere"
                - "Spend an hour moving the next proposal step forward @recurring(weekly:sun)"
                - "Read the timeline and move any slipped dates @recurring(monthly:7)"
                - "Write the single next step and its date before closing the notes"
            - name: Hints and preferences notebook
              description: |-
                ## Purpose
                Your partner drops clues all the time: a ring they paused over, a place they called perfect, a friend's proposal they thought was too much. Writing these down as they happen, rather than trying to remember months later, gives you a private evidence file for every decision from the stone to the setting.

                ## Milestones
                1. A private note started on your phone that your partner cannot see.
                2. Each hint recorded with the date and the exact words where possible.
                3. Hints grouped into ring, place, people and style.
                4. The style brief updated whenever a new hint contradicts it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A private notebook holds at least ten dated hints grouped by ring, place, people and style before the ring is ordered."
                cadence: rolling
              tasks:
                - "Start a locked note on your phone for proposal hints"
                - "Write down any hint from the week with the date @recurring(weekly:wed)"
                - "Compare the notebook with the style brief and update it @recurring(monthly:18)"
                - "Group the hints into ring, place, people and style"
            - name: Proposal spending log against the budget
              description: |-
                ## Purpose
                Small extras, a deposit here and a nicer bottle there, are how a sensible proposal budget turns into a card bill nobody planned for. Logging every proposal payment against the four budget lines, and checking once a month, shows early when to trim the moment to protect the ring or the other way round.

                ## Milestones
                1. A simple log with date, item, amount and budget line.
                2. Every deposit and purchase entered within a week of paying.
                3. A monthly total compared with each budget line.
                4. Any overspend matched by a cut elsewhere, written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spending log totals within the agreed proposal budget at the end of each month, with any overspend offset in writing."
                cadence: rolling
              tasks:
                - "Set up a private spending log with the four budget lines"
                - "Enter every receipt and deposit since you started planning"
                - "Total the log and compare it with each budget line @recurring(monthly:28)"
                - "Write down where you will trim if a line runs over"
            - name: Supplier bookings and deposits log
              description: |-
                ## Purpose
                Even a simple proposal can involve a jeweller, a restaurant, a photographer, a florist and a hotel, each with its own deposit, cancellation terms and confirmation email. Keeping them in one log, checked every Friday, means nothing lapses, nothing is double booked and you know exactly what you would lose if the date moved.

                ## Milestones
                1. Every supplier listed with contact, date, deposit paid and balance due.
                2. Cancellation and change terms noted for each one.
                3. Each booking confirmed in writing and the confirmation saved.
                4. The final balances paid and marked off before the day.

                ## Notes
                Start from the **Vendor** template for each supplier you book. Keep confirmations in the private email account, not the shared inbox.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bookings log lists every proposal supplier with written confirmation, deposit, balance and cancellation terms."
                cadence: rolling
              tasks:
                - "List every supplier you have contacted with dates and deposits"
                - "Save each written confirmation in the private email folder"
                - "Check the log for balances due and unconfirmed bookings @recurring(weekly:fri)"
                - "Note what you would lose if the date had to move"
            - name: Final fortnight countdown check-ins
              description: |-
                ## Purpose
                The last two weeks are when forecasts change, confidants get nervous, rings arrive late and partners pick up on odd behaviour. Two short check-ins a week, on fixed days, catch these problems while there is still time to adjust without anyone noticing.

                ## Milestones
                1. Countdown check-ins scheduled for each Monday and Thursday in the final fortnight.
                2. The ring collected, inspected and stored by the first check-in.
                3. Each confidant reconfirmed on time, place and role.
                4. The weather, transport and bookings checked at every session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four countdown check-ins completed in the final fortnight, each with ring, bookings, people and weather confirmed."
                cadence: rolling
              tasks:
                - "Mark the two weeks before the proposal in your private calendar"
                - "Run a ten minute check of ring, bookings, people and weather @recurring(weekly:mon,thu)"
                - "Message each confidant to reconfirm time and role"
                - "Inspect the ring and box and store them in the hiding place"
            - name: Engagement ring care routine
              description: |-
                ## Purpose
                Daily lotion, soap and wear cloud a stone within weeks and slowly loosen claws, and most lost stones fall from settings nobody checked. A gentle monthly clean at home plus a yearly professional check keeps the ring bright and catches a worn claw before the stone goes.

                ## Milestones
                1. The jeweller's cleaning advice for the specific stone and metal written down.
                2. A small home cleaning kit with a soft brush and mild soap ready.
                3. A monthly clean and a yearly professional inspection in the calendar.
                4. Habits agreed for taking the ring off, such as for the gym or gardening.

                ## Notes
                Some stones, such as opal, emerald and pearl, should never go in an ultrasonic cleaner or harsh solution. Ask the jeweller what suits the one you chose.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ring is cleaned at home each month and inspected by a jeweller once a year, with each inspection date recorded."
                cadence: cyclic
              tasks:
                - "Ask the jeweller how to clean this particular stone and metal"
                - "Put together a soft brush, mild soap and a lint-free cloth"
                - "Soak and brush the ring gently at home @recurring(monthly:9)"
                - "Book a professional claw and setting check @recurring(yearly)"
            - name: Ring insurance and valuation upkeep
              description: |-
                ## Purpose
                Engagement rings are lost down sinks, left in hotel rooms and stolen on holiday, and many home policies cap single items at less than the ring cost. Getting a written valuation, confirming cover and keeping the file up to date each year means a loss is a claim rather than a second purchase.

                ## Milestones
                1. A written valuation and the receipt saved together in one folder.
                2. Your home policy checked for its single item limit and cover away from home.
                3. The ring specified on a policy or insured separately, with the sum insured recorded.
                4. Photos and the grading report kept with the policy documents.

                ## Notes
                Compare a few insurers or brokers yourself. This project is about having the paperwork in order, not about which policy to buy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ring is named on an insurance policy with a sum insured matching a written valuation, and the file is reviewed each year."
                cadence: cyclic
              tasks:
                - "Find your home policy's limit for a single valuable item"
                - "Ask the jeweller for a written insurance valuation"
                - "Review the policy at renewal and confirm the sum insured @recurring(yearly)"
                - "Take fresh close-up photos of the ring for the insurance file @recurring(yearly)"
            - name: Monthly secrecy sweep while planning
              description: |-
                ## Purpose
                Secrets leak gradually: a jeweller adds you to a newsletter, a card statement arrives, a suggested search appears on the shared laptop. A short sweep on the same day each month catches new leaks before your partner does and costs about fifteen minutes.

                ## Milestones
                1. A sweep checklist covering email, banking, deliveries, browser and photos.
                2. Marketing emails from jewellers unsubscribed or filtered.
                3. Any shared statements checked for descriptions that would give the game away.
                4. The checklist run every month until the proposal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written secrecy checklist run every month until the proposal, with each leak found and fixed recorded."
                cadence: rolling
              tasks:
                - "Write a five line checklist of the places the secret could leak"
                - "Run the secrecy checklist and fix anything visible @recurring(monthly:3)"
                - "Unsubscribe from any jeweller mailing lists you were added to"
                - "Clear ring searches from shared devices and suggested results"
            - name: Congratulations replies and thank-you notes
              description: |-
                ## Purpose
                After the announcement, messages, cards and small gifts arrive for weeks, and a missed reply to an aunt can sting for years. A short Saturday session for the first month after the yes, working through a simple list, makes sure everyone who reached out hears back from you both.

                ## Milestones
                1. A list of everyone who sent a message, card or gift.
                2. Replies shared between you so neither person carries all of it.
                3. Handwritten notes sent for any gifts.
                4. The list cleared within six weeks of the announcement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every person who sent a card or gift after the engagement has received a reply, recorded on a list, within six weeks."
                cadence: rolling
              tasks:
                - "Start a list of everyone who has sent congratulations"
                - "Split the replies between you by side of the family and friendship group"
                - "Reply to the week's messages and cards together @recurring(weekly:sat)"
                - "Buy a small set of thank-you cards for gifts"
            - name: Learning the four Cs without being upsold
              description: |-
                ## Purpose
                Cut, colour, clarity and carat are the language every diamond seller uses, and not knowing them makes it easy to pay for a grade nobody could see without a loupe. A couple of evenings learning what each grade looks like in real light lets you spend on what shows, usually cut, and save on what does not.

                ## Milestones
                1. A plain-language note on what each of the four Cs measures.
                2. The grades where differences become visible to the naked eye noted.
                3. Several stones compared in person in daylight, not only under shop lighting.
                4. Your own priority order of the four Cs written for this ring.

                ## Notes
                Stones just under a round carat weight often cost noticeably less than ones just over and look almost identical once set.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written priority order of cut, colour, clarity and carat for your ring, informed by comparing at least five stones in person."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a grading laboratory's own guide to the four Cs"
                - "Visit a jeweller just to look, saying you are not buying today"
                - "Compare five rings in person or online and note their grades @recurring(weekly:thu)"
                - "Write your priority order of the four Cs for this ring"
            - name: Natural, lab-grown and alternative stones compared
              description: |-
                ## Purpose
                Lab-grown diamonds are chemically the same as mined ones at a fraction of the price, while sapphires, moissanite and morganite each offer a different look and durability. Understanding the trade-offs in price, resale, hardness and how your partner feels about them means the stone is a choice rather than a default.

                ## Milestones
                1. A comparison of natural diamond, lab-grown diamond and two or three alternatives.
                2. Hardness and everyday durability noted for each.
                3. Price for a similar-looking stone noted across the options.
                4. Any views your partner has expressed on lab-grown or coloured stones added from the notebook.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of at least four stone types covering price, durability and your partner's known views, ending in a chosen type."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look at a natural and a lab-grown diamond side by side in a shop"
                - "Read up on the hardness of sapphire, moissanite and morganite"
                - "Price a similar-looking stone in each of the options"
                - "Choose the stone type that fits your partner and your budget"
            - name: Ring metals and settings for everyday wear
              description: |-
                ## Purpose
                Tall claw settings that look wonderful in the shop can snag jumpers and hit door frames, and soft metals scratch quickly on someone who works with their hands. Learning how platinum, gold carats and different settings behave in real life lets you match the ring to your partner's days, not only to a photo.

                ## Milestones
                1. The main metals compared for colour, hardness, upkeep and cost.
                2. The common settings understood, such as claw, bezel, halo and tension.
                3. Your partner's work, hobbies and habits matched to a setting height and style.
                4. A chosen metal and setting written in the ring notes.

                ## Notes
                White gold is usually plated and needs replating every few years. Platinum and yellow gold do not, which matters for long-term upkeep.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chosen metal and setting style recorded with one sentence on why it suits your partner's daily life."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Try on low and high settings yourself to feel how they catch"
                - "Ask a jeweller how each metal wears over ten years"
                - "Match the setting height to how your partner uses their hands"
                - "Record the chosen metal and setting with your reasons"
            - name: Reading a grading report before you buy
              description: |-
                ## Purpose
                Two stones with the same headline grades can look very different, and listings sometimes quote in-house grades that are far more generous than an independent laboratory would be. Knowing how to read a full report, check its number and spot vague wording protects the largest single purchase in the whole plan.

                ## Milestones
                1. The main independent grading laboratories identified and their reputations noted.
                2. The sections of a report understood, including proportions, fluorescence and the plot.
                3. A report number verified on the laboratory's own website.
                4. A short list of red flags for listings and in-shop sales talk.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The grading report for the stone you buy has been verified on the issuing laboratory's website and matches the stone's inscription."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download a sample grading report from an independent laboratory"
                - "Learn what each section of the report tells you"
                - "Check any shortlisted stone's report number on the laboratory site"
                - "Ask the jeweller to show you the laser inscription under a loupe"
            - name: Writing the words you will say
              description: |-
                ## Purpose
                Nerves wipe out improvised speeches, and many people remember only that they said something and knelt down. Writing a short message, under a minute aloud, about why this person and why now gives you words you can lean on and a copy your partner can keep.

                ## Milestones
                1. Three or four specific memories or qualities chosen to mention.
                2. A draft under a minute long when read aloud.
                3. The question itself worded exactly as you want to ask it.
                4. A final version written by hand on a card to give afterwards.

                ## Notes
                Avoid inside jokes that need explaining if anyone else will be present or filming.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written proposal message under one minute long, with the exact question, copied by hand onto a keepsake card."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down five moments when you knew this relationship was different"
                - "Pick the three that say the most and draft a short message"
                - "Ask the agent to tighten your draft without changing your voice"
                - "Copy the final words by hand onto a card to give afterwards"
            - name: Rehearsing the proposal moment
              description: |-
                ## Purpose
                Fumbling with the box, kneeling on wet ground or forgetting the ring is upside down are all avoidable with a few private run-throughs. Practising the physical moment and the words, in clothes and shoes like those you will wear, makes the real thing feel familiar enough to enjoy.

                ## Milestones
                1. The message read aloud until you can say it without the card.
                2. The box opened one-handed with the ring facing your partner.
                3. The kneel, if you plan one, practised on the same kind of surface.
                4. A full run-through done once with a confidant watching for anything awkward.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full run-through of words, box and kneel completed without notes at least twice in the week before the proposal."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Practise opening the ring box one-handed with the ring facing out"
                - "Say your proposal words aloud without looking @recurring(weekly:tue)"
                - "Do one full run-through in the shoes you plan to wear"
                - "Ask a confidant to watch and tell you what looked awkward"
            - name: Proposal customs in both families' traditions
              description: |-
                ## Purpose
                Families differ on whether a blessing is expected, who should be told first, whether a ring is given at the proposal or a later ceremony, and which hand it goes on. Learning the customs on both sides, especially across cultures or faiths, avoids a proposal that delights your partner but offends a grandparent.

                ## Milestones
                1. The proposal and engagement customs of your partner's family and culture written down.
                2. Your own family's expectations noted alongside them.
                3. Any conflicts between the two identified, such as which hand or who asks permission.
                4. A plan chosen that respects the customs that matter most to your partner.

                ## Notes
                A quiet question to a sibling or cousin of your partner usually tells you more than any article.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of both families' proposal customs, with any conflicts identified and how your plan handles each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a sibling or cousin of your partner how engagements happen in their family"
                - "Write down your own family's customs and expectations"
                - "Mark any customs that conflict between the two sides"
                - "Decide which customs to follow and note why"
            - name: Where to buy the ring
              description: |-
                ## Purpose
                Independent jewellers, high street chains, online retailers and bespoke makers each trade off price, choice, after-care and the chance to see the stone before paying. Comparing three sellers on the same criteria, including returns and resizing, stops the decision being made by whichever shop you walked into first.

                ## Milestones
                1. Three sellers shortlisted across at least two kinds, such as one independent and one online.
                2. Each scored on price, stone choice, returns window, free resizing and after-care.
                3. Reviews and complaint records checked for each.
                4. A seller chosen and the reason written down.

                ## Notes
                Start from the **Purchase decision** template. A returns window that runs past the proposal date matters more than a small discount.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A seller chosen from a shortlist of three, each scored on price, returns, resizing and after-care, with the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three possible sellers including one independent jeweller"
                - "Ask each about returns, resizing and after-care in writing"
                - "Read recent reviews and complaints for each seller"
                - "Score the three and choose where to buy"
            - name: Custom design or ready-made ring
              description: |-
                ## Purpose
                Bespoke rings can match your partner's taste exactly, but they take weeks, cost more to change and usually cannot be returned. A ready-made ring is quicker and returnable but may be a compromise. Deciding early which route you are on fixes the timeline and the budget for everything after.

                ## Milestones
                1. Lead time, cost and return terms compared for bespoke and ready-made options.
                2. The taste summary checked against what is available ready-made.
                3. The impact of each route on the target proposal date worked out.
                4. A route chosen and written into the timeline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between bespoke and ready-made, with lead time, cost and return terms for each route compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a bespoke maker for a typical lead time and deposit terms"
                - "Search for ready-made rings that match the taste summary"
                - "Check whether either route would push the proposal date"
                - "Record the route you chose in the timeline"
            - name: Resetting or resizing a family heirloom ring
              description: |-
                ## Purpose
                Proposing with a grandmother's ring can carry real meaning, but old settings are often worn, sized for someone else or simply not to your partner's taste. Getting a jeweller's view on its condition, and deciding whether to wear it as is, reset the stone or keep it for another moment, honours the ring without forcing it on anyone.

                ## Milestones
                1. The family's permission and any expectations about the ring confirmed in writing or clearly in person.
                2. A jeweller's inspection of the stone, claws and band completed.
                3. Options priced: clean and resize, reset the stone, or keep as a separate gift.
                4. A decision made with your partner's taste in mind and shared with the family.

                ## Notes
                Settle with the family whether the ring is yours to change. Disputes about heirlooms can outlast the engagement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A jeweller's condition report on the heirloom and a recorded decision to resize, reset or keep it, agreed with the family."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the relative who holds the ring whether it may be altered"
                - "Take the ring to a jeweller for a condition check"
                - "Get prices for resizing, resetting and simple cleaning"
                - "Tell the family what you have decided before the proposal"
            - name: Choosing the proposal location
              description: |-
                ## Purpose
                The place shapes everything: who might be watching, whether you can kneel, what happens if it rains and how you will get there without raising suspicion. Scoring three candidate places against the style brief and the practical facts usually reveals a clear winner and a sensible backup.

                ## Milestones
                1. Three locations shortlisted that each mean something to the two of you.
                2. Each visited or checked at the same day and time you would propose.
                3. Each scored for privacy, weather exposure, access and a believable reason to go.
                4. A first choice and a backup chosen and written into the plan.

                ## Notes
                Visit at the actual time of day. A quiet viewpoint at noon on a Tuesday can be packed at sunset on a Saturday.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first-choice location and a backup chosen from three, each checked at the proposal time and scored on privacy, weather and access."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List three places that mean something to both of you"
                - "Visit the strongest option at the same time of day you would propose"
                - "Score each for privacy, weather, access and a believable reason to go"
                - "Choose a first choice and a backup location"
            - name: Picking the date and time of day
              description: |-
                ## Purpose
                Proposing on a birthday or a holiday can merge two celebrations into one forever, and a date in the middle of a stressful work week can leave your partner unable to enjoy it. Weighing the options against light, crowds, work pressures and family plans gives you a date that stands on its own.

                ## Milestones
                1. Candidate dates listed with any birthdays, holidays or work deadlines nearby.
                2. Sunset or daylight times checked if light matters for photos.
                3. Your partner's diary checked for anything that would make the day stressful.
                4. A date and time chosen, plus a fallback, and written into the timeline.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposal date and time chosen, with a fallback, checked against your partner's diary, light and nearby occasions."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List three possible dates and anything else happening around them"
                - "Check sunset time and expected crowds for each"
                - "Look at your partner's known commitments that week"
                - "Choose the date, time and fallback and add them to the timeline"
            - name: Proposing with a placeholder ring or choosing together
              description: |-
                ## Purpose
                Some partners would rather choose their own ring, and some proposers would rather not guess on something worn every day for decades. Proposing with a simple placeholder, a family ring or an empty box and a shopping trip planned afterwards keeps the surprise while handing the big choice to the person who will wear it.

                ## Milestones
                1. The style brief checked for signs your partner would want to choose.
                2. A placeholder chosen, such as a simple band, a vintage ring or a meaningful token.
                3. A follow-up ring shopping day planned and budgeted.
                4. The words of the proposal adjusted to explain the plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to propose with the final ring, a placeholder or a choose-together plan, with the follow-up booked if needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Reread the hints notebook for any sign your partner wants to choose"
                - "Pick a simple placeholder ring or token if you go that way"
                - "Find a jeweller who offers private appointments for choosing together"
                - "Add a line to your proposal words about choosing the ring together"
            - name: Hiring a proposal planner or doing it yourself
              description: |-
                ## Purpose
                Professional proposal planners handle permits, set dressing, photographers and backup plans, which can be worth it for a destination or a complex surprise but excessive for a quiet dinner. Getting two quotes and comparing them with an honest estimate of your own hours makes the choice on evidence.

                ## Milestones
                1. The hours you would spend planning it yourself estimated honestly.
                2. Two quotes from proposal planners with what each includes.
                3. References or reviews checked for both planners.
                4. A decision made and, if hiring, a written agreement signed.

                ## Notes
                Start from the **Vendor** template for any planner you approach. Check who owns the photos and whether the fee covers a weather backup.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision to hire or self-plan, based on two written planner quotes compared with your own estimated hours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the hours you would need to plan the moment yourself"
                - "Request quotes from two proposal planners in the area"
                - "Ask each planner what happens if the weather turns"
                - "Decide whether to hire and confirm terms in writing"
            - name: Ethical sourcing questions for the jeweller
              description: |-
                ## Purpose
                Many couples care where a stone was mined and how the metal was refined, but sellers vary widely in what they can actually show. Asking the same short set of questions of every jeweller, and noting the answers, lets your values shape the purchase without slowing it down.

                ## Milestones
                1. A list of four or five sourcing questions written in plain language.
                2. Answers recorded from each shortlisted seller.
                3. Any documentation, such as origin reports or recycled metal statements, requested.
                4. The answers factored into the final choice of seller.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written answers on stone origin and metal sourcing from each shortlisted seller, with documentation for the chosen ring where available."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five plain questions about stone origin and metal sourcing"
                - "Send the questions to each shortlisted seller"
                - "Ask for any origin or recycled metal documentation in writing"
                - "Compare the answers before choosing where to buy"
            - name: Asking for a family blessing
              description: |-
                ## Purpose
                In many families, asking parents or another important person for their blessing is a sign of respect, and in others it can feel outdated. Where it matters to your partner, a planned conversation in person, without making it sound like permission is needed, brings their family into the moment and avoids any sense of being bypassed.

                ## Milestones
                1. A decision made, from the customs note, on whether and whom to ask.
                2. A reason to meet arranged that will not raise your partner's suspicion.
                3. A few sentences prepared on what your partner means to you and your plans.
                4. The conversation held and the family asked to keep it quiet until after.

                ## Notes
                If a parent is estranged or no longer living, your partner may prefer a grandparent, sibling or close friend is asked instead, or no one at all.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A blessing conversation held in person or by call with the person who matters most to your partner, with secrecy agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whose blessing would mean the most to your partner"
                - "Arrange a meeting with a reason that will not raise suspicion"
                - "Write a few sentences on what you want to say"
                - "Ask them to keep the news quiet until after the proposal"
            - name: Hidden photographer booking and brief
              description: |-
                ## Purpose
                Most couples treasure photos of the moment more than they expected, and a phone propped on a wall rarely catches faces. A photographer briefed on the exact spot, signal and your partner's appearance can stay hidden and capture the reaction without spoiling the surprise.

                ## Milestones
                1. Two photographers with proposal experience compared on portfolio and price.
                2. One booked with a written agreement covering timing, delivery and image rights.
                3. A brief sent with the location, the signal, a photo of your partner and the backup plan.
                4. A meeting point and hiding spot confirmed a few days before.

                ## Notes
                Start from the **Vendor** template. Agree a signal that is natural, such as taking off a jacket, so the photographer knows when to start.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A photographer booked in writing and sent a brief with location, signal, a photo of your partner and the weather backup."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look at proposal portfolios from two local photographers"
                - "Book one and confirm delivery time and image rights in writing"
                - "Send a brief with the spot, the signal and a photo of your partner"
                - "Agree a hiding spot and meeting time for the day"
            - name: Proposal trip away from home
              description: |-
                ## Purpose
                Proposing on a trip adds scenery and a ready-made celebration, but it also adds airport security, hotel rooms you share and less control over the spot. Planning travel so the ring stays with you, the place is scouted and the itinerary leaves room for the moment keeps the holiday from becoming a source of stress.

                ## Milestones
                1. A trip booked that your partner believes has an ordinary reason.
                2. The ring carried in hand luggage the whole way, never in the hold.
                3. The proposal spot researched for access, crowds and local rules.
                4. A free half day kept in the itinerary for the moment and the celebration.

                ## Notes
                Start from the **Trip** template. Check your insurance covers the ring abroad, and expect airport scanners to show the box.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip with the ring carried in hand luggage, the spot researched in advance and a free half day kept for the proposal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a destination with a believable reason to travel"
                - "Research the proposal spot's opening hours and crowd levels"
                - "Plan how the ring travels in hand luggage without being seen"
                - "Keep a free half day in the itinerary for the proposal"
            - name: Proposal day run sheet
              description: |-
                ## Purpose
                On the day your attention will be on your partner, not on whether the photographer has arrived or the table is booked. A single page with times, people, phone numbers and what happens if something slips lets you and your confidants run the day without whispered phone calls.

                ## Milestones
                1. A run sheet with times from leaving home to the celebration afterwards.
                2. Every helper's role, phone number and cue listed.
                3. The backup plan for weather or crowds written on the same page.
                4. The run sheet shared with helpers the day before.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page run sheet with timings, helpers' numbers, cues and a backup plan, shared with every helper the day before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the day hour by hour from leaving home to the celebration"
                - "Add each helper's role, phone number and cue"
                - "Write the bad weather and crowd backup on the same page"
                - "Send the run sheet to helpers the day before"
            - name: Surprise celebration straight after the yes
              description: |-
                ## Purpose
                The hour after a proposal can feel oddly flat if everyone simply goes home. A small celebration, such as a dinner booked in advance or close friends waiting at a nearby place, gives the moment somewhere to go, provided it matches what your partner would actually want after an emotional surprise.

                ## Milestones
                1. The style brief checked to confirm a celebration would be welcome.
                2. A venue or home gathering arranged within easy reach of the proposal spot.
                3. A guest list of no more than the people your partner would want first.
                4. A quiet way out agreed if your partner would prefer time alone.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-proposal celebration booked near the spot, with a short guest list and an agreed quiet alternative."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether your partner would want people or privacy afterwards"
                - "Book a table or arrange a gathering near the proposal spot"
                - "Ask a confidant to gather guests and keep them out of sight"
                - "Agree a signal to send guests home if your partner needs quiet"
            - name: Telling family and friends in the right order
              description: |-
                ## Purpose
                Parents hearing the news from social media, or a best friend finding out after a colleague, can cause hurt that lasts well past the engagement. Agreeing with your partner, straight after the yes, who hears first and by what route, then working down the list, lets you share the joy on your terms.

                ## Milestones
                1. An order agreed together: parents and siblings, then closest friends, then wider circles.
                2. Calls or visits made to everyone in the first group before anything goes online.
                3. A short message ready for the wider circle.
                4. Any public announcement posted only after the first two groups know.

                ## Notes
                Ask your confidants not to post or congratulate publicly until you give the word.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Parents, siblings and closest friends told directly before any public post, following an order agreed by both of you."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a call order for parents, siblings and closest friends"
                - "Agree the order with your partner straight after the proposal"
                - "Ask the agent to draft a short message for the wider circle"
                - "Post any public announcement only after the first calls are done"
            - name: Resizing and fitting after the yes
              description: |-
                ## Purpose
                Even a carefully sized ring often needs a small adjustment once it has been worn for a week, and a ring that spins or pinches is more likely to be taken off and lost. Booking the fitting soon after the proposal, while any free resizing window is open, gets it right before the ring becomes part of daily life.

                ## Milestones
                1. The ring worn for a week and any spinning or pinching noted.
                2. The seller's free resizing window and terms checked.
                3. A fitting booked and the new size measured at a normal temperature.
                4. The resized ring collected and checked for fit and finish.

                ## Notes
                Fingers swell in heat and shrink in cold. Measure in the middle of the day at room temperature.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ring refitted within the seller's free resizing window, with the final size recorded in the ring file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the seller's free resizing window and terms"
                - "Note any spinning or pinching after a week of wear"
                - "Book a fitting appointment for the two of you"
                - "Record the final size in the ring paperwork"
            - name: Including children in the proposal
              description: |-
                ## Purpose
                When one or both of you already have children, the proposal is also a change for them, and leaving them out can feel like a statement. Deciding with care how and whether to include them, from a role in the moment to a separate family promise, makes the engagement something the whole household shares.

                ## Milestones
                1. Each child's age, temperament and relationship with your partner considered.
                2. A decision on whether children are told beforehand, present or told afterwards.
                3. If they are involved, a simple role that suits their age and keeps the secret short.
                4. A plan for any child who reacts with worry rather than excitement.

                ## Notes
                Young children find secrets hard to keep for more than a day or two. Tell them close to the moment if they are taking part.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan for each child's involvement before, during or after the proposal, matched to their age."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each child and how they get on with your partner"
                - "Decide whether each child is told before, takes part or hears afterwards"
                - "Give any child who takes part a simple role close to the day"
                - "Plan a quiet talk for any child who seems unsettled by the news"
            - name: Proposing later in life or a second time
              description: |-
                ## Purpose
                Proposals in your fifties or after a divorce or bereavement carry different questions: adult children's feelings, existing homes and assets, and a partner who may have been proposed to before. Planning with these in mind lets the moment feel new rather than a repeat, and keeps the family conversations kind.

                ## Milestones
                1. Any earlier proposals or rings in either history considered so the new plan feels distinct.
                2. Adult children or close family told at a time that respects them.
                3. A note made of practical topics to raise after the proposal, such as homes and legal advice.
                4. A style chosen that suits who you both are now.

                ## Notes
                Finances, wills and property are important later-life topics, but they belong in a separate conversation with the right professional after the proposal, not in the moment itself.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A proposal plan that differs from any earlier engagement, with a written note of when adult children or family will be told."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down anything about past proposals you both would want to avoid repeating"
                - "Decide when and how to tell adult children or close family"
                - "List practical topics to raise later with the right professional"
                - "Choose a style that reflects who you both are now"
            - name: Same-sex couples deciding who proposes
              description: |-
                ## Purpose
                Without a script about who asks, same-sex couples often find both partners quietly planning, or neither. Talking about it openly, whether that means one proposal, two separate surprises or a shared moment with two rings, removes the worry that you are both secretly buying a ring for the same week.

                ## Milestones
                1. A conversation held about whether one, both or neither of you wants to propose.
                2. An agreed approach, such as two proposals, one shared moment or a ring exchange.
                3. Any family members who may be less supportive considered when deciding who to tell first.
                4. A plan for rings chosen, such as matching, coordinating or entirely individual.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed approach to who proposes, recorded together with a plan for rings and who will be told first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your partner whether they have thought about who might propose"
                - "Agree whether you want one, two or a shared proposal"
                - "Decide on matching, coordinating or individual rings"
                - "Plan who hears first and how to handle less supportive relatives"
            - name: Proposal on a tight budget
              description: |-
                ## Purpose
                Memorable proposals do not need an expensive ring or a booked venue: a handwritten letter, a meaningful place and a modest ring can mean more than anything bought on credit. Planning deliberately on a small budget keeps the focus on the words and the place, and the ring can be upgraded or reset later if you both want.

                ## Milestones
                1. A small total figure set with no borrowing.
                2. A free or meaningful location chosen, such as where you first met.
                3. A modest ring chosen, such as vintage, lab-grown or a simple band.
                4. Extra money for the proposal set aside weekly from small savings.

                ## Notes
                Second-hand and vintage rings can be excellent value. Ask for any grading or valuation documents before buying.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A proposal plan with a total cost below a set small figure, no borrowing, a chosen location and a ring bought from savings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set a small total figure you can pay in cash"
                - "List three free places that mean something to you both"
                - "Browse vintage and lab-grown rings within the figure"
                - "Move spare cash from the week into the proposal pot @recurring(weekly:fri)"
            - name: Quiet proposal for a partner who hates attention
              description: |-
                ## Purpose
                For a private or shy partner, a public proposal can feel like an ambush rather than a gift. Designing a moment at home, on a favourite walk or somewhere completely empty, with photos taken afterwards if at all, puts their comfort first and lets their real reaction come through.

                ## Milestones
                1. Evidence from the hints notebook that your partner prefers privacy.
                2. A setting chosen where no strangers are likely to be present.
                3. A decision made on whether any photo or video will be taken.
                4. News shared at a pace your partner chooses after the yes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A private proposal plan with no audience, a recorded decision on photos and an agreement that your partner sets the pace for sharing news."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Reread the hints notebook for signs your partner values privacy"
                - "Choose a setting where strangers are very unlikely"
                - "Decide whether to take any photo at all"
                - "Let your partner decide when the news is shared"
            - name: Proposing across a long distance
              description: |-
                ## Purpose
                When you live in different cities or countries, a proposal has to fit around a visit, which shrinks the window and makes the ring harder to hide. Planning around a specific visit, with the ring bought near where you live and a backup moment later in the trip, keeps the plan from collapsing if the first day goes wrong.

                ## Milestones
                1. A specific visit chosen with at least three days together.
                2. The ring bought, sized and insured where you live before travelling.
                3. A first-choice moment early in the visit and a backup later in the trip.
                4. A plan for celebrating with both sets of friends despite the distance.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A proposal planned around a dated visit of at least three days, with a backup moment and the ring travelling in hand luggage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the visit that gives you the most time together"
                - "Buy and size the ring locally with time to spare before travel"
                - "Plan a first-choice moment and a backup later in the visit"
                - "Arrange a video call with distant friends for after the proposal"
            - name: Contingency plan for weather, nerves and lost rings
              description: |-
                ## Purpose
                Rain, a closed viewpoint, a partner in a bad mood or a ring left on the kitchen table can each derail a carefully planned moment. Listing the likely failures with a fallback for each, before the day, turns a panic into a quick switch nobody notices.

                ## Milestones
                1. The ten most likely things that could go wrong listed.
                2. A fallback written for each, with who handles it.
                3. Weather and closure checks scheduled for the morning of the day.
                4. A rule for postponing gracefully if your partner is unwell or upset.

                ## Notes
                Start from the **Risk register** template. The best fallback for a bad mood is usually another day, not a pep talk.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written risk list of at least ten failures, each with a fallback and an owner, completed a week before the proposal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List ten things that could go wrong on the day"
                - "Write a fallback for each and who will handle it"
                - "Set an alarm to check the forecast and closures that morning"
                - "Agree with yourself when you would postpone rather than push on"
            - name: Coordinating a large surprise with many helpers
              description: |-
                ## Purpose
                Proposals involving gathered friends, a choreographed moment or a family hidden in a garden need the logistics of a small event: invitations, arrival times, a hiding place and someone in charge while you are with your partner. Running it like an event, with a coordinator and a single message thread, stops twenty people from giving the game away.

                ## Milestones
                1. A coordinator chosen who is not you and knows everyone involved.
                2. Every helper invited privately with arrival time, location and dress.
                3. A single private message group used for all updates.
                4. A rehearsal or walk-through held where possible without your partner nearby.

                ## Notes
                Large surprises are only right if the style brief supports them. Many people would prefer a quiet moment and a party afterwards.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every helper briefed in writing through one coordinator, with arrival times and a rehearsal completed before the day."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a reliable friend to act as coordinator on the day"
                - "Send each helper a private invitation with time, place and dress"
                - "Set up one private message group for every update"
                - "Hold a walk-through with helpers while your partner is away"
            - name: Commissioning a setting around a loose stone
              description: |-
                ## Purpose
                Buying a loose stone and having a goldsmith set it gives you full control over the stone's quality and the design, but you carry the risk of choosing well on both. Experienced buyers do this to get more stone for the money or to reuse a family gem, and it rewards careful briefs and clear written terms.

                ## Milestones
                1. A loose stone bought with an independent grading report or verified origin.
                2. A goldsmith chosen on portfolio, reviews and insurance while the stone is in their care.
                3. A design brief agreed with a drawing or render and a fixed price.
                4. Progress checked at agreed stages and the finished ring inspected before final payment.

                ## Notes
                Ask the goldsmith to confirm in writing that your stone is insured while it is on their premises.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A finished ring collected that matches a signed design brief, set with your loose stone and inspected before the final payment."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask two goldsmiths whether they set client-supplied stones"
                - "Confirm in writing that your stone is insured while they hold it"
                - "Agree a drawing or render and a fixed price before work starts"
                - "Ask the goldsmith for progress photos at each stage @recurring(weekly:tue)"
            - name: If the answer is not yet
              description: |-
                ## Purpose
                Sometimes the answer is a request for more time, a no, or tears that are not happy ones, and how you handle the next hour matters for whatever comes after. Thinking ahead about a gentle response, how helpers will be stood down and who you will talk to afterwards is not pessimism, it is care for both of you.

                ## Milestones
                1. A few calm sentences prepared for a not-yet or a no.
                2. A quiet signal agreed for helpers to leave without fuss.
                3. The ring's return or exchange terms known in advance.
                4. One person chosen to talk to afterwards, whatever happens.

                ## Notes
                A not-yet is often about timing, not about you. Give it a few days before deciding what it means.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan for a not-yet answer, covering your words, a stand-down signal for helpers and the ring's return terms."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a few kind sentences you could say if the answer is not yet"
                - "Agree a stand-down signal with your coordinator or confidant"
                - "Check the ring's return or exchange window"
                - "Choose one friend you will call afterwards, whatever the answer"
---

# Marriage Proposal Planning

This area is for anyone getting ready to ask the question, whether that means a full surprise, a quiet moment at home or a decision you reach together. It starts with the foundations (checking you are both ready, a style brief, a budget, a ring fund, a timeline and the secret itself), then the routines that keep planning on track, the ring knowledge worth learning before you spend, the decisions about where to buy, where to ask and how, the dated moments from the family blessing to the announcement, versions for parents, later-life couples, same-sex couples and partners who hate attention, and finally the specialist work of contingency planning, large surprises and bespoke commissions.

What repeats is a Sunday planning hour, a midweek note of your partner's hints, a payday transfer into the ring fund, a monthly spending and secrecy check, twice-weekly countdown check-ins in the final fortnight, and once the ring is on, a monthly clean and a yearly insurance and jeweller check. The Savings goal, Purchase decision, Vendor, Trip and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
