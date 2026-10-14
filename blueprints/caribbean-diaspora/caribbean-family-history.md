---
id: caribbean-diaspora.caribbean-family-history
name: Caribbean Family History and Genealogy
description: "A Caribbean family tree built from real records: elders' memories recorded, civil and church registers, slave registers, indentureship papers, DNA matches and archive trips, with routines that keep it sourced and shared."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, caribbean-family-history, everyone, genealogy, family-tree, dna, archives, indentureship]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - trip
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Caribbean Family History and Genealogy
          description: "Tracing Caribbean family history: civil and church records, slave registers, indentureship records, elders' memories, DNA tests and a family tree."
          projects:
            - name: What the family already knows, on one page
              description: |-
                ## Purpose
                Most Caribbean families hold far more than they realise, scattered across a grandmother's memory, a funeral programme and an uncle who knows which estate the family came from. Writing down everything you already know about four generations, with who told you and how sure they were, gives you a starting tree and shows exactly where the gaps are before you spend money on records.

                ## Milestones
                1. A four-generation chart filled in from memory, with blanks left blank rather than guessed.
                2. Each fact marked with who said it and whether a document backs it.
                3. A list of the ten biggest gaps, such as a great-grandfather's full name or a grandmother's birthplace.
                4. Three relatives named as the people most likely to fill those gaps.

                ## Notes
                Write what you were told, not what you think it means. 'Came from Africa' or 'came on the boat from India' is a clue worth keeping in those exact words.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four-generation chart exists with every entry marked as remembered or documented, plus a written list of the ten biggest gaps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch a four-generation chart from memory tonight"
                - "Mark each name as remembered, told by someone, or documented"
                - "List the ten gaps you most want to fill"
                - "Name the relative most likely to answer each gap"
            - name: Family papers box of certificates, Bibles and programmes
              description: |-
                ## Purpose
                Documents that answer genealogy questions are already in the family, in a biscuit tin, a suitcase under a bed or a cousin's drawer in Port of Spain or Brooklyn: birth certificates, marriage lines, old passports, the family Bible, funeral programmes, school reports, letters and land receipts. Gathering them, or at least photographing them, before they are thrown out or ruined by damp is the most urgent job in this area.

                ## Milestones
                1. An inventory of every family document you hold, with where the original lives.
                2. A phone photograph or scan of each one, named by person and date.
                3. Relatives at home and abroad asked what they hold, with a list of who has what.
                4. Originals stored flat in acid-free folders away from humidity and termites.

                ## Notes
                Funeral programmes are gold in Caribbean research: one page often names siblings, children, grandchildren and the home district. Ask for every programme the family has kept.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every known family document, who holds the original, and a digital copy saved for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open the drawer or tin where the family keeps its papers and list what is there"
                - "Photograph each document in daylight against a plain background"
                - "Message three relatives asking what certificates and programmes they hold"
                - "Buy acid-free folders and a sealed box for the originals"
            - name: Choosing family tree software and where the tree lives
              description: |-
                ## Purpose
                A tree kept in someone's head or a notebook cannot be shared, searched or backed up, and a tree built only on a subscription website may vanish when the subscription lapses. Choosing between desktop software, an online tree and a free shared tree, and deciding which is the master copy, saves hours of re-entering later.

                ## Milestones
                1. Three options compared on cost, privacy settings, GEDCOM export and offline access.
                2. One tool chosen as the master copy, with the reason written down.
                3. The four-generation chart entered into it.
                4. A note on whether any online copy will be public, private or shared with invited relatives.

                ## Notes
                Start from the **Purchase decision** template. Whatever you choose, make sure it exports to GEDCOM, the standard file format that lets you move a tree from one program to another.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One family tree tool is chosen as the master copy, with GEDCOM export confirmed and the first four generations entered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three tree tools you could use, including one free option"
                - "Check that each one exports a GEDCOM file"
                - "Enter the four-generation chart into the tool you chose"
                - "Write a line in the tree notes saying this is the master copy"
            - name: Research log and source citations habit
              description: |-
                ## Purpose
                Six months in, the commonest problem is not knowing whether you already searched a parish's baptisms or where a date came from. A simple log of every search, including the ones that found nothing, and a citation on every fact stops you paying twice for the same certificate and lets a cousin check your work.

                ## Milestones
                1. A research log with columns for date, question, source searched, result and next step.
                2. Every fact in the tree carrying a source citation or marked as family tradition.
                3. Nil searches recorded, so they are not repeated.
                4. A monthly tidy of the log that closes answered questions.

                ## Notes
                Record nil results as carefully as finds. 'Searched St Andrew births 1900 to 1905 for Mohammed, not found' is a real result.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every research session for three months has a log entry, including nil results, and every new fact in the tree carries a citation."
                cadence: rolling
              tasks:
                - "Set up a research log with date, question, source, result and next step"
                - "Add a citation to each fact you entered from documents"
                - "Record every nil search alongside the finds"
                - "Tidy the research log and close answered questions @recurring(monthly:28)"
            - name: Names register of pet names, spellings and changes
              description: |-
                ## Purpose
                Caribbean records rarely match the name the family used. A grandmother known all her life as Baby or Tantie may be registered as Albertina, a Hindu ancestor may appear as Ramdeen, Ramdin and Ram Deen, a Chinese great-grandfather may carry an anglicised name, and a child may be registered under the mother's surname when the parents were not married. A register of every known name and spelling for each ancestor turns failed searches into finds.

                ## Milestones
                1. Each ancestor in four generations listed with their pet name and their government name.
                2. Spelling variants recorded for every surname, including clerks' mistakes.
                3. Known name changes noted, such as baptismal names taken on conversion or surnames changed at marriage.
                4. The variants used as search terms, with results logged.

                ## Notes
                A pet name (or home name) is the everyday name used by family and the district; the government name is the one on the birth certificate. Ask elders for both.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A names register lists home names, registered names and spelling variants for every ancestor in four generations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a parent or elder for the pet name and government name of each grandparent"
                - "List every spelling you have seen for each family surname"
                - "Note where a child may have been registered under the mother's surname"
                - "Search one record collection using all the variants for one ancestor"
            - name: Gazetteer of family parishes, districts and estates
              description: |-
                ## Purpose
                Records are filed by parish, ward, district or estate, and the place a family says it comes from may be a village that was once a sugar estate, a district renamed after independence, or a parish later split in two. A list of every family place with its old names, parish and modern location tells you which registration district, church and archive to search.

                ## Milestones
                1. Every place named in family stories listed, from village up to parish or county.
                2. Old and modern names matched for each place, with the estate it grew from where relevant.
                3. Each place pinned on a map with the nearest churches and cemeteries.
                4. The civil registration district for each place identified.

                ## Notes
                Old estate maps and colonial gazetteers often survive in national archives and university collections. A village named after an estate is a strong hint about where to look in earlier records.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A place list maps every family place to its parish, old names, registration district and nearest churches."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every village, district and estate name mentioned in family stories"
                - "Find each place on a modern map and pin it"
                - "Look up the parish and registration district for each place"
                - "Note any estate the village grew out of"
            - name: First three generations proved with certificates
              description: |-
                ## Purpose
                Before reaching back to the 1800s, the recent generations need to be solid, because one wrong grandparent sends every later search down the wrong line. Ordering birth, marriage and death certificates for yourself, your parents and your grandparents from the civil registry in each country gives you documents that name parents, addresses and occupations to carry the search back.

                ## Milestones
                1. A list of every certificate needed for three generations, with the country and office that holds it.
                2. Copies already in the family checked off against the list.
                3. The missing certificates ordered, online or through a relative at home.
                4. Each certificate transcribed and its facts entered in the tree with a citation.

                ## Notes
                Many registries have an online ordering service; others need a relative to call in person. Check the current process and fees on the official registry website before paying any agent.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Birth, marriage and death certificates are held for every applicable person across three generations, or the missing ones are on order."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each certificate needed for you, your parents and grandparents"
                - "Check the official registry website in each country for how to order"
                - "Order the first two missing certificates"
                - "Transcribe each certificate into the tree when it arrives"
            - name: Family ground rules for privacy and hard discoveries
              description: |-
                ## Purpose
                Family history in the Caribbean turns up things some relatives would rather keep quiet: outside children, a first marriage, a parent who was not who the papers say, an ancestor's enslaver. Agreeing a few ground rules before you start, about living people, what goes online and how surprises are handled, keeps the research from causing a quarrel at the next wedding or nine night (the wake held in the nights after a death).

                ## Milestones
                1. A short written note of what will and will not be shared online, especially about living people.
                2. Two or three senior relatives consulted on the rules.
                3. An agreed way to handle surprising DNA or record findings, privately first.
                4. The rules saved with the tree and sent to anyone helping.

                ## Notes
                A sensible default: nothing about living people goes on a public tree, and anything that changes who someone thought their parent was is told to them privately before anyone else.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written set of family privacy rules, seen by at least two senior relatives, is saved with the tree."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft five plain rules on living people, online sharing and surprises"
                - "Talk the rules through with two senior relatives"
                - "Write down how a surprising DNA result will be handled"
                - "Save the agreed rules alongside the tree"
            - name: Choosing the first line to research
              description: |-
                ## Purpose
                Trying to trace every branch at once leads to a tree that is wide, thin and unsourced. Picking one ancestor and one clear question, such as where your mother's father was born or which ship brought your Indian great-grandmother, focuses the first months and teaches you the records the other lines will need too.

                ## Milestones
                1. Each of the four grandparent lines rated on how much is known and how much is likely to survive.
                2. One line and one specific research question chosen.
                3. The records most likely to answer it listed in order.
                4. A date set to review progress and choose the next question.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One research question about one named ancestor is written down, with a ranked list of the records to search."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate each grandparent line on what is known and what records survive"
                - "Write one research question about one named ancestor"
                - "List the three record types most likely to answer it"
                - "Book a date in your diary to review the question"
            - name: Monthly family history research session
              description: |-
                ## Purpose
                Genealogy done in occasional bursts loses momentum and loses track of where you were. A fixed two-hour session each month, started from the research log and ended by writing the next step, is enough to move a line back a generation every few months without crowding out the rest of life.

                ## Milestones
                1. A recurring session in the calendar on a quiet evening or weekend.
                2. Each session starting from one open question in the log.
                3. Each session ending with results and a next step written down.
                4. A count kept of questions answered each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-hour research session is logged in at least ten months of the year, each with a written next step."
                cadence: rolling
              tasks:
                - "Pick a regular evening or weekend slot for the session"
                - "Hold a two-hour research session on one open question @recurring(monthly:12)"
                - "End each session by writing the next step in the log"
                - "Count the questions answered at the end of each quarter"
            - name: Standing calls with the family elders
              description: |-
                ## Purpose
                The people who remember the estate, the village shop, the name of a great-grandmother's mother and why the family left for Panama, Aruba or England are now in their seventies, eighties and nineties. A regular call with each elder, with one prepared question and the recording kept, gathers what no archive holds while there is still time.

                ## Milestones
                1. A list of elders at home and abroad with their numbers and best calling times.
                2. One call a month with an elder, each with a prepared question.
                3. Every call recorded with permission or written up the same day.
                4. Stories transcribed and linked to the people they mention in the tree.

                ## Notes
                Show photographs during a video call; elders often remember who is in a picture once they see it, and one face can bring back a whole household.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one elder call a month is held for a year, each recorded or written up and linked to the tree."
                cadence: rolling
              tasks:
                - "List every elder in the family with their best day and time to call"
                - "Call an elder with one prepared question @recurring(monthly:5)"
                - "Ask permission to record before each call starts"
                - "Summarise last month's elder call into the tree @recurring(monthly:22)"
            - name: Certificate and record request tracker
              description: |-
                ## Purpose
                Orders to registrar offices and archives in the region can take weeks or months, and some go quiet without a word. Tracking each request with its reference number, cost and date sent, and chasing on a fixed day, stops money and months disappearing into an inbox.

                ## Milestones
                1. A tracker listing every order with office, reference number, date, cost and status.
                2. Receipts and confirmation emails filed with each entry.
                3. Outstanding orders chased on a set day each month.
                4. Received documents marked as transcribed and cited.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every certificate or record order has a tracker entry with reference, cost and status, and none goes unchased for more than a month."
                cadence: rolling
              tasks:
                - "Create a tracker for record orders with reference, cost and status"
                - "Add every order you have placed in the past year"
                - "File receipts and confirmations next to each entry"
                - "Chase any order still outstanding after four weeks @recurring(monthly:25)"
            - name: Family tree backups and GEDCOM exports
              description: |-
                ## Purpose
                Years of research can be lost to a dead laptop, a closed website account or a subscription nobody renews after you are gone. Exporting the tree and scans every quarter to two places, one of them off your own devices, means the family's history outlives any single computer or account.

                ## Milestones
                1. A GEDCOM export and the scans folder saved to an external drive.
                2. A second copy in cloud storage or with a trusted relative.
                3. A quarterly export routine running.
                4. A note with your important papers saying where the tree is kept.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A GEDCOM export and the scans folder exist in two separate places, each no more than three months old."
                cadence: rolling
              tasks:
                - "Copy a GEDCOM export and the scans folder to an external drive"
                - "Set up a second copy in cloud storage or with a relative"
                - "Export and back up the tree and scans @recurring(quarterly)"
                - "Tell one relative where the backups are kept"
            - name: DNA match review routine
              description: |-
                ## Purpose
                DNA matches keep arriving for years, and most people look once, feel swamped and stop. A monthly look at new matches above a chosen size, sorted into the grandparent line they belong to, slowly turns a list of strangers into confirmed cousins and new leads.

                ## Milestones
                1. Matches grouped by grandparent line using known cousins as anchors.
                2. A threshold set in centimorgans (the unit testing sites use for shared DNA) for matches worth reviewing.
                3. New matches above the threshold reviewed and labelled each month.
                4. Short, friendly introductions sent to the most useful new matches.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All matches above your chosen threshold carry a line label and a note, reviewed monthly for a year."
                cadence: rolling
              tasks:
                - "Label your known cousins in the match list by grandparent line"
                - "Choose the shared centimorgan size above which you review matches"
                - "Review and label new matches above the threshold @recurring(monthly:8)"
                - "Send a short introduction to the two most useful new matches"
            - name: Scanning and labelling old family photographs
              description: |-
                ## Purpose
                Studio portraits from Georgetown or Kingston, wedding pictures, passport photos and old slides lose their meaning the moment the last person who can name the faces is gone. Scanning a batch every week and writing names, places and rough dates into the file details keeps the faces attached to the people.

                ## Milestones
                1. All loose photographs gathered and counted.
                2. Scans saved at a resolution good enough to reprint, named consistently.
                3. Names, places and approximate dates added to each file.
                4. Unknown faces shown to elders in batches.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every family photograph you hold is scanned, named and labelled with who is in it or marked as unknown."
                cadence: rolling
              tasks:
                - "Gather the loose photographs into one box and count them"
                - "Scan and label twenty photographs @recurring(weekly:sun)"
                - "Add names, places and rough dates to each file's details"
                - "Send a batch of unknown faces to an elder to identify"
            - name: Checking for newly released Caribbean records
              description: |-
                ## Purpose
                Caribbean collections are being digitised all the time: church registers on FamilySearch, newspapers on the Digital Library of the Caribbean, archive projects funded by the British Library's Endangered Archives Programme. A quarterly check of the sources that cover your islands catches new material without trawling the internet every week.

                ## Milestones
                1. A short list of the websites and catalogues that cover your family's islands.
                2. Alerts or newsletters turned on where they exist.
                3. A quarterly check of each source done and logged.
                4. Any new collection searched for your family names.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of sources for your islands exists and each is checked and logged every quarter for a year."
                cadence: rolling
              tasks:
                - "List the websites and archive catalogues that cover your family's islands"
                - "Sign up for newsletters or alerts where offered"
                - "Check each source for new collections @recurring(quarterly)"
                - "Search any new collection for your family surnames"
            - name: Quarterly family history update for cousins
              description: |-
                ## Purpose
                Relatives spread across Toronto, Birmingham, Queens and back home will share photos, memories and DNA tests if they can see the work moving. A short message to a cousins' group each quarter, with one find, one photo and one question, keeps people involved and brings answers no record holds.

                ## Milestones
                1. A list of interested relatives and how they prefer to hear news.
                2. A quarterly update sent with a find, a photo and a question.
                3. Replies and new information logged in the research log.
                4. At least one new relative recruited to help each year.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four updates are sent to the family group in a year, each with a find, a photo and a question, and replies are logged."
                cadence: rolling
              tasks:
                - "List relatives interested in family history and how to reach them"
                - "Ask the agent to draft a short update from this quarter's log"
                - "Send cousins an update with one find, one photo and one question @recurring(quarterly)"
                - "Log any replies and new leads in the research log"
            - name: Christmas gathering family tree check
              description: |-
                ## Purpose
                Christmas, when families fill a house in Arima or a basement in Brampton, is often the one time several generations sit in the same room. Bringing a printed tree once a year lets aunts correct dates, add new babies and partners, and name the faces in last year's mystery photographs.

                ## Milestones
                1. A printed chart of the tree ready before the gathering.
                2. Corrections and additions written on it during the visit.
                3. The year's births, marriages and deaths added.
                4. Changes entered in the tree with the relative named as source.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year a printed tree goes to the family gathering and the corrections from it are entered in the tree within a month."
                cadence: cyclic
              tasks:
                - "Print a wall chart of the tree before the holidays @recurring(yearly)"
                - "Ask relatives to write corrections straight onto the chart"
                - "Add the year's births, marriages and deaths"
                - "Enter the corrections in the tree with each relative named as source"
            - name: Reading Caribbean civil registration records
              description: |-
                ## Purpose
                Civil registration of births, marriages and deaths began at different times on each island, and the entries hold more than a date: the informant, the father's name if he signed, the mother's occupation and the district. Learning what each column means, when registration began for your island and how late registrations work makes every certificate yield more.

                ## Milestones
                1. The start of civil registration for each family island noted from an official or archive source.
                2. Three certificates read column by column, with every detail extracted.
                3. The meaning of informant, mark and late registration understood.
                4. A checklist of facts to extract from any new certificate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written extraction checklist exists and has been applied to at least three family certificates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find when civil registration began on each of your family's islands"
                - "Take one certificate and extract every field into the tree"
                - "Look up what a mark instead of a signature tells you about the informant"
                - "Write a checklist of the fields to extract from every certificate"
            - name: Church registers across denominations
              description: |-
                ## Purpose
                Before civil registration, and often alongside it, the church was where a baby was baptised and a couple married. Caribbean families moved between Anglican, Catholic, Methodist, Moravian, Baptist and Presbyterian congregations, and Hindu and Muslim families may appear in Christian registers after a conversion or in mission school records. Knowing which churches served your family's district, and where their registers now sit, opens the 1800s.

                ## Milestones
                1. Every church that served each family place listed by denomination.
                2. The current home of each register found: the church, the diocese, the national archives or an online collection.
                3. Baptisms for one family line searched across all the churches.
                4. Findings logged, with nil results recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Register locations are known for every church serving your family's main district and one line is searched across all of them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the churches near each family place by denomination"
                - "Find where each church's old registers are now held"
                - "Search the baptisms of one family line across every church listed"
                - "Log each church search, including nil results"
            - name: Slave registers 1813 to 1834 and compensation records
              description: |-
                ## Purpose
                For most Afro-Caribbean families the line runs back into slavery, when people were recorded as property, often under first names only. The registers taken in the British colonies between 1813 and 1834, and the compensation claims paid to enslavers after emancipation, are the main sources, and learning how they are arranged, by colony, year and owner or estate, is the step that lets you look for an ancestor by name.

                ## Milestones
                1. The arrangement of the registers understood: by colony, return year and owner or estate.
                2. The online copies located, both the UK National Archives images and the indexed versions on genealogy sites.
                3. The Legacies of British Slavery database at University College London used to find estates in your family's district.
                4. One estate's register read in full for a single year.

                ## Notes
                This research can be painful to read. Take it slowly and talk with family about what you find. Records for the French, Dutch and Spanish colonies are organised differently and held in other archives.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One estate linked to your family's district is identified and its register entries for a single year are read and noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a guide to how the slave registers are arranged by colony and owner"
                - "Find the estates in your family's district in the Legacies of British Slavery database"
                - "Open one estate's register for a single year and note every name"
                - "Add the estate and enslaver to your gazetteer of family places"
            - name: Indian indentureship records and emigration passes
              description: |-
                ## Purpose
                From 1838 indentured labourers from India were shipped to Guyana, Trinidad, Jamaica and smaller islands such as St Lucia, Grenada and St Vincent, and from 1873 to Suriname, until the system ended in the late 1910s. Each person left paperwork: the emigration pass, the ship's register, the estate allotment and later a certificate of exemption or return passage. Learning these records turns a family memory of a ship into a named person, a depot number and a village in India.

                ## Milestones
                1. The record types understood: emigration pass, ship register, estate register and certificate of exemption.
                2. The archive holding them for your country located, and whether they are indexed or digitised.
                3. The Dutch national archives' online database of contract labourers from India searched, if the family went to Suriname.
                4. One ancestor's ship, arrival year and estate found or ruled out.

                ## Notes
                The emigration pass usually names the village, thana (police district) and zila (district) in India, which is how families trace roots back to Uttar Pradesh, Bihar and elsewhere.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For one Indian ancestor, the ship, arrival year and estate are recorded with a citation, or the search is logged as exhausted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down what the family remembers about the ship, estate and village"
                - "Find which archive holds indentureship records for your country"
                - "Search the indexed records for your ancestor's name and its variants"
                - "Note the depot number and village if an emigration pass turns up"
            - name: Chinese, Portuguese and other post-emancipation arrivals
              description: |-
                ## Purpose
                After emancipation, planters brought in Portuguese labourers from Madeira, Chinese workers through Hong Kong and Macau, and later Syrian, Lebanese and Jewish families arrived as traders and shopkeepers. If one of your lines carries a Ho, a Fernandes or a family story of a ship from China or Beirut, learning which records each group left will save years of searching in the wrong place.

                ## Milestones
                1. The arrival groups in your tree identified from surnames, photographs and family stories.
                2. The arrival period and main record sources for each group noted.
                3. Ship lists, naturalisation papers or community records searched for one ancestor.
                4. Name changes on arrival added to the names register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every line in the tree that arrived after emancipation from China, Madeira, the Middle East or elsewhere is matched to its record sources, and one is searched."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark the lines in your tree that may come from a post-emancipation arrival group"
                - "Read one guide to the records that group left in your country"
                - "Search ship lists or naturalisation papers for one ancestor"
                - "Add any changed or anglicised names to the names register"
            - name: Old handwriting and records in Dutch, French and Spanish
              description: |-
                ## Purpose
                A Trinidad baptism from the Spanish period, a Haitian état civil entry (French civil registration), a Surinamese register or a Curaçao church book will not be in English, and even English records from the 1800s use hands and abbreviations that defeat a modern reader. A few weeks of practice with the record vocabulary and the old handwriting means you can read your own sources instead of waiting for a translator.

                ## Milestones
                1. A word list of the thirty commonest record terms in the language you need, such as born, baptised, legitimate, widow and godparent.
                2. An alphabet sheet for the period's handwriting made from your own documents.
                3. Three records transcribed word for word, with unclear letters marked.
                4. One transcription checked by a fluent reader or a genealogy forum.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three records in an older hand or another language are transcribed and one transcription is checked by someone fluent."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the language or handwriting your next records will need"
                - "Build a word list of thirty common register terms"
                - "Transcribe one record word for word, marking letters you cannot read"
                - "Post a transcription to a genealogy forum for checking"
            - name: Understanding DNA tests and ethnicity estimates
              description: |-
                ## Purpose
                DNA tests are sold on their ethnicity charts, which for Caribbean testers often show a mix of West and Central African, South Asian, European, East Asian and Indigenous American regions, and those are estimates, not documents. The real research value is in the cousin matches. Knowing the difference between autosomal, Y and mitochondrial tests, and what an estimate can and cannot say, keeps the family's expectations honest before anyone sends off a sample.

                ## Milestones
                1. Autosomal, Y-DNA and mitochondrial tests explained in a page of your own notes.
                2. How shared centimorgans map to likely relationships understood.
                3. The limits of ethnicity estimates for Caribbean ancestry written down.
                4. Privacy settings and terms of two testing companies compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the three test types, shared centimorgans and the limits of ethnicity estimates, ready to share with relatives."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read one plain guide to autosomal, Y-DNA and mitochondrial tests"
                - "Learn how shared centimorgans map to likely relationships"
                - "Write down why ethnicity estimates are not records"
                - "Compare the privacy terms of two testing companies"
            - name: Weighing conflicting records and proving a link
              description: |-
                ## Purpose
                Caribbean records disagree all the time: a death certificate says 80, a baptism suggests 72, a passenger list gives another age, and two men of the same name lived in the same district. Learning to weigh original against copied sources, and first-hand against hearsay information, and to write a short argument for each link, is what separates a family tree from a list of guesses.

                ## Milestones
                1. The difference between original and derivative sources, and primary and secondary information, understood.
                2. One conflict in your tree laid out with every source side by side.
                3. A written conclusion explaining which evidence wins and why.
                4. The conclusion added to the tree notes, with the conflict still visible.

                ## Notes
                Genealogists call this standard (a reasonably thorough search, full citations, careful analysis and a written conclusion) the Genealogical Proof Standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One documented conflict in the tree is resolved in a written conclusion of at least a paragraph, citing every source."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one fact in your tree where two records disagree"
                - "Lay out every source for it side by side in a table"
                - "Write a paragraph saying which evidence you trust and why"
                - "Add the conclusion to that person's notes in the tree"
            - name: Using the national archives back home from a distance
              description: |-
                ## Purpose
                Each country has its own archives, registry and record office with different holdings, catalogues and rules for requests from abroad: the Barbados Department of Archives, the Jamaica Archives and Records Department and the Island Record Office, the National Archives of Trinidad and Tobago, the Walter Rodney National Archives in Guyana and many more. Learning what yours holds, what is catalogued online and how distance requests work saves wasted letters and fees.

                ## Milestones
                1. The archives, registries and record offices relevant to your family listed with contact details.
                2. Each one's online catalogue or published guide read.
                3. The process and current fees for distance requests noted from their own website or reply.
                4. One request for a specific record sent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Contact details, holdings and the current distance request process are recorded for every archive relevant to your family, and one request is sent."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the archives and record offices for each of your family's islands"
                - "Read each one's online catalogue or guide to holdings"
                - "Email one archive asking how requests from abroad work"
                - "Send a request for one specific, well-identified record"
            - name: Which DNA test, and who in the family tests first
              description: |-
                ## Purpose
                The most valuable DNA in the family belongs to the oldest living generation, because each generation down inherits only part of it. Deciding which company's database best suits Caribbean matches, and asking a grandparent, great-aunt or uncle to test before you test yourself, gives far more useful matches for the same money.

                ## Milestones
                1. Two or three testing companies compared on database size, price, raw data download and privacy.
                2. Relatives in the oldest living generation listed, ideally one on each grandparent line.
                3. Consent conversations held, with who will manage each kit agreed.
                4. Kits ordered for the agreed testers.

                ## Notes
                Start from the **Purchase decision** template. Explain to older testers what a test can reveal, including surprises about parentage, before they agree.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A testing company is chosen and at least one relative from the oldest living generation has agreed to test, with consent recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare two or three testing companies on database size, price and privacy"
                - "List the oldest living relatives on each grandparent line"
                - "Ask one elder whether they would test, explaining possible surprises"
                - "Order a kit for each relative who agrees"
            - name: Brick wall ancestor plan
              description: |-
                ## Purpose
                Every family has one: the great-grandfather who appears on a marriage record in 1912 and nowhere else, or the woman whose parents are never named. Treating a brick wall as a structured project, with every known fact, every source already tried and a ranked list of untried ones, breaks more walls than another evening of the same searches.

                ## Milestones
                1. A timeline of everything known about the ancestor, with sources.
                2. A list of every source already searched, including nil results.
                3. Ten untried sources or strategies ranked, such as neighbours, godparents, land records or DNA clusters.
                4. The top three worked through and the results logged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A brick wall ancestor has a written timeline, a list of searched sources and three new strategies worked through and logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick the ancestor who has stalled you longest"
                - "Write a timeline of everything known about them, with sources"
                - "List ten sources or strategies you have not yet tried"
                - "Work through the top three and log every result"
            - name: Deciding whether to hire a researcher back home
              description: |-
                ## Purpose
                Some records can only be read in a reading room in Bridgetown, Kingston, Paramaribo or Port-au-Prince, and some archives do not answer email. A local researcher can do in a day what would otherwise cost you a flight, but fees, reliability and quality vary widely. Deciding whether to hire, and choosing well, protects both the money and the research.

                ## Milestones
                1. The specific records you need written up as a clear one-page brief.
                2. Two or three researchers found through the archive, a genealogy society or recommendations.
                3. Each one's rates, turnaround and sample work compared.
                4. A decision made and, if hiring, a written agreement on scope, cost and deliverables.

                ## Notes
                Start from the **Vendor** template. Pay in stages against delivered images or transcriptions, not all up front.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written brief exists and a decision to hire or not is recorded; if hiring, a scoped agreement with cost and deliverables is in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page brief of the exact records you need searched"
                - "Ask the archive or a genealogy society which researchers they recommend"
                - "Compare rates, turnaround and a sample of each researcher's work"
                - "Agree scope, cost and staged payment in writing before work starts"
            - name: Cleaning up a tree copied from online trees
              description: |-
                ## Purpose
                Many trees grow by accepting hints and copying other people's trees, and Caribbean lines are especially prone to errors: two Joseph Charles in the same parish merged into one, a baptism from the wrong island, a grandmother given the wrong parents because of a shared name. A clean-up pass that resolves duplicates and flags unsourced facts makes the tree trustworthy again.

                ## Milestones
                1. Duplicate people found and merged or separated, with a reason noted.
                2. Every fact without a source flagged.
                3. Facts copied from other trees either sourced or marked as unverified.
                4. A monthly batch of flagged facts checked against records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Duplicates are resolved and every fact in the tree is either sourced or clearly marked as unverified."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run the duplicate check in your tree software"
                - "Flag every fact that has no source attached"
                - "Mark facts copied from other trees as unverified"
                - "Check ten flagged facts against original records @recurring(monthly:16)"
            - name: Finding substitutes for missing or late registrations
              description: |-
                ## Purpose
                Plenty of Caribbean births were never registered, or were registered years late when a passport, pension or school place demanded it, so the certificate may carry a wrong date or none at all. Knowing the substitute records, such as baptisms, school admission registers, estate pay books, voter lists, cemetery records and ship lists, lets you place a person when the registry has nothing.

                ## Milestones
                1. Every ancestor with no birth registration found listed.
                2. Late registrations identified, with the registration date compared to the birth date.
                3. Three substitute sources searched for each missing person.
                4. Each result logged with a note on how reliable its date is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each ancestor without a birth registration has three substitute sources searched and logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every ancestor whose birth registration you cannot find"
                - "Check whether any certificate you hold is a late registration"
                - "Search baptisms, school registers or voter lists for one missing person"
                - "Log each substitute record with a note on how reliable its date is"
            - name: Public, private or shared online tree
              description: |-
                ## Purpose
                Putting a tree online brings cousins and DNA matches to your door, but it also exposes living relatives' names and can spread your mistakes into hundreds of copied trees. Choosing deliberately between public, private and invite-only, in line with the family's privacy rules, gets the benefits without the regrets.

                ## Milestones
                1. The sharing options and living-person settings of your tree host understood.
                2. The family privacy rules checked against each option.
                3. A setting chosen and applied, with living people hidden if the tree is public.
                4. A logged-out view of the tree confirming nothing private shows.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sharing setting is chosen and applied, and a logged-out check confirms no living person is visible."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your tree host's privacy settings for living people"
                - "Check each sharing option against the family privacy rules"
                - "Choose and apply public, private or invite-only"
                - "View the tree while logged out to confirm living people are hidden"
            - name: Annual records and subscription budget
              description: |-
                ## Purpose
                Certificates, archive fees, DNA kits and subscriptions add up quickly, and genealogy sites are easy to forget until the renewal lands. Setting a yearly budget and deciding which subscriptions are worth keeping, or taking one for a single month around a research push, keeps the work affordable.

                ## Milestones
                1. Last year's spending on records, kits and subscriptions totalled.
                2. A yearly budget agreed.
                3. Each subscription judged on whether it holds records for your islands.
                4. Renewal dates noted, with auto-renew turned off where you plan to rotate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly genealogy budget is set and every subscription has a keep, rotate or cancel decision with its renewal date noted."
                cadence: cyclic
              tasks:
                - "Total last year's spending on certificates, kits and subscriptions"
                - "Set a family history budget for the coming year"
                - "Decide keep, rotate or cancel for each subscription"
                - "Review genealogy spending and renewal dates @recurring(yearly)"
            - name: Research trip to the archives back home
              description: |-
                ## Purpose
                A few days in the national archives, registry and parish churches of your home country can answer questions that years of email could not. Planning it as a research trip, with booked reading room time, a list of exact records and camera rules checked in advance, means you come back with images, not regrets.

                ## Milestones
                1. Opening hours, booking rules, camera rules and fees confirmed with each archive.
                2. A pull list of exact records, volumes and years for each repository.
                3. Visits booked around family time, with a relative who knows the town if possible.
                4. Every image named and logged within a week of returning.

                ## Notes
                Start from the **Trip** template. Archives in the region can close for public holidays, Carnival and staff training, so confirm the days again just before you fly.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An archive research trip is completed with the pull list worked through and every image logged within a week of return."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Email each archive asking for current hours, booking and camera rules"
                - "Write a pull list of exact volumes and years for each repository"
                - "Book reading room visits and block those days in the trip plan"
                - "Name and log every image within a week of getting back"
            - name: Recording family graves and churchyards
              description: |-
                ## Purpose
                Headstones in a village churchyard, a family plot on the land or a municipal cemetery carry dates and relationships that never reached a register, and many are weathering, overgrown or being cleared. Photographing and recording family graves on your next visit, with exact locations, preserves them and often adds a generation.

                ## Milestones
                1. A list of cemeteries and family plots where relatives are buried.
                2. Each grave photographed and its inscription transcribed.
                3. A location noted for each, by GPS or a sketch map.
                4. Records added to the tree and, if the family agrees, to a public grave index.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Every known family grave you can reach is photographed, transcribed and located, with entries added to the tree."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask elders where each relative is buried, including plots on family land"
                - "Photograph each headstone straight on in soft light"
                - "Transcribe each inscription and note its location"
                - "Add each grave record to the person's page in the tree"
            - name: Family history display at the family reunion
              description: |-
                ## Purpose
                Whether it is in a community hall in Tottenham or under a tent back home, a family reunion is the best chance to show the tree to a hundred relatives at once and collect what they know. A wall chart, a photo board and a table where people can add names turns the research into something the whole family owns.

                ## Milestones
                1. Reunion date and space confirmed with the organisers.
                2. A large printed descendant chart and photo board prepared.
                3. A sign-up sheet ready for corrections, contacts and photos to share.
                4. New information from the day entered in the tree within a month.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tree display is shown at the reunion and the corrections and contacts collected are entered within a month."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the reunion organisers for a table and wall space"
                - "Print a large descendant chart for the founding couple"
                - "Prepare a photo board with names and dates on each picture"
                - "Collect corrections and contacts on a sign-up sheet at the table"
            - name: Family history booklet for an elder's milestone birthday
              description: |-
                ## Purpose
                For a grandmother's ninetieth or a grandfather's hundredth, a short booklet of their parents, siblings, home places and photographs is a gift nobody else will think of, and the date gives the research a real deadline. It focuses the work on one person and usually draws out stories the elder has never told.

                ## Milestones
                1. The celebration date and number of copies agreed with the family.
                2. The elder's parents, siblings and places checked against records.
                3. Ten to twenty photographs chosen, scanned and captioned.
                4. A booklet of 12 to 24 pages printed and handed out on the day.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A printed family history booklet about the elder is ready in the agreed number of copies before the celebration."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the celebration date and how many copies are needed"
                - "Interview the elder about their parents and childhood home"
                - "Choose and caption ten to twenty photographs"
                - "Ask the agent to draft a short life sketch from your interview notes"
                - "Send the booklet to print at least two weeks before the day"
            - name: Colonial records day at a European national archive
              description: |-
                ## Purpose
                Much of the region's record trail sits in Europe. For British-ruled islands that means the National Archives at Kew: Colonial Office papers, slave registers, West India Regiment and British West Indies Regiment service records and naturalisation files. For Haiti, Martinique and Guadeloupe it is the French overseas archives in Aix-en-Provence, and for Suriname and the Dutch Caribbean the Nationaal Archief in The Hague. A planned visit, or a copy order if you cannot travel, reaches records held neither online nor back home.

                ## Milestones
                1. The record series you need identified in the archive's online catalogue.
                2. A reader's ticket or registration arranged under the archive's current rules.
                3. Documents ordered in advance for the day, or a copy order placed.
                4. Images named, logged and linked to the people they mention.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Records from a European colonial archive are viewed in person or ordered as copies, and every image is logged and linked in the tree."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search the archive's online catalogue for your island and family surnames"
                - "Check the current rules for a reader's ticket and advance orders"
                - "Order documents ahead of the visit or request copies"
                - "Link each document image to the people it names in the tree"
            - name: First family tree for a student on a tight budget
              description: |-
                ## Purpose
                School projects, a university module or a question about where your grandparents came from often start a young person on this, usually with no money for subscriptions. Free tools, library access to paid sites and a parent or grandparent as the first interview make a solid three-generation tree possible for almost nothing.

                ## Milestones
                1. A free tree tool set up with yourself, your parents and grandparents.
                2. One grandparent interviewed for thirty minutes, with notes.
                3. Free sources searched, such as FamilySearch and library access to paid sites.
                4. A three-generation tree with at least one document per generation.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-generation tree with at least one document per generation is built using only free tools and sources."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up a free online tree with you, your parents and grandparents"
                - "Interview a grandparent for thirty minutes about their own parents"
                - "Ask your public or university library which genealogy sites it gives free access to"
                - "Spend one hour adding a sourced fact to the tree @recurring(monthly:3)"
            - name: Recording your own life story for the grandchildren
              description: |-
                ## Purpose
                If you grew up in the Caribbean and moved abroad, you are the family's best source for a whole generation: the yard you grew up in, school, church, the decision to leave, the first winter. Recording one short voice note a week, and gathering them into a written life story, saves the grandchildren from piecing you together from certificates.

                ## Milestones
                1. A list of thirty prompts covering childhood, family, work, migration and later life.
                2. A voice note or written page recorded each week.
                3. Recordings stored with the tree and backed up.
                4. A written life story compiled and shared with children and grandchildren.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least thirty recorded memories are saved and backed up, with a written life story shared with the family."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write thirty memory prompts, from the childhood yard to the first winter abroad"
                - "Record one memory as a voice note @recurring(weekly:wed)"
                - "Save each recording in the family tree folder with the date"
                - "Ask a grandchild or relative to help type up the recordings"
            - name: Tracing an unknown father or outside children
              description: |-
                ## Purpose
                Common-law and visiting unions, outside children (born to a parent outside their marriage) and fathers left off the birth register are part of many Caribbean families. When a parent or grandparent's father is unknown, records alone rarely answer it, but careful DNA work combined with family knowledge, handled privately and kindly, often can.

                ## Milestones
                1. What the family knows or suspects written down privately.
                2. The closest available person in that line tested, ideally the person themselves.
                3. Matches on the unknown side separated from the known side.
                4. Shared matches clustered and possible fathers narrowed using trees and records.
                5. Any conclusion shared first with the person most affected, in line with the family rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The unknown side of the DNA matches is isolated and a sourced conclusion or shortlist is written and shared privately with the person affected."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down privately what the family knows or suspects"
                - "Arrange a DNA test for the person whose father is unknown, if they agree"
                - "Separate matches into known side and unknown side using known cousins"
                - "Build quick trees for the top unknown-side matches to find shared ancestors"
            - name: Family history when grandparents raised you back home
              description: |-
                ## Purpose
                Many children of the migration years were left with grandparents or aunts while parents went ahead to England, the US or Canada, and were sent for later. If that was you, the people who raised you may hold one side of the history and your parents another, with gaps in both. Tracing both households, and the dates of each move, rebuilds the family as it was actually lived.

                ## Milestones
                1. Both households written down: who lived with whom, where and when.
                2. Dates of each parent's departure and your own move found from passports or passenger lists.
                3. Stories collected from both the grandparents' side and the parents' side.
                4. The tree showing who raised whom, alongside who was born to whom.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written household history shows who raised you and where, with the date of each family move backed by a document."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the households you lived in as a child, with dates"
                - "Find passport stamps or passenger lists for each family move"
                - "Ask a relative on the grandparents' side what they remember of those years"
                - "Add a note to the tree recording who raised whom"
            - name: Tracing every line in a mixed-heritage family
              description: |-
                ## Purpose
                Within four generations a Caribbean tree can run to Africa, India, China, Madeira, Scotland, Lebanon and the region's Indigenous peoples, and a family that is dougla (of mixed African and Indian descent) or Chinese-Creole may have lines that each need different records. Mapping each line to its heritage and its record set stops the best-documented line from crowding out the others.

                ## Milestones
                1. Each grandparent and great-grandparent line labelled with its likely heritage.
                2. The main record sources for each heritage listed.
                3. One research question set for each line.
                4. Progress reviewed so no line is left at zero.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every great-grandparent line has a heritage label, a list of its record sources and one open research question."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Label each great-grandparent line with its likely heritage"
                - "List the main record sources for each heritage in your tree"
                - "Write one research question for the least researched line"
                - "Check twice a year that no line has been left untouched"
            - name: Tracing a parent's migration abroad
              description: |-
                ## Purpose
                The move from home to Britain, the US or Canada in the 1950s, 60s and 70s is the hinge of most diaspora family stories, and it left a paper trail: passenger lists, ship names, flights, letters and first addresses abroad. Following that trail for a parent or grandparent turns a story told at the kitchen table into a dated, documented chapter of the family history.

                ## Milestones
                1. The ship or flight, date and port of arrival found for the person.
                2. Their first addresses abroad found from letters, electoral registers or directories.
                3. Letters, photos and documents from the early years gathered.
                4. A written migration chapter with sources added to the tree.

                ## Notes
                This project is about the family story. If anyone needs records to prove their immigration status, treat that as a separate task with a qualified adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The arrival date, ship or flight and first address abroad are documented for one migrant ancestor, with a written chapter in the tree."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the family when and how the person travelled and where they first lived"
                - "Search inbound passenger lists for their name and likely year"
                - "Gather letters and photographs from their first years abroad"
                - "Write a one-page migration chapter with sources"
            - name: Following enslaved ancestors through estate records
              description: |-
                ## Purpose
                Once a family is linked to an estate at emancipation, it may be possible to follow named people back through each slave register return, where entries record names, ages, colour, birthplace and sometimes mothers, and across to plantation papers, manumissions and the enslaver's own records. It is slow, careful work that can carry a line back to the late 1700s and, rarely, to an African birthplace.

                ## Milestones
                1. A named ancestor at or soon after emancipation linked to an estate with evidence.
                2. That person followed through each surviving register return for the estate.
                3. Mothers and children reconstructed as household groups where the registers allow.
                4. Plantation papers, manumission records or estate deeds searched for the same people.
                5. A written argument for each link.

                ## Notes
                Surnames taken at emancipation sometimes matched the enslaver's and sometimes did not; never assume either.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least one enslaved ancestor is identified across successive register returns, with a written argument for each link."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write out the evidence that links your ancestor to a named estate"
                - "Extract every entry for the estate from each register year into a table"
                - "Match people across years by name, age and mother"
                - "Search manumission and plantation records for the same names"
            - name: Finding the ancestral village in India
              description: |-
                ## Purpose
                An emigration pass naming a village, thana and zila is the key that opens the Indian side of an Indo-Caribbean family. Matching those colonial spellings to a modern village in Uttar Pradesh, Bihar or elsewhere, and finding out whether relatives or records survive there, lets a family stand where their ancestor set out.

                ## Milestones
                1. The village, thana and zila from the pass transcribed exactly.
                2. The colonial spellings matched to modern place names on maps and gazetteers.
                3. Contacts found who know the area, such as heritage groups or local researchers.
                4. A decision made on whether to visit, write or stop at a map.

                ## Notes
                Spellings on passes were written by clerks from spoken Hindi or Bhojpuri; try several readings before deciding a village cannot be found.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The village on an ancestor's emigration pass is matched to a modern location with the reasoning recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Transcribe the village, thana and zila exactly as written on the pass"
                - "Try alternative spellings against modern maps and gazetteers"
                - "Ask an Indo-Caribbean heritage group for help reading the names"
                - "Record your best match for the village and why you chose it"
            - name: Liberated Africans and tracing African origins
              description: |-
                ## Purpose
                Between Britain's abolition of the slave trade in 1807 and the mid-1800s, Africans freed from captured slave ships were landed in the Bahamas, Trinidad, Jamaica, Guyana and other colonies, often with registers recording names, ages and sometimes origins. For other lines, DNA matches to people living in Africa, read cautiously, may point to a region. Knowing both routes, and their limits, sets realistic goals for the African side of the tree.

                ## Milestones
                1. Whether your family's island received liberated Africans checked.
                2. The registers or lists for those arrivals located.
                3. DNA matches to testers in Africa reviewed with their stated origins.
                4. A written summary of what can and cannot be claimed about African origins.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary records what records and DNA can show about one African line, with sources and stated limits."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check whether liberated Africans were landed on your family's island"
                - "Locate the surviving registers of those arrivals"
                - "Filter your DNA matches for testers living in Africa"
                - "Write a short summary of what the evidence supports"
            - name: Indigenous and Maroon heritage lines
              description: |-
                ## Purpose
                Some families carry Kalinago descent from Dominica, Garifuna roots from St Vincent and Belize, Lokono or Warrau ancestry in Guyana, or Maroon heritage from Accompong and Moore Town in Jamaica or Suriname's interior communities. These lines are often thinly recorded in colonial archives and best traced with the communities themselves, through their own historians, councils and oral tradition, with respect for what they choose to share.

                ## Milestones
                1. The family tradition of Indigenous or Maroon descent written down in the words elders use.
                2. The community's own heritage organisations and published histories identified.
                3. Contact made respectfully, through the right channel, if the family wishes.
                4. What is learned recorded with its source and any sharing limits the community sets.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The family's Indigenous or Maroon tradition is recorded with sources, and any sharing limits set by the community are noted and respected."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down the family tradition exactly as elders tell it"
                - "Find the community's own heritage organisation or council"
                - "Read a history written by or with the community"
                - "Ask through the proper channel before visiting or publishing anything"
            - name: Writing and publishing the family history book
              description: |-
                ## Purpose
                After years of research, a tree on a screen is not something a grandchild will sit and read. A written family history, with chapters by line or generation, photographs, maps and sources, printed in a small run or shared as a PDF, is the form in which the work lasts.

                ## Milestones
                1. An outline of chapters by line or generation.
                2. A weekly writing rhythm kept until a full draft exists.
                3. Sources cited in endnotes and living people's privacy checked.
                4. The draft read by two relatives and corrected.
                5. Copies printed or a PDF shared, with one offered to the national archives or library back home.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A family history of at least 40 pages with sources is printed or shared, with a copy offered to a library or archive back home."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Outline the chapters by line or generation"
                - "Write 500 words of the family history @recurring(weekly:sat)"
                - "Ask two relatives to read the draft and mark corrections"
                - "Offer a finished copy to the national archives or library back home"
---

# Caribbean Family History and Genealogy

This area is for anyone tracing a Caribbean family, from Jamaica, Trinidad and Tobago, Guyana, Barbados, Haiti, Suriname, the OECS islands or anywhere else in the region, whether you live back home or in London, New York or Toronto. It opens with foundations (what the family already knows, the papers in the house, names, places and the first certificates), moves to the routines that keep research moving, then the record skills particular to the region: civil and church registers, slave registers, indentureship papers and other arrivals, old handwriting, DNA and evidence. Decisions, research trips and family occasions follow, then situations such as an unknown father or a mixed-heritage tree, and finally the specialist work of following enslaved ancestors, finding a village in India and writing the family book.

What repeats is a monthly research session and elder call, monthly checks on record orders and DNA matches, weekly photo scanning, quarterly backups and updates to cousins, and a yearly tree check at the Christmas gathering. The Purchase decision, Vendor and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
