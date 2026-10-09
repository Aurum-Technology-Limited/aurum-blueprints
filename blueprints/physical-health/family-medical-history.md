---
id: physical-health.family-medical-history
name: Family Medical History & Genetics
description: "A three-generation family health record, clear decisions about genetic counselling and testing, and the history shared with the clinicians and relatives who need it."
category: personal
version: 1.0.0
tags: [physical-health, family-medical-history, everyone, parent, genetics, family-tree, genetic-testing, genetic-counselling]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - person
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Medical History & Genetics
          description: "Recording inherited conditions across the family tree, deciding on genetic testing, and sharing relevant history with clinicians and relatives."
          projects:
            - name: Health inventory of parents, siblings and children
              description: |-
                ## Purpose
                First-degree relatives (parents, brothers, sisters and children) share about half your genes, so their diagnoses carry the most weight when a clinician estimates inherited risk. Writing down what you already know about each one, with the age at diagnosis where you know it, takes an evening and is the base every later project builds on.

                ## Milestones
                1. A list of every first-degree relative, living or dead, with year of birth.
                2. Known conditions noted for each, with approximate age at diagnosis.
                3. Gaps marked clearly as unknown rather than left blank.
                4. The list saved where the full family record will live.

                ## Notes
                Mark gaps as unknown rather than guessing. A guessed diagnosis can mislead a clinician more than an honest blank.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of every first-degree relative with known conditions and ages at diagnosis, gaps marked as unknown."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your parents, siblings and children with their years of birth"
                - "Note each known diagnosis and roughly how old they were at the time"
                - "Mark every gap as unknown instead of guessing"
                - "Save the list in the place you will keep the family record"
            - name: Three-generation family health tree
              description: |-
                ## Purpose
                Genetic services usually ask about three generations: you, your parents and siblings, and your grandparents, aunts, uncles and cousins on both sides. Extending the first-degree list into a drawn tree shows patterns a list hides, such as the same condition appearing down one side of the family.

                ## Milestones
                1. Both sides of the family drawn back to all four grandparents.
                2. Aunts, uncles and first cousins added with their known conditions.
                3. Each person marked as living or dead, with current age or age at death.
                4. Maternal and paternal sides clearly labelled.

                ## Notes
                Paper and pencil is fine for a first version. Half-siblings belong on the tree, on the side of the parent you share; step-relatives do not.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A drawn family tree covering three generations on both sides, with conditions, ages and living status for each person."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch both sides of the family back to all four grandparents"
                - "Add aunts, uncles and first cousins with any known conditions"
                - "Mark each person as living or dead with age or age at death"
                - "Label the maternal and paternal sides clearly"
                - "Add half-siblings on the side of the parent you share"
            - name: Your own health history page for the family record
              description: |-
                ## Purpose
                The family record is lopsided if it holds everyone's diagnoses except yours, and your children or siblings may one day need your details as much as you need your parents'. A single page with your conditions, operations, significant test results and ages at diagnosis makes you a well-documented branch of the tree.

                ## Milestones
                1. Your diagnoses listed with the age each was made.
                2. Operations, serious illnesses and pregnancy complications added where relevant.
                3. Any genetic test you have had noted with its result and laboratory.
                4. The page stored alongside the family tree.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page personal health history, with ages at diagnosis and any genetic results, stored with the family tree."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your own diagnoses with the age each was made"
                - "Add operations and serious illnesses from your medical records"
                - "Note any genetic test you have had, its result and the laboratory"
                - "Keep the page in the same folder as the family tree"
            - name: Question script for relatives' health histories
              description: |-
                ## Purpose
                Relatives answer more fully when the questions are specific: what exactly was the diagnosis, how old were they, was it confirmed by tests, which hospital treated them. A short written script, the same for everyone, saves inventing questions on the spot and makes the answers comparable across the family.

                ## Milestones
                1. A one-page script of eight to twelve questions, from conditions and ages to causes of death.
                2. A gentle opening line and a closing thank you written.
                3. The script tried on one willing relative and adjusted.
                4. A column added for how sure the relative was of each answer.

                ## Notes
                Ask about miscarriages, stillbirths and children who died young only where the relationship allows. They can matter to a geneticist but are painful subjects.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested question script of eight to twelve questions, ready to use with any relative."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft twelve family health history questions"
                - "Cut the list to the questions you would feel able to ask"
                - "Try the script with the most willing relative"
                - "Adjust the wording after the trial conversation"
            - name: Grandparents' causes and ages of death
              description: |-
                ## Purpose
                Grandparents' deaths are often remembered vaguely, as old age or a bad chest, when a death certificate would give a specific cause and age. Requesting certificates or asking the oldest relatives fills the generation that genetic services most often find blank.

                ## Milestones
                1. Year and age at death recorded for each grandparent who has died.
                2. Cause of death confirmed from a certificate or a reliable relative for each.
                3. The source noted next to every entry.
                4. The family tree updated with the confirmed details.

                ## Notes
                Certificates are usually available from the civil registration office for a fee. Older certificates can use outdated medical terms, so copy the exact wording and ask a clinician what it means today.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Age and cause of death recorded for every deceased grandparent, each with its source noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what is already known about each grandparent's death"
                - "Ask the oldest living relative to fill the gaps"
                - "Order death certificates for the deaths that are still unclear"
                - "Record the exact wording of each cause alongside its source"
            - name: Ancestry notes relevant to inherited risk
              description: |-
                ## Purpose
                Some inherited conditions are more common in particular populations, and carrier screening offers often depend on ancestry, for example among people of Ashkenazi Jewish, Mediterranean, African or South Asian heritage. Recording where each grandparent's family came from gives a clinician context they would otherwise have to ask for.

                ## Milestones
                1. Each grandparent's country or community of origin recorded.
                2. Any marriage between blood relatives in earlier generations noted.
                3. The notes added to the family record.
                4. A clinician asked whether your ancestry changes any test offered.

                ## Notes
                Ancestry here is a clinical detail, not an identity statement. Write what is known and leave the rest as unknown.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Country or community of origin recorded for all four grandparents, and a clinician asked whether it changes any testing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down each grandparent's country or community of origin"
                - "Note any marriage between blood relatives in earlier generations"
                - "Ask your clinician whether your ancestry changes any test offered"
            - name: Red-flag pattern check on the family tree
              description: |-
                ## Purpose
                Clinicians look for a handful of patterns that suggest an inherited condition: diagnoses at an unusually young age, the same condition in several relatives on one side, rare cancers such as male breast cancer, or one person with several separate cancers. Checking your tree against a published list of these signs tells you whether to raise it with your doctor now or simply keep the record current.

                ## Milestones
                1. A published family history referral guide found from your health service or a genetics charity.
                2. Each side of the tree checked against the guide.
                3. Any matches listed with the relatives and ages involved.
                4. A decision recorded: raise with the doctor now, or recheck at the yearly refresh.

                ## Notes
                Start from the **Risk register** template. A match is a reason to ask, not a diagnosis.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The tree checked against a published family history guide, with matches listed and a recorded decision on whether to see a doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a published family history referral guide from your health service"
                - "Check each side of the tree against the guide"
                - "List any matches with the relatives and ages involved"
                - "Record whether you will raise the matches with your doctor now"
            - name: First family history conversation with your doctor
              description: |-
                ## Purpose
                A family history only changes your care once a clinician has seen it and it is recorded in your notes. Booking a routine appointment for this alone, with the tree and red-flag notes in hand, gets it into the record and gets a professional view on whether earlier checks or a genetics referral apply to you.

                ## Milestones
                1. An appointment booked specifically to discuss family history.
                2. A one-page summary of the tree brought along.
                3. The doctor's view on checks, referral or no action written down.
                4. The family history added to your medical record.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Family history discussed with a doctor, their recommendation written down and the history added to your medical record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment to discuss family history and nothing else"
                - "Bring a one-page summary of the tree and any red-flag matches"
                - "Write down what the doctor recommends before you leave"
                - "Ask for the family history to be added to your medical record"
            - name: Privacy and consent rules for the family record
              description: |-
                ## Purpose
                A family health record holds other people's diagnoses, some told in confidence, and relatives talk more freely when they know where their details go. Agreeing a few simple rules about who can see the record, what goes to doctors and what stays private protects trust and keeps the record usable for years.

                ## Milestones
                1. Rules written on who can view the record and where it is stored.
                2. Each contributing relative told how their information will be used.
                3. Confidential items marked so they are never shared without asking.
                4. Access to the record reviewed once a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written privacy rules for the family record, shared with contributing relatives, with confidential items marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three rules on who sees the record and where it is stored"
                - "Tell each contributing relative how their details will be used"
                - "Mark items told in confidence as not for sharing"
                - "Review who has access to the family record @recurring(yearly)"
            - name: Yearly family health history refresh
              description: |-
                ## Purpose
                Family histories go out of date quietly: a cousin is diagnosed, an uncle dies, a sibling has a genetic test and mentions it to nobody. A short yearly round of messages to the relatives who hear the most news keeps the record current without turning family time into interviews.

                ## Milestones
                1. A fixed month chosen for the refresh each year.
                2. A short message sent to the three or four best-informed relatives.
                3. New diagnoses, deaths and test results added to the tree.
                4. The red-flag check repeated against the updated tree.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The family record updated after a yearly round of messages for two consecutive years, with the red-flag check repeated each time."
                cadence: cyclic
              tasks:
                - "Choose the month for the yearly refresh"
                - "Send a short update request to the best-informed relatives @recurring(yearly)"
                - "Add new diagnoses, deaths and test results to the tree"
                - "Repeat the red-flag check on the updated tree"
            - name: Capturing a relative's new diagnosis
              description: |-
                ## Purpose
                When a relative is newly diagnosed, the details that matter for the rest of the family (the exact diagnosis, their age, whether genetic testing was offered) are easiest to get in the first months and hardest years later. Three standard questions, asked kindly once the shock has passed, capture them while they are fresh.

                ## Milestones
                1. Three standard questions written for new diagnoses.
                2. Each new diagnosis added to the tree within a month of hearing.
                3. Whether the relative was offered genetic testing noted.
                4. Your own doctor told when a diagnosis changes the family picture.

                ## Notes
                Give people time. A message a few weeks after the news usually lands better than questions on the day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new diagnosis heard about in a year is added to the tree within a month, with the genetic testing question answered."
                cadence: rolling
              tasks:
                - "Write the three questions you will ask after a new diagnosis"
                - "Add each new diagnosis to the tree within a month of hearing"
                - "Ask whether the relative was offered genetic testing"
                - "Ask close relatives whether there is health news to add @recurring(quarterly)"
            - name: Backup and version history for the family record
              description: |-
                ## Purpose
                Family records often live in a single spreadsheet or a notebook in one person's drawer, and they vanish with a lost laptop or a house clearance. A dated backup and a short change log protect decades of conversations that cannot be repeated once the older relatives have died.

                ## Milestones
                1. The master copy of the record kept in one agreed place.
                2. A second copy stored somewhere separate, encrypted if digital.
                3. A change log noting what was added and when.
                4. One named relative who knows where both copies are.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A master copy and a separate backup of the family record exist, with a change log and one relative who knows where both are."
                cadence: rolling
              tasks:
                - "Decide which copy of the record is the master"
                - "Store an encrypted second copy somewhere separate"
                - "Start a change log with the date and what was added"
                - "Refresh the backup copy of the family record @recurring(quarterly)"
                - "Tell one relative where both copies are kept"
            - name: Clinician-ready family history summary
              description: |-
                ## Purpose
                Doctors rarely have time to read a whole family tree, but they will read one page listing the relevant diagnoses by relationship, side of the family and age. Keeping that page current means every new specialist, from a cardiologist to a fertility clinic, gets the family picture in a minute.

                ## Milestones
                1. A one-page summary grouped by maternal and paternal side.
                2. Each entry showing relationship, condition and age at diagnosis.
                3. Known genetic test results in the family listed.
                4. The page dated and refreshed before any new specialist appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page family history summary dated within the last year, brought to every new specialist appointment."
                cadence: rolling
              tasks:
                - "Ask the agent to turn the family tree into a one-page summary"
                - "Check each entry shows relationship, condition and age at diagnosis"
                - "List any known genetic test results in the family"
                - "Refresh the summary before your yearly check-up @recurring(yearly)"
            - name: Relatives' contact and consent register
              description: |-
                ## Purpose
                Sharing a result or asking a follow-up question is only easy if you know how to reach each relative and what they have agreed to. A register of contact details, who is happy to be asked about health, and who wants to hear about genetic results keeps every approach respectful.

                ## Milestones
                1. Contact details for every reachable relative on the tree.
                2. A note of who is willing to discuss health and who prefers not to.
                3. Each relative's wish to hear or not hear genetic results recorded.
                4. Contact details checked once a year.

                ## Notes
                Start from the **Person** template for the relatives you contact most often.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register covering every reachable relative, with contact details and their stated preference on health conversations."
                cadence: rolling
              tasks:
                - "List contact details for every reachable relative on the tree"
                - "Note who is happy to talk about health and who is not"
                - "Record each relative's wish to hear or not hear genetic results"
                - "Check the register's contact details are current @recurring(yearly)"
            - name: Log of what your family history means for your checks
              description: |-
                ## Purpose
                A family history can mean earlier or more frequent checks, for example bowel screening starting younger after a parent's early bowel cancer, but the advice gets lost between appointments. A log of what each clinician said your family history means for you, with dates, keeps the advice in one place so it can be acted on in the right part of your health plan.

                ## Milestones
                1. Every recommendation linked to family history recorded with who made it and when.
                2. Each recommendation passed to the screening or check-up plan where it belongs.
                3. Questions about unclear advice listed for the next appointment.
                4. The log reviewed with your doctor once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A dated log of every recommendation based on family history, each one passed to the screening or check-up plan that acts on it."
                cadence: rolling
              tasks:
                - "List every recommendation a clinician has made because of family history"
                - "Note who made each recommendation and when"
                - "Copy each recommendation into the plan where it will be acted on"
                - "Ask your doctor whether the recommendations still apply @recurring(yearly)"
            - name: Monthly family history capture slot
              description: |-
                ## Purpose
                Useful details turn up in passing: a cousin mentions a heart condition at a wedding, an aunt finds an old hospital letter in a drawer. Ten minutes a month moving those scraps from notes and messages into the record stops them dying in a phone.

                ## Milestones
                1. One place chosen where scraps are dropped during the month.
                2. A monthly slot in the calendar.
                3. The month's scraps transferred to the tree with their source.
                4. Unclear items turned into questions for the next conversation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly capture sessions completed in a year, with each scrap transferred to the record or turned into a question."
                cadence: rolling
              tasks:
                - "Pick one notes page as the drop point for family health scraps"
                - "Move the month's scraps into the family record @recurring(monthly:19)"
                - "Turn unclear scraps into questions for the next conversation"
            - name: Genealogy records search for health clues
              description: |-
                ## Purpose
                Genealogy sources such as census returns, parish and civil registers and old newspapers can supply dates of death, causes and occupations that living relatives never knew. A steady monthly hour on one branch at a time fills the oldest generations without letting family research swallow every weekend.

                ## Milestones
                1. One branch chosen at a time, starting with the side with the most gaps.
                2. Every finding noted with its source.
                3. Health-relevant findings added to the tree.
                4. Each branch marked done when its gaps are filled or confirmed unknowable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One branch of the tree researched through genealogy records, with every health-relevant finding added and sourced."
                cadence: rolling
              tasks:
                - "Choose the branch with the most gaps to search first"
                - "Spend an hour on genealogy records for that branch @recurring(monthly:23)"
                - "Add each health-relevant finding to the tree with its source"
                - "Mark the branch done when its gaps are filled or unknowable"
            - name: How inheritance patterns work
              description: |-
                ## Purpose
                Knowing the difference between dominant, recessive and X-linked inheritance, and why most common conditions are multifactorial, explains why a condition skips a generation or affects only the men in a family. A few hours with a reputable genetics charity's guides makes counselling appointments far easier to follow.

                ## Milestones
                1. Dominant, recessive and X-linked inheritance explainable in your own words.
                2. Multifactorial conditions, such as type 2 diabetes, understood as a different kind of family risk.
                3. One pattern in your own tree tentatively labelled for discussion with a professional.
                4. Remaining questions listed.

                ## Notes
                Use patient guides from a genetics service or charity rather than forums. Labelling a pattern yourself is a prompt for questions, not a conclusion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note in your own words explaining dominant, recessive, X-linked and multifactorial inheritance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find patient guides on inheritance from a genetics charity"
                - "Write a one-paragraph explanation of each inheritance pattern"
                - "Mark any pattern in your tree you want to ask a professional about"
                - "List the questions the reading left open"
            - name: Reading and drawing a standard pedigree chart
              description: |-
                ## Purpose
                Genetic services draw families with standard symbols: squares and circles, shading for affected people, a line through those who have died. Learning the notation lets you read the chart in a clinic letter and redraw your own tree in a form any genetics professional reads at a glance.

                ## Milestones
                1. Standard pedigree symbols learnt from a published key.
                2. Your tree redrawn using the notation.
                3. The proband, the person the tree centres on, marked.
                4. The chart checked against a clinic letter's pedigree if you have one.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Your family tree redrawn in standard pedigree notation, with affected, deceased and proband marked correctly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a published key to standard pedigree symbols"
                - "Redraw your tree using the standard notation"
                - "Mark yourself or the affected relative as the proband"
                - "Compare your chart with any pedigree in a clinic letter"
            - name: Absolute and relative risk in plain numbers
              description: |-
                ## Purpose
                Reports say a variant doubles your risk, but doubling a 1 percent risk and doubling a 20 percent risk lead to very different decisions. Practising the translation from relative to absolute risk, and asking for numbers out of 100, makes genetic results and screening advice far easier to weigh.

                ## Milestones
                1. The difference between absolute and relative risk explainable with an example.
                2. Three real statements from articles or letters converted to numbers out of 100.
                3. A standard question ready for clinicians: out of 100 people like me, how many.
                4. Lifetime risk and ten-year risk clearly distinguished.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real risk statements converted into absolute numbers out of 100, with the working written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain-language guide to absolute and relative risk"
                - "Convert three risk statements from articles into numbers out of 100"
                - "Write your standard question asking how many out of 100"
                - "Note the difference between lifetime and ten-year risk"
            - name: What genetic tests can and cannot tell you
              description: |-
                ## Purpose
                Diagnostic, predictive, carrier and pharmacogenomic tests answer different questions, and a negative result means little if the family's variant was never identified. Understanding the main test types and the limits of each prevents false reassurance and makes the counselling conversation shorter.

                ## Milestones
                1. Diagnostic, predictive, carrier and pharmacogenomic tests each described in a sentence.
                2. The meaning of positive, negative and uncertain results understood.
                3. The reason for testing an affected relative first understood.
                4. Questions for a genetic counsellor listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note describing four test types and three possible results, with a list of questions for a counsellor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a genetics service guide to the main types of genetic test"
                - "Write one sentence on what each test type answers"
                - "Note what a negative result means when no family variant is known"
                - "List questions to take to a genetic counsellor"
            - name: Consumer DNA test limits and raw data
              description: |-
                ## Purpose
                Direct-to-consumer DNA kits check a selection of known variants rather than reading whole genes, and third-party tools that interpret raw data can report variants a clinical laboratory later cannot confirm. Understanding what a kit does and does not cover, before buying one or acting on a report, prevents both panic and false comfort.

                ## Milestones
                1. The variants a chosen kit actually tests found in its own documentation.
                2. The difference between a genotyping array and clinical sequencing understood.
                3. The company's policies on data sharing, research and law enforcement read.
                4. A personal rule set: any health finding is confirmed clinically before any decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on what one consumer DNA kit tests, its data policies, and the rule that health findings get clinical confirmation."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read which variants a consumer DNA kit actually tests"
                - "Read the company's policies on data sharing and research use"
                - "Note the difference between a genotyping array and clinical sequencing"
                - "Write a rule to confirm any health finding through a clinician"
            - name: Genetic discrimination and insurance rules where you live
              description: |-
                ## Purpose
                Countries differ on whether insurers and employers can ask about genetic test results. Some protect health insurance but not life or long-term care cover, and some rely on voluntary industry codes. Knowing the rules where you live before testing means the decision is made with the consequences understood.

                ## Milestones
                1. The law or industry code on genetic information where you live identified, such as GINA in the United States.
                2. The types of cover it does and does not protect noted.
                3. Whether existing policies require disclosure of results checked.
                4. A short summary kept with any testing decision.

                ## Notes
                This organises information, it is not legal advice. Ask an insurance adviser or the regulator when the rules are unclear.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the genetic discrimination rules where you live, naming which insurance types are and are not protected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the law or industry code on genetic information where you live"
                - "Note which types of insurance it protects and which it does not"
                - "Check whether your existing policies require disclosure of results"
                - "Check for changes to the rules on genetic information @recurring(yearly)"
            - name: Talking with relatives about difficult health histories
              description: |-
                ## Purpose
                Questions about a parent's dementia, a sibling's mental illness or a baby who died can reopen grief or old arguments. Practising how to explain why you are asking, how to accept a no, and when to stop makes these conversations possible with relatives who would otherwise shut down.

                ## Milestones
                1. A short explanation of why you are asking, ready to use.
                2. Two or three ways to back off gracefully written down.
                3. One difficult conversation held at a time and place the relative chose.
                4. Notes made afterwards on what worked and what to change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One planned difficult conversation held with a relative, with notes on what worked and what to change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write two sentences explaining why you are gathering family history"
                - "Prepare two ways to end the topic kindly if it goes badly"
                - "Let the relative choose the time and place to talk"
                - "Write down what worked within a day of the conversation"
            - name: Deciding whether to ask for a genetics referral
              description: |-
                ## Purpose
                Only some family patterns meet the criteria for a genetics service, and referral routes differ: some systems need a doctor's referral, some accept self-referral, some offer private counselling. Gathering the criteria and your own evidence turns a vague worry into a clear yes, no or not yet.

                ## Milestones
                1. The referral criteria your health service uses found.
                2. Your tree compared with them and the result written down.
                3. The referral route open to you identified, including any private option and its cost.
                4. A decision recorded with the reason.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on seeking a genetics referral, with the criteria checked and the route identified."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the genetics referral criteria your health service uses"
                - "Compare your family tree with the criteria"
                - "Find out whether you need a doctor's referral or can self-refer"
                - "Record your decision and the reason for it"
            - name: Clinical versus consumer genetic testing
              description: |-
                ## Purpose
                Clinical tests ordered through a genetics service or a doctor come with counselling, confirmed results and a place in your record; a consumer kit is cheaper and quicker but narrower and unconfirmed. Comparing the two against your actual question, budget and privacy concerns leads to a choice rather than an impulse purchase.

                ## Milestones
                1. The question you want answered written in one sentence.
                2. Clinical and consumer options compared on scope, cost, counselling, confirmation and privacy.
                3. A doctor or genetics professional asked which fits your question.
                4. A choice recorded with the reasons.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of clinical and consumer testing against your question, with a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the question you want a genetic test to answer"
                - "Compare clinical and consumer options on scope, cost and privacy"
                - "Ask a doctor or counsellor which option fits your question"
                - "Record your choice and why"
            - name: Insurance timing before predictive testing
              description: |-
                ## Purpose
                Where the rules allow insurers to use predictive results, some people review life, income protection or long-term care cover before testing so the decision is not constrained later. Listing your current cover and its disclosure rules, and talking it through with an adviser, means the timing question is answered deliberately.

                ## Milestones
                1. Current life, income protection, critical illness and long-term care cover listed.
                2. Disclosure rules for each policy and for any new application understood.
                3. An independent adviser consulted where the stakes are high.
                4. A decision recorded on whether to review cover before testing.

                ## Notes
                This project organises the question. It does not recommend buying any product.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on insurance timing, made after listing current cover and the disclosure rules for each policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your current life, income and long-term care cover"
                - "Check what each policy and new application asks about genetic tests"
                - "Book a session with an independent adviser if the stakes are high"
                - "Record whether you will review cover before testing"
            - name: Deciding what to do with existing consumer DNA results
              description: |-
                ## Purpose
                Many people have an ancestry kit result sitting in an account they barely remember, with health reports, relative matching and research consent switched on. Deciding what to keep, download, switch off or delete puts you back in charge of data that also reveals things about your relatives.

                ## Milestones
                1. Every DNA testing account you have created listed.
                2. Privacy settings, relative matching and research consent reviewed in each.
                3. Raw data downloaded or deleted, by decision.
                4. Any health finding taken to a clinician for confirmation rather than acted on.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every consumer DNA account reviewed, with settings changed and raw data kept or deleted by a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every DNA testing account you have created"
                - "Review relative matching and research consent in each account"
                - "Download or delete the raw data, by decision"
                - "Take any health finding to a clinician before acting on it"
            - name: Choosing who to tell about a genetic result
              description: |-
                ## Purpose
                Parents, siblings, children and cousins may share a significant result found in you, and some will want to know while others will not. Deciding in advance who to tell, in what order and how, avoids a rushed group message and respects each relative's right not to know.

                ## Milestones
                1. Relatives who may share the result listed with the counsellor's help.
                2. Each relative's known preference about genetic news checked in the register.
                3. An order and a method chosen for each conversation.
                4. A family letter from the genetics service requested if one is offered.

                ## Notes
                Many genetics services provide a standard family letter explaining the result and how relatives can get tested themselves.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan naming each relative to tell, the order and the method, agreed with a genetic counsellor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List relatives who may share the result with your counsellor's help"
                - "Check each relative's preference in the contact register"
                - "Choose an order and a method for each conversation"
                - "Ask the genetics service for a family letter you can pass on"
            - name: Digitising old family letters and medical papers
              description: |-
                ## Purpose
                Old hospital letters, death certificates, dated photographs and military medical cards often sit in a shoebox that one relative owns. Scanning and labelling them preserves evidence that can confirm a diagnosis decades later, and lets the whole family see it.

                ## Milestones
                1. The boxes and folders holding family papers located.
                2. Health-relevant documents scanned and named by person and date.
                3. Each document linked to the right person in the tree.
                4. Originals returned to their owners with a thank you.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every health-relevant family document found has been scanned, named by person and date, and linked to the tree."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask which relatives hold boxes of old family papers"
                - "Scan the health-relevant documents at a readable resolution"
                - "Name each scan by person, document type and date"
                - "Link each scan to the right person in the family tree"
            - name: Asking an affected relative to test first
              description: |-
                ## Purpose
                Genetic testing is most informative when it starts with the relative who has the condition, because a variant found in them can then be looked for precisely in everyone else. Asking that relative to consider testing is delicate, so planning the request, and accepting the answer, matters as much as the science.

                ## Milestones
                1. The best relative to test first identified with a genetics professional's help.
                2. Their treating team's view on testing found out, if they are willing to ask.
                3. The request made in a way that leaves room to say no.
                4. Their answer respected and your own plan adjusted.

                ## Notes
                If the affected relative has died, a genetics service can sometimes use stored tissue or blood samples from their treatment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The affected relative asked about testing first, their answer recorded and your own testing plan adjusted to it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask a genetics professional which relative is best to test first"
                - "Plan how you will ask them, leaving room to say no"
                - "Make the request in person or by phone"
                - "Adjust your own testing plan to their answer"
            - name: Predictive testing decision for an untreatable condition
              description: |-
                ## Purpose
                Testing for a condition with no proven prevention, such as Huntington's disease, is a different decision from testing where screening or surgery can change the outcome, and services usually build in several sessions and a pause. Working through reasons, timing, support and what each result would mean, alongside the service's process, leads to a decision you can live with either way.

                ## Milestones
                1. Reasons for and against testing written down.
                2. The service's counselling process and timeline understood.
                3. One support person chosen to go through it with you.
                4. A decision to test, defer or not test recorded, with permission to change it later.

                ## Notes
                Not testing is a legitimate outcome. Many people at risk choose to wait, sometimes for years.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to test, defer or not test, made after the service's counselling sessions with a named support person."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down your reasons for and against testing"
                - "Ask the genetics service how its predictive testing process works"
                - "Choose one person to support you through the process"
                - "Record your decision to test, defer or not test"
            - name: Genetic counselling appointment
              description: |-
                ## Purpose
                Counselling appointments often last about an hour, sometimes the only one before a test decision, and much of that time can go on drawing the family tree. Arriving with the pedigree, relatives' diagnoses, documents and questions moves the time on to what testing would mean for you.

                ## Milestones
                1. The pedigree, summary and any relatives' reports sent ahead or packed.
                2. A written list of your top five questions.
                3. Someone to come with you, or a plan for notes.
                4. The counsellor's follow-up letter received and filed.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The appointment attended with pedigree and questions, and the follow-up letter filed with the family record."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the pedigree and family summary to the clinic ahead of time"
                - "Write your top five questions for the counsellor"
                - "Ask someone to come with you or take notes"
                - "File the counsellor's follow-up letter with the family record"
            - name: Genetic test results appointment
              description: |-
                ## Purpose
                Results can be positive, negative or uncertain, and each needs a different follow-up: extra checks, family letters, or a wait for reclassification. Preparing for all three before the appointment means you leave knowing the next step instead of trying to remember it later.

                ## Milestones
                1. Questions prepared for a positive, a negative and an uncertain result.
                2. A support person arranged.
                3. A copy of the laboratory report obtained, with the result's classification.
                4. Agreed next steps written down within a day.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A copy of the laboratory report obtained and the agreed next steps written down within a day of the results appointment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Prepare questions for a positive, negative and uncertain result"
                - "Arrange for someone to come with you"
                - "Ask for a copy of the full laboratory report"
                - "Write down the agreed next steps within a day"
            - name: Family gathering health history session
              description: |-
                ## Purpose
                Reunions, big birthdays and religious holidays put the relatives who remember most in one room, often the only time that happens all year. A relaxed half hour with the eldest, photos and the draft tree on the table, gets more out of one gathering than months of messages.

                ## Milestones
                1. The gathering chosen and the relatives who remember most identified.
                2. Permission asked in advance from those you hope to talk with.
                3. Photos and the draft tree brought to prompt memories.
                4. New details written up within two days.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A health history session held at a family gathering, with new details added to the tree within two days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the next gathering where the eldest relatives will be present"
                - "Ask the relatives you hope to talk with whether they would mind"
                - "Bring old photos and the draft tree to prompt memories"
                - "Write up new details within two days of the gathering"
            - name: Recording health details when a relative dies
              description: |-
                ## Purpose
                When an older relative is near the end of life or has just died, the people who know their medical history are together and the care team still holds the records. Gently gathering the diagnosis, age and any test results then, with the next of kin's agreement, saves a search that may be impossible in ten years.

                ## Milestones
                1. The next of kin's agreement to record health details.
                2. The confirmed diagnosis and any genetic test results noted.
                3. The clinical team asked about post-mortem findings or stored samples, where relevant.
                4. The cause of death from the certificate recorded in the tree.

                ## Notes
                Choose the timing with care; most of this can wait weeks. Ask the clinical team, not grieving relatives, about stored samples.
              priority: high
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "The relative's diagnosis, age and cause of death recorded with the next of kin's agreement, and stored samples asked about."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the next of kin whether they are happy for details to be recorded"
                - "Note the confirmed diagnosis and any genetic test results"
                - "Ask the clinical team whether any samples were stored"
                - "Record the cause of death from the certificate in the tree"
            - name: Preconception genetics consultation
              description: |-
                ## Purpose
                Couples planning a pregnancy may be offered carrier screening based on ancestry or family history, and some results open options such as donor gametes or testing during pregnancy. Booking a consultation before trying to conceive leaves time for tests and decisions that are rushed once a pregnancy has begun.

                ## Milestones
                1. Both partners' family histories summarised on one page.
                2. The consultation booked with your doctor or a genetics service.
                3. Carrier screening offered and accepted or declined, with the reasons noted.
                4. Results and any follow-up plan recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A preconception consultation held with both family histories, and any carrier screening decision and results recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise both partners' family histories on one page"
                - "Book a preconception appointment with your doctor or genetics service"
                - "Ask whether carrier screening is offered for your ancestry or history"
                - "Record the screening decision and any results"
            - name: Exchanging family histories with a partner before pregnancy
              description: |-
                ## Purpose
                Each partner usually knows their own family patchily and the other's barely at all, and recessive carrier conditions only matter for a child when both partners carry the same one. Swapping trees and filling your partner's gaps through their relatives gives any consultation two complete sides instead of one.

                ## Milestones
                1. Both partners' three-generation trees drawn.
                2. Gaps in each tree listed.
                3. The partner's relatives asked about the main gaps.
                4. Any shared ancestry or blood relationship between the partners noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both partners' three-generation trees completed and exchanged, with the main gaps on each side followed up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with your partner to draw both trees this month"
                - "Swap trees and list the gaps on each side"
                - "Ask your partner's relatives about the main gaps"
                - "Note any shared ancestry between the two of you"
            - name: Family history file for a new baby
              description: |-
                ## Purpose
                Newborn checks, early hearing and heart concerns, and later school-age questions often turn on family history from both parents, yet a child's health record starts empty. A short file for each child, drawn from both sides, means any doctor seeing them gets the relevant history in a minute.

                ## Milestones
                1. Both parents' relevant family history summarised for the child.
                2. Newborn screening results added.
                3. The file shared with the child's doctor or health visitor.
                4. The file updated each year as the child grows.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A family history file exists for each child, with both parents' history and newborn screening results, shared with their doctor."
                cadence: rolling
              tasks:
                - "Summarise both parents' relevant history in the child's own file"
                - "Add the child's newborn screening results"
                - "Share the file with the child's doctor at the next check"
                - "Add the child's own new diagnoses to their file @recurring(yearly)"
            - name: Explaining an inherited condition to your children
              description: |-
                ## Purpose
                Children cope better with a family condition when it is explained honestly, in steps that match their age, rather than discovered by accident. Planning what to say at each age, and learning when testing would even be an option for them, keeps you ahead of their questions.

                ## Milestones
                1. Age-appropriate resources found from a genetics charity or service.
                2. A first simple explanation given.
                3. Questions the child asked noted for later.
                4. Guidance obtained on the age at which predictive testing is usually considered for this condition.

                ## Notes
                Many genetics services advise waiting until a child can decide for themselves before predictive testing for adult-onset conditions, unless a result would change their care in childhood. Ask your service.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A first age-appropriate explanation given to each child, with their questions noted and testing-age guidance obtained."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find age-appropriate resources from a genetics charity"
                - "Plan what to say in two or three short sentences"
                - "Have the first conversation at a calm moment"
                - "Ask the genetics service when testing is usually considered for children"
            - name: Health history when you were adopted or donor-conceived
              description: |-
                ## Purpose
                Adopted and donor-conceived people often know little or nothing of their biological family's health, and clinicians may read a blank as reassuring. Using the routes that exist, such as adoption records, donor registries and intermediary services, and telling doctors clearly that the history is unknown, closes as much of the gap as possible.

                ## Milestones
                1. The records routes available where you live identified.
                2. A request made to the adoption agency, court or donor registry.
                3. Any health information received added to your own record.
                4. Your doctor told that your biological family history is unknown or partial.

                ## Notes
                Some routes offer counselling or an intermediary before contact; using them is often required and usually helpful.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Records requests submitted through every available route, findings recorded, and your doctor told the history is unknown or partial."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find which adoption or donor records routes exist where you live"
                - "Submit a records request through the right agency or registry"
                - "Add any health information received to your own record"
                - "Tell your doctor that your biological family history is partial"
            - name: Sudden death history before a child starts intensive sport
              description: |-
                ## Purpose
                An unexplained sudden death under 40 in the family, or a relative with an inherited heart condition such as cardiomyopathy, is something clinicians want to know before a young person takes up intensive sport. Checking the tree for these events and raising them with your child's doctor turns a vague family story into a clear answer on whether a heart assessment is needed.

                ## Milestones
                1. The tree checked for sudden or unexplained deaths under 40, including unexplained drownings or crashes.
                2. Any relative with a known inherited heart condition listed.
                3. The findings discussed with the child's doctor.
                4. The doctor's advice on a heart assessment recorded.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Family sudden deaths and inherited heart conditions listed and discussed with the child's doctor, with their advice recorded."
                cadence: cyclic
              tasks:
                - "Check the tree for sudden or unexplained deaths before age 40"
                - "List any relative diagnosed with an inherited heart condition"
                - "Discuss the findings with your child's doctor"
                - "Raise any new family heart events before each sports season @recurring(yearly)"
            - name: Recording your health history for grandchildren
              description: |-
                ## Purpose
                Older relatives hold details nobody else can supply, and grandchildren may need them decades from now for their own care. Writing or recording your own and your parents' health history in plain words takes an afternoon and cannot be recreated later.

                ## Milestones
                1. Your own conditions and ages at diagnosis written in plain words.
                2. What you know of your parents' and grandparents' health added.
                3. A recording or written copy given to a named younger relative.
                4. A copy added to the family record.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written or recorded health history given to a named younger relative and added to the family record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your own conditions and the age each began"
                - "Add what you remember of your parents' and grandparents' health"
                - "Record yourself talking it through if writing feels like a chore"
                - "Give a copy to a named grandchild or younger relative"
            - name: Family history with estranged or blended families
              description: |-
                ## Purpose
                Estrangement, divorce and step-families leave gaps exactly where an inherited condition might sit, and asking directly may not be possible or safe. Indirect routes, such as a relative who is still in touch, written questions or a clinician's letter, collect what is available without forcing contact.

                ## Milestones
                1. The gaps caused by estrangement or separation listed.
                2. A safe indirect route chosen for each gap.
                3. A short written request sent through that route where appropriate.
                4. Unfillable gaps marked as unknown and your doctor told.

                ## Notes
                Step-relatives do not belong on the medical tree, but half-siblings and biological parents you have no contact with do.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each estrangement gap listed with a chosen route, requests sent where safe, and unfillable gaps marked and reported to your doctor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the gaps caused by estrangement or separation"
                - "Choose a safe indirect route for each gap"
                - "Send a short written health question where it is safe to"
                - "Mark the gaps that cannot be filled and tell your doctor"
            - name: Coordinating cascade testing after a family variant is found
              description: |-
                ## Purpose
                Once a disease-causing variant is confirmed, at-risk relatives can usually have a simpler targeted test, yet uptake across families is often patchy. Acting as the family's coordinator, with a tracker of who has been told, who has decided and who has tested, closes that gap without pressuring anyone.

                ## Milestones
                1. A tracker listing every at-risk relative and the exact variant details.
                2. Each relative sent the family letter or told directly.
                3. Each relative's choice recorded, including the choice not to test.
                4. Relatives in other countries given the variant details to take to their own services.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every at-risk relative informed and their decision recorded in a cascade tracker, including those who chose not to test."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a tracker of at-risk relatives with the variant details"
                - "Send each relative the family letter or tell them directly"
                - "Record each relative's decision without chasing those who declined"
                - "Update the cascade tracker with new tests and decisions @recurring(monthly:8)"
            - name: Variant of uncertain significance follow-up
              description: |-
                ## Purpose
                An uncertain variant is neither a diagnosis nor an all-clear, and laboratories reclassify them as evidence builds, sometimes years later. Knowing who will tell you if it changes, and checking yourself, stops an old result quietly steering decisions it should not.

                ## Milestones
                1. The exact variant name, gene and laboratory recorded.
                2. The person responsible for telling you of any reclassification confirmed.
                3. A yearly check with the clinic or laboratory in place.
                4. Care confirmed as based on family history, not the variant, unless a clinician says otherwise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The variant, gene and laboratory recorded, the person responsible for reclassification news named, and a yearly check in place."
                cadence: rolling
              tasks:
                - "Record the variant name, gene and laboratory from the report"
                - "Ask who will tell you if the variant is reclassified"
                - "Ask the clinic whether the variant has been reclassified @recurring(yearly)"
                - "Confirm with your clinician that care follows family history meanwhile"
            - name: Pharmacogenomic results on your medical record
              description: |-
                ## Purpose
                Some genetic variants change how the body handles common medicines, including certain painkillers, antidepressants and blood thinners. If you have a pharmacogenomic result from a clinical test, getting it onto your medical record and medicines list means it is used at the moment a prescription is written.

                ## Milestones
                1. The result and the medicines it affects listed from the report.
                2. The result added to your medical record by your doctor or pharmacist.
                3. A card or phone note carrying the result.
                4. The result confirmed on file at each medication review.

                ## Notes
                Never change a medicine because of a consumer report. Take it to a pharmacist or doctor first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pharmacogenomic result is recorded in your medical record and carried on a card or phone note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the result and the medicines it affects from the report"
                - "Ask your doctor or pharmacist to add it to your record"
                - "Carry the result on a card or in your phone's medical ID"
                - "Check the result is on file at each medication review @recurring(yearly)"
            - name: Joining a hereditary condition registry or study
              description: |-
                ## Purpose
                Registries and research studies for inherited conditions offer updates on new guidance, sometimes extra follow-up, and the chance to improve what future relatives are told. Choosing a reputable one, understanding consent and data use, and keeping your details current makes taking part worth the effort.

                ## Milestones
                1. Registries or studies for the condition identified through the genetics service or a patient charity.
                2. Consent and data use terms read.
                3. A decision recorded to join or not.
                4. Contact and health details kept current if you join.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on joining a registry or study, made after reading its consent and data terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your genetics service or a charity which registries exist"
                - "Read the consent and data use terms for the best candidate"
                - "Record your decision to join or not"
                - "Update your contact and health details with the registry @recurring(yearly)"
            - name: DNA banking for a seriously ill relative
              description: |-
                ## Purpose
                When a relative with a suspected inherited condition is seriously ill and no test has been done, a stored DNA sample may be the only way future generations can be tested accurately. Raising banking with their care team while it is still possible keeps that option open, even if nobody wants testing now.

                ## Milestones
                1. The relative's and next of kin's willingness confirmed.
                2. The care team or a genetics service asked whether banking is available and at what cost.
                3. A sample stored, with its location and access rules recorded.
                4. Relatives who may need it told where it is held.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A DNA sample from the affected relative stored, or the option declined, with location and access rules recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the relative and next of kin whether banking would be welcome"
                - "Ask the care team or genetics service whether DNA banking is available"
                - "Record where the sample is held and who can access it"
                - "Tell the relatives who may need it where the sample is held"
            - name: Family plan for a known hereditary condition
              description: |-
                ## Purpose
                Families with a confirmed condition, such as familial hypercholesterolaemia or Lynch syndrome, often have relatives under different services, at different stages of testing and follow-up. A shared, consent-based overview of who is tested, who is under follow-up and where guidance has changed keeps the whole family moving rather than relying on one person's memory.

                ## Milestones
                1. Willing relatives agreed on what is shared and with whom.
                2. A shared overview of testing status and follow-up stage for each participant.
                3. A yearly family check-in on guidance changes held.
                4. Young relatives offered information as they reach the relevant age.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consent-based family overview of testing and follow-up status, refreshed at a yearly family check-in."
                cadence: cyclic
              tasks:
                - "Agree with willing relatives what will be shared and with whom"
                - "Build a shared overview of testing and follow-up status"
                - "Hold a family check-in on guidance changes @recurring(yearly)"
                - "Offer information to young relatives as they reach the relevant age"
---

# Family Medical History & Genetics

This area is for anyone who wants to know what runs in their family and what to do about it, including parents thinking about what they pass on. It starts with the foundations (an inventory of close relatives, a three-generation tree, a red-flag check and a first conversation with your doctor), then the routines that keep the record current, the knowledge that makes genetics make sense, the decisions about counselling and testing, the appointments and gatherings worth preparing for, situations such as adoption, pregnancy and estrangement, and finally the specialist work of families living with a confirmed variant.

What repeats is a yearly refresh with the best-informed relatives, a quarterly backup and health news check, a monthly capture slot and genealogy hour, and yearly checks on insurance rules, uncertain variants and registry details. The Risk register, Person, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
