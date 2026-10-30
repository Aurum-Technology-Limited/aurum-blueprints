---
id: engineering-practice.fea-and-cfd-simulation
name: FEA and CFD Simulation
description: "Finite element and CFD work you can defend: a clear analysis question, hand checks first, converged meshes, honest boundary conditions, independent model checks, validation against test data and reports that state their limits."
category: business
version: 1.0.0
tags: [engineering-practice, fea-and-cfd-simulation, engineer, fea, cfd, verification-validation, mesh-convergence, stress-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - course
    - meeting-notes
    - skills-matrix
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: FEA and CFD Simulation
          description: "Using finite element and computational fluid dynamics tools: models and meshes, boundary conditions, checking results against hand calculations and reporting limits."
          projects:
            - name: Analysis question and acceptance criteria sheet
              description: |-
                ## Purpose
                Most wasted simulation hours trace back to a model built before anyone agreed what it had to answer. A one-page sheet that states the question, the load cases, the quantity of interest and the acceptance criterion turns a vague request such as 'check the bracket' into a model with a finish line. Writing it before opening the pre-processor also exposes requests that a hand calculation would settle in an afternoon.

                ## Milestones
                1. A one-page template holding the question, load cases, quantity of interest, acceptance criterion and governing code clause.
                2. The template filled in and signed off by the requester for your current analysis.
                3. A decision recorded on whether simulation is needed at all or a hand method will do.
                4. The sheet filed as the first document in the analysis folder.

                ## Notes
                Name the quantity of interest precisely: peak membrane plus bending stress at a weld toe, not 'the stress'. Vague targets lead to cherry-picked contour plots.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed analysis question sheet with load cases, quantity of interest and acceptance criterion exists for the current job."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page analysis question template with five headed fields"
                - "Fill it in for the analysis on your desk now"
                - "Ask the requester to confirm the load cases and acceptance criterion in writing"
                - "Note whether a hand calculation could answer the question instead"
            - name: Choosing FEA and CFD software for your work
              description: |-
                ## Purpose
                Licences for general-purpose solvers cost more than many engineers' salaries, and the wrong choice locks a team into years of workarounds. Comparing two or three packages against the physics you actually run (linear statics, contact, transient thermal, turbulent internal flow), your mesh needs and your customers' expectations gives a defensible decision. Open-source options such as Code_Aster, CalculiX and OpenFOAM belong on the list, priced honestly for the training and support they need.

                ## Milestones
                1. A list of the analysis types run in the last two years, ranked by frequency and consequence.
                2. Three packages shortlisted, including at least one open-source option.
                3. Each package scored against the same criteria: physics coverage, meshing, scripting, verification manuals, support and total cost over three years.
                4. A trial or benchmark run on one of your own past models in each shortlisted package.
                5. A recommendation approved by the budget holder, with the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor for its verification manual; a package that cannot show its benchmark results is a risk on safety-related work.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A software decision scored against written criteria, tested on one of your own past models and approved by the budget holder."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List every analysis type you ran in the last two years"
                - "Shortlist three packages including one open-source solver"
                - "Request trial licences and verification manuals from each vendor"
                - "Rerun one past model in each package and compare the results"
                - "Write the recommendation and send it to the budget holder"
            - name: Workstation, licence and solver installation checks
              description: |-
                ## Purpose
                Running out of memory on the deadline night, or losing a floating licence mid-solve, costs more time than any meshing trick saves. Checking RAM against your largest model, confirming the licence server and borrowing rules, and running the vendor's installation test cases means the machine is ready before the urgent job lands.

                ## Milestones
                1. Workstation RAM, core count and scratch disk space recorded against the size of your largest recent model.
                2. Licence server address, licence counts and borrowing procedure written down.
                3. The vendor's installation verification cases run and passed on this machine.
                4. A backup of the working drive restored once to prove it works.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page machine record shows hardware, licence details and passed installation test cases, plus one proven restore from backup."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record RAM, cores and free scratch space on your analysis machine"
                - "Ask IT for the licence server details and borrowing rules"
                - "Run the vendor's installation verification test cases"
                - "Restore one analysis folder from backup to prove recovery works @recurring(quarterly)"
            - name: Analysis folder structure and file naming convention
              description: |-
                ## Purpose
                Six months after a job, nobody can tell which of 'bracket_final_v3_new.db' and 'bracket_final_v4.db' produced the issued figures. A fixed folder structure for geometry, mesh, input decks, results and report, plus a naming rule that carries job number, revision and load case, makes every issued number traceable back to the model that made it.

                ## Milestones
                1. A standard folder tree agreed for every analysis job.
                2. A naming rule covering job number, component, revision and load case, written in one paragraph.
                3. The rule applied to your current job and one recent past job.
                4. A short readme placed in the template folder explaining the structure.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A template analysis folder with a readme and naming rule is in use on the current job and one past job."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the folder tree for geometry, mesh, input, results and report"
                - "Write the file naming rule in one paragraph"
                - "Rename the files on your current job to match"
                - "Save an empty template folder with the readme on the shared drive"
            - name: Load case matrix and combination rules
              description: |-
                ## Purpose
                Real components see pressure, thermal growth, wind, seismic, lifting, transport and test loads, and the governing case is often the combination nobody modelled. A load case matrix that lists every load, its source, its factor and the combinations the code requires makes the analysis complete by design, and lets linear results be superposed instead of solving every combination from scratch.

                ## Milestones
                1. Every load acting on the component listed with its magnitude, source document and direction.
                2. The combinations and load factors required by the governing code or client specification written into a matrix.
                3. Each combination marked as solved directly or built by linear superposition, with nonlinear cases never superposed.
                4. The governing combination for each acceptance criterion identified and recorded.

                ## Notes
                Superposition only holds for linear models. Once contact, plasticity or large deflection is involved, each combination needs its own solve.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A load case matrix with sources, factors and combinations is attached to the current model and names the governing case for each criterion."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every load the component sees in service, test, transport and lifting"
                - "Find the load combinations and factors the governing code requires"
                - "Build the matrix and mark which cases can be superposed"
                - "Record the governing combination for each acceptance criterion"
            - name: Units and material data source record
              description: |-
                ## Purpose
                Mixing millimetres with metres, or tonnes with kilograms in a dynamic model, gives results that look plausible and are wrong by orders of magnitude. Equally, a yield strength copied from a supplier brochure is not a design value. Fixing a consistent unit system and recording where every material property comes from, whether a code table, a mill certificate or a test report, closes two of the commonest sources of silent error.

                ## Milestones
                1. One consistent unit system chosen and written at the top of every model's notes, with its density and time units shown.
                2. A material data sheet listing each property used, its value, temperature and source document.
                3. Design values taken from the governing code or a traceable test, not from marketing literature.
                4. Your current model checked against the sheet with any mismatches corrected.

                ## Notes
                In the millimetre, tonne, second system, density for steel is about 7.85e-9 and stress comes out in MPa. Writing this once beside the model stops the most common dynamic analysis mistake.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A material data sheet with a traceable source for every property, and a stated unit system, is attached to the current model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the unit system your current model uses, including density and time"
                - "List every material property in the model with its source"
                - "Replace any brochure values with code or test values"
                - "Check one known mass or reaction in the model against a hand figure"
            - name: Hand calculation before every model
              description: |-
                ## Purpose
                An analyst who cannot predict the answer to within a factor of two has no way to tell a good result from a broken one. A short hand estimate of reaction forces, nominal stress, first natural frequency or pressure drop, done before meshing, becomes the yardstick every result is judged against. It also catches the models that never needed building.

                ## Milestones
                1. A standard hand check page covering free body diagram, nominal stress or flow estimate and expected order of magnitude.
                2. Hand checks completed for the last three models and compared with their results.
                3. Any result more than a factor of two from its hand check explained in writing.
                4. A hand check filed with every new model before results are issued.

                ## Notes
                Roark's formulas, beam theory, thin-walled pressure formulas and the Moody chart cover a surprising share of the checks you need.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model issued in the next three months has a filed hand check, and any large difference from it is explained in writing."
                cadence: rolling
              tasks:
                - "Make a one-page hand check form with a free body diagram box"
                - "Do a hand check for your current model before looking at its results"
                - "Compare reactions and peak values from the last three models with hand figures"
                - "Write a note explaining any result more than twice its hand estimate"
            - name: Geometry clean-up and defeaturing rules
              description: |-
                ## Purpose
                CAD geometry built for manufacture is full of fillets, logos, small holes and sliver faces that wreck a mesh and add nothing to the answer, while removing the wrong fillet deletes the very stress concentration you were asked to find. Written rules for what to keep and what to strip, tied to the analysis question, make defeaturing a deliberate engineering decision instead of whatever the mesher tolerated.

                ## Milestones
                1. A list of feature types normally removed, such as cosmetic chamfers, text and small bolt holes far from the region of interest.
                2. A list of features always kept, such as fillets at load paths and weld toes being assessed.
                3. Every removed feature on the current model recorded with a reason.
                4. A midsurface or simplified body saved separately from the original CAD.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written defeaturing rule set exists and the current model carries a log of every removed feature with its reason."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the features you removed on your last three models"
                - "Mark which removals could have changed the quantity of interest"
                - "Write keep and remove rules on one page"
                - "Log every removed feature on the current model with a reason"
            - name: First benchmark against a known solution
              description: |-
                ## Purpose
                Before trusting a solver on a real component, run it on problems with published answers: a cantilever, a plate with a hole, a thick cylinder under pressure, laminar pipe flow, flow over a backward-facing step. The NAFEMS benchmark set and the vendor's verification manual both offer these. Matching them with your own settings proves you can drive the tool, not just that the tool works.

                ## Milestones
                1. Four structural and two fluid benchmark cases chosen with their reference answers.
                2. Each case modelled with your normal element types, mesh settings and solver options.
                3. Percentage error against the reference recorded for every case.
                4. Any case outside 5 percent investigated and its cause written down.
                5. The benchmark folder saved for rerunning after software upgrades.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six benchmark cases are solved with your usual settings, each within 5 percent of its reference or with the difference explained."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick four structural and two fluid benchmarks with published answers"
                - "Model the plate with a hole case and compare the peak stress factor"
                - "Record the percentage error for every case in one table"
                - "Rerun the full benchmark set and compare with last year's errors @recurring(yearly)"
            - name: Written analysis procedure for the team
              description: |-
                ## Purpose
                When three engineers mesh the same part three different ways, the client gets three different answers and the firm gets no consistency. A short procedure covering the question sheet, hand check, mesh convergence, model checking, independent review and reporting turns individual habits into a team standard. Quality systems such as ISO 9001 and many client specifications expect one to exist.

                ## Milestones
                1. A procedure of no more than ten pages covering each step from request to issue.
                2. Mandatory checks separated clearly from recommended practice.
                3. The procedure reviewed by at least two other analysts and the engineering manager.
                4. The procedure issued under document control with a revision number.
                5. Every new job from issue onward run to it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A controlled analysis procedure of ten pages or fewer is issued and referenced on every new analysis job."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map the steps your team currently follows from request to issue"
                - "Draft the procedure with mandatory and recommended steps marked"
                - "Circulate the draft to two analysts and the engineering manager"
                - "Review the procedure against the year's errors and client comments @recurring(yearly)"
            - name: Mesh convergence study on every critical result
              description: |-
                ## Purpose
                A stress or velocity that changes by 20 percent when the mesh is refined is not a result, it is a guess. Running at least three mesh densities in the region of interest and plotting the quantity of interest against element size shows whether the answer has settled, and a grid convergence index puts a number on the remaining discretisation error. Singularities at sharp corners and point loads never converge, and the study reveals them too.

                ## Milestones
                1. A standard convergence method chosen, such as three refinements with a refinement ratio of at least 1.3.
                2. Convergence plots produced for the quantity of interest on the current model.
                3. Singular points identified and excluded from assessment with a written reason.
                4. Discretisation error stated in the results with the method used.

                ## Notes
                Refine where the answer is read, not everywhere. Global refinement wastes solve time; local refinement around the hot spot or the near-wall region tells you what you need.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each critical result issued carries a convergence plot from three or more meshes and a stated discretisation error."
                cadence: rolling
              tasks:
                - "Write down the refinement ratio and number of meshes you will use"
                - "Run three mesh densities on the current model's region of interest"
                - "Plot the quantity of interest against element size"
                - "Flag any location that keeps rising with refinement as a singularity"
            - name: Pre-solve model checklist
              description: |-
                ## Purpose
                Unconnected parts, a missing constraint, a pressure applied to the wrong face or a material left at its default are caught in two minutes by a checklist and in two days by a puzzled reviewer. A one-page list run before every solve, covering units, mass, constraints, loads, contacts, element quality and solver settings, catches the boring errors that cause most wrong answers.

                ## Milestones
                1. A one-page pre-solve checklist covering geometry, mesh quality, materials, loads, constraints and solver settings.
                2. Total model mass and applied load sum checked against expected values on the current model.
                3. Element quality metrics such as aspect ratio, Jacobian and skewness checked against stated limits.
                4. The checklist signed and filed with every solved model.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model solved over the next quarter has a signed pre-solve checklist, including mass and reaction checks."
                cadence: rolling
              tasks:
                - "Write a pre-solve checklist on one page"
                - "Check total mass and summed reactions on your current model"
                - "Set element quality limits for aspect ratio, Jacobian and skewness"
                - "Add any error found in the last month to the checklist @recurring(monthly:12)"
            - name: Independent model check by a second engineer
              description: |-
                ## Purpose
                Analysts are blind to their own boundary conditions. An independent check by someone who did not build the model, working from the question sheet and the input deck rather than the polished report, is the single most effective control on simulation error. Many clients and codes require it for safety-related work, and it trains the checker as much as it protects the author.

                ## Milestones
                1. A checking scope agreed by consequence: full independent check, input review or spot check.
                2. A checker's form listing what was examined and any comments raised.
                3. Every comment answered and closed before results are issued.
                4. The check recorded on the analysis register with the checker's name and date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No safety-related analysis is issued without a signed independent check form with all comments closed."
                cadence: rolling
              tasks:
                - "Define three checking levels by consequence of failure"
                - "Draft a checker's form with input, mesh, loads and results sections"
                - "Ask a colleague to check your current model from the input deck"
                - "Review open check comments across all live models @recurring(weekly:tue)"
            - name: Analysis register and request log
              description: |-
                ## Purpose
                Without a register, nobody can answer which analyses support a design, which software version ran them or which are still unchecked. A simple log of every analysis with job number, question, software and version, status, checker and issued report number makes the analysis portfolio visible and stops results being quoted after the design they modelled has changed.

                ## Milestones
                1. A register with columns for job, component, question, software and version, status, checker and report number.
                2. All live analyses and the last year's issued ones entered.
                3. Analyses whose underlying design has since changed marked as superseded.
                4. A monthly review of the register held and its actions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every live and recent analysis with status and checker, reviewed each month for superseded entries."
                cadence: rolling
              tasks:
                - "Set up the register with the seven agreed columns"
                - "Enter every live analysis and those issued in the last year"
                - "Mark analyses whose design has changed since issue as superseded"
                - "Review the register for stale or unchecked entries @recurring(monthly:5)"
            - name: Material property library upkeep
              description: |-
                ## Purpose
                Typing properties by hand into each model invites the slip that turns a 235 MPa steel into 355, or forgets temperature dependence in a hot pipe. A controlled library of materials with traceable sources, temperature tables, stress-strain curves for nonlinear work and fatigue curves, reviewed each quarter, gives every analyst the same values and a single place to correct a mistake.

                ## Milestones
                1. A shared library file holding each common material with source, temperature range and revision.
                2. Nonlinear stress-strain data marked as true or engineering stress and strain.
                3. Duplicate and unreferenced entries removed.
                4. A quarterly review that checks new code editions and project-specific materials.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared material library with a source and revision for every entry is in use and has been reviewed in the last quarter."
                cadence: rolling
              tasks:
                - "Export the materials used across your recent models into one list"
                - "Add the source and temperature range for each entry"
                - "Mark each stress-strain curve as true or engineering values"
                - "Check the library against new code editions and project materials @recurring(quarterly)"
            - name: Solver regression checks after updates
              description: |-
                ## Purpose
                Vendors change default element formulations, contact algorithms and turbulence model constants between releases, and an update can shift a result by several percent without warning. Rerunning a small regression set of your own past models after every update, and comparing key outputs, tells you whether old reports still match what the new version would say.

                ## Milestones
                1. A regression set of five to eight past models covering your main analysis types.
                2. Reference values for each model's key outputs stored with the software version that produced them.
                3. The set rerun after each update with differences tabulated.
                4. Any difference above 2 percent traced to a release note or default change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regression set with stored reference values is rerun after every software update and differences above 2 percent are explained."
                cadence: rolling
              tasks:
                - "Pick five to eight past models that cover your main analysis types"
                - "Store each model's key outputs with the version number"
                - "Rerun the regression set and tabulate any changes @recurring(quarterly)"
                - "Read the release notes for changed defaults before each update"
            - name: Compute queue and licence use management
              description: |-
                ## Purpose
                Shared solver licences and cluster nodes become a bottleneck the week several projects hit their deadlines together. Looking at the queue each week and at licence use each month shows who is waiting, which jobs could run overnight or at lower core counts, and whether the case for another licence or cloud burst capacity is real or anecdotal.

                ## Milestones
                1. A weekly view of queued and running jobs with expected finish times.
                2. Licence denials and peak use recorded monthly from the licence server logs.
                3. Overnight and weekend running rules agreed with the team.
                4. A capacity case, with numbers, prepared before the next budget round.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of monthly licence use figures exist and a capacity case is written from them before the budget round."
                cadence: rolling
              tasks:
                - "Ask IT how to read licence server usage logs"
                - "Check the solver queue and agree run order with the team @recurring(weekly:mon)"
                - "Record licence denials and peak use for the month @recurring(monthly:20)"
                - "Agree overnight running rules for long transient jobs"
            - name: Simulation data archiving and retention
              description: |-
                ## Purpose
                Transient CFD runs can each produce hundreds of gigabytes, and analysts either fill every drive or delete the one file a later audit needs. A retention rule that keeps input decks, meshes, key results and scripts for the life of the asset, while purging intermediate time steps, keeps storage affordable and leaves every issued result reproducible.

                ## Milestones
                1. A retention rule stating what is kept, for how long and where, by analysis type.
                2. Input decks, scripts and software versions archived for every issued analysis.
                3. Intermediate result files purged from closed jobs after the agreed period.
                4. One archived analysis rerun from the archive to prove it can be reproduced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed retention rule is applied monthly and one archived analysis has been reproduced from its stored inputs."
                cadence: rolling
              tasks:
                - "Measure storage used by your last ten analysis jobs"
                - "Write a retention rule for inputs, results and scratch files"
                - "Archive closed jobs and purge their scratch files @recurring(monthly:27)"
                - "Rerun one archived job from its stored inputs"
            - name: Weekly analysis status update to project leads
              description: |-
                ## Purpose
                Project managers rarely understand why a nonlinear contact model takes three weeks, and analysts rarely hear that the design changed until after the solve. A short weekly update covering each live analysis, its stage, any design inputs still missing and the date results are expected keeps simulation off the critical path and surfaces stale geometry early.

                ## Milestones
                1. A standard five-line update format agreed with project leads.
                2. Every live analysis listed with stage, blockers and expected date.
                3. Missing design inputs named with an owner and a date needed.
                4. Updates sent every week for a full quarter.

                ## Notes
                Start from the **Meeting notes** template if the update is a short call rather than an email.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly status update covering every live analysis has been sent for twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Agree a five-line status format with your project leads"
                - "List every live analysis with its stage and expected date"
                - "Send the status update with blockers and missing inputs @recurring(weekly:thu)"
                - "Ask each lead whether the design has changed since the model was built"
            - name: Lessons learned log from simulation errors
              description: |-
                ## Purpose
                Every analysis team repeats the same mistakes: a forgotten gravity load, a symmetry plane in the wrong place, an outlet boundary too close to a recirculation zone. Logging each error found by a checker, a test or a client, with its cause and the check that would have caught it, turns embarrassment into a growing checklist and a training resource.

                ## Milestones
                1. A log with fields for error, how it was found, cause, consequence and preventing check.
                2. Errors from the last year entered from memory, check forms and client comments.
                3. Each entry linked to a change in the checklist or procedure.
                4. The log reviewed monthly with the team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons log with at least ten entries exists, each linked to a checklist or procedure change."
                cadence: rolling
              tasks:
                - "Set up the lessons log with five fields"
                - "Enter errors from the last year's check forms and client comments"
                - "Link each entry to a checklist change"
                - "Go through new lessons with the team @recurring(monthly:16)"
            - name: Finite element fundamentals refresher course
              description: |-
                ## Purpose
                Many engineers learned FEA by clicking through a vendor tutorial and never met shape functions, integration points or why linear tetrahedra lock in bending. A structured refresher, through a university short course, NAFEMS training or a standard text such as Cook's or Bathe's, explains why element choice and mesh density matter, which makes every later decision faster and safer.

                ## Milestones
                1. A course or text chosen that covers element formulation, stiffness assembly and numerical integration.
                2. A study plan of one session a week for ten weeks written out.
                3. Worked exercises done by hand and repeated in the solver.
                4. A one-page summary of element types and when to use each.

                ## Notes
                Start from the **Course** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten weekly study sessions are complete and a one-page element selection summary has been written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a course or textbook covering element formulation"
                - "Block a weekly study slot for ten weeks"
                - "Work one textbook problem by hand and in the solver @recurring(weekly:wed)"
                - "Write a one-page summary of element types and their limits"
            - name: Boundary conditions and constraint modelling
              description: |-
                ## Purpose
                Fixed supports that do not exist in reality are the most common reason FEA overstates stiffness and misplaces peak stress, and in CFD a velocity inlet placed too close to a bend gives a flow that never happens. Practising how to represent bolted joints, soft supports, symmetry, remote loads, inlets, outlets and walls, and testing each choice by sensitivity, builds judgement no solver supplies.

                ## Milestones
                1. A reference sheet for common support types and how to model each.
                2. One current model rerun with a fixed support and a more realistic one, and the difference recorded.
                3. CFD inlet and outlet placement checked by moving each boundary further away.
                4. Rigid body motion and over-constraint checks added to the pre-solve checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A boundary condition reference sheet exists and two sensitivity runs on real models show the effect of the support choice."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List how each support on your current model is represented"
                - "Rerun the model with a softer or more realistic support"
                - "Move one CFD outlet five diameters further downstream and compare"
                - "Write the boundary condition reference sheet"
            - name: Contact and nonlinear material modelling
              description: |-
                ## Purpose
                Bolted flanges, press fits, gaskets and anything that yields need contact and nonlinear material models, where convergence failures and wrong answers both become common. Learning penalty versus augmented Lagrange contact, friction, load stepping, plasticity models and how to read the solver's convergence history moves an analyst from linear statics into most of the real problems clients bring.

                ## Milestones
                1. A bolted joint benchmark solved with pretension and frictional contact.
                2. An elastic-plastic case solved with a bilinear and a multilinear material, and the difference noted.
                3. Convergence history plots read and the cause of one failed solve fixed.
                4. A short guide written on contact settings that work for your typical joints.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bolted joint and an elastic-plastic benchmark are solved and a written guide on contact and convergence settings exists."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Build a two-plate bolted joint with pretension and friction"
                - "Solve one elastic-plastic case with two material curves"
                - "Read the convergence history from a failed solve and note the cause"
                - "Write the contact settings guide for your usual joint types"
            - name: Modal, harmonic and random vibration analysis
              description: |-
                ## Purpose
                Pipework near compressors, skids on vibrating decks and equipment shipped by road all fail by resonance more often than by static overload. Understanding natural frequencies, mass participation, damping assumptions and response spectra lets you check separation margins, predict response to known excitation and spot when a stiffening rib moves a mode straight onto running speed.

                ## Milestones
                1. A modal analysis of a current component with mass participation above 90 percent in each direction.
                2. Natural frequencies compared against known excitation frequencies with separation margins stated.
                3. A harmonic or random response case solved with a documented damping value.
                4. A first natural frequency hand check matched to the model within 10 percent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A modal and a forced response analysis are complete with stated damping, mass participation and frequency separation margins."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Estimate the first natural frequency of a current component by hand"
                - "Run a modal analysis and check cumulative mass participation"
                - "List excitation frequencies and calculate separation margins"
                - "Solve one harmonic response case with a stated damping ratio"
            - name: Linear and nonlinear buckling assessment
              description: |-
                ## Purpose
                Thin shells, slender struts and vacuum vessels fail by buckling at loads well below what a stress check predicts, and a linear eigenvalue buckling factor often overstates real capacity because it ignores imperfections. Learning to run eigenvalue buckling, seed imperfections from the mode shapes and run a geometrically nonlinear collapse analysis gives load factors you can compare with code knock-down factors.

                ## Milestones
                1. An eigenvalue buckling analysis run on a thin-walled component with the first five modes reviewed.
                2. An imperfection based on the first mode seeded at a stated amplitude.
                3. A nonlinear collapse load found and compared with the eigenvalue result.
                4. The applicable code knock-down or safety factor identified and applied.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A component has eigenvalue and nonlinear collapse results with seeded imperfections and the code safety factor applied."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick a thin-walled component from a current or past job"
                - "Run eigenvalue buckling and review the first five mode shapes"
                - "Seed an imperfection from mode one and run a collapse analysis"
                - "Find the code knock-down factor that applies to the geometry"
            - name: Fatigue assessment from finite element stresses
              description: |-
                ## Purpose
                Most structural failures in service are fatigue, and FEA stresses at weld toes and notches are where fatigue assessments go wrong: singular peak values, the wrong stress type for the chosen S-N curve, or a mean stress correction forgotten. Learning hot spot extrapolation, stress linearisation and the effective notch method, and matching each to the fatigue code in use, makes the numbers fit for the method.

                ## Milestones
                1. The fatigue code and S-N curve class for a current welded detail identified.
                2. Hot spot stress extracted at the read-out points the code prescribes.
                3. Stress ranges, cycle counts and a damage sum calculated for one detail.
                4. The result checked against a nominal stress hand assessment.

                ## Notes
                Never read fatigue stress straight from the peak node at a weld toe. Use the extrapolation or linearisation method your fatigue code defines.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One welded detail has a complete fatigue assessment using the code's read-out method, checked against a nominal stress estimate."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Identify the fatigue code and detail category for one welded joint"
                - "Mesh the weld toe region to suit hot spot read-out points"
                - "Extrapolate hot spot stress and calculate the damage sum"
                - "Compare with a nominal stress fatigue estimate by hand"
            - name: Turbulence model selection in CFD
              description: |-
                ## Purpose
                Choosing k-epsilon because it is the default can mispredict separation, swirl and heat transfer badly enough to change a design decision. Understanding what standard and realisable k-epsilon, k-omega SST, Reynolds stress models and scale-resolving methods each assume, and testing two of them on a case with known data, lets you pick and defend a model for each flow type you meet.

                ## Milestones
                1. A summary of four turbulence models with their assumptions, wall treatment needs and typical uses.
                2. A validation case with published data, such as a backward-facing step, run with two models.
                3. Reattachment length or pressure recovery compared against the data for both.
                4. A default model chosen for each of your common flow types, with reasons.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two turbulence models are compared on a published validation case and a written default exists for each common flow type."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Summarise four turbulence models and their wall treatment needs"
                - "Run a backward-facing step case with k-epsilon and k-omega SST"
                - "Compare reattachment length with the published data"
                - "Write default model choices for your common flow types"
            - name: CFD near-wall meshing and y+ control
              description: |-
                ## Purpose
                Wall shear, heat transfer and pressure drop all depend on the first cell height, and a mesh with y+ of 30 used with a model expecting 1 gives confident nonsense. Learning to size inflation layers from an estimated wall shear, check the y+ distribution after solving and match it to the wall treatment makes CFD pressure drops and heat transfer coefficients believable.

                ## Milestones
                1. A first cell height calculated by hand for the current case from Reynolds number and target y+.
                2. Inflation layers built with a stated growth rate and layer count.
                3. The y+ distribution plotted after solving and compared with the wall treatment's valid range.
                4. Pressure drop compared against a Moody chart or correlation estimate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CFD case shows a y+ distribution within the wall treatment's valid range and a pressure drop checked against a correlation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Calculate the first cell height for your current case by hand"
                - "Build inflation layers with a stated growth rate"
                - "Plot y+ on all walls after the solve"
                - "Check the pressure drop against a friction factor correlation"
            - name: Heat transfer and conjugate thermal models
              description: |-
                ## Purpose
                Electronics enclosures, heat exchangers, hot piping supports and motor housings need temperatures before stresses can mean anything. Building conduction-only models, then conjugate heat transfer where solid and fluid are solved together, and mapping temperatures into a thermal stress model, covers a large share of real industrial requests and exposes where convection coefficients were simply guessed.

                ## Milestones
                1. A conduction model with convection coefficients taken from a cited correlation.
                2. A conjugate heat transfer model of the same part, compared with the conduction result.
                3. Temperatures mapped into a structural model and thermal stress results produced.
                4. An energy balance check showing heat in equals heat out within 1 percent.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A part has conduction and conjugate thermal results, an energy balance within 1 percent and mapped thermal stresses."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a hot component and gather its operating temperatures"
                - "Build a conduction model with cited convection coefficients"
                - "Run a conjugate heat transfer model and compare temperatures"
                - "Check the energy balance and map temperatures to a stress model"
            - name: Scripted parametric models instead of manual rebuilds
              description: |-
                ## Purpose
                Rebuilding a model by hand for each design iteration takes days and never quite repeats the same mesh or loads. Scripting geometry, mesh and loads in the solver's Python or journal language means the next variant takes minutes, a design study of twenty cases becomes practical, and the script itself documents exactly what was done.

                ## Milestones
                1. One frequently rerun model chosen with its variable parameters listed.
                2. A script that builds geometry, mesh, loads and solve from a parameter file.
                3. The scripted model reproducing the manual model's key result within 1 percent.
                4. A parameter study of at least five variants run from the script.
                5. The script stored under version control with a readme.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled script rebuilds a past model within 1 percent of its manual result and has run a five-variant study."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick the model you rebuild most often and list its parameters"
                - "Record a journal of one manual build to start the script"
                - "Reproduce the manual model's key result from the script"
                - "Run five design variants and tabulate the results"
            - name: Simulation data management system decision
              description: |-
                ## Purpose
                Once a team runs hundreds of analyses a year, shared drives and spreadsheets stop coping, and the question becomes whether a simulation process and data management tool is worth its cost. Defining what must be traceable, piloting one option on a live project and comparing it with a disciplined folder and register approach gives a decision based on your workload, not a sales demonstration.

                ## Milestones
                1. Traceability requirements written: which inputs, versions and approvals must be linked to each result.
                2. Two options compared, including improving the current folder and register approach.
                3. One option piloted on a live project for at least a month.
                4. A decision recorded with cost, effort and the traceability gained.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on simulation data management, based on a month-long pilot and written traceability requirements."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write what must be traceable for every issued result"
                - "List the gaps your current folders and register leave"
                - "Pilot one data management option on a live project"
                - "Record the decision with cost and traceability gained"
            - name: Cutting solve times without losing accuracy
              description: |-
                ## Purpose
                Long solve times push analysts into coarse meshes and skipped convergence studies. Using symmetry, submodelling, shell or beam idealisation away from the region of interest, better solver settings and parallel runs can cut solve time by a factor of ten while improving accuracy where it matters. Recording each change against a reference result proves nothing was lost.

                ## Milestones
                1. Solve time and memory recorded for your three slowest recent models.
                2. Symmetry, idealisation and solver setting options listed for each.
                3. At least one model rerun faster with its key result within 2 percent of the reference.
                4. The changes that worked added to the team procedure.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One slow model is rerun at least three times faster with its key result within 2 percent of the original."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Record solve time and memory for your three slowest models"
                - "Check each for unused symmetry or over-refined regions"
                - "Rerun one with the changes and compare its key result"
                - "Add the successful changes to the analysis procedure"
            - name: Submodelling for local stress detail
              description: |-
                ## Purpose
                A global model fine enough to resolve every weld toe and fillet would never solve, while a coarse one cannot give local stress. Submodelling, where displacements from a coarse global model drive a refined local model, gives accurate local stresses at modest cost, provided the cut boundaries sit far enough from the hot spot and the global model is itself converged.

                ## Milestones
                1. A global model converged for displacement at the planned cut boundaries.
                2. A local submodel with cut boundaries placed away from the stress concentration.
                3. Cut boundary stresses compared between global and submodel to confirm placement.
                4. Local stress results converged and reported with the submodel method stated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A submodel result is issued with converged local stress and a documented check that cut boundaries are correctly placed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check that the global model's displacements converge at the cut"
                - "Build a local submodel of the hot spot region"
                - "Compare stresses at the cut boundaries between both models"
                - "Run a local convergence study in the submodel"
            - name: Choosing shell, beam or solid elements
              description: |-
                ## Purpose
                Meshing a thin plated structure with solids wastes hours and can still be wrong through the thickness, while modelling a thick casting with shells misses the stress entirely. A clear decision rule based on thickness-to-span ratio, the stresses you need and the code's assessment method, tested on one component three ways, settles an argument teams have on every job.

                ## Milestones
                1. One component modelled with shells, beams where valid, and solids.
                2. Displacement, peak stress and solve time compared across the three.
                3. A written rule for element choice by geometry and assessment method.
                4. Connection modelling between element types described for mixed models.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written element selection rule exists, supported by one component modelled three ways with compared results."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a plated component with varying thickness"
                - "Model it with shells and with solids using the same loads"
                - "Compare displacement, peak stress and solve time"
                - "Write the element choice rule and how to join mixed element types"
            - name: Steady state or transient CFD decision
              description: |-
                ## Purpose
                Vortex shedding behind a pipe, sloshing, pressure surges and start-up heating do not exist in a steady solution, yet transient runs can cost fifty times more. Deciding by physics, checking whether a steady solve oscillates instead of converging and estimating the time step and run length from the flow's own time scales gives a defensible choice and a realistic compute budget.

                ## Milestones
                1. The flow's characteristic time scales estimated, such as shedding frequency from a Strouhal number.
                2. A steady run attempted and its residual and monitor behaviour recorded.
                3. Time step chosen from a Courant number target and run length from the time scales.
                4. The decision and compute estimate written in the analysis question sheet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The steady or transient choice for the current case is recorded with time scale estimates and a compute budget."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the shedding or residence time scale for your case"
                - "Run a steady solve and watch monitor points for oscillation"
                - "Pick a time step from a target Courant number"
                - "Write the decision and compute estimate on the question sheet"
            - name: Validation against strain gauge or flow test data
              description: |-
                ## Purpose
                Verification shows the equations were solved right; validation shows the right equations were solved. Comparing a model against strain gauges, accelerometers, thermocouples or measured pressure drops from a test or the operating plant is the only way to know how far to trust it, and frameworks such as ASME V&V 10 for solid mechanics and V&V 20 for fluids set out how to do it with stated uncertainty.

                ## Milestones
                1. A test or plant dataset identified with sensor locations, uncertainty and operating conditions.
                2. The model run at the test conditions with outputs extracted at sensor locations.
                3. Model and test compared with both numerical and measurement uncertainty stated.
                4. A validation statement recording the range of conditions over which the model is trusted.

                ## Notes
                Agree the comparison metric and acceptance level before seeing the test results, otherwise it is too easy to tune the model until it matches.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A validation report compares model and measured data with stated uncertainties and defines the conditions over which the model is valid."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find a test or plant dataset that matches a current model"
                - "Agree the comparison metric and acceptance level before comparing"
                - "Run the model at the test conditions and extract sensor values"
                - "Write the validation statement with its valid range"
            - name: Sensitivity and uncertainty study on key inputs
              description: |-
                ## Purpose
                Deterministic results hide how much it depends on a friction coefficient, a gasket stiffness or an inlet turbulence intensity that nobody measured. Varying the five most uncertain inputs and ranking their effect shows which assumptions drive the answer, where to spend test money and how much margin the result really carries.

                ## Milestones
                1. The five most uncertain inputs listed with plausible ranges and sources.
                2. One-at-a-time or design-of-experiments runs completed across those ranges.
                3. A ranked chart of each input's effect on the quantity of interest.
                4. The result reported as a range, with the dominant assumptions named.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked sensitivity chart for five inputs exists and the issued result is stated as a range with its dominant assumptions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the five least certain inputs in your current model"
                - "Set a plausible low and high value for each with a source"
                - "Run the model at each extreme and record the output"
                - "Rank the inputs by effect on the quantity of interest"
            - name: Results and limits statement for a client deliverable
              description: |-
                ## Purpose
                Clients read the contour plot and the word 'pass', not the assumptions behind them, so a simulation result travels further than its validity. A deliverable that states the question, key assumptions, mesh convergence, checks performed, validation status and the conditions outside which results must not be used protects both the client and the engineer who signs it.

                ## Milestones
                1. A results section showing the quantity of interest against its acceptance criterion with consistent plot scales.
                2. A limits statement listing assumptions, excluded load cases and the range of validity.
                3. Convergence, independent check and validation status summarised in one table.
                4. The deliverable reviewed by the checker and issued under a document number.

                ## Notes
                Fix contour plot legends to the acceptance limit, so red means fail, rather than letting the software autoscale every image.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An issued deliverable carries a results comparison against acceptance criteria and a written limits statement checked by the reviewer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set contour legends to the acceptance limit for every results plot"
                - "Write the limits statement with assumptions and valid range"
                - "Summarise convergence, check and validation status in one table"
                - "Ask the agent to draft a plain-language summary of the limits for the client"
            - name: Preparing for a third-party review of an analysis
              description: |-
                ## Purpose
                Certifying authorities, client consultants and regulators reviewing your model will ask for the input deck, the mesh study, the material sources and the reasons behind every boundary condition. Assembling these before the reviewer asks turns a month of comment rounds into a short meeting and shows the analysis was controlled from the start.

                ## Milestones
                1. A review pack holding the question sheet, input deck, material sheet, convergence study and check record.
                2. Each boundary condition and simplification justified in writing.
                3. Likely reviewer questions listed and answered in advance.
                4. All reviewer comments logged, answered and closed.

                ## Notes
                Start from the **Meeting notes** template for the review meeting itself.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The third-party review closes with every comment answered in a logged response within the agreed review period."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the reviewer what they expect to receive and when"
                - "Assemble the review pack from the analysis folder"
                - "Write a justification for every boundary condition and simplification"
                - "Log each reviewer comment with a response and closure date"
            - name: Major software version migration
              description: |-
                ## Purpose
                Moving to a new major release, or from one vendor to another, can break scripts, change element defaults and make old models unreadable. Planning the migration with a regression run, a script audit and a cut-over date, and keeping the old version available for reproducing issued work, avoids discovering incompatibilities in the middle of a client job.

                ## Milestones
                1. Release notes reviewed for changed defaults, removed features and file compatibility.
                2. The regression set run in the new version with differences explained.
                3. Every in-house script tested and updated.
                4. A cut-over date agreed and the old version kept installed for reproducing past work.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The team has moved to the new version on a set date with regression differences explained and all scripts working."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the release notes for changed defaults and removed features"
                - "Run the regression set in the new version"
                - "Test every in-house script and log the fixes needed"
                - "Agree a cut-over date with the team and IT"
            - name: Presenting simulation results at a design review
              description: |-
                ## Purpose
                Designers, operations staff and managers at a design review need to know whether the part passes, where the margin is thin and what assumption could change that, in about ten minutes. Preparing a short set of slides with consistent scales, a clear pass or fail against criteria and an honest list of limits keeps the review on decisions instead of on colourful contour plots.

                ## Milestones
                1. Five slides or fewer showing the question, model, key results against criteria, limits and recommendation.
                2. All contour plots on fixed, labelled scales tied to acceptance limits.
                3. The three most likely challenges to the result answered on a backup slide.
                4. Decisions and actions from the review recorded and sent to attendees.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Results are presented in five slides or fewer and the review's decisions are recorded and circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft five slides from question to recommendation"
                - "Rescale every contour plot to the acceptance limit"
                - "Write answers to the three most likely challenges"
                - "Send the recorded decisions and actions to attendees"
            - name: Graduate analyst's first six months
              description: |-
                ## Purpose
                New graduates often arrive fluent in one package from university and unaware that industrial work runs on checks, hand calculations and written limits. A six-month plan pairing them with a senior analyst, starting with benchmarks and checked small jobs before solo work, builds good habits early and gives the mentor evidence for the competence record.

                ## Milestones
                1. A mentor named and a weekly review slot booked.
                2. The benchmark set and the team procedure completed in the first month.
                3. Three small analyses delivered under full independent check.
                4. A competence sign-off recording which analysis types can be run with lighter checking.

                ## Notes
                Start from the **Skills matrix** template to track competence by analysis type.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A graduate has completed the benchmarks, delivered three checked analyses and holds a signed competence record within six months."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree a mentor and book a weekly review slot"
                - "Complete the benchmark set and read the team procedure"
                - "Review the week's model and check comments with the mentor @recurring(weekly:fri)"
                - "Update the skills matrix after each checked analysis"
            - name: Lead analyst reviewing a team's models
              description: |-
                ## Purpose
                As a lead you sign off work you did not build, often under schedule pressure, and your name carries the risk. A structured sampling review, a competence matrix showing who can run what unsupervised and a monthly look at one model from each analyst keeps quality consistent and shows where training is needed before a mistake reaches a client.

                ## Milestones
                1. A skills matrix of each analyst against analysis types and checking levels.
                2. A sampling plan that reviews at least one model per analyst each month.
                3. Common review findings shared with the team as short notes.
                4. Training needs agreed with each analyst at their next one-to-one.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analyst has had at least one model sample-reviewed each month for a quarter, with findings recorded."
                cadence: rolling
              tasks:
                - "Build the skills matrix for your analysts"
                - "Pick one model per analyst to review this month"
                - "Sample-review one model from each analyst @recurring(monthly:9)"
                - "Share common findings with the team as a short note"
            - name: Sole consultant offering simulation services
              description: |-
                ## Purpose
                Running FEA or CFD as an independent consultant means carrying the software cost, the professional liability and the checking burden alone. Setting out a scope of services, a written limits clause, a peer checking arrangement with another analyst and professional indemnity cover that names simulation keeps the business viable and the work defensible when no colleague is down the corridor.

                ## Milestones
                1. A service list stating which analysis types you offer and which you decline.
                2. Standard terms with a limits of use clause for simulation results.
                3. A reciprocal checking arrangement agreed with another qualified analyst.
                4. Professional indemnity cover confirmed to include simulation work.

                ## Notes
                Ask your insurer or broker directly whether simulation and design advice are covered; policy wording varies and this is a question for them, not a guess.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written service list, standard terms with a limits clause, a peer checking agreement and confirmed indemnity cover are in place."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the analysis types you will and will not offer"
                - "Draft a limits of use clause for your standard terms"
                - "Agree a reciprocal checking arrangement with another analyst"
                - "Review open quotes, invoices and licence costs @recurring(monthly:23)"
                - "Confirm with your broker that indemnity cover includes simulation @recurring(yearly)"
            - name: Designers running simulation inside CAD tools
              description: |-
                ## Purpose
                Design engineers increasingly run quick stress or flow checks inside their CAD package, which speeds early design but tempts people to treat an automatic mesh and default fixed support as an answer. Agreeing what designers may decide alone, what must go to an analyst and how they check their own models keeps the speed without the false confidence.

                ## Milestones
                1. A written boundary between designer-level checks and analyst-level work.
                2. A one-page designer checklist on supports, mesh refinement and plausibility.
                3. A short training session held for the design team.
                4. Monthly spot checks of designer models by an analyst for the first six months.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A designer simulation guideline and checklist are issued, training is held and six monthly spot checks are recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree which decisions designers may make from CAD simulation alone"
                - "Write a one-page designer checklist"
                - "Run a short training session with the design team"
                - "Spot-check one designer simulation and send feedback @recurring(monthly:14)"
            - name: Moving from research CFD to industrial work
              description: |-
                ## Purpose
                Engineers arriving from a PhD or research post often know turbulence theory deeply but are used to open-ended studies, custom codes and months per case. Industrial work wants an answer to a design question in two weeks, a documented validation basis and a report a non-specialist can act on. Adjusting expectations early avoids frustration on both sides.

                ## Milestones
                1. Three recent industrial reports read to see the level of detail clients expect.
                2. One research habit identified to keep, such as validation discipline, and one to drop.
                3. A first industrial job delivered within its planned hours.
                4. Feedback from the lead analyst recorded and acted on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first industrial CFD job is delivered within planned hours with the lead analyst's feedback recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read three recent industrial analysis reports from your team"
                - "Write down one research habit to keep and one to drop"
                - "Agree a hour budget for your first industrial job"
                - "Ask the lead analyst for written feedback after delivery"
            - name: Design by analysis for pressure equipment
              description: |-
                ## Purpose
                Pressure vessel codes such as ASME Section VIII Division 2 Part 5 and EN 13445 Annex B allow designs justified by FEA instead of formulas, but only when stresses are classified, linearised or assessed by elastic-plastic methods exactly as the code prescribes. Learning these routes properly lets you justify nozzles, supports and openings that formulas cannot handle, with results a code reviewer will accept.

                ## Milestones
                1. The governing code edition and its design by analysis route chosen for one component.
                2. Stress classification lines placed and linearised results extracted, or an elastic-plastic collapse check run.
                3. Protection against plastic collapse, local failure, buckling and ratcheting assessed as the code requires.
                4. The assessment reviewed by an engineer experienced in the code.

                ## Notes
                The code, not the software default, decides how stresses are read. Confirm the edition in force for the project before starting.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One pressure component is assessed to a named design by analysis route, covering every required failure mode, and reviewed by an experienced engineer."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Confirm the pressure code edition in force for the project"
                - "Read the design by analysis route and list its failure mode checks"
                - "Place stress classification lines and extract linearised stresses"
                - "Ask an experienced code engineer to review the assessment"
            - name: FEA for fitness-for-service of corroded equipment
              description: |-
                ## Purpose
                When inspection finds local thinning, dents or cracks, Level 3 assessments under API 579-1 and ASME FFS-1 use finite element models of the measured damage to decide whether the equipment can keep running. Building the model from real thickness grids, applying the standard's elastic-plastic criteria and stating the remaining life assumptions is specialist work where a wrong result has direct safety consequences.

                ## Milestones
                1. Inspection thickness data converted into a geometry or thickness map for the model.
                2. Material properties and corrosion allowance agreed with the integrity engineer.
                3. The Level 3 assessment run to the standard's criteria with load cases stated.
                4. Results, remaining life assumptions and reinspection interval passed to the integrity engineer for their decision.

                ## Notes
                The analyst provides evidence; the decision to keep equipment in service rests with the asset owner's integrity authority under their management of change process.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A Level 3 fitness-for-service FEA built from measured thickness data is issued to the integrity engineer with stated assumptions."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Obtain the inspection thickness grid from the integrity engineer"
                - "Build the model geometry from the measured thickness map"
                - "Run the assessment to the fitness-for-service standard's criteria"
                - "Issue results and assumptions to the integrity engineer"
            - name: Fluid structure interaction analysis
              description: |-
                ## Purpose
                Flexible risers, tall stacks in wind, heat exchanger tubes and valve trims can couple flow and structural motion in ways neither FEA nor CFD alone captures. Deciding whether one-way mapping of pressures is enough or a two-way coupled solve is needed, then running it with careful time stepping and data transfer checks, is the specialist route to flow-induced vibration and large-deflection problems.

                ## Milestones
                1. A one-way or two-way coupling decision based on structural deflection relative to flow features.
                2. A one-way pressure mapping run with load transfer checked for force balance.
                3. A two-way coupled run completed where needed, with coupling convergence monitored.
                4. Results compared against a screening method such as a vortex-induced vibration check.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An FSI case is solved with a documented coupling choice, verified load transfer and a comparison against a screening method."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Estimate structural deflection relative to the flow features"
                - "Run a one-way pressure mapping and check the force balance"
                - "Set up a two-way coupled case if deflection warrants it"
                - "Compare results with a vortex-induced vibration screening check"
            - name: Multiphase CFD for separators and sloshing
              description: |-
                ## Purpose
                Separators, slug catchers, tanks under motion and spray systems involve gas, liquid and sometimes solids, where model choice between volume of fluid, Euler-Euler and discrete particle methods changes the answer completely. Matching the method to the flow regime, checking mass conservation of each phase and comparing against vendor performance data or a lab test is advanced work that most single-phase experience does not prepare you for.

                ## Milestones
                1. The flow regime identified and a multiphase method chosen with reasons.
                2. Phase mass conservation checked to within 0.5 percent over the run.
                3. Key outputs such as liquid carry-over or free surface height compared with vendor data or a test.
                4. Model limits stated, including droplet size assumptions and regime validity.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A multiphase case shows phase mass conservation within 0.5 percent and a comparison against vendor or test data with stated limits."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Identify the flow regime for your separator or tank case"
                - "Choose between volume of fluid, Euler-Euler or particle tracking"
                - "Track phase mass conservation through the run"
                - "Compare carry-over or free surface results with vendor data"
---

# FEA and CFD Simulation

FEA and CFD Simulation is for engineers who build finite element and computational fluid dynamics models and have to stand behind the numbers: stress, vibration, buckling, flow, pressure drop and heat transfer. It starts with foundations (the analysis question, software choice, units, material data, hand calculations and a first benchmark), moves through the operating routines that keep models trustworthy, then into skills such as contact, fatigue, turbulence modelling and conjugate heat transfer, followed by improvements, dated reviews and migrations, the situations of graduates, lead analysts, consultants and designers, and finally specialist work such as design by analysis, fitness-for-service and fluid structure interaction.

The rhythm is weekly for the compute queue, model check status and project updates, monthly for the analysis register, archiving, lessons learned and licence use, quarterly for the material library and solver regression runs, and yearly for the benchmark set and the written analysis procedure. The Purchase decision, Course, Meeting notes and Skills matrix templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
