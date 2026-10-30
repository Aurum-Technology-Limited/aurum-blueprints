---
id: family-office.staff-vetting-and-background-checks
name: Staff Vetting and Background Checks
description: "Vetting that matches each role's access to the family: tiered checks, a lawful consent process, a trusted screening provider, careful reference calls, fair handling of findings and scheduled re-checks."
category: personal
version: 1.0.0
tags: [family-office, staff-vetting-and-background-checks, parent, homeowner, background-checks, references, screening, household-staff]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - operational-checklist
    - compliance-control
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Staff Vetting and Background Checks
          description: "Vetting staff and contractors who work close to the family: background checks, references, legal limits, confidentiality and periodic re-checks."
          projects:
            - name: Map of everyone with access to the family
              description: |-
                ## Purpose
                Most families can name their nanny and driver but forget the pool cleaner with a gate code, the IT contractor with the office passwords and the chef who hears every dinner conversation. A single map of every person with physical, digital, financial or child access is the starting point for deciding who needs what level of check. Without it, vetting effort goes to the obvious roles and misses the ones with the keys.

                ## Milestones
                1. Every employee, agency worker, regular contractor and adviser with access to a home, a vehicle, the children, money or family information listed in one table.
                2. Each person tagged with the kinds of access they hold: keys and codes, unsupervised time with children, payment authority, systems or confidential information.
                3. Each person marked as checked, partly checked or never checked, with the date of the last check where known.
                4. The ten highest-access people identified and highlighted for priority attention.

                ## Notes
                Start from the **Risk register** template. Walk each property with the house manager rather than working from the payroll, since contractors and friends of staff rarely appear on it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A single access map lists every person with access to the family, the type of access each holds and their current vetting status."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List everyone who holds a key, gate code or alarm code for any family property"
                - "Add contractors, agency workers and advisers who see family money or information"
                - "Mark each person's access type and last known check"
                - "Highlight the ten people with the deepest access"
            - name: Vetting tiers matched to role access
              description: |-
                ## Purpose
                A gardener who never enters the house does not need the same scrutiny as a live-in nanny or a controller who can release payments, and checking everyone to the highest level wastes money and invades privacy. Three or four tiers, each tied to a kind of access and a defined set of checks, make every later hiring decision quick and defensible. Proportion is also what most privacy and employment rules expect.

                ## Milestones
                1. Three or four vetting tiers defined, each tied to a clear description of access such as unsupervised child care, residence keys, payment authority or occasional supervised visits.
                2. A named set of checks for each tier, for example identity, right to work, references, criminal record, driving record, credit or professional licence.
                3. Every role on the access map assigned to a tier.
                4. The tier table reviewed by the employment lawyer for proportionality.

                ## Notes
                Tie tiers to access, never to nationality, age or background. A role that gains access later moves up a tier and gets the extra checks before the new access starts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written tier table assigns every role on the access map to a tier with its defined checks, and the lawyer has commented on it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sort the roles on the access map into three or four groups by access"
                - "Write the checks required for each tier in one table"
                - "Assign every current role to a tier"
                - "Send the tier table to the employment lawyer for comment"
            - name: Written vetting policy for staff and contractors
              description: |-
                ## Purpose
                When vetting lives in one person's head, a busy month or a new house manager means checks quietly stop. A short written policy says which roles are checked, when, by whom, what consent is taken, how findings are decided and how long records are kept. It also lets the family show staff that everyone is treated the same way.

                ## Milestones
                1. A policy of two to four pages covering scope, tiers, timing, consent, decision making, storage and re-checks.
                2. A clear rule that no one starts work or receives access before their tier's checks are complete, with any exception approved in writing by a named person.
                3. The policy reviewed by the employment lawyer in each country where staff work.
                4. The policy shared with the house manager, head of office and any staffing agency used.

                ## Notes
                Keep it short enough that the house manager will actually read it. Detailed procedures belong in the pre-start checklist, not the policy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off vetting policy exists, has been reviewed by a lawyer and has been shared with every person who hires for the family."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a two-page vetting policy outline from the tier table"
                - "Add the no-access-before-clearance rule and who may approve exceptions"
                - "Send the draft to the employment lawyer for review"
                - "Share the final policy with everyone who hires for the family"
            - name: Legal limits on background checks where staff work
              description: |-
                ## Purpose
                Some countries forbid asking about convictions until after an offer, some cap how far back a check may go, some restrict credit checks to specific roles and most require informed consent and a data protection basis. A family with homes in two or three countries can break the rules in one while following them in another. A short legal brief per jurisdiction, from a local employment lawyer, prevents a well-meant check from becoming a claim.

                ## Milestones
                1. A list of every country, and where relevant every state or province, in which the family employs or engages staff.
                2. A one-page brief per jurisdiction covering consent, timing of criminal record questions, spent conviction rules, credit check limits, social media screening and data retention.
                3. Any check in the tier table that is unlawful or restricted in a jurisdiction flagged and adjusted.
                4. The name and contact of the employment lawyer for each jurisdiction recorded.

                ## Notes
                This is a question list for a lawyer, not legal advice. Rules change, so the yearly reminder below is worth keeping.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lawyer-reviewed brief exists for every jurisdiction where staff work, and the tier table has been adjusted to match."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every country and state where the family employs or engages staff"
                - "Send the same question list on vetting rules to a lawyer in each place"
                - "Adjust the tier table for any check that is restricted locally"
                - "Ask each employment lawyer for vetting rule changes @recurring(yearly)"
            - name: Choosing a background screening provider
              description: |-
                ## Purpose
                Doing checks informally through a friend in the police or an internet search is unreliable and often illegal. A reputable screening provider with accreditation where it exists, coverage of the countries the family hires from and clear data handling does the regulated checks properly and leaves an audit trail. Choosing one before the next urgent hire avoids picking whoever answers the phone first.

                ## Milestones
                1. Three providers compared on country coverage, accreditation, turnaround, price per tier and data security.
                2. Each provider asked how it handles candidate consent, disputes and data deletion.
                3. A provider chosen, with a signed agreement and a data processing agreement in place.
                4. A named account contact and the ordering process written into the vetting policy.

                ## Notes
                Start from the **Vendor** template. Ask whether the provider uses subcontractors abroad, because international checks often pass through local agents.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening provider is chosen against written criteria, with a signed agreement and data processing terms on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two other families or the office's lawyer which providers they use"
                - "Send the same tier list and country list to three providers for quotes"
                - "Compare consent, dispute and deletion processes side by side"
                - "Review provider turnaround times and error rate @recurring(quarterly)"
            - name: Candidate consent and vetting privacy notice
              description: |-
                ## Purpose
                Candidates have a right to know what will be checked, why, who will see it and how long it will be kept, and in many places a check without written consent is unlawful. A standard consent form and privacy notice, agreed with the lawyer, means every candidate gets the same honest explanation. It also sets the tone: a family that is open about vetting earns more trust than one that checks quietly.

                ## Milestones
                1. A consent form listing each check by tier, signed before any check is ordered.
                2. A plain-language privacy notice explaining purpose, recipients, retention and the candidate's right to see and challenge results.
                3. Translations prepared for any language commonly spoken by staff candidates.
                4. Both documents approved by the lawyer and stored with the vetting policy.

                ## Notes
                Tell candidates about vetting at the start, in the job advert or first conversation. Surprising someone with a criminal record check after an offer feels like distrust.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-approved consent form and privacy notice exist for each tier and are used for every candidate from that date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the screening provider for its standard consent wording"
                - "Draft a one-page privacy notice in plain language"
                - "Arrange translations for the main languages staff speak"
                - "Send both documents to the lawyer for approval"
            - name: Secure storage and retention of vetting files
              description: |-
                ## Purpose
                Each vetting file holds a person's identity documents, address history and sometimes criminal or credit records, and it is exactly what a thief or a careless email would expose. Deciding where files live, who can open them and when they are deleted protects staff and keeps the family on the right side of data protection law. Most families keep these files for far too long.

                ## Milestones
                1. One secure location chosen for all vetting files, with access limited to two or three named people.
                2. A retention period set per document type, agreed with the lawyer.
                3. Paper copies scanned into the secure location and shredded, or locked away if originals must be kept.
                4. A deletion log showing what was removed and when.

                ## Notes
                Never keep vetting results in email inboxes or shared family chats. Unsuccessful candidates' files usually need deleting much sooner than those of people hired.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All vetting files sit in one access-controlled location with set retention periods, and a deletion log shows files removed on schedule."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search email and shared drives for scattered vetting documents"
                - "Move all vetting files into one access-controlled folder"
                - "Set a retention period for each document type with the lawyer"
                - "Delete vetting files past their retention date and log it @recurring(quarterly)"
            - name: Who decides on an adverse vetting finding
              description: |-
                ## Purpose
                Any check that reveals an old conviction, a gap in employment or a reference that does not match the CV forces a judgement call, and in a family that call often lands on whoever is nearest. Naming who decides, what they weigh and when the lawyer is consulted stops snap decisions, inconsistency between homes and the risk of discrimination. It also protects the house manager from carrying the family's risk alone.

                ## Milestones
                1. A named decision maker for each tier, with a second person for the highest tiers.
                2. A short list of factors to weigh: relevance to the role, how long ago, seriousness, evidence of change and the candidate's explanation.
                3. A rule for when the employment lawyer must be consulted before a decision.
                4. A one-page decision record form for each case.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written decision rights name who decides adverse findings per tier, with weighing factors and a decision record form in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the decision maker and second reviewer for each tier"
                - "Write the five factors to weigh on a single page"
                - "Agree with the lawyer when a case must go to them"
                - "Create a decision record form and store it with the policy"
            - name: Vetting budget and turnaround standards
              description: |-
                ## Purpose
                International criminal record checks can take weeks and cost far more than domestic ones, and a family that discovers this the week a nanny is due to start will be tempted to skip them. Setting a yearly budget and expected turnaround for each tier lets hiring plans start vetting early enough. It also shows whether the provider is meeting its promises.

                ## Milestones
                1. A cost per tier and per country taken from the provider's price list.
                2. An annual vetting budget based on expected hires, re-checks and contractors.
                3. Expected turnaround times per tier written into the hiring timeline.
                4. A note in every job brief of how many weeks vetting needs before a start date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An annual vetting budget and a turnaround table per tier exist and are referenced in every new job brief."
                cadence: cyclic
              tasks:
                - "Copy the provider's prices per tier and country into one table"
                - "Estimate next year's hires, re-checks and contractor checks"
                - "Add vetting lead times to the standard hiring timeline"
                - "Compare vetting spend against budget and adjust it @recurring(yearly)"
            - name: Pre-start vetting checklist for every new hire
              description: |-
                ## Purpose
                Working through one checklist for each new person, the house manager or office administrator turns the policy into a routine. It covers consent, identity, right to work, references, the tier's checks, the decision record and the moment access is granted. A weekly look at open cases keeps checks from stalling while a start date approaches.

                ## Milestones
                1. A one-page checklist per tier listing each check, who orders it and where the evidence is filed.
                2. A sign-off line confirming checks are complete before keys, codes or system access are issued.
                3. Every hire in the last six months reviewed against the checklist and gaps closed.
                4. The checklist used for every new hire from now on.

                ## Notes
                Start from the **Operational checklist** template. Put the access step last on the list, so codes are never issued while a check is pending.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new hire has a completed and signed pre-start checklist on file before receiving any keys, codes or system access."
                cadence: rolling
              tasks:
                - "Turn the tier table into a one-page checklist per tier"
                - "Check the last six months of hires against the checklist"
                - "Review open vetting cases and chase outstanding checks @recurring(weekly:mon)"
                - "Confirm the sign-off before issuing keys or codes to any new starter"
            - name: Reference calls with a set script and call log
              description: |-
                ## Purpose
                Written references are often bland, written by the candidate or from a friend posing as an employer. Calling former employers on a number you find yourself, asking the same structured questions and logging the answers gives a far truer picture, especially of discretion and reliability around children. Two careful calls beat five emailed letters.

                ## Milestones
                1. A reference script with eight to ten questions on duties, dates, reliability, discretion, handling of children or money and whether they would rehire.
                2. A rule that reference numbers are found independently, never only taken from the CV.
                3. A call log form recording who was called, when, the answers and any hesitation.
                4. At least two verified employer references logged for each tier one and tier two hire.

                ## Notes
                Listen for what is not said. A former employer who confirms dates but avoids the rehire question has told you something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each hire in the top two tiers has at least two logged reference calls made to independently verified numbers."
                cadence: rolling
              tasks:
                - "Write a reference script of eight to ten questions"
                - "Create a call log form and store it with the vetting files"
                - "Find former employers' numbers independently before each call"
                - "Log both calls for the next hire within a week of the interview"
            - name: Identity and right-to-work verification routine
              description: |-
                ## Purpose
                Every other check is worthless if the person is not who they claim to be. Seeing original documents in person, checking them against the face in front of you and confirming the right to work in that country is the foundation of vetting, and in many places the employer carries legal penalties for getting it wrong. A fixed routine makes it the same for every hire, whatever their background.

                ## Milestones
                1. A list of acceptable identity and right-to-work documents for each country where staff work, taken from official guidance.
                2. A routine for seeing originals in person, checking photos and security features and taking dated copies.
                3. Follow-up dates set for any visa or permit with an expiry.
                4. Every current staff member's identity and right to work confirmed on file.

                ## Notes
                Apply the same checks to every candidate. Checking only people who seem foreign is discriminatory and unlawful in many places.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every current staff member has dated copies of verified identity and right-to-work documents on file, with visa expiry dates tracked."
                cadence: rolling
              tasks:
                - "Download the official list of acceptable work documents for each country"
                - "Write the in-person document check steps on one page"
                - "Confirm every current staff member's documents are on file"
                - "Enter each visa or permit expiry into the vetting register"
            - name: Periodic re-check schedule for current staff
              description: |-
                ## Purpose
                Five-year-old checks say nothing about a conviction, debt or licence loss since. Re-checking the highest tiers on a set cycle, with staff knowing it is coming, catches change without singling anyone out. The schedule lives in the vetting register so it does not depend on anyone remembering.

                ## Milestones
                1. A re-check interval set for each tier, agreed with the lawyer and stated in the policy.
                2. Every current staff member's next re-check date recorded.
                3. Staff told in writing that re-checks are routine and when theirs falls.
                4. The first round of overdue re-checks completed.

                ## Notes
                Ask for fresh consent each time if local law requires it. A re-check that turns up something goes through the same decision process as a new hire.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every staff member in the top two tiers has a recorded next re-check date and none is more than a month overdue."
                cadence: rolling
              tasks:
                - "Set a re-check interval for each tier"
                - "Write each staff member's next re-check date into the register"
                - "Order the re-checks due this month @recurring(monthly:12)"
                - "Refresh criminal record checks for tier one staff @recurring(yearly)"
            - name: Contractor and tradesperson access control
              description: |-
                ## Purpose
                Plumbers, electricians, florists, caterers and delivery crews come and go every week, and few are checked at all. A list of approved firms, a rule that firms name the individuals they send, and a check at the gate against that list closes the most common gap in household security. It costs almost nothing once set up.

                ## Milestones
                1. A list of approved contractor firms with the names of individuals they normally send.
                2. A rule that any new individual from a firm is named in advance and shows identity on arrival.
                3. Gate and house staff briefed on what to do when someone unexpected arrives.
                4. A visitor log in use at each property.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each property keeps a visitor log, and every contractor visit in the last month matches a named individual from an approved firm."
                cadence: rolling
              tasks:
                - "List the contractor firms that visited each property in the last three months"
                - "Ask each firm to name the individuals it normally sends"
                - "Brief gate and house staff on handling unexpected arrivals"
                - "Check next week's contractor bookings against the approved list @recurring(weekly:fri)"
            - name: Agency-supplied staff vetting evidence
              description: |-
                ## Purpose
                Nanny, housekeeping and temporary staffing agencies often say candidates are fully vetted, but what that means varies enormously and is rarely shown. Asking each agency for written evidence of the checks done, their dates and the provider used tells you whether to rely on them or run your own. The answer is sometimes uncomfortable.

                ## Milestones
                1. Each agency's vetting standard obtained in writing.
                2. Evidence of checks seen for every agency worker currently placed with the family.
                3. Any gap between the agency's checks and the family's tier requirements closed by extra checks.
                4. Agency contracts updated to require evidence before each placement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written vetting evidence is on file for every agency worker placed with the family, and any gap against the tier table is closed."
                cadence: rolling
              tasks:
                - "Ask each agency for its written vetting standard"
                - "Request check evidence for every agency worker now placed"
                - "Order extra checks where the agency falls short of the tier"
                - "Request updated check evidence from each agency @recurring(quarterly)"
            - name: Vetting status register for all staff
              description: |-
                ## Purpose
                One register showing each person, their tier, which checks were done, when, and when the next one is due is the single view a family needs to know vetting is working. Updated monthly, it shows overdue re-checks, expiring permits and anyone who slipped through. It is also what an insurer or lawyer will ask to see after an incident.

                ## Milestones
                1. A register listing every person on the access map with tier, checks done, dates and next due date.
                2. Overdue items highlighted automatically or by a simple colour rule.
                3. The register stored in the secure vetting location, not a shared drive.
                4. A monthly update completed for three months running.

                ## Notes
                Start from the **Compliance control** template. Keep results themselves out of the register: record that a check was done and cleared, not what it found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The vetting register covers everyone on the access map and has been updated monthly for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Build the register from the access map and tier table"
                - "Add a simple rule that highlights overdue checks"
                - "Update the vetting register and list overdue items @recurring(monthly:5)"
                - "Send the overdue list to the decision maker for each tier"
            - name: Licence and certificate expiry tracking
              description: |-
                ## Purpose
                Drivers with a lapsed licence, nannies with an expired paediatric first aid certificate and boat captains without a current ticket are uninsured and possibly unlawful to employ in those roles. Tracking every role-related licence and its expiry date, with a reminder two months ahead, prevents an ugly surprise after an accident. Insurers often check this before paying a claim.

                ## Milestones
                1. A list of every licence or certificate required by each role, such as driving licence, first aid, security licence, food hygiene or vessel certificates.
                2. Copies and expiry dates on file for each staff member.
                3. A reminder set sixty days before each expiry.
                4. Driving records checked for every staff member who drives family members.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every role-required licence has a copy and expiry date on file, and none has lapsed while the person kept doing that work."
                cadence: rolling
              tasks:
                - "List the licences and certificates each role requires"
                - "Collect copies and expiry dates from every staff member"
                - "Check licences and certificates expiring in the next sixty days @recurring(monthly:20)"
                - "Ask the insurer which driver checks it expects for staff drivers"
            - name: Annual change-in-circumstance declaration
              description: |-
                ## Purpose
                Re-checks happen on a cycle, but a new charge, a serious debt or a relative's involvement in a dispute with the family can arise at any time. A short annual declaration, plus a standing duty to report changes, gives staff a dignified way to raise things themselves. People are far more likely to disclose when the form is routine and applies to everyone, including senior office staff.

                ## Milestones
                1. A one-page declaration covering new charges or convictions, licence changes, serious financial difficulty and conflicts of interest.
                2. The duty to report changes added to contracts or the staff handbook with the lawyer's approval.
                3. Declarations returned by every tier one and tier two staff member.
                4. Any disclosure handled through the adverse finding process.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tier one and tier two staff member has returned a signed declaration within the last twelve months."
                cadence: cyclic
              tasks:
                - "Draft a one-page change-in-circumstance declaration"
                - "Ask the lawyer to approve the wording and the reporting duty"
                - "Send the declaration to every tier one and tier two staff member @recurring(yearly)"
                - "File each returned declaration in the secure vetting folder"
            - name: Reading a background check report
              description: |-
                ## Purpose
                Screening reports arrive full of codes, partial matches, jurisdictions searched and notes such as no record found, which does not always mean no record exists. Knowing what each section covers and what it misses lets the decision maker ask the right follow-up questions instead of trusting a green tick. An hour with the provider's account manager pays for itself on the first unclear result.

                ## Milestones
                1. A walkthrough with the provider of a sample report, section by section.
                2. A one-page guide noting what each check covers, which records it cannot see and what the result codes mean.
                3. A list of follow-up questions to ask when a result is unclear or a match is partial.
                4. The guide shared with every decision maker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every decision maker has read a one-page guide to the provider's report format, written after a walkthrough with the provider."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a walkthrough of a sample report with the provider"
                - "Note what each check covers and what it cannot see"
                - "Write a list of follow-up questions for unclear results"
                - "Share the one-page guide with each decision maker"
            - name: Spotting CV and reference fraud
              description: |-
                ## Purpose
                Invented employers, borrowed qualifications, friends posing as former bosses and gaps hidden by stretched dates are common in household and private staff hiring, partly because candidates know families rarely check. Learning the usual patterns makes them easy to see. It also tells you which candidates are worth the cost of a full check.

                ## Milestones
                1. A list of common warning signs: mobile-only references, employers with no trace, round-number dates, unverifiable overseas posts.
                2. Three past CVs reviewed against the list as practice.
                3. A habit of checking every former employer exists independently before calling.
                4. Notes on warning signs added to the reference script.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of fraud warning signs exists, has been tested on three past CVs and has been added to the reference script."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the screening provider which fraud patterns it sees most often"
                - "Write a list of warning signs on one page"
                - "Review three past CVs against the list"
                - "Add the warning signs to the reference call script"
            - name: Interviewing for discretion and integrity
              description: |-
                ## Purpose
                Checks show the past; an interview is the best chance to see how someone thinks about confidentiality, boundaries with children and what they would do if offered money for information. Behavioural questions and short scenarios reveal far more than asking whether someone is discreet. Learning to run them well suits any parent or house manager who hires.

                ## Milestones
                1. Eight behavioural questions on confidentiality, honesty and boundaries written and tested.
                2. Three short scenarios prepared, for example a journalist calling, a child asking to keep a secret or a request to pay cash.
                3. A simple scoring guide so two interviewers can compare notes.
                4. The questions used in at least two real interviews and refined.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested set of eight integrity questions and three scenarios with a scoring guide has been used in at least two interviews."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write eight behavioural questions on discretion and honesty"
                - "Draft three short scenarios with what a strong answer sounds like"
                - "Create a simple scoring guide for two interviewers"
                - "Use the questions in the next two interviews and refine them"
            - name: How criminal record checks differ by country
              description: |-
                ## Purpose
                Families hiring a nanny from the Philippines, a driver from Jamaica and a chef from France for a home in London or Miami face three different record systems, some national, some local and some barely accessible. Understanding how each source country issues police certificates, how long they take and how they can be verified avoids false comfort. The same knowledge helps when staff move between the family's homes.

                ## Milestones
                1. A list of the countries the family most often hires from.
                2. For each, how a police certificate is obtained, by whom, typical waiting time and how authenticity is checked.
                3. A note of countries where records are local rather than national, so several checks are needed.
                4. The findings added to the vetting budget and turnaround table.

                ## Notes
                Some police certificates must be requested by the individual, not the employer. Build that time into the start date.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table covering each main source country records how police certificates are obtained, verified and how long they take."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the countries the family has hired from in the last five years"
                - "Ask the provider how it obtains records in each country"
                - "Record waiting times and verification steps per country"
                - "Update the turnaround table with the longest waits"
            - name: Online and social media screening within legal limits
              description: |-
                ## Purpose
                Candidates who post photos from inside previous employers' homes, or brag about famous clients, are a real risk to a private family. Yet open-source screening easily strays into protected characteristics and is restricted in some places. Learning how to do it lawfully, ideally through the provider with a defined scope, keeps the useful part and drops the rest.

                ## Milestones
                1. The lawyer's view on online screening in each jurisdiction recorded.
                2. A defined scope: what is looked for, such as disclosure of past employers' private lives, and what is ignored.
                3. A decision on whether the provider or an internal person does the screening.
                4. Screening limited to final candidates and covered in the consent form.

                ## Notes
                Whoever screens should not be the person who decides, so information about religion, health or family life never reaches the decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written scope for online screening, approved by the lawyer and covered by the consent form, is in use for final candidates."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lawyer what online screening is allowed in each jurisdiction"
                - "Write what the screening looks for and what it ignores"
                - "Decide whether the provider or an internal person screens"
                - "Add online screening to the consent form wording"
            - name: Spent convictions and fair chance rules
              description: |-
                ## Purpose
                Many countries treat older or minor convictions as spent, meaning they need not be disclosed and cannot lawfully be held against someone for most roles, while roles with children often carry exceptions. Some cities and states also require a fair chance process before any conviction is considered. Understanding these rules means the family neither rejects someone unlawfully nor hires blind into a child care role.

                ## Milestones
                1. A summary from the lawyer of spent conviction and fair chance rules in each jurisdiction.
                2. A note of which family roles fall into any exceptions for work with children or vulnerable adults.
                3. The adverse finding factors updated to match.
                4. Decision makers briefed in a short session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Decision makers have been briefed on spent conviction and fair chance rules in each jurisdiction, and the decision factors reflect them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lawyer for a one-page summary of spent conviction rules"
                - "List which family roles fall under child care exceptions"
                - "Update the adverse finding factors to match"
                - "Brief every decision maker in a short session"
            - name: Verifying overseas qualifications and work history
              description: |-
                ## Purpose
                Overseas nursing qualifications, cordon bleu diplomas and ten years with a royal household are easy to claim and slow to verify. Knowing how to confirm qualifications with issuing bodies and employment with overseas employers, directly or through the provider, stops the most expensive kind of hiring mistake. It matters most for carers, chefs, tutors and senior office staff.

                ## Milestones
                1. A list of the qualifications most often claimed for family roles and the bodies that issue them.
                2. A method for each: direct verification, the provider or a recognised credential service.
                3. Qualifications verified for every current carer, tutor and senior office staff member.
                4. Verification added to the checklist for the relevant tiers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Qualifications are verified with the issuing body for every current carer, tutor and senior office staff member."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the qualifications current staff have claimed"
                - "Find the issuing body or credential service for each"
                - "Request verification for carers, tutors and senior office staff"
                - "Add qualification checks to the pre-start checklist"
            - name: Whether to run credit checks on staff who handle money
              description: |-
                ## Purpose
                House managers with a household card, assistants who pay bills and controllers who release transfers have a real opportunity for fraud, and financial pressure is a known risk factor. Yet credit checks are restricted in many places and can unfairly penalise people who had a hard year. Making a deliberate decision, role by role, with the lawyer, avoids both carelessness and overreach.

                ## Milestones
                1. A list of roles with access to family money and the size of that access.
                2. The lawyer's view on whether credit checks are permitted for those roles in each jurisdiction.
                3. A decision recorded per role, with the reasoning.
                4. Alternative controls noted where checks are not used, such as dual approval or spending limits.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on credit checks exists for every role with financial access, with alternative controls listed where checks are not used."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List roles with access to cards, bank accounts or payments"
                - "Ask the lawyer whether credit checks are lawful for each role"
                - "Record a yes or no decision per role with the reason"
                - "Note dual approval or spending limits where checks are not used"
            - name: Fair handling of an adverse finding
              description: |-
                ## Purpose
                When a check turns up something, the candidate deserves to see it, explain it and correct it if it is wrong, and in some places the law requires notice before a final decision. Records are mixed up surprisingly often, especially with common names. A fair process protects the person, the family's reputation among staff and the family from a claim.

                ## Milestones
                1. A step-by-step process: share the finding, invite an explanation, allow time to dispute, then decide.
                2. Template letters for the notice and the final decision, approved by the lawyer.
                3. A timescale for each step that respects any legal waiting period.
                4. Each case recorded on the decision form.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-approved adverse finding process with template letters exists, and every case since has a completed decision form."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the adverse finding steps on one page"
                - "Draft notice and decision letters for the lawyer to approve"
                - "Set a timescale for each step including any legal wait"
                - "Store the templates with the decision record form"
            - name: Catching up on long-serving staff never vetted
              description: |-
                ## Purpose
                The housekeeper of twenty years or the driver who has known the children since birth was often hired on a friend's word, and checking them now feels like an accusation. Handled openly, as a new policy applied to everyone including senior office staff, it rarely causes offence. Leaving them unchecked while new hires are vetted creates the very gap that insurers and security advisers worry about.

                ## Milestones
                1. A list of current staff with no checks or checks older than the tier's re-check interval.
                2. A personal conversation with each, explaining the new policy and that it applies to everyone.
                3. Consent obtained and checks completed for every person on the list.
                4. Any finding handled through the fair process, with long service weighed.

                ## Notes
                Have the principal or the most senior family member explain it, not a junior manager. Starting with senior office staff shows the policy is not aimed at household staff.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every current staff member has completed checks for their tier, with consent and a personal explanation recorded for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull the list of current staff with no recent checks from the register"
                - "Decide who will speak to each person and in what order"
                - "Hold the conversations and collect signed consent"
                - "Order the checks and record completion in the register"
            - name: What candidates learn about the family before clearance
              description: |-
                ## Purpose
                Recruitment can leak a great deal: the family's name, the home address, the children's school and the daily routine, all shared with candidates who are never hired. Deciding what each stage reveals, using a neutral name in adverts and interviewing away from the home, keeps that information with people who have been cleared. It is the confidentiality side of vetting that most families miss.

                ## Milestones
                1. A rule for what each recruitment stage may disclose: advert, first interview, final interview, offer and start.
                2. Adverts and agency briefs rewritten to use a neutral description of the family.
                3. First interviews held at the office or a neutral location, not the main residence.
                4. Agencies told in writing what they may and may not tell candidates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written disclosure-by-stage rule is in use, and every live advert and agency brief describes the family without identifying it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what each recruitment stage may reveal about the family"
                - "Rewrite live adverts with a neutral family description"
                - "Choose a neutral place for first interviews"
                - "Send each agency the disclosure rules in writing"
            - name: Staged access during probation
              description: |-
                ## Purpose
                Some checks take weeks, and even a clean result is not the same as trust earned. Giving a new person access in stages, for example supervised time with children before sole care, a day code before a master key, view-only before payment rights, limits the harm if something was missed. Staff generally accept it when it is explained as standard for everyone.

                ## Milestones
                1. An access ladder for each tier one role, with three or four steps over the probation period.
                2. A named person who approves each step up.
                3. The ladder explained to new starters on their first day.
                4. Each step up recorded in the register.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one role has a written access ladder, and each new starter's steps up are recorded with the approver's name."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a three or four step access ladder for each tier one role"
                - "Name who approves each step up"
                - "Add an explanation of the ladder to the first-day briefing"
                - "Record each step up in the vetting register"
            - name: Vetting staff hired through personal recommendation
              description: |-
                ## Purpose
                Hiring a friend's former nanny or the cousin of a trusted driver is the most common route into a household, and the one most often waved through without checks. Recommendations are valuable but are not vetting, and the person recommending rarely knows the full history. A simple rule that recommended candidates go through the same tier checks, explained graciously, closes the gap without offending anyone.

                ## Milestones
                1. A sentence added to the policy that recommended candidates follow the same checks.
                2. A short, warm script for explaining this to the friend or staff member who made the recommendation.
                3. The last five recommended hires checked against their tier.
                4. Relationships between staff members recorded, so related staff are known.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The policy states that recommended candidates follow the same checks, and the last five recommended hires have completed them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add the same-checks rule for recommended candidates to the policy"
                - "Write a short script for thanking and informing the recommender"
                - "Check the last five recommended hires against their tier"
                - "Record known family relationships between staff members"
            - name: Vetting duties written into supplier contracts
              description: |-
                ## Purpose
                Cleaning companies, security firms, caterers and facilities managers send their own people into family homes, and the family cannot vet each one directly. Writing vetting standards, evidence and audit rights into supplier contracts makes the supplier responsible and gives the family a way to check. It is far easier to add at renewal than after an incident.

                ## Milestones
                1. A list of suppliers whose staff enter family properties or handle family information.
                2. A standard vetting clause agreed with the lawyer, covering checks, evidence, notice of findings and audit rights.
                3. The clause added at each supplier's next renewal.
                4. Attestations received from every key supplier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every supplier whose staff enter family properties has a vetting clause in its contract and has returned a current attestation."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List suppliers whose staff enter homes or see family information"
                - "Ask the lawyer for a standard vetting clause"
                - "Add the clause at each supplier's next renewal"
                - "Ask each key supplier for its vetting attestation @recurring(yearly)"
            - name: Vetting a new nanny before the start date
              description: |-
                ## Purpose
                A nanny has more unsupervised time with the children than anyone outside the family, and the start date is usually fixed by a parent returning to work. Working backwards from that date, with the longest checks ordered first, avoids the temptation to let her start while checks are pending. This project is for one specific hire and can be reused for the next.

                ## Milestones
                1. A timeline counted back from the start date, with international and enhanced child care checks ordered first.
                2. Consent, identity and right to work completed in the first week.
                3. Two employer references called using the script, at least one from a previous family.
                4. Paediatric first aid and any child care registration verified.
                5. All tier one checks cleared and signed off before the first unsupervised day.

                ## Notes
                A paid trial day or two with a parent at home is a useful final step, but it is not a substitute for the checks.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new nanny's tier one checks are all cleared and signed off before her first day of unsupervised care."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the start date and count back six weeks for checks"
                - "Collect consent and order the longest checks first"
                - "Call two previous employers using the reference script"
                - "Sign off the checklist before the first unsupervised day"
            - name: Screening event staff for a family wedding or celebration
              description: |-
                ## Purpose
                Weddings, milestone birthdays and large parties can bring fifty to two hundred temporary workers onto a property in one day: caterers, bar staff, musicians, valets, florists and photographers. Few will be vetted individually, but names in advance, identity on arrival, controlled zones and supplier attestations cut the risk of theft, gatecrashers and leaked photos. It needs starting weeks ahead.

                ## Milestones
                1. A list of every supplier and the number of staff each will send.
                2. Named staff lists received from each supplier a week before the event, with attestations of their checks.
                3. Identity checks and wristbands or passes planned at the staff entrance.
                4. Private areas of the house closed and staffed.
                5. Photography and phone rules for event staff written into supplier contracts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every event worker on the day appears on a supplier's named list and passed an identity check at the staff entrance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every event supplier and their expected staff numbers"
                - "Ask suppliers for named staff lists and check attestations"
                - "Plan the staff entrance, passes and closed areas"
                - "Add photography and phone rules to supplier contracts"
            - name: Inherited staff when buying a new residence
              description: |-
                ## Purpose
                Buying an estate or villa often comes with a caretaker, gardeners or a housekeeper who have worked there for years and know the property intimately. They may be excellent, but they were vetted, if at all, by someone else. Checking them through the family's own process in the first months, with care for their position, sets the standard at the new home from the start.

                ## Milestones
                1. A list of staff who came with the property, their roles and access.
                2. Employment terms and any transfer obligations confirmed with the local lawyer.
                3. Each person told about the family's vetting policy and asked for consent.
                4. Checks completed for their tiers and recorded in the register.
                5. All locks and codes changed once checks are complete.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every inherited staff member at the new residence has completed checks for their tier, and all locks and codes have been changed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the staff who came with the property and their access"
                - "Ask the local lawyer about transfer obligations"
                - "Meet each person to explain the policy and collect consent"
                - "Change all locks and codes once checks are cleared"
            - name: Annual vetting programme audit
              description: |-
                ## Purpose
                Once a year, someone other than the person who runs vetting should test whether it actually works: pick ten files, check each step was done in order, and compare the register to who really has keys today. The audit catches drift, such as access granted before clearance or files kept too long. Its findings feed straight into the next year's policy.

                ## Milestones
                1. Ten files sampled at random across tiers and properties.
                2. Each file checked for consent, completed checks, sign-off before access and correct retention.
                3. The register compared to the current list of key, code and system holders.
                4. A short findings note with fixes and owners sent to the principal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An audit of ten sampled vetting files and the access list is completed each year, with a findings note and named fixes."
                cadence: cyclic
              tasks:
                - "Choose an auditor who does not run vetting day to day"
                - "Run the vetting audit on ten sampled files @recurring(yearly)"
                - "Compare the register to current key and code holders"
                - "Send the findings note with fixes to the principal"
            - name: Handling a staff member's newly disclosed conviction
              description: |-
                ## Purpose
                Sooner or later a long-serving employee discloses a new charge or an old conviction surfaces on a re-check. The family's reaction will be watched by every other staff member. Following the written process, taking the lawyer's advice and deciding on relevance to the role rather than shock keeps the response fair and lawful.

                ## Milestones
                1. The disclosure recorded factually on the decision form.
                2. The employment lawyer consulted before any change to duties or employment.
                3. The person given a chance to explain, with notes kept.
                4. A decision made on relevance to the role, with any interim change to access recorded.
                5. Confidentiality kept to the named decision makers.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The case has a completed decision form, recorded legal advice and a decision based on relevance to the role."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the disclosure factually on the decision form"
                - "Call the employment lawyer before changing anything"
                - "Meet the staff member to hear their explanation"
                - "Record the decision and any interim access change"
            - name: Vetting carers for an ageing parent
              description: |-
                ## Purpose
                Carers for an elderly parent work alone in the home, often with access to medicines, bank cards and a person who may not notice or report harm. Families under pressure after a fall or a diagnosis tend to accept whoever an agency sends. Applying tier one checks, verifying care qualifications and setting simple financial safeguards protects the parent without delaying care for weeks.

                ## Milestones
                1. Each carer's tier one checks completed, including any check for work with vulnerable adults where it exists.
                2. Care qualifications and agency registration verified.
                3. Clear rules on handling the parent's money, cards and valuables agreed with the carer.
                4. A family member named to review bank statements and visit unannounced from time to time.

                ## Notes
                Ask the agency whether its carers are employed or self-employed, since that changes who carries the vetting duty.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every carer for the parent has completed tier one checks and verified qualifications, with written money rules and a named family reviewer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the care agency for evidence of each carer's checks"
                - "Verify care qualifications and registration"
                - "Agree written rules on the parent's money and valuables"
                - "Name a family member to review statements and visit"
            - name: Checking tutors, coaches and activity instructors
              description: |-
                ## Purpose
                Private tutors, sports coaches, music teachers and holiday camp instructors spend regular one-to-one time with the children, yet parents often hire them from a group chat recommendation. A light but consistent check, child safeguarding clearance where available, two references and a rule that sessions are visible or in shared spaces, matches the risk. Re-confirming each school year keeps it current.

                ## Milestones
                1. A list of every tutor, coach and instructor who sees the children regularly.
                2. Child safeguarding clearance or the local equivalent verified for each.
                3. Two references checked for anyone who teaches one-to-one.
                4. Simple rules agreed: sessions in shared spaces or with doors open, no private messaging with the children.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every regular tutor, coach and instructor has verified safeguarding clearance and references on file, re-confirmed this school year."
                cadence: cyclic
              tasks:
                - "List every tutor and coach who sees the children regularly"
                - "Ask each for safeguarding clearance and two referees"
                - "Agree session rules with each tutor and the children"
                - "Re-confirm checks for each tutor and coach before the school year @recurring(yearly)"
            - name: First housekeeper vetting for a new homeowner
              description: |-
                ## Purpose
                New homeowners usually hand their first key to a housekeeper or cleaner, often the first stranger given one, and rarely have a house manager, a provider or a policy. A simple, low-cost routine covering identity, right to work, two references and a basic record check where lawful, plus a key and alarm code that can be changed, is enough at this scale. It sets the habit before the household grows.

                ## Milestones
                1. Identity and right to work seen in person and copied.
                2. Two previous employers called.
                3. A basic record check obtained where lawful, with consent.
                4. A separate alarm code issued that can be removed without affecting the family's own.
                5. A short note of the checks kept in a secure folder.

                ## Notes
                If you hire through a cleaning company, ask for its vetting evidence instead of checking yourself.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The new housekeeper has verified identity, two called references and a lawful basic check on file before receiving a key."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "See and copy the housekeeper's identity and work documents"
                - "Call two previous employers with three short questions"
                - "Order a basic record check with signed consent where lawful"
                - "Set up a separate alarm code before handing over a key"
            - name: Seasonal and holiday home staff hired locally
              description: |-
                ## Purpose
                Holiday homes in the Caribbean, the Alps or a coastal town are often staffed by local people hired each season, sometimes through a property manager, with checks that are hard to run from abroad. Starting vetting early, using a local provider or the property manager under written standards, and keeping inventories of valuables makes the seasonal opening safer. The property is empty much of the year, which raises its own risks.

                ## Milestones
                1. Seasonal roles and their tiers listed for each holiday home.
                2. A local route for checks agreed, either a local provider or the property manager under written standards.
                3. Checks for returning staff refreshed and new staff checked before the season opens.
                4. An inventory of valuables taken at opening and closing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each season opens, every seasonal worker at the holiday home has current checks on file and an opening inventory is signed."
                cadence: cyclic
              tasks:
                - "List seasonal roles and tiers for each holiday home"
                - "Agree written vetting standards with the property manager"
                - "Start seasonal vetting six weeks before each opening @recurring(yearly)"
                - "Take a signed inventory of valuables at opening and closing"
            - name: Live-in staff, partners and overnight visitors
              description: |-
                ## Purpose
                Live-in staff have the deepest access of all, and their partners, children or visitors may end up on the property too, usually unchecked. A clear, respectful rule on who may stay overnight, what notice is needed and whether long-term partners are introduced and checked avoids awkward discoveries. It protects the staff member's private life while keeping the household safe.

                ## Milestones
                1. A written rule on overnight visitors, agreed with the lawyer and included in live-in contracts.
                2. A decision on whether long-term partners who stay regularly are asked for consent to basic checks.
                3. Visitor names logged for overnight stays.
                4. The rule explained kindly to every live-in staff member.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written overnight visitor rule is in every live-in contract and has been explained to each live-in staff member."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a short overnight visitor rule for live-in staff"
                - "Ask the lawyer whether partners may be asked for checks"
                - "Add the rule to live-in contracts at the next update"
                - "Explain the rule to each live-in staff member in person"
            - name: Checks for staff who travel with the family
              description: |-
                ## Purpose
                Nannies who fly with the children, drivers who accompany the family abroad and assistants on business trips must meet the destination's entry rules and, sometimes, its own checks for working with children. A record valid at home may not satisfy another country, and staff with gaps in their documents can be refused entry. Checking this before trips avoids a stranded child or a staff member left at the border.

                ## Milestones
                1. A list of staff who travel with the family and the usual destinations.
                2. Passport validity, visa needs and any destination checks noted per person.
                3. A consent letter for staff travelling alone with the children prepared where destinations expect one.
                4. Emergency contacts and copies of documents held by the office for each trip.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each travelling staff member has recorded passport, visa and destination check status, and a child travel consent letter exists where needed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List staff who travel with the family and usual destinations"
                - "Record passport expiry and visa needs per person"
                - "Prepare a consent letter for staff travelling alone with the children"
                - "Give the office copies of documents before each trip"
            - name: Spotting changes in behaviour after hiring
              description: |-
                ## Purpose
                Most insider incidents in wealthy households involve people who passed their checks but whose circumstances changed: debt, addiction, a new partner with bad intentions or resentment over pay. Managers who know the quiet warning signs, and have a discreet, fair way to raise them, catch problems long before a re-check would. This is about care and attention, not surveillance.

                ## Milestones
                1. A short list of warning signs, such as unexplained wealth, unusual interest in family movements, requests for access beyond the role or sudden secrecy.
                2. Managers briefed on how to raise a concern with the named decision maker.
                3. A rule that concerns are recorded factually and handled fairly, never by gossip.
                4. A link to support, such as an employee assistance service, for staff in difficulty.

                ## Notes
                Covert monitoring of staff is unlawful in many places. Ask the lawyer before any monitoring beyond normal access logs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Managers at each property have been briefed on warning signs, and a quarterly check-in with the decision maker is held and recorded."
                cadence: rolling
              tasks:
                - "Write a short list of behaviour changes worth noticing"
                - "Brief managers on raising concerns with the decision maker"
                - "Hold a discreet check-in with each manager on staff concerns @recurring(quarterly)"
                - "Find a staff support service to offer people in difficulty"
            - name: Enhanced checks for senior office staff
              description: |-
                ## Purpose
                A head of office, controller or chief investment officer can move money, sign documents and see the whole family's affairs, so the damage from a bad hire is far larger than in the household. Enhanced checks cover directorships, litigation, regulatory history, sanctions and politically exposed person screening, adverse media and verified professional qualifications. Repeating the sanctions and media screen quarterly catches new problems early.

                ## Milestones
                1. An enhanced check list for senior roles agreed with the lawyer and provider.
                2. Professional qualifications and regulatory history verified with the issuing bodies.
                3. Directorships, litigation and insolvency records searched in each relevant country.
                4. Sanctions, politically exposed person and adverse media screening completed and scheduled for repeat.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every senior office employee has completed enhanced checks, and sanctions and adverse media screening has been repeated each quarter."
                cadence: rolling
              tasks:
                - "Agree the enhanced check list with the provider and lawyer"
                - "Verify each senior employee's regulatory and qualification records"
                - "Search directorships and litigation in each relevant country"
                - "Rerun sanctions and adverse media screening on senior staff @recurring(quarterly)"
            - name: Vetting individual security and protection officers
              description: |-
                ## Purpose
                Security officers and close protection operatives know the family's routines, routes and weaknesses better than anyone, and claims of military or police service are among the most commonly inflated on CVs. Checking each individual's security licence, service record and firearms authorisation where relevant, even when hired through a firm, is essential. Licences also lapse and must be re-verified.

                ## Milestones
                1. Each security officer's licence verified against the regulator's public register where one exists.
                2. Claimed military or police service verified through official channels or the provider.
                3. Firearms authorisations confirmed where the role involves weapons and local law permits it.
                4. The security firm's own vetting evidence obtained for each individual placed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each security officer working for the family has a verified licence, verified service history and firm vetting evidence on file."
                cadence: rolling
              tasks:
                - "List every security officer and protection operative working for the family"
                - "Request service record verification for claimed military or police careers"
                - "Collect the security firm's vetting evidence for each person"
                - "Verify security licences against the regulator's register @recurring(quarterly)"
            - name: One vetting standard across several countries
              description: |-
                ## Purpose
                Families with homes in the Bahamas, London and New York, and staff who move between them, end up with three vetting practices unless someone sets one standard. A common baseline, with local variations agreed by each local lawyer, means a nanny transferring from one home to another does not arrive with a weaker check. It also lets one register cover everyone.

                ## Milestones
                1. A comparison of current vetting practice at each property.
                2. One baseline standard per tier, with local variations noted where the law requires.
                3. A rule for staff who transfer between countries: which checks must be redone locally.
                4. A single register covering staff in every country.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single baseline vetting standard with documented local variations applies at every property, and one register covers all staff."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each property manager how vetting is done there today"
                - "Ask the agent to compare the answers against the tier table"
                - "Write the baseline standard with local variations"
                - "Set the rule for checks redone when staff transfer"
            - name: Vetting review after a theft or leak
              description: |-
                ## Purpose
                When jewellery goes missing, photos of the house appear online or a family matter reaches the press, the first question is often whether vetting failed. A calm, structured review, run with the lawyer and a security adviser, looks at who had access, whether checks were complete and what to change, without a witch hunt that drives good staff away. Police matters stay with the police.

                ## Milestones
                1. A factual timeline and list of who had access at the relevant time.
                2. Vetting files for those people checked for completeness against the policy.
                3. Gaps in policy or practice identified and written up.
                4. Changes agreed and added to the policy, with staff informed fairly.

                ## Notes
                Do not question staff about a possible crime without the lawyer's advice, and preserve any evidence for the police.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written review of the incident lists who had access, any vetting gaps found and the policy changes made as a result."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call the lawyer before speaking to any staff about the incident"
                - "Write a factual timeline and list of who had access"
                - "Check each relevant vetting file against the policy"
                - "Record the gaps found and the policy changes agreed"
            - name: Giving references for former staff
              description: |-
                ## Purpose
                Other families and employers will ring for references on people who leave, and what is said can create legal exposure or reveal private details about the household. A rule on who gives references, what they confirm and what they never discuss protects the family and treats former staff fairly. It is the mirror image of the reference calls the family makes.

                ## Milestones
                1. One or two named people allowed to give references.
                2. A standard reference format confirming dates, role and, where agreed, a fair summary of performance.
                3. A rule that references never describe the family's homes, routines or private matters.
                4. Each reference given logged with date and recipient.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written reference rule names who may give references and what they cover, and every reference given is logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name who may give references for former staff"
                - "Draft a standard reference format with the lawyer"
                - "Tell all staff to pass reference requests to the named people"
                - "Start a log of references given"
            - name: Vetting outsourced IT and bookkeeping personnel
              description: |-
                ## Purpose
                The IT contractor who manages the family's devices and the outsourced bookkeeper who reconciles bank accounts may have more access to sensitive information than any household employee, yet they are often treated as vendors rather than people to vet. Asking their firms for named individuals and evidence of checks, and limiting access to those people, closes a gap many security reviews find. Repeating it yearly catches staff turnover at the firm.

                ## Milestones
                1. A list of outsourced firms with access to family systems, accounts or documents.
                2. Named individuals at each firm who hold that access.
                3. Vetting evidence received for each named individual, or extra checks agreed.
                4. Access restricted to named individuals only, with the firm required to notify changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every individual at outsourced IT and bookkeeping firms with access to family data is named and has vetting evidence on file."
                cadence: cyclic
              tasks:
                - "List outsourced firms with access to family systems or accounts"
                - "Ask each firm to name the individuals who hold access"
                - "Request vetting evidence for each named individual"
                - "Confirm the named individuals and their checks with each firm @recurring(yearly)"
---

# Staff Vetting and Background Checks

This area is for the parent or homeowner who lets other people into the house, the car, the children's lives and the family's paperwork, and wants to know those people are who they say they are. It starts with foundations (a map of who has access, vetting tiers, a written policy, the legal limits, a screening provider, consent, storage and decision rights), then the operating routines of pre-start checks, reference calls, identity checks, re-checks and contractor control, the skills of reading reports and spotting fraud, decisions on credit checks, adverse findings and long-serving staff who were never checked, dated moments such as a new nanny or a family wedding, situations for carers, tutors, seasonal homes and travel, and finally specialist work on senior office staff, security personnel and several countries.

What repeats is a weekly look at open vetting cases and the contractor list, a monthly update of the vetting register and licence expiries, quarterly agency evidence, provider and sanctions reviews, and a yearly cycle of criminal record refreshes, staff declarations and a programme audit. The Risk register, Vendor, Operational checklist and Compliance control templates pair with the access map, the screening provider, the pre-start checklist and the vetting register. Background check law differs sharply by country and sometimes by state, so agree the policy, consent forms and any decision based on a finding with an employment lawyer where the staff work. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
