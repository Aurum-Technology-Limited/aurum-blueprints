---
id: agriculture.contract-farming-agreements
name: Contract Farming Agreements
description: "Grow under contract with your eyes open: buyers mapped, every clause read before signing, a price floor you will not go below, deliveries and payments reconciled, inputs and deductions tracked, and a plan for the bad season."
category: business
version: 1.0.0
tags: [agriculture, contract-farming-agreements, small-business, outgrower-schemes, processors, pricing, grower-groups, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Contract Farming Agreements
          description: "Growing under contract for a processor or buyer: price and volume terms, quality specs, inputs supplied, risk sharing and what happens in a bad season."
          projects:
            - name: Contract farming readiness check
              description: |-
                ## Purpose
                Buyers who contract growers want the same volume, at the same grade, on the same day every week, and a farm that cannot do that turns a good contract into a run of penalties. A short honest check of your land, water, labour, transport and records shows whether you are ready to sign now, ready for a trial season, or better off building up first.

                ## Milestones
                1. Each of land, irrigation, labour, transport, cool storage and record keeping rated ready, partly ready or not ready.
                2. The two weakest points named, with what it would take to fix each.
                3. A one-line verdict recorded: sign now, ask for a trial season, or wait a season.
                4. The check dated and kept with your contract papers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated readiness check rates six farm capacities and records a clear verdict on whether to pursue a contract this season."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the crop or animal and weekly volume a buyer would expect from you"
                - "Rate land, water, labour, transport, cooling and records against that volume"
                - "Name the two weakest points and what fixing each would cost"
                - "Write down your verdict and the date you made it"
            - name: Map of processors and buyers that contract growers
              description: |-
                ## Purpose
                Most farmers know one or two buyers by reputation and sign with whichever one calls first. Building a short map of the processors, packers, integrators and exporters in your country that buy on contract, with what they buy and how they treat growers, gives you a real choice and a sense of the going terms before any negotiation starts.

                ## Milestones
                1. At least six buyers listed with the crops or animals they contract for and the region they buy from.
                2. For each buyer: contact person, typical contract length and whether they supply inputs.
                3. At least three current or former contract growers spoken to about how each buyer pays and grades.
                4. A shortlist of two or three buyers worth approaching first.

                ## Notes
                Extension officers, farmer associations and agricultural development banks often know which buyers are reliable. Ask them before you ask the buyer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written buyer map lists at least six contracting buyers with their terms and grower reputation, and names a shortlist of two or three."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your extension officer which processors contract growers in your district"
                - "Call three farmers who grow under contract and ask how their buyer pays"
                - "Record contact, crops, contract length and inputs policy for each buyer"
                - "Refresh the buyer map with new entrants and departures @recurring(yearly)"
            - name: Contract document vault and key terms sheet
              description: |-
                ## Purpose
                When a dispute comes, the farmer who can put the signed contract, every amendment and the buyer's letters on the table in five minutes is the one who is taken seriously. A single folder, paper and digital, with a one-page sheet of the key terms on top, means nobody has to rely on memory of what was agreed.

                ## Milestones
                1. One physical folder and one backed-up digital folder set up for each contract.
                2. The signed contract, schedules, specs and any amendments filed in date order.
                3. A one-page key terms sheet: price, volume, grade, delivery point, payment days, notice periods.
                4. Copies of the key terms sheet given to whoever manages harvest and deliveries.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each contract has a complete folder in date order with a one-page key terms sheet on top, backed up off the farm."
                cadence: rolling
              tasks:
                - "Gather every signed page, schedule and letter from the buyer into one folder"
                - "Scan or photograph each document and back it up off the farm"
                - "Write a one-page key terms sheet and put it at the front"
                - "File new letters, amendments and spec changes in the vault @recurring(quarterly)"
            - name: Reading a contract farming agreement clause by clause
              description: |-
                ## Purpose
                Contract farming agreements are usually written by the buyer, and the clauses that matter most to a grower (rejection, deductions, termination, bad season) are often in the schedules at the back. Reading one contract slowly, clause by clause, and writing each in your own words is the single best protection before signing anything.

                ## Milestones
                1. Every clause and schedule of one real or sample agreement summarised in one plain sentence.
                2. Clauses that place a risk on you marked, with what that risk would cost in a bad week.
                3. Words you do not understand listed for your adviser.
                4. A list of questions to raise with the buyer before signing.

                ## Notes
                Ask the buyer for the full document including all schedules and the quality specification. A contract that refers to a spec you have never seen is incomplete.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary exists for every clause of one agreement, with risk clauses marked and a written list of questions for the buyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the buyer for the full agreement including every schedule and spec"
                - "Summarise each clause in one plain sentence of your own"
                - "Mark clauses that shift risk onto you and estimate their cost"
                - "List the questions you need answered before you sign"
            - name: Production capacity statement for buyer talks
              description: |-
                ## Purpose
                Every buyer will ask how much you can deliver, and an optimistic guess becomes a contractual volume you are penalised for missing. Working out what your plots have actually produced, week by week, and what you could deliver with reasonable confidence lets you offer a volume you can keep and negotiate tolerances around it.

                ## Milestones
                1. Past yields per plot gathered from records, sales receipts or memory, with gaps marked.
                2. A weekly delivery figure you are confident of in nine weeks out of ten.
                3. A separate upper figure for good weeks, clearly labelled as not guaranteed.
                4. Dry season and wet season figures shown separately.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page capacity statement gives a confident weekly volume and an upper volume for each season, based on past plot yields."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull together last year's harvest weights or sales by plot"
                - "Work out the weekly volume you hit in most weeks, not the best week"
                - "Split the figures into wet season and dry season"
                - "Write the capacity statement on one page to bring to buyer meetings"
            - name: Minimum acceptable contract price
              description: |-
                ## Purpose
                A contract price that looks better than the market on a bad market day can still lose money once rejections, transport and buyer deductions are taken off. Setting a walk-away price per kilo or per bird, built from your own costs plus a margin you need, means you negotiate from a number rather than a feeling.

                ## Milestones
                1. Your cost per unit of production for the contract crop or animal written down, with its source.
                2. Contract-specific costs added: grading losses, delivery, packaging, any buyer deductions.
                3. A minimum price per unit that covers these plus the margin you need.
                4. The minimum price written on your key terms sheet before any buyer meeting.

                ## Notes
                If you have not costed the enterprise yet, do that first with your budget records. This project takes that cost and turns it into a contract floor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written minimum price per unit covers production cost, contract-specific losses and a stated margin, and is recorded before negotiations start."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your current cost per kilo or per head for the contract crop"
                - "Add the grading loss, delivery and deductions this buyer would bring"
                - "Set the margin you need and calculate your walk-away price"
                - "Update the walk-away price with this year's input costs @recurring(yearly)"
            - name: Choosing an attorney or adviser for contract review
              description: |-
                ## Purpose
                Few farmers have a lawyer, and most sign buyer contracts without anyone independent reading them. Finding an attorney who understands agricultural or commercial contracts, or a farmer organisation that offers contract review, before you need one means the first contract gets checked instead of rushed.

                ## Milestones
                1. Two or three possible advisers identified: an attorney, a farmer organisation or a legal aid clinic.
                2. Each asked what a contract review costs and how long it takes.
                3. One adviser chosen and their details on your key terms sheet.
                4. An agreement on what you will send them and when.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named adviser is chosen, with their fee and turnaround for a contract review recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your farmer association whether it offers contract review for members"
                - "Get fee and turnaround quotes from two attorneys who handle commercial contracts"
                - "Choose one adviser and save their details with your contract papers"
                - "Agree what documents they need and how much notice they want"
            - name: Questions for the first buyer meeting
              description: |-
                ## Purpose
                First meetings with a buyer's procurement or field team go fast, and growers often leave without knowing how grading works or when they get paid. Going in with a written list of questions, and writing down the answers, gives you the facts to compare offers and catches vague promises before they turn into contract terms.

                ## Milestones
                1. A list of at least fifteen questions covering price, volume, grade, inputs, delivery, payment and termination.
                2. The answers written down during or straight after the meeting.
                3. Answers that were vague or verbal only marked to be confirmed in writing.
                4. A follow-up email or letter sent summarising what was said.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written question list is answered in a meeting record, and a written summary has been sent to the buyer within three days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write fifteen questions on price, grade, inputs, delivery, payment and exit"
                - "Take the list to the meeting and write the answers as they come"
                - "Mark any answer given only verbally to be confirmed in writing"
                - "Send the buyer a short written summary of the meeting within three days"
            - name: Contract calendar of deliveries, payments and notice dates
              description: |-
                ## Purpose
                Missed notice periods are how growers lose renewals, price reviews and the right to complain about a grading decision. Putting every date the contract creates, from delivery windows to the last day to dispute a rejection, into one calendar turns the contract from a document in a drawer into a schedule you work to.

                ## Milestones
                1. Every delivery window, payment due date and notice period in the contract listed.
                2. Each date entered in a calendar with a reminder a week before.
                3. Dispute deadlines after each delivery noted, such as days allowed to challenge a grade.
                4. The renewal or termination notice date entered with a reminder a month ahead.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar holds every delivery, payment, dispute and notice date from the contract, each with an advance reminder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Highlight every date and time limit in the contract and its schedules"
                - "Enter each one in your calendar with a reminder a week before"
                - "Add the renewal notice date with a reminder one month earlier"
                - "Check the coming month's contract dates and deadlines @recurring(monthly:28)"
            - name: Deciding who signs the contract
              description: |-
                ## Purpose
                Signing in your own name makes you personally liable for input advances and penalties, while a contract signed by a registered farm business or a cooperative changes who carries that risk and who gets paid. Deciding the contracting party before signing avoids the common mess of a contract in one name and deliveries and bank account in another.

                ## Milestones
                1. The options listed: sole trader, registered farm company, partnership or grower group.
                2. For each option: who is liable, which bank account receives payment and what registration is needed.
                3. Advice taken from your accountant or attorney on the choice.
                4. The decision recorded and the buyer told the exact legal name to put on the contract.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The contracting party is decided with professional advice, recorded, and matches the name on the bank account that will receive payment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ways you could sign: own name, company, partnership or group"
                - "Note who would be liable for advances and penalties under each"
                - "Ask your accountant or attorney which suits your farm"
                - "Tell the buyer the exact name and bank account to use"
            - name: Rejection and downgrade log
              description: |-
                ## Purpose
                At the gate, buyers reject or downgrade produce, and a grower who only remembers that it happened a lot has nothing to negotiate with. Logging every rejection with the date, the reason given, the weight and a photo builds the evidence for a challenge, a better spec or a change of buyer, and shows you which fields or pickers cause the problems.

                ## Milestones
                1. A log in use with date, lot, weight rejected or downgraded, reason given and photo reference.
                2. Every rejection for one full month logged without gaps.
                3. The most common reason identified and traced to a field, picker or handling step.
                4. One rejection pattern raised with the buyer in writing.

                ## Notes
                Take photos of rejected produce at the gate before it leaves your control. A photo taken the next day proves little.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rejection or downgrade over at least one month is logged with weight, reason and photo, and the main cause has been identified."
                cadence: rolling
              tasks:
                - "Set up a rejection log with date, lot, weight, reason and photo columns"
                - "Photograph rejected produce at the buyer's gate before it is taken away"
                - "Review the week's rejections and their stated reasons @recurring(weekly:fri)"
                - "Trace the most common rejection reason back to a field or step"
            - name: Weekly reconciliation of weigh tickets and deliveries
              description: |-
                ## Purpose
                The buyer's weighbridge or scale decides what you are paid, and small differences between what left the farm and what the ticket says add up over a season. Weighing loads before dispatch and checking every ticket against your own figure each week shows whether shrinkage is normal or something to raise.

                ## Milestones
                1. Every load weighed or counted on the farm before dispatch and recorded.
                2. Each buyer weigh ticket or delivery note matched to the farm record.
                3. Differences over a set tolerance, such as two percent, flagged and queried.
                4. A season total of farm weight versus paid weight kept.

                ## Notes
                Start from the **Metrics log** template. Have your farm scale checked against a known weight before relying on it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delivery for the season has a farm weight and a buyer weight side by side, with differences over the tolerance queried in writing."
                cadence: rolling
              tasks:
                - "Weigh or count each load on the farm and record it before it leaves"
                - "Keep every weigh ticket and delivery note the buyer gives you"
                - "Match the week's tickets to farm weights and flag gaps @recurring(weekly:mon)"
                - "Query any difference over your tolerance with the buyer in writing"
            - name: Payment tracking against contract terms
              description: |-
                ## Purpose
                Late payment is the most common complaint from contract growers, and a buyer who pays thirty days late on every delivery is borrowing from you for free. Tracking each delivery against the payment date the contract promises shows exactly how late the buyer is and gives you a figure to put in front of them.

                ## Milestones
                1. A list of every delivery with its value and the payment due date under the contract.
                2. Actual payment date and amount recorded against each delivery.
                3. Days late calculated for each payment and an average for the season.
                4. Overdue amounts chased in writing once they pass the due date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delivery shows due date, paid date and days late, and every overdue amount has a written chase on file."
                cadence: rolling
              tasks:
                - "List every delivery this season with value and contract due date"
                - "Match bank deposits and remittance slips to deliveries @recurring(monthly:5)"
                - "Calculate days late for each payment and the season average"
                - "Send a written reminder for each overdue amount"
            - name: Input advance and deduction ledger
              description: |-
                ## Purpose
                Many contracts supply seed, chicks, planting material or fertiliser on credit and take the cost out of your payments, sometimes with interest or handling charges added. Keeping your own ledger of what was supplied, at what price, and what has been deducted stops you paying twice and shows whether the buyer's inputs are cheaper or dearer than buying your own.

                ## Milestones
                1. Every input received on credit recorded with date, quantity, unit price and delivery note.
                2. Every deduction from payments recorded against the input it was for.
                3. A running balance of what you still owe the buyer.
                4. The balance checked against the buyer's own statement at least once a season.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger shows every buyer-supplied input and deduction with a running balance that agrees with the buyer's statement or has the difference explained."
                cadence: rolling
              tasks:
                - "Record every input the buyer has supplied with date, quantity and price"
                - "Match deductions on remittance slips to the inputs they cover @recurring(monthly:12)"
                - "Ask the buyer for a written statement of your input balance"
                - "Compare buyer input prices with the farm store price once a season"
            - name: Monthly volume forecast shared with the buyer
              description: |-
                ## Purpose
                Buyers plan factory runs and shipments around grower forecasts, and the grower who warns early of a short month is treated very differently from one who simply delivers less. A simple monthly forecast for the next eight weeks, sent in writing, builds trust and often protects you from shortfall penalties.

                ## Milestones
                1. A forecast format agreed with the buyer: weeks ahead, units and how to send it.
                2. A forecast for the next eight weeks sent each month.
                3. Actual deliveries compared against last month's forecast.
                4. Any expected shortfall of more than ten percent flagged to the buyer in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An eight-week volume forecast has been sent to the buyer every month of the season, with forecast accuracy recorded."
                cadence: rolling
              tasks:
                - "Ask the buyer what forecast format and horizon they want"
                - "Walk the fields and estimate the next eight weeks of harvest"
                - "Send the buyer an eight-week volume forecast in writing @recurring(monthly:25)"
                - "Compare last month's forecast with what you actually delivered"
            - name: Buyer field officer visit record
              description: |-
                ## Purpose
                Contracting buyers often send field officers or technicians who give instructions on planting dates, inputs or harvest timing, and those instructions can later decide who is blamed for a poor crop. Writing down each visit, what was advised and whether you followed it, protects you when a buyer argues the grower ignored their advice.

                ## Milestones
                1. A visit record kept with date, officer name, fields seen and advice given.
                2. Each instruction marked as followed, partly followed or not followed with the reason.
                3. Instructions that changed the agreed plan confirmed by message or letter.
                4. A season summary of visits ready for the end of season review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every field officer visit this season is recorded with the advice given and what was done, and plan changes are confirmed in writing."
                cadence: rolling
              tasks:
                - "Start a visit record with date, officer, fields seen and advice columns"
                - "Ask the officer to confirm by message any change to planting or harvest plans"
                - "Mark each instruction as followed or not, with your reason"
                - "Review the month's visit notes against the crop's condition @recurring(monthly:22)"
            - name: Pre-harvest quality checks against the buyer spec
              description: |-
                ## Purpose
                Most rejections could have been predicted in the field a few days earlier, from size, colour, ripeness or damage. Checking a sample against the buyer's written spec before each harvest lets you sort out-of-spec produce for another market instead of paying to transport it to a gate where it will be refused.

                ## Milestones
                1. The buyer's quality spec copied onto a one-page field check sheet.
                2. A sample checked against the sheet before each harvest.
                3. Out-of-spec produce sorted on the farm and sent to a second market.
                4. Rejection rates compared before and after the checks started.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A field check sheet based on the buyer spec is used before each harvest, and rejection rates before and after are compared."
                cadence: rolling
              tasks:
                - "Turn the buyer's quality spec into a one-page field check sheet"
                - "Check a sample from each field due for harvest @recurring(weekly:wed)"
                - "Arrange a second market for produce that fails the check"
                - "Compare this month's rejection rate with the month before checks began"
            - name: Quarterly contract performance review
              description: |-
                ## Purpose
                A contract can look fine week to week and still be losing money when the season's numbers are added up. A short review every quarter, comparing price received, volume delivered, rejections, payment delays and deductions against what you expected, tells you whether to keep going, raise an issue or plan an exit.

                ## Milestones
                1. Price, volume, rejection rate, days late and deductions summarised for the quarter.
                2. Each figure compared against the contract and your own expectations.
                3. One issue chosen to raise with the buyer.
                4. A one-line verdict recorded: on track, raise issues, or consider leaving.

                ## Notes
                Start from the **Risk register** template to keep track of what could go wrong with the contract and what you are doing about each risk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written review exists for each quarter of the contract, with five figures, one issue raised and a verdict."
                cadence: cyclic
              tasks:
                - "Pull the quarter's figures from your delivery, payment and deduction logs"
                - "Compare each figure with what the contract promised @recurring(quarterly)"
                - "Choose one issue to raise with the buyer and write it up"
                - "Record your verdict on the contract for the quarter"
            - name: Yearly contract renewal decision
              description: |-
                ## Purpose
                Contracts often renew automatically unless one side gives notice, and many growers find themselves locked into another year of poor terms because the notice date passed during harvest. Treating renewal as a yearly decision, made well before the notice date, gives you time to renegotiate, compare offers or leave cleanly.

                ## Milestones
                1. The year's performance figures gathered two months before the notice date.
                2. A list of terms you want changed for the next year.
                3. The terms raised with the buyer before the notice date.
                4. A decision recorded: renew, renew with changes, or give notice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A renewal decision is recorded each year at least a month before the contract's notice date, with any notice given in writing."
                cadence: cyclic
              tasks:
                - "Find the renewal and notice dates in your contract"
                - "Gather the year's performance figures two months before notice is due"
                - "List the terms you want changed and send them to the buyer"
                - "Make and record the renewal decision before the notice date @recurring(yearly)"
            - name: Written confirmation habit for buyer changes
              description: |-
                ## Purpose
                Delivery days, grades, prices and volumes often change in a phone call or WhatsApp message, and months later nobody agrees on what was said. Confirming every change in a short written message the same day, and keeping a log of those confirmations, turns verbal agreements into evidence.

                ## Milestones
                1. One contact person on each side agreed for contract changes.
                2. Every change agreed by phone confirmed in writing the same day.
                3. A log of confirmed changes kept with the contract papers.
                4. A monthly summary of agreed changes sent to the buyer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change to price, volume, grade or delivery this season has a dated written confirmation in the change log."
                cadence: rolling
              tasks:
                - "Agree with the buyer who on each side can approve contract changes"
                - "Send a short written confirmation after every phone agreement"
                - "Copy each confirmation into a change log with the date"
                - "Send the buyer a summary of the month's agreed changes @recurring(monthly:20)"
            - name: Fixed, formula and market-linked contract pricing
              description: |-
                ## Purpose
                A fixed price protects you when the market falls but costs you when it rises, a market-linked price does the opposite, and formula prices with bonuses and penalties can hide either. Understanding the main pricing methods, with a worked example of each on your own crop, lets you judge an offer instead of just its headline number.

                ## Milestones
                1. Fixed, minimum guaranteed, market-linked and cost-plus pricing each explained in your own words.
                2. A worked example of each using last year's market prices for your crop.
                3. The effect of grade bonuses and penalties shown on one example.
                4. A note of which method suits your farm's cash position and risk.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four pricing methods are explained with worked examples on your own crop, and a preferred method is recorded with the reason."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect last year's monthly market prices for your crop"
                - "Work out what you would have earned under a fixed and a market-linked price"
                - "Add grade bonuses and penalties to one example and see the effect"
                - "Write down which pricing method suits your farm and why"
            - name: Understanding quality specifications and rejection rules
              description: |-
                ## Purpose
                Quality specs list size, colour, maturity, moisture, defects and packaging, and each one is a reason a load can be refused. Learning what each spec means in the field, how the buyer measures it and who decides at the gate, prepares you to grow to spec and to argue a fair grading decision.

                ## Milestones
                1. Every item in the buyer's spec explained with how it is measured.
                2. The grading process at the buyer's gate observed or described by someone who has seen it.
                3. The rules for who decides, and how a grade can be challenged, written down.
                4. The three spec items you are most likely to fail identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of every spec item and the grading and challenge process exists, with the three highest risk items named."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer how each item in the spec is measured at the gate"
                - "Arrange to watch a grading session or talk to a grower who has"
                - "Write down who decides a grade and how a challenge works"
                - "Name the three spec items your crop is most likely to fail"
            - name: Force majeure and crop failure clauses
              description: |-
                ## Purpose
                Hurricanes, floods, drought and disease outbreaks are not rare in the Caribbean, and what your contract says about them decides whether a lost crop also means penalties and unpaid input debt. Learning how force majeure, shortfall and crop failure clauses usually work, and what yours says, tells you what notice to give and what you still owe when a season goes wrong.

                ## Milestones
                1. Your contract's force majeure, shortfall and termination clauses found and summarised.
                2. The events covered and not covered listed, such as hurricanes, flood, pests or price collapse.
                3. The notice you must give, by when and in what form, written down.
                4. What happens to input advances after a crop failure confirmed with the buyer or your adviser.

                ## Notes
                Whether a clause applies to a particular event is a legal question for your attorney. This project is about knowing what the contract says and what evidence you would need.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the contract's bad season clauses lists covered events, notice requirements and what happens to input debt."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the force majeure, shortfall and termination clauses in your contract"
                - "List which events they cover and which they leave out"
                - "Write down the notice you must give, when and how"
                - "Ask what happens to your input advances if the crop is lost"
            - name: Exclusivity, side-selling and buy-back clauses
              description: |-
                ## Purpose
                Most contracts forbid selling contracted produce to anyone else, and some go further, requiring you to buy back unused inputs or sell your whole crop to one buyer. Knowing exactly what you are allowed to do with surplus, rejects and off-contract fields avoids a breach that could cost you the contract and the input credit.

                ## Milestones
                1. The exclusivity clause summarised: which produce, which fields, which period.
                2. What you may do with surplus above contract volume and with rejected produce written down.
                3. Any buy-back or minimum purchase obligations on inputs listed.
                4. Grey areas confirmed with the buyer in writing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note states exactly what the contract allows for surplus, rejects and non-contract fields, with grey areas confirmed by the buyer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find and summarise the exclusivity clause in your contract"
                - "Note what you may do with surplus and rejected produce"
                - "List any obligation to buy back or buy a minimum of inputs"
                - "Ask the buyer to confirm the grey areas in writing"
            - name: Negotiation practice for contract terms
              description: |-
                ## Purpose
                Growers often accept the first draft because they think the buyer will not move, yet buyers regularly change payment days, tolerances and rejection terms for growers who ask clearly. Preparing your asks, your walk-away points and a few practised sentences, and rehearsing with someone who plays the buyer, makes the real conversation calmer and more productive.

                ## Milestones
                1. Three terms you want changed, ranked, with the reason for each.
                2. Your walk-away point for price and one other term written down.
                3. Two practice conversations held with a friend or fellow farmer playing the buyer.
                4. The real negotiation held and what moved recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ranked asks and walk-away points are written, two rehearsals are done, and the outcome of the real negotiation is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Rank the three contract terms you most want changed"
                - "Write your walk-away point for price and one other term"
                - "Rehearse the conversation twice with someone playing the buyer"
                - "Record which terms moved after the real negotiation"
            - name: Reading buyer grading reports and remittance slips
              description: |-
                ## Purpose
                Payment slips from processors can combine gross weight, tare, moisture or trim deductions, grade splits, input recoveries and levies in one line of figures. Learning to read each line and recalculate one slip yourself shows where your money goes and makes errors easy to spot.

                ## Milestones
                1. Every line on one remittance slip explained, from gross weight to net payment.
                2. One slip recalculated by hand and matched to the amount paid.
                3. Unexplained deductions listed and queried with the buyer.
                4. A short guide written so a family member or worker can check slips too.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One remittance slip has been fully recalculated by hand and a short guide to reading slips exists for others on the farm."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take your latest remittance slip and label every line"
                - "Recalculate the net payment by hand from gross weight"
                - "Query any deduction you cannot explain with the buyer"
                - "Write a half-page guide so someone else can check slips"
            - name: How outgrower schemes and nucleus estates work
              description: |-
                ## Purpose
                Some contract farming runs through outgrower schemes, where a processor with its own estate or factory buys from surrounding small farmers and provides inputs, extension and transport. Learning how these schemes are usually organised, and where they have succeeded or failed in the region, helps you judge a scheme you are invited to join.

                ## Milestones
                1. The main models described: centralised, nucleus estate, multipartite with government or NGO, and informal.
                2. Two regional or international examples studied, one that worked and one that did not.
                3. The features that made the difference listed.
                4. A checklist of questions to ask about any scheme you are offered.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note describes four contract farming models with two case examples and ends with a question checklist for judging a scheme."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a published guide on contract farming models from a development agency"
                - "Find one scheme in the region that worked and one that failed"
                - "List what separated the successful scheme from the failed one"
                - "Write a question checklist for judging any scheme you are offered"
            - name: Dispute routes from talks to arbitration
              description: |-
                ## Purpose
                When a buyer refuses to pay for a rejected load or holds back money, most growers either give up or go straight to a lawyer's letter. Knowing the steps your contract lays out, and what mediation, arbitration and small claims courts involve where you farm, lets you pick a proportionate route and keep the relationship where that is worth it.

                ## Milestones
                1. The dispute clause in your contract summarised, including any required steps and time limits.
                2. Local options listed: buyer complaints process, farmer association, mediation, arbitration, small claims.
                3. Rough cost and time for each option noted.
                4. A simple escalation plan written: what you do first, second and third.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written escalation plan sets out three dispute steps with rough cost and time, matching the contract's dispute clause."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the dispute clause in your contract and its time limits"
                - "Ask your farmer association what help it gives in buyer disputes"
                - "Note the cost and time of mediation, arbitration and small claims"
                - "Write a three-step escalation plan for a payment dispute"
            - name: How much of the crop to commit to contract
              description: |-
                ## Purpose
                Committing the whole farm to one buyer gives certainty until that buyer cuts volume, delays payment or closes. Deciding each year what share of production goes to contract and what stays for the open market, hotels or direct sales spreads the risk and keeps other buyers interested in you.

                ## Milestones
                1. Last year's sales split by channel and the margin from each.
                2. A target share of production for contract and for other markets.
                3. The contract volume matched to the fields that can reliably meet it.
                4. The decision recorded with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision sets the share of production committed to contract for the year, matched to named fields."
                cadence: cyclic
              tasks:
                - "Split last year's sales by buyer and work out the margin for each"
                - "Decide what share of production you are willing to commit to contract"
                - "Match the contract volume to the fields that can meet it reliably"
                - "Revisit the contract share before the next season starts @recurring(yearly)"
            - name: Comparing two buyer offers side by side
              description: |-
                ## Purpose
                Two offers with the same headline price can be very different once payment days, grading, input prices and transport are counted. Putting both into one table and working out the expected net income per unit under each shows which one actually pays more and which one carries more risk.

                ## Milestones
                1. Both offers laid out in one table with price, grade rules, payment days, inputs, transport and exit terms.
                2. Expected net income per unit calculated for each, after likely rejections and deductions.
                3. The main risk in each offer named.
                4. A choice made and the reasons recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table shows net income per unit and the main risk for each offer, and the chosen offer is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put both offers into one table term by term"
                - "Estimate rejections and deductions under each offer"
                - "Calculate expected net income per unit for both"
                - "Choose one and write down why"
            - name: Negotiating a price review clause
              description: |-
                ## Purpose
                Fixed prices agreed for two or three years get eaten away when feed, fertiliser or fuel costs jump, as Caribbean growers saw in recent years. Asking for a review clause, triggered by a date or by a set rise in input costs, keeps a long contract fair without having to tear it up.

                ## Milestones
                1. The input costs that matter most to your margin identified, with their recent movement.
                2. A proposed review trigger drafted, such as a yearly review or a rise in a named cost.
                3. The proposal sent to the buyer with evidence.
                4. The agreed clause, or the buyer's refusal, recorded in the contract file.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written price review proposal with cost evidence has been sent, and the agreed clause or the refusal is filed with the contract."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Identify the two or three input costs that drive your margin"
                - "Draft a review trigger based on a date or a cost rise"
                - "Send the proposal to the buyer with your cost evidence"
                - "Check input cost movements against the review trigger @recurring(yearly)"
            - name: Turning a handshake arrangement into a written contract
              description: |-
                ## Purpose
                Plenty of growers have supplied the same processor for years on a verbal understanding, and it works until the owner retires, the factory changes hands or prices fall. Putting the existing arrangement on paper, even as a simple two-page letter of agreement, protects what you already have.

                ## Milestones
                1. The current arrangement written down as you understand it: crop, volume, price method, grade, payment.
                2. The draft shared with the buyer and differences discussed.
                3. A simple written agreement or letter signed by both sides.
                4. The signed copy filed in the contract vault.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed written agreement records the existing arrangement's crop, volume, price method, grade and payment terms."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the current arrangement exactly as you understand it"
                - "Share the draft with the buyer and note where you differ"
                - "Ask your adviser to look over the final draft"
                - "Sign, get the buyer's signature and file the copy"
            - name: Renegotiating rejection and downgrade terms
              description: |-
                ## Purpose
                Rejection clauses that let the buyer refuse produce with no time limit, no sample kept and no right of inspection put the whole cost of a disputed load on the grower. With a season's rejection log in hand, you can ask for a fairer process: a joint inspection, a retained sample, a time limit and a set route for rejects.

                ## Milestones
                1. The current rejection terms summarised with their weaknesses.
                2. Evidence from your rejection log showing the cost to you over a season.
                3. Proposed changes drafted, such as a joint inspection, retained sample and notice time limit.
                4. The outcome of the negotiation recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Proposed rejection terms backed by a season's log have been put to the buyer and the outcome is filed with the contract."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the weaknesses in your current rejection terms"
                - "Total the season's rejection cost from your rejection log"
                - "Draft fairer terms with a joint inspection and time limit"
                - "Put the proposal to the buyer and record the outcome"
            - name: Buyer-supplied inputs or your own
              description: |-
                ## Purpose
                Taking seed, chicks, planting material or fertiliser from the buyer saves cash at planting but can tie you to their prices and their timing. Comparing the full cost and the conditions attached to buyer inputs against sourcing your own, with credit from a farm store or lender, shows which route leaves more money and more control with you.

                ## Milestones
                1. The buyer's input prices, credit terms and conditions listed.
                2. Prices for the same inputs from two farm stores or suppliers gathered.
                3. Cash flow under each option worked out for the season.
                4. A choice made and recorded, including any inputs the contract requires you take from the buyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of buyer-supplied and self-sourced inputs, including cash flow, ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the buyer's input prices, credit terms and conditions"
                - "Get prices for the same inputs from two other suppliers"
                - "Work out the season's cash flow under both options"
                - "Record which inputs you will take from the buyer and why"
            - name: Exit plan from an underperforming contract
              description: |-
                ## Purpose
                Growers stay in bad contracts because leaving means unpaid balances, input debt and no buyer for next month's harvest. Planning the exit before giving notice, with the debt settled, final payments agreed and another market lined up, turns a painful break into an orderly one.

                ## Milestones
                1. The termination clause and notice period confirmed with your adviser.
                2. The input balance and any money owed by the buyer agreed in writing.
                3. Another market lined up for the volume currently going to the buyer.
                4. Notice given in the form the contract requires and a copy filed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written notice is given in the required form after the input balance is agreed and an alternative market is in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your adviser to confirm the termination clause and notice period"
                - "Agree the final input balance and money owed in writing"
                - "Line up another buyer for the volume you will free up"
                - "Give notice in the form the contract requires and file a copy"
            - name: Trial plot for a variety the buyer requests
              description: |-
                ## Purpose
                Processors sometimes ask growers to switch to a new pepper type, cassava variety or cocoa clone that suits their factory better. A small trial on part of a field, with the buyer agreeing to take and pay for the trial output, tests yield and cost on your soil before you commit the whole contract area.

                ## Milestones
                1. The trial agreed with the buyer in writing: area, variety, who supplies material and how output is paid.
                2. Trial and existing variety grown side by side with records of inputs and labour.
                3. Yield, grade and cost per unit compared at harvest.
                4. A decision on whether to switch, recorded and shared with the buyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side trial compares yield, grade and cost per unit of the requested variety, ending in a recorded decision shared with the buyer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the trial area, material and payment for output with the buyer in writing"
                - "Plant the new and existing varieties side by side"
                - "Record inputs, labour, yield and grade for both"
                - "Decide whether to switch and tell the buyer in writing"
            - name: First season under a new contract
              description: |-
                ## Purpose
                The first season is when buyers decide whether a new grower is reliable and growers learn how the contract really works at the gate. Planning the season week by week, with planting, input arrival, first delivery and first payment marked, and reviewing at the end, sets the pattern for every season after.

                ## Milestones
                1. A season plan with planting dates, input arrival, first harvest and first delivery.
                2. First delivery made on time and its ticket checked against your records.
                3. First payment received and checked against the contract.
                4. An end of first season review written with three lessons.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first contract season is delivered against a written week by week plan and closed with a written review of three lessons."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a week by week plan from planting to first payment"
                - "Confirm the input delivery date with the buyer"
                - "Check the first delivery ticket and first payment against the contract"
                - "Write three lessons from the first season"
            - name: Pre-season planning meeting with the buyer
              description: |-
                ## Purpose
                Agreeing a planting plan with the buyer before the season, with volumes, dates, varieties and input deliveries set out, prevents the mid-season surprises that cause most contract disputes. Treating it as a proper meeting with an agenda and minutes signals that you run the farm as a business.

                ## Milestones
                1. An agenda sent ahead covering volumes, planting dates, inputs, grades and delivery days.
                2. The meeting held with the buyer's procurement or field lead.
                3. Minutes written and sent to the buyer within two days.
                4. Agreed dates entered in the contract calendar.

                ## Notes
                Start from the **Meeting notes** template. Bring your capacity statement and last season's figures.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-season meeting is held with a written agenda and minutes, and every agreed date is in the contract calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Propose a date for a pre-season meeting with the buyer"
                - "Send an agenda covering volumes, dates, inputs and grades"
                - "Write and send minutes within two days of the meeting"
                - "Add the agreed dates to the contract calendar"
            - name: Contract signing day checklist
              description: |-
                ## Purpose
                Signing is often rushed: a field officer arrives with copies and the grower signs on the tailgate. A short checklist, used every time, makes sure the version you sign is the one your adviser read, every schedule is attached, the names are right and you leave with a signed copy.

                ## Milestones
                1. A signing checklist written: correct version, all schedules, names, dates, signatures and initials.
                2. The final version compared with the one your adviser reviewed.
                3. The contract signed with every page initialled and a signed copy kept.
                4. Key terms sheet and calendar updated from the signed version.

                ## Notes
                Start from the **Operational checklist** template. Never sign a contract with blank spaces for price or volume.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The contract is signed against a written checklist, matches the reviewed version, and a fully signed copy is in the vault."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a signing checklist covering version, schedules, names and blanks"
                - "Compare the final copy line by line with the version your adviser read"
                - "Sign and initial each page and keep a fully signed copy"
                - "Update the key terms sheet and calendar from the signed version"
            - name: End of season settlement and final account
              description: |-
                ## Purpose
                The final account at the end of a season, where the buyer nets off input advances, bonuses, penalties and outstanding payments, is where errors and disputes surface. Preparing your own version of the account first, from your logs, means you check theirs instead of simply accepting it.

                ## Milestones
                1. Your own season account prepared: deliveries, payments, input deductions and expected bonuses or penalties.
                2. The buyer's final statement requested and compared line by line.
                3. Differences raised in writing within the contract's time limit.
                4. The settled figure agreed and filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your own season account is compared with the buyer's final statement and the settled figure is agreed in writing and filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build your season account from delivery, payment and input logs"
                - "Ask the buyer for their final statement for the season"
                - "Compare the two line by line and list differences"
                - "Raise differences in writing before the contract's time limit"
            - name: Buyer farm inspection or audit visit
              description: |-
                ## Purpose
                Processors and their customers increasingly audit contract farms for records, chemical use, worker welfare and traceability, and a failed audit can suspend deliveries. Preparing for a scheduled visit, with the records the buyer asked for ready and the farm walked beforehand, makes it a routine event rather than a threat.

                ## Milestones
                1. The buyer's audit checklist or inspection criteria obtained.
                2. The required records gathered in one place.
                3. A walk-through of the farm done a week ahead with gaps fixed.
                4. The visit completed and any corrective actions listed with dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The buyer's inspection is completed with every requested record available, and any corrective actions have dates and owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer for their inspection checklist and date"
                - "Gather every record the checklist names into one folder"
                - "Walk the farm a week before and fix what you can"
                - "List corrective actions from the visit with completion dates"
            - name: Crop failure notice and bad season meeting
              description: |-
                ## Purpose
                After a hurricane, flood, drought or disease outbreak, the contract usually requires prompt written notice and evidence, and growers who wait lose the protection the clause offers. Having the notice drafted in advance and knowing what evidence to collect means you can act within days and sit down with the buyer to agree what happens next.

                ## Milestones
                1. A notice template drafted in advance, matching the contract's notice clause.
                2. After the event, photos, dates and estimated losses recorded per field.
                3. Written notice sent within the contract's time limit.
                4. A meeting held with the buyer and the agreed outcome on volume, debt and replanting recorded.

                ## Notes
                Keep photos and loss estimates for your insurer and any government relief scheme too, but send the buyer notice first if the contract time limit is short.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written notice with dated evidence is sent within the contract time limit, and the outcome of the follow-up buyer meeting is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a crop failure notice now that matches your contract's clause"
                - "List the evidence to collect: photos, dates and losses per field"
                - "Send the notice within the time limit after any loss event"
                - "Meet the buyer and record what is agreed on volume and debt"
            - name: Joining a grower group for a collective contract
              description: |-
                ## Purpose
                Many processors prefer to contract with a group or cooperative rather than dozens of individual small farmers, and a group can negotiate better terms and share transport. Joining one means agreeing how volume, payment and responsibility for poor quality are split among members, which needs to be written down before the first delivery.

                ## Milestones
                1. The group's rules on volume shares, quality, payment split and leaving obtained in writing.
                2. Your share of the group volume agreed and recorded.
                3. How rejections caused by one member are handled confirmed.
                4. Your membership signed and your copy of the group agreement filed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "You hold a written group agreement covering your volume share, payment split, rejection rules and exit terms before your first group delivery."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the group for its written rules on volume, payment and quality"
                - "Agree your share of the group's contract volume"
                - "Confirm how one member's rejections affect everyone's payment"
                - "Sign membership and file your copy of the group agreement"
            - name: First contract for a smallholder
              description: |-
                ## Purpose
                Your first contract can lift a two-acre farm into steady income, but a small grower has the least room to absorb a late payment or a rejected load. Starting with a modest volume, a short term and terms you understand fully, and building up after one good season, keeps the downside survivable.

                ## Milestones
                1. A starting volume set at no more than what your best field reliably produces.
                2. A contract term of one season or one year requested.
                3. A cash buffer covering at least one late payment cycle set aside.
                4. A review after the first season to decide whether to expand.

                ## Notes
                Ask the extension office or a farmer association whether a mentor grower can walk you through your first season with the buyer.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first contract is signed for a single season at a volume one field can meet, with a cash buffer in place and a review date set."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work out the volume your best field reliably produces"
                - "Ask the buyer for a one-season first contract at that volume"
                - "Set aside cash to cover one late payment cycle"
                - "Book a review with yourself after the first season"
            - name: Livestock grow-out contract terms review
              description: |-
                ## Purpose
                Broiler, pig and egg contracts with an integrator work differently from crop contracts: the company often owns the animals and feed, and the farmer is paid a fee per head or per kilo adjusted for mortality and feed conversion. Reviewing how that fee is calculated, who bears mortality and what housing investment the contract expects shows whether the deal pays back your sheds.

                ## Milestones
                1. The grower fee formula written out with each adjustment explained.
                2. Who owns the animals, feed and medicines, and who bears mortality, confirmed.
                3. Housing and equipment the contract requires costed against the expected fee income.
                4. Questions about the formula or ranking system raised with the integrator.

                ## Notes
                Ask for several past settlement sheets from other growers before investing in new housing for a contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written breakdown of the grower fee formula, ownership and mortality terms is set against a costed housing payback figure."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the integrator for the grower fee formula and a sample settlement"
                - "Write down who owns animals, feed and medicines and who bears losses"
                - "Cost the housing and equipment the contract requires"
                - "Compare expected fee income with the housing cost over five years"
            - name: Passing a contract to the next generation
              description: |-
                ## Purpose
                When an older farmer retires or dies, a contract in their personal name may end, and the buyer may not have to deal with the son, daughter or partner who now runs the farm. Checking the assignment clause and agreeing a handover with the buyer while the contract holder is still active protects the family's market.

                ## Milestones
                1. The contract's assignment, change of control and death or incapacity clauses found.
                2. The intended successor introduced to the buyer's procurement contact.
                3. A written understanding from the buyer on how the contract will transfer.
                4. The successor named in your farm and family records alongside the contract.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The buyer has confirmed in writing how the contract transfers to a named successor, and the successor has met the buyer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the assignment and death or incapacity clauses in the contract"
                - "Introduce your successor to the buyer's procurement contact"
                - "Ask the buyer to confirm in writing how a transfer would work"
                - "Record the successor and the buyer's letter with the contract"
            - name: Lead farmer for a grower group contract
              description: |-
                ## Purpose
                Whoever manages a collective contract as lead farmer or group secretary carries the buyer relationship for everyone: allocating volume, collecting produce, checking grades and sharing out payments. Running this openly, with records every member can see, keeps the group together when a bad week means someone is short-paid.

                ## Milestones
                1. A member register with each member's volume share and bank or payment details.
                2. Collection and grading records kept per member for every delivery.
                3. Payments split and paid out with a statement to each member.
                4. A monthly group meeting held with figures shared.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every group delivery has per-member records and payment statements, and a monthly meeting shares the figures with all members."
                cadence: rolling
              tasks:
                - "Set up a member register with volume shares and payment details"
                - "Record each member's produce and grade at every collection"
                - "Give each member a statement with every payout"
                - "Hold the monthly group meeting and share the figures @recurring(monthly:15)"
            - name: Contracts priced in foreign currency
              description: |-
                ## Purpose
                Buyers of fine flavour cocoa, pepper mash, specialty coffee or spices for overseas markets often price in US dollars or euros and pay through international transfers. Understanding how the exchange rate, bank charges and the timing of conversion affect what reaches your account helps you agree a currency and payment method that does not quietly eat the premium.

                ## Milestones
                1. The contract currency, exchange rate source and conversion date identified.
                2. Bank charges for receiving international payments obtained from your bank.
                3. The net local currency received on one payment calculated and compared with the headline price.
                4. Questions on currency and payment method raised with the buyer and your bank.

                ## Notes
                Rules on holding foreign currency accounts and declaring export earnings differ by country. Check with your bank and accountant before agreeing terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written calculation shows the net local currency received from one foreign currency payment after exchange and bank charges."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the contract currency, rate source and conversion date"
                - "Ask your bank what it charges to receive international payments"
                - "Calculate the net local amount from one recent payment"
                - "Raise currency and payment method questions with the buyer"
            - name: Contract track record dossier
              description: |-
                ## Purpose
                Proof of contracts delivered on time and to grade is one of the strongest things a farmer can show a new buyer or a lender considering a loan against future contract income. Pulling the figures into a short dossier each year turns years of quiet reliability into evidence.

                ## Milestones
                1. Contracts held over the past three years listed with buyer, crop, volume and term.
                2. Delivery performance, rejection rate and on-time percentage summarised for each.
                3. Reference letters requested from at least two buyers.
                4. A two-page dossier ready to hand to a buyer or lender.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page dossier summarises three years of contract performance with at least two buyer references attached."
                cadence: cyclic
              tasks:
                - "List every contract you have held in the past three years"
                - "Summarise delivery, rejection and on-time figures for each"
                - "Ask two buyers for a short reference letter"
                - "Update the dossier with the past season's figures @recurring(yearly)"
            - name: Multi-year contract with shared risk terms
              description: |-
                ## Purpose
                Experienced growers supplying a processor that depends on them can negotiate beyond a one-season deal: a three-year term, a price band with a floor and ceiling, a shared fund for bad seasons and joint investment in irrigation or drying. Designing such terms takes preparation, evidence and an adviser, but it gives both sides the stability to invest.

                ## Milestones
                1. A proposal drafted covering term, price band, shared risk mechanism and investment commitments.
                2. Evidence assembled: track record, cost of production and the buyer's dependence on your supply.
                3. The proposal reviewed by your attorney and accountant.
                4. Negotiations held and the agreed terms or the reasons for refusal recorded.

                ## Notes
                Price bands and shared funds need clear rules on who decides and how money is held. Get them drafted by an attorney, not improvised.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A multi-year proposal with a price band and risk sharing terms has been reviewed by an adviser and put to the buyer, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the agent to draft a multi-year proposal outline from your key terms sheet"
                - "Assemble your track record, costs and share of the buyer's supply"
                - "Have your attorney and accountant review the proposal"
                - "Review the price band against market prices with the buyer @recurring(quarterly)"
---

# Contract Farming Agreements

This area is for farmers who grow, or want to grow, for a named processor, packer or buyer under an agreement: hot peppers for a sauce maker, cassava for a flour mill, broilers for an integrator, cocoa for a chocolate maker or vegetables for a packing company. It starts with foundations (a readiness check, a map of who contracts growers, a clause by clause reading, a price floor, an adviser and a contract calendar), moves to the operating machinery of delivery reconciliation, payment tracking, input deductions, forecasts and reviews, then the knowledge of pricing formulas, quality specs, bad season clauses and dispute routes, decisions on how much to commit and whether to renegotiate or leave, dated events from signing day to the end of season settlement, situations for grower groups, first time contract farmers and families passing a contract on, and finally specialist work on group contracts, foreign currency buyers and multi-year risk sharing.

What repeats is a weekly reconciliation of weigh tickets against your own records, a weekly look at rejections and pre-harvest quality samples, monthly payment, deduction, forecast and buyer correspondence checks, quarterly performance reviews and vault updates, and a yearly renewal, price floor and commitment decision. The Metrics log, Risk register, Meeting notes and Operational checklist templates pair with the projects that keep those records. Everything here is organisational: the legal meaning of a clause comes from an attorney, not from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
