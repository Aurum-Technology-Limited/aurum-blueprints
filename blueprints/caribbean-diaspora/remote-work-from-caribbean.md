---
id: caribbean-diaspora.remote-work-from-caribbean
name: Remote Work from the Caribbean
description: "Working from the islands without nasty surprises: the right permission and visa, internet and power that survive outages, hours that fit your team's time zone, tax residency tracked and a workspace that works."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, remote-work-from-caribbean, knowledge-worker, freelancer, remote-work, digital-nomad-visa, internet-backup, time-zones]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
    - risk-register
    - trip
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Remote Work from the Caribbean
          description: "Working remotely from the Caribbean: remote work visas, internet and power backup, time zones, tax residency and a workspace."
          projects:
            - name: Remote work permission from employer or clients
              description: |-
                ## Purpose
                Before anything gets booked, you need a clear yes from whoever pays you, because many employers allow remote work at home but not from another country, and some contracts tie you to a named location. A written approval that names the country, the dates and any conditions protects your job and your employer's payroll, and many visa applications ask for exactly this letter.

                ## Milestones
                1. Your contract, staff handbook and remote work policy read for any rule on working from abroad.
                2. A short request sent to your manager or HR naming the country, dates, working hours and how you will stay reachable.
                3. Any conditions from HR, IT or legal on security, data, tax or payroll listed in one place.
                4. A written approval, by email or letter, saved with your travel documents.

                ## Notes
                Freelancers do the same with each main client: a line in the contract or an email confirming they are happy for the work to be done from the Caribbean, and in which currency they will pay.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approval from your employer or each main client names the country and dates you will work from and is saved with your documents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your contract and staff handbook for any rule on working abroad"
                - "Draft a one-page request naming the island, the dates and your working hours"
                - "Ask IT whether the company laptop and VPN may be used outside the country"
                - "Save the written approval as a PDF beside your passport scan"
            - name: Remote work visa or visitor stay decision
              description: |-
                ## Purpose
                Several Caribbean countries run remote work programmes, such as the Barbados Welcome Stamp, the Antigua and Barbuda Nomad Digital Residence and Dominica's Work in Nature visa, while others expect visitors to stay a limited number of days and not to work at all. Choosing the right route for your length of stay and your passport avoids being told at immigration that a laptop and a three-month stay do not match a tourist stamp. Programmes open, close and change their fees and rules, so the official government site is the only source to trust, and citizens of the country need no visa at all.

                ## Milestones
                1. Your intended length of stay, the passports you hold and your income written down.
                2. The official rules for visitors and for any remote work programme in your chosen country found and saved.
                3. Eligibility checked against income thresholds, insurance requirements and the family members you want to bring.
                4. A route chosen, visitor entry, a remote work visa or entry as a citizen, with the reasons recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen entry route for your stay, backed by saved pages from the official immigration or programme website, is recorded with its reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how long you want to stay and which passports you hold"
                - "Find the official immigration page for visitors to your chosen country"
                - "Check whether that country currently runs a remote work visa programme"
                - "Compare the income, insurance and fee rules of the options that fit"
                - "Record the route you chose and the date you checked the rules"
            - name: Remote work visa application pack
              description: |-
                ## Purpose
                Applications for remote work visas usually ask for a passport scan, proof of employment or client contracts, bank statements showing income above a threshold, health insurance for the whole stay and sometimes a police certificate, which can take weeks to arrive. Building the pack in one folder before you apply means the online form takes an evening rather than a month of chasing. Keep every document scanned, dated and clearly named so a renewal later reuses most of it.

                ## Milestones
                1. The current document checklist downloaded from the official programme site.
                2. Every document gathered as a clearly named PDF in one folder, including any police certificate.
                3. Income evidence and insurance cover checked against the programme's stated minimums.
                4. The application submitted and the payment receipt and reference number saved.
                5. The approval letter or certificate printed and stored with your passport.

                ## Notes
                Police certificates and notarised copies are the usual bottleneck, so order them first.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A submitted remote work visa application with its reference number, and a folder holding every document it required."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the current document checklist from the official programme site"
                - "Order a police certificate if the programme asks for one"
                - "Scan bank statements and your employment letter into one folder"
                - "Submit the application and save the payment receipt and reference"
            - name: Internet test at the place you will work from
              description: |-
                ## Purpose
                Fibre reaches many Caribbean towns now, but a house at the end of a hillside road may still be on old copper or a congested wireless link, and the advertised speed is not what you get at 7 pm when the whole street is streaming. Testing the actual connection during your real working hours, before you commit to a long stay or a rental, tells you whether video calls will hold or whether you need a plan B from day one.

                ## Milestones
                1. The provider, package and connection type at the house or rental identified.
                2. Speed tests run by someone on site in the morning, afternoon and evening, with upload and latency noted.
                3. A video call held over the connection for at least 30 minutes.
                4. A decision recorded: the line is good enough, needs an upgrade, or needs a second connection.

                ## Notes
                Upload speed and latency matter more than download for calls. Ask for screenshots of the speed test, not a description.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Speed test results from three times of day at your work location are saved and a decision about upgrading or adding a backup is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your host which internet provider and package the house uses"
                - "Have someone on site run speed tests morning, afternoon and evening"
                - "Hold a 30-minute video call over the connection from the room you will use"
                - "Write down whether the line is good enough or needs a backup"
            - name: Power backup for router, laptop and phone
              description: |-
                ## Purpose
                Outages, scheduled load shedding and voltage spikes when power returns are part of life on many islands, and a dropped router ends a call even when the laptop battery is full. A small UPS on the router and modem, a surge protector or voltage regulator for the laptop and a charged power bank keep you online through the short cuts that cause most missed meetings.

                ## Milestones
                1. The voltage, plug type and usual outage pattern for your area found out from your host or the utility.
                2. A UPS sized to run the router and modem for at least an hour bought and installed.
                3. Laptop and monitor plugged into a surge protector or automatic voltage regulator.
                4. A tested run time written on a label on the UPS.

                ## Notes
                Voltage and plug type vary by island, from about 110 to 240 volts, so check before plugging in kit bought abroad. Ask your host where the main switch is while you are at it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The router and modem run on a UPS with a tested run time of at least one hour, and the laptop is behind surge protection."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your host about the voltage, plug type and how often the power goes"
                - "Note the wattage of your router, modem and any fibre box"
                - "Buy a UPS that covers those devices for at least an hour"
                - "Switch off the mains and time how long the router stays up"
            - name: Time zone map for your working week
              description: |-
                ## Purpose
                Eastern Caribbean countries, Barbados, Trinidad and Tobago and Guyana keep UTC minus 4 all year, Jamaica and the Cayman Islands keep UTC minus 5 and Belize sits at UTC minus 6, while the Bahamas and Haiti change their clocks like New York. Because most of the region never moves its clocks, your gap to London, Toronto or New York shifts twice a year, and a standing meeting can quietly slide an hour earlier. One page showing your overlap hours in both seasons prevents that.

                ## Milestones
                1. The time zones of your employer's office and each main team or client listed.
                2. The overlap window worked out for both the northern summer and the northern winter.
                3. Core hours you will be online agreed with your manager or clients.
                4. Your calendar set to show both time zones side by side.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page overlap table for summer and winter is shared with your team and your agreed core hours appear in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the time zones of your manager, team and main clients"
                - "Work out the overlap in both summer and winter clock seasons"
                - "Agree your core online hours with your manager in writing"
                - "Add a second time zone to your calendar display"
            - name: Workspace set up in a family home or rental
              description: |-
                ## Purpose
                A dining table in a busy family house works for a week, not for three months of eight-hour days. A proper chair, a table at the right height, a door that closes, light from the side and a fan or air conditioning in a room that stays bearable in the afternoon heat make the difference between working from home and working on holiday. Sort it within the first fortnight, before bad posture and a sweaty office become the routine.

                ## Milestones
                1. One room or corner chosen where you can close a door and take calls.
                2. A chair and table at a comfortable height, borrowed or bought.
                3. Cooling sorted: a fan, air conditioning or a cooler room for afternoon work.
                4. Laptop raised to eye level with a separate keyboard and mouse.
                5. The household told which space is yours during working hours.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated, cool workspace with a proper chair and a raised screen is in use for every working day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk the house at 2 pm to find the coolest room with a door"
                - "Borrow or buy a chair you could sit in for six hours"
                - "Raise the laptop to eye level with a stand and plug in a keyboard"
                - "Tell the household which room is your office during work hours"
            - name: Health and equipment insurance for a long stay
              description: |-
                ## Purpose
                Travel insurance bought for a fortnight's holiday often stops covering you after 30 to 90 days, may exclude trips where you work, and rarely covers a laptop left in a car. Many remote work visas also demand health cover for the whole stay. Getting long-stay health insurance with medical evacuation, and separate cover for your work kit, before you fly means one bad fall or one break-in does not end the stay.

                ## Milestones
                1. Your existing travel, health and home contents policies checked for limits on trip length, working abroad and portable equipment.
                2. Quotes from at least two long-stay or international health insurers compared, including medical evacuation.
                3. Cover for laptop, phone and other work equipment arranged or confirmed with your employer.
                4. Policy documents and emergency numbers saved offline and shared with one relative.

                ## Notes
                Ask whether pre-existing conditions are covered and which local hospitals bill the insurer directly rather than asking you to pay and claim.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Health insurance covering the full stay, including evacuation, and cover for work equipment are both in force before departure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your travel policy for the longest single trip it covers"
                - "Ask your employer whether company equipment is insured abroad"
                - "Get two quotes for long-stay health cover with medical evacuation"
                - "Save policy numbers and emergency lines on your phone for offline use"
            - name: Tax residency first check with an adviser
              description: |-
                ## Purpose
                Tax rules usually look at where you spend your days, where your home is and where the work is done, and a long stay can leave you liable in two places or create a payroll problem for your employer. US citizens, for example, remain taxable at home wherever they live, while UK and Canadian rules turn on days and ties. One paid hour with an adviser who knows both countries, before you go, tells you how many days you can stay and what to record.

                ## Milestones
                1. Your planned days in each country this tax year written down.
                2. Questions listed on residency tests, treaty position, payroll, social security and any local registration.
                3. A session held with a tax adviser who works with both countries, or with your employer's mobility team.
                4. A written note of the day limits and records you must keep.

                ## Notes
                This is preparation, not advice. Verify with the tax authority in each country and a qualified adviser before relying on any day limit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note from a qualified adviser or your employer's mobility team states the day limits and records that apply to your stay."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the days you expect to spend in each country this tax year"
                - "List your questions about residency, payroll and social security"
                - "Book an hour with an adviser who handles both countries"
                - "File the adviser's note with your visa documents"
            - name: Pay, banking and cards for life on the island
              description: |-
                ## Purpose
                Salary paid into an account abroad still has to reach the supermarket checkout on the island, and every route has a cost: card foreign transaction fees, ATM charges, poor exchange rates and, in some countries, banks that ration US dollars. Setting up the right mix of a low-fee card, a multi-currency account and a little local cash before you land saves a surprising amount over a long stay.

                ## Milestones
                1. Fees on your current cards for foreign spending and cash withdrawals noted.
                2. A low-fee card or multi-currency account opened and tested with a small payment.
                3. Your bank told about your travel so cards are not blocked.
                4. A plan for paying rent and bills locally written down: transfer, cash or a local account.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tested low-fee way to spend and withdraw on the island is in place and your bank has your travel dates on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up your cards' foreign transaction and ATM fees"
                - "Open a multi-currency account or low-fee travel card if you need one"
                - "Tell your bank the dates and country of your stay"
                - "Ask your landlord or host how they prefer rent and bills paid"
            - name: Weekly connection and power log
              description: |-
                ## Purpose
                Small outages add up: three dropped calls a week is a pattern your manager notices before you do. Logging a speed test and every power cut each week shows whether the line is getting worse and which hours to avoid for important calls, and it gives you dated evidence when you complain to the provider.

                ## Milestones
                1. A simple log with date, time, download, upload, latency and outage minutes.
                2. Four weeks of entries showing the pattern by time of day.
                3. Any repeated fault reported to the provider with dates from the log.
                4. Important calls moved away from the hours the log shows are worst.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds at least one speed test and every outage for each week over three months."
                cadence: rolling
              tasks:
                - "Set up a log with columns for speed, latency and outage minutes"
                - "Run a speed test at the start of core hours and log it @recurring(weekly:mon)"
                - "Switch off the UPS mains for five minutes to check the battery holds @recurring(monthly:7)"
                - "Report repeat faults to the provider quoting dates from the log"
            - name: Day count and location record
              description: |-
                ## Purpose
                Every immigration and tax question about a long stay comes back to the same thing: exactly which days you spent where. A running record, checked against passport stamps and flight bookings, takes five minutes a week and saves days of reconstruction if a tax authority, an employer or an immigration officer ever asks.

                ## Milestones
                1. A spreadsheet or calendar with one row per day and the country you were in at midnight.
                2. Flight confirmations and boarding passes saved in one folder.
                3. Totals per country per tax year visible at a glance.
                4. Each quarter's record checked against passport stamps.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A day-by-day location record with supporting flight confirmations covers every day of the stay and matches passport stamps."
                cadence: rolling
              tasks:
                - "Create a sheet with one row per day and a country column"
                - "Record the country you slept in each night of the week @recurring(weekly:fri)"
                - "Save each boarding pass and booking confirmation to one folder"
                - "Reconcile the totals with passport stamps and bookings @recurring(quarterly)"
            - name: Weekly plan around the time difference
              description: |-
                ## Purpose
                Calls with London that start at dawn, or with Vancouver that run past 8 pm, wear you down fast. Planning each week on Sunday, protecting the overlap hours for meetings and putting focused work outside them keeps the time difference from eating your mornings and evenings.

                ## Milestones
                1. A weekly template showing overlap hours, focus blocks and your hard stop.
                2. No more than two very early or late calls in a typical week.
                3. Meetings outside the overlap declined or moved with a suggested alternative.
                4. Your hard stop visible in your shared calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, your calendar shows protected focus blocks and no more than two out-of-hours calls a week."
                cadence: rolling
              tasks:
                - "Block your overlap hours as the only slots open for meetings"
                - "Plan next week's calls and focus blocks against the overlap @recurring(weekly:sun)"
                - "Set a visible hard stop at the end of your working day"
                - "Offer a recorded update instead of any meeting that falls before 6 am"
            - name: Monthly cost of living and exchange check
              description: |-
                ## Purpose
                Living costs on the islands surprise people both ways: rent can be modest while groceries, imported goods, electricity and data cost more than at home. A monthly look at spending, converted at the rates you actually got and set against what you are paid, shows early whether the stay is affordable or quietly draining savings.

                ## Milestones
                1. Spending grouped into rent, utilities, food, transport, data and fun, in both currencies.
                2. The exchange rate and fees you actually paid noted each month.
                3. A monthly surplus or shortfall figure against your pay.
                4. One change made whenever a month shows a shortfall.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly summary of spending in both currencies, with a surplus or shortfall figure, exists for every month of the stay."
                cadence: rolling
              tasks:
                - "Export last month's card and account transactions"
                - "Total the month's spending in both currencies and note the rates @recurring(monthly:3)"
                - "Compare electricity and data bills with what you budgeted"
                - "Pick one cost to cut if the month ran short"
            - name: Backup and device security routine
              description: |-
                ## Purpose
                Laptops get stolen from cars, fried by power surges and soaked in sudden downpours more often on the move than at a desk at home. A weekly check that backups ran, encrypted drives and monthly updates mean a lost laptop costs you a replacement, not your work.

                ## Milestones
                1. Full-disk encryption and a strong screen lock on every work device.
                2. Automatic cloud backup running for all work files.
                3. Device location tracking turned on for laptop and phone.
                4. A tested restore of one folder from backup.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Backups are verified weekly, every device is encrypted, and one test restore has worked."
                cadence: rolling
              tasks:
                - "Turn on full-disk encryption and device tracking on your laptop"
                - "Check the latest cloud backup finished without errors @recurring(weekly:wed)"
                - "Install operating system and app updates on every device @recurring(monthly:12)"
                - "Restore one folder from backup to prove it works"
            - name: Visa, passport and insurance expiry tracker
              description: |-
                ## Purpose
                Visas, passports, driving permits and insurance policies all expire on different dates, and a passport with less than six months left can stop you boarding a flight. One list of every expiry date, reviewed each quarter, gives you time to renew from the island instead of discovering a problem at check-in.

                ## Milestones
                1. Every document with an expiry date listed: passports, visa, insurance, driving permit and bank cards.
                2. A reminder set 90 days before each expiry.
                3. The renewal route from abroad noted for each document.
                4. The list reviewed each quarter and updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All travel, visa and insurance documents sit on one list with expiry dates and reminders set 90 days ahead."
                cadence: rolling
              tasks:
                - "List every document you hold that has an expiry date"
                - "Set a calendar reminder 90 days before each expiry"
                - "Note how to renew each document from abroad"
                - "Review the expiry list and start any renewals due @recurring(quarterly)"
            - name: Kit care against heat, humidity and salt air
              description: |-
                ## Purpose
                Humidity, salt air near the coast and afternoon heat shorten the life of laptops, chargers and headsets, and mould grows in bags and cables left in a cupboard for a few weeks. A monthly clean and a few cheap habits keep equipment working until the end of the stay.

                ## Milestones
                1. Silica gel packs or a dehumidifier in the place where kit is stored.
                2. Laptop vents cleaned and the machine kept off soft surfaces.
                3. Chargers and cables checked for corrosion or damage.
                4. A spare charger and cable bought before the first one fails.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Work equipment is cleaned and checked monthly and stored with moisture control, with no unplanned failures during the stay."
                cadence: rolling
              tasks:
                - "Buy silica gel packs or a small dehumidifier for your kit cupboard"
                - "Clean laptop vents and check cables for corrosion @recurring(monthly:20)"
                - "Keep the laptop on a hard surface or stand, never on a bed"
                - "Buy a spare charger before you need one"
            - name: Monthly visibility update to manager or clients
              description: |-
                ## Purpose
                Out of sight can drift into out of mind, especially when your colleagues sit in an office five hours ahead. A short monthly note of what you delivered, what comes next and when you are reachable keeps your work visible and heads off any doubt that the island stay is affecting output.

                ## Milestones
                1. A short update format agreed: delivered, next, blockers and availability.
                2. An update sent every month of the stay.
                3. Planned days off, local public holidays and outage risks flagged ahead.
                4. Feedback from your manager or clients noted and acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written update has gone to your manager or main clients in every month of the stay."
                cadence: rolling
              tasks:
                - "Agree a five-line update format with your manager"
                - "Send the monthly update of delivered work and coming availability @recurring(monthly:26)"
                - "Flag local public holidays in the update a month ahead"
                - "Keep any feedback you receive in your own file"
            - name: Offline work list for outage days
              description: |-
                ## Purpose
                Power cuts and line faults rarely give notice, and the hours lost are usually spent waiting rather than working. Keeping a weekly list of tasks that need no connection, with the files already synced to the laptop, turns an outage into a quiet writing or planning session instead of a lost afternoon.

                ## Milestones
                1. A standing list of at least five tasks that can be done fully offline.
                2. The files for those tasks synced for offline use.
                3. A message ready to tell your team you are offline and when you expect to be back.
                4. At least one outage spent working through the list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An up-to-date offline task list with synced files exists each week, and the outage message is saved on your phone."
                cadence: rolling
              tasks:
                - "Write five tasks you could finish with no internet at all"
                - "Refresh the offline task list and sync its files @recurring(weekly:thu)"
                - "Save a short outage message to your team on your phone"
                - "Download offline maps and key documents to your phone"
            - name: Video call presence from a Caribbean home
              description: |-
                ## Purpose
                Rain on a galvanise roof (the corrugated metal roofing common across the region), a neighbour's rooster, the dog at the gate and a ceiling fan can all reach your colleagues' ears, and bright tropical light behind you turns your face into a silhouette. Learning a few practical tricks with a headset, lighting and room choice makes you sound and look as professional as you did in the office.

                ## Milestones
                1. A headset with a noise-cancelling microphone tested on a recorded call.
                2. Your face lit from the front or side, with no window behind you.
                3. Noise suppression in your call software turned on and tested during heavy rain.
                4. A short recording reviewed by a colleague who confirms sound and picture are clear.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A colleague confirms on a test call that your audio is clear in rain and your face is well lit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record a two-minute test call from your workspace"
                - "Turn on noise suppression in your call software"
                - "Move your desk so the window is beside you, not behind"
                - "Ask a colleague for honest feedback on a test call"
            - name: Learning what your remote work visa allows
              description: |-
                ## Purpose
                Holders of a remote work visa are usually allowed to work only for employers or clients outside the country, must keep their income and insurance above the stated levels, and may have to report a change of address or job. Reading the conditions closely, and writing down what they mean for you, keeps you from breaking a rule by taking on a local client or a few days of paid work on the island.

                ## Milestones
                1. The full terms and conditions of your visa saved and read.
                2. A one-page summary of what you may and may not do, including local work and family members.
                3. Questions sent to the immigration office or programme team and the answers saved.
                4. Any reporting obligation added to your calendar.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your visa conditions, with written answers to any open questions, is saved with your visa documents."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download the full conditions that came with your visa"
                - "Write a one-page summary of what you may and may not do"
                - "Email the programme team any question the conditions leave open"
                - "Add any reporting dates to your calendar"
            - name: Understanding tax residency for remote workers
              description: |-
                ## Purpose
                Residency tests, double taxation treaties, social security agreements and the idea of a permanent establishment for your employer all bear on a long stay, and most people meet these words for the first time when a problem arrives. Learning the basics from official guidance lets you ask an adviser sharper questions and spot when your plans are about to cross a line.

                ## Milestones
                1. Official guidance on residence from your home country's tax authority read and summarised.
                2. Whether a tax treaty exists between your two countries checked.
                3. The main residency tests for your situation written in plain words.
                4. Three questions noted for your next adviser or HR conversation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary of the residency tests, treaty position and open questions for your two countries is saved."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your home tax authority's guidance on living and working abroad"
                - "Check whether your two countries have a tax treaty"
                - "Ask the agent to summarise the guidance into plain-language points"
                - "Note three questions to take to an adviser or HR"
            - name: Asynchronous working across a big time gap
              description: |-
                ## Purpose
                Written handovers, recorded walkthroughs and clear decision notes let a team keep moving while you sleep, and they matter far more when colleagues are five hours ahead in London or four behind in California. Practising these skills on purpose turns the time difference from a drag into a relay.

                ## Milestones
                1. An end-of-day handover note format your team agrees to read.
                2. Three recorded walkthroughs sent in place of meetings.
                3. Decisions and next steps written in the shared channel after every call.
                4. A team member confirms they get answers without waiting a day.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "For four weeks, every working day ends with a written handover and at least three meetings have been replaced by recordings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-line end-of-day handover for your team"
                - "Record a short screen walkthrough instead of booking a meeting"
                - "Post decisions and owners in the shared channel after each call"
                - "Ask a teammate whether waiting on you has reduced"
            - name: Local mobile data, SIMs and eSIMs
              description: |-
                ## Purpose
                Local mobile data is often your fastest backup when the home line drops, but plans, coverage and top-up habits differ by island and provider, and roaming on a foreign SIM can cost more in a week than a local plan does in a month. Working out how prepaid bundles and eSIMs work where you are turns your phone into a dependable hotspot.

                ## Milestones
                1. Neighbours' experience or coverage maps used to pick the network with the best signal at your workspace.
                2. A local SIM or eSIM active with a data bundle sized for hotspot use.
                3. The hotspot tested for a full video call.
                4. A top-up method set up so data never runs out mid-call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A local data plan is active and has carried a full video call as a hotspot from your workspace."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask neighbours which mobile network holds signal best indoors"
                - "Buy a local SIM or eSIM with a large data bundle"
                - "Run a 30-minute video call over the phone hotspot"
                - "Set up app-based or automatic top-ups"
            - name: Security on shared and public networks
              description: |-
                ## Purpose
                Shared Wi-Fi in a guesthouse, a cafe or a relative's house is often unprotected, and some employers block logins from unexpected countries or require their VPN at all times. Learning your company's rules and the basics of safe connection protects client data and stops your account being locked the day before a deadline.

                ## Milestones
                1. Your employer's rules on VPN, location and public networks read.
                2. IT told your working location so logins are not flagged as suspicious.
                3. VPN, multi-factor login and a password manager working on every device.
                4. A habit of using your own hotspot for sensitive work on public Wi-Fi.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "IT has your location on record and every device uses VPN, multi-factor login and a password manager."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your employer's policy on working from public or foreign networks"
                - "Tell IT your location and dates so logins are not blocked"
                - "Turn on multi-factor login for every work and banking account"
                - "Use your phone hotspot rather than cafe Wi-Fi for client work"
            - name: Payment platforms that work from your island
              description: |-
                ## Purpose
                Some payment platforms let you pay but not receive in certain Caribbean countries, limit withdrawals to particular banks or charge heavily to move money to a local account. Freelancers who check what actually works from their country before sending the first invoice avoid a client payment stuck for weeks.

                ## Milestones
                1. The platforms your clients prefer listed.
                2. Each platform's rules for your country of residence checked on its own site.
                3. A test payment received and withdrawn to an account you can use.
                4. Your invoices updated with the payment method that works.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one payment route has received and withdrawn a real test payment from your island, and your invoices name it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the payment platforms your clients use"
                - "Check each platform's rules for receiving money in your country"
                - "Ask a friend or client to send a small test payment"
                - "Update your invoice template with the method that worked"
            - name: Choosing a home internet provider
              description: |-
                ## Purpose
                Providers differ street by street in the Caribbean: one may have fibre to your gate while another offers fixed wireless or an old copper line, and installation can take days or weeks. Comparing the real options for your address, with installation times, repair times and contract terms, gets the best line in before you start relying on it.

                ## Milestones
                1. Every provider that serves your address listed with its connection type.
                2. Upload speed, contract length, installation time and fault repair times compared.
                3. Neighbours or a local community group asked about reliability.
                4. A provider chosen and installation booked.

                ## Notes
                Start from the **Purchase decision** template. Short-stay contracts and deposits for non-residents vary, so ask before you commit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider has been chosen against written criteria and an installation date is booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every provider that serves your street"
                - "Ask a local community group which provider is most reliable"
                - "Compare upload speed, contract length and repair times"
                - "Book installation with the provider you chose"
            - name: Backup internet from a second line, satellite or hotspot
              description: |-
                ## Purpose
                One connection is a single point of failure, and a fibre cut after a storm or roadworks can last days. Deciding between a second fixed line from another provider, a satellite service where it is licensed, or a mobile hotspot depends on your work, your budget and how often the main line fails.

                ## Milestones
                1. The cost of an hour offline for your work estimated.
                2. Options priced: a second provider, satellite where licensed and a large mobile data bundle.
                3. Each option checked for whether it shares a point of failure with the main line.
                4. A backup chosen, set up and tested by switching to it during a call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backup connection independent of the main line is in place and has carried a live call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate what an hour offline costs you in pay or goodwill"
                - "Check whether satellite internet is licensed in your country"
                - "Price a second provider against a large mobile data bundle"
                - "Switch to the backup during a call to test it"
            - name: Solar, inverter or generator for long outages
              description: |-
                ## Purpose
                Longer cuts, after a storm or during load shedding, can last hours or days, far beyond what a small UPS can carry. Comparing a portable power station, an inverter with batteries, a small solar set-up or a share of a household generator, against your needs and the house's wiring, tells you what is worth buying for the length of your stay.

                ## Milestones
                1. The longest outages at your location in the last year found out.
                2. Your essential load listed: router, laptop, phone, fan and a light.
                3. Options priced with run times and noise.
                4. A decision recorded, with a qualified electrician booked wherever house wiring is involved.

                ## Notes
                Never run a generator indoors or near windows. Anything wired into the house belongs to a qualified electrician.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three backup power options leads to a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask neighbours how long the longest outages lasted last year"
                - "Add up the watts your essential devices draw"
                - "Price a portable power station against an inverter and batteries"
                - "Record your decision and who will install it"
            - name: Co-working space or home office
              description: |-
                ## Purpose
                Co-working spaces in cities such as Bridgetown, Kingston and Port of Spain offer generator backup, fast lines and other people to talk to, at a price, while a home office costs nothing but may be noisy or prone to outages. Trying both for a week each settles the question with evidence rather than guesswork.

                ## Milestones
                1. Spaces within reach listed with day and monthly prices.
                2. A trial day or week booked at the best candidate.
                3. A week at home compared on reliability, focus and cost.
                4. A decision recorded, which may be a mix of both.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both options have been tried for at least a week and a decision with its monthly cost is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List co-working spaces within 30 minutes of where you stay"
                - "Book a trial day at the most promising one"
                - "Compare a week there with a week at home"
                - "Write down which mix you will use and what it costs a month"
            - name: Where to base yourself on the island
              description: |-
                ## Purpose
                Where you stay shapes the work: a hillside village may have the view but patchy power, while a town flat has fibre and traffic. Comparing areas on internet, outage history, distance to a hospital and the airport, noise and cost before signing a lease avoids a move halfway through the stay.

                ## Milestones
                1. Two or three candidate areas listed.
                2. Each scored on internet, power reliability, noise, transport, safety and cost.
                3. At least one visit or video walk-through of each.
                4. A base chosen and the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A base has been chosen after scoring at least two areas on the same written criteria."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List two or three areas you could live in"
                - "Score each area on internet, power, noise, transport and cost"
                - "Ask a local friend for a video walk-through of the shortlist"
                - "Record the base you chose and why"
            - name: Equipment to bring versus buy locally
              description: |-
                ## Purpose
                Monitors, office chairs and electronics often cost much more on the islands, while bringing them may mean excess baggage charges and customs duty. Deciding what to pack, what to ship and what to buy or borrow locally, and keeping receipts to show customs, prevents both a costly surprise at the airport and weeks without a decent screen.

                ## Milestones
                1. A list of the kit you need for a full working set-up.
                2. Local prices checked against the cost of bringing each item, including any duty.
                3. Customs rules on personal effects and work equipment checked on the official customs site.
                4. Receipts and serial numbers for everything you bring kept in one place.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written bring, ship, buy or borrow decision exists for every item of kit, with receipts kept for items brought."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every item you need for a full working set-up"
                - "Check local prices for a monitor, chair and headset"
                - "Read the customs guidance on bringing work equipment"
                - "Photograph receipts and serial numbers of the kit you pack"
            - name: Employer of record or contractor arrangement
              description: |-
                ## Purpose
                Employers who cannot keep you on their home payroll while you live abroad sometimes offer an employer of record service, which employs you locally on their behalf, or switch you to a contractor agreement. Each changes your rights, pension, benefits and tax, so comparing them in writing before you agree protects more than your salary.

                ## Milestones
                1. The options your employer is offering confirmed in writing.
                2. Differences in pay, pension, leave, health cover and notice listed side by side.
                3. Questions put to HR and, where needed, an employment or tax adviser.
                4. A decision made and the new contract checked before signing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of the arrangements on offer, reviewed by an adviser where needed, supports a signed and checked contract."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask HR to confirm in writing which arrangements they offer"
                - "List pay, pension, leave and health cover under each option"
                - "Book an adviser if the arrangement changes your employment status"
                - "Read the full contract before you sign it"
            - name: First week on the island set-up
              description: |-
                ## Purpose
                The first week sets the pattern for the whole stay, and it is easy to lose it to errands and welcome visits from relatives. A short checklist covering SIM, money, workspace, speed tests, UPS and a quiet test day before work starts means you begin the first Monday ready rather than apologising for your connection.

                ## Milestones
                1. A local SIM, cash and a working payment method in hand.
                2. Workspace, UPS and backup connection set up and tested.
                3. One full test working day completed before your official start.
                4. Family and hosts told your working hours.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the end of the first week, the workspace, power backup and connections are tested and one full test day has been worked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a first-week checklist before you fly"
                - "Buy a local SIM and data bundle at the airport or in town"
                - "Set up the UPS, router and workspace on your first day"
                - "Work one full test day before your official start"
            - name: Hurricane season work continuity plan
              description: |-
                ## Purpose
                Hurricane season runs from 1 June to 30 November, and a storm can take out power, internet and roads for days even on an island that avoids a direct hit. A plan agreed with your employer or clients, with a fallback location, charged devices, offline copies of key work and a way to tell people you are safe, keeps a storm from becoming a work crisis as well.

                ## Milestones
                1. A list of risks to your work in a storm, with what you will do about each.
                2. A fallback location identified, such as a hotel or office with a generator, or another island.
                3. Your employer or clients agreed on how you will report in and how long outages are handled.
                4. A grab bag with laptop, chargers, power bank and document copies ready from 1 June.
                5. The plan rehearsed once before each season.

                ## Notes
                Start from the **Risk register** template. Follow official warnings from your national disaster office; your safety comes before any deadline.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written storm plan agreed with your employer or clients, with a fallback location and grab bag, is rehearsed before each season starts."
                cadence: cyclic
              tasks:
                - "List what a storm would cut off and what you would do about each"
                - "Agree with your manager how you will report in after a storm"
                - "Pack a grab bag with laptop, chargers, power bank and document copies"
                - "Rehearse the plan and recharge the grab bag before 1 June @recurring(yearly)"
            - name: Visa renewal or extension
              description: |-
                ## Purpose
                Renewing your remote work visa or extending your stay takes longer than the first application if you leave it late, and some programmes want the renewal in before a fixed date. Starting three months before expiry with updated income proof and insurance keeps your status clean for the next year.

                ## Milestones
                1. The renewal rules and latest application date confirmed on the official site.
                2. Updated income evidence, insurance and passport copy gathered.
                3. The renewal submitted at least 60 days before expiry.
                4. The new approval saved and the expiry tracker updated.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The renewal is submitted at least 60 days before the current visa expires and the new approval is saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the official renewal rules and the latest date to apply"
                - "Ask your employer for an updated employment letter"
                - "Renew your health insurance so it covers the new period"
                - "Submit the renewal and save the reference number"
            - name: Rehearsal before a high-stakes call
              description: |-
                ## Purpose
                Pitches, interviews, board meetings and performance reviews over video leave no room for a frozen screen. Running a full rehearsal from your island set-up a day or two before, with the backup connection and power ready, means you can take the call calmly from anywhere.

                ## Milestones
                1. The call booked inside your most reliable connection hours from the log.
                2. A rehearsal held with a friend on the same platform.
                3. Backup connection, UPS and a phone dial-in number ready on the day.
                4. The household asked to keep the house quiet for the call.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The high-stakes call took place after a rehearsal, with a tested backup connection ready on the day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your log for the most reliable hours and book the call then"
                - "Rehearse the full call with a friend on the same platform"
                - "Save the dial-in phone number in case the video fails"
                - "Ask the household for a quiet hour around the call"
            - name: Working around Carnival and public holidays
              description: |-
                ## Purpose
                Festival seasons such as Trinidad Carnival, Crop Over in Barbados or Junkanoo in the Bahamas bring public holidays, road closures, music late into the night and fetes (big parties) you will want to go to. Planning leave and workload around the local calendar a season ahead means you enjoy the festival without missing deadlines.

                ## Milestones
                1. Local public holidays and festival dates added to your work calendar.
                2. Leave booked for the main days you want off.
                3. Deadlines that fall in festival weeks moved or finished early.
                4. Your team told about local holidays and noise risks ahead of time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Local holidays and festival dates are in your work calendar and leave is booked at least a month before each one."
                cadence: cyclic
              tasks:
                - "Add your country's public holidays and festival dates to your calendar"
                - "Book leave for the festival days you want off"
                - "Move deadlines that land in festival week"
                - "Review next year's festival and holiday dates and book leave @recurring(yearly)"
            - name: End of stay handover and departure
              description: |-
                ## Purpose
                Leaving is its own project: equipment to sell or ship, a lease to end, deposits to recover, provider contracts to cancel and the day count to close off. A fortnight of planning before you fly avoids paying for an internet line for six months after you have gone.

                ## Milestones
                1. Contracts for internet, SIM, rent and utilities ended or transferred.
                2. Equipment sold, given to family, stored or shipped.
                3. Deposits returned and final bills paid.
                4. Your day count closed off and saved with proof of departure.
                5. Your employer or clients told your new working location and start date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All local contracts are closed, deposits recovered and the day count finalised with proof of departure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every contract and subscription you took out on the island"
                - "Give notice on the internet line and rental within their notice periods"
                - "Decide what kit to sell, store, give away or bring back"
                - "Save your departure boarding pass with your day count record"
            - name: Working from your parents' home
              description: |-
                ## Purpose
                Relatives often hear that you are working from home and see someone on holiday, so a mother who wants help at the market or an uncle who drops by at 10 am is not being difficult, just hopeful. Agreeing working hours, a quiet space and the times you are free for family at the start, and keeping a weekly chat about the schedule, protects both the visit and the job.

                ## Milestones
                1. Your working hours explained to the household in plain terms.
                2. A sign or signal agreed for when you are on a call.
                3. Set times in the week for family errands and outings.
                4. A weekly check-in with the household about the coming week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The household knows your working hours and family time is set each week, with no more than one interrupted call a week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Explain your working hours to the household over a meal"
                - "Agree a simple signal for when you are on a call"
                - "Set two weekday slots for family errands and outings"
                - "Go over the coming week's calls and family plans together @recurring(weekly:sat)"
            - name: Freelance base set up in the Caribbean
              description: |-
                ## Purpose
                Freelancers working from the islands need contracts that say where the work happens, invoices clients will accept, a way to receive payment and a clear answer on whether any local registration is needed. Sorting these before the first invoice keeps you legal on both sides and paid on time.

                ## Milestones
                1. Client contracts updated to show your working location and payment currency.
                2. An invoice template with your details and the payment method that works from the island.
                3. Whether you need to register locally for tax or business checked with the official authority or an adviser.
                4. A routine for chasing late payments set up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active client contract names your location and currency, and an invoice template with a working payment method is in use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every active client and the currency they pay in"
                - "Add your working location to each contract or confirm it by email"
                - "Ask an adviser whether local registration applies to you"
                - "Ask the agent to draft a polite late-payment reminder you can reuse"
            - name: Remote parent with children in local school
              description: |-
                ## Purpose
                Parents bringing children for a term or a year juggle school runs at 7.30 am, holidays that differ from those back home, uniforms and books bought locally, and calls that land at pick-up time. Planning the school routine and the work calendar together keeps both running without a daily scramble.

                ## Milestones
                1. A school chosen and enrolment documents gathered.
                2. School terms and holidays added to the work calendar.
                3. Daily drop-off and pick-up mapped against your call schedule.
                4. Childcare or a relative arranged for days with early or late calls.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "School times and holidays sit in your work calendar and every early or late call day has childcare arranged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the school for its term dates and enrolment documents"
                - "Add school terms and holidays to your work calendar"
                - "Map daily drop-off and pick-up against your call times"
                - "Arrange a relative or sitter for days with early calls"
            - name: Two remote workers in one household
              description: |-
                ## Purpose
                Two people on calls in one small house means competing for the quiet room, the upload bandwidth and the UPS. Planning separate workspaces, a shared calendar of big calls and enough connection for both stops the daily clash before it becomes a row.

                ## Milestones
                1. Two separate workspaces, even if one is a corner with a screen.
                2. Total bandwidth checked for two simultaneous video calls.
                3. A shared calendar of each person's important calls.
                4. A rule agreed on who gets the quiet room and the backup when both need it.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both workers have a workspace, the line carries two calls at once, and important calls are in a shared calendar."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Run two video calls at once to test the line"
                - "Set up a second workspace with a screen and headset"
                - "Share calendars of important calls with each other"
                - "Agree who gets the quiet room when both have big calls"
            - name: Returning national keeping an overseas job
              description: |-
                ## Purpose
                Nationals who move home while keeping a job abroad need no visa, but face other questions: whether the employer can pay them legally, whether local income tax and national insurance contributions apply, and how foreign pay reaches a local bank. Working these through with the employer and the local authorities avoids back bills later.

                ## Milestones
                1. Your employer's position on paying someone living in your home country confirmed.
                2. Local tax and national insurance or social security obligations checked with the official authority or an adviser.
                3. A banking route for foreign salary into a local account set up.
                4. Registration and filing dates added to your calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written confirmation of how your employer will pay you and which local tax and contribution rules apply is saved."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask HR how they pay staff living in your home country"
                - "Check local tax and national insurance rules for foreign income"
                - "Open or update a local account able to receive foreign transfers"
                - "Add local filing and contribution dates to your calendar"
            - name: Short working trip of two to four weeks
              description: |-
                ## Purpose
                Not every stay is a visa-length move: a month working from an aunt's verandah over Christmas is common. Even short stays need approval from whoever pays you, an entry status that matches what you are doing, a connection test and a light kit list, and a short checklist covers all of them without the full set-up.

                ## Milestones
                1. Employer or client approval for the dates confirmed.
                2. Entry rules checked for whether remote work is allowed on a visitor stay.
                3. A packing list for a compact work set-up.
                4. The connection at the house checked before you fly.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Approval, entry status and a tested connection are confirmed before departure on a short working trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your manager to approve the dates in writing"
                - "Check whether a visitor stay allows remote work for your passport"
                - "Pack a compact kit: headset, laptop stand, charger and power bank"
                - "Ask your host to run a speed test before you book flights"
            - name: Automatic failover home network
              description: |-
                ## Purpose
                Automatic failover lets a dual-WAN router switch to the backup connection within seconds of the main line dropping, so calls stay up without you touching anything. Setting one up with a second line or a mobile modem, and putting the whole network on the UPS, is what serious remote workers in outage-prone areas end up doing.

                ## Milestones
                1. A dual-WAN router with failover support chosen.
                2. Main and backup connections both plugged into the router.
                3. Failover tested by unplugging the main line during a call.
                4. The router, modem and backup device all on the UPS.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pulling the main line during a video call switches to the backup without the call dropping."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your current router supports a second connection"
                - "Buy a dual-WAN router or a mobile modem that plugs into it"
                - "Unplug the main line mid-call to test the failover"
                - "Put every network device on the UPS"
            - name: Splitting the year between two homes
              description: |-
                ## Purpose
                Splitting the year, for example winters in St Lucia and summers in Toronto, sounds simple until you count the residency days, two sets of rent and utilities, paused contracts and the time zone switch twice a year. A yearly plan with a day budget for each country keeps the arrangement within the rules and affordable.

                ## Milestones
                1. A yearly calendar with planned days in each country.
                2. Day limits from your adviser written against each country.
                3. The costs of keeping both homes running listed.
                4. A routine for pausing and restarting utilities, internet and insurance at each move.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly two-country calendar with day budgets and running costs is in place and the day count stays within the agreed limits."
                cadence: cyclic
              tasks:
                - "Draft a yearly calendar showing the months in each country"
                - "Write your adviser's day limits beside each country"
                - "List what to pause or restart at each move"
                - "Compare days used so far with the yearly budget @recurring(monthly:15)"
            - name: Leading a distributed team from the islands
              description: |-
                ## Purpose
                Managers working from the Caribbean with teams in London, New York or Lagos need more structure than the team does: rotating meeting times so nobody always takes the awkward slot, written decisions and clear availability. Building those habits makes you a better manager wherever you sit.

                ## Milestones
                1. Meeting times rotated so the inconvenient slot is shared.
                2. A written decision log the whole team can see.
                3. Your availability and local holidays published to the team.
                4. One-to-ones held on a steady schedule despite the time gap.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full quarter, team meeting times rotate, decisions are logged and every one-to-one happens on schedule."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map every team member's time zone on one page"
                - "Set up a rotation for the team meeting slot"
                - "Start a shared decision log for the team"
                - "Publish your availability and local holidays to the team"
            - name: Local professional network on the island
              description: |-
                ## Purpose
                Isolation creeps up on remote workers far from colleagues, and the islands have growing tech, creative and business communities that meet in person. Joining a meetup, a co-working community or a professional association gives you friends, local knowledge and sometimes work.

                ## Milestones
                1. Two or three local groups or meetups found.
                2. At least one event attended each month.
                3. Five local professional contacts made.
                4. One contribution made: a talk, a workshop or help running an event.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You attend at least one local professional event a month and have five local contacts after three months."
                cadence: rolling
              tasks:
                - "Search for tech, creative or business meetups on your island"
                - "Attend one local professional event @recurring(monthly:9)"
                - "Follow up with one person you met at each event"
                - "Offer a short talk or workshop to one group"
            - name: Yearly stay, extend or return review
              description: |-
                ## Purpose
                Once a year, ask whether the arrangement still works: career progress, money, family, health, tax position and how you feel about being far from colleagues. A written review with a clear decision to stay, extend the visa or go back stops the stay drifting on by default.

                ## Milestones
                1. A review of the year covering work, money, family, health and status.
                2. Feedback from your manager or clients on how the year went.
                3. Your adviser's view on any tax or residency change.
                4. A decision recorded with next steps and dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written yearly review with a recorded decision to stay, extend or return exists for each year of the stay."
                cadence: cyclic
              tasks:
                - "Write a page on how work, money, family and health went this year"
                - "Ask your manager or main clients for honest feedback"
                - "Check with your adviser whether anything changes your tax position"
                - "Hold your stay, extend or return review @recurring(yearly)"
---

# Remote Work from the Caribbean

This area is for anyone working remotely from the Caribbean, whether a diaspora professional spending a few months at the family home in Jamaica or Guyana, a freelancer with clients in London and Toronto, or a knowledge worker on a remote work visa in Barbados or Antigua. It starts with the foundations (permission from whoever pays you, the right visa, a tested connection, power backup, time zones, insurance, tax and banking), then the weekly and monthly routines that keep work running, the skills of good calls, async work and security, the decisions about providers, backup power and where to live, the dated events from the first week to hurricane season and visa renewal, the situations of parents, couples, freelancers and returning nationals, and finally failover networks, split years and leading a team from the islands.

What repeats is a weekly speed test, day count, Sunday planning session around the time difference, backup check and offline task list, then monthly exchange and spending checks, kit care, a local meetup and an update to your manager, quarterly expiry and day count reviews, and a yearly hurricane rehearsal, festival leave plan and stay or return review. The Metrics log, Purchase decision, Operational checklist, Risk register and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
