---
id: tech-certifications.cissp-certification
name: CISSP Certification
description: "A route to ISC2's CISSP: the experience check, a dated study plan across all eight domains, adaptive practice exams, exam day, endorsement after passing and the CPE credits that keep it current."
category: personal
version: 1.0.0
tags: [tech-certifications, cissp-certification, engineer, knowledge-worker, isc2, cybersecurity, information-security, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - one-on-one
    - metrics-log
    - remediation-plan
    - resume
    - trip
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CISSP Certification
          description: "Preparing for ISC2's CISSP: the eight domains, the adaptive exam, the experience requirement, endorsement after passing and yearly continuing education credits."
          projects:
            - name: CISSP experience requirement check
              description: |-
                ## Purpose
                ISC2 asks for several years of cumulative, paid security work across at least two of the eight domains, with a one-year waiver for some degrees and approved credentials. Mapping your actual jobs against the domains before paying for anything tells you whether you will become a full CISSP on passing or an Associate of ISC2 who still has experience to earn.

                ## Milestones
                1. The current experience rules and waiver list read on the ISC2 website and dated.
                2. Every relevant role listed with start and end months, hours if part-time, and the domains it touched.
                3. A count of qualifying years, with any waiver you can claim noted beside it.
                4. A written verdict: full certification on passing, or the Associate route with a target date for the gap.

                ## Notes
                Part-time work and internships can count on a pro rata basis under ISC2's rules. Many candidates undercount by leaving out years where security was part of an operations or development job rather than the job title.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note lists each qualifying role with its domains and months, and states whether you qualify for full CISSP or the Associate route."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current CISSP experience requirements and waiver list on the ISC2 site"
                - "List every role since you started work with dates and security duties"
                - "Tag each role with the CISSP domains it covered"
                - "Write your experience verdict and the month you would fully qualify"
            - name: CISSP exam outline and ISC2 policy folder
              description: |-
                ## Purpose
                ISC2 writes the exam from its published exam outline and revises the domain weightings every few years, so a book from two editions ago can steer you towards the wrong balance. One dated folder with the current outline, the exam format notes and the policies on scheduling, retakes and identification keeps every later choice tied to the source.

                ## Milestones
                1. The current CISSP exam outline saved with its effective date.
                2. Domain names and their current weightings copied onto one summary page.
                3. Exam format, language options, fees and retake waiting periods noted from ISC2 and dated.
                4. One folder holding the outline, the summary page and the policy note.

                ## Notes
                If a new outline takes effect before your likely exam month, study to the new one and check your study guide edition matches it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the dated CISSP exam outline, a domain weighting summary and a policy note on fees, format and retakes taken from ISC2."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current CISSP exam outline and note its effective date"
                - "Copy the eight domain names and their weightings onto one page"
                - "Note the current exam format, fee and retake policy from the ISC2 site"
                - "Check the ISC2 site for a revised CISSP exam outline @recurring(quarterly)"
            - name: ISC2 and test centre account set-up
              description: |-
                ## Purpose
                Exam bookings run through ISC2's testing partner, and a name that does not match your identification exactly can cost you the seat on the day. Setting up the accounts, checking your documents and finding the nearest test centres early takes an hour and removes a whole class of avoidable failure.

                ## Milestones
                1. An ISC2 account created with your name exactly as it appears on your identification.
                2. A testing partner account linked, with the same name spelling.
                3. Your primary and secondary identification checked against the current identification policy and expiry dates.
                4. The two nearest test centres and their usual availability noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "ISC2 and testing partner accounts exist under a name that matches valid identification, and two candidate test centres are recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create your ISC2 account using the name on your passport or national ID"
                - "Read the current candidate identification policy for the CISSP exam"
                - "Check the expiry dates on the identification you plan to bring"
                - "Search the testing partner site for the two nearest centres offering CISSP"
            - name: Associate of ISC2 route decision
              description: |-
                ## Purpose
                Candidates who pass without enough experience can become an Associate of ISC2 and earn the remaining years afterwards, within a period ISC2 sets. For an early-career engineer that can be a better bet than waiting, but it also means annual fees and credits before you can use the full title, so the choice deserves a written decision.

                ## Milestones
                1. The current Associate of ISC2 rules, time limit and fees read and dated.
                2. The gap between your experience and the requirement stated in months.
                3. Pros and cons of sitting now versus waiting written side by side.
                4. A decision recorded: sit as a future Associate, or set a date to sit once qualified.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision records whether you will sit the exam before meeting the experience requirement, with the gap in months and the reasons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the Associate of ISC2 page and note the time limit for earning experience"
                - "Write your experience gap in months from the experience check"
                - "List what your employer or job market says about Associate status"
                - "Record whether you will sit now or wait, and why"
            - name: Eight-domain baseline diagnostic
              description: |-
                ## Purpose
                Most candidates are strong in two or three domains from their day job and weak in the rest, and they rarely guess which correctly. A timed diagnostic before any study, scored by domain, shows where the hours need to go and gives you a starting number to measure progress against.

                ## Milestones
                1. A diagnostic of at least 100 questions sat under timed conditions before studying.
                2. Scores recorded for each of the eight domains.
                3. Domains ranked from weakest to strongest with a sentence on why each is where it is.
                4. Study hours provisionally split in proportion to weakness and domain weighting.

                ## Notes
                Expect a low score. The point is the shape of the result across domains, not the total.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A diagnostic score for each of the eight domains is recorded, with domains ranked and study hours allocated against them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a diagnostic test from a reputable CISSP question bank"
                - "Sit the diagnostic in one timed session without notes"
                - "Record your score for each domain in a single table"
                - "Rank the domains and draft a split of study hours"
            - name: Choosing a CISSP study guide and question bank
              description: |-
                ## Purpose
                The usual kit is one comprehensive study guide, one shorter review book and one large question bank that mimics adaptive delivery, and buying five overlapping books wastes money and attention. Comparing a few options against the same criteria, including whether they match the current outline, settles the materials once.

                ## Milestones
                1. Three study guides and three question banks shortlisted with prices and editions.
                2. Each checked for alignment with the current exam outline date.
                3. Each scored on depth, explanation quality, adaptive practice and reviews from recent candidates.
                4. One guide, one review book and one question bank chosen and bought.

                ## Notes
                Start from the **Purchase decision** template. Question banks with detailed explanations of why each wrong answer is wrong teach more than ones with a single line per answer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of one study guide, one review book and one question bank, each aligned to the current outline, with costs noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three CISSP study guides and note their edition dates"
                - "Shortlist three question banks and try any free sample questions"
                - "Score each option on the same four criteria in one table"
                - "Buy the chosen guide, review book and question bank"
            - name: Dated CISSP study calendar
              description: |-
                ## Purpose
                Working professionals usually need several months of steady study for the CISSP, and plans without dates drift into a year. A calendar that counts back from a target exam month, with each domain given weeks in proportion to your baseline, makes slippage visible within a fortnight.

                ## Milestones
                1. A target exam month chosen and written at the top of the calendar.
                2. Weekly study hours you can really keep agreed with yourself and anyone you live with.
                3. Each domain assigned weeks, weakest and heaviest first.
                4. Practice exams, a review fortnight and a buffer week placed before the exam date.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows a target exam month, weekly study hours, dated weeks for each domain and scheduled practice exams."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a target exam month and write it down"
                - "Count the weeks available and the hours per week you can protect"
                - "Assign weeks to each domain using your diagnostic ranking"
                - "Block practice exams and a final review fortnight in your calendar"
            - name: Employer funding and study leave request
              description: |-
                ## Purpose
                Many employers will pay for the exam, materials or a course, and some give study days, but only when someone asks with a clear business case. A short written request linking the CISSP to your role, the team's audits or client requirements is far more likely to be approved than a hallway mention.

                ## Milestones
                1. Your employer's training and certification policy found and read.
                2. Costs listed: exam fee, materials, any course and the first annual fee.
                3. A one-page case linking the credential to current work, audits or contract requirements.
                4. A decision from your manager recorded, including any repayment clause.

                ## Notes
                Read any clawback clause before signing. Some employers ask for repayment if you leave within a set period after they fund a certification.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written funding request has been sent to your manager and their answer, including any repayment terms, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's training and certification policy"
                - "List every cost from exam fee to the first annual maintenance fee"
                - "Ask the agent to draft a one-page business case from your notes"
                - "Send the request to your manager and record the answer"
            - name: Weekly CISSP study cycle
              description: |-
                ## Purpose
                Few candidates have studied this much ground since university, and it is lost quickly without a fixed rhythm. Three protected study blocks a week plus a short Sunday planning slot keep progress steady while work and family carry on around it.

                ## Milestones
                1. Three study blocks a week fixed in the calendar on the same days.
                2. Each block planned with a domain, a chapter and a question set before it starts.
                3. A Sunday plan written for the coming week.
                4. Eight consecutive weeks completed with no more than one missed block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks show three completed study blocks each, with no more than one block missed in total."
                cadence: rolling
              tasks:
                - "Pick three regular slots a week you can protect from meetings"
                - "Do a planned CISSP study block @recurring(weekly:tue,thu,sat)"
                - "Write next week's study plan and chapter list @recurring(weekly:sun)"
                - "Tell your household and team which slots are study time"
            - name: Daily question set and wrong-answer log
              description: |-
                ## Purpose
                Reading alone does not prepare you for scenario questions where two answers look right. Twenty questions a day, with every miss written up in a log that says why the correct answer wins, builds the judgement the exam tests and shows which ideas keep tripping you.

                ## Milestones
                1. A wrong-answer log with columns for domain, topic, your answer, the right answer and the reason.
                2. A daily set of about twenty questions done on most days for a month.
                3. Every missed question logged within the same day.
                4. Repeated themes in the log turned into study tasks each week.

                ## Notes
                Log questions you got right by guessing too. They are misses you have not been caught on yet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wrong-answer log holds at least 300 dated entries over the study period, each with a written reason for the correct answer."
                cadence: rolling
              tasks:
                - "Set up the wrong-answer log with its five columns"
                - "Do twenty practice questions and log every miss @recurring(daily)"
                - "Review the week's log and pick the three themes to restudy @recurring(weekly:sat)"
                - "Mark lucky guesses in the log as misses"
            - name: Spaced repetition flashcards for CISSP terms
              description: |-
                ## Purpose
                Precise vocabulary carries many questions: due care and due diligence, the evaluation criteria, access control models, recovery metrics and evidence rules. A flashcard deck in a spaced repetition app, built from your own reading rather than downloaded whole, keeps hundreds of terms available with ten minutes a day.

                ## Milestones
                1. A spaced repetition app chosen and a deck created for each domain.
                2. Cards written in your own words as you finish each chapter.
                3. The daily review kept under fifteen minutes for a month.
                4. Cards you keep failing rewritten or split.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of cards covering all eight domains is reviewed on at least 25 days in each study month."
                cadence: rolling
              tasks:
                - "Install a spaced repetition app and create eight domain decks"
                - "Write ten cards from the chapter you finished most recently"
                - "Clear the day's flashcard reviews @recurring(daily)"
                - "Rewrite any card you have failed three times in a row"
            - name: Monthly adaptive practice exam
              description: |-
                ## Purpose
                The CISSP is delivered adaptively in English, so question difficulty shifts with your answers and the exam can end at different points for different candidates. A full adaptive practice exam each month under real conditions builds stamina and shows whether your domain scores are rising.

                ## Milestones
                1. A practice tool that simulates adaptive delivery chosen.
                2. One full practice exam sat each month without notes or breaks beyond those allowed.
                3. Scores by domain recorded after each sitting.
                4. Two consecutive practice results at or above the pass level your question bank suggests.

                ## Notes
                Practice bank scores are a guide, not a forecast. Look for steady results across domains rather than one high total.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three monthly adaptive practice exams are recorded with domain scores, the last two at or above your bank's suggested pass level."
                cadence: rolling
              tasks:
                - "Check your question bank has an adaptive full exam mode"
                - "Sit a full adaptive practice exam under exam conditions @recurring(monthly:12)"
                - "Record the domain scores straight after each sitting"
                - "Compare this month's weakest domain with last month's"
            - name: CISSP study partner check-ins
              description: |-
                ## Purpose
                Explaining why an answer is the most correct one to another candidate exposes muddled reasoning faster than rereading. A weekly call with one study partner or a small group, with a fixed agenda, also keeps both of you honest about the calendar.

                ## Milestones
                1. One study partner or a group of no more than four agreed.
                2. A weekly slot and a short agenda fixed: progress, three hard questions, next week's domain.
                3. Notes kept for each session.
                4. Eight weekly sessions held.

                ## Notes
                Start from the **1:1** template for the session notes. Do not share live exam content: ISC2's candidate agreement forbids it, and it puts both certifications at risk.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly study partner sessions are recorded, each with the hard questions discussed and next week's domain."
                cadence: rolling
              tasks:
                - "Ask a colleague or forum member preparing for CISSP to partner with you"
                - "Agree a weekly slot and a three-item agenda"
                - "Bring three hard questions to the study partner call @recurring(weekly:wed)"
                - "Write the session notes in the shared template"
            - name: Domain score tracker
              description: |-
                ## Purpose
                Without a single record, progress feels like it is going nowhere and weak domains stay hidden behind a decent average. A tracker that holds diagnostic, question bank and practice exam scores by domain over time tells you when a domain is ready to leave alone and when one is slipping.

                ## Milestones
                1. A tracker with one row per date and one column per domain.
                2. Diagnostic scores entered as the first row.
                3. Practice exam and question bank domain scores added each month.
                4. A simple trend per domain visible at a glance.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The tracker holds at least four monthly rows of domain scores starting from the diagnostic, with a trend shown per domain."
                cadence: rolling
              tasks:
                - "Create the tracker from the metrics log template with eight domain columns"
                - "Enter your diagnostic scores as the first row"
                - "Add the month's domain scores to the tracker @recurring(monthly:14)"
                - "Highlight any domain that has dropped since the last row"
            - name: Weekly note applying one CISSP idea at work
              description: |-
                ## Purpose
                Concepts such as data ownership, change management or separation of duties stick when you spot them in your own organisation. One short note a week on where an idea shows up at work, or where it is missing, turns study into experience you can talk about in interviews and endorsement.

                ## Milestones
                1. A running document for weekly notes, one paragraph each.
                2. Each note tied to a domain and a specific system, policy or process at work.
                3. No confidential details recorded: systems described generally.
                4. Twelve notes written.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly notes exist, each linking one CISSP concept to a real but anonymised process at work."
                cadence: rolling
              tasks:
                - "Create a running document for weekly work notes"
                - "Write one paragraph on a CISSP idea seen at work @recurring(weekly:fri)"
                - "Strip any system names or client details from the notes"
                - "Mark notes that could become interview examples"
            - name: Monthly study plan reset
              description: |-
                ## Purpose
                Plans written in month one are wrong by month two: a domain took longer, work had a crunch, a practice score moved. A short monthly reset that compares the calendar with the tracker and moves weeks around keeps the exam date honest instead of quietly slipping.

                ## Milestones
                1. The calendar and score tracker compared side by side.
                2. Hours moved from any domain at target to the weakest one.
                3. The exam month confirmed or moved with a written reason.
                4. The revised plan saved with the date of the reset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each study month has a dated reset note recording hours moved between domains and the exam month confirmed or changed."
                cadence: rolling
              tasks:
                - "Open the calendar and tracker side by side"
                - "Reset the study plan against the latest domain scores @recurring(monthly:27)"
                - "Write one line on why the exam month stays or moves"
                - "Save the revised calendar with today's date"
            - name: Commonly confused CISSP term pairs list
              description: |-
                ## Purpose
                A large share of misses come from pairs that sound alike: identification and authentication, RTO and RPO, symmetric and asymmetric, qualitative and quantitative risk, data owner and data custodian. A single page of these pairs, each with a one-line difference and an example, becomes the best ten-minute review the night before.

                ## Milestones
                1. A page started with the first ten confused pairs from your wrong-answer log.
                2. Each pair given a one-line difference and a work example.
                3. New pairs added as they appear in practice.
                4. At least forty pairs on the page before the final fortnight.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single reference page holds at least forty confused term pairs, each with a one-line difference and an example."
                cadence: rolling
              tasks:
                - "Pull ten confused term pairs from your wrong-answer log"
                - "Write a one-line difference and an example for each"
                - "Add the week's new confused pairs to the page @recurring(weekly:sun)"
                - "Read the page aloud to your study partner once"
            - name: Security governance, law and compliance study
              description: |-
                ## Purpose
                Security and Risk Management is the heaviest domain and the one that most rewards a manager's view: governance structures, policies, standards and guidelines, professional ethics, privacy principles, intellectual property and cross-border data rules. Engineers often find it the least familiar, so it earns its own block early in the calendar.

                ## Milestones
                1. Notes on the policy hierarchy: policies, standards, procedures, baselines and guidelines.
                2. Due care, due diligence and the roles of senior management summarised in your own words.
                3. Privacy principles and the main types of legal and regulatory requirement mapped to examples.
                4. A domain question set completed with a score at or above your target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover governance, the policy hierarchy, privacy and legal requirements, and a governance question set is scored at or above target."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the governance and compliance chapters of your study guide"
                - "Draw the policy, standard, procedure and guideline hierarchy on one page"
                - "Map three laws or regulations you know to the requirement types"
                - "Complete a governance question set and log every miss"
            - name: Risk analysis and business continuity study
              description: |-
                ## Purpose
                Risk questions expect you to know the vocabulary and the arithmetic: asset value, exposure factor, single and annualised loss expectancy, safeguard value, and the treatment options. Business impact analysis and continuity planning sit alongside them, with recovery terms that are easy to confuse under time pressure.

                ## Milestones
                1. The quantitative risk formulas written out and practised on five worked examples.
                2. Risk treatment options explained with one example each.
                3. Business impact analysis steps and recovery objectives summarised on one page.
                4. A risk and continuity question set scored at or above target.

                ## Notes
                The exam favours protecting people first in any continuity or safety scenario. If an answer puts human safety ahead of assets, read it twice before rejecting it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five worked risk calculations, a one-page continuity summary and a risk question set scored at or above target are complete."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write out the single and annualised loss expectancy formulas"
                - "Work through five quantitative risk examples by hand"
                - "Summarise business impact analysis and recovery objectives on one page"
                - "Complete a risk and continuity question set and log every miss"
            - name: Asset security and data lifecycle study
              description: |-
                ## Purpose
                Asset Security asks who owns data, who looks after it and what happens to it from creation to destruction. Questions turn on classification schemes, the owner, custodian and processor roles, retention and the right sanitisation method for each type of media, all of which are easier to remember tied to real data you handle.

                ## Milestones
                1. Data roles summarised with a real example of each from your organisation, anonymised.
                2. The data lifecycle stages drawn with the controls that apply at each.
                3. Sanitisation methods listed by media type with when each is acceptable.
                4. An asset security question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover data roles, the lifecycle with controls and media sanitisation, and an asset security question set meets target."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the asset security chapter and list the data roles"
                - "Draw the data lifecycle with one control at each stage"
                - "Make a table of sanitisation methods by media type"
                - "Complete an asset security question set and log every miss"
            - name: Security architecture and models study
              description: |-
                ## Purpose
                Domain three, Security Architecture and Engineering, covers secure design principles, the formal security models, evaluation criteria, hardware and virtualisation weaknesses and physical security of sites. Models such as Bell-LaPadula, Biba and Clark-Wilson come up repeatedly and are simple once you can state what each protects in a sentence.

                ## Milestones
                1. Secure design principles listed with an example of each from a system you know.
                2. Each formal security model summarised in one sentence with its main rules.
                3. Common architecture weaknesses, from virtualisation to embedded systems, noted with mitigations.
                4. Site and facility security controls summarised.
                5. An architecture question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-sentence summaries of each security model, notes on design principles and facility controls, and an architecture question set at target exist."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the security architecture chapters in your study guide"
                - "Write one sentence on what each security model protects"
                - "Note one real example of each secure design principle"
                - "Complete an architecture question set and log every miss"
            - name: Cryptography and PKI for the CISSP
              description: |-
                ## Purpose
                Cryptography sits inside the architecture domain but deserves its own block because it is where many engineers and most non-technical candidates lose marks. You need the concepts rather than the maths: which algorithm types give confidentiality, integrity, authentication or non-repudiation, how keys are managed and how certificates chain.

                ## Milestones
                1. Symmetric, asymmetric and hashing compared in one table with typical uses.
                2. Digital signatures and certificate chains explained in your own words.
                3. Key management stages from generation to destruction listed.
                4. Common cryptographic attacks named with what each targets.
                5. A cryptography question set scored at or above target.

                ## Notes
                Learn which service each mechanism provides before learning algorithm names. Questions usually ask what a control achieves, not how it computes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of cryptographic types, notes on PKI and key management, and a cryptography question set at target are complete."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a table comparing symmetric, asymmetric and hashing"
                - "Explain how a digital signature works to your study partner"
                - "List the key management lifecycle stages from memory"
                - "Complete a cryptography question set and log every miss"
            - name: Communication and network security study
              description: |-
                ## Purpose
                Network questions expect the OSI and TCP/IP models, secure protocols, network segmentation, wireless security and the components that protect traffic. Network engineers move fast here, while GRC staff may need a longer block and some hands-on time with packet captures.

                ## Milestones
                1. The OSI model drawn from memory with protocols and devices at each layer.
                2. Secure and insecure versions of common protocols listed in pairs.
                3. Segmentation, remote access and wireless security options summarised.
                4. A network security question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A from-memory OSI diagram with protocols, a secure protocol pairs list and a network question set at target are recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the OSI model from memory and check it against your guide"
                - "List common protocols beside their secure replacements"
                - "Summarise segmentation and remote access options on one page"
                - "Complete a network security question set and log every miss"
            - name: Identity and access management study
              description: |-
                ## Purpose
                Identity and Access Management covers identification, authentication factors, authorisation models, federation and the provisioning lifecycle. The exam likes the differences between discretionary, mandatory, role-based and attribute-based access control, and the risks of accounts that are never deprovisioned.

                ## Milestones
                1. Authentication factor types and their weaknesses listed.
                2. Access control models compared in one table with an example of each.
                3. Federation and single sign-on concepts explained with a real service you use.
                4. The identity lifecycle from joiner to leaver drawn with its controls.
                5. An identity question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of access control models, a drawn identity lifecycle and an identity question set at target are complete."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the identity and access management chapter"
                - "Compare the four access control models in one table"
                - "Draw the joiner, mover and leaver process with its controls"
                - "Complete an identity question set and log every miss"
            - name: Security assessment and testing study
              description: |-
                ## Purpose
                How does an organisation know its controls work? Security Assessment and Testing answers with vulnerability scans, penetration tests, code review, log review, audits and the reports that come out of them. Candidates often confuse the types of test and the types of audit report, so a clear page on each is worth the time.

                ## Milestones
                1. Assessment types listed with who performs them and when.
                2. Penetration test types and rules of engagement summarised.
                3. Internal, external and third-party audit types, and the main service organisation report types, compared.
                4. An assessment question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes compare assessment, test and audit report types, and an assessment question set is scored at or above target."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the security assessment and testing chapter"
                - "Make a table of test types with who runs them and why"
                - "Compare the service organisation report types on one page"
                - "Complete an assessment question set and log every miss"
            - name: Security operations and investigations study
              description: |-
                ## Purpose
                Investigations and evidence handling, logging and monitoring, incident response, change and patch management, backups and disaster recovery sites all sit in Security Operations, the broadest domain. The order of steps in incident response and the chain of custody are frequent question material.

                ## Milestones
                1. Incident response steps listed in order with what happens at each.
                2. Evidence types, admissibility and chain of custody summarised.
                3. Recovery site types and backup strategies compared in a table.
                4. Change, configuration and patch management linked in one diagram.
                5. A security operations question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ordered incident response notes, an evidence summary, a recovery site table and an operations question set at target are complete."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write the incident response steps in order from memory"
                - "Summarise chain of custody and evidence admissibility"
                - "Compare hot, warm and cold recovery sites in one table"
                - "Complete a security operations question set and log every miss"
            - name: Software development security study
              description: |-
                ## Purpose
                Software Development Security covers the development lifecycle and its models, secure coding weaknesses, testing of software, databases and the security of acquired software. Developers have a head start, but the exam asks where security fits in the process and who decides, not how to write the code.

                ## Milestones
                1. Development lifecycle phases listed with the security activity at each.
                2. Development models such as waterfall, agile and DevOps compared for security touchpoints.
                3. Common application weaknesses and their mitigations summarised.
                4. Software acquisition and third-party code risks noted.
                5. A software security question set scored at or above target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes map security activities to each development phase and model, and a software security question set is at target."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the software development security chapter"
                - "List each lifecycle phase with its security activity"
                - "Summarise the common application weaknesses and their fixes"
                - "Complete a software security question set and log every miss"
            - name: Reading CISSP questions as a risk adviser
              description: |-
                ## Purpose
                CISSP questions often have several technically correct answers and ask for the best, first or most important one. Candidates with strong hands-on skills fail by choosing the fix an engineer would apply rather than the step a security manager would take, so practising a consistent reading method pays off across every domain.

                ## Milestones
                1. A written method: read the last line first, spot the qualifier, eliminate, choose the answer that addresses risk and governance.
                2. Fifty questions marked best, first or most practised with the method.
                3. Misses from those fifty sorted into technician answers, misread qualifiers and knowledge gaps.
                4. A second set of fifty showing fewer technician answers.

                ## Notes
                When two answers both work, the one that involves management, policy or understanding the business before acting is often the intended one. Check that against the explanation each time rather than treating it as a rule.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two sets of fifty qualifier questions are recorded, with the second showing fewer misses caused by choosing a technician's answer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write your four-step question reading method on one card"
                - "Filter your question bank for best, first and most questions"
                - "Sort fifty misses into technician, qualifier and knowledge errors"
                - "Repeat with a fresh fifty and compare the error mix"
            - name: ISC2 Code of Ethics and ethics scenarios
              description: |-
                ## Purpose
                Every CISSP agrees to the ISC2 Code of Ethics, and its canons are in a set order of priority that scenario questions test. Knowing the preamble and canons well enough to rank them in a dilemma also prepares you for the attestation you sign when you apply for certification.

                ## Milestones
                1. The current Code of Ethics read in full from the ISC2 site.
                2. The canons written from memory in their order of priority.
                3. Five ethics scenarios answered with the canon that decides each.
                4. The complaint process and what it means for a certified member noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You can write the ISC2 canons in order from memory, and five ethics scenarios are answered with the deciding canon noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the ISC2 Code of Ethics on the ISC2 website"
                - "Write the canons in priority order from memory"
                - "Answer five ethics scenarios and name the deciding canon"
                - "Note how ethics complaints against members are handled"
            - name: Boot camp versus self-study decision
              description: |-
                ## Purpose
                Intensive CISSP boot camps cost a great deal and suit some people, especially those with employer funding and a hard deadline, while others pass on books, a question bank and discipline. Comparing the real costs, your learning style and your calendar avoids paying for a week that duplicates what you would do alone.

                ## Milestones
                1. Two boot camp or instructor-led options priced, including travel and time off.
                2. A self-study plan costed for comparison.
                3. Your diagnostic score, available weeks and learning preference weighed against both.
                4. A choice recorded, with the date of any course booked.

                ## Notes
                Check whether a course is run by an official ISC2 training provider and whether its materials match the current outline.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a boot camp and self-study, with full costs for each, ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price two instructor-led CISSP courses including travel and leave"
                - "Cost the self-study route from your chosen materials"
                - "Compare both against your weeks available and diagnostic score"
                - "Record the choice and book the course if chosen"
            - name: Weak domain rebuild after a poor practice exam
              description: |-
                ## Purpose
                A practice exam that drops a domain well below target usually means a gap in understanding, not a bad day. A short remediation plan for that one domain, with a different source, targeted questions and a retest, closes the gap before it spreads into the final weeks.

                ## Milestones
                1. The weak domain named with the specific topics behind the misses.
                2. A second source chosen for that domain: a video course, a different book or a colleague.
                3. Two weeks of targeted study and questions on those topics completed.
                4. A domain retest scored at or above target.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remediation plan for the weakest domain is completed and a retest of that domain scores at or above target."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the topics behind the weakest domain's misses"
                - "Choose a second source for that domain"
                - "Schedule two weeks of targeted study on those topics"
                - "Sit a domain retest and record the score"
            - name: One-page summary sheet for each domain
              description: |-
                ## Purpose
                In the last month there is no time to reread a thousand-page guide. Condensing each domain onto a single page in your own handwriting or words forces you to decide what matters, and the eight pages become the core of your final review.

                ## Milestones
                1. A one-page summary written for each of the eight domains.
                2. Each sheet checked against the exam outline for missing topics.
                3. Weak points from the wrong-answer log marked on each sheet.
                4. All eight sheets read aloud in a single sitting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight one-page domain summaries exist, each checked against the exam outline and marked with weak points from the log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the summary sheet for the domain you finished first"
                - "Check each sheet against the outline's topic list"
                - "Mark weak points from your wrong-answer log on each sheet"
                - "Read all eight sheets aloud in one sitting"
            - name: Exam readiness decision to book, hold or move
              description: |-
                ## Purpose
                Booking too early wastes a fee on an attempt you were not ready for, and never booking lets preparation drift. A written readiness check against agreed signals, such as practice scores across domains, coverage of the outline and the summary sheets done, turns a nervous feeling into a decision.

                ## Milestones
                1. Three readiness signals written down before looking at the latest scores.
                2. The latest two practice exams and domain scores checked against them.
                3. Any domain still below target named with the weeks needed to fix it.
                4. A decision recorded: book now, hold the current date, or move it by a set number of weeks.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated readiness note compares your latest scores with three pre-agreed signals and records whether the exam is booked, held or moved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three readiness signals before checking your scores"
                - "Compare the last two practice exams with those signals"
                - "Name any domain still below target and the weeks to fix it"
                - "Record whether you book, hold or move the exam"
            - name: Booking the CISSP exam slot
              description: |-
                ## Purpose
                Popular test centres book out weeks ahead, particularly at month ends and before outline changes. Booking a specific slot at the time of day you think best, with the reschedule deadline noted, gives the last phase of study a fixed point to aim at.

                ## Milestones
                1. The current fee, reschedule and cancellation rules checked on ISC2's site.
                2. A slot booked at a test centre, at your best time of day.
                3. The confirmation, reschedule cut-off and centre address saved.
                4. The date entered in your calendar with the final fortnight blocked before it.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed CISSP exam booking is saved with the reschedule cut-off date and the final fortnight blocked in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the current fee and reschedule rules before booking"
                - "Book a slot at the centre and time of day you prefer"
                - "Save the confirmation and note the reschedule cut-off"
                - "Block the two weeks before the exam in your calendar"
            - name: Final fortnight before the CISSP exam
              description: |-
                ## Purpose
                Two weeks out, the job is consolidation, not new material: summary sheets, confused pairs, one last practice exam and rest. A plan for those days, agreed with work and family in advance, avoids the late cramming that leaves candidates tired on exam day.

                ## Milestones
                1. Leave or lighter work agreed for the final week where possible.
                2. A day-by-day plan covering summary sheets, term pairs and one practice exam.
                3. No new books or resources started in the fortnight.
                4. The day before the exam kept light, with an early night planned.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day-by-day plan for the final fortnight is followed, with one practice exam done and no new resources started."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask your manager for lighter work in the final week"
                - "Write a day-by-day plan for the final fourteen days"
                - "Sit the last full practice exam no later than five days out"
                - "Spend the day before on summary sheets and rest only"
            - name: CISSP exam day plan
              description: |-
                ## Purpose
                Adaptive exams can end at different points, which unsettles candidates who expect a fixed number of questions. Knowing the route, the check-in process, what you may bring, when breaks are allowed and that an early end says nothing about the result keeps your attention on the questions.

                ## Milestones
                1. Route, travel time and a buffer of at least an hour planned to the centre.
                2. Identification and confirmation packed the night before.
                3. Break rules and the approach to pacing read from ISC2 guidance.
                4. The provisional result recorded and next steps noted after the exam.

                ## Notes
                Do not try to work out your score from when the exam ends. Stopping early or late happens to candidates who pass and who fail.
              priority: high
              deadlineOffsetDays: 125
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date with identification checked in, and the provisional result and next steps are recorded the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Plan the route to the centre with an hour of buffer"
                - "Read ISC2's guidance on breaks and what you may bring"
                - "Pack your identification and confirmation the night before"
                - "Write down the provisional result and next step after the exam"
            - name: CISSP retake plan after an unsuccessful attempt
              description: |-
                ## Purpose
                Failing the CISSP is common and fixable, and the score report shows how you did in each domain. A calm retake plan that starts from that report, respects ISC2's waiting period and changes the method rather than just repeating it gives the second attempt a much better chance.

                ## Milestones
                1. The score report saved and each domain's result noted.
                2. The current retake waiting period and fee checked.
                3. Two or three changes to study method written down, not just more hours.
                4. A new exam date set with a revised calendar.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retake plan based on the domain results in the score report sets a new exam date and names at least two changes in method."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Save the score report and list each domain's result"
                - "Check the current retake waiting period on the ISC2 site"
                - "Write two changes to how you will study, not only how long"
                - "Set a new target date and rebuild the study calendar"
            - name: CISSP endorsement application
              description: |-
                ## Purpose
                Passing the exam is not the end: ISC2 requires an endorsement application within a set window, currently nine months, with your experience described and an active ISC2 credential holder vouching for you, or ISC2 acting as endorser. Starting it the week you pass, while the details are fresh, avoids losing the result.

                ## Milestones
                1. The current endorsement deadline and process checked on ISC2's site.
                2. Experience entries written per role, with dates and domains, matching your experience check.
                3. An endorser agreed, or ISC2 endorsement requested if you know no certified member.
                4. The application submitted and its status recorded.

                ## Notes
                Endorsement applications can be audited. Keep the contact details of a manager for each role you list, and describe duties accurately rather than generously.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The endorsement application is submitted within ISC2's deadline after passing, with an endorser named and the status recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the endorsement deadline the week you pass"
                - "Ask a certified ISC2 member to act as your endorser"
                - "Write each role's dates, duties and domains for the form"
                - "Submit the endorsement application and save the confirmation"
            - name: CISSP CPE record and annual fee routine
              description: |-
                ## Purpose
                Once certified you keep the CISSP by paying the annual maintenance fee and earning continuing professional education credits across a three-year cycle, with a minimum each year. Logging credits monthly, with evidence, means the cycle end is a formality instead of a scramble through old calendars.

                ## Milestones
                1. The current CPE requirements, groups and annual fee checked in the ISC2 member area.
                2. A CPE record with date, activity, hours, group and evidence location.
                3. Credits logged in the ISC2 portal monthly.
                4. The annual fee paid before its due date each year.

                ## Notes
                Keep certificates and agendas for every CPE activity. ISC2 audits a sample of submissions and expects evidence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each certification year shows at least the minimum CPE credits logged with evidence and the annual maintenance fee paid on time."
                cadence: cyclic
              tasks:
                - "Read the current CPE rules and annual fee in the ISC2 member portal"
                - "Set up a CPE record with an evidence folder"
                - "Log the month's CPE activities with evidence in the ISC2 portal @recurring(monthly:9)"
                - "Pay the ISC2 annual maintenance fee before it falls due @recurring(yearly)"
            - name: CV and profile update as a new CISSP
              description: |-
                ## Purpose
                Many security roles and contracts list the CISSP as a requirement, and recruiters search for it, so a credential that only sits in the ISC2 portal does little. Updating the CV, professional profiles and email signature correctly, and only once you are fully certified, makes the effort visible.

                ## Milestones
                1. ISC2's rules on using the CISSP name and logo read.
                2. The CV updated with the credential, member number availability and the domains you work in.
                3. Professional profiles updated and the digital badge accepted.
                4. Two achievements from the study period added as examples.

                ## Notes
                Start from the **Resume** template. Associates of ISC2 should describe themselves that way, not as CISSPs, until the experience requirement is met.
              priority: low
              deadlineOffsetDays: 220
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The CV and professional profiles show the CISSP in line with ISC2's usage rules, with the digital badge accepted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read ISC2's guidance on using the credential name and logo"
                - "Add the CISSP and your strongest domains to your CV"
                - "Accept the digital badge and add it to your professional profiles"
                - "Write two short examples of work tied to CISSP domains"
            - name: CISSP for an engineer moving into security leadership
              description: |-
                ## Purpose
                Infrastructure, cloud and software engineers often take the CISSP to move from building systems to owning security decisions, and the hardest part is unlearning the instinct to fix things first. A plan that pairs study with leadership exposure at work, such as a risk review or a policy draft, makes the move real as well as certified.

                ## Milestones
                1. The domains furthest from your engineering work named, usually governance, assessment and law.
                2. One piece of governance work agreed with your manager, such as a risk review or policy update.
                3. Your answers to fifty management-style questions compared before and after that work.
                4. A development conversation with your manager about a security leadership path recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One governance task is completed at work during study, and a recorded conversation with your manager sets out a security leadership path."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name the three domains furthest from your engineering work"
                - "Ask your manager for one governance task such as a risk review"
                - "Retake fifty management-style questions after that task"
                - "Book a development conversation about a security leadership path"
            - name: CISSP for GRC, audit and compliance staff
              description: |-
                ## Purpose
                Governance, risk and audit professionals usually find domain one familiar and cryptography, networking and software development security hard. A plan that gives the technical domains extra weeks, some hands-on time and an engineer to ask questions closes the gap without drowning in detail the exam does not need.

                ## Milestones
                1. Extra weeks moved into architecture, cryptography, networking and software development.
                2. A technical colleague agreed as someone to ask questions of each fortnight.
                3. One short hands-on exercise per technical domain done, such as reading a packet capture or a certificate.
                4. Technical domain scores at or above target on the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each technical domain has one hands-on exercise completed and a tracker score at or above target."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Move extra weeks in your calendar into the technical domains"
                - "Ask an engineer colleague to answer questions each fortnight"
                - "Open a website certificate and identify its issuer and chain"
                - "Check the technical domain scores on your tracker"
            - name: Studying for the CISSP as a working parent
              description: |-
                ## Purpose
                Parents with a full-time job rarely have long evening blocks, and a plan built for a single person collapses in a fortnight. Short early-morning sessions, audio and flashcards on commutes, one longer weekend block and a deal with your partner or support network make months of preparation possible.

                ## Milestones
                1. Study time agreed with a partner, family or support network, written down.
                2. A plan built from short sessions, with one longer weekend block.
                3. Audio or video material chosen for commutes and chores.
                4. The calendar adjusted for school holidays and known busy weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written study plan built around childcare is agreed with your household and followed for six weeks with no more than two missed sessions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree protected study times with your partner or family"
                - "Choose an audio course for commutes and chores"
                - "Mark school holidays and busy weeks in the study calendar"
                - "Check next week's family calendar against study slots @recurring(weekly:sun)"
            - name: Leading an employer-sponsored CISSP cohort
              description: |-
                ## Purpose
                Sponsoring several staff for the CISSP at once is common in security teams and consultancies, and someone ends up coordinating. A cohort plan with shared materials, a weekly session, a common practice exam schedule and a private progress view helps more people pass and makes the spend easy to report.

                ## Milestones
                1. Cohort members, budget and target exam window agreed with the sponsor.
                2. Shared materials bought once and a weekly session scheduled.
                3. A common practice exam date each month, with results shared privately with each member.
                4. A short report to the sponsor at the end of the cohort with pass numbers.

                ## Notes
                Keep individual scores between you and each member. Publishing a league table discourages the people who most need support.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The cohort runs weekly sessions to its exam window and a closing report on attempts and passes goes to the sponsor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree members, budget and exam window with the sponsor"
                - "Buy shared materials and set up a cohort channel"
                - "Run the weekly cohort study session @recurring(weekly:tue)"
                - "Send the sponsor a closing report on attempts and passes"
            - name: Travelling to sit the CISSP in another country
              description: |-
                ## Purpose
                Candidates on smaller islands or in countries without a nearby centre may need to fly to sit the exam, for example from the Eastern Caribbean to a regional hub. Planning the trip around the booking, with arrival the day before and a quiet place to stay, protects the attempt from flight delays and fatigue.

                ## Milestones
                1. Test centres within reach compared for availability and travel cost.
                2. Flights booked to arrive at least the day before the exam.
                3. Accommodation near the centre booked, with the route walked or checked.
                4. Travel, visa or entry requirements checked for the destination.

                ## Notes
                Start from the **Trip** template. Book a flexible fare if you can, in case the exam needs to move.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Flights and accommodation are booked to arrive the day before the exam, with entry requirements checked and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare reachable test centres for availability and travel cost"
                - "Check entry and visa requirements for the destination"
                - "Book flights that arrive the day before the exam"
                - "Book accommodation within easy reach of the centre"
            - name: Earning experience as an Associate of ISC2
              description: |-
                ## Purpose
                An Associate who passed early has a fixed period to build the missing experience, and the clock runs whether or not anyone is counting. Tracking qualifying months by domain each quarter, and steering your work towards a second domain if needed, gets you to full certification on time.

                ## Milestones
                1. The date your Associate period ends written at the top of an experience record.
                2. Qualifying months logged per role and domain.
                3. A second domain identified and work towards it agreed with your manager, if needed.
                4. The full certification application made once the requirement is met.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A quarterly updated experience record shows qualifying months by domain and the date full CISSP certification can be applied for."
                cadence: rolling
              tasks:
                - "Write your Associate end date at the top of an experience record"
                - "Add the quarter's qualifying months by domain @recurring(quarterly)"
                - "Ask your manager for work in a second domain if you lack one"
                - "Apply to convert to full CISSP once the months are reached"
            - name: Mapping your organisation against the eight domains
              description: |-
                ## Purpose
                Experienced CISSPs are often asked where an organisation stands on security, and the domains make a sound checklist for a first look. A light gap review of your own employer or a client against each domain, written for managers, turns the credential into practical advice and a list of priorities.

                ## Milestones
                1. Scope and permission agreed with the person who owns security.
                2. Each domain reviewed against existing policies, controls and evidence.
                3. Gaps rated by risk and likely effort.
                4. A short report with the top five priorities presented to management.

                ## Notes
                Treat findings as confidential and keep them in your organisation's systems, not your personal notes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A gap review covering all eight domains, with the top five priorities, is presented to management and their response recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree scope and permission with the security owner"
                - "List existing policies and controls under each domain"
                - "Rate each gap by risk and effort"
                - "Ask the agent to turn your findings into a short management summary"
            - name: Choosing a CISSP concentration
              description: |-
                ## Purpose
                ISC2 offers concentrations for CISSPs in architecture, engineering and management, each with its own exam and experience requirement. They suit people whose role has settled into one of those tracks, and a short comparison stops you chasing one that does not fit your next job.

                ## Milestones
                1. The current concentrations, requirements and exam outlines read on the ISC2 site.
                2. Each compared with your current role and the role you want next.
                3. Job adverts or colleagues checked for how much each concentration is valued.
                4. A decision recorded: pursue one, or revisit in a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the CISSP concentrations against your career path ends in a recorded decision with a review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the current CISSP concentration pages on the ISC2 site"
                - "Compare each concentration with the role you want next"
                - "Search job adverts for each concentration and count mentions"
                - "Record your decision and a date to revisit it"
            - name: Mentoring a CISSP candidate
              description: |-
                ## Purpose
                Mentoring a colleague through the CISSP sharpens your own grasp of the domains and can count towards CPE in some cases. A light structure, with a monthly session, a review of their plan and an offer to endorse them once they pass, makes the help useful rather than occasional.

                ## Milestones
                1. One candidate and a mentoring arrangement agreed.
                2. Their study calendar and diagnostic reviewed in a first session.
                3. Monthly sessions held through to their exam.
                4. Endorsement offered after they pass, if you can verify their experience.

                ## Notes
                Only endorse experience you can honestly verify. Endorsers vouch for the candidate under the Code of Ethics.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Monthly mentoring sessions with one candidate are recorded through to their exam date."
                cadence: rolling
              tasks:
                - "Offer to mentor one colleague preparing for the CISSP"
                - "Review their calendar and diagnostic in a first session"
                - "Hold a mentoring session with your CISSP candidate @recurring(monthly:18)"
                - "Check whether your mentoring hours qualify as CPE"
            - name: CPE credits from writing, speaking and volunteering
              description: |-
                ## Purpose
                Experienced CISSPs often earn credits only from webinars and conferences, which is the dullest route. Writing articles, speaking at a local chapter, reviewing exam items or volunteering for ISC2 or a security community can earn credits while building a reputation, and spreads the cycle's load across the year.

                ## Milestones
                1. The CPE activities that count for writing, presenting and volunteering checked in the current ISC2 handbook.
                2. One article, talk or volunteering role chosen for the year.
                3. The activity delivered with evidence kept.
                4. Credits claimed and recorded in the CPE log.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least one article, talk or volunteering activity is delivered in the year, with evidence kept and credits claimed."
                cadence: cyclic
              tasks:
                - "Check which writing and speaking activities earn CPE in the ISC2 handbook"
                - "Contact your local security chapter about a speaking slot"
                - "Pick one contribution for the coming quarter and set a date @recurring(quarterly)"
                - "Claim the credits with evidence once the activity is done"
---

# CISSP Certification

This area is for engineers and security-minded knowledge workers preparing for ISC2's Certified Information Systems Security Professional, from the first check of your work history to the years of credits after you hold it. It opens with foundations (the experience requirement, the official outline, a baseline across the eight domains, study materials and a dated calendar), then the study machinery, a project for each domain and for the question technique the adaptive exam rewards, decisions about boot camps, readiness and retakes, the exam itself and endorsement, plans for engineers, GRC and audit staff, parents, cohorts and candidates who travel to sit, and specialist work such as concentrations and mentoring.

The rhythm is a short daily question set and flashcards, study blocks, a wrong-answer review, a partner check-in and a work note each week, a monthly adaptive practice exam, score update and plan reset, quarterly checks for outline changes, and monthly CPE logging once you are certified. The Purchase decision, 1:1, Metrics log, Remediation plan, Resume and Trip templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
