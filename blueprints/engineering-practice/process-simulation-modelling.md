---
id: engineering-practice.process-simulation-modelling
name: Process Simulation Modelling
description: "Process simulations people can trust: a written model basis, the right thermodynamics, flowsheets that converge, models kept matched to plant data, and the case studies, debottlenecking and dynamic work that decisions rest on."
category: business
version: 1.0.0
tags: [engineering-practice, process-simulation-modelling, engineer, process-simulation, aspen-hysys, thermodynamics, debottlenecking, dynamic-simulation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - reading-queue
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Process Simulation Modelling
          description: "Building process simulations in tools such as Aspen HYSYS: thermodynamic packages, flowsheets, case studies, debottlenecking and keeping models matched to the plant."
          projects:
            - name: Simulation basis and model purpose statement
              description: |-
                ## Purpose
                Most bad simulations fail before the first stream is drawn, because nobody wrote down what question the model must answer, at what accuracy, and over what operating range. A two-page simulation basis fixes the scope boundary, the cases, the property method, the data sources and the acceptance tolerances, so reviewers check the model against a promise rather than a feeling.

                ## Milestones
                1. The questions the model must answer listed, each with the decision it supports.
                2. A scope boundary marked on the PFD, with every feed, product and utility tie-in named.
                3. Operating cases and the required accuracy for key outputs stated as numbers.
                4. Data sources for feeds, equipment and plant measurements listed with dates.
                5. The basis reviewed and accepted by the process lead or model owner.

                ## Notes
                Keep the basis short and attach it to the model file. A basis nobody reads is no better than none.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed simulation basis stating purpose, scope boundary, cases, property method and accuracy targets is stored beside the model file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the three questions the model must answer and who will act on each"
                - "Mark the model scope boundary and tie-ins on the latest PFD"
                - "Draft the simulation basis with cases, data sources and accuracy targets"
                - "Send the basis to the process lead and record their acceptance"
            - name: Thermodynamic package selection for your system
              description: |-
                ## Purpose
                Picking Peng-Robinson because it was the default is the commonest silent error in process simulation, and it can move a dew point, a column split or a solvent loss far enough to change a design. Choosing the property method deliberately, by component family, pressure range and phase behaviour, and recording why, is the single decision that most affects whether the model is believable.

                ## Milestones
                1. Component families, pressure and temperature range, and expected phases summarised for the system.
                2. Candidate property methods shortlisted, such as a cubic equation of state, an activity coefficient model or a specialist amine or glycol package.
                3. Two candidates compared against published or measured data for a key property such as vapour pressure or a binary split.
                4. The chosen method and its known limits recorded in the simulation basis.

                ## Notes
                Polar and associating mixtures such as water, alcohols and glycols usually need an activity coefficient or association model, not a plain cubic equation. When in doubt, test against data rather than reputation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The property method is chosen after comparison with at least one set of measured or published data, and the reasons are written in the simulation basis."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the component families and the pressure and temperature range in scope"
                - "Read the simulator's property method selection guide for your system type"
                - "Compare two candidate methods against one published data set"
                - "Record the chosen method and its limits in the simulation basis"
            - name: Component list and hypothetical components set-up
              description: |-
                ## Purpose
                Every component you leave out or lump together carries through every stream in the model, so a missing trace of hydrogen sulphide or mercury can hide a corrosion or specification problem completely. Building the component list on purpose, with hypothetical or pseudo components defined from real data where library ones do not exist, gives a component slate the whole team can reuse.

                ## Milestones
                1. A component list covering every species that matters for specification, safety or corrosion.
                2. Hypothetical components defined with boiling point, density and molecular weight from a stated source.
                3. Trace components kept or dropped with a written reason for each.
                4. The component slate saved as a reusable file for future models of the same unit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved component slate exists with every hypothetical component's property source and every dropped trace component's reason recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the latest lab analyses for every feed and product in scope"
                - "List components that drive specification, safety or corrosion limits"
                - "Define each hypothetical component and note where its properties came from"
                - "Save the component slate as a reusable file in the model library"
            - name: Feed characterisation from assay and lab data
              description: |-
                ## Purpose
                A crude, condensate or rich gas entered as a guessed composition will match nothing downstream, however careful the rest of the model is. Turning the assay or extended gas analysis into pseudo components with a cut scheme you can defend, and checking it reproduces the measured distillation curve and density, makes the feed the most trusted stream in the model instead of the weakest.

                ## Milestones
                1. The latest assay or extended analysis obtained, with sample date and point.
                2. A cut scheme chosen and the number of pseudo components justified.
                3. The characterised feed reproducing the measured distillation curve and density within the tolerance set in the basis.
                4. Light ends and contaminants blended in from the gas chromatograph analysis.
                5. The characterisation method and match recorded in a one-page note.

                ## Notes
                Check the sample date before anything else. An assay from a field or well mix that has since changed is worse than an honest estimate.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The characterised feed reproduces the measured distillation curve and density within the basis tolerance, documented in a one-page note."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the laboratory for the latest assay and its sample date"
                - "Choose a cut scheme and enter the assay into the oil characterisation tool"
                - "Compare the predicted and measured distillation curves and densities"
                - "Write a one-page note on the characterisation and the quality of match"
            - name: Units, conventions and starter simulation template
              description: |-
                ## Purpose
                Teams that share models without shared conventions lose hours to mixed unit sets, unlabelled streams and different reference states for enthalpy. A starter template with the site unit set, stream naming rules, standard conditions, colour coding and a front-page notes block means every new model opens already readable by the next engineer.

                ## Milestones
                1. A unit set agreed for the site, including standard conditions for gas volumes.
                2. Stream and unit operation naming rules written and matched to P&ID tags.
                3. A starter file with the unit set, component slate and notes page saved in the library.
                4. Two colleagues have opened a model built from the template and found nothing unclear.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A starter simulation template with agreed units, naming rules and a notes page is in the shared library and used for the next new model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note the unit sets and standard conditions used in the last three site models"
                - "Write stream and block naming rules that follow P&ID tag numbers"
                - "Build and save a starter file with units, components and a notes page"
                - "Ask two colleagues to open the template and list anything unclear"
            - name: First steady-state model of a single separator train
              description: |-
                ## Purpose
                Learning a simulator on a whole plant teaches you to fight convergence, not to understand results. Building one separator train end to end, feed to export, with heaters, valves and a compressor stage, teaches the flowsheet logic, degrees of freedom and stream specifications you will use in every later model.

                ## Milestones
                1. A separator train modelled from feed to product streams with every specification explained.
                2. Degrees of freedom checked for each unit operation, with no over or under specification.
                3. Phase fractions, flows and duties read off and compared with the design heat and material balance.
                4. A short note of three things that surprised you while building it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A converged single-train model exists whose main flows and duties are within five percent of the design heat and material balance, with a written note."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a separator train with a published design heat and material balance"
                - "Build the train from feed to products in a fresh file from the template"
                - "Compare flows and duties against the design balance and list the gaps"
                - "Write three things you learnt about specifications and degrees of freedom"
            - name: Hand calculation checks against the simulator
              description: |-
                ## Purpose
                Simulators will report a duty to six significant figures whether the inputs make sense or not. Checking a handful of results by hand, an energy balance on a heater, a flash at known conditions, a compressor power from first principles, builds the instinct to spot an answer that is wrong by a factor of ten before it reaches a datasheet.

                ## Milestones
                1. An energy balance on one heat exchanger calculated by hand and compared with the model.
                2. A compressor power estimated from polytropic head and compared with the simulator.
                3. A dew point or bubble point checked against a published chart or correlation.
                4. Differences above a few percent explained in writing.

                ## Notes
                This is the habit that separates a simulation engineer from a simulator operator. Keep the hand calculations with the model.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three independent hand checks are filed with the model, each within five percent of the simulator result or with the difference explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one exchanger, one compressor and one flash from your current model"
                - "Work the exchanger energy balance by hand and compare it"
                - "Estimate compressor power from polytropic head and efficiency"
                - "File the three hand checks with notes on any differences"
            - name: Convergence and recycle strategy for the flowsheet
              description: |-
                ## Purpose
                Large flowsheets with nested recycles, adjusts and column loops often converge once by luck and then never again after a small change. Choosing tear streams deliberately, ordering the calculation, setting tolerances and keeping a known good initial estimate turns a fragile model into one that solves the same way every time someone opens it.

                ## Milestones
                1. Every recycle loop identified and a tear stream chosen for each with a reason.
                2. Recycle and adjust tolerances set in line with the accuracy in the basis.
                3. A saved converged state kept as the initial estimate for future runs.
                4. The model reconverging from a cold start after a ten percent feed change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The flowsheet reconverges from a saved state after a ten percent feed rate change, with tear streams and tolerances recorded on the notes page."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch every recycle and adjust loop in the current flowsheet"
                - "Choose a tear stream for each loop and note why"
                - "Set tolerances to match the accuracy targets in the simulation basis"
                - "Test reconvergence after a ten percent feed change and record the result"
            - name: Model file naming, versioning and storage
              description: |-
                ## Purpose
                Three engineers, five copies called final, and a design decision made on the wrong one: model control fails quietly until it fails badly. A naming scheme, a single controlled folder, revision numbers tied to a change log and a monthly archive of superseded files make it obvious which model is current and who changed it.

                ## Milestones
                1. A file naming scheme with unit, case, revision and date agreed.
                2. One controlled folder holding current models, with superseded ones archived separately.
                3. Every current model carrying a revision number that matches its change log.
                4. Simulator version recorded for each file so it can be reopened later.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All current models sit in one controlled folder with revision numbers matching their change logs, and superseded files are archived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find every copy of your unit's model on shared drives and laptops"
                - "Agree a file naming scheme with unit, case, revision and date"
                - "Move current models into one controlled folder and archive the rest"
                - "Archive superseded model files and check revision numbers @recurring(monthly:8)"
            - name: Monthly plant data reconciliation against the model
              description: |-
                ## Purpose
                Models that matched the plant at commissioning drifts as feeds change, exchangers foul and instruments age, and nobody notices until it gives a wrong answer in a meeting. Pulling a steady period of historian data each month, checking mass and energy closure, and running the model at those conditions keeps the gap between model and plant known and small.

                ## Milestones
                1. A list of the historian tags needed for the model, with units and ranges.
                2. A rule for choosing a steady data window agreed and written down.
                3. Monthly mass and energy closure calculated before the model is run.
                4. Key model outputs compared with plant values and the gaps logged.
                5. A quarterly summary of trends in model match sent to the process lead.

                ## Notes
                Fix the data before the model. A flow meter that is ten percent out will drag every parameter you tune.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of reconciled data with model comparisons are logged, and four quarterly summaries have gone to the process lead."
                cadence: rolling
              tasks:
                - "List the historian tags the model needs and check each one reads"
                - "Write a rule for picking a steady four-hour data window"
                - "Pull a steady data window and run the model at those conditions @recurring(monthly:12)"
                - "Send a summary of model match trends to the process lead @recurring(quarterly)"
            - name: Model-to-plant match tracking log
              description: |-
                ## Purpose
                Saying the model matches the plant means nothing without numbers and dates. A running log of key outputs, such as column overhead purity, compressor discharge temperature and exchanger duty, against plant values with a tolerance band shows at a glance whether the model is fit for the next decision or needs retuning first.

                ## Milestones
                1. Eight to twelve key outputs chosen, each with a plant tag and a tolerance.
                2. A log set up with date, model revision, plant value, model value and deviation.
                3. Deviations outside tolerance flagged and each linked to a cause or an action.
                4. The current fitness of the model shown on one line at the top of the log.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A match log covering at least eight key outputs is updated monthly, with every out-of-tolerance value linked to a cause or action."
                cadence: rolling
              tasks:
                - "Choose eight key model outputs and set a tolerance for each"
                - "Set up the match log with plant tags and model revision columns"
                - "Update the match log and flag deviations outside tolerance @recurring(monthly:20)"
                - "Write the current fitness of the model on the top line of the log"
            - name: Simulation licence and software version register
              description: |-
                ## Purpose
                Simulator licences are costly and are often shared through a token or seat pool that runs out the week a project needs it most, while upgrades can quietly change property results. A register of licences, seats, add-on modules, renewal dates and installed versions lets you plan upgrades, retest key models after each one and stop paying for modules nobody uses.

                ## Milestones
                1. Every simulator and add-on module listed with seats, owner and renewal date.
                2. Installed versions recorded for each user machine or server.
                3. Usage data reviewed and unused modules flagged before renewal.
                4. A rule agreed that key models are rerun and compared after every upgrade.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every simulation licence, seat, module, renewal date and installed version, and is reviewed each quarter."
                cadence: rolling
              tasks:
                - "Ask the licence administrator for the current licence and module list"
                - "Record installed simulator versions for each user and server"
                - "Review licence usage and renewal dates in the register @recurring(quarterly)"
                - "Agree the rule for rerunning key models after an upgrade"
            - name: Model change log and weekly peer check
              description: |-
                ## Purpose
                Three people editing one model without a record becomes impossible to defend, because nobody can say why a column efficiency is 62 percent or who set the compressor curve. A short change log entry for every edit, and a weekly ten-minute peer look at the week's changes, catches errors while the person who made them still remembers why.

                ## Milestones
                1. A change log page in each controlled model with date, author, change and reason.
                2. A rule that no revision goes to the controlled folder without a log entry.
                3. A weekly peer check of logged changes held with a named colleague.
                4. Errors found by the peer check recorded and corrected in the next revision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every controlled model has a complete change log, and weekly peer checks have run for at least three months with findings recorded."
                cadence: rolling
              tasks:
                - "Add a change log page to each controlled model file"
                - "Agree with a colleague to swap a weekly look at each other's changes"
                - "Review the week's model changes with your peer checker @recurring(weekly:fri)"
                - "Record any errors found and the revision that corrects them"
            - name: Case study request intake for operations and projects
              description: |-
                ## Purpose
                Requests for simulation runs arrive by corridor chat and email, with no clear question, no deadline and no record of what was promised. A simple intake, asking for the question, the cases, the decision date and the requester, lets you push back on vague asks, plan your week and show how much decision support the model actually provides.

                ## Milestones
                1. A one-page request form asking for question, cases, decision and date.
                2. A request log with status, owner and turnaround time for each request.
                3. A weekly triage of new requests with realistic dates agreed with requesters.
                4. A count of requests and decisions supported each quarter for your manager.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every simulation request in the last quarter is in the log with a question, decision date and turnaround, and a quarterly count has gone to your manager."
                cadence: rolling
              tasks:
                - "Draft a one-page simulation request form with question, cases and date"
                - "Set up a request log with status, requester and turnaround columns"
                - "Triage new simulation requests and agree dates with requesters @recurring(weekly:mon)"
                - "Send your manager a quarterly count of requests and decisions supported"
            - name: Heat exchanger fouling update in the model
              description: |-
                ## Purpose
                Exchangers modelled at clean design duty make the whole flowsheet optimistic, so predicted outlet temperatures and furnace duties drift further from reality every month between cleanings. Back-calculating overall heat transfer coefficients from plant data each quarter and updating fouling factors in the model keeps rate and energy predictions honest, and shows when a cleaning pays for itself.

                ## Milestones
                1. The exchangers that most affect the key outputs listed.
                2. Overall heat transfer coefficients back-calculated from reconciled plant data.
                3. Fouling factors or UA values updated in the model with the date of the data.
                4. A trend of UA against time kept for each exchanger, with cleanings marked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "UA trends for the critical exchangers are updated each quarter, with the model's exchanger parameters matching the latest back-calculated values."
                cadence: rolling
              tasks:
                - "List the exchangers whose duty most affects the key model outputs"
                - "Back-calculate UA for each from the latest reconciled data"
                - "Update exchanger UA values and the trend chart in the model @recurring(quarterly)"
                - "Mark past cleanings on each trend and note the recovered duty"
            - name: Column efficiency and tray performance retuning
              description: |-
                ## Purpose
                Distillation columns modelled with theoretical stages and a single overall efficiency drift as trays foul, damage or flood. Retuning stage efficiencies or Murphree values each quarter against plant temperature profiles and product analyses keeps separation predictions credible and gives early warning of tray damage that could otherwise wait until the turnaround to be found.

                ## Milestones
                1. Plant temperature profile and product analyses collected for a steady period.
                2. Model temperature profile overlaid on the plant profile for each column.
                3. Efficiencies retuned to match both profile and product purity within tolerance.
                4. A history of fitted efficiencies kept, with any sharp drop raised with operations.

                ## Notes
                Match the temperature profile and product analyses together. Tuning to purity alone can hide a reboiler or feed location problem.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each modelled column has at least four quarterly efficiency fits on record, each matching plant temperatures and purities within the basis tolerance."
                cadence: cyclic
              tasks:
                - "Collect a column temperature profile and matching product lab results"
                - "Overlay model and plant temperature profiles on one chart"
                - "Retune column efficiencies against the latest plant profile @recurring(quarterly)"
                - "Raise any sharp drop in fitted efficiency with the operations engineer"
            - name: Site simulation model library and status register
              description: |-
                ## Purpose
                Most sites have dozens of models built for projects over twenty years, and nobody knows which ones still converge, which match the current plant and which use a retired simulator version. A register of every model with owner, purpose, last validation date and fitness status stops people starting from a broken model and shows where the gaps are.

                ## Milestones
                1. Every known site model listed with unit, purpose, owner and simulator version.
                2. Each model given a status: current, needs revalidation or retired.
                3. Retired models archived and removed from the shared working folder.
                4. The register checked monthly and shared with the process engineering team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every site model with owner, last validation date and status, and has been updated monthly for at least six months."
                cadence: rolling
              tasks:
                - "Search shared drives for simulation files and list them by unit"
                - "Ask each unit's process engineer who owns the model for their area"
                - "Update model statuses and owners in the register @recurring(monthly:3)"
                - "Archive retired models out of the shared working folder"
            - name: Yearly model revalidation after the turnaround
              description: |-
                ## Purpose
                Turnarounds change the plant the model describes: exchangers cleaned, trays replaced, a new impeller, a revised control valve. Revalidating each key model against post-turnaround test data once a year, and recording what changed, means the model starts the run matching the plant rather than the plant of three years ago.

                ## Milestones
                1. A list of equipment changes made during the turnaround obtained from the scope.
                2. Equipment data in the model updated for each change.
                3. A post-turnaround steady period used to recheck the match log outputs.
                4. A revalidation note issued with the new model revision and its fitness status.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A revalidation note for each key model is issued within three months of start-up, with equipment changes and the new match results recorded."
                cadence: cyclic
              tasks:
                - "Ask the turnaround team for the list of completed equipment changes"
                - "Update model equipment data for every change on the list"
                - "Revalidate key models against post-turnaround plant data @recurring(yearly)"
                - "Issue a revalidation note with the new model revision"
            - name: Equations of state for simulation users
              description: |-
                ## Purpose
                Engineers who never learnt what an equation of state is doing cannot tell when it is out of its depth, near the critical point, with heavy ends or with water. Working through cubic equations, mixing rules, binary interaction parameters and volume translation in plain terms gives you the judgement to question a liquid density or a phase split instead of trusting it.

                ## Milestones
                1. The structure of a cubic equation of state and its mixing rules summarised in your own words.
                2. The effect of a binary interaction parameter shown on a two-component phase diagram in the simulator.
                3. Volume translation explained, with its effect on a liquid density shown on your system.
                4. Three situations where a cubic equation is weak written down with an alternative for each.

                ## Notes
                Start from the **Reading queue** template to line up a thermodynamics textbook chapter, the simulator help files and one review paper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary and a worked binary interaction example are filed, and three weak cases with alternatives are written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List a textbook chapter and the simulator help pages on equations of state"
                - "Summarise cubic equations and mixing rules on one page"
                - "Vary a binary interaction parameter in a two-component case and note the effect"
                - "Write three cases where a cubic equation is weak and what to use instead"
            - name: Activity coefficient models and interaction parameters
              description: |-
                ## Purpose
                Solvent recovery, alcohol and water systems and many chemical plants depend on NRTL, UNIQUAC or Wilson models whose interaction parameters may come from a databank, an estimation method or nowhere at all. Learning where those parameters come from, and how to regress them from vapour liquid equilibrium data, stops a model resting on a predicted parameter set nobody has checked.

                ## Milestones
                1. The difference between NRTL, UNIQUAC and Wilson summarised with when each is used.
                2. The source of every binary parameter in your current model identified: databank, estimated or regressed.
                3. One binary regressed from published equilibrium data and compared with the databank set.
                4. Any azeotrope in your system reproduced by the model and checked against literature.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every binary pair in the current model has a recorded parameter source, and at least one pair has been regressed and compared with literature data."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the binary pairs in your model and the source of each parameter set"
                - "Find a published equilibrium data set for the most important pair"
                - "Regress the binary using the simulator's data regression tool"
                - "Compare the regressed and databank parameters on a phase diagram"
            - name: Distillation column specification and convergence
              description: |-
                ## Purpose
                Columns are where most simulation hours are lost, through specifications that fight each other, poor initial estimates and a reboiler duty spec where a purity spec was meant. Practising column set-up on simple then harder cases, a stabiliser, a splitter with side draws, a column with a pumparound, builds the instinct for which specifications converge and which ones describe the plant.

                ## Milestones
                1. A simple stabiliser converged with reflux ratio and bottoms specification.
                2. The same column reconverged with product purity specifications instead.
                3. A column with side draws or a pumparound converged from your own estimates.
                4. A personal checklist of column convergence fixes written from what worked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three columns of increasing difficulty are converged with documented specifications, and a column convergence checklist is filed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set up a stabiliser column with reflux ratio and bottoms specifications"
                - "Swap to purity specifications and record what changed"
                - "Practise converging one harder column case from scratch @recurring(weekly:thu)"
                - "Write a convergence checklist from the fixes that worked"
            - name: Optimiser and sensitivity analysis tools
              description: |-
                ## Purpose
                Running cases one at a time by hand is slow and hides interactions between variables. Learning the simulator's case study, sensitivity and optimiser tools lets you map how product yield responds to two variables at once, find the constraint that binds first, and present an answer as a surface rather than a single number with no context.

                ## Milestones
                1. A one-variable sensitivity run plotted with the response and the constraint limit.
                2. A two-variable case study laid out as a contour or table.
                3. An optimiser run maximising a simple objective subject to two constraints.
                4. The binding constraint at the optimum identified and checked against plant limits.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-variable case study and one constrained optimiser run are filed, with the binding constraint identified and checked against plant limits."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run a one-variable sensitivity on a key operating variable"
                - "Lay out a two-variable case study and plot the response"
                - "Set up an optimiser run with a simple objective and two constraints"
                - "Check the binding constraint at the optimum against real plant limits"
            - name: Rigorous heat exchanger rating inside the flowsheet
              description: |-
                ## Purpose
                Simple end-point exchanger models will meet any duty you ask of it, which is exactly why it cannot predict a pinch or a hydraulic limit. Learning to link a rigorous shell and tube or plate-fin rating model, built from the exchanger datasheet, into the flowsheet shows you when the real exchanger will run out of area or pressure drop before the process does.

                ## Milestones
                1. One exchanger datasheet gathered with geometry, passes and tube details.
                2. A rigorous rating model built and checked against the datasheet performance.
                3. The rating model linked into the flowsheet in place of the simple exchanger.
                4. Predicted duty and pressure drop compared with plant data at current rate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One exchanger is rated rigorously inside the flowsheet, matching its datasheet duty and pressure drop within the basis tolerance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get the datasheet and drawing for one critical exchanger"
                - "Build the rigorous rating model from the datasheet geometry"
                - "Link it into the flowsheet and check the converged duty"
                - "Compare predicted duty and pressure drop with plant readings"
            - name: Dynamic simulation basics, pressure-flow and holdups
              description: |-
                ## Purpose
                Moving from steady state to dynamics means every valve needs a sizing coefficient, every vessel a volume and every flow a pressure difference to drive it. Building a small dynamic model of a separator with level and pressure control teaches pressure-flow solving, holdups and controller set-up before you attempt anything that matters.

                ## Milestones
                1. A steady-state separator model prepared with vessel sizes and valve coefficients.
                2. The model switched to dynamic mode and running stably for an hour of simulated time.
                3. Level and pressure controllers responding sensibly to a feed step.
                4. A list of the extra data dynamic models need, written for your own plant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A small dynamic separator model runs stably and responds sensibly to a feed step, with a written list of the extra data dynamics require."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Add vessel volumes and valve coefficients to a practice separator model"
                - "Switch the model to dynamic mode and run it for an hour"
                - "Step the feed rate and watch the level and pressure responses"
                - "List the extra data a dynamic model of your plant would need"
            - name: Phase envelope, hydrate and solids checks
              description: |-
                ## Purpose
                Gas that crosses its dew point in a pipeline, or water that forms hydrates downstream of a choke, causes real shutdowns, and a converged flowsheet will not warn you. Learning to generate phase envelopes, run hydrate formation checks and look for wax or solids risk at every low temperature point in the model turns the simulator into a flow assurance screen.

                ## Milestones
                1. Phase envelopes generated for the main gas streams with operating points marked.
                2. Hydrate formation temperature calculated at each choke, cooler and pipeline outlet.
                3. Margins between operating and hydrate temperatures tabulated.
                4. Any stream with low margin raised with the process lead, with inhibitor or heating options noted for review.

                ## Notes
                Hydrate predictions vary between methods. Treat a small margin as a reason for a specialist check, not a design basis.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of hydrate margins for every cold point in the model is filed, and every low-margin stream has been raised with the process lead."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Generate phase envelopes for the main gas streams in the model"
                - "Run hydrate formation checks at every choke and cooler outlet"
                - "Tabulate the margin between operating and hydrate temperatures"
                - "Raise any low-margin stream with the process lead"
            - name: Debottlenecking study for a rate increase
              description: |-
                ## Purpose
                When the business asks for ten percent more throughput, the answer depends on which equipment hits its limit first, and guessing usually picks the wrong one. Pushing the matched model up in rate steps while checking every pump, compressor, column, exchanger and control valve against its rated limit produces a ranked list of bottlenecks and the cheapest way past each.

                ## Milestones
                1. The model matched to current plant data before any rate increase is run.
                2. Equipment limits collected from datasheets, curves and vendor ratings.
                3. Rate stepped up in increments with the first limiting item at each step recorded.
                4. A ranked bottleneck list with rough modification options for each.
                5. A study note issued with the recommended next step and its assumptions.

                ## Notes
                A debottleneck run on an unmatched model only finds the bottlenecks of a plant that does not exist. Any change it leads to goes through management of change.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A study note ranks the first five bottlenecks with the rate at which each binds and a modification option, based on a model matched to current plant data."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the model matches the latest month of plant data"
                - "Collect rated limits for every pump, compressor, column and control valve"
                - "Step the rate up in five percent increments and record the first limit hit"
                - "Ask the agent to draft the study note from the ranked bottleneck table"
            - name: Energy and utility reduction case study
              description: |-
                ## Purpose
                Steam, fuel gas and cooling water costs are often the largest controllable cost in a plant, and a matched model already holds the stream data a heat integration review needs. Extracting hot and cold stream data from the model, building composite curves and testing two or three practical changes shows where energy is being wasted and what it is worth.

                ## Milestones
                1. Hot and cold stream data extracted from the matched model with supply and target temperatures.
                2. Composite curves and a minimum utility target calculated.
                3. Current utility use compared with the target and the gap valued.
                4. Two or three practical changes simulated with their savings and capital needs estimated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A case study note shows the utility gap against target and evaluates at least two practical changes with estimated savings."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Export hot and cold stream data from the matched model"
                - "Build composite curves and calculate the minimum utility target"
                - "Value the gap between current utility use and the target"
                - "Simulate two practical heat recovery changes and estimate their savings"
            - name: Steady-state or dynamic model for the question
              description: |-
                ## Purpose
                Dynamic models cost several times more to build and keep than steady-state ones, yet some questions, a compressor trip, a relief scenario, a control interaction, cannot be answered without them. Deciding case by case with a short written test saves months of dynamic modelling nobody needed and avoids steady-state answers to time-dependent problems.

                ## Milestones
                1. The engineering question stated with the decision it supports.
                2. A short checklist applied: time dependence, control interaction, transient limits.
                3. Effort and data needs estimated for both model types.
                4. The chosen approach and its reasons recorded and agreed with the requester.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The model type for the question is chosen against a written checklist, with effort estimates and the requester's agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the engineering question and the decision it supports"
                - "Test the question against time dependence and control interaction"
                - "Estimate effort and data needs for steady-state and dynamic options"
                - "Record the chosen approach and get the requester to agree"
            - name: Choosing a process simulator for the team
              description: |-
                ## Purpose
                Commercial simulators differ in thermodynamic coverage, dynamic capability, licence model and cost, and open-source tools such as DWSIM are now good enough for some work. Comparing two or three options against the team's real cases, existing models and budget avoids a five-year licence chosen on a demo, or a free tool that cannot handle your property needs.

                ## Milestones
                1. Requirements listed: property methods, unit operations, dynamics, file exchange and support.
                2. Two or three simulators shortlisted with licence costs and terms.
                3. One real benchmark case run in each, with results compared with plant data.
                4. A recommendation recorded with cost, migration effort and risks.

                ## Notes
                Start from the **Purchase decision** template. Include the cost of rebuilding existing models, which is often larger than the licence.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation names one simulator, backed by a benchmark case run in at least two options and a cost and migration comparison."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the property methods and unit operations your team relies on"
                - "Shortlist two or three simulators and request licence terms"
                - "Run one real benchmark case in each shortlisted simulator"
                - "Write the recommendation with cost, migration effort and risks"
            - name: Property data gaps and lab measurement request
              description: |-
                ## Purpose
                Every model has a few properties resting on estimation methods, a solvent viscosity, a heavy pseudo component's critical properties, a binary that was never measured, and one of them usually drives a key result. Ranking those gaps by their effect on outputs and requesting targeted lab or literature data spends a small budget where it moves model confidence most.

                ## Milestones
                1. Estimated or defaulted properties in the model listed.
                2. Each gap tested by sensitivity on the key outputs and ranked by effect.
                3. The top two or three gaps matched to a lab measurement or literature source.
                4. A measurement request issued with scope, sample and cost estimate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of property gaps exists, and a measurement or literature request is issued for the top gap."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List properties in the model that rely on estimation or defaults"
                - "Run a sensitivity on each to see how much it moves key outputs"
                - "Find a lab or literature source for the top three gaps"
                - "Issue a measurement request for the most important gap"
            - name: Reducing model run time and fragility
              description: |-
                ## Purpose
                Slow models get abandoned: one that takes twenty minutes to converge and fails one run in three loses out to a spreadsheet, however rigorous it is. Profiling where the solver spends time, removing redundant logic, simplifying unit operations that do not affect the question and fixing poor initial estimates can turn a model people avoid into one they use every week.

                ## Milestones
                1. Run time and failure rate measured over ten typical cases.
                2. The slowest and least stable parts of the flowsheet identified.
                3. Redundant logic removed and unnecessary rigour simplified, each change logged.
                4. Run time and failure rate measured again and compared with the start.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Average run time over ten typical cases is at least halved, or failures reduced to none, with every simplification logged and outputs unchanged within tolerance."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Time ten typical case runs and count convergence failures"
                - "Find the slowest and least stable loops in the flowsheet"
                - "Simplify or remove the logic that does not affect the question"
                - "Rerun the ten cases and compare run time and key outputs"
            - name: Automated case runs from a spreadsheet or script
              description: |-
                ## Purpose
                Running thirty cases by hand invites typing errors and costs a day each time. Driving the simulator from a spreadsheet link or a Python script through its automation interface, with inputs in one table and outputs written back with the model revision, makes large case studies repeatable and auditable.

                ## Milestones
                1. The simulator's automation interface tested by reading and writing one variable.
                2. An input table and an output table defined with tag names and units.
                3. A script or link running all cases and writing results with model revision and date.
                4. The automated results spot-checked against two cases run by hand.

                ## Notes
                Keep the script under version control with the model revision it was written for. A renamed stream breaks it silently.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A script or spreadsheet runs a case set end to end, writing results with model revision, and two cases match manual runs exactly."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Read and write one stream variable through the automation interface"
                - "Define input and output tables with tag names and units"
                - "Ask the agent to draft the case-running script from your tables"
                - "Spot-check two automated cases against manual runs"
            - name: Simplified surrogate model for operations use
              description: |-
                ## Purpose
                Shift engineers and planners want a quick answer to a rate or feed question at two in the morning, not a simulator they are not licensed to open. A surrogate, a set of fitted correlations or a small table built from rigorous cases and bounded by the range it was fitted over, gives fast answers while the rigorous model stays the reference.

                ## Milestones
                1. The three or four questions operations ask most often written down.
                2. Rigorous cases run across the realistic operating range for each question.
                3. Fitted correlations or lookup tables built with their valid range stated.
                4. The surrogate tested by operations and compared with the rigorous model each quarter.

                ## Notes
                Put the valid range on the front of the tool in large type. Surrogates are most often misused outside it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A surrogate tool with stated valid ranges is in use by operations and matches the rigorous model within tolerance at each quarterly check."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask two shift engineers which quick questions they ask most often"
                - "Run rigorous cases across the realistic range for each question"
                - "Fit correlations or tables and write their valid range on the front"
                - "Compare surrogate answers with the rigorous model @recurring(quarterly)"
            - name: Heat and material balance issue for a FEED package
              description: |-
                ## Purpose
                On a project, the heat and material balance is the document every discipline sizes from, and a late or unstable one delays line lists, datasheets and the cost estimate. Delivering a checked, case-complete balance on the agreed date, with a stream table numbered to the PFD and a clear revision history, is the simulation engineer's main contribution to front-end design.

                ## Milestones
                1. Design cases agreed with the process lead: normal, maximum, minimum and any start-up case.
                2. Each case converged and checked by an independent engineer.
                3. Stream table issued with stream numbers matching the PFD.
                4. A list of assumptions and holds issued with the balance.
                5. The balance issued on the agreed date with a revision number.

                ## Notes
                Freeze cases early. Every late case change ripples through every discipline's sizing.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A heat and material balance covering all agreed cases is independently checked and issued on the agreed date with stream numbers matching the PFD."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Agree the list of design cases with the process lead in writing"
                - "Converge every case and send it for independent checking"
                - "Number the stream table to match the PFD"
                - "Issue the balance with its assumptions and holds list"
            - name: New feed source impact study before switchover
              description: |-
                ## Purpose
                Switching to a new gas field, crude grade or supplier changes composition, and with it dew points, column loads, contaminant levels and product specifications. Running the matched model with the new feed ahead of the switchover date, and flagging limits that will be approached, gives operations a list of things to watch on day one instead of surprises.

                ## Milestones
                1. The new feed composition and its sample basis obtained and characterised.
                2. The model run at current and planned rates with the new feed.
                3. Equipment and specification limits approached by the new feed listed.
                4. A switchover watch list issued to operations before the change date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A switchover watch list based on the new feed composition is issued to operations before the switchover date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Get the new feed analysis and its sampling date"
                - "Characterise the new feed and run it at current and planned rates"
                - "List every limit or specification the new feed approaches"
                - "Issue a switchover watch list to the operations team"
            - name: Model handover from project to operations
              description: |-
                ## Purpose
                Project models are often built by a contractor, tuned to design data and left on a server nobody in operations can open. A planned handover, with the model, its basis, assumptions, case files and a walk-through for the site engineer who will own it, turns a project deliverable into a tool the plant actually uses after start-up.

                ## Milestones
                1. The handover contents agreed: model files, basis, assumptions, cases and vendor data.
                2. The model opened and converged on the site's simulator version.
                3. A walk-through held with the receiving engineer, with questions logged.
                4. Ownership recorded in the site model register.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The receiving site engineer has converged the model on the site simulator version and is named as owner in the model register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the handover contents list with the project and site leads"
                - "Open and converge the model on the site's simulator version"
                - "Hold a walk-through with the receiving engineer and log questions"
                - "Record the new owner in the site model register"
            - name: Presenting simulation results to plant management
              description: |-
                ## Purpose
                Simulation results die in meetings when they arrive as forty slides of stream tables, or when the audience cannot tell how far to trust them. A short briefing that leads with the decision, shows one chart, states model fitness and the main assumption, and offers a recommendation gets the result acted on.

                ## Milestones
                1. The decision the results support stated in one sentence at the top.
                2. One chart showing the key result with the operating limit marked.
                3. Model fitness and the single biggest assumption stated plainly.
                4. The briefing delivered and the decision or next step recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A briefing of five slides or fewer has been delivered to plant management, and the decision or next step is recorded in the meeting notes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the decision the results support in one sentence"
                - "Build one chart with the operating limit clearly marked"
                - "State model fitness and the biggest assumption on one slide"
                - "Record the decision or next step agreed in the meeting"
            - name: Performance test prediction before a plant test run
              description: |-
                ## Purpose
                Plant performance tests are expensive and rarely repeated, so the model should tell you in advance what the test will show and which measurements matter. Predicting the expected results, identifying the instruments the result depends on, and comparing prediction with measurement afterwards both prepares the test and gives the best model validation you will get all year.

                ## Milestones
                1. Expected test results predicted by the model at the planned test conditions.
                2. The instruments and samples that most affect the result listed for checking before the test.
                3. Measured results reconciled and compared with the prediction after the test.
                4. Differences explained and the model updated where the test shows it was wrong.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A prediction issued before the test and a comparison note issued after it exist, with model updates made for any explained difference."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Run the model at the planned test conditions and record the predictions"
                - "List the instruments and samples the result depends on most"
                - "Compare reconciled test results with the predictions"
                - "Update the model where the test shows it was wrong"
            - name: Graduate's first ninety days with the simulator
              description: |-
                ## Purpose
                Graduates are often handed a licence and a plant model and left to it, and they learn bad habits from whatever file they inherit. A ninety-day plan with a mentor, a practice model, a real small task and checks of every result by hand builds sound habits early and gives the graduate one piece of work the team uses.

                ## Milestones
                1. A mentor agreed and a weekly thirty-minute check-in in the diary.
                2. Training material and a practice model completed in the first month.
                3. One small real request delivered and peer checked in the second month.
                4. A plant model walked through with its owner and three questions answered in the third month.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day ninety the graduate has completed a practice model, delivered one peer-checked real request and walked through a plant model with its owner."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree a mentor and put a weekly check-in in both diaries"
                - "Finish the simulator's introductory training and one practice model"
                - "Check the week's simulation work with your mentor @recurring(weekly:fri)"
                - "Deliver one small real request and have it peer checked"
            - name: Operations engineer running models part time
              description: |-
                ## Purpose
                Many plants have no dedicated simulation engineer, so the unit's process engineer keeps the model alive between shift calls, trips and reports. Protecting a regular two-hour block, keeping only the models that earn their keep, and agreeing with the manager which questions the model will answer makes part-time simulation sustainable instead of abandoned.

                ## Milestones
                1. The models you are responsible for listed and cut to the ones that answer live questions.
                2. A protected weekly block for model work agreed with your manager.
                3. A short list of the questions the model will answer this year written down.
                4. A colleague briefed well enough to run the model when you are away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly model block is protected for at least three months, the model list is cut to live questions, and a named backup can run the model."
                cadence: rolling
              tasks:
                - "List the models you own and mark the ones answering live questions"
                - "Agree a protected weekly model block with your manager"
                - "Spend the protected block on model upkeep or open requests @recurring(weekly:wed)"
                - "Brief a colleague so they can run the model while you are away"
            - name: Inheriting a model built by someone who has left
              description: |-
                ## Purpose
                Taking over a model whose author has moved on means inheriting their assumptions, shortcuts and hidden fixes without the memory of why. A structured audit, reading the basis, mapping every logical operation, checking key outputs against plant data and writing down what you do not understand, tells you within a fortnight whether to keep, repair or rebuild.

                ## Milestones
                1. All files, notes and emails about the model gathered in one place.
                2. Property method, components, logical operations and tuned parameters listed.
                3. Key outputs compared with a recent steady period of plant data.
                4. A keep, repair or rebuild decision recorded with reasons and effort.

                ## Notes
                Ask the previous owner for an hour before they leave if you can. Ten minutes of their memory can save a week of reverse engineering.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model audit note lists method, logic and tuned parameters, compares outputs with plant data and records a keep, repair or rebuild decision."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect every file, note and email about the inherited model"
                - "List the property method, logical operations and tuned parameters"
                - "Compare key outputs with a recent steady period of plant data"
                - "Record a keep, repair or rebuild decision with reasons"
            - name: Simulation consultant delivering work for a client
              description: |-
                ## Purpose
                Consultants and contractors running simulations for a client carry the risk of an answer built on the client's data but blamed on the consultant. A clear scope, a data request with sign-off, a model basis the client accepts, monthly status notes and a final report that states the model's limits protect both sides and make repeat work more likely.

                ## Milestones
                1. A scope agreed in writing with deliverables, cases and exclusions.
                2. A data request issued and the client's data signed off as the basis.
                3. The simulation basis accepted by the client before modelling starts.
                4. A final report issued stating results, model fitness and limits of use.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A client-accepted simulation basis and a final report stating limits of use are issued, with every client data source signed off."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the scope with deliverables, cases and exclusions for client sign-off"
                - "Issue a data request and get the client to sign off the data received"
                - "Send the client a status note on progress and open data @recurring(monthly:28)"
                - "Issue the final report with a clear limits-of-use section"
            - name: Lead simulation engineer on a multi-discipline project
              description: |-
                ## Purpose
                Larger projects need a lead simulation engineer to coordinate several modellers, feed the mechanical, instrument and safety disciplines and own the balance revision that everyone sizes from. A clear split of model ownership, a weekly balance coordination slot and a register of who uses which output keep a dozen engineers working from the same numbers.

                ## Milestones
                1. Model sections allocated to named modellers with interface streams defined.
                2. A register of downstream users of each simulation output.
                3. A weekly balance coordination slot running with decisions recorded.
                4. Every balance revision notified to the downstream users on the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every balance revision for the project has been notified to all registered downstream users, with weekly coordination decisions recorded."
                cadence: rolling
              tasks:
                - "Allocate model sections to named modellers and define interface streams"
                - "List every discipline that uses a simulation output and which one"
                - "Run the balance coordination slot with all modellers @recurring(weekly:tue)"
                - "Notify downstream users of each new balance revision"
            - name: Dynamic depressuring and blowdown simulation
              description: |-
                ## Purpose
                Depressuring studies set blowdown valve sizes, flare loads and the minimum metal temperatures that decide material selection, and they depend on heat transfer, fire cases and vessel geometry that steady-state tools cannot capture. Building a dynamic blowdown model to the method required by the relevant standard family, such as API 521, and having it independently checked, gives the safety and materials teams numbers they can stand behind.

                ## Milestones
                1. The depressuring basis agreed: segments, inventories, fire and no-fire cases and target pressure and time.
                2. Each segment modelled with vessel geometry, metal mass and heat transfer method stated.
                3. Peak flare loads and minimum fluid and metal temperatures reported for each case.
                4. The model and results independently checked by a second engineer.
                5. Results handed to the process safety and materials engineers with limits of use.

                ## Notes
                These results feed safety and material decisions. Never issue them without an independent check, and route any change they prompt through management of change.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An independently checked blowdown report gives peak flare load and minimum metal temperature for every segment and case in the agreed basis."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Agree the depressuring basis and segment list with the process safety lead"
                - "Gather vessel geometry, metal mass and inventory for each segment"
                - "Run fire and no-fire cases and tabulate flare loads and minimum temperatures"
                - "Send the model and results for independent checking before issue"
            - name: Dynamic model for testing a control scheme
              description: |-
                ## Purpose
                Trying a new control strategy on a live compressor or column is a poor way to find out it oscillates. A dynamic process model matched to plant step responses lets the controls engineer test the scheme, interlock timings and tuning offline, with the process engineer owning the fidelity of the process side.

                ## Milestones
                1. Plant step test data obtained for the loops in question.
                2. The dynamic model matched to plant responses in gain, dead time and time constant.
                3. The proposed control scheme built in the model with the controls engineer.
                4. Test results and remaining model limitations handed over in a short note.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The dynamic model matches plant step responses within agreed tolerances, and a test note on the proposed scheme is handed to the controls engineer."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the controls engineer for recent step test data on the loops"
                - "Match the dynamic model to the plant step responses"
                - "Build the proposed scheme in the model with the controls engineer"
                - "Write a test note with results and model limitations"
            - name: Operator training simulator scope and validation
              description: |-
                ## Purpose
                An operator training simulator is only useful if its process model behaves like the plant in start-ups, trips and upsets, and many are bought with a model nobody has validated. Defining the training scenarios, the fidelity needed for each and a validation test plan agreed with experienced operators makes the simulator a credible training tool rather than an expensive screen.

                ## Milestones
                1. Training scenarios listed with operations: start-up, shutdown, trips and key upsets.
                2. Fidelity required for each scenario stated in measurable terms.
                3. A validation test plan written with acceptance criteria for each scenario.
                4. Validation runs witnessed by senior operators and deviations logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every training scenario has passed a validation run witnessed by senior operators against written acceptance criteria."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask the training lead which scenarios operators most need to practise"
                - "State the fidelity needed for each scenario in measurable terms"
                - "Write a validation test plan with acceptance criteria"
                - "Book senior operators to witness the validation runs"
            - name: Online model and real-time optimisation readiness
              description: |-
                ## Purpose
                Putting a model online against live data, as a digital twin or for real-time optimisation, magnifies every weakness: bad instruments, slow convergence and parameters that drift. Assessing readiness first, data quality, model speed and stability, a clear economic objective and someone to own it, avoids a costly system that operations switch off within a year.

                ## Milestones
                1. The economic or monitoring objective stated with its expected value.
                2. Instrument quality for every model input checked and gaps listed.
                3. Model run time and convergence reliability measured over a month of data.
                4. A readiness decision recorded with the owner, cost and support model.
                5. If running, a monthly check of model deviation from plant in place.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A readiness assessment records objective, instrument gaps, model reliability and a go or no-go decision with a named owner."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the objective and the value an online model would bring"
                - "Check instrument quality for every model input tag"
                - "Measure model run time and convergence over a month of plant data"
                - "Check online model deviation from plant values @recurring(monthly:25)"
            - name: Reactor model with kinetics fitted to plant data
              description: |-
                ## Purpose
                Conversion and yield reactors with fixed specifications cannot answer questions about catalyst ageing, temperature changes or new feeds. Fitting a kinetic model to plant and pilot data over the catalyst life lets you predict end-of-run performance, plan catalyst change-out timing with operations and test operating changes before they reach the reactor.

                ## Milestones
                1. Reactor operating and analysis data gathered across the catalyst life.
                2. A kinetic scheme chosen with the vendor's information and published sources.
                3. Kinetic parameters fitted and the model matching conversion and selectivity within tolerance.
                4. An end-of-run prediction made and reviewed with operations and the catalyst vendor.

                ## Notes
                Keep the fitted range explicit. Kinetics fitted at one temperature band rarely extrapolate well.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A kinetic reactor model matches plant conversion and selectivity within tolerance across the fitted range, with an end-of-run prediction reviewed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Gather reactor temperatures, pressures and analyses across the catalyst life"
                - "Choose a kinetic scheme with the catalyst vendor's input"
                - "Fit kinetic parameters and compare predicted and plant conversion"
                - "Review an end-of-run prediction with operations and the vendor"
            - name: Refrigeration and liquefaction cycle model
              description: |-
                ## Purpose
                Propane, mixed refrigerant and cascade cycles are among the hardest flowsheets to converge, with tight temperature approaches in multi-stream exchangers and compressor curves that set the capacity of the whole train. Building and matching a cycle model to plant data shows where refrigerant composition, compressor speed or exchanger approach limits production, and what a change would recover.

                ## Milestones
                1. The cycle modelled with compressor curves and multi-stream exchanger approaches.
                2. Composite heating and cooling curves in the main exchanger matched to plant temperatures.
                3. Refrigerant composition sensitivity run against production and power.
                4. A note issued on the limiting constraint and options to recover capacity.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A matched cycle model and a note naming the limiting constraint, with refrigerant composition sensitivity results, are issued."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Get compressor curves and the main exchanger datasheet from the vendor files"
                - "Build the cycle and match composite curves to plant temperatures"
                - "Run a refrigerant composition sensitivity against production and power"
                - "Write a note on the limiting constraint and recovery options"
            - name: Writing a site simulation practice guide
              description: |-
                ## Purpose
                Experienced simulation engineers carry the site's rules in their heads: which property package for which unit, how to match a column, what tolerance is acceptable. Writing a short practice guide from the projects in this area, and having it reviewed by peers, passes that judgement on and makes model quality less dependent on who happens to be available.

                ## Milestones
                1. A contents list drafted covering basis, thermodynamics, convergence, matching and control.
                2. Each section written with a site example and a common mistake.
                3. The guide reviewed by two peers and their comments resolved.
                4. The guide issued and linked from the model register.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A peer-reviewed site simulation practice guide is issued and linked from the model register."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft the contents list from the projects you have completed"
                - "Write each section with one site example and one common mistake"
                - "Send the draft to two peers and resolve their comments"
                - "Issue the guide and link it from the model register"
---

# Process Simulation Modelling

A process simulation is a calculation dressed up as a picture, and it is only as good as its basis, its thermodynamics and the last time someone checked it against the plant. These projects start with the foundations of a sound model (purpose, property package, components, feed characterisation, convergence and file control), then build the routines that keep models matched to the plant, the skills of thermodynamics, columns, optimisers and dynamics, the decisions on tools and methods, the dated deliverables, the different seats a simulation engineer sits in, and specialist work such as blowdown, operator training simulators, reactor kinetics and online models.

The repeating rhythm is a weekly look at the request queue and the model change log, monthly plant data reconciliation and model register updates on varied days, quarterly fouling, column efficiency and licence checks, and a yearly revalidation after the turnaround. The Metrics log, Purchase decision, Reading queue and Onboarding 30/60/90 templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
