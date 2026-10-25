---
id: management-consulting.consulting-application-strategy
name: Consulting Application Strategy
description: "A dated recruiting plan for consulting: a tiered firm and office list, weekly networking, a one-page CV, online test practice and a tracker that keeps every deadline in view."
category: business
version: 1.0.0
tags: [management-consulting, consulting-application-strategy, student, knowledge-worker, recruiting, networking, cv, online-assessments]
author: Aurum Technology
starter_structure:
  templates:
    - job-application
    - resume
    - cover-letter
    - meeting-notes
    - metrics-log
    - person
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consulting Application Strategy
          description: "Planning consulting applications: choosing firms and offices, networking with consultants, tailoring a CV, online tests and the timeline by recruiting season."
          projects:
            - name: Why consulting statement and target profile
              description: |-
                ## Purpose
                Recruiters and consultants ask why consulting in the first conversation, and a vague answer marks you as someone applying to everything. Writing a half-page statement of what draws you, which kind of consulting you want and what you bring settles your firm list, your CV emphasis and your networking pitch before the season starts.

                ## Milestones
                1. A half-page statement naming two or three concrete reasons for consulting, each tied to something you have done.
                2. A one-line description of the consulting you want: strategy, operations, technology, public sector or a specialist niche.
                3. Three strengths you will evidence in every application, written as short phrases.
                4. A 30-second spoken version recorded and played back once.

                ## Notes
                Avoid reasons any applicant could give, such as learning a lot or working with smart people. Tie each reason to an experience only you had.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written half-page consulting motivation statement and a 30-second spoken version exist, each naming at least two reasons backed by personal experience."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List five moments in study or work when you enjoyed solving a messy problem"
                - "Draft a half-page statement on why consulting and which kind"
                - "Pick the three strengths you want every application to prove"
                - "Record a 30-second version on your phone and cut anything generic"
            - name: Map of consulting firm types and tiers
              description: |-
                ## Purpose
                Consulting covers very different employers: the large strategy firms, the Big Four advisory arms, technology and implementation houses, specialist boutiques, economic consultancies and in-house strategy teams. Each hires at different times, through different tests and for different profiles, so a one-page map of who is who stops you applying blind to names you only half know.

                ## Milestones
                1. A one-page map grouping at least 20 firms by type: strategy, Big Four advisory, implementation, boutique, economic and in-house.
                2. For each group, the typical entry route and when it usually recruits noted in a line.
                3. Firms you had not heard of before added to a longlist.
                4. Three groups marked as the ones that fit your motivation statement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page firm map covering at least 20 firms in five or more groups, with three groups marked as your focus."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every consulting firm you can name from memory"
                - "Add firms from your careers service employer list and graduate employer rankings"
                - "Group the firms by type and note each group's usual entry route"
                - "Mark the three groups that fit your motivation statement"
            - name: Recruiting timeline for your track and season
              description: |-
                ## Purpose
                Consulting recruiting runs on fixed seasons, and many firms fill much of their intake from applications that close months before you would expect, often in the autumn for roles starting the following year. Knowing the windows for your track, whether undergraduate, master's, MBA or experienced hire, lets you plan backwards instead of discovering a deadline that passed last week.

                ## Milestones
                1. Opening and closing dates for every firm on your longlist checked on their careers pages and recorded.
                2. Internship, insight programme and full-time windows separated on one calendar.
                3. Rolling-deadline firms flagged, since early applicants often get interview slots first.
                4. A backwards plan with dates for the final CV, the networking peak and test practice.

                ## Notes
                Dates move every year and differ by office. Treat last year's dates as a guide only and recheck each careers page once a month.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar holds verified opening and closing dates for every longlisted firm and office, with a backwards plan of preparation dates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your careers service for last year's consulting deadline list"
                - "Check each firm's careers page for this season's dates by office"
                - "Put every opening and closing date in your calendar with a two-week warning"
                - "Recheck careers pages for changed or new deadlines @recurring(monthly:5)"
            - name: Entry route and eligibility check by firm
              description: |-
                ## Purpose
                Firms run separate routes for interns, graduates, MBA and advanced degree holders and experienced hires, and some limit how often you may apply or which year of study you must be in. Checking eligibility for each firm before you write anything avoids wasted applications and the cool-off periods that can follow a premature one.

                ## Milestones
                1. Each longlisted firm's routes listed, with the one you qualify for marked.
                2. Rules on year of study, graduation date, degree level and right to work noted per firm.
                3. Any limit on applications per season or reapplication waiting period recorded.
                4. Firms where you do not yet qualify moved to a later-year list.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every firm on the longlist has a recorded entry route, eligibility rules and reapplication policy, with ineligible firms moved to a later list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the careers page of your top five firms and find the route for your stage"
                - "Note year-of-study, graduation and right-to-work rules for each firm"
                - "Look for written limits on applying to more than one office or route"
                - "Move firms you cannot yet apply to onto a later-year list"
            - name: Application tracker for firms and offices
              description: |-
                ## Purpose
                By mid-season a serious applicant is handling 10 to 25 firm and office combinations, each with its own deadline, contacts, test and status. One tracker with a row per application, updated the same day anything changes, prevents the double submission, missed test link and forgotten follow-up that cost people offers.

                ## Milestones
                1. A table with one row per firm and office, holding deadline, route, test, contacts, documents sent and status.
                2. Every longlisted application entered with its deadline.
                3. Status values agreed and used consistently, such as researching, networking, submitted, test, interview and outcome.
                4. The tracker updated on every day an application changes.

                ## Notes
                Start from the **Job application** template for any firm that reaches interview, so everything about that firm lives in one place.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker exists with one row per firm and office, each with deadline, route, test, contacts and a current status."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a tracker with columns for firm, office, route, deadline, test, contacts and status"
                - "Enter every firm and office from your longlist"
                - "Agree six status values and use only those"
                - "Add a column for the date of the last action on each row"
            - name: Profile audit against firm screening criteria
              description: |-
                ## Purpose
                Screeners at large firms often spend a minute or two on a CV, looking for academic results, leadership, problem solving and one distinctive achievement. Scoring your own profile against those criteria, honestly and with a consultant's second opinion, shows where the gaps are while there is still time to close them.

                ## Milestones
                1. A score from one to five on academics, leadership, impact, problem solving and distinctiveness, with evidence for each.
                2. A second opinion from a consultant or careers adviser recorded.
                3. The one or two weakest criteria named as priorities.
                4. A decision on whether to apply this season or build the profile first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written self-assessment against five screening criteria, checked by one outside reader, with the weakest areas and an apply-now decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score yourself on the five criteria using only evidence already on your CV"
                - "Ask a consultant or careers adviser to score the same CV"
                - "Compare the two sets of scores and note the biggest gap"
                - "Decide whether the gap can be closed before the main deadlines"
            - name: Transcripts, test scores and documents pack
              description: |-
                ## Purpose
                Application forms ask for grades by module, school results, test scores and sometimes proof of right to work, and hunting for them the night before a deadline leads to errors. A folder of verified documents, with a grading explanation where your system differs from the firm's, makes each application a matter of copying, not searching.

                ## Milestones
                1. Official or unofficial transcripts for every degree saved as PDFs.
                2. School results, such as CSEC and CAPE, A levels or a national equivalent, recorded with grades and years.
                3. Any admissions test scores, such as the GMAT or GRE, saved with the test date.
                4. A one-line explanation of your grading scale ready for firms that ask for a conversion.
                5. Passport and right-to-work documents scanned into the same folder.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds transcripts, school results, test scores, a grading explanation and identity documents, all checked against the originals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your latest transcript from the student portal"
                - "Type out school results with grades and years in one document"
                - "Write a one-line explanation of your degree's grading scale"
                - "Scan your passport and any visa or right-to-work document"
            - name: Weekly time budget for recruiting season
              description: |-
                ## Purpose
                Full-intensity consulting recruiting can take 10 to 15 hours a week on top of study or a job, and people who do not plan for it either burn out or let applications slide. A weekly budget split between networking, applications, tests and interview preparation protects your grades or job performance while keeping the pipeline moving.

                ## Milestones
                1. A weekly hour budget agreed, split across networking, applications, tests and interview preparation.
                2. Fixed recruiting slots blocked in your calendar for the season.
                3. Exam periods, work peaks and holidays marked as light recruiting weeks.
                4. Actual hours compared with the budget each week and the plan adjusted after the first month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly recruiting budget is blocked in your calendar for the season, and planned and actual hours are compared every week."
                cadence: rolling
              tasks:
                - "Write down the hours you can give recruiting each week without hurting grades or work"
                - "Split those hours across networking, applications, tests and interview practice"
                - "Block the recruiting slots in your calendar until the last deadline"
                - "Compare planned and actual recruiting hours @recurring(weekly:sat)"
            - name: LinkedIn profile aligned with the consulting CV
              description: |-
                ## Purpose
                Consultants you contact will usually look you up before replying, and a profile that contradicts your CV or still describes you as a first-year student costs credibility. Bringing the headline, experience entries and education in line with the CV takes an afternoon and makes every outreach message more likely to get an answer.

                ## Milestones
                1. A headline that states your current role or degree and your interest in consulting plainly.
                2. Experience entries matching the dates and titles on your CV.
                3. Two or three quantified achievements in the experience section.
                4. A clear, recent photo and a short about section in place.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your LinkedIn profile matches your CV on dates, titles and key achievements and has a headline naming your consulting interest."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare every date and title on LinkedIn with your CV"
                - "Rewrite the headline to name your degree or role and your consulting interest"
                - "Add two quantified achievements to your most recent role"
                - "Refresh the headline and about section after new roles or results @recurring(quarterly)"
            - name: Weekly networking outreach rhythm
              description: |-
                ## Purpose
                At many firms, a conversation with a current consultant is what turns a CV from one of thousands into one someone remembers, and those conversations come from steady outreach rather than a burst the week before a deadline. A small weekly quota, aimed at people with a real link to you such as alumni, former colleagues or people from your country, builds a network by the time applications open.

                ## Milestones
                1. A weekly target of outreach messages set, typically five.
                2. Messages sent to people with a shared school, employer, country or interest wherever possible.
                3. Reply rate and calls booked counted at the end of each month.
                4. At least one conversation held at each top-tier firm before its deadline.

                ## Notes
                Ask for 15 to 20 minutes of advice, never for a referral, in the first message.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five personalised outreach messages go out each week and every top-tier firm has at least one conversation logged before its deadline."
                cadence: rolling
              tasks:
                - "List ten consultants who share your school, employer or home country"
                - "Send five personalised outreach messages @recurring(weekly:tue)"
                - "Count replies and calls booked from the month @recurring(monthly:3)"
                - "Rewrite your message if the reply rate falls below one in five"
            - name: Contact log and follow-up routine
              description: |-
                ## Purpose
                After twenty conversations, names, offices and what each person suggested start to blur, and a consultant who helped you will notice if you forget. A contact log with the date, what was discussed and the promised next step lets you follow up on time and mention the right detail when you apply.

                ## Milestones
                1. A log holding each contact's name, firm, office, how you met, date of last contact and next step.
                2. Every conversation entered within a day.
                3. Follow-ups sent on the date promised.
                4. Contacts grouped by firm so you can name them on forms that ask who you spoke to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every networking conversation is logged within a day with a dated next step, and no follow-up is more than a week overdue."
                cadence: rolling
              tasks:
                - "Set up a contact log with name, firm, office, source, last contact and next step"
                - "Enter every conversation you have had so far this season"
                - "Check the log for follow-ups due this week @recurring(weekly:fri)"
                - "Note on each firm's tracker row who you spoke to there"
            - name: Weekly application pipeline review
              description: |-
                ## Purpose
                Applications fail quietly: a test link expires, a referral never gets submitted, a deadline moves forward. Twenty minutes each week going through the tracker row by row catches those slips and sets the three actions that matter most for the coming week.

                ## Milestones
                1. A fixed weekly slot for the review in your calendar.
                2. Every tracker row checked for status, deadline and next action.
                3. Three priority actions written for the coming week.
                4. No application lost to an unnoticed deadline or expired link.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker is reviewed every week, each row has a dated next action, and no deadline or test link is missed during the season."
                cadence: rolling
              tasks:
                - "Choose a 20-minute weekly slot for the pipeline review"
                - "Review every tracker row and set its next action @recurring(weekly:sun)"
                - "Write the three actions that matter most this week"
                - "Search your inbox and spam folder for test invitations and recruiter emails"
            - name: Monthly CV refresh with new evidence
              description: |-
                ## Purpose
                A CV written in September is stale by December if you have since led a society event, received a grade or delivered a project at work. Adding new evidence to a master CV once a month, and trimming the weakest line, keeps every tailored version current without a rushed rewrite.

                ## Milestones
                1. A master CV kept, longer than one page, holding every achievement with its numbers.
                2. New achievements added within the month they happen.
                3. The weakest bullet on the one-page version replaced whenever a stronger one appears.
                4. Every version sent to a firm saved with the firm name and date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated master CV is updated each month and a saved copy exists of every version sent to a firm."
                cadence: rolling
              tasks:
                - "Create a master CV file that holds every achievement, not just one page"
                - "Add the month's new results and achievements to the master CV @recurring(monthly:12)"
                - "Swap the weakest bullet on the one-page CV for a stronger one"
                - "Save each version you send with the firm name and date in the file name"
            - name: Firm insights reading for informed conversations
              description: |-
                ## Purpose
                Consultants notice when an applicant has read something the firm published, and a specific question about a recent report beats a generic one about culture. Reading one piece a week from your target firms gives you material for outreach, calls and the why-this-firm box on application forms.

                ## Milestones
                1. A reading list built from the insights pages of your top five firms.
                2. One article or report read each week, with a one-line note and a question it raises.
                3. At least one note per top-tier firm used in a conversation or application.
                4. A short list of each firm's distinctive practices and recent themes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes on at least one recent publication exist for each top-five firm, and each note has been used in a conversation or application."
                cadence: rolling
              tasks:
                - "Bookmark the insights or publications page of your top five firms"
                - "Read one firm article and note a question it raises @recurring(weekly:wed)"
                - "Write a line on what makes each firm's practice areas distinctive"
                - "Use one of your notes in your next networking call"
            - name: Online assessment practice block
              description: |-
                ## Purpose
                Many firms now screen with an online test before any interview, from numerical and verbal reasoning to game-based problem solving, and a weak score can end an application with a strong CV. A weekly timed practice session, with scores logged, builds speed and calm well before the real test link arrives.

                ## Milestones
                1. The current test type for each target firm checked on its careers page and recorded.
                2. One timed practice session completed each week.
                3. Scores and error types logged after each session.
                4. Scores steady at or above your target for three weeks before the first real test.

                ## Notes
                Start from the **Metrics log** template to record scores and timing. Use the practice material firms publish themselves before paying for anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly timed practice scores are logged through the season, and the last three are at or above your target before the first real test."
                cadence: rolling
              tasks:
                - "Check each target firm's careers page for its current test type and record it"
                - "Complete one timed practice test @recurring(weekly:thu)"
                - "Log score, time taken and error types in your practice log"
                - "Review the month's error types and pick one to drill @recurring(monthly:20)"
            - name: Thank-you notes and progress updates to contacts
              description: |-
                ## Purpose
                A short thank-you within a day, and a later note saying you applied or reached interview, is how a single coffee chat becomes someone who puts your name forward. Most applicants send the first and forget the second, which is the one that keeps the contact warm.

                ## Milestones
                1. A thank-you sent within 24 hours of every conversation.
                2. Each thank-you mentions one specific piece of advice and what you did with it.
                3. Contacts told when you apply, reach interview or receive an outcome at their firm.
                4. Updates sent to every advocate before the season ends, whatever the outcome.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every conversation is followed by a thank-you within a day, and every contact at a firm you applied to receives at least one progress update."
                cadence: rolling
              tasks:
                - "Write a short thank-you template you can personalise in five minutes"
                - "Send thank-you notes for any conversation in the past week"
                - "Send progress updates to contacts at firms where your status changed @recurring(monthly:25)"
                - "Tell each contact the outcome at their firm, with thanks"
            - name: Recruiting buddy accountability check-in
              description: |-
                ## Purpose
                Recruiting alone makes it easy to postpone the hard tasks, such as the cold email or the test you are dreading. Pairing with one other applicant for a fixed weekly check-in, where each says what was done and what is next, keeps both of you moving and gives you someone to swap CVs and contacts with.

                ## Milestones
                1. One recruiting partner agreed, ideally applying to overlapping but not identical firms.
                2. A 20-minute weekly check-in held at a fixed time.
                3. Each check-in ending with three written commitments per person.
                4. CVs and outreach messages swapped for review at least twice in the season.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check-in with a recruiting partner happens through the season, each one ending with written commitments from both people."
                cadence: rolling
              tasks:
                - "Ask one classmate or colleague applying to consulting to be your recruiting partner"
                - "Hold the check-in and write three commitments each @recurring(weekly:mon)"
                - "Swap CVs for a line-by-line review"
                - "Share one useful contact or event with your partner each month"
            - name: Advocate and referral tracker
              description: |-
                ## Purpose
                At most firms, a few internal people who know your work carry more weight than many brief chats. Tracking who at each firm would speak for you, how warm the relationship is and whether a referral has actually been submitted shows where you are strong and which offices still have no one in your corner.

                ## Milestones
                1. For each top-tier firm, the people who could vouch for you listed with a warmth score.
                2. At least one warm advocate at each top-tier firm before its deadline, where possible.
                3. Referral submissions confirmed with the referrer rather than assumed.
                4. Firms with no advocate flagged for extra outreach.

                ## Notes
                Start from the **Person** template for each advocate, so your history with them sits in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each top-tier firm has a named advocate or a flagged gap, and every referral is confirmed with the person who submitted it."
                cadence: rolling
              tasks:
                - "List the people at each top-tier firm who know you well enough to vouch for you"
                - "Score each relationship as cold, warm or strong"
                - "Confirm with each referrer that the referral was actually submitted"
                - "Review advocates by firm and flag any gaps @recurring(monthly:8)"
            - name: Rejection log and morale check
              description: |-
                ## Purpose
                Even strong applicants receive more rejections than offers, often with no feedback and sometimes within hours of a test. Logging each outcome with the stage reached and a likely reason turns rejections into data, and a monthly morale check stops one bad week from derailing the rest of the season.

                ## Milestones
                1. Each outcome recorded with firm, stage reached, date and a likely reason.
                2. Feedback requested wherever a firm offers it.
                3. Patterns across outcomes noted, such as repeated test screen-outs or CV rejections.
                4. A monthly check on energy and workload, with the plan adjusted if needed.

                ## Notes
                Talk to someone you trust, or a counsellor, if rejection starts to affect your sleep, study or work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every application outcome is logged with stage and likely reason, and each monthly review records one change made to the plan."
                cadence: rolling
              tasks:
                - "Set up an outcomes log with firm, stage, date and likely reason"
                - "Ask for feedback from any firm that offers it after a rejection"
                - "Look for a pattern across the outcomes so far"
                - "Rate your energy and adjust next month's workload @recurring(monthly:28)"
            - name: One-page consulting CV rebuild
              description: |-
                ## Purpose
                Firms expect a one-page CV in a plain format, with education near the top for students and quantified achievements under every role. Rebuilding yours to that standard, then having two consultants mark it up, is the change that most often moves an applicant from screened out to invited.

                ## Milestones
                1. A one-page CV in a plain, single-column format with consistent dates and fonts.
                2. Every role carrying two to four bullets that start with a verb and include a result.
                3. An interests or additional section that gives an interviewer something to ask about.
                4. Comments from at least two consultants or recent hires worked through.
                5. Spelling and layout checked by someone who has not seen the CV before.

                ## Notes
                Start from the **Resume** template. Follow the local convention on photos and personal details for the office you are applying to.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page CV reviewed by at least two consultants or recent hires, with every role showing quantified results, is saved as the master version."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect three CVs of recent consulting hires from your careers service or contacts"
                - "Rebuild your CV in a one-page, single-column format"
                - "Ask two consultants or recent hires to mark it up"
                - "Work through every comment and note what changed"
            - name: Quantified achievement bullets for each role
              description: |-
                ## Purpose
                Screeners look for evidence that you changed something, and a bullet saying responsible for social media tells them nothing. Rewriting each bullet as action, scale and result, such as grew membership from 40 to 120 in one year, practises the same way of thinking firms test later in interviews.

                ## Milestones
                1. Every bullet on the CV rewritten as action, scale and result.
                2. A number added wherever one honestly exists: money, people, time, percentage or ranking.
                3. Bullets without a defensible result cut or merged.
                4. Each number backed by a short note you could explain in an interview.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every CV bullet states an action and a result, at least two thirds include a number, and each number has a written source note."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Highlight every CV bullet that describes duties rather than results"
                - "Rewrite each highlighted bullet as action, scale and result"
                - "Write a one-line note on where each number comes from"
                - "Ask the agent to flag any bullets that still read as duties"
            - name: Cold emails and LinkedIn messages to consultants
              description: |-
                ## Purpose
                A short, specific message to a stranger gets a reply far more often than a long one that asks for a job. Learning to write a message under 100 words that names the link between you, asks one clear question and offers easy times is a skill that pays off through the season and well beyond it.

                ## Milestones
                1. A message template under 100 words, with slots for the shared link and one specific question.
                2. Three variants drafted for alumni, former colleagues and people with no prior link.
                3. Openings tested across 20 messages and the reply rate of each variant recorded.
                4. The best-performing version saved as your default.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three tested outreach templates under 100 words exist, with reply rates recorded across at least 20 messages."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a first outreach message in under 100 words"
                - "Draft variants for alumni, former colleagues and strangers"
                - "Send 20 messages and record which variant each person received"
                - "Keep the variant with the highest reply rate as your default"
            - name: Coffee chat questions that earn a referral
              description: |-
                ## Purpose
                Most networking calls last 15 to 20 minutes, and an applicant who spends them asking what a typical day looks like learns little and leaves no impression. Preparing questions that show you have done the reading, and closing with a clear, polite ask, turns a chat into advice you can use and sometimes into a referral.

                ## Milestones
                1. A bank of 15 questions grouped into the person's work, the office, the firm's direction and advice on your application.
                2. A 30-second introduction that ends with why you asked to speak to them.
                3. A closing line that asks whether there is anyone else you should speak to.
                4. Notes from each call written up within an hour.

                ## Notes
                Start from the **Meeting notes** template for each call. Never ask anything the careers page already answers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bank of 15 tailored questions and a written introduction exist, and notes from at least five calls are on file."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write 15 questions that the careers page cannot answer"
                - "Practise a 30-second introduction out loud"
                - "End each call by asking who else you should speak to"
                - "Write up notes within an hour of each call"
            - name: Cover letters tailored to each firm
              description: |-
                ## Purpose
                Some firms and offices still ask for a cover letter or motivation statement, and a letter that could go to any firm tells the reader you did not care enough to tailor it. A tight one-page letter with a firm-specific paragraph naming the people you met and the work that interests you takes about an hour per firm once the core is written.

                ## Milestones
                1. A core letter under one page with your motivation and three strengths.
                2. A firm-specific paragraph for each application naming conversations and practice areas.
                3. Each letter read aloud and checked for the right firm name throughout.
                4. All versions saved alongside the CV sent with them.

                ## Notes
                Start from the **Cover letter** template. A wrong firm name left in from another letter is the most common and most damaging error.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tailored cover letter exists for every firm that asks for one, each with a firm-specific paragraph and checked firm names."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a core letter with your motivation and three strengths"
                - "Write a firm-specific paragraph for your first application"
                - "Search each letter for every other firm's name before sending"
                - "Save each letter with the CV version it went with"
            - name: Numerical and verbal reasoning test technique
              description: |-
                ## Purpose
                Reasoning tests reward method more than raw talent: reading the question before the data, estimating before calculating and moving on from a question that is eating the clock. Learning those habits on a few practice papers is often the difference between running out of time and finishing with a margin.

                ## Milestones
                1. The test format for each firm noted, including whether a calculator is allowed.
                2. A personal method written for chart and table questions and for true, false or cannot say questions.
                3. Three full timed practice tests completed with the method.
                4. Accuracy and finishing time both better than on the first attempt.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three timed reasoning tests are completed with a written method, with accuracy and finishing time both better than the first attempt."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Take one untimed practice test to see the question types"
                - "Write a three-step method for data interpretation questions"
                - "Sit three full practice tests under real timing"
                - "Compare the first and last scores for accuracy and time"
            - name: Game-based and situational judgement test familiarisation
              description: |-
                ## Purpose
                Some firms use game-based problem-solving tasks or situational judgement tests that look nothing like a school exam, and the first attempt is often the real one. Learning what each firm uses, reading its official guidance and trying any practice version it offers removes the surprise, which is most of what preparation can do for these formats.

                ## Milestones
                1. The assessment type for each target firm confirmed from official sources.
                2. Official guidance and any practice version from each firm read or completed.
                3. The firm's rules on calculators, notes and outside help read and noted.
                4. Each firm's assessment type recorded in the tracker.

                ## Notes
                Avoid paid sites that claim to reveal answers. They are often out of date, and firms may treat using them as a breach of their rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For every target firm the assessment type is confirmed from an official source and any official practice version has been tried."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find each firm's official description of its online assessment"
                - "Complete any free practice version the firm provides"
                - "Read the firm's rules on calculators, notes and help from others"
                - "Record each firm's assessment type in the tracker"
            - name: Application form answers and short essays
              description: |-
                ## Purpose
                Many application forms include short questions on motivation, a time you led a team or an achievement you are proud of, often with tight word limits. Drafting a bank of tested answers once, then tailoring them, saves hours per application and stops the last-minute answers that read as rushed.

                ## Milestones
                1. A bank of answers to the ten most common form questions, each within typical word limits.
                2. Each answer built around one specific example with a result.
                3. Answers reviewed by one person who knows consulting recruiting.
                4. Firm-specific edits made and saved for every submitted form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An answer bank covering ten common questions exists, reviewed by one experienced reader, with a saved tailored copy for every submitted form."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect the short questions from three firms' application forms"
                - "Draft one answer per common question around a specific example"
                - "Ask the agent to produce 150-word and 250-word cuts of each answer"
                - "Have someone who knows consulting recruiting review the bank"
            - name: Target firm list in three tiers
              description: |-
                ## Purpose
                Applying to every firm spreads effort thin, but applying only to the three most famous leaves you with nothing if one test goes badly. A list of 10 to 20 applications in three tiers, stretch, core and solid, each chosen for a reason you can state, focuses networking where it matters and gives you real options.

                ## Milestones
                1. A final list of 10 to 20 firm and office applications.
                2. Each placed in a stretch, core or solid tier with a one-line reason.
                3. Networking effort allocated, with most going to stretch and core firms.
                4. The list reviewed with a consultant or careers adviser and agreed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tiered list of 10 to 20 applications, each with a stated reason and agreed with one adviser, is entered in the tracker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist 20 to 30 firms from your firm map"
                - "Score each on fit, your chances and how much you want the offer"
                - "Sort the shortlist into stretch, core and solid tiers"
                - "Review the tiers with a consultant or careers adviser"
            - name: Office choice by location, language and visa
              description: |-
                ## Purpose
                Within one firm, offices differ in intake size, industry mix, language requirements and how much they travel, and the same CV can have very different odds in two cities. Choosing offices on purpose, and checking whether a firm allows applications to more than one, matters as much as choosing the firm.

                ## Milestones
                1. Two or three candidate offices per target firm compared on intake size, industries, languages and travel.
                2. Visa and right-to-work position checked for each office's country.
                3. The firm's rule on applying to several offices confirmed.
                4. One primary office chosen per firm, with a reason you can give in an interview.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary office is recorded for each target firm, with the visa position, language needs and multi-office rule checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a consultant at your top firm how its offices differ in intake and industries"
                - "Note the language and travel expectations of each candidate office"
                - "Check the firm's rule on applying to more than one office"
                - "Record a primary office per firm with a one-line reason"
            - name: Generalist or specialist practice entry decision
              description: |-
                ## Purpose
                Many firms hire generalists into a broad pool, but also hire into practices such as digital, analytics, healthcare, public sector or implementation, sometimes through separate routes and tests. Deciding whether to apply as a generalist or into a specialist track, firm by firm, changes your CV emphasis and who you should network with.

                ## Milestones
                1. Specialist routes at each target firm listed with their entry requirements.
                2. Your background matched to any specialist track where it gives a real advantage.
                3. A decision per firm: generalist, specialist or both where allowed.
                4. CV and networking adjusted to the chosen route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each target firm has a recorded choice of generalist or specialist route, with the matching CV version and contacts adjusted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the specialist routes each target firm advertises"
                - "Mark tracks where your degree or work gives you a clear edge"
                - "Ask one specialist-track consultant how their route differed"
                - "Record the route you will apply through at each firm"
            - name: Apply now, after work experience or after an MBA
              description: |-
                ## Purpose
                Some people are better placed applying straight from university, others after two or three years of work or through an MBA, and the wrong timing can mean a rejection followed by a cool-off period. Weighing your current profile, money, visa position and what your target firms actually hire for gives you a timing decision you can defend.

                ## Milestones
                1. Three options written out: apply this season, apply as an experienced hire later, or apply through an MBA.
                2. Each option assessed for chances, cost, time and visa implications.
                3. Two consultants who took different routes asked for their view.
                4. A timing decision recorded with the conditions that would change it.

                ## Notes
                An MBA is a large financial commitment. Treat the cost side as a question for your own budget and, if needed, a qualified adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three timing options and a recorded decision exist, informed by two consultants who took different routes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write out the three timing options in one table"
                - "Note chances, cost, time and visa effects for each option"
                - "Speak to one consultant who joined from university and one who joined later"
                - "Record your decision and what would make you revisit it"
            - name: Plan to offset a weak spot in your profile
              description: |-
                ## Purpose
                Lower grades, a less known university or thin leadership experience does not have to end your chances, but each needs a deliberate counterweight. Picking the one weakness a screener will notice first and building specific evidence against it, such as a strong test score, a case competition result or a project with a measured outcome, gives your CV a reason to survive the first read.

                ## Milestones
                1. The single weakest point in your profile named from the profile audit.
                2. One or two concrete actions chosen that produce evidence against it.
                3. Those actions dated so the evidence exists before the main deadlines.
                4. The new evidence placed where a screener sees it in the first seconds.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one new piece of evidence addressing your named weak spot is on your CV before the main deadlines."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Name the weak spot a screener would notice first"
                - "Choose one action that produces evidence against it, such as a case competition"
                - "Set dates so the result exists before the main deadlines"
                - "Review progress on the offset plan @recurring(monthly:10)"
            - name: Early-identification and diversity programme choices
              description: |-
                ## Purpose
                Beyond the main graduate route, many firms run early-identification schemes and programmes for under-represented groups, women, first-generation students and others, and some lead to fast-tracked interviews. Finding the ones you are eligible for, and choosing those worth the time, can be the best way into a firm, especially from a less targeted university.

                ## Milestones
                1. Early-identification and diversity programmes at target firms listed with eligibility and deadlines.
                2. Programmes you are eligible for shortlisted.
                3. Applications submitted to the shortlisted programmes before their deadlines.
                4. Any fast-track or interview link that follows recorded in the tracker.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Eligible early-identification and diversity programmes are listed, and applications to the shortlisted ones are submitted before their deadlines."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search each target firm's careers site for early-identification and diversity programmes"
                - "Note eligibility and deadlines for each programme"
                - "Shortlist the programmes you qualify for and want"
                - "Add each shortlisted programme to the tracker with its deadline"
            - name: When and whom to ask for a referral
              description: |-
                ## Purpose
                Referrals from someone who barely knows you add little, while one from a consultant who has spoken to you twice and read your CV can get you a closer look. Deciding who to ask, when in the season, and how to make it easy for them protects relationships and makes the referrals you get count.

                ## Milestones
                1. The referral process at each target firm understood: a formal system, an email to recruiting or none.
                2. One or two potential referrers per firm chosen from your advocate tracker.
                3. Requests sent at least two weeks before deadlines, with your CV and a three-line summary attached.
                4. Each referrer thanked and told the outcome.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Referral requests to chosen advocates go out at least two weeks before each deadline, and each referrer is thanked and told the outcome."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a contact how referrals actually work at their firm"
                - "Choose the best-placed referrer per firm from your advocate list"
                - "Write a three-line summary of yourself to send with the request"
                - "Send referral requests two weeks before each deadline"
            - name: Juggling timelines across firms and asking to expedite
              description: |-
                ## Purpose
                Offers and interview invitations rarely arrive in the order you want, and an offer from a solid-tier firm with a short deadline can land before your stretch firm has interviewed you. Knowing how to tell other firms politely about an existing offer, and when to ask them to bring your process forward, keeps options open without burning goodwill.

                ## Milestones
                1. Each firm's usual time from application to final round noted.
                2. A short, honest message drafted to tell a firm about an offer with a deadline.
                3. A rule decided for when to ask for an extension and when to ask for an expedited process.
                4. Any decision made against a deadline recorded with the reasons.

                ## Notes
                Never invent an offer or a deadline to speed a process up. If discovered, it can end the application and follow you to the next one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written expedite message and a decision rule exist before the first offer arrives, and every offer decision is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note from contacts how long each firm's process usually takes"
                - "Draft a polite message telling a firm you hold an offer with a deadline"
                - "Decide in advance when you would ask for an extension instead"
                - "Record each offer, its deadline and your decision"
            - name: Campus presentation and info session plan
              description: |-
                ## Purpose
                Firms send consultants and recruiters to campus and online sessions early in the season, and the people you meet there are often the ones who later read CVs from your university. Choosing which sessions to attend, preparing one good question per firm and leaving with a name to follow up makes an evening of talks worth the time.

                ## Milestones
                1. Sessions for your target firms in your calendar.
                2. One researched question prepared for each session.
                3. At least one name and contact detail gathered at each session.
                4. Follow-up messages sent within two days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend sessions for each top-tier firm that runs one, gather at least one contact at each and send follow-ups within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the campus and online session dates for your target firms"
                - "Read the firm's latest insight piece before each session and prepare a question on it"
                - "Ask a presenter for their name and best contact at the end of each session"
                - "Send follow-up messages within two days"
            - name: Career fair visit with a firm-by-firm plan
              description: |-
                ## Purpose
                Career fairs give you a few minutes at each stand, and most students spend them asking what the firm does. Going in with a route, a 30-second introduction and one question per firm, and leaving with names rather than brochures, makes the fair a networking event rather than a queue.

                ## Milestones
                1. The list of attending consulting firms and their stand locations checked.
                2. A route that reaches top-tier firms first, while their consultants are fresh.
                3. A 30-second introduction and one question per firm ready.
                4. Names and next steps written down straight after each stand.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You visit every target firm's stand at the fair and leave with at least one named contact and next step per firm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which consulting firms are attending and where their stands are"
                - "Plan a route that reaches your top firms first"
                - "Print a few copies of your current one-page CV in case a recruiter asks"
                - "Write names and next steps down right after each conversation"
            - name: Insight week or first-year programme application
              description: |-
                ## Purpose
                Insight weeks, spring programmes and similar short schemes, mostly for students one or two years before graduation, are a common way in at some firms and can lead straight to an internship interview. Applying deliberately, with the same care as a full application, uses an early year that many students waste.

                ## Milestones
                1. Programmes at target firms for your year of study listed with deadlines.
                2. Applications submitted for at least three programmes.
                3. Preparation for any interviews or tests done in good time.
                4. Contacts and lessons from any programme attended added to your log.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Applications to at least three insight or first-year programmes are submitted on time and every outcome is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List insight and first-year programmes your year of study can apply to"
                - "Tailor your CV for an early-career programme"
                - "Submit at least three programme applications before their deadlines"
                - "Add contacts from any programme you attend to your log"
            - name: Main deadline submission week
              description: |-
                ## Purpose
                Most applicants submit several major applications within a few weeks, and the last days before a deadline are when firm names get mixed up, the wrong CV is attached and test links are missed. Treating submission week as a planned event, with every document final a week early and a checklist for each form, avoids the errors no one gets to correct.

                ## Milestones
                1. CV, cover letters and form answers final at least seven days before the first main deadline.
                2. A checklist per application covering documents, office, route and any referrer named.
                3. Each application submitted at least 48 hours before its deadline.
                4. Confirmation emails saved and test invitations tracked.

                ## Notes
                Many firms review applications as they arrive, so submitting early is usually better than submitting on the day.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every main-season application is submitted at least 48 hours before its deadline, with a confirmation saved for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set your own deadline seven days before the first real one"
                - "Write a submission checklist for documents, office, route and referrer"
                - "Submit each application 48 hours early and save the confirmation"
                - "Check your spam folder every day of submission week for test invitations"
            - name: Online assessment sitting day set-up
              description: |-
                ## Purpose
                Test invitations often give only a few days to a week to complete the assessment, and some allow a single attempt. Choosing the time of day when you think best, setting up a quiet room with a reliable connection and warming up beforehand protects a result that can decide the whole application.

                ## Milestones
                1. Each test taken within its window, at a planned time.
                2. A quiet room, charged laptop, reliable connection and permitted materials ready.
                3. A 15-minute warm-up done before each attempt.
                4. Any technical problem reported to the firm straight away, with screenshots.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every online assessment is completed within its window in a prepared setting, with any technical issue reported in writing the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a quiet room or time slot as soon as each test invitation arrives"
                - "Check the firm's technical requirements on the device you will use"
                - "Do a 15-minute warm-up on practice questions first"
                - "Email the firm with screenshots if anything goes wrong"
            - name: Experienced hire application from industry
              description: |-
                ## Purpose
                Professionals with three to ten years in industry usually apply through an experienced hire route, where the question is less about grades and more about what your expertise adds to a practice. Framing your background around a practice area, reaching managers or partners in it and applying when they have demand gives you a far better chance than the graduate pool.

                ## Milestones
                1. Two or three practices identified where your industry experience is directly relevant.
                2. A CV rewritten to lead with sector knowledge and measurable results.
                3. Conversations held with at least one manager or partner in each chosen practice.
                4. Applications submitted through experienced hire routes at the right level.

                ## Notes
                Ask early about the level you would join at. Coming in a level too low is common and slow to correct later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Experienced hire applications go to at least three practices where your sector experience is relevant, each after a conversation with someone in that practice."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the practices where your industry knowledge is directly useful"
                - "Rewrite your CV to lead with sector expertise and results"
                - "Ask a former colleague now in consulting to introduce you to a practice leader"
                - "Ask each contact what level someone with your experience usually joins at"
            - name: PhD, doctor or engineer applying through advanced degree routes
              description: |-
                ## Purpose
                Several large firms run separate recruiting for PhDs, medical doctors, lawyers and other advanced professional degree holders, with their own events, timelines and sometimes a short introductory business programme. Using that route, and translating research or clinical work into consulting language, avoids competing in a pool built for business students.

                ## Milestones
                1. Firms with advanced degree routes identified, with eligibility and timing.
                2. Research or clinical achievements rewritten as problems solved and results delivered.
                3. Any firm-run introductory programme for advanced degree holders applied to.
                4. At least two conversations held with consultants who joined from your field.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Applications through advanced degree routes go to every eligible target firm, with a CV that states research or clinical work as results."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Search target firms' careers sites for advanced degree programmes"
                - "Rewrite your thesis or clinical work as problem, approach and result"
                - "Find two consultants who joined from your field through alumni or LinkedIn"
                - "Apply to any introductory programme for advanced degree holders"
            - name: International applicant and visa sponsorship
              description: |-
                ## Purpose
                Applying to an office outside your home country raises questions recruiters may screen on early: whether the firm sponsors visas at your level, whether you need a local language and how your degree is read. Getting clear answers before you apply avoids an offer you cannot take up and points you at offices that actually hire people in your position.

                ## Milestones
                1. Each target office's stated position on visa sponsorship checked and recorded.
                2. Consultants from your country or region found in each target office.
                3. Your degree and grades explained in terms the office recognises.
                4. Immigration questions taken to the official government source or a qualified immigration adviser.

                ## Notes
                Immigration rules change often. Check the official government site of the country concerned and do not rely on forum posts or older contacts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every target office outside your home country has a recorded sponsorship position from an official or firm source, and you have spoken to one consultant there who made a similar move."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check each target office's careers page for its visa sponsorship position"
                - "Find one consultant from your country in each target office"
                - "Write a line explaining your degree for recruiters abroad"
                - "List immigration questions to check on the official government site"
            - name: Applying from a market with no local office
              description: |-
                ## Purpose
                Applicants in smaller markets, including much of the Caribbean, often find the nearest office of a large firm is in another country, so campus events and coffee chats are hard to come by. A plan built on virtual events, alumni from your school or country already in those offices, and regional or development-sector consultancies nearer home makes up for the distance.

                ## Milestones
                1. The overseas offices that recruit people from your country or region identified.
                2. Alumni from your school or country in those offices listed and contacted.
                3. Virtual events from target firms attended across the season.
                4. Regional and development-sector consultancies nearer home added to the target list where they fit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A target list covering overseas offices and regional firms exists, with at least five contacts from your school or country and three virtual events attended."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search LinkedIn for consultants from your school or country in overseas offices"
                - "Register for virtual recruiting events run by your target firms"
                - "Attend one virtual recruiting event @recurring(monthly:18)"
                - "Add regional consultancies to your firm map where they fit your goals"
            - name: MBA pre-arrival consulting recruiting plan
              description: |-
                ## Purpose
                At many business schools, consulting recruiting for summer internships starts within weeks of the first term, leaving little room once classes begin. Using the months before arrival to put your CV in the school's format, map alumni at target firms and decide on offices puts you ahead before the first campus event.

                ## Milestones
                1. CV converted to the school's required format before term starts.
                2. Alumni at target firms and offices listed from the school's directory.
                3. A shortlist of firms and offices ready for the first week of term.
                4. Consulting club membership and its key dates confirmed.

                ## Notes
                Check the careers office's rules on contacting firms before term. Some schools ask students to wait for the official start.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before term begins, your CV is in the school's format, an alumni list for target firms exists and a shortlist of firms and offices is ready."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the school's careers office for its CV template and pre-term guidance"
                - "Convert your CV to the school's format"
                - "List alumni at target firms from the school's directory"
                - "Join the consulting club and note its key dates"
            - name: Reapplying after a rejection or cool-off period
              description: |-
                ## Purpose
                Rejected candidates are often asked to wait a set period, commonly a year or more, before applying to the same firm again, and a second application with the same CV usually meets the same result. Using the gap to find out what went wrong and build visibly new evidence makes a reapplication worth making.

                ## Milestones
                1. The firm's reapplication rule and earliest date confirmed.
                2. The stage you reached and any feedback written down.
                3. Two or three new achievements or skills gained in the gap.
                4. Contacts at the firm told you plan to reapply and asked what would make a difference.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reapplication is submitted no earlier than the firm allows, with at least two pieces of new evidence on the CV and feedback from the first attempt addressed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the firm's waiting period before you can reapply"
                - "Write down the stage you reached and any feedback you were given"
                - "Pick two concrete things to add to your profile before reapplying"
                - "Tell a contact at the firm you plan to reapply and ask their advice"
            - name: Recruiting discreetly while employed
              description: |-
                ## Purpose
                Professionals moving into consulting have to network, sit tests and attend interviews without alerting their employer or letting their work slip. A plan for when to take calls, how to handle references and what you will say if asked keeps your current job safe while you look.

                ## Milestones
                1. Recruiting calls and tests scheduled outside working hours or on leave.
                2. LinkedIn settings checked so any open-to-work signal is visible only to recruiters, if at all.
                3. References lined up who will not be contacted until you agree.
                4. Your employment contract checked for the notice period and any restrictions.

                ## Notes
                Questions about restrictive clauses in your contract are for an employment lawyer, not a recruiter.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All recruiting activity is scheduled outside working hours, references are agreed in advance and your notice period is confirmed from your contract."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your contract for the notice period and any restrictive clauses"
                - "Change LinkedIn settings so recruiter signals are not public"
                - "Block early-morning or lunchtime slots for recruiting calls"
                - "Ask two referees outside your current team to be ready when needed"
            - name: Off-cycle applications to boutiques and specialist firms
              description: |-
                ## Purpose
                Boutiques and specialist consultancies often hire when a project is won rather than on a fixed season, and their roles may never reach a careers fair. Watching for openings, approaching partners directly with a short note on why their niche, and being ready to interview quickly can produce offers after the main season has closed.

                ## Milestones
                1. A list of 10 to 15 boutiques and specialist firms in sectors you know.
                2. A direct note sent to a partner or founder at each, with a specific reason for their niche.
                3. Their careers pages and announcements watched for openings.
                4. CV and a short writing sample ready to send within a day of any opening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Direct notes have gone to partners at 10 or more boutiques, openings are checked every month and a CV is ready to send the same day."
                cadence: rolling
              tasks:
                - "List 10 to 15 boutiques in sectors where you have real knowledge"
                - "Write a short note to each founder or partner on why their niche"
                - "Check boutique careers pages and news for openings @recurring(monthly:15)"
                - "Keep a two-page writing sample ready to send with your CV"
            - name: Alumni network map for target offices
              description: |-
                ## Purpose
                Alumni from your school, previous employer or home country are the people most likely to answer a stranger's message, yet most applicants find them one at a time. Mapping alumni across your target offices, by firm, level and practice, shows where you have natural ways in and where you need to work harder.

                ## Milestones
                1. Alumni from your school and employer found in every target office.
                2. Each recorded with firm, office, level and practice.
                3. Offices with no alumni flagged for other outreach routes.
                4. The map updated as new alumni join firms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An alumni map covers every target office, with level and practice for each person and offices without alumni flagged."
                cadence: rolling
              tasks:
                - "Search your school's alumni directory for each target firm"
                - "Record each alum's firm, office, level and practice"
                - "Flag offices where you have no alumni at all"
                - "Add newly hired alumni to the map @recurring(monthly:22)"
            - name: Recruiting season retrospective and advice for next year
              description: |-
                ## Purpose
                When the season ends, the details of what worked fade quickly, and the next cohort from your school or team will repeat the same mistakes. Writing a short retrospective, with your timeline, outcomes, what you would change and the contacts worth passing on with their permission, sharpens your own plan if you reapply and gives others a head start.

                ## Milestones
                1. A two-page retrospective covering timeline, outcomes by stage and lessons.
                2. The three changes you would make next time written as instructions.
                3. Advice notes shared with your careers service or consulting club.
                4. Two or three younger applicants offered a call.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written retrospective with outcomes and three lessons exists and has been shared with a careers service, club or at least two younger applicants."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the outcomes log and tracker into one timeline"
                - "Write the three changes you would make next time"
                - "Share the retrospective with your careers service or consulting club"
                - "Offer a 20-minute call to two applicants in the year below"
---

# Consulting Application Strategy

This area is the plan behind getting a consulting interview: which firms and offices to target, when each one recruits, who to talk to and what to send. It is written for students heading into their first recruiting season and for professionals moving across from industry, and it runs from foundations (a firm map, the season timeline, eligibility and a tracker), through the weekly networking and test practice machinery, CV, outreach and form-writing skills, the big choices on firms, offices and timing, the dated events of the season, versions for experienced hires, advanced degree holders and international applicants, and finally off-cycle, alumni and retrospective work.

What repeats is outreach on Tuesdays, test practice on Thursdays, a weekly buddy check-in and a Sunday pipeline review, with monthly checks on deadlines, the master CV, advocates, contact updates and morale. The Job application, Resume, Cover letter, Meeting notes, Metrics log and Person templates pair with the projects that name them. Case interview practice, case maths and fit stories have their own areas; this one gets you into the room. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
