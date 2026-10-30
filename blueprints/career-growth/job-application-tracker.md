---
id: career-growth.job-application-tracker
name: Job Application Tracker
description: "One tracker for every application, contact, interview stage and follow-up, with weekly reviews, funnel numbers and a clean close, so an active job search stays organised and nothing slips."
category: personal
version: 1.0.0
tags: [career-growth, job-application-tracker, everyone, student, job-search, application-pipeline, follow-ups, job-search-metrics]
author: Aurum Technology
starter_structure:
  templates:
    - job-application
    - metrics-log
    - purchase-decision
  pillars:
    - name: Career Growth
      emoji: "🧭"
      description: "A working life steered rather than drifted: job searches and promotions, reputation and network, pay negotiations, career changes, credentials, and the evidence that you are getting better at what you do."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Job Application Tracker
          description: "Tracking applications, contacts, interview stages and follow-ups so an active search stays organised and nothing slips."
          projects:
            - name: Choosing where the application tracker lives
              description: |-
                ## Purpose
                Searches fall apart when applications are scattered across three inboxes, a notes app and a browser full of tabs. Picking one home for the tracker on day one, a spreadsheet, a board app or a notes database, means every later habit has somewhere to land. The best tool is the one you will open on your phone in a queue.

                ## Milestones
                1. Two or three candidate tools tried with five sample applications each.
                2. One tool chosen, with the reason written in a sentence.
                3. The tracker reachable from both phone and computer.
                4. A backup or export method tested once.

                ## Notes
                A plain spreadsheet beats a clever app you abandon in week three. Choose the simplest tool that works on your phone.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One tracker tool chosen and in use on phone and computer, with a tested export or backup."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every place an application currently lives: inboxes, notes, portals, tabs"
                - "Try a spreadsheet and one board app with five real applications each"
                - "Pick one tool and open it on your phone to check it is usable there"
                - "Export or back up the tracker to a second location @recurring(monthly:3)"
            - name: Tracker columns and stage definitions
              description: |-
                ## Purpose
                Without agreed stages, "applied" can mean anything from a two-click submission to a referral with a phone call booked. Defining eight to ten columns and a fixed list of stages, from Saved to Closed, makes the tracker sortable and turns it into data you can count later.

                ## Milestones
                1. Core columns set: employer, role, link, date applied, source, stage, next action, next action date, contact, notes.
                2. A fixed stage list written down, for example Saved, Applied, Screen, Interview, Final, Offer, Closed.
                3. A rule for what moves an application from one stage to the next.
                4. A dropdown or tag for each stage so spelling never varies.

                ## Notes
                The two columns that do the most work are next action and next action date. Without them a tracker is a list of history.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker with at least eight defined columns and a fixed stage list enforced by dropdowns or tags."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the column list on paper before touching the tool"
                - "Define each stage in one line, including what counts as Closed"
                - "Add dropdowns or tags so stages cannot be typed differently"
                - "Freeze the header row and sort by next action date"
            - name: Importing every live application into the tracker
              description: |-
                ## Purpose
                Most people start tracking after they have already applied to a dozen places, and those early applications are the ones that go quiet unnoticed. Searching your inbox and job board histories once and entering every live application gives an honest starting count.

                ## Milestones
                1. Inbox searched for confirmation emails from the last three months.
                2. Applied history exported or copied from each job board and portal used.
                3. Every live application entered with date, stage and source.
                4. Applications older than six weeks with no reply marked as likely closed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every application from the last three months is in the tracker with a stage, and the live total is written at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your inbox for phrases such as thank you for applying and application received"
                - "Open the applied list on each job board you have used"
                - "Enter each application with its date, source and current stage"
                - "Write the total of live applications at the top of the tracker"
            - name: Saving each job advert before it disappears
              description: |-
                ## Purpose
                Adverts are often taken down the day applications close, which is exactly when an interview invitation arrives and you need the person specification. Saving a PDF or full text of every advert you apply to keeps the employer's own words available for every later stage.

                ## Milestones
                1. A folder for saved adverts, named so files sort by employer.
                2. A one-click method chosen: print to PDF, a read-later app or copy into the tracker notes.
                3. Every live application linked to its saved advert.
                4. Salary range, closing date and requirements copied into tracker columns where shown.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every application in the tracker links to a saved copy of its advert that opens without the original website."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create an adverts folder and agree a file naming pattern such as employer, role, date"
                - "Save the adverts for your live applications that are still online"
                - "Add a link to each saved advert in its tracker row"
                - "Copy the closing date and salary range into their columns"
            - name: Application document folder and version naming
              description: |-
                ## Purpose
                Being asked about a line in your CV and not knowing which version that employer saw is an avoidable stumble. A folder per application holding the exact CV, cover letter and form answers sent, with dated file names, lets you reread what you submitted the night before any interview.

                ## Milestones
                1. One folder per application, matching the tracker row name.
                2. File names that carry employer, document and date.
                3. The submitted version of each document saved as PDF, not the editable draft.
                4. Long form answers copied out of portals before pressing submit.

                ## Notes
                Start from the **Job application** template for each application you want to keep detailed notes on. Rewriting the CV itself belongs to a separate project.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every application from installation onward has a folder holding the exact documents submitted, saved as PDF with dated names."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a top-level applications folder beside your tracker"
                - "Agree a file name pattern such as employer, CV, year, month, day"
                - "Save the submitted versions for your current live applications"
                - "Paste portal answers into a text file before submitting the next form"
            - name: Search inbox, labels and email filters
              description: |-
                ## Purpose
                Recruiter replies and interview invitations get buried under job alert newsletters, and some land in spam. A dedicated search email address or label, with filters that separate alerts from real replies, means the messages that need an answer within a day stand out.

                ## Milestones
                1. A decision recorded on using a separate address or a label in your main inbox.
                2. Filters routing job alerts into their own folder.
                3. A label for replies from employers and recruiters.
                4. Spam folder checked and common senders marked as safe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Job alerts and employer replies arrive in separate labelled folders, tested with at least three real messages."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide whether to use a separate search address or a label"
                - "Create a filter that moves job alert emails out of the main inbox"
                - "Check the spam folder for any missed employer messages"
                - "Mark applicant tracking system senders as safe contacts"
            - name: Applicant portal accounts register
              description: |-
                ## Purpose
                Large employers each run their own careers portal, and after a month of searching it is normal to have fifteen accounts and no idea which email address each uses. A register of portals, usernames and status pages, with passwords kept only in a password manager, makes it quick to check an application or withdraw one.

                ## Milestones
                1. A tab in the tracker listing each portal, the employer and the login email used.
                2. Every portal password stored in a password manager, never in the tracker.
                3. The status page link for each portal saved.
                4. Unused portal accounts noted for closing when the search ends.

                ## Notes
                Never write passwords into the tracker or a shared document. If you do not use a password manager yet, set one up first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A portal register lists every careers account with its login email and status link, with no passwords stored in it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search your inbox for account created and verify your email messages"
                - "List each portal with the employer and login email used"
                - "Save each portal's application status link in the register"
                - "Move any portal passwords into a password manager"
            - name: Weekly application targets and time budget
              description: |-
                ## Purpose
                Searches tend to swing between frantic weekends of thirty rushed applications and silent fortnights. Setting a weekly target for tailored applications, follow-ups and networking messages, sized to the hours you really have, gives the search a steady pace you can keep for three months.

                ## Milestones
                1. Hours available each week written down honestly, after work, study or care.
                2. A weekly target for tailored applications, follow-ups and outreach messages.
                3. Two fixed search sessions blocked in the calendar.
                4. A target and actual row added to the tracker.

                ## Notes
                Five careful applications usually beat twenty generic ones. Set the target low enough that you hit it in a bad week.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly target for applications, follow-ups and outreach, with two search sessions blocked in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the hours you can give the search in a normal week"
                - "Set weekly numbers for applications, follow-ups and outreach messages"
                - "Block two recurring search sessions in your calendar"
                - "Add a target versus actual row to the tracker"
            - name: Contact log for hiring managers and referrers
              description: |-
                ## Purpose
                The people behind an application, the recruiter who screened you, the alumnus who referred you, the hiring manager who interviewed you, are the most valuable part of a search and the easiest to forget. A contact tab linked to each application records who you spoke to, when, and what you promised to send.

                ## Milestones
                1. A contacts tab with name, role, employer, how you met, last contact date and next step.
                2. Each contact linked to the application rows they relate to.
                3. Every promise you made, such as sending a portfolio link, logged with a date.
                4. Contacts from closed applications kept, not deleted.

                ## Notes
                Keep only what someone would expect you to hold: name, work role and how you met. Do not copy personal details from their profiles.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contacts tab lists every person connected to a live application with last contact date and next step."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a contacts tab with name, role, employer, last contact and next step"
                - "Enter everyone you have spoken to about a live application"
                - "Link each contact to the application rows they belong to"
                - "Review contacts with no touch in thirty days @recurring(monthly:20)"
            - name: Target employer list feeding the tracker
              description: |-
                ## Purpose
                Applying only to what job boards happen to show hands the search to an algorithm. A list of twenty to forty employers you would genuinely want to work for, each with its careers page and a check date, lets you catch roles before they reach the boards and gives the Saved stage a proper source.

                ## Milestones
                1. Twenty to forty target employers listed with careers page links.
                2. Each employer tagged by priority, such as dream, strong and possible.
                3. A last checked date column for each careers page.
                4. New roles from the list entered into the tracker at the Saved stage.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A target employer tab with at least twenty employers, each with a careers link, priority tag and last checked date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down ten employers you would most like to work for"
                - "Add ten to thirty more from industry lists, competitors and alumni employers"
                - "Save the careers page link for each one"
                - "Tag each employer as dream, strong or possible"
            - name: Friday pipeline review
              description: |-
                ## Purpose
                Twenty minutes each Friday with the tracker open is what separates a managed search from a hopeful one. Moving every row to its true stage, setting a next action for each, and counting the week against your targets catches the stalled applications while there is still time to nudge them.

                ## Milestones
                1. Every live row has a current stage and a next action date in the future.
                2. This week's applications, follow-ups and outreach counted against target.
                3. Two or three priorities for next week written at the top of the tracker.
                4. The review held on at least three Fridays out of four.

                ## Notes
                Keep it to twenty minutes. A review that takes an hour stops happening.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review is logged for at least three of every four weeks, with every live application carrying a dated next action."
                cadence: rolling
              tasks:
                - "Hold a twenty-minute pipeline review with the tracker open @recurring(weekly:fri)"
                - "Give every live row a next action and a date"
                - "Count the week's activity against your weekly targets"
                - "Write next week's top three search priorities at the top of the tracker"
            - name: Follow-up rhythm after applying
              description: |-
                ## Purpose
                Many applications sit unread in a queue, and a short, polite follow-up to a named person can move one to the top. Agreeing a rule, such as a first nudge after seven to ten working days and a final one a week later, means follow-ups happen on schedule instead of whenever anxiety strikes.

                ## Milestones
                1. A follow-up rule written down with timings for each stage.
                2. A follow-up count column in the tracker.
                3. Two short follow-up drafts saved for reuse: after applying and after interviewing.
                4. No live application older than ten working days without a follow-up or a reason.

                ## Notes
                Respect any instruction in the advert not to chase. Two follow-ups with no reply is a clear signal to move the row to Closed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live application past ten working days has a logged follow-up or a written reason not to send one."
                cadence: rolling
              tasks:
                - "Write your follow-up timing rule for each stage"
                - "Add a follow-up count column to the tracker"
                - "Send the follow-ups that are due this week @recurring(weekly:tue)"
                - "Move rows with two unanswered follow-ups to Closed"
            - name: Ten-minute daily inbox and portal check
              description: |-
                ## Purpose
                Interview invitations often come with a slot picker that fills within a day, and a missed screening call can end an application. A ten-minute check of the search inbox, voicemail and status pages each weekday, with every change logged in the tracker, keeps response times short without the search taking over the day.

                ## Milestones
                1. A fixed time chosen for the daily check.
                2. Search inbox, voicemail and spam checked in that slot.
                3. Every reply logged in the tracker the same day.
                4. Interview slot requests answered within one working day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Employer messages are logged in the tracker within one working day for a month, with no missed interview slot."
                cadence: rolling
              tasks:
                - "Pick a fixed ten-minute slot for the daily search check"
                - "Check the search inbox, spam and voicemail and log any replies @recurring(daily)"
                - "Set your voicemail greeting to a short professional message"
                - "Turn on notifications for the search label only"
            - name: Interview stage calendar and schedule
              description: |-
                ## Purpose
                Two or three processes at once can mean a phone screen, a take-home task and a panel all in the same week, each with different instructions. Putting every stage in the calendar with the joining link, the interviewer names and any preparation due, and mirroring it in the tracker, prevents double bookings and late starts.

                ## Milestones
                1. Every scheduled stage in the calendar with time zone, link or address and interviewer names.
                2. Preparation deadlines, such as take-home tasks, entered as separate calendar items.
                3. The tracker stage and next action date updated for each booking.
                4. Travel or quiet room arrangements confirmed for each interview.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interview stage for a month appears in both calendar and tracker with link, names and preparation deadline."
                cadence: rolling
              tasks:
                - "Add every booked interview to the calendar with link and interviewer names"
                - "Check the coming week's interviews and preparation deadlines @recurring(weekly:mon)"
                - "Enter take-home task deadlines as their own calendar items"
                - "Confirm the time zone on every invitation from another region"
            - name: Post-interview notes and thank-you log
              description: |-
                ## Purpose
                By the third round it is hard to remember what the first interviewer asked or what you said about your notice period. Writing ten minutes of notes straight after each conversation, and logging the thank-you message you sent, gives you a record to prepare the next stage from and keeps your story consistent.

                ## Milestones
                1. A notes section for each interview: who, questions asked, what you said, what they said about next steps.
                2. Notes written within two hours of each interview.
                3. A thank-you message sent and logged within one working day.
                4. Stated decision dates entered as next action dates in the tracker.

                ## Notes
                Start from the **Job application** template if you want stage-by-stage notes for a process that runs several rounds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interview in the last month has written notes and a logged thank-you message within one working day."
                cadence: rolling
              tasks:
                - "Create a short interview notes outline you can fill in from your phone"
                - "Write notes within two hours of each interview"
                - "Send and log a short thank-you message the next working day"
                - "Enter the decision date they gave as the next action date"
            - name: Closing out stale and rejected applications
              description: |-
                ## Purpose
                A tracker full of rows that died weeks ago makes the search look bigger than it is and hides the live ones. Closing anything with no response after six weeks, and logging the reason and stage each rejection came at, gives an honest live count and the raw data for spotting patterns.

                ## Milestones
                1. A closing rule set, such as six weeks with no reply after two follow-ups.
                2. A closed reason column: rejected, no response, withdrew, role pulled.
                3. The stage reached recorded for each closed application.
                4. Closed rows filtered out of the default view but kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No live row is older than six weeks without contact, and every closed row has a reason and stage reached."
                cadence: rolling
              tasks:
                - "Write your rule for when an application counts as closed"
                - "Add closed reason and stage reached columns"
                - "Close stale rows and record their reasons @recurring(monthly:14)"
                - "Set the default view to hide closed rows"
            - name: Monthly job search funnel numbers
              description: |-
                ## Purpose
                Counting applications, responses, interviews and offers each month turns frustration into a diagnosis. A response rate under five percent points at targeting or the CV, while plenty of first interviews and no second ones points at interview performance, and each needs a different fix.

                ## Milestones
                1. A monthly row with counts for applied, responded, first interview, later stages and offers.
                2. Conversion rates between each stage calculated.
                3. The same numbers split by source: job board, referral, direct, recruiter.
                4. One change chosen for next month based on the weakest stage.

                ## Notes
                Start from the **Metrics log** template. Small numbers swing wildly, so look at trends over two or three months before drawing conclusions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly funnel rows exist with stage conversion rates and one recorded change per month."
                cadence: rolling
              tasks:
                - "Add a monthly funnel tab with a column for each stage"
                - "Fill in the month's counts and conversion rates @recurring(monthly:28)"
                - "Split the counts by application source"
                - "Write one change to test next month based on the weakest stage"
            - name: Job alert and saved search pruning
              description: |-
                ## Purpose
                Alerts set up in a hurry on the first day usually send hundreds of irrelevant roles a week, and the good ones drown. Pruning saved searches monthly, by tightening keywords, location and seniority filters, keeps alert volume low enough that every email gets read.

                ## Milestones
                1. Every active job alert listed with the site, keywords and frequency.
                2. Alerts that produced nothing worth saving in a month switched off.
                3. Keywords and filters tightened on the rest.
                4. Alert volume down to a number you can read in ten minutes a day.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An alert list exists, and monthly pruning keeps total alert emails to a volume read in full each week."
                cadence: rolling
              tasks:
                - "List every job alert you have set and where"
                - "Prune alerts that sent nothing worth saving this month @recurring(monthly:7)"
                - "Add exclusion keywords for roles you keep seeing and never want"
                - "Switch daily alerts to weekly where roles stay open longer"
            - name: Referral request pipeline
              description: |-
                ## Purpose
                Referred applications are often read first, yet most people ask for referrals randomly or not at all. Tracking possible referrers per target employer, the ask you made and the result, as its own small pipeline, turns referrals into a steady weekly habit rather than a lucky break.

                ## Milestones
                1. A referral column on the target employer list naming a possible contact for each.
                2. A short referral request message drafted that includes the role link and your CV.
                3. One or two referral asks sent each week.
                4. Each referral's outcome logged against the application.

                ## Notes
                Ask people who know your work or share an alumni link, and make it easy to say no. Thank every referrer whatever the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six referral asks are logged over a month, each with an outcome recorded against an application."
                cadence: rolling
              tasks:
                - "Name one possible referrer for each of your top ten employers"
                - "Draft a short referral request that includes the role link"
                - "Send one or two referral requests and log them @recurring(weekly:wed)"
                - "Thank each referrer and tell them the outcome"
            - name: Closing date look-ahead
              description: |-
                ## Purpose
                Graduate schemes, public sector posts and fixed-term contracts often close on a set date, and some close early once enough applications arrive. A Sunday glance at every Saved row with a closing date in the next fortnight stops strong roles being lost to a busy week.

                ## Milestones
                1. A closing date column filled in for every Saved row that has one.
                2. A filtered view showing roles closing within fourteen days.
                3. High-priority roles drafted at least three days before closing.
                4. No target role missed because its closing date passed unnoticed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A closing-soon view exists and no high-priority role is missed by its closing date over a month."
                cadence: rolling
              tasks:
                - "Fill in closing dates for every Saved row that has one"
                - "Build a filtered view of roles closing in the next fourteen days"
                - "Check the closing-soon view and plan the week's applications @recurring(weekly:sun)"
                - "Note any role that closed early so you apply sooner next time"
            - name: Reading your application funnel
              description: |-
                ## Purpose
                Most job seekers know how many applications they sent and nothing else. Learning to read the drop-off between stages, compare sources and separate signal from bad luck at small numbers lets you act on evidence: change the targeting, the documents or the interview approach, but not all three at once.

                ## Milestones
                1. The meaning of each stage conversion rate understood with a worked example from your own data.
                2. Typical warning patterns written down, such as many applications and few replies.
                3. One diagnosis written for your own funnel.
                4. One change chosen and a date set to check its effect.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page diagnosis of your own funnel exists, naming the weakest stage and one change with a review date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Calculate conversion from applied to reply and reply to interview"
                - "Compare the rates for referrals against job board applications"
                - "Ask the agent to summarise patterns in your closed reasons column"
                - "Write one diagnosis and one change with a date to check it"
            - name: How applicant tracking systems handle your application
              description: |-
                ## Purpose
                Many employers run applications through an applicant tracking system that parses your CV into fields, applies knockout questions and lets recruiters search by keyword. Knowing roughly how that works, and what it does not do, explains some silent rejections and stops you wasting time on myths about secret scoring.

                ## Milestones
                1. The common steps understood: parsing, knockout questions, recruiter search and status changes.
                2. Your CV tested by uploading it to a portal and checking how the fields filled.
                3. Knockout questions in your recent applications reviewed for answers that may have screened you out.
                4. Three practical rules written down for future forms.

                ## Notes
                Claims that a tool rejects most CVs automatically are often overstated. Clear formatting and honest answers to knockout questions matter more than tricks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written rules for completing portal applications, based on testing how one real portal parsed your CV."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read an explainer on how applicant tracking systems parse and filter applications"
                - "Upload your CV to one portal and check how the fields auto-filled"
                - "Review knockout answers from your last five applications"
                - "Write three rules for completing portal forms"
            - name: Writing follow-up emails that get replies
              description: |-
                ## Purpose
                Busy recruiters can do nothing with a follow-up that says only "just checking in". Practising short follow-ups that name the role, add one new piece of evidence and ask a single clear question raises the chance of an answer and keeps you sounding keen rather than anxious.

                ## Milestones
                1. Three follow-up drafts written: after applying, after interview, after a missed decision date.
                2. Each draft under one hundred words with one clear question.
                3. The drafts reviewed by someone whose judgement you trust.
                4. Reply rates for follow-ups noted in the tracker for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three reviewed follow-up drafts under one hundred words each, used for a month with reply rates logged."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Collect two follow-ups you sent recently that got no reply"
                - "Rewrite them to name the role, add one new fact and ask one question"
                - "Ask a friend or careers adviser to review the three drafts"
                - "Track replies to the new versions for a month"
            - name: Typical hiring timelines in your target sector
              description: |-
                ## Purpose
                Start-ups may make an offer in ten days while public bodies and large banks take three months, and judging silence without knowing the norm leads to giving up too early or waiting too long. Collecting real timelines from people in your sector gives every follow-up rule and closing rule a realistic basis.

                ## Milestones
                1. Typical time from application to first response gathered for two or three target sectors.
                2. Typical number of stages and total process length noted for each.
                3. Your follow-up and closing rules adjusted per sector.
                4. Timelines from your own closed applications compared with the norm.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short table of typical response times and stages for at least two target sectors, with follow-up rules adjusted to match."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two people in your target sector how long their hiring took"
                - "Note stage counts from interview review sites for three target employers"
                - "Compare with the dates in your own closed applications"
                - "Adjust your follow-up and closing rules per sector"
            - name: Spreadsheet skills for a working tracker
              description: |-
                ## Purpose
                Four spreadsheet techniques, filters, conditional formatting, a count by stage and a simple chart, turn a list into a dashboard that tells you what to do today. Learning them takes an evening and saves minutes every day of a search that may last months.

                ## Milestones
                1. Overdue next actions highlighted automatically in red.
                2. A count of applications by stage that updates itself.
                3. Saved filter views for live, closing soon and closed.
                4. A simple chart of applications per week.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The tracker shows overdue actions highlighted, a live count by stage and at least two saved filter views."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Learn conditional formatting and highlight overdue next action dates"
                - "Add a count of applications by stage using a count-if formula"
                - "Create saved filter views for live, closing soon and closed"
                - "Chart applications sent per week"
            - name: Spotting fake job adverts and recruitment scams
              description: |-
                ## Purpose
                Fake adverts and impersonated recruiters target active job seekers, asking for fees, bank details, identity documents or equipment purchases before any genuine interview. Knowing the warning signs and checking every unfamiliar employer before applying protects your money and your identity during the most exposed months of a search.

                ## Milestones
                1. Common warning signs written down: upfront fees, chat-only interviews, payment for equipment, pressure to share bank or identity details early.
                2. A three-step check for unfamiliar employers: official website, registered company, a real named contact.
                3. A scam column or tag added to the tracker.
                4. The fraud reporting route for your country noted.

                ## Notes
                Genuine employers do not charge you to apply or train. Share identity documents only after an offer and through the employer's own systems, and report suspected fraud to the job board and the relevant authority.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of scam warning signs and a three-step employer check, applied to every unfamiliar employer added to the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your country's official guidance on job and recruitment scams"
                - "Write a three-step check for unfamiliar employers"
                - "Run the check on any live application from an employer you did not know"
                - "Note where to report a suspected scam in your country"
            - name: Tailored versus volume application experiment
              description: |-
                ## Purpose
                Some people swear by fifty quick applications a week, others by five carefully tailored ones, and the right mix depends on your field and seniority. Running each approach for two weeks with the tracker recording source and effort settles the question with your own numbers.

                ## Milestones
                1. Two weeks of quick applications and two weeks of tailored ones, each tagged.
                2. Time spent per application logged for both.
                3. Response and interview rates compared for the two groups.
                4. A ratio of tailored to quick applications chosen for the rest of the search.

                ## Notes
                Keep everything else the same during the test, including the base CV, or the comparison tells you nothing.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the ratio of tailored to quick applications, based on four weeks of tagged results."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add an approach tag column with tailored and quick values"
                - "Log minutes spent on each application for four weeks"
                - "Compare response rates between the two tags"
                - "Write the ratio you will use from now on"
            - name: Comparing job boards, referrals and direct approaches
              description: |-
                ## Purpose
                Job boards are where most time goes and often where results are weakest, while referrals and direct approaches to hiring managers can respond far better for the effort. Comparing hours and outcomes by channel after a month shows where to move your weekly time.

                ## Milestones
                1. Every application tagged with its channel.
                2. Hours per week estimated for each channel.
                3. Interviews per hour calculated for each channel.
                4. Next month's weekly time reallocated toward the best channel.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A channel comparison showing interviews per hour for at least three channels, with a revised weekly time split recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tag every application with its channel"
                - "Estimate weekly hours spent in each channel"
                - "Calculate interviews per hour for each channel"
                - "Move at least two hours a week toward the best performer"
            - name: Pruning the target list after the first month
              description: |-
                ## Purpose
                Early target lists include employers chosen on reputation alone, and a month of applying reveals which ones never respond, never hire at your level or turned out to be a poor fit. Cutting the bottom quarter and adding fresh names keeps effort pointed where it can land.

                ## Milestones
                1. Each target employer scored on responses, fit learned and roles at your level.
                2. The lowest quarter removed or moved to a later list.
                3. Five to ten new employers added from what the search has taught you.
                4. The reasons for each removal noted in a line.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The target list is revised with at least a quarter removed and five new employers added, each change with a reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Score each target employer on responses and fit"
                - "Remove or park the lowest-scoring quarter"
                - "Add five new employers similar to the ones that responded"
                - "Note a one-line reason for each change"
            - name: Faster tracker entry with clippers and shortcuts
              description: |-
                ## Purpose
                If logging an application takes five minutes it will be skipped on busy days. A browser clipper, a phone shortcut or a forwarding address that creates a tracker row from an advert gets the cost of entry down to seconds, which is what keeps the tracker complete.

                ## Milestones
                1. The current time to log one application measured.
                2. One faster entry method set up and tested.
                3. Required fields cut to the four that must be filled at entry.
                4. Entry time measured again and below one minute.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested quick-entry method creates a tracker row in under one minute from a job advert."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time how long it takes to log one application now"
                - "Try a web clipper or form that adds a row from an advert link"
                - "Cut required fields at entry to employer, role, link and date"
                - "Time the new method on three real applications"
            - name: Choosing a dedicated job search tracker app
              description: |-
                ## Purpose
                Once a search passes forty or fifty applications, some people outgrow a spreadsheet and want reminders, browser capture and a board view built in. Comparing two or three dedicated tracker apps on cost, data export and privacy before moving avoids locking months of history into a tool you later regret.

                ## Milestones
                1. Requirements written: capture, reminders, board view, export, phone use.
                2. Two or three apps compared on cost, export format and privacy terms.
                3. One trial run with ten real applications.
                4. A decision recorded to move or stay, with data migrated if moving.

                ## Notes
                Start from the **Purchase decision** template. Check that you can export everything to a spreadsheet before you commit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to adopt a tracker app or stay with the spreadsheet, based on a ten-application trial and an export test."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five features you need from a tracker app"
                - "Compare three apps on price, export and privacy terms"
                - "Trial the best one with ten real applications"
                - "Test a full export before moving your history across"
            - name: Rejection feedback requests and pattern log
              description: |-
                ## Purpose
                Feedback after rejection is rare, but asking politely after an interview stage gets an answer more often than people expect. Logging every piece of feedback, along with the stage it came at, builds a pattern that a single painful email cannot show.

                ## Milestones
                1. A short, gracious feedback request drafted for rejections after interview.
                2. A feedback column added to closed rows.
                3. Feedback requested after every rejection at interview stage or later.
                4. Recurring themes summarised after five pieces of feedback.

                ## Notes
                Thank them whatever they say and do not argue. Many employers cannot give detail for legal or policy reasons.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Feedback is requested after every rejection at interview stage, and themes from at least five responses are summarised."
                cadence: rolling
              tasks:
                - "Draft a three-line feedback request for rejections after interview"
                - "Add a feedback column to the closed rows"
                - "Send feedback requests for this month's interview rejections"
                - "Summarise recurring feedback themes @recurring(monthly:24)"
            - name: Deliberately pausing or scaling down the search
              description: |-
                ## Purpose
                Exam season, a family crisis or a promising final stage can each justify slowing the search, but a search left to drift loses contacts and momentum. Choosing a paused mode, with what continues, what stops and a restart date, protects the pipeline you have built.

                ## Milestones
                1. A reason and a restart date written down.
                2. Live processes kept going with their follow-ups.
                3. New applications and alerts paused or reduced.
                4. Key contacts told briefly if a process will slow.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pause plan with a restart date, and every live process still followed up during the pause."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the reason for pausing and a restart date"
                - "List the live processes that will continue"
                - "Switch job alerts to weekly or off until the restart date"
                - "Put the restart date in your calendar with a reminder"
            - name: Search launch week with ten applications
              description: |-
                ## Purpose
                A clear launch week, with the tracker ready, targets set and ten good applications sent, gives a new search momentum and real data within a fortnight. Treating it as an event with a start and end date beats easing in for a month.

                ## Milestones
                1. Tracker, document folders and alerts in place before day one.
                2. Ten applications sent and logged by the end of the week.
                3. At least three of them through a referral or direct contact.
                4. A short review held on the last day of launch week.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten applications logged in the tracker within launch week, at least three through a referral or direct contact."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a launch week and block the evenings or mornings in your calendar"
                - "Shortlist fifteen roles so ten good ones survive"
                - "Send and log ten applications by the last day"
                - "Hold a thirty-minute review on the final day"
            - name: Tracking a graduate scheme application season
              description: |-
                ## Purpose
                Students applying to graduate schemes often face online tests, video interviews and assessment centres across ten or twenty employers in the same term, each with its own portal and deadline. A season view in the tracker, with test deadlines and invitation expiry dates as their own columns, stops an unopened test link from ending a strong application.

                ## Milestones
                1. Opening and closing dates entered for every target scheme.
                2. Columns added for online test deadline, video interview deadline and assessment centre date.
                3. A weekly check of invitation expiry dates.
                4. Every invitation completed before it expired.

                ## Notes
                Test invitations often expire within a few days and are easy to miss in a university inbox. Forward them to your search label.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every graduate scheme application this season has its stage deadlines in the tracker, and no test or video invitation expired unopened."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every scheme you plan to apply to with opening and closing dates"
                - "Add columns for test, video interview and assessment centre deadlines"
                - "Forward university inbox messages from employers to your search label"
                - "Check invitation expiry dates every Saturday @recurring(weekly:sat)"
            - name: Careers fair follow-up batch
              description: |-
                ## Purpose
                Students and job seekers come back from a careers fair or hiring event with a pocket of business cards and a sense of goodwill that fades in a week. Entering every contact and promised action into the tracker within two days, and sending each a short note, converts conversations into applications.

                ## Milestones
                1. Every contact from the fair entered within forty-eight hours.
                2. A personalised note sent to each, naming what you discussed.
                3. Roles mentioned at the fair added at the Saved stage.
                4. A follow-up date set for each conversation that suggested a next step.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All fair contacts entered within forty-eight hours, each sent a note, with resulting roles in the tracker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Photograph every business card and leaflet the evening of the fair"
                - "Enter each contact with what you discussed into the contacts tab"
                - "Send each contact a short note naming one thing you talked about"
                - "Add roles mentioned at the fair to the tracker as Saved"
            - name: Final-stage week with parallel processes
              description: |-
                ## Purpose
                When two or three processes reach final stages together, timing becomes the whole game: one offer may arrive with a short deadline while another employer is a week from deciding. Mapping every remaining step and decision date side by side lets you ask, honestly and early, for processes to speed up or slow down.

                ## Milestones
                1. A side-by-side view of each process with remaining steps and expected decision dates.
                2. Every recruiter told, truthfully, that you are in other final stages.
                3. Any request to speed up or extend a deadline made in writing.
                4. No offer deadline passing without a decision.

                ## Notes
                Never invent a competing offer. Saying you are at a final stage elsewhere is enough. Comparing the offers themselves is a separate project.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A side-by-side timeline of all final-stage processes exists, and every offer deadline is met or extended in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each final-stage process with its remaining steps and decision date"
                - "Tell each recruiter you are at a final stage elsewhere"
                - "Ask in writing for an extension or faster decision where timelines clash"
                - "Record every offer deadline in calendar and tracker"
            - name: Closing the search after accepting an offer
              description: |-
                ## Purpose
                Accepting an offer does not end the search: there are live applications to withdraw, interviewers and referrers to thank, alerts to switch off and portal accounts holding your data. Closing properly protects relationships you may need in two years and leaves a clean archive for the next search.

                ## Milestones
                1. Every live application withdrawn with a short courteous message.
                2. Referrers, contacts and helpful recruiters thanked and told where you landed.
                3. Job alerts switched off and portal accounts closed or set to inactive.
                4. The tracker archived with a final summary row.

                ## Notes
                Withdraw only once the offer is unconditional or you are confident in the conditions, such as background checks. Check with the new employer if unsure.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All live applications withdrawn, every referrer thanked, alerts off and the tracker archived with a summary row."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the offer is unconditional before withdrawing elsewhere"
                - "Withdraw each live application with a two-line courteous message"
                - "Thank every referrer and helpful contact and tell them your news"
                - "Turn off job alerts and close unused portal accounts"
            - name: Student tracker alongside coursework deadlines
              description: |-
                ## Purpose
                Students applying for jobs and placements while studying face two deadline lists that collide in the same weeks. One tracker view that shows application deadlines next to essay, lab and exam dates, with study weeks protected, lets you apply in quiet weeks rather than sacrifice grades in busy ones.

                ## Milestones
                1. Coursework and exam dates entered beside application deadlines.
                2. Heavy academic weeks marked as no-new-applications weeks.
                3. Applications planned into lighter weeks.
                4. The university careers service told your plan and asked for a review.

                ## Notes
                Your careers service can often check applications and knows which local employers recruit early. Book them before the busy season.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A combined view of academic and application deadlines exists, with protected study weeks and planned application weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Copy every coursework and exam date for the term into the tracker calendar"
                - "Mark the heaviest academic weeks as no-new-applications weeks"
                - "Plan target applications into the lighter weeks"
                - "Book a careers service appointment to review the plan"
            - name: Confidential tracker while still employed
              description: |-
                ## Purpose
                Searching while in a job carries a real risk: a tracker left open on a work laptop or a confirmation email to a work address can end a role early. Keeping the whole search on personal devices and accounts, and planning interviews around work hours, keeps the search private until you choose to resign.

                ## Milestones
                1. The tracker, search email and documents held on personal devices and accounts only.
                2. Any search material on work systems removed.
                3. Profile settings checked so current colleagues are not alerted.
                4. A plan for interview times, such as early mornings or leave.

                ## Notes
                Assume work devices, networks and email are monitored. Avoid listing current colleagues as referees without asking them first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No search material on work systems, with tracker and email on personal accounts and an interview time plan written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Move any search files off work devices and accounts"
                - "Change every portal login email to a personal address"
                - "Check networking profile settings that notify contacts about job changes"
                - "Write how you will cover interview times without lying to your employer"
            - name: Job search activity record for unemployment benefits
              description: |-
                ## Purpose
                After redundancy, many unemployment benefit schemes ask claimants to show evidence of job search activity, and a missing record can delay or reduce payments. Setting the tracker up to produce that evidence, dates, employers, roles and outcomes, makes each check-in quick and stress-free.

                ## Milestones
                1. The scheme's job search evidence requirements checked on the official website.
                2. Tracker columns matching what the scheme asks to see.
                3. Activity recorded every week in the required format.
                4. A printable or exportable summary ready before each appointment.

                ## Notes
                Rules differ widely by country and scheme. Follow the official guidance or your work coach's instructions, not this list.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly job search record in the format the benefit scheme requires, exportable for every appointment."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the official job search evidence rules for your benefit scheme"
                - "Add any columns the scheme requires to the tracker"
                - "Export the week's activity in the required format @recurring(weekly:thu)"
                - "Bring the summary to every appointment with your work coach"
            - name: Parent or carer searching in short windows
              description: |-
                ## Purpose
                Parents and carers often have fifteen minutes at a time, not a free evening, and a search built for long sessions never starts. Splitting the work into tasks that fit a nap time or a school run, logging on the phone and keeping two fixed short sessions a week makes progress possible around care.

                ## Milestones
                1. A list of search tasks that fit in fifteen minutes.
                2. The tracker usable one-handed on a phone.
                3. Two short sessions a week fixed around care routines.
                4. Interview availability written as standard slots to offer recruiters.

                ## Notes
                Being clear early about the hours you can interview saves back-and-forth. You do not have to explain why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two short search sessions a week kept for a month, with interview availability slots written for recruiters."
                cadence: rolling
              tasks:
                - "List search tasks that fit into fifteen minutes"
                - "Set up the tracker so you can log an application on your phone"
                - "Hold two short search sessions around care routines @recurring(weekly:mon,thu)"
                - "Write three standard interview slots you can offer recruiters"
            - name: Cross-border search tracker with time zones
              description: |-
                ## Purpose
                Applying to roles in another country adds time zones, visa questions and different application conventions to every row. Adding columns for country, time zone, work authorisation status and local format makes an overseas search as orderly as a local one.

                ## Milestones
                1. Columns added for country, time zone and work authorisation needed.
                2. Interview times converted and confirmed in both time zones.
                3. Local CV format noted per country.
                4. Overseas results compared with local ones after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker carries country, time zone and work authorisation columns, and every overseas interview is confirmed in both time zones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add country, time zone and work authorisation columns"
                - "Add a world clock for each target country to your phone"
                - "Note the expected CV format for each target country"
                - "Confirm every overseas interview time in writing in both zones"
            - name: Career changer tracking two target fields
              description: |-
                ## Purpose
                People moving into a new field often apply in two directions at once, the new field and a safer step from their current one, and lose track of which is working. Tagging each row by field and comparing results monthly shows whether the change is gaining traction or needs more groundwork first.

                ## Milestones
                1. Every application tagged as new field or current field.
                2. Response rates compared by field after a month.
                3. A share of weekly effort agreed for each field.
                4. A decision point set for when to lean fully into one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two months of applications tagged by field, with response rates compared and a recorded effort split."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a field tag column with new and current values"
                - "Tag every existing application"
                - "Compare response rates by field after a month"
                - "Set a date to decide whether to shift effort"
            - name: Contract and interim role pipeline
              description: |-
                ## Purpose
                Contract and interim roles move faster than permanent hiring, often through agencies, with rates and start dates rather than salaries and notice periods. A separate pipeline view with day rate, length, start date and agency columns suits that rhythm and keeps contract work from cluttering a permanent search.

                ## Milestones
                1. A contract view with day rate, length, start date, location and agency.
                2. Each agency submission logged, with which roles it sent your CV to.
                3. Expected end dates of current contracts tracked so the next search starts in time.
                4. A monthly review of agency activity.

                ## Notes
                Ask agencies to confirm before submitting your CV to any role. Two agencies sending you to the same client can sink the application.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contract pipeline view logs every agency submission with day rate and start date, reviewed monthly."
                cadence: rolling
              tasks:
                - "Add a contract view with day rate, length and start date columns"
                - "Log every agency that holds your CV and the roles it submitted you for"
                - "Review agency submissions and contract end dates @recurring(monthly:10)"
                - "Ask each agency to confirm before submitting you anywhere"
            - name: Tracker data privacy and retention
              description: |-
                ## Purpose
                A tracker holds names, phone numbers and notes about other people, and employers hold your CV and assessment results for months. Setting a retention rule for your own records, and knowing you can usually ask an employer what they hold and to delete it, keeps both sides tidy once a search ends.

                ## Milestones
                1. A retention rule written for contact details and interview notes.
                2. Tracker and folders stored with access limited to you.
                3. Employers or portals you want your data removed from listed.
                4. Deletion or access requests sent where you want them, using the employer's privacy contact.

                ## Notes
                Data protection rights vary by country. Check the employer's privacy notice for how to make a request.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retention rule for the tracker and a list of employers asked to delete or confirm your data."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write how long you will keep contact details and interview notes"
                - "Check sharing settings on the tracker and documents folder"
                - "List employers and portals you want your data removed from"
                - "Review retention and delete what has passed its date @recurring(quarterly)"
            - name: Job search post-mortem report
              description: |-
                ## Purpose
                Once a search ends, the numbers and lessons are fresh for about a month and then fade. A two-page post-mortem covering totals, conversion by stage and channel, timelines and what you would do differently turns this search into a head start on the next.

                ## Milestones
                1. Totals recorded: applications, interviews, offers and weeks taken.
                2. Conversion by stage and by channel calculated.
                3. Three things that worked and three that did not written down.
                4. The report saved beside the archived tracker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page post-mortem with totals, conversion by stage and channel, and three lessons each way, saved with the archive."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the final totals and funnel numbers from the tracker"
                - "Ask the agent to draft a summary of the search from the tracker export"
                - "Write three things that worked and three that did not"
                - "Save the report beside the archived tracker"
            - name: Reusable job search playbook
              description: |-
                ## Purpose
                Most people search for a job every two to five years and start from nothing each time. A short playbook, holding the tracker template, follow-up drafts, timing rules and your best channels, means the next search is running within a day instead of a fortnight.

                ## Milestones
                1. An empty copy of the tracker with columns, stages and views kept.
                2. Follow-up, referral and withdrawal message drafts stored.
                3. Timing rules and best channels written on one page.
                4. The playbook stored where you will find it in three years.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook folder with an empty tracker, message drafts and a one-page rules sheet exists in a durable location."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the tracker and clear all rows while keeping formulas and views"
                - "Collect your best follow-up, referral and withdrawal drafts"
                - "Write timing rules and best channels on one page"
                - "Store the playbook in a durable personal folder"
            - name: Job search accountability group
              description: |-
                ## Purpose
                Searching alone is isolating, and a small group of three to five people sharing weekly numbers keeps everyone moving on the weeks motivation drops. Running the group with a short shared template, applications, interviews, one win and one stuck point, keeps meetings to thirty minutes and private details private.

                ## Milestones
                1. Three to five members recruited from classmates, colleagues or a careers community.
                2. A shared weekly template agreed, with no employer names required.
                3. A fixed thirty-minute weekly meeting.
                4. The group held for at least six weeks.

                ## Notes
                Agree at the start that what is shared stays in the group. Share numbers and stuck points, not other people's details.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A group of three to five people meets weekly for six weeks, each sharing numbers using an agreed template."
                cadence: rolling
              tasks:
                - "Invite two to four people who are also searching"
                - "Agree a short weekly template and a confidentiality rule"
                - "Run the thirty-minute weekly check-in @recurring(weekly:wed)"
                - "Review after six weeks whether to continue"
            - name: Helping someone set up their first tracker
              description: |-
                ## Purpose
                Parents, teachers, mentors and friends who have run a search can save a student or first-time job seeker weeks of chaos by sitting with them for an hour and building a tracker together. Handing over a working setup, not advice, is what gets used.

                ## Milestones
                1. A one-hour session booked with the person you are helping.
                2. Their live applications entered together during the session.
                3. A weekly review time agreed by them, not for them.
                4. A check-in held two weeks later.

                ## Notes
                Let them own the tracker and the decisions. Your role is the setup and one check-in, not managing their search.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The person you helped has a working tracker with their live applications entered and a self-chosen weekly review time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Offer a one-hour tracker setup session"
                - "Bring an empty copy of your own tracker to share"
                - "Enter their live applications together"
                - "Book a fifteen-minute check-in two weeks later"
---

# Job Application Tracker

Job Application Tracker is for anyone running an active search, from a student sending first applications between lectures to an experienced hire juggling six processes at once. It starts with foundations (choosing the tool, defining stages, importing what is already live, a document folder and a contact log), then the weekly machinery of reviews, follow-ups and closing dates, the skills of reading your own funnel and spotting fake adverts, decisions about volume, channels and tools, dated moments such as launch week and final-stage weeks, variants for students, people searching while employed, after redundancy or in short caring windows, and finally specialist work on data privacy, post-mortems and running a group search.

What repeats is a Friday pipeline review, a Tuesday follow-up sweep, a short daily inbox check and a Sunday closing-date look-ahead, with monthly funnel numbers, alert pruning, stale-application closing and a tracker backup. The **Job application**, **Metrics log** and **Purchase decision** templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
