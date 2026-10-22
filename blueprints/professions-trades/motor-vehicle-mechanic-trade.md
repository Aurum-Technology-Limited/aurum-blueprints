---
id: professions-trades.motor-vehicle-mechanic-trade
name: Motor Vehicle Mechanic Trade
description: "The route from a first week in a garage to master technician: entry subjects, training and apprenticeship, workshop safety, diagnostics, certification, hybrid and diesel work, working abroad and running your own garage."
category: personal
version: 1.0.0
tags: [professions-trades, motor-vehicle-mechanic-trade, student, mechanic, automotive, diagnostics, cvq, apprenticeship]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - purchase-decision
    - job-application
    - operational-checklist
    - development-plan
    - onboarding-30-60-90
  pillars:
    - name: Professions & Trades
      emoji: "🧰"
      description: "Specific careers from first interest to established practitioner: entry qualifications, training and apprenticeships, licensing and registration, the first job, specialising, and working abroad, across health, law, teaching, engineering, the skilled trades, public service, hospitality and more."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Motor Vehicle Mechanic Trade
          description: "Becoming a motor vehicle technician: training, diagnostics, manufacturer certification, specialising in diesel or hybrid, and running a garage."
          projects:
            - name: A week in a working garage before you commit
              description: |-
                ## Purpose
                Garage work is hot, dirty, physical and full of puzzles, and the only honest test of whether it suits you is a few real days in a workshop. A week of work experience or shadowing at a busy garage shows you the pace, the tools and the customers, and gives you something specific to say in every application that follows.

                ## Milestones
                1. A week of work experience or shadowing agreed with a garage owner or service manager.
                2. Five working days spent in the workshop watching servicing, diagnosis and repairs.
                3. A one-page note of the jobs you saw, the tools used and what you found hardest.
                4. A written decision to pursue the trade, try something nearby, or step back, with your reasons.

                ## Notes
                Younger students are often kept off lifts and away from some tools for insurance reasons. Ask the garage what you will be allowed to do so you are not disappointed, and wear boots with toe caps from the first day.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A week in a garage completed and a written decision on pursuing the trade, with three reasons, saved in your notes."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask a local garage owner or your school careers officer about work experience"
                - "Agree the start date, hours and safety rules with the garage"
                - "Write down each day's jobs and tools that evening"
                - "Record your decision and three reasons in a short note"
            - name: School subjects and entry qualifications for motor vehicle work
              description: |-
                ## Purpose
                Most motor vehicle training programmes ask for English, mathematics and a science, and a technical subject helps. In the Caribbean that usually means CSEC passes, with some institutes accepting CVQ Level 1 or 2 units in motor vehicle repair alongside them; in the UK, GCSEs at set grades; in the US and Canada, a high school diploma with mathematics and a science. Checking the exact requirements of the courses you want leaves time to sit or resit a subject.

                ## Milestones
                1. Entry requirements for three target courses or apprenticeships copied into one table.
                2. Your passes, predicted grades and any CVQ or vocational units set against each requirement.
                3. Every gap given a plan: a resit, an extra subject or a bridging course.
                4. Confirmation from one admissions office that your qualifications are accepted.

                ## Notes
                Mathematics matters more than people expect: you will work with ratios, torque conversions, tolerances and estimates every week. A weak pass is worth improving before training starts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table comparing your qualifications with three courses' entry requirements, with every gap given a dated plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every subject, grade and vocational unit you hold or are predicted"
                - "Copy the entry requirements of three motor vehicle courses into one table"
                - "Mark each gap between your results and their requirements"
                - "Email one admissions office to confirm your qualifications are accepted"
                - "Register for a resit or bridging course if a gap remains"
            - name: Choosing a training route into motor vehicle work
              description: |-
                ## Purpose
                Three routes lead into the trade: a full-time course at a technical institute or college, an apprenticeship where a garage trains you while you earn, or starting as a workshop helper and studying part time. Examples include national training agencies such as the HEART/NSTA Trust in Jamaica, Level 2 and 3 apprenticeships in the UK and accredited college programmes in the US and Canada. Comparing cost, length, the qualification at the end and hours spent on real vehicles stops you choosing on convenience alone.

                ## Milestones
                1. Three routes or providers listed with length, cost, qualification awarded and workshop hours.
                2. A current student or graduate of each shortlisted provider asked what the course is really like.
                3. The workshops of the top two providers visited, with the age of their vehicles and diagnostic equipment noted.
                4. A route chosen and the reasons written in a short note.

                ## Notes
                A course that trains only on old carburettor engines will leave you behind. Ask what model years the training vehicles are and whether students use scan tools every week.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three training routes and a chosen route with reasons, recorded before the next intake closes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List three training providers or apprenticeship schemes near you"
                - "Note the length, cost and qualification awarded for each"
                - "Visit the workshops of your top two choices"
                - "Ask a current student what a typical week involves"
                - "Write down the route you chose and why"
            - name: Funding your training and first year of tools
              description: |-
                ## Purpose
                Course fees are only part of the cost: tools, boots, overalls, books, exam entries and travel add up, and many apprentices are expected to build their own kit over the first few years. A written budget for the first year, with every grant, stipend and tool scheme you can find, shows whether the plan is affordable and how much to put aside each month.

                ## Milestones
                1. Every first-year cost listed: fees, exam entries, tools, protective clothing, books and travel.
                2. Grants, stipends, apprentice wages and tool discount schemes written beside the costs.
                3. A monthly saving figure agreed with yourself or your family.
                4. The first month's savings set aside in a separate pot.

                ## Notes
                Start from the **Monthly budget and bills** template. Many tool suppliers run student and apprentice discounts, so ask your college before buying anything at full price.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-year training budget listing all costs and funding sources, with a monthly savings figure met for two months running."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the course fee, exam fees and protective clothing costs"
                - "Ask the training provider about grants, stipends and tool schemes"
                - "Work out the monthly amount that covers the shortfall"
                - "Move the monthly amount into your tool and training fund @recurring(monthly:25)"
            - name: Workshop safety induction and protective equipment
              description: |-
                ## Purpose
                Workshops hurt people through vehicles slipping off jacks, burns from exhausts and hot coolant, crushed fingers, flying debris and fumes in closed bays. A proper safety induction and the right protective equipment before you touch a customer's car are the first things an employer or college checks, and the habits you form now last a whole career.

                ## Milestones
                1. A safety induction completed covering lifts, jacks, fire points, first aid and emergency exits.
                2. Safety boots, overalls, safety glasses, gloves and hearing protection in your locker.
                3. The fire extinguishers, eyewash station and first aid kit located without having to look.
                4. The workshop rules on exhaust fumes, running engines indoors and hot work read and signed.

                ## Notes
                Never work under a vehicle held only by a jack. Use axle stands or a lift with its locks engaged, every single time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A signed safety induction record and a full set of protective equipment, checked by your supervisor or tutor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your supervisor or tutor for the workshop safety induction"
                - "Buy safety boots, safety glasses and a box of nitrile gloves"
                - "Walk the workshop and note every extinguisher, eyewash point and exit"
                - "Sign the workshop rules once you have read them"
            - name: Buying a starter mechanic's tool kit
              description: |-
                ## Purpose
                Buying a full professional tool chest on day one wastes money on tools you will not need for years, while cheap sockets that round off bolts cost you time and skin. A starter kit built around a quality metric socket set, combination spanners, screwdrivers, pliers, a torque wrench and a multimeter covers most first-year jobs, with gaps filled as real work shows you what you need.

                ## Milestones
                1. The list of tools your college or employer expects you to own.
                2. Three brands or suppliers compared on price, warranty and replacement policy.
                3. A starter kit bought within the budget you set.
                4. Every tool engraved or marked with your initials.

                ## Notes
                Start from the **Purchase decision** template. A lifetime warranty only helps if the supplier is local or its van visits your workshop.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A starter tool kit bought within budget from a compared shortlist, with every tool marked as yours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your tutor or foreman for the required first-year tool list"
                - "Compare three suppliers on price, warranty and replacements"
                - "Buy the starter kit within your budget"
                - "Mark every tool with your initials or an engraving pen"
            - name: Engine and vehicle systems groundwork
              description: |-
                ## Purpose
                Every later diagnosis rests on understanding the four-stroke cycle, how air, fuel and spark combine, and how the cooling, lubrication, transmission, braking, steering and electrical systems connect. Learning these as one connected map, not as separate chapters, makes fault finding feel like logic rather than guessing.

                ## Milestones
                1. The four-stroke cycle explained aloud from memory using a cutaway engine or diagram.
                2. A labelled sketch of the main systems of one real vehicle.
                3. Each system's main components identified under the bonnet and underneath a car on a lift.
                4. The end-of-chapter quiz in your course book passed at 80 percent or better.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The four-stroke cycle explained from memory to a tutor and a systems quiz passed at 80 percent or better."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Watch a cutaway animation of the four-stroke cycle and take notes"
                - "Sketch and label the main systems of one vehicle"
                - "Identify each system's parts on a car on the lift with your tutor"
                - "Take the end-of-chapter quiz in your course book"
            - name: Reading service manuals, wiring diagrams and torque specs
              description: |-
                ## Purpose
                Torque figures, tightening sequences, fluid capacities and wire colours differ between models and years, and guessing them causes stripped threads, warped cylinder heads and electrical faults. Finding the right page in manufacturer information, a repair database or a wiring diagram quickly is the skill that separates a technician from a parts fitter.

                ## Milestones
                1. The repair information system or manuals your workshop uses identified, with your access working.
                2. Torque figures and tightening sequence found for a cylinder head and a wheel on two different vehicles.
                3. A wiring diagram traced from fuse to component for one circuit.
                4. A vehicle identification number decoded for model year, engine and market.

                ## Notes
                Many Caribbean workshops service right-hand-drive used imports from Japan whose data may sit under a different model name or market. Record the chassis code as well as the badge on the boot.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Correct torque data and one traced wiring circuit found unaided for two vehicles and checked by a supervisor."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask which repair information system or manuals the workshop uses"
                - "Find the head bolt torque and sequence for two different engines"
                - "Trace one lighting circuit on a wiring diagram from fuse to bulb"
                - "Decode the VIN or chassis code of three vehicles in the workshop"
            - name: Applying for an apprenticeship or trainee post
              description: |-
                ## Purpose
                Garages often take on apprentices and trainees without advertising widely, so a clean CV, a short cover letter and turning up in person still work. Applying to ten workshops in a fortnight, with a record of who you spoke to and when to follow up, turns hoping for a place into a process you control.

                ## Milestones
                1. A one-page CV listing qualifications, work experience and any vehicle work done at home.
                2. Ten garages, dealerships or fleet workshops listed with a contact name.
                3. Applications delivered in person or online to all ten.
                4. Every follow-up call made and at least one interview or trial day arranged.

                ## Notes
                Start from the **Job application** template. Turn up to trial days in boots and overalls ready to work; many workshops hire on how you sweep, listen and ask questions.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Ten applications delivered and logged with follow-up dates, and at least one interview or trial day attended."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page CV that includes work on family or friends' vehicles"
                - "List ten workshops with a manager's name and number"
                - "Deliver your application to each workshop in person or online"
                - "Phone each workshop a week after applying"
                - "Prepare three questions to ask at an interview or trial day"
            - name: Driving licence for road tests and moving vehicles
              description: |-
                ## Purpose
                Workshops need technicians who can move cars around the yard, road test a repair and reproduce a customer's noise at speed. Without a full driving licence, and ideally a clean record, many employers will not take you on, and insurers may limit who can drive customer vehicles.

                ## Milestones
                1. A learner permit obtained with the documents your licensing authority requires.
                2. Driving lessons booked and practice hours logged, including time in a manual car.
                3. The driving test passed.
                4. Your employer's rules on road tests, trade plates and insurance read and signed.

                ## Notes
                Learn in a manual car if you can. Plenty of customer cars, pickups and vans in the Caribbean and elsewhere still have a manual gearbox.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A full driving licence held and your employer's road test rules read and signed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check the age and documents needed for a learner permit"
                - "Book driving lessons in a manual car"
                - "Log practice hours after each lesson"
                - "Book the driving test once your instructor agrees you are ready"
            - name: Apprenticeship logbook of tasks and hours
              description: |-
                ## Purpose
                Apprenticeships and trade certifications usually need proof of hours and competences signed by a supervisor, and rebuilding months of evidence from memory before an assessment is miserable. Writing up each week's jobs while they are fresh builds the evidence your assessor needs and shows which skills you have not yet practised.

                ## Milestones
                1. The logbook or e-portfolio format your training provider requires obtained.
                2. Each week's jobs, hours and skills recorded within a few days.
                3. A supervisor signature on every month's entries.
                4. Gaps in experience flagged to your supervisor so those jobs come your way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A logbook with every week of the past three months recorded and each month signed by a supervisor."
                cadence: rolling
              tasks:
                - "Get the logbook or e-portfolio format from your training provider"
                - "Write up this week's jobs, hours and skills used @recurring(weekly:fri)"
                - "Get your supervisor to sign the month's entries @recurring(monthly:28)"
                - "Tell your supervisor which competences you still need to practise"
            - name: Weekly tool clean, check and inventory
              description: |-
                ## Purpose
                Tools go missing in shared workshops, sockets crack, ratchets wear and torque wrenches drift out of calibration. A short weekly routine of wiping, counting and checking catches losses before a job is held up, and protects a kit that may be worth as much as a small car within ten years.

                ## Milestones
                1. An inventory listing every tool in your box with its approximate value.
                2. A weekly clean and count done for four weeks running.
                3. Damaged tools returned under warranty or replaced.
                4. Your torque wrench's last calibration date known and the next one booked.

                ## Notes
                Ask whether the workshop's insurance covers personal tools. Often it does not, and a separate tool policy costs less than one stolen drawer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current tool inventory with values and four consecutive weeks of completed tool checks."
                cadence: rolling
              tasks:
                - "List every tool in your box with its approximate value"
                - "Wipe, count and check your tools at the end of the week @recurring(weekly:sat)"
                - "Return damaged warranty tools to the supplier"
                - "Have your torque wrench calibration checked @recurring(yearly)"
            - name: Lift, jack and stand inspection routine
              description: |-
                ## Purpose
                Two-post lifts, trolley jacks and axle stands are what stand between you and well over a tonne of steel. A short pre-use check each day and a fuller monthly inspection, written down, find leaking rams, frayed cables and cracked stands before they fail, and give a safety inspector the record they will ask to see.

                ## Milestones
                1. The lift manufacturer's daily and periodic checks written into one checklist.
                2. A pre-use check done and initialled every working day.
                3. Jacks and axle stands inspected and recorded once a month.
                4. The date of the last formal lift inspection by a competent person found, and the next one booked.

                ## Notes
                Start from the **Operational checklist** template. Tag any faulty equipment out of use and report it the same day; never use a lift whose safety locks have failed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written lift and jack checklist in use, with daily checks and monthly inspections recorded for three months."
                cadence: rolling
              tasks:
                - "Read the lift manufacturer's daily check instructions"
                - "Run the pre-use check on your lift before the first vehicle @recurring(daily)"
                - "Inspect trolley jacks and axle stands for cracks and leaks @recurring(monthly:5)"
                - "Find out when the lift was last formally inspected"
            - name: Job cards written as complaint, cause and correction
              description: |-
                ## Purpose
                Warranty claims get rejected, comebacks get argued over and good work goes unpaid when the job card just says 'fixed'. Writing every card in three parts, what the customer reported, what you found and tested, and what you did, protects the garage and earns you a reputation with service advisers for clear work.

                ## Milestones
                1. The three-part format agreed with your foreman or service adviser.
                2. Every job card for a month written with complaint, cause and correction.
                3. Test results such as voltages, pressures and fault codes recorded on each card.
                4. Five recent cards reviewed with the foreman and the weak ones rewritten.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of job cards in complaint, cause and correction format, with five reviewed by the foreman."
                cadence: rolling
              tasks:
                - "Ask the service adviser which details warranty claims require"
                - "Write the complaint in the customer's own words on the next card"
                - "Record each test result and fault code you find on the card"
                - "Review your last five job cards with the foreman @recurring(monthly:12)"
            - name: Technical bulletins and recall checks
              description: |-
                ## Purpose
                Manufacturers publish technical service bulletins for known faults and recalls for safety defects, so the fix that cost another workshop three days may already be written up. Checking for bulletins and open recalls before diagnosing saves hours and protects customers who would never otherwise hear about a recall.

                ## Milestones
                1. The places bulletins and recalls are published for the makes you service listed.
                2. A bulletin and recall check built into the start of every diagnosis.
                3. Three jobs where a bulletin led straight to the fault recorded.
                4. Every open recall found passed to the service adviser so the customer is told.

                ## Notes
                Recalls are usually searchable by VIN on the manufacturer's site or the vehicle safety regulator's site in your country. Imported used vehicles may have recalls the local dealer has no record of.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bulletin and recall checks noted on every diagnostic job card for one month, with open recalls passed to customers."
                cadence: rolling
              tasks:
                - "List where bulletins and recalls are published for the makes you service"
                - "Check for bulletins before starting the next diagnosis"
                - "Note any job where a bulletin pointed straight to the fault"
                - "Pass every open recall you find to the service adviser"
            - name: Waste fluids, batteries and spill control
              description: |-
                ## Purpose
                Used oil, coolant, brake fluid, old batteries and oily rags count as hazardous waste in most countries, and pouring them down a drain or onto the ground brings fines and poisons the water table. A clear routine for storing, labelling and handing waste to a licensed collector keeps the workshop legal and the floor safe to walk on.

                ## Milestones
                1. Separate labelled containers for oil, coolant, brake fluid and fuel in place.
                2. A licensed collector for waste oil and batteries identified and booked.
                3. Collection notes filed for every pickup.
                4. A stocked spill kit beside the work bays and every staff member shown how to use it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Labelled waste containers in use, a stocked spill kit in place and three months of collection notes filed."
                cadence: rolling
              tasks:
                - "Label separate containers for oil, coolant and brake fluid"
                - "Find a licensed collector for waste oil and batteries"
                - "File the collection note after each waste pickup @recurring(monthly:20)"
                - "Restock the spill kit and absorbent granules @recurring(quarterly)"
            - name: Monthly pay, overtime and tool loan check
              description: |-
                ## Purpose
                Mechanics can be paid hourly, weekly, flat-rate on labour time sold or on commission, plus overtime and sometimes a tool allowance or a tool loan taken from wages. Checking each payslip against your own record of hours and jobs catches mistakes early and gives you facts whenever pay is discussed.

                ## Milestones
                1. How you are paid written down: rate, overtime rules, deductions and any tool loan balance.
                2. Your own weekly record of hours and jobs kept for three months.
                3. Each payslip checked against that record.
                4. Any underpayment raised in writing and resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of payslips checked against your own hours record, with any errors raised in writing."
                cadence: rolling
              tasks:
                - "Write down your pay rate, overtime rules and deductions"
                - "Keep your own record of hours and jobs each week"
                - "Check the payslip against your own record @recurring(monthly:26)"
                - "Raise any underpayment with the manager in writing"
            - name: Looking after your back, hands, hearing and lungs
              description: |-
                ## Purpose
                Years of bending under bonnets, lying on creepers, running impact guns and handling solvents with bare skin take a toll that often shows up in a technician's forties. Small daily habits, such as nitrile gloves, barrier cream, ear defenders with air tools and a stretch before work, plus a yearly check, keep you in the trade for decades.

                ## Milestones
                1. Gloves, barrier cream and hearing protection kept in your locker.
                2. A five-minute stretch done before most shifts for a month.
                3. Lift height and a creeper seat used to avoid working bent double.
                4. A yearly health and hearing check booked.

                ## Notes
                Persistent numbness in the hands, a rash that keeps coming back or a cough that will not clear are worth raising with your doctor early, along with the chemicals you handle.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Gloves and hearing protection used on most working days for a month, and a yearly health check booked in the calendar."
                cadence: rolling
              tasks:
                - "Put barrier cream, nitrile gloves and ear defenders in your locker"
                - "Do a five-minute back and shoulder stretch before work @recurring(daily)"
                - "Raise the lift or use a creeper seat for low jobs"
                - "Book a health and hearing check @recurring(yearly)"
            - name: Training record and yearly skills review
              description: |-
                ## Purpose
                Vehicle technology moves fast, and a technician who stops learning at the end of an apprenticeship is struggling within five years. One training record of every course, certificate and new skill, reviewed yearly with your manager, shows where to invest next and backs up any request for better pay.

                ## Milestones
                1. Every course, certificate and expiry date you hold listed in one record.
                2. New training and skills added each quarter.
                3. One skill chosen to develop over the coming year, with a course or mentor attached.
                4. A yearly skills review held with your manager and notes kept.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A training record updated in each of the last four quarters and a yearly skills review held with your manager."
                cadence: rolling
              tasks:
                - "List every course, certificate and expiry date you hold so far"
                - "Add new training and skills to the record @recurring(quarterly)"
                - "Pick one skill to develop in the coming year"
                - "Hold a skills review with your manager @recurring(yearly)"
            - name: Routine servicing to the manufacturer schedule
              description: |-
                ## Purpose
                Oil and filter changes, fluid checks, belts, plugs and a full vehicle inspection make up much of a workshop's day and are where apprentices first earn trust. Doing every service to the manufacturer's schedule and a written checklist, not from memory, catches worn parts early and avoids the classic errors: the wrong oil grade, a doubled filter seal or a drain plug left loose.

                ## Milestones
                1. The service schedules for the three models the workshop sees most often found.
                2. A supervised oil and filter service completed with the checklist.
                3. Drain plugs and filters torqued to specification and recorded.
                4. Ten services completed and signed off without rework.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten services completed to the manufacturer checklist and signed off by a supervisor without rework."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find the service schedule for three common models in the workshop"
                - "Do a supervised oil and filter service using the checklist"
                - "Torque the drain plug to specification and record it"
                - "Ask for a supervisor sign-off on each of your next ten services"
            - name: Brake friction, hydraulics and bleeding
              description: |-
                ## Purpose
                Brakes are where a careless mistake hurts someone, which is why assessors watch brake work closely. Learning to measure disc thickness and run-out, service calipers and drums, bleed the hydraulics correctly and understand how ABS changes the procedure builds a skill you will use every week.

                ## Milestones
                1. Disc thickness and run-out measured against specification on three vehicles.
                2. Pads and discs replaced on two axles and one set of drum brakes serviced, all supervised.
                3. A hydraulic system bled correctly, including the scan tool procedure on one ABS car where required.
                4. A road test and brake check recorded after each job.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three supervised brake jobs signed off, including one hydraulic bleed, with measurements recorded on the job cards."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Measure disc thickness and run-out with a micrometer and dial gauge"
                - "Replace pads and discs on one axle under supervision"
                - "Bleed a brake system and check the pedal feel"
                - "Read the ABS bleed procedure for one model you service"
            - name: Steering, suspension and wheel alignment
              description: |-
                ## Purpose
                Uneven tyre wear, pulling to one side and knocking over bumps are among the most common complaints, especially where roads are full of potholes. Learning to inspect ball joints, bushes, track rod ends and shock absorbers, then read and adjust a wheel alignment, turns these complaints into fast, confident fixes.

                ## Milestones
                1. Play in joints and bushes checked correctly on three vehicles on the lift.
                2. A track rod end or ball joint replaced under supervision.
                3. A four-wheel alignment run and adjusted with your supervisor.
                4. Before and after alignment printouts explained against the customer's complaint.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three suspension inspections and one supervised alignment completed, with the printouts filed on the job cards."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check a car on the lift for play in joints and bushes"
                - "Replace a track rod end and count the turns to keep the toe close"
                - "Run a four-wheel alignment with your supervisor"
                - "Explain the before and after printout to a colleague"
            - name: Tyres, wheels and balancing
              description: |-
                ## Purpose
                Tyre fitting looks simple, yet wheels come off on the road every year because nuts were never torqued, and pressure sensors get snapped on the changer. Doing tyre work properly, from reading sidewall codes and age to balancing and torquing in sequence, is a quick way to be useful in any workshop.

                ## Milestones
                1. Size, load, speed and date codes read correctly on five tyres.
                2. A tyre with a pressure sensor fitted and balanced without damage.
                3. Wheel nuts torqued to specification in a star pattern on every job.
                4. A re-torque reminder given to the customer where the workshop's policy asks for one.

                ## Notes
                Old tyres with plenty of tread still fail, particularly in heat and strong sun. Check the date code on every tyre you fit, including part-worn ones.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five tyre jobs completed with codes recorded, wheels torqued to specification and no sensor damage."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the size, load, speed and date codes on five tyres"
                - "Fit and balance a tyre with a pressure sensor under supervision"
                - "Torque wheel nuts to specification in a star pattern"
                - "Note any re-torque advice on the customer's invoice"
            - name: Batteries, starting and charging systems
              description: |-
                ## Purpose
                Flat batteries, slow cranking and charge warning lights cause a large share of breakdown calls, and heat shortens battery life noticeably in hot climates. Testing a battery properly, checking starter draw and alternator output, and fitting batteries to cars with stop-start or battery management saves customers from paying for parts they did not need.

                ## Milestones
                1. Three batteries tested with a conductance tester and the results recorded.
                2. Cranking voltage and alternator output measured on one vehicle.
                3. A battery fitted and registered with the scan tool where the car requires it.
                4. One parasitic drain traced to its circuit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Battery, starter and alternator tests recorded on three vehicles and one parasitic drain found and documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Test three batteries with a conductance tester and record the results"
                - "Measure cranking voltage and alternator output on one vehicle"
                - "Fit a battery and register it with the scan tool where required"
                - "Look for a parasitic drain on a car that keeps going flat"
            - name: Multimeter skills and electrical fault finding
              description: |-
                ## Purpose
                Modern vehicles carry dozens of control units and long wiring looms, and electrical faults are where many mechanics lose hours and customers lose money on swapped parts. Learning Ohm's law, voltage drop testing and how to back-probe connectors without damage is what lets you find a broken earth in twenty minutes instead of a day.

                ## Milestones
                1. Voltage, resistance and current measured correctly on a training board or car.
                2. Voltage drop tests done on a power feed and an earth circuit.
                3. An open circuit and a short to ground found on a real vehicle.
                4. Every measurement written on the job card for each electrical job.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One open circuit and one short found on real vehicles, with every measurement recorded and checked by a supervisor."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Work through five Ohm's law practice calculations"
                - "Do voltage drop tests on a headlight feed and its earth"
                - "Back-probe a sensor connector without damaging the seals"
                - "Write up every measurement taken on your next electrical job"
            - name: Scan tool diagnostics and OBD fault codes
              description: |-
                ## Purpose
                A fault code tells you which circuit or system noticed a problem, not which part has failed, and fitting parts straight from the code is the most expensive habit in the trade. Learning to read codes, freeze frame and live data, then test before replacing anything, is the core of modern diagnostic work and the skill employers pay most for.

                ## Milestones
                1. Codes and freeze frame data read and recorded on a training car.
                2. Live data for fuel trims and key sensors captured at idle and at higher engine speed.
                3. A written test plan made for one code before any part was touched.
                4. A repair confirmed by clearing codes and completing a road test drive cycle.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three diagnostic jobs completed with a written test plan before any part was replaced, each checked by a supervisor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Connect a scan tool and read codes and freeze frame on a training car"
                - "Record live fuel trim and sensor data at idle and 2,500 rpm"
                - "Write a test plan for one code before touching any part"
                - "Clear codes and confirm the repair on a road test"
            - name: Engine management, fuel and ignition systems
              description: |-
                ## Purpose
                Misfires, poor economy, hesitation and hard starting bring many cars to the workshop, and finding the cause means understanding how the engine control unit reads its sensors and drives the injectors and coils. Studying petrol and diesel fuel systems, ignition and sensor signals turns a vague drivability complaint into a logical sequence of tests.

                ## Milestones
                1. The role of the crank, cam, manifold pressure and oxygen sensors explained in your own notes.
                2. A misfire confirmed and traced to coil, plug, injector or mechanical cause.
                3. A fuel pressure test completed with your supervisor.
                4. One drivability fault found from start to finish and written up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One drivability fault diagnosed from complaint to confirmed repair, written up and checked by a senior technician."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write notes on how the ECU uses crank, cam and oxygen sensor signals"
                - "Swap ignition coils between cylinders to see if a misfire follows"
                - "Do a fuel pressure test with your supervisor"
                - "Take a fuel sample where contaminated fuel is suspected"
            - name: Cooling systems and vehicle air conditioning
              description: |-
                ## Purpose
                In hot climates an overheating engine or a car air conditioner blowing warm is urgent to the customer, and cooling and air conditioning work fills a large share of the workshop day. Pressure testing cooling systems, diagnosing fans and thermostats and handling vehicle refrigerant under the certificate your country requires opens up work many garages turn away.

                ## Milestones
                1. A cooling system pressure tested and the cap checked.
                2. A radiator fan circuit diagnosed from the wiring diagram.
                3. The refrigerant handling certificate your country requires identified and booked.
                4. An air conditioning system recovered and recharged to the specified weight under supervision.

                ## Notes
                Vehicle refrigerant work usually needs its own certificate, for example EPA Section 609 in the US or a mobile air conditioning qualification in the UK. Never vent refrigerant to the air.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One cooling fault diagnosed and one supervised air conditioning recharge completed, with the refrigerant certificate booked."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pressure test a cooling system and check the cap"
                - "Diagnose a radiator fan circuit using the wiring diagram"
                - "Find out which certificate your country requires for vehicle refrigerant"
                - "Recover and recharge an air conditioning system under supervision"
            - name: Clutches, gearboxes and drivelines
              description: |-
                ## Purpose
                Clutch replacements, CV joints, wheel bearings and gearbox fluid changes are steady, well paid jobs, and automatic and CVT gearboxes now need exact fluids and electronic adaptation. Learning to diagnose slip, judder and driveline noise, and to follow the right procedure for each transmission type, avoids some of the most expensive comebacks in the trade.

                ## Milestones
                1. A clutch complaint diagnosed with a road test and recorded.
                2. A CV joint or driveshaft replaced under supervision.
                3. The exact fluid specification checked before every gearbox top-up or change.
                4. A clutch or gearbox adaptation run with the scan tool where the vehicle needs one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two driveline jobs completed under supervision, with fluid specifications and any adaptation recorded on the job cards."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Road test a car with a clutch complaint and describe the symptom"
                - "Replace a CV joint or driveshaft under supervision"
                - "Look up the exact gearbox fluid specification before a top-up"
                - "Run a clutch or gearbox adaptation on the scan tool"
            - name: Roadworthiness inspection and emissions standards
              description: |-
                ## Purpose
                Vehicles need periodic fitness or roadworthiness inspections in many countries, such as the MOT in the UK, state inspections in parts of the US and fitness certificates issued by Caribbean licensing authorities. Knowing the published criteria lets you prepare customers' cars to pass first time and, in some places, qualify as an inspector yourself.

                ## Milestones
                1. The current inspection manual or criteria for your country downloaded.
                2. A car walked round with the criteria and every likely failure listed.
                3. The route to becoming an approved inspector or tester noted.
                4. One customer car prepared for inspection and the result recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The current inspection criteria saved and one customer car prepared for and presented to inspection, with the result recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the current inspection manual or criteria for your country"
                - "Walk round a car with the criteria and list every likely failure"
                - "Ask an inspection station how testers are trained and approved"
                - "Prepare one customer car for inspection and record the result"
            - name: Choosing which trade certification to aim for
              description: |-
                ## Purpose
                Certification shows employers and customers that your skills meet a recognised standard: the CVQ in motor vehicle repair across CARICOM, IMI accreditation and Level 3 qualifications in the UK, ASE tests in the US and the Red Seal endorsement for automotive service technicians in Canada. Picking the one that fits where you work now, and where you might work later, decides how you study for the next two years.

                ## Milestones
                1. The certifications recognised by employers where you work, or want to work, listed.
                2. Each one's eligibility, required hours and test format noted from the awarding body.
                3. Two qualified technicians asked which certificate employers actually valued.
                4. A certification chosen with a target date to hold it.

                ## Notes
                Fees, test formats and experience requirements change. Take them from the awarding body's current website, not from a forum post.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A certification chosen from a written comparison of at least two options, with a target date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the certifications employers recognise where you want to work"
                - "Note each one's eligibility, hours required and test format"
                - "Ask two qualified technicians which certificate employers valued"
                - "Write down the certification you chose and its target date"
            - name: Choosing dealership, independent, fleet or fast-fit work
              description: |-
                ## Purpose
                Dealerships give manufacturer training and newer vehicles, independent garages give variety, fleet workshops give steady hours on vans, buses and trucks, and fast-fit centres give volume on tyres, brakes and exhausts. Comparing pay, training, hours and the kind of work in each helps you choose where to spend your first five years.

                ## Milestones
                1. One technician from each type of workshop asked about pay, hours and training.
                2. A comparison table of the four settings against what matters to you.
                3. Job adverts from each setting collected to check real pay ranges.
                4. A preferred setting chosen and the reasons written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of four workshop settings informed by at least three conversations, with a preferred setting chosen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a dealership, independent, fleet and fast-fit technician about their work"
                - "Collect two current job adverts from each setting"
                - "Fill in a comparison table on pay, training, hours and variety"
                - "Record the setting you prefer and why"
            - name: Explaining faults and estimates to customers
              description: |-
                ## Purpose
                Customers who do not understand a repair suspect they are being overcharged, and a garage quietly loses them to the next workshop. Explaining a fault in plain words, showing the worn part or a photo, and separating urgent safety work from what can wait builds trust and brings people back.

                ## Milestones
                1. A habit of photographing worn or failed parts before replacing them.
                2. Each estimate sorted into safety now, needed soon and can wait.
                3. Three customer explanations given in plain language, with no jargon left unexplained.
                4. Feedback from the service adviser on how one conversation went.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three customer explanations given with photos and a sorted estimate, and service adviser feedback recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Photograph a worn part on your next job to show the customer"
                - "Practise explaining a fault in three plain sentences to a friend"
                - "Sort your next estimate into safety now, soon and can wait"
                - "Ask the service adviser for feedback on one conversation"
            - name: Beating book time without cutting corners
              description: |-
                ## Purpose
                On flat-rate pay each job is paid at a published labour time however long it takes you, so speed matters, but speed from skipped steps returns as a comeback you fix for free. Measuring your real times against book time for a month shows which jobs to practise, which tools save minutes and where you are losing time between jobs.

                ## Milestones
                1. A month of clock-on and clock-off times recorded for every job.
                2. Your times compared with the labour guide for each job.
                3. The three slowest job types identified with a reason for each.
                4. A plan for each: practice, a better tool or a better bay set-up, alongside your comeback count.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A month of job times compared with book time, with the three slowest job types and a fix for each recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record clock-on and clock-off times for every job this month"
                - "Compare your times with the labour guide for each job"
                - "Pick the three slowest job types and note why they are slow"
                - "Count your comebacks over the same month"
            - name: Upgrading to a professional diagnostic scan tool
              description: |-
                ## Purpose
                A basic code reader reads engine codes, while a professional scan tool adds actuator tests, coding, service resets and access to body, ABS and airbag modules. The jump costs serious money and usually a yearly software subscription, so comparing tools on the makes you actually see is worth an evening's research before you buy.

                ## Milestones
                1. The makes and model years you service most often listed.
                2. Three scan tools compared on coverage, functions and yearly update cost.
                3. The top choice demonstrated or borrowed on real customer vehicles.
                4. A decision recorded with the total three-year cost.

                ## Notes
                Start from the **Purchase decision** template. Check coverage for the used Japanese and Korean imports common in your market, not just the brochure's headline makes.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scan tool chosen from a comparison of three, with coverage checked on real vehicles and the three-year cost recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the makes and model years you service most often"
                - "Compare three scan tools on coverage, functions and update costs"
                - "Borrow or demo the top choice on real customer vehicles"
                - "Record your decision and its three-year cost"
            - name: Asking for a raise with evidence of your skills
              description: |-
                ## Purpose
                Pay in the trade tends to rise with certification, diagnostic ability and productivity, but only when someone makes the case. Keeping a running list of new certificates, jobs you can now do alone and your productive hours, then asking for a review at a sensible time, puts the pay conversation on facts rather than feelings.

                ## Milestones
                1. Local pay rates for your level gathered from job adverts and colleagues.
                2. A one-page list of certificates, solo jobs and productive hours.
                3. A meeting with your manager booked and held.
                4. The outcome and any agreed next review date written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pay review meeting held with a written evidence list, and the outcome and next review date recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect five local job adverts showing technician pay"
                - "List certificates and jobs you can now do unsupervised"
                - "Add new certificates and solo jobs to the list @recurring(quarterly)"
                - "Book a pay conversation with your manager"
            - name: Sitting the trade certification exams
              description: |-
                ## Purpose
                Whether it is a CVQ assessment, ASE tests, an IMI assessment or a provincial certificate of qualification exam, trade certification mixes theory questions with observed practical tasks. Booking a date and working steadily through practice questions and practical rehearsals turns the certificate you chose into one you hold.

                ## Milestones
                1. The current format, fees and booking rules confirmed with the awarding body.
                2. A test date booked.
                3. Practice questions done twice a week for at least eight weeks.
                4. The test sat and the certificate received, with its expiry date recorded.

                ## Notes
                Some certificates expire or need retesting, for example ASE certifications are renewed every few years. Put each expiry in your calendar the day the certificate arrives.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The chosen trade certification test sat by the booked date and the certificate, with its expiry, filed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Check the current test format, fees and booking dates with the awarding body"
                - "Book the first test date"
                - "Work through a set of practice questions @recurring(weekly:mon,wed)"
                - "Check every certificate's expiry date @recurring(yearly)"
            - name: Final apprenticeship assessment day
              description: |-
                ## Purpose
                Apprenticeships usually end with an assessment that can include a practical test, a discussion of your portfolio and a knowledge test, and failing one part can delay qualified pay by months. Preparing deliberately, with a mock practical and a portfolio your assessor has already checked, means walking in confident.

                ## Milestones
                1. The assessment format and date confirmed with your training provider.
                2. Your portfolio reviewed by your assessor with every gap closed.
                3. A mock practical completed under timed conditions in the workshop.
                4. The assessment passed and the certificate filed.
              priority: high
              deadlineOffsetDays: 540
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final apprenticeship assessment passed and the certificate filed with your training record."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your training provider for the assessment format and likely date"
                - "Book a portfolio review with your assessor"
                - "Run a timed mock practical with your supervisor"
                - "Pack your logbook, ID and boots the night before"
            - name: First 90 days as a qualified technician
              description: |-
                ## Purpose
                Becoming a qualified technician changes what is expected of you: less supervision, harder jobs, your own times counted and sometimes an apprentice watching you. Planning the first three months, with clear expectations agreed with the foreman and a check-in at 30, 60 and 90 days, settles you in faster and avoids early comebacks.

                ## Milestones
                1. Expectations for the first 90 days agreed with your foreman.
                2. The workshop's systems, special tools and parts process learned.
                3. Check-ins held at 30, 60 and 90 days with notes kept.
                4. A list of jobs you now handle alone and ones still needing support.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three check-ins held at 30, 60 and 90 days with the foreman, and a written list of the jobs you handle alone."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the foreman what a good first 90 days looks like"
                - "Learn where special tools and parts orders are kept"
                - "Book check-ins at 30, 60 and 90 days"
                - "List the jobs you now handle without supervision"
            - name: Manufacturer or supplier training course
              description: |-
                ## Purpose
                Manufacturer and parts supplier courses teach the specific systems, special tools and software for a make, and many dealerships require them before you can do warranty work. Attending one well, with questions prepared and notes turned into a one-page reference, gets far more from a day off the tools.

                ## Milestones
                1. A course chosen that matches the makes or systems you see most.
                2. Attendance approved and booked with your employer.
                3. Three questions about real jobs prepared beforehand.
                4. A one-page reference sheet written and shared with the workshop.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One manufacturer or supplier course attended and a one-page reference sheet shared with the workshop."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask your manager which manufacturer or supplier courses are available"
                - "Book a course on a system you see often"
                - "Write three questions from recent jobs to ask the trainer"
                - "Turn your course notes into a one-page reference sheet"
            - name: Entering a skills competition
              description: |-
                ## Purpose
                Regional and national skills competitions, including automobile technology contests at WorldSkills and at TVET agency events, test young technicians on timed diagnostic and repair tasks. Competing sharpens your speed and accuracy, gets your name in front of employers and gives you a story every interviewer remembers.

                ## Milestones
                1. A competition found with its rules, age limits and entry deadline.
                2. A tutor or employer agreed as your coach.
                3. Practice sessions held on the competition task areas.
                4. The competition entered and a reflection written afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A skills competition entered and completed, with a written reflection on what to improve."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your college or training agency about skills competitions"
                - "Read the rules and task areas of the next competition"
                - "Agree a practice schedule with your coach"
                - "Write a reflection on your result within a week"
            - name: Garage work alongside school and exams
              description: |-
                ## Purpose
                Students who spend Saturdays or holidays in a garage leave school with references, practical skill and sometimes a job offer, but exam grades still decide which courses accept them. A written plan that caps garage hours during exam terms and links the work to CSEC, CVQ or GCSE coursework where possible keeps both going.

                ## Milestones
                1. A weekend or holiday arrangement agreed with a garage and your parents or guardians.
                2. A cap on garage hours set for the weeks before mock and final exams.
                3. One piece of school coursework or a CVQ unit linked to work done in the garage.
                4. A reference letter from the garage owner requested when you finish.

                ## Notes
                Check the legal working age and hours for young people in your country. A garage that asks a young teenager to work full days in exam season is not looking after you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan of garage hours around the exam calendar, agreed with the garage and a parent, and kept for one school term."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Mark your mock and final exam weeks on a calendar"
                - "Agree weekend or holiday hours with the garage and a parent"
                - "Ask a teacher whether garage work can count toward coursework"
                - "Request a reference letter from the garage owner"
            - name: Retraining as a mechanic later in life
              description: |-
                ## Purpose
                People move into the trade at 25, 35 or 45 from driving, the forces, factory work or an office, often with family and rent to cover. Part-time and evening courses, adult apprenticeships and trainee posts in fleet workshops exist, and a plan that protects income while you train makes the change realistic.

                ## Milestones
                1. Adult-friendly routes listed: evening courses, adult apprenticeships and trainee posts.
                2. Household costs set against expected trainee pay for the first two years.
                3. Transferable skills such as driving licences, customer service or fleet experience written onto your CV.
                4. A start date chosen with the household's agreement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written retraining plan with a route, a two-year budget and a start date agreed with your household."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List evening courses and adult apprenticeships near you"
                - "Compare trainee pay with your household costs for two years"
                - "Add transferable skills from your current work to your CV"
                - "Agree a start date with your partner or household"
            - name: Working as a mechanic abroad
              description: |-
                ## Purpose
                Skilled motor vehicle technicians are in demand in Canada, the UK, the US and across CARICOM, but each place recognises qualifications differently. Canada assesses trade experience before the Red Seal or provincial exam, the UK and US rely on employer and certification checks, and a CVQ may support a CARICOM Skills Certificate for moving within the region. Preparing documents and checking official sources protects you from fake recruiters who charge fees for jobs that do not exist.

                ## Milestones
                1. Target countries chosen and their official trade recognition routes noted.
                2. Certificates, transcripts, logbook and employer letters of hours gathered and copied.
                3. Visa or work permit routes checked on official government sites only.
                4. Any recruiter's licence verified before a single fee is paid.

                ## Notes
                Never pay a recruiter you cannot verify with the official labour or immigration authority. Immigration rules change; treat official sites and licensed advisers as the authority.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A document pack of certificates and dated employer letters, with the recognition route for one target country confirmed from an official source."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one or two target countries to work in"
                - "Find the official trade recognition route for each"
                - "Ask past employers for letters confirming your hours and duties"
                - "Check any recruiter's licence with the official authority"
            - name: Moving up to workshop foreman or service adviser
              description: |-
                ## Purpose
                After several years on the tools, many technicians move into running the workshop floor as foreman or controller, or into the front desk as a service adviser. Both roles trade some hands-on work for planning, quality checks and customer conversations, so trying the work before applying helps you choose well.

                ## Milestones
                1. The duties and pay of foreman and service adviser roles compared.
                2. A week spent covering or shadowing the role you prefer.
                3. Gaps in skills such as planning, quoting or the dealer system identified.
                4. An application made or a development conversation held with your manager.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A week of shadowing or cover completed and a decision recorded on applying for foreman or service adviser."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the current foreman and service adviser about their week"
                - "Cover or shadow the role you prefer for a week"
                - "List the skills you would need to add"
                - "Tell your manager which role you are aiming for"
            - name: Mobile mechanic work on the side
              description: |-
                ## Purpose
                Servicing neighbours' cars at weekends or doing call-out repairs can add real income, but it brings questions about insurance, your employer's contract, tax, waste disposal and what happens when a repair fails. Setting the side work up properly from the start keeps it legal and keeps your main job safe.

                ## Milestones
                1. Your employment contract checked for any clause on outside work.
                2. Public liability insurance and business registration needs checked with official sources.
                3. Prices set for common jobs, with a simple written receipt for each.
                4. A share of each month's side income put aside for tax.

                ## Notes
                Keep jobs you do at the roadside to what is safe there: no working under a car on soft ground. Waste oil from side jobs still needs a licensed disposal route.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Insurance and registration in place, a price list written and tax savings set aside for three months of side work."
                cadence: rolling
              tasks:
                - "Read your employment contract for any clause on outside work"
                - "Ask an insurer about public liability cover for mobile repairs"
                - "Write a price list for your five most common jobs"
                - "Set aside tax from this month's side income @recurring(monthly:15)"
            - name: Hybrid and electric vehicle high-voltage qualification
              description: |-
                ## Purpose
                Hybrids and electric vehicles carry battery systems at voltages that can kill, and working on them safely needs specific training, insulated tools and gloves, and a written isolation procedure. As more hybrids arrive, many of them as used imports, a recognised high-voltage qualification is fast becoming the line between technicians who can take the work and those who cannot.

                ## Milestones
                1. A recognised high-voltage training course chosen and booked.
                2. Insulated tools, rated gloves and a high-voltage warning kit available in the workshop.
                3. A written isolation and making safe procedure followed on a supervised job.
                4. The qualification held and its renewal date recorded.

                ## Notes
                Insulated gloves need checking before each use and periodic retesting. Never work on a high-voltage system alone or without the vehicle's isolation procedure in front of you.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recognised high-voltage qualification held and one supervised isolation completed to a written procedure."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find high-voltage vehicle courses recognised in your country"
                - "Book the course with your employer's agreement"
                - "Check the test date on the workshop's insulated gloves @recurring(monthly:9)"
                - "Follow the isolation procedure on a supervised hybrid job"
            - name: Diesel engines and commercial vehicles
              description: |-
                ## Purpose
                Buses, trucks, pickups and minibuses keep economies moving, and diesel technicians who understand common rail injection, turbochargers, exhaust after-treatment and air brakes are hard to find. Specialising in commercial vehicles often brings steadier fleet work and better pay than the light vehicle workshop.

                ## Milestones
                1. Diesel common rail, turbo and after-treatment systems studied with notes.
                2. Injector and turbo diagnosis done on supervised jobs.
                3. Air brake systems inspected on a commercial vehicle with a qualified technician.
                4. A heavy vehicle or diesel certification identified and booked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three supervised diesel or commercial vehicle jobs completed and a diesel certification course booked."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask fleet workshops near you whether they take on diesel trainees"
                - "Study common rail injection and turbocharger diagnosis"
                - "Inspect an air brake system with a qualified technician"
                - "Book a diesel or heavy vehicle certification course"
            - name: Advanced diagnostics with an oscilloscope
              description: |-
                ## Purpose
                Intermittent faults, sensor signals that look fine on a multimeter and network communication problems often only show up on an oscilloscope. Learning to capture and read waveforms for crank sensors, injectors, ignition and CAN bus lines puts you among the technicians other garages send their hardest jobs to.

                ## Milestones
                1. An automotive oscilloscope and leads available, borrowed or bought.
                2. Known-good waveforms captured for crank, cam, injector and ignition signals.
                3. A CAN bus signal captured and checked on a working car.
                4. One intermittent fault found with the scope and written up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A personal library of ten known-good waveforms and one intermittent fault diagnosed with the scope and written up."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Borrow or price an automotive oscilloscope"
                - "Capture a known-good crank sensor waveform and save it"
                - "Build a library of ten known-good waveforms"
                - "Use the scope on the next intermittent fault"
            - name: Opening your own garage
              description: |-
                ## Purpose
                Running your own garage means premises, equipment, licences, insurance, parts accounts, staff and pricing as well as fixing cars, and many good technicians struggle because the business side was left to chance. A written plan, checked with an accountant and the local planning and licensing offices, shows whether the numbers work before you sign a lease.

                ## Milestones
                1. A business plan with start-up costs, labour rate, parts margin and break-even.
                2. Premises checked for zoning, planning use, drainage and waste rules.
                3. Business registration, insurance and any trade licences arranged.
                4. Parts accounts opened and a monthly figures review in place.

                ## Notes
                An accountant or small business adviser should check the numbers before you commit. Prepare questions for them rather than relying on a figure from another garage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A business plan reviewed by an accountant, premises approved for motor repair use and a monthly figures review running."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List start-up costs for premises, lift, tools and diagnostic equipment"
                - "Ask the local planning office whether a site can be used for motor repairs"
                - "Book a meeting with an accountant to check the business plan"
                - "Review takings, labour sold and parts margin @recurring(monthly:3)"
---

# Motor Vehicle Mechanic Trade

This area follows the motor vehicle trade from a curious school leaver's first week in a garage to the technician other mechanics call when they are stuck, and on to running a workshop. It starts with entry subjects such as CSEC and CVQ units or their UK, US and Canadian equivalents, a training route, safety and a first tool kit, then builds the workshop routines, the system by system skills from brakes to engine management, certification and pay decisions, the first qualified job, life situations such as retraining or working abroad, and finally hybrid, diesel, advanced diagnostics and opening your own garage.

The recurring rhythms are a weekly logbook and tool check, a daily lift check and stretch, monthly job card reviews, payslip checks, waste collection records and savings, quarterly training updates and yearly calibration, certification and health reminders. The Monthly budget and bills, Purchase decision, Job application, Operational checklist, Development plan and Onboarding 30/60/90 templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
