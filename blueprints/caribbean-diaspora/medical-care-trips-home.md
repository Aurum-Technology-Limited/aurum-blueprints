---
id: caribbean-diaspora.medical-care-trips-home
name: Medical and Dental Care Back Home
description: "Care back home done with your eyes open: dentists and clinics checked, records carried both ways, full costs and insurance worked out, and follow-up lined up with your doctor abroad."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, medical-care-trips-home, everyone, dental-care, medical-treatment, health-records, travel-insurance, follow-up-care]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - metrics-log
    - purchase-decision
    - trip
    - remediation-plan
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Medical and Dental Care Back Home
          description: "Getting medical or dental treatment in the Caribbean during visits: finding trusted providers, records, costs, insurance and follow-up care abroad."
          projects:
            - name: Which kinds of care suit a visit home
              description: |-
                ## Purpose
                Routine dental work, an eye test, a check-up with a family doctor or a set of blood tests fit neatly into a two-week trip, while anything needing several visits, a long recovery or close monitoring often does not. Sorting the care you are considering into what suits a visit, what needs two trips and what belongs where you live stops you booking treatment the trip cannot carry. It also gives you a clear list to plan the next visit around.

                ## Milestones
                1. Every piece of care you are considering, from a scale and polish to a planned operation, written on one list.
                2. Each item marked as suits one visit, needs two visits, or better done where you live.
                3. For each item that needs two visits, the gap between them noted after asking a provider.
                4. A short list of the care to plan into the next trip, agreed with anyone travelling with you.

                ## Notes
                A fair rule of thumb: if something going wrong in the week after treatment would need the same provider to fix it, plan enough days on the island to be seen again before you fly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of care you are considering, each item sorted into one visit, two visits or done abroad, with the next trip's items chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every check-up, treatment or procedure you have been putting off"
                - "Mark each one as one visit, two visits or better done where you live"
                - "Ask a provider back home how many appointments each item really takes"
                - "Choose the items to plan into the next trip home"
            - name: One-page health summary to carry home
              description: |-
                ## Purpose
                Meeting you for the first time, often in a twenty-minute slot, a dentist or doctor needs your conditions, medicines, allergies and past operations at a glance. A single page in plain English, printed and on your phone, saves you reciting your history from memory and catches the allergy or blood thinner that changes how they treat you. It is just as useful if you fall ill unexpectedly.

                ## Milestones
                1. Current conditions, medicines with strengths, and allergies with the reaction each caused, listed on one page.
                2. Past operations, implants, pacemakers or joint replacements and their dates added.
                3. Your doctor's and dentist's contact details abroad, and an emergency contact on the island, at the foot of the page.
                4. The page checked by your doctor or pharmacist, then printed twice and saved on your phone.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page health summary, checked by your doctor or pharmacist, is saved on your phone and printed for the trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every medicine you take with its strength and how often"
                - "List allergies and the reaction each one caused"
                - "Add past operations, implants and their dates"
                - "Ask your pharmacist to check the medicine list for errors"
                - "Update the summary after any change in medicines or diagnosis @recurring(yearly)"
            - name: Copies of records from your doctor and dentist abroad
              description: |-
                ## Purpose
                Without your recent X-rays a dentist back home cannot plan a crown well, and without your earlier blood results a doctor cannot judge the new ones. Requesting copies of your dental charts, X-rays, recent results and clinic letters before you travel means the provider back home starts from your history rather than from scratch, and you avoid paying for repeat X-rays. Practices can take weeks to respond, so this needs to start early.

                ## Milestones
                1. A written request for records sent to your dentist and your doctor's practice abroad.
                2. Recent dental X-rays received as digital files, not just printouts.
                3. The last two years of blood results and any specialist letters downloaded or received.
                4. Everything saved in one folder named by date and provider.

                ## Notes
                In many countries you have a legal right to a copy of your records, though a fee or a waiting period may apply. Ask what format X-rays come in; a digital file your new dentist can open is worth more than a photocopy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dental X-rays, recent results and specialist letters from your providers abroad are saved in one folder before the trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your dentist's reception how to request copies of X-rays and charts"
                - "Download recent results and letters from your patient portal"
                - "Send a written records request to your doctor's practice"
                - "Save every file in one folder named by date and provider"
            - name: Talking to your own doctor before treatment back home
              description: |-
                ## Purpose
                Your doctor or dentist abroad knows your history and will be the one who sees you if something goes wrong after you land, so their view matters before you book anything significant. A short appointment to say what you plan, ask whether anything in your health changes it and agree how they will pick up the follow-up avoids a frosty reception later. Some will also tell you which tests to have done while you are away.

                ## Milestones
                1. An appointment booked with your doctor or dentist to discuss the planned care.
                2. Their view on whether your conditions or medicines change the plan written down.
                3. Any medicine they want paused or adjusted before treatment recorded in their words.
                4. Agreement on how follow-up will work when you return, including which reports they want to see.

                ## Notes
                Do not stop or change any medicine, especially blood thinners or diabetes medicines, on a provider's say-so back home without checking with the doctor who prescribed it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your own doctor or dentist has discussed the planned care with you and their advice and follow-up arrangement are written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book an appointment and say it is to discuss treatment overseas"
                - "Write three questions about how your conditions affect the plan"
                - "Ask which reports and results they want after you return"
                - "Note their advice on any medicine to pause before treatment"
            - name: What your health and travel insurance cover overseas
              description: |-
                ## Purpose
                Most travel insurance covers sudden illness and accidents but excludes treatment you planned before you left, and many policies also exclude complications from it. Reading the actual wording, then asking the insurer in writing, tells you whether a dental emergency, a planned procedure or a complication would be covered, and what your employer plan or national system will or will not pay for back home. Knowing this before you book is the difference between a claim and a bill.

                ## Milestones
                1. The policy wording for your travel insurance and any health plan found and saved.
                2. Exclusions for planned treatment, pre-existing conditions and complications highlighted.
                3. A written answer from each insurer on whether your planned care, and its complications, would be covered.
                4. A one-paragraph note of what is covered, what is not and the claims phone numbers.

                ## Notes
                Declare existing conditions honestly when buying travel cover. An undeclared condition is one of the commonest reasons a claim made from the island is refused.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note records, from each insurer's own answer, whether planned care and its complications back home are covered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the full policy wording for your travel and health cover"
                - "Highlight every exclusion about planned treatment and complications"
                - "Email each insurer describing the planned care and ask if it is covered"
                - "Save the insurers' replies with the claims phone numbers"
                - "Reread the policy wording when the cover renews @recurring(yearly)"
            - name: Shortlist of trusted dentists and clinics back home
              description: |-
                ## Purpose
                Family recommendations are where most people start, and they are valuable, but an aunt's favourite dentist may not do implants and the family doctor down the road may have retired. Building a shortlist of two or three providers for each kind of care, with what each does, how to book and what others say, turns word of mouth into a choice you have checked. One good shortlist serves every trip for years.

                ## Milestones
                1. Recommendations gathered from at least three relatives, friends or colleagues on the island.
                2. Two or three providers listed for each kind of care you need: dental, eye, family doctor, specialist.
                3. Each provider's address, booking method, opening hours and services noted.
                4. A first choice and a back-up marked for each kind of care.

                ## Notes
                Ask people what was done and how follow-up went, not just whether they liked the dentist. Someone who had a crown that lasted ten years is a better reference than someone who had a friendly cleaning.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shortlist names two or three checked providers for each kind of care needed, with a first choice and back-up marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Message three relatives or friends on the island asking who they trust for dental care"
                - "Ask the same people about a family doctor, an optician and any specialist you need"
                - "Write each provider's address, booking method and services into one list"
                - "Mark a first choice and a back-up for each kind of care"
            - name: Checking a practitioner's registration back home
              description: |-
                ## Purpose
                Every Caribbean country has a medical board or council and a dental council or board that registers who may practise, though how easy the register is to search varies from island to island. Confirming that your chosen dentist, doctor or surgeon is currently registered, and in what specialty, takes an hour and protects you from the unqualified practitioner who looks the part. It also tells you where to go if you ever need to complain.

                ## Milestones
                1. The medical and dental registration bodies for your home country identified.
                2. Current registration confirmed for each provider on your shortlist, online or by phone.
                3. Any claimed specialty, such as oral surgeon or orthodontist, checked against the register.
                4. The registration bodies' contact details saved for future use.

                ## Notes
                Where a register is not online, phone or email the council and ask whether a named practitioner is currently registered. It is a routine question and they expect it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each shortlisted provider's current registration and any claimed specialty are confirmed with the relevant board or council."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the name of the medical board and dental council in your home country"
                - "Search each register for the providers on your shortlist"
                - "Email or phone the council for anyone you cannot find online"
                - "Record each provider's registration and specialty on the shortlist"
            - name: Full-cost comparison of treatment here and back home
              description: |-
                ## Purpose
                Quoted at a third of the price back home, a crown is not a third of the cost once extra days off work, a longer stay, a second trip for fitting and possible repairs are counted. Pricing the whole thing both ways, including what your insurance or national system would cover where you live, shows whether the saving is real. Often it is, but sometimes a waiting list is the only thing being avoided.

                ## Milestones
                1. A written quote for the treatment from a provider back home and one from a provider where you live.
                2. Extra costs back home added: additional nights, local transport, a second trip, time off work.
                3. What insurance or your national system would pay in each place noted.
                4. A side-by-side total with the real saving, or extra cost, written at the bottom.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side cost sheet shows the full price of the treatment in both places and the real difference between them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your provider back home for a written, itemised quote"
                - "Get a comparable quote from a provider where you live"
                - "Add extra nights, transport, time off and any second trip to the home figure"
                - "Ask the agent to lay out both totals side by side with the difference"
            - name: Emergency plan for falling ill during a visit
              description: |-
                ## Purpose
                A toothache that swells overnight, a fall, chest pain or a bad bout of dengue needs a decision within the hour, and that is no time to find out which hospital has a working emergency room or whether the ambulance will come. Writing down where to go, who will drive you, your insurer's assistance number and what to say makes an emergency on the island a crisis you can handle. Share it with whoever you stay with.

                ## Milestones
                1. The nearest public emergency department and nearest private hospital or urgent care clinic to where you stay identified.
                2. The local emergency number and a private ambulance service, where one exists, saved in your phone.
                3. Your insurer's emergency assistance line and policy number saved and printed.
                4. A relative or friend on the island agreed as the person who drives you and stays with you.
                5. The plan shared with your hosts and someone at home abroad.

                ## Notes
                Many travel insurers want you to call their assistance line before or soon after going to hospital. Calling late is a common reason claims become difficult.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergency plan names the hospital, the local emergency and insurer numbers and a driver, and is shared with your hosts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the nearest emergency department and private clinic to where you will stay"
                - "Save the local emergency number and your insurer's assistance line in your phone"
                - "Ask a relative on the island to be your driver in an emergency"
                - "Send the written plan to your hosts and to someone at home"
            - name: Paying for treatment with cash, cards and receipts
              description: |-
                ## Purpose
                Some private clinics back home take cards, others want cash in local currency or US dollars, and many ask for a deposit before a procedure. Knowing how each provider wants paying, carrying the right mix and insisting on itemised receipts on letterhead keeps the appointment smooth and makes any insurance or tax claim possible later. A receipt that says only 'dental work' is useless to an insurer.

                ## Milestones
                1. Each provider's accepted payment methods, currency and deposit rules confirmed.
                2. A payment plan for the trip: how much cash, which card and any transfer in advance.
                3. Your bank told about overseas card use and its foreign transaction fee checked.
                4. Itemised receipts on letterhead, with treatment codes or descriptions, collected after every visit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every payment made for care back home has an itemised receipt on the provider's letterhead filed in your records folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each provider which payment methods and currencies they accept"
                - "Check your card's foreign transaction fee and tell your bank about the trip"
                - "Ask for an itemised receipt on letterhead at the end of every visit"
                - "Photograph each receipt the same day and add it to your records folder"
            - name: Health records folder kept current across two countries
              description: |-
                ## Purpose
                Records split between a practice in Manchester, a dentist in Kingston and a lab in Port of Spain are as good as lost when a new provider needs them. One folder, on your phone and backed up, holding results, X-rays, receipts and treatment reports from both countries, means any doctor anywhere can see your history in minutes. A quarterly ten-minute tidy keeps it that way.

                ## Milestones
                1. A folder created with sections for summaries, results, imaging, treatment reports and receipts.
                2. All existing records from both countries scanned or saved into it.
                3. The folder backed up somewhere other than your phone.
                4. A quarterly routine of adding new documents running for a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A backed-up health records folder holds results, imaging, reports and receipts from both countries and has been updated each quarter for a year."
                cadence: rolling
              tasks:
                - "Create the folder with sections for results, imaging, reports and receipts"
                - "Scan the paper records you already have from both countries"
                - "Set up a backup copy outside your phone"
                - "Add new letters, results and receipts to the folder @recurring(quarterly)"
            - name: Booking appointments back home before each trip
              description: |-
                ## Purpose
                Good dentists and specialists back home are busy, and the weeks around Christmas, Easter and Carnival fill fastest with returning nationals who had the same idea. Booking as soon as flights are fixed, with a clear note of what you need, means you get the first days of the trip rather than the morning you fly out. The same routine every trip turns a scramble into a habit.

                ## Milestones
                1. A standard message written that says who you are, what you need and your dates.
                2. Appointments requested within a week of booking flights for each trip.
                3. Confirmations received in writing, with the clinic's address and phone number.
                4. Treatment scheduled in the first half of each trip, leaving time for review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each trip, appointments are confirmed in writing within a week of booking flights and fall in the first half of the stay."
                cadence: cyclic
              tasks:
                - "Write a standard booking message with your name, needs and travel dates"
                - "Send it to each provider as soon as flights are booked"
                - "Ask for written confirmation with the address and a contact number"
                - "Check upcoming trip dates against any care you are due @recurring(quarterly)"
            - name: Treatment fund for care back home
              description: |-
                ## Purpose
                Paid in cash back home, a crown, a pair of varifocals or a course of root canal treatment can still run into hundreds of pounds or dollars, and it usually lands in the same month as flights and gifts. Putting a fixed amount aside each month into a separate pot means the care gets done because the money is already there. It also gives you a buffer if a quote comes in higher than expected.

                ## Milestones
                1. A target amount set from the quotes and care list for the next two trips.
                2. A separate savings pot opened and named for treatment.
                3. A standing monthly transfer running.
                4. The pot reaching its target before the trip it is meant for.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate treatment fund receives a monthly transfer and reaches its target before the trip it is meant for."
                cadence: rolling
              tasks:
                - "Add up the quotes for care planned over the next two trips"
                - "Open a separate savings pot named for treatment"
                - "Move the agreed amount into the treatment fund @recurring(monthly:12)"
                - "Raise the target when a new quote comes in"
            - name: Buying regular medicines at pharmacies back home
              description: |-
                ## Purpose
                Many people top up regular medicines at pharmacies on the island, where some are sold under different brand names, in different strengths or without the prescription you would need abroad. Doing it safely means knowing the generic name of everything you take, matching strengths exactly, keeping your doctor informed and staying within the import allowance on the way back. A monthly count tells you when a top-up is coming.

                ## Milestones
                1. The generic name and exact strength of every regular medicine written on your health summary.
                2. A pharmacist back home who knows your list and keeps receipts.
                3. Your doctor abroad told which medicines you buy on the island.
                4. The import rules for bringing medicines back checked on the official customs or health regulator site.

                ## Notes
                Do not switch to a different medicine or strength because it is what the pharmacy has. If the exact match is not available, ask the pharmacist to speak to your doctor first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every medicine bought back home matches the generic name and strength on your list, and your doctor abroad knows about it."
                cadence: rolling
              tasks:
                - "Write the generic name and strength of each medicine on your summary"
                - "Count how many days of each medicine you have left @recurring(monthly:5)"
                - "Check the import allowance for medicines on your customs authority's site"
                - "Tell your doctor abroad which medicines you buy on the island"
            - name: Claims and receipts log for overseas treatment
              description: |-
                ## Purpose
                Claims for treatment abroad get lost between a receipt in a handbag, an insurer that wants a form signed by the dentist and a three-month deadline nobody remembered. A simple log of every claim, what was sent, when and what came back, with a monthly check, means you actually collect what you are owed. It also shows at year end what care back home really cost after reimbursement.

                ## Milestones
                1. A log set up with columns for date, provider, amount, insurer, date sent and outcome.
                2. Each insurer's claim deadline and required documents noted at the top.
                3. Every claim from the last trip entered and sent.
                4. Each claim either paid, refused with a reason, or appealed.

                ## Notes
                Start from the **Metrics log** template and keep one row per claim.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every claim from care back home is logged with its dates and outcome, and none passes its deadline unsent."
                cadence: rolling
              tasks:
                - "Set up the claims log with date, provider, amount, insurer and outcome columns"
                - "Write each insurer's claim deadline and document list at the top"
                - "Enter and send every claim from the last trip"
                - "Chase any claim with no reply after a month @recurring(monthly:20)"
            - name: Follow-up schedule after treatment back home
              description: |-
                ## Purpose
                Implants need reviews, crowns need checking, a new medicine needs a blood test and a lump that was scanned needs a repeat scan, but once you fly out nobody back home is going to ring you about it. Turning every follow-up instruction into a dated entry, with who will do it and where, closes the gap between two health systems. A monthly glance keeps those dates from slipping.

                ## Milestones
                1. Every follow-up instruction from the last trip written down with its timing.
                2. Each one assigned to a provider: back home on the next trip or where you live.
                3. Dates entered in your calendar with reminders a month ahead.
                4. Each follow-up marked done with the result filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every follow-up instruction from care back home has a date, a named provider and is marked done with its result filed."
                cadence: rolling
              tasks:
                - "Read through every aftercare sheet and report from the last trip"
                - "Write each follow-up with its timing and who will do it"
                - "Put each follow-up in your calendar with a reminder a month ahead"
                - "Check the follow-up list for anything due in the next six weeks @recurring(monthly:8)"
            - name: Yearly dental and eye check rota across two countries
              description: |-
                ## Purpose
                If you visit home every year, it can make sense to have the dental check and the eye test there one year and where you live the next, or always in one place, but drifting between the two means some years nobody looks at all. Fixing a rota tells each provider when to expect you and makes sure your teeth and eyes are checked every year. It also gives both providers a fuller picture over time.

                ## Milestones
                1. A decision recorded on where dental and eye checks happen each year.
                2. Both providers told about the arrangement.
                3. Records from each check shared with the other provider.
                4. Two full years of checks completed without a gap.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dental and eye checks have happened every year for two years, with records shared between providers in both countries."
                cadence: cyclic
              tasks:
                - "Decide which country each year's dental and eye checks will happen in"
                - "Tell your dentist and optician in both places about the rota"
                - "Book this year's dental check-up in the agreed country @recurring(yearly)"
                - "Book this year's eye test in the agreed country @recurring(yearly)"
            - name: Keeping in touch with your providers back home
              description: |-
                ## Purpose
                Seeing you once a year, a dentist or doctor back home will do better work if they know what has happened since: the new diagnosis, the crown that cracked, the medicine your specialist started. A short yearly message with your updated summary, and copies of anything relevant from abroad, keeps your file current and the relationship warm. It also means they will make room for you when something is urgent.

                ## Milestones
                1. A current email or WhatsApp contact for each provider back home saved.
                2. A yearly update sent with your health summary and any new results.
                3. Each provider's preferred way of receiving records noted.
                4. A reply or acknowledgement received from each provider.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each regular provider back home has received an updated health summary and relevant results at least once in the past year."
                cadence: rolling
              tasks:
                - "Save a current email or WhatsApp number for each provider back home"
                - "Ask each provider how they prefer to receive records"
                - "Send your updated summary and new results to each provider @recurring(yearly)"
            - name: Yearly review of care received back home
              description: |-
                ## Purpose
                Looking back once a year at what was done, what it cost after claims, what held up and what went wrong tells you whether care back home is serving you or just feels cheaper. It is the point to drop a provider who disappointed you, add one who impressed you and decide what to plan for next year. Twenty minutes with the records folder and the claims log is enough.

                ## Milestones
                1. Every treatment from the past year listed with provider, cost after claims and outcome.
                2. Any treatment that needed repair or caused problems flagged.
                3. The provider shortlist updated: kept, dropped or added.
                4. Next year's planned care written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review lists each treatment's cost and outcome and records changes to the provider shortlist and next year's plan."
                cadence: cyclic
              tasks:
                - "List each treatment from the past year with its provider and outcome"
                - "Add the cost after any insurance repayment"
                - "Update the provider shortlist with who stays and who goes"
                - "Review the year's care back home and set next year's plan @recurring(yearly)"
            - name: Public and private care as a visitor back home
              description: |-
                ## Purpose
                Holding a passport does not always mean free or low-cost public care when you live abroad, and the rules for non-resident nationals differ between, say, Jamaica, Trinidad and Tobago, Barbados and Guyana. Learning how public health centres, public hospitals and private clinics treat a visitor like you, what each charges and how long the waits are, lets you choose sensibly and avoid surprise bills. Check with the ministry or the facility rather than relying on what was true when you left.

                ## Milestones
                1. Whether public facilities treat non-resident nationals, and at what charge, confirmed from an official source.
                2. Typical charges at a private clinic for a consultation, a filling and basic blood tests noted.
                3. How referrals to a specialist work for a visitor written down.
                4. A short note on when you would use public care and when private.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note sets out, from official sources and provider quotes, what public and private care cost you as a visitor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the health ministry's pages on charges for non-residents"
                - "Phone a public health centre and ask what a visiting national pays"
                - "Ask two private clinics for their consultation and basic treatment fees"
                - "Write a short note on when you would choose public or private care"
            - name: Reading a dental treatment plan and quote
              description: |-
                ## Purpose
                Quotes that list 'crown, upper left' with one price leave out what the crown is made of, whether the root canal beneath it is included and who pays if it fails. Learning the basic terms, from porcelain-fused-to-metal and zirconia to post and core and guarantee periods, lets you compare quotes from two dentists and ask the right questions. It takes a couple of evenings and saves real money.

                ## Milestones
                1. The common terms for fillings, crowns, bridges, root canals and implants understood well enough to explain.
                2. A checklist of what a complete quote should state: material, each stage, lab fees, guarantee.
                3. A real or past quote read against the checklist and its gaps listed.
                4. Questions written to send back to the dentist.

                ## Notes
                Tooth numbering differs between systems, so ask the dentist to say which tooth in words as well as numbers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quote checklist exists and at least one real quote has been checked against it, with gaps sent back as questions."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a reputable dental association's guide to common treatments"
                - "Write a checklist of what a complete quote should state"
                - "Check a real quote against the checklist and list what is missing"
                - "Send the missing points back to the dentist as questions"
            - name: Questions to ask before agreeing to any procedure
              description: |-
                ## Purpose
                On a short trip it is easy to say yes in the chair because the dentist is kind, the price is good and the flight is on Saturday. Having a standard list of questions about alternatives, risks, what happens if it goes wrong and who handles aftercare once you have left the island means you agree on information, not pressure. Practise it once and it becomes second nature.

                ## Milestones
                1. A written list of eight to ten questions for any procedure.
                2. The list saved on your phone and printed with your health summary.
                3. The questions used at the next consultation and the answers written down.
                4. A rule agreed with yourself on what you will not decide on the same day.

                ## Notes
                Good starting questions: what are the alternatives, including doing nothing; what can go wrong and how often; how many of these have you done; what happens if there is a problem after I fly; and what is included in the price.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written list of procedure questions has been used at a consultation, with the provider's answers recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write eight to ten questions to ask before any procedure"
                - "Save the list on your phone beside your health summary"
                - "Use the list at your next consultation and note the answers"
                - "Decide which treatments you will never agree to on the same day"
            - name: Spotting good hygiene and safety at a clinic
              description: |-
                ## Purpose
                Most clinics back home are clean and careful, but standards vary, and you have the right to look. Knowing what good infection control looks like, such as sealed instrument pouches, fresh gloves, single-use needles and a working steriliser, and what emergency equipment a surgery should have, lets you judge a clinic in the first five minutes. Asking politely is normal and good providers welcome it.

                ## Milestones
                1. A short list of signs of good hygiene in a dental or medical clinic.
                2. Questions about sterilisation and emergency equipment written down.
                3. The list used at a first visit and impressions recorded.
                4. Any clinic that fails the check removed from your shortlist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hygiene checklist has been used at a first visit back home and the clinic's result recorded on your shortlist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a dental or medical regulator's guide to infection control"
                - "Write a short list of what you will look for in the treatment room"
                - "Ask at your next first visit how instruments are sterilised"
                - "Record each clinic's result on your shortlist"
            - name: Flying safely after dental work or surgery
              description: |-
                ## Purpose
                Tooth extractions, sinus lifts, eye procedures and operations can all change when it is safe to fly, and a nine-hour flight back to London or Toronto brings its own risks such as blood clots and pressure on healing tissue. Asking each provider for their own advice on timing, writing it down and building it into the return date avoids an awkward choice between a changed ticket and a risky flight. The answer depends on you and the procedure, so it must come from them.

                ## Milestones
                1. For each planned procedure, the provider's advice on how soon you may fly obtained in writing.
                2. Any advice on clot prevention, such as moving about or compression stockings, recorded.
                3. Your return flight date checked against the advice.
                4. A plan for what you will do if the provider says you are not fit to fly.

                ## Notes
                If you have had a clot before, take blood thinners or have had recent surgery, tell both the provider back home and your doctor abroad before booking the return flight.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written advice on flying after each planned procedure is held, and the return flight date fits it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each provider how soon after the procedure you may fly"
                - "Write their answer with any advice on clot prevention"
                - "Compare their advice with your booked return date"
                - "Check what changing the return flight would cost"
            - name: Results and imaging your doctor abroad can use
              description: |-
                ## Purpose
                Blood results from a lab back home may use different units or reference ranges from your lab abroad, and a scan handed over as a printed photo is far less useful than the full image files. Knowing what to ask for, such as the full lab report with units and ranges, the radiologist's written report and the images on a disc or download link, means your doctor abroad can act on the results instead of repeating them. Ask before the test, not afterwards.

                ## Milestones
                1. A note of what to request with every test: full report, units, reference ranges, images and radiologist's report.
                2. The request made at each lab or imaging centre used on the last trip.
                3. Results received in a form your doctor abroad has confirmed they can use.
                4. Everything saved in your records folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Results from tests back home are received as full reports and image files that your doctor abroad has confirmed are usable."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor abroad which formats they accept for results and scans"
                - "Write a short request list to hand to any lab or imaging centre"
                - "Request the full report and image files at every test back home"
                - "Save the results in your records folder the same day"
            - name: Patient rights, consent and complaints back home
              description: |-
                ## Purpose
                If something goes wrong with treatment back home, you need to know who to complain to, what records you are entitled to and what you signed. Learning how consent forms, record access and complaints work in your home country, and keeping copies of everything you sign, means a problem can be raised properly instead of argued about over WhatsApp. Most people never need it, which is exactly when to learn it.

                ## Milestones
                1. The body that handles complaints about doctors and dentists in your home country identified.
                2. The process and time limits for a complaint noted.
                3. Your right to a copy of your records back home confirmed.
                4. A habit in place of photographing every consent form you sign.

                ## Notes
                This is organisational, not legal advice. If a serious complaint becomes a legal matter, speak to a lawyer in that country.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records who handles complaints in your home country, the time limits and how to get your records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find who handles complaints about doctors and dentists in your home country"
                - "Note the steps and any time limits for making a complaint"
                - "Check how a patient requests a copy of their records there"
                - "Photograph every consent form you sign from now on"
            - name: Deciding where to have one major procedure
              description: |-
                ## Purpose
                A knee replacement, a cataract operation, a hernia repair or a hysterectomy is a different decision from a filling: the recovery takes weeks, complications can appear after you fly and the waiting list where you live may be the thing driving the choice. Comparing the two options properly, on surgeon, hospital, cost, recovery support and follow-up, and taking your doctor's view, means the decision is one you can stand behind whichever way it goes.

                ## Milestones
                1. The procedure, the waiting time where you live and your doctor's view written down.
                2. A surgeon and hospital back home identified and their experience with this procedure checked.
                3. Costs, recovery time, who will care for you and follow-up compared for both options.
                4. A decision recorded with the reasons.

                ## Notes
                Start from the **Purchase decision** template and score both options on the same criteria.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of having the procedure here or back home ends in a recorded decision with the reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your doctor for the current waiting time and their view on going abroad"
                - "Find a surgeon back home and ask how many of this procedure they do a year"
                - "Score both options on cost, recovery support and follow-up"
                - "Write down the decision and the reasons for it"
            - name: Implant, bridge or denture decision back home
              description: |-
                ## Purpose
                Replacing a missing tooth is one of the commonest reasons people book dental work back home, and the options differ in cost, number of visits and how long they last. An implant usually needs a healing period of months between stages, which means two trips, while a bridge or denture can often be finished in one stay. Understanding the trade-offs and getting each option quoted lets you choose what fits your mouth, your money and your travel.

                ## Milestones
                1. Your dentist's assessment of which options are suitable for you obtained.
                2. Each option quoted back home with the number of visits and the time between them.
                3. The travel each option needs, and its cost, added to the comparison.
                4. A choice made and the treatment plan booked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An option for replacing the missing tooth is chosen from written quotes that include visits, timing and travel cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your dentist which tooth replacement options suit you"
                - "Get written quotes for each option from a dentist back home"
                - "Add the number of trips each option needs and their cost"
                - "Choose an option and book the first stage"
            - name: Eye test and new glasses made back home
              description: |-
                ## Purpose
                An eye test and a pair of glasses made by an optometrist back home can be good value and quick, sometimes ready within a few days. Getting the full prescription in writing, including the measurement between your pupils, and checking the glasses before you leave the island means you fly home with a pair that works and a prescription you can use again anywhere. Varifocals take longer, so book early in the trip.

                ## Milestones
                1. An eye test booked with a registered optometrist in the first days of the trip.
                2. A written copy of the full prescription, including pupillary distance, received.
                3. The glasses collected and checked for comfort and clear vision before you fly.
                4. The prescription saved in your records folder.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New glasses made back home have been checked before departure and the full written prescription is in your records."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an eye test for the first days of the trip"
                - "Ask for the full written prescription including pupillary distance"
                - "Check the glasses carefully before leaving the optician"
                - "Save the prescription in your records folder"
            - name: Second opinion from a specialist back home
              description: |-
                ## Purpose
                Some people use a trip home to get a second opinion from a cardiologist, gynaecologist, orthopaedic surgeon or other specialist, especially when the wait where they live is long or a diagnosis feels uncertain. A second opinion is only worth having if the specialist sees your full records and you bring the answer back to your own doctor. Done well, it settles doubts and speeds up the right care.

                ## Milestones
                1. The question you want answered written in one or two sentences.
                2. A registered specialist back home chosen and your records sent ahead.
                3. The appointment held and the specialist's opinion received in writing.
                4. The written opinion discussed with your doctor abroad and the next step agreed.

                ## Notes
                Tell your doctor abroad you are seeking a second opinion. It is routine and keeps them involved in what happens next.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written second opinion from a specialist back home has been discussed with your doctor abroad and the next step recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the question you want the specialist to answer"
                - "Choose a registered specialist and ask how they want records sent"
                - "Send your records ahead and confirm the specialist has them"
                - "Ask for the opinion in writing at the end of the appointment"
                - "Book a visit with your own doctor to discuss the opinion"
            - name: Choosing a private hospital for planned treatment
              description: |-
                ## Purpose
                For anything done under anaesthetic, the hospital matters as much as the surgeon: whether there is an intensive care unit, a blood bank, an anaesthetist on site and a reliable power supply. Asking these questions of two or three private hospitals back home, and checking any international accreditation they claim, lets you choose a place that can cope if something does not go to plan. Relatives who work in health care are often the best guide.

                ## Milestones
                1. Two or three private hospitals on the island identified.
                2. Each asked about intensive care, blood bank, anaesthetist cover and generator backup.
                3. Any claimed accreditation checked with the accrediting body.
                4. A hospital chosen and the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A private hospital is chosen after written answers on intensive care, blood bank, anaesthetist cover and backup power."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a relative who works in health care which hospitals they trust"
                - "Send each hospital the same questions about intensive care and anaesthetists"
                - "Check any accreditation claim on the accrediting body's own site"
                - "Record the chosen hospital and why"
            - name: International health cover for long stays at home
              description: |-
                ## Purpose
                If you spend two or three months a year back home, ordinary travel insurance may cap trip length or exclude your conditions, and an international health plan or a local private plan might suit better. Comparing a few options on what they cover in your home country, their limits on pre-existing conditions and how claims are paid lets you choose cover that matches how you actually live. Revisit it as your pattern of travel changes.

                ## Milestones
                1. The length and pattern of your stays back home written down.
                2. Three options compared: extended travel insurance, an international plan and a local private plan.
                3. Each compared on cover in your home country, pre-existing conditions, excess and how claims are paid.
                4. A choice made and the policy documents saved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A health cover option for long stays back home is chosen from a written comparison of three alternatives."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how many weeks a year you spend back home"
                - "Get quotes for extended travel cover, an international plan and a local plan"
                - "Compare cover in your home country and the pre-existing condition terms"
                - "Check whether your cover still fits your travel pattern @recurring(yearly)"
            - name: Blood tests and screening during a visit home
              description: |-
                ## Purpose
                Private labs back home often take walk-ins and turn routine bloods round within a day or two, which makes a visit a convenient time for checks you are due. Agreeing with your doctor abroad which tests make sense, having them done early in the trip and getting full reports back before you fly means the results are used, not just paid for. Bring them home rather than leaving them in a cousin's car.

                ## Milestones
                1. Your doctor abroad asked which tests or screening you are due.
                2. A reputable private lab or screening centre chosen near where you stay.
                3. Tests done in the first week and full reports collected.
                4. Results sent to your doctor abroad and filed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Tests agreed with your doctor abroad are done back home and the full reports are with your doctor within a month of return."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor abroad which tests you are due"
                - "Find a private lab near where you will stay and check its hours"
                - "Have the tests done in the first week of the trip"
                - "Send the full reports to your doctor abroad"
            - name: Splitting long dental treatment across two trips
              description: |-
                ## Purpose
                Implants, multiple crowns, orthodontic work and some root canal cases cannot be finished in one stay, so the treatment has to be staged around your flights. A written stage plan from the dentist, with what is done each trip, what temporary work holds in between and who to see if a temporary fails abroad, keeps a long course of treatment from falling apart in the middle. Payment can be staged the same way.

                ## Milestones
                1. A written stage plan from the dentist showing what is done on each trip.
                2. The gap between stages matched to your planned trip dates.
                3. A dentist where you live agreed as the contact if temporary work fails.
                4. Payment agreed stage by stage, with receipts for each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stage plan matches each stage of the dental treatment to a booked trip and names a local contact for problems in between."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the dentist for a written plan of each stage and the gap between them"
                - "Match each stage to a planned trip date"
                - "Find a dentist where you live who will see you if temporary work fails"
                - "Agree payment stage by stage with the dentist back home"
            - name: Treatment week itinerary for the next trip home
              description: |-
                ## Purpose
                Squeezing a dentist, an optician and a lab visit around a christening, a beach day and the family lime (a relaxed get-together) means something gets dropped, usually the follow-up appointment. Laying out the trip day by day, with treatment early, review appointments before departure and rest after anything sore, makes the care fit the visit instead of fighting it. Share it with whoever is driving you.

                ## Milestones
                1. Every appointment and its address placed on a day-by-day plan.
                2. Treatment set early in the trip, with review appointments at least a few days before the flight.
                3. Transport arranged for each appointment.
                4. Rest days marked after any procedure and family plans fitted around them.

                ## Notes
                Start from the **Trip** template and add an appointments section.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A day-by-day trip plan shows every appointment, transport and rest day, with reviews scheduled before the flight home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put each confirmed appointment on a day-by-day plan of the trip"
                - "Move treatment to the first days and reviews before departure"
                - "Ask a relative to drive you to each appointment"
                - "Share the plan with your hosts"
            - name: First visit to a new dentist back home
              description: |-
                ## Purpose
                First appointments set the tone for years. Arriving with your summary, X-rays and a clear idea of what you want, and leaving with a written plan and quote rather than same-day drilling, gives you time to think and compare. It is also the moment to judge the clinic, the dentist's manner and whether they explain things properly.

                ## Milestones
                1. Health summary, X-rays and your list of concerns brought to the appointment.
                2. An examination done and a written treatment plan with prices received.
                3. Your procedure questions asked and the answers written down.
                4. A decision made, away from the chair, on whether to go ahead.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first visit ends with a written treatment plan and quote, and the go-ahead decision is made afterwards, not in the chair."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack your health summary, X-rays and a list of concerns"
                - "Ask for a written treatment plan and quote before any work"
                - "Note your impressions of the clinic and the dentist's explanations"
                - "Decide that evening whether to go ahead"
            - name: Day of a minor procedure back home
              description: |-
                ## Purpose
                Extractions, small skin procedures, colonoscopies and similar day cases go smoothly when the practical things are settled: whether to fast, who will take you home, what to pay and what to do that evening. Writing it down the day before means you are not working it out with a numb face or a sedative in your system. Have someone with you who can listen to the aftercare instructions too.

                ## Milestones
                1. Fasting, medicine and arrival instructions confirmed with the clinic the day before.
                2. A companion arranged to take you and bring you home.
                3. Payment ready in the form the clinic wants.
                4. Written aftercare instructions and an out-of-hours contact number in hand before leaving.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The procedure day is completed with a companion present and written aftercare instructions and an out-of-hours number taken home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Phone the clinic the day before to confirm fasting and medicine instructions"
                - "Ask a relative to take you and stay with you afterwards"
                - "Get the payment ready in the form the clinic accepts"
                - "Ask for written aftercare instructions and an out-of-hours number"
            - name: Recovery days before the flight back
              description: |-
                ## Purpose
                The days between treatment and the flight home are when swelling, bleeding or a reaction to a new medicine show up, and when the provider who did the work can still see you. Protecting those days from long drives, rum shop limes and late fetes, and booking a review before you fly, means problems are caught on the island rather than at 35,000 feet. It is the cheapest insurance on the whole trip.

                ## Milestones
                1. Recovery days marked in the trip plan after each procedure.
                2. A review appointment booked before departure.
                3. Family told which days you need to take it easy.
                4. The provider's sign-off obtained before you fly, or a plan if they say wait.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review appointment before departure is attended and the provider's sign-off to fly is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark recovery days after each procedure in your trip plan"
                - "Book a review with the provider two or three days before you fly"
                - "Tell your hosts which days you need to rest"
                - "Ask the provider at the review whether you are fit to fly"
            - name: Follow-up appointment with your doctor after you return
              description: |-
                ## Purpose
                Care that happened back home is only half finished until your own doctor or dentist abroad has seen the reports and knows what was done. Booking a follow-up for soon after you land, sending the treatment report ahead and bringing the receipts and images means your records in both countries match and any problem is picked up early. It also keeps your doctor willing to help next time.

                ## Milestones
                1. A follow-up appointment booked before you fly back.
                2. The treatment report, images and medicine changes sent to your doctor ahead of the visit.
                3. The appointment attended and any new instructions written down.
                4. Your records abroad updated with what was done back home.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your doctor or dentist abroad has seen the treatment report at a follow-up appointment within a month of your return."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the follow-up appointment before you fly back"
                - "Send the treatment report and images to your doctor ahead of the visit"
                - "Bring your updated medicine list to the appointment"
                - "Write down any new instructions and add them to your follow-up schedule"
            - name: Children's dental and eye checks during the summer at home
              description: |-
                ## Purpose
                Long summer holidays with grandparents are a natural time for a child's dental check, a scale and polish or an eye test, especially when appointments where you live are hard to get. Planning it means the right consent is in place if the child is travelling without you, records come back for the school or dentist abroad, and nothing more than routine care is done without your agreement. A few messages before they fly avoid a worried phone call later.

                ## Milestones
                1. A children's dentist and optician back home chosen with the grandparents or host.
                2. A signed consent letter for routine care given to the adult in charge, if you will not be there.
                3. A clear rule agreed: routine care only, anything more needs your say.
                4. Reports and any new prescription brought back and shared with your dentist or optician abroad.

                ## Notes
                Ask the clinic what written consent they need for a child attending with a grandparent or relative. Requirements vary.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Each child has a dental and eye check during the summer at home, with consent in place and reports brought back."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Ask the grandparents which children's dentist and optician they trust"
                - "Ask the clinic what consent they need when a parent is absent"
                - "Write a consent letter limited to routine care"
                - "Book the children's summer checks back home @recurring(yearly)"
            - name: Pregnant and travelling home with your records
              description: |-
                ## Purpose
                Being pregnant on a trip home means carrying your antenatal notes, knowing which hospital back home has a maternity unit and special care for newborns, and checking the airline's late-pregnancy rules and your insurer's cover. Getting this in order with your midwife or obstetrician before you fly means an unexpected problem on the island is met with your full history and a plan. The decision on travelling at all is one to make with them.

                ## Milestones
                1. Your midwife or obstetrician's view on travel recorded.
                2. A copy of your antenatal notes and scan reports packed.
                3. The nearest hospital with a maternity unit and newborn special care identified back home.
                4. Airline pregnancy rules and your insurer's pregnancy cover checked in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Antenatal notes, a named maternity hospital back home and written airline and insurer rules are in place before the flight."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your midwife or obstetrician about travelling at your stage"
                - "Request a copy of your antenatal notes and scan reports"
                - "Find the nearest hospital with a maternity unit to where you will stay"
                - "Read the airline's rules on flying in pregnancy and save them"
            - name: Managing diabetes or pressure during a long visit home
              description: |-
                ## Purpose
                Six weeks of family cooking, heat, late nights and a different routine can push blood sugar or blood pressure off course, and the doctor who manages your condition is an ocean away. Agreeing a plan with them before you go, logging readings while you are away and knowing which doctor back home you would see if numbers go wrong keeps a long visit from undoing months of good control. Readings shared mid-trip let your doctor step in early.

                ## Milestones
                1. A plan agreed with your doctor: target readings, what to do if out of range and when to call.
                2. A meter or monitor, supplies and spare batteries packed.
                3. Readings logged throughout the stay.
                4. A local doctor back home identified for problems, with your summary sent ahead.

                ## Notes
                Start from the **Metrics log** template. Heat can affect some medicines and testing supplies, so ask your pharmacist how to store them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Readings are logged throughout a long visit home and shared with your doctor abroad at least once during the stay."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor for written targets and what to do if out of range"
                - "Pack your meter or monitor with supplies and spare batteries"
                - "Log your blood sugar or pressure readings during the stay @recurring(daily)"
                - "Send your readings to your doctor abroad @recurring(monthly:15)"
                - "Send your health summary to a doctor back home before you arrive"
            - name: Registering with a local doctor for a stay of three months
              description: |-
                ## Purpose
                Three months or more back home, such as a sabbatical, a long winter or time helping family, is long enough that you will need a doctor for something. Choosing a family doctor back home at the start, sending your summary and agreeing how repeat prescriptions and test results will work means routine needs are easy and emergencies are not the first meeting. Keep your doctor abroad in the loop too.

                ## Milestones
                1. A family doctor back home chosen and a first appointment held in the first fortnight.
                2. Your summary and recent results on their file.
                3. How you will get repeat prescriptions during the stay agreed.
                4. Your doctor abroad told who is covering your care while you are away.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A family doctor back home has your summary on file within two weeks of arrival and repeat prescriptions are arranged for the stay."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask relatives which family doctor near you takes new patients"
                - "Book a first appointment for the first fortnight of the stay"
                - "Agree with the doctor how repeat prescriptions will work"
                - "Email your doctor abroad the name of the doctor covering your care"
            - name: Student home for the holidays with dental work to do
              description: |-
                ## Purpose
                Students studying in the UK, US or Canada often save fillings, wisdom teeth or a long-overdue check-up for the summer or Christmas break, when family can help with the bill. Booking early in the holiday, getting a firm quote and leaving enough time for a review before term starts keeps it affordable and stops a sore jaw from following you into exams. Bring the records back for your student health service.

                ## Milestones
                1. Dental needs listed and an appointment booked for the first week of the holiday.
                2. A written quote agreed and who is paying settled with family.
                3. Any review appointment booked at least a week before you fly back to campus.
                4. Records and X-rays brought back and registered with a dentist near campus.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Holiday dental work is completed with a review before you return to study, and records are filed with a dentist near campus."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dental problems you have been putting off this term"
                - "Book an appointment back home for the first week of the holiday"
                - "Agree with family who is paying before any work starts"
                - "Register with a dentist near campus and give them the records"
            - name: Getting care back home with a disability or mobility needs
              description: |-
                ## Purpose
                Many clinics back home are up a flight of stairs, toilets may not be accessible, and a wheelchair taxi can be hard to find in some towns. Checking access in advance, arranging transport and an assistant, and telling the provider what you need lets you get care on equal terms rather than being carried up steps. It is also worth checking what the airline offers for medical equipment.

                ## Milestones
                1. Each provider asked about step-free access, toilets and room for a wheelchair or walker.
                2. Accessible transport arranged for each appointment.
                3. A relative or assistant booked to come with you.
                4. Airline assistance and any medical equipment booked in advance.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every appointment back home has confirmed access, transport and an assistant arranged before the trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone each provider and ask about step-free access and toilets"
                - "Find a taxi or relative with a vehicle that suits your needs"
                - "Ask a relative or assistant to come to each appointment"
                - "Book airline assistance and register any medical equipment"
            - name: Putting right a complication after treatment back home
              description: |-
                ## Purpose
                A loose crown, an infected extraction site or a wound that will not heal after you have flown back is the situation everyone fears. Knowing the order of steps, which are getting seen urgently where you live, contacting the provider back home with photos and records, keeping every receipt and deciding calmly whether to claim, return or complain, turns a frightening situation into a managed one. Your health comes first and the paperwork second.

                ## Milestones
                1. Urgent care obtained where you live, with what was found written down.
                2. The provider back home contacted in writing with photos, dates and the local findings.
                3. Every cost of putting it right recorded with receipts.
                4. A decision made and recorded: provider repairs it on the next trip, refund, insurance claim or formal complaint.

                ## Notes
                Start from the **Remediation plan** template. If you have pain, swelling, fever or bleeding, get seen first and sort out who pays afterwards.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A complication is treated, the provider back home has a written account with evidence, and the remedy chosen is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get seen by a dentist or doctor where you live and note what they find"
                - "Write to the provider back home with photos, dates and the local findings"
                - "Keep every receipt for treatment to put it right"
                - "Decide whether to seek a repair, refund, claim or formal complaint"
            - name: Planned surgery back home from start to finish
              description: |-
                ## Purpose
                Having an operation back home, whether a cataract, a hernia repair or a joint replacement, involves a surgeon, a hospital, an anaesthetist, a family who will care for you, a recovery stay and a handover to your doctor abroad. Running it as a single plan with stages, owners and dates, rather than a series of phone calls, is what makes it safe. Start months ahead and expect it to take longer than the operation suggests.

                ## Milestones
                1. Surgeon, anaesthetist and hospital confirmed in writing with the full quote.
                2. Pre-operative tests done and results sent to the surgeon in good time.
                3. Recovery arranged: where you stay, who cares for you and how long before flying.
                4. A discharge summary and surgeon's report received before you fly.
                5. A handover appointment with your doctor abroad held within weeks of return.

                ## Notes
                Ask the surgeon who covers your care if they are away during your recovery, and get that person's number before the operation.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The surgery is done with a written quote, a recovery plan, a discharge summary and a handover to your doctor abroad completed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the surgeon for a written quote covering surgeon, anaesthetist and hospital"
                - "Arrange the pre-operative tests and send the results to the surgeon"
                - "Agree with family where you will recover and who will care for you"
                - "Ask the agent to draft a timeline from tests to the handover with your doctor abroad"
                - "Request the discharge summary and surgeon's report before you fly"
            - name: Long-term condition care shared between two countries
              description: |-
                ## Purpose
                People who spend serious time in both places sometimes end up with a specialist back home and a doctor abroad both managing the same diabetes, heart condition or arthritis. Agreeing who leads, who prescribes and how results flow between them prevents doubled medicines, clashing advice and gaps in monitoring. A quarterly update between the two keeps everyone working from the same page.

                ## Milestones
                1. Both clinicians named, with which one leads and which prescribes agreed.
                2. A shared medicine list that both have seen and confirmed.
                3. A routine for sending results and letters between them in place.
                4. Any disagreement between them raised and settled with you present or copied in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both clinicians have confirmed a single medicine list and who leads, and receive each other's letters every quarter."
                cadence: rolling
              tasks:
                - "Ask each clinician whether they are happy to share your care"
                - "Agree which clinician leads and which one prescribes"
                - "Send both clinicians the same current medicine list to confirm"
                - "Send each clinician the other's latest letters and results @recurring(quarterly)"
            - name: Treatment reports translated for your doctor abroad
              description: |-
                ## Purpose
                Care in Haiti, Martinique, Guadeloupe, Suriname, Curacao, Aruba or the Dominican Republic may come with reports in French, Dutch, Papiamento or Spanish, and a doctor in London or Toronto cannot act on a report they cannot read. Getting a proper translation of discharge summaries, operation notes and results, from a qualified translator rather than an app, keeps the medical meaning intact. Ask the provider back home first, as some will write an English summary themselves.

                ## Milestones
                1. The reports that need translating identified with your doctor abroad.
                2. The provider back home asked whether they can supply an English summary.
                3. A qualified translator with medical experience found for anything else.
                4. Translations filed beside the originals and sent to your doctor.

                ## Notes
                Keep the original alongside the translation. Doctors sometimes want to see the original figures and units.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every treatment report not in your doctor's language has an English translation or summary filed with the original and sent to them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor abroad which reports they need in English"
                - "Ask the provider back home for an English summary"
                - "Find a qualified translator with medical experience for the rest"
                - "File each translation beside its original and send it to your doctor"
            - name: Ten-year plan for which care happens where
              description: |-
                ## Purpose
                As retirement, ageing parents and a possible move home come closer, the question is no longer one filling at a time but where your teeth, eyes and long-term conditions will be looked after over the next decade. Setting out which care you expect to have back home, which where you live, and what would change that, such as a move, new insurance or a new diagnosis, helps you choose providers who can see you through. Review it once a year.

                ## Milestones
                1. Your likely living pattern over ten years written down: where, for how long each year.
                2. Each kind of care assigned to a place, with reasons.
                3. The events that would change the plan listed.
                4. Providers in both countries chosen with the long term in mind.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ten-year plan assigns each kind of care to a country and lists the events that would change it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down where you expect to live and for how long over ten years"
                - "Assign dental, eye, routine and specialist care to a country"
                - "List the events that would change the plan"
                - "Review the ten-year care plan against how life has changed @recurring(yearly)"
---

# Medical and Dental Care Back Home

This area is for anyone in London, Toronto, Brooklyn or Miami who gets a filling, a crown, new glasses, a check-up or a planned procedure done during a visit to Jamaica, Trinidad, Guyana, Barbados, Haiti, St Lucia or any other home country, and wants it to go as well as care where they live. It starts with the foundations (which care suits a visit, a health summary, your records, a word with your own doctor, insurance, a checked shortlist of providers and the real cost), then the routines that keep records, money and follow-up in order, the know-how for judging quotes, clinics and flying after treatment, the decisions about bigger procedures, the appointments and recovery days of a trip, the situations that change the plan, and finally the work of sharing long-term care between two countries.

What repeats is a monthly transfer into a treatment fund, a monthly check of your medicines, open claims and follow-up dates, a quarterly refresh of the records folder, and yearly check-up bookings, a message to your providers back home and a review of the care you received. The Savings goal, Metrics log, Purchase decision, Trip and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
