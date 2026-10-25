---
id: software-engineering.embedded-firmware-engineering
name: Embedded & Firmware Engineering
description: "A chosen microcontroller and pinned toolchain, a bench you can debug on, bring-up and release checklists, field failure triage, power and memory budgets, and over-the-air updates with secure boot and rollback."
category: business
version: 1.0.0
tags: [software-engineering, embedded-firmware-engineering, engineer, microcontrollers, rtos, firmware-updates, low-power, hardware-bring-up]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - risk-register
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Embedded & Firmware Engineering
          description: "Writing software for microcontrollers and devices, working within tight memory and power limits, hardware bring-up and safe over-the-air updates."
          projects:
            - name: Microcontroller selection for a new product
              description: |-
                ## Purpose
                Picking a part from the first evaluation board you happen to own is how teams end up rewriting drivers a year later when flash runs out or the part goes on allocation. Scoring three candidates against the product's real needs (peripherals, flash and RAM with headroom, sleep current, security features, toolchain support and supply) turns the choice into a record you can defend to hardware, purchasing and your future self.

                ## Milestones
                1. A requirements sheet listing every peripheral, interface, memory need with 50 percent headroom and the target sleep current.
                2. Three candidate parts scored against the sheet, including price at volume and current lead time from two distributors.
                3. A development kit for the leading candidate running a blink, a UART echo and one demanding peripheral.
                4. A written decision naming the part, the package, the second source if any and the reasons.

                ## Notes
                Start from the **Purchase decision** template. Check the part's longevity programme and the vendor's errata sheet before committing; a long errata list on a new part is a warning.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded part decision exists, backed by a scored comparison of three candidates and a working spike on the chosen part's development kit."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every peripheral and interface the product needs in its first two revisions"
                - "Score three candidate parts on memory, power, security and supply"
                - "Order the development kit for the leading candidate"
                - "Write the decision and the second-source plan in the repository docs"
            - name: Pinned toolchain and reproducible firmware build
              description: |-
                ## Purpose
                Firmware that builds on one laptop with whatever compiler was installed that month will produce a different binary on the next, and a different binary can mean a different bug. Pinning the cross-compiler version, the build system and every vendor package in the repository means any engineer or the CI server can rebuild a released image byte for byte.

                ## Milestones
                1. The exact cross-compiler, build tool and vendor SDK versions recorded in the repository.
                2. A container image or setup script that installs that toolchain on a clean machine.
                3. A release image rebuilt on a second machine with an identical checksum.
                4. Build warnings treated as errors, with the warning flags documented.

                ## Notes
                Vendor IDEs often hide the real compiler flags. Export them once into a plain build file so the IDE becomes optional rather than required.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clean machine can build a released firmware image from the repository with an identical checksum to the published one."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Record the compiler version and flags the current build actually uses"
                - "Write a container file or setup script that installs the pinned toolchain"
                - "Rebuild the last release on a second machine and compare checksums"
                - "Turn on warnings as errors and fix or document what breaks"
            - name: Debug probe and bench instrument set-up
              description: |-
                ## Purpose
                Printf debugging over a UART gets you surprisingly far, until the bug is a hard fault before the UART is initialised or a timing glitch between two chips. A proper bench (a debug probe that supports your part, a logic analyser, an oscilloscope and a current-limited bench supply) is what lets you see what the hardware is actually doing.

                ## Milestones
                1. A debug probe chosen that supports the target's debug interface, flash programming and live variable reads.
                2. Breakpoints, single stepping and register views working from your editor or debugger of choice.
                3. A logic analyser decoding the board's I2C, SPI and UART traffic.
                4. A bench supply with current limiting set for each board, and the limits labelled.

                ## Notes
                Start from the **Purchase decision** template. A cheap logic analyser with good decoding software beats an expensive one nobody can work, and a current-limited supply saves boards on first power-up.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bench can halt the target at a breakpoint, decode a bus capture and power a board with a set current limit, all shown working once."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check which debug probes your microcontroller's vendor and debugger support"
                - "Get a breakpoint and single step working on the development kit"
                - "Capture and decode one I2C or SPI transaction with the logic analyser"
                - "Label each board's safe current limit on the bench supply"
            - name: Memory map and linker script walkthrough
              description: |-
                ## Purpose
                Most firmware engineers inherit a linker script and never open it, then lose a day when a buffer lands in memory the DMA cannot reach or the stack quietly grows into the heap. Reading the map file and the linker script line by line once shows where code, constants, initialised data, the heap and the stack really sit.

                ## Milestones
                1. A diagram of flash and RAM regions with the start address and size of each section.
                2. The startup code traced from the reset vector to main, including how data is copied and bss is zeroed.
                3. Stack and heap sizes stated explicitly in the linker script with a comment explaining each.
                4. Any special regions (no-init RAM, DMA-capable RAM, tightly coupled memory) named and used deliberately.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A memory map diagram and an annotated linker script are committed, and the stack and heap sizes are explicit values with comments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open the map file from the last build and list the five largest symbols"
                - "Trace the startup code from the reset vector to main"
                - "Draw the flash and RAM layout with section addresses"
                - "Add comments to the linker script explaining each region"
            - name: Board bring-up checklist for new prototypes
              description: |-
                ## Purpose
                When a fresh batch of prototype boards arrives, the temptation is to flash the full application and see what happens, which turns one shorted rail or wrong crystal into a week of confusion. A written bring-up sequence (rails and current first, then clocks, debug access, each peripheral in isolation) finds board faults in hours and tells hardware exactly what is wrong.

                ## Milestones
                1. A checklist covering visual inspection, rail voltages, idle current, clock output and debug connection, in order.
                2. A minimal test image per peripheral that exercises one interface and reports pass or fail.
                3. A bring-up log template recording the board serial, revision, readings and any rework.
                4. The checklist run on at least one board of the current revision with results shared with hardware.

                ## Notes
                Start from the **Operational checklist** template. Power the first board through a current-limited supply and measure idle current before attaching the debugger.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bring-up checklist and per-peripheral test images exist, and one board of the current revision has a completed bring-up log."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the power, clock and debug steps of the bring-up checklist"
                - "Build a minimal test image for each peripheral on the board"
                - "Create a bring-up log sheet with serial number and revision fields"
                - "Run the checklist on one board and send the log to the hardware engineer"
            - name: Bare metal or RTOS decision
              description: |-
                ## Purpose
                Superloops with interrupts are simpler to reason about and fit in a few kilobytes, while an RTOS gives you tasks, timing and a networking stack at the cost of memory and a new class of bugs. Deciding on purpose, from the product's real concurrency (radio stack, sensors, user interface, logging), avoids bolting an RTOS on halfway through or fighting one you never needed.

                ## Milestones
                1. The product's concurrent activities listed with their timing deadlines and how they interact.
                2. Two or three options compared, such as a superloop, an event-driven framework and one or two RTOS candidates.
                3. Flash and RAM cost of each option measured on the target, not taken from marketing pages.
                4. A written decision including licence terms, certification options and who maintains the choice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded scheduling decision exists with measured memory costs for each option and the product's timing deadlines listed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List each concurrent activity and its worst acceptable latency"
                - "Build a minimal image of each option and record its flash and RAM use"
                - "Check the licence and long-term support of each RTOS candidate"
                - "Write up the decision and the conditions for revisiting it"
            - name: Hardware abstraction layer and driver boundaries
              description: |-
                ## Purpose
                Application code that writes peripheral registers directly cannot be unit tested on a laptop and has to be rewritten when the part changes. Drawing a clear line between board support, drivers and application logic, with small interfaces in between, makes the next port a matter of weeks instead of months.

                ## Milestones
                1. A layer diagram showing board support, vendor HAL, your drivers and application modules.
                2. Each driver exposing a small interface that hides registers and vendor types.
                3. Application modules compiling on the host with fake drivers.
                4. A rule in the contributing guide on which layers may include which headers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The application layer builds on the host against fake drivers, and a written include rule says which layer may depend on which."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Draw the current layers and mark where application code touches registers"
                - "Define the interface for the most used driver and move register access behind it"
                - "Compile one application module on the host with a fake driver"
                - "Add the layer and include rule to the contributing guide"
            - name: Firmware version and build identity in every image
              description: |-
                ## Purpose
                Support asks which firmware a returned unit was running and nobody can tell, because the version string was typed by hand and two builds share it. Stamping every image with a semantic version, the commit hash, a dirty flag and the build date, readable over the debug port and the device's normal interface, ends that argument.

                ## Milestones
                1. A version scheme written down, including how release candidates and development builds are marked.
                2. Version, commit hash and dirty flag injected at build time, not edited by hand.
                3. A fixed-location image header that the bootloader and tools can read.
                4. The running version reported over the serial console and the product's normal interface.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any unit can report its firmware version and commit hash, and two different builds can never carry the same identity."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the version scheme for releases, candidates and development builds"
                - "Generate the version and commit hash from the build script"
                - "Place an image header with the version at a fixed flash offset"
                - "Add a console command that prints the running version and hash"
            - name: Hard fault handler and crash capture
              description: |-
                ## Purpose
                Without a fault handler, a crashed device just resets and the evidence is gone, so field bugs become guesswork. Capturing the fault registers, the program counter, the link register and a slice of the stack into memory that survives reset, then reporting it on the next boot, turns most crashes into a line number.

                ## Milestones
                1. A fault handler that saves the core fault registers and stacked registers to no-init RAM.
                2. Reset reason read and recorded on every boot, distinguishing watchdog, brown-out, fault and power-on.
                3. The saved crash record printed or transmitted on the next boot, then cleared.
                4. A deliberate null pointer write and divide by zero used to prove the capture works.

                ## Notes
                Keep the handler tiny and free of dynamic memory. Use the map file and the saved program counter to find the line with addr2line or your debugger.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberately triggered fault produces a crash record on the next boot that resolves to the correct source line."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the reset reason register at boot and log it"
                - "Write a fault handler that saves registers to a no-init RAM section"
                - "Report and clear the saved record on the next boot"
                - "Trigger a deliberate fault and resolve the saved address to a source line"
            - name: Bootloader and flash partition layout
              description: |-
                ## Purpose
                The flash layout is the one decision you cannot change with a firmware update once units ship, so a layout with no room for a second image or a recovery mode locks you out of safe updates forever. Choosing the bootloader and partitions before the first production run keeps every later option open.

                ## Milestones
                1. A partition table naming bootloader, application slots, configuration storage and any recovery image, with sizes.
                2. A bootloader chosen or written that validates the image before jumping to it.
                3. Room reserved for the application to grow by at least 30 percent.
                4. The layout documented and frozen before the first production build.

                ## Notes
                Two application slots with a swap or a copy step is the usual default. Leave the bootloader as small and as rarely changed as you can; updating it in the field is the riskiest thing you will ever do.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A frozen partition table and a bootloader that refuses invalid images are in the repository before the first production build."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Sketch the partition table with sizes for each region"
                - "Compare an open source bootloader with writing a minimal one"
                - "Make the bootloader check the image header and checksum before jumping"
                - "Document the frozen layout and the reasons for each size"
            - name: Flash and RAM budget per build
              description: |-
                ## Purpose
                Memory creeps up a few hundred bytes per feature until one day the image does not fit and someone strips logging the night before a release. Printing a size report on every build and tracking it against a budget for each region shows the trend months before the wall.

                ## Milestones
                1. A size report generated on every CI build, broken down by flash, RAM and each named region.
                2. A budget per region agreed, with a warning threshold and a hard failure threshold.
                3. The largest symbols and modules listed in each report so growth has an owner.
                4. A monthly trend recorded so a slow climb is visible before it becomes a problem.

                ## Notes
                Start from the **Metrics log** template. Count the stack and heap reservations as used RAM, not free.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every CI build reports flash and RAM use against budget, and a build that exceeds the hard threshold fails."
                cadence: rolling
              tasks:
                - "Add a size report step to the CI build"
                - "Agree warning and failure thresholds for flash and RAM"
                - "Fail the build when the hard threshold is crossed"
                - "Record flash and RAM use and the biggest growth in the log @recurring(monthly:9)"
            - name: Hardware-in-the-loop test rig
              description: |-
                ## Purpose
                Unit tests on a laptop cannot catch a peripheral driver that only fails on the real chip, and manual bench testing before each release gets skipped under deadline. A rig with real boards attached to a CI runner, able to flash, power cycle and talk to each one, runs the same smoke tests on every merge.

                ## Milestones
                1. Two or more target boards connected to a dedicated runner with a debug probe and a controllable power switch each.
                2. CI flashing a fresh build, power cycling the board and reading the boot banner automatically.
                3. A smoke suite covering boot, each external interface and the update path.
                4. Rig failures separated from firmware failures in the results so flaky hardware does not hide real bugs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every merge to the main branch is flashed onto real boards and passes an automated smoke suite before it can be released."
                cadence: rolling
              tasks:
                - "Connect one board, a probe and a switchable power supply to a spare machine"
                - "Script flashing, power cycling and reading the boot banner"
                - "Add the rig job to CI for merges to the main branch"
                - "Check rig health, cables and reference boards before the week starts @recurring(weekly:mon)"
            - name: Field failure and returned unit triage
              description: |-
                ## Purpose
                Returned units are the most honest bug reports a firmware team will ever get, yet they often sit in a box until someone has a free afternoon. A weekly pass that reads each unit's version, reset reason and crash record, then sorts it into hardware, firmware or user cause, finds patterns while the affected batch is still small.

                ## Milestones
                1. An intake log recording serial number, firmware version, symptom and where the unit came from.
                2. A standard procedure for reading the crash record and logs from a returned unit without wiping them.
                3. Each unit sorted as hardware, firmware, user handling or no fault found.
                4. A monthly summary of the top causes shared with hardware, support and product.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every returned unit is logged and classified within two weeks of arrival, and a monthly summary of causes is published."
                cadence: rolling
              tasks:
                - "Set up an intake log with serial, version and symptom columns"
                - "Write the procedure for dumping logs from a unit before any reflash"
                - "Triage the returned units that arrived this week @recurring(weekly:tue)"
                - "Send the monthly cause summary to hardware and support @recurring(monthly:20)"
            - name: Silicon errata and datasheet revision watch
              description: |-
                ## Purpose
                Vendors publish errata for silicon bugs (a timer that misses an edge, a flash controller that needs a delay) and quietly update reference manuals, and the workaround is usually a few lines of code if you know about it. Checking for new revisions each month and mapping each erratum to your code avoids rediscovering it in the field.

                ## Milestones
                1. The current errata sheet and reference manual revision for every programmable part recorded.
                2. Each erratum marked as affecting you, not affecting you or unknown, with the reason.
                3. Workarounds in the code tagged with the erratum number in a comment.
                4. The silicon revision of production parts checked against the errata coverage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every erratum for the parts in production has a recorded status, and each applied workaround in the code names its erratum number."
                cadence: rolling
              tasks:
                - "Download the current errata sheet for each programmable part on the board"
                - "Mark every erratum as affecting you, not affecting you or unknown"
                - "Search the code for existing workarounds and tag them with the erratum number"
                - "Check vendor pages for new errata or manual revisions @recurring(monthly:4)"
            - name: Vendor SDK and HAL update cycle
              description: |-
                ## Purpose
                Vendor SDKs, HAL packages and radio stacks ship fixes for real bugs and security issues, but they also rename functions and change defaults. Taking updates on a quarterly rhythm, on a branch, with the hardware rig and a power measurement as the gate, keeps you close to current without breaking a release.

                ## Milestones
                1. Every vendor package listed with the version in use and the latest available.
                2. A branch per update with the vendor release notes summarised in the merge description.
                3. The hardware rig, size report and a sleep current measurement passed before merge.
                4. Local patches to vendor code kept as separate, documented changes so they survive the next update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each vendor package is no more than two releases behind, and every update was merged only after passing the rig, size and power checks."
                cadence: cyclic
              tasks:
                - "List each vendor package with its current and latest version"
                - "Move any local patches to vendor code into separate documented changes"
                - "Take the quarter's vendor updates on a branch and run the rig and power checks @recurring(quarterly)"
                - "Summarise behaviour changes from the release notes in the merge description"
            - name: Sleep current and power regression checks
              description: |-
                ## Purpose
                Battery life on a sleeping device is decided by the microamps it draws while asleep, and one peripheral left clocked or one pin left floating can halve it without any test failing. Measuring sleep and active current on a fixed board each month, and after any change to power handling, catches the regression before customers do.

                ## Milestones
                1. A reference board and measurement set-up (a current profiler or a shunt and scope) that gives repeatable numbers.
                2. Baseline figures for deep sleep, idle, radio transmit and a typical duty cycle.
                3. A battery life estimate calculated from the duty cycle and published with its assumptions.
                4. Each month's figures logged, with any change over 10 percent investigated.

                ## Notes
                Start from the **Metrics log** template. Disconnect the debug probe before measuring sleep current; an attached probe often keeps the debug domain powered and spoils the reading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sleep and active current are measured monthly on a reference board, and any change over 10 percent from baseline has a recorded explanation."
                cadence: rolling
              tasks:
                - "Choose a reference board and set up a repeatable current measurement"
                - "Record baseline deep sleep, idle and transmit current"
                - "Calculate the battery life estimate and write down its assumptions"
                - "Measure sleep and active current on the latest build and log it @recurring(monthly:14)"
            - name: Firmware release checklist and signed images
              description: |-
                ## Purpose
                Releasing firmware is harder to take back than a web deploy: once images are on devices or programmed at the factory, a mistake costs truck rolls or returns. A fixed checklist (clean tagged build, rig pass, power check, signed image, archived artefacts and release notes) makes every release the same careful release.

                ## Milestones
                1. A release checklist covering tagging, clean build, rig results, size and power checks, signing and archiving.
                2. Release images signed with the production key on a controlled machine, never a laptop.
                3. Each release archived with the image, the map file, the debug symbols and the exact toolchain version.
                4. Release notes written for support and manufacturing as well as engineers.

                ## Notes
                Start from the **Operational checklist** template. Keep the debug symbols for every shipped image; without them the crash records from the field are just numbers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shipped image was produced through the checklist, is signed with the production key and has its symbols and map file archived."
                cadence: cyclic
              tasks:
                - "Write the release checklist from tag to archived artefacts"
                - "Set up the controlled machine or service that holds the signing key"
                - "Archive the image, map file and symbols for the last release"
                - "Hold a release readiness review against the checklist @recurring(monthly:26)"
            - name: Fleet telemetry and crash dump review
              description: |-
                ## Purpose
                Connected devices can report their reset reasons, crash records, battery level and update status, but only if someone looks. A weekly review of the fleet's crash dumps and a monthly look at the trends shows which firmware version is causing watchdog resets long before a support spike.

                ## Milestones
                1. Devices reporting firmware version, reset reason and crash record on boot, within a small agreed payload.
                2. Crash records grouped by program counter and version so one bug shows up as one line.
                3. A weekly review with each new crash group assigned an owner or marked as known.
                4. A monthly chart of resets per thousand device days by firmware version.

                ## Notes
                Keep the telemetry payload small and documented, and check it against the product's privacy policy before shipping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new crash group from the fleet is reviewed within a week, and resets per thousand device days are tracked by firmware version each month."
                cadence: rolling
              tasks:
                - "Define the boot report payload with version, reset reason and crash record"
                - "Group incoming crash records by program counter and firmware version"
                - "Review new crash groups and assign owners @recurring(weekly:thu)"
                - "Chart resets per thousand device days by version @recurring(monthly:17)"
            - name: Lab bench and spare board inventory
              description: |-
                ## Purpose
                Half a day disappears when the only working board of the old revision turns out to have been reworked for a different test, or the last debug cable is in someone's bag. Keeping a simple inventory of boards by revision and state, probes, cables and fixtures means the right hardware is on the bench when a field bug needs reproducing.

                ## Milestones
                1. Every board labelled with revision, serial and any rework, and listed in one place.
                2. At least two known-good boards of every revision still in the field kept aside for reproduction.
                3. Probes, cables, adapters and fixtures counted, with a short reorder list.
                4. A monthly tidy where borrowed boards are returned and dead ones are marked.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An up-to-date inventory lists every board by revision and state, with two known-good boards set aside for each field revision."
                cadence: rolling
              tasks:
                - "Label each board with its revision, serial and rework notes"
                - "Set aside two known-good boards for each revision in the field"
                - "Write a reorder list for probes, cables and adapters"
                - "Tidy the bench and update the board inventory @recurring(monthly:28)"
            - name: Component lifecycle and obsolescence watch
              description: |-
                ## Purpose
                Microcontrollers, radios and sensors get end-of-life notices, allocation and price jumps, and each one can force a firmware port at short notice. Watching the lifecycle status of every programmable part each quarter, and noting what a port would cost, turns a crisis into a plan.

                ## Milestones
                1. A list of every programmable or firmware-dependent part with its lifecycle status and lead time.
                2. Each part rated for supply risk and for the firmware effort a replacement would need.
                3. Pin-compatible or close alternatives named for the highest-risk parts.
                4. The list reviewed with hardware and purchasing every quarter.

                ## Notes
                Start from the **Risk register** template. The firmware cost of a replacement is often the hidden part of the decision; give purchasing a number in engineer weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every firmware-dependent part has a lifecycle status, a supply risk rating and a firmware port estimate, reviewed each quarter."
                cadence: cyclic
              tasks:
                - "List each programmable part with its manufacturer lifecycle status"
                - "Estimate the firmware effort to replace each high-risk part"
                - "Name an alternative for the two highest-risk parts"
                - "Review lifecycle notices and lead times with hardware and purchasing @recurring(quarterly)"
            - name: Reading datasheets and reference manuals
              description: |-
                ## Purpose
                Reference manuals can run to two thousand pages, and newcomers either read none of it and copy example code or try to read all of it and stall. Learning how these documents are organised (clock tree, register descriptions, electrical characteristics, timing diagrams, errata) lets you find the one paragraph that explains your bug in minutes.

                ## Milestones
                1. The clock tree of your part drawn from the manual, with the frequency of each bus you use.
                2. One peripheral configured purely from its register descriptions, without vendor examples.
                3. A timing diagram for an external chip read and checked against a logic analyser capture.
                4. A personal index of the manual sections you return to most.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One peripheral works from code written only from its register descriptions, and a hand-drawn clock tree matches the measured bus frequencies."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the clock tree of your microcontroller from the reference manual"
                - "Configure a timer from register descriptions alone"
                - "Compare a sensor's timing diagram with a logic analyser capture"
                - "Keep a short index of the manual sections you use most"
            - name: Interrupts, priorities and shared data
              description: |-
                ## Purpose
                Most intermittent firmware bugs come from an interrupt touching data the main loop was halfway through reading, or a high-priority handler that runs too long. Working through priorities, nesting, critical sections and lock-free buffers on a real board makes these bugs recognisable instead of mysterious.

                ## Milestones
                1. The interrupt priority scheme for the product written down, with the reason for each level.
                2. A deliberately broken shared counter shown to corrupt under load, then fixed with a critical section.
                3. A single-producer single-consumer ring buffer used between an interrupt and the main loop.
                4. Every handler's worst-case run time measured with a toggled pin and a scope.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written priority scheme exists, and every interrupt handler in the product has a measured worst-case run time."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List every interrupt in the product with its priority and purpose"
                - "Reproduce a torn read on a shared variable, then fix it"
                - "Replace one shared flag with a ring buffer between handler and main loop"
                - "Toggle a pin in each handler and measure its run time on the scope"
            - name: DMA for peripherals without CPU load
              description: |-
                ## Purpose
                Moving ADC samples, UART bytes or display pixels one interrupt at a time burns CPU and power and drops data at high rates. Learning to set up DMA transfers, circular buffers and the cache coherence rules on parts that have a cache frees the core to sleep or do real work.

                ## Milestones
                1. One peripheral moved from interrupt-per-byte to DMA, with CPU load measured before and after.
                2. A circular DMA buffer with half and full transfer handling working on a continuous stream.
                3. Cache cleaning and invalidation rules applied correctly where the part has a data cache.
                4. Buffer alignment and memory region requirements for DMA written in the driver notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one peripheral runs on DMA with measured CPU load lower than the interrupt version and no dropped data at full rate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure CPU load of the current interrupt-driven UART or ADC path"
                - "Set up a circular DMA transfer for the same peripheral"
                - "Handle half and full transfer events without losing samples"
                - "Write the alignment and memory region rules into the driver notes"
            - name: Low-power modes and wake sources
              description: |-
                ## Purpose
                Datasheet sleep currents assume every pin, clock and peripheral is set exactly right, and real boards rarely get there on the first try. Working through each sleep mode, its wake sources, its retention rules and the board's leakage paths is how a device goes from weeks of battery life to years.

                ## Milestones
                1. Each sleep mode of the part listed with its current, wake time, retained memory and wake sources.
                2. Every pin's state in sleep chosen deliberately to avoid floating inputs and leakage.
                3. A measured sleep current within an agreed margin of the datasheet figure plus board leakage.
                4. The wake path timed from event to useful work.

                ## Notes
                Measure, change one thing, measure again. Floating inputs, pull resistors fighting external parts and peripherals left clocked are the usual culprits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The board's measured deep sleep current is within an agreed margin of the datasheet figure, with every pin's sleep state documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Tabulate each sleep mode's current, wake time and retained memory"
                - "Set every pin to a deliberate state before entering sleep"
                - "Measure sleep current and compare it with the datasheet figure"
                - "Time the wake path from interrupt to first useful instruction"
            - name: RTOS tasks, queues and priority inversion
              description: |-
                ## Purpose
                An RTOS makes concurrency easier to write and harder to debug: a task starved by a busy neighbour, a mutex held across a blocking call or a stack sized by guesswork. Practising the core patterns on the board, and using the RTOS's own trace and stack tools, gives you a design you can explain on a whiteboard.

                ## Milestones
                1. A task diagram for the product showing each task, its priority, its stack size and the queues between them.
                2. A priority inversion reproduced on purpose and fixed with priority inheritance or a redesign.
                3. Stack high water marks read for every task and sizes adjusted with a margin.
                4. A trace capture used once to explain a real scheduling delay.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A task diagram with measured stack high water marks exists, and one real scheduling delay has been explained from a trace capture."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draw each task with its priority, stack size and queues"
                - "Reproduce a priority inversion on the development kit"
                - "Read stack high water marks for every task and resize with margin"
                - "Capture a scheduler trace during a slow operation and explain the delay"
            - name: Bench debugging with a logic analyser and scope
              description: |-
                ## Purpose
                The bugs that cost the most time sit between chips: a missing acknowledge on a bus, a chip select released one clock early, a supply that sags when the radio transmits. Building the habit of capturing the signal before changing code, and knowing which instrument answers which question, cuts those hunts from days to hours.

                ## Milestones
                1. A bus fault diagnosed from a logic analyser capture rather than from code changes.
                2. Supply rail droop captured on the scope during a high-current event such as radio transmit.
                3. Debug pins toggled from firmware to line up software events with electrical signals.
                4. A short guide for the team on which instrument to reach for first, with example captures.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team guide with three example captures exists, and at least one real bug has been diagnosed from a capture before any code changed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Reserve two spare pins as debug outputs in the board support code"
                - "Capture a full bus transaction and check each acknowledge"
                - "Trigger the scope on radio transmit and measure rail droop"
                - "Write the team guide with your three best captures"
            - name: Unit testing firmware on the host
              description: |-
                ## Purpose
                Flashing a board to test a parser or a state machine is slow, so logic that could be tested in milliseconds goes untested. Running pure logic modules on the host with a lightweight C test framework and fakes for the hardware gives fast feedback on the parts most likely to hide bugs.

                ## Milestones
                1. A host test build that compiles chosen modules with the native compiler and a small test framework.
                2. Fakes for the drivers those modules call, with recorded calls that tests can check.
                3. Tests covering the protocol parser and the main state machine, including malformed input.
                4. Host tests running on every CI build in under a minute.

                ## Notes
                Build the host tests with the sanitisers turned on. They catch buffer overruns and undefined behaviour that the target would hide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The protocol parser and main state machine have host tests that run in CI in under a minute with sanitisers enabled."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick a C unit test framework that builds on both host and target"
                - "Compile the protocol parser on the host with a fake driver"
                - "Write tests for malformed and truncated messages"
                - "Run the host tests with sanitisers in every CI build"
            - name: Embedded C pitfalls, volatile and undefined behaviour
              description: |-
                ## Purpose
                Code that works at the debug optimisation level and breaks at release level is almost always relying on undefined behaviour or a missing volatile. Studying the specific traps (volatile on hardware registers, integer promotion, unaligned access, strict aliasing, signed overflow) and checking your own code for them removes a whole class of release-only bugs.

                ## Milestones
                1. A short list of the C traps that apply to your compiler and architecture, with an example of each.
                2. The code base searched for each trap and findings fixed or justified.
                3. Release builds tested on the rig at the same optimisation level that ships.
                4. Compiler warnings for the relevant traps enabled in the build.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written trap list exists, the code has been reviewed against it, and the shipped optimisation level is the one tested on the rig."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page list of C traps relevant to your architecture"
                - "Search the drivers for register access without volatile"
                - "Enable compiler warnings for alignment, conversion and aliasing issues"
                - "Confirm the rig tests the same optimisation level that ships"
            - name: Over-the-air update with rollback
              description: |-
                ## Purpose
                An update path that works on the bench but has never lost power halfway, received a corrupt image or booted a version that crashes on start will eventually brick units in the field. Designing for those failures from the start (verified download, atomic switch, boot confirmation and automatic rollback) is what makes updating thousands of devices a routine event.

                ## Milestones
                1. An update design covering download, verification, slot switch, first boot confirmation and rollback.
                2. Power cut tested at every stage of the update on the bench, with the device recovering each time.
                3. A version that crashes on boot shown to roll back automatically to the previous image.
                4. Anti-rollback rules decided so a signed but vulnerable older image cannot be reinstalled.
                5. A rollback drill repeated on a bench unit every quarter.

                ## Notes
                The new image should confirm itself only after it has reached a known good state, such as connecting to the server. Confirming too early defeats rollback.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bench tests show recovery from a power cut at every update stage and automatic rollback from a crashing image, recorded in a test report."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the update state machine from download to confirmation"
                - "Script power cuts at each update stage on a bench unit"
                - "Build a deliberately crashing image and confirm automatic rollback"
                - "Run a rollback drill on a bench unit with the current release @recurring(quarterly)"
            - name: Secure boot and image signing chain
              description: |-
                ## Purpose
                If any image can run on your device, anyone with a USB cable or a compromised update server can make it do anything. A signing chain rooted in the part's secure boot or an immutable bootloader, with keys held off developer laptops, means only images your release process signed will ever boot.

                ## Milestones
                1. A threat model naming who might load hostile firmware and how (debug port, update server, physical access).
                2. A root of trust chosen, either the part's hardware secure boot or an immutable signed bootloader.
                3. Production signing keys generated and held in a hardware security module or a controlled signing service.
                4. Unsigned and wrongly signed images shown to be rejected on a production-configured board.
                5. A key compromise and rotation procedure written down.

                ## Notes
                Burning secure boot fuses is usually irreversible. Rehearse the whole flow on spare boards and keep development keys clearly separate from production keys.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A production-configured board rejects unsigned and wrongly signed images, and production keys live only in a controlled signing system."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write a one-page threat model for loading hostile firmware"
                - "Choose the root of trust and document what is burned into fuses"
                - "Rehearse fuse programming and signing on three spare boards"
                - "Review who can reach the production signing key @recurring(yearly)"
            - name: Watchdog strategy that catches real hangs
              description: |-
                ## Purpose
                Kicked from a timer interrupt, a watchdog will happily keep a device alive while every task is deadlocked. Kicking only when each important task has checked in, and recording why the watchdog fired, turns it from a false comfort into a real recovery mechanism.

                ## Milestones
                1. Every critical task or loop required to check in before the watchdog is refreshed.
                2. The watchdog timeout chosen from measured worst-case loop times with a margin.
                3. Watchdog resets recorded with the task that failed to check in.
                4. A deliberate hang in each critical task shown to trigger a reset.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberate hang in any critical task causes a watchdog reset that records which task failed to check in."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find where the watchdog is refreshed today and what could keep it alive while hung"
                - "Add check-ins from each critical task before the refresh"
                - "Save the missing task's identity before the reset"
                - "Hang each critical task on purpose and confirm the reset and record"
            - name: Stack usage analysis and overflow detection
              description: |-
                ## Purpose
                Stack overflows on small parts rarely crash cleanly: they overwrite a global, and the symptom appears somewhere else entirely. Combining the compiler's static stack usage output with painted stacks measured on the device, and a guard region that faults on overflow, gives each stack a size based on evidence.

                ## Milestones
                1. Static stack usage reports generated for every function and the deepest call chains listed.
                2. Stacks painted with a pattern at boot and high water marks read after a long soak test.
                3. A guard region or memory protection unit set to fault on overflow.
                4. Each stack sized to the measured maximum plus an agreed margin, with the numbers recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stack has a recorded measured maximum and margin, and an overflow triggers a fault instead of silent corruption."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Turn on the compiler's per-function stack usage output"
                - "Paint each stack at boot and read high water marks after a soak test"
                - "Configure a guard region that faults on overflow"
                - "Record each stack's measured maximum and chosen size"
            - name: MISRA C subset and static analysis for firmware
              description: |-
                ## Purpose
                Full MISRA compliance is a large commitment, but a chosen subset of its rules plus a static analyser catches the casts, unchecked returns and implicit conversions that cause firmware bugs. Agreeing the subset, recording deviations properly and running the analyser in CI gives you most of the benefit without paralysing the team.

                ## Milestones
                1. A rule subset chosen and written down, with the reason each excluded rule was left out.
                2. A static analyser running on every merge with results on the changed files.
                3. A deviation format agreed so every suppression carries a reason and a reviewer.
                4. Existing findings sorted into fix now, fix when touched and justified.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rule subset and deviation process exist, and the analyser runs on every merge with new findings blocking it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the rule subset and note why each excluded rule was left out"
                - "Run a static analyser on the whole code base and export the findings"
                - "Agree the deviation comment format with the team"
                - "Block merges that add new findings in changed files"
            - name: Power-loss-safe storage with wear levelling
              description: |-
                ## Purpose
                Settings and logs written straight to flash will eventually wear out a sector or be half written when the battery is pulled, and a corrupt configuration can stop a device booting. Choosing a storage layer with wear levelling and atomic updates, then testing it with real power cuts, protects the data the product depends on.

                ## Milestones
                1. Write frequency and size estimated for each kind of stored data over the product's life.
                2. A storage approach chosen, such as a log-structured key value store or a fail-safe file system.
                3. Expected flash wear over the product's life calculated against the part's endurance rating.
                4. Thousands of power cuts during writes on a bench unit with no corrupt or lost committed data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bench test of at least one thousand power cuts during writes shows no corrupted committed data, and a lifetime wear estimate is recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Estimate how often each kind of data is written over the product's life"
                - "Compare two storage libraries on wear levelling and atomic updates"
                - "Calculate lifetime flash wear against the endurance rating"
                - "Script a power cut test that interrupts writes overnight"
            - name: Device protocol framing and versioning
              description: |-
                ## Purpose
                Links between the microcontroller and a host, a phone app or a second chip usually start as a few ad hoc bytes and become impossible to change once units ship. A defined frame format with length, type, checksum and a protocol version lets old devices and new apps keep talking for years.

                ## Milestones
                1. A protocol document defining framing, message types, checksums, error replies and the version field.
                2. A version negotiation or capability exchange at connection start.
                3. A fuzz or malformed input test showing the parser never crashes or overruns.
                4. A compatibility rule written for adding fields and message types without breaking old peers.

                ## Notes
                A compact schema-based encoding can save a lot of hand-written parsing; whatever you choose, test the parser with garbage input.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A protocol document with a version field and compatibility rule exists, and the parser survives a malformed input test without faults."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Document the current byte format exactly as it works today"
                - "Add a frame header with length, type, version and checksum"
                - "Fuzz the parser with random and truncated frames on the host"
                - "Write the rule for adding fields without breaking old peers"
            - name: Manufacturing test firmware and production programming
              description: |-
                ## Purpose
                On the production line, every board has to be programmed, tested and given its identity in under a minute, by an operator who is not an engineer. Building a separate test image, a fixture procedure and a programming script that records each unit's serial and results is what makes the line run and gives you traceability when a batch goes wrong.

                ## Milestones
                1. A manufacturing test image that checks each peripheral and reports a clear pass or fail code.
                2. A programming script that flashes the bootloader and application, writes serial and calibration data and locks the part.
                3. Each unit's serial, firmware versions and test results logged to a file or database.
                4. The full cycle timed on a fixture and within the line's target time.
                5. Operator instructions written and tested with someone outside the firmware team.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The line can program, test and log a unit within the target cycle time, and every unit's serial and results are recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the target cycle time and pass or fail codes with manufacturing"
                - "Build the manufacturing test image for each peripheral"
                - "Write the programming script that sets serial, calibration and protection"
                - "Review production yield and failure codes from the line @recurring(monthly:11)"
            - name: Debug port lockdown and readout protection
              description: |-
                ## Purpose
                Shipping units with an open debug port lets anyone read your firmware and keys with a cheap probe in a few minutes. Deciding which protection level each product stage uses, how authorised engineers can still recover a returned unit, and testing the lock on real hardware closes the most common hole in embedded products.

                ## Milestones
                1. The part's readout protection levels and their reversibility documented.
                2. A protection level chosen for development, pilot and production units.
                3. An authorised debug or recovery path for returned units, if the part supports one.
                4. A locked production board shown to refuse a debug probe connection and flash readout.

                ## Notes
                Some protection levels are permanent and also block your own failure analysis. Settle the returned-unit procedure before choosing the strictest level.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded protection level per product stage exists, and a locked production board refuses flash readout through the debug port."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the part's readout protection levels and note which are permanent"
                - "Choose the level for development, pilot and production units"
                - "Agree how returned units will be analysed after locking"
                - "Try to read flash from a locked board with a debug probe"
            - name: EMC pre-compliance test session
              description: |-
                ## Purpose
                Firmware decides much of a product's electromagnetic behaviour: clock frequencies, edge rates, radio duty cycles and whether the device survives an electrostatic discharge without locking up. Preparing test modes and recovery behaviour before a pre-compliance session at a lab means the expensive hours are spent measuring, not reflashing.

                ## Milestones
                1. Test firmware modes ready for continuous transmit, maximum activity and idle, selectable without a debugger.
                2. Clock and edge settings that affect emissions documented, with alternatives ready to try.
                3. Recovery after an electrostatic discharge or burst tested on the bench, including watchdog behaviour.
                4. A session log recording each test, firmware build and result.

                ## Notes
                Bring several builds with different clock and spread spectrum settings to the lab so you can try changes on the spot.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pre-compliance session ran with selectable test modes, and a log records each test, the firmware build used and its result."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the hardware lead which test modes the lab session needs"
                - "Add test modes selectable by button or serial command"
                - "Prepare builds with alternative clock and spread spectrum settings"
                - "Log each test, build and result during the session"
            - name: Radio certification test firmware
              description: |-
                ## Purpose
                Radio certification labs need the device to transmit continuously on a chosen channel and power, receive on command and hold settings across a reboot, and each day of lab time is expensive. Delivering a tested certification image and a short operating guide ahead of the booking avoids rescheduling over a missing command.

                ## Milestones
                1. The lab's required test modes and controls confirmed in writing before any code is written.
                2. A certification image that sets channel, power, modulation and continuous modes from simple commands.
                3. The image verified on the bench with a spectrum analyser or the radio vendor's tools.
                4. An operating guide for lab staff with every command and the expected behaviour.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The lab receives a verified certification image and operating guide before the booked session, and testing completes without a firmware rebuild."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Get the lab's list of required test modes in writing"
                - "Build the certification image with channel, power and continuous mode commands"
                - "Verify each mode on the bench with the radio vendor's tools"
                - "Write the lab operating guide and send it before the booking"
            - name: Production line launch for a new device
              description: |-
                ## Purpose
                First production runs are where firmware meets operators, fixtures, a factory network and a contract manufacturer's own processes, all at once. Being on site or on call with a frozen release, a spare fixture and a clear escalation plan for the first runs stops small problems from stalling the line for days.

                ## Milestones
                1. The production firmware release frozen, signed and handed to the manufacturer with checksums.
                2. A pilot run of a small batch completed, with yield and failure codes reviewed.
                3. Escalation contacts and response times agreed with the contract manufacturer.
                4. The first full run's yield, rework and traceability records reviewed within a week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pilot and first full production runs completed with yield and failure codes reviewed, using a frozen and checksummed firmware release."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Freeze and sign the production release and send checksums to the manufacturer"
                - "Agree escalation contacts for the first runs"
                - "Review pilot run yield and the top failure codes"
                - "Check traceability records from the first full run"
            - name: Staged rollout of a major firmware release
              description: |-
                ## Purpose
                Sending a major release to the whole fleet at once means a bug reaches every unit before the first crash report arrives. Rolling out to internal units, then a few percent, then the rest, with stop conditions agreed in advance, limits the damage any surprise can do.

                ## Milestones
                1. Rollout stages defined, from internal units to a small percentage to the full fleet.
                2. Stop conditions written down, such as reset rate or update failure rate above a threshold.
                3. Update success, rollback and crash rates watched at each stage before widening.
                4. A short report after full rollout comparing the release with the previous one.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The release reached the full fleet through at least three stages, with stop conditions written in advance and a closing report."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Define the rollout stages and their device counts"
                - "Write the stop conditions before the first stage starts"
                - "Check update success and reset rates before each widening"
                - "Ask the agent to draft the closing rollout report from the stage numbers"
            - name: Recovering units bricked by a failed update
              description: |-
                ## Purpose
                Sooner or later some units will stop responding after an update, and the first hours decide whether it stays a small batch or becomes a recall. Stopping the rollout, working out what the affected units have in common and finding a recovery path that does not need a site visit is the work to have rehearsed in outline.

                ## Milestones
                1. The rollout paused and the affected units' serials, versions and hardware revisions listed.
                2. The common factor found, such as a hardware revision, a storage state or an interrupted download.
                3. A recovery path proven on a bench unit, whether remote, by a user action or by return.
                4. A remediation record with the cause, fix and the change that prevents a repeat.

                ## Notes
                Start from the **Remediation plan** template. Keep a few affected units untouched for analysis before trying recovery on all of them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A remediation record names the cause, the recovery path proven on a bench unit and the preventive change merged."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the first-hour steps for pausing a rollout"
                - "List the fields needed to compare affected units"
                - "Prove one recovery path on a bench unit in the same state"
                - "Record the cause and the preventive change in the remediation plan"
            - name: Web or app developer moving into embedded
              description: |-
                ## Purpose
                Developers coming from web or mobile work bring good habits (version control, tests, review) but meet a world without an operating system, a heap you should avoid and bugs that are electrical. A twelve-week plan on a cheap development kit, working up from a blinking LED to a sensor driver with interrupts and sleep, builds the instincts that reading alone does not.

                ## Milestones
                1. A development kit, debug probe and toolchain working with a blinking LED built from the command line.
                2. GPIO, timers, UART, I2C and SPI each used from register-level code at least once.
                3. A sensor driver with an interrupt, a ring buffer and sleep between readings.
                4. One small project finished end to end and its code reviewed by an experienced firmware engineer.

                ## Notes
                Resist starting with a framework that hides everything. Write one peripheral from registers first, then use the HAL knowing what it does.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A finished sensor project using interrupts and sleep exists in a repository and has been reviewed by an experienced firmware engineer."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Buy a popular development kit with an on-board debug probe"
                - "Build and flash a blinking LED from the command line"
                - "Complete one small peripheral exercise on the kit @recurring(weekly:sat)"
                - "Ask an experienced firmware engineer to review the finished project"
            - name: Inheriting a firmware codebase with no original author
              description: |-
                ## Purpose
                Taking over firmware whose author has left often means a vendor IDE project, no build notes, unknown compiler settings and boards in the field you cannot easily update. The first weeks should go on making it buildable, reproducible and understood before any feature is touched.

                ## Milestones
                1. The shipped binary reproduced from source, or the differences explained.
                2. A map of modules, interrupts, tasks and external chips drawn from the code and schematics.
                3. Field versions and hardware revisions in use listed, with which source each came from.
                4. A list of the riskiest areas and the first three changes, agreed with your manager or the product owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The shipped binary is reproducible from source or its differences are documented, and a module map and risk list are committed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect the source, the vendor project files and the last shipped binary"
                - "Rebuild the binary and compare it with the shipped one"
                - "Ask the agent to summarise each module from the source into a module map draft"
                - "List the riskiest areas and agree the first three changes"
            - name: Porting firmware to a replacement microcontroller
              description: |-
                ## Purpose
                An allocation, an end-of-life notice or a cost target can force a move to a different part with weeks of warning. A port that goes through the abstraction layer, keeps the application unchanged and is proven on the hardware rig against the old part's behaviour avoids shipping new bugs along with new silicon.

                ## Milestones
                1. Differences between old and new part listed: peripherals, clocks, memory, errata, pin mapping and toolchain.
                2. Board support and drivers ported behind the existing interfaces, with the application unchanged.
                3. The full rig suite and power checks passing on the new part.
                4. Field compatibility confirmed: same protocol, same storage format and an update path between them if needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The unchanged application passes the full rig suite and power checks on the new part, with storage and protocol compatibility confirmed."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Compare the two parts' peripherals, memory and errata in one table"
                - "Port the clock set-up and board support first"
                - "Move each driver to the new part behind its existing interface"
                - "Run the rig suite and power checks on the new part"
            - name: Solo firmware engineer at a hardware startup
              description: |-
                ## Purpose
                As the only firmware person, you are also the build engineer, the release manager, the bench technician and the one who explains to the founders why the board revision slipped. A lightweight routine (one source of truth for the build, a written release checklist, a weekly status and a list of what only you know) keeps the company from depending on your memory.

                ## Milestones
                1. The build, flashing and release steps documented well enough for a contractor to follow.
                2. A short list of decisions only you know about (keys, fuses, partition layout) written down and stored safely.
                3. A weekly status that tells non-firmware colleagues what is blocked and what you need.
                4. Work split into what must ship for the next hardware milestone and what can wait.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contractor could build, flash and release from the written docs, and a weekly firmware status has gone out for at least a month."
                cadence: rolling
              tasks:
                - "Write the build, flash and release steps for someone new"
                - "List the decisions and secrets only you know and store them safely"
                - "Send a short firmware status to the founders @recurring(weekly:fri)"
                - "Sort the backlog into this hardware milestone and later"
            - name: Firmware review of the schematic before layout
              description: |-
                ## Purpose
                Many board revisions are spun because of a firmware need nobody mentioned: a debug header left off, a boot pin with no pull resistor, a peripheral on a pin that cannot use DMA. Reviewing each schematic from the firmware side before layout, with a standard list, saves a revision and weeks of bodge wires.

                ## Milestones
                1. A firmware schematic checklist covering debug access, boot pins, clocks, pin multiplexing, test points and spare pins.
                2. Pin assignments checked against the part's alternate function table and DMA mapping.
                3. Review comments returned to the electrical engineer in writing before layout starts.
                4. The pin map in the board support code generated or checked from the final schematic.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each new schematic gets a written firmware review against the checklist before layout, and the pin map in code matches the final schematic."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the firmware schematic checklist from your last two board revisions"
                - "Check every assigned pin against the alternate function and DMA tables"
                - "Send written review comments to the electrical engineer"
                - "Compare the pin map in code with the final schematic"
            - name: Functional safety process for safety-related firmware
              description: |-
                ## Purpose
                Firmware that can hurt someone if it misbehaves (a motor controller, a medical pump, a vehicle function) falls under functional safety standards such as the IEC 61508 family, ISO 26262 or IEC 62304 for medical software. Understanding what the relevant standard asks of the software process, before the design is set, avoids rework that can cost more than the product.

                ## Milestones
                1. The applicable standard and integrity level identified with the product's safety lead or an assessor.
                2. A gap list comparing your current process with the standard's requirements for requirements, design, coding, testing and tools.
                3. Safety requirements traced to code and tests for at least one safety function.
                4. A plan agreed with the safety lead for closing the gaps and for any tool qualification.

                ## Notes
                The integrity level and the safety case are decisions for a qualified safety engineer or assessor. This project prepares the firmware side; it does not replace them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A gap list against the applicable standard exists, and one safety function is traced from requirement to code to test."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the applicable standard and integrity level with the safety lead"
                - "List the standard's software process requirements against what you do today"
                - "Trace one safety function from requirement to code and test"
                - "Agree the gap closure plan and tool qualification needs"
            - name: Worst-case execution time and timing analysis
              description: |-
                ## Purpose
                Control loops, audio paths and motor drivers fail when one rare path through the code takes longer than the deadline, and average timing hides it. Measuring execution time under worst-case conditions with cycle counters and trace, and checking it against each deadline, gives you a timing budget you can trust.

                ## Milestones
                1. Every hard deadline in the product listed with its period and allowed latency.
                2. Execution times measured with the cycle counter or trace under worst-case inputs, cache states and interrupt load.
                3. A timing budget table showing each deadline, the measured worst case and the margin.
                4. A regression check that flags timing growth on the hardware rig.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timing budget table shows a measured worst case and margin for every hard deadline, and the rig flags timing regressions."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each hard deadline with its period and allowed latency"
                - "Instrument the control loop with the cycle counter"
                - "Measure under maximum interrupt load and worst-case input"
                - "Add a timing regression check to the rig suite"
            - name: Embedded Rust evaluation on a spare board
              description: |-
                ## Purpose
                Rust's ownership model removes many of the memory bugs that dominate C firmware crash reports, and its embedded ecosystem now covers many popular parts. Porting one self-contained driver or module to Rust on a spare board, and measuring size, build time and team effort, gives a fact-based answer to whether it belongs in your next product.

                ## Milestones
                1. The ecosystem support for your part checked: peripheral access crate, HAL, debugger and RTOS or async framework.
                2. One self-contained module rewritten in Rust and running on a spare board.
                3. Flash, RAM, build time and debugging experience compared with the C version.
                4. A written recommendation covering interoperation with existing C, hiring and certification needs.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation exists, backed by one module running in Rust on real hardware and a measured comparison with the C version."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check the Rust peripheral access and HAL support for your part"
                - "Pick one self-contained module to rewrite"
                - "Run the Rust version on a spare board and measure size and timing"
                - "Write the recommendation with the C interop and hiring trade-offs"
---

# Embedded & Firmware Engineering

This area is for engineers who write the software that runs on microcontrollers and small devices, where a kilobyte of RAM matters, a battery has to last a year and a bad update can brick a unit in someone's wall. It starts with the foundations (choosing the part, pinning the toolchain, setting up the bench, the memory map, bring-up, the bootloader and fault capture), moves through the routines that keep firmware healthy in the field, the skills behind datasheets, interrupts, low power, RTOS work and bench debugging, the decisions about updates, secure boot, storage and production programming, the dated events such as an EMC session or a production launch, the situations of a newcomer, an inheritor or a lone firmware engineer, and finally specialist work on functional safety, timing analysis and embedded Rust.

What repeats is a Monday check on the hardware test rig, a Tuesday pass over returned units, a Thursday look at fleet crash dumps, monthly reviews of memory size, power draw, silicon errata, production yield and the bench, a monthly release readiness review, and quarterly vendor SDK updates, component lifecycle checks and rollback drills. The Purchase decision, Operational checklist, Metrics log, Risk register and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
