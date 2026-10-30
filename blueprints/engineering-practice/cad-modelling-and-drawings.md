---
id: engineering-practice.cad-modelling-and-drawings
name: CAD Modelling and Drawings
description: "Drawing standards, templates and layers set up once, 3D models built with design intent, every sheet checked and revised properly, and drawing packages issued for construction or manufacture with confidence."
category: business
version: 1.0.0
tags: [engineering-practice, cad-modelling-and-drawings, engineer, drafting, 3d-modelling, gd-and-t, drawing-standards, title-blocks]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - skills-matrix
    - operational-checklist
    - course
    - remediation-plan
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: CAD Modelling and Drawings
          description: "Producing engineering models and drawings in CAD: drawing standards, 3D models, layers and templates, revision control, checking and issue for construction."
          projects:
            - name: Choosing the drawing standard your office follows
              description: |-
                ## Purpose
                Half the arguments on a drawing check come from people working to different standards: one engineer was trained on ASME Y14 conventions with third-angle projection, another on ISO 128 and first-angle, and the client's specification quietly asks for something else again. Writing down which standard family, edition and projection method your office uses, and where client standards override it, gives every drafter and checker the same rulebook before the next sheet is started.

                ## Milestones
                1. Every client and contract specification that names a drawing standard listed with its clause reference.
                2. One governing standard family chosen, with the edition and projection method stated.
                3. Exceptions for specific clients or product lines recorded in a short table.
                4. The decision approved by the lead engineer and filed where every CAD user can open it.

                ## Notes
                Mixing first-angle and third-angle projection inside one drawing set is the classic error that leads to parts made as mirror images. State the projection symbol on every title block, whichever you choose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed one-page decision naming the drawing standard family, edition and projection method, with a table of client exceptions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the drawing clauses from your three most recent client specifications"
                - "List which ISO, ASME or BS EN drawing standards the office already holds and their editions"
                - "Draft the one-page decision with projection method and client exceptions"
                - "Get the decision approved by the lead engineer"
                - "Check for new editions of the drawing standards you follow @recurring(yearly)"
            - name: Office drawing template and title block set
              description: |-
                ## Purpose
                Drawings whose title blocks are missing the scale, the projection symbol or the checker's initials get rejected at the first review, and every drafter who builds their own frame invents a slightly different one. A controlled set of templates for each sheet size, with attribute-driven title blocks that fill from the file properties, removes that whole class of comment and makes your drawings recognisable at a glance.

                ## Milestones
                1. Templates built for A0 to A4 (or the ANSI sizes your clients use) with correct borders and zone grids.
                2. Title block fields linked to file properties so number, title, revision and dates fill automatically.
                3. A test drawing produced from each template and checked against the chosen standard.
                4. Templates stored in a read-only shared location and old local copies withdrawn.

                ## Notes
                Keep the general tolerance block, units, projection symbol and material field in the title block itself rather than as loose notes. Checkers look there first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A read-only template set for every sheet size in use, with property-linked title blocks, tested on one drawing per size."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather three recent drawings and mark every title block field that varied between them"
                - "Build the A1 template first with property-linked title block attributes"
                - "Produce a test drawing from each sheet size and check it against the standard"
                - "Move the templates to a read-only shared folder and tell the team where they are"
            - name: Layer, line type and pen weight standard
              description: |-
                ## Purpose
                When one person puts centre lines on layer 0 and another uses a bylayer red that plots at 0.7 mm, the issued PDF looks like three offices drew it. A written layer and line convention, with names, colours, line types and plotted weights for each object class, makes sheets consistent, lets you freeze or isolate disciplines on combined drawings, and is the backbone of a CAD standards manual.

                ## Milestones
                1. A layer table covering geometry, hidden, centre, dimensions, text, hatching, viewports and each discipline in use.
                2. Line weights mapped to the ISO 128 or ASME line width series you chose, with a plot style table to match.
                3. The layers and styles loaded into every drawing template.
                4. A one-page summary of the convention pinned in the CAD standards manual.

                ## Notes
                Keep the number of layers small. A list of 40 sensible layers gets used; a list of 300 gets ignored and everything ends up on layer 0.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published layer and line weight table, matched by a plot style file and loaded into every template, with a one-page summary in the CAD manual."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the layer list from two recent drawings and compare the names used"
                - "Draft the layer table with colour, line type and plotted weight for each class"
                - "Build the matching plot style table and test print one sheet at full size"
                - "Load the layers and plot styles into every drawing template"
            - name: CAD software and licence choice for the team
              description: |-
                ## Purpose
                Teams often end up with whatever CAD package the first hire knew, then discover the client wants native files in a different format or the subscription has tripled. Comparing two or three packages against your real work (2D drafting, parametric parts, plant design, file exchange with clients) and the true cost over three years gives a decision you can defend to management and to the people who have to use it.

                ## Milestones
                1. The team's real use cases written as five or six scored criteria, including client file format requirements.
                2. Two or three packages trialled on the same small sample job.
                3. Three-year licence and maintenance cost compared, including network or named-user options.
                4. A choice recorded with the reasons and the transition plan for existing files.

                ## Notes
                Start from the **Purchase decision** template. Ask for a trial licence and test the import of your own legacy files before signing; translation losses show up only on real data.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded software decision comparing at least two packages on the same trial job, with three-year cost and a file transition plan."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the file formats your top five clients require for deliverables"
                - "Write five scored criteria for the package from the team's real work"
                - "Run the same sample part and drawing in each trial package"
                - "Compare three-year licence costs and record the final choice"
            - name: Units, origins and coordinate system set-up
              description: |-
                ## Purpose
                A plant model drawn in millimetres that receives a site survey in metres, placed at a different origin and rotated to true north instead of plant north, produces clashes and setting-out errors that nobody notices until steel arrives. Fixing the units, the project base point, the survey point and the grid orientation at the start of every project, and recording them where others can find them, is an hour that saves weeks.

                ## Milestones
                1. Drawing and model units agreed for each discipline and written in the project CAD brief.
                2. A project origin, survey point and plant north rotation defined and shown on a control drawing.
                3. Every discipline seed file set to the agreed units and origin.
                4. A test overlay of two disciplines' models showing they align without moving anything.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A project control drawing defining units, origin, survey point and plant north, with a successful two-discipline overlay test recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the surveyor or client for the site coordinate system and its units"
                - "Set the project base point and plant north in the seed file"
                - "Draw the control drawing showing grid, origin and north arrows"
                - "Overlay two discipline models and record whether they align"
            - name: CAD file structure and external reference layout
              description: |-
                ## Purpose
                Models that are linked by absolute paths to someone's desktop break the moment the project moves to the server or is sent to a client. Agreeing how a project's CAD files sit together (backgrounds, discipline models, sheet files, library parts) and using relative paths for every external reference means drawings open complete on any machine and can be packed for transmittal in one step.

                ## Milestones
                1. A standard project folder layout for CAD files, separating models, sheets, references and incoming files.
                2. Relative reference paths set as the default in every user's CAD options.
                3. A sample project packed and opened on a different machine with every reference resolving.
                4. The layout described on one page of the CAD standards manual.

                ## Notes
                Document numbering and transmittals belong to document control. This project is only about how the CAD files reference each other so that numbered drawings open correctly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented CAD folder layout with relative references, proven by opening a packed sample project on a second machine with no missing files."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Open a recent project and list every broken or absolute reference path"
                - "Sketch the folder layout for models, sheets, references and incoming files"
                - "Change the default reference path setting to relative on each workstation"
                - "Pack a sample project and open it on another machine to test"
            - name: Block, symbol and standard part library
              description: |-
                ## Purpose
                Every drafter who redraws a gate valve symbol, a north arrow or an M12 bolt spends time making something slightly different from the last one. A controlled library of blocks, P&ID and electrical symbols, weld symbols and standard purchased parts, drawn once to your layer convention, cuts drawing time and makes sheets read the same however many hands touched them.

                ## Milestones
                1. The 50 most used symbols and blocks identified from recent drawings.
                2. Each one redrawn or cleaned to the layer and attribute standard, with insertion points agreed.
                3. Standard fasteners and purchased parts pulled from a toolbox or verified supplier models.
                4. The library published read-only with a visual index sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A read-only library of at least 50 checked blocks and standard parts, each on the agreed layers, with a printed or PDF index sheet."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Count block usage in five recent drawings and list the top 50"
                - "Clean the first ten blocks to the layer standard and fix insertion points"
                - "Download or build verified models for the standard fasteners you use most"
                - "Publish the library with an index sheet showing every symbol"
            - name: Workstation set-up for 3D modelling
              description: |-
                ## Purpose
                Large assemblies that take four minutes to open and crash during a section view are often running on an uncertified graphics driver or a laptop with too little memory. Checking the workstation against the CAD vendor's certified hardware list, and setting up the input devices and display properly, removes a daily frustration and protects unsaved work.

                ## Milestones
                1. Current CPU, memory, graphics card and driver version recorded against the vendor's certified list.
                2. The certified graphics driver installed and system options set as the vendor recommends.
                3. Autosave and backup copy intervals set and tested.
                4. A note of the upgrade needed, if any, sent to whoever approves hardware.

                ## Notes
                A 3D mouse and a second monitor for the model tree and properties pay for themselves quickly on assembly work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The workstation runs a certified graphics driver, autosave is tested, and any hardware shortfall is written up and sent for approval."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up your graphics card on the CAD vendor's certified hardware list"
                - "Install the certified driver version and restart the CAD package"
                - "Set autosave to ten minutes and confirm a backup file is created"
                - "Send any hardware upgrade request with the vendor's minimum specification"
            - name: CAD skills baseline across the team
              description: |-
                ## Purpose
                Managers often assume everyone can do everything in CAD until a deadline reveals that only one person can build a sheet metal flat pattern or fix a broken reference set. A skills baseline across the tasks your work actually needs shows who can do what, where a single point of failure sits, and what training to buy first.

                ## Milestones
                1. A list of 15 to 25 CAD tasks the team performs, from basic drafting to assemblies and scripting.
                2. Each person rated on each task using a simple four-level scale.
                3. Single points of failure and the three biggest gaps identified.
                4. Training or pairing agreed for each gap with a named person.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed skills matrix for every CAD user, with the three biggest gaps and a named training action for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the CAD tasks your last three projects needed"
                - "Ask each team member to rate themselves on the four-level scale"
                - "Mark tasks only one person can do as single points of failure"
                - "Agree one training or pairing action per gap"
                - "Reassess the skills matrix with each person @recurring(yearly)"
            - name: Drawing check before every issue
              description: |-
                ## Purpose
                Errors found by a fabricator cost far more than errors found by a checker, yet many offices check by flicking through the PDF on the day of issue. A written checking routine, carried out by someone other than the drafter, with a marked-up check print and every comment closed or answered before the sheet leaves, is the single biggest quality control in a drawing office.

                ## Milestones
                1. A drawing checklist covering title block, views, dimensions, tolerances, notes, materials, references and revision details.
                2. Every drawing issued with a check print signed by an independent checker.
                3. Checker comments closed or answered in writing before the issue.
                4. Check prints kept with the project record for the life of the job.

                ## Notes
                Start from the **Operational checklist** template. Check against the model and the calculations, not just the sheet; a beautifully dimensioned drawing of the wrong size is still wrong.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every drawing issued in a quarter has a signed check print on file with all comments closed, confirmed by a sample of ten."
                cadence: rolling
              tasks:
                - "Write the first version of the drawing checklist from your last ten check comments"
                - "Agree who checks whose drawings on the current project"
                - "Log the week's checker comments by type in the error log @recurring(weekly:fri)"
                - "Sample ten issued drawings for signed check prints at quarter end"
            - name: Revision block and revision cloud discipline
              description: |-
                ## Purpose
                Sheets that change without a new revision letter, or whose clouds from three revisions ago are still showing, leave the site unsure what actually changed. Clouding each change, adding a delta triangle and a clear revision description, and clearing old clouds at the next revision keeps the sheet honest and makes the change obvious to whoever builds from it.

                ## Milestones
                1. A written rule for revision letters and numbers, preliminary versus issued, matched to your standard.
                2. Clouds and delta triangles on every changed area of the current revision only.
                3. Revision descriptions that say what changed, not just "general update".
                4. Revision blocks on issued sheets matching the drawing register at every spot check.

                ## Notes
                The drawing register and transmittals sit with document control. Your job here is that the sheet itself tells the truth about its own revision.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly spot check of ten issued sheets finds every revision block matching the register and every change clouded at its current revision."
                cadence: rolling
              tasks:
                - "Write the revision lettering rule on one page and add it to the CAD manual"
                - "Set up a revision cloud and delta block on the revision layer in each template"
                - "Spot check ten issued sheets for revision blocks matching the register @recurring(monthly:8)"
                - "Remove superseded clouds when starting each new revision"
            - name: Weekly model health and file audit
              description: |-
                ## Purpose
                CAD files rot quietly: unused blocks and layers pile up, proxy objects arrive from other packages, features fail to rebuild and file sizes double. A short weekly routine to purge, audit and rebuild active files, and to note any model that throws errors, keeps files fast to open and stops corruption spreading into the issued set.

                ## Milestones
                1. A list of the active project files that make up the current issue set.
                2. Each active file purged, audited and saved without errors once a week.
                3. Parametric models rebuilt with no failed features or broken mates.
                4. A short log of files that needed repair and what was wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every file in the current issue set opens and rebuilds without errors, with a repair log showing weekly audits for the last eight weeks."
                cadence: rolling
              tasks:
                - "List the active files in the current issue set"
                - "Purge, audit and rebuild the active files and note any errors @recurring(weekly:mon)"
                - "Repair or rebuild the worst model on the error list"
                - "Add recurring causes of corruption to the CAD manual"
            - name: Monthly CAD standards compliance spot check
              description: |-
                ## Purpose
                Standards drift as soon as the person who wrote them stops looking: a new starter brings their own text style, a subcontractor's drawings arrive on the wrong layers. A monthly spot check of a handful of sheets against the CAD standards manual, with a quiet word or a fix rather than a lecture, keeps the drawing set consistent without anyone policing it full time.

                ## Milestones
                1. Five drawings chosen at random from the month's work, across different people and disciplines.
                2. Each checked against the layer, text, dimension style and title block standard using the CAD standards checker tool where available.
                3. Findings logged with the file and person, and fixes agreed.
                4. A recurring finding turned into a template or library fix rather than a reminder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five drawings checked against the CAD standards manual every month for six months, with findings logged and at least one root fix made to templates or libraries."
                cadence: rolling
              tasks:
                - "Set up the CAD standards checker with your layer and style rules"
                - "Pick five random drawings and run the standards check @recurring(monthly:12)"
                - "Log findings with file name and agree the fix with each author"
                - "Change the template when the same finding appears twice"
            - name: Library and template maintenance cycle
              description: |-
                ## Purpose
                Libraries go stale: a valve symbol is superseded, a supplier changes a part, a client asks for a new title block field. Reviewing templates, blocks and standard parts every quarter, with a change log, keeps them trustworthy so people keep using them instead of making their own copies.

                ## Milestones
                1. A change request list where users can report library or template problems.
                2. Requests reviewed and actioned or declined every quarter.
                3. A version number and change log on the template and library set.
                4. Users told what changed after each release.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly library releases in a year, each with a version number, a change log and every change request answered."
                cadence: cyclic
              tasks:
                - "Create a shared list for library and template change requests"
                - "Review the change requests and release library updates @recurring(quarterly)"
                - "Add a version number to the template and library set"
                - "Send a short note to users listing what changed"
            - name: CAD backup and restore routine
              description: |-
                ## Purpose
                Most drawing offices only discover their backup does not include the vault database, or that restoring a project takes two days, on the morning a server fails before an issue. Confirming what is backed up, how often and to where, and actually restoring a project once a month, turns a hope into a tested routine.

                ## Milestones
                1. A written list of what is backed up: CAD files, vault database, templates, libraries and licence server settings.
                2. Backup frequency and retention agreed with IT or the managed service provider.
                3. A full project restored to a test location and opened successfully.
                4. Time to restore recorded so project managers know the real risk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly restore test of one project has succeeded for three consecutive months, with restore times recorded."
                cadence: rolling
              tasks:
                - "Ask IT exactly which CAD folders and databases are in the backup"
                - "Restore one project to a test folder and open its assembly @recurring(monthly:20)"
                - "Record the time the restore took and any missing files"
                - "Confirm the off-site copy of the vault database exists @recurring(quarterly)"
            - name: Redline and markup incorporation workflow
              description: |-
                ## Purpose
                Redlines from engineers, checkers and site arrive as scribbled prints, PDF comments and phone photos, and the one that gets lost is always the one that mattered. A single inbox for markups, each logged and either incorporated or answered before the next issue, means nothing is silently dropped and the engineer can see their change went in.

                ## Milestones
                1. One place agreed where all markups for a project are filed, digital or scanned.
                2. Each markup logged with drawing, date, originator and status.
                3. Markups incorporated, or rejected with a reason, before the next revision is issued.
                4. Originators shown the revised sheet for confirmation on significant changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No open markups older than two weeks on the active project log, and every markup closed before the drawing's next issue."
                cadence: rolling
              tasks:
                - "Set up the markup folder and log for the current project"
                - "Clear the markup log and update each status @recurring(weekly:wed)"
                - "Send the revised sheet back to the originator for significant changes"
                - "Note markups that arrived after issue and why"
            - name: External references on multi-discipline projects
              description: |-
                ## Purpose
                On a plant or building project the structural model, the piping model and the architectural background are referenced into each other dozens of times, and an out-of-date or overlaid reference produces drawings that look right but are not. A clear rule on which references attach where, with a monthly check of paths and versions, keeps every discipline drawing from the current design.

                ## Milestones
                1. A reference map showing which discipline files attach to which, and whether overlay or attachment.
                2. Incoming files from other disciplines placed in a dated incoming folder before being linked.
                3. Reference paths and versions checked across the active set every month.
                4. Circular references and nested reference chains removed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current reference map exists and monthly checks for three months show no broken, absolute or out-of-date references in the active set."
                cadence: rolling
              tasks:
                - "Draw the reference map for the current project on one sheet"
                - "Agree with each discipline lead when updated models will be shared"
                - "Check reference paths and versions across the active set @recurring(monthly:3)"
                - "Remove any circular or nested references found"
            - name: PDF and print output standard
              description: |-
                ## Purpose
                Even a drawing that measures correctly in CAD can plot at the wrong scale, with missing fonts or with greyed-out hidden lines that disappear on a site photocopier. Defining how sheets are published (page setups, plot style, PDF settings, fonts and the scale check), and testing on real printers, makes the issued output as reliable as the model.

                ## Milestones
                1. Named page setups for each sheet size saved in the templates.
                2. PDF settings agreed for resolution, fonts, layers and searchable text, with PDF/A where clients ask for it.
                3. A scale bar or check dimension on every sheet measured on a full-size print.
                4. A batch publish routine that produces the issue set in one run.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Named page setups and PDF settings are in every template, and a full-size print of each sheet size measures within the stated scale."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Print one A1 sheet at full size and measure the check dimension"
                - "Save named page setups for each sheet size in the templates"
                - "Agree PDF settings including fonts, layers and searchable text"
                - "Build a batch publish list for the current issue set"
            - name: CAD software updates and version compatibility
              description: |-
                ## Purpose
                One person upgrading to the new release can make every file they save unreadable to the rest of the team and to the client still on last year's version. Planning service packs and major upgrades, testing them on a copy of real projects first, and agreeing the save-as version with clients avoids a week of lost files mid-project.

                ## Milestones
                1. The current version, service pack and file format of every CAD user recorded.
                2. Client required file versions listed per project.
                3. Each major upgrade tested on a copy of an active project before roll-out.
                4. A save-as default set where clients need an older format.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All users on the same agreed version and service pack, with each major upgrade preceded by a recorded test on a project copy."
                cadence: cyclic
              tasks:
                - "Record each user's CAD version and service pack in one table"
                - "Check vendor service packs and install the approved one @recurring(quarterly)"
                - "Test the next major release on a copy of an active project @recurring(yearly)"
                - "Set the save-as format where a client needs an older version"
            - name: GD&T fundamentals for part drawings
              description: |-
                ## Purpose
                Plus or minus dimensions on every feature leave the inspector guessing which surface to measure from, and parts that pass inspection can still fail to assemble. Learning geometric dimensioning and tolerancing to ASME Y14.5 or ISO GPS (datums, feature control frames, position, profile, form and the material condition modifiers) lets you say exactly what function needs and nothing tighter.

                ## Milestones
                1. The datum reference frame, feature control frame and the main geometric characteristics understood and explained back to a colleague.
                2. Three of your own part drawings re-toleranced with GD&T and reviewed by an experienced checker.
                3. Position tolerance with maximum material condition applied to a hole pattern, with the bonus tolerance worked out.
                4. A one-page office crib sheet of the symbols you use, in the standard you follow.

                ## Notes
                Start from the **Course** template. ASME Y14.5 and ISO GPS look alike but differ on defaults such as the independency principle; pick the one your drawings state and learn that one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three of your part drawings re-toleranced with GD&T, reviewed by a checker with no fundamental errors, plus a one-page symbol crib sheet."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a GD&T course or textbook matched to the standard your drawings state"
                - "Work through datums and feature control frames on one of your own parts"
                - "Re-tolerance three part drawings and ask a checker to review them"
                - "Write the office symbol crib sheet"
            - name: Parametric modelling with design intent
              description: |-
                ## Purpose
                Parts that break every time someone changes the length were modelled without design intent: sketches under-constrained, features hung off edges that disappear, dimensions that do not match how the part is made or measured. Practising fully constrained sketches, sensible feature order, reference planes and named parameters produces models that survive the changes every design goes through.

                ## Milestones
                1. Rules written for sketch constraints, feature order and reference geometry, agreed with the team.
                2. Ten practice parts modelled with fully constrained sketches and named key parameters.
                3. Each practice part changed in its main dimensions without any rebuild failures.
                4. One of your live models refactored to the same rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten practice parts and one live model that rebuild without errors after their main dimensions are changed by 20 percent."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write five design intent rules for sketches and feature order"
                - "Model one practice part from a textbook exercise @recurring(weekly:sat)"
                - "Change each practice part's main dimensions and note any failures"
                - "Refactor one live model to the same rules"
            - name: Assembly modelling, mates and top-down design
              description: |-
                ## Purpose
                Assemblies built by dragging parts until they look right hide clearance problems and break when one part changes. Learning mate strategy, sub-assemblies that match how the product is built, skeleton or layout sketches for top-down design, and when not to use in-context references, gives assemblies that update predictably and can be trusted for interference checks.

                ## Milestones
                1. A mating strategy written for your product type, including fixed parts and sub-assembly levels.
                2. One practice assembly of 20 or more parts built from a skeleton layout.
                3. The skeleton changed and the whole assembly updated without broken mates.
                4. Rules for external references agreed so released parts do not depend on an assembly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 20-part practice assembly driven from a skeleton layout updates without broken mates after a layout change, with written mating rules."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Sketch the sub-assembly levels for one product the way it is built"
                - "Build a skeleton layout and drive three parts from it"
                - "Complete the 20-part practice assembly and run an interference check"
                - "Write the rules for when in-context references are allowed"
            - name: Projection, sections and detail views refresher
              description: |-
                ## Purpose
                Many engineers who model fluently in 3D never learned to choose the views a reader needs: which face to put in front, where to cut a section, when a detail or auxiliary view saves three notes. Revisiting orthographic projection, section conventions and view selection makes sheets shorter, clearer and easier to check.

                ## Milestones
                1. First-angle and third-angle projection drawn by hand for one simple part and checked.
                2. Section types (full, half, offset, aligned, broken-out) and hatching conventions practised.
                3. Two of your existing drawings redrawn with fewer, better chosen views.
                4. A checker confirming the redrawn sheets need no extra views to manufacture the part.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two existing drawings re-laid out with fewer views and confirmed by a checker as complete for manufacture."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch one part by hand in both first-angle and third-angle projection"
                - "Practise each section type on a sample part"
                - "Re-lay out two existing drawings with fewer views"
                - "Ask a checker to confirm the new layouts are complete"
            - name: Dimensioning for manufacture and inspection
              description: |-
                ## Purpose
                Dimensions placed wherever the CAD auto-dimension tool dropped them produce chains that accumulate tolerance, double dimensions that contradict each other, and features the machinist cannot measure. Dimensioning from functional datums, once and only once, in the way the part will be made and inspected, is a craft worth practising deliberately with a machinist or inspector in the room.

                ## Milestones
                1. Office rules written for baseline versus chain dimensioning, reference dimensions and general tolerances.
                2. Three recent drawings reviewed with a machinist or inspector and their comments recorded.
                3. Those drawings corrected for double, missing and unmeasurable dimensions.
                4. The general tolerance standard (for example ISO 2768 or a title block table) stated on every template.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three drawings reviewed by a machinist or inspector and corrected, with written dimensioning rules added to the CAD manual."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book an hour with a machinist or inspector to look at three of your drawings"
                - "Mark every double, missing or unmeasurable dimension they find"
                - "Correct the three drawings and reissue them"
                - "Add the dimensioning rules and general tolerance note to the CAD manual"
            - name: Sheet metal and weldment modelling
              description: |-
                ## Purpose
                Flat patterns that come out the wrong size and weld symbols placed on the wrong side of the reference line both lead to scrapped fabrication. Learning sheet metal modelling with the bend allowance or K-factor your fabricator actually uses, and weldment drawings with correct weld symbols to ISO 2553 or AWS A2.4, closes the gap between your model and what comes off the brake press.

                ## Milestones
                1. Bend tables or K-factors obtained from your main fabricator for each material and thickness.
                2. Two sheet metal parts modelled and their flat patterns checked against a test bend.
                3. A weldment drawing produced with weld symbols, cut list and weld preparation details.
                4. The fabricator's feedback on the drawings recorded and applied.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two flat patterns that match test bends within the fabricator's tolerance and one weldment drawing accepted by the fabricator without queries."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your fabricator for their bend table or K-factor for each material"
                - "Load the bend table into the sheet metal settings"
                - "Model two practice parts and compare flat patterns with a test bend"
                - "Draw one weldment with symbols and send it to the fabricator for comment"
            - name: Piping isometrics and plant 3D modelling basics
              description: |-
                ## Purpose
                Process and mechanical engineers moving into plant design need to read and produce isometrics: line numbers, spec breaks, welds, supports, bills of material and continuation references. Learning to route pipe in a specification-driven plant design tool and to extract checked isometrics means your piping drawings carry the right materials to the fabrication shop.

                ## Milestones
                1. The piping class or specification for one project loaded and understood.
                2. Three lines routed from the P&ID, with valves, fittings and supports placed from the specification.
                3. Isometrics extracted with line number, bill of material, weld numbers and continuation sheets.
                4. The isometrics checked against the P&ID line list by a piping designer.

                ## Notes
                Always route from the latest issued P&ID and line list. An isometric that disagrees with the P&ID will be rejected at the HAZOP or the design review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three specification-driven lines routed and their isometrics checked against the P&ID line list by a piping designer with no material errors."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Open the project's piping specification and read one class end to end"
                - "Route a first line from the P&ID using the specification"
                - "Extract the isometric and check its bill of material against the specification"
                - "Ask a piping designer to check three isometrics against the line list"
            - name: Automating repetitive CAD tasks with scripts
              description: |-
                ## Purpose
                Renaming 200 title blocks, swapping a layer across a drawing set or generating twenty configurations by hand eats days and invites mistakes. Learning the scripting or macro tools in your package (AutoLISP, iLogic, VBA, Python or the vendor API) and automating one tedious task a month builds a toolbox that returns time on every project.

                ## Milestones
                1. The five most repetitive CAD tasks in the office listed with the hours they take.
                2. A first script written, tested on copies and documented.
                3. A shared folder of scripts with a one-line description and author for each.
                4. Hours saved on one project estimated and reported.

                ## Notes
                Always run a new script on a copy of the drawing set first. A batch script that goes wrong does so on every file at once.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least three documented, tested scripts in a shared folder, with hours saved estimated on one real project."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the five most repetitive CAD tasks and the hours each takes"
                - "Write and test a script for the simplest one on a copy of the files"
                - "Add one new tested script to the shared folder @recurring(monthly:26)"
                - "Estimate the hours saved on one project and share the figure"
            - name: Moving the office from 2D drafting to 3D modelling
              description: |-
                ## Purpose
                Offices that still draft every view in 2D spend hours keeping plans, elevations and sections consistent, and miss clashes a model would show at once. Moving to 3D works when it is phased: a pilot project, trained champions, templates and libraries rebuilt for the model, and a clear rule for which legacy work stays in 2D.

                ## Milestones
                1. A pilot project chosen and run in 3D with drawings extracted from the model.
                2. Pilot hours and error counts compared with a similar 2D project.
                3. Templates, libraries and standards rebuilt for model-based drawing.
                4. A roll-out plan with training dates and a rule for legacy 2D work.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One pilot project delivered from a 3D model, compared with a 2D benchmark, and a written roll-out plan approved by management."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Pick a small, low-risk project to run as the 3D pilot"
                - "Name two champions and book their training"
                - "Record hours and check comments on the pilot and a 2D comparison"
                - "Write the roll-out plan with the rule for legacy 2D work"
            - name: Product data management vault for CAD files
              description: |-
                ## Purpose
                Two designers saving over each other's assembly, or a fabricator building from a part file that was changed after release, are the usual signs that CAD files have outgrown a shared drive. A product data management vault with check-in and check-out, where-used queries and a release state stops overwrites and shows exactly which parts a change touches.

                ## Milestones
                1. The problems with the current shared drive listed with real examples and their cost.
                2. Two or three vault options compared on the team's own data.
                3. A vault configured with lifecycle states, permissions and a test project migrated.
                4. Users trained and the shared drive made read-only for migrated projects.

                ## Notes
                Start from the **Purchase decision** template. Agree with document control how the vault's release state links to the drawing register before configuring it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A vault chosen against recorded criteria, configured with lifecycle states, and one project migrated with users trained."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write down three recent overwrite or wrong-revision incidents and their cost"
                - "Shortlist two or three vault products and request trials"
                - "Migrate one test project and check where-used queries work"
                - "Train users and make the migrated shared folders read-only"
            - name: Legacy drawing set upgrade to the current standard
              description: |-
                ## Purpose
                Brownfield sites and long-running product lines live on drawings from four generations of CAD and some from the drawing board: wrong layers, exploded dimensions, scanned sheets and title blocks nobody recognises. Upgrading the drawings that are actually used, in priority order, to the current template and standard makes modifications quicker and safer than redrawing from scratch on every job.

                ## Milestones
                1. An inventory of legacy drawings with their format, condition and how often they are used.
                2. A priority list of the 20 percent of drawings used most.
                3. Those drawings converted or redrawn to the current template, layers and dimension styles.
                4. Scanned originals kept and linked to the new CAD files for traceability.

                ## Notes
                Start from the **Remediation plan** template. Do not upgrade a drawing to issued status unless its content has been verified against site or the part; a clean redraw of a wrong drawing gives false confidence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The most used 20 percent of legacy drawings converted to the current template and standard, with originals linked and content verification recorded."
                cadence: phased
                effort_hours_estimate: "100"
              tasks:
                - "Export a list of legacy drawings with their format and last-opened date"
                - "Rank the drawings by how often they are used on current work"
                - "Convert the first five to the current template and check them"
                - "Link each converted drawing to its scanned original"
            - name: Neutral file exchange rules with clients and vendors
              description: |-
                ## Purpose
                A vendor model that arrives as a broken mesh, or a client who cannot open your native files, costs days on every project. Agreeing what you send and accept (native, STEP, IGES, DXF, IFC, Parasolid), at what version and with what checks, and testing the round trip once, makes file exchange predictable.

                ## Milestones
                1. The formats each regular client and vendor sends and needs listed.
                2. Export and import settings saved for each neutral format.
                3. A round-trip test done for STEP and DXF with geometry and units checked.
                4. A one-page exchange rule added to the CAD manual and project CAD briefs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Saved export settings for each format in use and a recorded round-trip test for STEP and DXF, written into a one-page exchange rule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the file formats your regular clients and vendors use"
                - "Export one assembly to STEP and reimport it to check geometry"
                - "Save the export settings for each neutral format"
                - "Write the one-page exchange rule"
            - name: Checker comment Pareto to cut repeat errors
              description: |-
                ## Purpose
                If the same missing tolerance or wrong material callout appears on every third drawing, more checking will not fix it; a template, a library change or a short training session will. Sorting a quarter's checker comments by type and attacking the top three causes reduces comment counts and gets drawings out faster.

                ## Milestones
                1. Checker comments from at least one quarter categorised by type.
                2. A Pareto chart showing the top three categories.
                3. A root fix for each of the top three (template, library, checklist or training).
                4. Comment counts per drawing compared before and after the fixes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A Pareto of one quarter's checker comments, three root fixes in place, and a measured drop in comments per drawing the following quarter."
                cadence: cyclic
              tasks:
                - "Export or tally the last quarter's checker comments by category"
                - "Build the Pareto chart and pick the top three causes"
                - "Make one root fix for each top cause"
                - "Compare comments per drawing with the previous quarter @recurring(quarterly)"
            - name: Clash detection run before model review
              description: |-
                ## Purpose
                Pipe through a beam, a cable tray where the HVAC duct should go, a valve handwheel against a wall: clashes found in a model review meeting waste everyone's time, and clashes found on site cost real money. Running hard and clearance clash checks yourself on the federated model before the formal review, and clearing the obvious ones, makes the review about design questions rather than housekeeping.

                ## Milestones
                1. Clash rules set for hard clashes and clearance zones (access, maintenance, insulation).
                2. A clash run on the federated model with results grouped by discipline.
                3. False positives and self-clashes filtered out.
                4. Real clashes assigned to owners, with the remaining list sent to the review.

                ## Notes
                The model review itself, its comment log and its close-out belong to the design review process. This project is about getting the model clean before it gets there.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A grouped clash report with false positives removed and every real clash assigned an owner, sent before the model review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree clearance zones for access and insulation with the discipline leads"
                - "Federate the latest discipline models into one clash test file"
                - "Run the clash test and filter out false positives"
                - "Assign each real clash an owner and send the list ahead of the review"
            - name: Drawing production time benchmark
              description: |-
                ## Purpose
                Estimators and project managers guess drawing hours, and the guess is usually low for the first sheet and high for repeats. Recording actual hours per drawing type for a few months gives realistic norms for bids and schedules, and shows which steps (setting up views, annotation, checking) to speed up.

                ## Milestones
                1. Drawing types defined, such as part, assembly, general arrangement, isometric and detail sheet.
                2. Actual hours recorded per drawing for at least 30 sheets.
                3. Median hours and spread worked out for each type.
                4. Norms shared with estimators and the two slowest steps targeted for improvement.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median hours per drawing type from at least 30 sheets, shared with estimators, with two named speed-up actions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define five drawing types for timekeeping"
                - "Add a drawing type code to timesheet entries"
                - "Work out median hours per type after 30 sheets"
                - "Share the norms with the estimators"
            - name: Issue for construction drawing package
              description: |-
                ## Purpose
                The issue for construction set is what the contractor builds from and what your signature is on. Getting there means every drawing checked and approved, every hold cleared or clearly marked, references and revisions consistent across the set, and the package published in one coordinated release rather than sheet by sheet as each is finished.

                ## Milestones
                1. A list of every drawing in the package with its check and approval status.
                2. Every hold either cleared or clouded with a hold note on the sheet.
                3. Cross-references between sheets checked so every detail and section call-out lands on the right sheet.
                4. The full set published at one revision with signed approvals and handed to document control for transmittal.

                ## Notes
                Do not release a sheet for construction with an open hold that affects what will be built first. Ask the lead engineer to decide in writing if a partial issue is needed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The construction drawing set published at one revision on the target date, with signed approvals and every hold cleared or marked."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "List every drawing in the package with its current check status"
                - "Chase each open hold with its owner and agree a clear date"
                - "Check every section and detail call-out lands on the right sheet"
                - "Publish the full set at one revision and pass it to document control"
            - name: Issue for approval drawing set for the client
              description: |-
                ## Purpose
                The approval issue is where the client commits to the layout and the details, and comments returned late or answered loosely come back as variations later. Preparing a clean approval set with a covering list of questions, then logging and answering every client comment before the construction issue, protects both the design and the contract.

                ## Milestones
                1. An approval set checked internally and published at a single revision.
                2. A covering list of open questions and decisions needed from the client.
                3. Every client comment logged with a response and the action taken.
                4. Client approval or approval with comments recorded in writing for each drawing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every drawing in the approval set has a written client approval code and every client comment has a logged response."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Write the list of decisions the client must make on this issue"
                - "Publish the internally checked approval set at one revision"
                - "Log every client comment with a response and action"
                - "Record the client approval code against each drawing"
            - name: Manufacturing release of a part drawing pack
              description: |-
                ## Purpose
                Releasing parts to a machine shop or a fabricator means the drawing, the model, the material and the finish all have to agree, and the supplier must receive the right revision of each. A release pack with matching drawing and STEP model, a bill of materials and a release checklist cuts supplier queries and first-article rejections.

                ## Milestones
                1. Every part drawing and its model at the same revision, with the model exported to the agreed neutral format.
                2. A bill of materials matching the assembly drawing balloons and part numbers.
                3. Materials, finishes, heat treatment and inspection requirements stated on each drawing.
                4. The pack released and the first-article inspection result recorded against the drawings.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A released pack of drawings, models and bill of materials at matching revisions, with a first-article inspection recorded and no drawing errors found."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Compare each part drawing's revision with its model revision"
                - "Export STEP files for each part at the released revision"
                - "Check the bill of materials against the assembly balloons"
                - "Record the first-article inspection result against each drawing"
            - name: Native CAD model handover at project close
              description: |-
                ## Purpose
                Contracts increasingly ask for native models and drawings at handover, and an owner who receives files with broken references, unbound external links and missing fonts cannot maintain the plant from them. Preparing a clean handover (purged, references bound or packaged, fonts and libraries included, an index and a readme) meets the contract and saves the next engineer a month.

                ## Milestones
                1. The contract's CAD deliverable requirements listed: formats, versions, structure and naming.
                2. All final models purged, audited and saved in the required version.
                3. External references bound or packed with relative paths, with fonts, plot styles and libraries included.
                4. An index and readme supplied, and the package opened on a clean machine before sending.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A handover package matching every contract CAD requirement, opened successfully on a clean machine, with an index and readme."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Extract the CAD deliverable clauses from the contract"
                - "Purge, audit and save each final model in the required version"
                - "Package references, fonts and plot styles into the handover set"
                - "Open the package on a clean machine before sending it"
            - name: CAD professional certification exam
              description: |-
                ## Purpose
                Passing a vendor certification such as a certified professional exam for your main CAD package proves speed and accuracy to clients and employers, and preparing for it fills the gaps that daily work never touches. Booking a date, working through the published objectives and timing yourself on practice exams turns it from a vague intention into a dated result.

                ## Milestones
                1. The exam chosen and its current objectives, format and fees checked on the vendor's website.
                2. A study plan covering every objective, with weak areas marked.
                3. Two timed practice exams completed with scores recorded.
                4. The exam sat and the result recorded on your CV and competence record.

                ## Notes
                Exam formats and fees change. Check the vendor's website for the current version before booking and do not rely on old practice papers alone.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The certification exam sat by the target date, with two timed practice scores recorded beforehand and the result logged."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Check the current exam objectives and format on the vendor's website"
                - "Book an exam date about three months out"
                - "Sit a first timed practice exam and mark weak objectives"
                - "Record the exam result on your competence record"
            - name: First 90 days as a CAD designer in a new office
              description: |-
                ## Purpose
                Joining a new drawing office means learning its standards, templates, libraries, file structure and who checks what, and the fastest way to lose trust is to issue a sheet that ignores the house style. A 30, 60 and 90 day plan gets you productive on real drawings quickly while you learn the conventions properly.

                ## Milestones
                1. The CAD standards manual, templates and libraries read and a list of questions answered by the CAD lead.
                2. A first drawing produced and checked with no standards comments.
                3. Ownership of a drawing package on a live project by day 60.
                4. A 90-day review with your manager covering quality, speed and next skills.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 30/60/90 plan completed, with a first drawing passing check without standards comments and a recorded 90-day review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the CAD lead for the standards manual and template locations"
                - "Write questions on anything in the standards that differs from your last office"
                - "Produce a first drawing and ask for a full check"
                - "Book the 90-day review with your manager"
            - name: Graduate engineer producing their own drawings
              description: |-
                ## Purpose
                In smaller firms the graduate engineer does the calculation and the drawing, with no drafter in between, and the drawing is often where design mistakes first become visible. Learning to produce a clean, checked drawing of your own design (views, dimensions, notes, references to calculations) makes you more useful early and teaches you how others will read your work.

                ## Milestones
                1. The office template and standards used for one simple drawing of your own design.
                2. Each dimension and note traceable to your calculation or the design basis.
                3. The drawing checked by a senior and the comments understood, not just fixed.
                4. A second, more complex drawing completed with fewer comments than the first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two drawings of your own designs checked by a senior engineer, with fewer comments on the second than the first."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a simple item from your current calculation to draw"
                - "Mark each dimension with the calculation or design basis it comes from"
                - "Ask a senior engineer to check the drawing and explain each comment"
                - "Draw a second, more complex item and compare comment counts"
            - name: Freelance CAD drafting services set-up
              description: |-
                ## Purpose
                Engineers and designers who take freelance CAD work often discover too late that the client expects native files, unlimited revisions and ownership of their libraries. Setting out your scope, rates, revision allowance, file ownership, licences and backups before the first job turns side work into a business you can rely on.

                ## Milestones
                1. A standard scope letter covering deliverables, revision allowance, file formats and turnaround.
                2. Day or per-sheet rates set from your real drawing hours.
                3. Software licences confirmed as permitted for commercial work.
                4. A backup and confidentiality routine for client files in place.

                ## Notes
                Student and educational CAD licences usually prohibit commercial work. Check the licence terms before quoting your first job, and ask a lawyer to look at any clause on ownership of your own libraries.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A standard scope letter, a rate card, commercially licensed software and a client file backup routine in place before the first paid job."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read your CAD licence terms for commercial use"
                - "Draft a one-page scope letter with revision allowance and file formats"
                - "Set your rates from your recorded drawing hours"
                - "Review client file backups and licence renewal dates @recurring(monthly:28)"
            - name: Leading a small CAD team
              description: |-
                ## Purpose
                A lead designer with four or five drafters spends the week balancing deadlines, deciding who checks whose work and fielding requests from every engineer at once. A visible workload board, a checking rota and a short weekly priorities conversation keep the team busy on the right sheets and stop the checker becoming the bottleneck.

                ## Milestones
                1. A workload board showing every drawing in progress, its owner and its due date.
                2. A checking rota so nobody checks their own work and no checker is overloaded.
                3. A weekly priorities talk with the engineering leads.
                4. Overtime and missed issue dates tracked over a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A workload board kept current for a quarter, a checking rota in use, and missed issue dates recorded with causes."
                cadence: rolling
              tasks:
                - "Put every drawing in progress on a single workload board"
                - "Update the workload board with the engineering leads @recurring(weekly:mon)"
                - "Rebalance the checking rota across the team @recurring(monthly:15)"
                - "Record each missed issue date and its cause"
            - name: Working to a client's CAD standard
              description: |-
                ## Purpose
                Large owners and operators issue their own CAD manuals with title blocks, layer names, numbering and file delivery rules, and drawings that ignore them are returned unreviewed. Building a compliance matrix from the client's manual at the start of the job, and setting up templates to match, avoids rework at the first submission.

                ## Milestones
                1. The client's CAD manual read and every requirement listed in a compliance matrix.
                2. Conflicts with your own standard identified and resolved with the client in writing.
                3. Project templates, layers and title blocks configured to the client standard.
                4. A first sample drawing submitted to the client and accepted before full production.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A completed compliance matrix against the client's CAD manual and a sample drawing accepted by the client before full production starts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Request the client's current CAD manual and seed files"
                - "List every requirement in a compliance matrix"
                - "Set up project templates to the client's title block and layers"
                - "Submit one sample drawing for client acceptance"
            - name: Shop drawings for a fabricator or contractor
              description: |-
                ## Purpose
                Contractors and fabricators produce shop drawings that turn the designer's intent into piece marks, cut lengths, connection details and erection sequences, and each one goes through an approval cycle that can hold up fabrication for weeks. Producing shop drawings that answer the designer's likely questions, and tracking each through approval, keeps the shop working.

                ## Milestones
                1. The design drawings and specification reviewed and a list of queries raised before detailing.
                2. Shop drawings produced with piece marks, cut lists and connection details referenced to the design drawings.
                3. Each submission tracked through approval with the reviewer's code.
                4. Approved drawings released to the shop at the correct revision only.

                ## Notes
                Never release a shop drawing to fabrication before it has an approval code that allows it. A hold-up in approval is a schedule problem to raise, not a reason to fabricate at risk without written agreement.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every shop drawing in the package has a recorded approval code before release to the shop, with no fabrication from unapproved revisions."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the design drawings and raise queries before starting detailing"
                - "Set up piece mark and cut list conventions for the package"
                - "Track each shop drawing submission and its approval code"
                - "Release only approved revisions to the shop floor"
            - name: Tolerance stack-up analysis from the drawing
              description: |-
                ## Purpose
                Two parts that each pass inspection can still fail to assemble when their tolerances add up the wrong way. Working a one-dimensional stack-up from the drawings, worst case and statistical root sum square, shows whether the gap or interference is controlled, and which tolerance to tighten or relax to save cost.

                ## Milestones
                1. A critical assembly gap or fit identified with its functional requirement.
                2. The tolerance loop drawn through every contributing dimension.
                3. Worst case and root sum square results calculated and compared with the requirement.
                4. Drawing tolerances adjusted where the stack fails or is needlessly tight, and the analysis filed.

                ## Notes
                Root sum square assumes centred, independent, normally distributed dimensions. If your supplier's process is not capable or not centred, use worst case or ask for capability data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A filed stack-up for one critical fit with worst case and RSS results, and any resulting drawing tolerance changes issued."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose one assembly fit that has caused trouble or matters most"
                - "Draw the tolerance loop through every contributing dimension"
                - "Calculate worst case and root sum square results in a checked spreadsheet"
                - "Raise drawing changes for any tolerance that fails or is needlessly tight"
            - name: Model-based definition pilot with PMI
              description: |-
                ## Purpose
                Model-based definition puts dimensions, tolerances and notes directly on the 3D model as product manufacturing information, so suppliers and inspection machines read the model instead of a drawing. A pilot on a handful of parts, with one willing supplier, tests whether your tools, standards (such as ASME Y14.41 or ISO 16792) and supply chain are ready.

                ## Milestones
                1. Three or four parts chosen for the pilot and one supplier agreed to take part.
                2. PMI applied to the models to the chosen standard, with a lightweight viewer format agreed.
                3. Parts made and inspected from the model data alone.
                4. Supplier and inspection feedback recorded with a go or no-go decision on wider use.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three or more parts made and inspected from PMI models alone, with supplier feedback and a recorded decision on wider use."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your main machining supplier whether they can work from PMI models"
                - "Choose three or four simple parts for the pilot"
                - "Apply PMI to the models and export them in the agreed viewer format"
                - "Record the supplier's feedback and the go or no-go decision"
            - name: Point cloud modelling for brownfield modifications
              description: |-
                ## Purpose
                Existing plant rarely matches its drawings, and a tie-in modelled from 30-year-old as-builts can be hundreds of millimetres out. Commissioning a laser scan of the work area and modelling the critical existing steel, pipe and equipment from the point cloud gives tie-in points and clearances you can trust before fabrication.

                ## Milestones
                1. The scan area, accuracy and deliverable format agreed with the survey contractor.
                2. The registered point cloud loaded into the project coordinate system.
                3. Critical existing items modelled from the cloud, with tie-in points dimensioned.
                4. New design checked for clashes against the point cloud before issue.

                ## Notes
                Scanning on an operating site needs a permit to work and coordination with operations. Build that time into the survey request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A registered point cloud in project coordinates, critical existing items modelled, and a clash check of the new design against the cloud recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Mark the scan area and tie-in points on a plot plan"
                - "Write the scan request with accuracy, format and coordinate system"
                - "Load the registered point cloud and check it against known control points"
                - "Clash check the new design against the point cloud"
            - name: Federated model coordination to ISO 19650
              description: |-
                ## Purpose
                On building and infrastructure projects run under ISO 19650, each discipline's model must meet agreed information requirements, levels of information need and a common data environment workflow. Leading or taking part in model coordination means federating models on a fixed cycle, checking them against the BIM execution plan and resolving issues with their owners.

                ## Milestones
                1. The BIM execution plan's modelling, naming and level of information requirements summarised for your discipline.
                2. Models shared at the agreed status on the coordination cycle.
                3. Federated model checks run and issues raised with their owners in a shared issue tracker.
                4. Your discipline's models passing the information checks at each project stage.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Your discipline's models pass the BIM execution plan checks at each stage, with every coordination issue raised and closed in the shared tracker."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise the BIM execution plan requirements for your discipline on one page"
                - "Agree the coordination cycle dates with the information manager"
                - "Run the federated checks and raise issues in the shared tracker"
                - "Confirm your models pass the information checks at the stage gate"
            - name: Configurable product models with design tables
              description: |-
                ## Purpose
                Firms that sell the same product in dozens of sizes (tanks, skids, frames, enclosures) often redraw each variant, which is slow and error-prone. Building a configurable master model driven by a design table or rules, with drawings that update for each configuration, turns a two-day drawing job into an hour and keeps every variant consistent.

                ## Milestones
                1. The product family's variable parameters and rules written down with the engineer who owns the design.
                2. A master model driven by a design table or rules engine for those parameters.
                3. Drawings that update correctly for at least five configurations, each checked.
                4. A control rule for who may add configurations and how they are checked.

                ## Notes
                Keep the engineering rules (sizes allowed, limits from calculations) in one place the engineer signs off. A configurator that can generate an unsafe size is worse than redrawing by hand.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master model and drawing set that produce five checked configurations from a design table, with a signed list of allowed parameter ranges."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the variable parameters for one product family with the design engineer"
                - "Agree the allowed range for each parameter from the calculations"
                - "Build the master model driven by a design table"
                - "Check drawings for five configurations against hand-drawn originals"
---

# CAD Modelling and Drawings

CAD Modelling and Drawings is for engineers, designers and drafters who turn engineering decisions into models and sheets that a fabricator, a site team or a machinist can build from without phoning to ask what you meant. It starts with foundations (the drawing standard, title blocks, layers, units and origins, libraries), moves into the operating routines that keep a drawing office honest (checking, revisions, model health, redlines, backups), then the core skills from projection and dimensioning to GD&T, assemblies, sheet metal and piping isometrics, followed by improvements, dated issues and handovers, different working situations, and specialist work such as tolerance stack-ups, model-based definition and point cloud modelling.

The rhythm is weekly for model audits, redline clearing and checker comment logging, monthly for standards spot checks, revision block checks, reference paths and backup restore tests, quarterly for library reviews and software service packs, and yearly for standard editions and skills reassessment. The Purchase decision, Skills matrix, Operational checklist, Course, Remediation plan and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
