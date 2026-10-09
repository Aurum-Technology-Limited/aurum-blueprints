---
id: physical-health.travel-health-preparation
name: Travel Health Preparation
description: "A travel clinic visit booked in time, malaria and bite plans, medicines and insurance sorted for the border, and the altitude, flight and return-home precautions that keep a trip from ending in a clinic abroad."
category: personal
version: 1.0.0
tags: [physical-health, travel-health-preparation, everyone, travel-vaccines, malaria, travel-insurance, altitude, long-haul-flights]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - trip
    - purchase-decision
    - metrics-log
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Travel Health Preparation
          description: "Getting travel vaccines, malaria tablets, medication supplies and health insurance details sorted before trips, plus altitude and long-haul flight precautions."
          projects:
            - name: Travel clinic appointment eight weeks before departure
              description: |-
                ## Purpose
                Some travel vaccines need several doses spread over weeks, and protection from others takes about two weeks to build, so a consultation the week before you fly often comes too late. Booking a travel health appointment six to eight weeks ahead, with your itinerary, medical history and vaccine record in hand, gives the nurse or doctor time to plan every course properly.

                ## Milestones
                1. A travel health appointment booked at least six weeks before departure.
                2. The clinic's pre-travel questionnaire completed with every country, region, activity and date on the itinerary.
                3. Your vaccine record and current medicine list brought to the appointment.
                4. A written plan from the clinic covering vaccines, malaria prevention and any follow-up doses.

                ## Notes
                Late bookings still matter: some protection is better than none, so book even if you leave in a fortnight. Some travel vaccines are free through your doctor and others are charged, so ask which before the appointment.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A travel health consultation completed at least four weeks before departure, with a written vaccine and malaria plan saved to your trip records."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the nearest travel clinic or check whether your doctor's practice offers travel appointments"
                - "Book an appointment six to eight weeks before the departure date"
                - "Fill in the clinic's pre-travel questionnaire with the full itinerary"
                - "Save the clinic's written plan with your trip documents"
            - name: Country-by-country health risk brief
              description: |-
                ## Purpose
                Health risks change within a country as much as between them: malaria may be present in the lowland south and absent in the capital, and outbreaks come and go with the seasons. A short brief for each destination, built from an official travel health source, means you arrive at the travel clinic with the right questions and leave knowing what applies to your actual route.

                ## Milestones
                1. Each country and region on the itinerary looked up on an official travel health information site.
                2. Vaccine recommendations, malaria status and current outbreaks noted per destination.
                3. Activities that change the risk, such as rural stays, trekking or animal contact, listed beside each one.
                4. The brief shared with the travel clinic before the consultation.

                ## Notes
                Use a national public health agency's traveller pages rather than forums or booking sites. Recommendations are updated, so check again a fortnight before you leave.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page brief listing vaccine, malaria and outbreak information for every destination on the itinerary, dated within the last month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every country, region and city you will visit, with dates"
                - "Look up each destination on an official travel health information site"
                - "Note malaria status, recommended vaccines and current outbreaks for each"
                - "Mark the rural stays, treks and animal contact planned at each stop"
            - name: Declaring pre-existing conditions to your travel insurer
              description: |-
                ## Purpose
                Travel insurers can refuse a claim when a condition or recent test was not declared, even if the claim seems unrelated, and the bill for a hospital stay or a medical flight home can run into tens of thousands. Going through the medical screening honestly, including conditions under investigation and recent medicine changes, is the one step that makes the policy worth having.

                ## Milestones
                1. A list of every diagnosis, ongoing investigation, recent hospital stay and current medicine.
                2. The insurer's medical screening completed with all of it declared.
                3. Written confirmation of what is covered, with any exclusions or extra premium.
                4. The policy number and the medical assistance phone line saved in your phone and on paper.

                ## Notes
                If you are waiting for test results or a referral, ask the insurer how to declare it. A change in health between buying the policy and travelling usually has to be declared too.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every diagnosis and current medicine declared to the insurer, with written confirmation of cover and the assistance line number saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every diagnosis, pending test and medicine change from the last five years"
                - "Complete the insurer's medical screening with everything on the list"
                - "Ask for written confirmation of cover and any exclusions"
                - "Save the 24-hour medical assistance number in your phone"
                - "Re-read the declaration after any new diagnosis or medicine change @recurring(quarterly)"
            - name: Reciprocal health card for travel
              description: |-
                ## Purpose
                Some countries have agreements that give visitors state healthcare on the same terms as residents, usually through a card or certificate issued by your home health service, the European health insurance card being one example. Knowing whether one applies to your trips, applying for it through the free official route and understanding what it leaves out keeps you from paying twice or assuming you are protected when you are not.

                ## Milestones
                1. Whether your home country has healthcare agreements with your usual destinations confirmed.
                2. A card or certificate applied for through the official free service, for each household member who qualifies.
                3. What it covers and excludes, such as private clinics, mountain rescue and repatriation, written down.
                4. The card kept with your passport and its expiry date recorded.

                ## Notes
                Unofficial websites charge a fee for applications that are free. A reciprocal card never replaces travel insurance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every household member who qualifies holds a valid reciprocal health card, with its expiry date recorded beside the passport details."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check whether your home health service has agreements with the countries you visit"
                - "Apply for the card through the official free service"
                - "Write down what the card does and does not cover"
                - "Check every household member's card expiry date @recurring(yearly)"
            - name: Yellow fever and vaccine entry requirements check
              description: |-
                ## Purpose
                A few countries refuse entry, or vaccinate at the border, without a yellow fever certificate, and the rule can depend on where you transited rather than where you started. Checking entry requirements for every country and airport on the route, including long transit stops, avoids refused boarding or an unplanned jab at the airport.

                ## Milestones
                1. Entry health requirements checked for every destination and transit country.
                2. Yellow fever vaccination booked at a registered centre if any country on the route requires it.
                3. The international certificate of vaccination signed, stamped and valid from ten days after the dose.
                4. A medical exemption letter obtained from the clinic where vaccination is not advised for you.
                5. Other entry requirements, such as the meningitis certificate for some pilgrimages, noted and met.

                ## Notes
                Keep the certificate with your passport, not in a folder at home. A photo on your phone is a useful backup, but border officials usually want the original.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Entry health requirements for every country and transit point checked, and any required certificate held with the passport before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every country and transit airport on the route"
                - "Check each one's entry health requirements on an official source"
                - "Book yellow fever vaccination at a registered centre if any country requires it"
                - "Put the signed certificate in your passport wallet"
            - name: Translated emergency medical summary
              description: |-
                ## Purpose
                If you collapse, are confused or simply cannot explain yourself in the local language, the people treating you need your conditions, allergies, medicines and next of kin within minutes. A one-page summary in your own language and the main language of each destination, printed and backed up by your phone's lock screen medical ID, does that job when you cannot.

                ## Milestones
                1. A one-page summary of conditions, allergies, medicines by generic name, blood group if known and emergency contacts.
                2. The summary translated into the main language of each destination, checked by a native speaker or professional where possible.
                3. A printed copy in your wallet and another in your luggage.
                4. The phone's emergency medical ID filled in and visible from the lock screen.

                ## Notes
                Use generic medicine names, since brand names differ between countries. Machine translations of medical terms can be wrong, so have them checked where you can.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A translated one-page medical summary is printed in your wallet and the phone's emergency medical ID is filled in before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page summary of your conditions, allergies and medicines by generic name"
                - "Add emergency contacts and your insurer's assistance line"
                - "Get the summary translated into each destination's main language"
                - "Fill in the emergency medical ID on your phone"
                - "Check the summary against your current medicine list @recurring(quarterly)"
            - name: Prescription supply and paperwork for the trip
              description: |-
                ## Purpose
                Running out of a regular medicine abroad is common, and finding a local equivalent can be slow, expensive or impossible. Ordering enough for the whole trip plus a spare week, keeping it in original labelled packaging and carrying a prescription copy and a doctor's letter makes border checks and lost luggage far less of a problem.

                ## Milestones
                1. The total quantity needed for the trip worked out, with at least a week spare.
                2. The extra supply ordered early enough for the pharmacy and any approval to come through.
                3. A copy of the prescription and a doctor's letter listing medicines by generic name and prescribed dose.
                4. Medicines packed in original labelled packaging, split between your hand luggage and a companion's bag.

                ## Notes
                Never pack the only supply in hold luggage. Ask your doctor or pharmacist how far ahead they need the request for a long trip, since some health services limit how much can be issued at once.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Enough of every regular medicine for the trip plus a spare week is packed in original packaging, with a prescription copy and a doctor's letter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the doses of each medicine you need for the trip plus a week"
                - "Request the extra supply from your doctor or pharmacy"
                - "Ask the practice for a letter listing your medicines by generic name"
                - "Check your stock covers the next planned trip with spare @recurring(monthly:9)"
            - name: Controlled and restricted medicines rules by country
              description: |-
                ## Purpose
                Medicines that are routine at home, including some strong painkillers, ADHD stimulants, sleeping tablets and even some cold remedies, are controlled or banned in certain countries, and carrying them without a permit can mean confiscation or arrest. Checking each destination's rules with its embassy or health ministry, and applying for any permit in good time, is essential for anyone taking these medicines.

                ## Milestones
                1. Every medicine you will carry, including over-the-counter ones, checked against each destination's rules.
                2. The embassy or health ministry contacted wherever the rules are unclear.
                3. Any import permit or licence applied for and the approval printed.
                4. An alternative agreed with your prescriber where a medicine cannot legally be taken in.

                ## Notes
                Rules often limit quantity as well as type, commonly to about a month's supply. Transit countries count too if you pass through their customs.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each medicine you will carry has been checked against every destination's rules, with any required permit printed and packed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every prescription and over-the-counter medicine you plan to carry"
                - "Look up each destination's controlled medicine rules on its embassy or health ministry site"
                - "Email the embassy where the rules for a medicine are unclear"
                - "Apply for any import permit the destination requires"
            - name: Destination-specific travel health kit
              description: |-
                ## Purpose
                A small kit matched to where you are going, with oral rehydration sachets, a thermometer, blister dressings, insect repellent, sun protection and your own regular medicines, means minor problems are handled in the hotel room rather than in a pharmacy whose labels you cannot read. A city break and a rural trek need different kits, so a written list per type of trip saves packing from memory.

                ## Milestones
                1. A core kit list that goes on every trip.
                2. Add-on lists for tropical, remote and high-altitude trips.
                3. Each medicine on the lists checked with a pharmacist.
                4. The kit packed in a clear pouch that fits hand luggage rules.

                ## Notes
                Start from the **Operational checklist** template. Your home first aid kit stays at home; this one is built for the road and the security queue.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed travel health kit exists, with a written core list and at least two add-on lists for different types of trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the core kit list you would take on any trip"
                - "Add separate lists for tropical, remote and altitude trips"
                - "Ask a pharmacist to check the medicine items on each list"
                - "Buy the missing items and pack them in a clear pouch"
            - name: Pre-trip health countdown for every booking
              description: |-
                ## Purpose
                Travel health jobs have lead times that are easy to miss: vaccines at eight weeks, medicine permits at six, malaria tablets starting days before departure, insurance before any booking is paid. Turning those into one countdown you run for every trip, attached to the trip itself, means each new booking triggers the right steps at the right time.

                ## Milestones
                1. A countdown with steps at eight weeks, four weeks, one week and departure day.
                2. The countdown attached to every trip booked in the next year.
                3. Each trip's health steps ticked off or consciously skipped.
                4. Lessons from the last trip added to the countdown.

                ## Notes
                Start from the **Trip** template and add the countdown to each new trip you create.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trip booked in the next twelve months has the health countdown attached, with each step ticked or marked as not needed."
                cadence: cyclic
              tasks:
                - "Write the countdown steps for eight weeks, four weeks, one week and departure day"
                - "Attach the countdown to every trip already booked"
                - "Check the next three months of trips for health deadlines @recurring(monthly:4)"
                - "Flag any upcoming trip to a higher-risk destination for an early clinic visit @recurring(quarterly)"
            - name: Travel health document wallet
              description: |-
                ## Purpose
                Insurance certificates, vaccine certificates, prescription copies, doctor's letters and permits all need to be found quickly at a border desk or a hospital reception, often with a poor phone signal. One wallet, paper and offline digital, kept current between trips, means nothing is hunted for at the worst moment.

                ## Milestones
                1. A physical wallet holding the originals and a copy of each document.
                2. An offline folder on your phone with photos of every document.
                3. A copy shared with a trusted person at home.
                4. Expiry dates for every document listed in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One paper wallet and one offline phone folder hold current insurance, vaccine, prescription and permit documents, with expiry dates listed."
                cadence: rolling
              tasks:
                - "Gather insurance, vaccine, prescription and permit documents into one wallet"
                - "Photograph each document into an offline folder on your phone"
                - "Share a copy of the folder with a trusted person at home"
                - "Check every document's expiry date against next year's trips @recurring(yearly)"
                - "Add any certificate or letter received in the last three months to the wallet @recurring(quarterly)"
            - name: Annual travel insurance renewal review
              description: |-
                ## Purpose
                Annual multi-trip policies renew quietly, but your health, age, planned trips and activities change, and a policy bought three years ago may no longer fit. A yearly review before renewal checks that the medical declaration is still accurate, the trip length limit covers your plans and activities such as skiing or high treks are included.

                ## Milestones
                1. The current policy's limits on trip length, regions, age and activities written down.
                2. The medical declaration updated with anything new since last year.
                3. The coming year's planned trips and activities checked against the cover.
                4. The policy renewed, changed or replaced before the renewal date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Before each renewal date, the policy's limits and medical declaration are checked against the coming year's trips and the outcome is recorded."
                cadence: cyclic
              tasks:
                - "Find the renewal date of your current travel policy"
                - "Write down the trip length, region, age and activity limits"
                - "Update the medical declaration with any change since last year"
                - "Review the policy against next year's trips a month before renewal @recurring(yearly)"
            - name: Travel kit restock and expiry check
              description: |-
                ## Purpose
                Travel kits are opened in a hurry on the road and rarely refilled at home, so the rehydration sachets are gone and the repellent is two years out of date when the next trip comes round. A quick refill after every trip and a quarterly look at expiry dates keeps the kit ready to grab.

                ## Milestones
                1. Everything used on the last trip replaced within a week of returning.
                2. Expiry dates written on a card inside the kit.
                3. Expired medicines returned to a pharmacy for safe disposal.
                4. The kit ready to go at any point in the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The travel kit holds no expired items, and everything used on the last trip was replaced within a week of returning."
                cadence: rolling
              tasks:
                - "Write each item's expiry date on a card inside the kit"
                - "Replace what was used within a week of getting home"
                - "Take expired medicines back to a pharmacy for disposal"
                - "Check expiry dates in the travel kit @recurring(quarterly)"
            - name: Malaria tablet routine before, during and after the trip
              description: |-
                ## Purpose
                Antimalarial tablets only work if they are started on time, taken without gaps and continued for the full period after you leave the risk area, which for some types is four weeks. Most failures come from missed doses on travel days and stopping early once home, so the routine needs planning rather than willpower.

                ## Milestones
                1. Start and finish dates worked out from the prescription and written on the trip calendar.
                2. A phone alarm set in local time for every dose of the course.
                3. Tablets split between two bags in case one is lost.
                4. The course completed after return, with any side effects reported to the prescriber.

                ## Notes
                Follow the instructions given with your prescription exactly. Tablets reduce the risk but do not remove it, so bite avoidance still matters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The full antimalarial course, including the period after return, is completed with no missed doses on the course chart."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the course start and finish dates on the trip calendar"
                - "Set a phone alarm for every dose that follows local time"
                - "Pack half the tablets in a second bag"
                - "Tick each dose on a printed course chart"
                - "Report any side effects to the prescriber"
            - name: Bite avoidance routine at the destination
              description: |-
                ## Purpose
                Mosquitoes that carry malaria mostly bite from dusk to dawn, those that spread dengue and Zika bite in daytime, and ticks wait in long grass. A routine of repellent, covered skin, treated clothing and a net or screened room, fitted to the insects at each destination, protects against diseases that no tablet or vaccine covers.

                ## Milestones
                1. The biting insects and their peak times at each destination noted from the risk brief.
                2. Repellent, long loose clothing and a net or screened accommodation arranged.
                3. A daily routine set: repellent applied after sunscreen and reapplied as the label says.
                4. A tick check planned for every rural or forest day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For every destination with insect-borne disease, repellent, covering clothing and a net or screened room are in place and used daily."
                cadence: phased
              tasks:
                - "Note which insects bite at which times at each destination"
                - "Pack repellent, long loose clothing and a travel net if rooms are unscreened"
                - "Book accommodation with screened windows or air conditioning where you can"
                - "Plan a tick check at the end of every rural or forest day"
            - name: Food and water safety habits abroad
              description: |-
                ## Purpose
                Traveller's diarrhoea is the most common illness abroad, mostly picked up from food and water, and losing two days to it can wreck a short trip. A few habits used every day, such as safe drinking water, freshly cooked food served hot, fruit you peel yourself and caution with ice and salads, cut the risk sharply.

                ## Milestones
                1. Tap water safety at each destination checked.
                2. A safe water plan chosen: sealed bottles, boiling, a filter or a purifier.
                3. Food rules for the trip agreed with everyone travelling.
                4. A hand hygiene kit of soap or alcohol gel packed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A water plan and written food rules for each destination are agreed before departure and followed during the trip."
                cadence: phased
              tasks:
                - "Check whether tap water is safe at each destination"
                - "Choose how you will get safe drinking water each day"
                - "Write three food rules the whole group agrees to follow"
                - "Pack hand gel for use before every meal"
            - name: Malaria prevention basics for travellers
              description: |-
                ## Purpose
                Malaria kills travellers every year, usually people who did not know the risk, skipped tablets or delayed seeing a doctor when a fever started after they got home. The widely taught ABCD approach, awareness of risk, bite avoidance, chemoprophylaxis and prompt diagnosis, covers what every traveller needs to understand before visiting a malarial area.

                ## Milestones
                1. The ABCD approach understood and written in your own words.
                2. The malaria risk for each destination, and whether tablets are advised, confirmed with the travel clinic.
                3. The fever rule understood: any fever up to a year after travel needs an urgent malaria test.
                4. Everyone travelling with you briefed on the same points.

                ## Notes
                Malaria symptoms can look like flu. Tell any doctor you see that you have been to a malaria area, even months later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every traveller in the group can explain the four parts of malaria prevention and the fever rule before departure."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read an official traveller's guide to malaria prevention"
                - "Write the ABCD approach in your own words on one card"
                - "Confirm with the travel clinic whether tablets are advised for your route"
                - "Brief everyone travelling with you on the fever rule"
            - name: Traveller's diarrhoea self-care plan
              description: |-
                ## Purpose
                Most traveller's diarrhoea settles within a few days with fluids and rest, but blood in the stool, a high fever, signs of dehydration or illness in a small child need medical help quickly. Knowing the difference before you go, with rehydration sachets packed and a clear point at which to seek care, prevents both panic and dangerous waiting.

                ## Milestones
                1. How to make up and use oral rehydration solution understood.
                2. The warning signs that mean seeing a doctor written on your emergency card.
                3. Your clinician asked whether a standby treatment is appropriate for you.
                4. Extra advice noted for anyone in the group with a long-term condition, a pregnancy or young children.

                ## Notes
                People on some medicines, such as diabetes or blood pressure tablets, may need to pause or adjust them when dehydrated. Ask your clinician for a written sick day plan before you travel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written self-care plan with warning signs and rehydration steps is packed, and any standby treatment question has been answered by a clinician."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read how to use oral rehydration solution on a health service site"
                - "Write the warning signs that mean seeing a doctor"
                - "Ask your clinician whether a standby treatment suits you"
                - "Ask for a sick day plan if you take regular medicines"
            - name: Medicine timing across time zones
              description: |-
                ## Purpose
                Crossing several time zones shifts when doses fall, which matters for time-critical medicines such as insulin, anti-epileptics, contraceptive pills and anticoagulants. Agreeing a written schedule with your pharmacist or clinician before a long-haul flight avoids doubled or missed doses on the most confusing day of the trip.

                ## Milestones
                1. The medicines where timing matters identified with your pharmacist.
                2. A written dose schedule from departure through the first days at the destination, in both home and local time.
                3. Phone alarms set to match the schedule.
                4. The return schedule planned the same way.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written outbound and return dose schedule, agreed with a pharmacist or clinician, is set as phone alarms before departure."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist which of your medicines are time critical"
                - "Write the dose times in home and destination time for travel day"
                - "Set phone alarms that follow the agreed schedule"
                - "Plan the dose schedule for the return flight the same way"
            - name: Jet lag adjustment plan
              description: |-
                ## Purpose
                Jet lag is worst flying east and across more than five time zones, and it can cost the first three days of a short trip or an important meeting. Shifting sleep a little before departure, timing daylight at the destination and planning the first day around the new clock shortens it noticeably.

                ## Milestones
                1. The time difference and direction of travel worked out.
                2. Bed and wake times shifted by an hour a day for two or three days before departure, where practical.
                3. A first-day plan with morning or afternoon daylight timed to the direction of travel.
                4. Caffeine and naps planned around the new local time.

                ## Notes
                Ask your doctor before using any sleep aid or melatonin, especially alongside other medicines.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written jet lag plan covering the three days before departure and the first two days at the destination is followed on the next long-haul trip."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Work out the time difference and direction for the next long-haul trip"
                - "Shift your bedtime an hour toward destination time for two nights"
                - "Plan the first day's daylight to suit the direction of travel"
                - "Note how many days it took to feel normal"
            - name: Altitude sickness awareness
              description: |-
                ## Purpose
                Altitude sickness can affect anyone above about 2,500 metres regardless of fitness, and its severe forms, swelling of the brain or fluid on the lungs, can kill within hours. Knowing the early symptoms, the published guidance on gradual ascent and the rule that worsening symptoms mean going down is basic safety for any mountain trip or high city.

                ## Milestones
                1. The symptoms of acute mountain sickness and its severe forms learned.
                2. The altitude of every overnight stop on the itinerary written down.
                3. The itinerary checked against published gradual ascent guidance.
                4. A clinician asked about preventive medicine and any condition that changes your altitude risk.

                ## Notes
                The rule in most guidance: never go higher with symptoms, and descend if they get worse. Cities such as La Paz or Cusco put you at altitude the moment you land.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every overnight altitude on the itinerary is written down and checked against ascent guidance, and the group can name the signs that mean descending."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a mountain medicine organisation's guide to altitude sickness"
                - "Write the sleeping altitude of every night on the itinerary"
                - "Compare the daily gains with published ascent guidance"
                - "Ask your clinician about altitude risk and any preventive medicine"
            - name: Heat illness awareness for hot climates
              description: |-
                ## Purpose
                Heat exhaustion arrives quickly when you fly from a cool climate into 35 degrees and humid air, and heatstroke is a medical emergency. Recognising the early signs, planning activity around the hottest hours and knowing which medicines lower heat tolerance protects older travellers, children and anyone active outdoors.

                ## Milestones
                1. The signs of heat exhaustion and heatstroke written down.
                2. Your pharmacist asked whether any of your medicines affect heat tolerance.
                3. Days planned with outdoor activity in the early morning and late afternoon.
                4. A cooling plan for the first symptoms agreed with the group.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The group can describe the difference between heat exhaustion and heatstroke and has a written plan for the hottest hours of each day."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Read a health service page on heat exhaustion and heatstroke"
                - "Ask your pharmacist whether any of your medicines affect heat tolerance"
                - "Plan outdoor activities for the cooler parts of each day"
                - "Agree what the group will do at the first sign of heat illness"
            - name: Animal bite and rabies response plan
              description: |-
                ## Purpose
                Rabies is almost always fatal once symptoms start, but treatment after a bite, scratch or lick on broken skin works if it begins quickly, and in many countries the right vaccine or immunoglobulin is hard to find. Knowing what to do in the first hour, and where to get treatment on your route, matters for anyone near dogs, monkeys or bats, including children who may not mention a scratch.

                ## Milestones
                1. The first aid step learned: wash the wound with soap and running water for fifteen minutes.
                2. Clinics on the route that can give post-exposure treatment identified through the insurer.
                3. The response steps written on your emergency card.
                4. Children briefed to tell an adult about any animal contact.

                ## Notes
                Seek treatment even if you were vaccinated before travel; earlier vaccination simplifies treatment but does not replace it.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bite response with the wash step and treatment clinics for each destination is on the emergency card before departure."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read an official guide to rabies risk for travellers"
                - "Write the wound wash step and treatment steps on your emergency card"
                - "Ask the insurer's assistance line which clinics on the route hold rabies treatment"
                - "Tell children to report any bite, scratch or lick straight away"
            - name: Finding trustworthy medical care abroad
              description: |-
                ## Purpose
                When someone falls ill abroad, the first decision is where to go, and the nearest clinic is not always the safest or one your insurer will pay. Learning how your insurer's assistance line works, where to find embassy lists of doctors and the local emergency number, before you need them, turns a frightening hour into a routine phone call.

                ## Milestones
                1. The local emergency number for each destination recorded.
                2. Your insurer's assistance process understood, including whether they must approve treatment first.
                3. A list of doctors or hospitals from your embassy or consulate saved offline for each destination.
                4. The nearest reputable hospital to each place you stay noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For each destination the emergency number, the insurer's process and the nearest reputable hospital are saved offline before departure."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the emergency number for each country you are visiting"
                - "Ask your insurer when they need to approve treatment in advance"
                - "Save your embassy's list of local doctors for each country offline"
                - "Note the nearest reputable hospital to each place you stay"
            - name: Annual multi-trip or single-trip insurance choice
              description: |-
                ## Purpose
                Two or more trips a year usually make an annual multi-trip policy cheaper, but these policies cap trip length, may exclude some regions and price pre-existing conditions differently. Comparing both options against your real travel pattern and full medical declaration gives a decision you can explain, not just the cheapest headline price.

                ## Milestones
                1. Your trips for the next year listed with region, length and activities.
                2. At least three quotes for each option, each with the full medical declaration.
                3. Medical cover, repatriation, excess and activity limits compared side by side.
                4. A policy chosen and the reason recorded.

                ## Notes
                Start from the **Purchase decision** template. A specialist insurer may be cheaper than a mainstream one if you have several declared conditions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A policy chosen after comparing at least three annual and three single-trip quotes with full medical declarations, with the reason written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List next year's trips with region, length and planned activities"
                - "Get three annual and three single-trip quotes with the full medical declaration"
                - "Compare medical limits, repatriation, excess and activities side by side"
                - "Record which policy you chose and why"
            - name: Water purification method for remote travel
              description: |-
                ## Purpose
                Bottled water is not always available, trustworthy or affordable on treks, long overland trips or remote stays, and the plastic adds up. Choosing between boiling, filters, UV pens and chemical tablets depends on what each removes, how much water you need a day and how much weight and battery you can carry.

                ## Milestones
                1. Daily water need and refill points at each stop estimated.
                2. Options compared on bacteria, viruses, parasites, weight, speed and cost.
                3. A method chosen with a backup, such as tablets alongside a filter.
                4. The method tested at home before the trip.

                ## Notes
                Start from the **Purchase decision** template. Many filters do not remove viruses, which matters in some regions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and a backup water treatment method are chosen, bought and tested at home before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate how much water you need each day and where you will refill"
                - "Compare filters, UV pens, tablets and boiling on what each removes"
                - "Buy the chosen method and a backup"
                - "Replace the filter cartridge at the maker's interval @recurring(yearly)"
            - name: Insect repellent, clothing and net choices
              description: |-
                ## Purpose
                Repellents differ in active ingredient, strength and how long they last, and not all suit young children or pregnancy. Choosing a repellent with your travel clinic's guidance, deciding whether to treat clothing and buying a net if rooms are unscreened means the bite plan is backed by the right kit.

                ## Milestones
                1. The repellent options and strengths suggested by the travel clinic or pharmacist noted.
                2. A repellent chosen for each traveller, including children and anyone pregnant.
                3. A decision made on treated clothing and a travel net.
                4. Enough repellent bought for the whole trip.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A repellent suited to each traveller, and a decision on nets and treated clothing, are recorded and bought before departure."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the travel clinic which repellent strengths suit each traveller"
                - "Decide whether you need a travel net or treated clothing"
                - "Work out how much repellent the trip needs"
                - "Buy the repellent, net and clothing treatment you chose"
            - name: Standby emergency treatment decision for remote trips
              description: |-
                ## Purpose
                On a trek or remote stay more than a day from medical care, some travel clinics prescribe standby treatment, such as an emergency malaria course or antibiotics, to start if specific symptoms appear. Whether it is right for you depends on your route, health and other medicines, so it is a decision to make with a clinician, with written instructions on when to use it.

                ## Milestones
                1. How far each remote stop is from medical care worked out.
                2. The question raised with the travel clinic or your doctor.
                3. If prescribed, written instructions covering when to start, how to take it and when to still seek care.
                4. The standby supply packed with its instructions and its expiry date recorded.

                ## Notes
                Standby treatment never replaces seeing a doctor as soon as you can reach one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded clinician decision on standby treatment for the remote parts of the trip, with written use instructions packed if prescribed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark which stops are more than a day from medical care"
                - "Ask the travel clinic whether standby treatment suits your route"
                - "Get written instructions for when to start any standby course"
                - "Pack the standby supply with its instructions"
            - name: Rabies vaccination before travel decision
              description: |-
                ## Purpose
                A pre-travel rabies course takes several weeks, costs money and is not needed for every trip, but for long stays, remote areas, cycling, running, caving or work with animals it can turn a dangerous wait for scarce treatment into a simpler course. Weighing it with the travel clinic early leaves time to finish the doses before departure.

                ## Milestones
                1. The trip factors that raise rabies risk listed.
                2. The benefits, cost and timing of a pre-travel course discussed with the clinic.
                3. A decision recorded with the reasoning.
                4. If chosen, the course completed and recorded before departure.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on pre-travel rabies vaccination is recorded at least six weeks before departure, with the course completed if chosen."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note the parts of the trip that raise rabies risk, such as remote stays or animal work"
                - "Ask the travel clinic about the timing and cost of a pre-travel course"
                - "Record your decision and the reasons"
                - "Book all the doses before the departure date if you go ahead"
            - name: Travelling during an outbreak or health alert
              description: |-
                ## Purpose
                Outbreaks of dengue, measles, cholera or a new infection can change the risk of a trip after it is booked. Watching official advisories for booked destinations, knowing what your insurance does if a government advises against travel and deciding in advance what would make you postpone keeps the choice calm and well timed.

                ## Milestones
                1. Official travel advice for each booked destination subscribed to or bookmarked.
                2. Your insurance and booking terms checked for what happens under a government advisory.
                3. Personal reasons to postpone written down, such as a pregnancy and a Zika alert.
                4. A decision recorded whenever a new alert appears for a booked destination.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each booked destination is checked monthly against official advice, and any alert leads to a recorded go, change or postpone decision."
                cadence: rolling
              tasks:
                - "Sign up for official travel advice alerts for each booked destination"
                - "Check what your insurance covers if a government advises against travel"
                - "Write the conditions under which you would postpone"
                - "Check official health alerts for upcoming destinations @recurring(monthly:18)"
            - name: Airline medical clearance and in-flight oxygen
              description: |-
                ## Purpose
                Airlines may need medical clearance for travellers after recent surgery, with unstable heart or lung conditions, in late pregnancy or with a need for oxygen, and portable oxygen concentrators have their own approval rules. Sorting the airline's medical form and any equipment approval weeks ahead avoids being turned away at the gate.

                ## Milestones
                1. Your clinician asked whether you are fit to fly and whether you need oxygen.
                2. The airline's medical form completed by your doctor and accepted by the airline.
                3. Any portable oxygen concentrator or medical device approved by the airline in writing.
                4. Battery and power needs for the device covered for the full flight plus delays.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written airline medical clearance, and equipment approval where needed, is held before the flight."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician whether you are fit to fly and need oxygen"
                - "Download the airline's medical information form"
                - "Get the form completed by your doctor and send it to the airline"
                - "Get written approval for any oxygen concentrator or medical device"
            - name: Blood clot risk check before long-haul flights
              description: |-
                ## Purpose
                Flights over four hours slightly raise the risk of a clot in the leg, and the risk is higher after recent surgery, in pregnancy, with cancer, previous clots or some hormonal medicines. Asking your clinician whether your own risk calls for anything beyond moving and drinking water, such as compression stockings, means the precaution matches you rather than a leaflet.

                ## Milestones
                1. Your personal risk factors listed.
                2. Your clinician asked whether you need extra precautions.
                3. Any advised stockings measured and fitted properly.
                4. An in-flight movement plan set: aisle seat, regular walks and calf exercises.

                ## Notes
                Pain or swelling in one leg, or sudden breathlessness, during or after travel needs urgent medical help.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your clot risk for long-haul flights is discussed with a clinician, and the advised precautions are recorded and in place for the next flight."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List any recent surgery, pregnancy, previous clot or hormonal medicine"
                - "Ask your clinician whether you need precautions beyond moving and drinking water"
                - "Get any advised stockings measured and fitted"
                - "Book an aisle seat for the next long-haul flight"
            - name: Long-haul flight day health plan
              description: |-
                ## Purpose
                The flight day is where most travel health plans unravel: medicines in the hold, a missed dose across time zones, a dry cabin and twelve hours without moving. A one-page plan for the day, from what goes in hand luggage to when to eat and walk, makes it routine.

                ## Milestones
                1. Hand luggage packed with medicines, the dose schedule, documents and the emergency summary.
                2. Liquids and medical items checked against security rules, with a letter for any needles or large liquids.
                3. Movement, water and meal timings planned for the flight.
                4. An arrival-day plan set for rest, daylight and the first doses in local time.

                ## Notes
                Tell security staff about medical items before screening; many airports have an assistance lane for travellers with medical needs.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the next long-haul flight, every medicine and document travels in hand luggage and the planned doses and movement breaks happen on time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack medicines, the dose schedule and documents in hand luggage"
                - "Check security rules for medical liquids and needles"
                - "Plan a walk every couple of hours and water with each meal service"
                - "Write an arrival-day plan for rest and the first local-time doses"
            - name: Pilgrimage and mass gathering health preparation
              description: |-
                ## Purpose
                Pilgrimages such as Hajj and Umrah, and big festivals or sporting events, combine crowds, heat, long walks and people from every continent. Some have vaccine entry requirements, such as the meningococcal certificate for Hajj, and the conditions make dehydration, foot injuries and chest infections common.

                ## Milestones
                1. Entry health requirements for the event confirmed from official sources.
                2. Required vaccines given and certificates in the passport wallet.
                3. A heat, footcare and crowd plan written for the days of the event.
                4. A meeting point and phone contact agreed in case anyone in the group is separated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All entry health requirements for the pilgrimage or event are met, and a heat, footcare and separation plan is shared with the group."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the event's official health entry requirements"
                - "Book any required vaccinations through the travel clinic"
                - "Plan rest, shade and water for each day of walking or standing"
                - "Agree a meeting point and phone contact if anyone gets separated"
            - name: Safari and rainforest trip health preparation
              description: |-
                ## Purpose
                Safaris, jungle lodges and river trips bring together malaria, tick-borne illness, animal contact, heat and long distances from hospitals. Preparing for these trips as their own category, with the clinic told about every rural night and activity, gets you the right advice rather than advice meant for a city break.

                ## Milestones
                1. Every rural night, game drive, walk and river activity listed for the clinic.
                2. Malaria, bite and rabies plans confirmed for the trip.
                3. Evacuation cover from remote lodges confirmed with the insurer.
                4. Long sleeves, neutral clothing, repellent and a tick remover packed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The clinic, insurer and kit plans for every remote day of the safari or rainforest trip are confirmed before departure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every rural night and activity for the travel clinic"
                - "Ask the insurer how evacuation from a remote lodge works"
                - "Pack long sleeves, a tick remover and enough repellent"
                - "Ask each lodge what medical help they have on site"
            - name: Cruise health preparation
              description: |-
                ## Purpose
                Cruise ships carry thousands of people in close quarters, so stomach bugs and respiratory infections spread quickly, and the ship's medical centre charges private rates that your policy must cover. Planning for seasickness, port-by-port health risks and the medical centre before boarding avoids expensive surprises at sea.

                ## Milestones
                1. Insurance confirmed to cover cruise travel, the ship's medical centre and evacuation from sea.
                2. Seasickness options discussed with a pharmacist.
                3. Health risks checked for each port of call, including malaria or vaccine needs.
                4. A hand washing habit agreed for meals and shore trips.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cruise-specific insurance cover, a seasickness plan and port health checks are complete before boarding."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the policy covers cruises and evacuation from a ship"
                - "Ask a pharmacist about seasickness options for you"
                - "Look up the health risks for every port of call"
                - "Pack enough regular medicines for the full voyage plus delays"
            - name: First weeks home after travel
              description: |-
                ## Purpose
                Some travel illnesses show up days or weeks after return, and malaria can appear up to a year later, so the first weeks home are part of the trip. A short return checklist, finishing courses of tablets, noting symptoms and telling your doctor where you have been, catches problems before they become serious.

                ## Milestones
                1. Any malaria tablet course finished as prescribed.
                2. Symptoms in the household noted for four weeks after return.
                3. A doctor seen promptly for fever, persistent diarrhoea, a rash or a wound that will not heal, with the trip details given.
                4. The trip, countries and dates added to your personal health record.

                ## Notes
                Treat fever after visiting a malaria area as an emergency until a test says otherwise. Say where you have been at the start of any appointment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within four weeks of return, any tablet course is finished, symptoms are logged and the trip is noted in your health record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Finish any malaria tablet course as prescribed"
                - "Note any fever, diarrhoea or rash in the household for four weeks"
                - "Add the countries and dates to your personal health record"
                - "Tell any doctor you see about the trip at the start of the appointment"
            - name: Travelling while pregnant
              description: |-
                ## Purpose
                Pregnancy changes the travel health picture: some vaccines and antimalarials are not advised, Zika areas carry a risk to the baby, airlines restrict flying from a set week and some policies limit pregnancy cover. Planning trips with your midwife or obstetrician, before booking where possible, keeps both of you safe and covered.

                ## Milestones
                1. The trip discussed with your midwife or obstetrician, before booking where possible.
                2. Zika and malaria risk at the destination checked against current advice for pregnancy.
                3. The airline's rules on how late in pregnancy you can fly, and any letter needed, confirmed.
                4. Insurance cover for pregnancy complications and premature birth confirmed in writing.
                5. Your pregnancy notes and recent scan results packed in hand luggage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The trip is agreed with your midwife or obstetrician, with airline, insurance and destination risk checks for pregnancy recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Raise the trip at your next midwife or obstetric appointment"
                - "Check destination advice on Zika and malaria in pregnancy"
                - "Read the airline's rules on flying in pregnancy"
                - "Ask the insurer in writing about cover for complications and early birth"
                - "Pack your pregnancy notes in hand luggage"
            - name: Travelling with babies and young children
              description: |-
                ## Purpose
                Children dehydrate faster, cannot describe early symptoms and need medicines and repellents suited to their age or weight, so a family trip needs its own plan. Taking the children to the travel clinic, packing child-specific supplies and knowing when a child needs a doctor makes the trip easier for everyone.

                ## Milestones
                1. Each child's routine vaccines confirmed up to date and travel vaccines discussed at the clinic.
                2. Child-suitable repellent, sun protection and rehydration supplies packed.
                3. Children's medicines confirmed with a pharmacist for each child's age and weight.
                4. Warning signs that a child needs a doctor written down, such as fewer wet nappies, drowsiness or fever after a malaria area.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each child has been seen at the travel clinic, and the family kit holds child-suitable medicines, repellent and rehydration supplies."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book the children into the travel clinic appointment"
                - "Ask a pharmacist which children's medicines suit each child's age and weight"
                - "Pack child-suitable repellent, sun protection and rehydration sachets"
                - "Note each child's current weight on their medical summary @recurring(quarterly)"
            - name: Older traveller health planning
              description: |-
                ## Purpose
                Travelling in your seventies or eighties is common and rewarding, but insurance gets dearer and stricter with age, heat and long flights hit harder and a fall abroad can mean weeks in a foreign hospital. Planning around energy, mobility, medicines and cover lets the trip be ambitious without being reckless.

                ## Milestones
                1. Insurance confirmed for your age band, with any upper age or trip length limits understood.
                2. A medicines review with the pharmacist done before a long trip.
                3. An itinerary with rest days and transfers that suit your energy and mobility.
                4. Airport assistance booked if walking long distances is difficult.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An itinerary with rest days, age-appropriate insurance and a pre-trip medicines review are all in place before departure."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check your policy's age limits and medical cover"
                - "Book a medicines review with your pharmacist before a long trip"
                - "Add a rest day after every long transfer in the itinerary"
                - "Request airport assistance through the airline if walking is hard"
            - name: Visiting friends and relatives abroad
              description: |-
                ## Purpose
                People returning to visit family in their country of birth are among the travellers most likely to catch malaria, typhoid and hepatitis A, often because they assume they are still immune, stay longer and eat at home with relatives. Immunity to malaria fades within months of living elsewhere, so these trips need the same clinic visit as any other, and often more.

                ## Milestones
                1. A travel clinic appointment booked even for a familiar destination.
                2. Malaria prevention planned for the full stay, including rural visits to relatives.
                3. Vaccines for children born outside the country confirmed.
                4. A plan agreed for drinking water and food during a long stay with family.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A travel clinic visit is completed before the family trip, and malaria and vaccine plans cover every traveller, including children born abroad."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Book a travel clinic appointment even though the destination is familiar"
                - "Tell the clinic about rural visits and the full length of stay"
                - "Confirm vaccines for children born outside the country"
                - "Plan safe drinking water for the whole stay with family"
            - name: Gap year and backpacker health plan
              description: |-
                ## Purpose
                Long multi-country trips on a budget mean the risks change every few weeks, alongside cheap accommodation, adventurous activities and no regular doctor. A plan covering vaccine courses before leaving, insurance that includes the activities you will actually do, a medicine supply for months and a way to check in with someone at home suits students and career-breakers alike.

                ## Milestones
                1. Vaccine courses started early enough to finish before departure.
                2. Insurance covering the full trip length and planned activities, such as diving, bungee jumping or riding a motorbike.
                3. A long-trip supply of regular medicines, or a legal plan to refill abroad.
                4. A check-in arrangement with someone at home, and a plan for mental health support on the road.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Vaccines are complete, insurance covers the full length and every planned activity, and medicine supply is arranged for the whole trip before departure."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book the travel clinic three months before a long trip"
                - "Check the policy covers the full length and every activity planned"
                - "Ask your doctor how to get a long supply of regular medicines"
                - "Agree a weekly check-in time with someone at home"
            - name: Travelling with a long-term condition
              description: |-
                ## Purpose
                Diabetes, epilepsy, heart, lung, kidney or bowel conditions do not have to stop travel, but each needs a plan for flares, supplies and local care. A conversation with your specialist team before booking, a written plan for what to do if things go wrong and knowing where to get specialist help at the destination make the trip far less risky.

                ## Milestones
                1. The trip discussed with your specialist team before booking.
                2. A written plan for a flare or deterioration abroad.
                3. Specialist services at the destination identified, such as dialysis units or diabetes clinics, and booked where needed.
                4. Equipment, power adaptors and backup supplies for any devices packed.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written travel plan agreed with your specialist team, with specialist services at the destination identified, is held before every trip."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Raise the trip with your specialist team before booking"
                - "Ask for a written plan for a flare or deterioration abroad"
                - "Find specialist services at the destination and book any that need booking"
                - "Raise upcoming travel at your annual specialist review @recurring(yearly)"
            - name: Travelling with a wheelchair or mobility aid
              description: |-
                ## Purpose
                Wheelchairs and scooters are damaged in airline holds surprisingly often, and accessible rooms, transfers and toilets abroad do not always match the description. Booking assistance, documenting the equipment and planning repairs and pressure care for the trip prevents the worst outcome: arriving without a usable chair.

                ## Milestones
                1. Airline assistance and wheelchair handling booked, with the battery type declared.
                2. The chair photographed, measured and labelled with handling instructions.
                3. Accessible accommodation confirmed with photos and measurements.
                4. A repair contact at the destination and a plan for pressure care on long travel days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Airline assistance, a labelled and photographed chair and confirmed accessible accommodation are in place before departure."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book airline assistance and declare the wheelchair battery type"
                - "Photograph and measure the chair and attach handling instructions"
                - "Ask the accommodation for photos and measurements of the bathroom and doorways"
                - "Find a wheelchair repair service near your destination"
            - name: Long stay or move abroad health setup
              description: |-
                ## Purpose
                Moving abroad to work, study or retire for more than a few months means leaving home healthcare behind and joining a new system, often with gaps in between. Arranging resident health insurance, a copy of your records, registration with a local doctor and a legal source of your regular medicines avoids a crisis in the first months.

                ## Milestones
                1. Health insurance arranged that is valid for residents, not just tourists.
                2. Copies of medical records, vaccine history and recent results taken with you.
                3. Registration with a local doctor completed in the first month.
                4. A legal local source for each regular medicine confirmed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within two months of arrival, resident health insurance, a registered local doctor and a local supply of every regular medicine are in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check whether you need international health insurance rather than a travel policy"
                - "Request copies of your records and vaccine history before leaving"
                - "Register with a local doctor in the first month"
                - "Confirm a legal local supply of each regular medicine"
                - "Order repeat prescriptions through the local doctor @recurring(monthly:12)"
                - "Save local test results and letters to your home health record @recurring(quarterly)"
            - name: High-altitude trek preparation
              description: |-
                ## Purpose
                Treks such as Kilimanjaro, Everest Base Camp or the high Andes take people above 4,000 metres on fixed itineraries that can climb faster than ascent guidance suggests. Checking the operator's itinerary, preparing physically and agreeing a descent plan with the group and guides is the difference between a summit and an evacuation.

                ## Milestones
                1. The operator's itinerary checked against ascent guidance, with an extra acclimatisation day added if needed.
                2. A clinician consulted on altitude risk and any preventive medicine.
                3. Insurance confirmed for the trek's maximum altitude and helicopter rescue.
                4. A daily symptom log and a descent rule agreed with the group and guides.

                ## Notes
                Start from the **Metrics log** template for daily symptom scores and any oxygen readings the guides take.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The trek itinerary meets ascent guidance or has an added rest day, insurance covers its maximum altitude, and a descent rule is agreed with the guides."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the operator for the daily sleeping altitudes"
                - "Choose the route option with an extra acclimatisation day"
                - "Confirm the policy covers the trek's maximum altitude and helicopter rescue"
                - "Agree with the guides who decides on descent and how"
            - name: Fitness to dive and flying after diving
              description: |-
                ## Purpose
                Dive centres ask for a medical questionnaire, and some conditions, such as asthma, diabetes or recent surgery, need a doctor's sign-off before you are allowed in the water. Planning the dive medical, dive insurance and the gap between your last dive and your flight home keeps a holiday dive from turning into decompression illness.

                ## Milestones
                1. The dive medical questionnaire completed honestly before the trip.
                2. A dive medical with a suitably trained doctor booked if any answer requires it.
                3. Dive-specific insurance, or a policy that covers your planned depth, confirmed.
                4. The recommended no-fly interval after diving built into the itinerary.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed dive medical where needed, dive insurance and a no-fly interval are all in place before the dive trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the standard recreational diver medical questionnaire"
                - "Book a dive medical if any answer needs a doctor's sign-off"
                - "Confirm insurance covers your planned dives and depth"
                - "Leave the recommended gap between the last dive and the flight home"
                - "Check whether your dive medical needs renewing @recurring(yearly)"
            - name: Remote expedition medical planning
              description: |-
                ## Purpose
                Expeditions to deserts, polar regions or deep wilderness can be days from a hospital, so the group must handle problems that would be an ambulance call at home. A medical plan covering a health screen for every member, a group kit, at least one person trained in wilderness first aid and a tested evacuation route is standard practice for serious trips.

                ## Milestones
                1. Every member's health questionnaire collected and reviewed, with consent to share it in an emergency.
                2. At least one member trained in wilderness or remote first aid.
                3. A group medical kit agreed with a clinician who knows the expedition.
                4. An evacuation plan with satellite communication, rescue contacts and insurer approval tested before departure.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written expedition medical plan with screened members, a trained first aider, a group kit and a tested evacuation route exists before departure."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Send every member a confidential health questionnaire"
                - "Book a wilderness first aid course for at least one member"
                - "Agree the group medical kit with an expedition doctor"
                - "Test the satellite messenger and rescue contact before leaving"
            - name: Health lead for a group trip abroad
              description: |-
                ## Purpose
                Teachers, youth leaders, club organisers and family trip planners often end up responsible for the health of a whole group abroad. Collecting medical forms and consent, knowing who carries which medicines and agreeing one emergency procedure means the person in charge can act quickly for any member.

                ## Milestones
                1. A medical and consent form returned for every traveller and kept confidential.
                2. A summary of allergies, conditions and medicines for the leaders, including who carries adrenaline pens or inhalers.
                3. Insurance for the whole group confirmed, with the assistance number on every leader's phone.
                4. An emergency procedure agreed: who goes to hospital, who stays with the group and who calls home.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every traveller's medical form is collected and an emergency procedure is agreed among the leaders before the group departs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send a medical and consent form to every traveller or parent"
                - "Ask the agent to draft a confidential one-page summary of allergies, conditions and medicines for leaders"
                - "Confirm group insurance and save the assistance number on every leader's phone"
                - "Agree who goes to hospital and who stays with the group in an emergency"
            - name: Persistent illness after travel investigation
              description: |-
                ## Purpose
                Diarrhoea lasting more than two weeks, recurring fevers, unexplained rashes or skin sores after travel can be infections your usual doctor rarely sees, such as parasites or tropical diseases. Bringing a clear travel history and symptom timeline, and asking whether a referral to an infectious diseases or tropical medicine clinic is needed, gets the right tests done sooner.

                ## Milestones
                1. A symptom timeline written with dates, linked to the trip dates and places.
                2. A travel history listing countries, activities, bites, food, water and animal contact.
                3. Your doctor asked about tests for travel-related infections and a specialist referral.
                4. Results and diagnosis recorded with the trip in your health record.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated symptom timeline and travel history are shared with your doctor, and the decision on testing or referral is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a dated timeline of symptoms since returning"
                - "Ask the agent to draft a one-page travel history from your trip notes"
                - "Ask your doctor about tests for travel infections and a specialist referral"
                - "Record the results and diagnosis alongside the trip in your health record"
---

# Travel Health Preparation

This area is for anyone getting ready to travel, from a city break to a year abroad, and for the people who organise trips for others. It starts with the foundations (an early travel clinic visit, a destination risk brief, honest insurance declarations, entry requirements and medicines that will pass the border), then the routines that repeat for every trip, the skills for malaria, stomach bugs, altitude, heat and animal bites, the decisions about insurance, kit and extra vaccines, the trips that need their own preparation, the situations such as pregnancy, young children, older age or a long-term condition, and finally expeditions, diving and leading a group.

What repeats is a monthly look at upcoming trips and official health alerts, a quarterly check of the travel kit, documents and medical summary, and the yearly insurance renewal review. The Operational checklist, Trip, Purchase decision and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
