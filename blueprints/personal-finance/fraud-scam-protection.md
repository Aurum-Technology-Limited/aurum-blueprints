---
id: personal-finance.fraud-scam-protection
name: Fraud & Scam Protection
description: "Locked-down accounts and alerts, a family call-back rule, the scam scripts criminals actually use, and a tested plan for the first hour after money goes missing."
category: personal
version: 1.0.0
tags: [personal-finance, fraud-scam-protection, everyone, retiree, scams, identity-theft, account-security, fraud-response]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - metrics-log
    - remediation-plan
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Fraud & Scam Protection
          description: "Protecting bank accounts and cards from scams and fraud, recognising common tricks and acting fast if money is taken."
          projects:
            - name: Fraud hotline card for every bank and card
              description: |-
                ## Purpose
                Criminals rely on you calling a number they gave you, whether it sits in a text, an email or a caller's script. Copying the official fraud line for each bank and card from the back of the card or the provider's own app, onto one printed card, means the right number is in your hand in a panic. It also gives older relatives one simple rule: only ever call the number on the card.

                ## Milestones
                1. The official fraud and lost card number recorded for every bank, card and payment app you use.
                2. Each number checked against the card itself or the provider's app, never a search result.
                3. A printed card kept in your wallet and a second copy kept at home with your papers.
                4. Any national scam reporting line, such as 159 in the UK, added at the bottom.

                ## Notes
                Search results and sponsored adverts are a known route to fake helplines, so copy numbers only from the physical card, a statement or the official app.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A wallet-sized card listing a verified fraud number for every bank and card you hold exists in your wallet and at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Lay out every bank and credit card you hold on the table"
                - "Copy the fraud number printed on the back of each card"
                - "Confirm each number inside the provider's own app or statement"
                - "Print the list on a small card and laminate or tape it"
                - "Put one copy in your wallet and one with your household papers"
            - name: Inventory of accounts, cards and payment apps
              description: |-
                ## Purpose
                Most people cannot list every account a fraudster could reach: the old savings account, the store card, the dormant payment app linked to a debit card. A single inventory showing each account, how you sign in and which phone number and email it uses shows exactly where the weak spots are. Every later project in this area works from this list.

                ## Milestones
                1. Every current, savings, credit, store card, pension and investment account listed.
                2. Payment apps, digital wallets and shopping sites with stored cards added.
                3. The sign-in method, linked email and linked phone number noted for each.
                4. Dormant accounts marked for closure or a security check.

                ## Notes
                Keep the inventory in your password manager or a locked note, never as an unprotected file. It lists where money is, so treat it like a key.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stored inventory lists every financial account and payment app with its sign-in method, linked email and phone number, and dormant ones are flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every bank, card and savings provider you can remember in ten minutes"
                - "Search your email for welcome messages to find forgotten accounts"
                - "Check your phone wallet and shopping sites for stored card details"
                - "Record the sign-in method and linked contact details for each account"
                - "Flag dormant accounts to close or secure"
            - name: Instant transaction alerts on every account
              description: |-
                ## Purpose
                Fraud found within minutes is far easier to stop and recover than fraud found on next month's statement. Most banks and card providers offer push or text alerts for every payment, new payee, card used online or abroad, and sign-in from a new device. Switching them on everywhere turns your phone into an early warning system that costs nothing.

                ## Milestones
                1. Push or text alerts switched on for every card payment above a threshold you chose.
                2. Alerts for new payees, changed contact details and new device sign-ins enabled where offered.
                3. A test payment made to confirm alerts arrive within a minute.
                4. Accounts that offer no alerts noted in your inventory as higher risk.

                ## Notes
                Set the threshold low at first, even every transaction, then raise it once you know how noisy it is. A missed alert is worse than a few extra buzzes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account in your inventory either sends real-time payment and new-payee alerts, confirmed by a test, or is marked as having none."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the notification settings in your main banking app"
                - "Turn on alerts for payments, new payees and new device sign-ins"
                - "Repeat the settings for each card and savings provider"
                - "Make a small purchase to check the alert arrives quickly"
            - name: Securing the email account that resets everything
              description: |-
                ## Purpose
                Whoever controls your main email can reset the password on almost every other account, which is why criminals target it first. Checking the recovery phone and address, removing old sessions and hunting for forwarding rules a thief may have planted closes the back door to your banking. An hour here protects more than any single bank setting.

                ## Milestones
                1. A long unique password and two-step sign-in set on the main email account.
                2. Recovery phone number and backup email confirmed as yours and current.
                3. Forwarding rules, filters and connected apps checked and any unknown ones removed.
                4. Every signed-in device reviewed and unfamiliar sessions signed out.

                ## Notes
                Hidden forwarding rules that send bank emails to a stranger are a classic sign of compromise. Check them even if nothing feels wrong.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main email account has a unique password, two-step sign-in, verified recovery details and no unknown forwarding rules or sessions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the security page of your main email account"
                - "Check the recovery phone number and backup email are still yours"
                - "Delete any forwarding rule or filter you did not create"
                - "Sign out every device and session you do not recognise"
                - "Turn on two-step sign-in using an app rather than text if offered"
            - name: Two-step verification on money accounts and apps
              description: |-
                ## Purpose
                Stolen passwords alone should never be enough to empty an account. Turning on a second step, ideally an authenticator app or the bank's own app approval, on every bank, card, payment app and investment platform makes most account takeovers fail. Starting with the accounts that hold the most money gets the biggest gain first.

                ## Milestones
                1. Accounts ranked by the money or credit they could expose.
                2. Two-step sign-in active on every account that offers it, starting with the largest.
                3. Backup codes stored in your password manager or a locked note.
                4. Accounts still relying on text codes alone listed for a later switch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every financial account that supports it uses two-step sign-in, with backup codes stored and text-only accounts listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank your accounts by how much money each could expose"
                - "Install one authenticator app on your phone"
                - "Enable two-step sign-in on the three largest accounts first"
                - "Save each set of backup codes somewhere locked"
                - "Work through the remaining accounts in the inventory"
            - name: Password manager with unique banking passwords
              description: |-
                ## Purpose
                Reused passwords are how a breach at a shopping site becomes a break-in at your bank. A password manager lets you give every financial account a long, unique password and false answers to security questions without remembering any of them. For retirees, a written password book kept at home is a reasonable alternative, as long as each password is still unique.

                ## Milestones
                1. A password manager, or a home password book, chosen and set up.
                2. Every banking, card and payment app password replaced with a unique one.
                3. Guessable security answers such as a mother's maiden name replaced with stored random answers.
                4. A trusted person told where the master password or book is kept in an emergency.

                ## Notes
                Never store the master password in the manager itself or in an email to yourself. A paper copy in a safe place at home is fine.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every financial account has a unique password and random security answers, all stored in one password manager or home password book."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a password manager or a dedicated home password book"
                - "Change your main bank password to a long unique one"
                - "Replace guessable security answers with random stored ones"
                - "Update the rest of the financial accounts over the next fortnight"
            - name: Mobile number takeover protection
              description: |-
                ## Purpose
                If a criminal persuades your mobile network to move your number to their SIM, every text code and bank call comes to them. Adding a port-out lock or account PIN with your network, and knowing the warning sign of a phone that suddenly shows no signal, blocks a fraud that often ends with accounts emptied overnight.

                ## Milestones
                1. A security PIN or password set on your mobile network account.
                2. Number porting or SIM swap protection switched on where the network offers it.
                3. The network's own fraud line added to your hotline card.
                4. A household rule agreed: sudden loss of signal means call the network from another phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your mobile account has a PIN and port-out protection set, and the network's fraud number is on your hotline card."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sign in to your mobile network account online"
                - "Set a security PIN that is not your birthday or card PIN"
                - "Ask the network to add SIM swap or port-out protection"
                - "Write the network's fraud number on your hotline card"
            - name: Family code word and call-back rule
              description: |-
                ## Purpose
                Messages that open with 'Hi Mum, this is my new number' and calls using a cloned voice work because they create panic before anyone checks. A shared code word, plus a rule that any request for money is checked by calling back on the old saved number, gives every family member permission to pause. It is the single most effective protection for grandparents and parents.

                ## Milestones
                1. A code word chosen that is not on social media or guessable from family facts.
                2. Every household member and close relative told the word in person or by phone.
                3. A written rule agreed: no money moves until the request is confirmed on a known number.
                4. The rule rehearsed once with an older relative using a pretend message.

                ## Notes
                Agree the word face to face or on a call, never by text. Change it if it is ever used in a real check.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A family code word and call-back rule are agreed with every close relative and rehearsed once with the most at-risk member."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a code word nobody could find online"
                - "Share the word with close family on a call or in person"
                - "Agree that money requests are always checked on the saved number"
                - "Rehearse the check with an older relative using a pretend text"
            - name: Fraud response checklist for the first hour
              description: |-
                ## Purpose
                When money leaves an account without permission, the first hour decides how much can be frozen or recalled, and nobody thinks clearly in that hour. A one-page checklist written now, listing who to call, what to say and what to note down, means you or a relative can follow it step by step under stress.

                ## Milestones
                1. A one-page checklist covering calling the bank, freezing cards, changing passwords and reporting.
                2. Space on the sheet for time, amounts, payee details and reference numbers.
                3. The checklist stored with the hotline card and on your phone.
                4. One household member walked through it so two people can use it.

                ## Notes
                Start from the **Operational checklist** template. Put calling the bank first: do not wait to gather evidence before reporting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page first-hour fraud checklist exists on paper and on your phone, and a second household member has read it through."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the call order: bank first, then cards, then email and phone"
                - "Add space for times, amounts, payee names and reference numbers"
                - "Include the national fraud reporting route for your country"
                - "Print the checklist and keep it beside the hotline card"
                - "Talk one other household member through the sheet"
            - name: Personal fraud risk register
              description: |-
                ## Purpose
                Not every exposure matters equally: a pension pot reachable by one phone call matters more than a store card with a small limit. Listing your main risks, how likely each feels and the control you have in place makes it obvious where an evening of effort would help most. It also gives the annual review something concrete to update.

                ## Milestones
                1. Eight to twelve risks listed, such as SIM swap, email takeover or impersonation call.
                2. Each risk rated for likelihood and the money it could cost.
                3. The current control written next to each, or marked as missing.
                4. The three highest risks without a control turned into tasks.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register lists at least eight personal fraud risks with ratings and controls, and the top three gaps have actions assigned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the ways money could be taken from you in fifteen minutes"
                - "Rate each risk for likelihood and possible loss"
                - "Write the control already in place next to each risk"
                - "Turn the three biggest uncontrolled risks into tasks"
            - name: Weekly login, device and payee check
              description: |-
                ## Purpose
                Fraudsters who get into an account often add a payee, change a phone number or set up a standing order days before taking money. Five minutes each week looking at recent sign-ins, linked devices and saved payees catches that groundwork while it can still be reversed. It suits a quiet Sunday with a cup of tea.

                ## Milestones
                1. A fixed weekly slot set for the check.
                2. Saved payees, standing orders and linked devices reviewed in each main account.
                3. Anything unrecognised reported to the bank the same day.
                4. Four weeks of checks completed in a row.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sign-ins, devices and payees on your main accounts are checked weekly, with four consecutive weeks completed and any oddity reported."
                cadence: rolling
              tasks:
                - "Open each main banking app and view the list of saved payees"
                - "Check sign-ins, devices and payees on your main accounts @recurring(weekly:sun)"
                - "Remove payees and standing orders you no longer use"
                - "Call the bank's official number about anything you do not recognise"
            - name: Suspicious message reporting routine
              description: |-
                ## Purpose
                Deleting scam texts and emails protects you once; reporting them gets the sending numbers and fake sites taken down for everyone. Many countries run free forwarding services, such as forwarding texts to 7726 in the UK, and most email providers have a report phishing button. A weekly sweep keeps the inbox clean and makes reporting a reflex.

                ## Milestones
                1. The text, email and website reporting routes for your country written on the hotline card.
                2. A habit of forwarding suspicious messages before deleting them.
                3. A weekly sweep of the inbox, texts and spam folder established.
                4. Older relatives shown how to forward a text in two taps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Suspicious texts and emails are forwarded to the official reporting routes in a weekly sweep, and one older relative can do the same."
                cadence: rolling
              tasks:
                - "Look up the official text and email reporting routes for your country"
                - "Forward the week's suspicious texts and emails, then delete them @recurring(weekly:fri)"
                - "Report any fake website address to the national reporting service"
                - "Show an older relative how to forward a scam text"
            - name: Quarterly credit file check for unknown applications
              description: |-
                ## Purpose
                Identity fraud usually shows up first on a credit file as a search or account you did not open, long before any letter arrives. Checking your file with the main credit reference agencies every quarter, using free statutory or app-based access, spots a fraudulent loan or phone contract early enough to stop it.

                ## Milestones
                1. Free access set up with each main credit reference agency in your country.
                2. Every account, address and search on the file recognised or queried.
                3. Unknown entries disputed with the agency and the named lender.
                4. Quarterly checks completed for a full year.

                ## Notes
                Look at the searches and linked addresses as well as the accounts: a hard search you did not request is often the first sign.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your credit file is checked with each main agency every quarter for a year, with every unknown search or account disputed."
                cadence: cyclic
              tasks:
                - "Sign up for free credit file access with each main agency"
                - "Read every search, address and account on each credit file @recurring(quarterly)"
                - "Dispute any entry you do not recognise with the agency and lender"
                - "Keep a note of each check date and what you found"
            - name: Connected apps and open banking consent review
              description: |-
                ## Purpose
                Budgeting apps, payment services and old shopping accounts can keep access to your bank data or cards for years after you stop using them. Reviewing the third-party consents in each banking app and the stored cards on shopping sites removes routes nobody is watching. A quarterly look is enough for most households.

                ## Milestones
                1. Every open banking or third-party consent listed from each banking app.
                2. Consents for services you no longer use revoked.
                3. Stored cards deleted from shopping sites you rarely use.
                4. The review repeated each quarter with any change noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Only the third-party connections and stored cards you actively use remain, confirmed by a quarterly review."
                cadence: cyclic
              tasks:
                - "Find the connected services page in your main banking app"
                - "Revoke third-party access and stored cards you no longer use @recurring(quarterly)"
                - "Delete saved cards from shopping accounts you rarely use"
                - "Close the shopping accounts you will not use again"
            - name: Monthly device update routine
              description: |-
                ## Purpose
                Banking apps and phone software are updated to close security holes that criminals are already using. Phones, tablets and laptops that skip updates, especially older ones handed down to relatives, become the weak link. A monthly check that every device is on the latest version, with automatic updates switched on, takes ten minutes.

                ## Milestones
                1. Automatic updates switched on for every phone, tablet and computer.
                2. Banking apps set to update automatically from the official store.
                3. Devices too old to receive security updates identified.
                4. A replacement or retirement plan made for any unsupported device used for banking.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every device used for banking runs a supported, current system version, checked monthly, and unsupported ones are no longer used for money."
                cadence: rolling
              tasks:
                - "List every device in the house used for banking or email"
                - "Turn on automatic system and app updates on each device"
                - "Check every banking device is on the latest version @recurring(monthly:9)"
                - "Stop banking on any device that no longer receives updates"
            - name: Monthly scam warnings briefing
              description: |-
                ## Purpose
                Scam scripts change with the news: energy rebates one month, parcel fees the next, tax refunds at filing time. Reading the warnings your regulator, police or consumer body publishes once a month, and passing the most relevant one to family, keeps everyone a step ahead of the latest script.

                ## Milestones
                1. Two or three official warning sources chosen, such as a regulator alert list or police bulletin.
                2. A monthly slot set to read them.
                3. One relevant warning shared each month with family or a neighbour.
                4. Six months of briefings completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Official scam warnings are read monthly and one is shared with family each month for six months running."
                cadence: rolling
              tasks:
                - "Bookmark your regulator's warning list and a police scam bulletin"
                - "Read the latest scam warnings and pick the most relevant @recurring(monthly:22)"
                - "Send that one warning to the family group in plain words"
                - "Sign up for email alerts from one trusted warning source"
            - name: Breached password check and replacement
              description: |-
                ## Purpose
                Companies are breached all the time, and your email address and an old password may already be on a list criminals trade. A breach notification service tells you which leaks include you, so you can change any password that was exposed and check whether it was used anywhere else.

                ## Milestones
                1. Each email address you use registered with a reputable breach notification service.
                2. Every listed breach reviewed for the data it exposed.
                3. Any exposed password changed everywhere it was used.
                4. A quarterly look at new breach notices in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All your email addresses are registered with a breach notification service, and every exposed password has been replaced."
                cadence: rolling
              tasks:
                - "Register your email addresses with a breach notification service"
                - "Write down which breaches include you and what they exposed"
                - "Change any password that appears in a breach"
                - "Review new breach notices and act on any password exposed @recurring(quarterly)"
            - name: Shredding and paper post routine
              description: |-
                ## Purpose
                Bank letters, pre-approved credit offers and old statements in a recycling bin give identity thieves names, account numbers and signatures. A cross-cut shredder and a monthly shredding session for anything with personal details closes a low-tech route that still works, especially for households that still receive a lot of paper.

                ## Milestones
                1. A cross-cut shredder in the house or a shredding service identified.
                2. A tray for papers waiting to be shredded set up near the post.
                3. Paper statements switched to online where you are comfortable doing so.
                4. Monthly shredding sessions happening without reminders.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Papers with personal details are shredded monthly using a cross-cut shredder, and no account letters go in the recycling unshredded."
                cadence: rolling
              tasks:
                - "Buy or borrow a cross-cut shredder"
                - "Set up a tray beside the front door for papers to shred"
                - "Shred everything in the tray that shows personal details @recurring(monthly:27)"
                - "Ask your bank to stop paper statements if you prefer online"
            - name: Annual fraud protection review
              description: |-
                ## Purpose
                Phone numbers change, new accounts get opened and a relative moves into care, and the set-up drifts. A yearly review walks through the hotline card, inventory, alerts, code word and risk register in one sitting so the protections still match your life. Pick a fixed month so it happens.

                ## Milestones
                1. Hotline card and account inventory updated with any new or closed accounts.
                2. Alerts, two-step sign-in and recovery details confirmed on every main account.
                3. Family code word confirmed or changed.
                4. Risk register re-rated and the next year's three improvements chosen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review updates the hotline card, inventory, alerts and risk register, and records three improvements for the year ahead."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Choose the month for your yearly fraud review and put it in the diary"
                - "Walk through hotline card, inventory, alerts and code word @recurring(yearly)"
                - "Re-rate the risk register and pick three improvements"
                - "Note the date and outcome of the review in your inventory"
            - name: Attempted scam log
              description: |-
                ## Purpose
                Keeping a short tally of the scam calls, texts and emails you receive shows which channel you are targeted on and whether your blocking is working. A pattern of pension calls or fake delivery texts tells you where to focus, and a written log is useful evidence if a scam ever succeeds.

                ## Milestones
                1. A simple log set up with date, channel, pretend sender and what was asked.
                2. Each attempt recorded in under a minute.
                3. A monthly count by channel noted.
                4. Six months of data reviewed to see where blocking should improve.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log of scam attempts by date and channel is kept for six months, with monthly totals and one change made as a result."
                cadence: rolling
              tasks:
                - "Set up a log with columns for date, channel, sender and request"
                - "Record each scam call, text or email the day it arrives"
                - "Total the month's scam attempts by channel @recurring(monthly:3)"
                - "Pick one blocking change based on six months of totals"
            - name: Authorised push payment scam patterns
              description: |-
                ## Purpose
                Most money lost to fraud today is sent by the victim, persuaded by a convincing story into paying the criminal directly. Learning the handful of scripts behind these payments (safe account, investment, romance, purchase, invoice and impersonation) lets you spot the shape of a scam however the details change. Recovery of these payments is never certain, so recognising them early matters most.

                ## Milestones
                1. The six common push payment scripts summarised in your own words.
                2. The shared warning signs listed: urgency, secrecy, a new account and pressure to lie to the bank.
                3. Two real case studies from an official source read and discussed.
                4. A one-line personal rule written, such as 'I never move money because someone called me'.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can name the six main push payment scam scripts and their shared warning signs, and a personal rule is written on your hotline card."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read an official guide to push payment scams from your regulator or bank"
                - "Summarise each of the six scripts in two sentences"
                - "Read two real case studies and note where the victim could have paused"
                - "Write your personal rule on the back of the hotline card"
            - name: Spotting phishing emails and smishing texts
              description: |-
                ## Purpose
                Fake parcel, tax, bank and streaming messages are now well written and use real logos, so spelling mistakes are no longer a reliable clue. Practising on real examples, checking sender addresses, hovering over links and asking 'did I expect this?', builds a habit that catches the polished ones. Half an hour of practice beats years of vague caution.

                ## Milestones
                1. Ten real suspicious messages from your own inbox or an official gallery examined.
                2. The checks for sender, link destination and requested action practised on each.
                3. A rule adopted: sign in through the app or a typed address, never a link in a message.
                4. One household member taught the same three checks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have examined ten real phishing messages using the sender, link and request checks, and taught the checks to one other person."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Collect ten suspicious messages from your spam folder or a scam gallery"
                - "Check the real sender address and link destination on each"
                - "Note what each message wanted you to do and how fast"
                - "Teach the three checks to someone in your household"
            - name: Bank and police impersonation call drill
              description: |-
                ## Purpose
                Callers posing as your bank's fraud team or a police officer can spoof the real phone number and already know your name and recent purchases. Your bank and the police will never ask you to move money to a safe account, hand over your card or read out a one-time code. Rehearsing exactly what you will say and do makes hanging up feel normal rather than rude.

                ## Milestones
                1. The things a bank or police officer will never ask written on one card.
                2. A short script practised: 'I will call you back on the number on my card'.
                3. The habit of waiting a few minutes or using another phone before calling back learned.
                4. The drill rehearsed with a partner playing the caller.

                ## Notes
                Landlines can stay connected to the caller after you hang up, so wait or use a mobile before calling the bank back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have rehearsed hanging up on a pretend bank or police caller and calling back on the official number, and the never-asks list is written down."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Write the list of things your bank and police will never ask"
                - "Practise the hang-up line out loud until it feels natural"
                - "Ask a partner to play a pushy caller for five minutes"
                - "Rehearse the hang-up and call-back drill with your household @recurring(yearly)"
            - name: Investment and crypto scam warning signs
              description: |-
                ## Purpose
                Investment scams take the largest sums per victim, often through cloned websites of real firms, celebrity adverts and online contacts who show screenshots of profits. Knowing how to check a firm on your financial regulator's register, how clone firms work and why guaranteed returns are a red flag protects savings without any need to judge the investment itself.

                ## Milestones
                1. Your country's financial regulator register found and searched once for practice.
                2. The clone firm trick understood: real name, fake contact details.
                3. The red flags listed: guaranteed returns, time pressure, crypto-only payment, recovery offers.
                4. A rule written to check any firm with the regulator before sending money.

                ## Notes
                This is about spotting fraud, not choosing investments. Agree any investment decision with a regulated adviser you contacted yourself.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can search the financial regulator's register, explain clone firm fraud, and have a written rule to verify any firm before paying."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find your financial regulator's register and warning list"
                - "Search the register for a firm you already use as practice"
                - "Read the regulator's guidance on clone firms and recovery scams"
                - "Write the investment red flags list beside your hotline card"
            - name: Romance and friendship scam awareness
              description: |-
                ## Purpose
                Romance scams build trust over weeks or months, often with people who are widowed, divorced or isolated, before a sudden emergency needs money. Understanding the stages, and agreeing with a friend that you will talk to them before sending money to anyone met online, protects both savings and dignity. Many victims are retirees who are otherwise very careful.

                ## Milestones
                1. The usual stages understood: contact, rapid closeness, excuses not to meet, then a crisis.
                2. The common requests listed: travel money, medical bills, customs fees, gift cards, crypto.
                3. A trusted friend agreed as the person you talk to before sending money to an online contact.
                4. A reverse image search practised on a profile photo.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can describe the stages of a romance scam, have run a reverse image search, and have named a trusted friend to consult before sending money."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a bank or charity guide to romance scams"
                - "Practise a reverse image search on any profile photo"
                - "Ask a trusted friend to be your check before sending money online"
                - "Note the gift card and crypto requests as automatic red flags"
            - name: Remote access and fake tech support scams
              description: |-
                ## Purpose
                A pop-up warning or a call claiming to be from your broadband provider or a software company ends with you installing screen-sharing software, after which the caller watches you log in to your bank. Knowing that genuine companies do not cold call to fix your computer, and how to close a frozen browser safely, stops one of the scams that most often catches older people.

                ## Milestones
                1. The fake virus pop-up and support call scripts recognised.
                2. Closing a frozen browser window with the keyboard or a restart practised.
                3. Any remote access apps already installed found and removed if not needed.
                4. A rule agreed: only let someone you called yourself onto your screen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "No unknown remote access apps are installed, and you have practised closing a fake pop-up and stated your rule on screen sharing."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Check every device for remote access apps you did not install"
                - "Practise closing a frozen browser with a restart"
                - "Read one official warning about fake tech support calls"
                - "Tell relatives you will never ask them to install screen-sharing"
            - name: Doorstep trader and cold caller rules
              description: |-
                ## Purpose
                Rogue traders who knock to point out a loose roof tile, and cold callers selling anything from loft insulation to pension reviews, rely on pressure and politeness. A simple household rule, a no cold calling sign and a list of trusted local trades make it easy to say no at the door, which matters most for people living alone.

                ## Milestones
                1. A rule agreed: no work is agreed and no money is paid on the doorstep.
                2. A no cold calling sign displayed by the front door.
                3. A list of trusted, recommended trades kept by the phone.
                4. A neighbour or relative named to phone before agreeing any work.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A doorstep rule, a no cold calling sign and a list of trusted trades are in place, with a named person to call before agreeing work."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Print or order a no cold calling sign for the front door"
                - "Write a list of trusted trades recommended by people you know"
                - "Agree a neighbour or relative to call before agreeing any work"
                - "Practise a polite closing line for doorstep sellers"
            - name: Card controls and spending limits in the banking app
              description: |-
                ## Purpose
                Many banking apps now let you freeze a card in a second, block online or overseas use, cap contactless payments and stop gambling transactions. Setting these controls to match how you actually spend shrinks what a stolen card can do. A once-a-year look keeps them in line with your habits.

                ## Milestones
                1. The card control menu found in each banking app.
                2. Online, overseas and contactless settings matched to your real use.
                3. The freeze button tried and released once so you know where it is.
                4. A yearly check of the controls in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Card controls on every main card match your spending habits, and you have frozen and unfrozen a card once as a test."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the card controls page in each banking app"
                - "Turn off overseas or online use on cards you never use that way"
                - "Freeze and unfreeze one card to learn where the button is"
                - "Check card controls still match how you spend @recurring(yearly)"
            - name: Daily transfer limit and new payee delay decision
              description: |-
                ## Purpose
                High default transfer limits mean a successful scam can drain an account in one go. Asking your bank to lower the daily limit, or to add a delay or extra check on payments to new payees, puts friction exactly where fraudsters need speed. Weigh the inconvenience against how often you really make large transfers.

                ## Milestones
                1. Current daily transfer limits for each account found.
                2. Your real largest normal transfer in the past year identified.
                3. A lower limit, and any new payee delay the bank offers, decided.
                4. The new limits set and recorded in your inventory.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Daily transfer limits on every current account are set to a level you chose from your real transfer history, and recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the current daily transfer limit on each account"
                - "Find the largest transfer you made in the past twelve months"
                - "Ask each bank what lower limits and payee delays it offers"
                - "Set the new limits and note them in your inventory"
            - name: Low-balance card for online shopping
              description: |-
                ## Purpose
                Using your main debit card on every website exposes your whole current account if one shop is breached. A separate account or prepaid card topped up only for planned purchases, or the virtual card numbers some banks offer, keeps online spending away from the money that pays the bills. Decide whether the extra step is worth it for you.

                ## Milestones
                1. The options compared: credit card, separate low-balance account, prepaid card or virtual numbers.
                2. One option chosen, or a decision recorded to keep things as they are.
                3. Stored cards on shopping sites switched to the chosen card.
                4. A simple top-up rule written if a low-balance account is used.

                ## Notes
                Credit cards often carry stronger purchase protection than debit cards in some countries. Check your provider's terms rather than assuming.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which card you use online, with stored card details updated to match it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the shopping sites that hold your main debit card"
                - "Compare a low-balance account, prepaid card and virtual numbers"
                - "Write down the option you chose and why"
                - "Replace stored card details on shopping sites with the chosen card"
            - name: Credit freeze or protective registration decision
              description: |-
                ## Purpose
                In some countries you can freeze your credit file so no new credit can be opened in your name; in others, a paid protective registration flags your name for extra checks. Either slows identity fraud, but also slows your own applications. Weighing the cost and inconvenience against your risk, especially after a breach or a stolen passport, gives you a clear choice.

                ## Milestones
                1. The options available in your country listed with their costs.
                2. How a freeze or registration affects your own applications understood.
                3. A decision recorded, with the reasons.
                4. The freeze or registration placed, or a review date set if you decided against it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a credit freeze or protective registration exists, and the chosen option is in place or a review date is set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find out whether credit freezes or protective registration exist where you live"
                - "Note the cost and how each affects your own credit applications"
                - "Decide based on your risk, such as a recent breach or lost ID"
                - "Place the freeze or registration, or set a date to revisit"
            - name: Cutting unwanted calls, post and data broker listings
              description: |-
                ## Purpose
                Every marketing list, public register entry and people-finder site you appear on is a source of names and numbers for scammers. Registering with your country's telephone preference and mail preference services, opting out of public versions of the electoral register where possible and asking data brokers to remove you shrinks the number of cold approaches you receive.

                ## Milestones
                1. Landline and mobile registered with the national telephone preference service where one exists.
                2. Mail preference registration completed to cut addressed junk mail.
                3. Public register opt-outs requested where your country allows.
                4. Removal requests sent to the main people-finder and data broker sites.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Phones and address are registered with the available preference services, and removal requests have been sent to the main data broker sites."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Register your numbers with the national telephone preference service"
                - "Register your address with the mail preference service"
                - "Search your name on people-finder sites and request removal"
                - "Repeat the people-finder search and removal requests @recurring(yearly)"
            - name: Call blocking and caller ID on landline and mobile
              description: |-
                ## Purpose
                Retirees with a landline often receive more scam calls than real ones. A call-blocking phone or service that only lets known numbers ring through, plus spam filtering on the mobile, removes most attempts before they reach you. It is a small purchase or setting that makes the phone feel safe again.

                ## Milestones
                1. Call-blocking options from your phone provider and in shops compared.
                2. Known contacts added to the allow list.
                3. Spam call filtering switched on in the mobile phone settings.
                4. A month of calls compared with the attempted scam log, if you keep one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A call blocker or provider service is active on the landline and spam filtering is on the mobile, with known contacts allowed through."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your phone provider which free call-blocking services it offers"
                - "Compare call-blocking handsets if the provider has nothing suitable"
                - "Add family, doctor and pharmacy numbers to the allow list"
                - "Turn on spam call filtering in the mobile phone settings"
            - name: Social media and public profile privacy tidy-up
              description: |-
                ## Purpose
                Birthdays, pet names, schools, holiday dates and family names posted publicly answer security questions and feed impersonation scams. A tidy-up of what strangers can see on each profile cuts the raw material criminals use, without needing to leave social media.

                ## Milestones
                1. Every profile viewed as a stranger would see it.
                2. Date of birth, phone number and home town hidden or removed.
                3. Old posts revealing family names, pets or schools limited to friends.
                4. Friend lists and follower requests from unknown accounts reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No public profile shows your birth date, phone number or family details, checked by viewing each as a stranger."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Use the view-as-public option on each social profile"
                - "Hide your date of birth, phone number and home town"
                - "Limit old posts to friends only in each platform's settings"
                - "Check what strangers can see on each profile @recurring(yearly)"
            - name: Payee name check habit before every new transfer
              description: |-
                ## Purpose
                Changed bank details in an email from a builder, solicitor or landlord are one of the commonest ways people are tricked into paying a criminal. A fixed habit of confirming any new or changed payee by phone on a number you already had, and reading the name-match result your bank shows, stops these payments before they leave.

                ## Milestones
                1. A rule written: every new or changed payee is confirmed by phone on a known number.
                2. The bank's name-match result understood, including what a partial match means.
                3. A small first payment used for large new payees where practical.
                4. Ten new payments made using the habit without skipping a step.

                ## Notes
                Never use the phone number in the email that announced the change. Look it up from an earlier invoice or the firm's own website.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new or changed payee is confirmed on a previously known number before payment, with the habit followed for ten payments in a row."
                cadence: rolling
              tasks:
                - "Write the payee check rule on a note beside where you bank"
                - "Look up what each name-match result means in your banking app"
                - "Phone the firm on a known number before paying any changed details"
                - "Send a small test amount before large first payments"
            - name: Reporting a fraud and claiming your money back
              description: |-
                ## Purpose
                Once a fraud has happened, the outcome depends on reporting fast, giving the bank a clear account and keeping every reference number. Following the first-hour checklist, then reporting to the police or national fraud service and making a written refund claim, gives you the best chance under your bank's reimbursement rules.

                ## Milestones
                1. The bank told by phone and the affected cards and accounts frozen.
                2. A crime or fraud reference obtained from the police or national reporting service.
                3. A written timeline of what happened sent to the bank with the refund request.
                4. Every call logged with date, name and reference until the claim is decided.

                ## Notes
                Being tricked into sending money does not automatically mean you lose it. Ask the bank in writing how its reimbursement rules apply to you.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fraud is reported to the bank and the national service, a written refund claim with a timeline is lodged, and every contact is logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Call the bank on the number from your hotline card"
                - "Report the fraud to the police or national fraud service"
                - "Ask the agent to draft a dated timeline of the fraud from your notes"
                - "Send the timeline with a written refund request to the bank"
                - "Log every call with the date, name and reference number"
            - name: Lost or stolen phone and wallet lockdown
              description: |-
                ## Purpose
                Thieves who grab a phone that is already open, or a wallet holding cards and ID, can turn them into money within an hour. Knowing in advance how to freeze cards from another device, remotely lock and wipe the phone and report the theft makes the response quick. Setting up remote tracking and a strong phone passcode now is what makes that possible.

                ## Milestones
                1. Remote locate, lock and wipe enabled on every phone and tablet.
                2. A long passcode set and banking apps protected with a separate sign-in.
                3. A list of what is in your wallet, including ID, kept at home.
                4. The steps to freeze cards and lock the phone from another device written on the checklist.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Remote lock and wipe are active on every phone, a wallet contents list is stored at home, and the lockdown steps are on your fraud checklist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn on remote locate and wipe on each phone and tablet"
                - "Change the phone passcode to six digits or longer"
                - "Photocopy or list the contents of your wallet and keep it at home"
                - "Practise signing in to your phone account from a computer"
            - name: Moving house without leaving an identity trail
              description: |-
                ## Purpose
                Post sent to an old address is a gift to identity thieves, who can intercept bank cards and statements or open accounts in your name. Redirecting post, updating every account in the inventory and checking your credit file a few months after the move closes the gap that a move opens up.

                ## Milestones
                1. Post redirection arranged for at least six months from moving day.
                2. Every bank, card, pension and payment app updated with the new address.
                3. The old address checked for misdirected post with the new occupants.
                4. Your credit file checked three months after the move for the old address.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Post redirection is in place, every financial account shows the new address, and a credit file check after the move shows nothing unknown."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book post redirection from your moving date"
                - "Update your address with every provider in the inventory"
                - "Leave a forwarding contact with the new occupants"
                - "Check your credit file three months after moving"
            - name: Travel money and card security before a trip
              description: |-
                ## Purpose
                Card skimming, distraction theft and fake taxi or booking sites cluster around travel, and dealing with fraud from abroad is slow. A short preparation before each trip, splitting cards, noting the overseas fraud numbers and turning on overseas use only for the dates away, keeps a holiday from becoming a recovery exercise.

                ## Milestones
                1. Overseas use switched on only for the cards you will take.
                2. Cards split between wallet and luggage, with one kept as a backup.
                3. The overseas fraud numbers for each card saved and printed.
                4. Overseas use switched off again after returning.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the next trip, overseas card use is limited to the cards taken, fraud numbers are printed, and overseas use is switched off on return."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose which two cards to take on the trip"
                - "Turn on overseas use only for those cards"
                - "Save the overseas fraud numbers for each card"
                - "Switch overseas use off when you are home"
            - name: Responding to a data breach notification
              description: |-
                ## Purpose
                A letter or email saying a company has lost your data is easy to ignore, and scammers often follow up pretending to be that company. Working out what was exposed and taking the matching steps, changing a password, watching for targeted phishing or considering a credit freeze, turns a vague worry into a short checklist.

                ## Milestones
                1. The notice confirmed as genuine through the company's own website.
                2. The exact data exposed written down.
                3. Matching actions taken, such as password change, card replacement or credit freeze.
                4. Extra alertness noted for messages claiming to be from that company for three months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For any breach notice received, the exposed data is recorded and matching protective actions are completed within a week."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the breach notice on the company's own website"
                - "Write down exactly what data the breach exposed"
                - "Change the password or replace the card the breach affects"
                - "Add the breach to your risk register with the date"
            - name: Family scam awareness evening
              description: |-
                ## Purpose
                Teenagers, parents and grandparents are targeted by different scams, and few families ever talk about them together. A relaxed hour with tea, real examples from your scam log and the code word refresher builds a family where anyone can say 'I nearly fell for this' without embarrassment.

                ## Milestones
                1. A date set and three generations invited where possible.
                2. Three real scam messages chosen, one aimed at each age group.
                3. The code word and call-back rule refreshed with everyone.
                4. Each person leaving with the hotline card for their own banks.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family session has been held covering three real scams, the code word and the call-back rule, with each attendee holding a hotline card."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a date and invite family across the generations"
                - "Choose three real scam examples aimed at different ages"
                - "Ask the agent to turn the examples into a short quiz"
                - "Hold a family scam refresher with the code word check @recurring(yearly)"
            - name: Fraud safeguards for an older parent
              description: |-
                ## Purpose
                Adult children often find out about a parent's scam losses only after months of payments. With your parent's agreement, setting up a trusted contact with their bank, call blocking, alerts copied to you where they choose, and a regular chat about calls they have had, protects their money while respecting their independence. Legal authority to act on their behalf is a separate step to take with a solicitor.

                ## Milestones
                1. A conversation held and your parent's consent recorded for each safeguard.
                2. A trusted contact or third-party arrangement set up with their main bank, if they wish.
                3. Call blocking and the code word in place at their home.
                4. A regular check-in agreed, covering unusual calls, letters and payments.

                ## Notes
                Keep the safeguards about support, not control. Ask before looking at any account, and talk to a solicitor about a power of attorney rather than relying on shared passwords.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your parent has agreed safeguards in place, including bank trusted contact and call blocking, and a monthly check-in has run for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your parent which safeguards they would welcome"
                - "Ask their bank about trusted contact or third-party options"
                - "Set up call blocking and the hotline card at their home"
                - "Talk through any unusual calls, letters or payments @recurring(monthly:12)"
                - "Phone for a short catch-up about scam calls @recurring(weekly:wed)"
            - name: Pension and retirement savings scam protection
              description: |-
                ## Purpose
                Pension pots are a prime target: cold calls offering free reviews, early access before retirement age, overseas investments and transfers to unregulated schemes. Before moving or drawing any retirement savings, checking the firm on the regulator's register, using your provider's scam checks and taking guidance from a free official service protects money that cannot be replaced.

                ## Milestones
                1. Every pension and retirement account listed with provider contact details.
                2. The warning signs written down: cold contact, early access, time pressure, unusual investments.
                3. A rule recorded that no transfer happens without a regulator check and official guidance.
                4. Each provider's own scam warning page read.

                ## Notes
                Any decision about transfers or withdrawals belongs with a regulated adviser or free government guidance service, not a caller. This project is about checks before any decision.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every pension is listed, warning signs and a written no-transfer-without-checks rule are recorded, and each provider's scam page has been read."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every pension and retirement account you hold"
                - "Read each provider's pension scam warning page"
                - "Find the free official pension guidance service in your country"
                - "Write your rule that no transfer happens without checks and guidance"
            - name: Protecting a late relative's identity after a death
              description: |-
                ## Purpose
                Criminals scan death notices and use the details of people who have died to open accounts or claim refunds, and families are rarely watching. Registering the death with banks, credit agencies and any bereavement notification or deceased preference service, and returning ID documents, closes the identity before anyone can use it.

                ## Milestones
                1. The death notified to every bank, card and pension provider found.
                2. Credit reference agencies and any deceased preference service told.
                3. Passport, driving licence and other ID returned or cancelled.
                4. Post redirected to the executor and checked for unexpected credit letters.

                ## Notes
                Keep funeral notices brief and leave out the full date of birth and home address where you can.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All known financial providers, credit agencies and ID issuers are notified of the death, and post is redirected and monitored."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every bank, card and pension provider from the relative's papers"
                - "Use any official tell-once service to notify government bodies"
                - "Register the death with the credit agencies and deceased preference service"
                - "Return or cancel the passport and driving licence"
            - name: Money mule warning talk with teenagers and students
              description: |-
                ## Purpose
                Young people are offered easy cash on social media to let money pass through their account, and many do not realise they are laundering stolen funds. Being a mule can close bank accounts for years and lead to prosecution. A calm conversation with examples of the adverts makes it far easier for them to say no or tell you.

                ## Milestones
                1. Two real examples of mule recruitment adverts found to show them.
                2. The consequences explained: frozen accounts, credit problems and possible prosecution.
                3. A rule agreed that nobody else's money ever goes through their account.
                4. They know they can tell you about an offer without getting in trouble.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each teenager or student in the family has seen real mule adverts, understands the consequences and has agreed the no-other-people's-money rule."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find two real examples of money mule adverts from an official source"
                - "Pick a relaxed moment to show them the examples"
                - "Explain what happens to a mule's bank account and credit"
                - "Agree the rule that no one else's money uses their account"
            - name: Invoice redirection checks for freelancers and sole traders
              description: |-
                ## Purpose
                Self-employed people both send and pay invoices by email, which makes them a target for fake 'our bank details have changed' messages and for criminals who hijack their own email to redirect clients' payments. A written procedure for confirming changed details, and a note on every invoice that your bank details never change by email, protects both sides.

                ## Milestones
                1. A line added to every invoice saying bank details are never changed by email.
                2. A procedure written for confirming any supplier's changed details by phone.
                3. Supplier bank details on file checked against a confirmed record.
                4. Business email secured with two-step sign-in and forwarding rules checked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Invoices carry a fixed bank details warning, changed supplier details are always phone-confirmed, and supplier records are checked quarterly."
                cadence: rolling
              tasks:
                - "Add a fixed bank details warning line to your invoice template"
                - "Write the phone confirmation step for any changed supplier details"
                - "Check supplier bank details against confirmed records @recurring(quarterly)"
                - "Turn on two-step sign-in on your business email"
            - name: Property purchase completion fraud checks
              description: |-
                ## Purpose
                Buying a home means sending the largest payment of your life, often by email instruction, and conveyancing fraud intercepts exactly that. Getting your solicitor's bank details in person or by letter at the start, agreeing that they will never change by email and confirming by phone before sending a small then full payment protects the deposit.

                ## Milestones
                1. The solicitor's bank details received in person, by letter or on a call you made.
                2. A written agreement that bank details will never change by email.
                3. A small test payment confirmed by phone before the full amount is sent.
                4. The full payment confirmed as received before completion day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Completion funds are sent only to bank details confirmed in person or by a call you placed, after a confirmed test payment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your solicitor for bank details in person or by letter"
                - "Confirm in writing that the details will never change by email"
                - "Send a small test payment and confirm receipt by phone"
                - "Phone again before sending the full amount"
            - name: Identity theft recovery file
              description: |-
                ## Purpose
                When your identity has been used to open accounts, recovery means dozens of calls and letters over months, and the evidence trail is what clears your name. A single recovery file, holding the police reference, credit agency disputes, each lender's response and a dated log, keeps the process moving and stops you repeating yourself.

                ## Milestones
                1. A police or national fraud reference obtained.
                2. Every fraudulent account listed with the lender, amount and dispute date.
                3. Each lender's confirmation that the account is closed and not yours collected.
                4. Credit files at every agency checked clean after the last dispute is resolved.

                ## Notes
                Start from the **Remediation plan** template. Send disputes in writing and keep copies; phone calls alone leave no trail.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recovery file holds the fraud reference, a list of every fraudulent account with its written resolution, and a clean credit file check at every agency."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a folder for the fraud reference, letters and call log"
                - "List every account opened in your name without permission"
                - "Send a written dispute to each lender and credit agency"
                - "Log each response with the date and reference"
                - "Check every credit file once all disputes are closed"
            - name: Escalating a refused fraud refund complaint
              description: |-
                ## Purpose
                Banks sometimes refuse a fraud refund on the grounds that you were negligent or authorised the payment, and many of those decisions are changed on appeal. A clear written complaint, followed by referral to the financial ombudsman or dispute body if the bank does not budge, uses the free route open to customers. Time limits apply, so know them before you start.

                ## Milestones
                1. The bank's final response letter and the reasons for refusal in hand.
                2. A written complaint setting out the timeline and why the refusal is wrong.
                3. The time limit for referring to the ombudsman or dispute body noted.
                4. The complaint referred, with the reference number recorded, if the bank refuses again.

                ## Notes
                You do not need a paid claims firm to go to an ombudsman. The official service is free for consumers.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written complaint is lodged with the bank and, if refused, referred to the ombudsman or dispute body within its time limit, with references recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the bank for its final response in writing"
                - "Find the ombudsman or dispute body and its time limit"
                - "Write the complaint with your timeline and evidence attached"
                - "Refer the case to the ombudsman if the bank refuses again"
            - name: Deepfake voice and video impersonation defences
              description: |-
                ## Purpose
                Just a few seconds of someone's voice from a social media clip is now enough to clone it, and fake video calls are following. Understanding how voice cloning is used in family emergency and boss-asks-for-a-transfer scams, and limiting the public audio of your family, means the code word and call-back rule are backed by real understanding.

                ## Milestones
                1. Two real cases of voice cloning fraud read from reputable sources.
                2. The family code word and call-back rule confirmed as the defence.
                3. Public videos with family voices reviewed and limited where sensible.
                4. A rule set that no voice or video alone is proof of identity for a money request.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain how voice cloning scams work, have reviewed public family audio, and have a written rule that voice alone never authorises payment."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read two reported cases of voice cloning fraud"
                - "Review public videos where family members speak at length"
                - "Confirm the family code word still works for video calls"
                - "Add the voice-is-not-proof rule to your hotline card"
---

# Fraud & Scam Protection

This area is for anyone who wants their bank accounts, cards and savings to be a hard target, and for the retirees and families who are phoned, texted and emailed by fraudsters more than anyone. It starts with the foundations (official contact numbers, an account inventory, alerts, a locked email account, two-step sign-in, a family code word and a first-hour response checklist), then the routines that keep watch, the scam scripts worth learning by heart, the settings and decisions that slow a thief down, the moments that need extra care such as moving house or a lost phone, versions for older parents, pension savers, the bereaved, teenagers and sole traders, and finally identity theft recovery and refund complaints.

What repeats is a Sunday look at logins and payees, a Friday clear-out of suspicious messages reported to the right place, monthly software updates, scam warnings, shredding and an attempt tally, quarterly credit file and connected-app checks, and a yearly review of the whole set-up with a family refresher. The Operational checklist, Risk register, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
