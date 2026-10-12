---
id: mental-wellbeing.gambling-harm-recovery
name: Gambling Harm Recovery
description: "Bank blocks, self-exclusion and blocking software, support services and treatment, debt plans and money safeguards, and the people and routines that keep you gamble-free."
category: personal
version: 1.0.0
tags: [mental-wellbeing, gambling-harm-recovery, everyone, gambling, self-exclusion, debt, relapse-prevention, affected-others]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - remediation-plan
    - monthly-budget-bills
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Gambling Harm Recovery
          description: "Stopping problem gambling with blocking tools, support services, financial safeguards and accountability from people you trust."
          projects:
            - name: Gambling harm self-screen and honest baseline
              description: |-
                ## Purpose
                Before changing anything, it helps to see the size of the problem in plain numbers rather than through the fog of guilt. A short validated screening questionnaire, such as the nine-question Problem Gambling Severity Index, plus a rough count of what you staked and lost in the last three months, gives you a baseline to share with a support service and to measure progress against.

                ## Milestones
                1. A recognised gambling screening questionnaire completed honestly and the score written down.
                2. A rough total of money staked and lost over the last three months, taken from bank and app statements.
                3. The products you used listed: sports bets, online slots, casino games, scratchcards, bingo or others.
                4. The baseline saved somewhere private that a counsellor could be shown.

                ## Notes
                The score is a starting point for a conversation, not a diagnosis. If the numbers are frightening, that is exactly why they are worth writing down.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated screening score and a three-month loss estimate are written in one private note, ready to share with a support service."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Complete a recognised gambling screening questionnaire and note the score"
                - "Download the last three months of bank and gambling app statements"
                - "Add up deposits and withdrawals to estimate net losses"
                - "List every gambling product you used in that period"
            - name: Card and bank gambling block switched on
              description: |-
                ## Purpose
                Banks in many countries now let you block card payments to gambling merchants from their app, often with a cooling-off delay of 48 hours or more before the block can be lifted. It is the fastest barrier you can put in place today, and it works at the moment of an urge, when willpower is at its lowest.

                ## Milestones
                1. The gambling block switched on for every current account and credit card you hold.
                2. The cooling-off period for removing each block written down.
                3. Banks without a block feature contacted and asked what they offer instead.
                4. The bank's confirmation of each block saved.

                ## Notes
                Blocks usually cover card payments only. Transfers to e-wallets, crypto purchases and cash withdrawals can still get through, which the back doors project deals with.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every card and account you hold shows a gambling block switched on, with each cooling-off period recorded in one list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every current account, credit card and prepaid card you hold"
                - "Switch on the gambling block in each banking app"
                - "Phone any bank without the feature and ask what protection it offers"
                - "Write each block's cooling-off period beside the account in your list"
            - name: Self-exclusion from online and venue gambling
              description: |-
                ## Purpose
                Self-exclusion schemes let you bar yourself from licensed gambling operators for a fixed period, often six months to five years, and some countries run one scheme that covers every licensed website at once, such as GAMSTOP in Great Britain. Venue schemes do the same for betting shops, casinos and arcades in a chosen area. Choosing the longest period you can bear spares you from deciding again in a weak moment.

                ## Milestones
                1. The national or multi-operator online self-exclusion scheme for your country identified and joined, if one exists.
                2. Venue self-exclusion arranged for the shops, casinos or bingo halls you used to visit.
                3. Exclusion start and end dates recorded in one place.
                4. Operators outside the scheme listed so they can be excluded one by one.

                ## Notes
                Unlicensed offshore sites are not covered by these schemes, which is why blocking software sits alongside self-exclusion rather than replacing it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Online and venue self-exclusions are in place for the period you chose, with every start and end date recorded in one note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the online self-exclusion scheme that covers your country"
                - "Register for the longest exclusion period you can commit to"
                - "Contact the venues you used and ask how their self-exclusion works"
                - "Record each exclusion's start and end date in one note"
            - name: Gambling blocking software on every device
              description: |-
                ## Purpose
                Blocking apps stop gambling websites and apps from loading on the devices they are installed on, including many unlicensed sites that self-exclusion misses. Their value depends on covering every phone, tablet, laptop and console you use, and on making them hard to remove on impulse, for example by letting a trusted person hold the uninstall password.

                ## Milestones
                1. A gambling blocker chosen, free through a support service or bank if one is offered.
                2. The blocker installed on every phone, tablet and computer you use.
                3. Uninstall protection switched on, with any password held by someone else.
                4. A list of covered devices kept with your recovery notes.

                ## Notes
                Old phones in drawers and work laptops are the usual gaps. Count them in.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every device you use runs a gambling blocker with uninstall protection, and a dated list of covered devices exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your support service or bank whether they fund a blocking app"
                - "List every device you can get online with, including old phones"
                - "Install the blocker on each device and switch on uninstall protection"
                - "Give the uninstall password to a trusted person, not yourself"
                - "Try loading a gambling site on each device to confirm it is blocked"
            - name: Closing gambling accounts and withdrawing balances
              description: |-
                ## Purpose
                Most people in difficulty have more accounts than they remember: betting apps, casino sites, poker rooms, bingo sites and loyalty schemes, some holding small balances or free bet offers designed to pull them back. Closing each one, withdrawing any money and asking for marketing to stop shuts down a whole category of triggers.

                ## Milestones
                1. A full list of gambling accounts built from email searches, statements and app stores.
                2. Every balance withdrawn to your bank and every account closed.
                3. Written confirmation of closure saved for each operator.
                4. Marketing consent withdrawn for every operator on the list.

                ## Notes
                Ask for closure because of gambling harm rather than a plain closure. Many operators handle these differently and will not reopen the account on request.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every gambling account on your list is closed with confirmation saved, and no balance is left in any of them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your email for sign-up and deposit messages from gambling sites"
                - "Build a list of every gambling account with its balance"
                - "Withdraw each balance and request closure citing gambling harm"
                - "Save each closure confirmation in one folder"
            - name: First contact with a gambling support service
              description: |-
                ## Purpose
                Free, confidential gambling helplines and treatment services exist in many countries, and a single call can lead to counselling, a structured treatment programme or a support group within weeks. Calling feels harder than it is: the people answering hear from someone in your position every day and will not judge.

                ## Milestones
                1. The national gambling helpline and any local treatment service identified, with opening hours.
                2. A first call, web chat or online referral made.
                3. An assessment or first appointment booked, with the date in your calendar.
                4. Notes from the first contact written down while still fresh.

                ## Notes
                Your doctor can also refer you, and many services offer support by text or web chat if speaking feels too much.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A first contact with a gambling support service is made and an assessment or appointment date is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the national gambling helpline and its opening hours"
                - "Write three sentences about your gambling to read out if words fail"
                - "Make the call or start the web chat"
                - "Put the assessment or appointment date in your calendar"
            - name: Telling one trusted person about your gambling
              description: |-
                ## Purpose
                Secrecy is what lets gambling carry on, and recovery goes better with at least one person who knows the truth and can help with practical safeguards. Choosing who to tell, what to say and what you are asking them for turns a dreaded confession into a planned conversation with a clear purpose.

                ## Milestones
                1. One person chosen who is likely to respond calmly and keep the confidence.
                2. The main points written down: what happened, roughly how much, what you are doing about it.
                3. A clear request prepared, such as weekly money check-ins or holding a blocker password.
                4. The conversation held and the agreed next step written down.

                ## Notes
                If the person you most need to tell is a partner who may react strongly, a gambling support service can help you plan the conversation or be present for it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One trusted person has been told the full picture and has agreed to a specific supporting role."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down two or three people you could tell and why"
                - "Draft the main points of what you want to say"
                - "Decide the one specific thing you will ask them to do"
                - "Arrange a private time and place for the conversation"
                - "Write down what was agreed afterwards"
            - name: Complete list of gambling debts
              description: |-
                ## Purpose
                Debts from gambling are often spread across credit cards, overdrafts, payday loans, buy now pay later and money borrowed from family, and avoiding the post makes them grow. Putting every one on a single list with its balance, interest and arrears is the first thing a debt adviser will ask for, and it turns a vague dread into a number you can plan against.

                ## Milestones
                1. Every creditor listed with balance, interest rate, minimum payment and any arrears.
                2. Informal debts to family and friends included, with what was promised.
                3. Unopened letters opened and any court or enforcement notices flagged.
                4. The total owed and the total of monthly minimums worked out.

                ## Notes
                Deal with anything that has a deadline, such as court papers, first. Free debt advice services can often help with these quickly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single debt list shows every creditor, balance and minimum payment, with any court or enforcement letters flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every unopened letter and statement into one pile"
                - "Write each debt with its balance, rate, minimum payment and arrears"
                - "Add money owed to family and friends to the list"
                - "Mark any letter that mentions court or enforcement as urgent"
            - name: Urgent help card for the hardest nights
              description: |-
                ## Purpose
                Heavy gambling losses and debts are linked to a raised risk of suicidal thoughts, and the worst moments often come late at night after a big loss. A card on your phone and in your wallet with the gambling helpline, a crisis line, the emergency number and two people you can call puts help one tap away when thinking is hardest.

                ## Milestones
                1. The gambling helpline, a 24-hour crisis line and your emergency number written on one card.
                2. Two people named who have agreed to take a call at any hour.
                3. The card saved as phone favourites and a paper copy kept in your wallet.
                4. The card linked to a fuller crisis safety plan, if you have one.

                ## Notes
                If you are in danger now, call your emergency number. This card points to help; it does not replace it.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card with helpline, crisis line, emergency number and two named contacts is saved on your phone and kept in your wallet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the gambling helpline and a 24-hour crisis line for your country"
                - "Ask two people if you can call them at any hour in a bad moment"
                - "Save the numbers as favourites on your phone"
                - "Put a paper copy of the card in your wallet"
                - "Check every number on the card still connects @recurring(yearly)"
            - name: Your written reasons for stopping
              description: |-
                ## Purpose
                Urges argue convincingly in the moment, and the reasons that felt overwhelming on the morning after a loss fade within days. A short list in your own words, naming what gambling cost you and what you want back, gives you something concrete to read when the case for one more bet starts to sound reasonable.

                ## Milestones
                1. Five to ten reasons written in your own words, specific rather than general.
                2. At least one reason about people, one about money and one about how you feel.
                3. The list saved where you can reach it in ten seconds, such as your phone's home screen.
                4. The list reread and updated after the first month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least five specific reasons for stopping is saved on your phone's home screen and has been updated once."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what gambling has cost you in the last year"
                - "Turn those costs into five to ten reasons in your own words"
                - "Save the list somewhere you can open in ten seconds"
                - "Read the list aloud to your trusted person or counsellor"
            - name: Daily gamble-free day and urge log
              description: |-
                ## Purpose
                Counting gamble-free days gives you a visible streak worth protecting, and noting urges alongside it shows when and where they hit. After a few weeks the log reveals patterns, such as Saturday afternoons, payday or the hour after an argument, that tell you where the next safeguard should go.

                ## Milestones
                1. A daily log set up with a tick for gamble-free and a 0 to 10 urge rating.
                2. Notes kept on any strong urge: time, place, mood and what you did.
                3. Four weeks of entries completed.
                4. The three most common trigger situations identified from the log.

                ## Notes
                Start from the **Habit tracker** template. A slip is a data point, not a reason to stop logging: record it and keep going.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds at least 28 consecutive daily entries and names the three most common trigger situations."
                cadence: rolling
              tasks:
                - "Set up the daily log from the habit tracker template"
                - "Mark today gamble-free or not and rate any urge from 0 to 10 @recurring(daily)"
                - "Write a short note whenever an urge scores 6 or more"
                - "Pick out the three most common triggers after four weeks"
            - name: Weekly money check-in with your accountability partner
              description: |-
                ## Purpose
                Agreeing to show someone your spending each week removes the private space where gambling hides, and rebuilds trust with evidence rather than promises. Fifteen minutes going through the week's transactions together works best when the format is fixed and neither person treats it as an interrogation.

                ## Milestones
                1. A partner agreed and a fixed weekly time set.
                2. A short format agreed: statements shown, unexplained items explained, the week ahead planned.
                3. Eight weekly check-ins held without one being skipped.
                4. A rule agreed for what happens if a check-in is missed.

                ## Notes
                Keep the check-in about money and plans. Feelings about past gambling are better talked through at a separate time or with a counsellor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly check-ins have been held with statements shown, and the agreed format is written down."
                cadence: rolling
              tasks:
                - "Agree a weekly time and place with your accountability partner"
                - "Write the check-in format on one page"
                - "Go through the week's transactions together @recurring(weekly:sun)"
                - "Agree what happens if a check-in is missed"
            - name: Monthly statement review for gambling leaks
              description: |-
                ## Purpose
                Gambling rarely shows up neatly as a bet: it hides in cash withdrawals, transfers to e-wallets, crypto purchases, gift cards and payments to friends. Reading every statement once a month with those patterns in mind catches a slip, or a route the blocks have missed, before it becomes a run.

                ## Milestones
                1. A checklist of what to look for: cash, e-wallets, crypto, gift cards and unexplained transfers.
                2. Every account's monthly statement reviewed against the checklist.
                3. Any suspicious entry explained or raised with your accountability partner.
                4. A monthly total of gambling spend recorded, ideally zero.

                ## Notes
                Start from the **Metrics log** template to keep the monthly totals in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account's statement is reviewed each month against a written checklist, with the month's gambling spend logged."
                cadence: rolling
              tasks:
                - "Write a one-page checklist of the ways gambling can hide in a statement"
                - "Set up a metrics log with a line for each month's gambling spend"
                - "Review every statement against the checklist @recurring(monthly:9)"
                - "Raise any entry you cannot explain at the next weekly check-in"
            - name: Blocks and exclusions maintenance check
              description: |-
                ## Purpose
                Blocking apps stop working after phone upgrades, new devices arrive, and self-exclusions quietly expire at the end of their term, often just when you feel strong enough not to bother renewing. A short monthly test and a quarterly look at expiry dates keeps every barrier you built actually working.

                ## Milestones
                1. A list of every block and exclusion with its expiry or renewal date.
                2. A monthly test confirming blocked sites still fail to load on each device.
                3. Renewal reminders set at least a month before each exclusion ends.
                4. New devices added to the blocker within a day of arriving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's block test is noted and every exclusion has a renewal reminder at least a month before its end date."
                cadence: rolling
              tasks:
                - "List every block and exclusion with its end or renewal date"
                - "Test that a gambling site fails to load on each device @recurring(monthly:17)"
                - "Check exclusion end dates and set renewal reminders @recurring(quarterly)"
                - "Install the blocker on any new phone or laptop the day it arrives"
            - name: Weekly gambling support group
              description: |-
                ## Purpose
                Groups of people recovering from gambling, whether a twelve-step fellowship such as Gamblers Anonymous or a facilitated group run by a treatment service, offer something no app can: people who have done the same things and stopped. Attending weekly for at least two months gives a group a fair test.

                ## Milestones
                1. Two or three groups found, online or in person, with their days and times.
                2. At least two different groups tried before settling on one.
                3. A regular weekly group attended for eight weeks.
                4. A contact from someone in the group saved, for use between meetings.

                ## Notes
                Partners and family can attend separate groups for affected others, which the support plan project for family members covers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regular gambling support group has been attended weekly for eight weeks and one contact from it is saved."
                cadence: rolling
              tasks:
                - "Find two or three gambling support groups and note their times"
                - "Try at least two groups before choosing one"
                - "Attend your weekly support group meeting @recurring(weekly:wed)"
                - "Swap numbers with one person you trust from the group"
            - name: Payday safeguard plan
              description: |-
                ## Purpose
                Payday is the highest-risk day of the month for many people in recovery: a full account, a sense of having earned it, and old habits timed around it. A plan that sends bills, debt payments and savings out the day pay lands, before the money can be spent, leaves only what is safe within reach.

                ## Milestones
                1. Standing orders or direct debits set to leave within a day of pay arriving.
                2. A separate spending account holding only the week's allowance.
                3. Something planned and gambling-free booked for every payday evening.
                4. Three paydays passed under the plan without a bet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bills, debt payments and savings leave automatically within a day of pay, and three paydays in a row have passed without gambling."
                cadence: rolling
              tasks:
                - "Move bill and debt payment dates to the day after payday"
                - "Set up a separate spending account for the weekly allowance"
                - "Plan something for the evening before and of payday @recurring(monthly:24)"
                - "Reread your reasons for stopping on the morning pay arrives"
            - name: Weekly cash allowance with cards held by someone else
              description: |-
                ## Purpose
                Some people in early recovery choose to hand card and online banking access to a partner or relative for a while and live on a fixed weekly amount. It feels drastic, but it takes the decision out of weak moments, and an agreed end date makes it a temporary scaffold rather than a permanent loss of independence.

                ## Milestones
                1. A weekly amount agreed that covers real needs.
                2. Cards, online banking access or both handed over, with what is held written down.
                3. A review date set, usually three to six months ahead.
                4. A plan agreed to return access gradually rather than all at once.

                ## Notes
                The arrangement should be agreed, not imposed, and either person should be able to reopen it by talking. Some banks offer third-party or view-only access that makes this simpler.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written agreement records the weekly allowance, what the trusted person holds and the date the arrangement will be reviewed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out a weekly amount that covers food, travel and essentials"
                - "Agree with your trusted person which cards or logins they will hold"
                - "Collect the agreed weekly allowance @recurring(weekly:mon)"
                - "Set a review date three to six months ahead"
            - name: High-risk fixtures and dates calendar
              description: |-
                ## Purpose
                Big sporting weekends, race festivals, cup finals, your birthday and the anniversary of a big win all raise urges in a predictable way. Marking them in advance, with a plan for each, means they arrive as known risks rather than ambushes.

                ## Milestones
                1. The next three months of major fixtures and personal high-risk dates in your calendar.
                2. A plan beside each: who you will be with and what you will do instead.
                3. Extra support booked around the biggest dates, such as an additional group meeting.
                4. The calendar refreshed every quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your calendar shows the next quarter's high-risk dates, each with a one-line written plan."
                cadence: cyclic
              tasks:
                - "List the sports and events you used to bet on most"
                - "Add the next three months of big fixtures to your calendar"
                - "Write a one-line plan beside each high-risk date"
                - "Add the following quarter's fixtures and race days @recurring(quarterly)"
            - name: Monthly recovery review
              description: |-
                ## Purpose
                Looking back once a month over the log, the money and the urges shows what is working and what needs adjusting, before small drifts become a relapse. Thirty minutes with a fixed set of questions is enough, and sharing the summary with a counsellor or partner keeps it honest.

                ## Milestones
                1. A fixed set of five review questions written down.
                2. Gamble-free days, urges, money saved and debt paid down summarised each month.
                3. One change chosen for the coming month.
                4. Six monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews are written, each with figures for gamble-free days and money and one chosen change."
                cadence: rolling
              tasks:
                - "Write five questions to answer at every monthly review"
                - "Hold your monthly recovery review and note one change @recurring(monthly:28)"
                - "Ask the agent to summarise the month's log entries before each review"
                - "Share the summary with your counsellor or accountability partner"
            - name: Gambling marketing and advert filter
              description: |-
                ## Purpose
                Free bet offers, bonus texts and betting adverts around sport are built to prompt action, and people in recovery often find them arriving weeks after closing an account. Withdrawing consent, muting betting accounts on social media and changing ad settings cuts the volume sharply.

                ## Milestones
                1. Marketing consent withdrawn from every operator you can find.
                2. Betting, tipster and casino accounts muted or unfollowed on social platforms.
                3. Gambling ads switched off or limited in each platform's ad settings where offered.
                4. Any new gambling message blocked within a day of arriving.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No gambling marketing has reached your inbox, texts or social feeds for a full calendar month."
                cadence: rolling
              tasks:
                - "Withdraw marketing consent from every gambling operator you used"
                - "Unfollow or mute betting tipster and casino accounts"
                - "Turn off gambling ads in each social platform's ad settings"
                - "Block and unsubscribe from any gambling message that got through @recurring(monthly:3)"
            - name: How gambling products are designed to keep you playing
              description: |-
                ## Purpose
                Knowing the mechanics, from house edge and return to player figures to near misses, losses disguised as wins, in-play betting and cash-out buttons, makes it easier to see a slot or bet builder as a product engineered for profit rather than a test of skill. Many people find this knowledge takes away some of the pull.

                ## Milestones
                1. House edge and return to player explained in your own words.
                2. Near misses, variable rewards and losses disguised as wins understood.
                3. The design features of the products you used most identified and named.
                4. A one-page note of what you learned kept with your reasons list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains in your own words how the products you used most were designed to keep you betting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language explainer on house edge and return to player"
                - "Look up how near misses and losses disguised as wins work"
                - "Name the design features of the two products you used most"
                - "Write a one-page note of what you learned"
            - name: Urge surfing for gambling cravings
              description: |-
                ## Purpose
                An urge to gamble usually peaks and fades within twenty to thirty minutes if it is not acted on. Urge surfing teaches you to notice the urge in the body, rate it and ride it out without fighting or obeying it, and practising when calm makes the skill usable when the urge is strong.

                ## Milestones
                1. The urge surfing steps learned from your counsellor, a workbook or a recorded exercise.
                2. The exercise practised weekly while calm.
                3. The technique used during at least three real urges, with before and after ratings logged.
                4. A short version of the steps saved on your phone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Urge surfing has been used during at least three real urges, each with before and after ratings logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Learn the urge surfing steps from a workbook or recording"
                - "Practise a ten-minute urge surfing exercise while calm @recurring(weekly:thu)"
                - "Use the technique during a real urge and log the ratings"
                - "Save a three-line version of the steps on your phone"
            - name: Spotting gambling thinking traps
              description: |-
                ## Purpose
                Thoughts like 'I'm due a win', 'I can win it back' or 'I know this league' keep people betting long after the losses mount. Learning to name these traps, including the gambler's fallacy, chasing losses and the illusion of control, and to answer them on paper, is a core part of most CBT-based gambling treatment.

                ## Milestones
                1. The common gambling thinking traps listed in your own words.
                2. Your own most frequent gambling thoughts written down.
                3. A balanced answer written for each of your top five.
                4. The answers used during a real urge at least once.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your five most common gambling thoughts are written down, each with a named trap and a balanced reply."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read about the gambler's fallacy, chasing and the illusion of control"
                - "Write down the thoughts that came before your last five bets"
                - "Name the trap behind each thought"
                - "Write a balanced reply to each and keep them on your phone"
            - name: Turning down bets in social settings
              description: |-
                ## Purpose
                Office sweepstakes, the group chat accumulator, a round of poker or a day at the races can put you on the spot in front of people who know nothing about your recovery. Preparing a couple of short, true refusal lines, and deciding in advance how much to explain, makes it easy to say no without a scene.

                ## Milestones
                1. The social situations where bets come up listed.
                2. Two or three short refusal lines written that you are comfortable saying.
                3. A decision made about who, if anyone, gets a fuller explanation.
                4. The lines used in at least two real situations.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two refusal lines are written down and have been used successfully in at least two real situations."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the places and groups where bets get offered to you"
                - "Write two short refusal lines you would actually say"
                - "Rehearse the lines aloud with your trusted person"
                - "Note how each real refusal went afterwards"
            - name: Filling the hours gambling used to take
              description: |-
                ## Purpose
                Evenings, lunch breaks and sleepless nights that gambling once filled are where relapses start. Mapping when you used to gamble and putting something specific in each slot, whether exercise, a class, a hobby with a bit of challenge or time with people, rebuilds a week without a gap shaped like a betting app.

                ## Milestones
                1. The times of day and week you used to gamble mapped.
                2. A specific replacement activity planned for each high-risk slot.
                3. At least one new activity that brings some excitement or challenge tried.
                4. Four weeks of planned evenings and weekends completed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every high-risk time slot in a typical week has a named replacement activity, and four weeks of the plan have been followed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map the hours of the week when you used to gamble"
                - "Choose a replacement activity for each of those slots"
                - "Book or start one activity that brings real challenge or excitement"
                - "Plan next week's evenings and weekend slots @recurring(weekly:fri)"
            - name: Talking to creditors about gambling debts
              description: |-
                ## Purpose
                Calling a lender when you are behind feels humiliating, but lenders in many countries are expected to treat people in financial difficulty fairly, and many have teams trained for exactly this call. Knowing what to say, what to ask for and what not to agree to on the spot protects you from promising payments you cannot keep.

                ## Milestones
                1. A short script prepared: who you are, that you are in difficulty, that you are getting debt advice.
                2. A list of what to ask for, such as a pause while you get advice or a hold on charges.
                3. Every call logged with date, the name of the person and what was agreed.
                4. No new payment arrangement accepted without checking it against your budget first.

                ## Notes
                A free debt advice service can often contact creditors for you. This project prepares the conversation; it does not decide which solution is right for you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A creditor call script exists and every call made is logged with date, contact name and outcome."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a five-line script for calling a creditor"
                - "List what you will ask for and what you will not agree to on the call"
                - "Make the first call to the most urgent creditor"
                - "Log each call with date, name and what was agreed"
            - name: Personal relapse warning signs and responses
              description: |-
                ## Purpose
                Relapse to gambling usually starts days or weeks before a bet: secrecy creeping back, checking odds, a new loan, telling yourself one small bet would be fine. Writing your own warning signs with your counsellor, and a matching action for each, gives you and the people close to you something specific to watch for.

                ## Milestones
                1. Eight to twelve personal warning signs listed, covering behaviour, thoughts and money.
                2. A specific response written beside each sign.
                3. The list shared with your accountability partner, with permission to mention any sign they notice.
                4. A weekly self-check against the list started.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of at least eight warning signs, each with a response, is shared with your accountability partner."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List what you did in the weeks before your last relapse or heavy spell"
                - "Go through the list with your counsellor and add a response to each"
                - "Give a copy to your accountability partner"
                - "Check yourself against the warning signs list @recurring(weekly:sat)"
            - name: Accepting money lost without chasing it
              description: |-
                ## Purpose
                The urge to win back what was lost is one of the strongest drivers of continued gambling, and it rests on the hope that the money is still recoverable. Facing the real total, grieving it and deciding that it is gone is painful, but many people find it ends the chase in a way no block can.

                ## Milestones
                1. The total lost written down, or a best estimate agreed with your counsellor.
                2. The thought 'I can win it back' examined in a session or on paper.
                3. A sentence of acceptance written in your own words.
                4. Slow rebuilding through budgeting and repayment chosen in place of the chase.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The estimated total lost is written down alongside a sentence of acceptance and a chosen rebuilding plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down your best estimate of the total lost"
                - "Talk through the urge to win it back with your counsellor or group"
                - "Write one sentence accepting that the money is gone"
                - "Link the sentence to your debt repayment and budget plans"
            - name: Choosing a gambling treatment route
              description: |-
                ## Purpose
                Options range from helpline counselling and online CBT programmes to specialist gambling clinics, group programmes and, for severe harm, residential treatment, and availability and waiting times differ widely by country and region. Comparing two or three that you could actually access, against cost, intensity and timing, helps you start the right one rather than the first one offered.

                ## Milestones
                1. Two or three accessible treatment options listed with cost, format and waiting time.
                2. Each compared against your severity and your work, family and money constraints.
                3. A route chosen, with the reasons written down.
                4. A start date confirmed.

                ## Notes
                Your assessment from the support service is the best guide to intensity. A long wait is a reason to start something lighter now, not to wait with nothing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment route is chosen from at least two compared options and a start date is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your support service which treatment options you can access"
                - "Note cost, format, intensity and waiting time for each"
                - "Choose a route and write down why"
                - "Confirm the start date and add it to your calendar"
            - name: Debt repayment plan agreed with a debt adviser
              description: |-
                ## Purpose
                Independent debt advice services, free in many countries, can review your debt list and budget and explain the options open to you, from informal payment plans to formal arrangements. A plan agreed with an adviser, rather than improvised under pressure from the loudest creditor, means payments you can keep and creditors who know what is coming.

                ## Milestones
                1. An appointment held with a free, regulated debt advice service.
                2. The options explained to you written down, with the adviser's reasoning.
                3. A repayment plan chosen and creditors informed.
                4. Three months of agreed payments made on time.

                ## Notes
                Start from the **Remediation plan** template. Check whether a debt service charges fees before signing anything; free regulated services exist in many countries.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A repayment plan agreed with a debt adviser is written down, creditors are informed and three months of payments are made."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book an appointment with a free debt advice service"
                - "Bring your debt list and three months of statements to the appointment"
                - "Write down each option the adviser explains and their reasoning"
                - "Make the agreed payments and log each one @recurring(monthly:12)"
            - name: Rebuilding the household budget after gambling
              description: |-
                ## Purpose
                Gambling distorts a budget in ways that are easy to miss: borrowing to cover bills, money shuffled between accounts, essentials skipped. A fresh budget built from real statements, with debt payments and a small buffer in it, shows what life costs without gambling and how much is freed each month.

                ## Milestones
                1. Three months of real spending sorted into categories.
                2. A monthly budget built with bills, debt payments, essentials and a small buffer.
                3. The budget reviewed with your accountability partner or debt adviser.
                4. Actual spending compared with the budget each month.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written monthly budget covers bills, debt payments and essentials and has been compared with actual spending for three months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Sort three months of spending into categories"
                - "Build the budget from the monthly budget and bills template"
                - "Review the draft with your accountability partner or debt adviser"
                - "Compare the month's actual spending with the budget @recurring(monthly:2)"
            - name: Leaving betting group chats and staked leagues
              description: |-
                ## Purpose
                Group chats that share bet slips, fantasy leagues with cash prizes and the weekly accumulator syndicate keep gambling in your pocket even after every app is gone. Deciding which to leave, which to mute and what to tell the people in them protects the friendships while removing the pressure.

                ## Milestones
                1. Every chat, league and syndicate involving money or tips listed.
                2. A decision recorded for each: leave, mute, or stay with stakes removed.
                3. A short message sent to any group you are leaving.
                4. One gambling-free way to stay in touch with those friends arranged.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every chat, league and syndicate involving stakes has a recorded decision, and the leave or mute steps are done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every chat, league and syndicate that involves bets or tips"
                - "Decide for each whether to leave, mute or stay without stakes"
                - "Send a short message to any group you are leaving"
                - "Suggest one gambling-free meet-up with those friends"
            - name: Watching sport without betting
              description: |-
                ## Purpose
                For many sports bettors, the match and the bet have become the same thing, and watching without a stake can feel flat or unbearable at first. Some people take a break from watching for a few months; others watch with friends, phone out of reach, avoiding channels heavy with odds. Deciding which you will try, and for how long, beats finding out mid-match.

                ## Milestones
                1. An honest note on how watching sport affects your urges.
                2. A choice made between a set break from watching and watching under agreed conditions.
                3. The conditions written down, such as who with, which channels and where the phone goes.
                4. The choice reviewed after six weeks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on watching sport, with conditions and a six-week review date, is in your recovery notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note your urge rating during the next match you watch or skip"
                - "Choose between a set break and watching under conditions"
                - "Write the conditions down and share them with your trusted person"
                - "Review the choice after six weeks"
            - name: Credit file check and lending protections
              description: |-
                ## Purpose
                Credit applications made in a hurry are common in heavy gambling, and some people discover loans or cards they barely remember. Checking your credit file shows every account and search, and some countries let you add a voluntary block or notice that makes new borrowing harder, a strong barrier against chasing with borrowed money.

                ## Milestones
                1. Your credit report obtained from at least one credit reference agency.
                2. Every account on it checked against your debt list.
                3. Any lending block or protective notice available in your country found and decided on.
                4. A yearly check in the calendar.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your credit report has been checked against your debt list and a decision on any available lending block is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request your free credit report from a credit reference agency"
                - "Check every account and search against your debt list"
                - "Find out whether your country offers a voluntary lending block"
                - "Check your credit file for new searches or accounts @recurring(yearly)"
            - name: E-wallet, crypto and prepaid card back doors closed
              description: |-
                ## Purpose
                With card blocks and exclusions in place, the remaining routes are usually e-wallets, crypto exchanges, prepaid cards, gift cards and payment apps. Listing and shutting the ones you used, or limiting them, closes the workarounds that urges go looking for.

                ## Milestones
                1. Every e-wallet, crypto exchange, prepaid card and payment app you have used listed.
                2. Each one closed, or its link to your bank removed.
                3. Saved card details deleted from browsers and app stores.
                4. The sites you used added to your blocker's custom list where it allows.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every e-wallet, crypto exchange and prepaid card you used is closed or unlinked, and saved card details are gone from browsers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every e-wallet, crypto exchange and prepaid card you have used"
                - "Close each one or unlink it from your bank account"
                - "Delete saved card details from browsers and app stores"
                - "Add the sites you used to your blocker's custom list"
            - name: First 90 gambling-free days
              description: |-
                ## Purpose
                The first three months carry the highest relapse risk, with urges, guilt and money pressure all at their peak. Treating the 90 days as a defined stretch, with support booked, safeguards in place and a way to mark the end, gives a clear goal that feels reachable.

                ## Milestones
                1. Day 1 recorded and the day 90 date in your calendar.
                2. Weekly support in place for the whole period.
                3. Day 30 and day 60 reviewed with your counsellor or trusted person.
                4. Day 90 marked in a way that matters to you, without gambling.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ninety gambling-free days are recorded in the log, with check-ins held at day 30 and day 60."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write today's date as day 1 and put day 90 in your calendar"
                - "Book check-ins with your counsellor or trusted person at day 30 and day 60"
                - "Choose how you will mark day 90"
                - "Mark day 90 with the people who helped"
            - name: Getting through a major tournament without betting
              description: |-
                ## Purpose
                A football World Cup, a major tennis or golf championship or a big racing festival brings weeks of advertising, office sweepstakes and friends betting, all at once. Planning before it starts, with extra support, a decision about watching and an exit plan for social occasions, turns the tournament into something you get through on your terms.

                ## Milestones
                1. The tournament dates and the matches or races most likely to trigger you marked.
                2. Extra support booked for the tournament weeks.
                3. Decisions on watching and on social plans made in advance.
                4. The tournament finished gambling-free, with a short note on what helped.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tournament passes without a bet, with extra support attended during it and a note on what helped."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark the tournament dates and your riskiest matches in the calendar"
                - "Book an extra support session or group for the tournament weeks"
                - "Decide in advance which matches you will watch and with whom"
                - "Write a short note on what helped once it ends"
            - name: Casino holidays, cruises and stag weekends
              description: |-
                ## Purpose
                Trips can put you next to a casino floor, a ship's slot machines or a group heading to the races, far from your usual support. Choosing destinations with care where you can, and planning the risky moments when you cannot, means a holiday does not undo months of recovery.

                ## Milestones
                1. Gambling venues at or near the destination identified before booking or travel.
                2. Venue self-exclusion arranged where available, and someone in the group told.
                3. A plan for evenings and free time written down.
                4. Your helpline and support contacts saved for the trip.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each trip, nearby gambling venues are identified and a written plan for evenings and free time exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the destination, ship or venue for casinos and betting shops"
                - "Tell one person on the trip about your recovery"
                - "Plan the evenings and free time before you leave"
                - "Save your helpline and support contacts for use abroad"
            - name: Festive season without scratchcards and syndicates
              description: |-
                ## Purpose
                Scratchcards in stockings, the work lottery syndicate, a flutter on the big holiday race and a bonus landing in your account all cluster around the end of the year. Telling family before gifts are bought, leaving syndicates in good time and planning the bonus means the season holds fewer surprises.

                ## Milestones
                1. Family asked not to give scratchcards, lottery tickets or betting vouchers.
                2. Lottery and office syndicates left before the season starts.
                3. Any bonus or gift money given a planned home in advance.
                4. The holidays passed without a bet.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Family have been asked not to give gambling gifts, syndicates are left and any bonus has a planned destination before the season starts."
                cadence: cyclic
              tasks:
                - "Ask family not to give scratchcards, lottery tickets or betting vouchers"
                - "Leave any lottery or office syndicate before the festive season"
                - "Decide in advance where bonus or gift money will go"
                - "Note what made the season harder or easier for next year"
            - name: One-year gambling-free review
              description: |-
                ## Purpose
                Twelve months without gambling is a real achievement and a sensible point to look at the whole picture: debts paid, trust rebuilt, blocks still needed and which support to keep. A structured review on the anniversary, repeated each year, keeps recovery deliberate rather than assumed.

                ## Milestones
                1. Money saved and debt repaid over the year added up.
                2. Your screening questionnaire retaken and compared with the baseline.
                3. Each support, block and exclusion reviewed, with a decision recorded.
                4. The anniversary marked with the people who helped.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary review records money saved, a repeat screening score and a decision on each block and support."
                cadence: cyclic
              tasks:
                - "Add up money saved and debt repaid since day 1"
                - "Retake the screening questionnaire you used at the start"
                - "Decide which blocks and supports to keep for the next year"
                - "Hold the gambling-free anniversary review @recurring(yearly)"
            - name: Support plan for a partner or family member affected
              description: |-
                ## Purpose
                Partners, parents and adult children of someone who gambles carry debt, broken trust and constant worry, often in silence. Help exists for affected others in their own right, through helplines, family support groups and counselling, and a plan for your own wellbeing and finances matters whether or not the person gambling is ready to change.

                ## Milestones
                1. A helpline or service for affected family members contacted.
                2. Your own income, savings and joint accounts reviewed, with any joint debts listed.
                3. A support group or counsellor for yourself found.
                4. Clear limits written down about money you will and will not provide.

                ## Notes
                If you share accounts or debts, free debt advice applies to you too. You are not responsible for someone else's recovery.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You have contacted an affected-others service, reviewed your own finances with an adviser and written down your limits on money."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Call a helpline that supports family members of people who gamble"
                - "List joint accounts and debts and ask a debt adviser what protects you"
                - "Find a family support group or counsellor for yourself"
                - "Write down your limits on lending or giving money"
                - "Keep a weekly half hour for your own support @recurring(weekly:tue)"
            - name: Talking to children about a parent's gambling
              description: |-
                ## Purpose
                Children notice tension, missing money and broken promises long before anyone explains them, and often blame themselves. An age-appropriate conversation, planned with the other parent or a counsellor, gives them a simple truth, reassurance that it is not their fault and a named adult to talk to.

                ## Milestones
                1. Advice from a family support service or counsellor on what to say at each child's age.
                2. A short, honest explanation agreed between the adults.
                3. The conversation held at a calm time.
                4. Each child given a named adult they can talk to.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Each child has been given an age-appropriate explanation and the name of an adult they can talk to."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a family support service how to explain gambling at each child's age"
                - "Agree a short, honest explanation with the other adult"
                - "Choose a calm time with no rush for the conversation"
                - "Tell each child who they can talk to if they are worried"
            - name: Student loan and first salary safeguards
              description: |-
                ## Purpose
                Young adults meet gambling at its most aggressive: a student loan or first salary arriving in one lump, free bet offers on social media and friends who bet as a social habit. Spreading the lump sum, setting blocks from the first day of independence and knowing where campus support sits stops early harm hardening into lasting debt.

                ## Milestones
                1. Loan or salary money split so rent and bills are paid before spending money is released.
                2. Weekly spending amounts set in a separate account.
                3. The student support or wellbeing service contact saved, along with the gambling helpline.
                4. A plan for nights out where betting or casinos are likely.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Loan or salary instalments are split with rent and bills paid first, and weekly spending sits in a separate account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set rent and bills to leave on the day the loan or salary arrives"
                - "Move the rest into weekly amounts in a separate account"
                - "Ask your student support service what gambling help they offer"
                - "Agree with a friend how you will leave a night out heading to a casino"
            - name: Loot boxes, skins and gaming spend for teenagers
              description: |-
                ## Purpose
                Loot boxes, skin betting and social casino games teach gambling mechanics to teenagers, and spending can run into hundreds before parents notice. Setting platform spending limits, agreeing house rules and talking openly about how these features make money protects a young person without banning gaming.

                ## Milestones
                1. Spending limits or purchase approvals set on each console, phone and store account.
                2. Gaming spend over the last six months checked.
                3. House rules on paid items agreed with your teenager.
                4. A calm conversation held about loot boxes and skin gambling sites.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Purchase approval or spending limits are on every gaming account and house rules on paid items are agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check six months of purchase history on each gaming account"
                - "Turn on purchase approval or spending limits on every platform"
                - "Agree house rules on paid items with your teenager"
                - "Explain how loot boxes and skin betting sites make money"
            - name: Retirement lump sums and daytime gambling
              description: |-
                ## Purpose
                Retirement brings long unstructured days, sometimes loneliness, and access to pension lump sums or savings that can vanish quickly through online slots, bingo or the bookmaker. Keeping large sums out of easy reach, filling the daytime hours and letting someone you trust see your accounts all help at a stage when losses are hard to recover.

                ## Milestones
                1. Large sums kept in accounts without card access or with a withdrawal delay.
                2. A trusted person given view-only access or regular sight of statements.
                3. Weekday mornings and afternoons given regular commitments.
                4. The gambling helpline saved and, where needed, used.

                ## Notes
                Ask your bank or a regulated financial adviser which account types suit you; this project is about distance from the money, not about where to invest it.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Savings and lump sums sit away from card access, a trusted person sees your statements and weekdays have regular commitments."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your bank about accounts with withdrawal notice or no card access"
                - "Agree with a trusted person how they will see your statements"
                - "Book two regular weekday commitments outside the home"
                - "Save the gambling helpline number in your phone and address book"
            - name: Working in or around the gambling industry
              description: |-
                ## Purpose
                People who work in betting shops, casinos, gambling companies or sports media face constant exposure, and some employers bar staff from gambling while others make it part of the culture. Weighing whether to stay, move roles or leave, with a counsellor and an honest look at the risk, is a decision worth making deliberately.

                ## Milestones
                1. The daily exposure in your role written down honestly.
                2. Your employer's policy on staff gambling and any support available checked.
                3. The options compared: stay with safeguards, change role, or leave.
                4. A decision recorded with a review date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on your job, made with your counsellor, records the options weighed and a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every way your job puts gambling in front of you"
                - "Read your employer's policy on staff gambling and wellbeing support"
                - "Talk the options through with your counsellor"
                - "Record your decision and a date to review it"
            - name: Restarting after a gambling relapse
              description: |-
                ## Purpose
                Relapse is common in gambling recovery and does not erase what was learned. What matters is how quickly it stops, how honestly it is shared and what it teaches, and a restart routine written before it is needed keeps a single slip from becoming a run of chasing.

                ## Milestones
                1. A restart routine written: stop, tell someone, check blocks, contact support.
                2. The routine shared with your accountability partner and counsellor.
                3. After any relapse, a short review of what happened and which safeguard failed.
                4. One safeguard strengthened as a result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written restart routine is shared with your partner and counsellor, and every relapse has a review naming one strengthened safeguard."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a four-step restart routine for the day after a bet"
                - "Share the routine with your accountability partner and counsellor"
                - "Ask the agent to draft review questions for use after a relapse"
                - "Note which safeguard failed and how you will strengthen it"
            - name: Gambling alongside drinking, low mood or ADHD
              description: |-
                ## Purpose
                Problem gambling often travels with other difficulties, such as heavy drinking, depression, anxiety or ADHD, and each can make the others harder to shift. Making sure your gambling counsellor and your doctor both know the full picture lets treatment address them together rather than one at a time.

                ## Milestones
                1. Other issues that affect your gambling listed honestly.
                2. The list shared with your gambling treatment team and your doctor.
                3. A note of who is treating what, and how they will share information if you consent.
                4. These issues covered at each treatment review.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your gambling treatment team and your doctor both hold a written list of the other issues affecting your gambling."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List anything else that affects your gambling, such as drinking or mood"
                - "Bring the list to your next gambling treatment session"
                - "Ask your doctor whether any of these need separate assessment"
                - "Raise mood, drinking and sleep at each treatment review @recurring(quarterly)"
            - name: Legal advice when gambling involved others' money
              description: |-
                ## Purpose
                Sometimes gambling has involved money borrowed under false pretences, taken from an employer, or drawn from a joint or client account, and fear of the consequences keeps people stuck. Getting qualified legal advice early, with the facts and documents organised for it, puts you in a better position than waiting for the matter to surface on its own.

                ## Milestones
                1. A qualified lawyer or free legal advice service identified.
                2. A private, factual timeline of what happened prepared for them.
                3. Relevant statements and documents gathered.
                4. Advice received and the agreed next steps written down.

                ## Notes
                This project organises the facts for a professional. It does not tell you what to do; only a lawyer who knows your situation can.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A qualified lawyer has reviewed a written timeline and documents, and their advice and next steps are recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find a qualified lawyer or free legal advice service near you"
                - "Write a private, factual timeline of what happened"
                - "Gather the statements and documents the timeline refers to"
                - "Write down the advice and agreed next steps after the meeting"
            - name: Becoming a gambling recovery peer supporter
              description: |-
                ## Purpose
                Helping someone earlier on, through a fellowship, a peer mentoring scheme or a treatment service's volunteer programme, can strengthen your own recovery as well as theirs, usually once you are a year or more gamble-free. It needs boundaries and training, so it works best as a planned step rather than an impulse.

                ## Milestones
                1. Your sponsor, counsellor or group asked whether you are ready.
                2. A peer support or volunteer role found and its training completed.
                3. Boundaries agreed: hours, contact methods and what to pass on to professionals.
                4. Your own support kept in place while you help others.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A peer support role has been taken up after completing its training, with written boundaries and your own support still in place."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your counsellor or group whether you are ready to support others"
                - "Find peer mentoring or volunteer roles with gambling services"
                - "Complete the training the role requires"
                - "Write down your boundaries on time and contact"
---

# Gambling Harm Recovery

This area is for anyone whose betting, slots, scratchcards or casino play has started costing more than money, and for the family living alongside it. It starts with the foundations (an honest baseline, bank blocks, self-exclusion, blocking software, closed accounts and a first call for support), then the routines that keep those barriers working, the skills of handling urges and gambling thinking, the treatment and money decisions, the dates worth planning for, projects for partners, parents, students and retirees, and finally the work of long-term recovery.

What repeats is a daily gamble-free tick, a weekly money check-in and support group, a monthly statement review, block test and recovery review, a payday plan, a quarterly look at fixtures and exclusion dates, and an anniversary review each year. The Habit tracker, Metrics log, Remediation plan, Monthly budget and bills and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
