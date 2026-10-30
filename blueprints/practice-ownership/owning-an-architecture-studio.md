---
id: practice-ownership.owning-an-architecture-studio
name: Owning an Architecture Studio
description: "Run your architecture studio as a business: registration kept current, fees tied to work stages, resourcing through peaks, consultant appointments, competitions and a studio culture people stay for."
category: business
version: 1.0.0
tags: [practice-ownership, owning-an-architecture-studio, small-business, founder, architecture, fee-stages, competitions, studio-resourcing]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - portfolio-piece
    - development-plan
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning an Architecture Studio
          description: "Running an architecture practice: fee stages, design team appointments, competitions, studio culture, workload peaks and registration duties."
          projects:
            - name: Registration check for everyone using the title
              description: |-
                ## Purpose
                In most countries the word "architect" is protected, and a studio whose website, email signatures or fee proposals call an unregistered graduate an architect can face a complaint to the registration body. Checking every person's registration status, renewal date and any practice-level registration the jurisdiction requires closes that gap before a client or competitor finds it.

                ## Milestones
                1. A list of everyone in the studio with their registration status, number and renewal date.
                2. Job titles on the website, signatures and business cards matched to each person's actual status.
                3. Any practice or firm registration your jurisdiction requires confirmed as current.
                4. Renewal fees and any required continuing education hours noted against each date.

                ## Notes
                Rules differ between countries and states. Read your own registration body's guidance on title use rather than relying on a colleague's habit.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated register of every person's registration status and renewal date exists, and every public job title matches it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up each person on the registration body's public register"
                - "List job titles used on the website and in email signatures"
                - "Correct any title that implies registration the person does not hold"
                - "Renew the studio's and your own registration before the due date @recurring(yearly)"
            - name: One-page picture of studio fees and costs
              description: |-
                ## Purpose
                Most studio owners can name every live job but not what share of this year's fee income sits in each work stage, or what the studio costs to open each month. One page listing live projects, fees remaining by stage, headcount and monthly overhead becomes the baseline every later decision in this area is measured against.

                ## Milestones
                1. Every live project listed with its total fee, fee invoiced to date and fee remaining.
                2. Remaining fee split by the work stage each project is in.
                3. Monthly overhead totalled: salaries, rent, software licences, insurance and professional subscriptions.
                4. Months of work in hand calculated as remaining fee divided by monthly cost.
                5. The page dated and shared with your partner or accountant.

                ## Notes
                Months of work in hand is the single number most worth watching. Under four months usually means business development needs attention now, not next quarter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page summary shows fees remaining by stage, monthly overhead and months of work in hand."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the fee and invoice totals for every live project"
                - "Add up monthly overhead from the last three bank statements"
                - "Calculate months of work in hand"
                - "Write and date the one-page studio picture"
            - name: Hourly cost rate for each staff grade
              description: |-
                ## Purpose
                Fee bids are only as good as the cost per hour behind them, and many studios price from a market hourly rate without knowing what an hour of a project architect actually costs once overhead is spread. Working out a cost rate per grade shows which fees lose money before the job is won.

                ## Milestones
                1. Salary plus employment costs totalled for each person.
                2. Realistic chargeable hours per person per year estimated, after holidays, admin and business development.
                3. Overhead spread across chargeable hours to give a cost rate per grade.
                4. A target charge-out rate set for each grade above its cost rate.

                ## Notes
                Most studios find only 60 to 75 percent of paid hours are chargeable. Using 100 percent is the commonest reason fee bids look profitable on paper and lose money in practice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table gives the cost rate and target charge-out rate for every staff grade, based on last year's chargeable hours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull last year's timesheet totals split into chargeable and non-chargeable hours"
                - "Add employer costs to each salary"
                - "Divide total cost by chargeable hours for each grade"
                - "Agree target charge-out rates with your partner or accountant"
            - name: Work stage fee split for new proposals
              description: |-
                ## Purpose
                Clients pay by stage, but a studio that splits fees evenly across stages runs out of fee during technical design, which is where the hours really go. A standard split, based on where your own past projects spent their hours, makes every proposal start from evidence rather than habit.

                ## Milestones
                1. Hours by stage gathered from three to five completed projects of different sizes.
                2. A default percentage of fee per stage agreed, using your professional body's plan of work stages as the frame.
                3. Variations noted for small residential, new build and refurbishment work.
                4. The split built into the fee proposal spreadsheet so every new bid uses it.

                ## Notes
                The RIBA Plan of Work and the AIA phases are common frames. Use the one your clients recognise, and keep the stage names identical in proposals, invoices and timesheets.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A default fee percentage for each work stage, drawn from at least three completed projects, is built into the proposal spreadsheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose three completed projects with reliable timesheet records"
                - "Total the hours each one spent in each stage"
                - "Agree a default fee split by stage and building type"
                - "Add the split to the fee proposal spreadsheet"
            - name: Standard client appointment pack
              description: |-
                ## Purpose
                Starting work on an email and a handshake is the commonest source of fee disputes in small studios. A standard appointment pack, built on your professional body's standard form with your own schedule of services and stage fees, means every job starts with scope, fee, payment terms and limits of liability in writing.

                ## Milestones
                1. A standard form of appointment chosen for domestic clients and one for commercial clients.
                2. A schedule of services written for each work stage, with what is excluded stated plainly.
                3. Payment terms, additional services rates and a limitation of liability clause drafted.
                4. The pack reviewed once by a construction lawyer.
                5. A rule that no drawing leaves the studio before the appointment is signed.

                ## Notes
                Domestic clients often have consumer protection rights that change how terms must be presented. Ask the lawyer which apply where you work.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed appointment pack for domestic and commercial clients exists and is used for every new job."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download your professional body's standard appointment forms"
                - "Draft a schedule of services for each work stage"
                - "Send the draft pack to a construction lawyer for review"
                - "Brief the team that work starts only after signature"
            - name: Job acceptance test for new enquiries
              description: |-
                ## Purpose
                Small studios lose more money on jobs they should have declined than on jobs they bid too low. A short written test covering client funding, realistic budget, fee level, programme and risk lets you say no politely and early, before a month of unpaid feasibility work.

                ## Milestones
                1. Six to eight acceptance questions written, including whether the client has funding and land.
                2. A minimum fee and a minimum project size set.
                3. A red flag list drawn from your past problem jobs.
                4. The test applied to every new enquiry for three months and the results reviewed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every new enquiry for three months has a recorded accept or decline decision against the written test."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three worst jobs of the last five years and why they went wrong"
                - "Write six to eight questions to ask every new client"
                - "Set a minimum fee below which you refer the job elsewhere"
                - "Record the acceptance decision for each new enquiry"
            - name: Insurance clauses in appointments versus your cover
              description: |-
                ## Purpose
                Commercial appointments often ask for indemnity limits, run-off periods or net contribution wording that your actual policy does not match. Comparing the insurance clauses in every live appointment against your schedule of cover shows where a signed promise is wider than the protection behind it.

                ## Milestones
                1. Every live appointment's insurance and liability clauses listed in one table.
                2. Each clause compared with the limit, excess and terms in your policy schedule.
                3. Gaps raised with your broker, with their written answer kept.
                4. A rule for what you will and will not sign in future appointments.

                ## Notes
                This is about the fit between contracts and cover. The level of cover itself is a conversation with your broker.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table compares every live appointment's insurance clauses with the policy, and each gap has a broker response on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the signed appointment for every live project"
                - "Extract each insurance and liability clause into a table"
                - "Ask your broker to comment on any clause wider than the policy"
                - "Check the table against your renewed policy each year @recurring(yearly)"
            - name: Studio drawing and model standards
              description: |-
                ## Purpose
                When three people draw the same project in three different ways, coordination with engineers slows and drawings issued to site look careless. A short standards document covering file naming, layers or classifications, title blocks, revision codes and model structure lets anyone pick up a project on a Monday.

                ## Milestones
                1. File and drawing numbering rules written, aligned with the information management standards your clients use.
                2. A studio title block and revision code system in the drawing template.
                3. Model setup rules: levels, views, shared coordinates and worksets or equivalents.
                4. A one-page checklist new starters work through in their first week.

                ## Notes
                Larger clients increasingly ask for ISO 19650 style information management. Borrow its naming conventions now rather than retrofitting later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written standards document and drawing template are in the shared drive and used on every new project."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect title blocks and file names from five recent projects"
                - "Draft naming and revision rules in one document"
                - "Build a project template file that applies the rules"
                - "Walk the team through the template at a studio lunch"
            - name: Project numbering, filing and archive structure
              description: |-
                ## Purpose
                Claims can arrive many years after practical completion, and the studio then needs the issued drawings, instructions and correspondence for that job, not a laptop that left with a former employee. A single project folder structure from enquiry to archive makes retrieval possible and makes the limitation period less frightening.

                ## Milestones
                1. A project numbering system and standard folder tree agreed.
                2. Folders for appointment, correspondence, issued drawings, site records and certificates defined.
                3. An archive rule for closed projects, with retention for at least the limitation period where you work.
                4. Live projects moved into the structure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live project sits in the standard folder tree, and a written archive and retention rule is in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your lawyer or insurer how long project records should be kept"
                - "Draw the standard folder tree on one page"
                - "Create the tree for every live project"
                - "Move one closed project into the archive as a test"
            - name: Monday studio resourcing meeting
              description: |-
                ## Purpose
                Workload peaks in a studio rarely arrive by surprise: a planning submission and a tender issue land in the same fortnight because nobody looked six weeks ahead. Fifteen minutes every Monday with a simple resource chart moves people before the crunch, not during it.

                ## Milestones
                1. A resource chart showing every person against every project for the next six weeks.
                2. Key dates for each project marked: submissions, issues, client meetings.
                3. A standing fifteen-minute slot each Monday with project leads.
                4. Conflicts resolved in the meeting or escalated the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A six-week resource chart is updated every Monday for three months, and no deadline clash is discovered later than four weeks out."
                cadence: rolling
              tasks:
                - "Build a six-week resource chart in a shared spreadsheet"
                - "Ask each project lead for their next three key dates"
                - "Update the resource chart with project leads @recurring(weekly:mon)"
                - "Flag any week where a person is booked over 100 percent"
            - name: Monthly fee earned against stage progress
              description: |-
                ## Purpose
                Halfway through technical design, a project can already be 80 percent through its fee, and the studio finds out at the end when nothing is left to invoice. Comparing fee spent, fee invoiced and real stage progress on every project each month shows which jobs are bleeding while there is still time to act.

                ## Milestones
                1. For each project: total fee, hours cost to date, fee invoiced and percentage of the stage complete.
                2. A traffic-light flag where cost to date runs ahead of progress.
                3. A short action for every red project: additional fee request, resourcing change or scope conversation.
                4. Twelve months of the review kept in one log.

                ## Notes
                Start from the **Metrics log** template. Ask the project lead for percentage complete before you show them the hours, so the estimate is honest.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live project has a monthly fee-against-progress figure logged for six consecutive months, with an action recorded for each red flag."
                cadence: rolling
              tasks:
                - "Set up a fee-against-progress sheet for every live project"
                - "Collect percentage complete from each project lead @recurring(monthly:5)"
                - "Mark any project where cost runs ahead of progress"
                - "Agree one action for each red project with its lead"
            - name: Stage invoicing and debtor chase routine
              description: |-
                ## Purpose
                Architects tend to invoice when they remember, often weeks after a stage was signed off, and then feel awkward chasing. A fixed monthly invoice run, with stage sign-offs triggering the invoice and a weekly chase of anything over 30 days, can bring in a month of fees that was simply sitting unbilled.

                ## Milestones
                1. A fixed day each month for raising every invoice due.
                2. Each invoice tied to a stage completion or monthly instalment named in the appointment.
                3. A debtor list reviewed weekly, with a polite chase sequence at 30, 45 and 60 days.
                4. Average days to payment measured and falling over six months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Invoices are raised on the same day each month for six months, and average days to payment are recorded each month."
                cadence: rolling
              tasks:
                - "List every invoice that could be raised today"
                - "Raise all stage and instalment invoices due @recurring(monthly:25)"
                - "Chase every invoice more than 30 days old @recurring(weekly:wed)"
                - "Write a three-step chase email sequence"
            - name: Thursday design crit for live projects
              description: |-
                ## Purpose
                Design quality in a growing studio drifts when the founder stops seeing work until it is ready to issue. A weekly pin-up where one or two projects are shown to the whole studio keeps the design voice consistent, teaches junior staff to present and catches weak ideas while they are cheap to change.

                ## Milestones
                1. A rota so every live project is crited at least once a month.
                2. A format agreed: ten minutes presenting, twenty minutes discussion, actions noted.
                3. Junior staff presenting their own work, not only project leads.
                4. Actions from each crit checked at the next one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A crit is held most Thursdays for three months and every live project appears on the rota at least monthly."
                cadence: rolling
              tasks:
                - "Draw up a crit rota covering every live project"
                - "Hold the weekly crit and note the actions @recurring(weekly:thu)"
                - "Invite a junior member of staff to present each month"
                - "Review the crit format with the team after three months"
            - name: Drawing issue register and transmittals
              description: |-
                ## Purpose
                When a contractor builds from a superseded drawing, the first question is what the studio issued, to whom and when. A drawing issue register with numbered transmittals answers that in seconds and protects the studio in any dispute about who knew what.

                ## Milestones
                1. One issue register per project listing every drawing, revision, date and recipient.
                2. A transmittal sent with every issue, whether by email, platform or paper.
                3. Revision clouds and revision notes used consistently on reissued drawings.
                4. A monthly spot check of two projects' registers against what was actually sent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live project has an issue register, and monthly spot checks for six months find no issue without a transmittal."
                cadence: rolling
              tasks:
                - "Create an issue register template with revision and recipient columns"
                - "Start a register on every live project"
                - "Spot check two projects' registers against sent emails @recurring(monthly:18)"
                - "Fix any gaps found in the spot check the same week"
            - name: Scope change and additional services log
              description: |-
                ## Purpose
                Clients rarely ask for a bigger job; they ask for one more option, one more planning revision, one more meeting, and the studio absorbs it. Logging every request against the appointment's scope each week, and agreeing additional fees before the work, is how studios stop giving away a tenth of their fee.

                ## Milestones
                1. A change log per project with the request, the date and whether it is inside scope.
                2. An additional services note sent within a week for anything outside scope.
                3. Written client agreement to the additional fee before work starts.
                4. Six months of additional fees agreed totalled.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every out-of-scope request in a six-month period has a dated additional services note, and the total additional fee agreed is recorded."
                cadence: rolling
              tasks:
                - "Set up a change log in each live project folder"
                - "Review new client requests against the scope of services @recurring(weekly:fri)"
                - "Write a short additional services note template"
                - "Total the additional fees agreed at the end of each quarter"
            - name: Design team coordination and clash register
              description: |-
                ## Purpose
                As lead designer, the studio usually chairs the design team and carries the blame when structure, services and architecture do not fit. A regular coordination meeting with a shared clash and action register makes the other consultants' commitments visible and dated.

                ## Milestones
                1. A design team meeting cycle set for each project in design stages.
                2. A shared register of clashes, open questions, owner and due date.
                3. Model or drawing exchanges scheduled before each meeting.
                4. Overdue actions escalated to the consultant's director in writing.

                ## Notes
                Start from the **Operational checklist** template for the agenda, and keep the register in the project folder rather than in email threads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every project in design stages has a dated coordination register updated at each design team meeting."
                cadence: rolling
              tasks:
                - "Agree a meeting cycle with the structural and services engineers"
                - "Set up a shared clash and action register"
                - "Circulate the register two days before each meeting @recurring(weekly:tue)"
                - "Escalate any action overdue by two meetings in writing"
            - name: Site visit and inspection report routine
              description: |-
                ## Purpose
                During construction, what the architect saw and said on site becomes evidence. A standard site visit report with photographs, observations, instructions and items to follow up, issued within 48 hours of every visit, protects the studio and keeps the contractor honest.

                ## Milestones
                1. A one-page site visit report form with photo pages.
                2. A rule that reports are issued within 48 hours.
                3. Each report logged in the project's site records folder.
                4. Open items carried forward until closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site visit for six months has a report issued within 48 hours and filed in the project folder."
                cadence: rolling
              tasks:
                - "Draft a site visit report form with a photo page"
                - "Agree the 48-hour issue rule with project leads"
                - "Carry forward open items from the last report before each visit"
                - "Review a sample of reports for clarity every few months"
            - name: Planning and building control tracker
              description: |-
                ## Purpose
                Even a small studio may have a dozen applications, pre-application meetings, conditions and building approvals in motion at once, each with its own clock. One tracker of every application, its target decision date and the conditions to discharge stops a missed condition from delaying a start on site.

                ## Milestones
                1. Every live application listed with reference, submission date and target decision date.
                2. Conditions listed for each approval with who discharges them and when.
                3. Building approval stages tracked alongside planning.
                4. The tracker reviewed monthly and clients updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single tracker lists every live application and condition, reviewed monthly for six months with no condition missed."
                cadence: rolling
              tasks:
                - "List every live planning and building approval application"
                - "Add each approval's conditions with an owner and date"
                - "Review the tracker and update clients on changes @recurring(monthly:12)"
                - "Diary condition discharge dates against each programme"
            - name: Quarterly workload and pipeline forecast
              description: |-
                ## Purpose
                Architecture fees come in lumps, and a studio can be overloaded in spring and short of work by autumn. A quarterly forecast of fees in hand plus weighted bids lets you decide early whether to hire, push for new work or slow a recruitment plan.

                ## Milestones
                1. Fees in hand forecast by month for the next twelve months.
                2. Every bid and enquiry listed with fee and a realistic probability.
                3. Weighted pipeline added to fees in hand and compared with monthly cost.
                4. A hire, hold or hustle decision recorded each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four consecutive quarterly forecasts are saved, each ending in a recorded hire, hold or business development decision."
                cadence: cyclic
              tasks:
                - "Spread each project's remaining fee across the months it will be earned"
                - "List every open bid with a probability between 10 and 90 percent"
                - "Update the twelve-month forecast and record the decision @recurring(quarterly)"
                - "Share the forecast with your partner or bank manager if relevant"
            - name: Studio culture charter
              description: |-
                ## Purpose
                Architecture has a long habit of all-nighters, unpaid overtime and credit flowing upward, and good staff leave studios that never question it. Writing down how your studio works, from crits and credit on published work to core hours and learning time, gives people something to hold you to.

                ## Milestones
                1. A draft charter covering hours, crits, credit, learning time and how disagreements are raised.
                2. Every member of staff asked for comments before it is final.
                3. Credit rules for awards, publications and social media agreed.
                4. A quarterly studio forum where the charter is checked against reality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page charter agreed with the team is published internally and checked at a quarterly studio forum."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each person what they would keep and change about the studio"
                - "Draft a one-page charter from the answers"
                - "Agree how project credit is listed on published work"
                - "Hold a studio forum to check the charter against practice @recurring(quarterly)"
            - name: Deadline crunch and overtime policy
              description: |-
                ## Purpose
                Competition and planning deadlines create genuine peaks, and studios without a policy end up relying on goodwill until it runs out. A written policy for planned peaks, with time off in lieu, a cap on late nights and a record of hours, keeps crunch periods occasional rather than normal and keeps you within employment law.

                ## Milestones
                1. Last year's overtime hours by person pulled from timesheets.
                2. A policy covering when overtime is acceptable, how it is recorded and how it is repaid.
                3. A cap on consecutive late weeks before resourcing must change.
                4. Overtime checked monthly against the cap.

                ## Notes
                Working time and overtime pay rules are set by employment law where you work. Check the policy with an employment adviser before you publish it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written overtime policy is in force and monthly overtime totals per person are recorded for six months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Total last year's overtime hours by person"
                - "Draft an overtime and time off in lieu policy"
                - "Ask an employment adviser to check the draft"
                - "Check overtime totals against the cap @recurring(monthly:8)"
            - name: Pre-issue quality check for drawings and reports
              description: |-
                ## Purpose
                Most claims against architects trace back to something a second pair of eyes would have caught: a missing fire line, an unchecked dimension, a product specified that was later withdrawn. A short pre-issue checklist, with a named checker who did not draw it, makes that second look routine.

                ## Milestones
                1. A pre-issue checklist for planning, building approval, tender and construction issues.
                2. A rule that a named checker signs off before each issue.
                3. Check records kept with the issue register.
                4. A monthly sample audit of checked issues.

                ## Notes
                Start from the **Operational checklist** template. Keep it to one page or nobody will use it under deadline pressure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every formal issue for six months has a signed pre-issue check on file, confirmed by monthly sample audits."
                cadence: rolling
              tasks:
                - "Collect the errors behind the studio's last five site queries"
                - "Write a one-page pre-issue checklist from them"
                - "Name a checker for each live project"
                - "Audit a sample of last month's issues for checks @recurring(monthly:20)"
            - name: Writing fee proposals that win at the right fee
              description: |-
                ## Purpose
                Studios often lose good bids on presentation and win bad ones on price. Studying how your winning and losing proposals differed, and building a proposal structure that leads with the client's problem, shows method and programme, and prices by stage from your cost rates, raises both the win rate and the fee.

                ## Milestones
                1. Five past proposals reviewed: three won, two lost, with client feedback where available.
                2. A proposal structure written: understanding, approach, team, programme, fee by stage, exclusions.
                3. Fees in the next three proposals built from cost rates, not last time's percentage.
                4. Win rate and fee level tracked for the next ten proposals.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written proposal structure is used for ten consecutive proposals, with win rate and fee level recorded for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull out three won and two lost proposals from the last two years"
                - "Ask one lost client for honest feedback on your bid"
                - "Write a standard proposal structure"
                - "Record the outcome and fee of each new proposal"
            - name: Reading consultant and contractor appointments
              description: |-
                ## Purpose
                Collateral warranties, fitness for purpose wording, novation to a design and build contractor and step-in rights can change the studio's liability more than the fee does. Learning to read these clauses, and knowing which ones to push back on, saves legal fees on routine contracts and spots the dangerous ones.

                ## Milestones
                1. A list of the ten clauses that most change an architect's liability, each explained in plain words.
                2. Two recent appointments marked up against that list.
                3. A standard set of amendments you ask for on every commercial appointment.
                4. A rule for when a contract goes to a lawyer.

                ## Notes
                This builds your judgement on when to call a lawyer. It does not replace one for a contract that matters.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language clause guide and a standard amendments list exist, and two live appointments have been marked up against them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your professional body's guidance on appointment risk"
                - "Mark up two recent appointments clause by clause"
                - "Write a standard list of amendments to request"
                - "Agree with a lawyer which clauses always need their review"
            - name: Contract administration under building contracts
              description: |-
                ## Purpose
                Acting as contract administrator means issuing instructions, valuations, extensions of time and completion certificates under a building contract, and getting the procedure wrong can cost the client money and the studio its fee. Studying the standard contracts you use most, step by step, makes these duties routine instead of nerve-racking.

                ## Milestones
                1. The two standard building contracts the studio uses most identified.
                2. A procedure note for each certificate and notice, with time limits.
                3. Standard instruction and certificate forms in the project template.
                4. One live project reviewed against the procedure notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written procedure notes cover every certificate and notice in the studio's two main building contracts, and one live project has been checked against them."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Identify the two building contracts the studio uses most"
                - "Book a short course on contract administration under them"
                - "Write a procedure note for each certificate and its time limit"
                - "Check one live project's certificates against the notes"
            - name: Planning strategy and pre-application skills
              description: |-
                ## Purpose
                Planning outcomes often turn on how early and how well the studio engaged, not on the design alone. Building a repeatable approach to planning policy review, pre-application meetings, design and access statements and consultation makes approvals more predictable and turns planning skill into something clients pay for.

                ## Milestones
                1. A policy review checklist for any new site.
                2. A template for pre-application submissions and meeting notes.
                3. A standard structure for design and access or design statements.
                4. Three past planning outcomes reviewed for what helped and what hurt.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A policy checklist, pre-application template and statement structure are in the project template, informed by three reviewed past outcomes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Review three past planning decisions and their officer reports"
                - "Draft a site policy review checklist"
                - "Write a pre-application submission template"
                - "Draft a standard design statement structure"
            - name: Designer duties under building safety rules
              description: |-
                ## Purpose
                Many countries now place legal duties on designers to eliminate or reduce health and safety risks, and some give the lead designer extra duties on higher-risk buildings. Knowing your duties where you work, and recording design risk decisions as you go, is required in many places and is a strong defence when something goes wrong.

                ## Milestones
                1. The designer and principal designer duties that apply where you work summarised in plain words.
                2. A design risk register template for live projects.
                3. Staff briefed on what to record and when.
                4. A note of which projects need specialist competence or a separate appointment.

                ## Notes
                Rules vary by country and building type. Confirm the duties with your registration body's guidance or a health and safety adviser before relying on a summary.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of designer duties is shared with staff and every live project has a design risk register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the official guidance on designer safety duties where you work"
                - "Summarise the duties on one page for the team"
                - "Start a design risk register on every live project"
                - "Brief the team on recording design risk decisions"
            - name: Specification writing and substitution control
              description: |-
                ## Purpose
                The specification is where performance, fire and warranty requirements are actually set, and contractor substitutions late in the job are a common source of failures. A studio specification approach with a master template and a clear process for approving alternatives keeps design intent intact on site.

                ## Milestones
                1. A master specification source chosen, either a subscription system or your own library.
                2. Clauses for the studio's most common building elements written or tailored.
                3. A substitution request form requiring equal performance evidence.
                4. Every substitution on live projects logged with the decision and reasons.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A master specification and substitution request form are in use, and every substitution on live projects has a logged decision."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compare two specification systems or your own library"
                - "Tailor clauses for the five elements you specify most"
                - "Write a substitution request form"
                - "Log every substitution decision on live projects"
            - name: Embodied carbon and energy literacy for the studio
              description: |-
                ## Purpose
                Clients, planners and competition juries increasingly ask for operational energy and embodied carbon figures, and studios that cannot discuss them lose work. Getting the team to a shared working level on carbon assessment, energy targets and the tools that produce them makes these numbers part of design rather than a late consultant report.

                ## Milestones
                1. A short reading and training list for the team.
                2. One completed project assessed for embodied carbon as a learning exercise.
                3. A studio target or approach for carbon agreed for new projects.
                4. Carbon and energy questions added to the early stage design checklist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One past project has an embodied carbon assessment and a studio carbon approach is written into the early design checklist."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a carbon assessment tool and book a training session"
                - "Assess one completed project as a team exercise"
                - "Agree a studio approach to carbon for new work"
                - "Add carbon questions to the early stage checklist"
            - name: Choosing the studio's design software platform
              description: |-
                ## Purpose
                Design software licences are one of a studio's largest overheads after salaries and rent, and switching platforms costs months of reduced output. A structured comparison against what your clients and consultants actually use, the cost per seat over five years and the training time involved leads to a decision you can defend.

                ## Milestones
                1. Requirements listed: file exchange with consultants, client information standards, visualisation and team size.
                2. Three platforms compared on five-year cost per seat, training and hardware needs.
                3. One live project piloted on the preferred option.
                4. A decision recorded with a migration plan and training budget.

                ## Notes
                Start from the **Purchase decision** template. Ask your main engineers which formats they exchange in before deciding.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded platform decision compares three options on five-year cost and is backed by a pilot project."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your three main consultants which file formats they use"
                - "Total current licence and hardware costs per seat"
                - "Run a pilot on one small live project"
                - "Record the decision and a training plan"
            - name: Percentage, lump sum or time charge fees
              description: |-
                ## Purpose
                Charging a percentage of construction cost rewards rising budgets and punishes value engineering, a lump sum carries scope risk, and time charge needs clients who trust you. Comparing how each basis performed on your past jobs leads to a default for each type of work, rather than whatever the client proposed.

                ## Milestones
                1. Ten past projects grouped by fee basis with their final profit or loss.
                2. Strengths and risks of each basis written for your type of work.
                3. A default fee basis chosen for small residential, commercial and early feasibility work.
                4. The defaults written into the proposal template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A default fee basis is recorded for each main type of work, based on the results of at least ten past projects."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List ten past projects with their fee basis and final margin"
                - "Compare margins across the three fee bases"
                - "Choose a default basis for each type of work"
                - "Update the proposal template with the defaults"
            - name: Choosing the sectors the studio pursues
              description: |-
                ## Purpose
                Generalist studios are shortlisted for nothing, and public clients in particular ask for several recent projects in their sector. Deciding on two or three sectors, based on your portfolio, margins and the work you enjoy, focuses business development and makes the website and portfolio sharper.

                ## Milestones
                1. Past projects grouped by sector with fee, margin and how the work was won.
                2. Market outlook for each candidate sector noted.
                3. Two or three focus sectors chosen and recorded.
                4. Website, portfolio and bid boilerplate updated to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three focus sectors are recorded with reasons, and the website and portfolio reflect them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group the last five years of projects by sector"
                - "Note margin and enjoyment for each sector"
                - "Choose two or three focus sectors with your partner"
                - "Reorder the website and portfolio around them"
            - name: In-house or outsourced visualisation and models
              description: |-
                ## Purpose
                Renders, animations and physical models win competitions and planning approvals, but specialist staff and a model shop are expensive to keep busy. Comparing the real cost and turnaround of doing them in-house against using external visualisers lets you decide on numbers, not pride.

                ## Milestones
                1. Last year's spend and hours on visualisation and models totalled.
                2. Quotes from two external visualisers for a typical package.
                3. Turnaround and quality compared on one recent job.
                4. A decision recorded on what stays in-house.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on in-house versus external visualisation is based on last year's costs and two external quotes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total last year's hours and spend on visuals and models"
                - "Ask two external visualisers to quote for a typical package"
                - "Compare cost and turnaround on one recent job"
                - "Record what stays in-house and what goes out"
            - name: Joint venture or executive architect arrangements
              description: |-
                ## Purpose
                Teaming with a bigger practice, or acting as local executive architect for a design architect from elsewhere, can win a small studio larger or overseas projects. Both arrangements split fees, liability and credit in ways that need settling before the bid, not after the win.

                ## Milestones
                1. The kinds of project where teaming would let the studio bid listed.
                2. Two or three potential partner practices identified and approached.
                3. A heads of terms covering fee split, responsibilities, liability, insurance and credit drafted for one opportunity.
                4. Legal review of the teaming agreement before signature.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A heads of terms for one teaming opportunity, covering fees, liability and credit, has been drafted and reviewed by a lawyer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List three project types you could only win by teaming"
                - "Approach two practices you would like to team with"
                - "Draft heads of terms for one opportunity"
                - "Send the teaming agreement to a lawyer before signing"
            - name: Design competition go or no-go and entry
              description: |-
                ## Purpose
                Open competitions can cost a small studio several weeks of unpaid time for a small chance of winning. Deciding go or no-go against written criteria, then capping the hours and running the entry like a paid project, makes competitions a planned investment rather than a drain on everyone's evenings.

                ## Milestones
                1. Go or no-go criteria written: brief fit, jury, odds, prize or commission and hours available.
                2. A decision recorded for the competition in front of you.
                3. An hours budget and internal programme set if it is a go.
                4. The entry submitted on time and the actual hours recorded against the budget.

                ## Notes
                Check the competition rules on anonymity, copyright in entries and whether the winner is guaranteed the commission. These vary widely.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded go or no-go decision exists and, if entered, the entry was submitted on time within its hours budget."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Read the competition brief and rules in full"
                - "Score the competition against the go or no-go criteria"
                - "Set an hours budget and internal programme"
                - "Record actual hours against the budget after submission"
            - name: Shortlist interview and presentation
              description: |-
                ## Purpose
                Being shortlisted for a commission or competition second stage usually means a 30 to 60 minute interview where chemistry decides as much as design. Rehearsing the presentation, the team and answers to hard questions about fee, programme and experience turns a shortlisting into a win more often.

                ## Milestones
                1. The panel, format and timing confirmed with the client.
                2. A presentation built around the client's priorities, not the studio's history.
                3. Two full rehearsals with someone playing a tough panel member.
                4. Feedback requested after the decision, whatever the result.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The interview is delivered after two recorded rehearsals, and written feedback from the panel is filed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the panel members and format with the client"
                - "Build the presentation around three client priorities"
                - "Run two rehearsals with a tough mock panel"
                - "Ask for feedback after the decision is announced"
            - name: Public framework or tender submission
              description: |-
                ## Purpose
                Public bodies often buy architectural services through frameworks and tenders scored on quality and price, with strict formats and minimum turnover or insurance thresholds. Preparing a reusable bid library and submitting one framework bid properly gives the studio access to years of call-off work.

                ## Milestones
                1. Eligibility checked: turnover, insurance levels, accreditations and case studies required.
                2. A bid library of case studies, CVs, policies and method statements assembled.
                3. Quality answers drafted to the word limits and checked against the scoring criteria.
                4. The tender submitted before the deadline with a receipt saved.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete framework or tender submission is made before the deadline, with a receipt and a reusable bid library saved."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Register on the public procurement portals that cover your sectors"
                - "Check the eligibility thresholds of the next relevant framework"
                - "Assemble case studies, CVs and policies into a bid library"
                - "Submit the bid and save the portal receipt"
            - name: Annual awards and publication submissions
              description: |-
                ## Purpose
                Awards and press coverage are among the few kinds of marketing that professional rules rarely restrict, and a shortlisting can shape the next five years of enquiries. Choosing the right awards each year, photographing completed projects properly and crediting the whole team makes submissions an annual habit rather than a panic.

                ## Milestones
                1. A calendar of relevant awards with entry deadlines.
                2. Professional photography booked for each completed project.
                3. One or two projects entered each year with the full team credited.
                4. Results and any coverage logged.

                ## Notes
                Start from the **Portfolio piece** template for each project write-up. Get client permission before submitting their building.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "At least one award entry is submitted each year with professional photography and client permission on file."
                cadence: cyclic
              tasks:
                - "List the awards relevant to your sectors and their deadlines"
                - "Book a photographer for the most recent completed project"
                - "Ask the client for permission to enter their building"
                - "Choose this year's award entries @recurring(yearly)"
            - name: Practical completion handover and closeout review
              description: |-
                ## Purpose
                The weeks around practical completion decide whether the client remembers the project fondly: snags, manuals, certificates and the final account all land at once. A planned handover, followed by an honest internal review of fee, programme and lessons, closes the job properly and improves the next one.

                ## Milestones
                1. A handover checklist covering certificates, manuals, as-built information and keys.
                2. Snagging inspections completed and the list issued.
                3. The final fee account agreed and invoiced.
                4. A closeout review held with the team: what went well, what to change and the final margin.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The project has a signed handover checklist, an agreed final fee account and a written closeout review with final margin."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draw up the handover checklist with the contractor"
                - "Issue the snagging list after inspection"
                - "Agree and invoice the final fee account"
                - "Hold a closeout review and file the lessons"
            - name: Annual studio away day and business plan
              description: |-
                ## Purpose
                Day to day, a studio is driven by deadlines, so the questions of what kind of practice it is becoming get no time. One day a year away from the desks, with last year's numbers and a few honest questions, produces a short business plan and gives the team a say in where the studio goes.

                ## Milestones
                1. Last year's fees, margin, win rate and staff turnover summarised.
                2. Team views gathered beforehand on what to keep and change.
                3. A two-page plan with three goals for the year, owners and numbers.
                4. The plan reviewed at the next away day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page business plan with three owned goals is agreed at the away day and filed for review the following year."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Book a venue and date for the away day"
                - "Summarise last year's key numbers on one page"
                - "Ask the agent to draft a short pre-away-day survey for the team"
                - "Hold the away day and agree the plan @recurring(yearly)"
            - name: First year as a sole practitioner
              description: |-
                ## Purpose
                Leaving a larger practice to set up alone means doing the design, the bids, the invoicing and the IT, usually from home and often with one client who followed you. A first-year plan with a minimum fee target, a few repeat clients and protected design days keeps the new studio alive past the point where most fold.

                ## Milestones
                1. Any restrictive covenant in your old employment contract checked before approaching clients.
                2. A twelve-month fee target that covers your drawings, overheads and tax.
                3. Basic systems in place: appointment pack, invoicing, insurance and file backup.
                4. At least three clients or referrers who are not your former employer's clients.
                5. A twelve-month review of fees against target.

                ## Notes
                Ask a lawyer to read any non-solicitation clause before you contact former clients. Breaking one can cost more than the first year's fees.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twelve-month fee target and core systems are in place, and the first-year review compares actual fees with the target."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a lawyer to check your old contract's restrictive covenants"
                - "Set a twelve-month fee target from your living costs and overhead"
                - "Set up appointment, invoicing and backup systems"
                - "List ten people who could refer work to a new studio"
            - name: Two founders dividing design and business roles
              description: |-
                ## Purpose
                Studios set up by two friends from architecture school often stall when both want to design and neither wants to chase invoices. Agreeing who leads design, who leads the business and how decisions are made, while the friendship is good, prevents the quiet resentment that splits many young practices.

                ## Milestones
                1. Each founder's preferred and least favourite tasks listed.
                2. A role split agreed covering design lead, finance, business development, HR and IT.
                3. A decision rule for disagreements on design, money and hiring.
                4. A six-month check on how the split is working.

                ## Notes
                The ownership terms themselves belong in a shareholder or partnership agreement drafted with a lawyer. This project settles the day-to-day roles.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written role split and decision rule are agreed by both founders and reviewed after six months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Each founder lists the studio tasks they love and dread"
                - "Agree a written role split for design and business"
                - "Write a rule for resolving design and money disagreements"
                - "Diary a six-month review of the role split"
            - name: Supporting staff towards registration
              description: |-
                ## Purpose
                Graduates and assistants need recorded professional experience, mentoring and time to prepare for the professional practice exams before they can register. A studio known for supporting that route attracts better graduates and keeps them through registration rather than losing them to a larger practice.

                ## Milestones
                1. Each unregistered staff member's stage, experience record and target exam date noted.
                2. A registered mentor assigned to each person.
                3. Experience planned across stages so the record can be completed.
                4. Study leave and exam fees policy written.

                ## Notes
                Start from the **Development plan** template for each person. Experience record requirements are set by your registration body and professional institute.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every unregistered staff member has a mentor, a development plan and a target exam date, reviewed monthly."
                cadence: rolling
              tasks:
                - "Ask each unregistered team member for their target registration date"
                - "Assign a registered mentor to each person"
                - "Review experience records with each mentee @recurring(monthly:22)"
                - "Write a study leave and exam fees policy"
            - name: Growing from five to fifteen people
              description: |-
                ## Purpose
                At around eight people the founder can no longer review every drawing or know every client, and studios that do not add a layer of project architects or associates stall or burn out. Designing the next structure before the hiring starts sets who leads jobs, who signs off and how design quality is kept.

                ## Milestones
                1. The founder's current involvement in each project mapped.
                2. A structure chosen: studio teams, project architects, associates or a mix.
                3. Sign-off authority written for proposals, drawings, fees and hiring.
                4. First promotions or hires into the new roles made.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written studio structure with sign-off authorities is in place and the first lead roles are filled."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Log a fortnight of the founder's time by project and task"
                - "Sketch two possible studio structures"
                - "Write sign-off authorities for each new role"
                - "Promote or hire the first project lead"
            - name: Running the studio through a slow pipeline
              description: |-
                ## Purpose
                Construction downturns hit architects first, often a year before contractors feel it. A prepared plan with trigger points, from cutting discretionary spend to reduced hours and finding work in less affected sectors, lets you act calmly when months of work in hand starts falling.

                ## Milestones
                1. Trigger points set in months of work in hand.
                2. Actions listed for each trigger, cheapest first.
                3. Sectors and client types that hold up in downturns identified.
                4. A cash buffer target agreed with your accountant.

                ## Notes
                Any change to hours or redundancies has legal steps. Take employment advice before you reach that trigger.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written downturn plan with trigger points, actions and a cash buffer target is filed and reviewed yearly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set three trigger points in months of work in hand"
                - "List actions for each trigger, cheapest first"
                - "Identify two sectors that held up in the last downturn"
                - "Agree a cash buffer target with your accountant"
            - name: Homeowner client service for residential studios
              description: |-
                ## Purpose
                Homeowners commissioning an extension or new house are often first-time clients with a fixed budget, strong feelings and no idea what an architect does between sketches and site. A clear welcome pack, a stage-by-stage explanation and honest early cost advice reduce the late-night emails and budget shocks that make domestic work exhausting.

                ## Milestones
                1. A client welcome pack explaining stages, fees, approvals and typical timescales.
                2. Early cost checks with a cost consultant or builder on every domestic job.
                3. A standard meeting and update rhythm agreed with each client.
                4. Feedback collected at the end of each domestic project.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every new domestic client receives the welcome pack, and feedback is collected at the end of each domestic project."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the ten questions homeowners ask most often"
                - "Write a welcome pack answering them stage by stage"
                - "Arrange an early cost check for each new domestic job"
                - "Send a short feedback form when each project completes"
            - name: Liability caps and warranty exposure register
              description: |-
                ## Purpose
                Over ten years a studio can sign dozens of collateral warranties and appointments with different caps, periods and beneficiaries, and few owners know their total exposure. A register of every live liability, its cap and its expiry date shows where the risk sits and informs insurance and contract decisions.

                ## Milestones
                1. Every appointment and warranty from the limitation period listed.
                2. Cap, period, beneficiaries and expiry recorded for each.
                3. Uncapped or unusual liabilities flagged for the broker.
                4. The register reviewed each quarter.

                ## Notes
                Start from the **Risk register** template. Share it with your broker at renewal; it helps them place cover accurately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every live appointment and warranty with cap and expiry, and it is reviewed each quarter."
                cadence: rolling
              tasks:
                - "Collect every signed warranty and appointment still in its liability period"
                - "Record cap, period and expiry for each"
                - "Flag uncapped liabilities to your broker"
                - "Review the exposure register @recurring(quarterly)"
            - name: Copyright and licence to use designs
              description: |-
                ## Purpose
                Architects usually keep copyright in their designs and grant clients a licence to use them, but unpaid fees, a change of architect or a client building a second copy test where that licence ends. Getting the copyright and licence wording right in appointments, and knowing what to do when it is breached, protects the studio's work.

                ## Milestones
                1. Copyright and licence clauses in the standard appointment reviewed.
                2. A rule linking the licence to payment of fees in full.
                3. A procedure for when a client uses the design without paying or after terminating.
                4. A lawyer's view obtained on enforcing copyright where you work.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Revised copyright and licence clauses are in the appointment pack, with a written procedure for breaches reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the copyright clause in your standard appointment"
                - "Ask a lawyer how design copyright is enforced where you work"
                - "Link the licence to full payment in the appointment pack"
                - "Write a short procedure for suspected breaches"
            - name: Studio research and talks programme
              description: |-
                ## Purpose
                Studios with a research interest, whether in timber, housing density or reuse, win better work and attract staff who want more than production drawing. A modest programme of monthly talks, one research question a year and occasional writing builds that reputation without taking over the fee-earning week.

                ## Milestones
                1. One research question chosen for the year.
                2. A monthly lunchtime talk rota with internal and guest speakers.
                3. One article, lecture or exhibition delivered from the research.
                4. Research time budgeted in the resource chart.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Twelve monthly talks are held and one public article, lecture or exhibition is delivered within a year."
                cadence: cyclic
                effort_hours_estimate: "40"
              tasks:
                - "Ask the team to propose research questions for the year"
                - "Choose one question and budget time for it"
                - "Host a lunchtime talk @recurring(monthly:15)"
                - "Pitch one article or lecture from the research"
            - name: Post-occupancy evaluation as a paid service
              description: |-
                ## Purpose
                Few architects return to see how their buildings perform once occupied, yet energy use, comfort and user satisfaction data are exactly what serious clients and juries ask for. Running one post-occupancy evaluation, then offering it as a priced service, turns lessons from finished buildings into both better design and new fee income.

                ## Milestones
                1. A completed building chosen, with the client's agreement to an evaluation.
                2. A method set: occupant survey, walkthrough, energy data and interviews.
                3. A findings report shared with the client and the team.
                4. A priced post-occupancy service added to the fee proposal options.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One post-occupancy evaluation report is delivered and a priced evaluation service appears in the proposal template."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a past client whether you can evaluate their building"
                - "Draft an occupant survey and walkthrough checklist"
                - "Collect a year of energy data from the client"
                - "Price the evaluation as an optional service in proposals"
---

# Owning an Architecture Studio

This area is for the architect who owns a studio, the founder who has just gone out alone and the pair or small partnership running a growing practice. It starts with foundations (registration for everyone using the title, a picture of the studio's fees and costs, standard appointments, stage fee splits and a rule for which jobs to take), moves through the operating machinery of resourcing, fee tracking, invoicing, crits, drawing issue and change control, then the skills of winning fees and administering contracts, the bigger decisions about software, pricing and sectors, the dated events of competitions, tenders and handovers, variants for different kinds of studio and finally specialist work on liability, copyright, research and post-occupancy evaluation.

What repeats is a Monday resourcing meeting, a Thursday crit and a Friday look at scope changes each week, a monthly fee-earned review, invoice run, planning tracker check and issue audit, a quarterly workload forecast and liability review, and a yearly registration renewal, insurance check, awards round and away day. The Metrics log, Operational checklist, Purchase decision, Portfolio piece, Development plan and Risk register templates pair with the projects that name them. Contract, insurance, tax and registration questions go to the right adviser or your registration body; these projects organise the work around them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
