---
id: founding-startups.startup-business-plan-writing
name: Startup Business Plan Writing
description: "A short business plan that tests the startup's logic: clear readers, a one-page canvas, evidenced sections from market to milestones, honest financials and risks, and a plan kept alive against actuals every month."
category: business
version: 1.0.0
tags: [founding-startups, startup-business-plan-writing, founder, business-plan, market-sizing, financial-projections, executive-summary, funding]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - reading-queue
    - metrics-log
    - meeting-notes
    - board-meeting
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup Business Plan Writing
          description: "Writing a concise business plan that tests the startup's logic, from market and model to milestones and the people needed."
          projects:
            - name: Defining the readers and purpose of the plan
              description: |-
                ## Purpose
                A plan for a bank manager, a seed investor, a grant panel and your own co-founder are four different documents, and trying to write all of them at once produces something none of them reads. Naming the first reader, the decision you want them to make and the date you need it by sets the length, tone and emphasis of everything after.

                ## Milestones
                1. A list of everyone who might read the plan in the next twelve months, ranked by importance.
                2. One primary reader chosen, with the decision you want from them written in a sentence.
                3. The three questions that reader will ask first, written at the top of the outline.
                4. A target length and format agreed for that reader.

                ## Notes
                If no outside reader exists yet, the primary reader is the founding team, and the decision is whether to commit the next year to this idea. That plan can be much shorter.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One primary reader, the decision wanted from them and their first three questions are written on the first page of the plan outline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every person or body who may read the plan this year"
                - "Choose the primary reader and write the decision you want from them"
                - "Write down the three questions that reader will ask first"
                - "Agree a page limit for the first version with your co-founder"
            - name: One-page lean canvas of the business
              description: |-
                ## Purpose
                Before writing twenty pages, the whole business should fit on one: problem, customer segment, unique value, solution, channels, revenue, costs, key metrics and unfair advantage. Filling the canvas in an afternoon shows which boxes you can fill with evidence and which you are guessing at, so the long plan starts from its weakest points.

                ## Milestones
                1. Every box of a lean canvas or business model canvas filled in, even roughly.
                2. Each box marked as evidenced, partly evidenced or guessed.
                3. The two weakest boxes named as the first things the full plan must address.
                4. The canvas saved as page one of the plan folder, dated.

                ## Notes
                Write in short phrases, not sentences. If a box needs a paragraph, that is usually a sign you have not yet decided what goes in it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page canvas exists with every box filled and marked by evidence level, and the two weakest boxes are named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print or open a blank lean canvas and fill every box in pencil"
                - "Mark each box as evidenced, partly evidenced or guessed"
                - "Circle the two boxes you are least able to defend"
                - "Update the canvas with anything learned this month @recurring(monthly:28)"
            - name: Plan outline, folder and version naming
              description: |-
                ## Purpose
                Drafts fall apart when the financial model, the draft text and the supporting data live in five places with names like final_v3_REAL. A single folder, a standard section outline and a version rule such as plan 2025-03 v2 mean anyone on the team can find the current version and see what changed.

                ## Milestones
                1. One shared folder holding the draft, the model, the evidence file and an archive subfolder.
                2. A section outline agreed, from executive summary to appendix.
                3. A version naming rule written in the folder's readme.
                4. Edit and comment access set for co-founders and view access for advisers.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared plan folder exists with an agreed section outline, a written version rule and an archive for superseded drafts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one shared folder for the plan with an archive subfolder"
                - "Write the section headings of the plan in a blank document"
                - "Add a short readme explaining how versions are named"
                - "Move every older draft and spreadsheet into the archive"
            - name: Co-founder workshop on the plan's core bets
              description: |-
                ## Purpose
                Co-founders often discover while writing that they hold different views of the customer, the price or how big the company should become. A half-day workshop before drafting, where each founder writes their own answers to the same ten questions and the team compares them, surfaces those gaps while they are cheap to resolve.

                ## Milestones
                1. Ten questions agreed, covering customer, problem, price, channel, scale ambition and funding.
                2. Each co-founder's answers written independently before the session.
                3. Differences discussed and a shared answer recorded for each question.
                4. Unresolved disagreements listed with a date to decide them.

                ## Notes
                Answer separately first. If one founder talks first, the others tend to anchor on their answer and the real disagreement stays hidden.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every co-founder has answered the same ten questions in writing, and a shared answer or a decision date is recorded for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft ten questions about the core bets of the business"
                - "Ask each co-founder to answer them alone before meeting"
                - "Hold a half-day session to compare and reconcile answers"
                - "Write the agreed answers into the front of the plan folder"
            - name: Problem and target customer statement
              description: |-
                ## Purpose
                Readers decide in the first page whether the problem is real and whether you know exactly who has it. A two-paragraph statement naming a specific customer, the moment the problem bites, what they do about it today and what it costs them gives the rest of the plan something solid to stand on.

                ## Milestones
                1. One target customer described specifically enough that you could find ten of them this week.
                2. The current workaround and its cost in time or money written down.
                3. At least three quotes from real conversations supporting the problem.
                4. A two-paragraph problem statement read aloud to someone outside the company without confusion.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A problem statement of two paragraphs or less names one customer type, their workaround and its cost, and cites at least three real quotes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write who the customer is in one sentence with no adjectives"
                - "Describe what they do today instead of using your product"
                - "Pull three quotes from interview notes that show the pain"
                - "Read the statement to a friend and note what confused them"
            - name: Assumption register behind the plan
              description: |-
                ## Purpose
                Every plan rests on a few dozen assumptions, such as conversion rate, sales cycle, price and hiring speed, and most plans bury them inside spreadsheet cells. Listing them in one register with a source, a confidence rating and what would change if each were wrong turns the plan from a story into a set of claims you can test.

                ## Milestones
                1. Every number the plan relies on listed in one register with its source.
                2. Each assumption rated high, medium or low confidence.
                3. The five assumptions with the biggest effect on the outcome flagged.
                4. A test or evidence source named for each flagged assumption.

                ## Notes
                Start from the numbers in the financial projections and work backwards. An assumption with no source is a guess, and it is fine to say so in the register.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every plan assumption with source and confidence, and the five most sensitive ones each have a named test."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy every input number from the draft plan into a single list"
                - "Add a source and a confidence rating to each one"
                - "Flag the five that would change the outcome most if wrong"
                - "Write one cheap test for each flagged assumption"
            - name: Evidence file of interviews and data
              description: |-
                ## Purpose
                Claims like customers love this or the market is growing fast carry no weight without the notes and figures behind them. Keeping one evidence file that links each claim in the plan to an interview, a survey, a sales record or a published source means you can answer the question how do you know in seconds.

                ## Milestones
                1. One evidence file organised by plan section.
                2. Each claim in the draft tagged with the evidence that supports it.
                3. Claims with no evidence listed separately as open questions.
                4. Interview notes and data exports stored with dates and sources.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every factual claim in the current draft points to an entry in the evidence file, or appears on the open questions list."
                cadence: rolling
              tasks:
                - "Create an evidence file with one heading per plan section"
                - "Tag each claim in the draft with a matching evidence entry"
                - "List unsupported claims as open questions"
                - "Add the week's interview notes and new data to the evidence file @recurring(weekly:fri)"
            - name: Section-by-section writing schedule
              description: |-
                ## Purpose
                Plans written in one heroic weekend tend to be long on vision and short on numbers. Spreading the work over four to six weeks, with one section due each few days and the executive summary last, keeps the quality even and leaves time for an outside reader before the deadline that matters.

                ## Milestones
                1. A list of sections with an owner and a due date for each.
                2. The financial projections scheduled early, since other sections depend on them.
                3. A week reserved for outside review before the external deadline.
                4. The executive summary scheduled as the last section written.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every plan section has an owner and a due date, with a review week and the executive summary scheduled before the external deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the external deadline at the top of the schedule"
                - "Give each section an owner and a due date working backwards"
                - "Block a full week for outside review before the deadline"
                - "Put recurring writing blocks for the next four weeks in the calendar"
            - name: Bottom-up market sizing for the plan
              description: |-
                ## Purpose
                Saying the market is worth 40 billion tells a reader nothing about your business. Counting the customers you could realistically reach, multiplying by what each would pay, and showing the working step by step gives a serviceable market figure that investors and lenders can check and believe.

                ## Milestones
                1. The number of target customers in your first market estimated from a named source.
                2. An annual revenue per customer figure tied to your planned price.
                3. Total, serviceable and obtainable market figures with the working shown.
                4. A top-down figure from published research used only as a sense check.

                ## Notes
                Show the arithmetic in the plan itself. A reader who can follow the multiplication trusts the result; one who sees only the answer assumes it was picked to impress.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The plan contains a bottom-up market size with named sources for customer counts and price, and the working is visible on the page."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a credible count of the customers in your first target market"
                - "Multiply by the annual price you plan to charge each one"
                - "Write the share you could realistically win in three years and why"
                - "Recheck the sizing sources and update the figures @recurring(yearly)"
            - name: Solution section grounded in what exists today
              description: |-
                ## Purpose
                Readers discount any feature that is only planned, so a solution section should separate clearly what customers can use now, what is in build, and what is an idea. Describing the product through one customer's before and after, with a screenshot or photo, does more than a list of features.

                ## Milestones
                1. Product capabilities split into live, in build and planned.
                2. One customer scenario written showing the situation before and after.
                3. A screenshot, photo or diagram of the real product included.
                4. Any claim of technical advantage stated with how it could be checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The solution section separates live, in-build and planned capabilities and includes one before-and-after customer scenario with a real image."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every product capability as live, in build or planned"
                - "Write a short before and after story for one real customer"
                - "Take a clean screenshot or photo of the current product"
                - "Cut any feature from the section that no customer has asked for"
            - name: Competitor table and positioning section
              description: |-
                ## Purpose
                Writing that there is no competition tells a reader you have not looked, because the customer always has an alternative, even if it is a spreadsheet or doing nothing. A comparison table of five real alternatives on the criteria customers care about, and one sentence on where you win and where you lose, reads as honest and informed.

                ## Milestones
                1. Five alternatives listed, including the do-nothing or spreadsheet option.
                2. Each compared on four or five criteria customers have actually mentioned.
                3. A positioning sentence stating who you are for and what you do better.
                4. At least one area where a competitor is stronger acknowledged in the text.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The plan includes a comparison table of five alternatives on customer-chosen criteria and one positioning sentence that names a weakness."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask three customers what they would use if you did not exist"
                - "Build a table comparing five alternatives on customer criteria"
                - "Write one sentence on who you are for and why you win"
                - "Check competitor pricing and features for changes @recurring(quarterly)"
            - name: Business model and revenue streams section
              description: |-
                ## Purpose
                This section answers who pays, how much, how often and why they keep paying. Laying out each revenue stream with its price point, billing pattern and the cost of serving it shows whether the model holds together, without needing the full unit economics workbook in the plan body.

                ## Milestones
                1. Every revenue stream named with who pays and how often.
                2. Current or planned price points stated with a line on how they were set.
                3. The main costs of serving one customer listed in plain terms.
                4. A short paragraph on how revenue grows per customer over time, if it does.

                ## Notes
                Keep detailed unit economics in the appendix or the model. The plan body needs the shape of the model and the two or three numbers that prove it works.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The business model section names each revenue stream, its price and billing pattern, and the main cost of serving a customer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each way the company earns money and who pays"
                - "Write the price and billing frequency for each stream"
                - "Note the two or three biggest costs of serving one customer"
                - "Describe in one paragraph how a customer's spend grows over time"
            - name: Go-to-market section with the first three channels
              description: |-
                ## Purpose
                Listing ten marketing channels usually means the founders have tried none of them. Naming the three channels you will use first, with what each costs, what it has produced so far and the target for the next six months, makes the growth assumptions in the financials believable.

                ## Milestones
                1. Three priority channels chosen and the reason for each written down.
                2. Results to date for each channel recorded, even if small.
                3. A six-month target and cost for each channel that matches the financial projections.
                4. Channels you are deliberately not using listed with a reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The go-to-market section names three channels with results to date and six-month targets that match the numbers in the projections."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write every channel that has produced a customer so far"
                - "Pick the three you will focus on and say why"
                - "Set a six-month target for each that matches the forecast"
                - "Record each channel's results against its target @recurring(monthly:20)"
            - name: Operations, suppliers and key partners section
              description: |-
                ## Purpose
                Lenders in particular want to know how the product actually gets made and delivered, who the business depends on, and what happens if one supplier fails. A short operations section covering delivery, key suppliers, premises, systems and legal requirements shows the business can function day to day.

                ## Milestones
                1. The steps from customer order to delivery described in a short paragraph or diagram.
                2. Key suppliers and partners listed with what they provide and any backup.
                3. Premises, equipment and core software listed with monthly costs.
                4. Licences, permits or insurance the business needs listed, to be confirmed with an adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The operations section maps delivery from order to customer, lists key suppliers with backups, and names required licences and insurance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch how an order moves from sale to delivery"
                - "List every supplier the business could not run without"
                - "Name a backup for each critical supplier where one exists"
                - "List the licences and insurance to check with an adviser"
            - name: Team section and milestone-linked hiring plan
              description: |-
                ## Purpose
                Early-stage readers back people as much as ideas, and they want to see why this team can win and who is missing. Pairing short founder biographies focused on relevant achievements with a hiring plan tied to milestones, rather than dates, shows you know which gaps matter and when they become urgent.

                ## Milestones
                1. A short biography for each founder, focused on what is relevant to this business.
                2. The skill gaps in the current team named honestly.
                3. Each planned hire tied to a milestone that triggers it, with an estimated cost.
                4. Advisers listed only where they have agreed and contribute something specific.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team section has relevant founder biographies, named skill gaps, and a hiring plan where every role is tied to a milestone and a cost."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-line biography for each founder for this business"
                - "List the skills the company needs that no founder has"
                - "Tie each planned hire to the milestone that justifies it"
                - "Review the hiring plan against progress on milestones @recurring(quarterly)"
            - name: Eighteen-month milestones and timeline
              description: |-
                ## Purpose
                Milestones are where the plan becomes a promise: launch, first ten paying customers, a revenue level, a key hire, a certification. Writing eight to twelve dated, measurable milestones for the next eighteen months, and showing which depend on funding, lets a reader see what their money or support buys.

                ## Milestones
                1. Eight to twelve milestones written, each measurable and dated by quarter.
                2. Dependencies between milestones marked.
                3. Milestones that need outside funding clearly separated from those that do not.
                4. A one-page timeline chart added to the plan.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan shows eight to twelve measurable milestones over eighteen months, dated by quarter, with funding dependencies marked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the five most important things that must happen in eighteen months"
                - "Break them into eight to twelve measurable milestones by quarter"
                - "Mark which milestones depend on raising or borrowing money"
                - "Check milestone dates against reality and adjust the timeline @recurring(monthly:3)"
            - name: Three-year financial projections summary
              description: |-
                ## Purpose
                Most readers will turn to the numbers before anything else, and they expect a monthly first year, then quarterly or annual figures, driven by assumptions they can see. A summary of revenue, costs, cash and headcount that ties back to the assumption register and the go-to-market section makes the plan internally consistent.

                ## Milestones
                1. Revenue built from customer numbers and price, not from a growth percentage.
                2. Costs split into people, product, marketing and overheads.
                3. Monthly cash balance for the first eighteen months, showing the lowest point.
                4. A one-page summary table for the plan body, with the full model in the appendix.
                5. Every key input linked to an entry in the assumption register.

                ## Notes
                A hockey stick that starts next quarter undermines everything else. Growth that follows from the channels and hires in the plan is far more convincing than growth that follows from ambition. Have an accountant check the model before it goes to a lender.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-year projection with a monthly first year shows revenue, costs, cash and headcount, and every key input links to the assumption register."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a simple projection template with monthly columns for year one"
                - "Build revenue from customer numbers multiplied by price"
                - "Add costs by category and the monthly cash balance"
                - "Ask an accountant or experienced founder to check the model"
            - name: Funding ask and use of funds table
              description: |-
                ## Purpose
                Whether you are asking a bank, an investor or a grant body, the reader wants to know how much, what it is for, and what it gets the company to. A use of funds table that maps every part of the ask to a cost line and to the milestone it reaches, with a buffer stated openly, answers all three.

                ## Milestones
                1. The total amount needed calculated from the projections, including a stated buffer.
                2. A table splitting the amount by category, such as people, product and marketing.
                3. Each category linked to the milestone it funds.
                4. The months of runway the money provides written in one line.

                ## Notes
                This section states the amount and purpose. The terms, such as equity, loan rate or grant conditions, are for negotiation with the funder and advice from your lawyer or accountant.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan states one funding amount with a buffer, splits it by category, and links each category to a milestone and a runway figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the lowest cash point from the projections"
                - "Add a stated buffer and round to a clear figure"
                - "Split the amount into four or five spending categories"
                - "Link each category to the milestone it reaches"
            - name: Risks section with owners and mitigations
              description: |-
                ## Purpose
                Readers trust a plan more when it names the risks before they do. Listing the eight to ten real risks across market, product, team, money and regulation, each with a likelihood, an impact, an owner and a mitigation, shows you have thought past the best case.

                ## Milestones
                1. Eight to ten risks listed across market, product, team, finance and regulation.
                2. Each rated for likelihood and impact.
                3. An owner and a mitigation written for each risk.
                4. The top three risks summarised in a short paragraph in the plan body.

                ## Notes
                Start from the **Risk register** template. Leave out generic risks such as the economy might worsen unless you can say what you would do about them.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register of eight to ten specific risks has likelihood, impact, owner and mitigation for each, and the top three appear in the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Brainstorm every way the business could fail in two years"
                - "Keep the eight to ten most specific risks"
                - "Give each a likelihood, impact, owner and mitigation"
                - "Rerate the risks and add new ones @recurring(quarterly)"
            - name: Executive summary written last
              description: |-
                ## Purpose
                Many readers will see only the executive summary, so it has to stand alone in one or two pages: problem, solution, customer, traction, model, team, the ask and what it achieves. Writing it after every other section means it summarises what the plan actually says, not what you hoped it would say.

                ## Milestones
                1. A one to two page summary covering problem, solution, market, traction, model, team and ask.
                2. Every number in the summary matching the body of the plan.
                3. The summary read cold by someone who has not seen the plan, with their questions noted.
                4. A version under 300 words prepared for email introductions.

                ## Notes
                Lead with the most impressive true fact you have, often traction. A summary that opens with industry background loses the reader before the second paragraph.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standalone summary of at most two pages exists, its numbers match the plan body, and a 300-word email version is saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one sentence summarising each section of the finished plan"
                - "Expand those sentences into a two-page summary"
                - "Check every figure in the summary against the plan body"
                - "Ask the agent to draft a 300-word version for email introductions"
            - name: Writing plain, concise business prose
              description: |-
                ## Purpose
                Plans fail on readability more often than on ideas: long sentences, jargon, and adjectives standing in for evidence. Practising a few rules, such as one idea per sentence, numbers instead of adjectives, active verbs and a heading that states the point, makes a twenty-page plan readable in twenty minutes.

                ## Milestones
                1. A short style guide of eight rules written for the team.
                2. One section rewritten to the rules, with its length cut by at least a quarter.
                3. A list of banned words for the plan, such as revolutionary and disruptive.
                4. Every section heading rewritten to state its conclusion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written eight-rule style guide exists, and at least one plan section has been rewritten to it and cut by a quarter or more."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short guide to plain business writing"
                - "Write eight style rules for the plan on one page"
                - "Rewrite the longest section of the draft to those rules"
                - "Change each heading so it states the section's conclusion"
            - name: Studying published business plans as models
              description: |-
                ## Purpose
                Few founders have ever read a good business plan, so they copy the structure of a template that may not fit. Reading five real plans or investment memos from companies at a similar stage, and noting what each does well, gives you a sense of length, tone and evidence that no template provides.

                ## Milestones
                1. Five real plans, memos or funding applications collected from similar-stage companies.
                2. Notes on what each does well and what feels padded.
                3. Three techniques chosen to borrow for your own plan.
                4. A shortlist of sections your plan could drop or shorten.

                ## Notes
                Start from the **Reading queue** template. Accelerators, grant bodies and some venture firms publish successful examples; founders who have raised are often willing to share an old plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five real plans or memos have been read with notes, and three borrowed techniques are listed for your own plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two founders you know for an old plan or memo"
                - "Collect five examples from similar-stage companies"
                - "Write what works and what feels padded in each"
                - "Read one more example plan or investment memo @recurring(monthly:5)"
            - name: Financial statements basics for plan writers
              description: |-
                ## Purpose
                Lenders and investors read a plan's numbers as a profit and loss statement, a cash flow forecast and a balance sheet, and confusion between profit and cash is the most common error in founder plans. A few focused hours on how the three statements connect means you can explain your own projections without the accountant in the room.

                ## Milestones
                1. The three statements and how they link explained in your own words on one page.
                2. The difference between revenue, profit and cash shown with an example from your business.
                3. Working capital effects, such as customers paying late, understood and modelled.
                4. Your projections explained aloud to a co-founder without notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain on one page how profit, cash and the balance sheet link, using an example drawn from your own projections."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Take a short course or read a primer on the three statements"
                - "Write a one-page explanation of how they connect"
                - "Model what happens to cash if customers pay 60 days late"
                - "Walk a co-founder through the projections without notes"
            - name: Tailoring one plan for banks, investors and grant panels
              description: |-
                ## Purpose
                Banks want to see repayment ability and security, investors want to see a path to a very large outcome, and grant panels want to see public benefit and eligibility. Learning what each reader scores, and keeping one core plan with short tailored sections, saves you from writing three plans from scratch.

                ## Milestones
                1. A one-page note on what banks, investors and grant panels each look for.
                2. The core plan sections that stay the same for every reader identified.
                3. The sections that need a tailored version listed for each reader type.
                4. A tailored executive summary drafted for the second most likely reader.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on each reader type's criteria exists, and the plan has a list of core and tailored sections with one tailored summary drafted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the published criteria of one lender and one grant scheme"
                - "Write what each reader type scores on one page"
                - "Mark which plan sections are core and which need tailoring"
                - "Draft a tailored summary for your second most likely reader"
            - name: Charts and tables that carry the argument
              description: |-
                ## Purpose
                Skimming readers look at headings, the first sentence of each section and every chart. Choosing five or six visuals, such as a market sizing breakdown, a revenue bridge, a milestone timeline and a cash curve, each with a title that states its point, lets the plan make its case even to a skimmer.

                ## Milestones
                1. Five or six charts or tables chosen, one per key claim.
                2. Each visual titled with its conclusion, not its subject.
                3. Consistent fonts, colours and units across all visuals.
                4. A skim test passed where a colleague summarises the plan from visuals alone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The plan contains five or six consistently styled visuals with conclusion titles, and a colleague can summarise the plan from them alone."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the five claims a skimming reader must take away"
                - "Choose one chart or table that proves each claim"
                - "Retitle each visual so the title states the conclusion"
                - "Ask a colleague to summarise the plan from the visuals only"
            - name: Monthly plan versus actuals check
              description: |-
                ## Purpose
                Left uncompared with reality, a plan goes stale within a quarter. Spending forty minutes each month setting actual revenue, costs, customers and cash beside the plan, and writing one line on why each big gap exists, keeps the plan honest and gives you the answers before an investor or board member asks.

                ## Milestones
                1. A comparison sheet with plan and actual columns for the eight headline numbers.
                2. Actuals entered for the first full month after the plan was finished.
                3. A one-line explanation written for any number more than 15% off plan.
                4. Three consecutive months completed without a gap.

                ## Notes
                Start from the **Metrics log** template. Do not change the plan column when actuals miss; record the gap and update the forecast separately so the history stays visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Plan and actual figures for eight headline numbers are recorded every month, with an explanation for each gap over 15%."
                cadence: rolling
              tasks:
                - "Choose the eight headline numbers to compare each month"
                - "Set up a sheet with plan and actual columns side by side"
                - "Enter last month's actuals and explain the big gaps @recurring(monthly:8)"
                - "Share the gap summary with co-founders in the monthly meeting @recurring(monthly:10)"
            - name: Quarterly business plan refresh
              description: |-
                ## Purpose
                Every quarter teaches an early startup something that should change the plan: a channel that did not work, a price that stuck, a hire that took twice as long. A two to three hour refresh each quarter, updating the canvas, the forecast and the milestones, keeps one current version ready to send at short notice.

                ## Milestones
                1. The one-page canvas updated with the quarter's learning.
                2. The forecast rolled forward with actuals and revised assumptions.
                3. Milestones marked as hit, missed or moved, with a reason.
                4. A new dated version saved and the old one archived.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A new dated version of the plan exists each quarter with an updated canvas, forecast and milestone status."
                cadence: cyclic
              tasks:
                - "Block three hours for the first plan refresh of the quarter"
                - "Update the canvas, forecast and milestones with the quarter's results"
                - "Save a new dated version of the plan and archive the old one @recurring(quarterly)"
                - "Note in the change log what changed and why"
            - name: Monthly assumption register review
              description: |-
                ## Purpose
                Assumptions only become knowledge when someone checks them. A short monthly pass through the register, moving tested assumptions to confirmed or broken and adding new ones, turns the plan into a record of what the company has learned and points the next month's experiments at the riskiest gaps.

                ## Milestones
                1. Each flagged assumption reviewed and its status updated.
                2. Broken assumptions traced through to the sections and numbers they affect.
                3. New assumptions from the month added with a source and confidence.
                4. The riskiest untested assumption chosen as next month's test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The assumption register shows a review date in each of the last three months, with statuses updated and a next test chosen."
                cadence: rolling
              tasks:
                - "Mark each flagged assumption as untested, confirmed or broken"
                - "Trace any broken assumption to the plan sections it changes"
                - "Review the register and pick next month's riskiest test @recurring(monthly:15)"
                - "Add any new assumptions the month surfaced"
            - name: Reader feedback log and response
              description: |-
                ## Purpose
                Every investor pass, bank question and adviser comment is free feedback on the plan, but it is usually lost in email threads. Logging each piece of feedback, grouping repeated themes and deciding whether to change the plan or the explanation means the fifth reader gets a better plan than the first.

                ## Milestones
                1. One log recording who read the plan, when, and what they said.
                2. Feedback grouped into recurring themes.
                3. A decision recorded for each theme: change the plan, change the wording, or disagree.
                4. Changes made for any theme raised by three or more readers.

                ## Notes
                Write down the question a reader asked, not just your answer. Repeated questions show where the plan is unclear.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log records feedback from every reader with themes and a decision for each, and themes raised three times have led to changes."
                cadence: rolling
              tasks:
                - "Create a feedback log with reader, date, question and response"
                - "Enter feedback from everyone who has read the plan so far"
                - "Group the log into themes and decide on changes @recurring(monthly:22)"
                - "Send a short thank you and update to each reader who gave detailed notes"
            - name: Quarterly priorities drawn from the plan
              description: |-
                ## Purpose
                Nothing in a plan matters unless it changes what the team does on Monday. Turning the next quarter's milestones into three to five priorities, each with an owner and a measurable result, links the document to the work and shows quickly when the plan and the work have drifted apart.

                ## Milestones
                1. Three to five priorities for the quarter, each tied to a plan milestone.
                2. An owner and a measurable result for each priority.
                3. Priorities shared with the whole team in writing.
                4. A scored end-of-quarter review recorded before the next set is chosen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has three to five written priorities linked to plan milestones, with owners, and the previous quarter's are scored."
                cadence: cyclic
              tasks:
                - "Pick the plan milestones that fall due next quarter"
                - "Turn them into three to five priorities with owners"
                - "Score last quarter's priorities and set the next ones @recurring(quarterly)"
                - "Post the priorities where the whole team will see them"
            - name: Annual business plan rewrite
              description: |-
                ## Purpose
                Quarterly refreshes patch the plan, but after a year the original logic may no longer fit the business you have become. Rewriting from a blank page once a year, using the year's evidence, often produces a shorter and sharper plan and forces the question of whether the strategy itself should change.

                ## Milestones
                1. A year-in-review page listing what was learned, hit and missed.
                2. A new canvas drawn from scratch without looking at the old one.
                3. A rewritten plan with a fresh three-year forecast.
                4. Differences between the old and new strategy summarised for the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A rewritten plan with a new canvas, a fresh forecast and a summary of strategic changes is completed each year."
                cadence: cyclic
              tasks:
                - "Write a one-page review of the past year's results"
                - "Draw a new canvas from a blank page"
                - "Rewrite the plan from scratch with a new forecast @recurring(yearly)"
                - "Summarise for the team what changed in the strategy"
            - name: Outside red-team review of the plan
              description: |-
                ## Purpose
                Founders read their own plans with the gaps filled in by what they already know. Asking two experienced outsiders, such as a founder a few years ahead or a former lender, to attack the plan for an hour and find the weakest argument exposes the holes before the reader who matters finds them.

                ## Milestones
                1. Two reviewers chosen with relevant experience and no stake in a yes.
                2. Each reviewer given the plan and a specific brief to find the weakest points.
                3. Notes from each session recorded with the three biggest objections.
                4. A response written to each objection, with plan changes made where needed.

                ## Notes
                Start from the **Meeting notes** template. Ask reviewers what would make them say no, not whether they like it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two outside reviews are recorded, each with three main objections and a written response or change for each one."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name two experienced people who will be honest about the plan"
                - "Send each the plan with a brief to find the weakest argument"
                - "Record the three biggest objections from each review"
                - "Change the plan or write a response for each objection"
            - name: Downside and upside scenarios in the plan
              description: |-
                ## Purpose
                One forecast on its own implies false certainty, and an experienced reader will ask what happens if sales take twice as long. Building a downside and an upside case from the three most sensitive assumptions, and showing what you would do differently in each, proves the plan survives being wrong.

                ## Milestones
                1. The three assumptions with the most effect on cash identified.
                2. A downside and an upside case built by changing only those assumptions.
                3. The cash low point and runway shown for each case.
                4. The actions you would take in the downside written into the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The plan shows base, downside and upside cases with cash low points, and lists the actions the team would take in the downside."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the three assumptions that move cash the most"
                - "Build a downside case with slower sales and higher costs"
                - "Write what the team would cut or delay in the downside"
                - "Rerun the scenarios with the latest actuals @recurring(quarterly)"
            - name: Choosing between raising, borrowing and bootstrapping
              description: |-
                ## Purpose
                The plan's funding section depends on a choice many founders make by default: equity investment, a loan, grants, customer revenue or a mix. Comparing what each route would mean for ownership, repayment, speed and control, using your own projections, makes the choice deliberate before the plan is written around it.

                ## Milestones
                1. Each realistic funding route listed with its main conditions.
                2. The projections checked against each route, such as whether cash flow could cover loan repayments.
                3. Advice taken from an accountant or adviser on the options that remain.
                4. The chosen route and the reasons recorded, with the plan's funding section aligned to it.

                ## Notes
                This is a structured comparison to take to your accountant or adviser, not a recommendation. Their view on tax, repayment and dilution should shape the final choice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of funding routes exists, an adviser has been consulted, and the chosen route and reasons are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the funding routes realistically open to the company"
                - "Write the main conditions and trade-offs of each"
                - "Check the projections against the repayment or growth each implies"
                - "Book a session with an accountant or adviser to test the choice"
            - name: Cutting the full plan to ten pages
              description: |-
                ## Purpose
                First drafts of business plans run to thirty or forty pages because cutting feels like losing work. Setting a hard ten-page limit for the body, with detail moved to appendices, forces every section to make its point and nearly always improves the reader's view of the thinking behind it.

                ## Milestones
                1. The current page count of each section recorded.
                2. A page budget set for each section that totals ten.
                3. Supporting detail moved to clearly labelled appendices.
                4. A ten-page body that a reader can finish in under half an hour.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan body is ten pages or fewer, with detail moved to labelled appendices and no section over its page budget."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the pages in each section of the current draft"
                - "Give each section a page budget that adds up to ten"
                - "Move tables and detail that support a claim into appendices"
                - "Time a colleague reading the shortened body"
            - name: Decision points and kill criteria in the plan
              description: |-
                ## Purpose
                A plan that only describes success gives the team no way to tell when it is failing. Writing three or four decision points, such as if fewer than 20 paying customers by month nine we change segment, turns the plan into a tool for the hard calls rather than a document that ages quietly.

                ## Milestones
                1. Three or four decision points written with a date and a measurable threshold.
                2. The action agreed in advance for each, such as change segment, cut costs or stop.
                3. Every co-founder signed up to the thresholds in writing.
                4. Decision points added to the milestones section of the plan.

                ## Notes
                Agree the thresholds while you are calm. Set later, under pressure, they tend to move to wherever the numbers have landed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three or four dated decision points with thresholds and agreed actions are written into the plan and accepted by every co-founder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the measurable signs that would show the plan is not working"
                - "Set a date and a threshold for each sign"
                - "Agree in advance what you will do if each threshold is missed"
                - "Check progress against each decision point @recurring(quarterly)"
            - name: Bank loan business plan submission
              description: |-
                ## Purpose
                Lenders read a plan to answer one question: can this business repay, and what happens if it cannot. Preparing a version that leads with cash flow, repayment capacity, the founders' own contribution and any security, and matching the bank's own application format, raises the odds of a yes and shortens the back and forth.

                ## Milestones
                1. The lender's application form and required documents collected.
                2. A plan version that shows monthly cash flow with loan repayments included.
                3. Personal contribution, security and guarantees stated clearly, after taking advice.
                4. The full pack submitted by the lender's deadline and a follow-up date set.

                ## Notes
                Ask the lender for their template early; many prefer it to a free-form plan. Take independent advice before signing any personal guarantee.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete loan application with a cash flow showing repayments is submitted by the lender's deadline, with a follow-up date set."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the lender for their application form and document list"
                - "Add loan repayments to the monthly cash flow forecast"
                - "Write the section on personal contribution and security"
                - "Take advice on any guarantee before submitting the pack"
            - name: Grant and public funding application plan
              description: |-
                ## Purpose
                Grant panels score against published criteria, and a strong business plan can still fail because it does not answer them in their order. Mapping your plan onto the scheme's scoring guide, adding the eligibility and public benefit evidence it asks for, and keeping records for later reporting makes a grant application much quicker to write.

                ## Milestones
                1. The scheme's eligibility rules, scoring criteria and deadline written down.
                2. Each scoring criterion mapped to the plan section that answers it.
                3. Missing evidence, such as letters of support or match funding, gathered.
                4. The application submitted and reporting obligations noted if it succeeds.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An application answering every scoring criterion in the scheme's order is submitted before its deadline, with reporting duties recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download the scheme guidance and scoring criteria"
                - "Map each criterion to the plan section that answers it"
                - "Request letters of support from partners or customers"
                - "Note the reporting requirements if the grant is awarded"
            - name: Business plan competition entry
              description: |-
                ## Purpose
                Competitions run by universities, banks and local enterprise bodies offer prize money, feedback from judges and contacts, often in exchange for a short plan and a pitch. Preparing a compact entry to the competition's format and rehearsing the pitch against its judging criteria is a useful forcing deadline for an early plan.

                ## Milestones
                1. One or two competitions chosen that fit the company's stage and location.
                2. The entry written to the competition's word or page limits.
                3. A pitch of the required length rehearsed at least three times with feedback.
                4. The entry submitted and judges' feedback recorded afterwards.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An entry is submitted to a chosen competition on time, the pitch has been rehearsed three times, and judges' feedback is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search for business plan competitions open to your stage and region"
                - "Read the judging criteria and word limits of the best fit"
                - "Cut the plan to the competition's format"
                - "Rehearse the pitch three times in front of different people"
            - name: Investor due diligence version with appendices
              description: |-
                ## Purpose
                Once an investor is interested, the short plan is replaced by questions that need documents: the full model, customer contracts, cap table, key metrics history and team agreements. Preparing an extended plan with organised appendices ahead of time means diligence takes weeks rather than months and shows the company is well run.

                ## Milestones
                1. The full financial model and its assumptions tidied and documented.
                2. Appendices assembled for metrics history, key customer evidence and team details.
                3. Company documents such as incorporation papers and the cap table filed in order.
                4. Sensitive items marked for sharing only under a confidentiality agreement.

                ## Notes
                Check every appendix figure against the plan body before sharing. Inconsistencies found in diligence do more damage than any single weak number.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An extended plan with indexed appendices for model, metrics, customers, team and company documents is ready to share within a day of request."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the documents investors usually request in diligence"
                - "Tidy the financial model and write a short guide to it"
                - "Collect metrics history and customer evidence into appendices"
                - "Mark which documents need a confidentiality agreement first"
            - name: Annual planning offsite with co-founders
              description: |-
                ## Purpose
                Writing next year's plan in between sales calls rarely produces clear thinking. A day or two away with the founding team and any senior hires, with a set agenda covering last year's results, the market, the strategy and next year's milestones, gives the annual rewrite the time and attention it needs.

                ## Milestones
                1. A date and place booked, away from the usual workspace.
                2. Pre-reading sent a week ahead: last year's results and the current plan.
                3. An agenda covering review, strategy, milestones and the budget.
                4. Decisions and owners recorded and shared within two days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite is held with a pre-read and agenda, and its decisions, owners and next year's milestones are shared in writing within two days."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Choose a date and a place away from the office"
                - "Prepare a pre-read of last year's results and the current plan"
                - "Write the agenda with time for review, strategy and milestones"
                - "Send the decisions and owners to everyone within two days"
            - name: Solo founder plan with outside sounding boards
              description: |-
                ## Purpose
                Without a co-founder, nobody challenges your assumptions while you write, and it is easy to produce a plan that only convinces its author. Recruiting two or three people to read drafts at set points, and scheduling a monthly call to test the plan against progress, provides the challenge a co-founder would.

                ## Milestones
                1. Two or three sounding boards agreed, such as another founder, a mentor and a customer.
                2. Each given a defined role, such as challenge the numbers or check the customer story.
                3. Drafts sent to them at outline, first draft and final stages.
                4. A monthly call in place to review the plan against progress.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two or three named sounding boards have reviewed the plan at three stages, and a monthly review call has run for three months."
                cadence: rolling
              tasks:
                - "List five people whose judgement on the plan you would trust"
                - "Ask two or three of them to review drafts at set stages"
                - "Give each a specific role in reviewing the plan"
                - "Hold a call with a sounding board on plan progress @recurring(monthly:18)"
            - name: Social enterprise plan with an impact section
              description: |-
                ## Purpose
                Founders of social enterprises have to show two things at once: that the business can pay its way and that the mission is real and measurable. Adding an impact section with a simple theory of change, two or three outcome measures and how they will be tracked lets impact investors, grant bodies and customers judge both.

                ## Milestones
                1. A theory of change written from activities to outcomes in five steps or fewer.
                2. Two or three outcome measures chosen with how each will be collected.
                3. Any tension between impact and income named, with how decisions will be made.
                4. The impact section placed beside the financials so both are read together.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan contains a theory of change, two or three measurable outcomes with collection methods, and a note on impact versus income trade-offs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the chain from what you do to the change it causes"
                - "Choose two or three outcomes you can actually measure"
                - "Write how each outcome will be collected and how often"
                - "Describe how you will decide when impact and income conflict"
            - name: Deep tech plan with research and regulatory stages
              description: |-
                ## Purpose
                Science-based startups often need years and several funding rounds before revenue, and a standard three-year plan hides that. Structuring the plan around technical stages, each with a readiness level, the evidence that ends it, the regulatory steps and the money needed, shows a reader exactly what risk each round of funding removes.

                ## Milestones
                1. Technical stages from lab result to product defined, each with an exit test.
                2. Regulatory or certification steps placed on the timeline, confirmed with a specialist.
                3. Funding needed for each stage estimated, including non-dilutive sources.
                4. Intellectual property position summarised after advice from a patent adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan shows technical stages with exit tests, regulatory steps, stage-by-stage funding and a summary of the IP position."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the technical stages between today and a sellable product"
                - "Write the test that proves each stage is complete"
                - "Place regulatory steps on the timeline and confirm them with a specialist"
                - "Estimate the funding needed to reach the end of each stage"
            - name: Hardware plan with manufacturing and inventory cash
              description: |-
                ## Purpose
                Physical products tie up cash in tooling, minimum order quantities and stock months before a customer pays, and plans that treat hardware like software run out of money at the first production run. A plan that shows the bill of materials, supplier lead times, certification and the cash tied up in inventory gives a realistic picture of what the business needs.

                ## Milestones
                1. A costed bill of materials at prototype and at target production volume.
                2. Supplier lead times and minimum order quantities placed on the timeline.
                3. Certification steps and costs for target markets listed, to be confirmed with a test lab.
                4. The cash forecast showing money tied up in inventory and tooling month by month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan includes a costed bill of materials, supplier lead times, certification costs and a cash forecast that shows inventory and tooling spend."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Cost the bill of materials at prototype and production volume"
                - "Ask two suppliers for lead times and minimum order quantities"
                - "List the certifications needed for each target market"
                - "Add tooling and inventory payments to the monthly cash forecast"
            - name: Business plan for a founder visa application
              description: |-
                ## Purpose
                Founder and entrepreneur visa routes in many countries ask for a business plan that an endorsing body or immigration officer assesses for innovation, viability and growth. Writing to the route's official guidance, with the specific evidence it requests, avoids a refusal on a document that would have satisfied an investor.

                ## Milestones
                1. The official guidance for the chosen visa route read and its plan requirements listed.
                2. Each requirement mapped to a section of the plan.
                3. Evidence of the founder's role and the business's viability gathered as specified.
                4. The plan checked by an immigration adviser or the endorsing body before submission.

                ## Notes
                Requirements change often and differ by country. Rely only on the official guidance and a qualified immigration adviser, never on a template from an unofficial site.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A plan that maps to every requirement in the official visa guidance is checked by an adviser or endorsing body and submitted on time."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download the official guidance for the visa route you are applying to"
                - "List every requirement it sets for the business plan"
                - "Map each requirement to a section of your plan"
                - "Book a review with a qualified immigration adviser"
            - name: Bootstrapped plan funded by customer revenue
              description: |-
                ## Purpose
                When growth is paid for by customers, the plan's central question is how fast the business can grow without running out of cash. A bootstrapped plan builds spending from revenue already earned, sets rules for when to hire or spend, and makes the founders' own pay explicit, because that is where the money comes from.

                ## Milestones
                1. A forecast where each month's spending is limited by the previous months' revenue.
                2. Spending rules written, such as hire only when revenue covers the salary for six months.
                3. Founder pay set out explicitly in the forecast.
                4. A minimum cash balance agreed that triggers cuts if breached.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan has a revenue-limited forecast, written spending rules, explicit founder pay and an agreed minimum cash balance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rebuild the forecast so spending follows earned revenue"
                - "Write three spending rules for hires and big purchases"
                - "Add a line for founder pay to every month of the forecast"
                - "Compare monthly revenue with the bootstrapped plan @recurring(monthly:25)"
            - name: Board-approved annual operating plan and budget
              description: |-
                ## Purpose
                Once a company has a board, the business plan becomes an annual operating plan: a budget, targets and headcount the board formally approves and holds management to. Preparing it on a set timetable, with a draft, a board discussion and a final approval, and then reforecasting each quarter, is the grown-up version of the startup plan.

                ## Milestones
                1. A planning timetable agreed with the board, from first draft to approval.
                2. A budget and target set covering revenue, costs, headcount and cash.
                3. The plan discussed at a board meeting and changes recorded.
                4. Formal approval minuted and a quarterly reforecast scheduled.

                ## Notes
                Start from the **Board meeting** template. Send the draft at least a week before the meeting so the discussion is about choices, not about reading.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An annual operating plan with budget and targets is approved by the board and minuted, with quarterly reforecasts scheduled."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Agree the planning timetable with the board chair"
                - "Draft the budget, targets and headcount for next year"
                - "Send the draft to the board a week before the meeting"
                - "Reforecast the operating plan against actuals for the board @recurring(quarterly)"
            - name: Market expansion plan for a new country or segment
              description: |-
                ## Purpose
                Entering a new country or customer segment is a fresh bet inside an existing company, and it deserves its own short plan rather than a line in the annual budget. Treating it as a mini business plan, with its own sizing, entry route, local requirements, costs and stop criteria, stops a promising expansion from quietly draining the core business.

                ## Milestones
                1. The new market sized bottom-up, separately from the core market.
                2. An entry route chosen, such as direct sales, a partner or a local hire.
                3. Local legal, tax and regulatory requirements listed for checking with local advisers.
                4. A separate budget with milestones and stop criteria for the first year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A short expansion plan with its own sizing, entry route, budget and stop criteria is written and a go or no-go decision recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Size the new market from local customer counts and price"
                - "Compare direct, partner and local hire entry routes"
                - "List local requirements to check with an adviser there"
                - "Ask the agent to summarise the plan into a go or no-go paper"
            - name: Coaching another founder through a first plan
              description: |-
                ## Purpose
                Once you have written and used a few plans, helping another founder with their first one sharpens your own judgement and builds goodwill in the founder community. Running three structured sessions, covering readers, the canvas and a review of the draft, gives them a better plan and gives you a fresh view of your own blind spots.

                ## Milestones
                1. A founder agreed to work with, with their deadline and reader known.
                2. A first session held on the readers and the one-page canvas.
                3. A second session reviewing their assumptions and financial projections.
                4. A final review of the full draft with written feedback.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three structured sessions with another founder are completed, and they receive written feedback on their full draft."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Offer to help one earlier-stage founder with their plan"
                - "Run a first session on their readers and canvas"
                - "Review their assumptions and projections in a second session"
                - "Write feedback on their full draft after the final session"
---

# Startup Business Plan Writing

This area is for founders who need a business plan that does real work: it exposes weak logic before money is spent, and it convinces a bank, investor, grant panel or co-founder that the thinking is sound. It runs from foundations (who the plan is for, a one-page canvas, an assumption register and an evidence file), through each section of the plan from market sizing to the funding ask and the executive summary, then the writing and financial skills behind a good plan, the rhythms that keep it current, the decisions it should force, dated submissions such as a loan application or a competition, variants for solo, social, deep tech, hardware, visa and bootstrapped founders, and finally specialist work such as a board-approved operating plan.

What repeats is a monthly plan versus actuals check, a monthly assumption review, a quarterly refresh with priorities for the next quarter, and a yearly rewrite, plus light upkeep of the canvas, the evidence file and the risks. The **Risk register**, **Reading queue**, **Metrics log**, **Meeting notes** and **Board meeting** templates pair with the risks section, the study of other plans, the monthly numbers, the outside review and the board's operating plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
