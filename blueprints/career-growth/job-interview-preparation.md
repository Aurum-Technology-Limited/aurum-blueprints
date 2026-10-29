---
id: career-growth.job-interview-preparation
name: Job Interview Preparation
description: "Company research, a bank of tested stories, mock interviews and debriefs, technical and case practice, and a plan for every round from the recruiter screen to the final on-site."
category: personal
version: 1.0.0
tags: [career-growth, job-interview-preparation, everyone, student, engineer, behavioural-interviews, coding-interviews, mock-interviews]
author: Aurum Technology
starter_structure:
  templates:
    - job-application
    - meeting-notes
    - portfolio-piece
  pillars:
    - name: Career Growth
      emoji: "🧭"
      description: "A working life steered rather than drifted: job searches and promotions, reputation and network, pay negotiations, career changes, credentials, and the evidence that you are getting better at what you do."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Job Interview Preparation
          description: "Preparing for interviews with company research, structured answers, case studies, technical practice and thoughtful questions."
          projects:
            - name: Interview readiness audit and target role brief
              description: |-
                ## Purpose
                Most people start preparing the night before, for whichever interview landed first, and discover too late that they cannot explain why they want the job. A one-page brief naming the roles you are targeting, the three strengths you want every interviewer to remember and the questions you dread gives every later project a direction.

                ## Milestones
                1. A one-page brief naming up to three target role titles and the level you are aiming for.
                2. Three strengths written as short claims you can back with evidence.
                3. A list of the five questions you most fear being asked.
                4. An honest rating from one to five of your current readiness for behavioural, technical and motivation questions.

                ## Notes
                Keep the brief to one page. If it needs more, you are still deciding which job you want, and that decision comes before interview practice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page brief exists with target roles, three evidenced strengths, five feared questions and a readiness rating."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the role titles and level you are interviewing for"
                - "Pick three strengths and note one piece of evidence for each"
                - "List the five interview questions you would least like to answer"
                - "Rate your readiness for behavioural, technical and motivation questions"
            - name: Decoding the job description into likely questions
              description: |-
                ## Purpose
                Interviewers usually build their questions straight from the job description and the scorecard behind it, so the advert is the closest thing to an exam paper you will get. Breaking it into requirements and turning each into the question it implies tells you which stories you need and which gaps you must address before the day.

                ## Milestones
                1. Every requirement in the advert listed separately and marked essential or desirable.
                2. Each requirement rewritten as at least one likely interview question.
                3. A story or example matched to each essential requirement.
                4. The two weakest matches flagged with a plan for how you will answer them.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table maps every essential requirement in the advert to a likely question and a matched example, with the weakest two flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the job description into a document and split it into single requirements"
                - "Ask the agent to turn each requirement into two likely interview questions"
                - "Match one of your examples to each essential requirement"
                - "Mark the two requirements where your evidence is thinnest"
            - name: Company research dossier for each interview
              description: |-
                ## Purpose
                Interviewers can tell within a minute whether a candidate has read only the homepage. A short dossier per company covering what it sells, how it makes money, recent news, competitors and the people you will meet lets you tailor answers and ask questions nobody else asks.

                ## Milestones
                1. A dossier with the business model, main products and customers in plain words.
                2. Three recent news items or announcements noted with dates.
                3. Two or three competitors named with one difference each.
                4. Each interviewer's role and background summarised from public profiles.
                5. Three points you will mention in the interview linked to your own experience.

                ## Notes
                Start from the **Job application** template. Annual reports, earnings calls, engineering blogs and the company's own job adverts often say more than its marketing pages.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dossier for the company exists with business model, three dated news items, competitors, interviewer notes and three talking points."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the company's latest annual report or investor page summary"
                - "Note three recent news items with their dates"
                - "Look up each named interviewer's role and background"
                - "Write three talking points that link the company to your experience"
            - name: Mapping the interview process and format
              description: |-
                ## Purpose
                Knowing there are four rounds, a case study in round two and a panel of three lets you walk in far calmer than a candidate who is guessing. Most recruiters and coordinators will share the stages, timings and formats if asked politely, and the answers decide where your preparation hours should go.

                ## Milestones
                1. The number of stages, their order and the expected timeline written down.
                2. The format of each stage noted: phone, video, in person, panel, technical, case or presentation.
                3. Names or roles of the interviewers for the next stage recorded.
                4. Preparation hours allocated to each stage according to its format.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of every interview stage with format, interviewers and timeline, confirmed by the recruiter or coordinator."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Email the recruiter asking for the stages, formats and timeline"
                - "Search candidate review sites for accounts of this company's process"
                - "Write the stage map with formats and interviewer roles"
                - "Split your available preparation hours across the stages"
            - name: Bank of ten STAR stories from your own work
              description: |-
                ## Purpose
                Behavioural questions all draw on the same handful of situations: a hard problem, a conflict, a failure, a deadline, leading without authority. Ten well-chosen stories, each written in Situation, Task, Action, Result form with a real number in the result, can answer most of them with a small change of emphasis.

                ## Milestones
                1. Ten stories chosen covering achievement, failure, conflict, leadership, pressure and learning.
                2. Each story written in STAR form in under 200 words.
                3. A measurable result or concrete outcome stated for every story.
                4. A grid showing which common questions each story can answer.
                5. Every story spoken aloud at least once in under two minutes.

                ## Notes
                Weight the Action part most heavily and use I, not we. Interviewers are assessing what you did, not what the team did.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten written STAR stories with stated results and a question grid, each rehearsed aloud in under two minutes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List twenty work moments you are proud of or learned from"
                - "Pick ten that cover failure, conflict, leadership, pressure and success"
                - "Write each chosen story in STAR form with a measurable result"
                - "Build a grid matching stories to the common behavioural questions"
            - name: Two-minute answer to tell me about yourself
              description: |-
                ## Purpose
                Nearly every interview opens with some version of tell me about yourself, and a rambling first answer colours the next forty minutes. A rehearsed two-minute arc of present role, the path that led here and why this job is the logical next step sets the tone and steers the interviewer toward your strongest material.

                ## Milestones
                1. A written answer in three parts: now, how you got here, why this role.
                2. The answer timed at between 90 seconds and two minutes when spoken.
                3. Two hooks planted that invite follow-up questions on your best stories.
                4. A shorter 30-second version ready for phone screens.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written and timed two-minute introduction plus a 30-second version, each rehearsed aloud five times."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft your introduction in three parts: now, path, why this role"
                - "Read it aloud with a timer and cut it to under two minutes"
                - "Add two hooks that point toward your strongest stories"
                - "Write a 30-second version for recruiter calls"
            - name: Why this company and why this role answers
              description: |-
                ## Purpose
                Hiring managers reject strong candidates who cannot say why they want this particular job, because it signals they will leave at the first better offer. Writing specific motivation answers for each company, drawn from your dossier and your own goals, turns a generic question into evidence of genuine interest.

                ## Milestones
                1. Three specific reasons for wanting this company, none of which apply to its competitors.
                2. Two reasons for wanting this role tied to your skills and next career step.
                3. An answer to why you are leaving your current job that is honest and positive.
                4. All three answers rehearsed aloud until they sound natural rather than recited.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written motivation answers for the company, the role and your reason for leaving, each passing the test of not fitting a competitor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three reasons you want this company that a rival could not claim"
                - "Link two features of the role to your skills and next step"
                - "Draft a short, positive answer to why you are leaving"
                - "Rehearse all three answers aloud with a friend listening"
            - name: Remote interview setup and technology check
              description: |-
                ## Purpose
                Frozen screens, a backlit face or a laptop microphone picking up the washing machine can cost an interview that the answers had won. Setting up camera height, lighting, sound and a backup connection once, and testing on the platform the company uses, removes a whole category of avoidable failure.

                ## Milestones
                1. Camera at eye level with the light source in front of you, not behind.
                2. A headset or external microphone tested in a recorded call.
                3. Video platforms you are likely to meet installed and signed in.
                4. A backup plan written down: phone hotspot, dial-in number and recruiter contact.

                ## Notes
                Test on the actual platform the day before, not just a general video app, because permissions and updates differ.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recorded test call shows clear face, sound and background, and a written backup plan sits next to the desk."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Raise your laptop so the camera is at eye level"
                - "Record a five-minute test call and watch it back"
                - "Install and test the common video interview platforms"
                - "Write a backup plan with a hotspot, dial-in number and contact"
            - name: Interview day kit and logistics plan
              description: |-
                ## Purpose
                Lateness, a forgotten document or a dead phone battery raise your stress before you have said a word. A written plan for the route, arrival time, clothes, documents and what you eat beforehand, prepared two days out, leaves the morning free for a calm final review.

                ## Milestones
                1. Route planned with travel time plus a 30-minute buffer, or room and kit ready for a remote call.
                2. Clothes chosen to match the company's dress norms and tried on.
                3. A folder with printed CV, notes, questions, identity document if requested and a pen.
                4. The contact name and number for reception or the coordinator saved in your phone.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A checklist covering route, timing, clothes and documents is completed by the evening before the interview."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the route and travel time at the same hour as the interview"
                - "Choose and try on the outfit you will wear"
                - "Pack a folder with CV copies, notes and your questions"
                - "Save the coordinator's name and number in your phone"
            - name: Weekly mock interview with a practice partner
              description: |-
                ## Purpose
                Answers that sound fluent in your head fall apart when a real person interrupts, frowns or asks a follow-up. A standing weekly mock with a friend, colleague or peer, alternating who interviews, builds the habit of thinking aloud under mild pressure long before the real thing.

                ## Milestones
                1. A practice partner agreed and a weekly slot booked.
                2. A shared list of questions to draw from, sorted by type.
                3. Written feedback from each session with one thing to keep and one to change.
                4. At least eight mock sessions completed during an active search.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight or more weekly mock sessions logged, each with one keep and one change noted by the partner."
                cadence: rolling
              tasks:
                - "Ask a friend or peer to swap weekly mock interviews with you"
                - "Agree a shared list of questions sorted by type"
                - "Run a 30-minute mock interview and swap roles halfway @recurring(weekly:tue)"
                - "Write down one thing to keep and one to change after each session"
            - name: Recording and reviewing your practice answers
              description: |-
                ## Purpose
                Filler words, a habit of looking away and answers that run to four minutes are invisible from the inside and obvious on video. Recording three answers a week and watching them back with a simple checklist is the fastest way to hear yourself as an interviewer does.

                ## Milestones
                1. A short review checklist covering length, structure, filler words, eye contact and energy.
                2. Three answers recorded each week on phone or laptop.
                3. A running note of patterns spotted across recordings.
                4. A visible improvement on at least two checklist items after four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of recorded answers reviewed against the checklist, with two items measurably improved."
                cadence: rolling
              tasks:
                - "Write a five-point checklist for reviewing recorded answers"
                - "Record three practice answers and score them against the checklist @recurring(weekly:sat)"
                - "Count filler words in one recording and set a target to halve them"
                - "Note recurring patterns in a single running document"
            - name: Post-interview debrief log
              description: |-
                ## Purpose
                Within a day you will forget most of the questions you were asked and which answers landed. Writing a debrief within two hours of every interview captures the questions, the interviewer's reactions and what you would say differently, which feeds every later round and every later company.

                ## Milestones
                1. A debrief format with questions asked, answers given, reactions and follow-ups promised.
                2. A debrief written within two hours of each interview.
                3. A weekly read-through of the log with patterns noted.
                4. Questions you struggled with moved into your question bank.

                ## Notes
                Start from the **Meeting notes** template. Write the debrief before telling anyone how it went, because retelling changes what you remember.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interview in the search has a debrief written the same day, and the log is reviewed weekly."
                cadence: rolling
              tasks:
                - "Set up a debrief note with sections for questions, reactions and follow-ups"
                - "Write the debrief within two hours of each interview ends"
                - "Read the week's debriefs and note repeated questions @recurring(weekly:fri)"
                - "Move any question you struggled with into the question bank"
            - name: Interview question bank with prepared outlines
              description: |-
                ## Purpose
                The same thirty or forty questions come up across most interviews in a field, along with a few that are specific to your role. A living bank of questions, each with a bullet-point outline rather than a script, means you rehearse the logic of an answer and can adapt it on the spot.

                ## Milestones
                1. A bank of at least 40 questions grouped by behavioural, motivation, role-specific and closing.
                2. A three to five bullet outline written for every question.
                3. Questions from real interviews added from the debrief log.
                4. A monthly pass that retires stale outlines and adds new questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A bank of 40 or more questions with bullet outlines exists and has been updated at least monthly during the search."
                cadence: rolling
              tasks:
                - "Collect 40 common questions for your field into one document"
                - "Write a three to five bullet outline for each question"
                - "Add new questions from debriefs and refresh weak outlines @recurring(monthly:12)"
                - "Practise five random questions from the bank aloud"
            - name: Daily coding practice routine for engineers
              description: |-
                ## Purpose
                Coding interviews reward fluency more than brilliance, and fluency fades within weeks without use. Twenty-five minutes a day on one problem, solved aloud and with tests, plus a weekly timed set under interview conditions, keeps pattern recognition and speaking while coding sharp through a search.

                ## Milestones
                1. A practice platform or problem list chosen and a daily slot fixed.
                2. One problem a day solved while explaining your thinking aloud.
                3. A weekly timed set of two problems in 45 minutes completed.
                4. A log of problems with the pattern used and any you could not solve.

                ## Notes
                Quality beats count. Re-solving a problem you failed a week ago teaches more than three new easy ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty days of logged daily problems and four weekly timed sets completed, with patterns recorded for each."
                cadence: rolling
              tasks:
                - "Choose a problem list and fix a daily 25-minute slot"
                - "Solve one coding problem aloud and log the pattern used @recurring(daily)"
                - "Do a timed set of two problems in 45 minutes @recurring(weekly:sun)"
                - "Re-solve one problem from last week's failed list"
            - name: Industry and company news watch during a search
              description: |-
                ## Purpose
                Expect to be asked what you think about a recent change in their market, a competitor's launch or their own latest results. A short weekly scan of industry news and the companies in your pipeline gives you current, specific things to say and shows you follow the field.

                ## Milestones
                1. Three to five sources chosen for your industry: trade press, newsletters, company blogs.
                2. News alerts set for every company where you have an interview.
                3. A weekly note of two or three developments with your view on each.
                4. One recent development worked into each interview.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly news note exists for every week of the search, and each debrief records one current development discussed."
                cadence: rolling
              tasks:
                - "Pick three to five news sources for your industry"
                - "Set news alerts for each company in your interview pipeline"
                - "Write a weekly note on two or three developments and your view @recurring(weekly:mon)"
                - "Prepare one current-events point for your next interview"
            - name: Quarterly refresh of your interview stories
              description: |-
                ## Purpose
                Stories go stale: the project you led two years ago is weaker evidence than the one you finished last month, and numbers get forgotten. Updating your story bank each quarter, even when not searching, means you are never more than a weekend away from being interview ready.

                ## Milestones
                1. The story bank reviewed against the last three months of work.
                2. At least one new story added or an old one replaced each quarter.
                3. Results updated with the latest figures you can share.
                4. Any story involving confidential details rewritten to be safe to tell.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The story bank carries a last-reviewed date within the past three months and at least one story from that quarter."
                cadence: cyclic
              tasks:
                - "Review the story bank against the last quarter's work @recurring(quarterly)"
                - "Replace the weakest story with a newer, stronger one"
                - "Update results with the latest numbers you can share"
                - "Strip client names and confidential figures from stories"
            - name: Thank-you notes and follow-up after each interview
              description: |-
                ## Purpose
                Sending a brief, specific thank-you within a day rarely wins a job on its own but keeps you memorable and gives a chance to add a point you missed. Tracking what you promised to send and when the company said it would reply also stops a promising process from quietly going cold.

                ## Milestones
                1. A short thank-you template that you personalise for each interviewer.
                2. Notes sent within 24 hours, each referencing something specific from the conversation.
                3. Promised follow-ups such as work samples or references sent on time.
                4. A polite chase sent when the stated decision date passes without word.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interviewer received a personalised note within 24 hours, and every overdue decision was chased once."
                cadence: rolling
              tasks:
                - "Draft a short thank-you template with room for one specific detail"
                - "Send personalised notes to each interviewer within 24 hours"
                - "Check for promised follow-ups and overdue replies @recurring(weekly:thu)"
                - "Send one polite chase when a decision date has passed"
            - name: Pre-interview warm-up and nerves routine
              description: |-
                ## Purpose
                Some nerves sharpen performance, but a racing heart and a blank mind in the first five minutes can sink an otherwise good interview. A fixed warm-up of the same steps before every interview, practised in mocks, gives your body a familiar signal that this is a routine event.

                ## Milestones
                1. A 20-minute warm-up written down: brief movement, slow breathing, saying your introduction aloud.
                2. The warm-up used before every mock interview for two weeks.
                3. A short reset to use mid-interview after a stumble: pause, breathe, ask to restart the answer.
                4. A note after each real interview on how the routine helped.

                ## Notes
                If anxiety is severe or stops you attending interviews, talk to your doctor or a counsellor; this routine is for ordinary nerves.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written warm-up is used before every mock and real interview for a month, with notes after each real one."
                cadence: rolling
              tasks:
                - "Write a 20-minute warm-up with movement, breathing and your opener"
                - "Run the warm-up before a practice session @recurring(weekly:wed)"
                - "Practise a mid-answer reset line until it feels natural"
                - "Note after each interview how calm you felt in the first five minutes"
            - name: Behavioural interview method in depth
              description: |-
                ## Purpose
                Behavioural interviewers are trained to probe past the polished first answer with follow-ups such as what exactly did you say, and what would you do differently. Studying how structured interviews are scored, and practising answers that survive two or three layers of probing, makes your stories credible rather than rehearsed.

                ## Milestones
                1. Notes on how structured interviews and scoring rubrics generally work.
                2. Three likely follow-up probes written for each of your top five stories.
                3. Each top story practised with a partner asking the probes.
                4. A short list of the signals interviewers look for in your field.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your top five stories each have three written probes and have been practised against them with a partner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a guide on how structured interviews are scored"
                - "Write three follow-up probes for each of your top five stories"
                - "Practise one story against its probes with a partner @recurring(weekly:wed)"
                - "List the signals interviewers in your field score most"
            - name: Competency-based interviews and frameworks
              description: |-
                ## Purpose
                Public sector bodies, large employers and graduate programmes often publish the competency framework they interview against, with behaviours described at each level. Mapping your evidence to their exact wording makes it easy for a panel to tick the box and is a skill that transfers to every structured application.

                ## Milestones
                1. The employer's competency framework or behaviours list found and saved.
                2. Each competency at your target level summarised in your own words.
                3. Two examples mapped to every competency in scope.
                4. Answers practised using the framework's own language naturally.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every competency at your target level has two mapped examples and has been practised aloud in the framework's terms."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the employer's published competency or behaviours framework"
                - "Summarise each competency at your target level in one line"
                - "Map two examples to every competency in scope"
                - "Practise three competency answers using the framework's language"
            - name: Answering weakness, failure and conflict questions
              description: |-
                ## Purpose
                Questions about your weaknesses, a time you failed or a colleague you clashed with are where candidates either sound defensive or give a fake weakness that fools no one. Preparing honest answers that show self-awareness and a concrete change in behaviour turns the most uncomfortable minutes into evidence of maturity.

                ## Milestones
                1. One real, relevant weakness chosen with the steps you have taken to address it.
                2. A failure story where the lesson changed what you did next time.
                3. A conflict story that shows you understood the other person's view.
                4. All three answers practised until delivered without blame or apology spirals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three written answers for weakness, failure and conflict, each ending with a specific changed behaviour, rehearsed with a partner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a genuine weakness and list what you have done about it"
                - "Write a failure story that ends with a changed habit"
                - "Write a conflict story that shows the other side's view"
                - "Ask a partner to tell you if any answer sounds like blame"
            - name: Explaining gaps, short stints and redundancy in interviews
              description: |-
                ## Purpose
                Six-month gaps, two short jobs or a redundancy often draw a direct question, and hesitation invites suspicion where none was needed. A short, factual answer for each, followed by a bridge back to what you bring now, closes the topic in under a minute.

                ## Milestones
                1. Every gap or short role on your CV listed with the true reason.
                2. A two to three sentence answer drafted for each, factual and without over-sharing.
                3. A bridge sentence that moves from the explanation to your current strengths.
                4. Each answer rehearsed until it sounds settled rather than defensive.

                ## Notes
                You do not need to disclose health or family details. A brief, true summary such as a period of caring or recovery is enough.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written answer under 60 seconds exists for every gap or short role, ending with a bridge to current strengths."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every gap or short role an interviewer might ask about"
                - "Draft a two to three sentence factual answer for each"
                - "Add a bridge line back to what you offer now"
                - "Rehearse the answers aloud until they take under a minute"
            - name: Case interview fundamentals
              description: |-
                ## Purpose
                Consulting, strategy, product and many analyst roles use case questions: a business problem to structure and solve aloud with the interviewer. Learning the common structures, mental maths and how to lead a case, then practising a set number of live cases, is the only reliable route to sounding natural with them.

                ## Milestones
                1. The main case types understood: profitability, market entry, market sizing, growth and pricing.
                2. A personal approach for structuring a problem into three to five branches.
                3. Mental maths practised for percentages, growth rates and rough estimates.
                4. At least ten live cases practised with a partner, each with written feedback.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten partner-led cases completed with written feedback, and a market sizing answered in under five minutes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read a case interview primer covering the main case types"
                - "Practise ten minutes of mental maths with percentages and estimates"
                - "Solve one market sizing question aloud and time yourself"
                - "Book a live case with a partner and collect written feedback"
            - name: Data structures and algorithms refresher
              description: |-
                ## Purpose
                Many engineers who ship good code every day have not written a graph search or reasoned about time complexity aloud since university. A structured refresher through the core data structures and the dozen problem patterns that recur in coding interviews rebuilds the vocabulary interviewers expect.

                ## Milestones
                1. A topic list covering arrays, hashing, trees, graphs, heaps, recursion and dynamic programming.
                2. Each topic studied with five representative problems solved.
                3. Time and space complexity stated aloud for every solution.
                4. A one-page pattern sheet summarising when each technique applies.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five problems solved per core topic with complexity stated, and a one-page pattern sheet written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a topic list and rate your confidence in each from one to five"
                - "Start with the lowest-rated topic and solve five problems in it"
                - "State time and space complexity aloud after every solution"
                - "Review weak topics and update the pattern sheet @recurring(monthly:5)"
            - name: System design interview preparation
              description: |-
                ## Purpose
                For mid-level and senior engineering roles, the system design round often decides the level you are offered. Practising a repeatable approach, from clarifying requirements and estimating scale to drawing components, choosing data stores and discussing trade-offs, turns an open-ended hour into a conversation you lead.

                ## Milestones
                1. A written approach: requirements, estimates, high-level design, deep parts, trade-offs.
                2. Core building blocks reviewed: load balancing, caching, queues, databases, partitioning and consistency.
                3. Six classic design problems practised end to end on a whiteboard or drawing tool.
                4. At least two designs reviewed by an experienced engineer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six design problems practised in 45-minute sessions using a written approach, two of them reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write your five-step approach to a system design question"
                - "Review caching, queues, partitioning and consistency trade-offs"
                - "Practise one design problem in 45 minutes on a drawing tool @recurring(weekly:sun)"
                - "Ask a senior engineer to review one of your designs"
            - name: Voice, pace and presence on camera and in person
              description: |-
                ## Purpose
                How you speak shapes impressions as much as what you say: rushing, a flat tone or a fixed stare at your notes all read as nerves. Small, practised changes such as slowing down, pausing before answering and looking at the camera lens make the same content land much better.

                ## Milestones
                1. A recording reviewed for speaking pace, pauses and tone.
                2. A habit of a two-second pause before each answer practised in mocks.
                3. Eye contact or camera-lens contact held for most of each answer.
                4. Notes kept to a single card or sticky note rather than read from.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A second recording, two weeks after the first, shows slower pace, deliberate pauses and steady eye contact."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record a five-minute answer and note your speaking pace"
                - "Practise a two-second pause before answering in your next mock"
                - "Put a small marker beside your camera lens as a reminder"
                - "Shrink your interview notes to a single card"
            - name: Sharp questions to ask at the end
              description: |-
                ## Purpose
                Do you have any questions for us is part of the assessment, and asking about holidays or saying no shows little interest. A set of tailored questions about the team's challenges, how success is measured and what the interviewer enjoys tells you whether you want the job and leaves a strong last impression.

                ## Milestones
                1. Ten questions written across role, team, success measures, culture and growth.
                2. Questions tailored for each interviewer type: recruiter, hiring manager, peer, senior leader.
                3. Two questions drawn from the company dossier that only a prepared candidate would ask.
                4. A note of which questions produced the most useful answers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of ten tailored questions exists, with at least two dossier-based questions used in each interview."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write ten questions across role, team, success, culture and growth"
                - "Tailor two or three questions for each interviewer type"
                - "Add two questions drawn from your company dossier"
                - "Record in the debrief which questions got the best answers"
            - name: Fixing your weakest answer type from feedback
              description: |-
                ## Purpose
                After a few interviews, a pattern usually appears: perhaps technical answers are strong but motivation answers are thin, or examples lack results. Choosing the single weakest type from your debriefs and feedback, and working on it deliberately for three weeks, moves your performance more than general practice.

                ## Milestones
                1. Debriefs and feedback reviewed to name the weakest answer type.
                2. Three example answers of that type rewritten.
                3. Three focused practice sessions on that type alone.
                4. A partner's rating of the type compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The weakest answer type is named in writing, practised in three focused sessions and rated higher by a partner afterwards."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your debriefs and name your weakest answer type"
                - "Rewrite three answers of that type with a clear result"
                - "Book three practice sessions on that type alone"
                - "Ask your partner to rate the type before and after"
            - name: Cutting rambling answers to two minutes
              description: |-
                ## Purpose
                Long answers are the most common complaint interviewers make about otherwise capable candidates, because they bury the point and eat into time for other questions. Practising headline first, then evidence, then stop, with a timer, trains you to give a complete answer in about two minutes and let the interviewer ask for more.

                ## Milestones
                1. Your average answer length measured from three recordings.
                2. A headline-first structure written for your ten most common questions.
                3. Weekly timed drills keeping answers between 90 seconds and two minutes.
                4. Average answer length brought under two minutes in recordings.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Recorded answers to ten common questions average under two minutes, measured against a baseline taken at the start."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Time three recorded answers to get your baseline length"
                - "Rewrite ten answers to open with a one-sentence headline"
                - "Run a timed drill of five answers under two minutes each @recurring(weekly:thu)"
                - "Practise ending an answer with a short stop line"
            - name: Choosing mock interview platforms or paid coaching
              description: |-
                ## Purpose
                Peer practice is free but limited, and paid mock services, alumni programmes and interview coaches vary widely in price and quality. Comparing two or three options against what you most need, such as a senior engineer for system design or an industry insider for cases, puts money only where it closes a real gap.

                ## Milestones
                1. The specific gap that outside practice should close written in one sentence.
                2. Two or three options shortlisted, including at least one free or alumni route.
                3. Each option compared on price, interviewer background, format and feedback quality.
                4. A decision recorded with a spending limit, or a decision to stay with peer practice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three practice options ends in a recorded choice and a spending limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the one gap you want outside practice to close"
                - "Check your university careers service or alumni network for free mocks"
                - "Compare three options on price, interviewer background and feedback"
                - "Record your choice and the most you will spend"
            - name: Asking for feedback after a rejection
              description: |-
                ## Purpose
                Many employers give little or no feedback, but a polite, specific request to the recruiter or hiring manager often gets one or two useful lines. Asking every time, logging what you hear and looking for patterns across rejections turns a disappointing email into material for the next interview.

                ## Milestones
                1. A short, gracious feedback request template ready to send.
                2. A request sent within two days of each rejection.
                3. All feedback received logged in one place with the company and stage.
                4. A monthly look for patterns, with one change made in response.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A feedback request was sent after every rejection, and a monthly review recorded at least one change made in response."
                cadence: rolling
              tasks:
                - "Write a short request asking for one or two points of feedback"
                - "Send the request within two days of each rejection"
                - "Log all feedback with company and stage in one document"
                - "Review feedback for patterns and choose one change @recurring(monthly:8)"
            - name: Take-home assignment strategy and write-up
              description: |-
                ## Purpose
                Take-home tasks for engineers, designers, analysts and marketers can quietly swallow a weekend, and an unfinished or over-built submission hurts as much as a weak one. Agreeing the scope, setting a time box, delivering a clean core and writing a short note on decisions and trade-offs shows judgement as well as skill.

                ## Milestones
                1. The brief clarified with the company, including expected time and evaluation criteria.
                2. A time box set and a plan for what is in and out of scope.
                3. A working core solution delivered with tests or checks where relevant.
                4. A one-page write-up of decisions, trade-offs and what you would do with more time.
                5. The submission walked through aloud in preparation for the review call.

                ## Notes
                Start from the **Portfolio piece** template for the write-up. If the task would take far longer than the company suggests, say so politely and agree what to cut.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The assignment is submitted within the agreed time box with a one-page write-up of decisions and trade-offs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Email the company to confirm expected time and evaluation criteria"
                - "Write an in-scope and out-of-scope list before starting"
                - "Build the core solution and stop at the time box"
                - "Write a one-page note on decisions and trade-offs"
            - name: Presentation interview on a set topic
              description: |-
                ## Purpose
                Senior, sales, teaching, research and many graduate roles ask for a ten to twenty minute presentation followed by questions. Building a clear argument for the brief, rehearsing to time and preparing for the toughest questions shows how you think and communicate, which is usually what the exercise is really testing.

                ## Milestones
                1. The brief, time limit, audience and format confirmed.
                2. A presentation built around one main recommendation with three supporting points.
                3. The talk rehearsed at least three times and finishing within the time limit.
                4. Ten likely questions listed with short answers prepared.
                5. A backup copy saved in two places and a printed version available.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A presentation on the brief is rehearsed three times within time, with ten prepared answers and a backup copy."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the brief, time limit, audience and equipment"
                - "Write your one main recommendation and three supporting points"
                - "Rehearse the full talk with a timer three times"
                - "List ten tough questions and draft short answers"
            - name: Psychometric and online assessment practice
              description: |-
                ## Purpose
                Graduate schemes, banks, airlines and many large employers screen with numerical, verbal, logical or situational judgement tests before any interview. These tests reward familiarity with the format and timing, so a few weeks of regular practice under timed conditions can lift scores noticeably.

                ## Milestones
                1. The test types and provider used by your target employers identified.
                2. A free practice test of each type taken to get a baseline.
                3. Weekly timed practice on the weakest test type.
                4. A second set of practice tests showing an improved score or speed.

                ## Notes
                Take the real test in a quiet room at your best time of day, with scrap paper and a calculator if allowed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Baseline and follow-up practice scores are recorded for each relevant test type, with the weakest type improved."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find which test types and providers your target employers use"
                - "Take a free baseline practice test of each type"
                - "Do a timed practice test on your weakest type @recurring(weekly:mon)"
                - "Retake a full practice set and compare with the baseline"
            - name: First-round phone screen with the recruiter
              description: |-
                ## Purpose
                The recruiter screen is short but filters out a large share of candidates, usually on motivation, basic fit, notice period and logistics. Having your 30-second introduction, a clear reason for applying and a calm answer to the practical questions ready means you pass the gate and learn what the hiring manager cares about.

                ## Milestones
                1. Your 30-second introduction and reason for applying rehearsed.
                2. Notice period, availability, location and work authorisation answers written down.
                3. Three questions ready about the process, team and what the hiring manager values.
                4. Notes taken during the call and the next stage confirmed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The screen is completed with notes taken, the next stage and its date confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rehearse your 30-second introduction twice aloud"
                - "Write answers on notice period, location and work authorisation"
                - "Prepare three questions about the process and the hiring manager"
                - "Confirm the next stage and its date by email after the call"
            - name: One-way recorded video interview
              description: |-
                ## Purpose
                Some employers now send recorded video interviews where questions appear on screen and you have a short, fixed time to think and answer, with nobody on the other side. The format feels odd and unforgiving, so practising with a timer and speaking to the lens makes the difference between stilted and natural answers.

                ## Milestones
                1. The platform's practice question used to check camera, sound and timing.
                2. Answers practised with a strict thinking time and answer time.
                3. A bullet outline ready for each likely question.
                4. The interview recorded in a quiet, well-lit room before the deadline.

                ## Notes
                Check whether retakes are allowed before starting. Many platforms give none, so treat the practice question as your rehearsal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The recorded interview is submitted before its deadline after at least three timed practice answers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the invitation for deadline, retakes and answer time limits"
                - "Practise three answers with a strict 30-second think and 2-minute answer"
                - "Use the platform's practice question to test camera and sound"
                - "Record the interview in a quiet room well before the deadline"
            - name: Panel interview preparation
              description: |-
                ## Purpose
                Facing three to five interviewers at once changes the dynamic: each panellist usually owns a topic, one may stay silent and you must hold the room while answering one person. Preparing for each panellist's likely angle and practising how to include everyone in your answers keeps you composed when attention is split.

                ## Milestones
                1. Each panellist's role and likely area of questioning noted.
                2. Two prepared stories mapped to each panellist's area.
                3. A practice session with at least two people asking questions.
                4. A habit of answering the questioner while bringing others in with eye contact.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each panellist has a noted focus and two mapped stories, and a two-person mock panel has been completed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the coordinator for the panel members' names and roles"
                - "Note each panellist's likely questioning area"
                - "Map two stories to each panellist's area"
                - "Run a mock panel with at least two people asking questions"
            - name: Final round or on-site day preparation
              description: |-
                ## Purpose
                Final rounds often pack four to six back-to-back interviews, a lunch and a senior leader into one day, and energy fades by mid-afternoon. Planning each slot, refreshing the stories you have already told and protecting your stamina means the last interviewer meets the same candidate as the first.

                ## Milestones
                1. A schedule of every session with interviewer, format and focus.
                2. Stories assigned to sessions so the strongest are not repeated to the same people.
                3. Notes from earlier rounds reviewed for follow-ups to address.
                4. Water, snacks and a short reset routine planned between sessions.
                5. A debrief written that evening covering every session.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A session-by-session plan with assigned stories is complete before the day, and a full debrief is written that evening."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the full final-round schedule with interviewers and formats"
                - "Assign stories to each session to avoid repeats"
                - "Re-read earlier debriefs for points to follow up"
                - "Pack water and snacks and plan a reset between sessions"
            - name: Technical interview loop for a software role
              description: |-
                ## Purpose
                A typical software engineering loop combines coding, system design, a behavioural round and sometimes a debugging or pair programming session. Preparing for the specific loop you have been invited to, rather than all possible ones, lets you focus the final two weeks on the rounds you will actually face.

                ## Milestones
                1. The rounds in the loop confirmed with their format and language options.
                2. A two-week plan splitting time across the rounds by weight and weakness.
                3. Two full mock loops completed under realistic timing.
                4. Behavioural stories tuned for engineering signals such as ownership and collaboration.
                5. Your coding environment or whiteboard approach agreed and practised.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two full mock loops matching the real rounds are completed and logged before the interview date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the recruiter for the rounds, formats and allowed languages"
                - "Write a two-week plan weighted toward your weakest round"
                - "Run a full mock loop with a peer under realistic timing"
                - "Tune three behavioural stories for engineering ownership signals"
            - name: Informal chats and team meet-and-greets
              description: |-
                ## Purpose
                A coffee with the team, a lunch or an informal chat with a future peer is still part of the assessment, even when told it is not. Preparing light but genuine questions, a short version of your story and a plan to listen more than you talk lets you be relaxed without becoming careless.

                ## Milestones
                1. A note of who you will meet and their role in the team.
                2. Three conversational questions about their work and the team's day.
                3. A short, friendly version of your background ready.
                4. A note afterwards on what you learned about the team's culture.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The informal meeting is attended with prepared questions, and a note on team culture is written the same day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find out who you will meet and what they do"
                - "Prepare three conversational questions about their work"
                - "Practise a friendly one-minute version of your background"
                - "Write a short note on the team's culture afterwards"
            - name: First ever job interview for students
              description: |-
                ## Purpose
                A first interview for a part-time job, an apprenticeship or a first full-time role can feel enormous when you have never done one and have little work history. Knowing what to expect, preparing three examples from school, sport, volunteering or part-time work and doing one practice interview with a teacher or careers adviser takes most of the fear away.

                ## Milestones
                1. A list of what usually happens in an interview, from greeting to goodbye.
                2. Three examples ready from school, clubs, volunteering or part-time work.
                3. Answers to why you want this job and what you are good at, written and practised.
                4. One practice interview done with a teacher, careers adviser or family friend.

                ## Notes
                Interviewers for first jobs mainly look for reliability, willingness to learn and good manners. Arriving early and saying thank you count for more than you would think.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three non-work examples are written and one practice interview with an adult adviser has been completed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your careers adviser or a teacher for a practice interview"
                - "Write three examples from school, clubs, sport or part-time work"
                - "Practise saying why you want this job in under a minute"
                - "Plan what to wear and how you will get there on time"
            - name: Turning coursework and projects into interview evidence
              description: |-
                ## Purpose
                Students and recent graduates often think they have nothing to say because they have no long career, yet group projects, dissertations, labs, societies and part-time jobs show teamwork, deadlines and problem solving. Rewriting three of these as STAR stories with real outcomes gives interviewers the evidence they need.

                ## Milestones
                1. A list of academic projects, society roles and part-time jobs with what you did in each.
                2. Three chosen and written as STAR stories with a concrete result.
                3. Technical terms explained in plain words for non-specialist interviewers.
                4. Each story practised aloud for a two-minute answer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three STAR stories from coursework, societies or part-time work are written with results and rehearsed aloud."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every group project, society role and part-time job you have had"
                - "Choose the three with the clearest results"
                - "Write each as a STAR story in plain words"
                - "Practise each story aloud with a friend from your course"
            - name: Interviewing while still employed
              description: |-
                ## Purpose
                Most people interview while holding a job, juggling confidentiality, leave and a manager who may wonder why you keep having dentist appointments. Planning how to schedule interviews, what to say if asked and how to keep your current work strong protects your reputation if the search takes months.

                ## Milestones
                1. A rule for scheduling: early morning, late afternoon or leave days only.
                2. Interviews kept off work devices, email and calendars.
                3. A short, honest line ready if a colleague asks about your absence.
                4. Current work commitments met during the search, with no dropped deadlines.

                ## Notes
                Ask recruiters not to contact your current employer for references until an offer is made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interview in the search is scheduled outside core hours or on leave, using personal devices only."
                cadence: phased
              tasks:
                - "Decide which times and days you will offer for interviews"
                - "Move all search contacts and documents to personal devices"
                - "Ask recruiters to hold reference checks until an offer"
                - "Book half-days of leave for final rounds in advance"
            - name: Interviewing in a second language
              description: |-
                ## Purpose
                Interviewing in a language that is not your first adds a layer of effort to every answer and can make capable people sound less sure of themselves. Preparing key vocabulary for your field, practising your main stories aloud in that language and having phrases ready to ask for repetition keeps the focus on what you know.

                ## Milestones
                1. A vocabulary list of 50 terms for your field and role in the interview language.
                2. Your introduction and top five stories rehearsed aloud in that language.
                3. Phrases ready to ask for repetition, clarification or a moment to think.
                4. Two mock interviews done with a fluent speaker giving feedback.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your introduction and five stories are rehearsed in the interview language, and two mocks with a fluent speaker are complete."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a list of 50 field and role terms in the interview language"
                - "Rehearse your introduction aloud in that language daily for a week"
                - "Write phrases for asking for repetition or a moment to think"
                - "Book two mock interviews with a fluent speaker"
            - name: Interview practice after a long tenure
              description: |-
                ## Purpose
                People who have been in one organisation for eight or ten years often find interview styles have moved on: video rounds, structured scoring and take-home tasks are now common. Resetting expectations, practising with current formats and learning to describe internal achievements to outsiders brings rusty interview skills up to date.

                ## Milestones
                1. A short note on how interviewing in your field has changed since your last search.
                2. Internal jargon and project names translated into terms an outsider understands.
                3. Three mock interviews in current formats: video, structured and technical where relevant.
                4. Stories updated to show recent impact rather than early-career highlights.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Internal jargon is translated in all stories, and three mocks in current formats are complete."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two people who recently changed jobs how their interviews ran"
                - "Rewrite internal project names and jargon in plain terms"
                - "Do a video mock and a structured mock with feedback"
                - "Replace any story older than five years with a recent one"
            - name: Requesting interview adjustments for disability or neurodivergence
              description: |-
                ## Purpose
                Candidates with a disability, a long-term condition or neurodivergence such as autism, ADHD or dyslexia can often ask for adjustments: questions in writing, extra time, a quiet room or a break. Knowing what would help, how to ask and when, means the interview measures your ability rather than the format.

                ## Milestones
                1. A list of the adjustments that would help you, in plain words.
                2. A decision on whether and when to ask, made with the employer's stated process in mind.
                3. A short request drafted and sent to the recruiter or coordinator.
                4. The agreed adjustments confirmed in writing before the interview.

                ## Notes
                Employment law on adjustments differs between countries; check your country's guidance or a disability charity for what employers must offer. Telling an employer about a condition is your choice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Any adjustments you want are requested in writing and confirmed by the employer before the interview date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the interview adjustments that would genuinely help you"
                - "Check the employer's careers page for its adjustments process"
                - "Draft and send a short adjustment request to the coordinator"
                - "Confirm the agreed adjustments in writing before the day"
            - name: Interviewing for your first people management role
              description: |-
                ## Purpose
                Interviews for a first manager role test something you may not have formally done: hiring, giving hard feedback, setting priorities and handling an underperformer. Preparing stories from informal leadership, mentoring and project leadership, and showing how you think about people as well as tasks, persuades panels you are ready.

                ## Milestones
                1. Five leadership stories from informal roles: mentoring, leading a project, onboarding someone.
                2. An answer on your management approach in three or four principles.
                3. Answers prepared for underperformance, conflict and prioritisation scenarios.
                4. A mock interview with an experienced manager acting as interviewer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five leadership stories and three scenario answers are written and tested in a mock with an experienced manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List times you mentored, led a project or onboarded a colleague"
                - "Write your management approach as three or four principles"
                - "Prepare answers to underperformance and conflict scenarios"
                - "Ask an experienced manager to run a mock interview with you"
            - name: Senior and staff engineer interview signals
              description: |-
                ## Purpose
                At senior and staff level, engineering interviews look less at whether you can code and more at scope, influence, technical judgement and how you raise the people around you. Preparing stories about cross-team decisions, technical strategy and mentoring, and showing trade-off thinking in every round, is what separates a senior offer from a down-level.

                ## Milestones
                1. The expectations for your target level researched from published career ladders.
                2. Four stories showing cross-team influence, technical strategy, mentoring and handling ambiguity.
                3. A past project explained in depth: architecture, decisions, failures and what you would change.
                4. A mock with a staff-level engineer giving feedback on level signals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four level-signal stories and a project walkthrough are prepared and reviewed in a mock with a staff-level engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two published engineering career ladders for your target level"
                - "Write four stories on influence, strategy, mentoring and ambiguity"
                - "Prepare a 20-minute walkthrough of one past system you built"
                - "Ask a staff-level engineer for a mock focused on level signals"
            - name: Values-based and bar-raiser interviews
              description: |-
                ## Purpose
                Some companies interview hard against their published values or leadership principles, sometimes with a dedicated interviewer from outside the team who can veto a hire. Learning the principles in detail and preparing two stories for each turns vague culture questions into a structured round you can plan for.

                ## Milestones
                1. The company's published values or leadership principles saved and summarised.
                2. Two stories mapped to each principle likely to be assessed.
                3. Each story checked for data, personal ownership and a clear outcome.
                4. A mock where the partner chooses principles at random and probes deeply.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every assessed principle has two mapped stories, tested in a mock with random selection and deep probing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Save and summarise the company's values or leadership principles"
                - "Map two of your stories to each principle"
                - "Check each story for numbers and personal ownership"
                - "Run a mock where your partner picks principles at random"
            - name: Sitting on hiring panels to sharpen your own interviewing
              description: |-
                ## Purpose
                Nothing improves your interview performance like seeing dozens of candidates from the other side: you learn what a strong answer sounds like and how quickly weak ones are spotted. Volunteering for interviewer training and hiring panels at work, and noting what separates the best candidates, also builds your standing as a trusted colleague.

                ## Milestones
                1. Interviewer training completed through your employer, if offered.
                2. At least five interviews sat in on or conducted.
                3. A private note of what distinguished the strongest candidates.
                4. Two lessons from the interviewer's side applied to your own practice answers.

                ## Notes
                Keep notes about candidates inside your employer's hiring system only. Your private note should record patterns, never names or personal details.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Five interviews conducted or observed, and a pattern note with two lessons applied to your own answers."
                cadence: rolling
              tasks:
                - "Ask your manager or HR about interviewer training"
                - "Volunteer to sit on the next hiring panel in your team"
                - "Write down patterns that separate strong candidates, with no names @recurring(monthly:25)"
                - "Apply two lessons from the panel to your own practice answers"
---

# Job Interview Preparation

Job interview preparation is everything between the invitation and the offer call: knowing the role and the company, having true stories ready, practising out loud and walking in calm. The projects start with foundations (the job description decoded, a company dossier, your story bank and opening answers, the remote setup and the day itself), then the routines that keep you sharp, the skills behind behavioural, case and technical interviews, specific fixes and formats, and the rounds you will actually sit. Later projects cover situations such as a first ever interview, interviewing while employed or in a second language, and finish with senior engineering loops, values-based interviews and sitting on the other side of the table.

The rhythms are a weekly mock interview and recorded practice, a debrief after every interview with a Friday review of the log, a monthly refresh of your question bank, a short daily coding session for engineers and a quarterly update of your stories. The **Job application** template suits the company dossier, **Meeting notes** suits the post-interview debrief, and **Portfolio piece** suits the write-up of a take-home assignment. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
