---
id: wealth-investing.couples-retirement-plan-alignment
name: Couple's Retirement Plan Alignment
description: "Two partners' pensions, retirement dates and income goals lined up: a shared inventory, survivor cover checked, routines for talking money together and the joint decisions that leave neither partner short."
category: personal
version: 1.0.0
tags: [wealth-investing, couples-retirement-plan-alignment, everyone, couples, joint-planning, survivor-benefits, pension-gap]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - monthly-budget-bills
    - purchase-decision
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Couple's Retirement Plan Alignment
          description: "Aligning a couple's pensions, retirement ages and income goals so both partners are covered in retirement."
          projects:
            - name: Separate retirement wish lists before the first talk
              description: |-
                ## Purpose
                Partners who plan together often discover that the louder or more financially confident one has quietly set the agenda for years. Writing your answers separately first, about when you want to stop, where you want to be and what an ordinary week looks like, means both pictures reach the table intact. It takes an evening and makes the first joint conversation twice as useful.

                ## Milestones
                1. Each partner holds a private one-page list answering the same eight questions.
                2. Both lists include a preferred retirement age and a rough monthly income wanted.
                3. Each list names one thing that partner would not give up in retirement.
                4. The two lists swapped and read before the first joint conversation.

                ## Notes
                Agree the questions together but answer them apart. Useful prompts: when do you want to stop paid work, would you work part-time first, where do you want to live, what worries you most about money later.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two separately written retirement wish lists, each with an age, an income figure and one non-negotiable, have been exchanged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree eight shared questions about retirement with your partner"
                - "Answer the questions on your own without comparing notes"
                - "Add a preferred stopping age and a rough monthly income to your list"
                - "Swap lists two days before the first joint conversation"
            - name: First structured retirement conversation as a couple
              description: |-
                ## Purpose
                Most couples talk about retirement in fragments, in the car or after a bad day at work, and never reach a decision. A booked, two-hour conversation with an agenda built from both wish lists turns those fragments into a short list of agreements, open questions and owners. It also sets the tone: calm, written down, and with both voices heard.

                ## Milestones
                1. A two-hour slot booked with no children, screens or guests.
                2. An agenda built from the overlaps and clashes in both wish lists.
                3. Written notes listing points agreed, points still open and who will look into each.
                4. A date fixed for the follow-up conversation.

                ## Notes
                Start from the **Meeting notes** template. Aim to agree on the questions, not the answers: most first conversations end with homework, not a plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One agenda-led retirement conversation held, with written notes of agreements, open questions and named owners, and a follow-up date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a two-hour retirement conversation in both calendars"
                - "Mark where your two wish lists overlap and where they clash"
                - "Turn the clashes into an agenda of five or six questions"
                - "Write down agreements, open questions and owners before you finish"
                - "Set the date for the follow-up conversation"
            - name: Shared inventory of both partners' pensions
              description: |-
                ## Purpose
                Few couples can name every pension the two of them hold, let alone the value and provider of each, and the partner who left the paperwork to the other is usually the one who would need it most after a death. A single list of every workplace scheme, personal pension and retirement account, with owner, type, provider, policy number and latest value, is the base every later decision stands on.

                ## Milestones
                1. Every pension and retirement account for both partners listed in one place.
                2. Each entry shows owner, scheme type, provider, policy number and latest value.
                3. Any scheme with missing details flagged for a request to the provider.
                4. Both partners able to find and read the inventory without help.

                ## Notes
                Include small and old pots. If one looks lost, the Lost Pension Tracing area covers the search; here you only need it on the list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One inventory lists every pension and retirement account held by either partner, with owner, type, provider, reference and a value no older than a year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the latest annual statement for every pension either of you holds"
                - "List each pension with owner, type, provider, reference and value"
                - "Write to providers for any value or reference that is missing"
                - "Walk your partner through the finished inventory"
            - name: Both partners' state pension forecasts side by side
              description: |-
                ## Purpose
                State pensions and social security benefits are often the largest single income a couple will have, and the two forecasts can differ widely after career breaks, part-time years or time abroad. Putting both official forecasts on one page shows the household's guaranteed floor and which partner's record is thinner.

                ## Milestones
                1. An official forecast downloaded or requested for each partner.
                2. Both forecasts on one page with the earliest claim age for each.
                3. The household's combined state income at full claim age worked out.
                4. Any partner with a noticeably weaker record noted for follow-up.

                ## Notes
                Fixing gaps in a contribution record is covered by the State Pension and Social Security area. This project only compares the two forecasts so you can plan as a couple.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page comparison of both partners' official state pension forecasts, with claim ages and a combined annual figure, is in the joint folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request or download your own official state pension forecast"
                - "Help your partner request or download theirs"
                - "Put both forecasts on one page with each earliest claim age"
                - "Download fresh forecasts for both of you and update the page @recurring(yearly)"
            - name: Measuring the pension gap between partners
              description: |-
                ## Purpose
                Couples often treat retirement savings as one pot, yet pensions are owned individually and pay out individually, and in many households one partner holds most of the value. Working out each partner's projected income on their own shows the size of the gap in plain numbers, which matters for tax, for separation and for the partner left alone.

                ## Milestones
                1. Each partner's projected retirement income from all their own sources totalled.
                2. The gap expressed as an annual amount and as a share of the household total.
                3. The main causes of the gap listed, such as career breaks or a missed employer match.
                4. The figure recorded as the starting point for any equalisation target.

                ## Notes
                Use the projections printed on the statements rather than building your own model at this stage. Rough and comparable beats precise and lopsided.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each partner's projected annual retirement income is written down separately, with the gap between them as an amount and a percentage."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the projected income figure from each statement in the inventory"
                - "Total the projected retirement income for each partner separately"
                - "Work out the gap as an annual amount and as a share of the total"
                - "List the three biggest reasons the gap exists"
            - name: Each partner's earliest and preferred retirement age
              description: |-
                ## Purpose
                Two partners rarely want to stop on the same day, and the earliest date a pension can be drawn is often not the date either of you has in mind. Pinning down, for each of you, the earliest age your schemes allow, the age you would like, and the age the state pension starts, gives every later scenario a fixed frame.

                ## Milestones
                1. Each scheme's earliest access age and normal retirement age recorded.
                2. Each partner's preferred stopping age written down.
                3. Each partner's state pension age noted beside it.
                4. A simple timeline showing all six ages and the years between them.

                ## Notes
                Normal retirement ages in older workplace schemes can be earlier or later than you expect, and early payment can carry a reduction. Ask the scheme rather than assuming.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A timeline shows each partner's earliest access age, preferred age and state pension age, with each figure confirmed from scheme documents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the earliest access age for every scheme in the inventory"
                - "Ask any workplace scheme about reductions for taking it early"
                - "Write each partner's preferred stopping age beside those dates"
                - "Draw a timeline with all the ages for both of you"
            - name: Pension death benefit nominations for both partners
              description: |-
                ## Purpose
                Pension money often sits outside a will, and many schemes decide who receives it after a death using a nomination or expression of wish form. A form filled in years ago may still name a parent or an ex-partner. Checking and updating every nomination for both of you is one of the quickest ways to make sure the survivor is actually covered.

                ## Milestones
                1. The current nomination for every pension in the inventory confirmed with the provider.
                2. Any out-of-date nomination replaced with a new form.
                3. A copy or confirmation of each nomination kept in the joint folder.
                4. Each partner aware of who is nominated on the other's schemes.

                ## Notes
                Schemes treat nominations differently: some are binding, most guide the trustees. If you have children from an earlier relationship, see the blended family project before deciding.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pension held by either partner has a current nomination on file, with confirmation saved in the joint folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each provider who is currently nominated on your pension"
                - "Complete a new nomination form for any that are out of date"
                - "Save each provider's confirmation in the joint folder"
                - "Check every nomination still names the right people @recurring(yearly)"
            - name: Survivor income check for each partner
              description: |-
                ## Purpose
                If either partner died, the household income would not simply halve: some pensions stop, some pay a reduced survivor amount, and one state pension usually ends. Working out what each of you would actually receive alone, against what you would still need to spend, shows whether either partner would be left short and by how much.

                ## Milestones
                1. The survivor benefit from each pension found in scheme documents or confirmed by the provider.
                2. Each partner's income if widowed totalled, before and after retirement.
                3. Likely spending for one person in the same home estimated.
                4. Any shortfall for either partner written down as an annual amount.

                ## Notes
                Ask schemes directly whether a survivor pension depends on being married or in a civil partnership. Many defined benefit schemes treat unmarried partners differently.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written figure for each partner's income if the other died, before and after retirement, with any annual shortfall stated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each scheme what it pays to a surviving partner"
                - "Total each partner's income if left alone, now and in retirement"
                - "Estimate the household spending for one person in the same home"
                - "Write the shortfall for each partner on one page"
            - name: One-page shared retirement vision
              description: |-
                ## Purpose
                A single page that both of you have written and signed off, covering when, where, how you will spend the week and roughly what it costs, is the reference every later decision can be checked against. It settles small arguments early, because the question becomes whether a choice fits the page rather than whose idea it was.

                ## Milestones
                1. Points of agreement from the first conversation turned into short statements.
                2. Target ages, location, weekly rhythm and a rough annual budget included.
                3. Open disagreements listed honestly at the bottom of the page.
                4. Both partners happy with the wording and a copy in the joint folder.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page vision with ages, place, weekly rhythm, a budget figure and a list of open questions is agreed by both partners and filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page vision from both wish lists and the conversation notes"
                - "Edit the draft together until each sentence is true for both of you"
                - "List the questions you still disagree on at the bottom"
                - "File the agreed page in the joint retirement folder"
            - name: Joint retirement document folder
              description: |-
                ## Purpose
                When one partner handles the pensions, the other often does not know where the statements live, which email address the accounts use or how to log in. A shared folder, physical or digital, with statements, nominations, scheme booklets and an access sheet, means either of you can act alone in an emergency.

                ## Milestones
                1. One folder holding statements, nominations and scheme booklets for both partners.
                2. An access sheet listing each provider's website, phone number and the email the account uses.
                3. Logins shared through a password manager's emergency access feature, never on paper.
                4. Both partners have opened the folder and found a named document unaided.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A joint folder holds every pension document for both partners plus an access sheet, and each partner has found a document in it unaided."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one shared location for both partners' pension papers"
                - "Write an access sheet with each provider's phone, website and account email"
                - "Set up emergency access to each other's password manager"
                - "Ask your partner to find a named statement without help"
                - "Clear out superseded statements and check the access sheet @recurring(yearly)"
            - name: Monthly money meeting with a retirement slot
              description: |-
                ## Purpose
                Retirement plans drift when they are only discussed once a year or in a crisis. A short monthly money meeting, with a fixed ten-minute slot for retirement, keeps both partners current on contributions, decisions waiting and anything that has changed at work, without turning every evening into a finance seminar.

                ## Milestones
                1. A recurring date and a 45-minute limit agreed.
                2. A standing agenda with a retirement slot near the start.
                3. Notes from each meeting kept in one running document.
                4. Six consecutive monthly meetings held with both partners present.

                ## Notes
                Start from the **Meeting notes** template. Keep it short and hold it somewhere pleasant; couples who dread the meeting stop having it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly money meetings held with both partners, each with a note of retirement items covered."
                cadence: rolling
              tasks:
                - "Agree the date, place and time limit for the monthly meeting"
                - "Write a standing agenda with retirement as the second item"
                - "Hold the monthly money meeting and note any retirement actions @recurring(monthly:12)"
            - name: Quarterly joint retirement dashboard update
              description: |-
                ## Purpose
                Pension values arrive at different times from different providers, so a couple rarely sees the whole picture at once. A one-page dashboard updated each quarter, showing every pot by owner, the combined total and the gap between partners, turns scattered statements into a trend you can both read in two minutes.

                ## Milestones
                1. A dashboard with one row per pension, grouped by partner.
                2. Each partner's subtotal, the combined total and the gap shown.
                3. Four quarterly updates logged in a year.
                4. The latest dashboard shown at the next monthly meeting.

                ## Notes
                Start from the **Metrics log** template. Record values on roughly the same date each quarter so the numbers are comparable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly dashboard updates in twelve months, each showing both partners' subtotals and the gap between them."
                cadence: rolling
              tasks:
                - "Set up the dashboard with one row per pension grouped by partner"
                - "Add subtotal, combined total and gap columns"
                - "Log in to each provider and update every value on the dashboard @recurring(quarterly)"
            - name: Annual couple's retirement review
              description: |-
                ## Purpose
                Once a year the whole plan deserves an hour of joint attention: whether the target ages still hold, whether the gap between pots is closing, whether the survivor figures still work and whether either of you has changed your mind. Holding the review on a fixed date, prepared from the dashboard, keeps it from being skipped when life is busy.

                ## Milestones
                1. A fixed review month chosen and booked each year.
                2. The latest dashboard, survivor figures and vision page gathered beforehand.
                3. Changes to ages, targets or contributions agreed and written down.
                4. Each agreed change assigned to a partner with a date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review held for two consecutive years, each producing a written list of changes with an owner for each."
                cadence: cyclic
              tasks:
                - "Book the annual couple's retirement review in both calendars @recurring(yearly)"
                - "Bring the dashboard, survivor figures and vision page to the review"
                - "Write each agreed change with an owner and a date"
                - "Update the vision page if anything on it changed"
            - name: Monthly top-up to the smaller pension
              description: |-
                ## Purpose
                Small, regular payments into the partner with the smaller pension close a gap far more reliably than an occasional lump sum. Setting the top-up as a standing transfer, from joint money or from the higher earner, and checking it monthly turns an agreed intention into money actually landing in the right pot.

                ## Milestones
                1. The monthly top-up amount agreed and the source account chosen.
                2. A standing payment or salary contribution set up.
                3. The payment confirmed as received by the pension provider.
                4. Twelve months of top-ups recorded on the dashboard.

                ## Notes
                How contributions are treated for tax depends on whose pension it is and how the money is paid in. Check with the provider or a tax adviser before choosing the route.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing monthly top-up into the smaller pension has run for twelve months with every payment confirmed by the provider."
                cadence: rolling
              tasks:
                - "Agree the monthly top-up amount and which account pays it"
                - "Set up the standing payment or contribution with the provider"
                - "Check the smaller pension received this month's top-up @recurring(monthly:26)"
            - name: Pay rise and bonus split rule for retirement
              description: |-
                ## Purpose
                Pay rises disappear into everyday spending within a few months unless a share is diverted on the first payslip. A simple rule agreed in advance, such as a third of every rise or bonus to pensions with the lower-pension partner first in line, saves a negotiation each time and narrows the gap without anyone feeling poorer.

                ## Milestones
                1. A written rule for what share of any rise or bonus goes to pensions.
                2. The order of priority between the two pensions agreed.
                3. The rule applied to the next rise or bonus either partner receives.
                4. The rule reviewed once a year and changed only by agreement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written split rule exists and has been applied to at least one pay rise or bonus, with the extra contribution confirmed."
                cadence: rolling
              tasks:
                - "Agree the share of any pay rise or bonus that goes to pensions"
                - "Decide which partner's pension receives it first"
                - "Apply the rule on the first payslip after the next rise"
                - "Reread the split rule and agree whether to keep it @recurring(yearly)"
            - name: Rotating who runs the retirement admin
              description: |-
                ## Purpose
                In many households one partner runs every pension login, statement and form, and the other would be lost after a death, illness or separation. Rotating the admin, so each partner prepares the quarterly update in turn and logs in to every account at least once a year, keeps both of you capable without anyone pretending to enjoy it.

                ## Milestones
                1. A rota agreed for who prepares each quarterly update.
                2. The less involved partner has prepared at least two updates.
                3. Each partner has logged in to every pension account in the last twelve months.
                4. Any login or access problem found during the rotation fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within twelve months each partner has prepared at least two quarterly updates and logged in to every pension account."
                cadence: rolling
              tasks:
                - "Write a rota for who prepares each quarterly update"
                - "Sit beside your partner while they prepare their first update"
                - "Have each partner log in to every pension account they own @recurring(yearly)"
                - "Fix any login or identity check that failed during the rotation"
            - name: Life event triggers for revisiting the plan
              description: |-
                ## Purpose
                Plans go stale between annual reviews because the events that change them, such as a new job, a redundancy, a baby, an inheritance or a health scare, arrive unannounced. A short written list of trigger events, each with the one thing to check, means either partner knows when to call an extra conversation rather than waiting for the yearly review.

                ## Milestones
                1. A list of eight to twelve trigger events agreed.
                2. For each event, the specific part of the plan to recheck written beside it.
                3. The list kept at the front of the joint folder.
                4. At least one trigger acted on within a month of it happening.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written trigger list with an action for each event is in the joint folder, and any trigger that occurred has been acted on within a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the life events that would change your retirement plan"
                - "Write beside each event the part of the plan to recheck"
                - "Put the list at the front of the joint folder"
                - "Reread the trigger list together and add anything new @recurring(yearly)"
            - name: Annual joint spending snapshot
              description: |-
                ## Purpose
                Knowing what you spend now, split into joint costs and each partner's personal spending, is the only honest starting point for a retirement budget for two. Taking a snapshot once a year shows which costs would fall away, which would rise with more free time and how much personal money each of you is used to.

                ## Milestones
                1. Three months of household spending sorted into joint and personal categories.
                2. Costs expected to stop at retirement marked, such as commuting.
                3. Costs likely to rise marked, such as travel, heating or hobbies.
                4. An adjusted annual figure for retirement spending as a couple written down.

                ## Notes
                Start from the **Monthly budget and bills** template. Personal spending is not a moral question; the aim is a realistic number, not a lecture.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A spending snapshot split into joint and personal categories, with an adjusted retirement figure, is completed each year."
                cadence: cyclic
              tasks:
                - "Export three months of transactions from every account you both use"
                - "Sort spending into joint costs and each partner's personal costs"
                - "Mark the costs that would stop or grow in retirement"
                - "Refresh the joint spending snapshot from the latest three months @recurring(yearly)"
            - name: How each partner's pension type works
              description: |-
                ## Purpose
                Defined benefit and defined contribution pensions behave so differently that a couple holding one of each can misread their position entirely. Each partner learning the basics of their own and the other's scheme type, what is guaranteed, what depends on markets and what happens at death, removes most of the confusion in later conversations.

                ## Milestones
                1. Every pension in the inventory labelled as defined benefit or defined contribution.
                2. Each partner able to explain in two sentences how their own pensions pay out.
                3. Each partner able to explain how the other's main pension pays out.
                4. A one-page summary of the differences filed in the joint folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both partners can explain, without notes, how each other's main pension pays out, and a one-page summary is filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Label each pension in the inventory by type"
                - "Read the scheme booklet for the largest pension each of you holds"
                - "Explain your main pension to your partner in two sentences"
                - "Write a one-page summary of how your schemes differ"
            - name: Survivor and partner benefits in each scheme
              description: |-
                ## Purpose
                Scheme rules decide who counts as a partner, how much a survivor receives, whether it is paid for life and whether it stops on remarriage. Reading those rules for each pension, and asking where the booklet is unclear, tells you which of your pensions genuinely protect the other partner and which do not.

                ## Milestones
                1. The survivor section of each scheme's rules or booklet read.
                2. Eligibility conditions noted, such as marriage, length of relationship or dependency.
                3. The survivor amount and its duration recorded for each scheme.
                4. Unclear points confirmed in writing by the scheme administrator.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table records, for every pension, who qualifies as a survivor, the amount paid and for how long, confirmed by each scheme."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the survivor or dependant section in each scheme booklet"
                - "Note who qualifies, how much is paid and for how long"
                - "Email the administrator about any condition you are unsure of"
                - "Add the confirmed answers to the survivor income check"
            - name: Life expectancy planning for the longer-lived partner
              description: |-
                ## Purpose
                On average one partner in a couple outlives the other by several years, and the chance that at least one of you reaches a great age is much higher than for either alone. Planning to the second death, not the first, changes how long the money has to last and how much the survivor's income matters.

                ## Milestones
                1. Each partner's life expectancy looked up from an official statistics tool.
                2. The joint figure for the chance that at least one of you reaches 90 or 95 found.
                3. A planning age agreed for the longer-lived partner.
                4. The agreed planning age used in your projections and survivor figures.

                ## Notes
                These are averages, not predictions. Family history and health can move them, so many couples choose a planning age a few years beyond the average.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A planning age for the longer-lived partner is agreed, written down with its source, and used in the household projections."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up each partner's life expectancy in an official calculator"
                - "Find the chance that at least one of you reaches 90"
                - "Agree a planning age for the longer-lived partner"
                - "Change your projections to run to the agreed planning age"
            - name: Both partners able to run the retirement projection
              description: |-
                ## Purpose
                Whoever built the spreadsheet or set up the planning tool usually ends up as the only person who trusts its numbers. Teaching the other partner to update the inputs and read the result, then having them run it unaided, means the plan belongs to both of you and survives if the builder is ill or gone.

                ## Milestones
                1. The projection tool and its inputs written up in a short guide.
                2. A walkthrough session held with the less involved partner driving.
                3. The less involved partner has changed an input and read the result alone.
                4. The guide stored with the tool in the joint folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The partner who did not build the projection has updated and rerun it unaided, using a written guide kept in the joint folder."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a short guide to the projection inputs and outputs"
                - "Hold a session where the other partner drives the tool"
                - "Ask them to change one input and explain the new result"
                - "Have the less involved partner rerun the projection alone @recurring(yearly)"
            - name: Two sets of tax allowances in retirement
              description: |-
                ## Purpose
                Each partner usually has their own personal allowance and tax bands, and a couple whose retirement income all lands with one partner can pay noticeably more tax than one whose income is spread. Understanding how your tax system treats each partner's pension and savings income shows why the size of each pot matters, not only the total.

                ## Milestones
                1. The basics of how your tax system treats pension income for individuals noted.
                2. Each partner's likely taxable retirement income estimated.
                3. The effect of shifting income between partners understood in principle.
                4. Questions for a tax adviser or the tax authority listed.

                ## Notes
                This is about understanding the rules, not choosing a scheme. Confirm anything you plan to act on with a qualified tax adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both partners' estimated taxable retirement incomes are written down, with a list of questions about spreading income checked with a tax professional."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guide to how pension income is taxed"
                - "Estimate each partner's taxable income in the first year of retirement"
                - "Write down what changes if income were spread more evenly"
                - "List three questions to take to a tax adviser"
            - name: Disagreeing well about retirement money
              description: |-
                ## Purpose
                Money arguments between partners are rarely about arithmetic: one saves for safety, the other spends for a life worth living now, and both are partly right. Learning a simple format for money disagreements, such as each partner stating their worry before their position, keeps retirement decisions from stalling for years.

                ## Milestones
                1. Each partner's money background and default style described in a paragraph.
                2. A short format agreed for discussing a money disagreement.
                3. The format used on one real retirement disagreement.
                4. That disagreement resolved or parked with a date to return to it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written disagreement format has been used on at least one real retirement question, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a paragraph on how money was handled in the home you grew up in"
                - "Read your partner's paragraph and ask one question about it"
                - "Agree a three-step format for money disagreements"
                - "Use the format on the biggest open question from your vision page"
            - name: Time together and apart in retirement
              description: |-
                ## Purpose
                Retirement also changes how many hours a couple spends together, often from a few evening hours to all day, and couples who never discussed it can find the first year harder than expected. Agreeing what each of you will do with your time, alone and together, shapes the budget as much as the relationship.

                ## Milestones
                1. Each partner's planned activities, solo and shared, listed.
                2. A rough weekly pattern sketched for the first retirement year.
                3. The cost of each partner's main activities estimated.
                4. Those costs added to the retirement spending figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sketched weekly pattern for the first retirement year, with costed activities for each partner, is added to the spending figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you each want to do alone and together once retired"
                - "Sketch a typical week for the first year of retirement"
                - "Price each partner's main hobby or commitment"
                - "Add the activity costs to the annual spending figure"
            - name: Reconciling two different risk tolerances
              description: |-
                ## Purpose
                Risk appetite often differs sharply between partners, and a joint plan built to the bolder partner's taste can trigger panic selling by the other in the first bad year. Measuring each partner's tolerance separately and agreeing how to handle the difference, by pot or by a shared middle setting, gives a plan you will both hold through a fall.

                ## Milestones
                1. Each partner has completed the same risk questionnaire separately.
                2. The two results compared and the reasons for the difference discussed.
                3. A written approach agreed for pots owned by each partner and for joint money.
                4. Any change to fund choices made only after both partners agree.

                ## Notes
                Questionnaires from pension providers are a reasonable starting point. If the gap is large, an adviser can help, but the decision is yours as a couple.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both partners' risk questionnaire results are recorded, with a written agreement on how risk is set for each pot."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Complete the same risk questionnaire separately"
                - "Compare the two results and say why yours came out as it did"
                - "Agree in writing how risk is set for each partner's pots"
                - "Record the agreement on the vision page"
            - name: Equalisation target for the two pension pots
              description: |-
                ## Purpose
                Equal pots, equal incomes, or simply a minimum for the smaller pot are three quite different targets, and couples who never choose one tend to drift with whatever the employer schemes do. Picking a target, and the date you want to reach it, gives the monthly top-up and the pay rise rule something to aim at.

                ## Milestones
                1. The three main options written out with their pros and cons for your household.
                2. One target chosen, with a figure and a date.
                3. The extra annual contribution needed to reach it estimated.
                4. The target added to the dashboard so progress shows each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written equalisation target with a figure, a date and an annual contribution estimate is shown on the dashboard."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write out equal pots, equal income and a minimum floor as options"
                - "Choose one target and set a figure and date"
                - "Work out the extra yearly saving the target needs"
                - "Add a target line to the quarterly dashboard"
            - name: Pension contributions for a non-earning partner
              description: |-
                ## Purpose
                A partner who is caring, studying or between jobs may have no earnings at all, yet many tax systems still let a modest amount be paid into their pension each year, sometimes with tax relief added. Making that contribution every year stops the gap widening during the years it is most likely to grow.

                ## Milestones
                1. The rules in your country for paying into a non-earner's pension confirmed.
                2. A suitable pension for the non-earning partner identified or opened.
                3. The yearly contribution paid in and confirmed.
                4. The contribution added to the dashboard.

                ## Notes
                Limits and relief rules vary by country and change over time. Check the tax authority's current guidance or ask a provider before paying in.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A contribution has been paid into the non-earning partner's pension for the current tax year and confirmed by the provider."
                cadence: cyclic
              tasks:
                - "Look up the current rules for paying into a non-earner's pension"
                - "Choose the pension the contribution will go into"
                - "Pay the yearly contribution for the non-earning partner @recurring(yearly)"
                - "Save the provider's confirmation in the joint folder"
            - name: Retiring together or one at a time
              description: |-
                ## Purpose
                Retiring on the same day sounds romantic, but with an age gap, different pension dates or very different jobs it can cost the household years of contributions or leave one partner at home alone. Comparing two or three concrete scenarios side by side, with income, tax and lifestyle for each, turns a vague preference into a decision.

                ## Milestones
                1. Two or three dated scenarios written out for when each partner stops.
                2. Household income and the gap between pots estimated for each scenario.
                3. The non-money effects of each scenario listed by both partners.
                4. One scenario chosen and recorded on the vision page.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two retirement-date scenarios exists, with the chosen scenario recorded on the vision page."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out two or three scenarios with a stopping date for each partner"
                - "Run each scenario through your retirement projection"
                - "List the lifestyle pros and cons of each scenario together"
                - "Record the scenario you chose and the reason"
            - name: Choosing the survivor option on a defined benefit pension
              description: |-
                ## Purpose
                Defined benefit pensions often offer a choice at retirement between a higher income that stops at death and a lower one that continues, in part, to a surviving partner. The choice is usually permanent, and in some countries the partner must formally consent to giving up survivor cover. Making it together, with numbers, protects the partner who would be left.

                ## Milestones
                1. The survivor options and their income figures obtained from the scheme.
                2. The survivor income check rerun for each option.
                3. Any partner consent requirement confirmed with the scheme.
                4. The chosen option recorded with the reasons, signed off by both partners.

                ## Notes
                This choice is hard or impossible to reverse. Take regulated advice if the sums are large, and do not sign any waiver of survivor benefits without understanding it.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The survivor option on each defined benefit pension is chosen jointly, with the figures compared and the decision recorded before the claim is made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the scheme for a quote showing each survivor option"
                - "Rerun the survivor income check for each option"
                - "Confirm whether your partner must consent to the choice"
                - "Write down the option chosen and why"
            - name: Joint and personal money in retirement
              description: |-
                ## Purpose
                Two salaries usually come with an unspoken arrangement about who pays for what, and retirement breaks it: incomes change, one partner may stop first, and the pension income may land mostly in one name. Agreeing in advance how joint bills and personal spending will work stops the partner with the smaller pension from feeling they have to ask.

                ## Milestones
                1. The current arrangement for joint and personal money written down.
                2. Where each pension and state income will be paid in retirement noted.
                3. A new arrangement agreed, including personal spending money for each partner.
                4. Any accounts or standing payments needed for it listed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written retirement money arrangement covers joint bills, each partner's personal spending and which income lands where."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Describe how joint and personal money works for you today"
                - "Note which account each future pension will pay into"
                - "Agree a personal spending amount for each partner in retirement"
                - "List the accounts and standing orders the new arrangement needs"
            - name: Where you will live in retirement, agreed
              description: |-
                ## Purpose
                Where you live decides the biggest costs in retirement: housing, travel, care and how near you are to children or ageing parents. Couples often hold different pictures, one by the sea and one near the grandchildren. Testing two or three real options with costs and a trial visit settles the question before a house sale is on the line.

                ## Milestones
                1. Each partner's preferred location and reasons written down.
                2. Two or three shortlisted options costed for housing and running costs.
                3. At least one option visited together for several days out of season.
                4. A decision or a dated plan to decide recorded on the vision page.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or more location options have been costed and at least one visited together, with a decision or decision date recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down where each of you would like to live and why"
                - "Cost housing and running expenses for two or three options"
                - "Spend several days together in one option out of season"
                - "Record the decision or the date you will decide by"
            - name: Life cover to bridge the survivor gap
              description: |-
                ## Purpose
                Before both pensions are large enough to support either partner alone, a death can leave the survivor with a mortgage, children and a shrunken retirement. Sizing term life cover to the survivor shortfall you calculated, and only until the date it closes, protects the plan at a cost far below a policy bought on guesswork.

                ## Milestones
                1. The survivor shortfall for each partner taken from the survivor income check.
                2. Existing cover, including death in service benefits from work, listed.
                3. Quotes compared for term cover sized to the remaining gap.
                4. Cover in place or a recorded decision that none is needed.

                ## Notes
                Start from the **Purchase decision** template. Write policies in trust where your country allows it, so the money reaches the survivor quickly; ask the insurer how.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Life cover sized to each partner's survivor shortfall is in place, or a written decision explains why none is needed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List all existing life cover, including death in service from work"
                - "Subtract it from each partner's survivor shortfall"
                - "Get three quotes for term cover sized to what remains"
                - "Check the cover still matches the shortfall at the annual review @recurring(yearly)"
            - name: Sole-name accounts that would freeze on a death
              description: |-
                ## Purpose
                Banks and providers usually freeze accounts held in one name when the owner dies, sometimes for months, while a survivor still has bills to pay. Listing which accounts are sole and which joint, and making sure the survivor has access to enough money for six months, avoids a cash crisis at the worst possible time.

                ## Milestones
                1. Every bank, savings and investment account listed as sole or joint.
                2. Regular household bills matched to the account that pays them.
                3. Each partner holds or can reach at least six months of costs on their own.
                4. Any change to account ownership discussed with the bank first.

                ## Notes
                Changing ownership of investments can have tax effects. Ask the provider or a tax adviser before moving anything between names.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of sole and joint accounts shows that either partner could cover six months of household costs if the other died."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account and mark it sole or joint"
                - "Match each regular household bill to the account that pays it"
                - "Work out what each partner could reach alone for six months"
                - "Ask the bank about options for any gap you find"
            - name: Five years out from the first retirement
              description: |-
                ## Purpose
                Five years before the first partner plans to stop is the last comfortable point to change course: to raise contributions, adjust investment risk, clear a mortgage or rethink dates. A dedicated checkpoint at that moment, separate from the annual review, gives both of you a clear list of what must be true by the date.

                ## Milestones
                1. The checkpoint held within a few months of the five-year mark.
                2. Projected income for both partners rechecked against the spending figure.
                3. Outstanding debts and their payoff dates listed.
                4. A five-year action list agreed with an owner for each item.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-year checkpoint held, producing a written action list with owners and an updated projection for both partners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a half-day checkpoint five years before the first retirement"
                - "Update the projection for both partners before the day"
                - "List every debt still running at the planned date"
                - "Agree the five-year action list with an owner for each item"
            - name: Joint meeting with a financial adviser
              description: |-
                ## Purpose
                Advisers often end up talking mainly to the partner who booked the meeting, and the other leaves with questions they did not get to ask. Preparing together, with both inventories, the vision page and each partner's own questions, and agreeing that both must understand any recommendation, makes a paid meeting serve the couple.

                ## Milestones
                1. The inventory, dashboard, vision page and survivor figures sent in advance.
                2. Each partner's own questions written down and brought.
                3. Both partners able to explain each recommendation afterwards.
                4. Notes of the meeting filed, with any action given an owner.

                ## Notes
                Choosing the adviser is covered by the Choosing a Financial Adviser area. This project is about getting the most from the meeting as a couple.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An adviser meeting attended by both partners, with questions from each answered and written notes of every recommendation filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the adviser the inventory, vision page and survivor figures"
                - "Write three questions each that you want answered"
                - "Ask the adviser to explain each recommendation to both of you"
                - "File the meeting notes and give each action an owner"
            - name: Pension claim calendar for both partners
              description: |-
                ## Purpose
                Every pension has its own claim process, notice period and forms, and with two partners and several schemes it is easy to miss a window or start income in the wrong order. A single calendar showing when each claim can be made, how far ahead to apply and what each will pay keeps both retirements on track.

                ## Milestones
                1. Each scheme's claim process and notice period recorded.
                2. A calendar showing the earliest and planned claim date for each pension.
                3. Reminders set for when each application must be started.
                4. The calendar agreed against the retiring together or apart decision.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A claim calendar lists every pension for both partners with notice periods and planned dates, matching the chosen retirement scenario."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each scheme how far ahead a claim must be started"
                - "Put every pension's earliest and planned claim date on one calendar"
                - "Set a reminder for the start of each application"
                - "Check the claim calendar against your chosen scenario @recurring(yearly)"
            - name: First partner's last working day
              description: |-
                ## Purpose
                The last working day of the first partner to retire changes the household overnight: one salary stops, a pension or savings draw starts, and the other partner is still working. Planning the final three months, with notice, last payslip checks, pension claims and an agreed new household rhythm, avoids a gap in income and a tense first month.

                ## Milestones
                1. Notice given in line with the employment contract.
                2. The final payslip checked for holiday pay and pension contributions.
                3. The first pension or savings payment confirmed before the salary stops.
                4. A new split of household jobs agreed with the partner still working.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first partner retires with no month without income, a checked final payslip and a written new split of household tasks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the notice period in the employment contract"
                - "Confirm the first pension payment date with the scheme"
                - "Check the final payslip for holiday pay and pension contributions"
                - "Agree a new split of household jobs with your working partner"
            - name: Second partner's retirement and the household reset
              description: |-
                ## Purpose
                When the second partner stops work, the plan moves from saving to living on what you built, with two full days at home and the full mix of incomes running. A short reset, checking every income against the claim calendar and the budget against reality after three months, catches mistakes while they are still small.

                ## Milestones
                1. Every expected income for both partners confirmed as arriving.
                2. Actual spending in the first three months compared with the budget.
                3. The money arrangement for joint and personal spending working in practice.
                4. A first retired annual review date set.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three months after the second retirement, every income has arrived as planned and spending has been compared with the budget in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tick off each expected income on the claim calendar as it arrives"
                - "Compare three months of spending with the retirement budget"
                - "Adjust personal spending amounts if the arrangement is not working"
                - "Book the first annual review as a retired couple"
            - name: Marriage or civil partnership pension update
              description: |-
                ## Purpose
                Marriage or civil partnership can change what a partner receives from a pension scheme, can cancel an existing will in some countries and often brings eligibility for spouse benefits that cohabiting partners lack. Working through every pension and nomination in the months after the ceremony makes sure the new legal status actually reaches your paperwork.

                ## Milestones
                1. Every scheme told of the change of status and any name change.
                2. Nominations updated to reflect the marriage or partnership.
                3. Survivor benefit eligibility rechecked for each scheme.
                4. Your will reviewed with a solicitor if the law where you live requires it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within three months of the ceremony every scheme has the new status, nominations are updated and survivor eligibility is rechecked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send each pension provider a copy of the marriage or partnership certificate"
                - "Update the nomination on every pension"
                - "Ask each scheme whether survivor benefits change now"
                - "Ask a solicitor whether the marriage affects an existing will"
            - name: Unmarried couples and pension survivor rights
              description: |-
                ## Purpose
                Unmarried partners can be left with nothing from a pension, a state benefit or an estate that would have gone automatically to a spouse, even after decades together. Finding exactly where you are unprotected, scheme by scheme, and putting nominations, wills and evidence of the relationship in place, closes most of the gap without requiring a wedding.

                ## Milestones
                1. Each scheme's position on unmarried partners confirmed in writing.
                2. State benefits that require marriage or civil partnership identified.
                3. Nominations and wills in place naming each other where wanted.
                4. Evidence of the shared household, such as joint bills, filed.

                ## Notes
                Some schemes ask for proof of financial interdependence before paying an unmarried partner. Keep joint bills, a joint tenancy or mortgage and shared account statements together.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list shows each scheme's treatment of unmarried partners, with nominations, wills and evidence of the shared household in place."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each scheme in writing what it pays an unmarried partner"
                - "List the state benefits that only spouses or civil partners receive"
                - "Book a solicitor to write or update wills for both of you"
                - "File proof of the shared household in the joint folder"
            - name: Protecting the pension of a partner on a career break
              description: |-
                ## Purpose
                Parental leave, caring for a relative or a stretch of part-time work hits one partner's pension for years after the break ends, through lost contributions, lost employer match and slower pay growth. Agreeing before the break how the household will protect that pension keeps the cost shared rather than carried by one person.

                ## Milestones
                1. The likely cost of the break to the pension estimated from a provider projection.
                2. State pension credits for parents or carers checked and claimed where available.
                3. An agreed contribution from the household during the break.
                4. The arrangement reviewed at the return to work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Before the break starts, its pension cost is estimated, any credits are claimed and a written household contribution plan is in place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the provider to project the pension with and without the break"
                - "Check whether you qualify for parent or carer state pension credits"
                - "Agree what the household pays into the pension during the break"
                - "Review the arrangement on the first day back at work"
            - name: Large age gap between partners
              description: |-
                ## Purpose
                A gap of ten years or more between partners means one may retire while the other is mid-career, state pensions start years apart and the younger partner is likely to spend a long time as the survivor. Planning for those three facts directly, rather than averaging your ages, changes contribution priorities and how survivor income is protected.

                ## Milestones
                1. The years when only one partner is retired mapped on a timeline.
                2. Household income in those years estimated.
                3. The likely length of the younger partner's survivor period estimated.
                4. Contribution and survivor priorities adjusted and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A timeline shows the one-retired years and the likely survivor period, with household income for each and adjusted priorities written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark the years when only one of you will be retired"
                - "Estimate household income for each of those years"
                - "Estimate how long the younger partner may live as a survivor"
                - "Write down how this changes your contribution priorities"
            - name: Second marriages and blended family pensions
              description: |-
                ## Purpose
                Second marriages and blended families bring competing claims on the same pension: a current partner who needs income, and children from an earlier relationship who may expect an inheritance. Without a deliberate plan, scheme defaults and nominations can leave one side with everything. Talking it through and recording the agreed split protects relationships as well as money.

                ## Milestones
                1. Each partner's wishes for the current partner and for each child written down.
                2. Nominations and any survivor options checked against those wishes.
                3. A solicitor consulted on wills and any trust arrangements.
                4. The plan explained to adult children where both partners agree.

                ## Notes
                Rules on what a surviving spouse is entitled to differ widely between countries. Take legal advice before relying on a nomination to provide for children.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both partners' wishes for each other and each child are written down, and nominations and wills have been aligned with them by a solicitor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down what you want for your partner and for each child"
                - "Compare those wishes with your current nominations"
                - "Book a solicitor to align wills and nominations with the wishes"
                - "Decide together whether to explain the plan to adult children"
            - name: Pension disclosure if the relationship ends
              description: |-
                ## Purpose
                Pensions are often the largest asset a couple owns after the home, and in a separation they are easy to undervalue or overlook entirely. Knowing what information you would need, such as transfer values and scheme details for both partners, and keeping it current means either of you could get fair advice quickly if the relationship ended.

                ## Milestones
                1. The documents a separation would need for each pension listed.
                2. Current values and scheme contacts for both partners kept in the inventory.
                3. The basic ways pensions can be divided in your country noted from official guidance.
                4. A family lawyer or mediator type identified, without needing to act.

                ## Notes
                This is preparation, not a prediction. Pension division rules depend heavily on the country and on marriage or civil partnership status; any decision needs a family lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of the documents and values a separation would need is kept current for both partners, alongside a note of how division works locally."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the pension documents a separation would need for both partners"
                - "Read the official guidance on dividing pensions where you live"
                - "Note what type of professional handles pension division locally"
                - "Keep the list in the inventory beside current values"
            - name: One partner self-employed, one employed
              description: |-
                ## Purpose
                Self-employed income arrives unevenly and comes with no employer contribution, so the self-employed partner's pension tends to fall behind while the employed partner's grows on autopilot. Agreeing how the household evens this out, such as a fixed share of each tax-quarter's profit paid in, keeps both retirements moving at a similar pace.

                ## Milestones
                1. Both partners' annual pension contributions compared, including employer money.
                2. A rule agreed for the self-employed partner's contributions from profit.
                3. Household support agreed for lean quarters.
                4. Four quarters of contributions logged against the rule.

                ## Notes
                The wider set-up of a self-employed pension sits in the Self-Employed Retirement Saving area. This project is about keeping the two partners in step.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarters of self-employed contributions follow the agreed rule, with both partners' annual totals compared."
                cadence: rolling
              tasks:
                - "Compare both partners' yearly contributions including employer money"
                - "Agree the share of quarterly profit that goes to the self-employed pension"
                - "Pay the self-employed pension contribution from last quarter's profit @recurring(quarterly)"
                - "Agree how the household covers a lean quarter"
            - name: Ill-health retirement options for either partner
              description: |-
                ## Purpose
                Serious illness can force either partner to stop work years before the plan, and many workplace schemes have ill-health retirement terms that pay more than ordinary early retirement. Knowing those terms in advance, and what the healthy partner's plan would need to absorb, turns a frightening possibility into a known contingency.

                ## Milestones
                1. Each scheme's ill-health retirement and incapacity terms found.
                2. Any income protection or critical illness cover listed.
                3. Household income if either partner stopped early due to illness estimated.
                4. The contingency recorded in the joint folder.

                ## Notes
                Ill-health terms usually need medical evidence and the scheme's agreement. Ask the scheme and your clinician, not a forum.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note gives each partner's ill-health retirement terms, existing cover and estimated household income if either stopped early."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each workplace scheme for its ill-health retirement terms"
                - "List any income protection or critical illness cover you hold"
                - "Estimate household income if either partner stopped through illness"
                - "File the contingency note in the joint folder"
            - name: Ten-year joint retirement income map
              description: |-
                ## Purpose
                Once both retirement dates are set, the hard part is the sequence: which partner draws from which pension, when each state pension begins and how to keep both partners' taxable income sensible every year. A year-by-year map for the first ten years shows the household income, each partner's share and the sources, so neither partner is accidentally carrying the tax load.

                ## Milestones
                1. Every income source for both partners placed on a ten-year grid.
                2. Each partner's taxable income estimated for every year.
                3. Years with a large income imbalance or a gap flagged.
                4. The map reviewed with a regulated adviser or tax professional.

                ## Notes
                The detailed drawdown strategy for any one pot belongs in the Retirement Income Drawdown area. This map is about how two partners' incomes fit together.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year map shows each partner's income sources and taxable income year by year, reviewed by a professional."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Put every income source for both partners on a ten-year grid"
                - "Estimate each partner's taxable income for each year"
                - "Flag the years where one partner carries most of the income"
                - "Update the ten-year map with the latest figures @recurring(yearly)"
            - name: Long-term care stress test for one partner
              description: |-
                ## Purpose
                Care costs can arrive for one partner while the other still lives at home and needs a full income, which is the scenario most couples' plans ignore. Testing the plan against several years of care for either partner shows whether the healthy partner's standard of living holds, and which assets would be used first.

                ## Milestones
                1. Typical local care costs for home care and residential care found.
                2. The plan rerun with three and five years of care for each partner.
                3. The healthy partner's remaining income checked in each case.
                4. The order in which assets would be used agreed and written down.

                ## Notes
                Rules on how a couple's assets are assessed for care funding vary by country and region. Check official guidance and take advice before restructuring anything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The plan has been tested against three and five years of care for each partner, with the healthy partner's income and asset order written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Look up local costs for home care and residential care"
                - "Rerun the projection with three and five years of care for each partner"
                - "Check what income the partner at home would keep"
                - "Agree which assets would be used first and write it down"
            - name: Written couple's retirement agreement
              description: |-
                ## Purpose
                Couples who write down how they will run retirement money together, covering targets, risk, contributions, survivor cover and how disagreements are settled, rarely need to argue the same point twice. A short signed agreement, drawn from the projects in this area and reread each year, is the experienced end of joint planning.

                ## Milestones
                1. A two to three page agreement drawn from the vision, targets and decisions already made.
                2. Sections on contributions, risk, survivor cover, money in retirement and disagreements.
                3. Both partners signed and dated the agreement.
                4. The agreement reread and updated at the annual review.

                ## Notes
                This is a private household document, not a legal contract. Anything with legal effect, such as wills or a pre-nuptial agreement, needs a solicitor.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and dated couple's retirement agreement covering five named sections is filed and has been reread at an annual review."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft the agreement from your vision page and decisions"
                - "Edit each section until both partners agree with every line"
                - "Sign and date the agreement and file it in the joint folder"
                - "Reread the agreement together and amend it if needed @recurring(yearly)"
---

# Couple's Retirement Plan Alignment

This area is for any couple, married or not, who want to retire with a plan that covers both of them rather than two separate plans that happen to share a kitchen. It starts with the foundations (separate wish lists, a first proper conversation, a shared inventory of every pension, the gap between your pots and what the survivor would live on), then the routines that keep you both informed, the knowledge each partner needs, the joint decisions about contributions, dates, survivor options and where to live, the events around each retirement, the situations that change the picture, such as cohabiting, career breaks, age gaps and second marriages, and finally the specialist work of a joint income map and a care stress test.

What repeats is a monthly money meeting with a retirement slot, a monthly top-up to the smaller pension, a quarterly dashboard update, and a yearly round of nomination checks, statement reading and the annual couple's review. The Meeting notes, Metrics log, Monthly budget and bills and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
