---
id: engineering-practice.engineering-ethics
name: Engineering Ethics
description: "A working ethics practice for engineers: the codes that bind you, honest sign-off, declared conflicts, a clear route for raising safety concerns, and the records that show you acted with care."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-ethics, engineer, professional-conduct, public-safety, conflicts-of-interest, whistleblowing, sign-off]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - reading-queue
    - compliance-control
    - meeting-notes
    - one-on-one
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Ethics
          description: "Handling ethical questions as an engineer: public safety first, conflicts of interest, signing only what you checked, raising concerns and the codes of conduct that apply."
          projects:
            - name: Map of the ethics codes that bind you
              description: |-
                ## Purpose
                Most engineers are bound by two or three codes at once: the licensing board or engineering council where they are registered, the professional institution they belong to, and their employer's code of conduct. Examples include the Engineering Council and Royal Academy of Engineering statement of ethical principles in the UK, a state board's rules and the NSPE code in the US, a provincial association in Canada, or the Board of Engineering of Trinidad and Tobago. Knowing which apply, and where they disagree, tells you which rule wins when a question lands on your desk.

                ## Milestones
                1. Every body you are registered with or a member of listed, with membership numbers and the country it covers.
                2. The current code of conduct or ethics rules for each body downloaded and dated.
                3. A one-page summary of the duties the codes share and the points where they differ.
                4. Your employer's code added, with any clause stricter than the professional codes marked.

                ## Notes
                Where codes conflict, the licensing or statutory body's rules usually carry legal weight. Ask the body itself if you are unsure which applies to work done in another country.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page summary of every ethics code that binds you, listing shared duties and the clauses where they differ."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every registration, licence and institution membership you hold"
                - "Download the current code of conduct from each body's website"
                - "Write a one-page comparison of shared duties and differences"
                - "Mark any employer code clause that is stricter than the professional codes"
            - name: Personal ethics decision log
              description: |-
                ## Purpose
                When a complaint or inquiry comes years later, the engineer with a dated note of what they knew, who they told and why they decided is in a far stronger position than one relying on memory. A private log, kept outside company systems you might lose access to, records every judgement call with a real ethical edge, from a gift offered to a design you would not sign.

                ## Milestones
                1. A private log created with columns for date, situation, people involved, options considered, decision and follow-up.
                2. Three past situations from the last two years written up from memory and emails.
                3. A rule written for what goes in the log and what stays out, such as client confidential data.
                4. The log stored where you keep access if you change employer.

                ## Notes
                Record facts and your reasoning, not opinions about colleagues. Keep confidential client information out of it and refer to the project number instead.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A private decision log with at least three entries, a written rule on what to record, stored somewhere you keep after leaving a job."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the log with date, situation, options, decision and follow-up columns"
                - "Write up three past judgement calls from your emails and notes"
                - "Write a short rule on what the log records and what it never holds"
                - "Check you can still open the log from a personal device"
            - name: Public safety duty map for your current role
              description: |-
                ## Purpose
                Every code puts the safety, health and welfare of the public first, but the duty only means something when you can name who the public is for your work: the families downstream of a dam, the drivers on a bridge, the patients on a ventilator, the neighbours of a gas plant. Mapping who could be harmed by what you design, check or approve tells you where your judgement matters most and where you would stop work.

                ## Milestones
                1. Every type of work product you produce listed, from calculations to approvals.
                2. The people outside your organisation who could be harmed by each one named.
                3. The worst credible consequence of an error in each written in a sentence.
                4. The three work products where your sign-off carries most public risk marked for extra care.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map linking each of your work products to the members of the public it could harm, with the three highest-risk items marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the documents and decisions you produced in the last six months"
                - "Name the people outside the company each one could affect"
                - "Write the worst credible consequence of an error beside each"
                - "Revisit the map when your role changes and at least once a year @recurring(yearly)"
            - name: Written statement of your competence limits
              description: |-
                ## Purpose
                Codes require engineers to work only within their competence, yet few write down where theirs ends, so the boundary moves quietly under pressure from a short-staffed team. A one-page statement of what you can do alone, what you can do with review and what you must refer, agreed with your manager, gives you something to point at when asked to stretch.

                ## Milestones
                1. Your technical areas listed under three headings: work alone, work with review, refer elsewhere.
                2. Evidence for each work-alone item noted, such as projects, training or registration scope.
                3. The statement discussed with your line manager and any disagreement recorded.
                4. A named colleague or firm written beside each refer-elsewhere item.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page competence statement in three tiers, with evidence and referral contacts, discussed with your manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three lists: work alone, work with review, refer elsewhere"
                - "Add one piece of evidence beside each work-alone item"
                - "Name a colleague or specialist firm for each refer-elsewhere item"
                - "Book thirty minutes with your manager to agree the statement"
            - name: What your signature and seal commit you to
              description: |-
                ## Purpose
                A signature on a drawing, a calculation or a certificate is a personal statement that the work meets the standard, and in many jurisdictions a seal or stamp carries legal responsibility that survives a change of employer. Reading the rules that govern your sign-off, including responsible charge, what you may seal and how long you are accountable, stops the common mistake of signing as a formality.

                ## Milestones
                1. The licensing body's rules on seals, stamps and signatures found and read.
                2. Each type of document you sign listed with what the signature certifies.
                3. The rule on sealing work prepared by others under your direction written down in plain words.
                4. Your employer's sign-off procedure checked against the licensing rules, with any gap raised.

                ## Notes
                Liability periods and responsible charge rules vary by country and state. For anything that turns on a legal question, ask the licensing body or a lawyer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of what each signature you give certifies, with the licensing body's seal rules summarised and any employer gap raised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your licensing body's rules on seals, stamps and signatures"
                - "List every document type you currently sign or approve"
                - "Write what each signature certifies in one plain sentence"
                - "Compare the company sign-off procedure with the licensing rules"
            - name: Personal conflict of interest declaration
              description: |-
                ## Purpose
                Conflicts are rarely bribes; they are the shares in a supplier, the brother-in-law at the contractor, the side consultancy, the former employer whose bid you are now scoring. Writing a full declaration once, and filing it with your employer, turns a hidden risk into a managed one and protects you if a decision is questioned later.

                ## Milestones
                1. Financial interests, outside work, family links and past employers in your sector listed.
                2. Each interest checked against the suppliers, clients and contractors you deal with.
                3. A declaration filed through the employer's process, with a dated copy kept.
                4. Any live conflict given a written management step, such as stepping out of an evaluation.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete conflict of interest declaration filed with your employer, with a dated copy and a management step for each live conflict."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List shareholdings, outside work, family links and past employers"
                - "Check each one against the suppliers and clients you work with"
                - "File the declaration through the company process and keep a copy"
                - "Agree a written management step for any conflict that is live now"
            - name: Speak-up and whistleblowing route map
              description: |-
                ## Purpose
                Engineers who raise concerns well usually knew the route before they needed it: who to tell first, how to escalate, what the employer's whistleblowing policy promises, and which outside body takes reports. Mapping the route now, while nothing is wrong, means a future concern goes to the right person in the right form rather than stalling in an inbox.

                ## Milestones
                1. The employer's speak-up or whistleblowing policy read, with the named contacts and hotline recorded.
                2. The internal escalation path written as a chain from supervisor to board level.
                3. The regulators or authorities that accept reports for your sector listed, such as a safety, environment or licensing body.
                4. A note of where to get independent advice, such as your institution's helpline, a union or a lawyer.

                ## Notes
                Legal protection for whistleblowers differs widely between countries and often depends on how and to whom you report. Take independent advice before going outside the company.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page route map naming internal contacts, the escalation chain, the external regulators for your sector and a source of independent advice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find and read the company's speak-up or whistleblowing policy"
                - "Write the escalation chain from supervisor to the board"
                - "List the regulators that accept safety reports in your sector"
                - "Note one source of independent, confidential advice"
            - name: Five-question test for ethical calls on site
              description: |-
                ## Purpose
                On site, under schedule pressure, nobody reaches for moral philosophy. A short test you have practised, such as asking who could be hurt, what the code says, whether you would be comfortable seeing the decision reported, what a respected senior engineer would do and what you would need to write down, gives a fast, defensible answer when a superintendent wants a yes in five minutes.

                ## Milestones
                1. Five questions chosen and written in your own words on one card.
                2. The test applied to three past decisions to see whether it gives sensible answers.
                3. The card kept in your notebook, phone or site bag.
                4. One colleague walked through the test and their suggestions noted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-question test card in your own words, tried on three past decisions and carried to site."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions you would ask before an uncomfortable sign-off"
                - "Run three past decisions through the questions"
                - "Put the card in your notebook and on your phone"
                - "Ask a trusted colleague to test the card against a case of theirs"
            - name: Confidential advisers for ethical questions
              description: |-
                ## Purpose
                The hardest part of an ethical problem is often carrying it alone, and the people who help most are lined up before the problem arrives. A short list of named advisers, such as a senior engineer outside your reporting line, your institution's ethics or member support service, an employment lawyer and a peer you trust, means you can test your thinking within a day.

                ## Milestones
                1. At least four advisers named, each with a reason they suit the role.
                2. Each person asked whether they are willing to be called on in confidence.
                3. Your institution's member advice or ethics support contact recorded.
                4. The list stored with your decision log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least four named advisers who have agreed to be consulted, including one professional body contact."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name four people whose judgement you would trust on a hard call"
                - "Ask each one whether you may call on them in confidence"
                - "Find your institution's member advice or ethics support contact"
                - "Check every adviser's contact details still work @recurring(yearly)"
            - name: Monthly ethics log review
              description: |-
                ## Purpose
                Written only in a crisis, a log tends to be incomplete exactly when it matters. Fifteen minutes a month to add the small calls, close follow-ups and notice patterns, such as the same client repeatedly pushing to skip checks, keeps the record complete and shows you where pressure is building.

                ## Milestones
                1. The log reviewed each month, with new entries added for small calls.
                2. Every open follow-up either closed or given a next step.
                3. Recurring sources of pressure noted in a short pattern line each quarter.
                4. Patterns that need action raised with your manager or adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews in a year, each with open follow-ups closed or given a next step."
                cadence: rolling
              tasks:
                - "Add this month's judgement calls to the ethics log @recurring(monthly:11)"
                - "Close or update every open follow-up in the log"
                - "Write a one-line pattern note at the end of each quarter"
                - "Raise any repeated pressure pattern with your adviser"
            - name: Annual conflict of interest redeclaration
              description: |-
                ## Purpose
                Interests change without anyone noticing: a spouse changes jobs, a pension fund buys into a supplier, a former colleague joins a bidder. Redeclaring every year, and within a week of any change, keeps the declaration true and stops a stale form from becoming the problem.

                ## Milestones
                1. The previous declaration reread line by line.
                2. Changes in family employment, investments and outside work added.
                3. The updated declaration filed and a dated copy kept.
                4. New conflicts given a management step before the next evaluation or award.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An updated declaration filed every year, with mid-year changes declared within a week of arising."
                cadence: cyclic
              tasks:
                - "Reread last year's declaration and update every line @recurring(yearly)"
                - "Ask your household about new jobs or investments in your sector"
                - "File the updated declaration and keep a dated copy"
                - "Declare any new interest within a week of it arising"
            - name: Gifts and hospitality register
              description: |-
                ## Purpose
                Vendor lunches, factory acceptance test dinners, conference passes and holiday hampers are normal in engineering, but undeclared they look like influence, especially when the giver is bidding. A personal register that mirrors the company's rules, with the value, the giver and what was declined, means any question can be answered from a page.

                ## Milestones
                1. The company's gift and hospitality rules and value limits written at the top of the register.
                2. Every gift and hospitality offer recorded, accepted or not.
                3. Offers from suppliers in an active tender declined and logged.
                4. The register matched to the company's own declarations each month.

                ## Notes
                Start from the **Compliance control** template. Value limits and approval rules are set by your employer and local anti-bribery law; follow the stricter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register listing every offer received with value, giver and decision, reconciled monthly with company declarations."
                cadence: rolling
              tasks:
                - "Copy the company's gift rules and value limits into the register"
                - "Record every offer within two days, including the ones declined"
                - "Check the register against company declarations @recurring(monthly:19)"
                - "Decline any offer from a supplier in a live tender and log it"
            - name: Pre-signature check before every sign-off
              description: |-
                ## Purpose
                The usual failure behind a bad signature is not dishonesty but a rushed yes on work you did not fully see: a revision you did not compare, a calculation whose inputs changed, a vendor sheet taken on trust. A short check you run before every signature, and audit monthly, makes signing a deliberate act again.

                ## Milestones
                1. A six-line check written: scope, revision, inputs, method, independent check and your own review.
                2. The check used before every signature for one month.
                3. A monthly sample of your signatures compared against the check.
                4. Any document signed without the full check reopened and reviewed.

                ## Notes
                Never sign for work you have not reviewed to the depth your role requires. If time does not allow it, say so in writing and sign later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written six-line pre-signature check used on every sign-off, with a monthly sample audit recorded."
                cadence: rolling
              tasks:
                - "Write the six-line check and pin it beside your sign-off tray"
                - "Run the check on the next three documents you sign"
                - "Audit five of last month's signatures against the check @recurring(monthly:4)"
                - "Reopen any document that was signed without the full check"
            - name: Quarterly competence limits review
              description: |-
                ## Purpose
                Competence drifts in both directions: a year away from piping stress makes you rusty, while six months on protection studies may make you ready to work alone. Reviewing your statement every quarter against the work you actually did keeps it honest and spots the jobs that crept past the line.

                ## Milestones
                1. Last quarter's work compared with the three tiers of your competence statement.
                2. Any job done outside your limits identified and a review requested.
                3. Tiers moved where new evidence supports it.
                4. Training or supervised work booked for areas you want to move up.

                ## Notes
                Start from the **Skills matrix** template. Keep the three tiers as its columns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews a year, each recording work done against your tiers and any job sent for extra review."
                cadence: rolling
              tasks:
                - "Compare last quarter's jobs with your competence tiers @recurring(quarterly)"
                - "Ask for a second review of any job that went past your limits"
                - "Move a tier only where you can name the new evidence"
                - "Book supervised work for one area you want to move up"
            - name: Ethics moment in the team toolbox talk
              description: |-
                ## Purpose
                Teams talk about ethics only after something goes wrong unless someone makes room for it. A five-minute slot once a month in an existing toolbox talk or team meeting, using a short real case, makes it normal to say 'I am not comfortable signing this' long before it costs anyone a career.

                ## Milestones
                1. A monthly five-minute slot agreed in an existing team meeting.
                2. A bank of twelve short cases drawn from public incidents and anonymised team experience.
                3. One case discussed each month with the team's answers noted.
                4. Any live issue raised in the slot followed up privately within a week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An ethics case discussed in at least ten team meetings a year, with notes of the team's answers kept."
                cadence: rolling
              tasks:
                - "Ask the team lead for five minutes in the monthly team meeting"
                - "Ask the agent to draft twelve short engineering ethics cases from public incidents"
                - "Run one case in the team meeting and note the answers @recurring(monthly:23)"
                - "Follow up privately on any live concern raised within a week"
            - name: Annual reread of your professional code
              description: |-
                ## Purpose
                Codes are revised, often after major failures, and a version you read at graduation may now say more about sustainability, diversity or digital tools. Rereading each code that binds you once a year, and noting what changed, counts toward many bodies' development requirements and keeps your summary current.

                ## Milestones
                1. The latest version of each code downloaded and its revision date checked.
                2. Changes since last year marked on your one-page summary.
                3. One clause you find hard to apply in practice written up with an example.
                4. The time recorded as continuing development where your body accepts it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each binding code reread yearly, with changes recorded in your summary and the hours logged as development."
                cadence: cyclic
              tasks:
                - "Check each body's website for a revised code @recurring(yearly)"
                - "Mark changed clauses on your one-page code summary"
                - "Write one hard-to-apply clause up with a work example"
                - "Log the hours in your development record"
            - name: Weekly open concerns tracker
              description: |-
                ## Purpose
                Raising a concern by email and hearing nothing back does not close it, and in an inquiry the question will be what you did next. A tracker of every safety or ethics concern you have raised or been told about, checked weekly, makes sure each one gets an answer, an escalation or a documented close.

                ## Milestones
                1. Every open concern listed with the date raised, who was told and the response so far.
                2. A next step and date for each item.
                3. Unanswered items escalated after a set number of days you choose in advance.
                4. Closed items kept with the reason they were closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A concerns tracker reviewed weekly, with no item left without a response or escalation for longer than your stated limit."
                cadence: rolling
              tasks:
                - "List every open concern with the date raised and who was told"
                - "Set your escalation limit in days for unanswered concerns"
                - "Review the tracker and chase or escalate overdue items @recurring(weekly:fri)"
                - "Record the reason each concern was closed"
            - name: Registration renewal and ethics development record
              description: |-
                ## Purpose
                Many licensing boards and institutions now require ethics hours or a signed statement of good conduct at renewal, and a missed renewal can leave you unable to seal work legally. A dated record of renewal dates, required ethics hours and your declarations removes the last-minute scramble.

                ## Milestones
                1. Renewal dates and any ethics development requirement listed for each registration.
                2. Ethics hours completed this cycle recorded with evidence.
                3. Each renewal declaration answered truthfully, with any disclosure prepared in advance.
                4. Confirmation of renewal saved.

                ## Notes
                If a renewal form asks about complaints, convictions or disciplinary action, answer fully. Non-disclosure is often treated more seriously than the matter itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every registration renewed before its expiry date, with the required ethics hours evidenced and confirmations saved."
                cadence: cyclic
              tasks:
                - "List renewal dates and ethics hour rules for each registration"
                - "Record ethics hours completed this cycle with certificates"
                - "Check renewal dates and hours two months before expiry @recurring(yearly)"
                - "Save the renewal confirmation in your professional records"
            - name: Reading engineering failures with an ethical root
              description: |-
                ## Purpose
                The same few patterns appear again and again in engineering disasters: concerns raised and overruled, a design change nobody rechecked, a test result softened for a schedule. Reading one well-documented case a month, such as the Hyatt Regency walkways, the Challenger launch decision, Citicorp Center, the Grenfell Tower inquiry or the 737 MAX reports, builds a store of examples you can draw on when your own situation rhymes.

                ## Milestones
                1. A list of twelve cases with an inquiry report or reliable account for each.
                2. One case read each month with a paragraph on the ethical decision point.
                3. A short note for each case on what the engineers could have done differently.
                4. Three cases chosen that match the risks in your own work.

                ## Notes
                Start from the **Reading queue** template. Primary sources such as inquiry reports are slower to read but far more useful than summaries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve case notes in a year, each naming the decision point and what the engineers could have done differently."
                cadence: rolling
              tasks:
                - "Build a reading list of twelve cases with an inquiry report for each"
                - "Read one case and write a paragraph on its decision point @recurring(monthly:15)"
                - "Note what the engineers involved could have done differently"
                - "Mark the three cases closest to the risks in your own work"
            - name: Ethical reasoning methods applied to engineering cases
              description: |-
                ## Purpose
                Gut feeling tells you something is wrong but rarely helps you explain it to a sceptical project manager. Learning three ways of reasoning, consequences for everyone affected, duties and rights, and what a person of good character would do, and practising them on engineering cases, gives you language that makes an objection hard to dismiss.

                ## Milestones
                1. A one-page summary of consequence, duty and character based reasoning in your own words.
                2. Each method applied to the same engineering case, with where they agree and differ noted.
                3. Line-drawing practised on one case by placing it between clearly right and clearly wrong examples.
                4. One real past decision of yours rewritten using the methods.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of three reasoning methods applied to one engineering case, plus one past decision of yours reanalysed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an introductory engineering ethics chapter on reasoning methods"
                - "Write a one-page summary of the three methods in plain words"
                - "Apply all three to one engineering case and compare the answers"
                - "Rework one of your own past decisions using the methods"
            - name: Writing a technical concern people act on
              description: |-
                ## Purpose
                Concerns that change decisions are short, factual and specific: what the issue is, the evidence, the consequence if it is wrong, what you recommend and by when you need an answer. Learning to write one, and keeping a model memo, means your next concern reads as engineering rather than complaint.

                ## Milestones
                1. A one-page concern memo structure written: issue, evidence, consequence, recommendation, response needed by.
                2. Two past concerns rewritten in the structure.
                3. One model memo reviewed by a senior engineer you trust.
                4. The structure saved where you can find it fast.

                ## Notes
                Keep emotion and blame out. State facts, cite the drawing, calculation or test, and say what you have and have not verified yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model concern memo in the five-part structure, reviewed by a senior engineer and saved for reuse."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five headings of a concern memo on one page"
                - "Rewrite two past concern emails in the new structure"
                - "Ask a senior engineer to critique one rewritten memo"
                - "Save the model memo with your speak-up route map"
            - name: Saying no to a client or manager
              description: |-
                ## Purpose
                Most ethical failures in engineering happen in a conversation, not a document: the client who wants the report softened, the manager who asks you to sign today and check later. Practising the words, such as stating what you can sign, what you need first and by when, makes it far easier to hold the line kindly when it is real.

                ## Milestones
                1. Three common pressure scenarios from your work written down.
                2. A short script for each that states the limit, the reason and the alternative.
                3. Each script rehearsed aloud with a colleague or mentor playing the other side.
                4. A follow-up email template that confirms what was agreed in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Scripts for three pressure scenarios, each rehearsed with another person, plus a follow-up email template."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down three times you were pushed to agree to something"
                - "Draft a limit, reason and alternative script for each"
                - "Rehearse the scripts aloud with a mentor playing the other side"
                - "Write a follow-up email that confirms the agreement in writing"
            - name: Spotting normalisation of deviance at work
              description: |-
                ## Purpose
                Sociologist Diane Vaughan coined the phrase in her study of the Challenger launch decision: a small departure works once, nothing bad happens, and it quietly becomes the standard. Learning to spot it on your own site, such as a bypassed alarm everyone ignores or a test always run short, is one of the most useful ethical skills an engineer has because the warning signs look ordinary.

                ## Milestones
                1. The concept studied from at least one primary source and summarised in a paragraph.
                2. A list of deviations on your site or project that everyone now treats as normal.
                3. Each deviation checked against the documented standard or procedure.
                4. The two most serious raised through the right channel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of accepted deviations checked against the documented standard, with the two most serious raised formally."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a primary account of normalisation of deviance and summarise it"
                - "List the shortcuts on your site that nobody questions any more"
                - "Check each shortcut against the written procedure or standard"
                - "Revisit the list of accepted deviations with fresh eyes @recurring(quarterly)"
            - name: Data integrity in test results and reports
              description: |-
                ## Purpose
                Selective reporting, rounding toward a pass, dropping an inconvenient test run or copying last year's inspection readings are some of the quietest ways engineers cross a line. Learning where the line sits for your work, and how to report a marginal or failed result honestly, protects the public and your registration.

                ## Milestones
                1. The data integrity rules in your codes and company procedures collected.
                2. Five grey-area practices in your field listed with where each sits on the line.
                3. A rule written for how you report marginal, failed and discarded test results.
                4. One recent report of yours checked against the rule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written personal rule for reporting marginal, failed and discarded results, tested against one of your recent reports."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect the data integrity clauses from your codes and procedures"
                - "List five grey-area practices common in your field"
                - "Write how you will report marginal and discarded results"
                - "Check one recent report of yours against that rule"
            - name: Confidentiality and intellectual property duties
              description: |-
                ## Purpose
                Clients' designs, process data and commercial terms travel in engineers' heads and on their laptops, and codes require engineers to keep confidences unless public safety requires otherwise. Knowing what you may reuse, what belongs to the client or employer, and when safety overrides confidentiality avoids both leaks and silence.

                ## Milestones
                1. The confidentiality clauses in your employment contract and main client contracts summarised.
                2. A clear split written between your general know-how and the client's or employer's property.
                3. The codes' wording on when public safety overrides confidentiality noted.
                4. Personal devices and storage checked for client material that should not be there.

                ## Notes
                Where a safety duty and a confidentiality clause seem to clash, get legal advice before disclosing, and record that you did.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note splitting your know-how from client and employer property, with personal storage cleared of material that does not belong there."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the confidentiality clauses in your contract and key client contracts"
                - "Write what counts as your know-how and what belongs to others"
                - "Note what your codes say about safety overriding confidentiality"
                - "Remove client files from personal devices and cloud storage"
            - name: Ethics questions in a professional review interview
              description: |-
                ## Purpose
                Professional review interviews and licensing applications often include an ethics question or a written statement of how you uphold the code, and vague answers stand out. Preparing two or three real examples from your own work, told with what you did and why, shows assessors you apply the code rather than recite it.

                ## Milestones
                1. The ethics expectations for your registration route found in the body's guidance.
                2. Three real examples from your work chosen and written up in under 300 words each.
                3. A mock interview held with a registered engineer asking follow-up questions.
                4. The written ethics statement for your application finished.

                ## Notes
                Check the current guidance on the registration body's website; formats change. Keep client names out of written examples.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Three written ethics examples and a finished ethics statement, tested in one mock interview with a registered engineer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the ethics section of your registration body's applicant guidance"
                - "Choose three real situations where you applied the code"
                - "Write each example in under 300 words with what you did and why"
                - "Book a mock interview with a registered engineer"
            - name: Accountability for software and AI-assisted work
              description: |-
                ## Purpose
                Design software, spreadsheets and AI assistants now produce much of the first draft of engineering work, but the code still holds the signing engineer responsible for every number. Working out how you verify tool output, what you disclose to clients and what you never paste into a public tool keeps responsibility where the codes put it.

                ## Milestones
                1. Every software tool and AI assistant you use in engineering work listed.
                2. A verification step written for each, such as a hand check or benchmark case.
                3. Rules written for what client data may and may not go into each tool.
                4. Your employer's policy on AI tools read and any gaps raised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of your tools with a verification step and a data rule for each, checked against the employer's AI policy."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every software tool and AI assistant used in your work"
                - "Write how you verify each tool's output before relying on it"
                - "Set a rule on what client data may enter each tool"
                - "Review new tools and the employer AI policy @recurring(quarterly)"
            - name: Deciding whether to take a job outside your competence
              description: |-
                ## Purpose
                A client asks a structural engineer for a fire strategy, or a manager hands a process engineer an electrical study because nobody else is free. Working through the decision in writing, with the options of declining, taking it under supervision, bringing in a specialist or learning first, avoids both overreach and turning away work you could do safely with help.

                ## Milestones
                1. The request described against your competence statement.
                2. Four options written with the risk to the public and to you for each.
                3. A decision recorded with the reason and any conditions.
                4. The client or manager told in writing what you will and will not do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on an out-of-competence request, with options weighed and the outcome confirmed in writing to the requester."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the request with your competence statement"
                - "Write the options: decline, supervise, bring in a specialist, learn first"
                - "Record your decision and the reason in the ethics log"
                - "Confirm in writing what you will and will not do"
            - name: Deciding whether to report a concern outside the company
              description: |-
                ## Purpose
                When internal routes have failed and you believe the public is at risk, the codes may require you to inform the proper authority, yet doing so has real consequences for your job and relationships. Working through the decision step by step, with evidence, the internal record, independent advice and the right external body, makes it a considered act rather than a desperate one.

                ## Milestones
                1. The evidence gathered and checked, with what you know first hand separated from what you were told.
                2. The internal escalation record showing who was told, when and how they responded.
                3. Independent advice taken from a lawyer, union or professional body and noted.
                4. A decision recorded on whether, when and to which authority to report.
                5. If reporting, the report made in writing to the body that regulates the hazard.

                ## Notes
                Whistleblowing protection usually depends on reporting to a prescribed or proper body in the right way. Get advice first and keep copies of everything you send.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on external reporting, backed by an evidence file, the internal escalation record and noted independent advice."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Separate the facts you know first hand from what you were told"
                - "Compile the dates and responses from every internal escalation"
                - "Book a confidential call with a lawyer or your professional body"
                - "Record your decision and the reasons in your ethics log"
            - name: Stepping away from work with an unmanageable conflict
              description: |-
                ## Purpose
                Some conflicts cannot be managed by disclosure: assessing a claim against a firm you part-own, or certifying work by your own family's company. Recognising when to decline or withdraw, and doing it in a way that leaves the client served and the record clear, is better than a declaration nobody reads.

                ## Milestones
                1. The conflict described with why disclosure alone does not resolve it.
                2. The work handed to an independent colleague or the client told to appoint one.
                3. A withdrawal note sent stating the reason in neutral terms.
                4. The handover and withdrawal recorded in your ethics log.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A documented withdrawal from conflicted work, with the work handed to an independent engineer and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write why disclosure alone cannot resolve this conflict"
                - "Identify an independent engineer who can take the work"
                - "Send a neutral withdrawal note to the client or manager"
                - "Record the handover in your ethics log"
            - name: Standing second-opinion arrangement for marginal designs
              description: |-
                ## Purpose
                Lone engineers and small teams often have nobody to ask when a design is marginal, so the call gets made alone at 6 pm. A standing agreement with two or three peers to give each other a quick independent view, with a simple record of what was asked and said, spreads judgement without breaching confidences.

                ## Milestones
                1. Two or three peers in suitable disciplines agreed to give second opinions.
                2. Ground rules written on confidentiality, turnaround and what the opinion does not cover.
                3. A short record format for each second opinion.
                4. The first second opinion requested and recorded.

                ## Notes
                A second opinion is not a formal check and does not move responsibility. Make that clear in the ground rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written second-opinion agreement with at least two peers, with at least one opinion recorded in the agreed format."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two peers whether they would trade second opinions"
                - "Write ground rules on confidentiality and turnaround"
                - "Create a one-page record format for each opinion"
                - "Log each second opinion asked or given @recurring(monthly:27)"
            - name: Correcting an error in your own issued work
              description: |-
                ## Purpose
                Finding a mistake in a drawing or calculation you already issued is one of the most common ethical tests, and the pull to fix it quietly in the next revision is strong. Assessing the consequence, telling the people who rely on it promptly and issuing a clear correction is what the codes expect and what usually limits the damage.

                ## Milestones
                1. The error described with the affected documents and revisions listed.
                2. The consequence assessed, including whether anything built or operating is affected.
                3. Your manager and the people relying on the work told in writing.
                4. A corrected revision issued with the change clearly described.
                5. The cause noted so the same error is less likely next time.

                ## Notes
                If anything already built or in service could be unsafe, treat it as urgent: tell the person who can stop or restrict use the same day.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A corrected revision issued with the change described, and the affected parties told in writing within the deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every document and revision the error affects"
                - "Check whether anything built or operating depends on the error"
                - "Tell your manager and the users of the work in writing"
                - "Issue the corrected revision with the change clearly described"
            - name: Honest claims about staff and experience in bids
              description: |-
                ## Purpose
                Bids that name senior engineers who will never work on the job, or claim experience the firm does not have, win work the team cannot deliver safely. Checking every person, project reference and capability claim you put your name to keeps proposals truthful and avoids a code breach that starts before the contract is signed.

                ## Milestones
                1. Every named person in the bid confirmed as available and willing.
                2. Each project reference checked against what the firm actually did.
                3. Capability claims matched to evidence such as certificates or past reports.
                4. Any claim you cannot support removed or reworded before submission.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A bid in which every named person, project reference and capability claim has been checked against evidence before submission."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm each named engineer is available for the contract period"
                - "Check every project reference against the firm's records"
                - "Match each capability claim to a certificate or past report"
                - "Remove or reword any claim you cannot support"
            - name: Contract clauses that clash with professional duties
              description: |-
                ## Purpose
                Some contracts quietly ask engineers to certify things they cannot observe, to stay silent about defects or to accept liability that pushes them to sign anything. Reading the clauses that touch your professional judgement before you accept the work lets you negotiate or decline instead of discovering the clash halfway through.

                ## Milestones
                1. Clauses on certification, confidentiality, reporting and liability marked in the contract.
                2. Each marked clause compared with your codes of conduct.
                3. Clauses that conflict raised with the commercial team or client in writing.
                4. The agreed position recorded before work starts.

                ## Notes
                The legal meaning of a clause is a question for a lawyer. Your job here is to spot where it touches your professional duties.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every clause touching certification, confidentiality or reporting checked against your codes, with conflicts raised and the agreed position recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark clauses on certification, confidentiality and defect reporting"
                - "Compare each marked clause with your codes of conduct"
                - "Raise any conflicting clause with the commercial team in writing"
                - "Record the agreed wording before starting work"
            - name: Formal safety concern meeting
              description: |-
                ## Purpose
                When a concern reaches a formal meeting with managers or a review panel, preparation decides whether it is heard. Going in with a one-page summary, the evidence, a clear request and a note-taker, and leaving with agreed actions in writing, turns a tense hour into a record that protects the public and you.

                ## Milestones
                1. A one-page summary and evidence pack prepared and sent ahead.
                2. A clear request stated, such as a hold, an independent review or a design change.
                3. Notes taken during the meeting by you or a colleague.
                4. Agreed actions, owners and dates confirmed by email the same day.

                ## Notes
                Start from the **Meeting notes** template. You may be able to bring a colleague or representative; check the company policy.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A concern meeting held with a pre-sent summary, notes taken and agreed actions confirmed in writing the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the one-page concern summary with evidence attached"
                - "Decide the single request you want the meeting to answer"
                - "Arrange for notes to be taken during the meeting"
                - "Email the agreed actions and owners the same day"
            - name: Giving evidence as an engineer at an inquiry
              description: |-
                ## Purpose
                Engineers are called to inquiries, court cases and arbitrations as witnesses of fact or as experts, and an expert's first duty is usually to the tribunal, not the party paying the fee. Preparing to give evidence honestly, within your expertise and without advocacy, protects your reputation and the process.

                ## Milestones
                1. Your role confirmed as witness of fact or expert, with the rules that apply read.
                2. Your statement or report checked so every opinion sits within your expertise.
                3. Documents you rely on listed and their versions confirmed.
                4. A briefing with the instructing lawyer on procedure, not on what to say.

                ## Notes
                Expert duties are set by the court or tribunal's rules in each country. Follow the lawyer's guidance on procedure, and never let anyone shape your opinion.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Evidence given with a statement limited to your expertise, every relied-on document listed and the expert rules read beforehand."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm whether you are a witness of fact or an expert"
                - "Read the tribunal's rules on expert duties"
                - "Mark any opinion in your report that goes beyond your expertise"
                - "List every document you rely on with its revision"
            - name: Responding to a disciplinary complaint against you
              description: |-
                ## Purpose
                Complaints to a licensing board or institution can come from a client, a colleague or a member of the public, and a calm, complete and timely response matters as much as the facts. Organising your records, getting advice and meeting every deadline the body sets gives the process what it needs to reach a fair view.

                ## Milestones
                1. The complaint, the body's procedure and every deadline recorded.
                2. Advice taken from a lawyer, your insurer or your professional body's member support.
                3. Your records, emails and decision log entries for the matter gathered in date order.
                4. A factual response submitted before the deadline.
                5. Any lessons for your own practice written down once the matter closes.

                ## Notes
                Tell your professional indemnity insurer early if your policy requires it. Do not contact the complainant about the complaint unless your adviser agrees.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A factual response submitted before the body's deadline, backed by a dated record file and noted professional advice."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down every deadline in the complaint letter"
                - "Notify your insurer and book advice from a lawyer or your body"
                - "Gather your records for the matter in date order"
                - "Submit a factual response before the deadline"
            - name: Ethics workshop for graduates or your team
              description: |-
                ## Purpose
                One well-run session, built around two or three real cases and a candid account from a senior engineer, can do more for a team's willingness to speak up than any policy. Planning and delivering a 90-minute workshop gives graduates permission to ask the awkward questions while the stakes are still low.

                ## Milestones
                1. A 90-minute plan with three cases, small-group discussion and a senior engineer's story.
                2. A date booked and attendees invited.
                3. The workshop delivered with discussion points recorded.
                4. Feedback collected and two follow-up actions agreed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 90-minute ethics workshop delivered, with recorded discussion points, feedback from attendees and two agreed follow-ups."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose three cases that match the team's work"
                - "Ask a senior engineer to share one real dilemma"
                - "Book the session and send the invitation"
                - "Collect feedback and agree two follow-up actions"
            - name: Resigning over an ethical issue
              description: |-
                ## Purpose
                Occasionally the only honest option left is to leave, and how you leave shapes what happens next for the public and for you. Planning the exit, with your concerns on record, legal advice on notice and confidentiality, and a clean handover, avoids walking out angry and leaving the hazard undocumented.

                ## Milestones
                1. Your concerns and the responses to them documented before you resign.
                2. Advice taken on notice, confidentiality and any reporting duty that continues after you leave.
                3. A resignation letter that is factual and short.
                4. A handover note so your open work is not left unsafe.
                5. Your decision log and personal records secured.

                ## Notes
                Leaving does not end a duty to report a serious public safety risk. Check with your adviser what you must still do.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A resignation made with concerns on record, advice noted, a handover note delivered and personal records secured."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Put your unresolved concerns in writing to the right manager"
                - "Book advice on notice periods and continuing duties"
                - "Write a short factual resignation letter"
                - "Prepare a handover note for every open piece of work"
            - name: Graduate asked to sign for unchecked work
              description: |-
                ## Purpose
                Graduates are sometimes asked to sign as checker on drawings or calculations they have barely seen, because the senior engineer is busy and the issue date is tomorrow. Knowing how to say what you have and have not checked, and asking for the time or supervision to do it properly, protects you at the stage when you have least confidence to push back.

                ## Milestones
                1. Your company's checking procedure read, including what the checker's signature means.
                2. A form of words ready for saying what you have checked and what you have not.
                3. Your mentor asked how they handled the same pressure early on.
                4. Any partial check recorded on the document or in an email, not hidden behind a full signature.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written form of words for partial checks, agreed with your mentor, and every check you sign matching what you actually reviewed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read what a checker's signature means in your company procedure"
                - "Write how you will state a partial check in an email"
                - "Ask your mentor how they handled this as a graduate"
                - "Compare your last three checker signatures with what you reviewed"
            - name: Independence as a sole consultant with one big client
              description: |-
                ## Purpose
                A consultant who earns most of their income from one client faces a quiet pressure to agree, especially on findings that cost the client money. Measuring your dependence, writing down the findings you will not soften and building a second income source keeps your judgement independent when it is tested.

                ## Milestones
                1. The share of last year's income from each client calculated.
                2. A short independence statement written for your engagement letters.
                3. Findings you will never water down, such as safety defects, listed.
                4. A plan to bring the largest client's share below a limit you set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Income share by client calculated, an independence statement in your engagement letters and a written target for the largest client's share."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work out last year's income share for each client"
                - "Add an independence statement to your engagement letter"
                - "Write the findings you will never soften for any client"
                - "Recalculate client income shares @recurring(yearly)"
            - name: Engineering manager setting tone under schedule pressure
              description: |-
                ## Purpose
                Whatever a manager rewards, engineers copy: if the person who flags a problem gets a sigh and the one who hits the date gets praise, problems stop being flagged. A manager who says plainly that stopping for a concern is expected, thanks people who do it and checks in one-to-ones makes the codes real for the team.

                ## Milestones
                1. A clear statement to the team that raising a concern will never count against them.
                2. A question about pressure or discomfort added to every one-to-one.
                3. Two recent concerns raised by the team publicly thanked and followed up.
                4. Schedule pressure that is driving shortcuts reported upward in writing.

                ## Notes
                Start from the **1:1** template and add a standing question on pressure to cut corners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing pressure question in every one-to-one, with concerns from the team acknowledged and schedule-driven shortcuts reported upward."
                cadence: rolling
              tasks:
                - "Tell the team in the next meeting that raising concerns is expected"
                - "Add a question on pressure to cut corners to your one-to-one notes"
                - "Review one-to-one notes for themes of pressure @recurring(monthly:9)"
                - "Report schedule-driven shortcuts to your own manager in writing"
            - name: Bribery and facilitation payments on overseas work
              description: |-
                ## Purpose
                Engineers working on projects abroad meet requests for small payments to clear customs, speed a permit or pass an inspection, and anti-bribery laws such as the UK Bribery Act or the US Foreign Corrupt Practices Act can apply to you personally wherever the payment happens. Knowing your employer's rules and the laws that reach you, and having a script for refusing, prevents a moment's convenience becoming a criminal matter.

                ## Milestones
                1. The anti-bribery laws that apply to you and your employer listed.
                2. The company policy on facilitation payments, agents and hospitality read.
                3. A refusal script and the escalation contact for the project written down.
                4. The narrow exception for payments made under threat to personal safety understood and noted.

                ## Notes
                Rules on facilitation payments differ between countries. Your employer's compliance team is the right first contact for anything unclear.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note listing the anti-bribery laws and company rules that apply to you, with a refusal script and escalation contact for each overseas project."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the anti-bribery laws that reach you and your employer"
                - "Read the company policy on facilitation payments and agents"
                - "Write a refusal script and the compliance contact for the project"
                - "Complete the company anti-corruption refresher @recurring(yearly)"
            - name: Moving to a competitor without taking what is not yours
              description: |-
                ## Purpose
                Changing employer inside a small industry means your new firm may bid against your old clients, using know-how you built there. Separating your own skills from the old firm's confidential material, checking restrictive covenants and declaring the move where it creates a conflict lets you start cleanly.

                ## Milestones
                1. Your old contract's confidentiality and restrictive covenant clauses read.
                2. All former employer files and data returned or deleted, with a note of the date.
                3. Conflicts from former clients and live bids declared to the new employer.
                4. A rule agreed with the new employer on work you will stay out of for a set period.

                ## Notes
                The enforceability of restrictive covenants is a legal question. If in doubt, get advice before accepting the role.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Former employer material returned or deleted, covenants checked and conflicts declared to the new employer within 30 days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the confidentiality and covenant clauses in your old contract"
                - "Return or delete all former employer files and note the date"
                - "Declare former clients and live bids to your new employer"
                - "Agree in writing which work you will stay out of"
            - name: Closing out your seal and records at retirement
              description: |-
                ## Purpose
                Responsibility for sealed work can outlast your career, and retiring engineers are often asked for 'one quick favour' on a drawing years after they stopped practising. Deciding your registration status, archiving project records, keeping insurance cover where needed and telling people what you no longer sign makes the exit clean.

                ## Milestones
                1. A decision on registration status recorded, such as retired, non-practising or full.
                2. Project files and decision logs archived for the period you may be asked about.
                3. Run-off or retirement insurance cover checked with your insurer.
                4. Former clients and colleagues told in writing what you will no longer certify.

                ## Notes
                Record retention periods and liability limits vary by country. Check with your licensing body and insurer.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Registration status decided, records archived, insurance run-off checked and former clients told in writing what you no longer certify."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your licensing body's options for retired or non-practising status"
                - "Archive project files and your decision log for the retention period"
                - "Ask your insurer about run-off cover"
                - "Write to former clients saying what you will no longer certify"
            - name: Serving on an institution ethics or conduct panel
              description: |-
                ## Purpose
                Professional bodies rely on experienced engineers to sit on conduct and disciplinary panels, and the work demands fairness, confidentiality and a careful reading of the code against facts. Preparing for the role, from declaring conflicts to writing reasoned decisions, is a serious form of service to the profession.

                ## Milestones
                1. The panel's terms of reference, procedure and training completed.
                2. A conflicts check done for every case before reading the papers.
                3. Case papers read with notes kept to the panel's confidentiality rules.
                4. Reasons for each decision drafted in plain language tied to specific clauses.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Panel training completed and, for each case heard, a conflicts check and written reasons tied to specific code clauses."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your institution how panel members are appointed"
                - "Complete the panel training and read the procedure"
                - "Run a conflicts check before opening each case"
                - "Draft reasons tied to specific clauses of the code"
            - name: Design duties to people who never see the drawings
              description: |-
                ## Purpose
                Engineering choices land unevenly: a flood scheme that protects one district by pushing water to a poorer one, a building that excludes wheelchair users, a plant sited where residents had no say. Asking who bears the risk and who gets the benefit, and putting that in the design record, is increasingly expected by codes and the public.

                ## Milestones
                1. The groups affected by one current design listed, including those not at the table.
                2. Risk and benefit for each group described in a short table.
                3. Accessibility, equity or community concerns raised with the design lead.
                4. The analysis and any change filed with the design basis.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A risk and benefit table for one live design covering affected groups, filed with the design basis and discussed with the design lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick one live design and list every group it affects"
                - "Write who bears the risk and who gets the benefit"
                - "Raise one equity or access concern with the design lead"
                - "File the table with the project design basis"
            - name: Sustainability and climate duties in the codes
              description: |-
                ## Purpose
                Several engineering codes now name sustainability and the needs of future generations as a duty alongside safety, which changes what a competent recommendation looks like. Working out what your codes say, how it applies to your projects and how you record whole-life impacts gives the duty practical meaning.

                ## Milestones
                1. The sustainability clauses in each binding code quoted and summarised.
                2. One project reviewed for whole-life carbon, energy or resource choices.
                3. A recommendation written that sets out the lower-impact option honestly, including cost.
                4. Your approach noted for future design basis documents.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of each code's sustainability duty and one project recommendation that sets out a lower-impact option with its cost."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the sustainability clauses in each code that binds you"
                - "Review one project's carbon, energy and material choices"
                - "Write a recommendation that sets out the lower-impact option and cost"
                - "Check codes and guidance for new sustainability duties @recurring(yearly)"
            - name: Mentoring an engineer through a dilemma
              description: |-
                ## Purpose
                Junior engineers often bring a dilemma to someone they trust before they bring it to a manager, and how that mentor responds can decide whether the concern is raised at all. Holding regular mentoring conversations that make room for ethical questions, and guiding without taking the decision away, builds judgement that lasts.

                ## Milestones
                1. A regular mentoring slot agreed with at least one junior engineer.
                2. A standing question on difficult calls added to each conversation.
                3. One real dilemma worked through using the five-question test.
                4. The mentee's own decision and its outcome followed up at the next meeting.

                ## Notes
                Start from the **1:1** template. Keep what a mentee shares in confidence unless there is an immediate safety risk.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Monthly mentoring sessions with a standing ethics question, and at least one dilemma worked through and followed up."
                cadence: rolling
              tasks:
                - "Offer a monthly mentoring slot to one junior engineer"
                - "Hold the mentoring session with a question on hard calls @recurring(monthly:2)"
                - "Work one real dilemma through the five-question test together"
                - "Follow up on the mentee's decision at the next meeting"
            - name: Reviewing a peer's work you believe is unsafe
              description: |-
                ## Purpose
                Codes ask engineers to be fair to colleagues and also to act when another engineer's work endangers the public, and those duties meet when a review turns up something serious. Checking your own reasoning, speaking to the engineer first where it is safe to do so, and escalating with evidence if the concern stands, handles both duties with integrity.

                ## Milestones
                1. The suspected error checked independently, with your own working kept.
                2. The engineer responsible contacted first, unless the risk is immediate.
                3. Their response recorded and the concern either resolved or escalated.
                4. If unresolved, the concern taken to their employer, the client or the licensing body with evidence.

                ## Notes
                Criticise the work, not the person. If the risk is immediate, tell whoever can stop the work before anything else.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A suspected unsafe design checked independently, discussed with its author and either resolved or escalated with a written evidence file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Recheck the suspected error with your own independent working"
                - "Contact the responsible engineer to discuss the finding"
                - "Record their response in your concerns tracker"
                - "Escalate with evidence if the concern is not resolved"
---

# Engineering Ethics

Engineering Ethics is for practising engineers who sign drawings, approve calculations, manage teams or advise clients, and who want to know what they would do before the hard moment arrives. It starts with foundations (the codes that bind you, your public safety duty, competence limits, what your signature means, declared interests and the speak-up route), then the routines that keep an ethics record honest, the skills of reasoning, writing and saying no, decisions such as reporting outside the company or fixing your own mistake, dated events such as a formal concern meeting or a disciplinary hearing, situations from graduate to sole consultant to retirement, and finally specialist work on panels, peer review and duties to people who never see the design.

The rhythm is weekly for open concerns, monthly for the ethics log, the gifts register, signature checks, case reading, team talks and mentoring, quarterly for competence limits, accepted deviations and software tools, and yearly for your declared interests, the code reread, registration renewal and anti-corruption refreshers. The Skills matrix, Reading queue, Compliance control, Meeting notes and 1:1 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
