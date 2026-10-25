---
id: engineering-practice.energy-transition-engineering-projects
name: Energy Transition Engineering Projects
description: "Lower-carbon engineering that survives scrutiny: a measured emissions baseline, screened and costed options, flare and methane cuts, solar, storage, carbon capture and hydrogen studies, and savings proved after the work is done."
category: business
version: 1.0.0
tags: [engineering-practice, energy-transition-engineering-projects, engineer, decarbonisation, solar-pv, carbon-capture, green-hydrogen, energy-efficiency]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - purchase-decision
    - risk-register
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Energy Transition Engineering Projects
          description: "Engineering lower-carbon projects in the region: utility-scale solar, carbon capture, green hydrogen studies, flare reduction and energy efficiency in existing plants."
          projects:
            - name: Site emissions baseline by source
              description: |-
                ## Purpose
                Every credible transition project starts from a number, and most plants cannot say how many tonnes of CO2 equivalent come from fired heaters, gas turbines, flares, vents, process CO2 and purchased power. Building a source by source baseline for one full year, with the method and data quality noted for each line, gives every later study a fixed reference and stops two teams claiming the same tonnes.

                ## Milestones
                1. A source list covering combustion, flaring, venting, fugitive, process and purchased electricity emissions, each with an owner.
                2. Twelve months of activity data gathered for every source, with the meter or estimate behind each figure named.
                3. Emission factors chosen and referenced for each fuel and source type.
                4. A baseline table in tonnes of CO2 equivalent, split by source, signed off by the area lead.

                ## Notes
                Choose the baseline year deliberately. A year with a long turnaround or a gas curtailment will flatter every reduction claimed against it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed baseline table lists annual tonnes of CO2 equivalent for every emission source on site, with data source and factor recorded per line."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List every fired unit, flare, vent and process CO2 stream on the plot plan"
                - "Request twelve months of fuel gas and flare meter data from the historian"
                - "Record the emission factor and reference used for each source"
                - "Total the baseline by source and send it to the area lead for sign-off"
            - name: Greenhouse gas accounting boundary and method note
              description: |-
                ## Purpose
                Emissions figures fall apart in review when nobody wrote down whether the boundary is operational or equity control, which gases are counted, which global warming potentials were used and how purchased power is treated. A short method note, aligned to the GHG Protocol or ISO 14064 family and agreed before any project claims a reduction, settles those questions once.

                ## Milestones
                1. The organisational boundary chosen and justified in a paragraph.
                2. Gases in scope and the global warming potential set named, with the source edition.
                3. Rules for scope 2 electricity, exported power and steam, and shared utilities written down.
                4. A recalculation rule stating when the baseline must be restated.
                5. The note approved by the environmental lead and filed with the baseline.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved method note fixes the boundary, gases, warming potentials, electricity treatment and recalculation rule for all site emissions work."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the environmental lead which reporting standard the company already follows"
                - "Draft the boundary, gases and warming potential section on two pages"
                - "Write the rule for counting exported power, steam and shared utilities"
                - "Circulate the note for approval and file the signed copy with the baseline"
            - name: Screening criteria for low-carbon project ideas
              description: |-
                ## Purpose
                Most sites have more ideas than engineering hours, and without agreed criteria the loudest proposal gets studied first. Setting a scoring sheet that weighs tonnes abated, cost per tonne, technology readiness, safety change, shutdown needs and interfaces with the existing plant lets the team rank twenty ideas in an afternoon and defend the ranking.

                ## Milestones
                1. Six to eight screening criteria defined, each with a one-line scoring rule.
                2. Weights agreed with operations, finance and the technical authority.
                3. Five past or current ideas scored as a trial, with the results discussed.
                4. The final sheet issued as the standard entry gate for new ideas.

                ## Notes
                Keep a hard stop for any idea that adds a major hazard without a credible safeguard. Score it, but do not let a good cost per tonne carry it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weighted screening sheet with scoring rules is agreed by operations, finance and the technical authority and used on at least five ideas."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft six to eight criteria with a one-line scoring rule for each"
                - "Book a one-hour session with operations, finance and the technical authority"
                - "Score five existing ideas on the sheet and compare against gut ranking"
                - "Issue the agreed sheet as the entry gate for new ideas"
            - name: Regional energy policy and target register
              description: |-
                ## Purpose
                Project economics in the region swing on policy: national emissions pledges, renewable energy targets, feed-in or wheeling rules, import duty relief on solar equipment and any carbon pricing. Keeping one register of the instruments that affect your projects, for example Trinidad and Tobago's industrial emissions pledge or Barbados's renewable electricity goal, means studies use current rules rather than last year's slide deck.

                ## Milestones
                1. A register listing each target, law, tariff rule and incentive that touches your project types.
                2. The issuing body, date and official source recorded for every entry.
                3. A note on what each entry changes in a study: tariff, duty, permit or timeline.
                4. The register shared with the commercial and regulatory teams for correction.

                ## Notes
                Policy summaries go stale quickly. Treat the register as a pointer to official documents and confirm anything that drives a decision with the regulatory team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A register of at least ten policy instruments, each with official source, date and study impact, has been reviewed by the regulatory team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the countries where your projects sit and their energy ministries"
                - "Record each renewable target, tariff rule and duty incentive with its source"
                - "Note what each entry changes in a project study"
                - "Send the register to the regulatory team and log their corrections"
            - name: Marginal abatement cost curve for the site
              description: |-
                ## Purpose
                A cost curve puts every reduction option on one chart, ranked by cost per tonne of CO2 equivalent avoided and sized by tonnes, so management can see which projects pay for themselves and which need a carbon price or grant. Built honestly, with the same discount rate, energy prices and lifetimes for every option, it becomes the reference the portfolio is argued against.

                ## Milestones
                1. Ten to twenty options listed with abated tonnes taken from the site baseline.
                2. Capital, operating cost and energy saving estimated for each on a common basis.
                3. Cost per tonne calculated with one discount rate and stated price assumptions.
                4. The curve drawn and the three to five cheapest options highlighted.
                5. Sensitivities run for gas price and carbon price and shown beside the curve.

                ## Notes
                Options interact: a flare recovery unit and a turbine upgrade may claim the same fuel. Build the curve in the order projects would really be done and subtract as you go.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cost curve of at least ten options on a common economic basis, with gas and carbon price sensitivities, is presented to management."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pull ten to twenty options from the idea log and screening sheet"
                - "Agree the discount rate, gas price and asset life with finance"
                - "Estimate cost per tonne for each option and remove double counting"
                - "Draw the curve and run gas and carbon price sensitivities"
            - name: Grid interconnection data pack for renewable projects
              description: |-
                ## Purpose
                Grid questions kill or delay more solar projects than modules do. Collecting the utility's grid code, connection application process, fault levels and available capacity at nearby substations, protection philosophy and curtailment rules before any layout is drawn tells you early whether a 10 MW or a 100 MW plant is realistic at a given site.

                ## Milestones
                1. The current grid code and connection procedure obtained from the utility or regulator.
                2. Fault level, thermal capacity and planned upgrades listed for the three nearest substations.
                3. Requirements for reactive power, ride-through, frequency response and telemetry summarised.
                4. A named utility planning contact and the next connection study window recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A data pack holds the grid code, substation capacity and fault levels for three substations, and the technical connection requirements in summary."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download the current grid code and connection procedure"
                - "Request fault levels and spare capacity for the nearest substations"
                - "Summarise ride-through, reactive power and telemetry requirements on one page"
                - "Arrange an introductory call with the utility planning engineer"
            - name: Solar resource and site data collection
              description: |-
                ## Purpose
                Satellite irradiance datasets disagree by several percent in the tropics, and Saharan dust seasons, salt spray and afternoon convective cloud all affect yield in ways a generic model misses. Gathering at least two long-term datasets, any local ground measurements, soiling and rainfall data and a site survey gives the energy yield assessment something it can defend to a lender.

                ## Milestones
                1. Two independent long-term irradiance datasets downloaded and compared for the site.
                2. Local ground measurements, airport weather or nearby plant data found and assessed.
                3. Soiling, dust season and coastal salt exposure described from local evidence.
                4. Topography, drainage, flood history and access recorded from a site visit.
                5. A resource summary with an uncertainty estimate issued for the yield assessment.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A resource summary compares two irradiance datasets, records soiling and site conditions and states the resource uncertainty used for yield."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Download two long-term irradiance datasets for the site coordinates"
                - "Ask the meteorological service for nearby ground station records"
                - "Visit the site and photograph drainage, access and shading objects"
                - "Write the resource summary with a stated uncertainty band"
            - name: Transition opportunity long list with owners
              description: |-
                ## Purpose
                Ideas for cutting emissions sit in operators' heads, old studies, vendor proposals and audit reports, and they die when nobody owns them. A single long list, gathered through walk-downs and short interviews with each unit, with a named owner and a rough size for every entry, is the raw material the screening sheet works on.

                ## Milestones
                1. Old energy audits, flare studies and vendor proposals collected and read.
                2. Short interviews held with each unit's lead operator and process engineer.
                3. A long list of at least thirty ideas, each with a rough tonnes or energy estimate.
                4. Every idea assigned an owner and a screening date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A long list of at least thirty reduction ideas, each with an owner and a rough size, is ready for screening."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the document controller for past energy audits and flare studies"
                - "Book twenty-minute interviews with each unit's lead operator"
                - "Ask the agent to merge interview notes into one deduplicated idea list"
                - "Assign an owner and a screening date to every idea"
            - name: Levelised cost and cost per tonne methods
              description: |-
                ## Purpose
                Comparing a solar plant, a turbine upgrade and a capture unit needs common yardsticks: levelised cost of electricity, levelised cost of hydrogen and cost per tonne of CO2 avoided. Writing a short method guide with a worked example of each, using the same discount rate and degradation and availability assumptions, stops studies from quietly using different maths.

                ## Milestones
                1. Formulas for levelised cost of electricity, of hydrogen and cost per tonne written with every term defined.
                2. A worked example for each built in a checked spreadsheet.
                3. Standard assumptions for discount rate, asset life and degradation agreed with finance.
                4. The guide and spreadsheet issued as the area standard.

                ## Notes
                Cost per tonne avoided needs a counterfactual. Say what the project replaces, for example grid power from gas-fired generation, and use that grid's emission factor.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A method guide and a checked spreadsheet with worked examples for LCOE, LCOH and cost per tonne avoided are issued as the area standard."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the three formulas with every term defined"
                - "Build a worked example of each in a spreadsheet"
                - "Have a second engineer check the spreadsheet line by line"
                - "Agree standard assumptions with finance and issue the guide"
            - name: Monthly emissions and energy intensity dashboard
              description: |-
                ## Purpose
                Numbers reported once a year cannot steer anything. A monthly dashboard showing tonnes by source, energy per tonne of product and flare volumes against the baseline lets operations see the effect of a trip, a turnaround or a new project within weeks rather than at the annual report.

                ## Milestones
                1. Dashboard fields fixed: tonnes by source, energy intensity, flare volume and baseline line.
                2. Data feeds automated from the historian or a monthly extract.
                3. Three months of history loaded and checked against meter totals.
                4. The dashboard reviewed in the monthly operations meeting.

                ## Notes
                Start from the **Metrics log** template. Intensity per tonne of product is fairer than absolute tonnes when rates change with gas supply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard of monthly emissions, intensity and flare volume against baseline has been reviewed in at least three consecutive operations meetings."
                cadence: rolling
              tasks:
                - "List the historian tags behind each dashboard figure"
                - "Load three months of history and reconcile against meter totals"
                - "Update the dashboard and flag months more than ten percent off baseline @recurring(monthly:8)"
                - "Check the baseline against the recalculation rule and restate it if triggered @recurring(yearly)"
            - name: Flare and vent volume tracking routine
              description: |-
                ## Purpose
                Flaring is the most visible emission on a gas plant and often the cheapest to cut, yet flare meters drift, saturate at high flows and get ignored. A weekly check of flare and vent volumes by cause, with meter health noted, turns flaring from background noise into a list of events with owners.

                ## Milestones
                1. Every flare and vent header mapped with its meter, range and calibration date.
                2. Flare events classified by cause: trips, start-ups, relief, purge and continuous losses.
                3. A weekly flare report issued with the top three causes and owners.
                4. Continuous flaring above an agreed threshold logged as an improvement action.

                ## Notes
                Never reduce purge or pilot gas below the vendor minimum to improve the numbers. Flare reliability is a safeguard, and any change to it goes through management of change.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly flare report by cause has been issued for eight consecutive weeks, with the top causes assigned to named owners."
                cadence: rolling
              tasks:
                - "Map each flare and vent header to its meter and calibration date"
                - "Classify last week's flare volume by cause and name the top three @recurring(weekly:tue)"
                - "Compare flare meter readings with the mass balance and flag drift @recurring(monthly:12)"
                - "Log continuous flaring above the threshold as an improvement action"
            - name: Energy efficiency opportunity register upkeep
              description: |-
                ## Purpose
                Efficiency gains in existing plants come from dozens of modest jobs: furnace excess air, insulation, steam traps, compressor recycle, cooling water pumping. A living register with savings estimates, status and owners keeps those jobs moving between turnarounds instead of resurfacing in every audit.

                ## Milestones
                1. The register set up with saving, cost, owner, status and work order for each item.
                2. Existing audit findings and the long list loaded and deduplicated.
                3. Every open item given a next step and a target date.
                4. Closed items moved to verification with the measured result recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register shows every efficiency item with owner, status and next step, and has been updated monthly for six months."
                cadence: rolling
              tasks:
                - "Set up register columns for saving, cost, owner, status and work order"
                - "Load existing audit findings and remove duplicates"
                - "Chase owners on items with no movement in thirty days @recurring(monthly:20)"
                - "Move completed items to verification with a measurement plan"
            - name: Methane leak detection and repair survey cycle
              description: |-
                ## Purpose
                Methane is a far stronger warming gas than CO2 over the first decades, and leaks from valves, compressor seals and tank hatches are invisible without equipment. A survey cycle using optical gas imaging or sniffer methods, with repairs tracked to closure and resurveys after repair, cuts emissions and gas losses together.

                ## Milestones
                1. Components in scope listed by unit, with a survey method chosen for each area.
                2. A first full survey completed with every leak tagged, photographed and estimated.
                3. Repairs scheduled through work orders with a target repair time.
                4. Resurvey after repair confirming the leak is closed.
                5. Survey frequency set by area based on the leak rates found.

                ## Notes
                Gas testing and the permit to work apply on every survey route. A leak large enough to see on a camera may also be a fire risk; report it to the control room first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full survey has tagged and estimated every leak found, repairs are tracked by work order and at least one resurvey has confirmed closures."
                cadence: cyclic
              tasks:
                - "List compressors, tanks and valve banks in survey scope by unit"
                - "Book the survey crew and the area permits for the first full survey"
                - "Run the scheduled leak survey and raise work orders for each tagged leak @recurring(quarterly)"
                - "Resurvey repaired leaks and close the tags in the register"
            - name: Solar plant performance ratio monitoring
              description: |-
                ## Purpose
                Performance ratio, availability and specific yield show within days whether a PV plant is losing energy to soiling, inverter faults, string outages or clipping. A weekly review of the monitoring system against expected yield catches the slow losses that a plant manager watching only daily totals will miss.

                ## Milestones
                1. Expected monthly yield and performance ratio taken from the energy yield assessment.
                2. Monitoring alarms checked for inverter trips, string current outliers and communication loss.
                3. A weekly loss log kept with cause, energy lost and action.
                4. A monthly report comparing actual against expected yield, weather corrected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly loss logs and a weather-corrected monthly yield report have been kept for three months, with each loss given a cause."
                cadence: rolling
              tasks:
                - "Load expected monthly yield from the energy yield assessment into the tracker"
                - "Review inverter trips and string current outliers in the monitoring system @recurring(weekly:mon)"
                - "Issue the weather-corrected yield report against expected @recurring(monthly:5)"
                - "Schedule a module cleaning when soiling loss passes the agreed trigger"
            - name: Steam trap and compressed air survey cycle
              description: |-
                ## Purpose
                Steam and compressed air are the utilities where losses hide best: a plant of moderate size can have dozens of failed open traps and air leaks hissing through every shift. A survey cycle with ultrasonic and thermal checks, a tagged defect list and repairs tracked through maintenance recovers fuel gas that never needed burning.

                ## Milestones
                1. A trap and air header register built with location, type and size.
                2. A first survey completed with each failed trap and air leak tagged and estimated.
                3. Repairs raised and prioritised by energy lost.
                4. The losses recovered totalled and sent to the efficiency register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A surveyed register shows every failed trap and air leak with estimated loss and repair status, and recovered savings are recorded."
                cadence: cyclic
              tasks:
                - "Build a register of steam traps and compressed air headers by area"
                - "Hire or borrow an ultrasonic detector for the first survey"
                - "Survey traps and air headers and raise repairs by energy lost @recurring(quarterly)"
                - "Send the recovered loss total to the efficiency register"
            - name: Measurement and verification of delivered savings
              description: |-
                ## Purpose
                Savings that were estimated but never measured do not survive an audit or a sceptical finance manager. Applying a measurement and verification plan in the IPMVP style to each completed project, with a baseline model, adjustments for production and weather and a reporting period, turns claimed savings into numbers others can check.

                ## Milestones
                1. An M and V plan written for each completed project before the change goes live.
                2. Baseline models built from pre-change data, adjusted for rate and ambient conditions.
                3. Monthly verified savings calculated and compared against the estimate.
                4. An annual verification summary issued with uncertainty stated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every completed project in the register has an M and V plan and monthly verified savings, with an annual summary issued."
                cadence: rolling
              tasks:
                - "Write an M and V plan for the next project due to go live"
                - "Build the baseline model from twelve months of pre-change data"
                - "Calculate verified savings for each live project and note gaps @recurring(monthly:26)"
                - "Issue the annual verification summary with uncertainty stated @recurring(yearly)"
            - name: Quarterly transition portfolio review
              description: |-
                ## Purpose
                Without a regular forum, transition projects compete for the same budget and shutdown windows as everything else and quietly slip. A quarterly review of every active study and project, against tonnes, spend, gates and risks, gives management one place to fund, pause or stop work.

                ## Milestones
                1. A one-page status format agreed for every project in the portfolio.
                2. Each project's tonnes, cost, gate and top risk updated before the review.
                3. Decisions recorded at the review: fund, hold, stop or re-scope.
                4. Actions from the last review checked off before the next one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quarterly reviews have been held with every active project reported on one page and decisions recorded."
                cadence: cyclic
              tasks:
                - "Agree the one-page status format with the sponsor"
                - "Collect status pages and hold the portfolio review @recurring(quarterly)"
                - "Record each fund, hold, stop or re-scope decision in the minutes"
                - "Check last review's actions before issuing the next agenda"
            - name: Technology and policy watch log
              description: |-
                ## Purpose
                Electrolyser prices, capture solvent performance, carbon market rules and grid codes move fast, and a study built on a two-year-old assumption can be wrong before it is read. A short monthly watch, logging what changed and which studies it touches, keeps assumptions current without becoming a full-time reading job.

                ## Milestones
                1. A list of six to ten trusted sources: agencies, journals, standards bodies and regulators.
                2. A log recording each change, its date and the studies it affects.
                3. Assumption sheets updated when a logged change crosses an agreed threshold.

                ## Notes
                Start from the **Reading queue** template. Vendor press releases are claims, not data; log them separately from independent sources.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A watch log with at least six months of entries exists, and at least one study assumption has been updated from it."
                cadence: rolling
              tasks:
                - "Choose six to ten independent sources to follow"
                - "Ask the agent to summarise the month's items from your sources into the log @recurring(monthly:15)"
                - "Mark which studies each logged change affects"
                - "Update assumption sheets when a change crosses the threshold"
            - name: PV plant design fundamentals
              description: |-
                ## Purpose
                Engineers moving from process plants into solar need the vocabulary and the checks: string sizing against inverter voltage windows at the coldest morning, DC to AC ratio and clipping, cable losses, earthing and lightning protection, and module mounting for hurricane exposure. Working through a small reference design by hand makes vendor and EPC drawings readable.

                ## Milestones
                1. String length checked against inverter maximum and minimum voltage using site temperature extremes.
                2. A DC to AC ratio chosen for a sample plant with clipping loss estimated.
                3. DC and AC cable losses calculated for a sample block.
                4. Earthing, surge and lightning protection requirements listed with their IEC standard families.
                5. A one-page summary of design checks written for future reviews.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference design calculation covering string sizing, DC to AC ratio, cable loss and protection is completed and checked by a peer."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick a module and inverter datasheet pair for a sample design"
                - "Check string length against the inverter voltage window at site extremes"
                - "Estimate clipping loss for two DC to AC ratios"
                - "Write the one-page design check summary and ask a peer to review it"
            - name: Amine carbon capture process basics
              description: |-
                ## Purpose
                Post-combustion capture with amine solvents is the most mature route for flue gas, and its costs are dominated by regeneration steam, solvent degradation and the size of the absorber. Learning how the absorber, stripper, lean and rich solvent loop and CO2 compression fit together, and why oxygen and SOx in flue gas matter, lets an engineer judge vendor claims about energy per tonne.

                ## Milestones
                1. A sketched process flow diagram of absorber, stripper, heat exchangers and reboiler, labelled from memory.
                2. Specific reboiler duty per tonne of CO2 explained and typical vendor ranges noted.
                3. Solvent degradation causes and reclaiming methods summarised.
                4. Differences between flue gas capture and high purity process CO2 capture written in a paragraph.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled capture flow diagram and a note on reboiler duty, solvent degradation and high purity streams are reviewed by a process engineer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read one open technical review of amine capture plants"
                - "Sketch the absorber and stripper loop and label every stream"
                - "Note typical reboiler duty ranges and what drives them"
                - "Explain the high purity CO2 case in a paragraph and get it reviewed"
            - name: Electrolysers and the green hydrogen chain
              description: |-
                ## Purpose
                Green hydrogen studies fail on the parts around the stack: water treatment, power supply and its intermittency, compression, storage and the conversion to ammonia or another carrier. Understanding alkaline, PEM and solid oxide electrolysers, their efficiencies, turndown and degradation, and the balance of plant they need, keeps a feasibility study honest about energy and cost.

                ## Milestones
                1. Alkaline, PEM and solid oxide technologies compared on efficiency, turndown, footprint and maturity.
                2. Water demand and treatment needs per kilogram of hydrogen estimated, including for desalinated seawater.
                3. The effect of variable solar or wind supply on stack life and plant utilisation explained.
                4. Hazards of hydrogen and oxygen handling listed, with the relevant ISO and NFPA standard families.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of three electrolyser types and a note on water, intermittency and hazards are completed and peer reviewed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a comparison table for alkaline, PEM and solid oxide electrolysers"
                - "Estimate water demand and treatment steps per kilogram of hydrogen"
                - "Write how variable power affects utilisation and stack degradation"
                - "List hydrogen and oxygen hazards and the standards that cover them"
            - name: CO2 compression, dehydration and transport properties
              description: |-
                ## Purpose
                Dense phase CO2 behaves unlike natural gas: impurities shift the phase envelope, free water makes it highly corrosive to carbon steel, and a pipeline rupture can propagate and release a heavy, asphyxiating cloud. Learning the compression train, dehydration specification and pipeline design rules is essential before reviewing any capture or storage project.

                ## Milestones
                1. The CO2 phase diagram and the effect of nitrogen, hydrogen and oxygen impurities explained.
                2. A typical compression and dehydration train sketched with water specification noted.
                3. Running ductile fracture and release dispersion risks summarised.
                4. Applicable standard families for CO2 pipelines and storage listed, such as ISO 27913 and DNV guidance.

                ## Notes
                CO2 is denser than air and collects in pits, bunds and low ground. Any release study must look at where people could be, not only the concentration at the fence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note covering phase behaviour, dehydration, fracture and dispersion risks and the governing standards is reviewed by a pipeline engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Plot the CO2 phase envelope with and without common impurities"
                - "Sketch a compression and dehydration train with the water specification"
                - "Summarise running fracture and dispersion risks in plain language"
                - "List the CO2 pipeline standards and ask a pipeline engineer to review"
            - name: Pinch analysis for heat integration
              description: |-
                ## Purpose
                Heat recovery in a running plant is limited by where heat is available and where it is needed, and pinch analysis shows the minimum utility possible and which exchangers cross the pinch. Running one study on a real unit, with stream data from the historian, shows how much fuel gas the unit wastes and which exchanger changes would recover it.

                ## Milestones
                1. Hot and cold stream data extracted for one unit from the heat and material balance and historian.
                2. Composite curves drawn and the minimum hot and cold utility found for a chosen approach temperature.
                3. Exchangers transferring heat across the pinch identified.
                4. Two or three retrofit ideas sized and added to the efficiency register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Composite curves, minimum utility targets and at least two sized retrofit ideas for one unit are recorded and reviewed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick one unit and extract hot and cold stream data"
                - "Draw the composite curves for a chosen approach temperature"
                - "Mark exchangers that transfer heat across the pinch"
                - "Size two retrofit ideas and add them to the efficiency register"
            - name: Grid integration studies for variable renewables
              description: |-
                ## Purpose
                Small island and regional grids have low inertia and few large generators, so a solar plant that would barely register on a continental grid can drive frequency and voltage swings. Learning what load flow, short circuit, voltage stability and dynamic studies show, and how the utility uses them to set curtailment and storage requirements, makes the connection process far less of a surprise.

                ## Milestones
                1. The purpose and outputs of load flow, short circuit, harmonic and dynamic studies summarised.
                2. Hosting capacity and curtailment explained for a grid of a few hundred megawatts.
                3. Typical utility requirements for ride-through, ramp rate and frequency response listed.
                4. One published study for a Caribbean grid read and its main findings noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of each grid study type and notes from one published Caribbean grid study are written and discussed with an electrical engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write what each grid study type answers in one line each"
                - "Find a published renewable integration study for a Caribbean grid"
                - "Note ramp rate and frequency response limits from that study"
                - "Discuss the findings with an electrical engineer and record their comments"
            - name: Methane measurement methods and reporting levels
              description: |-
                ## Purpose
                Methane inventories built from generic factors can be out by a factor of two, and buyers of LNG and ammonia increasingly ask for measured figures. Learning the reporting levels in frameworks such as OGMP 2.0, from generic factors to site-level measurement reconciled with source estimates, and the tools used at each level, shows what a credible methane programme needs.

                ## Milestones
                1. Reporting levels from generic factors to measured and reconciled summarised.
                2. Tools compared: optical gas imaging, sniffers, high flow samplers, drones, aircraft and satellites.
                3. The site's current reporting level assessed honestly.
                4. Steps to reach a higher level listed with rough cost.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note assesses the site's current methane reporting level and lists the measurement steps and costs to reach a higher one."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the reporting level definitions in a methane framework"
                - "Compare five measurement tools on cost, detection limit and coverage"
                - "Assess which reporting level the site meets today"
                - "List the steps and rough cost to reach a higher level"
            - name: Battery energy storage design and safety
              description: |-
                ## Purpose
                Battery systems are now paired with almost every new solar plant on island grids, and lithium ion thermal runaway, off-gassing and fire spread between containers are real hazards in hot, humid sites. Learning the safety design layers, from cell chemistry choice to spacing, gas detection, explosion venting and fire service access, and the standard families such as IEC 62933, UL 9540A and NFPA 855, is needed before reviewing any storage design.

                ## Milestones
                1. LFP and NMC chemistries compared on energy density, cycle life and thermal runaway behaviour.
                2. Safety layers listed: battery management, detection, deflagration venting, suppression and spacing.
                3. Large-scale fire test evidence explained and what to ask vendors for.
                4. An emergency response checklist drafted for fire service liaison.

                ## Notes
                Agree the emergency plan with the local fire service before energisation. Many crews have never attended a battery fire and the wrong tactics can make it worse.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on chemistry, safety layers and fire test evidence, plus a draft emergency checklist, is reviewed by a fire safety engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare LFP and NMC chemistries on safety and cycle life"
                - "List each safety layer and the standard family behind it"
                - "Write the fire test evidence you will ask every vendor for"
                - "Draft the fire service liaison checklist and get it reviewed"
            - name: Flare gas recovery unit concept study
              description: |-
                ## Purpose
                When continuous flaring is steady and the gas is usable, a recovery unit that compresses it back into fuel gas or process feed can pay back quickly and cut a visible emission. Defining the flow and composition profile, choosing between liquid ring, screw or ejector compression, and designing the staging and safety interlocks so the flare stays available for relief makes the concept ready for a go or no go.

                ## Milestones
                1. Flare flow and composition profiles built from at least six months of data.
                2. Recovery options compared on capacity, turndown, reliability and cost.
                3. Flare system protection designed: staging, burst or fast-opening valves and purge maintained.
                4. A HAZID held on the preferred concept with actions recorded.
                5. A concept report with cost, tonnes avoided and payback issued for decision.

                ## Notes
                Relief capacity must never depend on the recovery compressor. The flare remains the safeguard, and the change goes through management of change.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A concept report with flow profile, option comparison, HAZID actions, cost and tonnes avoided is accepted for a go or no go decision."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Extract six months of flare flow and composition data"
                - "Shortlist two compression options with vendor budget prices"
                - "Book a HAZID on the preferred concept"
                - "Write the concept report with cost, tonnes and payback"
            - name: Open cycle to combined cycle conversion study
              description: |-
                ## Purpose
                Open cycle gas turbines in regional power stations and industrial plants throw away most of their fuel energy as hot exhaust. Studying a heat recovery steam generator and steam turbine on existing units, or supplementary steam for the process, can cut gas use per megawatt hour substantially, and the study must face the real limits of space, back pressure, outage windows and water supply.

                ## Milestones
                1. Turbine exhaust flow and temperature profiles assembled across the load range.
                2. Plot space, back pressure limits and cooling water or air cooling options assessed.
                3. Additional output and fuel saving calculated for each configuration.
                4. Outage duration and tie-in plan estimated with operations.
                5. A recommendation with cost, saving and tonnes avoided issued.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A study report compares at least two heat recovery configurations with output, fuel saving, outage need and cost, and makes a recommendation."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Collect exhaust flow and temperature data across the turbine load range"
                - "Ask the turbine vendor for the allowable exhaust back pressure"
                - "Calculate output and fuel saving for two configurations"
                - "Estimate the outage and tie-in plan with operations"
            - name: Behind-the-meter solar for an operating plant
              description: |-
                ## Purpose
                Roofs, car parks and spare land inside an industrial fence can host solar that offsets purchased power without a grid export licence in many jurisdictions. Assessing usable area, roof structural capacity, the plant's load profile, hazardous area limits and the connection point gives a firm answer on size and savings before any vendor quotes are sought.

                ## Milestones
                1. Candidate roofs and ground areas measured and checked against hazardous area classification.
                2. Roof structural capacity confirmed by a structural engineer for module and wind loads.
                3. Plant load profile compared with modelled solar output to size for self-consumption.
                4. Connection point, protection and metering arrangement proposed.
                5. Sizing, yield, cost and savings issued as a recommendation.

                ## Notes
                Keep modules and inverters out of classified hazardous areas unless certified for them, and confirm wind uplift on roofs against the current regional wind code.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation states system size, location, yield, connection arrangement, cost and savings, with roof capacity confirmed by a structural engineer."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Measure candidate roofs and ground areas from site drawings"
                - "Overlay the hazardous area classification drawing on candidate areas"
                - "Ask a structural engineer to confirm roof capacity for modules and wind"
                - "Size the system against the plant load profile and estimate savings"
            - name: High-efficiency motor and variable speed drive business case
              description: |-
                ## Purpose
                Pumps and fans running on throttle valves or recycle lines waste energy every hour they run, and old motors rewound several times lose efficiency. A business case built on measured loads for the largest fifty motors shows which ones justify a premium efficiency replacement or a variable speed drive, and which are fine as they are.

                ## Milestones
                1. The fifty largest motors listed with rating, running hours and duty.
                2. Load and throttling measured or estimated for each from historian data.
                3. Savings and cost estimated for replacement or a variable speed drive.
                4. Harmonic and motor insulation effects of drives checked with the electrical engineer.
                5. A ranked business case issued with the top candidates for the next shutdown.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked business case for the fifty largest motors shows savings, cost and payback, with the top candidates scheduled for a shutdown."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pull the fifty largest motors from the electrical load list"
                - "Estimate throttling and running hours from historian data"
                - "Check harmonic limits for drives with the electrical engineer"
                - "Rank candidates by payback and propose them for the next shutdown"
            - name: Module and inverter selection for coastal tropical sites
              description: |-
                ## Purpose
                Modules and inverters in the Caribbean face salt mist, high humidity, heat and hurricane winds, and a cheap product that degrades fast or fails a warranty claim costs far more than its saving. Selecting equipment against salt mist and damp heat test certificates, mechanical load ratings, manufacturer financial strength and local service support produces a choice lenders and insurers accept.

                ## Milestones
                1. Requirements written: salt mist and damp heat certificates, mechanical load rating and temperature coefficients.
                2. Three module and three inverter options shortlisted with datasheets and certificates.
                3. Warranty terms, degradation guarantees and local service support compared.
                4. Factory audit or third party quality report obtained for the preferred options.
                5. A selection decision recorded with reasons and rejected options.

                ## Notes
                Start from the **Purchase decision** template. Ask for the mechanical load test at the rating your structural design needs, not the headline figure.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded selection names the module and inverter chosen, with certificates, warranty comparison and reasons for rejecting alternatives."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the equipment requirements for a coastal tropical site"
                - "Shortlist three modules and three inverters and collect certificates"
                - "Compare warranty terms and local service support side by side"
                - "Record the selection with reasons for each rejected option"
            - name: Fixed tilt or single-axis tracker choice in hurricane zones
              description: |-
                ## Purpose
                Trackers usually yield more energy near the equator, but in hurricane zones their stow strategy, stow reliability during power loss and dynamic wind behaviour become design drivers. Comparing fixed tilt and tracker options on yield, structural design to the regional wind code, insurance, maintenance and post-storm recovery gives a defensible choice.

                ## Milestones
                1. Yield difference modelled for both options at the site.
                2. Structural design wind speed and code edition confirmed for the site.
                3. Tracker stow strategy, backup power and wind tunnel evidence reviewed.
                4. Insurance and maintenance cost differences gathered.
                5. A choice recorded with the full levelised cost comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between fixed tilt and tracker compares yield, structural basis, insurance, maintenance and levelised cost."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Model yield for fixed tilt and single-axis tracker at the site"
                - "Confirm the design wind speed and code edition with the structural engineer"
                - "Ask tracker vendors for stow strategy and wind tunnel evidence"
                - "Compare levelised cost including insurance and record the choice"
            - name: Capture route choice for process CO2 streams
              description: |-
                ## Purpose
                Ammonia and some methanol and gas processing plants already separate a nearly pure CO2 stream that is vented, which is the cheapest capture available anywhere. Comparing that stream with flue gas from reformers and boilers, on purity, flow, compression need, cost per tonne and outlet options such as storage, urea or food grade sales, shows where capture should start.

                ## Milestones
                1. Every CO2 stream on site listed with flow, purity, pressure and current fate.
                2. Capture or conditioning cost per tonne estimated for each stream.
                3. Outlets compared: storage, enhanced recovery, urea, beverage grade or synthetic fuels.
                4. A recommended first stream and outlet recorded with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded recommendation names the first CO2 stream to capture and its outlet, supported by a stream table and cost per tonne estimates."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Build a table of every CO2 stream with flow, purity and fate"
                - "Estimate conditioning or capture cost per tonne for each"
                - "Compare storage and utilisation outlets for the top two streams"
                - "Record the recommended first stream with the reasons"
            - name: Blue versus green ammonia pathway comparison
              description: |-
                ## Purpose
                Gas-based ammonia producers face buyers asking for lower-carbon product and must choose between adding capture to existing reformers or building electrolytic hydrogen supply. Comparing the two on carbon intensity per tonne, cost, gas and power demand, land, water and time to first product gives management a clear, numbers-based basis for the strategy.

                ## Milestones
                1. Carbon intensity per tonne of ammonia estimated for each pathway on the same boundary.
                2. Power, gas, water and land needs compared.
                3. Indicative cost of product calculated with stated price assumptions.
                4. Certification schemes buyers are likely to require identified.
                5. A comparison paper with a recommendation issued to management.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison paper sets out carbon intensity, resource needs, cost and certification for both pathways and makes a recommendation."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Fix a common boundary for carbon intensity per tonne of ammonia"
                - "Estimate power, gas, water and land needs for each pathway"
                - "Calculate indicative product cost under two price cases"
                - "Draft the comparison paper with a recommendation"
            - name: Fired heater and steam turbine electrification study
              description: |-
                ## Purpose
                Replacing fuel-fired equipment with electric heaters, heat pumps or motor drives only cuts emissions if the power comes from low-carbon sources, and it shifts risk onto the electrical network. Studying one fired heater or steam driver for electrification, with the grid emission factor, network capacity, reliability and the steam balance consequences, gives an honest answer for that unit.

                ## Milestones
                1. The candidate unit chosen with its duty, fuel use and reliability history.
                2. Electric alternatives identified and sized.
                3. Network capacity, supply reliability and backup needs checked with the electrical engineer.
                4. Effects on the site steam balance and other users assessed.
                5. A net emissions and cost result issued using the current grid emission factor.

                ## Notes
                On a grid supplied mostly by gas, electrification can raise emissions. Show the result for today's grid and for the planned renewable share.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A study report gives net emissions and cost for electrifying one unit under current and planned grid mixes, with network and steam effects assessed."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose one fired heater or steam driver and record its duty"
                - "Size an electric alternative with a vendor budget quote"
                - "Check network capacity and backup needs with the electrical engineer"
                - "Calculate net emissions for the current and planned grid mix"
            - name: Solar farm energisation readiness
              description: |-
                ## Purpose
                Energising a utility-scale solar plant needs the utility's witnessing, protection settings approved, telemetry live, operations staff trained and every test record in place, and missing one item can delay first power by weeks. A readiness tracker started months before the target date, with each prerequisite owned and evidenced, gets the plant connected on the day planned.

                ## Milestones
                1. A list of utility, regulator and lender prerequisites for energisation agreed.
                2. Protection settings approved and relay tests witnessed.
                3. SCADA and telemetry to the utility control centre tested end to end.
                4. Switching procedures, permits and the energisation sequence approved.
                5. Energisation completed and the first export recorded.

                ## Notes
                Once the DC side sees daylight it is live, and string conductors cannot be switched off at the module. Treat DC work under the permit to work system from the first module installed.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The plant is energised and exporting, with utility witnessing, protection approval and telemetry tests documented."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Ask the utility for its written energisation prerequisites"
                - "Build the readiness tracker with an owner for every prerequisite"
                - "Book relay test witnessing with the utility protection engineer"
                - "Agree the switching procedure and energisation sequence with operations"
            - name: Hydrogen pilot plant HAZID and HAZOP preparation
              description: |-
                ## Purpose
                Hydrogen brings wide flammability limits, low ignition energy, invisible flames and embrittlement, alongside oxygen from the electrolyser and high voltage DC supply. Preparing the HAZID and HAZOP for a pilot plant properly, with complete P and IDs, cause and effect drafts, a team that includes electrolyser vendor experts and agreed risk criteria, avoids a workshop that runs twice.

                ## Milestones
                1. Study basis written: scope, nodes, risk matrix and guideword set.
                2. Up-to-date P and IDs, cause and effect drafts and vendor package data issued to the team.
                3. Team confirmed with process, controls, electrical, vendor and operations members and a chair.
                4. Workshop held with every action given an owner and due date.

                ## Notes
                Start from the **Risk register** template for the actions. Include oxygen side hazards and stack depressurisation, which hydrocarbon teams tend to skip.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A HAZID and HAZOP for the pilot plant are completed on current drawings, with every action recorded and owned."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the study basis with scope, nodes and risk matrix"
                - "Check that P and IDs and vendor data are at the current revision"
                - "Confirm the team, including an electrolyser vendor specialist"
                - "Hold the workshop and log every action with an owner"
            - name: Lender technical due diligence site visit
              description: |-
                ## Purpose
                Before financial close or a refinancing, a lender's independent engineer visits a solar or efficiency project to test the energy yield, design, construction quality and operating plans. Preparing a data room, a site route and named people for each topic makes the visit short and the findings fewer.

                ## Milestones
                1. The independent engineer's information request answered with document references.
                2. A data room organised by topic with current revisions only.
                3. Site route, safety induction and attendees agreed for the visit day.
                4. Visit held and open questions logged with owners.
                5. Draft findings reviewed and factual corrections returned.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The site visit is completed, every information request is answered and factual corrections to the draft findings are returned on time."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Map each information request item to a document in the data room"
                - "Remove superseded revisions from the data room"
                - "Agree the site route, induction and attendees for the visit"
                - "Log open questions from the visit with owners and dates"
            - name: Green hydrogen feasibility gate presentation
              description: |-
                ## Purpose
                A feasibility study ends at a gate where sponsors decide whether to fund pre-FEED, and the presentation decides it more than the report does. Preparing a clear case, covering the hydrogen or ammonia cost, the power supply plan, water, land, offtake, key risks and the money needed for the next stage, lets the gate decide on facts.

                ## Milestones
                1. The gate criteria obtained from the sponsor.
                2. A twelve-slide case drafted with cost, supply, offtake and risks.
                3. Numbers in the slides traced to the study report and checked.
                4. Dry run held with a challenger from outside the team.
                5. Gate decision and conditions recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gate presentation is delivered, every figure traces to the study report, and the decision with its conditions is recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the sponsor for the written gate criteria"
                - "Draft a twelve-slide case covering cost, power, water, offtake and risk"
                - "Trace every number on the slides back to the study report"
                - "Run a dry run with a challenger from outside the team"
            - name: Annual emissions report and third party verification
              description: |-
                ## Purpose
                Lenders, buyers and regulators increasingly want an annual emissions figure checked by a verifier, and the verification finds every gap in data trails and method. Preparing the report from the baseline method, with evidence files for each source and a reconciliation to meters and invoices, gets it through verification without restatements.

                ## Milestones
                1. Annual activity data compiled for every source using the approved method.
                2. Evidence files assembled for each line: meter data, invoices and calculations.
                3. Internal review by a second engineer completed.
                4. Verifier site visit hosted and findings closed.
                5. Verified report issued and filed.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual emissions report is verified by a third party with all findings closed and the verified report filed."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the reporting deadline and verifier with the environmental lead"
                - "Assemble an evidence file for each emission source"
                - "Ask a second engineer to review the calculations"
                - "Start next year's data collection and evidence folders @recurring(yearly)"
            - name: Moving from oil and gas into renewables engineering
              description: |-
                ## Purpose
                Process, mechanical and electrical engineers from the oil and gas sector have most of what renewables projects need, but they must learn new standards, contract models and the pace of a solar or storage build. A focused plan covering the technical gaps, one real project exposure and a portfolio of transferable work makes the move deliberate rather than accidental.

                ## Milestones
                1. Transferable skills listed with an example project for each.
                2. Technical gaps identified against two renewables job descriptions.
                3. A short course or recognised certificate in PV or storage design completed.
                4. Exposure to one live renewables project through a secondment, review role or volunteer work.
                5. An updated CV and portfolio that tells the transition story.

                ## Notes
                Start from the **Development plan** template. Safety, interface management and commissioning discipline from oil and gas are valued, so lead with them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A development plan, a completed PV or storage course and one live renewables project exposure are recorded, with an updated CV."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List transferable skills with a project example for each"
                - "Compare your experience against two renewables job descriptions"
                - "Enrol in one PV or storage design course"
                - "Review progress against the development plan @recurring(monthly:3)"
            - name: Owner's engineer role on a utility-scale solar build
              description: |-
                ## Purpose
                An owner's engineer protects the client on an EPC contract: reviewing designs against the specification, witnessing tests, checking quality on site and keeping a record of non-conformances. Setting up the role well, with a review matrix, a site inspection plan and a clear line between comments and instructions, keeps the EPC contractor responsible for the design.

                ## Milestones
                1. A document review matrix agreed showing which deliverables the owner reviews and to what level.
                2. A site inspection and test plan with hold and witness points agreed with the contractor.
                3. A non-conformance and observation log set up and used.
                4. Weekly site progress and quality report issued to the owner.

                ## Notes
                Comment, do not redesign. Directing the contractor to a solution can transfer design responsibility back to the owner.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A review matrix, an inspection and test plan and a non-conformance log are in use, and weekly reports reach the owner."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Read the EPC specification and list the deliverables the owner reviews"
                - "Agree hold and witness points with the contractor's quality manager"
                - "Set up the non-conformance and observation log"
                - "Walk the site and issue the progress and quality report @recurring(weekly:thu)"
            - name: Renewable integration on a small island grid
              description: |-
                ## Purpose
                Island utilities across the OECS, Barbados and the Bahamas run diesel or heavy fuel oil engines with small reserves, so each megawatt of solar saves imported fuel but also tests system stability. An engineer at a small utility needs a practical plan: hosting capacity, storage for reserve and ramping, engine minimum loads and dispatch rules updated as solar grows.

                ## Milestones
                1. Current generation fleet, minimum loads and spinning reserve rules documented.
                2. Hosting capacity estimated for distributed and utility-scale solar.
                3. Storage needs for reserve, ramp control and evening peak sized.
                4. Dispatch and curtailment rules revised and tested with operators.
                5. A monthly review of fuel saved and curtailment in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented integration plan with hosting capacity, storage sizing and revised dispatch rules is adopted, and monthly fuel and curtailment reviews are running."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Document engine minimum loads and spinning reserve rules"
                - "Estimate hosting capacity for distributed and utility solar"
                - "Size storage for reserve, ramp control and evening peak"
                - "Review fuel saved and curtailed solar energy with operators @recurring(monthly:18)"
            - name: Energy audit for a commercial or industrial client
              description: |-
                ## Purpose
                Hotels, food processors, hospitals and cold stores in the region pay high electricity tariffs and often ask an engineer for an audit to find savings and size solar. Delivering an audit in the ASHRAE Level 2 style, with metered loads, a utility bill analysis, costed measures and a clear implementation order, gives the client something they can act on and finance.

                ## Milestones
                1. Twelve months of utility bills analysed for consumption, demand and tariff structure.
                2. Major loads metered or logged for at least one week.
                3. Measures identified and costed: cooling, lighting, refrigeration, motors, controls and solar.
                4. An audit report with savings, cost, payback and implementation order delivered.
                5. A follow-up visit booked to check implementation.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An audit report with metered loads, bill analysis and costed measures in implementation order is delivered to the client and accepted."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask the client for twelve months of electricity and fuel bills"
                - "Install loggers on the largest loads for a week"
                - "Ask the agent to draft the measures table from your site notes"
                - "Deliver the audit report and book the follow-up visit"
            - name: Plant decarbonisation roadmap as lead engineer
              description: |-
                ## Purpose
                Lead engineers are increasingly asked to turn a corporate net zero pledge into a plant plan with dates, money and shutdown windows. A roadmap that sequences projects to turnaround cycles, separates proven measures from those waiting on technology or policy, and shows the emissions path year by year gives the board a plan it can fund and hold the site to.

                ## Milestones
                1. Baseline, cost curve and screened options brought into one model.
                2. Projects sequenced against turnaround windows and capital limits.
                3. The emissions path drawn year by year with interim milestones.
                4. Dependencies on policy, grid renewables or storage sites stated openly.
                5. The roadmap endorsed by the plant leadership team.

                ## Notes
                Start from the **Risk register** template for the dependencies list. A roadmap that relies on unproven technology for most of its tonnes should say so on page one.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A roadmap with a year by year emissions path, sequenced projects and stated dependencies is endorsed by the plant leadership team."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Bring the baseline, cost curve and screened options into one model"
                - "Map candidate projects onto the turnaround calendar"
                - "Draw the year by year emissions path with interim milestones"
                - "Present the roadmap to the plant leadership team for endorsement"
            - name: CO2 storage screening in depleted gas reservoirs
              description: |-
                ## Purpose
                Depleted gas fields near industrial clusters, such as those offshore Trinidad, are natural candidates for CO2 storage, but capacity, injectivity, caprock integrity and the condition of old wells decide whether a field works. A screening study ranks candidate reservoirs and lists the data gaps an appraisal would have to close.

                ## Milestones
                1. Candidate reservoirs listed with depth, pressure, original gas in place and distance to source.
                2. Storage capacity estimated with stated efficiency factors.
                3. Caprock, fault and legacy well integrity risks scored.
                4. Ranking and data gaps reviewed with a reservoir engineer.
                5. A screening report recommending fields for appraisal issued.

                ## Notes
                Old wells are the most likely leak path. Count them and check their abandonment records before trusting any capacity figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A screening report ranks candidate reservoirs on capacity, injectivity and containment risk, with data gaps listed and reviewed by a reservoir engineer."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List candidate depleted fields with depth, pressure and distance to source"
                - "Estimate storage capacity with stated efficiency factors"
                - "Count legacy wells per field and request abandonment records"
                - "Review the ranking with a reservoir engineer"
            - name: Floating solar on reservoirs feasibility
              description: |-
                ## Purpose
                Land is scarce on small islands, and reservoirs and quarry lakes can host floating PV that also cuts evaporation. Feasibility rests on anchoring and mooring design for hurricane winds and water level swings, effects on water quality, access for maintenance and the water utility's acceptance.

                ## Milestones
                1. Candidate water bodies assessed for area, depth, level variation and ownership.
                2. Anchoring and mooring concept checked against design wind speed and water level range.
                3. Water quality and ecological effects discussed with the water utility.
                4. Yield, cost and evaporation saving estimated.
                5. A feasibility note with a go or no go recommendation issued.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility note covers mooring, water quality, yield, cost and evaporation for at least one water body and gives a go or no go."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List candidate reservoirs with area, depth and level range"
                - "Ask the water utility about water quality and access conditions"
                - "Ask two floating PV suppliers for mooring concepts at the design wind speed"
                - "Estimate yield, cost and evaporation saving"
            - name: Hydrogen blending compatibility review for gas pipelines
              description: |-
                ## Purpose
                Blending hydrogen into existing natural gas networks is often proposed as an early use, but hydrogen embrittlement of high strength steels, weld hardness, compressor and meter limits and end user burner tolerance limit the safe blend. A compatibility review for one pipeline system finds the weakest component and the blend it can accept.

                ## Milestones
                1. Pipeline materials, grades, weld procedures and operating stresses gathered.
                2. Embrittlement and fatigue crack growth risks assessed against current guidance such as ASME B31.12.
                3. Compressor, meter, valve and end user tolerances collected.
                4. The limiting component and maximum blend stated with assumptions.
                5. Findings reviewed by a materials or integrity engineer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A review names the limiting component and maximum hydrogen blend for one pipeline system, checked by a materials or integrity engineer."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Gather pipe grades, weld procedures and operating stresses"
                - "Collect hydrogen tolerances from compressor, meter and burner vendors"
                - "Assess embrittlement risk against current hydrogen piping guidance"
                - "Have a materials engineer review the limiting component finding"
            - name: Monitoring plan for a carbon credit flare reduction project
              description: |-
                ## Purpose
                Flare reduction and methane projects can earn carbon credits under recognised standards, but only with a registered methodology, additionality evidence and a monitoring plan that holds up to a validator. Engineers own the monitoring design: meters, accuracy, data handling and the calculation from raw flow to verified tonnes.

                ## Milestones
                1. An applicable methodology identified and its monitoring requirements extracted.
                2. Meters, accuracy classes, calibration intervals and backup methods specified.
                3. Data flow from meter to calculation documented with quality controls.
                4. A monitoring plan drafted and reviewed with the validator's checklist.
                5. Commercial and legal questions passed to the right specialists.

                ## Notes
                Credit value and eligibility are commercial and legal questions. Keep the engineering file to measurement, calculation and evidence.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A monitoring plan specifying meters, accuracy, data flow and calculation is drafted against a named methodology and checked against the validator's list."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Identify the methodology that fits the flare reduction project"
                - "Extract its monitoring requirements into a checklist"
                - "Specify meters, accuracy and calibration intervals for each parameter"
                - "Draft the monitoring plan and check it against the validator's list"
            - name: Grid-forming inverter study for a hybrid solar and storage plant
              description: |-
                ## Purpose
                As solar and batteries replace engines on island grids, grid-following inverters can no longer rely on spinning machines for voltage and frequency. A study of grid-forming control for a hybrid plant, using electromagnetic transient or RMS dynamic models validated by the vendor, tests whether the plant can support the grid during faults and black start.

                ## Milestones
                1. Study objectives agreed with the utility: fault response, inertia, black start and weak grid operation.
                2. Vendor-validated inverter models obtained and accepted.
                3. Dynamic simulations run for agreed fault and contingency cases.
                4. Results compared against grid code requirements and margins stated.
                5. A study report issued with recommended settings and limits.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A study report shows dynamic results for agreed contingencies, compared against the grid code, with recommended inverter settings accepted by the utility."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Agree study objectives and contingency cases with the utility"
                - "Request validated grid-forming inverter models from the vendor"
                - "Run the dynamic simulations for each agreed case"
                - "Issue recommended settings and limits in the study report"
---

# Energy Transition Engineering Projects

Energy transition work in the Caribbean sits in an odd place: gas-based industry and oil-fired island grids on one side, strong sun, carbon targets and lender expectations on the other, and engineers asked to turn that into projects that pass a design review and an investment committee. These projects start with the foundations (an emissions baseline, the accounting boundary, screening rules, a cost curve and the grid and solar data), then the operating machinery for emissions, flaring, methane, efficiency and solar performance, the technical skills behind PV, storage, capture and hydrogen, the big option choices, dated events from HAZOP to grid energisation, the different seats an engineer takes in this work, and specialist studies on storage reservoirs, hydrogen blending, carbon credits and grid-forming plant.

The rhythm is monthly for the emissions dashboard, the efficiency register and savings verification, weekly for flare volumes and solar plant performance, quarterly for methane surveys, utility surveys and the portfolio review, and yearly for the emissions report. The Metrics log, Reading queue, Purchase decision, Risk register and Development plan templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
