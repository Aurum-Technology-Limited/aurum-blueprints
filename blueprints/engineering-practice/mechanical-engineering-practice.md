---
id: engineering-practice.mechanical-engineering-practice
name: Mechanical Engineering Practice
description: "Mechanical engineering work as it is really done: design basis and datasheets, pump, vessel, piping and HVAC checks, vendor reviews, site tests and the step from graduate to discipline lead."
category: business
version: 1.0.0
tags: [engineering-practice, mechanical-engineering-practice, engineer, mechanical, rotating-equipment, piping, hvac, pressure-vessels]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
    - development-plan
    - skills-matrix
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Mechanical Engineering Practice
          description: "Working as a mechanical engineer: rotating and static equipment, piping and HVAC design, calculations and checks, vendor data review and growing from graduate to lead."
          projects:
            - name: Mechanical codes and handbooks reference shelf
              description: |-
                ## Purpose
                Mechanical work leans on a handful of code families again and again: ASME B31.3 and B31.1 for piping, ASME Section VIII for pressure vessels, API 610 and 617 for pumps and compressors, API 650 for tanks, TEMA for exchangers and ASHRAE for HVAC. Knowing which editions your employer holds, where they live and which ones each project specifies saves hours of hunting and stops you working from an out-of-date PDF on someone's desktop.

                ## Milestones
                1. A list of the mechanical codes and standards your employer subscribes to, with edition years.
                2. The codes named in your current project's specifications marked against that list.
                3. Two core handbooks for pump, piping and heat transfer reference chosen and kept within reach.
                4. Any code the project calls up that you cannot open raised with your discipline lead.

                ## Notes
                Code subscriptions are often licensed per user. Ask the library or document controller before passing a PDF to a colleague or contractor.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shelf list of at least ten mechanical codes and handbooks with editions and access routes, checked against the current project specifications."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the document controller which code subscriptions the company holds"
                - "List the codes called up in your current project's mechanical specifications"
                - "Mark each code with the edition the project requires"
                - "Flag any code you cannot open to your discipline lead"
                - "Recheck the shelf list for new code editions @recurring(yearly)"
            - name: Verified fluid and material property sources
              description: |-
                ## Purpose
                Wrong density, viscosity or allowable stress values are behind a surprising share of calculation errors, usually because someone copied a number from an old spreadsheet. Settling on named sources for steam tables, fluid properties, pipe dimensions and material allowable stresses, and checking a few values across two of them, means every calculation you sign starts from data you can trace.

                ## Milestones
                1. A named source chosen for steam and water properties, hydrocarbon fluid properties, pipe dimensions and material allowables.
                2. Five spot values checked across two sources, with any differences explained.
                3. A one-page sheet showing which source to use for what, with its edition or version.
                4. The sheet checked by one colleague and kept with your calculation templates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page property source sheet naming at least four sources with versions, with five recorded spot checks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the property sources your last three calculations used"
                - "Check water density and viscosity at 60 degrees C in two sources"
                - "Look up the allowable stress for A106 Grade B pipe in the project code edition"
                - "Build the one-page source sheet and ask a colleague to check it"
            - name: Mechanical section of the project design basis
              description: |-
                ## Purpose
                Design margins, ambient conditions, corrosion allowance, design life, sparing philosophy and noise limits all have to be fixed before a single datasheet is worth writing. On many projects they sit scattered across a dozen client specifications, so pulling them into one mechanical design basis agreed with the client's engineer prevents datasheets being reissued three times. In the tropics, record the high ambient temperature, humidity and salt-laden air explicitly, since they drive motor ratings, coatings and cooling margins.

                ## Milestones
                1. Every mechanical design input in the client specifications listed with its source clause.
                2. Conflicts between specifications identified and sent as technical queries.
                3. A mechanical design basis issued for review with margins, ambient data, sparing rules and design life.
                4. Client comments closed and the basis reissued for design.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A mechanical design basis issued for design, with every input traced to a specification clause or a closed technical query."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Collect every client specification that sets a mechanical design input"
                - "Tabulate design margins, ambient data, corrosion allowance and sparing rules"
                - "Raise technical queries on conflicting requirements"
                - "Issue the design basis for client review"
                - "Close the review comments and reissue the basis for design"
            - name: Mechanical equipment list and datasheet ownership
              description: |-
                ## Purpose
                On a project with eighty tagged items, the questions of who owns each datasheet, which revision is current and which vendor is quoting cost more lost days than any calculation. Building the mechanical equipment list with an owner, a datasheet number and a status for every tag gives the discipline one place to answer them.

                ## Milestones
                1. Every mechanical tag on the P&IDs listed with service, equipment type and key duty.
                2. An owner and a datasheet number assigned to each tag.
                3. Status columns showing datasheet revision, requisition stage and vendor data stage.
                4. The list reconciled against the latest P&ID revision with differences resolved.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mechanical equipment list covering every P&ID tag, each with an owner, datasheet number and status, reconciled against the latest P&IDs."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Extract every mechanical tag from the current P&ID set"
                - "Add service, equipment type and design duty for each tag"
                - "Assign an owner and datasheet number to every item"
                - "Reconcile the list against the next P&ID revision"
            - name: Hand calculation set for quick mechanical checks
              description: |-
                ## Purpose
                Software results are only trusted when someone can check them on one page: pump head and NPSH available, pipe wall thickness for pressure, line velocity and pressure drop, exchanger duty and shaft power from flow and head. Building your own worked method for each, with units and sources shown, gives you a fast sense check on vendor offers and software output, and it is often the first thing a reviewer asks to see.

                ## Milestones
                1. Six one-page worked methods covering pump head, NPSH available, wall thickness, line sizing, heat duty and shaft power.
                2. Each method tested against a real project case with a known answer.
                3. Units, assumptions and code references written on every sheet.
                4. The set reviewed by a senior mechanical engineer.

                ## Notes
                Keep these hand methods separate from the formal calculation register. They are for checking, not for issue.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six worked hand-check methods exist, each tested on a real case and reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick a recent pump datasheet and recompute its differential head by hand"
                - "Write a one-page NPSH available method with a worked case"
                - "Check one line size against the project velocity and pressure drop limits"
                - "Ask a senior engineer to review the six sheets"
            - name: Reading P&IDs, GAs and piping isometrics fluently
              description: |-
                ## Purpose
                A graduate who can read a P&ID, a general arrangement drawing and an isometric without asking is useful from the first design review. Working through one real system, from P&ID line to isometric and nozzle orientation, ties the symbols to the steel and shows how line numbers, piping classes, valves and tie-ins connect.

                ## Milestones
                1. The P&ID and piping legend sheets read and annotated.
                2. One process line traced from the P&ID to its isometrics and the equipment GA.
                3. Line number, piping class, insulation and test pressure decoded for that line.
                4. Five questions about the drawings answered by a piping designer or senior engineer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One complete line traced from P&ID through isometrics to the equipment nozzle, with its line number and class decoded and checked by a designer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Print the P&ID and piping legend sheets and annotate unfamiliar symbols"
                - "Choose one pump discharge line and find its isometrics"
                - "Decode the line number into size, fluid, piping class and insulation"
                - "Book half an hour with a piping designer to check your reading"
            - name: First site walk of a pump and exchanger train
              description: |-
                ## Purpose
                Drawings flatten things that matter: access for maintenance, where the drains really go, how hot the exchanger channel runs and how loud the compressor house is. Walking one equipment train with an operator, from suction strainer to exchanger outlet, gives you the picture that turns a drawing review into useful comments.

                ## Milestones
                1. Site induction and the walkdown permit or escort requirements completed.
                2. One equipment train walked with an operator or maintenance technician.
                3. Ten observations on access, drains, supports and maintainability recorded.
                4. Each observation compared with the GA and isometrics for that train.

                ## Notes
                Follow the site rules on photography, hearing and eye protection and escorts. A walkdown is never a reason to touch or operate equipment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written walkdown note with at least ten observations on one equipment train, each compared against its drawings."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the area supervisor for an escorted walkdown slot"
                - "Print the GA and isometrics for the equipment train"
                - "Record access, drain and support observations during the walk"
                - "Mark each observation against the drawings back in the office"
            - name: Material selection and corrosion allowance basics
              description: |-
                ## Purpose
                Carbon steel, stainless, duplex, copper-nickel and lined pipe each fail in their own way, and the choice sets cost, weight and inspection for decades. Learning how the materials engineer chose between them on your project, including sour service limits under ISO 15156, chloride cracking limits for stainless and marine atmospheric corrosion, lets you write datasheets that are not bounced back.

                ## Milestones
                1. The project material selection report or diagram read and summarised.
                2. Material and corrosion allowance for three services explained in your own words.
                3. Sour service and chloride limits relevant to the project noted with their source.
                4. Open questions resolved with the materials or corrosion engineer.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of material and corrosion allowance choices for three project services, reviewed by the materials engineer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the project material selection report or diagram"
                - "Summarise material and corrosion allowance for three services"
                - "Note the sour service and chloride limits that apply"
                - "Book a short review with the materials engineer"
            - name: Setting design pressure and temperature for equipment
              description: |-
                ## Purpose
                Design pressure and temperature decide wall thickness, flange rating and relief set point, and getting them wrong either wastes steel or leaves equipment unprotected. Working through how your project sets them, from maximum operating pressure plus margin, pump shut-off and blocked outlet cases, to minimum design metal temperature on depressurisation, gives you the reasoning a reviewer will test.

                ## Milestones
                1. The project rule for pressure and temperature margins located and understood.
                2. Design conditions for three items worked through, including pump shut-off and blocked outlet cases.
                3. Minimum design metal temperature considered for at least one item.
                4. Your values compared with the process engineer's and any differences closed.

                ## Notes
                Design conditions are agreed with process engineering. Your job is to check and apply them, not to set them alone.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Design pressure and temperature for three equipment items worked through and agreed in writing with the process engineer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the design margin rule in the project design basis"
                - "Calculate pump shut-off pressure against its downstream equipment rating"
                - "Check the minimum design metal temperature for one vessel"
                - "Agree the final design conditions with the process engineer"
            - name: Vendor document review tracker
              description: |-
                ## Purpose
                Vendor drawings, datasheets and calculations arrive in waves, and a review left for three weeks can hold up fabrication or let a wrong nozzle orientation slip through. A tracker showing every vendor document, its review code, who holds it and how long it has waited keeps turnaround inside the contract period, often ten to fifteen working days.

                ## Milestones
                1. Every open vendor document for your packages logged with received date and reviewer.
                2. One set of review codes in use, such as accepted, accepted with comments and rejected.
                3. Documents waiting beyond the contract review period highlighted each week.
                4. A monthly turnaround figure reported to the discipline lead.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All vendor documents for your packages are logged, and none sits unreviewed past the contract review period for a whole month."
                cadence: rolling
              tasks:
                - "List every vendor document currently with you for review"
                - "Confirm the review codes the project uses"
                - "Clear or chase every document older than ten working days @recurring(weekly:tue)"
                - "Send the review turnaround figure to the discipline lead @recurring(monthly:8)"
            - name: Mechanical technical query register
              description: |-
                ## Purpose
                Questions to the client, vendors and other disciplines get raised in emails, meetings and margin notes, and half are never answered on record. A register with a number, the question, the answer and its effect on design means a decision taken in month two can still be found in month fourteen, when the vendor claims a variation.

                ## Milestones
                1. A numbered register with question, addressee, date raised, answer and design impact.
                2. Open questions from email and meeting notes moved into it.
                3. Answers that change a datasheet or drawing linked to that revision.
                4. Open queries reviewed each week and overdue ones escalated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every mechanical technical query since install is numbered in one register, and none stays open beyond twenty working days without escalation."
                cadence: rolling
              tasks:
                - "Set up a numbered query register with answer and impact columns"
                - "Move open questions from email into the register"
                - "Chase or escalate every query open beyond ten working days @recurring(weekly:thu)"
                - "Link each answered query to the document revision it changed"
            - name: Pump operating point versus best efficiency point
              description: |-
                ## Purpose
                Pumps that run far from their best efficiency point suffer more seal and bearing failures and waste power. Plotting each critical pump's real flow and head on its vendor curve every month shows which machines have drifted to the edge of their preferred operating region before maintenance starts seeing the failures.

                ## Milestones
                1. Vendor performance curves for the critical pumps collected and digitised.
                2. Flow, suction and discharge pressure for each pump plotted on its curve.
                3. Pumps outside the preferred operating region listed with likely causes.
                4. Recommendations, such as an impeller change or a smaller pump, raised for the worst two.

                ## Notes
                API 610 defines preferred and allowable operating regions. Use the vendor's tested curve for the actual impeller, not a catalogue curve.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each critical pump's operating point is plotted on its curve every month, and any pump outside its preferred region appears in a written recommendation."
                cadence: rolling
              tasks:
                - "Collect the vendor test curves for the critical pumps"
                - "Pull flow and pressure readings from the plant historian"
                - "Plot each critical pump's operating point on its curve @recurring(monthly:14)"
                - "Write a short recommendation for any pump outside its preferred region"
            - name: Weekly interface check with piping, civil and electrical
              description: |-
                ## Purpose
                Most mechanical rework comes from interfaces: a nozzle load the structural engineer never saw, a motor rating that changed after the electrical load list froze, a skid that grew by two tonnes. A short weekly check of what you have sent to and received from other disciplines catches these while they still cost an email rather than a site modification.

                ## Milestones
                1. An interface list showing what mechanical owes to and expects from each discipline.
                2. Equipment weights, nozzle loads and motor data sent with revision numbers.
                3. Changes since the last check sent to the affected discipline in the same week.
                4. No interface item older than two weeks without a named owner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The interface list is reviewed weekly, and every change to an equipment weight, nozzle load or motor rating reaches the affected discipline within one week."
                cadence: rolling
              tasks:
                - "List the data mechanical owes to piping, civil, structural and electrical"
                - "Send current equipment weights and motor ratings with revision numbers"
                - "Review the interface list and send any changed data @recurring(weekly:wed)"
                - "Escalate interface items that have no owner"
            - name: Mechanical failure lessons file
              description: |-
                ## Purpose
                Every plant repeats the same mechanical failures: a seal flush line blocked, a small-bore branch cracked by vibration, an exchanger bundle that could not be pulled because a pipe rack was in the way. Keeping a short file of failures you see or read about, each with the design choice that would have prevented it, turns site experience into better datasheets and review comments.

                ## Milestones
                1. A lessons file with failure, cause, design lesson and source for each entry.
                2. Ten entries drawn from incident reports, site visits or published case studies.
                3. Each lesson linked to the datasheet field or specification clause it would change.
                4. Three lessons raised in a design review or specification update.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons file holds at least ten mechanical failure entries, three of which have been used in a design review or specification change."
                cadence: rolling
              tasks:
                - "Start a lessons file with failure, cause and design lesson columns"
                - "Add three failures from recent maintenance or incident reports"
                - "Add one new mechanical lesson from a report, visit or case study @recurring(monthly:22)"
                - "Raise one lesson at the next design review"
            - name: Spare parts lists for new mechanical equipment
              description: |-
                ## Purpose
                Vendors quote commissioning spares, two-year operating spares and capital spares, and the lists tend to arrive late, priced high and full of parts the warehouse already stocks. Reviewing each list against criticality, lead time and existing stock means the critical seal, bearing or valve internals are on the shelf on start-up day.

                ## Milestones
                1. Vendor spares lists collected for every mechanical package in the project format.
                2. Each list checked against warehouse stock and interchangeability with installed machines.
                3. Capital spares for long lead critical items agreed with the client.
                4. Final spares lists issued to procurement with quantities justified.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every mechanical package has a reviewed spares list, with capital spares agreed and issued to procurement before the equipment ships."
                cadence: rolling
              tasks:
                - "Ask each vendor for the spares list in the project format"
                - "Check each list against warehouse stock and installed machines"
                - "Agree capital spares for long lead critical items with the client"
                - "Review outstanding spares lists with procurement @recurring(quarterly)"
            - name: HVAC plant monthly performance check
              description: |-
                ## Purpose
                Chilled water plants and air handling units drift quietly: a fouled condenser, a stuck damper or a sensor out of calibration can add a fifth to energy use before anyone complains. In hot, humid climates, where cooling is often the largest electrical load in a building, a monthly check of chiller efficiency, chilled water temperatures and filter pressure drop pays back quickly.

                ## Milestones
                1. Baseline values recorded for chiller kW per tonne, chilled water temperatures and filter pressure drop.
                2. Readings taken each month from the building management system or local gauges.
                3. Readings outside the baseline band investigated with the maintenance contractor.
                4. A yearly summary of efficiency and faults found shared with the facilities manager.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly HVAC performance readings are logged against a baseline, with every out of band reading followed up in writing."
                cadence: rolling
              tasks:
                - "Record baseline chiller and air handling unit readings from the BMS"
                - "Log chiller efficiency and chilled water temperatures @recurring(monthly:5)"
                - "Raise out of band readings with the maintenance contractor"
                - "Send the yearly HVAC performance summary to the facilities manager @recurring(yearly)"
            - name: Monthly field visit to installed mechanical work
              description: |-
                ## Purpose
                Engineers who never see their piping built keep repeating the same support, valve position and access mistakes. A monthly visit to the construction site or operating plant, with one specific question each time, keeps your design judgement tied to what fabricators, fitters and operators actually face.

                ## Milestones
                1. A standing monthly visit agreed with the site team or plant engineer.
                2. One specific question taken to each visit, such as valve access or support spacing.
                3. Findings written up in half a page and shared with the design team.
                4. Two changes to your own design practice made from what you saw.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Field visit notes exist for at least ten months of a year, with two recorded changes to design practice arising from them."
                cadence: rolling
              tasks:
                - "Ask the site manager or plant engineer for a standing visit slot"
                - "Choose one design question to answer on the next visit"
                - "Visit installed mechanical work and write up the findings @recurring(monthly:18)"
                - "Share the findings with the design team"
            - name: Centrifugal pump selection and NPSH margins
              description: |-
                ## Purpose
                Pump selection is where many mechanical engineers first sign off something expensive, and NPSH mistakes show up as cavitation within weeks of start-up. Working through the selection of one real pump, from hydraulic duty to API 610 pump type, NPSH margin, minimum flow and seal arrangement, builds the judgement to challenge a vendor offer.

                ## Milestones
                1. Hydraulic duty for one pump calculated at rated, normal and minimum flow.
                2. NPSH available compared with the vendor's NPSH required plus the project margin.
                3. Pump type, speed and impeller size chosen with written reasons.
                4. Minimum continuous flow and its protection confirmed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked selection for one real pump showing duty, NPSH margin, type choice and minimum flow protection, reviewed by a rotating equipment engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one pump from your project and gather its process data"
                - "Calculate NPSH available at the lowest suction vessel level"
                - "Compare two vendor curves offered for the same duty"
                - "Work one pump hydraulics practice problem @recurring(weekly:sat)"
                - "Ask a rotating equipment engineer to review the selection"
            - name: Piping flexibility and stress analysis fundamentals
              description: |-
                ## Purpose
                Hot lines grow, and the forces that growth puts on pump and compressor nozzles decide whether alignment holds after start-up. Learning when a line needs formal stress analysis, how it is modelled in a stress package and how to read sustained, expansion and occasional results under ASME B31.3 lets you work with stress engineers rather than around them.

                ## Milestones
                1. The project's stress critical line criteria read and understood.
                2. One simple hot line modelled and run in the stress tool under supervision.
                3. Sustained, expansion and occasional load case results interpreted.
                4. Nozzle loads compared with the vendor or API 610 allowable loads.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One hot line modelled and analysed under supervision, with each load case and the nozzle load check explained in a short note."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the stress critical line criteria in the project piping specification"
                - "Pick a simple pump discharge line to model"
                - "Run the model with a stress engineer and note each load case result"
                - "Spend an hour on a pipe flexibility worked example @recurring(weekly:sun)"
            - name: Pressure vessel design to ASME Section VIII Division 1
              description: |-
                ## Purpose
                Wall thickness, nozzle reinforcement, maximum allowable working pressure and hydrotest pressure for a vessel all follow from a few clauses of ASME Section VIII Division 1, or EN 13445 or PD 5500 where a project calls them up. Calculating one vessel yourself and comparing your result with the fabricator's shows what to look for when a vendor calculation package lands on your desk.

                ## Milestones
                1. Shell and head thickness for one vessel calculated for internal pressure.
                2. One nozzle reinforcement check completed by hand.
                3. Maximum allowable working pressure and test pressure worked out and compared with the datasheet.
                4. Your results compared with the fabricator's calculation and differences explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand calculation for one vessel covering shell, head, one nozzle and test pressure, compared line by line with the fabricator's figures."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Obtain the datasheet and fabricator calculation for one vessel"
                - "Calculate shell and head thickness for internal pressure"
                - "Check one nozzle reinforcement by hand"
                - "Compare your allowable working pressure with the fabricator's and explain any gap"
            - name: Shell and tube exchanger thermal and mechanical design
              description: |-
                ## Purpose
                Exchangers fail on details a thermal rating hides: the fouling fluid on the shell side, tube vibration from an unsupported span, a bundle that cannot be pulled because of the plot layout. Following one exchanger through its thermal rating, TEMA type choice and mechanical design teaches you what to check on the next vendor datasheet.

                ## Milestones
                1. The TEMA designation of one exchanger decoded and its choice explained.
                2. Fluid allocation between shell and tube side justified.
                3. Thermal rating output read, including fouling factors and excess area.
                4. Tube vibration results and bundle removal space checked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page review of one exchanger covering TEMA type, fluid allocation, rating results, vibration and bundle removal, checked by a senior engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one shell and tube exchanger from the equipment list"
                - "Decode its TEMA type and fluid allocation"
                - "Read the thermal rating report and note fouling factors and excess area"
                - "Check bundle pull space on the plot plan"
            - name: Cooling load calculation for a tropical building
              description: |-
                ## Purpose
                Cooling loads in a hot, humid climate are dominated by solar gain and the latent load of fresh air, and an oversized chiller wastes money while an undersized one leaves a building damp and mouldy. Doing one full load calculation by hand for a real space, using ASHRAE methods and local design weather data, shows which inputs really move the answer.

                ## Milestones
                1. Design outdoor conditions for the location taken from a recognised weather dataset.
                2. Envelope, solar, people, lighting, equipment and fresh air loads calculated for one space.
                3. Sensible and latent loads separated and the supply air quantity worked out.
                4. Your total compared with the HVAC software result or a colleague's figure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed cooling load calculation for one real space with sensible and latent split, compared with a software or peer result and the difference explained."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find design outdoor conditions for the site location"
                - "Take the room dimensions, glazing and occupancy from the drawings"
                - "Calculate each load component in a spreadsheet"
                - "Compare your total with the HVAC software result"
            - name: Compressor types and selection
              description: |-
                ## Purpose
                Centrifugal, reciprocating, screw and integrally geared compressors each suit a different range of flow, pressure ratio and gas, and API 617, 618 and 619 set what a purchaser can demand of each. Comparing them for one duty you know prepares you for compressor packages, where a single machine can cost more than the rest of the mechanical scope.

                ## Milestones
                1. The operating envelope of each main compressor type summarised on one page.
                2. The governing API standard for each type noted with its main purchaser requirements.
                3. One project duty compared across two compressor types, with reasons for the choice.
                4. Surge, rod load and other limiting conditions explained for each type.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page compressor type comparison and a worked choice for one duty, reviewed by a rotating equipment engineer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Summarise flow and pressure ranges for the main compressor types"
                - "Note the key purchaser requirements in API 617 and API 618"
                - "Compare two compressor types for one project duty"
                - "Explain surge and rod load limits in your own words"
            - name: Pressure relief valve sizing basics
              description: |-
                ## Purpose
                Relief valves are the last protection against overpressure, and their sizing, inlet pressure loss and back pressure come up in every design review and many incident reports. Learning how relief cases are defined, how API 520 and API 521 size a valve, and which inlet and outlet limits make it work lets you check the work rather than simply accept it.

                ## Milestones
                1. Relief cases for one protected item read from the relief study.
                2. Required orifice area calculated for the governing case and matched to a standard orifice size.
                3. Inlet pressure loss and built-up back pressure checked against their limits.
                4. Results reviewed with the process or safety engineer who owns the study.

                ## Notes
                Relief cases and set pressures belong to the relief study owner. Never change a set pressure or remove a relief device without management of change.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One relief valve sizing worked through for its governing case, including inlet loss and back pressure checks, and reviewed by the study owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find the relief study for one protected vessel or exchanger"
                - "Calculate the required orifice area for the governing case"
                - "Check the inlet pressure loss against the three percent guideline"
                - "Review your results with the relief study owner"
            - name: Vibration readings for rotating equipment
              description: |-
                ## Purpose
                Overall vibration levels, spectra and bearing temperatures tell you most of what is wrong with a pump, fan or motor, if you can read them. Learning the ISO 20816 severity zones and the common fault signatures (unbalance, misalignment, looseness and rolling bearing defects) lets you hold a useful conversation with the condition monitoring team and ask the right follow-up.

                ## Milestones
                1. ISO 20816 zones for one machine class understood and applied.
                2. Four common fault signatures recognised in real spectra.
                3. Recent readings for three machines read and classified.
                4. One recommendation made from the readings and confirmed with the condition monitoring technician.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Readings for three machines classified against ISO 20816 zones, with at least one fault signature identified and confirmed by a technician."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the condition monitoring team for recent reports on three machines"
                - "Classify each overall reading against the ISO 20816 zones"
                - "Match one spectrum to a known fault signature"
                - "Read the latest vibration report for your critical machines @recurring(monthly:26)"
            - name: Fits, tolerances and GD&T for machine parts
              description: |-
                ## Purpose
                Shafts, bearings, couplings and seal sleeves only work at the fits and tolerances on their drawings, and a misread geometric tolerance can scrap a machined part or a repair. Learning ISO limits and fits and geometric dimensioning and tolerancing to ASME Y14.5 or ISO GPS lets you check machine shop drawings and repair procedures with confidence.

                ## Milestones
                1. The ISO hole and shaft fit system understood, with three common fits explained.
                2. Geometric tolerance symbols on one real drawing read correctly.
                3. One bearing housing or shaft drawing checked for fits and runout.
                4. Your reading of five drawing callouts confirmed by a machinist or designer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One machine part drawing checked for fits and geometric tolerances, with findings confirmed by a machinist or designer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Look up the ISO fits for a rolling bearing on a shaft and in its housing"
                - "Annotate the geometric tolerances on one shaft drawing"
                - "Check one repair drawing for fit and runout tolerances"
                - "Ask a machinist to confirm your reading"
            - name: Impeller trim or replacement for an oversized pump
              description: |-
                ## Purpose
                Pumps bought with generous margins often run with the discharge valve half shut, burning power across the control valve and sitting far from their best efficiency point. Comparing an impeller trim, a variable speed drive and a smaller pump for one such machine, on energy, reliability and cost, gives the plant a decision it can fund.

                ## Milestones
                1. Actual operating point and control valve pressure drop measured.
                2. Three options costed: impeller trim, variable speed drive and replacement pump.
                3. Energy saving and reliability effect estimated for each option.
                4. A recommendation agreed with operations and maintenance.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written option comparison for one oversized pump with costs, energy savings and a recommendation agreed with operations."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Find a pump running with a heavily throttled discharge"
                - "Measure flow, head and control valve pressure drop"
                - "Ask the vendor for the trimmed impeller curve"
                - "Present the three option comparison to operations"
            - name: Small-bore connection vibration fix
              description: |-
                ## Purpose
                Small-bore branches such as drains, vents and instrument tappings on vibrating lines are a leading cause of fatigue cracks and hydrocarbon releases. Surveying one system with a recognised small-bore assessment method, such as the Energy Institute guidelines, then bracing or redesigning the worst connections removes a known hazard at low cost.

                ## Milestones
                1. Small-bore connections on one vibrating system listed.
                2. Each connection scored with the chosen assessment method.
                3. Bracing or redesign drawn for the high-scoring connections.
                4. Changes made through management of change and vibration rechecked afterwards.

                ## Notes
                Changes to pressure-containing connections go through management of change, and any work on a live system needs a permit to work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All small-bore connections on one system scored, with every high-risk connection braced or redesigned under management of change."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Walk one vibrating system and list its small-bore branches"
                - "Score each connection with the assessment method"
                - "Draw bracing details for the worst connections"
                - "Raise the change request and recheck vibration after the fix"
            - name: Mechanical seal plan upgrade for a leaking pump
              description: |-
                ## Purpose
                Repeat seal failures on one pump usually trace back to the seal arrangement or flush plan rather than bad luck. Reviewing the seal type and API 682 piping plan against the fluid's temperature, solids and vapour pressure, then specifying a better arrangement with the seal vendor, can cut replacements from several a year to none.

                ## Milestones
                1. Seal failure history for the pump gathered from maintenance records.
                2. Current seal arrangement and flush plan compared with the fluid conditions.
                3. A revised seal and piping plan specified with the seal vendor.
                4. The upgrade installed and seal condition tracked for six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised seal arrangement specified, installed and showing no seal failure in the six months after the change."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pull two years of seal failure records for the pump"
                - "Check the vapour pressure margin in the seal chamber"
                - "Ask the seal vendor to propose a revised arrangement and piping plan"
                - "Record seal leakage and flush temperature for six months after installation"
            - name: Chiller replacement option study
              description: |-
                ## Purpose
                An ageing chiller on a phased-out refrigerant forces a choice: overhaul, replace like for like, or move to a higher efficiency machine with variable speed compressors. Comparing the options on whole-life cost, refrigerant rules, efficiency at part load and plant room constraints gives the building owner a decision they can defend to their board.

                ## Milestones
                1. Current chiller condition, refrigerant and measured efficiency recorded.
                2. Three options defined with capital, energy and maintenance cost over fifteen years.
                3. The refrigerant regulations that apply in your country checked.
                4. A recommendation with the life-cycle comparison issued to the owner.

                ## Notes
                Start from the **Purchase decision** template. Compare part-load efficiency, since most chillers spend most hours well below full load.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fifteen-year life-cycle comparison of three chiller options issued to the owner with a written recommendation."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Record the chiller's refrigerant, age and measured efficiency"
                - "Get budget quotes for two replacement machines"
                - "Check the refrigerant phase-out rules that apply locally"
                - "Build the fifteen-year cost comparison and issue it to the owner"
            - name: Bolted flange joint assembly procedure
              description: |-
                ## Purpose
                Flange leaks after turnarounds and new construction are rarely about the gasket and nearly always about assembly: uneven bolt load, the wrong lubricant, a damaged face. Writing a joint assembly procedure based on ASME PCC-1, with target bolt stress, tightening pattern, assembler training and a joint record sheet, cuts start-up leaks sharply.

                ## Milestones
                1. Flange leaks from the last start-up counted and reviewed for patterns.
                2. A procedure written with bolt load targets, lubricant and tightening sequence.
                3. Assemblers trained and a joint record sheet in use for critical flanges.
                4. Leaks at the next start-up compared with the last.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bolted joint procedure is in use with record sheets for critical flanges, and start-up leaks are counted against the previous start-up."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Count the flange leaks found at the last start-up"
                - "Draft the procedure with bolt load targets and tightening pattern"
                - "Run a training session for the flange assemblers"
                - "Introduce a joint record sheet for critical flanges"
            - name: Noise survey and reduction for a compressor house
              description: |-
                ## Purpose
                Compressor houses, blowers and letdown valves often exceed workplace noise limits, putting everyone in hearing protection and alarms out of earshot. Measuring noise against the limit, ranking the sources and costing enclosures, silencers or acoustic lagging gives the site a targeted plan instead of more ear defenders.

                ## Milestones
                1. A noise survey with measured levels at fixed points around the area.
                2. The main sources ranked by their contribution.
                3. Reduction options for each source costed with the expected reduction.
                4. A reduction plan agreed with HSE and operations.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A noise survey and costed reduction plan for one area agreed with HSE, showing expected levels against the workplace limit."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask HSE for previous noise surveys of the area"
                - "Measure noise at fixed points with a calibrated meter"
                - "Rank the sources and cost silencers, enclosures or lagging"
                - "Present the reduction plan to HSE and operations"
            - name: Material upgrade for a problem corrosion line
              description: |-
                ## Purpose
                A line replaced every few years for internal corrosion costs more in shutdowns and inspection than an upgrade would. Comparing carbon steel with more corrosion allowance, stainless, duplex, lined or non-metallic pipe on cost, life and inspection burden gives the plant one decision instead of another like-for-like replacement.

                ## Milestones
                1. Corrosion rate and replacement history for the line gathered.
                2. Three material options defined with installed cost and expected life.
                3. Suitability checked with the materials engineer, including welding and inspection.
                4. A recommendation recorded and the change request raised.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written material comparison for one line with life and cost, agreed with the materials engineer and raised as a change request."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather the inspection thickness readings for the line"
                - "Work out the measured corrosion rate"
                - "Compare three material options on installed cost and life"
                - "Review the preferred option with the materials engineer"
            - name: Hydrostatic test package for a piping system
              description: |-
                ## Purpose
                A hydrotest proves a piping system's strength and tightness before it ever sees process fluid, and it is one of the highest stored energy activities on a construction site. Preparing the test pack, with test pressure from the code, test limits marked on the isometrics, calibrated gauges and an exclusion zone, then witnessing the test, is a rite of passage for a mechanical engineer.

                ## Milestones
                1. Test limits marked on the isometrics and test pressure calculated to ASME B31.3 or the project code.
                2. Test pack complete with blinds, vents, drains, calibrated gauges and overpressure protection.
                3. Exclusion zone and permit agreed with the site safety team.
                4. Test witnessed, held for the required time and the record signed.

                ## Notes
                Start from the **Operational checklist** template. A pressurised system stores energy that can kill. Keep the exclusion zone and use your stop-work authority if anything is out of place.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed hydrotest record for one system, with calibrated gauges, a permit and an exclusion zone in place during the test."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Mark the test limits on the isometrics"
                - "Calculate the test pressure from the project code"
                - "Check gauge calibration certificates and the test relief setting"
                - "Agree the permit and exclusion zone with site safety"
                - "Witness the test and sign the record"
            - name: Technical bid evaluation for an equipment package
              description: |-
                ## Purpose
                When three vendors bid for a pump or compressor package, the technical bid evaluation decides which offers procurement may consider at all. A clear evaluation, with every deviation from the datasheet and specification tabulated and clarified, protects the project from buying the cheapest machine that cannot meet the duty.

                ## Milestones
                1. A bid tabulation comparing each offer line by line with the datasheet.
                2. Deviations and exceptions listed and clarification questions sent.
                3. Clarifications closed and each offer rated technically acceptable or not.
                4. The technical bid evaluation issued to procurement with a recommendation.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A technical bid evaluation issued with every deviation from the datasheet tabulated, clarified and rated."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Build a tabulation sheet from the datasheet and specification"
                - "Enter each vendor offer line by line"
                - "Send clarification questions on every deviation"
                - "Issue the evaluation with a technical recommendation"
            - name: First mechanical equipment requisition
              description: |-
                ## Purpose
                Requisitions bundle the datasheet, specifications, scope of supply, inspection and test requirements and vendor document list that a vendor prices from. Preparing a first one carefully, and having it checked by a senior engineer, avoids the change orders that follow a missing item in the scope of supply.

                ## Milestones
                1. Datasheet and specifications for one item finalised.
                2. Scope of supply, battery limits and exclusions written.
                3. Inspection, testing and vendor document requirements listed.
                4. Requisition checked, approved and issued for enquiry.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One complete requisition issued for enquiry, with scope of supply, inspection requirements and vendor document list approved by a senior engineer."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find a previous requisition for a similar item to use as a model"
                - "Write the scope of supply with battery limits and exclusions"
                - "List the required tests, inspections and vendor documents"
                - "Submit the requisition for senior check"
            - name: Pump alignment and first run support
              description: |-
                ## Purpose
                Starting a pump misaligned, with soft foot or with pipe strain on its nozzles, can wreck bearings and seals in weeks. Being present for the soft foot check, the pipe strain check during flange bolt-up, final laser alignment and the first run, with readings recorded against tolerances, is where design meets real steel.

                ## Milestones
                1. Alignment and soft foot tolerances confirmed from vendor data or the site standard.
                2. Pipe strain checked by watching alignment while the flanges were bolted up.
                3. Final soft foot and laser alignment readings recorded.
                4. First run vibration and bearing temperatures recorded within limits.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An alignment record with soft foot, pipe strain and final readings within tolerance, plus first run vibration within limits."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the site team when the next pump alignment is planned"
                - "Find the alignment tolerances for that machine"
                - "Witness the soft foot and pipe strain checks"
                - "Record first run vibration and bearing temperatures"
            - name: Technical talk to an engineering institution section
              description: |-
                ## Purpose
                Presenting a solved problem, such as a pump reliability fix or an HVAC retrofit, to a local section of a mechanical engineering institution builds a reputation beyond your employer and sharpens your own thinking. A twenty-minute talk with real numbers, cleared for confidentiality, is a defined event with a date that forces the work to happen.

                ## Milestones
                1. A topic chosen and cleared with your manager for confidentiality.
                2. A twenty-minute talk with figures drafted and rehearsed.
                3. A date booked with the institution's local section.
                4. The talk delivered and audience questions noted for follow-up.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A twenty-minute technical talk delivered to an engineering institution section on a booked date, with employer clearance recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick a solved problem with numbers you are allowed to share"
                - "Ask your manager to clear the topic for confidentiality"
                - "Contact the local section secretary about a talk date"
                - "Rehearse the talk in front of two colleagues"
            - name: First datasheet as a graduate mechanical engineer
              description: |-
                ## Purpose
                Graduates usually start on a pump, tank or fan datasheet, and how they handle it sets the senior engineers' trust. Producing one datasheet from process data to issued revision, with every field sourced and the checker's comments closed, is the first proof you can be given real work.

                ## Milestones
                1. Process data and project specifications for the item collected.
                2. Mechanical datasheet filled, with every field sourced or marked for the vendor to confirm.
                3. Checker's comments received and closed.
                4. Datasheet issued at its first revision.

                ## Notes
                Start from the **Development plan** template to record what each round of checker comments taught you.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One mechanical datasheet issued at its first revision with all checker comments closed and the lessons recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your lead for a datasheet you can own from start to issue"
                - "Fill each datasheet field and note its source"
                - "Submit the datasheet for checking"
                - "Close the comments and write down what you learned"
            - name: Moving from design office to site mechanical engineer
              description: |-
                ## Purpose
                Going to site swaps datasheets for fabricators, inspectors and daily problems that need an answer by the afternoon. Preparing for the move, with the site rules, the inspection and test plans, the punch list process and a list of who to call for what, shortens the first month considerably.

                ## Milestones
                1. Site safety induction and permit to work training completed.
                2. Inspection and test plans for mechanical work read.
                3. Contacts for QA, construction, vendor representatives and the design office listed.
                4. A weekly look-ahead of mechanical activities in use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Site induction complete, mechanical inspection and test plans read and a weekly look-ahead running within the first month on site."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Complete the site induction and permit to work training"
                - "Read the inspection and test plans for mechanical work"
                - "List the site and office contacts you will need"
                - "Prepare next week's mechanical look-ahead @recurring(weekly:fri)"
            - name: Changing from plant engineer to design consultancy
              description: |-
                ## Purpose
                Operating plant engineers bring hard-won knowledge of what fails, but design consultancies run on manhour budgets, deliverable lists and checked calculations. Planning the change, by turning site experience into design strengths and filling gaps in codes and calculation practice, makes the first year productive rather than humbling.

                ## Milestones
                1. Site experience written up as examples a design team would value.
                2. Gaps in code knowledge and calculation practice listed.
                3. A six-month learning plan agreed with the new manager.
                4. Timesheet, manhour and deliverable reporting understood.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written six-month learning plan agreed with the consultancy manager, covering the listed gaps in codes and calculation practice."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List five plant problems you solved that a designer would value"
                - "Identify the codes you will use most and have not studied"
                - "Agree a six-month learning plan with your new manager"
                - "Ask how manhours and deliverable progress are reported"
            - name: Stepping up to lead mechanical engineer
              description: |-
                ## Purpose
                Lead mechanical engineers own the deliverables list, the manhour budget, the team's checking and every interface for the discipline, and spend far less time calculating. Setting up the role deliberately, with a deliverables register, a view of who can check what and a weekly progress routine, avoids discovering at sixty percent complete that the budget has gone.

                ## Milestones
                1. A mechanical deliverables list with manhours, owners and due dates agreed with the project manager.
                2. A skills matrix of the team showing who can produce and who can check each deliverable type.
                3. A checker and approver named for every deliverable.
                4. A weekly progress and earned hours report in use.

                ## Notes
                Start from the **Skills matrix** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliverables list with manhours and owners, a team skills matrix and a weekly progress report are all in use within two months of taking the lead role."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build the mechanical deliverables list with manhour estimates"
                - "Map the team's skills and checking authority"
                - "Name a checker and approver for each deliverable"
                - "Report discipline progress and earned hours to the project manager @recurring(weekly:mon)"
            - name: Working as a contract or freelance mechanical engineer
              description: |-
                ## Purpose
                Contract mechanical engineers often sign calculations and drawings for clients with no in-house checker behind them. Setting up properly, with professional indemnity insurance, written scope and sign-off limits in every engagement, an independent checking arrangement and a clean record of what was issued, protects both you and the client.

                ## Milestones
                1. Professional indemnity insurance in place at a level suited to the work.
                2. A standard engagement letter defining scope, deliverables and sign-off limits.
                3. An independent checking arrangement agreed with a trusted peer.
                4. A register of every issued deliverable with revision and date.

                ## Notes
                Insurance and contract terms vary by country. Have a lawyer or your professional body review the engagement letter before first use.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Indemnity insurance, a reviewed engagement letter and a checking arrangement are in place before the first freelance deliverable is issued."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get two quotes for professional indemnity insurance"
                - "Draft an engagement letter with scope and sign-off limits"
                - "Agree a paid checking arrangement with a trusted peer"
                - "Check insurance cover against your current engagements @recurring(quarterly)"
            - name: Returning to mechanical practice after a career break
              description: |-
                ## Purpose
                After a year or more away, codes have new editions, software has moved on and your professional registration may need updated development records. A structured return, refreshing the codes and tools you will use and doing supervised work first, rebuilds confidence and keeps your sign-off sound.

                ## Milestones
                1. Code editions and software versions that changed during the break listed.
                2. Continuing development records brought up to date for your professional body.
                3. A refresher of the main tools completed using practice cases.
                4. The first three deliverables checked by a senior engineer before issue.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Continuing development records updated and the first three deliverables after return checked by a senior engineer before issue."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the codes and tools the new role will use"
                - "Check which code editions changed during your break"
                - "Update your continuing development record"
                - "Work one refresher practice case in the main design tool @recurring(weekly:wed)"
            - name: Rotordynamic and critical speed review for a compressor
              description: |-
                ## Purpose
                For high speed compressors and steam turbines, the vendor's lateral and torsional analyses show whether critical speeds sit safely away from the operating range. Reviewing one such report against the API 617 separation margin and amplification factor requirements lets a lead engineer accept or challenge a machine before it is built, when changes are still cheap.

                ## Milestones
                1. The lateral analysis report obtained, with the critical speed map and unbalance response.
                2. Separation margins checked against the API requirement for each critical speed.
                3. The torsional analysis reviewed for the full train, including driver and gearbox.
                4. Comments issued to the vendor and closed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written review comments on one compressor's lateral and torsional analyses issued to the vendor and closed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Request the lateral and torsional analysis reports from the vendor"
                - "Plot the operating speed range against the critical speeds"
                - "Check separation margins and amplification factors"
                - "Issue review comments and track their closure"
            - name: Fatigue assessment of a cyclic service component
              description: |-
                ## Purpose
                Equipment that cycles in pressure or temperature, such as a batch reactor, a dryer in swing service or a nozzle on a line that sees thermal shocks, can crack long before its static design suggests. Running a fatigue screening and, where needed, a detailed assessment using ASME Section VIII Division 2 methods identifies the components that need a design change or targeted inspection.

                ## Milestones
                1. Cyclic loads and the number of cycles over design life quantified.
                2. Fatigue screening completed for the component.
                3. A detailed fatigue assessment done where the screening fails.
                4. Findings and any inspection or design change recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fatigue screening record for one cyclic component, with either a detailed assessment or a documented reason it was not needed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the pressure and temperature cycles the component sees"
                - "Estimate the number of cycles over the design life"
                - "Run the fatigue screening criteria"
                - "Record the result and any inspection recommendation"
            - name: Pulsation study for reciprocating compressor piping
              description: |-
                ## Purpose
                Reciprocating compressors push pressure pulses into their piping that can shake supports loose and crack small-bore branches within months. Commissioning or reviewing an acoustic and mechanical study, following the design approaches in API 618, defines the pulsation dampers, orifice plates and support stiffness that keep the system inside allowable vibration.

                ## Milestones
                1. The study design approach and scope agreed with the vendor or specialist.
                2. Acoustic results showing pulsation levels against allowables.
                3. Mechanical response results with support and clamp requirements.
                4. Every study recommendation built into the piping design.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A pulsation and mechanical response study for one compressor system completed, with every recommendation tracked into the piping design."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm which API 618 design approach the project requires"
                - "Send the piping layout and operating cases to the study provider"
                - "Review the pulsation and mechanical response results"
                - "Track each recommendation into the piping drawings"
            - name: Slug flow loads on multiphase piping
              description: |-
                ## Purpose
                Multiphase lines from wells, separators and condensate systems can carry liquid slugs that hammer elbows and supports with forces far above any static load. Estimating slug velocity and length, the dynamic force at each change of direction and the restraint design needed is specialist work where the mechanical and flow assurance engineers must agree the inputs.

                ## Milestones
                1. Flow regime and slug characteristics obtained from the flow assurance engineer.
                2. Dynamic forces at each change of direction calculated.
                3. Supports and restraints designed for the governing forces.
                4. Results checked by the piping stress engineer.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Slug forces calculated at every change of direction on one line, with supports designed and checked by the stress engineer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask flow assurance for slug length and velocity on the line"
                - "Calculate the dynamic force at each bend"
                - "Design restraints for the governing forces"
                - "Review the results with the stress engineer"
            - name: Water hammer and surge analysis
              description: |-
                ## Purpose
                Fast valve closures and pump trips in long liquid lines, such as firewater rings, cooling water mains and ship loading lines, can produce pressure surges well above design pressure. Running a surge analysis and specifying the valve closure times, surge vessels or relief that keep pressures within limits prevents ruptured pipe and lifted supports.

                ## Milestones
                1. Surge scenarios such as pump trip and emergency valve closure defined.
                2. A transient model built with real pipe lengths, profiles and valve data.
                3. Peak pressures and unbalanced forces compared with design limits.
                4. Mitigations specified and included in the design.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A surge analysis for one system showing every scenario's peak pressure below design limits with the agreed mitigations in place."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the pump trip and valve closure cases for the system"
                - "Collect pipe lengths, elevation profile and valve closure times"
                - "Run the transient model for each case"
                - "Specify surge mitigations and send them to the design team"
            - name: Writing a company mechanical design specification
              description: |-
                ## Purpose
                Senior mechanical engineers eventually write the specifications others work to: the company standard for centrifugal pumps, pressure vessels or HVAC design. Turning lessons learned, code requirements and site preferences into a numbered specification that amends the base code rather than repeating it is some of the most lasting work in the discipline.

                ## Milestones
                1. The base code and existing company or project specifications for the subject gathered.
                2. A draft written as additions and amendments to the base code, clause by clause.
                3. Reviews by operations, maintenance and other disciplines received and comments closed.
                4. The specification approved and issued with a revision history.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved company mechanical specification issued, with every clause traced to a code clause, a lesson learned or a site requirement."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose the equipment type the specification will cover"
                - "Gather the base code and three past project specifications"
                - "Ask the agent to draft a clause comparison of the past specifications"
                - "Circulate the draft to operations and maintenance for comment"
---

# Mechanical Engineering Practice

Mechanical Engineering Practice is for engineers who specify, buy, check and look after pumps, compressors, vessels, exchangers, piping and HVAC plant, from the first graduate datasheet to the lead engineer's deliverables list. It starts with foundations (codes, property sources, the design basis, design conditions and hand checks), moves through the weekly machinery of vendor reviews, technical queries and interface checks, then core skills, improvement studies, dated events such as hydrotests and bid evaluations, career situations and finally specialist analysis such as rotordynamics, pulsation and surge.

The rhythm is weekly for vendor documents, technical queries and discipline interfaces, monthly for pump operating points, HVAC performance, vibration reports, field visits and lessons learned, and quarterly for spares and insurance reviews. The Metrics log, Purchase decision, Operational checklist, Development plan and Skills matrix templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
