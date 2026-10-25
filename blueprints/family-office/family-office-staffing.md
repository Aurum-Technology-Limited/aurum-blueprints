---
id: family-office.family-office-staffing
name: Family Office Staffing
description: "A family office team built on purpose: the work mapped, roles defined, the head of office and controller hired well, pay and incentives set fairly, and clear lines between staff and the family."
category: personal
version: 1.0.0
tags: [family-office, family-office-staffing, parent, manager, hiring, head-of-office, compensation, executive-search]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - vendor
    - onboarding-30-60-90
    - one-on-one
    - development-plan
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Office Staffing
          description: "Hiring the family office team: head of office, CFO or controller, investment and admin roles, pay and incentives, and boundaries with the family."
          projects:
            - name: Inventory of work the family office must do
              description: |-
                ## Purpose
                Before hiring anyone, list every recurring job the family's affairs already generate: bill payment, bank reconciliations, tax filings, property oversight, trustee liaison, investment reporting, travel and diary management. Families that skip this step usually hire a senior generalist and then discover half the work is clerical. A written inventory with rough hours per month is the brief every later staffing decision rests on.

                ## Milestones
                1. Every recurring task across entities, properties and family members listed in one table.
                2. Each task tagged with who does it today: a family member, an adviser, a bank or nobody.
                3. Estimated hours per month and required skill level noted against each task.
                4. Tasks grouped into four to six natural functions such as finance, investments, administration and property.

                ## Notes
                Ask the accountant, the private banker and whoever pays the bills today. They see work the family never notices until it stops.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A work inventory table listing every recurring task with current owner, monthly hours and skill level, grouped into named functions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the bills, filings and reports that went out in the last three months"
                - "Ask the accountant and banker which requests they handle for the family"
                - "Estimate monthly hours and skill level for each task"
                - "Group the tasks into four to six functions and total the hours"
            - name: Insource or outsource each office function
              description: |-
                ## Purpose
                Not every function justifies a salaried hire: a small office may employ a controller and an assistant and buy tax, legal, investment research and payroll from outside firms. Deciding function by function, with cost, confidentiality and control weighed openly, prevents an office that is either overstaffed or wholly dependent on advisers who also sell products.

                ## Milestones
                1. Each function from the work inventory scored on volume, sensitivity, specialist skill and cost.
                2. An in-house, outsourced or hybrid decision recorded for every function.
                3. Indicative annual cost of the in-house option set beside the outsourced quotes.
                4. The family principal's sign-off on the resulting staffing model.

                ## Notes
                Confidentiality is often the deciding factor. Work touching family disputes, health or security tends to stay in house even when it is cheaper to buy.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed staffing model stating for every function whether it is in house, outsourced or hybrid, with the cost comparison attached."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Score each function on volume, sensitivity, specialist skill and cost"
                - "Request indicative quotes from two outsourced providers for the largest functions"
                - "Estimate the loaded annual cost of hiring for each function"
                - "Present the in-house, outsourced or hybrid choice to the principal for sign-off"
            - name: Target organisation chart for the office
              description: |-
                ## Purpose
                Drawing one chart for today and one for three years from now shows which roles to hire first and which can wait until assets, entities or family members grow. Drawing both before the first hire also settles who reports to whom, so a strong early hire does not quietly become a bottleneck for every later one.

                ## Milestones
                1. A current-state chart showing every person and firm doing office work.
                2. A three-year chart with each planned role, its reporting line and its start year.
                3. The hiring order for the first three roles agreed and written beside the chart.
                4. Both charts stored with the staffing model and dated.

                ## Notes
                Most single-family offices start with a head of office or controller plus one administrator. Hiring the investment function first, before anyone can account for what exists, is a common and expensive mistake.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Current and three-year organisation charts with reporting lines and a written order for the first three hires, dated and filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw who does office work today, including outside firms"
                - "Sketch the three-year chart with planned roles and reporting lines"
                - "Decide and write down the order of the first three hires"
                - "File both charts with the staffing model"
            - name: Total staff compensation envelope
              description: |-
                ## Purpose
                Pay for a professional team is usually the largest line in a family office budget, and agreeing the ceiling before talking to candidates keeps offers consistent and defensible. The envelope covers base salaries, bonus pools, pensions, benefits, employer taxes and search fees, set against the scale of what the office manages.

                ## Milestones
                1. A loaded cost per planned role covering salary, bonus, benefits and employer contributions.
                2. One-off hiring costs such as search fees and relocation estimated separately.
                3. A total annual envelope agreed by the principal and recorded with its assumptions.
                4. A yearly review point set so the envelope moves with the team.

                ## Notes
                Keep the envelope as a staffing number and pass it to whoever owns the wider office budget, so the two do not drift apart.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written annual staff compensation envelope with per-role loaded costs and one-off hiring costs, approved by the principal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect salary ranges for each planned role from one survey or recruiter"
                - "Add employer taxes, pension and benefits to get a loaded cost per role"
                - "Estimate search fees and relocation as a separate one-off line"
                - "Review the staff compensation envelope against the actual team @recurring(yearly)"
            - name: Family principal and decision rights over staff
              description: |-
                ## Purpose
                Staff in a family office often take instructions from several relatives, and conflicting requests are the most common reason good people leave. Naming one principal, or a small staffing committee, who hires, sets pay, approves priorities and hears complaints gives the team a single line of accountability and gives the family one place to raise concerns.

                ## Milestones
                1. One named principal or committee with authority over hiring, pay and dismissal.
                2. A short list of decisions the head of office may take alone.
                3. A rule for how other family members route requests to staff.
                4. The decision rights shared with every member of staff in writing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page note naming who holds staff authority, what the head of office decides alone and how family requests reach staff, given to every employee."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the senior generation who will act as principal for staff"
                - "List the decisions the head of office may take without asking"
                - "Write the rule for how other relatives make requests of staff"
                - "Share the decision rights note with each employee"
            - name: Employing entity and staff contracts
              description: |-
                ## Purpose
                Someone has to be the employer: a family office company, the family holding company, a trust company or an individual. The choice affects payroll registration, liability, who can sign contracts and how costs are charged to family members. Settling it with an employment lawyer before the first offer means every contract is issued by the right entity on a consistent template.

                ## Milestones
                1. The employing entity chosen with the employment lawyer and tax adviser, with reasons noted.
                2. The entity registered as an employer with the tax and social security authorities.
                3. A standard contract template covering duties, hours, confidentiality, notice and restrictive terms.
                4. Every current staff member on a signed contract from the chosen entity.

                ## Notes
                Staff paid informally from a family member's personal account are a recurring problem in audits and disputes. Move them onto proper contracts early.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One named employing entity registered for payroll, a lawyer-approved contract template and signed contracts for every staff member."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a meeting with the employment lawyer on which entity should employ staff"
                - "Confirm the entity's employer registration with the tax authority"
                - "Have the lawyer prepare a standard office employment contract"
                - "Move any informally paid staff onto signed contracts"
            - name: Role profiles for every office position
              description: |-
                ## Purpose
                A role profile sets out purpose, responsibilities, decision limits, required qualifications and how success is measured, and it doubles as the job advert, the interview guide and the basis of each review. Writing them before recruiting stops the family hiring for charm and then arguing later about what the job was.

                ## Milestones
                1. A one-page profile for each planned role, from head of office to administrator.
                2. Required and preferred skills for each role set out in a single matrix.
                3. Three to five measures of success per role written in checkable terms.
                4. Each profile approved by the principal and filed with the organisation chart.

                ## Notes
                Start from the **Skills matrix** template to compare skills across roles and spot gaps nobody is hired to cover.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved one-page profiles for every planned role, each with success measures, plus a skills matrix covering the whole team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the head of office profile first using the work inventory"
                - "Write success measures for each role in checkable terms"
                - "Fill in the skills matrix across all planned roles"
                - "Get the principal's approval and file the profiles"
            - name: Delegated authority and payment limits for staff
              description: |-
                ## Purpose
                Once staff pay bills and instruct banks, the family needs written limits on who can approve what amount, which payments need a second signatory and which always need a family member. Clear delegated authority protects staff from pressure as much as it protects the family from error or fraud.

                ## Milestones
                1. A delegated authority table listing each role's approval limits by payment type.
                2. Dual approval required above a set threshold and for any new payee.
                3. Bank mandates and system permissions updated to match the table.
                4. Every staff member's signed acknowledgement of their limits on file.

                ## Notes
                Any change to a payee's bank details should be confirmed by phone on a known number, whatever the authority table says.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed delegated authority table matched by bank mandates, with dual approval above a stated threshold and staff acknowledgements filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every payment type staff currently make or approve"
                - "Set approval limits and a dual approval threshold for each role"
                - "Ask each bank to align signatory mandates with the table"
                - "Review the delegated authority table with the principal @recurring(yearly)"
            - name: Confidentiality and conduct code for office staff
              description: |-
                ## Purpose
                Office staff see wills, trust deeds, medical bills and family arguments. A short code covering confidentiality, gifts from family members or vendors, personal social media, speaking to the press and treating each branch of the family evenly sets expectations from day one and gives the head of office something to point to when a line is crossed.

                ## Milestones
                1. A two-page code covering confidentiality, gifts, media, social media and even-handed treatment of relatives.
                2. The code reviewed by the employment lawyer and linked to contracts.
                3. Every staff member's signed acknowledgement filed.
                4. A yearly re-acknowledgement built into the review cycle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed staff conduct code signed by every employee, with yearly re-acknowledgement scheduled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a two-page staff conduct code from your headings"
                - "Send the draft to the employment lawyer for review"
                - "Collect signed acknowledgements from each staff member"
                - "Collect yearly re-acknowledgements of the conduct code @recurring(yearly)"
            - name: Hiring the head of family office
              description: |-
                ## Purpose
                The head of office runs the team, manages advisers and becomes the family's day-to-day counterpart, so a poor choice costs years, not months. A deliberate search with a written profile, a long list of 15 to 20 candidates, structured interviews, a case exercise on a real but anonymised family problem and thorough references gives the best chance of someone the whole family trusts.

                ## Milestones
                1. The role profile, pay range and reporting line approved before any candidate is approached.
                2. A long list narrowed to a shortlist of three to five interviewed candidates.
                3. Each finalist scored by the same panel on the same criteria, including a case exercise.
                4. Offer accepted and a start date agreed, with references and checks completed.

                ## Notes
                Meeting the family socially is part of the process, but do not let a pleasant dinner outweigh the structured scores.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A head of office with a signed contract and start date, chosen from at least three scored finalists against an approved profile."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the head of office profile and pay range with the principal"
                - "Agree the interview panel and scoring criteria before the search starts"
                - "Prepare an anonymised case exercise drawn from a real family issue"
                - "Run final interviews and record each panel member's scores separately"
            - name: Hiring a CFO or controller
              description: |-
                ## Purpose
                Accurate books across entities, properties and trusts are the base for reporting, tax and every investment decision, and the controller is usually the second hire. Deciding whether the office needs a strategic CFO or a hands-on controller, and testing candidates on multi-entity consolidation, prevents a mismatch that leaves the head of office doing the accounts.

                ## Milestones
                1. A decision on CFO or controller recorded, with the scope each would carry.
                2. Candidates tested on a practical exercise in multi-entity reporting.
                3. Two references taken from former employers with similar complexity.
                4. Offer accepted and the first close cycle owned by the new hire within 90 days of starting.

                ## Notes
                Experience in a fund administrator, a trust company or a multi-entity group often matters more than a large-company title.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A controller or CFO in post, chosen after a practical exercise and two references, who owns the monthly close within 90 days."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Decide with the head of office whether the role is CFO or controller"
                - "Build a practical consolidation exercise from anonymised entity data"
                - "Take two references from employers with similar entity complexity"
                - "Set the date by which the new hire owns the monthly close"
            - name: Whether to hire in-house investment staff
              description: |-
                ## Purpose
                Hiring a chief investment officer or analyst is the most expensive and most tempting hire, yet many families are better served by an outsourced adviser overseen by a capable head of office. Weighing in-house investment staff against assets, complexity, direct deals and the cost of a full investment team gives the family an honest answer before a recruiter suggests one.

                ## Milestones
                1. The investment work the office needs done listed: oversight, research, direct deals, reporting.
                2. Costs of an in-house CIO, an analyst and an outsourced adviser compared over five years.
                3. Conflicts of interest under each option written down.
                4. A recorded decision with the conditions that would reopen it.

                ## Notes
                This project is about staffing, not about what to invest in. Strategy questions belong with the investment committee and its advisers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A five-year cost and conflicts comparison of in-house and outsourced investment staffing, with a recorded decision and reopening triggers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the investment tasks the office needs covered in the next three years"
                - "Price an in-house CIO, an analyst and an outsourced adviser over five years"
                - "Note the conflicts each option creates"
                - "Record the decision and the triggers that would reopen it"
            - name: Executive assistant and office administrator hire
              description: |-
                ## Purpose
                Capable administrators free the head of office and controller from scheduling, filing, couriers and supplier calls, and are often the people relatives contact most. Hiring for discretion, organisation and steady judgement under pressure matters more than industry background.

                ## Milestones
                1. A profile separating executive assistant duties from general office administration.
                2. A short practical test covering scheduling conflicts, a confidential document and a supplier problem.
                3. A shortlist interviewed by the head of office and one family member.
                4. Offer accepted and a first-week plan ready.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An administrator or executive assistant hired after a practical test, with a written first-week plan ready on the start date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Decide whether the role supports the office, the principal or both"
                - "Write a 30-minute practical test with three realistic scenarios"
                - "Interview the shortlist with the head of office and one family member"
                - "Prepare a first-week plan before the start date"
            - name: Choosing and briefing an executive search firm
              description: |-
                ## Purpose
                Senior family office candidates rarely apply to adverts, and a search firm with a real family office practice can reach them discreetly. Comparing two or three firms on relevant placements, fee terms, guarantee periods and confidentiality, then briefing the winner properly, saves months and protects the family's name during the search.

                ## Milestones
                1. Two or three firms met, each with recent family office placements described.
                2. Fee structure, retainer stages, guarantee period and off-limits rules compared in writing.
                3. One firm appointed under a signed engagement letter with confidentiality terms.
                4. A written brief covering profile, pay range, culture and family dynamics handed over.

                ## Notes
                Start from the **Vendor** template to keep the firm's terms, contacts and progress reports in one record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A search firm appointed under a signed engagement letter, chosen from at least two compared on placements, fees and guarantee terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask peers or advisers for two or three firms with family office placements"
                - "Compare fees, retainer stages and guarantee periods in one table"
                - "Sign an engagement letter with confidentiality terms"
                - "Hand over a written brief including how the family works together"
            - name: Structured interviews and case exercises for senior hires
              description: |-
                ## Purpose
                Unstructured conversations favour candidates who are good company, not those who are good at the job. A fixed question set tied to the role profile, a scoring sheet, and a case exercise such as reconciling a messy entity list or handling a dispute between two siblings' requests give the panel comparable evidence on every finalist.

                ## Milestones
                1. A bank of eight to ten questions per senior role mapped to the profile.
                2. A scoring sheet with a one-to-five scale and written anchors for each score.
                3. Two case exercises prepared from anonymised family situations.
                4. Panel members briefed to score independently before discussing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An interview kit per senior role with mapped questions, anchored scoring sheets and two anonymised case exercises, used by a briefed panel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map eight to ten interview questions to each senior role profile"
                - "Write score anchors for what a one, three and five look like"
                - "Anonymise two real family situations into case exercises"
                - "Brief the panel to score independently before comparing notes"
            - name: Offer letters and negotiation for senior hires
              description: |-
                ## Purpose
                Expect a senior candidate to compare the family's offer with a bank or fund package and ask about bonus, deferred pay, notice, restrictive covenants and what happens if the family sells or restructures. Preparing answers and a lawyer-checked offer template before the final round avoids improvised promises that become disputes later.

                ## Milestones
                1. A standard senior offer letter reviewed by the employment lawyer.
                2. The negotiable and non-negotiable terms agreed by the principal in advance.
                3. Answers prepared for questions on bonus, change of control and job security.
                4. Every senior offer issued in writing with the agreed terms only.

                ## Notes
                Never agree a bonus percentage or equity-like reward verbally at dinner. Put everything through the offer letter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed senior offer letter template plus a written list of negotiable terms, used for every senior offer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the employment lawyer for a senior offer letter template"
                - "Agree with the principal which terms are negotiable"
                - "Write short answers to likely questions on bonus and change of control"
                - "Issue each senior offer in writing only"
            - name: Onboarding plan for each new office hire
              description: |-
                ## Purpose
                New staff need to learn the entity chart, the advisers, the family's preferences and the unwritten rules about which relatives to call and when. A written 30, 60 and 90 day plan with introductions, document access and early deliverables means the hire is useful in weeks and the family sees progress rather than wondering what they are paying for.

                ## Milestones
                1. A plan per hire covering introductions, systems access and reading for the first 30 days.
                2. Two or three early deliverables set for days 60 and 90.
                3. Meetings with key advisers and family members booked before the start date.
                4. A 90-day check-in held and its outcome recorded.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Include a short, kind briefing on family history and sensitivities; it prevents most early missteps.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each new hire has a written 30/60/90 plan before day one and a recorded 90-day check-in."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Prepare the 30/60/90 plan before the start date"
                - "Book introductions with the main advisers and family members"
                - "Set up systems access and the document reading list"
                - "Hold and record the 90-day check-in"
            - name: Monthly one-to-one with the head of office
              description: |-
                ## Purpose
                One standing hour each month between the principal and the head of office keeps priorities aligned, surfaces staff issues early and stops decisions being made in passing at family events. A consistent agenda covering priorities, people, risks and requests turns a vague relationship into a managed one.

                ## Milestones
                1. A fixed monthly slot in both diaries.
                2. A standard agenda covering priorities, staff, risks, family requests and decisions needed.
                3. Brief notes kept after each meeting with actions and owners.
                4. Quarterly objectives reviewed and reset at every third meeting.

                ## Notes
                Start from the **1:1** template to keep notes and actions in one running page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve recorded one-to-ones a year between the principal and head of office, each with notes and actions."
                cadence: rolling
              tasks:
                - "Agree a fixed monthly slot with the head of office"
                - "Hold the monthly one-to-one and note actions @recurring(monthly:12)"
                - "Review and reset the head of office's quarterly objectives @recurring(quarterly)"
                - "Share a short standard agenda before the first meeting"
            - name: Annual pay benchmark for office roles
              description: |-
                ## Purpose
                Family office pay drifts: early hires fall behind the market while later hires are brought in above them, and the unfairness surfaces at bonus time. A yearly benchmark of every role against a family office compensation survey or a recruiter's data keeps pay defensible and gives the principal evidence for each change.

                ## Milestones
                1. One recognised family office compensation survey or recruiter dataset chosen.
                2. Each role matched to the nearest survey role, adjusted for size and location.
                3. A table showing each person's pay against the survey median and range.
                4. Proposed adjustments approved within the compensation envelope.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly table comparing every office role's pay with survey data, with approved adjustments recorded."
                cadence: cyclic
              tasks:
                - "Choose the compensation survey or recruiter data you will use each year"
                - "Match each role to the nearest survey role"
                - "Benchmark every office salary against the survey @recurring(yearly)"
                - "Send proposed adjustments to the principal for approval"
            - name: Annual performance reviews for office staff
              description: |-
                ## Purpose
                Professionals expect to know how they are doing, and a family office without reviews tends to keep weak performers too long and lose strong ones quietly. A yearly review against role profile measures, with a mid-year check, gives each person written feedback and gives the principal a record for pay and promotion decisions.

                ## Milestones
                1. A one-page review form tied to each role's success measures.
                2. Self-assessment and manager assessment completed for every staff member.
                3. A review meeting held and agreed objectives recorded for the next year.
                4. A mid-year check-in held for every person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every office staff member has a completed yearly review with agreed objectives and a recorded mid-year check-in."
                cadence: cyclic
              tasks:
                - "Draft a one-page review form tied to role success measures"
                - "Run the yearly review round for all office staff @recurring(yearly)"
                - "Hold short check-ins on each person's objectives @recurring(quarterly)"
                - "File each completed review in the staff record"
            - name: Quarterly workload and capacity review
              description: |-
                ## Purpose
                Workload in a family office spikes with property purchases, deaths, liquidity events and tax deadlines, and a team sized for a quiet year burns out in a busy one. Reviewing hours, backlog and overtime each quarter shows when to add help, buy in a contractor or drop low-value work before someone resigns.

                ## Milestones
                1. A simple quarterly measure of hours, backlog and overtime per person.
                2. Known peaks for the next two quarters listed.
                3. A decision each quarter: hold, add temporary help, outsource or reprioritise.
                4. Decisions logged so patterns show up over a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four recorded capacity reviews a year, each ending in a hold, add, outsource or reprioritise decision."
                cadence: rolling
              tasks:
                - "Agree three workload measures with the head of office"
                - "Review workload, backlog and upcoming peaks with the head of office @recurring(quarterly)"
                - "List the known busy periods for the next two quarters"
                - "Log each quarter's capacity decision"
            - name: Family request log and boundaries review
              description: |-
                ## Purpose
                When staff are asked by a cousin to book a holiday, by an aunt to chase a builder and by the principal to prepare a board pack, someone's request gets dropped and someone feels slighted. A log of requests by family member, reviewed monthly, shows where boundaries are being stretched and gives the head of office facts rather than complaints to bring to the principal.

                ## Milestones
                1. A shared log recording each family request, who made it and the time spent.
                2. A written list of services staff provide to each branch and what is out of scope.
                3. A monthly review of the log by the head of office.
                4. Any repeated out-of-scope pattern raised with the principal within the month.

                ## Notes
                Time spent for individual relatives may need to be charged back to them. Pass the totals to whoever runs cost allocation rather than settling it inside the staffing team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A family request log kept for every request, reviewed monthly, with out-of-scope patterns raised to the principal."
                cadence: rolling
              tasks:
                - "Set up a shared request log with requester, task and time columns"
                - "Write the in-scope and out-of-scope services for each branch"
                - "Review the family request log for boundary problems @recurring(monthly:20)"
                - "Raise repeated out-of-scope requests with the principal"
            - name: Staff handbook upkeep
              description: |-
                ## Purpose
                A short handbook covering hours, leave, expenses, remote working, travel with the family, IT use and grievances answers most staff questions without involving the principal. Revisiting it every year keeps it in line with changing employment law and the office's own practice.

                ## Milestones
                1. A handbook of no more than 15 pages, reviewed by the employment lawyer.
                2. Sections on travelling with the family and out-of-hours contact included.
                3. A version date and change list at the front.
                4. A yearly review completed and staff told what changed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated, lawyer-reviewed staff handbook of 15 pages or fewer, reviewed yearly with changes communicated to staff."
                cadence: cyclic
              tasks:
                - "Gather the policies staff currently follow by habit"
                - "Draft missing sections on family travel and out-of-hours contact"
                - "Review the handbook with the employment lawyer @recurring(yearly)"
                - "Tell staff what changed in each new version"
            - name: Key person cover and deputies
              description: |-
                ## Purpose
                In a team of three or four, one resignation or illness can stop payments, filings and family reporting overnight. Naming a deputy for every critical task, writing short procedures and testing the cover each quarter means the office keeps running when someone is away.

                ## Milestones
                1. Every critical task listed with a named primary and deputy.
                2. A one-page procedure for each task the deputy can follow cold.
                3. Bank, system and adviser access in place for each deputy.
                4. One cover test run each quarter with any gaps fixed.

                ## Notes
                Where the team is too small for internal deputies, an outside accountant or outsourced provider can be the named deputy under a standby agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every critical task has a named deputy with written procedures and access, tested at least four times a year."
                cadence: rolling
              tasks:
                - "List the critical tasks that would stop if one person left tomorrow"
                - "Name a deputy for each and write a one-page procedure"
                - "Check each deputy has the bank and system access they need"
                - "Run a cover test on one critical task @recurring(quarterly)"
            - name: Training and qualifications budget for staff
              description: |-
                ## Purpose
                Family office staff often work alone in their specialism and fall behind on tax changes, reporting standards and technology unless training is planned. A yearly budget with a development plan per person, covering courses, professional qualifications and peer networks, keeps skills current and is a retention tool in its own right.

                ## Milestones
                1. A yearly training budget per person agreed within the compensation envelope.
                2. A development plan for each staff member naming courses or qualifications.
                3. Continuing education requirements for each professional qualification noted.
                4. A yearly record of training completed against the plan.

                ## Notes
                Start from the **Development plan** template for each person. Agree upfront whether fees are repayable if someone leaves soon after a funded qualification.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each staff member has a yearly development plan with budget, and completed training is recorded against it."
                cadence: cyclic
              tasks:
                - "Ask each staff member for their training priorities for the year"
                - "Write a development plan per person within the budget"
                - "Agree a repayment rule for funded qualifications"
                - "Set the year's training budget and plans for each person @recurring(yearly)"
            - name: Staff turnover and exit interview record
              description: |-
                ## Purpose
                Families often learn why staff leave only years later, through gossip. A short exit interview held by someone other than the direct manager, plus a simple turnover record, shows whether people leave for pay, workload, family behaviour or lack of progression, and lets the principal fix causes rather than replace people.

                ## Milestones
                1. A turnover record listing each leaver, role, tenure and stated reason.
                2. A standard exit interview of six to eight questions.
                3. Exit interviews held by a neutral person, such as an outside adviser.
                4. Turnover patterns reviewed every quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A turnover record kept for every leaver, with an exit interview by a neutral person and a quarterly review of patterns."
                cadence: rolling
              tasks:
                - "Start a turnover record with role, tenure and reason columns"
                - "Write six to eight exit interview questions"
                - "Name a neutral person to hold exit interviews"
                - "Review turnover and exit themes with the principal @recurring(quarterly)"
            - name: What each family office role really does
              description: |-
                ## Purpose
                Titles such as head of office, chief of staff, controller and CIO mean different things from one family to the next. Studying how established single-family offices divide the work, through industry reports, peer conversations and a few interviews, helps a principal brief recruiters accurately and judge candidates' claims.

                ## Milestones
                1. Two or three industry reports on family office structures read and summarised.
                2. Conversations held with at least two other principals or heads of office.
                3. A one-page glossary of roles as the family will use the terms.
                4. Notes on which roles peers regret hiring early or late.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of family office roles, informed by at least two reports and two peer conversations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find two industry reports on single-family office structures"
                - "Ask an adviser to introduce you to two peer families"
                - "Write a one-page glossary of the roles in your own terms"
                - "Note which hires peers made too early or too late"
            - name: Interviewing senior professionals as a principal
              description: |-
                ## Purpose
                Many principals have hired for their operating business but never for roles where they cannot judge the technical work themselves. Practising evidence-based interviewing, probing for specific examples, testing judgement and listening for how candidates talk about previous families, helps the principal contribute to a panel without dominating it.

                ## Milestones
                1. A short course or guide on structured, evidence-based interviewing completed.
                2. A list of the principal's own questions focused on judgement and discretion.
                3. One practice interview held with an adviser playing a candidate.
                4. Notes on what to listen for when candidates describe past employers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The principal has completed one interviewing course or guide and a practice interview, with their own question list written."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one short guide or course on structured interviewing"
                - "Write five questions on judgement and discretion for senior candidates"
                - "Run a practice interview with an adviser"
                - "Note the warning signs heard in how candidates describe past families"
            - name: Reading family office compensation surveys
              description: |-
                ## Purpose
                Compensation surveys report medians, quartiles and bonus ranges by role, office size and region, but they are easy to misread: a small sample in one region or a mix of single and multi-family offices can skew figures. Learning how surveys are built and how to adjust for the office's scale makes every pay conversation more grounded.

                ## Milestones
                1. One current family office compensation survey obtained.
                2. Sample size, regions and office types covered noted for each role used.
                3. The difference between median, quartile and total compensation understood.
                4. A short note on how to adjust survey figures for the office's size and location.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note on how the family will read and adjust a named compensation survey, ready for the yearly benchmark."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Obtain one current family office compensation survey"
                - "Check the sample size and regions behind each role you need"
                - "Write how you will adjust figures for office size and location"
                - "Ask a recruiter to sense-check your reading of the survey"
            - name: Managing professionals as a first-time employer
              description: |-
                ## Purpose
                Parents who have always delegated to advisers may now be the boss of a controller and an assistant, with duties around contracts, pay, leave and fair treatment. Learning the basics of managing professionals, setting expectations, giving praise and correction, and not treating staff as extended family, avoids the classic mistakes of a first-time employer.

                ## Milestones
                1. A short management guide or course for new employers completed.
                2. Three personal rules written, such as no instructions outside working hours except emergencies.
                3. Feedback from the head of office after six months on how the principal manages.
                4. One change made in response to that feedback.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The principal has completed one management guide, written three personal rules and acted on feedback from the head of office."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one practical guide on managing a small professional team"
                - "Write three personal rules for how you will treat staff"
                - "Ask the head of office for candid feedback after six months"
                - "Make and record one change in response"
            - name: Employment rules where the office sits
              description: |-
                ## Purpose
                Working time, leave, notice, termination, statutory contributions and restrictive covenants vary sharply between, for example, the Cayman Islands, Trinidad and Tobago, the UK and the US. A briefing from an employment lawyer in the office's jurisdiction gives the principal and head of office the essentials before they make offers or handle a dismissal.

                ## Milestones
                1. A one-hour briefing held with an employment lawyer in the office's jurisdiction.
                2. A two-page summary of statutory minimums, notice periods and termination rules.
                3. A list of decisions that always need legal advice before acting.
                4. The summary shared with the head of office and dated for review.

                ## Notes
                This is a briefing to know when to call the lawyer, not a replacement for advice on any specific case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated two-page summary of local employment rules from a lawyer's briefing, with a list of decisions that always need advice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a one-hour briefing with an employment lawyer in the office's country"
                - "Prepare questions on notice, termination and restrictive covenants"
                - "Write a two-page summary of the answers"
                - "List the decisions that always need legal advice first"
            - name: Giving hard feedback to a senior office executive
              description: |-
                ## Purpose
                Senior staff know the family's secrets and often have warm personal ties with the principal, which makes honest criticism feel disloyal on both sides. Practising a simple structure, the specific behaviour, its effect and the change needed, and holding the conversation in a formal setting, keeps the relationship professional and the problem fixable.

                ## Milestones
                1. A feedback structure chosen and written on one page.
                2. One rehearsal held with a trusted adviser before a difficult conversation.
                3. The conversation held in a scheduled meeting, not at a family event.
                4. Agreed changes and a follow-up date recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One difficult feedback conversation held in a scheduled meeting using a written structure, with agreed changes and a follow-up date recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the behaviour, its effect and the change needed on one page"
                - "Rehearse the conversation with a trusted adviser"
                - "Schedule the conversation in a formal meeting"
                - "Record the agreed changes and a follow-up date"
            - name: Bonus and deferred pay design for office staff
              description: |-
                ## Purpose
                Senior candidates from banks and funds expect variable pay, but a bonus tied to investment returns can encourage risk the family never wanted. Designing a bonus on agreed objectives, with deferral for senior roles and clear rules for leavers, rewards good work while keeping incentives aligned with the family's long-term interests.

                ## Milestones
                1. Bonus measures agreed per role, weighted to operational and service goals for non-investment staff.
                2. Target and maximum bonus levels set within the compensation envelope.
                3. A deferral rule and leaver terms drafted with the employment lawyer and tax adviser.
                4. A written bonus plan issued to eligible staff.

                ## Notes
                Bonuses tied to portfolio performance need care: agree them with the investment committee and take tax advice on any deferral.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bonus plan with per-role measures, target levels, deferral and leaver rules, reviewed by the lawyer and tax adviser and issued to staff."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List what each role should be rewarded for"
                - "Set target and maximum bonus levels within the envelope"
                - "Have the lawyer and tax adviser review deferral and leaver terms"
                - "Calculate and approve bonuses against agreed measures @recurring(yearly)"
            - name: Co-investment and carried interest for investment staff
              description: |-
                ## Purpose
                Investment professionals often ask to invest alongside the family or to share in profits on direct deals, which can align interests or create serious conflicts. Deciding in principle whether to offer co-investment rights or a profit share, and on what terms, before a candidate asks, keeps the answer consistent and properly documented.

                ## Milestones
                1. The options listed: none, co-investment at cost, a profit share on direct deals, or a phantom plan.
                2. Conflicts, vesting, leaver terms and tax treatment noted for each with advisers.
                3. A decision in principle recorded by the principal and investment committee.
                4. Any plan adopted documented by lawyers before it applies to anyone.

                ## Notes
                This sets staff reward terms only. It is not advice on any investment, and tax treatment differs widely by country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on investment staff co-investment or profit share, with conflicts and leaver terms noted and any plan documented by lawyers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the reward options for investment staff"
                - "Ask the tax adviser how each option is taxed for staff and family"
                - "Take the options to the investment committee for a decision in principle"
                - "Have lawyers document any plan adopted"
            - name: Retention plan for the hardest-to-replace staff
              description: |-
                ## Purpose
                In most family offices one or two people hold knowledge nobody else has: how the trusts connect, which banker to call, what the principal really wants. A written retention plan for those people, combining pay, development, recognition and honest conversations about their future, is far cheaper than a search after they resign.

                ## Milestones
                1. The two or three hardest-to-replace people named, with the reason for each.
                2. A retention conversation held with each about their goals and concerns.
                3. A plan per person covering pay, role growth and any retention award.
                4. A yearly check that each plan still fits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retention plan for each hardest-to-replace person, informed by a direct conversation and reviewed yearly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Name the two or three people the office could least afford to lose"
                - "Hold a conversation with each about their goals and concerns"
                - "Write a retention plan per person"
                - "Hold a retention conversation with each key person @recurring(yearly)"
            - name: Fractional and part-time professionals in the office
              description: |-
                ## Purpose
                Smaller offices may not need a full-time CFO, general counsel or technology lead, but it may need one for two days a week. Comparing fractional executives, part-time employees and retained advisers on cost, confidentiality, availability in a crisis and continuity helps the family fill senior gaps without overhiring.

                ## Milestones
                1. Senior roles needed for fewer than three days a week identified.
                2. Fractional, part-time and retained-adviser options compared for each.
                3. Confidentiality and availability terms agreed for any fractional hire.
                4. A decision recorded per role.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each part-time senior role, comparing fractional, part-time and adviser options on cost and availability."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Identify senior roles needed less than three days a week"
                - "Compare fractional, part-time and retained adviser costs for each"
                - "Check availability terms for an urgent family matter"
                - "Record the decision for each role"
            - name: Line between office staff and household staff
              description: |-
                ## Purpose
                Office professionals and household staff such as drivers, housekeepers and estate managers often sit under the same principal but need different contracts, managers and norms. Deciding which roles report to the office, which to the household, and who coordinates between them prevents the controller being asked to manage a chef and the house manager being asked about a trust deed.

                ## Milestones
                1. Every staff role listed and assigned to office or household.
                2. A named coordinator for matters touching both groups.
                3. Separate payroll and contract arrangements confirmed where the law requires.
                4. The division explained to both teams in writing.

                ## Notes
                Household contracts, payroll and the estate manager role have their own areas. This project draws only the boundary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list assigning every role to the office or the household, with a named coordinator and both teams informed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every paid role across the office and the homes"
                - "Assign each role to the office or the household"
                - "Name the coordinator for matters touching both"
                - "Explain the division to both teams in writing"
            - name: Replacing an underperforming head of office
              description: |-
                ## Purpose
                Removing the person who knows all the family's affairs feels risky, so families often tolerate poor performance for years. A fair process, written concerns, support and a deadline, then a managed exit if needed, with handover and interim cover arranged, protects both the family and the departing person's dignity.

                ## Milestones
                1. Specific performance concerns written down with examples.
                2. A formal improvement period agreed, with legal advice on process.
                3. Interim cover arranged for critical tasks before any exit.
                4. A decision recorded and, if leaving, a handover and settlement completed.

                ## Notes
                Take employment law advice before the first formal conversation. Secure system access and payment authority changes on the day an exit is agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A documented improvement process ending in a recorded decision, with interim cover and, where needed, a completed handover and settlement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down specific performance concerns with dated examples"
                - "Take employment law advice on a fair improvement process"
                - "Arrange interim cover for payments and reporting"
                - "Record the outcome and complete any handover"
            - name: Announcing a new head of office to family and advisers
              description: |-
                ## Purpose
                Advisers, banks and trustees need to know who now speaks for the office and what authority they hold, and relatives need to hear it from the principal rather than from the new hire's first email. A planned announcement with introductions and updated mandates gives the new head of office a clean start.

                ## Milestones
                1. A short announcement from the principal sent to each branch of the family.
                2. Letters to banks, trustees and advisers confirming the new person's authority.
                3. Introductory meetings held with the five most important outside relationships.
                4. Bank mandates and authorised contact lists updated.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Family and every key adviser, bank and trustee informed in writing of the new head of office, with mandates updated within the first month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the principal's announcement to each family branch"
                - "Write authority letters to banks, trustees and advisers"
                - "Book introductions with the five most important outside relationships"
                - "Confirm every bank mandate and contact list has been updated"
            - name: Head of office first-year review
              description: |-
                ## Purpose
                Twelve months in, the family should know whether the head of office has delivered the outcomes set at hiring and whether the role still fits the office. A formal first-year review, with input from family members, staff and key advisers, settles pay, confirms or resets the role and catches problems while they are still small.

                ## Milestones
                1. Feedback gathered from the principal, two family members, staff and two advisers.
                2. Results compared with the success measures in the role profile.
                3. A review meeting held with agreed objectives for year two.
                4. Pay and any bonus decided and recorded.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed first-year review with multi-source feedback, measured against the profile, ending in year-two objectives and a pay decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose who will give feedback on the head of office's first year"
                - "Collect feedback with the same five questions for everyone"
                - "Compare results with the role profile success measures"
                - "Hold the review meeting and record year-two objectives"
            - name: Annual team planning day
              description: |-
                ## Purpose
                Buried in daily requests, a small team rarely steps back to ask what the family will need next year: a property sale, a new trust, a child turning 18, a generational transition. A yearly planning day with the principal sets team priorities, surfaces process problems and shows staff they are trusted with the bigger picture.

                ## Milestones
                1. A date set and a one-page agenda circulated two weeks ahead.
                2. Known family events for the next 12 months listed.
                3. Three to five team priorities agreed with owners.
                4. A short summary shared with the principal and staff afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planning day held each year ending in three to five owned team priorities and a written summary."
                cadence: cyclic
              tasks:
                - "Pick a date and draft a one-page agenda"
                - "List known family events for the next twelve months"
                - "Hold the team planning day with the principal @recurring(yearly)"
                - "Circulate a summary with owners for each priority"
            - name: Handover when a long-serving executive leaves
              description: |-
                ## Purpose
                A long-serving controller or head of office who retires or resigns takes years of context with them unless the handover is planned. A structured handover, with a knowledge file, introductions to every relationship, an overlap period and a clear date when authority passes, keeps the office running and lets the leaver go well.

                ## Milestones
                1. A leaving date and overlap period agreed.
                2. A knowledge file covering entities, advisers, recurring deadlines and family preferences.
                3. Every outside relationship introduced to the successor.
                4. Access, signatory rights and mandates transferred on a recorded date.

                ## Notes
                Thank long-serving staff properly. How the family treats a departing executive is watched closely by those who remain.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed handover with a knowledge file, introductions to all outside relationships and a recorded date when access and authority passed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree the leaving date and overlap period"
                - "Ask the leaver to start a knowledge file on entities and deadlines"
                - "Schedule introductions to every outside relationship"
                - "Record the date access and signatory rights pass to the successor"
            - name: Moving business staff into the family office
              description: |-
                ## Purpose
                Founders often run family affairs through the company's finance team or a trusted personal assistant at the business, which blurs company and family costs and confidentiality. Moving those people, or their duties, into a separate family office, with new contracts and clear cost separation, is often the first step after a sale or as the business professionalises.

                ## Milestones
                1. Every business employee doing family work identified, with hours spent.
                2. A decision per person: transfer to the office, stop the family work, or recharge it.
                3. New contracts issued for transferring staff on advice from the employment lawyer.
                4. Company and family costs separated from an agreed date.

                ## Notes
                Where the business has other shareholders, company staff doing unpaid family work can become a governance problem. Fix it before a sale or audit raises it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every business employee doing family work has transferred, stopped or is recharged, with company and family costs separated from a recorded date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List business employees who do work for the family"
                - "Decide for each whether to transfer, stop or recharge the work"
                - "Ask the employment lawyer how to transfer staff fairly"
                - "Agree the date company and family costs separate"
            - name: Stepping up from controller to head of office
              description: |-
                ## Purpose
                Many heads of office are promoted from controller or executive assistant, and the hardest part is moving from doing the work to managing people, advisers and family expectations. A manager taking on the role benefits from a written transition plan, a mentor from another family office and agreed authority before day one.

                ## Milestones
                1. A transition plan agreed with the principal covering scope, authority and pay.
                2. A replacement or cover arranged for the manager's old duties.
                3. A mentor from outside the family secured for the first year.
                4. A six-month review held with the principal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written transition plan, cover for the old role, an outside mentor and a six-month review completed for the newly promoted head of office."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down which old duties you must hand off"
                - "Agree scope, authority and pay for the new role with the principal"
                - "Ask a peer network for a mentor at another family office"
                - "Book a six-month review with the principal"
            - name: Handing staff oversight to the next generation
              description: |-
                ## Purpose
                When the founding generation steps back, staff who have answered to one person for decades must start reporting to a son, daughter or council. Planning the change, with joint meetings during an overlap, written confirmation of the new principal's authority and reassurance about job security, keeps experienced staff from leaving during the transition.

                ## Milestones
                1. The incoming principal or committee named and their authority written down.
                2. A six to twelve month overlap with joint one-to-ones.
                3. Staff told individually, with their questions answered.
                4. The handover date recorded and contracts or mandates updated.

                ## Notes
                Broader leadership succession sits in its own area. This project covers only who staff report to and how they are told.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recorded handover of staff oversight to the next generation, after an overlap period, with each staff member told individually."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Name the incoming principal or committee for staff"
                - "Plan an overlap period with joint one-to-ones"
                - "Tell each staff member individually and answer their questions"
                - "Record the handover date and update mandates"
            - name: Staff continuity if the principal dies or loses capacity
              description: |-
                ## Purpose
                The principal's death or incapacity can leave staff unsure who they work for, with payroll, signing authority and contracts tied to one person. A written continuity letter naming who instructs staff, how salaries keep being paid and which advisers to call protects the team and the family in the weeks when they are most needed.

                ## Milestones
                1. A continuity letter naming who directs staff if the principal cannot.
                2. Payroll and critical payments able to continue without the principal's signature.
                3. The head of office briefed and a sealed copy held by the family lawyer.
                4. The letter reviewed every year.

                ## Notes
                Agree this with the family lawyer alongside powers of attorney and the estate plan, so the documents do not contradict each other.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed staff continuity letter, alternative payroll authority in place and a yearly review scheduled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List what would stop if the principal could not sign tomorrow"
                - "Draft a continuity letter with the family lawyer"
                - "Set up an alternative signatory for payroll and critical payments"
                - "Review the staff continuity letter with the lawyer @recurring(yearly)"
            - name: Staffing an office across several countries
              description: |-
                ## Purpose
                Families split between, say, Barbados, London and Miami may want staff in more than one place, which raises questions of employing entities, work permits, payroll registration and time zones. Deciding where each role sits and how cross-border staff are employed, with advice in each country, avoids accidental tax presence and immigration breaches.

                ## Milestones
                1. Each role assigned a home country with reasons.
                2. Employment and immigration advice taken in every country where staff will sit.
                3. A payroll and employer registration in place in each country.
                4. Cross-time-zone working hours and cover written into the handbook.

                ## Notes
                An employee working from a new country can create a tax presence for the employer. Take advice before agreeing remote working abroad.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every role has a home country, with employment and immigration advice taken and payroll registered in each country used."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map where each role needs to sit and why"
                - "Take employment and immigration advice in each country"
                - "Confirm payroll registration in every country with staff"
                - "Check payroll registrations and work permits are current @recurring(yearly)"
            - name: Sharing staff with another family or a business
              description: |-
                ## Purpose
                Two related families, or a family and its operating company, sometimes share a controller, a technology lead or an investment analyst to afford better people. Sharing works only with a written agreement covering cost split, time allocation, confidentiality walls and what happens if one side wants out.

                ## Milestones
                1. Roles suitable for sharing identified, with expected time split.
                2. A cost-sharing and confidentiality agreement drafted by lawyers.
                3. Exit terms agreed if either side ends the arrangement.
                4. A yearly review of time actually spent against the agreed split.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed staff-sharing agreement with cost split, confidentiality walls and exit terms, or a recorded decision not to share."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Identify roles that could be shared and with whom"
                - "Agree an expected time split and cost formula"
                - "Have lawyers draft confidentiality walls and exit terms"
                - "Record the decision to share or not"
            - name: Staff conflicts of interest and personal dealing rules
              description: |-
                ## Purpose
                Office staff may learn of a family deal before it closes, be offered gifts by banks or invest personally in the same private companies. Written rules on declaring outside interests, personal trading, gifts and hospitality, with a yearly declaration, protect the family and give staff clear guidance.

                ## Milestones
                1. A conflicts and personal dealing policy reviewed by the lawyer.
                2. A declaration form for outside interests, directorships and personal investments.
                3. A gifts and hospitality register with a stated value limit.
                4. Yearly declarations completed by every staff member.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lawyer-reviewed conflicts policy, a gifts register and yearly declarations from every staff member on file."
                cadence: cyclic
              tasks:
                - "Draft a conflicts and personal dealing policy for the lawyer to review"
                - "Create a declaration form and a gifts register"
                - "Brief staff on the value limit for gifts and hospitality"
                - "Collect conflicts declarations from every staff member @recurring(yearly)"
            - name: Succession plan for senior office roles
              description: |-
                ## Purpose
                Families plan succession for themselves but rarely for the head of office, controller or CIO, whose sudden departure can be just as disruptive. A short plan naming internal candidates, development steps and the outside search route for each senior role turns a crisis into a process.

                ## Milestones
                1. Each senior role listed with a ready-now and a ready-later successor, or none.
                2. Development steps agreed for each internal candidate.
                3. An outside search route named where no internal candidate exists.
                4. The plan reviewed every year with the principal.

                ## Notes
                Keep the plan confidential to the principal and head of office. Telling someone they are the named successor can create expectations the family cannot meet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A confidential succession plan for every senior office role with named candidates or a search route, reviewed yearly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each senior role and any internal candidate"
                - "Agree development steps for each internal candidate"
                - "Name a search route for roles with no successor"
                - "Review the senior role succession plan with the principal @recurring(yearly)"
---

# Family Office Staffing

This area is for the parent or founder who has realised the family's affairs now need paid professionals, and for the manager who runs or is about to run that team. It starts with foundations (a map of the work, what to keep in house, the target organisation chart, the pay envelope, decision rights, contracts and delegated authority), moves to hiring the head of office, the controller, investment and support staff, then the operating rhythm of one-to-ones, reviews, benchmarks and cover, the skills a principal needs as an employer, decisions on incentives and retention, the dated moments of announcing, reviewing and losing senior people, situations for founders, new heads of office and the next generation, and finally specialist work on multi-country teams, conflicts of interest and succession.

What repeats is a monthly one-to-one with the head of office and a monthly look at the family request log, quarterly workload, cover and turnover reviews, and a yearly cycle of pay benchmarking, performance reviews, bonuses, handbook and authority updates, training budgets, conflict declarations and a team planning day. The Skills matrix, Vendor, Onboarding 30/60/90, 1:1 and Development plan templates pair with role profiles, the search firm, new hires, principal meetings and staff training. Employment, tax and immigration rules differ by country, so agree contracts, incentive plans and anything with legal effect with the office's employment lawyer and tax adviser. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
