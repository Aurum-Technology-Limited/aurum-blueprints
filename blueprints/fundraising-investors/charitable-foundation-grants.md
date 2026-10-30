---
id: fundraising-investors.charitable-foundation-grants
name: Charitable Foundation Grants
description: "Trust prospects that fit, applications written to each funder's guidelines with full-cost budgets, and the monitoring, reporting and funder contact that turn first grants into renewals."
category: business
version: 1.0.0
tags: [fundraising-investors, charitable-foundation-grants, nonprofit, manager, trusts, foundations, grant-writing, grant-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - vendor
    - purchase-decision
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Charitable Foundation Grants
          description: "Researching trusts and foundations, writing applications and reporting on funded work, for charities and community organisations."
          projects:
            - name: Grant readiness check for a charity or community group
              description: |-
                ## Purpose
                Most trusts screen out applications on eligibility before anyone reads about the project, and the usual reasons are dull: accounts overdue at the regulator, no safeguarding policy, a governing document nobody can find, or a bank account with a single signatory. A half-day check against the requirements that appear in almost every funder's guidance tells you what to fix before you spend weeks writing.

                ## Milestones
                1. Legal status, registration number and the current governing document confirmed and located.
                2. Filing status at the charity regulator or companies registry checked, with any overdue return listed.
                3. Policies funders commonly ask for (safeguarding, equality, data protection, complaints) marked as current, out of date or missing.
                4. A bank account in the organisation's name with at least two unrelated signatories confirmed.
                5. A fix list with an owner and date for every gap.

                ## Notes
                Many trusts will not fund an organisation whose last accounts are late at the regulator, even by a few weeks. Fix filing before anything else.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written readiness checklist shows legal status, filings, core policies and bank signatories, with every gap assigned an owner and a fix date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up your organisation's record on the charity regulator or companies register"
                - "List the policies three target funders ask applicants to hold"
                - "Confirm the bank account name and signatories with the treasurer"
                - "Write the fix list with an owner and target date for each gap"
            - name: Core documents pack for trust applications
              description: |-
                ## Purpose
                Applications ask for the same attachments again and again: governing document, latest signed accounts, annual report, trustee list, safeguarding policy and a recent bank statement. Keeping one named, dated folder of current versions turns a two-day scramble into a ten-minute upload, and stops an out-of-date policy reaching a funder.

                ## Milestones
                1. A shared folder holds the current governing document, signed accounts, annual report and trustee list.
                2. Each file is named with document type and date, and older versions sit in an archive subfolder.
                3. Every policy carries its board approval date and next review date.
                4. One person is named as owner of the pack and its yearly refresh.

                ## Notes
                Use the accounts exactly as filed with the regulator, signed by the trustees and the auditor or independent examiner. Draft accounts are rarely accepted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single shared folder contains current, dated versions of the ten documents trusts most often request, with a named owner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a shared folder for trust application core documents"
                - "Collect the signed accounts, annual report and governing document into it"
                - "Add the board approval date and review date to each policy file name"
                - "Refresh the core documents pack once the annual accounts are signed @recurring(yearly)"
            - name: Organisational case for support for trust funders
              description: |-
                ## Purpose
                Trust officers read hundreds of applications a year and remember the ones that state the problem, the response and the evidence in plain words. A two-page case for support written for grant-makers, rather than for individual donors, becomes the source for every application, covering letter and call with a programme officer.

                ## Milestones
                1. A two-page statement covering the need, who you serve, what you do, results so far and what more money would change.
                2. Every claim about need cites a source and date, such as local statistics or your own referral data.
                3. Two readers outside the fundraising team have read it and their questions are answered in the text.
                4. The chief executive or chair has approved it as the organisation's agreed account of itself.

                ## Notes
                Write for an intelligent reader who has never heard of you. Drop internal programme names and acronyms.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved two-page case for support, with a source and date for every need statistic, is saved in the core documents pack."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the five facts about your work a stranger most needs to know"
                - "Ask the agent to draft a two-page case from your annual report and impact data"
                - "Add a source and date to every statistic about local need"
                - "Update the case for support with the year's results @recurring(yearly)"
            - name: Long list of trusts and foundations that fund your cause
              description: |-
                ## Purpose
                Funder research is the biggest single influence on success in trust fundraising: an application to a trust that already funds your cause, your area and organisations of your size is far more likely to succeed than a cold one. Building a long list of 40 to 80 prospects from funder directories, open grants data, the charity regulator's register and the annual reports of similar charities gives you a pipeline worth working.

                ## Milestones
                1. A spreadsheet of at least 40 trusts with website, geography, causes funded and typical grant size.
                2. Funders thanked in the annual reports of five comparable organisations added to the list.
                3. Trusts that do not accept unsolicited applications marked separately rather than deleted.
                4. Each prospect tagged with its source so the research can be repeated next year.

                ## Notes
                Past grants are a better guide than mission statements. Many funders publish their grants as open data or list them in their own accounts.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of at least 40 trusts and foundations, each with geography, causes, typical grant size and research source recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download the annual reports of five charities doing similar work in your area"
                - "List every trust and foundation those reports thank"
                - "Search a funder directory or open grants database for your cause and region"
                - "Flag the trusts that say they do not accept unsolicited applications"
            - name: Funder fit scoring and shortlist
              description: |-
                ## Purpose
                A long list is not yet a plan. Scoring each trust on five or six criteria (geography, beneficiary group, grant size against your need, the size of organisation it backs, what it will pay for and whether you have any connection) shows which 15 to 20 deserve a full application this year and which belong on a watch list.

                ## Milestones
                1. Five or six scoring criteria agreed, each with a definition of a high and a low score.
                2. Every prospect on the long list scored on the same criteria.
                3. A shortlist of 15 to 20 priority trusts, each matched to the project you would put to them.
                4. Low scorers moved to a watch list with the reason recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every prospect is scored on the same criteria and a shortlist of 15 to 20 trusts is each matched to a named project."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree five scoring criteria with your manager or a trustee"
                - "Score each trust on the long list from one to three on every criterion"
                - "Match each shortlisted trust to the project it is most likely to fund"
                - "Move low-scoring trusts to a watch list with a one-line reason"
            - name: Annual trust and foundation income target
              description: |-
                ## Purpose
                Boards often set the trust income figure by adding ten percent to last year. A target built from the pipeline (grants already secured, plus the value of planned applications multiplied by a realistic success rate) shows whether the number is achievable and how many applications it needs. A common rule of thumb is a pipeline three to four times the target.

                ## Milestones
                1. Grants already confirmed for the coming financial year totalled by fund and restriction.
                2. Your success rate over the past two or three years calculated, or a cautious assumption agreed if there is no history.
                3. The number and value of applications needed to reach the target set out by quarter.
                4. The target and its assumptions agreed with the finance lead and recorded in the board papers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A trust income target with a written pipeline calculation, success rate assumption and quarterly application plan is approved by the board or senior team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the trust grants already confirmed for next financial year"
                - "Calculate your success rate from the last two years of applications"
                - "Work out how many applications the target needs at that success rate"
                - "Present the target and its assumptions to the finance lead"
            - name: Full cost recovery budget for funded projects
              description: |-
                ## Purpose
                Charities that price projects at direct cost alone end up subsidising every grant from reserves, because rent, finance, management and IT still have to be paid. Working out a fair share of core costs for each project, by a method you can explain, lets you ask for the true cost and answer a funder who asks how the figure was reached.

                ## Milestones
                1. Core costs for the year listed and totalled from the budget.
                2. An allocation method chosen, such as staff time or floor space, and written down in a paragraph.
                3. A core cost rate per project or per staff post calculated.
                4. A standard project budget layout that shows direct costs and the core cost share on separate lines.

                ## Notes
                Some trusts cap overheads at a percentage and a few will not fund them at all. Know your true figure first, then decide how to present it to each funder.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written full cost recovery method and a project budget layout with a calculated core cost share are approved by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the year's core cost lines from the budget with the finance lead"
                - "Choose an allocation basis and write one paragraph explaining it"
                - "Build a project budget layout that shows the core cost share separately"
                - "Recalculate the core cost rate when the new annual budget is approved @recurring(yearly)"
            - name: Outcomes framework and monitoring baseline
              description: |-
                ## Purpose
                Trusts increasingly fund outcomes rather than activities, and they ask how you will know a project worked. A simple framework linking what you do (outputs) to what changes for people (outcomes), with one or two indicators each and a baseline figure, lets you promise results you can actually measure and later report.

                ## Milestones
                1. Three to five outcomes written for your main programme, each describing a change for participants.
                2. One or two indicators for each outcome, with how and when the data will be collected.
                3. A baseline figure for every indicator, or a plan to collect one in the first three months.
                4. Frontline staff have agreed that the data collection is practical.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page outcomes framework with indicators, data sources and baseline figures is agreed with delivery staff."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List what changes for a participant after taking part in your main programme"
                - "Pick one or two measurable indicators for each outcome"
                - "Check with frontline staff what data they already collect"
                - "Record a baseline figure for each indicator"
            - name: Grants pipeline tracker
              description: |-
                ## Purpose
                Without one place showing every trust at every stage, deadlines slip, two colleagues approach the same funder and the board's income forecast is a guess. A tracker with stages from prospect to report submitted, and a value, owner and next action on every line, is the backbone of everything else in this area.

                ## Milestones
                1. A tracker with stages for prospect, researching, drafting, submitted, awarded, declined and reporting.
                2. Every shortlisted trust entered with amount, project, deadline and owner.
                3. A next action and date on every open line.
                4. The tracker shared with the finance lead so awarded grants feed the budget forecast.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live trust prospect, application and award sits in one shared tracker with stage, value, deadline, owner and next action."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the tracker columns in your fundraising database or a shared spreadsheet"
                - "Enter every shortlisted trust with deadline, amount and owner"
                - "Add a next action and date to every open line"
                - "Share the tracker with the finance lead and chief executive"
            - name: Application sign-off and authority rules
              description: |-
                ## Purpose
                Funders expect an application to be authorised by someone with the power to commit the organisation, and some want a trustee's signature on the declaration. Agreeing who approves what, by grant size and by whether a new post or service is being created, prevents last-minute delays and stops promises the organisation cannot keep.

                ## Milestones
                1. Approval levels written down by grant size and type of commitment.
                2. The person who signs declarations and the person who checks budgets named for each level.
                3. A turnaround time for sign-off agreed so deadlines are protected.
                4. The rules approved by the board or added to the delegated authority policy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sign-off procedure names who approves applications at each grant size, with a turnaround time, and is approved by the board."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your delegated authority policy covers grant applications"
                - "Draft approval levels by grant size with the chief executive"
                - "Agree a five working day turnaround for sign-offs"
                - "Take the sign-off rules to the next board meeting for approval"
            - name: Weekly funder research and deadline scan
              description: |-
                ## Purpose
                New rounds open, funders change priorities and deadlines move, often announced only on a trust's own website or newsletter. Half an hour every week checking alerts and the sites of shortlisted trusts catches openings early enough to write a good application instead of a rushed one.

                ## Milestones
                1. Email alerts or newsletters set up for every shortlisted trust that offers them.
                2. A weekly half-hour slot held in the calendar.
                3. New opportunities and changed deadlines entered in the tracker the same day.
                4. A running note of trusts whose priorities have changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pipeline tracker shows a dated weekly scan entry in at least 10 of any 12 weeks."
                cadence: rolling
              tasks:
                - "Sign up to the newsletters of each shortlisted trust that offers one"
                - "Block a recurring half-hour slot in your calendar for funder research"
                - "Check funder sites and alerts and update the tracker @recurring(weekly:tue)"
                - "Note any trust whose published priorities have changed"
            - name: Monthly grants pipeline review
              description: |-
                ## Purpose
                A tracker only helps if someone looks at it with a decision in mind. A monthly half-hour review with your manager, covering what went in, what came back, what is due next and whether the year's target is still in reach, keeps effort on the applications that matter.

                ## Milestones
                1. A standing monthly meeting with your manager or chief executive in the calendar.
                2. A one-page summary of submitted, awarded, declined and upcoming applications produced each month.
                3. Every application due in the next eight weeks has a draft owner and start date.
                4. Progress against the annual target reported as a figure and a percentage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly pipeline summary is produced and discussed in at least 11 months of the year, with actions recorded in the tracker."
                cadence: rolling
              tasks:
                - "Book a standing monthly half-hour pipeline review with your manager"
                - "Prepare the one-page pipeline summary from the tracker @recurring(monthly:8)"
                - "Assign an owner and start date to every application due in eight weeks"
                - "Record decisions and actions from each review in the tracker"
            - name: Grant reporting calendar
              description: |-
                ## Purpose
                Missing a report deadline is the fastest way to lose a renewal, and some funders hold back the next payment until the report arrives. Logging every reporting date, payment condition and required format from each offer letter in one calendar, and checking it monthly, means no report is written the night before.

                ## Milestones
                1. Report dates, payment dates and required formats extracted from every active offer letter.
                2. All dates entered in one shared calendar with reminders six weeks ahead.
                3. Each upcoming report has a named writer and a data owner.
                4. No report submitted late over the following twelve months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All active grants' reporting dates sit in one calendar with six-week reminders, and no report is late over twelve months."
                cadence: rolling
              tasks:
                - "Read every active offer letter and list report and payment dates"
                - "Put each date in the shared calendar with a six-week reminder"
                - "Name a writer and a data owner for every upcoming report"
                - "Check reports due in the next sixty days and start their drafts @recurring(monthly:20)"
            - name: Restricted grant spend tracking with finance
              description: |-
                ## Purpose
                Trust grants are usually restricted to the purpose described in the application, and spending them on something else, or leaving large sums unspent, has to be explained and can mean repaying money. A monthly check of spend against each grant budget, done with the finance team, catches underspends and miscoding while there is still time to act.

                ## Milestones
                1. Each active grant has its own fund or cost code in the accounts.
                2. A monthly report shows budget, spend to date and forecast for every grant.
                3. Variances over an agreed threshold, such as ten percent, flagged with a reason.
                4. Likely underspends raised with the funder well before the grant period ends.

                ## Notes
                Most funders would rather hear about an underspend three months early than discover it in a final report. Ask before moving money between budget lines.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly spend report for every restricted grant is reviewed with finance, and every variance over the threshold has a recorded reason."
                cadence: rolling
              tasks:
                - "Confirm with the finance team that each active grant has its own fund code"
                - "Review spend against budget for every grant with finance @recurring(monthly:12)"
                - "Forecast year-end spend on each grant and flag likely underspends @recurring(quarterly)"
                - "Write a reason beside every variance above the agreed threshold"
            - name: Monthly monitoring data collection
              description: |-
                ## Purpose
                Reports written from memory read as anecdote. Collecting the agreed indicators from delivery staff every month, in the same format, gives you numbers you can trust when a report is due and shows a project drifting off track months before the funder would notice.

                ## Milestones
                1. A monthly data return for delivery staff that covers every grant's indicators.
                2. Returns arriving by a fixed day each month.
                3. A running total for each indicator set against the target in the grant agreement.
                4. Any indicator more than a quarter behind target discussed with the project lead.

                ## Notes
                Start from the **Metrics log** template. Collect only what a funder or your own managers will actually use; long forms get filled in badly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monitoring returns for every funded project are logged in at least 11 of 12 months, with running totals compared to grant targets."
                cadence: rolling
              tasks:
                - "Build a one-page monthly data return for each funded project"
                - "Collect monitoring returns from delivery staff @recurring(monthly:25)"
                - "Summarise outcome data against each funder's targets @recurring(quarterly)"
                - "Raise any indicator running behind target with the project lead"
            - name: Beneficiary case study and quote bank
              description: |-
                ## Purpose
                Funders want to hear what changed for a real person, but stories gathered in a rush the week a report is due are thin and often lack proper consent. A monthly habit of collecting one short case study, with written consent and anonymised where needed, builds a bank to draw on for applications and reports alike.

                ## Milestones
                1. A consent form covering use in funding applications and reports, approved by your data protection lead.
                2. A half-page case study layout: situation before, what you did, what changed, a quote.
                3. At least one new case study added in most months.
                4. Each story tagged by programme and funder so it can be found in minutes.

                ## Notes
                Change names and identifying details unless the person has clearly agreed to be named, and record when consent expires or is withdrawn.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consented case study bank holds at least ten stories tagged by programme and funder, with one added in most months."
                cadence: rolling
              tasks:
                - "Agree a case study consent form with your data protection lead"
                - "Draft a half-page case study layout with four headings"
                - "Ask a project worker for one consented case study @recurring(monthly:16)"
                - "Tag each case study by programme and funder"
            - name: Programme officer relationship log
              description: |-
                ## Purpose
                At many foundations a programme officer or grants manager decides which applications reach the trustees, and a short call before applying can save a wasted bid. Logging each contact, what they said about priorities and what you promised, and being in touch a few times a year without asking for anything, builds the trust that turns a first grant into a renewal.

                ## Milestones
                1. A named contact recorded for every active funder and each top-ten prospect.
                2. Every call, email and visit logged with date and key points.
                3. A non-asking contact, such as a short update or an invitation to see the work, made with each active funder each quarter.
                4. Every promise made to a funder tracked to completion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active funder and top-ten prospect has a named contact and at least one logged interaction in each quarter."
                cadence: rolling
              tasks:
                - "List the named programme officer for each active funder and top prospect"
                - "Log every funder call and email with date and key points"
                - "Send each active funder a short update or an invitation to visit @recurring(quarterly)"
                - "Book a pre-application call with the next trust on your shortlist"
            - name: Quarterly trust income forecast for the board
              description: |-
                ## Purpose
                Finance teams need to know which grants are confirmed, which are likely and which are hopeful, because budgets and staff contracts rest on them. A quarterly forecast that weights pending applications by likelihood gives the board an honest number and flags early when a grant-funded post is at risk.

                ## Milestones
                1. Grants classed as confirmed, likely or possible, with a written definition for each class.
                2. Pending applications weighted by probability in the forecast.
                3. Every grant-funded post listed with the date its funding ends.
                4. A forecast and short commentary sent to the finance lead and board each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weighted trust income forecast with a list of grant-funded posts and their end dates goes to the board every quarter."
                cadence: rolling
              tasks:
                - "Agree definitions of confirmed, likely and possible grants with finance"
                - "List every grant-funded post and the date its funding ends"
                - "Send the weighted trust income forecast to the finance lead @recurring(quarterly)"
                - "Add a short commentary on risks and changes since last quarter"
            - name: Annual review of trust fundraising results
              description: |-
                ## Purpose
                Once a year, step back from deadlines and look at the numbers: success rate, average grant, time from application to decision, fundraising cost against income and which funders produced most of the money. The review decides where next year's effort goes and which approaches to drop.

                ## Milestones
                1. Success rate, average grant size and total income calculated for the year.
                2. Income split by funder, with the share from the top three shown.
                3. Reasons for declined applications grouped, using any feedback received.
                4. Three changes for next year agreed with your manager and written into the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written annual review with success rate, income by funder and three agreed changes for next year is shared with the senior team."
                cadence: cyclic
              tasks:
                - "Export the year's applications and results from the tracker"
                - "Calculate success rate, average grant and the top three funders' share"
                - "Group the reasons applications were declined"
                - "Hold the annual trusts review and agree three changes @recurring(yearly)"
            - name: Application answer library
              description: |-
                ## Purpose
                Much of every application form asks the same things in different words: who you are, the need, your track record, safeguarding, how you involve the people you serve and what happens when the grant ends. A library of approved answers at 100, 250 and 500 words, refreshed each quarter with current figures, frees your writing time for the questions that are specific to each funder.

                ## Milestones
                1. Standard answers written for the ten most common questions.
                2. Each answer available at three lengths.
                3. Every answer dated, with its figures traced to a source.
                4. Figures and dates refreshed each quarter.

                ## Notes
                Never paste a library answer without rereading it against the funder's own wording. Assessors spot generic text quickly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A library of standard answers to the ten most common questions, at three lengths and dated within the last quarter, is in the shared drive."
                cadence: rolling
              tasks:
                - "List the ten questions that appear on most of last year's forms"
                - "Write a 250-word answer to each from your best past applications"
                - "Cut each answer to 100 words and expand it to 500"
                - "Update figures and dates across the answer library @recurring(quarterly)"
            - name: Reading funder guidelines and past grants
              description: |-
                ## Purpose
                Guidelines tell you what a trust says it funds; its grants list tells you what it actually funds. Learning to read both, together with the trustees' report in the trust's own published accounts, reveals typical grant size, the organisations it prefers and unwritten priorities, and separates targeted applications from hopeful ones.

                ## Milestones
                1. Guidelines, exclusions and deadlines summarised for three shortlisted trusts.
                2. Each trust's last two years of grants analysed by size, region and type of organisation.
                3. The trustees' report in each trust's accounts read for changes in strategy.
                4. A one-paragraph funder profile written for each, ending with a go or no-go.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three funder profiles, each drawing on guidelines, past grants and the trustees' report, end with a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three shortlisted trusts and save their current guidelines"
                - "Download each trust's latest accounts and read the trustees' report"
                - "Tabulate their last two years of grants by size and region"
                - "Write a one-paragraph profile for each with a go or no-go"
            - name: Writing an evidence-based statement of need
              description: |-
                ## Purpose
                The need section is where many applications lose marks, by describing the charity instead of the problem. Practising a need statement that combines local data, your own referral or waiting list figures and the words of the people affected teaches you to show why this work is needed, here, now.

                ## Milestones
                1. Three sources of local or national data on the problem found and dated.
                2. Your own service data, such as referrals, waiting times or demand turned away, added.
                3. A 300-word need statement drafted that names the gap your project fills.
                4. Feedback from an experienced grant writer applied to the draft.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A 300-word need statement citing at least three dated sources and your own service data is reviewed by an experienced reader."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find three dated statistics on the problem in your area"
                - "Pull referral or waiting list figures from your own records"
                - "Draft a 300-word need statement that names the gap"
                - "Ask an experienced grant writer to mark it against a funder's criteria"
            - name: Writing outcomes and outputs funders can assess
              description: |-
                ## Purpose
                Funders score clear outcomes highly, and applicants routinely muddle them with activity. Learning to write outputs as countable activity (sessions run, people reached) and outcomes as change (confidence gained, tenancy kept, attendance improved), each with a target and a measure, makes an application easier to score and its report easier to write.

                ## Milestones
                1. The difference between outputs, outcomes and impact written in your own words with examples from your work.
                2. Five outcome statements from past applications rewritten with a target number and a measure.
                3. One project's outcomes compared with a funder's published outcome categories.
                4. The rewritten outcomes saved in the application answer library.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five rewritten outcome statements, each with a target and a measure, are saved in the answer library."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one example each of an output, an outcome and an impact from your work"
                - "Rewrite five outcome statements from past applications with targets"
                - "Compare one project's outcomes with a funder's published outcome categories"
                - "Save the rewritten outcomes in the answer library"
            - name: Grant budgets and budget narratives
              description: |-
                ## Purpose
                A budget that does not match the narrative, or a staff line with no explanation of hours and salary, raises questions an assessor may not bother to ask. Practising a line-by-line budget with a short justification for each figure, including employer on-costs, inflation and the core cost share, builds a skill that carries into every application.

                ## Milestones
                1. A sample project budget built with salaries, employer on-costs, activity costs and core costs.
                2. Each line carrying a one-sentence justification.
                3. Multi-year figures using an agreed inflation assumption.
                4. The budget reconciled to the narrative so every activity has a cost and every cost an activity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A sample multi-year project budget with a justification for every line reconciles to the project narrative and is checked by finance."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a sample budget for one project with the finance lead"
                - "Add employer on-costs and an inflation rate to the staff lines"
                - "Write a one-sentence justification beside each budget line"
                - "Check every activity in the narrative has a matching cost"
            - name: Letter applications to trusts without a form
              description: |-
                ## Purpose
                Many smaller family trusts still ask for a two-page letter rather than an online form, and their trustees may read dozens at one meeting. Learning to write a letter that states the ask in the first paragraph, explains need and plan in plain language and closes with the budget and a contact name gives those trustees an easy yes.

                ## Milestones
                1. The trust's preferred length, format and attachments confirmed.
                2. A two-page letter with the amount and purpose in the opening paragraph.
                3. A one-page budget summary and the latest accounts attached.
                4. The letter signed by the chair or chief executive and sent the way the trust asks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A two-page application letter stating the amount and purpose in its first paragraph is signed and sent to a named trust."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a family trust on your shortlist that asks for letter applications"
                - "Write the ask, amount and purpose as the opening paragraph"
                - "Draft the rest of the letter in under two pages"
                - "Get the letter signed by the chair or chief executive"
            - name: Writing to tight word and character limits
              description: |-
                ## Purpose
                Online forms with 150-word or 1,000-character boxes punish long sentences and reward plain structure. Practising cutting a 400-word answer to 150 without losing the evidence, and checking how each portal counts characters and spaces, saves the late-night panic of a box that will not accept your text.

                ## Milestones
                1. Three long answers cut to a third of their length with the key evidence intact.
                2. A short list of personal cutting rules, such as one idea per sentence and numbers over adjectives.
                3. The character counting rules of two funder portals checked with a test entry.
                4. Answers drafted in a document first and pasted into portals only when final.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three answers have been cut to a third of their length and checked by a colleague, and two portals' counting rules are recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Take a 400-word past answer and cut it to 150 words"
                - "Write five personal rules for cutting answers"
                - "Paste a test answer into two funder portals to see how characters are counted"
                - "Ask a colleague whether the cut versions lost anything important"
            - name: Proportionate evaluation for grant-funded projects
              description: |-
                ## Purpose
                Small trusts giving 5,000 rarely expect more than simple before and after measures, but a three-year grant of 150,000 may expect an independent evaluation. Learning the range of methods, from short participant surveys to externally commissioned studies, and what each costs, helps you promise evaluation that fits the grant and budget for it properly.

                ## Milestones
                1. A summary of four evaluation approaches, with the cost and staff effort of each.
                2. A rule of thumb agreed for which approach fits which size of grant.
                3. A widely used measurement tool identified for your main outcome.
                4. Evaluation costs built into the next large application's budget.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide matching evaluation approaches to grant size is agreed, and the next large application includes a costed evaluation line."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two evaluation reports from charities doing similar work"
                - "Summarise four evaluation approaches with their typical costs"
                - "Find a widely used measurement tool for your main outcome"
                - "Add a costed evaluation line to the next large application"
            - name: Core funding or project funding ask
              description: |-
                ## Purpose
                Project grants are easier to win but leave core costs uncovered, while unrestricted core grants are rarer and prized. Deciding funder by funder whether to ask for core, project or a mix, based on each trust's stated willingness and your own financial position, stops you inventing projects just to fit the money available.

                ## Milestones
                1. Shortlisted trusts marked by whether they fund core costs, projects or both.
                2. The organisation's unrestricted funding gap for the year calculated with finance.
                3. A written rule for when to make a core ask agreed with the chief executive.
                4. The ask type recorded against each shortlisted trust in the tracker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every shortlisted trust has a recorded ask type of core, project or mixed, based on a written rule and the year's unrestricted funding gap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each shortlisted trust as core, project or both from its guidelines"
                - "Calculate the unrestricted funding gap with the finance lead"
                - "Agree with the chief executive when to make a core ask"
                - "Record the ask type against each trust in the tracker"
            - name: Shift towards multi-year grants
              description: |-
                ## Purpose
                One-year grants mean reapplying every year and staff on rolling short contracts. Moving the portfolio towards two- and three-year awards, by targeting funders that offer them and building the track record they look for, gives the organisation planning time and cuts the number of applications needed each year.

                ## Milestones
                1. Current grant income split by length of award: one, two, and three or more years.
                2. Shortlisted funders that offer multi-year grants identified.
                3. A target share of multi-year income set for two years ahead.
                4. At least three multi-year applications scheduled in the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target share of multi-year grant income is set and at least three multi-year applications are scheduled in the tracker."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split current grant income by length of award"
                - "Identify shortlisted funders that offer grants of two years or more"
                - "Set a target share of multi-year income for two years ahead"
                - "Schedule three multi-year applications in the tracker"
            - name: Bid writer or grant consultant decision
              description: |-
                ## Purpose
                Freelance bid writers can lift success rates and free staff time, but they cost money, need careful briefing, and many funders object to fees paid as a percentage of the grant. Comparing in-house writing, training a member of staff and contracting a writer, on cost, quality and control, leads to a choice you can defend to the board.

                ## Milestones
                1. Three options compared: in-house, staff training and a freelance writer.
                2. At least two writers interviewed, with references and examples of funded bids.
                3. A fee agreed as a day rate or fixed fee, never a percentage of the grant.
                4. A written brief and contract covering confidentiality and ownership of the text.

                ## Notes
                Start from the **Vendor** template. Fundraising codes of practice in several countries discourage commission-based fees; check the code that applies to you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on bid writing support is recorded, and any contracted writer has a written brief, a day rate or fixed fee and checked references."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the staff hours a typical application takes now"
                - "Interview two freelance bid writers and ask for funded examples"
                - "Take up two references for the preferred writer"
                - "Agree a day rate or fixed fee in a written contract"
            - name: Choosing a grants and funder database
              description: |-
                ## Purpose
                Spreadsheets cope with twenty prospects; with a hundred funders, overlapping reports and several staff, they break. Comparing a fundraising CRM module, a dedicated grants tool and an improved spreadsheet against your real needs (reporting dates, document storage, links to finance and cost) avoids buying more system than you will use.

                ## Milestones
                1. Requirements written as must-haves and nice-to-haves.
                2. Three options demonstrated or trialled with your own sample data.
                3. Total cost over three years, including set-up and training, compared.
                4. A decision recorded and the data migration planned.

                ## Notes
                Start from the **Purchase decision** template. Ask about nonprofit pricing and full data export before you sign.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a grants database, comparing three options on requirements and three-year cost, with a migration plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the must-have features for managing funders and reports"
                - "Book demonstrations of two grants or fundraising database products"
                - "Compare three-year costs including set-up and training"
                - "Check that each option lets you export all your data"
            - name: Resubmitting after a declined application
              description: |-
                ## Purpose
                Declines are information. Asking for feedback, studying the grants the trust made instead and checking its rules on reapplying (many make you wait a year) tells you whether to revise and resubmit, redirect the project to another funder or drop it.

                ## Milestones
                1. Feedback requested politely within two weeks of the decision.
                2. The trust's rules on reapplication and waiting periods checked.
                3. Comparable grants the trust made in the same round reviewed.
                4. A decision to revise, redirect or drop recorded in the tracker with the reason.

                ## Notes
                Many trusts are oversubscribed several times over and cannot give feedback. A decline is often about volume, not quality.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each declined application has a recorded decision to revise, redirect or drop, based on feedback or the trust's published grants."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the trust to ask for any feedback on the application"
                - "Check the trust's waiting period before reapplying"
                - "Look at the grants it awarded in the same round"
                - "Record a revise, redirect or drop decision with the reason"
            - name: Joint bid with a partner organisation
              description: |-
                ## Purpose
                Some foundations prefer to fund partnerships, and a joint bid can reach a funder neither partner could win alone. Agreeing who leads, who holds the money, how the budget splits and what happens if one partner underdelivers, before the application is written, prevents the disputes that sink partnerships after the award.

                ## Milestones
                1. Lead applicant and accountable body agreed.
                2. Budget split and payment arrangements approved by both finance leads.
                3. A memorandum of understanding signed, covering roles, data sharing, reporting and exit.
                4. Monthly partner check-ins running once the grant starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed partnership agreement covering lead role, budget split, reporting and exit exists before the joint application is submitted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the partner which organisation will lead and hold funds"
                - "Draft a budget split both finance leads approve"
                - "Sign a memorandum of understanding covering roles, data and exit"
                - "Hold a partner check-in on delivery and spend @recurring(monthly:28)"
            - name: Reducing dependence on one large funder
              description: |-
                ## Purpose
                When one trust provides a third or more of income, its next strategy review becomes your biggest risk. Measuring concentration, naming the risk in the risk register and setting a plan to replace part of that income over two to three years gives the board a realistic route to resilience.

                ## Milestones
                1. Share of income from each of the top three funders calculated.
                2. The risk entered in the organisational risk register with likelihood, impact and owner.
                3. Each major funder's grant end date and renewal outlook recorded.
                4. A plan to replace a set share of the largest grant over two to three years approved by the board.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Funder concentration is measured and recorded in the risk register, and the board has approved a two- to three-year diversification plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the share of income from each of the top three funders"
                - "Add funder concentration to the risk register with an owner"
                - "Note each major grant's end date and renewal outlook"
                - "Draft a diversification plan for the board"
            - name: Final fortnight before a major application deadline
              description: |-
                ## Purpose
                Big applications fail in the last two weeks for avoidable reasons: a budget that changed after the narrative was written, a missing signature, a portal that times out late at night. A two-week countdown with a fixed sign-off day and submission at least two working days early protects months of work.

                ## Milestones
                1. A complete draft finished fourteen days before the deadline.
                2. A reader outside the project has checked it against the funder's criteria.
                3. Budget and narrative cross-checked and signed off by finance and the approver.
                4. Submitted at least two working days before the deadline, with the confirmation saved.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The application is submitted at least two working days before the deadline, with sign-off and the submission confirmation saved."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set a sign-off day five working days before the deadline"
                - "Send the full draft to an outside reader with the funder's criteria"
                - "Cross-check every budget figure against the narrative"
                - "Save the submission confirmation in the tracker"
            - name: Funder site visit preparation
              description: |-
                ## Purpose
                Shortlisted applicants to larger foundations are often visited by a grants officer or trustee who wants to see the work and meet the people doing it. A short agenda, the right people in the room, a session they can observe with participants' consent and prepared answers to the hard questions make the visit confirm what the application promised.

                ## Milestones
                1. Visit date, attendees and the visitor's priorities confirmed.
                2. An agenda of no more than two hours shared in advance.
                3. Staff, a trustee and, with consent, a participant briefed.
                4. Likely hard questions, such as sustainability and risk, answered in a briefing note.
                5. Follow-up information sent within two working days.

                ## Notes
                Start from the **Meeting notes** template. Never put participants on show; ask in advance and accept a no.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The site visit runs to a shared agenda with briefed attendees, and promised follow-up information reaches the funder within two working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the funder what they most want to see and who will attend"
                - "Draft a two-hour agenda and send it ahead of the visit"
                - "Brief staff and a trustee on the likely hard questions"
                - "Send the funder any promised information within two working days"
            - name: Funder interview or trustee panel presentation
              description: |-
                ## Purpose
                Some foundations shortlist applicants for an interview or a short presentation to trustees, often ten minutes to present and twenty for questions. Rehearsing a tight presentation, choosing who speaks and preparing for questions on budget, risk and life after the grant turns a shortlist place into an award.

                ## Milestones
                1. Format, timing and panel members confirmed with the funder.
                2. A presentation that fits the time with a minute to spare.
                3. Two speakers chosen, one of them close to the delivery of the work.
                4. A full rehearsal held with colleagues asking hard questions.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The presentation is rehearsed in full at least once within time, and the panel's questions and your answers are recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the format, timing and panel with the funder"
                - "Choose two speakers, one close to the delivery of the work"
                - "Run a timed rehearsal with colleagues playing the panel"
                - "Write down the panel's questions straight after the interview"
            - name: Grant offer letter and conditions acceptance
              description: |-
                ## Purpose
                An award letter is a contract: it sets what the money may be spent on, reporting dates, acknowledgement rules, payment conditions and sometimes terms for repaying money. Reading it carefully, checking each condition can be met and setting them up in your systems before you sign protects the organisation and starts the relationship well.

                ## Milestones
                1. Every condition in the offer letter listed with an owner.
                2. Any condition that cannot be met raised with the funder before acceptance.
                3. The acceptance signed by an authorised person and returned on time.
                4. Fund code, reporting dates and acknowledgement rules set up.
                5. A thank-you sent from the chief executive or chair.

                ## Notes
                If the letter's conditions are unusual or involve repayment or property, ask your legal adviser before signing.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The signed acceptance is returned on time and every offer condition is logged with an owner, fund code and reporting dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every condition in the offer letter with an owner"
                - "Raise any unworkable condition with the funder before signing"
                - "Return the signed acceptance through an authorised signatory"
                - "Set up the fund code and add report dates to the reporting calendar"
            - name: End of grant report and final claim
              description: |-
                ## Purpose
                The final report is where a funder decides whether you are worth backing again. Bringing together outcome data against targets, honest learning about what did not work, case studies and a reconciled financial statement, a month before it is due, makes renewal a natural next conversation.

                ## Milestones
                1. Outcome results compiled against every target in the grant agreement.
                2. A financial statement reconciled to the accounts by the finance team.
                3. Learning written honestly, including what changed from the plan and why.
                4. The report submitted on or before its due date with any final payment claim.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The final report, with outcomes against targets and a finance-reconciled statement, is submitted on or before its due date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft the final report from the monitoring log and case studies"
                - "Get a reconciled financial statement from the finance team"
                - "Write a section on what worked, what did not and what changed"
                - "Submit the report and any final claim before the due date"
            - name: Grant variation request
              description: |-
                ## Purpose
                Projects change: a key worker leaves, a venue closes, costs rise. Most funders will agree a variation to timing, budget lines or activities if asked early and clearly, but they treat unexplained changes found in a report as a breach of the grant terms, so a well-made request protects the money.

                ## Milestones
                1. The change, its cause and its effect on outcomes described on one page.
                2. A revised budget and timeline prepared with finance.
                3. The request sent to the programme officer before the change takes effect.
                4. Written approval from the funder filed with the grant record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written variation request with revised budget and timeline is sent before the change happens, and the funder's written reply is filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the change, the cause and the effect on outcomes on one page"
                - "Prepare a revised budget and timeline with finance"
                - "Call the programme officer before sending the request"
                - "File the funder's written approval with the grant record"
            - name: First trust application for a new small charity
              description: |-
                ## Purpose
                Volunteer-run and newly registered charities often have no filed accounts, no track record and trustees writing applications in the evenings. Starting with local trusts and community foundations that welcome new groups, and asking for a modest, fully costed amount, builds the track record larger funders want to see.

                ## Milestones
                1. Five local trusts or community funds that accept new or small groups identified.
                2. A first-year budget or management accounts prepared in place of filed accounts.
                3. One small, specific application drafted for a named activity with its full cost.
                4. The application submitted and its outcome recorded.

                ## Notes
                Ask for what one clearly defined activity costs, such as a year of weekly sessions, rather than a share of everything you hope to do.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first application for a modest, fully costed activity is submitted to a funder that accepts new groups within ninety days."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find five local funders that accept applications from new groups"
                - "Prepare a simple first-year budget with the treasurer"
                - "Choose one specific activity and cost it in full"
                - "Submit the first application and log the outcome"
            - name: Grants for an unregistered community group
              description: |-
                ## Purpose
                Many trusts fund only registered charities, which shuts out residents' associations, mutual aid groups and new collectives. Finding funders that accept constituted groups, or arranging for a registered charity to hold a grant on your behalf, opens doors while you decide whether registering is right for you.

                ## Milestones
                1. A simple written constitution and a bank account in the group's name in place.
                2. Funders that accept unregistered constituted groups listed.
                3. Where needed, a host charity agreed, with a written arrangement on fees, reporting and decision-making.
                4. A first application submitted under the right arrangement.

                ## Notes
                A host charity becomes legally responsible for the grant, so expect it to ask for receipts and a small management fee.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The group has a constitution and bank account, and either a list of funders that accept it or a signed hosting agreement with a registered charity."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Adopt a simple constitution at a members' meeting"
                - "List funders that accept constituted unregistered groups"
                - "Approach a local charity about hosting a grant for the group"
                - "Agree fees, reporting and control in a written hosting arrangement"
            - name: Trust fundraising alongside a full-time service role
              description: |-
                ## Purpose
                In small charities, trust applications often fall to a manager who also runs services, supervises staff and covers the phones. A realistic plan for that person (fewer, better targeted applications, a protected weekly block and heavy use of the answer library) beats a long list of bids that never get written.

                ## Milestones
                1. The hours really available each month for trust work agreed with the line manager.
                2. The year's application plan cut to what those hours allow.
                3. A protected weekly writing block in the calendar.
                4. Duties that can pause in the fortnight before big deadlines identified.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed monthly hour budget for trust work, a matching application plan and a protected weekly block are in place."
                cadence: rolling
              tasks:
                - "Agree with your line manager how many hours a month trusts can have"
                - "Cut the year's application plan to fit those hours"
                - "Hold a protected two-hour block for applications @recurring(weekly:thu)"
                - "List the duties that can pause before a major deadline"
            - name: First ninety days as a trusts and grants manager
              description: |-
                ## Purpose
                New trusts managers inherit live grants with reports due, half-finished applications and funder relationships held in someone else's head. A structured first ninety days (active grant obligations first, then the pipeline, then strategy) avoids a missed report in month two and gives the senior team a plan by month three.

                ## Milestones
                1. Every active grant listed with its next report and payment date within the first two weeks.
                2. Introductory contact made with the programme officer of each major funder.
                3. The pipeline reviewed and live applications either progressed or dropped.
                4. A trust fundraising plan for the next year presented to the senior team by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By day ninety, every active grant's obligations are logged, major funders have been contacted and a one-year trust plan is presented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every active grant with its next report and payment date"
                - "Ask your predecessor or manager for the history of each major funder"
                - "Introduce yourself to the programme officer of each major funder"
                - "Present a one-year trust fundraising plan to the senior team"
            - name: When a long-term funder ends its support
              description: |-
                ## Purpose
                Foundations change strategy, close programmes or limit how long they fund one organisation, and a grant that has paid for a post for nine years can end with a single letter. Planning the exit (reserves, other funders, a reduced service or staff consultation) from the day notice arrives protects staff and the people you serve.

                ## Milestones
                1. The end date, final payment and any tapering confirmed in writing with the funder.
                2. The services and posts affected listed with their annual costs.
                3. Replacement funding prospects identified and applications scheduled.
                4. A contingency plan agreed by the board, including any staff consultation the law requires.

                ## Notes
                Ask the departing funder for a reference or an introduction to another trust. Many are glad to help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within two months of notice, the board has agreed a contingency plan with costed options and replacement applications are scheduled."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the end date and any tapered final payments with the funder"
                - "List the posts and services the grant pays for, with costs"
                - "Schedule replacement applications to other shortlisted trusts"
                - "Ask the departing funder for an introduction to another trust"
            - name: Emergency response grant applications
              description: |-
                ## Purpose
                After a flood, hurricane, local closure or sudden rise in demand, community foundations and trusts often open fast-track emergency funds with short forms and decisions in days. Having a crisis case, a costed emergency response and evidence of local need ready lets you apply in the first week, when most of the money goes out.

                ## Milestones
                1. A one-page emergency response outline covering need, response, cost and timeline.
                2. Community foundations and trusts known to run emergency funds listed with contact details.
                3. A separate cost code for emergency spend agreed so reporting is easy.
                4. A short report submitted to each emergency funder within the time it sets.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page emergency response outline and a list of emergency funders are kept current, ready to apply within a week of a crisis."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List community foundations and trusts that have run emergency funds before"
                - "Draft a one-page emergency response outline"
                - "Agree a separate cost code for emergency spending with finance"
                - "Save past emergency applications and reports as examples"
            - name: Company foundation and staff charity applications
              description: |-
                ## Purpose
                Company foundations and staff charity committees fund differently from family trusts: they often want links to their sites, staff volunteering and some publicity, and their cycles follow the company's financial year. Treating them as a distinct group, with tailored asks and a clear offer of employee involvement, opens a source many charities approach badly.

                ## Milestones
                1. Company foundations and staff charity schemes near your locations listed.
                2. Each one's priorities, grant cycle and any employee nomination route recorded.
                3. A tailored ask drafted that includes a volunteering or employee involvement offer.
                4. Acknowledgement and publicity expectations agreed in writing before accepting.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "At least five company foundations or staff schemes are profiled and one tailored application including employee involvement is submitted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List companies with a foundation or staff charity committee near your sites"
                - "Record each one's grant cycle and nomination route"
                - "Ask a supporter who works at a target company about nominating you"
                - "Check company funders' grant cycles against their financial years @recurring(yearly)"
            - name: Applying to international foundations
              description: |-
                ## Purpose
                Larger international foundations fund across borders but expect more due diligence: governance documents in their language, audited accounts, anti-money-laundering and counter-terrorism checks, and sometimes evidence that you are equivalent to a charity under their own rules. Preparing this before applying avoids months of back and forth after the offer.

                ## Milestones
                1. International foundations that fund your cause and region identified.
                2. Their due diligence requirements, such as audited accounts or equivalency checks, listed.
                3. Translated or certified documents prepared where required.
                4. Currency, transfer fees and exchange risk discussed with finance and built into the budget.

                ## Notes
                Some US foundations ask for an equivalency determination before granting overseas. Ask the foundation which route it uses and who pays for it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A due diligence file meeting the stated requirements of at least two international foundations is complete before applying."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find international foundations that have funded your cause in your region"
                - "List the due diligence documents each one requires"
                - "Ask finance how currency transfers and exchange losses will be handled"
                - "Prepare certified copies of governing documents and audited accounts"
            - name: Large strategic grant with foundation due diligence
              description: |-
                ## Purpose
                Six-figure, multi-year grants from major foundations usually run in stages: an expression of interest, a full proposal, a due diligence review of governance and finances, and a trustee decision months later. Running the bid as a project with a timeline, a small internal team and a due diligence pack ready in advance keeps momentum through a process that can take a year.

                ## Milestones
                1. Stages and likely timeline confirmed with the programme officer.
                2. An internal team named, including the chief executive, the finance lead and a trustee.
                3. A due diligence pack covering governance, financial controls, safeguarding and risk.
                4. The full proposal submitted and due diligence questions answered within the agreed times.
                5. A quarterly learning conversation with the funder agreed if the grant is awarded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The full proposal is submitted on time and every due diligence request is answered within the period the foundation sets."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the stages and timeline with the programme officer"
                - "Name an internal bid team with a trustee and the finance lead"
                - "Assemble a due diligence pack of governance and financial controls"
                - "Hold the quarterly learning conversation with the funder once awarded @recurring(quarterly)"
            - name: Commissioned evaluation for a funded programme
              description: |-
                ## Purpose
                Larger programmes increasingly come with a funder's request for independent evaluation, and the findings can shape grant-making across the whole field. Commissioning well (a clear brief, a sensible budget and an evaluator who understands the people you serve) produces findings you can use, not a report that sits on a shelf.

                ## Milestones
                1. Evaluation questions agreed with the funder and the delivery team.
                2. A brief with budget and timeline issued to at least three evaluators.
                3. An evaluator appointed after interview, with data protection terms in the contract.
                4. Findings shared with the funder alongside a written response on what will change.

                ## Notes
                Many funders suggest setting aside five to ten percent of a programme budget for evaluation. Check what your funder expects before you cost it.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An evaluator is appointed through a written brief, and the final evaluation report has a written organisational response shared with the funder."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the evaluation questions with the funder and delivery team"
                - "Write an evaluation brief with budget and timeline"
                - "Send the brief to three evaluators and interview two"
                - "Write the organisation's response to the findings"
---

# Charitable Foundation Grants

This area is for charities, community groups and the managers who raise money from trusts and foundations, whether you write two applications a year or run a full trusts programme. It starts with the foundations (grant readiness, a core documents pack, a case for support, prospect research, an income target and full-cost budgets), then the routines that keep applications flowing and grants compliant, the writing, budgeting and evaluation skills assessors reward, the decisions about core funding, partners and outside help, the dated moments from final deadline to end of grant report, the situations that change the approach, and finally specialist work with company, international and large strategic funders.

What repeats is a Tuesday funder scan and a Thursday writing block, monthly pipeline reviews, restricted spend checks, monitoring returns, case studies and report planning, quarterly forecasts, funder contact and answer library updates, and a yearly results review with refreshed documents, case for support and core cost rate. The Meeting notes, Metrics log, Vendor, Purchase decision, Risk register and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
