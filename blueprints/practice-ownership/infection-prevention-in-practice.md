---
id: practice-ownership.infection-prevention-in-practice
name: Infection Prevention in Practice
description: "A named infection prevention lead, a written policy and risk assessment, sterilisation and waste routines with logs, cleaning schedules, staff training and an annual audit an inspector can follow."
category: business
version: 1.0.0
tags: [practice-ownership, infection-prevention-in-practice, small-business, infection-control, decontamination, sterilisation, clinical-waste, hand-hygiene]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - metrics-log
    - training-program
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Infection Prevention in Practice
          description: "Running infection prevention in a clinical practice: sterilisation and decontamination, waste handling, cleaning schedules, staff training and audits."
          projects:
            - name: Infection prevention lead and deputy appointed
              description: |-
                ## Purpose
                Someone has to own infection prevention, or the logs drift, the audit slips a year and nobody notices the steriliser test was skipped. Naming a lead with protected time and a deputy who covers holidays is the first thing most regulators ask about, and it makes every other project in this area somebody's job.

                ## Milestones
                1. A lead and a deputy named in writing, with their agreement.
                2. Protected time for the lead agreed, for example two hours a month, and blocked in the rota.
                3. The lead's responsibilities listed on one page and signed by the owner.
                4. All staff told who the lead is and how to raise a concern.

                ## Notes
                In a small practice the owner is often the lead. That is fine, as long as the deputy is someone else who can step in.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page role description names the infection prevention lead and deputy, and the lead's protected time appears in the rota."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide who will lead infection prevention and who will deputise"
                - "Write a one-page list of the lead's responsibilities"
                - "Block the lead's protected time in the staff rota"
                - "Announce the lead and deputy at the next staff meeting"
            - name: Written infection prevention policy for the practice
              description: |-
                ## Purpose
                Inspectors expect a policy that describes how this practice actually works, not a downloaded document naming equipment you do not own. A short policy covering hand hygiene, PPE, cleaning, decontamination, sharps, waste, spills, immunisation and outbreaks gives staff one place to check and gives you something to audit against.

                ## Milestones
                1. The current guidance for your profession and country identified and saved.
                2. A policy drafted with a section for each of the nine topics, naming your own rooms and equipment.
                3. The draft read and corrected by at least two clinical staff.
                4. The policy signed, dated, given a review date and filed where every staff member can open it.

                ## Notes
                Write the policy to match what you do, then change what you do where it falls short. A policy describing an ideal practice that does not exist is worse than none at inspection.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and dated infection prevention policy with nine topic sections and a review date is filed and has been read by every clinical staff member."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find and save the infection prevention guidance your regulator points to"
                - "Ask the agent to draft a policy outline from your room and equipment list"
                - "Rewrite each section to match how the practice really works"
                - "Collect signatures from staff confirming they have read the policy"
            - name: Baseline infection prevention walk-round
              description: |-
                ## Purpose
                Before writing plans, walk every room with a clipboard and look as a stranger would: dust on high shelves, torn couch covers, sharps bins on the floor, a hand basin used for storage. Thirty minutes per room gives a factual baseline that the risk assessment, the cleaning schedule and the first audit all build on.

                ## Milestones
                1. Every clinical, waiting, staff and storage room walked and noted.
                2. Each finding photographed and listed with its location.
                3. Findings sorted into fix this week, fix this quarter and needs spending.
                4. The quick fixes done and ticked off within a fortnight.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated walk-round list covering every room exists, sorted into three urgency groups, with the quick fixes marked as done."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Print a floor plan and number every room on it"
                - "Walk each room and photograph anything that would fail an inspection"
                - "Sort the findings into three groups by urgency and cost"
                - "Fix the items in the this-week group and tick them off"
            - name: Infection risk assessment by room and procedure
              description: |-
                ## Purpose
                Every room and procedure carries a different risk: a treatment room used for minor surgery is not a counselling room, and a dental surgery generating aerosols is not a waiting area. A written risk assessment that rates each one and names its controls is what decides cleaning frequency, PPE and training, and it is usually the first document an inspector opens.

                ## Milestones
                1. A list of every room and every procedure type carried out in the practice.
                2. Each one rated for likelihood and severity of infection spread.
                3. Existing controls written against each risk, with gaps marked.
                4. An action owner and date set against every gap.
                5. The assessment dated and given a review date within twelve months.

                ## Notes
                Start from the **Risk register** template. Include patients at higher risk, such as those who are immunosuppressed, and how they are seen.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated risk register rates every room and procedure, lists controls, and has an owner and target date against each gap found."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every room and every procedure type the practice offers"
                - "Rate each for likelihood and severity of infection spread"
                - "Write the current controls and gaps against each line"
                - "Assign an owner and target date to every gap"
            - name: Hand hygiene stations and supplies set-up
              description: |-
                ## Purpose
                Staff wash their hands when the basin, soap, paper towels and alcohol rub are where their hands already are, and skip it when they are a corridor away. Checking every clinical room against a simple standard, and fixing what is missing, removes the most common reason for poor hand hygiene before any training starts.

                ## Milestones
                1. Each clinical room checked for a dedicated hand basin, liquid soap, paper towels and a pedal bin.
                2. Alcohol hand rub placed at the point of care in every treatment area.
                3. Hand basins cleared of anything stored in or around them.
                4. Technique posters fixed above each clinical basin.

                ## Notes
                Hand basins used for washing instruments or emptying fluids contaminate hands at the moment they are meant to be clean. Keep them for hands only.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every clinical room has a hands-only basin with soap, paper towels and a pedal bin, plus alcohol rub at the point of care, checked against a room list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each clinical room for basin, soap, towels, bin and alcohol rub"
                - "Order the dispensers and pedal bins that are missing"
                - "Clear anything stored in or beside clinical hand basins"
                - "Fix a hand washing technique poster above each clinical basin"
            - name: PPE range, sizes and storage
              description: |-
                ## Purpose
                Gloves in one size, aprons kept in the staff room and visors nobody can find mean PPE is either skipped or overused. Deciding which items each procedure needs, stocking the right sizes for every staff member and storing them in the room where they are used makes the right choice the easy one.

                ## Milestones
                1. A table matching each procedure type to the PPE it needs.
                2. Glove sizes and any latex-free needs recorded for every clinical staff member.
                3. Each clinical room stocked with the PPE its procedures require, stored off the floor and away from splashes.
                4. Minimum stock levels set for each item, with the person who reorders named.

                ## Notes
                Where respiratory protection such as fitted masks is required, fit testing is usually needed too. Check what your guidance says for your procedures.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A procedure to PPE table is displayed in each clinical room, and every room holds the listed items in the sizes its staff need."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw up a table matching each procedure to the PPE it needs"
                - "Record glove sizes and latex allergies for every clinical staff member"
                - "Move PPE stock into the rooms where it is used"
                - "Set minimum stock levels and name who reorders"
            - name: Staff immunisation and exposure records
              description: |-
                ## Purpose
                Hepatitis B status, and for some roles other immunity checks, is something the practice as employer is expected to know and record, and gaps are a common inspection finding. Building a confidential record of what each clinical staff member has been offered, and what occupational health has confirmed, protects staff and patients and settles what new starters must show.

                ## Milestones
                1. The immunisations your guidance expects for each role listed.
                2. A confidential record created showing what each staff member has been offered and their confirmed status.
                3. Staff with gaps referred to occupational health or their own doctor.
                4. A step added to recruitment so new clinical staff provide evidence before starting patient contact.

                ## Notes
                Health information is sensitive. Keep the record separate from the general personnel file, limit who can open it, and record status rather than clinical detail where you can.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A restricted-access record shows the immunisation status offered and confirmed for every clinical staff member, with each gap referred."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the immunisations your guidance expects for each clinical role"
                - "Set up a restricted-access record of each person's status"
                - "Refer every staff member with a gap to occupational health"
                - "Add immunisation evidence to the new starter checklist"
            - name: Sharps injury and blood exposure procedure
              description: |-
                ## Purpose
                A needlestick or splash is time-critical: the injured person needs first aid, a risk assessment and possibly treatment within hours, and in the moment nobody remembers who to phone. A one-page procedure on the wall of every clinical room, with the out-of-hours number already filled in, turns a frightening event into a sequence.

                ## Milestones
                1. The local service that assesses exposure injuries identified, with daytime and out-of-hours numbers.
                2. A one-page procedure covering first aid, reporting, source patient steps and follow-up.
                3. The procedure displayed in every clinical room and the staff room.
                4. An injury log started, with a reporting route to the authority if your country requires it.

                ## Notes
                The clinical decisions after an exposure belong to occupational health or the emergency department. The practice's job is to get the person there fast and record what happened.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page sharps injury procedure with working daytime and out-of-hours numbers is posted in every clinical room, and an injury log exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone occupational health to confirm who assesses exposure injuries"
                - "Write the one-page procedure with both phone numbers filled in"
                - "Laminate and post the procedure in every clinical room"
                - "Start a sharps injury log and agree who completes it"
            - name: Clinical waste streams and contractor arrangements
              description: |-
                ## Purpose
                Waste law makes the practice responsible for its waste until it is properly disposed of, even after the contractor's van leaves. Working out which streams you produce (infectious, sharps, pharmaceutical, anatomical, offensive, amalgam or cytotoxic where relevant), and having a licensed contractor with the right containers and paperwork for each, is the foundation of every waste audit.

                ## Milestones
                1. Every waste stream the practice produces listed, with the container and colour code each needs.
                2. The contractor's licence or permit checked and a copy filed.
                3. Collection frequency matched to volumes so bins are never overfull.
                4. A locked holding area for waste awaiting collection identified.

                ## Notes
                Colour codes and stream names differ by country, so follow your national waste guidance rather than a supplier's leaflet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A waste stream table names the container and contractor for every stream, with the contractor's current licence on file and a locked holding area in use."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every type of waste each room produces"
                - "Match each stream to its container and colour code"
                - "Ask the contractor for a copy of their current licence"
                - "Choose and lock a holding area for waste awaiting collection"
            - name: Spill kits and body fluid spill procedure
              description: |-
                ## Purpose
                Blood, vomit and urine spills happen in waiting rooms and corridors as well as treatment rooms, and staff with no kit improvise with paper towels and the wrong disinfectant. Placing spill kits where spills happen, with a laminated method card and a reorder routine, means the first person on the scene can deal with it safely.

                ## Milestones
                1. Spill kits placed in each clinical area and the reception or waiting area.
                2. A method card in each kit following the product manufacturer's instructions.
                3. Every staff member shown where the kits are and how to use one.
                4. A rule that a used kit is replaced the same day.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Spill kits with method cards are in every clinical area and reception, and all staff have been shown how to use them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide where spills are most likely and place a kit in each spot"
                - "Write a method card from the spill product's instructions"
                - "Show every staff member where the kits are kept"
                - "Add spill kits to the stock reorder list"
            - name: Cleaning schedule and sign-off by area
              description: |-
                ## Purpose
                Cleaning that is not written down is cleaning that cannot be proved, and cleaning that is not scheduled is cleaning that gets skipped on a busy Friday. A schedule naming each area, task, frequency and who does it, with a sign-off sheet in each room, is the backbone of environmental hygiene and the first thing auditors check.

                ## Milestones
                1. A schedule listing every area, the tasks, frequency and the responsible person or contractor.
                2. Between-patient, daily, weekly and periodic tasks separated clearly.
                3. A sign-off sheet posted in each clinical room.
                4. Sign-off sheets reviewed each week and gaps followed up.

                ## Notes
                Start from the **Operational checklist** template. Higher-risk rooms from your risk assessment get the higher frequencies.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each clinical room has a posted cleaning schedule and a sign-off sheet, and the weekly review shows no unsigned days for a full month."
                cadence: rolling
              tasks:
                - "Write the cleaning tasks and frequency for each area"
                - "Post a sign-off sheet in every clinical room"
                - "Check every room's cleaning sign-off sheet for gaps @recurring(weekly:fri)"
                - "Raise any repeated gaps with the person or contractor responsible"
            - name: Colour-coded cleaning equipment system
              description: |-
                ## Purpose
                Mops and cloths that move from the toilet to the treatment room carry exactly what you are trying to remove. A colour code for cloths, mops and buckets by area, with separate storage, is cheap, easy to teach to new cleaners and visible to an inspector at a glance.

                ## Milestones
                1. A colour assigned to each area type, following your national code where one exists.
                2. Cloths, mops and buckets bought in those colours.
                3. Separate storage for each colour so equipment does not mix.
                4. A colour chart posted in the cleaner's cupboard.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All cleaning equipment is colour coded by area, stored separately, and a colour chart is posted where cleaners collect their kit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your country has a standard cleaning colour code"
                - "Assign a colour to toilets, clinical rooms, kitchen and general areas"
                - "Buy cloths, mop heads and buckets in each colour"
                - "Post the colour chart inside the cleaning cupboard"
            - name: Steriliser daily and periodic test log
              description: |-
                ## Purpose
                An autoclave that looks fine can fail to reach the conditions that kill organisms, and the only proof it did is the record. Running and logging the start-of-day test, the periodic tests the manufacturer and your guidance require, and the annual validation by an engineer means every cycle can be traced if a question is ever asked.

                ## Milestones
                1. The tests required for your steriliser type listed from the manual and national guidance.
                2. A log sheet or digital record for each steriliser.
                3. Start-of-day tests recorded every working day, with a rule that a failed test stops use.
                4. Annual servicing, validation and any pressure vessel inspection booked and certificates filed.

                ## Notes
                If a test fails, do not use the steriliser and do not release loads processed since the last pass until the lead has decided what to do. See the project on responding to a failed steriliser test.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every working day for the last three months has a recorded start-of-day steriliser test, and the current validation certificate is on file."
                cadence: rolling
              tasks:
                - "List the daily, weekly and periodic tests from the steriliser manual"
                - "Run and record the start-of-day steriliser test before first use @recurring(daily)"
                - "Run the weekly steriliser test and file the printout @recurring(weekly:mon)"
                - "Book the annual steriliser validation and file the certificate"
            - name: Instrument decontamination cycle and traceability
              description: |-
                ## Purpose
                Reusable instruments go through cleaning, inspection, packaging, sterilisation and storage, and a slip at any stage defeats the rest. Writing down each stage as it is done in your practice, and tracing each pack to the cycle that processed it, means a recall can name the patients affected instead of all of them.

                ## Milestones
                1. Each stage of the instrument cycle written as a short work instruction.
                2. Instruments inspected under magnification or good light after cleaning, with a rule for damaged items.
                3. Every pack labelled with the steriliser, cycle number and date.
                4. Pack details recorded against the patient or appointment where your guidance expects it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Work instructions cover every stage of the instrument cycle, and a sample of ten packs can each be traced to a cycle and a patient."
                cadence: rolling
              tasks:
                - "Write a work instruction for each stage of the instrument cycle"
                - "Label every pack with steriliser, cycle number and date"
                - "Record pack labels in the patient notes for each procedure"
                - "Trace five random packs back to their cycle and patient @recurring(monthly:18)"
            - name: Sterile stock storage and rotation
              description: |-
                ## Purpose
                Packs stored on the floor, crushed in drawers or kept years past their use-by lose their sterility without anyone opening them. A monthly check of sterile storage, with first in first out rotation and a rule for damaged or wet packs, keeps stock usable and cuts waste.

                ## Milestones
                1. Sterile stock stored off the floor, away from sinks and in closed cupboards or drawers.
                2. Packs arranged so the oldest is used first.
                3. A rule that torn, wet or dropped packs are reprocessed or discarded.
                4. Monthly checks recorded with expired items removed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly sterile storage check is recorded for six months running with no expired or damaged packs found in use areas."
                cadence: rolling
              tasks:
                - "Move any sterile stock off the floor and away from sinks"
                - "Rearrange packs so the oldest sit at the front"
                - "Check every sterile cupboard for expired or damaged packs @recurring(monthly:12)"
                - "Note what was removed so you can reduce over-ordering"
            - name: Waste segregation checks and consignment notes
              description: |-
                ## Purpose
                Consignment or transfer notes are the paper trail showing your waste went where it should, and inspectors and waste regulators may ask for several years of them. A monthly look inside bins for segregation errors, and a filing habit for every collection note, catches problems before they turn into a fine.

                ## Milestones
                1. A folder or digital store for collection notes, organised by year.
                2. Every collection's note filed within a week.
                3. A monthly spot check of bin contents in each clinical room.
                4. Segregation errors fed back to the team in the next staff meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Collection notes are filed for every pickup in the last twelve months, and monthly segregation spot checks are recorded."
                cadence: rolling
              tasks:
                - "Set up a yearly folder for waste collection notes"
                - "File this month's waste collection notes and check none are missing @recurring(monthly:20)"
                - "Spot check the contents of clinical waste bins in each room"
                - "Share any segregation mistakes at the next staff meeting"
            - name: Monthly hand hygiene observation audit
              description: |-
                ## Purpose
                Observed hand hygiene is almost always lower than staff believe, and the gap is usually at a few predictable moments, such as after touching the patient's surroundings. Observing a set number of opportunities each month and charting the result gives the team a number to improve and shows inspectors the habit is checked.

                ## Milestones
                1. A short observation form based on the recognised moments for hand hygiene.
                2. Two or three observers trained to use it the same way.
                3. A set number of observations recorded each month across clinical staff.
                4. Results charted and shared with the team, with the weakest moment named.

                ## Notes
                Start from the **Metrics log** template. Rotate observers so staff are not always watched by the same person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hand hygiene compliance is recorded each month for six consecutive months, with results shared at staff meetings."
                cadence: rolling
              tasks:
                - "Make a one-page observation form using the hand hygiene moments"
                - "Train two observers to score the same way"
                - "Record twenty hand hygiene observations across clinical staff @recurring(monthly:8)"
                - "Chart the monthly score and share it with the team"
            - name: Sharps bin placement and replacement routine
              description: |-
                ## Purpose
                Overfilled sharps bins cause injuries, and bins left open on the floor are reachable by children and pets. Placing bins at the point of use, filling no further than the fill line, labelling them when assembled and closing them by the date your guidance sets keeps the most common injury in a clinic from happening.

                ## Milestones
                1. A sharps bin of the right size within reach at every point where sharps are used.
                2. Bins mounted or on stable surfaces, out of reach of children and animals.
                3. Each bin labelled with the date assembled and the room.
                4. A monthly check for fill level, temporary closure and age.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every sharps bin is labelled, mounted at point of use and below its fill line, confirmed by monthly checks for six months."
                cadence: rolling
              tasks:
                - "Move every sharps bin to the point of use and mount it"
                - "Label each bin with the assembly date and room"
                - "Check fill lines, closures and dates on every sharps bin @recurring(monthly:15)"
                - "Order spare bins so a full one is always replaced the same day"
            - name: Water outlet flushing and temperature checks
              description: |-
                ## Purpose
                Little-used taps, showers and stored water can grow Legionella and other organisms, and practices with a staff shower or unused treatment room are more exposed than they realise. Following the water risk assessment with weekly flushing of rarely used outlets and monthly temperature checks keeps the record a landlord, insurer or inspector may ask for.

                ## Milestones
                1. A water risk assessment obtained from the landlord or commissioned from a competent person.
                2. Rarely used outlets identified and listed.
                3. Weekly flushing of those outlets recorded.
                4. Monthly hot and cold temperature checks at sentinel outlets recorded.

                ## Notes
                The safe temperatures and flushing method come from your water risk assessment and national guidance. Do not invent them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current water risk assessment is on file, and flushing and temperature records cover the last three months without gaps."
                cadence: rolling
              tasks:
                - "Ask the landlord for the building's water risk assessment"
                - "List every outlet used less than once a week"
                - "Flush the rarely used outlets and log it @recurring(weekly:wed)"
                - "Record hot and cold temperatures at the sentinel outlets @recurring(monthly:5)"
            - name: Between-patient cleaning of shared equipment
              description: |-
                ## Purpose
                Shared items such as blood pressure cuffs, couches, otoscopes, pulse oximeters, keyboards and ultrasound probes move from patient to patient faster than any room is cleaned. A register of shared equipment with the cleaning method and product for each, plus a spot check, closes a gap the room schedule misses.

                ## Milestones
                1. A register of every piece of shared patient equipment in each room.
                2. The cleaning method and compatible product for each item, taken from the manufacturer's instructions.
                3. Cleaning wipes or products kept beside the equipment that needs them.
                4. Monthly spot checks recorded against the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared equipment register lists a cleaning method for every item, and monthly spot checks are recorded for six months."
                cadence: rolling
              tasks:
                - "Walk each room and list every item touched by more than one patient"
                - "Look up the manufacturer's cleaning method for each item"
                - "Put compatible wipes beside the equipment that needs them"
                - "Spot check five shared items for cleanliness and record it @recurring(monthly:25)"
            - name: Quarterly infection prevention meeting
              description: |-
                ## Purpose
                Three months is long enough for audit scores, injuries, near misses and supply problems to pile up, and short enough to fix them while they are fresh. A forty-minute meeting with a fixed agenda, attended by the lead, a clinician and whoever runs cleaning and stock, turns the logs into decisions.

                ## Milestones
                1. A fixed agenda covering audit results, incidents, training, supplies and actions.
                2. Meetings held each quarter with short minutes.
                3. Actions carried forward with an owner until closed.
                4. A summary of each meeting shared with all staff.

                ## Notes
                Keep minutes as a plain list of decisions and actions; nobody reads long minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly infection prevention meetings have minutes and an action list in which every action has an owner and status."
                cadence: cyclic
              tasks:
                - "Write a fixed one-page agenda for the meeting"
                - "Hold the quarterly infection prevention meeting and circulate minutes @recurring(quarterly)"
                - "Carry open actions forward until each is closed"
                - "Share a short summary with all staff after each meeting"
            - name: Annual infection prevention audit
              description: |-
                ## Purpose
                Once a year the whole system needs checking against a recognised audit tool, not just the parts that have monthly logs. A full audit covering environment, hand hygiene, PPE, sharps, waste, decontamination and training produces a score, a list of gaps and a dated statement of compliance that most regulators expect to see.

                ## Milestones
                1. A recognised audit tool for your profession chosen and saved.
                2. The audit completed room by room with evidence noted.
                3. A score and a list of gaps recorded.
                4. An action plan written and the annual statement signed by the lead and owner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A completed annual audit with a score, gap list, action plan and signed statement is filed and dated within the last twelve months."
                cadence: cyclic
              tasks:
                - "Find the recognised audit tool your profession or regulator uses"
                - "Run the full annual infection prevention audit with the lead @recurring(yearly)"
                - "Write an action plan for every gap the audit found"
                - "Sign and file the annual infection prevention statement"
            - name: Infection prevention lead training course
              description: |-
                ## Purpose
                Leading infection prevention needs more than the annual update the rest of the team receives: the lead must read guidance, design audits and judge what to do when a test fails. A recognised lead or link practitioner course, chosen for your profession, gives that confidence and is evidence of competence at inspection.

                ## Milestones
                1. Two or three courses for infection prevention leads compared on content, format and cost.
                2. A course booked with study time agreed.
                3. The course completed and the certificate filed.
                4. Three changes to the practice's arrangements proposed from what was learned.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The infection prevention lead holds a certificate from a recognised lead course and has proposed three written changes from it."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare three infection prevention lead courses for your profession"
                - "Book the course and agree study time with the owner"
                - "File the certificate in the training records"
                - "Write three changes to propose at the next infection prevention meeting"
            - name: New starter infection prevention induction
              description: |-
                ## Purpose
                New clinical and support staff copy whatever they see on their first day, good or bad. A short structured induction covering the policy, hand hygiene, PPE, sharps, spills, waste and who the lead is, signed off before they see patients alone, means habits start correctly and the training record is complete from day one.

                ## Milestones
                1. An induction checklist covering eight core topics.
                2. A practical hand hygiene and PPE demonstration included.
                3. The checklist signed by the new starter and the lead before unsupervised patient contact.
                4. Locums and agency staff given a shortened version.

                ## Notes
                Start from the **Training program** template. Cleaners employed by a contractor need the colour code, spill and waste parts too.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An induction checklist exists and every staff member who started in the last six months has a signed copy on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft an induction checklist covering eight core topics"
                - "Add a practical hand hygiene and PPE demonstration"
                - "Make a short version for locums and agency staff"
                - "Check every recent starter has a signed induction on file"
            - name: Annual staff infection prevention update
              description: |-
                ## Purpose
                Refresher training once a year is what most guidance expects, and without a date in the calendar it quietly slips to eighteen months. A yearly session or online module for every staff member, tailored to their role and recorded, keeps knowledge current and keeps the training matrix green.

                ## Milestones
                1. A training matrix listing every staff member and their last update date.
                2. A session or module chosen for clinical and non-clinical roles.
                3. Every staff member trained within twelve months, with certificates filed.
                4. Lessons from the year's audits and incidents added to the session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The training matrix shows every staff member completed an infection prevention update within the last twelve months."
                cadence: cyclic
              tasks:
                - "Build a matrix of staff and their last update date"
                - "Choose a session or module for clinical and non-clinical staff"
                - "Run the annual infection prevention update for every staff member @recurring(yearly)"
                - "Add the year's audit findings to the session content"
            - name: Glove use and hand hygiene technique practice
              description: |-
                ## Purpose
                Most hand hygiene failures are technique, not intent: thumbs and fingertips missed, gloves worn between patients or kept on to answer the phone. A short practical session with an ultraviolet light box or fluorescent gel shows each person where they miss, and a follow-up observation shows whether it stuck.

                ## Milestones
                1. A UV light box or fluorescent gel kit borrowed or bought.
                2. Every clinical staff member tested once with results noted privately.
                3. Common misses and glove misuse discussed as a team.
                4. A repeat test a month later showing improvement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every clinical staff member has had a UV technique test and a repeat test one month later, with the team's common misses recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Borrow or buy a UV light box and fluorescent gel"
                - "Test each clinical staff member's hand washing technique"
                - "Discuss the common misses and glove habits as a team"
                - "Repeat the test a month later and compare"
            - name: Learning the decontamination standards for your profession
              description: |-
                ## Purpose
                National decontamination guidance for dentistry, general practice, veterinary work and others sets the expected method and records, and inspectors measure you against it. Reading the relevant document properly, with notes on where your practice meets it, is the knowledge every other decontamination project depends on.

                ## Milestones
                1. The current national decontamination guidance for your profession identified.
                2. The guidance read with notes on each requirement.
                3. Each requirement marked as met, partly met or not met in your practice.
                4. The partly and not met items added to the risk register.

                ## Notes
                Some guidance has a basic and a best-practice level. Note which one your regulator expects and which you are aiming for.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A gap analysis against the current national decontamination guidance marks every requirement as met, partly met or not met."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the current national decontamination guidance for your profession"
                - "Read it and note each requirement in a simple table"
                - "Mark each requirement met, partly met or not met"
                - "Add the gaps to the infection risk register"
            - name: Aseptic technique for minor procedures
              description: |-
                ## Purpose
                Aseptic technique for wound care, minor surgery, injections and catheter care is easy to teach in principle and easy to drift from in practice. Agreeing one method for each procedure the practice does, then watching each clinician perform it once a year, makes technique consistent and gives evidence of competence.

                ## Milestones
                1. The procedures needing aseptic technique listed.
                2. A recognised method chosen and written for each.
                3. Each clinician observed performing a procedure with a short checklist.
                4. Competence sign-offs filed with a yearly repeat date.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every clinician performing listed procedures has a dated aseptic technique competence sign-off from the last twelve months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every procedure in the practice that needs aseptic technique"
                - "Write the agreed method for each as a short checklist"
                - "Observe each clinician performing one procedure"
                - "File the competence sign-offs with a repeat date"
            - name: Reception triage of possibly infectious patients
              description: |-
                ## Purpose
                Reception is where a patient with a rash, a severe cough or diarrhoea first meets the practice, and where a few questions can keep them out of a crowded waiting room. Training front desk staff on what to ask, where to seat or redirect patients and when to alert a clinician protects other patients and staff.

                ## Milestones
                1. A short list of screening questions for booking and arrival.
                2. A place to seat a possibly infectious patient away from others, or an arrangement to wait outside.
                3. Reception staff trained and given a laminated prompt card.
                4. Booking scripts updated so patients with symptoms are told what to do before arriving.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reception staff have been trained, a prompt card is on the desk, and booking scripts include symptom screening questions."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write five screening questions for booking and arrival"
                - "Choose where a possibly infectious patient will wait"
                - "Train reception staff and give them a prompt card"
                - "Add symptom questions to the phone booking script"
            - name: Choosing a replacement steriliser or washer-disinfector
              description: |-
                ## Purpose
                Replacing an ageing autoclave or adding a washer-disinfector is a five-figure decision that shapes your workflow for a decade. Comparing models on cycle type, capacity, validation support, data logging and service cover, rather than on price alone, avoids a machine that cannot process your instruments or record what it did.

                ## Milestones
                1. Your instrument types, daily load and room space written as requirements.
                2. Three models compared on cycle type, capacity, data logging and service terms.
                3. Installation, validation and training costs included in each quote.
                4. A decision recorded with the reasons and a planned installation date.

                ## Notes
                Start from the **Purchase decision** template. Check that the cycle type is suitable for hollow or wrapped instruments if you use them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three models against your requirements ends in a recorded choice with total installed cost."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down instrument types, daily load and space available"
                - "Request quotes for three models including validation and service"
                - "Compare cycle types, logging and service cover side by side"
                - "Record the choice and the reasons"
            - name: Single-use versus reusable instruments decision
              description: |-
                ## Purpose
                Reusable instruments need cleaning, inspection, packaging, sterilising and tracking, while single-use ones cost more per item and create more waste. Working out the true cost per use for your highest-volume instruments, including staff time and steriliser wear, settles which to switch and which to keep.

                ## Milestones
                1. The ten most-used instruments listed with monthly volumes.
                2. Cost per use calculated for reusable and single-use options, including staff time.
                3. Waste and storage implications noted for each.
                4. A decision recorded per instrument and stock adjusted.

                ## Notes
                Single-use means single use. Reprocessing a device labelled single-use is a common inspection failure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cost per use comparison for the ten most-used instruments ends in a recorded keep or switch decision for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ten most-used instruments with monthly volumes"
                - "Time one full reprocessing cycle to cost staff time"
                - "Work out cost per use for reusable and single-use versions"
                - "Record keep or switch for each instrument"
            - name: Decontamination room dirty to clean flow review
              description: |-
                ## Purpose
                Dirty instruments should move one way, from receiving to washing to inspection to sterilising to clean storage, without crossing clean items. Mapping how instruments actually move in your room, often against the original design, shows where a bench, sink or steriliser needs to move.

                ## Milestones
                1. The current flow drawn on a plan of the room.
                2. Every point where dirty and clean items cross marked.
                3. Changes listed, from relabelling zones to moving equipment.
                4. Zones marked on benches and the new flow in use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A room plan shows a one-way dirty to clean flow with marked zones, and an observed cycle follows it without crossovers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Watch one full instrument cycle and draw the route on a plan"
                - "Mark every point where dirty and clean items cross"
                - "List the changes needed and their cost"
                - "Mark dirty and clean zones on the benches"
            - name: In-house cleaning versus contract cleaners
              description: |-
                ## Purpose
                Contract cleaners often arrive after hours, change frequently and may never have been trained on clinical areas, while in-house cleaners cost more to employ and cover. Comparing the two on cost, consistency, training and supervision, and writing a specification either way, puts the cleaning standard in your hands.

                ## Milestones
                1. A cleaning specification written from the cleaning schedule.
                2. Costs compared for in-house staff and two contractors.
                3. Training, supervision and cover arrangements compared.
                4. A decision recorded and the specification attached to the contract or job description.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cleaning specification is attached to either a signed contractor agreement or a cleaner's job description, with the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Turn the cleaning schedule into a written specification"
                - "Get quotes from two contractors against the specification"
                - "Cost an in-house cleaner including cover and training"
                - "Record the decision and attach the specification"
            - name: Uniform, laundry and bare below the elbows rules
              description: |-
                ## Purpose
                Uniforms, scrubs and reusable gowns carry organisms home and back if they are washed at the wrong temperature or worn on the bus. A short dress code covering what is worn in clinical areas, jewellery, nails and sleeves, how uniforms are laundered and how many sets each person needs settles arguments and is easy to audit.

                ## Milestones
                1. A dress code for clinical areas covering sleeves, jewellery, nails and hair.
                2. A laundering rule for uniforms, either at home with guidance or through a laundry service.
                3. Enough uniform sets issued for a clean one every shift.
                4. The code added to induction and audited once a quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written dress code and laundering rule is in the policy, and every clinical staff member has enough sets for a daily change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page dress code for clinical areas"
                - "Decide between home laundering guidance and a laundry service"
                - "Count uniform sets per person and order the shortfall"
                - "Add the dress code to the induction checklist"
            - name: Ventilation and air quality review for clinical rooms
              description: |-
                ## Purpose
                Air changes matter for procedures that generate aerosols, for respiratory patients in waiting rooms and for rooms with no opening window. Finding out what ventilation each room actually has, and whether it meets the guidance for what happens there, tells you whether to change procedures, add equipment or adjust the time a room stands empty between patients.

                ## Milestones
                1. Each clinical room's ventilation type recorded: natural, mechanical or none.
                2. Advice obtained from a ventilation engineer or the building manager for rooms with aerosol procedures.
                3. Any fallow time between patients set from that advice.
                4. Improvements costed for rooms that fall short.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A room-by-room ventilation record exists with engineer or building manager advice for aerosol rooms and any fallow times written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the ventilation type for every clinical room"
                - "Ask the building manager for any ventilation test data"
                - "Book a ventilation engineer for rooms used for aerosol procedures"
                - "Write fallow times into the room booking rules"
            - name: Fixing the gaps from the annual audit
              description: |-
                ## Purpose
                Findings that sit in an audit report for a year, then reappear in the next one, are what inspectors criticise most. Turning each finding into an action with an owner, a budget and a date, and checking progress monthly, closes the loop and gives evidence of improvement.

                ## Milestones
                1. Every audit finding listed as an action with an owner and date.
                2. Actions needing spend costed and approved by the owner.
                3. Progress checked each month until all are closed.
                4. Closed actions confirmed by a spot recheck.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every finding from the last annual audit has an owner and date, and at least 80 percent are closed and rechecked within ninety days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every audit finding as an action with an owner"
                - "Cost the actions that need spending and get approval"
                - "Review open audit actions with each owner @recurring(monthly:22)"
                - "Recheck each closed action before marking it done"
            - name: Moving infection prevention logs from paper to digital
              description: |-
                ## Purpose
                Paper logs go missing, get filled in from memory at the end of the week and are slow to search when an inspector asks for March. A digital log, whether a shared spreadsheet, a compliance app or steriliser data loggers, can timestamp entries and flag gaps, but only if staff will use it on a busy day.

                ## Milestones
                1. Every current paper log listed with who fills it in and how often.
                2. Two or three digital options compared on cost, ease of use and timestamping.
                3. One log piloted digitally for a month.
                4. A decision recorded on which logs move and how old paper records are kept.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month-long pilot of one digital log is completed and a recorded decision names which logs move and how paper records are archived."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every paper infection prevention log in use"
                - "Compare three digital options on cost and timestamping"
                - "Pilot one log digitally for a month"
                - "Decide which logs move and how paper is archived"
            - name: Preparing for an infection control inspection
              description: |-
                ## Purpose
                Inspection visits often give little notice, and the evidence an inspector wants is scattered across folders, machines and people's heads. Assembling one evidence pack of policy, risk assessment, logs, audits, training records and contractor paperwork, and doing a mock walk-round, means the visit tests your practice rather than your filing.

                ## Milestones
                1. An evidence index listing every document an inspector may ask for, with its location.
                2. Missing or out-of-date documents found and fixed.
                3. A mock walk-round by someone from outside the team.
                4. Staff briefed on the questions they may be asked.

                ## Notes
                Most practices do well with a single indexed folder rather than a new system. Keep it where two people can open it, not only the lead.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An indexed evidence pack is complete and a mock walk-round has been carried out, with its findings fixed before the inspection."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write an index of the documents an inspector may ask for"
                - "Find and update anything missing or out of date"
                - "Ask a colleague from another practice to do a mock walk-round"
                - "Brief staff on likely questions about hand hygiene, sharps and spills"
            - name: Outbreak response plan and tabletop rehearsal
              description: |-
                ## Purpose
                Outbreaks of norovirus, influenza or a newly notifiable infection can close rooms, take out half the staff and bring calls from the public health authority within days. A short plan for spotting a cluster, who to notify, how to change cleaning and booking, and how to keep running, rehearsed once around a table, makes the first day calmer.

                ## Milestones
                1. The local public health contact and notification duties for your profession written down.
                2. A plan covering detection, notification, enhanced cleaning, staff exclusion and patient communication.
                3. A one-hour tabletop exercise held with the lead, a clinician and reception.
                4. The plan updated with what the exercise showed.

                ## Notes
                Which diseases are notifiable, and by whom, is set by law in your country. Check the current list with the public health authority.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written outbreak plan exists and a tabletop rehearsal has been held, with at least one change made to the plan from it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the public health contact and your notification duties"
                - "Ask the agent to draft an outbreak plan outline for review"
                - "Run a one-hour tabletop exercise around a norovirus scenario"
                - "Update the plan with what the exercise exposed"
            - name: Winter respiratory season readiness
              description: |-
                ## Purpose
                Each winter brings flu and other respiratory viruses, more coughing patients in the waiting room and more staff off sick at once. A yearly check of masks and hand rub stock, waiting room spacing, staff vaccination offers and the sickness cover plan, done before the season starts, avoids scrambling in the first busy week.

                ## Milestones
                1. Stock levels of masks, hand rub and tissues raised before the season.
                2. Staff told how to get a seasonal vaccination and uptake recorded.
                3. Waiting room arrangements and signage reviewed for respiratory patients.
                4. A sickness cover plan agreed for the season.

                ## Notes
                In tropical and Caribbean settings, respiratory seasons often follow the rainy season rather than winter, so set the timing by your local pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A pre-season checklist is completed each year, covering stock, staff vaccination offers, waiting room set-up and sickness cover."
                cadence: cyclic
              tasks:
                - "Check the timing of the respiratory season where you practise"
                - "Run the pre-season respiratory readiness checklist @recurring(yearly)"
                - "Raise stock levels of masks, hand rub and tissues"
                - "Agree sickness cover with clinicians before the season starts"
            - name: Responding to a failed steriliser test
              description: |-
                ## Purpose
                When a steriliser fails a test, the questions arrive at once: which loads are affected, have they been used, which patients and who must be told. Writing the response procedure before it happens, including stopping use, quarantining loads, tracing patients and deciding with professional advice whether to notify anyone, turns a crisis into a checklist.

                ## Milestones
                1. A written procedure covering stop, quarantine, trace, assess and notify.
                2. The engineer's emergency number and loan machine arrangements recorded.
                3. Traceability confirmed as good enough to name affected packs and patients.
                4. The procedure walked through with decontamination staff.

                ## Notes
                Whether patients need to be contacted is a clinical and sometimes regulatory decision. Take advice from your indemnity provider and regulator before acting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written failed-test procedure is posted in the decontamination room, and a dry run shows affected packs and patients can be traced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the stop, quarantine, trace, assess and notify steps"
                - "Record the engineer's emergency number and loan machine terms"
                - "Dry run a trace of last week's loads to their patients"
                - "Walk decontamination staff through the procedure"
            - name: Dental surgery decontamination and waterline routine
              description: |-
                ## Purpose
                Dental practices carry some of the heaviest decontamination load of any practice: handpieces, aerosols, dental unit waterlines and amalgam waste all need their own controls. A dental-specific routine covering zoning in each surgery, waterline treatment and testing, handpiece care and suction cleaning keeps the surgery safe and matches what dental inspectors look for.

                ## Milestones
                1. Each surgery zoned into clean and dirty areas with the zones marked.
                2. A waterline treatment method chosen from the unit manufacturer's instructions, with periodic testing booked.
                3. Handpiece cleaning, lubrication and sterilisation steps written.
                4. End-of-day suction and spittoon cleaning added to the surgery checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every surgery is zoned, waterline test results are on file for the last six months, and end-of-session checklists are signed daily."
                cadence: rolling
              tasks:
                - "Mark clean and dirty zones on each surgery's worktops"
                - "Confirm the waterline treatment method with the unit manufacturer"
                - "Send a dental unit waterline sample for testing @recurring(quarterly)"
                - "Add suction and spittoon cleaning to the end-of-session checklist"
            - name: Veterinary practice hygiene and zoonosis controls
              description: |-
                ## Purpose
                Veterinary practices face infections that pass between animals and from animals to people, including parvovirus, ringworm, leptospirosis and resistant bacteria. Setting up isolation for infectious cases, kennel and table cleaning between patients, and staff protection against zoonoses keeps hospitalised animals and the team safe.

                ## Milestones
                1. An isolation area or procedure for animals suspected of infectious disease.
                2. Cleaning and disinfection steps for consult tables, kennels and theatre, following product instructions.
                3. Zoonosis risks listed with staff protection for each.
                4. Footwear, clothing and equipment rules for isolation cases.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An isolation procedure, kennel and table cleaning steps and a zoonosis risk list are written and in use, confirmed by one observed isolation case."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose an isolation area or a procedure for infectious cases"
                - "Write cleaning steps for tables, kennels and theatre"
                - "List zoonosis risks and the protection staff use for each"
                - "Set clothing and equipment rules for isolation cases"
            - name: Physiotherapy clinic and rehab gym hygiene
              description: |-
                ## Purpose
                Physiotherapy clinics touch more skin and share more equipment than most practices: couches, pillows, exercise mats, weights, acupuncture needles and sometimes a hydrotherapy pool. A hygiene routine built around shared equipment, couch roll and linen, needle handling and pool water testing where you have one fits how a rehab clinic actually runs.

                ## Milestones
                1. Couch roll or linen changed between every patient, with the rule written down.
                2. Gym equipment and mats cleaned on a schedule, with wipes beside them.
                3. Acupuncture and dry needling sharps handling written into the sharps procedure.
                4. Pool water testing and records arranged, if the clinic has a pool.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules cover couch linen, gym equipment cleaning and needle handling, and any pool has a current water test record."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the couch roll and linen change rule"
                - "Put wipes beside the gym equipment and schedule a daily clean"
                - "Add acupuncture needle handling to the sharps procedure"
                - "Book pool water testing if the clinic has a pool"
            - name: Optometry contact lens and tonometer hygiene
              description: |-
                ## Purpose
                Contact tonometer prisms, trial contact lenses, slit lamp chin rests and frame displays all touch patients' eyes or faces, and eye infections can spread quickly through a busy practice. Deciding which items are single use, how reusable ones are disinfected and how trial lenses are handled covers the main risks an optometry practice faces.

                ## Milestones
                1. A list of every item that touches patients' eyes or faces.
                2. A decision for each: single use, or reusable with a manufacturer-approved disinfection method.
                3. Trial contact lens handling and disposal written down.
                4. Chin rests and frames wiped between patients, with a sign-off in each room.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every eye or face contact item has a recorded single-use or disinfection decision, and room sign-offs show wiping between patients."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every item that touches patients' eyes or faces"
                - "Decide single use or approved disinfection for each item"
                - "Write trial contact lens handling and disposal steps"
                - "Add chin rest and frame wiping to each room's sign-off"
            - name: Pharmacy consultation room and vaccination hygiene
              description: |-
                ## Purpose
                Pharmacies offering vaccinations, blood tests, wound care or ear syringing have turned a consultation room into a clinical room, often without its infection prevention catching up. A routine covering hand hygiene, sharps, a spill kit, surface cleaning between clients and clinical waste from services brings the room up to the standard the services need.

                ## Milestones
                1. The consultation room checked for a hand basin or hand rub, sharps bin and spill kit.
                2. Surface cleaning between clients written into the service procedures.
                3. Clinical waste from services separated from shop waste with its own collection.
                4. Pharmacists and staff delivering services trained and recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The consultation room has hand hygiene, sharps and spill provision, a written between-client cleaning step and a separate clinical waste collection."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the consultation room for hand hygiene, sharps and spill kit"
                - "Add between-client surface cleaning to each service procedure"
                - "Arrange a separate clinical waste collection for services"
                - "Record infection prevention training for staff delivering services"
            - name: Infection prevention for a single-room practice
              description: |-
                ## Purpose
                Solo practitioners working from one treatment room, a shared clinic or a rented session have no lead to delegate to and no separate decontamination room. A scaled-down approach, with one combined policy and risk assessment, single-use instruments where they make sense, a contracted sterilisation service and a short weekly self-check, keeps standards without a team.

                ## Milestones
                1. A combined two-page policy and risk assessment written for the one room.
                2. A decision on single-use instruments or an off-site sterilisation service.
                3. Responsibilities agreed in writing with the landlord or host clinic for cleaning and waste.
                4. A weekly ten-minute self-check in use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page policy and risk assessment exist, cleaning and waste duties are agreed in writing with the host, and weekly self-checks are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a combined two-page policy and risk assessment"
                - "Decide between single-use instruments and an off-site sterilisation service"
                - "Agree cleaning and waste duties in writing with the host clinic"
                - "Do the ten-minute infection prevention self-check @recurring(weekly:thu)"
            - name: Surgical site infection surveillance
              description: |-
                ## Purpose
                Tracking infections after minor surgery, extractions, implants or veterinary operations is how an experienced practice knows whether its controls work, rather than assuming they do. A simple surveillance routine, asking about wound problems at follow-up and recording each case, gives a rate to compare year on year and an early warning of a problem.

                ## Milestones
                1. The procedures to be tracked chosen and a definition of infection agreed with clinicians.
                2. A question about wound problems added to follow-up calls or reviews.
                3. Every suspected infection logged with procedure, date and operator.
                4. An infection rate calculated each quarter and reviewed at the infection prevention meeting.

                ## Notes
                Rates on small numbers jump around. Look at trends over a year and investigate individual cases rather than reacting to one bad quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A surveillance log covers every tracked procedure for twelve months, with a quarterly infection rate reported at the infection prevention meeting."
                cadence: rolling
              tasks:
                - "Agree which procedures to track and a definition of infection"
                - "Add a wound problem question to follow-up calls"
                - "Log every suspected post-procedure infection"
                - "Calculate and report the post-procedure infection rate @recurring(quarterly)"
            - name: High-level disinfection of probes and scopes
              description: |-
                ## Purpose
                Semi-critical devices such as intracavity ultrasound probes, nasendoscopes and some veterinary scopes cannot go in an autoclave and need high-level disinfection, which is where many practices still rely on a wipe and hope. Choosing a validated method, training the people who use it and recording every cycle against the patient brings these devices into the same traceability as instruments.

                ## Milestones
                1. Every semi-critical device listed with its manufacturer's approved reprocessing method.
                2. A validated disinfection system chosen for each.
                3. Staff trained and signed off on the method.
                4. Each disinfection cycle recorded against the device and patient.

                ## Notes
                Use only methods the device manufacturer approves. The wrong product can damage the probe and void its warranty as well as fail to disinfect.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every semi-critical device has an approved high-level disinfection method in use, trained staff, and cycle records linked to patients."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every probe or scope that cannot be autoclaved"
                - "Find the manufacturer's approved reprocessing method for each"
                - "Choose a validated disinfection system and train its users"
                - "Start a cycle log linking each disinfection to a patient"
            - name: Consistent infection prevention across several sites
              description: |-
                ## Purpose
                Several sites drift apart quickly: one runs paper logs, another a different steriliser, a third has never seen the policy. A group lead, one shared policy with site appendices, the same audit tool and a quarterly comparison of scores lets an owner see which site needs help and spread what works.

                ## Milestones
                1. A group infection prevention lead named, with a link person at each site.
                2. One shared policy with short appendices for each site's rooms and equipment.
                3. The same audit tool used at every site.
                4. Audit and hand hygiene scores compared across sites each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site uses the shared policy and audit tool, and a quarterly cross-site comparison of scores has been produced for a year."
                cadence: rolling
              tasks:
                - "Name a group lead and a link person at each site"
                - "Merge site policies into one shared policy with appendices"
                - "Roll out the same audit tool to every site"
                - "Compare audit and hand hygiene scores across sites"
---

# Infection Prevention in Practice

Infection prevention is the part of running a clinic, dental surgery, vet practice, physio room or pharmacy consultation room that nobody notices until it fails, and then everyone does. These projects start with the foundations (a named lead, a written policy, a risk assessment, immunisation records, sharps and waste arrangements), then build the daily machinery of cleaning, sterilisation and audit, then the training, the decisions about equipment and contractors, the events you prepare for, versions for different kinds of practice, and the specialist work an experienced lead takes on.

The rhythms are a start-of-day steriliser check, weekly cleaning sign-offs and outlet flushing, monthly hand hygiene, sharps, stock and waste checks, a quarterly infection prevention meeting, and an annual audit, training update and winter readiness review. The Risk register, Operational checklist, Metrics log, Training program, Purchase decision and Remediation plan templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
