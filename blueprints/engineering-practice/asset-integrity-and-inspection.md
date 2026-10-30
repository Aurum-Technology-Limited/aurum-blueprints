---
id: engineering-practice.asset-integrity-and-inspection
name: Asset Integrity and Inspection
description: "Inspection plans built on real damage mechanisms, corrosion rates and remaining life you can defend, risk-based intervals, fitness-for-service calls and integrity records that keep pressure equipment safely in service."
category: business
version: 1.0.0
tags: [engineering-practice, asset-integrity-and-inspection, engineer, mechanical-integrity, inspection, corrosion, risk-based-inspection, fitness-for-service]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - remediation-plan
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Asset Integrity and Inspection
          description: "Keeping equipment fit for service: inspection plans, corrosion monitoring, risk-based inspection, fitness-for-service assessments and integrity records."
          projects:
            - name: Pressure equipment register with design data
              description: |-
                ## Purpose
                Every integrity decision starts from a list nobody argues about: which vessels, piping circuits, tanks, exchangers and relief devices exist, what they were designed to and what they are made of. Sites that inherit a register from three different maintenance systems usually find duplicate tags, missing design pressures and items nobody owns. One clean register with design code, materials, corrosion allowance and design conditions is the base every later project in this area reads from.

                ## Milestones
                1. Every pressure-containing item in your unit listed once, with a single agreed tag number.
                2. Design code, design pressure and temperature, material of construction and corrosion allowance recorded for each item.
                3. Items with missing design data flagged, each with a named source to chase.
                4. The register reconciled against the P&IDs and the maintenance system, with differences resolved.
                5. An owner named for keeping the register current after every change.

                ## Notes
                Include small items people forget: knock-out pots, filter housings, sample coolers and vendor skid piping. They fail as often as the big vessels.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single equipment register covering every pressure-containing item in the unit, with design data complete or flagged, is reconciled to the P&IDs and has a named owner."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Export the equipment list from the maintenance system for your unit"
                - "Mark up a P&ID set to show every vessel, circuit and relief device"
                - "Fill design pressure, temperature, material and corrosion allowance for each item"
                - "Agree with the maintenance planner who updates the register after changes"
            - name: Corrosion loops and credible damage mechanisms
              description: |-
                ## Purpose
                Inspecting the wrong place with the right tool finds nothing, and most loss-of-containment events trace back to a damage mechanism nobody listed. Grouping equipment into corrosion loops with similar process conditions and materials, then listing the credible mechanisms for each from API RP 571, tells the inspection plan where to look and what to look for.

                ## Milestones
                1. The unit divided into corrosion loops, each shown in colour on a marked-up PFD.
                2. Process conditions, materials and fluid contaminants written for each loop.
                3. Credible damage mechanisms listed per loop, with the reason each is credible or ruled out.
                4. The loop study reviewed by process, materials and operations engineers in one meeting.
                5. The loop and mechanism list issued as a controlled document.

                ## Notes
                Bring operations into the review. They know about the wash water that runs intermittently and the bypass that is always cracked open, and those are where mechanisms hide.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled corrosion loop document lists credible damage mechanisms for every loop in the unit and has been reviewed by process, materials and operations."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Print the unit PFDs and sketch first-pass corrosion loop boundaries"
                - "Collect stream compositions, temperatures and contaminant data for each loop"
                - "List credible damage mechanisms per loop using API RP 571"
                - "Hold a one-day review with process, materials and operations engineers"
            - name: Map of the integrity codes that govern your plant
              description: |-
                ## Purpose
                New integrity engineers often know one code well and are vague about which other documents bind them. A one-page map showing which in-service inspection codes apply (for example API 510 for vessels, API 570 for piping, API 653 for tanks, API 576 for relief devices), which construction codes the equipment was built to, and what your country's pressure equipment law and your company standards add, stops you quoting the wrong rule in a meeting.

                ## Milestones
                1. The in-service inspection code for each equipment type identified, with the edition your site uses.
                2. Construction codes for the main equipment groups noted from the data books.
                3. The national pressure equipment regulation and any insurer requirements summarised in a paragraph each.
                4. Company integrity standards listed with where they are stricter than the codes.
                5. The map checked by your senior integrity engineer or inspection lead.

                ## Notes
                Where the law, the insurer, the company standard and the code differ, the strictest applicable requirement usually governs. Record which one sets each interval.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page code map naming the governing in-service code, edition and legal requirement for each equipment type is reviewed by the inspection lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the inspection lead which code editions the site is currently working to"
                - "List the in-service code for vessels, piping, tanks and relief devices"
                - "Summarise the national pressure equipment rules that apply to your site"
                - "Note every company standard clause that is stricter than the code"
            - name: Recovering inspection history and data books
              description: |-
                ## Purpose
                Corrosion rates need at least two good readings, and remaining life is guesswork without the original thickness and the manufacturer's data report. On many older plants that history sits in boxes, scanned PDFs and the memory of a retired inspector. Pulling it into one place before the next inspection campaign turns guesses into calculated rates.

                ## Milestones
                1. Manufacturer data reports and nameplate details found for every vessel in the register, or the gap recorded.
                2. Past inspection reports for each item indexed by date and finding.
                3. Historical thickness readings transcribed into one dataset with location references.
                4. Items with no usable history listed for a baseline inspection.
                5. Original documents scanned and filed against the equipment tag.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every item in the register has its data book and inspection history indexed against its tag, or is listed for a baseline inspection."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "Find where the site keeps vessel data books and old inspection files"
                - "Index past inspection reports by tag, date and main finding"
                - "Transcribe historical thickness readings into one spreadsheet with locations"
                - "List items with no usable history for a baseline inspection"
            - name: Thickness monitoring locations for piping circuits
              description: |-
                ## Purpose
                Piping is where most leaks start, and a circuit with condition monitoring locations in the wrong spots will show a comfortable corrosion rate right up to the day it leaks. Laying out monitoring locations on isometrics at elbows, tees, reducers, injection points and downstream of control valves, as API RP 574 describes, gives each circuit readings that represent its worst areas.

                ## Milestones
                1. Every piping circuit in the unit drawn on isometrics with its boundaries marked.
                2. Monitoring locations placed at the features where the circuit's damage mechanisms act.
                3. Each location given a unique number that matches the inspection database.
                4. Locations tagged or marked on the pipe, and insulation plugs fitted where needed.
                5. The layout reviewed against the corrosion loop study and approved.

                ## Notes
                Injection points and mix points need their own circuits with denser coverage. Averages across a long circuit hide them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every piping circuit has isometrics with numbered monitoring locations matched to the inspection database and reviewed against the corrosion loops."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Pick the highest-risk loop and pull its piping isometrics"
                - "Mark circuit boundaries and place monitoring locations at the vulnerable features"
                - "Number each location to match the inspection database"
                - "Walk the circuit with an inspector to confirm every location is accessible"
            - name: Inspection plan for every fixed equipment item
              description: |-
                ## Purpose
                An inspection plan says what will be inspected, with which method, how much coverage and by when, and why. Without one per item, inspection becomes whatever the contractor did last time. Writing plans that tie each method to a named damage mechanism and set the next date from the remaining life or the code maximum is the single most useful document an integrity engineer produces.

                ## Milestones
                1. A plan template agreed, covering mechanisms, methods, coverage, interval basis and next due date.
                2. Plans written for every vessel and exchanger in the register.
                3. Plans written for every piping circuit and storage tank.
                4. Each interval justified by remaining life, the code maximum or risk ranking, whichever is shorter.
                5. Plans approved by the inspection lead and loaded into the inspection database.

                ## Notes
                A plan that lists a method without a mechanism is a warning sign. Every method should answer the question: what damage would this find?
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item in the register has an approved inspection plan naming mechanisms, methods, coverage and a justified next due date."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Draft an inspection plan template with fields for mechanism, method and interval basis"
                - "Write plans for the ten highest-risk vessels first"
                - "Set each next due date from remaining life or code maximum, whichever is earlier"
                - "Submit the first batch of plans to the inspection lead for approval"
            - name: Integrity operating windows for the unit
              description: |-
                ## Purpose
                Corrosion rates calculated from inspection data only hold while the process stays inside the conditions they were measured under. Integrity operating windows, as API RP 584 sets out, put limits on the variables that drive damage (temperature, pH, chloride, water content, velocity) with critical and standard levels and a named response. Once they exist, a process upset becomes an integrity alert rather than a surprise at the next shutdown.

                ## Milestones
                1. Damage-driving process variables identified for each corrosion loop.
                2. Critical and standard limits set for each variable, with the technical basis written down.
                3. A required response and response time defined for every limit.
                4. Limits configured as alarms or lab checks, agreed with operations and the control system team.
                5. The window document approved and issued through management of change.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved integrity operating window document sets critical and standard limits with responses for every damage-driving variable, and the limits are live as alarms or lab checks."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "List the process variables that drive each loop's damage mechanisms"
                - "Propose critical and standard limits with a one-line basis for each"
                - "Agree the response to each limit with the operations superintendent"
                - "Raise the change request to configure alarms and lab checks"
            - name: Relief device inventory and test intervals
              description: |-
                ## Purpose
                Pressure relief valves are the last layer between an overpressure and a rupture, yet many sites cannot say which valves are overdue for testing. Building an inventory that links each device to the equipment it protects, its set pressure, its last bench test result and its interval under API 576 and your company standard closes a gap that auditors and insurers look at first.

                ## Milestones
                1. Every relief valve, rupture disc and pilot valve listed with its tag and protected equipment.
                2. Set pressure, size and last test date recorded for each device.
                3. Test intervals set and justified from the code, service and past as-received results.
                4. Overdue devices listed with a plan and date for each.
                5. As-received test results feeding back into the interval for each device.

                ## Notes
                As-received pop test results matter more than the reset result. A valve that sticks shut on arrival at the workshop is telling you the interval is too long.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A relief device inventory shows set pressure, protected equipment, last as-received result and next test date for every device, with overdue devices planned."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export all relief device tags from the maintenance system"
                - "Match each device to the equipment it protects on the P&IDs"
                - "Record the last as-received test result and date for each device"
                - "Check relief devices coming due in the next sixty days @recurring(monthly:8)"
            - name: Statutory and insurer inspection due dates
              description: |-
                ## Purpose
                Some inspections are a legal duty, not an engineering choice, and missing one can mean equipment that must be taken out of service on the day it lapses. A single list of statutory, insurer and certifying body inspection dates, kept separate from the engineering plan, means nobody discovers a lapsed certificate during a regulator's visit.

                ## Milestones
                1. Every item subject to statutory or insurer inspection identified, with the legal basis noted.
                2. The current certificate or examination date and expiry recorded for each item.
                3. Items expiring in the next twelve months listed with planned inspection dates.
                4. A competent person or certifying body named for each statutory item.
                5. Certificates scanned and filed against the tag.

                ## Notes
                In some countries this is called a written scheme of examination. Check your national pressure equipment rules and your insurer's policy wording for what applies to you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A statutory inspection list shows the legal basis, current certificate and expiry for every item, and no item is expired without a recorded plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the site insurer and regulator liaison which items need certified inspection"
                - "List each statutory item with its certificate date and expiry"
                - "Flag every certificate expiring in the next twelve months"
                - "File scanned certificates against each equipment tag"
            - name: Monthly overdue inspection review
              description: |-
                ## Purpose
                Inspection dates slip one at a time, and a register with forty overdue items rarely got there in one month. A fixed monthly review of what is due in the next ninety days and what is already overdue, with a deferral process that needs an engineering assessment and an approver, keeps the plan honest.

                ## Milestones
                1. A standing report of items due in ninety days and items overdue, run from the inspection database.
                2. A written deferral procedure requiring a technical justification and a named approver.
                3. Every overdue item either inspected, formally deferred or escalated each month.
                4. Twelve consecutive monthly reviews recorded.

                ## Notes
                A deferral is a risk decision, not a scheduling one. Ask what the remaining life and the mechanism say about another six months, and write it down.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly review is recorded for twelve months, and every overdue item in each review has an inspection date, an approved deferral or an escalation."
                cadence: rolling
              tasks:
                - "Build the ninety-day due and overdue report in the inspection database"
                - "Write the deferral procedure with justification fields and approver"
                - "Run the due and overdue review with the maintenance planner @recurring(monthly:5)"
                - "Escalate any overdue statutory item to the plant manager the same day"
            - name: Corrosion rates and remaining life after each survey
              description: |-
                ## Purpose
                Thickness readings sitting in a report do nothing until they become a short-term rate, a long-term rate, a remaining life and a next inspection date. Updating those figures within weeks of every survey, and checking the readings for anomalies before trusting them, means the inspection plan always reflects the latest metal loss.

                ## Milestones
                1. A standard calculation for short-term and long-term rates, minimum required thickness and remaining life in use.
                2. Readings screened for growth, location errors and outliers before rates are calculated.
                3. Remaining life and next due date updated in the database within thirty days of each survey.
                4. Locations with accelerating rates listed and sent for engineering review.

                ## Notes
                Readings that grow thicker between surveys usually mean a different location or a calibration issue, not new metal. Investigate before you average them in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every survey completed in the last year has updated rates, remaining life and next due dates in the database within thirty days."
                cadence: rolling
              tasks:
                - "Agree the rate and remaining life method with the inspection lead"
                - "Write a screening checklist for anomalous thickness readings"
                - "Update rates and remaining life for all surveys completed this quarter @recurring(quarterly)"
                - "Send locations with accelerating rates to the corrosion engineer"
            - name: Corrosion coupon and probe monitoring
              description: |-
                ## Purpose
                Coupons and electrical resistance probes tell you about corrosion between inspections, often months before thickness readings would. They are only useful if they are pulled on schedule, weighed or read properly and compared with the process conditions at the time. A steady routine turns them from forgotten fittings into an early warning system.

                ## Milestones
                1. Every coupon and probe location listed with its loop, mechanism and pull schedule.
                2. Probe data reviewed monthly and coupon results logged with the exposure period.
                3. Results compared with process data and the integrity operating windows.
                4. Any rate above the design allowance raised with process engineering within a week.

                ## Notes
                Start from the **Metrics log** template to keep coupon results, exposure periods and rates in one table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All coupons are pulled to schedule for a year, probe data is reviewed monthly, and each high rate has a recorded response."
                cadence: rolling
              tasks:
                - "List every coupon and probe location with its loop and pull schedule"
                - "Review electrical resistance probe trends for each loop @recurring(monthly:12)"
                - "Pull, clean and weigh the quarterly coupon set @recurring(quarterly)"
                - "Raise any rate above design allowance with process engineering"
            - name: Weekly integrity operating window exceedance review
              description: |-
                ## Purpose
                Windows only protect equipment if someone looks at the exceedances and acts on them. A short weekly review of every alarm and lab result outside its limit, with the duration and the response taken, catches the upset that will show up as wall loss next year and keeps operations seeing integrity limits as real.

                ## Milestones
                1. A weekly exceedance report generated from the historian and lab system.
                2. Each critical exceedance with a recorded response and a check of affected equipment.
                3. Repeat exceedances sent to process engineering for a root cause.
                4. A monthly summary of exceedances by variable shared with operations and integrity.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reviews are recorded for six months, every critical exceedance has a documented response, and a monthly summary is issued."
                cadence: rolling
              tasks:
                - "Set up a historian query listing integrity window exceedances by week"
                - "Review exceedances and responses with the shift superintendent @recurring(weekly:tue)"
                - "Send the monthly exceedance summary to process and operations @recurring(monthly:18)"
                - "Flag any repeat exceedance for a process engineering investigation"
            - name: Inspection recommendation tracking to closure
              description: |-
                ## Purpose
                An inspection that finds a problem and produces a recommendation nobody closes has made the plant less safe, because now the risk is known and documented. Tracking every recommendation with a priority, an owner, a due date and closure evidence is what auditors check first after an incident, and it is what keeps findings from rolling from one turnaround to the next.

                ## Milestones
                1. Every open recommendation in one register with priority, owner and due date.
                2. A priority scheme agreed that links each priority to a maximum time to close.
                3. Closure evidence required and attached before any recommendation is closed.
                4. Overdue recommendations reported monthly to the plant manager.
                5. The open count trending down for two consecutive quarters.

                ## Notes
                Closing a recommendation by raising a work order is not closure. Close it when the work is done and the inspector has verified it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All open recommendations sit in one register with owner, due date and priority, closure requires evidence, and the open count falls for two quarters."
                cadence: rolling
              tasks:
                - "Merge recommendations from old reports and spreadsheets into one register"
                - "Agree the priority scheme and maximum close-out times with the inspection lead"
                - "Chase owners on recommendations due in the next two weeks @recurring(weekly:thu)"
                - "Report overdue recommendations to the plant manager each month"
            - name: Small bore connections and deadleg survey
              description: |-
                ## Purpose
                Vents, drains, instrument tappings and deadlegs fail from vibration fatigue and stagnant corrosion, and they are rarely in anyone's piping circuit. A yearly survey that identifies them, assesses vibration and bracing, and puts the worst into the inspection plan closes one of the most common causes of small leaks with big consequences.

                ## Milestones
                1. Small bore connections and deadlegs in the unit identified and listed by line.
                2. Each connection assessed for vibration, bracing, weld type and cantilevered mass.
                3. Deadlegs added to the inspection plan with their own monitoring locations.
                4. High-risk connections braced, removed or upgraded through work orders.

                ## Notes
                Unused branches left after past modifications are the worst deadlegs. Ask whether they can be removed under management of change rather than inspected forever.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A survey lists every small bore connection and deadleg with a risk rating, deadlegs are in the plan, and high-risk connections have closed work orders."
                cadence: cyclic
              tasks:
                - "Walk one unit area with a vibration pen and list unbraced small bore connections"
                - "Identify deadlegs from P&IDs and confirm each in the field"
                - "Add each confirmed deadleg to the inspection plan with monitoring locations"
                - "Repeat the small bore and deadleg survey across the unit @recurring(yearly)"
            - name: Corrosion under insulation programme
              description: |-
                ## Purpose
                Corrosion under insulation stays hidden until a pipe fails or the cladding is stripped, and insulated carbon steel operating in the damp temperature band is at particular risk in a humid climate. A programme following API RP 583 ranks insulated lines by susceptibility, chooses screening methods, removes insulation where the risk demands it and repairs cladding before water gets in.

                ## Milestones
                1. Insulated equipment and piping listed with operating temperature, material and coating age.
                2. Each item ranked for corrosion under insulation susceptibility.
                3. Screening methods chosen for each risk band, such as profile radiography or pulsed eddy current.
                4. High-risk locations inspected with insulation removed, and findings recorded.
                5. Damaged cladding and sealing repaired, with a yearly external survey scheduled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All insulated items carry a susceptibility ranking, high-risk locations have been inspected bare, and the external cladding survey repeats yearly."
                cadence: cyclic
              tasks:
                - "Pull the insulated line list with operating temperatures from the line designation table"
                - "Rank each insulated item for corrosion under insulation susceptibility"
                - "Plan insulation removal at the twenty highest-ranked locations"
                - "Survey external cladding damage across the unit before the wet season @recurring(yearly)"
            - name: Cathodic protection for buried pipe and tank bottoms
              description: |-
                ## Purpose
                Buried piping and tank floors cannot be inspected by walking past them, so cathodic protection and its records are the main evidence they are protected. Monthly rectifier checks and a yearly potential survey show whether protection is working before a tank floor perforates or a buried line leaks into the soil.

                ## Milestones
                1. Every cathodically protected asset listed with its system type, rectifiers and test posts.
                2. Rectifier output readings taken and logged each month.
                3. A yearly potential survey completed and compared with the protection criterion in the governing standard.
                4. Under-protected sections raised for repair with a target date.

                ## Notes
                Cathodic protection surveys need a qualified technician. The integrity engineer's job is to make sure they happen, are read correctly and are acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly rectifier readings are logged for a year, a yearly potential survey is on file, and every under-protected section has a repair date."
                cadence: rolling
              tasks:
                - "List all cathodically protected assets, rectifiers and test posts"
                - "Record rectifier voltage and current readings for the site @recurring(monthly:20)"
                - "Commission the yearly potential survey from a qualified technician @recurring(yearly)"
                - "Raise repair work orders for every under-protected section found"
            - name: Monthly integrity performance report
              description: |-
                ## Purpose
                Plant management cannot fund what they cannot see, and integrity tends to be noticed only after a leak. A one-page monthly report with the same handful of measures (overdue inspections, overdue recommendations, window exceedances, loss-of-containment events, relief devices overdue) gives leaders a trend they can act on and gives you the evidence to ask for resources.

                ## Milestones
                1. Five to seven integrity measures chosen, each with a clear definition and data source.
                2. A one-page report layout agreed with the plant manager.
                3. The report issued every month for six months running.
                4. One decision or resource change recorded that came from the report.

                ## Notes
                Start from the **Metrics log** template. Keep definitions fixed; a measure whose definition changes every quarter cannot show a trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page integrity report with fixed measures has been issued monthly for six months and has led to at least one recorded decision."
                cadence: rolling
              tasks:
                - "Choose five to seven integrity measures and write a definition for each"
                - "Agree the one-page layout with the plant manager"
                - "Ask the agent to draft the commentary from this month's measures"
                - "Issue the integrity performance report to plant management @recurring(monthly:25)"
            - name: Yearly integrity status review
              description: |-
                ## Purpose
                Once a year the whole picture deserves a look in one sitting: which mechanisms showed up, which plans were wrong, what the turnaround found, which items are nearing retirement thickness and what next year's budget needs. A written yearly review is also the evidence that the integrity programme learns rather than repeats itself.

                ## Milestones
                1. A summary of the year's inspections, findings and failures by corrosion loop.
                2. Inspection plans updated where findings contradicted predictions.
                3. Items within five years of retirement thickness listed with replacement or repair proposals.
                4. Next year's inspection scope and budget proposal agreed with maintenance and finance.
                5. The review signed off by the plant manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A signed yearly integrity review covers findings by loop, plan changes, items near retirement and next year's scope and budget."
                cadence: cyclic
                effort_hours_estimate: "24"
              tasks:
                - "Pull the year's inspection findings grouped by corrosion loop"
                - "List items within five years of retirement thickness"
                - "Draft next year's inspection scope and budget proposal"
                - "Hold the yearly integrity review with maintenance and operations leads @recurring(yearly)"
            - name: Damage mechanisms of the unit you look after
              description: |-
                ## Purpose
                Knowing a mechanism's name is not the same as knowing what it looks like, where it starts and what conditions accelerate it. Studying the ten or so mechanisms credible in your own unit in depth (for example sulphidation, chloride stress corrosion cracking, wet H2S damage, erosion, CUI) makes you the person who spots the odd finding in an inspection report that others would file away.

                ## Milestones
                1. The credible mechanisms for your unit listed from the corrosion loop study.
                2. A one-page note per mechanism covering appearance, susceptible materials, critical factors and inspection methods.
                3. At least three real examples found in your site's past reports or failed parts.
                4. The notes reviewed by a materials or corrosion engineer.

                ## Notes
                API RP 571 is the usual reference. Pair the reading with your site's failed part samples or photos; seeing the real thing fixes it in memory.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page notes exist for each credible mechanism in your unit, each with a real site example, and a corrosion engineer has reviewed them."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the credible mechanisms for your unit from the loop study"
                - "Write one page on the first mechanism using API RP 571"
                - "Find a site example of each mechanism in past inspection reports"
                - "Book a review of your notes with the corrosion engineer"
            - name: NDT methods, coverage and probability of detection
              description: |-
                ## Purpose
                Choosing ultrasonic spot readings to find pitting, or magnetic particle testing to find subsurface cracking, gives a clean report and a false sense of safety. Learning what each NDT method can and cannot detect, how coverage and surface preparation change that, and how probability of detection works lets you write scopes that actually find the damage you are worried about.

                ## Milestones
                1. A table matching common methods (UT, PAUT, TOFD, RT, MT, PT, eddy current, guided wave) to the damage types each detects.
                2. Limits for each method noted, including material, temperature, surface and geometry constraints.
                3. The idea of probability of detection explained with one worked example.
                4. One technique demonstrated by a qualified technician on site and its report read with them.

                ## Notes
                You do not need to be a certified technician to write a good scope, but you do need to know what question each method answers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A method selection table covering at least eight NDT techniques with their limits exists, and you have watched one technique applied on site."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a table of eight NDT methods and the damage types each finds"
                - "Add surface, temperature and geometry limits to each method"
                - "Ask an NDT contractor to demonstrate phased array on a site weld"
                - "Rewrite one existing inspection scope using what you learned"
            - name: Reading thickness data and corrosion maps
              description: |-
                ## Purpose
                Thickness grids, B-scans and corrosion maps from automated ultrasonic scanning carry far more information than a minimum reading, but only to someone who can read them. Practising on real datasets from your plant teaches you to tell general thinning from local pitting, recognise laminations and inclusions, and pick the right measurement for a remaining life calculation.

                ## Milestones
                1. Five real thickness datasets from your site reviewed, including at least one corrosion map.
                2. General metal loss, local thinning, pitting and laminations each identified correctly in an example.
                3. The critical thickness profile extracted from a corrosion map for an assessment.
                4. Your interpretations checked by a senior inspector.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have interpreted five site datasets, extracted a critical thickness profile from a corrosion map and had the interpretations confirmed by a senior inspector."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask a senior inspector for five datasets from recent surveys"
                - "Classify the metal loss in each dataset and note your reasoning"
                - "Extract a critical thickness profile from one corrosion map"
                - "Review one real thickness dataset with the senior inspector @recurring(monthly:22)"
            - name: Minimum required thickness calculations
              description: |-
                ## Purpose
                Retirement thickness is where remaining life ends, so an error in it moves every next inspection date. Working through pressure design thickness for shells, heads and piping to the construction code, then adding structural minimums and corrosion allowance, makes you able to check a contractor's figures and spot the circuit where the wrong code was applied.

                ## Milestones
                1. Pressure design thickness calculated by hand for a cylindrical shell, a head and a straight pipe.
                2. Structural minimum thickness rules for small piping understood and applied.
                3. Your figures matched against the inspection database for three items, with differences explained.
                4. A calculation sheet set up with inputs, references and an independent check.

                ## Notes
                Use the code edition the item was built to for the design formula. Joint efficiency, allowable stress and temperature all matter, and data books state them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hand calculations of minimum required thickness for three item types agree with the database or have documented differences, and a checked calculation sheet exists."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick one vessel and one piping circuit with complete data books"
                - "Calculate pressure design thickness for the shell, a head and the pipe"
                - "Compare your results with the retirement thickness in the database"
                - "Set up a checked calculation sheet for future items"
            - name: External visual inspection walk-downs
              description: |-
                ## Purpose
                Walking the plant monthly with a trained eye finds the weeping flange, the blistered coating, the missing pipe shoe and the dripping steam trap long before a scheduled inspection would. Regular walk-downs with a short checklist build your feel for the plant and give operators a reason to tell you what they have noticed.

                ## Milestones
                1. A walk-down route covering the unit split into manageable sections.
                2. A checklist covering supports, coatings, leaks, insulation damage, vibration and bolting.
                3. Findings logged with photos, location and a priority.
                4. Twelve monthly walk-downs completed, with findings raised as notifications.

                ## Notes
                Start from the **Operational checklist** template. Walk with an operator when you can; they know which drain has been weeping for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly walk-downs are recorded with photos and findings, and every finding has a notification or a reason for no action."
                cadence: rolling
              tasks:
                - "Split the unit into walk-down sections and plan a route"
                - "Write a one-page external visual checklist"
                - "Walk one unit section with an operator and log findings @recurring(monthly:15)"
                - "Raise notifications for every finding that needs work"
            - name: Inspection reports that state fitness and next date
              description: |-
                ## Purpose
                An inspection report that lists readings and photos but never says whether the item is fit to return to service, and until when, leaves the decision to whoever reads it at two in the morning. Learning to write reports that state the finding, the mechanism, the assessment, the fitness conclusion, any conditions and the next inspection date makes your work usable by operations and defensible in an audit.

                ## Milestones
                1. A report structure agreed covering scope, method, findings, mechanism, assessment, fitness statement and next date.
                2. Three recent reports rewritten in the new structure.
                3. Every finding in those reports linked to a recommendation with a priority.
                4. The structure adopted for all inspection reports in your team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An agreed report structure with a fitness statement and next date is in use, and three reports have been rewritten to it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect three recent inspection reports from your site"
                - "Draft a report structure ending in a fitness statement and next date"
                - "Rewrite the three reports to the new structure"
                - "Present the structure to the inspection team for adoption"
            - name: Materials and weld metallurgy for integrity work
              description: |-
                ## Purpose
                Many integrity decisions turn on metallurgy: whether a weld was post-weld heat treated, whether a hardness reading means cracking risk, whether a replacement material is a fair substitute. A working knowledge of carbon and low alloy steels, stainless steels, heat affected zones, hardness limits and positive material identification lets you ask the right questions of the welding engineer and the vendor.

                ## Milestones
                1. Notes covering the main material groups on your site and their typical damage susceptibilities.
                2. Post-weld heat treatment, hardness limits and heat affected zones explained in your own words.
                3. A positive material identification programme on your unit reviewed against its records.
                4. One material substitution request reviewed with a welding or materials engineer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on site material groups, heat treatment and hardness exist, and you have reviewed one substitution request with a materials engineer."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "List the material groups used in your unit from the line designation table"
                - "Write notes on heat treatment, hardness and heat affected zones"
                - "Review the positive material identification records for your unit"
                - "Sit in on a welding procedure review with the welding engineer"
            - name: Choosing qualitative or quantitative RBI
              description: |-
                ## Purpose
                Risk-based inspection under API 580 and API 581 can redistribute inspection effort from low-risk to high-risk items, but a quantitative programme needs clean data, software and trained people, and a poorly fed model gives confident wrong answers. Comparing qualitative, semi-quantitative and quantitative approaches against your data quality and resources leads to a recorded choice rather than a sales pitch.

                ## Milestones
                1. The data each approach needs listed and compared with what your register actually holds.
                2. Costs, staffing and software needs estimated for each approach.
                3. A pilot on one corrosion loop run with the preferred approach.
                4. A recommendation with the reasons and limits written and approved by the integrity manager.

                ## Notes
                RBI changes intervals, not duties. Statutory intervals and code maximums still apply unless the regulator or insurer has agreed otherwise in writing.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written, approved recommendation on the RBI approach exists, supported by a one-loop pilot and a data gap comparison."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the data fields API 581 needs and check which your register holds"
                - "Estimate cost and staffing for qualitative and quantitative options"
                - "Run a pilot risk ranking on one corrosion loop"
                - "Write the recommendation and submit it to the integrity manager"
            - name: Inspection data management system selection
              description: |-
                ## Purpose
                Integrity data spread across spreadsheets, PDFs and a maintenance system cannot calculate rates, warn of due dates or survive the departure of the engineer who built it. Choosing an inspection data management system against your own requirements, with a data migration plan, is a decision you will live with for a decade, so it deserves a structured comparison.

                ## Milestones
                1. Requirements written covering registers, plans, readings, calculations, recommendations and integration with maintenance.
                2. Three systems or a build option compared against the same requirements.
                3. Data migration effort and data cleansing needs estimated for each.
                4. A demonstration with your own data held for the two leading options.
                5. A recommendation approved with budget and owner.

                ## Notes
                Start from the **Purchase decision** template. Migration and data cleansing usually cost more than the licence; ask vendors for references at similar sites.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved recommendation for an inspection data system, with requirements scoring, migration estimate and budget, is on file."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page list of must-have and nice-to-have requirements"
                - "Shortlist three systems and request demonstrations with sample site data"
                - "Estimate migration effort for each option"
                - "Present the recommendation to the integrity manager for approval"
            - name: Non-intrusive inspection instead of vessel entry
              description: |-
                ## Purpose
                Opening a vessel for internal inspection means shutdown, isolation, cleaning, confined space entry and the risk of damage on reassembly. Where the damage mechanisms are well understood, external techniques can give equal or better information. Assessing one vessel for non-intrusive inspection, with a clear case for when it is and is not acceptable, can save a shutdown and a confined space entry without lowering confidence.

                ## Milestones
                1. A candidate vessel chosen with its mechanisms, history and internal inspection findings summarised.
                2. Suitability assessed against recognised non-intrusive inspection guidance.
                3. An external inspection scope written with methods, coverage and acceptance criteria.
                4. The case reviewed by the inspection lead and, where needed, the regulator or insurer.
                5. A recorded decision on intrusive or non-intrusive inspection for the next interval.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented decision on intrusive or non-intrusive inspection for one vessel, with the external scope and reviewer approval, is on file."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a vessel with a long, clean internal inspection history"
                - "Summarise its mechanisms and every past internal finding"
                - "Draft a non-intrusive scope with methods and coverage"
                - "Ask the insurer whether a non-intrusive inspection is acceptable for this vessel"
            - name: Material upgrade or corrosion allowance decision
              description: |-
                ## Purpose
                Circuits that need replacing every four years can be replaced like for like again, upgraded to a better alloy, lined, or protected with inhibitor. Each option has a different first cost, life, inspection burden and process risk. Comparing them on whole-life cost and risk gives the plant a decision it will not revisit at every turnaround.

                ## Milestones
                1. The circuit's history of replacements, rates and failures summarised.
                2. Three or more options described with their expected life and inspection needs.
                3. Whole-life cost compared over a set period, including downtime and inspection.
                4. Process and materials risks for each option reviewed with the materials engineer.
                5. A decision recorded and raised through management of change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A whole-life comparison of at least three options for one high-rate circuit leads to a recorded decision raised through management of change."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick the circuit with the most frequent replacements in the last ten years"
                - "Summarise its rates, replacements and failure history"
                - "Compare like-for-like, alloy upgrade, lining and inhibitor on whole-life cost"
                - "Raise the chosen option through management of change"
            - name: Repair method selection for a wall loss finding
              description: |-
                ## Purpose
                When a finding drops below retirement thickness the options range from a weld repair or replacement to a bolted clamp, a composite wrap or a weld overlay, each with different limits, approvals and inspection needs afterwards. Working through ASME PCC-2 style options for a real finding, with the conditions under which each is temporary or permanent, means the next urgent repair is chosen on merit rather than on whoever is available.

                ## Milestones
                1. Repair options for one real finding listed with their technical limits and approvals.
                2. Each option checked for design life, inspection after repair and whether it is temporary.
                3. The chosen repair designed or specified with its own inspection plan.
                4. Temporary repairs entered in a register with an expiry date and permanent fix planned.

                ## Notes
                Temporary repairs have a way of becoming permanent. Every one should have an expiry date, an owner and a place in the inspection plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One finding has a documented repair selection with limits and an inspection plan, and all temporary repairs sit in a register with expiry dates."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pick a current finding near retirement thickness"
                - "List weld, clamp, composite and replacement options with their limits"
                - "Specify the chosen repair and its post-repair inspection"
                - "Set up a temporary repair register with expiry dates and owners"
            - name: Drone and robotic inspection trial
              description: |-
                ## Purpose
                Flare tips, tall columns, tank roofs and boiler interiors are expensive and risky to reach with scaffolding or rope access. Drones, magnetic crawlers and confined space robots can now carry visual and ultrasonic sensors into places people struggle to reach. A structured trial on two or three real jobs shows whether the data is good enough and the savings are real before you change any scope.

                ## Milestones
                1. Two or three candidate jobs chosen where access cost or risk is high.
                2. Data quality requirements written for each job before the trial.
                3. Trials completed with permits, and results compared with conventional methods where possible.
                4. A cost, safety and data quality comparison written up with a recommendation.

                ## Notes
                Flying near live plant still needs a permit and a hazardous area review. Treat the drone as equipment entering the site, not a camera.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Trials on at least two real jobs are complete, and a written comparison of cost, safety and data quality ends in a recommendation."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List jobs where scaffolding or rope access cost dominates the inspection"
                - "Write data quality requirements for the two best candidate jobs"
                - "Invite two remote inspection contractors to propose a trial"
                - "Compare trial results with past conventional inspections"
            - name: Clearing the overdue inspection backlog
              description: |-
                ## Purpose
                Overdue inspections are a risk that grows quietly, and on stretched sites they can run to hundreds of items. Clearing it needs triage by risk, a realistic plan that the maintenance schedule can absorb, and honest deferral assessments for the items that genuinely cannot be done yet.

                ## Milestones
                1. The backlog listed and ranked by risk, with statutory items first.
                2. Items that can be done on-stream separated from those needing a shutdown.
                3. A monthly burn-down plan agreed with the maintenance planner and contractors.
                4. Formal deferrals completed for items held to the next shutdown.
                5. The backlog reduced to a level agreed with the plant manager.

                ## Notes
                Start from the **Remediation plan** template to set the target, owners and monthly milestones.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The overdue backlog has been ranked, planned and reduced to the target agreed with the plant manager, with formal deferrals for the remainder."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Export every overdue inspection and sort statutory items to the top"
                - "Rank the remaining backlog by consequence and remaining life"
                - "Agree a monthly burn-down target with the maintenance planner"
                - "Write formal deferrals for items that must wait for a shutdown"
            - name: External coating survey and repaint priorities
              description: |-
                ## Purpose
                In a hot, humid, salt-laden coastal climate, coating breakdown turns into external corrosion fast, and painting budgets are always smaller than the area that needs it. A coating condition survey graded to a standard scale, ranked by the consequence of failure underneath, lets the painting budget go where it protects the most metal.

                ## Milestones
                1. Coating condition graded across the unit using a recognised rust and breakdown scale.
                2. Areas ranked by coating condition, substrate risk and consequence of failure.
                3. A three-year painting priority list with estimated areas and costs.
                4. The first year's priorities included in the maintenance budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A graded coating survey and a costed three-year painting priority list exist, and year one is in the maintenance budget."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose a coating breakdown grading scale and photo references"
                - "Survey and grade coating condition across the unit"
                - "Rank areas by condition and consequence of failure"
                - "Submit the year one painting list to the maintenance budget"
            - name: Inspection scope for the next turnaround
              description: |-
                ## Purpose
                Shutdowns are the only chance to inspect many internals, and inspection scope that arrives late or vague causes either missed inspections or scope growth that blows the schedule. Freezing a justified inspection scope early, with inspection and test plans per item, gives the turnaround team something they can schedule and staff.

                ## Milestones
                1. Items needing shutdown inspection listed from the inspection plans and deferrals.
                2. Each item's scope justified by mechanism and remaining life, with optional scope separated.
                3. Inspection and test plans written for each item, with hold points and acceptance criteria.
                4. NDT and inspector resource needs estimated and passed to the turnaround planner.
                5. The scope frozen and approved by the deadline the turnaround team set.

                ## Notes
                Plan for discovery. Agree in advance how emergent findings will be assessed and approved during the shutdown, and who has authority to extend scope.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A frozen, approved turnaround inspection scope with inspection and test plans for every item is delivered to the turnaround planner by the scope freeze date."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Ask the turnaround manager for the scope freeze date"
                - "List every item whose inspection plan calls for a shutdown"
                - "Write inspection and test plans with hold points for each item"
                - "Agree the emergent findings approval process with the turnaround manager"
            - name: Regulator or insurer integrity audit
              description: |-
                ## Purpose
                A visit from the pressure equipment regulator or the insurer's engineering surveyor tests whether your records match your claims. Preparing the evidence they usually ask for (certificates, inspection plans, recommendation status, relief device records, deferrals) turns a stressful week into a short one and avoids conditions on the operating permit or the policy.

                ## Milestones
                1. The audit scope and document request confirmed with the auditor.
                2. Evidence for each requested area gathered and checked for gaps.
                3. Known gaps addressed or explained with a dated plan.
                4. The audit hosted, with every finding recorded.
                5. Audit findings closed or tracked in the recommendation register.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit is completed with evidence supplied for every requested area, and every finding is closed or tracked with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Ask the auditor for the scope and document request list"
                - "Gather certificates, plans, deferrals and relief device records"
                - "Write a dated plan for every gap found during preparation"
                - "Enter every audit finding in the recommendation register"
            - name: Pressure test after a repair or alteration
              description: |-
                ## Purpose
                A hydrostatic or pneumatic test after a repair stores energy in the equipment, and a failure during a pneumatic test can be violent. Planning the test to the governing code, with a calculated test pressure, an exclusion zone, a permit and a clear stop-work rule, protects the people nearby and gives a record that the repair is sound.

                ## Milestones
                1. The test method and pressure calculated from the governing code and checked independently.
                2. A written test procedure covering fill, hold, inspection and depressurisation.
                3. Exclusion zone, permit to work and gauge calibration confirmed before pressurisation.
                4. The test witnessed and the record signed by the inspector.
                5. The test record filed against the equipment tag.

                ## Notes
                Pneumatic testing needs specific justification and extra safeguards because of stored energy. Anyone on site can stop the test if something looks wrong, and that authority should be stated in the briefing.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pressure test with a checked test pressure, written procedure, permit and witnessed signed record is filed against the equipment tag."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Calculate the test pressure from the code and have it checked"
                - "Write the test procedure with hold times and exclusion zone"
                - "Confirm the permit, gauge calibration certificates and relief protection"
                - "Brief the test team on the exclusion zone and stop-work authority @priority(high)"
            - name: Internal vessel inspection under confined space entry
              description: |-
                ## Purpose
                Internal inspection finds what external methods miss: pitting under deposits, lining failures, cracked nozzle welds, damaged internals. It also means entering a confined space that recently held hydrocarbons or toxic gas. Preparing the inspection so the inspector spends their time looking, not waiting, while every isolation, gas test and rescue arrangement is in place, gets the data safely.

                ## Milestones
                1. An internal inspection plan with areas, methods and acceptance criteria ready before the vessel opens.
                2. Positive isolation, cleaning, gas testing and the entry permit confirmed with the permit authority.
                3. A standby person and rescue plan in place for the entry.
                4. The inspection completed with findings photographed and located on a vessel sketch.
                5. Findings reported with a fitness statement before the vessel is closed.

                ## Notes
                Start from the **Operational checklist** template for the pre-entry checks. Never enter on the strength of someone else's word that the gas test was fine; check the permit yourself.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An internal inspection is completed under a valid entry permit with findings located, photographed and reported with a fitness statement before box-up."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull the vessel drawing and mark areas to inspect inside"
                - "Confirm isolation, cleaning and gas test arrangements with the permit authority"
                - "Check the confined space permit and rescue plan before entering @priority(high)"
                - "Report findings with a fitness statement before the vessel is boxed up"
            - name: Out-of-service storage tank inspection
              description: |-
                ## Purpose
                Tank floors corrode from both sides, and a floor leak can go unnoticed for months while product soaks into the ground. An out-of-service inspection to API 653, with floor scanning, shell and nozzle checks, settlement survey and a calculated next interval, is a large, dated event that needs months of preparation for cleaning, waste and contractors.

                ## Milestones
                1. The tank's history, last inspection and floor corrosion rate summarised.
                2. Cleaning, degassing and waste disposal arranged with operations and environmental staff.
                3. Floor scan, shell, roof, nozzle and settlement inspections completed.
                4. Repairs specified and completed, with a hydrotest or other check where required.
                5. The next internal interval calculated and recorded.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An out-of-service tank inspection is completed with floor scan, shell and settlement data, repairs closed and the next interval recorded."
                cadence: phased
                effort_hours_estimate: "70"
              tasks:
                - "Summarise the tank's last inspection and floor corrosion rate"
                - "Agree the out-of-service window and cleaning plan with operations"
                - "Contract floor scanning and settlement survey services"
                - "Calculate and record the next internal interval after repairs"
            - name: First ninety days as a graduate integrity engineer
              description: |-
                ## Purpose
                Graduates joining an inspection team are handed a tablet of thickness readings and a stack of reports, and it can be months before anyone explains what they mean. A structured first ninety days, with a mentor, field time with inspectors and one owned piece of work, gets you contributing quickly and builds the habits the rest of this area depends on.

                ## Milestones
                1. A mentor agreed and weekly check-ins booked.
                2. At least ten days of field time with inspectors and NDT technicians logged.
                3. The site's integrity procedures, register and database read and summarised.
                4. One owned deliverable completed, such as rates for a circuit or a set of inspection plans.
                5. A development plan agreed for the next year.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask to see a failed part or a cut-out pipe section in the first month; it makes the textbook real.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At ninety days you have logged ten field days, completed one owned deliverable and agreed a development plan with your mentor."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager to name a mentor in the inspection team"
                - "Book field days with inspectors for the coming month"
                - "Review the week's site findings with your mentor @recurring(weekly:fri)"
                - "Agree one owned deliverable for your first ninety days"
            - name: Contract inspector on an unfamiliar site
              description: |-
                ## Purpose
                Third-party and contract inspectors arrive at a new plant with a scope, a permit induction and little context, and they are expected to sign off findings within days. Preparing a short routine for each new site (scope clarification, client procedures, acceptance criteria, reporting format, who has authority to accept a deviation) protects your name on the report and the client's equipment.

                ## Milestones
                1. A standard question list for the client covering scope, procedures, criteria and reporting.
                2. Client inspection procedures and acceptance criteria received before mobilisation.
                3. The person who can approve deviations and emergent scope named in writing.
                4. Reports issued in the client's format with your certification details.
                5. A short close-out note handed over with open items and their owners.

                ## Notes
                If acceptance criteria are unclear, ask before you inspect, not after. Signing to criteria you did not have is how inspectors end up in incident reports.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "For one assignment, scope, criteria and deviation authority were confirmed in writing before work started and a close-out note was handed over."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a standard question list to send each new client"
                - "Ask the client for procedures and acceptance criteria before mobilising"
                - "Get the name of the person who approves deviations in writing"
                - "Hand over a close-out note listing open items and owners"
            - name: Choosing an inspector certification route
              description: |-
                ## Purpose
                Inspection careers are built on recognised individual certifications, and the routes differ: API individual certifications for in-service vessels, piping and tanks, NDT personnel certification schemes under ISO 9712 or employer-based schemes, and welding inspection schemes. Choosing the route that fits your role, region and employer, and checking the experience each needs, avoids spending a year preparing for the wrong one.

                ## Milestones
                1. The certifications your employer and clients actually ask for listed.
                2. Experience, education and exam requirements for two or three options checked on each body's website.
                3. Your logged experience compared against each option.
                4. One route chosen, with a target sitting window and a study plan.

                ## Notes
                Requirements, fees and exam dates change. Check them on the awarding body's website before planning around them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen certification route is recorded with checked eligibility requirements, your experience log and a target sitting window."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your manager and two clients which certifications they require"
                - "Check the eligibility requirements for each option on the body's website"
                - "Compare your logged experience with each set of requirements"
                - "Record the chosen route and a target sitting window"
            - name: Integrity on a small site with no inspection team
              description: |-
                ## Purpose
                On a small plant, a terminal or a utility site, one engineer often holds integrity alongside maintenance, projects and safety. You cannot run every system in this area, so the job is to cover the legal minimum, the highest consequences and the records, and to buy in specialist inspection well. A lean programme designed for one person keeps the essentials alive without pretending to be a refinery.

                ## Milestones
                1. Statutory items and the highest-consequence equipment identified as the core scope.
                2. A short list of contract inspection and NDT providers with agreed rates.
                3. A one-page integrity calendar covering statutory dates, relief devices and walk-downs.
                4. Records kept in one place that a successor could pick up.
                5. A monthly hour set aside for integrity that is protected in your diary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page integrity calendar covering statutory and relief device dates is in use, records are in one place, and the monthly integrity hour has been kept for six months."
                cadence: rolling
              tasks:
                - "List statutory items and the five highest-consequence items on site"
                - "Get rates from two contract inspection providers"
                - "Draw up a one-page integrity calendar for the year"
                - "Spend one protected hour on integrity records and dates @recurring(monthly:3)"
            - name: Taking over an integrity portfolio from a leaver
              description: |-
                ## Purpose
                When an integrity engineer moves on, much of what they know is not in the database: the circuit they were worried about, the deferral they agreed verbally, the vendor they did not trust. A structured handover in the leaver's last weeks, followed by a review of every open item, means nothing falls between owners.

                ## Milestones
                1. A handover meeting held covering open recommendations, deferrals, concerns and pending decisions.
                2. Every item the leaver was worried about written down with the reason.
                3. Open recommendations and deferrals transferred to your name in the register.
                4. Verbal agreements turned into recorded decisions or reopened.
                5. A thirty-day review of the portfolio completed with your own priorities.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written handover note lists the leaver's concerns, open items and verbal agreements, and every open item is in your name in the register within thirty days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book two handover sessions with the leaving engineer before their last week"
                - "Ask them which three items worry them most and write down why"
                - "Ask the agent to draft a handover note from your session notes"
                - "Transfer open recommendations and deferrals into your name"
            - name: Fitness-for-service assessment for local metal loss
              description: |-
                ## Purpose
                Finding wall thickness below retirement does not always mean the item must come out of service today. A fitness-for-service assessment to API 579-1 and ASME FFS-1 uses the measured thickness profile, the loading and the material to decide whether the item can run safely, at what pressure and until when. Doing Level 1 and Level 2 assessments yourself, and knowing when a Level 3 specialist is needed, turns an emergency into an engineering decision.

                ## Milestones
                1. One real local thinning finding chosen with its full thickness data and design data.
                2. A Level 1 assessment completed and its result understood.
                3. A Level 2 assessment completed using the critical thickness profile.
                4. Remaining life and a reassessment date calculated with future corrosion allowance stated.
                5. The assessment independently checked and signed by a qualified engineer.

                ## Notes
                Fitness-for-service is a signed engineering judgement, often with legal weight. Have every assessment checked independently, and state its limits and assumptions plainly.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A Level 1 and Level 2 assessment for one real finding is complete, independently checked and signed, with remaining life and a reassessment date stated."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Pick a recent local thinning finding with a full corrosion map"
                - "Work the Level 1 assessment and note what limits it"
                - "Complete the Level 2 assessment from the critical thickness profile"
                - "Have the assessment checked independently and signed"
            - name: High temperature hydrogen attack and sulphidation screening
              description: |-
                ## Purpose
                Some of the most damaging failures in refining and petrochemicals come from high temperature hydrogen attack in carbon and low alloy steels, and from sulphidation in carbon steel with low silicon. Screening hydrogen service equipment against current API RP 941 curves and sulphidation-prone circuits against API RP 939-C finds the items that need specialist inspection or replacement before they fail.

                ## Milestones
                1. Equipment in hydrogen service listed with material, operating temperature and hydrogen partial pressure.
                2. Each item screened against the current edition of the hydrogen attack curves.
                3. Sulphidation-prone carbon steel circuits identified and the need for silicon testing assessed.
                4. Items above or near the curves sent for specialist inspection or replacement planning.
                5. The screening issued and linked to the inspection plans.

                ## Notes
                The hydrogen attack curves have been revised after failures; carbon steel assessments based on older editions may need redoing. Check you are working from the current edition.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A screening report covers every hydrogen service item and every sulphidation-prone carbon steel circuit, with at-risk items in the inspection plan or replacement list."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List equipment in hydrogen service with temperature and partial pressure"
                - "Screen each item against the current API RP 941 curves"
                - "Identify carbon steel circuits in sulphidation service from the loop study"
                - "Send items near the curves for specialist inspection planning"
            - name: Heat exchanger tube inspection and retubing decisions
              description: |-
                ## Purpose
                Exchanger bundles fail by pitting, erosion at tube inlets, vibration wear at baffles and under-deposit corrosion, and a leaking tube can cross-contaminate a whole system. Interpreting eddy current, IRIS or remote field results against tube wall loss criteria, and tracking plugged tubes against the bundle's thermal margin, leads to timely retubing rather than emergency replacements.

                ## Milestones
                1. Exchangers listed with tube material, number of tubes plugged and last tube inspection.
                2. The right tube inspection technique chosen for each tube material.
                3. Results interpreted against agreed wall loss plugging criteria.
                4. Plugging limits agreed with process engineering based on thermal margin.
                5. A retubing or replacement forecast for bundles approaching their plugging limit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every exchanger has a recorded plugging count and limit agreed with process engineering, and bundles near the limit are in a retubing forecast."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List exchangers with tube material and plugged tube count"
                - "Match each tube material to a suitable tube inspection technique"
                - "Agree plugging limits with process engineering for each bundle"
                - "Forecast retubing for bundles near their plugging limit"
            - name: Fired heater tube remaining life
              description: |-
                ## Purpose
                Heater tubes run in the creep range, where remaining life depends on how hot the metal has actually been, not on design data. Combining tube metal temperature records, thickness and diameter measurements and creep assessment methods such as those in API 530 and API 579-1 gives a defensible estimate of when tubes need replacing, and shows operations what a hot spot costs in tube life.

                ## Milestones
                1. Tube metal temperature history gathered from thermocouples and infrared surveys.
                2. Tube thickness and diameter growth measurements collected from the last inspections.
                3. Creep life consumed estimated with a recognised method, with assumptions stated.
                4. A tube replacement forecast and a temperature limit recommendation issued.
                5. The estimate checked by a specialist and linked to the heater integrity window.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A checked creep life estimate for one heater, based on recorded tube temperatures and measurements, leads to a replacement forecast and a temperature limit."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Extract three years of tube metal temperatures from the historian"
                - "Collect thickness and diameter measurements from past heater inspections"
                - "Estimate creep life consumed using a recognised method"
                - "Send the estimate to a heater specialist for review"
            - name: In-line inspection data review for a pipeline
              description: |-
                ## Purpose
                Each pigging run produces thousands of reported anomalies, and the job of the integrity engineer is to decide which need digging up, which need repair and which are acceptable until the next run. Reviewing in-line inspection data against an assessment method such as ASME B31G and an integrity management standard such as ASME B31.8S, with field verification digs, turns a vendor report into a defensible repair plan.

                ## Milestones
                1. The in-line inspection report received with the tool type, sizing tolerances and anomaly list.
                2. Anomalies screened with the chosen assessment method and ranked by urgency.
                3. Verification digs planned and results compared with tool sizing.
                4. A repair and response plan issued with dates by urgency category.
                5. The next run interval set from growth rates and the integrity standard.

                ## Notes
                Tool sizing tolerances matter. Assess anomalies with the tolerance applied, and use dig results to check whether the tool is over or under calling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An in-line inspection review ranks every reported anomaly, is checked against verification digs and produces a dated repair plan and next run interval."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Request the full anomaly listing and tool tolerances from the vendor"
                - "Screen anomalies with the chosen assessment method and rank them"
                - "Plan verification digs at the highest-ranked anomalies"
                - "Issue the repair plan and set the next run interval"
            - name: Life extension assessment for an ageing asset
              description: |-
                ## Purpose
                Many plants in the region are running well past their original design life, and a single number on a design basis no longer says much. A life extension assessment looks across damage mechanisms, inspection history, obsolescence and changed operating conditions to state which items can keep running, which need upgrade and which must be replaced. It is the work that informs a board's decision to keep a facility running for another fifteen years.

                ## Milestones
                1. The scope defined by system, with the target extension period agreed.
                2. Each critical item's condition, mechanisms and remaining life summarised from records.
                3. Items with missing data inspected or flagged as uncertain.
                4. Each item categorised as continue, monitor, upgrade or replace, with the reason.
                5. A costed life extension plan issued and reviewed by the asset owner.

                ## Notes
                Ageing is about more than wall thickness. Include obsolete spares, changed process conditions, lost design knowledge and fatigue from cycling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A costed life extension plan categorises every critical item in scope as continue, monitor, upgrade or replace, and the asset owner has reviewed it."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Agree the target extension period and system scope with the asset owner"
                - "Summarise condition and remaining life for each critical item"
                - "List items with missing data for inspection"
                - "Categorise each item and estimate the cost of the plan"
---

# Asset Integrity and Inspection

Asset integrity is the quiet work of knowing, item by item, how each vessel, pipe, tank and relief valve is degrading and when it must next be looked at, and being able to prove it. These projects start with the foundations of an equipment register, corrosion loops, inspection plans, integrity operating windows and statutory dates, then build the operating machinery of due-date reviews, corrosion rates, coupons, recommendations and reporting, the skills of damage mechanisms, NDT and thickness data, the decisions on risk-based inspection, repairs and tools, the dated events of entries, pressure tests and audits, the different seats an integrity engineer or inspector sits in, and the specialist work of fitness-for-service, high temperature damage, pipelines and life extension.

The repeating rhythm is a weekly look at integrity operating window alarms and open recommendations, monthly due-date, coupon, cathodic protection and walk-down checks, a monthly integrity report, quarterly corrosion rate updates and a yearly integrity review with the CUI and small bore programmes reset. The Metrics log, Purchase decision, Remediation plan, Operational checklist and Onboarding 30/60/90 templates pair with the projects that keep a standing record or need a structured start. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
