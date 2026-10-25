---
id: real-estate-development.build-contracts-contractor-selection
name: Build Contracts and Contractor Selection
description: "A contractor chosen on purpose: the right procurement route, a vetted tender list, comparable bids scored on quality as well as price, and a signed building contract with bonds, retentions and insurances in place."
category: business
version: 1.0.0
tags: [real-estate-development, build-contracts-contractor-selection, founder, small-business, tendering, building-contracts, contractor-selection, bonds-and-retentions]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - meeting-notes
    - vendor
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Build Contracts and Contractor Selection
          description: "Procuring a contractor: traditional or design and build routes, tender lists, contract forms, bonds and retentions, and choosing on more than price."
          projects:
            - name: Procurement route decision for the scheme
              description: |-
                ## Purpose
                Choosing between traditional, design and build, two-stage and management routes decides who carries design risk, how firm the price is at signing and how much your lender will like the deal. Comparing the routes against your scheme's size, design maturity and your own appetite for risk before anyone is invited to tender avoids the common trap of starting a traditional tender and switching to design and build halfway through.

                ## Milestones
                1. Four routes described in one page each, with who designs, who carries price risk and when the price is fixed.
                2. Each route scored against programme, cost certainty, design control and your team's capacity.
                3. Your lender's or funder's preference on route asked and recorded.
                4. A chosen route written down with the two reasons that decided it.

                ## Notes
                A firm price at signing is only as firm as the design behind it. Design and build on a thin brief often moves the risk into claims rather than removing it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written route decision naming traditional, design and build, two-stage or management, with scores against four criteria and the funder's view recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the scheme's size, unit count and current design stage in five lines"
                - "Score four procurement routes against programme, cost certainty, design control and capacity"
                - "Ask your lender or equity partner which routes they will fund"
                - "Record the chosen route and the two deciding reasons in the scheme file"
            - name: Design information readiness for tender
              description: |-
                ## Purpose
                Contractors price what they can see and add risk money for everything they cannot, so a tender issued on half-finished drawings comes back high, vague or full of exclusions. Checking which drawings, specifications and surveys are complete, and which gaps will be priced as provisional sums, tells you whether you are ready to tender or should hold for a few more weeks of design.

                ## Milestones
                1. A list of every drawing, specification and survey the tender needs, marked complete, in progress or missing.
                2. Each gap given a decision: finish it, price it as a provisional sum or pass it to the contractor to design.
                3. Site investigation, utility and asbestos or contamination reports confirmed as available to bidders.
                4. A go or hold decision on tender issue agreed with the architect and quantity surveyor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tender information checklist with every item marked complete or assigned a treatment, and a recorded go or hold decision on issue."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the architect for the current drawing register with status against each sheet"
                - "Mark each missing item as finish, provisional sum or contractor design"
                - "Confirm which survey and investigation reports can be shared with bidders"
                - "Hold a 30-minute go or hold call with the architect and quantity surveyor"
            - name: Tender budget from the development appraisal
              description: |-
                ## Purpose
                Tender returns are judged against a number, and if that number is not written down before bids arrive, the lowest bid quietly becomes the budget. Setting a target construction cost from the appraisal, with the profit-on-cost floor it protects, gives you a clear line for when a tender is acceptable, when to negotiate and when to pause the scheme.

                ## Milestones
                1. A target contract sum taken from the latest appraisal and pre-tender cost estimate.
                2. The highest contract sum the scheme can bear while still meeting your minimum profit on cost.
                3. Prices for the contract sum, contingency and client-side costs kept on separate lines.
                4. The target and ceiling shared with your quantity surveyor and lender before tender issue.

                ## Notes
                Keep your own contingency outside the contract sum. A contractor's price that already absorbs your contingency leaves nothing for the risks you kept.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page tender budget with a target sum, a ceiling linked to a stated profit-on-cost floor and contingency held separately."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the construction cost line and profit on cost from the latest appraisal"
                - "Ask the quantity surveyor for a pre-tender estimate on the current design"
                - "Work out the highest contract sum that still meets your profit floor"
                - "Send the target and ceiling to the quantity surveyor and lender"
            - name: Procurement programme from tender to start on site
              description: |-
                ## Purpose
                Procurement usually takes three to five months once pre-qualification, tender period, clarifications, lender approval and contract signing are added up, and finance offers, planning conditions and land deals often expire inside that window. A dated procurement programme shows the real start-on-site date and which deadline is at risk first.

                ## Milestones
                1. A programme from long list to start on site with a date for every stage.
                2. A tender period of at least four weeks, longer for larger or design and build schemes.
                3. Lender approval, bond issue and pre-commencement planning conditions shown as their own steps.
                4. The latest start date that keeps finance and land deadlines intact marked in red.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated procurement programme from long list to start on site, with lender, bond and planning steps and a latest safe start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every procurement stage from long list to start on site"
                - "Ask your lender how long their monitoring surveyor needs to review a tender"
                - "Mark finance offer, planning and land deadlines on the same timeline"
                - "Check the procurement programme against actual progress @recurring(weekly:wed)"
            - name: Contract administrator role decided
              description: |-
                ## Purpose
                Someone has to issue instructions, certify payments and decide extensions of time under the contract, and on a design and build job that person acts for you rather than as an independent certifier. Deciding early whether that is your architect, your quantity surveyor or an employer's agent avoids a contract that names a role nobody has been appointed or paid to do.

                ## Milestones
                1. The contract administrator or employer's agent role defined for your chosen route.
                2. Candidates compared, such as the architect, quantity surveyor or a separate employer's agent.
                3. The role's duties and fee confirmed in writing with the chosen firm.
                4. The named person ready to go into the tender documents and contract particulars.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named contract administrator or employer's agent with confirmed duties and fee, ready to insert in the contract particulars."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what the administrator must do under your chosen contract form"
                - "Ask the architect and quantity surveyor whether either will take the role"
                - "Compare their fee quotes and relevant experience side by side"
                - "Confirm the appointment in writing and send the name to your solicitor"
            - name: Lender conditions on the building contract
              description: |-
                ## Purpose
                Lenders often have rules about the build contract before they release the first drawdown: approved contractors, a fixed price, a performance bond of a set level, collateral warranties with step-in rights and their monitoring surveyor's sign-off. Collecting those conditions before tender means they go into the invitation pack, rather than being negotiated after you have chosen a contractor.

                ## Milestones
                1. The lender's facility terms read for every condition touching the build contract.
                2. A one-page list of required bonds, warranties, insurances and approvals.
                3. Each condition matched to the tender document where it will appear.
                4. The monitoring surveyor's review step and timing agreed.

                ## Notes
                If you have not yet chosen a lender, ask two likely lenders for their standard construction conditions so the tender is fundable by either.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of every lender condition on the build contract, each matched to a section of the tender pack."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Highlight every build contract condition in the facility letter or term sheet"
                - "List the bond level, warranties and insurances the lender requires"
                - "Ask the lender how its monitoring surveyor reviews a tender recommendation"
                - "Send the list to your solicitor and quantity surveyor for the tender pack"
            - name: Risk allocation table before tender
              description: |-
                ## Purpose
                Every building contract shares out risks such as ground conditions, design errors, utility delays, price inflation, weather and existing structures, and each one you push onto the contractor comes back as price. A risk allocation table agreed before tender lets you decide which risks to keep, which to pass on, and what you are paying to pass them.

                ## Milestones
                1. Fifteen to twenty scheme risks listed with a short cause and likely cost.
                2. Each risk allocated to you, the contractor or shared, with a reason.
                3. Allocations checked against the chosen contract form's default position.
                4. Departures from the default sent to your solicitor for the amendments schedule.

                ## Notes
                Start from the **Risk register** template. Ground risk passed to a contractor on an uninvestigated site is usually priced high or fought over later.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk allocation table of at least fifteen risks, each assigned to employer, contractor or shared, reconciled with the contract form."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the fifteen risks most likely to cost this scheme money"
                - "Mark each risk as yours, the contractor's or shared"
                - "Ask your solicitor where your choices depart from the standard form"
                - "Review the allocation table against new site information @recurring(quarterly)"
            - name: Choosing the contract form family
              description: |-
                ## Purpose
                Standard forms come in families, such as the JCT and NEC suites in the UK, FIDIC internationally and the AIA documents in the US, and each family has versions for minor works, intermediate jobs and design and build. Picking the form your contractors and lender already know saves legal fees and stops bidders adding a premium for an unfamiliar document.

                ## Milestones
                1. The forms commonly used in your market identified with your solicitor and quantity surveyor.
                2. The version that matches your route and scheme size picked within that family.
                3. Three local contractors asked which forms they sign most often.
                4. The chosen form and edition recorded for the tender pack.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named contract form and edition chosen, matching the procurement route and confirmed as familiar to at least two local contractors."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your quantity surveyor which forms local contractors usually sign"
                - "Match the form version to your route and contract value"
                - "Check the edition date so the tender uses the current one"
                - "Record the chosen form and edition in the scheme file"
            - name: Contractor long list from local completed schemes
              description: |-
                ## Purpose
                Good tender lists start from real buildings rather than directories: schemes of a similar size and type finished nearby in the last three years tell you who has the capacity and the supply chain for yours. A long list of ten to fifteen contractors drawn from site boards, planning records and recommendations gives you enough to whittle down without inviting anyone you have not checked.

                ## Milestones
                1. Ten to fifteen contractors named, each linked to at least one comparable completed scheme.
                2. Annual turnover and typical contract size noted so your job is neither too big nor too small for them.
                3. Recommendations gathered from your quantity surveyor, architect and other developers.
                4. Contractors who already work for your lender or in your area flagged.

                ## Notes
                Your contract should usually be no more than about a quarter to a third of a contractor's annual turnover. Ask your quantity surveyor what ratio they are comfortable with.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A long list of ten to fifteen contractors, each with a comparable completed scheme and a turnover figure recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the contractor names on site boards of three nearby schemes like yours"
                - "Search planning records for similar schemes completed in the last three years"
                - "Ask your quantity surveyor and architect for five names each"
                - "Record turnover and typical contract size against each contractor"
            - name: How procurement routes share risk
              description: |-
                ## Purpose
                Risk does not disappear when a contractor gives a lump sum, it moves to whoever can price it or argue about it later. Working through a simple worked example of the same scheme under traditional, design and build and two-stage routes shows where design changes, ground surprises and late information land under each one.

                ## Milestones
                1. Notes on who designs, who prices and who carries change under each route.
                2. One worked example of a design change priced under each route.
                3. Three questions about routes answered by your quantity surveyor.
                4. A one-paragraph summary of the route you would choose for your next scheme and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes comparing three routes with one worked change example each and a summary paragraph for your next scheme."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain guide to traditional, design and build and two-stage procurement"
                - "Sketch how one late design change would be priced under each route"
                - "Ask your quantity surveyor the three questions your notes left open"
                - "Write a paragraph on which route suits your next scheme"
            - name: Reading a standard building contract
              description: |-
                ## Purpose
                Most developers sign building contracts they have only skimmed, then learn the clauses on completion dates, payment, variations and termination during a dispute. Reading one standard form through once, with the contract particulars beside it, makes every later tender, amendment and negotiation faster and cheaper with your solicitor.

                ## Milestones
                1. The contract particulars or appendix filled in as a practice copy for a sample scheme.
                2. Clauses on time, payment, change, insurance and termination summarised in a line each.
                3. A list of terms you did not understand answered by your solicitor or quantity surveyor.
                4. A one-page crib sheet kept with the scheme file for future tenders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page crib sheet summarising time, payment, change, insurance and termination clauses of the chosen form, with open questions answered."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy or borrow a current copy of the chosen contract form and its guidance notes"
                - "Fill in the contract particulars for a sample version of your scheme"
                - "Summarise the time, payment, change, insurance and termination clauses in a line each"
                - "Ask the agent to turn your clause notes into a one-page crib sheet"
            - name: Bonds and guarantees primer
              description: |-
                ## Purpose
                A performance bond, an advance payment bond and a parent company guarantee each protect you against different failures, and an on-demand bond behaves very differently from a default bond when a contractor goes under. Knowing the difference before tender lets you ask for the right instrument at a level the market will give, typically around ten per cent of the contract sum for a performance bond.

                ## Milestones
                1. Notes on performance bonds, advance payment bonds, retention bonds and parent company guarantees.
                2. The difference between on-demand and default bonds written in your own words.
                3. Typical bond levels and expiry points in your market confirmed with your quantity surveyor or broker.
                4. The instruments you will ask for on this scheme listed for the tender pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on four security instruments, the on-demand versus default distinction and the instruments chosen for this tender."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a surety or broker guide to construction bonds"
                - "Write the difference between on-demand and default bonds in three sentences"
                - "Ask your broker what bond levels local contractors can usually obtain"
                - "List the bonds and guarantees you will require in the tender pack"
            - name: Retention terms and retention bonds primer
              description: |-
                ## Purpose
                Retention is the slice of each payment you hold back as security for defects, commonly between three and five per cent, released in stages at completion and at the end of the defects period. Deciding the percentage, the release points, whether money is held in trust and whether you will accept a retention bond instead shapes your cash flow and how contractors price the job.

                ## Milestones
                1. Notes on how retention works under your chosen contract form.
                2. Local rules on holding retention, such as trust account or prompt payment requirements, checked with your solicitor.
                3. The retention percentage and release stages chosen for this scheme.
                4. A decision recorded on whether a retention bond will be accepted in place of cash retention.

                ## Notes
                Releasing retention at the end of the build belongs with handover. This project is about setting the terms before the contract is signed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded retention percentage, release stages and a yes or no on retention bonds, checked against local rules by your solicitor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the retention clauses of your chosen contract form"
                - "Ask your solicitor whether local law requires retention to be held in trust"
                - "Model the cash flow effect of three and five per cent retention"
                - "Record the chosen percentage, release stages and bond position"
            - name: Liquidated damages and extensions of time
              description: |-
                ## Purpose
                Delay to completion costs you interest, lost rent or late sales, and the liquidated damages rate is your only agreed compensation for it, so a rate pulled from another job can leave you badly short. Working out a defensible weekly rate from your finance costs and lost income, and learning how extensions of time reduce it, prepares you for the most argued clause in most contracts.

                ## Milestones
                1. Weekly finance cost, lost rent or delayed sales income for this scheme calculated.
                2. A proposed liquidated damages rate with its workings kept on file.
                3. The events that give the contractor more time under the chosen form listed.
                4. Your solicitor's view on the rate and any cap recorded.

                ## Notes
                Damages that look like a penalty rather than a genuine estimate of loss may not be enforceable in some jurisdictions. Keep your workings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A liquidated damages rate with written workings from finance and income costs, reviewed by your solicitor, plus a list of relevant events."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the weekly interest and fees on the construction loan at peak debt"
                - "Add a week of lost rent or delayed sales income to the figure"
                - "List the relevant events that extend time under the chosen form"
                - "Send your proposed rate and workings to your solicitor for comment"
            - name: Contractor insurances in a building contract
              description: |-
                ## Purpose
                Insurance sections in building contracts decide who insures the works, existing structures and neighbouring property, and whether policies are in joint names so you can claim directly. Understanding contractor's all risks, public liability, employer's liability and professional indemnity for any design the contractor does lets you set levels in the tender that your broker and lender will accept.

                ## Milestones
                1. Notes on the main construction policies and who normally takes each out.
                2. The insurance option in your chosen form that fits a new build or works to existing buildings picked.
                3. Required cover levels confirmed with your broker and lender.
                4. An insurance schedule ready to insert in the tender documents.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An insurance schedule for the tender listing each policy, the party responsible and the cover level, confirmed by your broker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the insurance section of your chosen contract form"
                - "Ask your broker which policy options suit a new build versus existing structures"
                - "Confirm the minimum cover levels your lender requires"
                - "Draft the insurance schedule for the tender pack"
            - name: Interim payment and notice rules
              description: |-
                ## Purpose
                Payment terms decide how often the contractor is paid, how valuations happen and what notices you must issue to pay less than they claim, and in some countries a statutory regime overrides the contract if you get it wrong. Learning the payment cycle and notice deadlines before signing means the contract matches your lender's drawdown timing instead of fighting it.

                ## Milestones
                1. The payment cycle, valuation dates and final date for payment in your form noted.
                2. Any statutory payment rules in your jurisdiction confirmed with your solicitor.
                3. The contract payment dates aligned with your lender's drawdown and monitoring surveyor timetable.
                4. A short note of the notices you must issue and by when.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written payment calendar aligning contract valuation dates with lender drawdowns, plus a list of notices and their deadlines."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the payment clauses and note each date and notice"
                - "Ask your solicitor whether statutory payment rules apply to your contract"
                - "Line up contract valuation dates with the lender's drawdown cycle"
                - "Write the notice deadlines on one page for the contract administrator"
            - name: Contractor's design portion and responsibility
              description: |-
                ## Purpose
                When a contractor designs part of the works, such as piling, roof trusses, mechanical services or the whole building after novation, the contract must say exactly which parts, to what standard and with what insurance. Mapping those parts before tender stops the gap where your architect thinks the contractor designed it and the contractor thinks it was only installed.

                ## Milestones
                1. Every element the contractor or a specialist subcontractor will design listed.
                2. The standard of care for contractor design, such as reasonable skill and care or fitness for purpose, agreed with your solicitor.
                3. Professional indemnity cover required for the design portion set.
                4. The list matched to the design team's responsibility matrix with no gaps.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A contractor design list with the standard of care and indemnity level, reconciled with the design team's responsibility matrix."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the architect which elements are left for contractor or specialist design"
                - "Write each element with the drawings and performance specification that define it"
                - "Agree the standard of care wording with your solicitor"
                - "Check the list against the design responsibility matrix for gaps"
            - name: Reading contractor accounts and credit reports
              description: |-
                ## Purpose
                Contractors fail most often on thin margins, stretched cash and one bad job, and the warning signs are usually visible in filed accounts and credit reports months ahead. Learning to read turnover trends, margins, net current assets, cash and director changes lets you judge a shortlist yourself rather than trusting a single credit score.

                ## Milestones
                1. The five figures to check in contractor accounts written down with what good and bad look like.
                2. Two sets of filed accounts read from local contractors as practice.
                3. A credit report from a commercial agency read for score, payment record and court judgments.
                4. A one-page checklist ready to use on the shortlist.

                ## Notes
                A healthy order book with falling cash can be a warning rather than reassurance. Ask your accountant or quantity surveyor to sense-check your first reading.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page financial checklist covering at least five measures, tested on two real contractors' filed accounts."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download the latest filed accounts for two contractors on your long list"
                - "Note turnover, margin, net current assets, cash and director changes for each"
                - "Order one commercial credit report and read the payment and judgment sections"
                - "Write a one-page checklist for reviewing the shortlist"
            - name: Pre-qualification questionnaire for contractors
              description: |-
                ## Purpose
                Sending a short questionnaire to the long list filters out contractors who are too small, too busy or wrong for the work before anyone spends weeks pricing. Asking the same questions of everyone, on turnover, similar schemes, health and safety record, insurance, bonding capacity and current workload, makes the shortlist defensible to a lender or partner.

                ## Milestones
                1. A questionnaire of no more than two pages with set scoring for each answer.
                2. Pass or fail thresholds set for turnover, insurance and safety record.
                3. Questionnaires sent to the long list with a two-week return date.
                4. Returns scored and ranked on one sheet.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored pre-qualification sheet ranking every returned questionnaire against the same thresholds and weightings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a two-page questionnaire from your criteria"
                - "Set pass or fail thresholds for turnover, insurance and safety record"
                - "Send the questionnaire to the long list with a two-week deadline"
                - "Score the returns on one sheet and rank them"
            - name: Financial and reference checks on the shortlist
              description: |-
                ## Purpose
                Building on a contractor that fails halfway through can add months and a large share of the remaining cost to a scheme, so the shortlist deserves more than a glance at the brochure. Running financial checks, calling two past clients each and confirming bonding capacity before tender means you only invite contractors you would be willing to sign.

                ## Milestones
                1. Filed accounts and a credit report reviewed for each shortlisted contractor.
                2. Two past clients per contractor called with the same five questions.
                3. Bonding capacity at the level you need confirmed in writing by each contractor's surety or bank.
                4. A short note per contractor recording any concerns and the decision to keep or drop them.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A check note for every shortlisted contractor covering accounts, two client references and confirmed bonding capacity, with a keep or drop decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run your financial checklist on each shortlisted contractor's accounts"
                - "Call two past clients each and ask about programme, quality and claims"
                - "Ask each contractor for written confirmation of bonding capacity"
                - "Record a keep or drop decision with the reason for each"
            - name: Visits to contractors' live sites
              description: |-
                ## Purpose
                Walking a contractor's current site for half an hour tells you more about their site management, safety culture and subcontractor control than any questionnaire. Visiting one live job for each serious contender, ideally one of similar size, shows whether the people who will run your site keep a tidy, safe and organised job.

                ## Milestones
                1. One live site visit booked with each shortlisted contractor.
                2. The same checklist used on every visit, covering housekeeping, safety, programme display and quality.
                3. The site manager or project manager who would run your job met on the visit where possible.
                4. Visit notes added to each contractor's record.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from one live site visit per shortlisted contractor, each completed against the same checklist."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a ten-point site visit checklist covering safety, tidiness and quality"
                - "Ask each shortlisted contractor to host a visit to a comparable live site"
                - "Meet the site manager and ask how they run weekly subcontractor meetings"
                - "Add the completed checklist to each contractor's record"
            - name: Final tender list of four to six contractors
              description: |-
                ## Purpose
                Inviting too many bidders wastes everyone's time and makes the best contractors decline, while inviting too few leaves no competition when one drops out. Fixing a final list of four to six who have passed pre-qualification and checks, and confirming each will genuinely price, gives a fair and competitive tender.

                ## Milestones
                1. Four to six contractors chosen from the scored shortlist with reasons recorded.
                2. Each invited contractor confirmed in writing as willing to submit a full price by the return date.
                3. Your lender or partner told of the list and any objections cleared.
                4. One reserve contractor named in case someone withdraws.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A final tender list of four to six contractors, each with written confirmation of intent to bid, approved by the lender or partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose four to six names from the scored shortlist"
                - "Email each to confirm they will submit a full price by the return date"
                - "Send the list to your lender or partner for approval"
                - "Name a reserve contractor and tell them they may be called"
            - name: Invitation to tender pack
              description: |-
                ## Purpose
                Bidders can only price consistently if they receive the same complete pack: instructions, drawings, specifications, contract form and amendments, pricing document, programme requirements, insurance and bond schedules and how bids will be scored. A clean, indexed pack issued on one day reduces queries, exclusions and the risk of a bid that cannot be compared.

                ## Milestones
                1. Instructions to tenderers written with the return date, format, validity period and scoring method.
                2. Drawings, specifications, surveys and the drawing register indexed in one place.
                3. Contract form, particulars, amendments and the bond, warranty and insurance schedules included.
                4. The pack issued to every bidder at the same time with receipt confirmed.

                ## Notes
                State the tender validity period, often ninety days, so prices hold while you get lender approval.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete, indexed tender pack issued to every bidder on the same day, with receipt confirmed by each."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the instructions to tenderers with return date, validity and scoring"
                - "Collect the drawings, specifications and surveys into one indexed folder"
                - "Add the contract particulars, amendments and security schedules"
                - "Issue the pack to every bidder on the same day and log receipts"
            - name: Pricing document and contract sum analysis
              description: |-
                ## Purpose
                Five bids priced in five different formats cannot be compared without weeks of rework. Setting a pricing document, whether a bill of quantities, an activity schedule or a structured contract sum analysis, with preliminaries, overheads and profit, provisional sums and each element on its own line, makes every bid readable line by line.

                ## Milestones
                1. The pricing format chosen with your quantity surveyor to suit the route.
                2. Preliminaries, overheads and profit, provisional sums and dayworks set out as separate lines.
                3. Provisional sums and their amounts fixed so every bidder carries the same figure.
                4. The pricing document added to the tender pack as a spreadsheet bidders must use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mandatory pricing spreadsheet with separate preliminaries, overheads and profit, provisional sums and elemental lines, included in the tender pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree the pricing format with your quantity surveyor"
                - "List the provisional sums and set an amount for each"
                - "Build the spreadsheet with locked headings and separate preliminaries lines"
                - "Add the spreadsheet to the tender pack with an instruction to use it"
            - name: Tender query and clarification log
              description: |-
                ## Purpose
                During the tender period bidders ask questions, and an answer given to one but not the others undermines the whole comparison. A single log of every query, with the answer sent to all bidders in a numbered tender bulletin, keeps the tender fair and gives you a record if a bidder later claims they priced something differently.

                ## Milestones
                1. One log set up with the query, bidder, date received, answer and bulletin number.
                2. A rule that all answers go to every bidder without naming who asked.
                3. Every query answered within a set number of working days.
                4. The log closed and filed with the tender returns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tender query log in which every query has a dated answer issued to all bidders in a numbered bulletin."
                cadence: rolling
              tasks:
                - "Set up the query log with columns for bidder, date, answer and bulletin"
                - "Send all bidders the rule that answers will be shared with everyone"
                - "Answer open queries and issue a numbered tender bulletin @recurring(weekly:mon,thu)"
                - "File the closed log with the tender returns"
            - name: Mid-tender meeting with each bidder
              description: |-
                ## Purpose
                Halfway through the tender period, a short meeting with each bidder separately surfaces misunderstandings, missing information and early signs that someone is about to withdraw. Using the same agenda for every bidder, and sharing any answers through the query log, keeps the meetings fair and the prices comparable.

                ## Milestones
                1. One meeting held with each bidder in the middle of the tender period.
                2. The same agenda used for every meeting, covering programme, site logistics, key risks and queries.
                3. Any new information shared with all bidders through a tender bulletin.
                4. Notes filed for each bidder, including any signs of withdrawal.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from a mid-tender meeting with every bidder on a common agenda, with any new information issued to all."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page agenda to use with every bidder"
                - "Book a 45-minute slot with each bidder in the middle week of the tender"
                - "Issue a tender bulletin covering any new information shared"
                - "File the notes for each bidder in their contractor record"
            - name: Tender return day and opening check
              description: |-
                ## Purpose
                On return day, a late, incomplete or heavily qualified bid can derail a tender if nobody has decided in advance how to treat it. Opening bids together with your quantity surveyor, logging the time and price of each and checking arithmetic and completeness straight away keeps the process clean and gives your lender confidence in the result.

                ## Milestones
                1. Bids opened at a set time with two people present and the time of receipt logged.
                2. Headline prices and qualifications recorded on one sheet.
                3. Arithmetic checked and errors handled by the rule set out in the instructions.
                4. Missing documents requested from bidders within two working days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed opening record listing every bid's receipt time, headline price, qualifications and arithmetic check result."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the quantity surveyor how late or incomplete bids will be treated"
                - "Open the bids together and log receipt time and headline price"
                - "Run the arithmetic check on every pricing document"
                - "Request missing documents from bidders within two working days"
            - name: Like-for-like tender comparison
              description: |-
                ## Purpose
                Headline prices hide exclusions, qualifications, different provisional sum treatment and preliminaries that run for a shorter programme than you expect. Adjusting each bid to the same basis, adding a priced allowance for every exclusion, shows which contractor is actually cheapest and by how much.

                ## Milestones
                1. Every qualification and exclusion listed bid by bid.
                2. Each exclusion priced and added back so all bids sit on the same basis.
                3. Preliminaries compared against each bidder's programme length.
                4. A normalised ranking produced alongside the headline ranking.

                ## Notes
                Start from the **Purchase decision** template. A bid far below the rest is a question to ask, not a prize: check what is missing before celebrating.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A normalised tender comparison with every exclusion priced back in, showing adjusted and headline rankings side by side."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every qualification and exclusion from each bid"
                - "Ask the quantity surveyor to price each exclusion back in"
                - "Compare preliminaries against each bidder's programme length"
                - "Rank the bids on the adjusted totals"
            - name: Weighted quality scoring beyond price
              description: |-
                ## Purpose
                Price is the easiest thing to compare and often the least predictive of outcome: the site team, programme realism, approach to key risks, safety record and financial strength decide whether the job finishes on time. Scoring bids on a weighting set before tender, such as sixty per cent price and forty per cent quality, stops the cheapest number winning by default.

                ## Milestones
                1. Quality criteria and weightings fixed and stated in the tender instructions.
                2. Each bid scored by at least two people separately before scores are compared.
                3. Price converted to a score using the formula published to bidders.
                4. Combined scores recorded with a short justification for each quality mark.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A combined price and quality score for every bid, using pre-published weightings, with two independent quality scores per bid."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Fix the quality criteria and price weighting in the tender instructions"
                - "Score each bid's quality answers separately from a colleague"
                - "Convert prices to scores using the published formula"
                - "Record combined scores with a sentence justifying each quality mark"
            - name: Contractor interviews with the proposed site team
              description: |-
                ## Purpose
                Bid presentations are often given by a firm's best presenters, while a different team turns up on site. Interviewing the top two or three bidders with the named project manager, site manager and commercial manager in the room, and making those people a contract commitment, tests who you will really work with for the next eighteen months.

                ## Milestones
                1. Interviews held with the top two or three bidders, each with the named site team present.
                2. The same questions asked of every team, including how they would handle your three biggest risks.
                3. Interview scores folded into the quality scoring.
                4. Named key people listed for inclusion in the contract.

                ## Notes
                Start from the **Meeting notes** template for each interview.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Interviews with the top bidders' named site teams, scored on common questions, with key people listed for the contract."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the top bidders to bring their named project and site managers"
                - "Write six questions, including three on your biggest scheme risks"
                - "Score each interview against the quality criteria"
                - "List the named key people to include in the contract"
            - name: Post-tender clarifications and negotiation
              description: |-
                ## Purpose
                After scoring, the preferred bidder's qualifications still need to be closed out, and this is where most of the value and most of the risk is negotiated. Working through each qualification, agreeing a price or a withdrawal, and confirming the final programme in writing turns a qualified bid into a contract sum you can sign.

                ## Milestones
                1. Every qualification in the preferred bid listed with a target outcome.
                2. Each one withdrawn, priced or accepted, with the result confirmed in writing.
                3. Savings options considered only where they do not change planning or lender requirements.
                4. A final agreed contract sum and programme confirmed by letter.

                ## Notes
                Keep the second-placed bidder warm until the contract is signed, and do not negotiate one bidder down using another's prices.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A post-tender clarifications schedule with every qualification resolved and a final contract sum and programme confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every qualification in the preferred bid with your target outcome"
                - "Meet the preferred bidder to work through the list"
                - "Confirm each agreed outcome in a clarifications schedule"
                - "Ask the bidder to confirm the final contract sum and programme by letter"
            - name: Tender report and recommendation
              description: |-
                ## Purpose
                Your lender, equity partner or board will want to see why one contractor was chosen, and their monitoring surveyor will check the process before any drawdown. A tender report that sets out the process, the bids, the adjustments, the scores and the residual risks makes approval quicker and leaves a record if the choice is questioned later.

                ## Milestones
                1. A report covering process, bidders, headline and adjusted prices, quality scores and recommendation.
                2. The recommended contract sum compared with the tender budget and appraisal.
                3. Residual risks and open items listed with owners.
                4. Approval received from the lender, partner or board.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tender report approved by the lender, partner or board, showing adjusted prices, scores, budget comparison and residual risks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the quantity surveyor for the draft tender report"
                - "Add the comparison with the tender budget and updated appraisal"
                - "List residual risks and open items with an owner for each"
                - "Send the report to the lender, partner or board for approval"
            - name: Letter of intent with a capped liability
              description: |-
                ## Purpose
                When the programme will not wait for the full contract to be signed, a letter of intent lets the contractor order long-lead items or start limited work, but open-ended letters are a common source of expensive disputes. A letter with a fixed scope, a cash cap, a time limit and the intended contract terms named keeps your exposure known.

                ## Milestones
                1. A decision recorded on whether a letter of intent is needed or the contract can be signed first.
                2. The permitted scope, cash cap and expiry date set.
                3. The letter drafted or reviewed by your solicitor.
                4. A date fixed for replacing the letter with the signed contract.

                ## Notes
                Track spend against the cap. Letters of intent that are extended several times often end up governing the whole job.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Either a recorded decision not to use a letter of intent, or a solicitor-reviewed letter with scope, cash cap and expiry date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether early works truly cannot wait for signing"
                - "List the scope and long-lead orders the letter would cover"
                - "Set a cash cap and expiry date for the letter"
                - "Ask your solicitor to draft or review the letter"
            - name: Contract signing and execution pack
              description: |-
                ## Purpose
                Signing a building contract is a document exercise as much as a decision: the final drawings and specifications, amendments, clarifications, contract sum analysis, programme and every schedule must be bound together and match. An execution pack checked line by line before signature prevents the classic dispute over which drawing revision the price was based on.

                ## Milestones
                1. The contract documents listed with drawing and specification revisions fixed.
                2. Amendments, clarifications and the agreed programme incorporated.
                3. The signing method, whether under hand or as a deed, confirmed with your solicitor.
                4. The contract signed by both parties with a full copy held by you, the contract administrator and the lender.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed building contract with a checked document list and fixed revisions, copies held by you, the contract administrator and the lender."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the contract administrator for the full list of contract documents"
                - "Check every drawing revision against the one the price was based on"
                - "Confirm with your solicitor whether the contract is signed as a deed"
                - "Send signed copies to the contract administrator and lender"
            - name: Bonds and guarantees in place before start on site
              description: |-
                ## Purpose
                A performance bond or parent company guarantee that is still being drafted when the contractor starts often never arrives, because your bargaining position disappears once work begins. Making delivery of the agreed security a condition of possession of the site, and checking the wording and issuer, closes that gap.

                ## Milestones
                1. The bond and guarantee wording agreed with your solicitor.
                2. The issuing bank or surety checked for credit standing.
                3. Original signed instruments received before site possession.
                4. Expiry dates and release conditions logged.

                ## Notes
                Check that the bond beneficiary is the contracting company, and that the lender is named or can take an assignment if its terms require it.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed originals of the agreed bond and any parent company guarantee received before site possession, with expiry dates logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send the agreed bond and guarantee wording to the contractor"
                - "Check the issuing bank or surety's credit rating"
                - "Make site possession conditional on receiving the signed originals"
                - "Log expiry dates and release conditions in the security register"
            - name: Subcontractor warranties and key subcontractor list
              description: |-
                ## Purpose
                Buyers, tenants and lenders often want warranties from the subcontractors who design or install key elements such as the frame, roof, facade, lifts and mechanical services, not just from the main contractor. Naming those subcontractors in the contract and making their warranties a payment condition makes sure the paperwork arrives while you still hold money.

                ## Milestones
                1. Key subcontract packages that need warranties listed.
                2. The warranty form and beneficiaries agreed with your solicitor and lender.
                3. The obligation to provide warranties written into the contract with a payment link.
                4. A tracker of warranties requested, received and signed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A key subcontractor warranty list written into the contract, with a tracker showing every warranty as requested, received or signed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the subcontract packages that design or carry long-term risk"
                - "Agree the warranty form and beneficiaries with your solicitor"
                - "Link warranty delivery to payment in the contract"
                - "Chase outstanding subcontractor warranties with the contractor @recurring(monthly:22)"
            - name: Debriefing unsuccessful bidders
              description: |-
                ## Purpose
                Contractors spend real money pricing your tender, and those who hear nothing are less likely to bid next time. A short, honest debrief to each unsuccessful bidder, giving their rank and the main reasons without revealing other bidders' prices, builds the reputation that gets good contractors to price your next scheme.

                ## Milestones
                1. Each unsuccessful bidder told in writing after the contract is signed.
                2. A debrief offered with rank and main strengths and weaknesses.
                3. No other bidder's price or confidential information disclosed.
                4. Their interest in future tenders recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every unsuccessful bidder sent a written outcome and offered a debrief, with their interest in future tenders recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write to each unsuccessful bidder once the contract is signed"
                - "Offer each a 20-minute call on their rank and main reasons"
                - "Prepare debrief points without other bidders' prices"
                - "Note each bidder's interest in your next scheme"
            - name: Construction market watch on tender prices
              description: |-
                ## Purpose
                Tender prices move with materials, labour shortages and how busy contractors are, and a scheme appraised a year ago may be out by a meaningful margin by the time it reaches tender. A monthly look at published tender price indices, material costs and what local contractors say about their order books keeps appraisals and tender budgets honest.

                ## Milestones
                1. Two or three sources of tender price and material cost data chosen.
                2. A monthly note of index movement and contractor capacity kept.
                3. Live appraisals updated when the market moves beyond a set threshold.
                4. A quarterly summary shared with partners or lenders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly market log with index movements and capacity notes for twelve months, with appraisals updated past a set threshold."
                cadence: rolling
              tasks:
                - "Choose two published tender price or material cost indices for your market"
                - "Log index movement and contractor capacity comments @recurring(monthly:12)"
                - "Update live appraisals when prices move past your threshold"
                - "Send a short market summary to partners or lenders @recurring(quarterly)"
            - name: Contractor bench record for future schemes
              description: |-
                ## Purpose
                Developers who build repeatedly win better prices and fewer surprises because they know which contractors suit which jobs. Keeping one record per contractor, with tenders, scores, references, finances and how jobs went, turns each procurement into a head start on the next.

                ## Milestones
                1. A record per contractor with contact, turnover, sectors and past tenders.
                2. Tender scores, interview notes and debrief outcomes added after each tender.
                3. Contractors rated for size band and scheme type.
                4. A short list of preferred contractors ready for the next scheme.

                ## Notes
                Start from the **Vendor** template for each contractor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current record for every contractor tendered, refreshed each quarter, with a preferred list by size band and scheme type."
                cadence: rolling
              tasks:
                - "Create a record for each contractor on your last tender list"
                - "Add scores, references and debrief notes from the tender"
                - "Refresh contractor records with new schemes and finances @recurring(quarterly)"
                - "Prune contractors who no longer fit your scheme sizes @recurring(yearly)"
            - name: Insurance and bond expiry register
              description: |-
                ## Purpose
                Contractor policies renew each year and bonds have expiry dates tied to completion, and a lapse often goes unnoticed until a claim. A register of every policy and security instrument, checked monthly against current certificates, means you find a gap while you can still withhold payment or insist on renewal.

                ## Milestones
                1. Every contractor policy, bond and guarantee listed with issuer, level and expiry.
                2. Current certificates on file for each.
                3. Renewal requests sent a month before each expiry.
                4. Lender notified of any lapse or reduction straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A security and insurance register with current certificates for every item and no expiry passed without a renewal on file."
                cadence: rolling
              tasks:
                - "List every policy, bond and guarantee with issuer, level and expiry"
                - "Check the register against current certificates @recurring(monthly:5)"
                - "Request renewal evidence a month before each expiry"
                - "Confirm annual policy renewals for every live contract @recurring(yearly)"
            - name: Tender pipeline tracker across schemes
              description: |-
                ## Purpose
                Founders running two or three schemes at once can lose track of which tender is at pre-qualification, which is awaiting lender approval and which letter of intent is about to expire. One tracker across every scheme, reviewed monthly, shows where procurement is holding up a start date before it costs a finance offer.

                ## Milestones
                1. A tracker listing each scheme, procurement stage, next step, owner and date.
                2. Every live tender, letter of intent and pending signing captured.
                3. Stages that are behind the procurement programme flagged.
                4. The tracker reviewed monthly with your quantity surveyor or project manager.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A procurement tracker covering every live scheme, reviewed monthly, with each overdue stage flagged and assigned."
                cadence: rolling
              tasks:
                - "List each live scheme with its current procurement stage and next step"
                - "Add letter of intent expiry dates and tender validity dates"
                - "Review the tracker and flag overdue stages @recurring(monthly:27)"
                - "Send the flagged items to their owners after each review"
            - name: Contractor financial health monitoring after signing
              description: |-
                ## Purpose
                A contractor can look healthy at tender and be in trouble a year later, with late payments to subcontractors, slowing labour on site and new court judgments as the early signs. Quarterly credit checks and a monthly watch on those signals give you time to talk to your solicitor and lender before an insolvency, not after.

                ## Milestones
                1. A list of contracted contractors to monitor with the warning signs to watch.
                2. A quarterly credit check run on each.
                3. Subcontractor payment complaints and site labour levels noted monthly.
                4. A trigger agreed for escalating concerns to your solicitor and lender.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly credit checks and monthly warning-sign notes on every contracted contractor, with an agreed escalation trigger written down."
                cadence: rolling
              tasks:
                - "Write the five warning signs you will watch for each contractor"
                - "Run a credit check on each contracted contractor @recurring(quarterly)"
                - "Note subcontractor complaints and site labour levels @recurring(monthly:18)"
                - "Agree an escalation trigger with your solicitor"
            - name: Procurement lessons review after each tender
              description: |-
                ## Purpose
                Each tender teaches something: a pack that caused too many queries, a qualification that cost money later, a scoring weight that felt wrong. A short review after every procurement, with three changes carried into your standard documents, makes the next tender cheaper to run and better at picking the right contractor.

                ## Milestones
                1. A review held within a month of signing each contract.
                2. What worked and what did not recorded under pack, process, scoring and contract.
                3. Three changes made to your standard tender documents.
                4. A yearly look across all reviews for repeated problems.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written review after each tender with three changes made to standard documents, plus a yearly cross-tender summary."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Book a one-hour review with your quantity surveyor after signing"
                - "Record lessons under pack, process, scoring and contract"
                - "Change three things in your standard tender documents"
                - "Read back through every lessons review for repeated problems @recurring(yearly)"
            - name: First build contract as a new developer
              description: |-
                ## Purpose
                First-time developers are often tempted to use a builder they know, on a quote and a handshake, and the lender's monitoring surveyor then refuses to fund it. Working through a simple, lender-ready procurement with a small competitive tender, a standard form and basic security gives a first scheme the same protections a seasoned developer would insist on.

                ## Milestones
                1. A quantity surveyor appointed to run or check the procurement.
                2. Three to four contractors invited on a standard form suited to the scheme size.
                3. The lender's monitoring surveyor engaged before the tender returns.
                4. A signed contract with retention, insurance and some form of security.

                ## Notes
                A known builder can still bid, but put them through the same checks as everyone else.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first build contract signed on a standard form after a tender of at least three bidders, accepted by the lender's monitoring surveyor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask two developers you trust which quantity surveyor they use"
                - "Invite three or four contractors on a standard form"
                - "Introduce the lender's monitoring surveyor to the quantity surveyor"
                - "Review progress with your quantity surveyor @recurring(monthly:9)"
            - name: Small scheme with a local builder on a minor works form
              description: |-
                ## Purpose
                Two to six homes or a conversion rarely justify a full bill of quantities and a large contractor, but a quote on a letterhead leaves too much undefined. Using a minor works or homeowner-scale standard form, a priced specification and a short tender among local builders gives a small scheme clear terms without big-contractor overheads.

                ## Milestones
                1. A minor works form suited to the contract value chosen.
                2. A priced specification and drawings issued to three local builders.
                3. Builders checked for insurance, references and recent similar jobs.
                4. A signed minor works contract with a programme, retention and stage payments.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A minor works contract signed with one of three tendering local builders, with programme, retention and stage payments set out."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your quantity surveyor which minor works form fits your contract value"
                - "Turn the drawings into a priced specification for local builders"
                - "Check insurance certificates and two references for each builder"
                - "Agree stage payments linked to visible milestones"
            - name: Managing trade packages without a main contractor
              description: |-
                ## Purpose
                Some builder-developers save the main contractor's margin by letting trade packages directly, but that moves coordination, programme, safety duties and the gaps between packages onto you. Deciding with eyes open whether you have the site team, insurance and cash to do this, and setting up package contracts that fit together, avoids the costs that eat the saved margin.

                ## Milestones
                1. A decision recorded on whether to self-manage, with your site team, insurances and safety duties assessed.
                2. Trade packages defined with clear interfaces between them.
                3. A standard package contract with scope, programme, retention and insurance requirements.
                4. A weekly coordination routine across all packages in place.

                ## Notes
                Self-managing usually makes you the principal contractor for health and safety purposes. Check your legal duties with a safety adviser first.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded self-manage decision with trade packages, interfaces and a standard package contract defined."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the site management, insurance and safety roles you would have to cover"
                - "Split the works into trade packages and note each interface"
                - "Ask your solicitor for a standard trade package contract"
                - "Run a coordination meeting with all package contractors @recurring(weekly:tue)"
            - name: Procuring a contractor in a small island market
              description: |-
                ## Purpose
                In smaller Caribbean and other island markets there may be only a handful of contractors able to deliver a mid-sized scheme, many materials are imported, and the hurricane season shapes both programme and insurance. Adapting the tender to a thin market, with longer lead times, clear terms for shipping delays and price changes, and a realistic view of who can bond the job, gives a fair contest where open competition is limited.

                ## Milestones
                1. Every contractor in the market capable of the scheme identified, including regional firms from nearby islands.
                2. Tender terms covering imported material price movements and shipping delays agreed with your quantity surveyor.
                3. Hurricane season risks reflected in the programme, insurance and site protection requirements.
                4. Bonding and insurance availability checked with local banks and brokers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tender approach for an island market naming all capable contractors and covering imported materials, hurricane season and available bonding."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every contractor on the island and nearby islands able to deliver your scheme"
                - "Ask local banks and brokers what bonds and insurances contractors can obtain"
                - "Agree a fluctuations clause for imported materials with your quantity surveyor"
                - "Check shipping lead times for key imported materials @recurring(monthly:15)"
            - name: Two-stage tender with early contractor involvement
              description: |-
                ## Purpose
                On complex or time-pressed schemes, a two-stage tender appoints a contractor early on preliminaries, overheads and profit, then builds the price with them through a pre-construction period. It gains buildability input and programme but weakens price competition, so it needs a tight pre-construction agreement, open-book package tendering and a clear exit if the second-stage price is too high.

                ## Milestones
                1. First-stage tender run on preliminaries, overheads and profit, programme and approach.
                2. A pre-construction services agreement signed with fees, deliverables and a break clause.
                3. Subcontract packages tendered open book with your quantity surveyor seeing every return.
                4. A second-stage price compared with the cost plan and either accepted or the agreement ended.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A second-stage contract sum built from open-book package tenders, tested against the cost plan, with an accept or exit decision recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your quantity surveyor whether the scheme suits a two-stage route"
                - "Draft first-stage scoring on preliminaries, overheads, profit and approach"
                - "Agree a pre-construction services agreement with a break clause"
                - "Attend a pre-construction progress meeting with the contractor @recurring(weekly:thu)"
            - name: Schedule of amendments to the standard form
              description: |-
                ## Purpose
                Experienced developers and their lenders rarely sign a standard form unchanged, but long schedules of one-sided amendments put off good contractors and come back as price. A focused schedule that changes only what your risk table, lender and scheme genuinely need, explained in plain terms to bidders, keeps the contract fair and the tender competitive.

                ## Milestones
                1. Each proposed amendment linked to a reason from the risk table, lender conditions or scheme.
                2. Amendments ranked as essential, preferred or tradeable.
                3. The schedule issued with the tender and bidders asked to price or comment on each item.
                4. Final amendments agreed and recorded before signing.

                ## Notes
                Your solicitor drafts the amendments. Your job is to know why each one is there and which ones you would give up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule of amendments in which every item is linked to a reason and ranked essential, preferred or tradeable, agreed before signing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your solicitor for their standard amendments schedule"
                - "Strike out amendments that no risk, lender condition or scheme feature requires"
                - "Rank the remaining items as essential, preferred or tradeable"
                - "Review bidders' comments on each amendment before negotiation"
            - name: Contractor insolvency contingency plan
              description: |-
                ## Purpose
                When a main contractor fails, the developer who already knows where the bond, warranties, design information and subcontractor contacts sit can restart the site in weeks rather than months. A written contingency plan, reviewed each quarter, covers securing the site, calling on security, protecting materials and retendering the remaining work.

                ## Milestones
                1. The contract's termination and insolvency clauses summarised with your solicitor.
                2. A list of bond, guarantee, warranty and insurance documents with where each original is held.
                3. Steps for securing the site, plant and unfixed materials written down.
                4. A replacement contractor approach agreed, such as the second-placed bidder or a completion contractor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written insolvency plan covering termination clauses, security documents, site securing steps and a replacement contractor route, reviewed quarterly."
                cadence: rolling
              tasks:
                - "Ask your solicitor to summarise the termination and insolvency clauses"
                - "List where every bond, guarantee and warranty original is held"
                - "Write the steps for securing the site and unfixed materials"
                - "Review the plan against the contractor's current position @recurring(quarterly)"
---

# Build Contracts and Contractor Selection

This area covers the stretch between a scheme with planning and a contractor on site: choosing how to procure the build, finding and vetting contractors, running a fair tender, reading and amending the contract, and signing it with the right bonds, guarantees and insurances behind it. It is written for founders and small development businesses who may only let one or two building contracts a year. It starts with the foundations (route, design readiness, tender budget, programme, risk allocation and the contract family), moves through the knowledge you need to read bonds, retentions, damages and payment terms, then the tender itself from pre-qualification to tender report and signing, the operating habits that keep your contractor knowledge current, situations for different kinds of developer, and specialist work such as two-stage tenders, bespoke amendments and insolvency planning.

The rhythms are twice-weekly tender query rounds while a tender is live, a monthly look at tender prices and contractor capacity, a monthly insurance and bond expiry check, quarterly credit checks on contractors you have signed, a quarterly refresh of your contractor bench and a yearly lessons review. The Risk register template suits the risk allocation table, Purchase decision suits the tender comparison, Meeting notes suits mid-tender meetings and interviews, and Vendor suits a record on each contractor. None of this is legal, insurance or financial advice: have contract forms, amendments, bonds and insurance levels reviewed by your construction solicitor, quantity surveyor and broker. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
