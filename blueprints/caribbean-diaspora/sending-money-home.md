---
id: caribbean-diaspora.sending-money-home
name: Sending Money Home
description: "Cheaper transfers compared on total cost, a steady monthly sending routine, an emergency pot, clear records and honest agreements with the family you support in the Caribbean."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, sending-money-home, everyone, parent, remittances, exchange-rates, transfer-fees, family-support]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - purchase-decision
    - savings-goal
    - metrics-log
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Sending Money Home
          description: "Sending money to family in the Caribbean: comparing transfer services and fees, a regular schedule, emergencies, records and agreeing expectations with family."
          projects:
            - name: Map of who you support back home
              description: |-
                ## Purpose
                Most people who send money home could not say, without checking, exactly how much went to whom last year. Writing down every person you support, what the money is for and how often it goes gives you one page to plan from, and it shows where an informal promise has quietly become a monthly bill.

                ## Milestones
                1. A list of every person you send money to, with country, relationship and what the money covers.
                2. The usual amount and frequency written beside each name.
                3. Each payment marked as regular, occasional or emergency only.
                4. The total sent in the last twelve months worked out from bank and app history.

                ## Notes
                Include the irregular ones: the cousin who asks at Christmas and the godchild's exam fees. They add up faster than the monthly ones.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page list of everyone you support, with amounts, frequency and a twelve-month total, exists and is dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone you have sent money to in the last year"
                - "Pull last year's transfers from your bank and app history"
                - "Note what each payment usually covers"
                - "Total the year and write the figure at the top of the page"
            - name: Monthly remittance line in your budget
              description: |-
                ## Purpose
                Before deciding how much to send, you need to know what your own household can carry after rent, bills, savings and debt repayments. Giving remittances their own budget line, fixed in advance, means you send what you can afford rather than whatever is left after a hard request.

                ## Milestones
                1. Your monthly take-home pay and fixed costs written down.
                2. A remittance amount agreed with your partner, if you share finances.
                3. The amount, fees included, set up as its own line in your budget.
                4. A written rule for what happens when an extra request comes in above the line.

                ## Notes
                Start from the **Monthly budget and bills** template. Budget for the fees as well as the amount the family receives.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fixed monthly remittance amount, including fees, appears as its own line in your household budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your monthly take-home pay and fixed costs"
                - "Agree a monthly remittance figure with your partner if you share money"
                - "Add the remittance and its fees as a separate budget line"
                - "Decide in writing how you will handle requests above the line"
            - name: True cost comparison of transfer services
              description: |-
                ## Purpose
                Fees are only half the price of a transfer: the other half is hidden in the exchange rate, which can be several percent worse than the rate quoted on the news. Comparing three or four services on what actually lands in your relative's hand for the same amount shows which one is cheapest for your corridor, for example London to Kingston or Toronto to Georgetown.

                ## Milestones
                1. Three or four services quoted for the same amount, on the same day, to the same country.
                2. Each quote recorded as amount sent, fee, rate offered and amount received.
                3. The cheapest option for your usual amount identified.
                4. Speed and collection options noted beside the cost of each.

                ## Notes
                Start from the **Purchase decision** template. Quotes change daily, so compare on the same morning. A free transfer with a poor rate is often dearer than a paid one with a good rate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated comparison of at least three services shows the amount received for the same sum, with one chosen as your main provider."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the exact amount and destination country you usually send"
                - "Get quotes from three or four services on the same morning"
                - "Record fee, rate and amount received for each in one table"
                - "Choose the provider that lands the most money for your usual transfer"
            - name: Mid-market rate and exchange margin explained
              description: |-
                ## Purpose
                Exchange rates in the news are the mid-market rate, the midpoint between buying and selling, and almost no transfer service gives it to you. Learning to work out the margin a provider adds lets you judge any quote in a minute instead of trusting the word free.

                ## Milestones
                1. You can find today's mid-market rate for your currency pair from a reliable source.
                2. The margin on your last transfer worked out as a percentage.
                3. The total cost of that transfer written as fee plus margin.
                4. A personal limit set for the margin you will accept.

                ## Notes
                The margin is the gap between the mid-market rate and the rate you got, divided by the mid-market rate. Work it out once by hand so the idea sticks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The total percentage cost of your last transfer, fee and margin together, is worked out and written in your records."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up today's mid-market rate for your currency pair"
                - "Find the rate you were given on your last transfer receipt"
                - "Work out the margin as a percentage of the mid-market rate"
                - "Write down the most margin you will accept from now on"
            - name: How each relative prefers to collect
              description: |-
                ## Purpose
                Cash pickup, bank deposit, mobile wallet and home delivery each suit different people: an aunt in rural Clarendon may be an hour from the nearest agent, while a nephew in Port of Spain wants it straight into his account. Asking each recipient once, and recording the answer, stops wasted trips and money sitting uncollected.

                ## Milestones
                1. Each recipient asked which collection method works best for them and why.
                2. The nearest agent or bank branch, with its opening hours, noted for anyone collecting cash.
                3. Any recipient who would prefer a different method flagged.
                4. Collection preferences recorded beside each name on your support list.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every person you support has a recorded collection method, with the nearest agent or bank noted where cash is used."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Call each recipient and ask how they prefer to receive money"
                - "Note the nearest agent or branch and its opening hours"
                - "Flag anyone who would rather switch to a different method"
                - "Add the preferences to your support list"
            - name: Recipient names and ID details check
              description: |-
                ## Purpose
                A transfer can be held or refused when the name on it does not match the recipient's ID exactly, down to a middle name or the order of surnames. Checking each person's legal name, ID type and expiry date now prevents the call from the agent counter saying the money cannot be released.

                ## Milestones
                1. Each recipient's full legal name confirmed exactly as it appears on their ID.
                2. ID type and expiry date noted, with any ID expiring within six months flagged.
                3. Phone numbers and bank details checked against what is saved in your apps.
                4. Saved recipient entries in every app corrected to match.

                ## Notes
                Keep ID numbers out of group chats. You need the exact name and the expiry date, not a photo of the card.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Saved recipients in every transfer app match their ID names exactly, and any ID expiring within six months is flagged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each recipient to read their name exactly as printed on their ID"
                - "Note the ID type and expiry date for each recipient"
                - "Correct saved recipient names and numbers in each transfer app"
                - "Remind anyone with an expiring ID to renew before the next transfer"
            - name: Primary and backup transfer provider set up
              description: |-
                ## Purpose
                Apps go down, accounts get frozen for checks, and some services pause payouts to a country without warning. Having a second provider already verified, with recipients saved, means an urgent transfer still goes the same day.

                ## Milestones
                1. Your main provider account verified, with recipients saved.
                2. A second provider account opened and its identity checks completed.
                3. A small test transfer sent and received through the backup.
                4. Both providers' customer service numbers saved in your phone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two transfer providers are verified, and a test transfer through the backup has been confirmed received."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a backup provider from your comparison shortlist"
                - "Complete the backup provider's identity checks"
                - "Send a small test transfer through the backup and confirm it arrives"
                - "Save both providers' support numbers in your phone"
            - name: Family conversation about what you can send
              description: |-
                ## Purpose
                Family back home often see life abroad through photos and assume there is more money than there is, while the sender says yes and quietly falls behind. One honest conversation with the person who manages money for the household sets what is regular, what counts as an emergency and how to ask, which protects the relationship as much as the budget.

                ## Milestones
                1. The regular amount and sending day explained to the main recipient.
                2. What counts as an emergency agreed between you.
                3. How extra requests should be made, and how much notice you need, agreed.
                4. The agreement summarised in a short message both sides can refer back to.

                ## Notes
                Have the talk before a crisis, not during one. Explaining your own costs, rent, childcare, the fare to work, usually lands better than a flat no.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written summary of the agreed amount, sending day and emergency rule has been sent to the main recipient and acknowledged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which relative manages money for the household back home"
                - "Note your regular amount, sending day and emergency rule before the call"
                - "Hold the conversation by phone or video call"
                - "Send a short written summary of what you agreed"
            - name: Transfer receipts and reference number log
              description: |-
                ## Purpose
                When money goes missing, the first question from any provider is the reference number, and the second is the date and exact amount. A simple log of every transfer, with receipts saved in one folder, turns a frantic search into a two-minute call, and it is the record you will want for any later visa, tax or family question.

                ## Milestones
                1. One folder, paper or digital, set up for transfer receipts.
                2. A log with date, provider, recipient, amount sent, fee, rate and reference number.
                3. The last three months of transfers entered from app history.
                4. Each new receipt saved into the folder on the day it is sent.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A transfer log holding the last three months of transfers, each with its reference number, is saved in one known place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one folder for transfer receipts"
                - "Set up a log with date, provider, recipient, amounts, rate and reference"
                - "Enter the last three months of transfers from app history"
                - "Save a screenshot of each new receipt into the folder after sending"
            - name: Locking down your transfer apps and accounts
              description: |-
                ## Purpose
                A transfer app holds your card, your bank link and a list of people you send to, which makes it a target. Turning on two-step sign-in, a unique password and transfer alerts takes half an hour and closes the most common ways money is stolen.

                ## Milestones
                1. Two-step sign-in switched on for every transfer app and linked bank account.
                2. Each app given a unique password stored in a password manager.
                3. Login and transfer alerts turned on.
                4. Old or unused transfer accounts closed.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every transfer app you use has two-step sign-in, a unique password and alerts on, and unused accounts are closed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Turn on two-step sign-in in each transfer app"
                - "Change any reused password to a unique one"
                - "Switch on login and transfer alerts"
                - "Close transfer accounts you no longer use"
                - "Check which devices are signed in to your transfer apps @recurring(quarterly)"
            - name: Monthly sending day routine
              description: |-
                ## Purpose
                Sending on the same day each month, a day or two after payday, means the family can plan around it and you never send from money already spoken for. A short routine for that day, check the rate, send, save the receipt, message the recipient, keeps the whole thing to fifteen minutes.

                ## Milestones
                1. A sending day fixed a day or two after your payday.
                2. The routine written as four steps in your phone notes.
                3. Three months sent on the agreed day.
                4. Recipients told the day so they can plan.

                ## Notes
                If your provider offers scheduled transfers, send one month by hand first so you know which rate the schedule uses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Transfers have gone out on the agreed sending day for three months in a row, each with a saved receipt."
                cadence: rolling
              tasks:
                - "Pick a sending day one or two days after payday"
                - "Write the four-step sending routine in your phone notes"
                - "Send the regular transfer and save the receipt @recurring(monthly:26)"
                - "Message the recipient the reference number once it is sent"
            - name: Rate check before each transfer
              description: |-
                ## Purpose
                Rates and fees move, and the provider that was cheapest in January may not be in June. Spending five minutes before each transfer comparing your main provider with one alternative catches the months when switching saves real money.

                ## Milestones
                1. Two providers bookmarked for a quick quote.
                2. The mid-market rate checked alongside both quotes.
                3. A rule set for how big a gap justifies switching for that month.
                4. Each month's chosen quote noted in your transfer log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each transfer in the last three months shows a recorded comparison against one alternative quote in your log."
                cadence: rolling
              tasks:
                - "Bookmark the quote pages of your main and backup providers"
                - "Decide how big a gap would make you switch for a month"
                - "Compare both quotes against the mid-market rate before sending @recurring(monthly:25)"
            - name: Receipt confirmation loop with family
              description: |-
                ## Purpose
                Money marked as paid out in an app is not always money in hand: a wrong account digit or an agent who could not release it can leave a transfer stuck for days. Asking the recipient to confirm arrival each month, and filing the receipt only once they do, catches problems while they are still easy to fix.

                ## Milestones
                1. Each recipient knows to reply once money is collected or credited.
                2. Unconfirmed transfers followed up within three days.
                3. Receipts filed with a confirmed note.
                4. Any stuck transfer raised with the provider, quoting its reference number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every transfer in the last three months is marked confirmed in your log, with any stuck one resolved through the provider."
                cadence: rolling
              tasks:
                - "Ask each recipient to send a quick message once money arrives"
                - "Follow up any transfer not confirmed within three days"
                - "Mark confirmed transfers in the log and file the receipts @recurring(monthly:28)"
            - name: Quarterly provider and fee review
              description: |-
                ## Purpose
                Providers change pricing, add receiving fees or drop a payout partner in a country with little notice. A quarterly look at what you actually paid, set against fresh quotes, keeps your main provider honest and catches any new charge on the family's side.

                ## Milestones
                1. Total fees and margin for the quarter added up from your log.
                2. Fresh quotes taken from your main provider and two others.
                3. The family asked whether anything changed at their end.
                4. A decision recorded to stay or switch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note for each quarter records total transfer costs, fresh quotes and the decision to stay or switch."
                cadence: cyclic
              tasks:
                - "Add up last quarter's fees and margin from your log @recurring(quarterly)"
                - "Get fresh quotes from your main provider and two others"
                - "Ask recipients whether any new charges or delays appeared"
                - "Record the decision to stay or switch"
            - name: Yearly remittance totals summary
              description: |-
                ## Purpose
                A single yearly figure, split by person and purpose, is the number you need for family conversations, budget planning and any official form that asks what support you give abroad. Producing it each January from your log takes an hour if the log is kept, and a weekend if it is not.

                ## Milestones
                1. The year's transfers totalled from the log.
                2. Totals split by recipient and by purpose.
                3. Total fees and margin for the year shown separately.
                4. A one-page summary saved with the year's receipts.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page summary of the year's transfers, by recipient and purpose with total fees, is saved beside the receipts."
                cadence: cyclic
              tasks:
                - "Export last year's transfer history from each provider"
                - "Ask the agent to total the export by recipient and by purpose"
                - "Work out total fees and margin paid for the year"
                - "Save the yearly remittance summary with the receipts each January @recurring(yearly)"
            - name: Back-home emergency money pot
              description: |-
                ## Purpose
                Emergencies back home rarely wait for payday: a burst pipe, a hospital deposit, a fridge that dies with the week's food in it. A separate pot, built up a little each month, lets you answer the call the same day without borrowing or skipping your own rent.

                ## Milestones
                1. A target size for the pot agreed, for example one or two months of regular sending.
                2. A separate savings account or pot opened.
                3. A fixed monthly contribution set up.
                4. A written rule for what the pot can be used for.

                ## Notes
                Start from the **Savings goal** template. Refill the pot after each use before raising the regular amount.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate emergency pot for family back home has reached its target and has a written rule for when it is used."
                cadence: rolling
              tasks:
                - "Set a target size for the emergency pot"
                - "Open a separate savings pot for it"
                - "Move the monthly contribution into the pot @recurring(monthly:3)"
                - "Write down what the pot can and cannot be used for"
            - name: Paying bills back home directly
              description: |-
                ## Purpose
                Paying the light bill, water rates or a phone top-up straight to the company, instead of sending cash to cover it, means the bill is definitely paid and the family keeps the cash for food. Many Caribbean utilities, phone companies and some schools now accept payment online or through a transfer service's bill pay option.

                ## Milestones
                1. Bills that could be paid directly from abroad identified.
                2. Account numbers for each bill collected from the household.
                3. Online or bill pay set up for at least one bill.
                4. The regular cash amount adjusted down to match.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one household bill back home is paid directly from abroad each month, with the cash transfer reduced to match."
                cadence: rolling
              tasks:
                - "Ask the household which bills they pay each month and to whom"
                - "Collect the account numbers from recent bills"
                - "Check which bills accept online or bill pay from abroad"
                - "Pay the direct bills and save the confirmations @recurring(monthly:8)"
            - name: Sharing the support among siblings abroad
              description: |-
                ## Purpose
                When three siblings in Brooklyn, Birmingham and Brampton all help Mummy, one can end up carrying most of it without anyone noticing, and resentment builds quietly. A shared record of who sends what, and an agreed split, keeps it fair and stops two people paying the same bill.

                ## Milestones
                1. Every sibling's current contribution listed.
                2. A split agreed, by amount or by bill, that fits each person's means.
                3. A shared sheet or pinned note where each transfer is logged.
                4. A monthly check that the split was met.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared record shows each sibling's monthly contribution against the agreed split for the last three months."
                cadence: rolling
              tasks:
                - "List what each sibling currently sends and for what"
                - "Propose a split by amount or by bill on a family call"
                - "Set up a shared sheet where everyone logs their transfer"
                - "Check the shared sheet against the agreed split @recurring(monthly:20)"
            - name: Yearly review of the family arrangement
              description: |-
                ## Purpose
                Needs change: a niece finishes school, a parent starts drawing a pension, your own rent goes up. Sitting down once a year with your totals and the family's situation lets you adjust the arrangement on purpose instead of drifting.

                ## Milestones
                1. Your yearly summary and current budget in front of you.
                2. Each recipient's situation checked for changes.
                3. The regular amounts confirmed or changed.
                4. The updated arrangement sent to the family in writing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated note records the yearly review and any change to amounts, and has been sent to the main recipient."
                cadence: cyclic
              tasks:
                - "Book a yearly family call to review the arrangement @recurring(yearly)"
                - "Bring your yearly totals and current budget to the call"
                - "Ask each household what has changed for them"
                - "Send the updated arrangement in a short message"
            - name: Credit union savings slice for family back home
              description: |-
                ## Purpose
                Credit unions are part of everyday life across much of the Caribbean, and a small slice of each transfer paid into a relative's share account builds savings they can borrow against later. It turns part of the support into something that grows instead of disappearing into the month.

                ## Milestones
                1. The relative's credit union membership confirmed, or a membership opened.
                2. A fixed slice of the monthly transfer agreed for savings.
                3. The slice paid in each month with the relative's agreement.
                4. A balance check shared every six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed slice of each monthly transfer has gone into a relative's credit union account for six months, confirmed by a balance check."
                cadence: rolling
              tasks:
                - "Ask your relative whether they belong to a credit union"
                - "Agree the savings slice and whether it is theirs to withdraw"
                - "Confirm the savings slice reached the share account @recurring(monthly:12)"
                - "Ask for a balance check every six months"
            - name: Caribbean currencies, pegs and floating rates
              description: |-
                ## Purpose
                Some Caribbean currencies, such as the Eastern Caribbean dollar, the Barbados dollar, the Belize dollar and the Bahamian dollar, are fixed to the US dollar, while others, such as the Jamaican dollar and the Haitian gourde, move every day. Knowing which kind your family uses tells you whether timing matters, and why a transfer from pounds or Canadian dollars still swings even into a pegged currency.

                ## Milestones
                1. The currency each recipient uses identified as pegged or floating.
                2. The route your money takes noted, for example pounds to US dollars to EC dollars.
                3. How much each floating rate moved over the last year checked.
                4. A short note on whether timing matters for each recipient.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each recipient's currency is labelled pegged or floating, with a note on whether timing your transfers matters."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the currency each recipient uses"
                - "Look up whether each currency is pegged to the US dollar or floats"
                - "Check how much each floating rate moved over the last year"
                - "Write a one-line note on timing for each recipient"
            - name: Remittance scams and how to spot them
              description: |-
                ## Purpose
                Scammers target people who send money home because they know you will act fast for family: a voice note from a new number claiming to be a cousin, a message saying a relative is in hospital or at a police station, a fake transfer site copying a real one. Learning the common patterns, and agreeing a family code word, stops most of them before money moves.

                ## Milestones
                1. The common transfer scams read about from a trusted consumer or police source.
                2. A family code word or question agreed for urgent money requests.
                3. A rule set: no urgent transfer without calling back on a known number.
                4. Older relatives told how scammers might contact them too.

                ## Notes
                Money sent to a scammer through a transfer service is rarely recovered. Report it to the provider and the police straight away anyway.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A family code word is agreed and a call-back rule for urgent requests is written down and shared with the family."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a trusted guide to money transfer scams"
                - "Agree a family code word for urgent money requests"
                - "Save known numbers for every relative you send to"
                - "Tell older relatives what scam calls and messages look like"
            - name: Why transfers get held and how to clear them
              description: |-
                ## Purpose
                Providers are required to check who is sending, who is receiving and where the money comes from, and a transfer that trips a check can sit on hold for days. Understanding the common triggers, a first large amount, a new recipient, a mismatched name, lets you avoid most holds and clear the rest quickly.

                ## Milestones
                1. Your provider's limits and verification tiers read and noted.
                2. Documents a provider might ask for, ID, proof of address and a payslip, kept ready in one folder.
                3. Common hold triggers listed in your own words.
                4. Steps to take when a transfer is held written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists your providers' limits, the documents they may ask for, and the steps you will take if a transfer is held."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your main provider's sending limits and verification tiers"
                - "Gather ID, proof of address and a recent payslip into one folder"
                - "List the common reasons transfers get held"
                - "Write the steps you will follow if a transfer is put on hold"
            - name: Fees on the receiving end
              description: |-
                ## Purpose
                Transfers that look cheap from London can lose money again at the other end: a bank's charge for receiving a foreign transfer, an intermediary bank fee on wires, or a poor rate when US dollars are converted on arrival. Asking the recipient and their bank what they are charged shows the true cost of each route.

                ## Milestones
                1. The recipient's bank or agent asked what they charge on incoming transfers.
                2. Any intermediary bank fee on wires identified from a past statement.
                3. Amount received compared with amount sent for the last three transfers.
                4. Routes with high receiving fees flagged for change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The receiving charges for each recipient are recorded, and the last three transfers are compared on amount sent against amount received."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each recipient to check what their bank charges on incoming money"
                - "Compare amount sent with amount received on the last three transfers"
                - "Look for intermediary bank fees on past wire statements"
                - "Flag any route that loses more than your acceptable cost"
            - name: Teaching a parent to use a mobile wallet or banking app
              description: |-
                ## Purpose
                Many parents back home still travel into town to queue at an agent counter when the money could land on their phone. Spending a visit or a few video calls setting up and practising a mobile wallet or bank app, with them doing every tap themselves, saves the trip and the queue for years.

                ## Milestones
                1. The parent's phone checked for space, updates and a working data plan.
                2. A wallet or banking app installed and verified in their own name.
                3. A small test transfer received and spent or withdrawn by them alone.
                4. A written card of steps left by the phone, with a trusted local helper named.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your parent has received and used a transfer on their own phone without help, with written steps kept by the phone."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check your parent's phone has space, updates and a data plan"
                - "Install and verify the wallet or banking app in their name"
                - "Send a small test amount and let them collect it alone"
                - "Write a step card and name a local helper they trust"
            - name: Cash pickup safety for relatives collecting money
              description: |-
                ## Purpose
                People leaving a remittance agent with cash can be watched, especially at the start of the month and before Christmas. A few habits, collecting in daylight, going with someone, not discussing amounts on the phone in public, reduce the risk for the relative who does the collecting.

                ## Milestones
                1. Collection times agreed for daylight and quieter days where possible.
                2. A trusted person named to go along for larger amounts.
                3. Reference numbers sent privately rather than in a group chat.
                4. Larger amounts moved to bank deposit where that is possible.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Your collecting relative has agreed safe collection habits, and transfers above an agreed amount go to a bank instead of cash."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Talk through collection safety with whoever collects the cash"
                - "Agree who goes with them for larger amounts"
                - "Send reference numbers in a private message only"
                - "Set an amount above which money goes to a bank instead"
            - name: Sending home on an irregular income
              description: |-
                ## Purpose
                Freelancers, agency workers and anyone relying on overtime can have a strong month followed by a thin one, and a promise to send the same amount every month turns into stress. Sending a fixed base amount and topping up only in good months, from a buffer, keeps the family's income steady while yours swings.

                ## Milestones
                1. Your lowest monthly income in the last year worked out.
                2. A base amount set that you could send even in that month.
                3. A buffer pot set up for top-ups.
                4. The family told what is fixed and what is extra.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A base monthly amount, affordable in your lowest month, is agreed with family, with top-ups paid only from a separate buffer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your lowest monthly income from the last twelve months"
                - "Set a base amount you could send even in that month"
                - "Open a buffer pot for top-ups in good months"
                - "Explain the base and top-up system to the family"
            - name: Switching a relative from cash pickup to bank deposit
              description: |-
                ## Purpose
                Cash pickup is quick but often the most expensive route, and it means a trip, a queue and carrying cash home. Moving a regular recipient to bank deposit or a mobile wallet usually costs less and is safer, as long as their bank does not eat the saving in receiving fees.

                ## Milestones
                1. Costs compared for cash pickup and bank deposit for the same amount.
                2. The recipient's bank details confirmed by them directly.
                3. One month sent by deposit and confirmed received.
                4. The monthly saving noted in your log.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A regular recipient has received three months by bank deposit or wallet, with the monthly saving against cash pickup recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Quote the same amount for cash pickup and bank deposit"
                - "Ask the recipient to confirm their bank details by phone"
                - "Send one month by deposit and confirm it arrived"
                - "Note the monthly saving in your transfer log"
            - name: Helping a relative open a bank account back home
              description: |-
                ## Purpose
                Opening an account in much of the Caribbean can mean a job letter, proof of address, references and a minimum deposit, which stops some relatives ever trying. Helping them gather the papers and book the appointment, sometimes at a credit union that asks for less, gives them a safe place for what you send.

                ## Milestones
                1. The bank or credit union's account opening checklist obtained.
                2. Each document gathered, with a workaround agreed for any they lack.
                3. An appointment booked and attended.
                4. The new account tested with a small transfer.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative holds an account in their own name back home, tested with a small transfer from you."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get the account opening checklist from the bank or credit union"
                - "Go through the list with your relative and note what is missing"
                - "Ask the branch what they accept if a document is missing"
                - "Send a small test amount once the account is open"
            - name: Monthly versus fortnightly sending, costed
              description: |-
                ## Purpose
                Splitting money into smaller, more frequent transfers helps some households budget, but flat fees mean two transfers can cost far more than one. Pricing both patterns for your actual amounts lets you choose on facts, or find a provider whose fees make fortnightly sending cheap.

                ## Milestones
                1. Your usual amount priced as one monthly transfer and as two fortnightly halves.
                2. The recipient's view on which pattern helps their budget recorded.
                3. Providers with percentage rather than flat fees checked.
                4. A sending pattern chosen and your routine updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed comparison of monthly and fortnightly sending is recorded, with the chosen pattern agreed with the recipient."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Quote your usual amount as one transfer and as two halves"
                - "Ask the recipient which pattern helps their budget more"
                - "Check for providers with percentage rather than flat fees"
                - "Agree the sending pattern and update your routine"
            - name: Groceries ordered online for family back home
              description: |-
                ## Purpose
                Several Caribbean supermarket chains and local delivery services now take orders and payment from abroad, so a monthly food shop can arrive at the door instead of as cash. It suits a parent who struggles to get to town, and you know the money went on food.

                ## Milestones
                1. Supermarkets or delivery services near the family that accept orders from abroad found.
                2. A first shopping list built with the household.
                3. One trial order placed, paid and delivered.
                4. A decision recorded on whether to repeat it monthly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One grocery delivery paid from abroad has reached your family, and a decision is recorded on whether to repeat it monthly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find supermarkets or delivery services near your family that take orders from abroad"
                - "Build a first shopping list with the household"
                - "Place and pay for one trial order"
                - "Ask how the delivery went and decide whether to repeat it"
            - name: Turning ad hoc requests into a fixed allowance
              description: |-
                ## Purpose
                Answering every request separately, a phone bill here, a school trip there, adds up to more than a planned amount and leaves you as the household's on-call bank. Converting the usual requests into one fixed allowance, with the household deciding how to spend it, gives them more say and gives you a predictable figure.

                ## Milestones
                1. Six months of separate requests listed and totalled.
                2. A monthly allowance set from that total.
                3. The allowance, and what it now covers, agreed with the household.
                4. Requests outside the allowance limited to the agreed emergencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Separate requests have been replaced by one agreed monthly allowance for at least three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every separate request from the last six months"
                - "Total them and set a monthly allowance from the figure"
                - "Agree with the household what the allowance now covers"
                - "Point new requests back to the allowance unless they are emergencies"
            - name: Choosing which currency the money lands in
              description: |-
                ## Purpose
                In some countries your relative can receive US dollars into a foreign currency account or as cash, while elsewhere the money is converted to local currency on arrival. Where US dollars are hard to buy locally, receiving them directly may matter more than the rate; where they are not, local currency is usually simpler.

                ## Milestones
                1. The payout currencies available for each recipient's country checked.
                2. Whether the recipient has a foreign currency account confirmed.
                3. The value received under each option compared for the same amount.
                4. A payout currency chosen for each recipient, with the reason noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each recipient has a chosen payout currency, with the cost comparison and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which payout currencies your provider offers for each country"
                - "Ask whether the recipient has or wants a foreign currency account"
                - "Compare the received value for each currency option"
                - "Record the chosen payout currency and why"
            - name: Cutting back the amount without a family fallout
              description: |-
                ## Purpose
                Redundancy, a new baby, a rent rise or a move can mean you cannot keep sending what you did. Planning the change, with a date, a new amount and an explanation, gives the family time to adjust and avoids the silence that hurts more than the smaller amount.

                ## Milestones
                1. A new amount worked out that you can keep up.
                2. A start date chosen at least a month away.
                3. The main recipient told by phone, with your reasons.
                4. The new amount and date confirmed in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reduced amount and start date have been explained to the family at least one month before the change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the new amount you can sustain"
                - "Choose a start date at least a month away"
                - "Tell the main recipient by phone, not by text"
                - "Follow up with the new amount and date in writing"
            - name: Christmas money sent early
              description: |-
                ## Purpose
                December is the busiest month for remittances to the Caribbean, with queues at agents, holds on transfers and occasional payout delays just before Christmas. Agreeing the Christmas amount in November and sending in the first half of December gets money there in time for ham, sorrel and black cake shopping without the last-minute scramble.

                ## Milestones
                1. The Christmas amount for each household agreed by mid November.
                2. The amount saved in advance rather than taken from December pay.
                3. Transfers sent and confirmed by mid December.
                4. Gift money for children kept separate from household money where the family wants that.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every Christmas transfer is sent and confirmed received by mid December, from money saved in advance."
                cadence: cyclic
              tasks:
                - "Agree each household's Christmas amount by mid November @recurring(yearly)"
                - "Set aside part of each autumn payday for Christmas money"
                - "Send Christmas transfers in the first half of December"
                - "Confirm each Christmas transfer has been collected"
            - name: Back-to-school money for September
              description: |-
                ## Purpose
                August is the second big remittance month: books, uniforms, shoes, bags and fees all land before term begins in September. Getting the book list and costs in July, and paying some items directly to the bookshop or school, makes sure the money goes where it is needed in time.

                ## Milestones
                1. Each child's book list, uniform costs and fees received in July.
                2. Items that can be paid directly to a school or bookshop identified.
                3. Back-to-school money sent or paid by early August.
                4. Receipts or photos of the bought items received.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Back-to-school money for every child is sent or paid by early August, with receipts or photos received."
                cadence: cyclic
              tasks:
                - "Ask for each child's book list and uniform costs in July @recurring(yearly)"
                - "Check whether the school or bookshop takes payment from abroad"
                - "Send or pay the back-to-school money by early August"
                - "Ask for photos of receipts or the books once bought"
            - name: Same-day emergency transfer plan
              description: |-
                ## Purpose
                When a relative calls late at night needing a hospital deposit or an urgent repair after a break-in, panic makes people send to the wrong name or fall for a scam. A one-page plan covering which provider pays out fastest to each country, who can collect, where the money comes from and how to verify the call lets you act calmly in minutes.

                ## Milestones
                1. The fastest verified route to each recipient's country identified.
                2. A named collector for each household who holds valid ID.
                3. The source of emergency money, your pot or a set limit, written down.
                4. The verification step, a call back or code word, at the top of the page.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page emergency transfer plan names the provider, collector, money source and verification step for each household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find which of your providers pays out fastest to each country"
                - "Name a collector with valid ID in each household"
                - "Write where emergency money comes from and the limit"
                - "Put the plan where a partner or sibling can find it"
            - name: Large one-off transfer with paperwork ready
              description: |-
                ## Purpose
                Sending a few thousand for a roof repair, a car or a hospital bill is different from the monthly transfer: higher limits, source of funds questions on both sides, and a real cost to getting the rate wrong. Preparing the paperwork and comparing a bank wire with a transfer service before you send avoids holds and saves a noticeable sum.

                ## Milestones
                1. Quotes for the full amount from a bank wire and two transfer services.
                2. Proof of where the money came from, such as savings statements, ready for both banks.
                3. The recipient's bank told to expect the transfer and asked what they need.
                4. The transfer confirmed received and its paperwork filed together.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The large transfer arrives without being held, and its quotes, source of funds documents and receipt are filed together."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get quotes for the full amount from a bank wire and two services"
                - "Gather statements showing where the money came from"
                - "Ask the recipient's bank what they need for a large incoming transfer"
                - "Send, confirm receipt and file all the paperwork together"
            - name: Carrying cash on a trip home versus sending ahead
              description: |-
                ## Purpose
                Packing an envelope of cash for the family is tempting, but it can be lost, stolen or go over the amount you must declare at customs, and changing it at the airport usually gives a poor rate. Comparing the cost of sending ahead with carrying, and checking the declaration rules at both ends, settles the question before you pack.

                ## Milestones
                1. Cash declaration rules for leaving and arriving checked on official customs sites.
                2. The cost of sending ahead compared with exchanging on arrival.
                3. A decision recorded on how much to carry and how much to send.
                4. The amount sent ahead confirmed received before you fly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before the trip, a recorded decision shows how much money will be sent ahead and how much carried, within the declaration rules at both ends."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check cash declaration rules for leaving and arriving"
                - "Compare sending ahead with exchanging cash on arrival"
                - "Decide how much to send ahead and how much to carry"
                - "Send the ahead amount a week before you fly"
            - name: Paying a relative's exam or college fees from abroad
              description: |-
                ## Purpose
                Exam registration for CSEC or CAPE, tuition at a university or community college, and lesson fees often have firm deadlines and set payment routes, and a missed deadline can cost a year. Getting the fee, the deadline and the accepted payment methods early, and paying the institution directly where possible, means the fee is in on time with a receipt to prove it.

                ## Milestones
                1. The fee amount, deadline and accepted payment methods confirmed with the school or institution.
                2. A payment route chosen, directly to the institution where possible.
                3. Payment made at least two weeks before the deadline.
                4. The official receipt forwarded to the student and saved in your folder.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fee is paid at least two weeks before the institution's deadline, with the official receipt saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the student for the fee amount, deadline and how it can be paid"
                - "Check whether the institution accepts payment from abroad"
                - "Pay at least two weeks before the deadline"
                - "Save the official receipt and send a copy to the student"
            - name: Supporting a child raised by grandparents back home
              description: |-
                ## Purpose
                Many Caribbean parents abroad have a child living with grandparents or an aunt while they work, sometimes called barrel children after the barrels of goods sent to them. A clear agreement on what the money covers, school, food, clothes and the caregiver's own time, plus a monthly call about spending, protects the child and your relationship with the caregiver.

                ## Milestones
                1. What the monthly amount covers agreed with the caregiver.
                2. School fees and big costs paid directly where possible.
                3. A monthly call held with the caregiver about the child's needs and spending.
                4. Receipts for major items shared, without treating the caregiver as a suspect.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written agreement with the caregiver exists, and a monthly call about the child's needs has happened for three months."
                cadence: rolling
              tasks:
                - "Write down what the monthly amount should cover for the child"
                - "Agree the list with the caregiver on a call"
                - "Pay school fees directly to the school where you can"
                - "Hold a monthly call with the caregiver about the child @recurring(monthly:15)"
            - name: Talking with your children about the money sent home
              description: |-
                ## Purpose
                Children growing up abroad notice the transfers and the phone calls but often do not know why the family sends money or what it means back home. Explaining it in a way that fits their age, and letting older ones help send a birthday gift to a cousin, passes on the habit of looking after family without turning it into a burden.

                ## Milestones
                1. A simple explanation of who you send to and why, pitched at each child's age.
                2. Children shown photos or voice notes from the people the money helps.
                3. An older child included in sending one gift transfer.
                4. Their questions answered honestly, including about limits.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each child can say in their own words who the family supports back home and why, and an older child has helped send one transfer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Plan an age-appropriate explanation for each child"
                - "Share photos or voice notes from the relatives you support"
                - "Let an older child help send a birthday gift to a cousin"
                - "Answer their questions about how much and why honestly"
            - name: First transfers as a newcomer abroad
              description: |-
                ## Purpose
                In the first weeks after moving, you may have no local bank account, no credit history and family waiting for the first money. Knowing which providers accept a passport and cash, what ID checks to expect and how to keep early transfers small gets money home without settling into the most expensive habit.

                ## Milestones
                1. Agents that accept your current ID and cash listed.
                2. The first transfer sent, with its receipt kept.
                3. A local bank account opened and linked to a cheaper online provider.
                4. The cheaper online route used for the regular transfer from then on.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within the first months abroad, your regular transfer has moved from cash at an agent to a linked bank account and online provider."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List agents near you that accept your passport for sending"
                - "Send the first transfer small and keep the receipt"
                - "Open a local bank account as soon as you have proof of address"
                - "Move the regular transfer to a cheaper online provider"
            - name: Sending home on a seasonal work contract
              description: |-
                ## Purpose
                Seasonal farm and hospitality workers from Jamaica, Trinidad and Tobago, the OECS islands and elsewhere often spend months in Canada or the US with the family relying on what they send. Planning the sending pattern before you leave, and agreeing who handles money at home, makes the season pay off rather than disappear in fees and early spending.

                ## Milestones
                1. A plan agreed before departure for how much goes home and when.
                2. A trusted person at home named to receive and manage the money.
                3. A low-cost route set up that works from the work location.
                4. Part of the earnings saved for the off-season, with the total checked at the end of the contract.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "By the end of the contract, regular transfers home and an off-season savings total are both recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a sending plan with the family before you leave"
                - "Name who at home receives and manages the money"
                - "Set up a low-cost transfer route that works from the farm or hotel"
                - "Check the off-season savings total at the end of the contract"
            - name: Sending home on a pension or fixed income
              description: |-
                ## Purpose
                Retirees abroad often keep sending money home long after their income has dropped to a pension, sometimes out of savings meant for their own care. Setting an amount the pension can carry, timing transfers to the day it arrives and reviewing when costs rise protects your later years as well as the family's.

                ## Milestones
                1. Monthly pension income and essential costs written down.
                2. A sustainable sending amount set from what remains.
                3. Transfers timed for a few days after the pension arrives.
                4. A rule agreed for what happens if your own care costs rise.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sending amount set from pension income after essential costs is recorded, with transfers timed after the pension lands."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your pension income and essential monthly costs"
                - "Set a sending amount that leaves your savings untouched"
                - "Check the pension has arrived before each transfer @recurring(monthly:2)"
                - "Agree with family what happens if your own care costs rise"
            - name: Child maintenance to a co-parent back home
              description: |-
                ## Purpose
                Paying maintenance for a child who lives with their other parent in the Caribbean works best when the amount, the day and the proof of payment are all clear. A dedicated transfer with a clear reference, and records kept apart from other family support, avoids disputes about what was paid.

                ## Milestones
                1. The amount and payment day, agreed or ordered, written down.
                2. A transfer route set up with a reference naming the child and month.
                3. Every payment logged separately from other remittances.
                4. Any court or agency order followed exactly, with a family lawyer consulted if unclear.

                ## Notes
                If there is a court order, pay exactly as it says and keep proof. Ask a family lawyer in the relevant country before changing an ordered amount.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every maintenance payment for the last six months is logged separately with a reference naming the child and month."
                cadence: rolling
              tasks:
                - "Write down the agreed or ordered amount and payment day"
                - "Set up a transfer with a reference naming the child and month"
                - "Send the maintenance payment on the agreed day @recurring(monthly:5)"
                - "Keep maintenance receipts in their own folder"
            - name: Transfers to places with tight banking or currency shortages
              description: |-
                ## Purpose
                Haiti, Suriname and Trinidad and Tobago have each had periods of bank cash shortages, US dollar rationing or unrest that closes agents for days. Knowing which payout routes still work, holding a second route ready and agreeing a fallback with the family keeps money moving when the usual channel stops.

                ## Milestones
                1. The routes that currently pay out in each affected country listed, with their limits.
                2. A second working route set up and tested.
                3. A fallback agreed with family if agents close, such as a trusted relative in a nearby town.
                4. Provider notices and official advisories checked before large transfers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each recipient in a country with banking or currency disruption, two tested payout routes and a family fallback are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List payout routes that currently work in your recipient's country"
                - "Set up and test a second payout route"
                - "Agree a fallback collector in another town with the family"
                - "Check provider notices before any large transfer"
            - name: Effective exchange rate tracking over a year
              description: |-
                ## Purpose
                Once the basics are in place, the remaining saving lies in the gap between the rate you get and the mid-market rate. Logging both every month and setting a rate alert shows your real yearly cost in money, and tells you whether a multi-currency account or a different provider would pay for itself.

                ## Milestones
                1. Mid-market and achieved rates logged for every transfer.
                2. A rate alert set for your currency pair.
                3. Your yearly cost from margin worked out in money, not percent.
                4. A decision recorded on whether a multi-currency account or new provider is worth it.

                ## Notes
                Start from the **Metrics log** template. Rate alerts help when timing a large transfer; for monthly support, sending on schedule matters more than chasing a rate.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month log of achieved against mid-market rates shows your yearly margin cost in money, with a decision recorded on it."
                cadence: cyclic
              tasks:
                - "Set a rate alert for your currency pair"
                - "Log achieved and mid-market rates for each transfer"
                - "Work out the quarter's margin cost in money @recurring(quarterly)"
                - "Ask the agent to compare your yearly margin cost with a multi-currency account's fees"
            - name: Remittance evidence file for visa or sponsorship applications
              description: |-
                ## Purpose
                Visa, sponsorship and some benefit applications can ask you to show that you support family abroad, and officials want consistent records, not screenshots gathered the night before. A tidy evidence file of transfers, with names matching passports and a cover summary, means you can answer that question quickly and accurately if it comes up.

                ## Milestones
                1. The evidence the application asks for checked on the official guidance.
                2. Two years of transfer receipts sorted by recipient, with names matching their IDs.
                3. A one-page summary of totals by year and recipient.
                4. The file reviewed by a regulated immigration adviser if the case is complex.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An evidence file with sorted receipts and a one-page summary matching the official guidance is ready before the application is submitted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read what evidence the official guidance asks for"
                - "Sort two years of receipts by recipient and date"
                - "Write a one-page summary of totals by year and recipient"
                - "Book a regulated adviser to review the file if the case is complex"
            - name: Who keeps sending if you cannot
              description: |-
                ## Purpose
                If you fell ill, lost your phone abroad or died, would anyone else know who you send to, how much, and through which app? A short continuity note kept with your important papers, and one trusted person who knows where it is, keeps a parent back home from suddenly going without.

                ## Milestones
                1. A continuity note listing recipients, amounts, providers and collection details.
                2. One trusted person told where the note is kept.
                3. A sibling or partner able to send from their own account if needed.
                4. The note checked and updated once a year.

                ## Notes
                This note is not a will. Ask a lawyer in each country about leaving money or property to family abroad.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated continuity note exists, a named person knows where it is, and they could send the regular transfer from their own account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a continuity note listing recipients, amounts and providers"
                - "Tell one trusted person where the note is kept"
                - "Help them set up a provider account and save the recipients"
                - "Update the continuity note each year @recurring(yearly)"
---

# Sending Money Home

Sending money home is how a great many Caribbean families abroad look after the people back home, and it often costs more and causes more friction than it needs to. This area starts with the foundations, a map of who you support, a budget line and a true cost comparison of transfer services, then builds the monthly sending routine, the knowledge that stops scams and held transfers, better ways to pay, the Christmas and back-to-school peaks, and situations from children raised by grandparents to seasonal contracts and pensions.

The rhythm is monthly: a rate check, the transfer on your sending day, confirmation from the family and receipts filed, with quarterly fee reviews, a yearly summary and a yearly family check-in. The Monthly budget and bills, Purchase decision, Savings goal and Metrics log templates pair with the budget, provider comparison, emergency pot and rate tracking projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
