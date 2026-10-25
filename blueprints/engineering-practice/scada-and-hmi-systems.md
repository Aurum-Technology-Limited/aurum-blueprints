---
id: engineering-practice.scada-and-hmi-systems
name: SCADA and HMI Systems
description: "The working kit of a SCADA and HMI engineer: an architecture and tag database you trust, screens operators can read at a glance, healthy telemetry links, a clean historian and a control network that is locked down."
category: business
version: 1.0.0
tags: [engineering-practice, scada-and-hmi-systems, engineer, hmi-design, historian, telemetry, ot-security, isa-101]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - compliance-control
    - onboarding-30-60-90
    - training-program
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: SCADA and HMI Systems
          description: "Designing and maintaining SCADA and HMI systems: screens and alarms, historians, communications with field devices, user access and security for control networks."
          projects:
            - name: SCADA system architecture and asset inventory
              description: |-
                ## Purpose
                Most SCADA systems grew one site and one server at a time, and few engineers inherit a drawing that shows every server, client, RTU, PLC, switch and radio as it really is. Walking the system and writing it down gives you the map every later change, patch and security decision depends on, and it usually turns up at least one forgotten machine still talking to the control network.

                ## Milestones
                1. An inventory listing every SCADA server, workstation, RTU, PLC, gateway, switch and radio with make, model, firmware and location.
                2. An architecture drawing showing primary and standby servers, clients, historians and the links to field sites.
                3. Every device on the drawing confirmed physically or by its network address, with unknowns flagged.
                4. The inventory and drawing given document numbers and stored in the engineering document system.

                ## Notes
                Collect firmware versions now, while you are touching every device. They are the first thing the security and patch projects will ask for.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered architecture drawing and asset inventory cover every SCADA device with model, firmware and location, each confirmed in the field or on the network."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the device list from the SCADA configuration and network switches"
                - "Walk the server room and control room recording every device and label"
                - "Draw the architecture from primary server to the furthest field site"
                - "Flag every device you cannot match to a drawing or an owner"
            - name: Tag database export and naming convention
              description: |-
                ## Purpose
                Tag databases of twenty thousand points nearly always mixes three naming styles, orphaned tags with no field device and duplicates that disagree. Exporting it to a spreadsheet and writing down the naming convention you will hold from now on makes every screen build, historian query and alarm change faster and less error prone.

                ## Milestones
                1. A full tag export with address, data type, scaling, engineering units and historian flag for every point.
                2. Orphaned, duplicate and unscaled tags listed with a proposed action for each.
                3. A written tag naming convention agreed with operations and the instrument team.
                4. A quarterly comparison routine in place that catches tags added outside the convention.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tag export, an orphan and duplicate list with actions, and a signed off naming convention are filed, with the quarterly comparison scheduled."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the complete tag database to a spreadsheet"
                - "Filter for tags with no field address, no units or no scaling"
                - "Draft the naming convention and review it with the operations lead"
                - "Compare a fresh tag export against the last one for unexplained changes @recurring(quarterly)"
            - name: Field communications and protocol map
              description: |-
                ## Purpose
                When a remote site goes grey on the overview, the first question is how its data travels, and the answer is often a chain of serial Modbus, a licensed radio, a cellular router and a protocol gateway that nobody has drawn. A communications map that names every link, protocol, polling rate and failover path turns a two-hour outage hunt into a ten-minute check.

                ## Milestones
                1. Every field site listed with its protocol (for example Modbus RTU, Modbus TCP, DNP3, IEC 60870-5-104 or OPC UA) and transport (fibre, radio, cellular, leased line).
                2. Polling rates, timeouts and retry settings recorded for each channel.
                3. Gateways and protocol converters shown with their configuration file locations.
                4. Single points of failure in the communications chain marked and listed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A communications map covers every field site with protocol, transport, polling settings and failover path, and lists each single point of failure."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every communications channel configured in the SCADA server"
                - "Record protocol, transport, polling rate and timeout for each channel"
                - "Find and back up the configuration of every protocol gateway"
                - "Mark each link with no alternative path on the map"
            - name: Control network zones and conduits drawing
              description: |-
                ## Purpose
                Security work on a control system starts with knowing which devices can talk to which, and a flat network where an office laptop can reach a PLC is still common. Drawing the network as zones and conduits, in the style of the IEC 62443 series and the Purdue levels, shows where the firewalls are, where they should be and which rules are wider than they need to be.

                ## Milestones
                1. The control network drawn as zones (field, control, supervisory, demilitarised zone, business) with every conduit between them.
                2. Every firewall and router between zones listed with its rule set exported.
                3. Rules allowing any address, any port or direct business to control traffic flagged.
                4. The drawing reviewed with the IT network team and dated as the current baseline.

                ## Notes
                Start from the **Risk register** template to record each flagged rule with an owner and a target date.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated zones and conduits drawing exists with every inter-zone firewall rule exported and each over-broad rule entered in a risk register with an owner."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Export the rule sets from every firewall between the business and control networks"
                - "Sketch the zones and the conduits that join them"
                - "List every rule that permits any source, destination or port"
                - "Review the zones drawing against the current network each year @recurring(yearly)"
            - name: SCADA user accounts and roles audit
              description: |-
                ## Purpose
                Shared operator logins, engineering accounts left open for a contractor who left two years ago and a default vendor password on the historian are among the most common findings in any control system audit. Listing every account across the SCADA, historian, operating system and network devices, with who owns it and what it can do, is a quick win that closes real holes.

                ## Milestones
                1. Every account on SCADA servers, clients, historians and network devices listed with owner and role.
                2. Shared, generic, default and dormant accounts identified.
                3. A role model written (for example operator, supervisor, engineer, administrator, read only) with the rights each holds.
                4. Leavers' and contractors' accounts disabled with the date recorded.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An account list covers every SCADA, historian and network device login with owner and role, and every dormant or leaver account is disabled with a date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export user lists from the SCADA, historian and server operating systems"
                - "Match each account to a named person or a documented service"
                - "Disable accounts belonging to leavers and finished contractors"
                - "Write the role model and the rights each role should hold"
            - name: HMI screen audit against ISA-101
              description: |-
                ## Purpose
                Screens built over twenty years by different integrators tend to use bright colours for normal states, 3D pipes, inconsistent navigation and numbers with no context. Scoring a sample of your existing displays against ANSI/ISA-101 and the high-performance HMI principles gives a fair picture of where operators are being let down, and a ranked list of screens to fix first.

                ## Milestones
                1. Twenty representative screens scored against a short checklist drawn from ISA-101 (colour use, alarm colour reserved, navigation, trends, data density).
                2. Operators interviewed about the screens they distrust or avoid.
                3. A ranked list of screens to rework, worst and most used first.
                4. The audit findings shared with operations and engineering leads.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty screens are scored against an ISA-101 checklist, operator views are recorded and a ranked rework list has been shared with operations."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a ten-point checklist from the ISA-101 principles you will score against"
                - "Screenshot and score twenty screens across all process areas"
                - "Ask three operators on different shifts which screens they work around"
                - "Rank the screens for rework by score and frequency of use"
            - name: Historian coverage and data quality baseline
              description: |-
                ## Purpose
                Historians are only as good as what they store: tags missing from collection, compression set so tightly that a trip disappears, or a stale value that flatlines for a month all undermine every investigation that relies on it. A baseline of which tags are historised, at what settings and with what gaps tells you whether your plant record can be trusted.

                ## Milestones
                1. Every tag in the SCADA database compared against the historian collection list.
                2. Compression and exception deadbands recorded for each class of tag.
                3. Tags with gaps, flatlines or bad quality over the last ninety days listed.
                4. Missing critical tags (trips, alarms, key flows) added to collection.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline report shows historian coverage, compression settings and ninety-day data gaps, and every critical trip and alarm tag is being collected."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the historian tag list and compare it with the SCADA tag database"
                - "Run a ninety-day gap and flatline query across all historised tags"
                - "Record compression settings for analogue, digital and alarm tags"
                - "Add any missing trip and alarm tags to historian collection"
            - name: SCADA licences, versions and support register
              description: |-
                ## Purpose
                Running out of client licences during an emergency, or finding the SCADA version went out of vendor support last year, are avoidable surprises. A register of every licence, software version, support contract and end-of-support date across the SCADA, historian, operating systems and database lets you budget for upgrades instead of reacting to them.

                ## Milestones
                1. Every SCADA, historian, database and operating system product listed with version and licence count.
                2. Support contracts recorded with contract number, renewal date and what they cover.
                3. Vendor end-of-support dates found and noted for each product.
                4. Products within two years of end of support flagged for the upgrade plan.

                ## Notes
                Keep licence keys and dongle serial numbers in the register, but store activation files in a controlled location rather than in the document itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every product with version, licence count, support contract and end-of-support date, with near-end products flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect licence certificates and dongle details from the server room"
                - "Look up each product's end-of-support date on the vendor's lifecycle page"
                - "Record support contract numbers, renewal dates and coverage"
                - "Review the register before the budget round each year @recurring(yearly)"
            - name: SCADA functional design specification
              description: |-
                ## Purpose
                Without a functional design specification, every integrator who touches the system makes up their own rules for screens, alarms, communications and redundancy. Writing or refreshing the FDS so it describes how the system is meant to behave gives contractors a standard to build to and gives you something to test against at acceptance.

                ## Milestones
                1. An FDS covering architecture, redundancy, communications, screen standards, alarm presentation, historian and security.
                2. Each section checked against how the live system actually behaves.
                3. Differences between the FDS and reality listed as either a fix or a document update.
                4. The FDS issued under document control and referenced in future contracts.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An FDS covering seven named sections is issued under document control, with a list of every gap between the document and the live system."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find the most recent FDS or integrator design document for the system"
                - "Draft the section headings and assign each a reviewer"
                - "Check redundancy and failover behaviour described against the live system"
                - "Issue the FDS through document control with a revision number"
            - name: Weekly telemetry and communications health review
              description: |-
                ## Purpose
                Radio links fade, cellular routers drop and serial ports lock up, and a remote site that reports bad quality every night for a month is often only noticed when it fails during a storm. A short Monday look at communications statistics catches the slow decline before operators lose sight of a site.

                ## Milestones
                1. A standing report or screen showing poll success rate and failed polls per channel for the last week.
                2. A threshold set for when a channel needs investigation (for example below 98 percent success).
                3. Every channel below threshold logged with a cause and an action.
                4. A month-on-month view of the worst channels kept for budget and maintenance planning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every Monday the poll success rate for each channel is checked and every channel below the agreed threshold has a logged cause and action."
                cadence: rolling
              tasks:
                - "Build a communications statistics view showing poll success per channel"
                - "Agree the success rate below which a channel is investigated"
                - "Check poll success and failed polls for every channel @recurring(weekly:mon)"
                - "Summarise the five worst channels for the maintenance meeting @recurring(monthly:3)"
            - name: Monthly SCADA user access review
              description: |-
                ## Purpose
                People move shifts, leave and change roles, and access that was right in January is wrong by June. A monthly check of accounts against the staff list and the role model keeps access tight and gives you evidence for any audit or insurer questionnaire.

                ## Milestones
                1. A monthly comparison of SCADA, historian and server accounts against the current staff and contractor list.
                2. Leavers removed within the month they leave.
                3. Every elevated account (engineer, administrator) re-confirmed by its owner's manager.
                4. Each review signed and filed with the date and changes made.

                ## Notes
                Start from the **Compliance control** template so each review leaves the same evidence behind.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve signed monthly access reviews a year are filed, each showing leavers removed and elevated accounts re-confirmed."
                cadence: rolling
              tasks:
                - "Ask HR or the shift supervisor for a monthly list of leavers and movers"
                - "Compare SCADA and historian accounts against the staff list @recurring(monthly:12)"
                - "Send the elevated account list to managers for confirmation"
                - "File the signed review with the changes made"
            - name: SCADA patch and antivirus update routine
              description: |-
                ## Purpose
                Operating system patches and antivirus signatures on SCADA servers cannot simply follow the office schedule, because an untested patch can stop a driver or break redundancy. A monthly routine that waits for vendor approval, tests on a standby or test machine first and records what was applied keeps the system protected without risking the control room.

                ## Milestones
                1. A list of patches and signature versions approved by the SCADA vendor each month.
                2. Patches applied first to a test or standby server and checked for 24 hours.
                3. Production servers patched in a planned window with operations agreement.
                4. A patch record showing what was applied, where and when, plus any patch deferred and why.

                ## Notes
                Some legacy machines cannot be patched at all. Record them in the risk register with the compensating controls around them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month a patch record shows vendor-approved updates applied to test then production servers, with every deferral explained."
                cadence: rolling
              tasks:
                - "Subscribe to the SCADA vendor's patch compatibility bulletin"
                - "Check the vendor's approved patch list and plan the month's updates @recurring(monthly:19)"
                - "Apply the approved patches to the standby server and watch it for a day"
                - "Record applied and deferred patches in the patch log"
            - name: Historian data integrity checks
              description: |-
                ## Purpose
                Historian problems are silent: a collector service stops, a buffer fills and a week of data quietly vanishes until someone needs it for an incident report. A short weekly check on collector status, buffer levels and a handful of sentinel tags means gaps are found in days rather than months.

                ## Milestones
                1. Ten sentinel tags chosen that should always be changing, across every collector.
                2. A weekly check of collector status, buffer usage and sentinel tag values in place.
                3. Every gap found logged with cause, duration and whether data was backfilled.
                4. A quarterly summary of historian availability shared with operations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly historian check is logged each week, and every data gap has a recorded cause, duration and backfill outcome."
                cadence: rolling
              tasks:
                - "Pick ten sentinel tags spread across every historian collector"
                - "Check collector status, buffers and sentinel tags for gaps @recurring(weekly:wed)"
                - "Backfill any gap from the collector buffer where it is still held"
                - "Log each gap with its cause and duration"
            - name: HMI screen change control and revision log
              description: |-
                ## Purpose
                Screens are often edited live by whoever has the engineering password, so nobody can say what changed before an operator misread a value. A simple change request, a revision number on every display and a monthly look at what was changed and why keeps screens trustworthy and gives operators a way to ask for fixes.

                ## Milestones
                1. A screen change request form that captures who asked, why, the screens affected and who tested it.
                2. A revision number and date shown on every display, or held in the project file.
                3. An operator feedback channel feeding requests into the same log.
                4. A monthly review of changes made, pending requests and any change made outside the process.

                ## Notes
                Changes that alter what an operator does, such as moving a trip reset or a setpoint entry, may need to go through the site's management of change process as well.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every screen change in the last month appears in the revision log with requester, reason and tester, and the monthly review is filed."
                cadence: rolling
              tasks:
                - "Create the screen change request form and revision log"
                - "Put a feedback box or channel for operators in the control room"
                - "Review screen changes made and requests waiting @recurring(monthly:22)"
                - "Compare the project file date stamps against the log for unrecorded edits"
            - name: Remote access session log review
              description: |-
                ## Purpose
                Vendor and engineer remote access is the route attackers most often use into control systems, and it is also how a well-meaning support engineer changes a setting at 2 a.m. without telling anyone. Reviewing every remote session each month against approved requests shows whether remote access is working as intended.

                ## Milestones
                1. Every remote access route into the control network listed (jump host, vendor portal, VPN, cellular router).
                2. Each session in the month matched to an approved request or work order.
                3. Unmatched sessions followed up with the account owner.
                4. Unused remote access routes closed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month every remote session is matched to an approved request, unmatched sessions are followed up and the review is filed."
                cadence: rolling
              tasks:
                - "List every remote access route into the control network"
                - "Export the session logs from the jump host and VPN"
                - "Match each remote session to an approved request @recurring(monthly:5)"
                - "Close any remote access route not used in the last six months"
            - name: SCADA server redundancy failover test
              description: |-
                ## Purpose
                Redundant server pairs are installed so the control room keeps its view when one server fails, but configuration drift means many standby servers would not take over cleanly on the day. A planned quarterly failover, done with operations watching, proves the standby works and finds the tags, drivers or alarm states that do not survive the switch.

                ## Milestones
                1. A failover test procedure covering servers, historians and communications front ends.
                2. A quarterly test window agreed with operations, avoiding critical operations.
                3. Each test recording switchover time, lost data and any screens or alarms that misbehaved.
                4. Every fault found during a test fixed before the next one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four failover tests a year are recorded with switchover time and faults found, and every fault from the last test is closed."
                cadence: cyclic
              tasks:
                - "Write the failover procedure with an operator checklist for each step"
                - "Agree the test window with the control room supervisor"
                - "Run the planned failover and record switchover time and faults @recurring(quarterly)"
                - "Raise a work order for every fault the test exposed"
            - name: Time synchronisation and sequence of events check
              description: |-
                ## Purpose
                If servers, RTUs and protection relays disagree on the time by even a few seconds, the sequence of events after a trip reads in the wrong order and the investigation goes the wrong way. A monthly check that every device is locked to the site time source keeps alarm and event logs fit for incident work.

                ## Milestones
                1. The site time source (GPS clock or network time server) and every device that synchronises to it listed.
                2. Time offset checked on servers, historians, RTUs and relays.
                3. Devices drifting beyond an agreed tolerance corrected and the cause found.
                4. A monthly time check record kept.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record shows the time offset of every server, RTU and relay, with any device outside tolerance corrected."
                cadence: rolling
              tasks:
                - "Find the site time source and list the devices synchronised to it"
                - "Agree the time tolerance for servers, RTUs and relays"
                - "Check time offset across servers, RTUs and relays @recurring(monthly:26)"
                - "Correct drifting devices and note why they drifted"
            - name: Control network security event monitoring
              description: |-
                ## Purpose
                Firewall denies, failed logins and new devices appearing on the control network are the early signs of both attacks and careless changes, but they are worthless if no one looks. A weekly half-hour review of security events, or of alerts from a passive OT monitoring tool if you have one, turns logs into decisions.

                ## Milestones
                1. Logs from firewalls, SCADA servers and domain controllers collected in one place.
                2. A short list of events that always need follow-up (new device, repeated failed logins, blocked outbound traffic).
                3. A weekly review recorded with anything investigated.
                4. Each significant event closed with a finding or escalated under the incident plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly security event review is recorded, and every event on the follow-up list has a finding or an escalation."
                cadence: rolling
              tasks:
                - "Confirm which control network devices send logs and where they land"
                - "Write the list of events that always need follow-up"
                - "Review firewall, login and new device events @recurring(weekly:thu)"
                - "Escalate any unexplained event under the incident response plan"
            - name: SCADA server health and capacity watch
              description: |-
                ## Purpose
                SCADA servers fail slowly: disks fill with alarm journals, databases grow past their limit and memory leaks in a driver build over months. A Friday look at disk, processor, memory, database size and service status gives warning weeks before the server stalls during a busy shift.

                ## Milestones
                1. Health thresholds set for disk space, processor load, memory and database size on each server.
                2. A one-screen health view or report covering every SCADA and historian server.
                3. A weekly check recorded with anything above threshold actioned.
                4. A six-monthly trend of disk and database growth used to plan hardware.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly health record covers every SCADA and historian server, and every reading above threshold has an action."
                cadence: rolling
              tasks:
                - "Set thresholds for disk, processor, memory and database size"
                - "Build a single view showing health for every server"
                - "Check disk, memory, services and database size on each server @recurring(weekly:fri)"
                - "Plot disk and database growth twice a year for hardware planning"
            - name: High-performance HMI principles in practice
              description: |-
                ## Purpose
                Operators detect abnormal situations faster on grey screens where colour means only one thing, yet many engineers have never been taught why. Studying ISA-101 and the high-performance HMI literature, then redrawing one screen of your own, changes how you build every display after it.

                ## Milestones
                1. ISA-101 and one recognised high-performance HMI book read with notes on colour, hierarchy and data presentation.
                2. The four-level display hierarchy (overview, unit, detail, diagnostic) understood and mapped to your plant.
                3. One existing screen redrawn on paper following the principles.
                4. The redrawn screen reviewed with an experienced operator.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Study notes on ISA-101 exist, and one redrawn screen has been reviewed by an experienced operator with their comments recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Get access to ISA-101 through your company library or a licensed copy"
                - "Read the sections on colour, display hierarchy and analogue indication"
                - "Redraw one of your busiest screens on paper using the principles"
                - "Walk an experienced operator through the redrawn screen"
            - name: DNP3 polling, events and unsolicited reporting
              description: |-
                ## Purpose
                DNP3 is the backbone of most water, power and pipeline telemetry, and misconfigured event classes or integrity polls are behind many floods of stale data and missed changes. Learning how class 0, 1, 2 and 3 data, event buffers, unsolicited responses and time stamps work lets you set up an outstation correctly and read a protocol capture with confidence.

                ## Milestones
                1. The DNP3 object model, event classes and integrity polls explained in your own notes.
                2. One outstation's configuration walked through, with each setting's purpose noted.
                3. A protocol capture taken and decoded with an analyser tool.
                4. One configuration improvement proposed, such as enabling unsolicited reporting or adjusting deadbands.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover DNP3 classes and polling, and one decoded capture plus a proposed configuration change has been reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find a DNP3 primer from the user group or a vendor training course"
                - "Walk through one outstation's configuration setting by setting"
                - "Capture and decode DNP3 traffic on a test or standby channel"
                - "Propose one configuration change and take it to a senior engineer"
            - name: Modbus register maps, data types and scaling
              description: |-
                ## Purpose
                Swapped words in a 32-bit float, a register offset of one and raw counts shown as engineering units cause more wrong numbers on HMIs than any other mistake. Learning to read a device's Modbus map, test a register with a master tool and set scaling properly means a new meter or drive goes onto the screen right the first time.

                ## Milestones
                1. Holding, input, coil and discrete input registers and their address conventions understood.
                2. Byte and word order for 32-bit integers and floats tested on a real device.
                3. A register map built for one device with addresses, types, scaling and units.
                4. Values read by a Modbus master tool matched to the device's local display.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register map for one device is built and every value read with a master tool matches the device display within its stated accuracy."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the Modbus map from the manual of one device on site"
                - "Read five registers with a Modbus master tool on a test connection"
                - "Try each word order until a float matches the local display"
                - "Write the register map with scaling and units for the device"
            - name: OPC UA servers, certificates and information models
              description: |-
                ## Purpose
                OPC UA is replacing classic OPC DA in most new systems, but certificate trust lists, security policies and namespaces confuse engineers used to DCOM. Building a small OPC UA connection between a test server and client, with security turned on, gives you the hands-on knowledge to commission one on a live project.

                ## Milestones
                1. The OPC UA client and server roles, endpoints and security modes understood.
                2. A test server and client connected with Sign and Encrypt security.
                3. Certificates exchanged and the trust list managed by hand at least once.
                4. A short note on how classic OPC DA links on your site could move to OPC UA.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test OPC UA connection runs with Sign and Encrypt, and a written note explains how the site's OPC DA links could migrate."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Install a free OPC UA test server and client on a lab machine"
                - "Connect with no security, then with Sign and Encrypt"
                - "Reject and then trust a certificate through the trust list"
                - "List the classic OPC DA connections still in use on site"
            - name: IEC 62443 for SCADA engineers
              description: |-
                ## Purpose
                Insurers, clients and regulators increasingly ask control system owners about the IEC 62443 series, and engineers are expected to speak to security levels, zones and foundational requirements. Studying the parts most relevant to an asset owner and system integrator lets you answer those questions and design new work to meet them.

                ## Milestones
                1. The structure of the IEC 62443 series understood, with the parts for asset owners, integrators and components noted.
                2. Security levels and the seven foundational requirements explained in your own words.
                3. Your site's zones drawing assessed against a target security level for one zone.
                4. A study plan for a recognised industrial security certificate decided, if it suits your role.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Study notes cover the IEC 62443 structure and foundational requirements, and one zone has a written assessment against a target security level."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Get an overview of the IEC 62443 series from the standards body or ISA"
                - "Write a one-page summary of the seven foundational requirements"
                - "Assess one zone of your network against a target security level"
                - "Decide whether an industrial security certificate fits your next year"
            - name: Historian queries, aggregates and reports
              description: |-
                ## Purpose
                Most engineers only use a historian through the trend screen, yet the same data can answer daily production, pump run hours and alarm counts automatically. Learning interpolated versus recorded values, time-weighted averages and the reporting add-in turns a weekly hour of manual reading into a report that builds itself.

                ## Milestones
                1. The difference between recorded, interpolated and time-weighted values understood and tested.
                2. Three useful queries built (for example daily totals, pump run hours, time in alarm).
                3. One manual report replaced by an automated historian report.
                4. The queries saved and documented for colleagues.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three documented historian queries exist and one manual report has been replaced by an automated one now in use."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare recorded and interpolated values for one tag over a day"
                - "Build a time-weighted average query for a key flow"
                - "Replace one manually compiled report with a historian query"
                - "Save and document the queries in a shared folder"
            - name: Telemetry radio and cellular link planning
              description: |-
                ## Purpose
                Remote sites live or die by their links, and a licensed radio path that worked before a new building went up, or a cellular router on a congested mast, will drop data at the worst moment. Learning path profiles, fade margin and cellular signal measures lets you plan a new link properly and argue for a better antenna or a second path.

                ## Milestones
                1. Fade margin, Fresnel zone clearance and antenna gain understood well enough to read a link budget.
                2. Received signal levels recorded for every radio and cellular site.
                3. One path profile drawn for the weakest radio link.
                4. Improvement options for the worst three links costed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Signal levels are recorded for every radio and cellular site, and the worst three links each have costed improvement options."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the radio vendor's guide to link budgets and fade margin"
                - "Record received signal levels from every radio and cellular router"
                - "Draw a path profile for the weakest radio link"
                - "Price an antenna upgrade or second path for the worst three links"
            - name: Safe scripting in the SCADA platform
              description: |-
                ## Purpose
                Scripts in the HMI or server can automate reports and handle edge cases, but an untested loop can freeze a client or write to the wrong tag. Learning your platform's scripting environment, where scripts run, and how to test and document them means you add automation without adding hidden risk.

                ## Milestones
                1. Where client-side and server-side scripts run on your platform, and what each can write to, understood.
                2. Every existing script on the system listed with what it does and who wrote it.
                3. A small script written and tested on a development system before use.
                4. A scripting standard agreed covering comments, error handling and write limits.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of every existing script with its purpose is filed, and a written scripting standard has been agreed with the engineering lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Search the project for every script and list what each does"
                - "Read the platform's scripting guide on client and server execution"
                - "Write and test one small script on the development system"
                - "Draft a scripting standard for comments, errors and tag writes"
            - name: Overview display rebuilt to high-performance standard
              description: |-
                ## Purpose
                The overview is the screen operators look at most, and if it is a cluttered plant mimic in bright colours, the first sign of trouble is easy to miss. Rebuilding it as a level 1 overview with grey backgrounds, analogue indicators with normal ranges and key trends shows the whole process state at a glance.

                ## Milestones
                1. The key performance values for the plant or network agreed with operations, around twenty to thirty in all.
                2. A paper mock-up reviewed and approved by operators from each shift.
                3. The new overview built, tested on the development system and released under change control.
                4. Operator feedback gathered a month after release and any fixes made.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new overview display is in service under change control, approved by operators from each shift, with one month of feedback actioned."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask each shift lead which values they check first when arriving"
                - "Sketch the overview on paper and review it with operators"
                - "Build and test the overview on the development system"
                - "Collect operator feedback one month after release"
            - name: HMI colour palette and symbol library
              description: |-
                ## Purpose
                Where every integrator brings their own valve symbol and shade of red, operators have to relearn screens area by area. A single colour palette that reserves bright colours for alarms and abnormal states, and a shared library of symbols and faceplates, makes every future screen consistent and quicker to build.

                ## Milestones
                1. A colour palette written down with each colour's meaning, checked for colour vision deficiency.
                2. A symbol and faceplate library built for valves, pumps, motors, analogue indicators and alarm indication.
                3. The library used to build or rework at least one screen.
                4. The palette and library added to the HMI style guide and the FDS.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented colour palette and a symbol library covering five equipment types exist, and at least one screen is built from them."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every colour currently used on screens and what each means"
                - "Draft a palette that keeps bright colours for alarms only"
                - "Check the palette with a colour vision deficiency simulator"
                - "Build the valve, pump and indicator symbols in the library"
            - name: Alarm presentation on the HMI
              description: |-
                ## Purpose
                Even with a rationalised alarm list, operators can miss alarms if the banner is cluttered, priorities look alike or shelved alarms vanish from view. Reworking how alarms appear on screens (the banner, summary, priority symbols and shelved list) so they match the site alarm philosophy helps operators see and respond to what matters.

                ## Milestones
                1. Current alarm banner, summary and on-screen indicators compared against the site alarm philosophy.
                2. Priority shown by shape and colour together, not colour alone.
                3. Shelved and suppressed alarms visible on a dedicated display.
                4. Changes tested with operators and released under screen change control.

                ## Notes
                Which alarms exist and their priorities belong to the alarm rationalisation work. This project is about how they are shown.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The alarm banner, summary and shelved alarm display match the alarm philosophy and have been tested with operators and released."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Screenshot the alarm banner, summary and any shelved alarm view"
                - "Mark each place where priority relies on colour alone"
                - "Build a shelved and suppressed alarm display"
                - "Test the new alarm displays with operators from two shifts"
            - name: Choosing a SCADA platform for replacement
              description: |-
                ## Purpose
                Replacing a SCADA platform is a ten to fifteen year decision that locks in licensing, integrator choice and skills, and it is often made on a demonstration rather than evidence. Scoring candidate platforms against your own requirements (redundancy, protocols, historian, web clients, security features, local support) gives a decision you can defend.

                ## Milestones
                1. A requirements list drawn from the FDS, the inventory and operator feedback.
                2. Three platforms shortlisted, each scored against the same requirements.
                3. Reference sites contacted for each shortlisted platform.
                4. A recommendation with total cost of ownership over ten years written for approval.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor how many certified integrators they have in your region, not just worldwide.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation scores three platforms against one requirements list, includes ten-year cost of ownership and reference site notes, and is approved."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the platform requirements list from the FDS and inventory"
                - "Shortlist three platforms and request demonstrations on your data"
                - "Call one reference site for each shortlisted platform"
                - "Write the recommendation with ten-year cost of ownership"
            - name: Migrating serial telemetry links to IP
              description: |-
                ## Purpose
                Serial polling over radio or leased lines limits how fast data arrives and how many devices share a channel, and spare serial hardware is getting hard to find. Moving a group of remote sites to IP-based DNP3 or IEC 60870-5-104 over cellular or private networks can cut update times and remove old converters, if it is planned site by site.

                ## Milestones
                1. Candidate sites chosen and ranked by benefit and ease.
                2. A pilot site migrated with secure tunnelling and its performance compared with the old link.
                3. A migration plan for the remaining sites with a fallback for each.
                4. Old serial equipment removed from migrated sites and drawings updated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pilot site runs on IP telemetry with measured update times, and a migration plan with fallbacks covers every remaining serial site."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Rank serial sites by poll time, failure rate and hardware age"
                - "Choose a pilot site and design its IP link with encryption"
                - "Measure update times before and after the pilot migration"
                - "Update the communications map and drawings for each migrated site"
            - name: Historian consolidation decision
              description: |-
                ## Purpose
                Many sites run two or three historians from different eras, so engineers query one for flows, another for alarms and a spreadsheet for the rest. Deciding whether to consolidate onto one historian, keep them apart or add a layer on top settles years of duplicated effort and data that never quite matches.

                ## Milestones
                1. Every historian on site listed with tag count, retention, users and licence cost.
                2. Options set out: consolidate, keep separate, or add a common reporting layer.
                3. Each option scored on cost, data migration risk and user effort.
                4. A decision recorded with the reasons and the next step.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on historian consolidation scores three options on cost, migration risk and user effort and names the next step."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List each historian with tag count, retention and licence cost"
                - "Interview the main users of each historian about what they need"
                - "Score consolidation, separation and a reporting layer side by side"
                - "Write up the decision and take it to the engineering manager"
            - name: Web and mobile HMI access decision
              description: |-
                ## Purpose
                Supervisors and on-call engineers want to see the plant from a phone, but a web client exposed carelessly is a direct path into the control system. Deciding who needs remote viewing, whether it is read only, and how it is delivered through the demilitarised zone avoids both a rogue workaround and an unsafe shortcut.

                ## Milestones
                1. The people who need remote or mobile viewing listed with what they need to see.
                2. Options compared: read-only replica in the DMZ, vendor web client, or historian dashboards.
                3. Security requirements set, including multi-factor sign-in and no control writes from outside the control network.
                4. A decision recorded and, if approved, a pilot with a small user group.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states who gets mobile viewing, how it is delivered, and the security controls it must meet, with any pilot users named."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask supervisors and on-call staff what they need to see remotely"
                - "Compare read-only replica, web client and dashboard options"
                - "Write the security requirements any option must meet"
                - "Record the decision and the pilot group if approved"
            - name: Replacing shared operator logins with named accounts
              description: |-
                ## Purpose
                One shared operator login means no one can say who acknowledged an alarm or changed a setpoint, and the password is usually written on the console. Moving to named accounts, with quick shift handover sign-in so operators are not slowed down, gives a real audit trail without fighting the control room.

                ## Milestones
                1. The sign-in method chosen with operators (for example card readers or quick user switching) so handover stays fast.
                2. Named accounts created for every operator in the right role.
                3. The shared login disabled after a trial period on one console.
                4. The audit trail checked to show the named user against operator actions.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every operator signs in with a named account, the shared login is disabled, and the audit trail shows named users against actions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Talk to shift leads about how sign-in must work at handover"
                - "Trial named accounts on one console for two weeks"
                - "Create named accounts for every operator in the right role"
                - "Disable the shared login once all consoles are switched"
            - name: Secure remote access redesign
              description: |-
                ## Purpose
                Vendors connecting straight to a SCADA server through an always-on modem or remote desktop tool is one of the clearest risks a control system can carry. Redesigning remote access around a jump host in the demilitarised zone, multi-factor sign-in, session recording and access granted only when needed closes that door without stopping support.

                ## Milestones
                1. Every current remote access path documented with who uses it and how often.
                2. A target design agreed with IT: jump host, multi-factor sign-in, recorded sessions, time-limited access.
                3. Vendors moved to the new route one at a time, with old routes removed.
                4. A written remote access procedure issued to staff and vendors.

                ## Notes
                Keep one emergency access route documented and tested, so a locked-out vendor during an outage does not lead to someone plugging in a modem.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All remote access runs through a jump host with multi-factor sign-in and session recording, every old route is removed and the procedure is issued."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask each vendor how they connect today and how often"
                - "Agree the target remote access design with the IT security team"
                - "Move the first vendor to the jump host and remove their old route"
                - "Issue the remote access procedure to staff and vendors"
            - name: SCADA software version upgrade
              description: |-
                ## Purpose
                Major version upgrades touch every screen, driver and script, and a weekend that goes wrong leaves the control room blind. Planning the upgrade with a test system, a rehearsed procedure, a rollback point and operations on standby turns it into a dated, controlled event.

                ## Milestones
                1. The upgrade path, compatibility notes and driver versions confirmed with the vendor.
                2. The full project upgraded and tested on a test system, including failover.
                3. A cutover plan with go and no-go points, a rollback procedure and manual operations cover.
                4. The upgrade completed, tested with operators and closed out with lessons recorded.

                ## Notes
                Take full image backups of every server before starting, and prove one restore on spare hardware ahead of the weekend.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The SCADA platform runs the new version on every server, all go-live tests are signed by operations, and a lessons note is filed."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Read the vendor's upgrade notes and list every incompatible feature"
                - "Upgrade a copy of the project on the test system"
                - "Write the cutover plan with go and no-go points and rollback"
                - "Book operations cover and the upgrade window with the plant manager"
            - name: Integrating a new remote site into SCADA
              description: |-
                ## Purpose
                A new pump station, wellhead or substation looks simple on the drawing, but its points list, communications, screens, alarms and historian tags all have to arrive together and be proven end to end. Running the integration as a planned event with point-to-point testing means the site goes live without half its values showing wrong.

                ## Milestones
                1. A points list agreed with the instrument and electrical teams, with addresses and scaling.
                2. Communications commissioned and proven from the site to the SCADA server.
                3. Screens, alarms and historian tags built to the site standards.
                4. Point-to-point testing completed with field staff, every point signed off.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every point on the new site's list is signed off in point-to-point testing and the site appears on screens, alarms and the historian."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get the points list for the new site and check addresses and scaling"
                - "Configure the new channel and test communications to the site"
                - "Build the site screens from the symbol library"
                - "Test every point end to end with the field technician"
            - name: OT cyber incident tabletop exercise
              description: |-
                ## Purpose
                When ransomware hits the business network, the control room needs to know within minutes whether to disconnect, run manually or carry on, and that is not the moment to decide who calls whom. A tabletop exercise with operations, IT and management walks through a realistic scenario and finds the gaps in your plan.

                ## Milestones
                1. A realistic scenario written, such as ransomware on the business network spreading toward the historian.
                2. Operations, IT, engineering and management attending a two-hour session.
                3. Decisions, contact gaps and missing procedures recorded during the exercise.
                4. An action list with owners agreed and the incident plan updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise is held with all four groups present, and an action list with owners plus an updated incident plan are filed."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page ransomware scenario for your own network"
                - "Invite operations, IT, engineering and management to a two-hour session"
                - "Record decisions and gaps during the exercise"
                - "Run a fresh tabletop with a new scenario each year @recurring(yearly)"
            - name: Operator training on new screens before go-live
              description: |-
                ## Purpose
                Operators who first see a new screen at the start of a night shift will fall back on old habits or misread it. A short, hands-on training session on the test system, with a quick check of understanding, means new displays go live with people ready to use them.

                ## Milestones
                1. A training session built on the test system covering navigation, new symbols and alarm displays.
                2. Every operator on every shift trained before go-live.
                3. A short practical check passed by each operator.
                4. Training records filed and a quick reference card left at each console.

                ## Notes
                Start from the **Training program** template to plan sessions around the shift pattern.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every operator has a training record and a passed practical check for the new screens dated before go-live."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Build a thirty-minute training session on the test system"
                - "Schedule sessions so every shift is covered before go-live"
                - "Run a five-question practical check at the end of each session"
                - "Print a quick reference card for each console"
            - name: Annual control system vulnerability assessment
              description: |-
                ## Purpose
                Network changes, new devices and forgotten services build up over a year, and an outside view finds what internal teams have stopped seeing. A yearly assessment by a specialist with OT experience, run passively or in agreed windows so the process is never put at risk, gives a dated list of weaknesses to fix.

                ## Milestones
                1. A scope agreed covering networks, servers and remote access, with passive methods for live control networks.
                2. An assessor with control system experience appointed and rules of engagement signed.
                3. Findings received and ranked by risk.
                4. Every high finding given an owner and a closure date.

                ## Notes
                Active scanning can crash older PLCs and RTUs. Agree in writing which networks may be scanned and when.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A yearly assessment report is received, and every high finding has an owner and a closure date in the risk register."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Write the assessment scope and the rules of engagement"
                - "Ask two assessors for OT references and quotes"
                - "Plan the yearly assessment with operations and IT @recurring(yearly)"
                - "Assign an owner and date to every high finding"
            - name: First 90 days as a utility SCADA engineer
              description: |-
                ## Purpose
                Joining a water or power utility means hundreds of remote sites, old RTUs and an on-call rota from early on. A structured first ninety days, learning the network, meeting field technicians and shadowing the control room, gets you trusted before the first big storm or outage.

                ## Milestones
                1. The architecture, communications map and site list read and questions logged.
                2. Five remote sites visited with a field technician.
                3. Two shifts shadowed in the control room.
                4. One small improvement delivered and a 90-day review held with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five site visits, two shadowed shifts and one delivered improvement are recorded, and a 90-day review has been held with your manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager for the architecture drawing and site list"
                - "Book visits to five remote sites with a field technician"
                - "Shadow a day shift and a night shift in the control room"
                - "Pick one small fix to deliver before day ninety"
            - name: HMI developer at a system integrator
              description: |-
                ## Purpose
                Integrator engineers build screens for many clients to fixed budgets, so reusable templates and a clear way to handle client standards make the difference between profit and overrun. Building your own library and a checklist for every new client's HMI specification keeps quality up across projects.

                ## Milestones
                1. A personal library of tested faceplates and templates for your main platforms.
                2. A checklist for reading a client's HMI and alarm specifications at the start of each job.
                3. Hours per screen tracked on two projects to improve estimates.
                4. A short internal guide shared with colleagues on screen build standards.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A reusable faceplate library and a client specification checklist exist, and hours per screen are recorded for two projects."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Collect the faceplates you rebuild on most jobs into one library"
                - "Write a checklist for reading a client's HMI specification"
                - "Record hours per screen on the next two projects"
                - "Share a short screen build guide with your team"
            - name: Sole SCADA engineer for a small operator
              description: |-
                ## Purpose
                In a small municipality, estate or single plant, one person often owns SCADA, networking, security and vendor support with no one to check their work. Setting up a light routine, a trusted outside contact and good documentation keeps the system safe if you are on leave or leave altogether.

                ## Milestones
                1. A one-page system summary and password custody arrangement kept where your manager can find them.
                2. An outside integrator or peer engineer agreed as backup support.
                3. A light monthly routine covering backups, access and patches.
                4. A handover pack ready that a stranger could follow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A system summary, a named backup support contact and a handover pack exist, and the monthly routine is recorded each month."
                cadence: rolling
              tasks:
                - "Write a one-page summary of the system for your manager"
                - "Agree backup support terms with an integrator or peer engineer"
                - "Run the monthly backups, access and patch check @recurring(monthly:15)"
                - "Build a handover pack that someone new could follow"
            - name: Moving from IT networking into OT and SCADA
              description: |-
                ## Purpose
                IT network engineers bring valuable skills to control systems, but habits like active scanning, routine reboots and rapid patching can trip a plant. Learning the process side, the priorities of availability and safety, and the protocols in use lets you contribute safely in an OT role.

                ## Milestones
                1. The site's process and safety basics learned with an operator or process engineer.
                2. The differences between IT and OT priorities written down in your own words.
                3. Industrial protocols on site identified and examined in captures.
                4. A first OT change made under the site's change and permit rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on process basics and OT priorities exist, and a first OT change has been completed under the site's change process."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a process engineer for a walk-down of the main plant"
                - "Write down the IT habits that could harm a running control system"
                - "Capture traffic on a mirror port and identify each industrial protocol"
                - "Make a first OT change under the site's change process"
            - name: Control room operator moving into SCADA engineering
              description: |-
                ## Purpose
                Operators who move into SCADA engineering know exactly how screens fail people, but they need new skills in configuration, networks and documentation. A plan that pairs that operating knowledge with formal learning and supervised work makes the move a strength rather than a gamble.

                ## Milestones
                1. A skills gap list agreed with your new manager.
                2. A course or vendor training booked for the SCADA platform.
                3. Three supervised changes completed and reviewed.
                4. A short note written for engineers on what operators need from screens.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A skills gap list, booked platform training and three reviewed supervised changes are on file."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List your skills gaps with your new manager"
                - "Book vendor training for the SCADA platform"
                - "Complete three supervised changes with a senior engineer"
                - "Write a note for engineers on what operators need from screens"
            - name: IEC 61850 substation integration into SCADA
              description: |-
                ## Purpose
                Electrical substations increasingly use IEC 61850, where relays publish data in logical nodes and GOOSE messages rather than simple register maps. Integrating a substation into SCADA means reading substation configuration files, mapping the right data objects and working with the protection engineers so you never touch their settings.

                ## Milestones
                1. The substation configuration description file obtained and the logical nodes needed for SCADA identified.
                2. A mapping of relay data objects to SCADA tags agreed with protection engineers.
                3. Reports and data sets configured and tested from the gateway or client.
                4. Responsibilities between SCADA and protection teams written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed mapping of relay data objects to SCADA tags exists, tested end to end, with responsibilities agreed with protection engineers in writing."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Ask the protection engineer for the substation configuration file"
                - "List the logical nodes and data objects SCADA needs"
                - "Configure reports and test data from one relay"
                - "Write down where SCADA work ends and protection work begins"
            - name: Pipeline SCADA displays and leak detection support
              description: |-
                ## Purpose
                Pipeline control rooms work to specific industry guidance on displays and alarm handling, such as API RP 1165 for SCADA displays, and leak detection systems depend on SCADA data quality. Supporting a pipeline system means keeping displays to that guidance and the data feeding leak detection accurate and on time.

                ## Milestones
                1. Pipeline displays reviewed against the applicable recommended practice and site standards.
                2. Data latency and quality for every tag feeding leak detection measured.
                3. Problems found fixed or raised with the leak detection owner.
                4. A periodic review plan agreed with the pipeline control room.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Pipeline displays are reviewed against the recommended practice, and latency and quality are recorded for every leak detection tag."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get the recommended practice your pipeline displays must follow"
                - "List every tag that feeds the leak detection system"
                - "Measure data latency and quality for those tags"
                - "Agree a review schedule with the pipeline control room"
            - name: One-way historian replication to the business network
              description: |-
                ## Purpose
                Business users need plant data, but every connection from the office into the control network is a route for attack. Replicating historian data out through a one-way gateway or data diode, or a historian in the demilitarised zone, gives the business its data while nothing can reach back in.

                ## Milestones
                1. Business data needs listed: which tags, how often and how far back.
                2. Options compared: hardware data diode, DMZ historian replica or a one-way software gateway.
                3. The chosen design installed and tested to prove no return path.
                4. Old direct connections from the business network removed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Business users get historian data through a one-way design proven to have no return path, and old direct connections are removed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask business users which tags they need and how often"
                - "Compare data diode, DMZ replica and software gateway options"
                - "Test the installed design to prove there is no return path"
                - "Remove the old direct connections from the business network"
            - name: Control room display wall and console layout review
              description: |-
                ## Purpose
                Large display walls and multi-screen consoles are often specified by what fits the room rather than what operators need to see together. Reviewing which displays live on the wall, which on each console and how they relate to the operator's tasks reduces head turning and missed information.

                ## Milestones
                1. Each operator position's tasks listed with the displays they need.
                2. Current wall and console layouts photographed and mapped.
                3. A proposed layout agreed with operators, following control room design guidance such as ISO 11064.
                4. Layout changes made and operator comments recorded after a month.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposed display layout for each position is agreed with operators, applied and reviewed after a month with comments recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the tasks and displays for each operator position"
                - "Photograph the current display wall and each console"
                - "Draft a new layout with operators"
                - "Collect operator comments a month after the change"
---

# SCADA and HMI Systems

SCADA and HMI work is the layer between the field and the people in the control room: the servers, screens, historians, telemetry links and accounts that let an operator see a remote pump station or a whole plant and act on it safely. These projects are written for the engineer who owns that layer, starting with foundations (architecture, tag database, communications map, network zones, accounts, a screen audit and a historian baseline), then the operating routines, core skills in HMI design, protocols and security, improvements and decisions, dated events such as upgrades and new site integrations, situations for utility engineers, integrators, lone engineers and people crossing over from IT or the control room, and finishing with specialist work in substations, pipelines and one-way data transfer.

The rhythm is mostly weekly and monthly: a Monday communications health review, a Wednesday historian data check, a Thursday look at security events and a Friday server health check, with monthly passes over user access, patches, remote access sessions, screen changes and time synchronisation, quarterly failover tests and tag database comparisons, and yearly licence, zone drawing, vulnerability and tabletop reviews. The Risk register, Purchase decision, Compliance control, Onboarding 30/60/90 and Training program templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
