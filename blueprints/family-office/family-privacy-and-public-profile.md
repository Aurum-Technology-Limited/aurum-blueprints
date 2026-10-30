---
id: family-office.family-privacy-and-public-profile
name: Family Privacy and Public Profile
description: "A quieter public footprint for a wealthy family: registries and addresses handled with care, one door for media enquiries, social media rules each member keeps, and personal data removed and kept off the internet."
category: personal
version: 1.0.0
tags: [family-office, family-privacy-and-public-profile, parent, everyone, privacy, public-records, media-enquiries, data-removal]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - operational-checklist
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Privacy and Public Profile
          description: "Keeping a low public profile: property and company registries, media requests, social media rules for family members and removing personal data online."
          projects:
            - name: Public footprint audit of every family member
              description: |-
                ## Purpose
                Before deciding how private the family wants to be, someone has to see what a stranger can already find in an afternoon: home addresses, children's schools, company directorships, property purchase prices and photographs from charity galas. An audit across search engines, registries, social networks and people-search sites turns a vague unease into a list of specific exposures that can be ranked and dealt with.

                ## Milestones
                1. Every adult and child in scope listed, with the name variants, maiden names and nicknames to search.
                2. The first three pages of search results for each name recorded with screenshots and dates.
                3. Findings sorted into registries, press, social media, people-search sites and third-party websites.
                4. Each exposure rated high, medium or low by what it reveals about addresses, routines or children.
                5. The audit saved in the family vault with access limited to the privacy lead and the head of the family.

                ## Notes
                Search from a clean browser with no signed-in accounts, so the results match what an outsider sees. Start from the **Risk register** template to hold the rated exposures.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated audit lists every exposure found for each family member, rated by severity, and is stored in the family vault with restricted access."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List every family member in scope with their name variants"
                - "Search each name in a private browser and capture the first three pages"
                - "Check people-search sites and social networks for each name"
                - "Rate each exposure by what it reveals about homes, routines or children"
                - "Repeat the full audit for every family member each year @recurring(yearly)"
            - name: Agreeing the family's public profile level
              description: |-
                ## Purpose
                Families disagree quietly about visibility: one sibling gives interviews about the business while another wants their children unfindable. Agreeing a profile level for the family as a whole, and where individuals may differ, gives everyone the same answer when a journalist, an event organiser or a school asks.

                ## Milestones
                1. Three options described in plain words: invisible, quiet and named only where required, or a managed public presence.
                2. Each adult's view gathered privately before any group discussion.
                3. A level chosen for the family, with named exceptions for members who hold public roles.
                4. The decision written into a one-page statement the office can quote to outsiders.

                ## Notes
                A managed public presence can be more private in practice than silence, because a short approved biography crowds out guesswork. Weigh that before choosing invisible.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page profile statement records the family's agreed visibility level and any individual exceptions, approved by every adult member."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a short description of the three profile levels to share"
                - "Ask each adult privately which level they want and why"
                - "Hold one family conversation to settle the level and exceptions"
                - "Circulate the one-page profile statement for sign-off"
            - name: Map of public registries holding family names
              description: |-
                ## Purpose
                Much of what reveals a wealthy family is not gossip but public record: land registries, company and beneficial ownership registers, planning applications, court lists, vessel and aircraft registers and the electoral roll. Mapping which registries hold which family names, in which countries, shows where privacy work is possible and where the law requires disclosure.

                ## Milestones
                1. Every country where the family owns property, companies or vehicles listed.
                2. For each country, the public registries that show names, addresses or ownership identified.
                3. Each family name and entity matched to the registries where it appears.
                4. Entries marked as legally required, avoidable with a service address, or open to an exemption application.

                ## Notes
                Some beneficial ownership registers are public, some open only to authorities and some to people who show a legitimate interest, and the rules change. Confirm the current position in each country with local counsel.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A registry map shows each country, each public register and every family name or entity on it, with the legal status of each entry noted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every country where the family holds property, companies or vehicles"
                - "Ask local counsel which registries in each country are open to the public"
                - "Search each registry for family names and record what is shown"
                - "Mark each entry as required, avoidable or open to an exemption"
            - name: Naming a privacy lead for the family
              description: |-
                ## Purpose
                Privacy work fails when it belongs to everyone, because opt-out confirmations go unread and a reporter's email sits in a junior assistant's inbox. One named person, usually in the family office or a trusted executive assistant, owns the audit, the routines and the log, and knows when to call the lawyer.

                ## Milestones
                1. The privacy lead chosen and their authority written in a short role note.
                2. A deputy named for holidays and illness.
                3. The lead given access to the audit, the registry map and the enquiry log.
                4. Every family member told who the lead is and how to reach them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named privacy lead and deputy have a written role note, access to the privacy records, and every family member knows how to reach them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the privacy lead and a deputy from the office or close staff"
                - "Write a half-page role note covering duties and escalation to the lawyer"
                - "Grant the lead access to the privacy folder in the vault"
                - "Send every family member the lead's contact details"
            - name: One contact point for press and outside enquiries
              description: |-
                ## Purpose
                Journalists, researchers for rich lists and event organisers will try the business switchboard, the household staff and the children's friends until someone answers. A single published route, a named person or a press adviser with a set holding reply, means nobody else speaks by accident and every request is logged.

                ## Milestones
                1. One email address and phone number agreed for all media and outside enquiries.
                2. A holding reply written that acknowledges receipt and commits to nothing.
                3. Business reception, household staff and assistants briefed to pass every enquiry on unanswered.
                4. A test enquiry sent through each route and confirmed to reach the contact point.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single enquiry address and holding reply exist, and a test enquiry through reception, staff and assistants reaches it within one working day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up a dedicated enquiries mailbox managed by the privacy lead"
                - "Write a two-line holding reply that confirms receipt only"
                - "Brief reception, household staff and assistants to pass enquiries on"
                - "Send a test enquiry through each route and check where it lands"
            - name: Correspondence and service address for registrations
              description: |-
                ## Purpose
                Every time a family member registers a company, signs a director's form or buys a car, their home address risks going into a public file that cannot easily be withdrawn. Agreeing a correspondence or service address, such as the family office, a registered agent or a law firm, and using it consistently stops new exposures at the source.

                ## Milestones
                1. One correspondence address chosen for each country where the family registers things.
                2. The address holder's agreement confirmed in writing, including mail forwarding.
                3. A list made of every form and registry where the home address is still used.
                4. Assistants and advisers instructed to use the correspondence address by default.

                ## Notes
                A service address usually protects future filings only. Older filings may stay visible unless the registry allows a suppression application, so check with the company secretary or counsel.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A correspondence address is agreed for each relevant country and every adviser has written instructions to use it on new filings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the company secretary which filings currently show home addresses"
                - "Agree a correspondence address and forwarding terms with its holder"
                - "Write a one-paragraph instruction for advisers and assistants"
                - "Ask counsel whether older filings can be suppressed or replaced"
            - name: Privacy briefing for every adult family member
              description: |-
                ## Purpose
                Most leaks come from kind, ordinary things: a tagged holiday photo, a club newsletter, a contractor's portfolio of the new kitchen. A short, friendly briefing for each adult explains the agreed profile level, what to say when asked about the family, and who to forward requests to, without making anyone feel watched.

                ## Milestones
                1. A two-page briefing written covering the profile level, social media basics, enquiries and home photos.
                2. Each adult walked through the briefing in person or on a call.
                3. Questions and objections noted and taken back to the family if they change the rules.
                4. A date recorded for each briefing so new adults are not missed.

                ## Notes
                Lead with the reasons (children's safety, staff safety, scams) rather than the rules. People keep rules they understand.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every adult family member has received the two-page privacy briefing in a conversation, with the date recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a two-page privacy briefing from the profile statement"
                - "Edit the draft so it sounds like the family, not a policy manual"
                - "Book a short call with each adult to walk through it"
                - "Record the date of each briefing and any questions raised"
            - name: People-search and data broker exposure list
              description: |-
                ## Purpose
                People-search sites and data brokers compile addresses, phone numbers, relatives and estimated net worth from public and purchased records, and they are often the first stop for anyone trying to find a home. Listing which brokers hold each family member, and what they show, sets up the opt-out work that follows.

                ## Milestones
                1. The main people-search and broker sites operating in each country of residence listed.
                2. Each family member searched on each site with results captured.
                3. Every profile found recorded with its URL, what it shows and the site's opt-out route.
                4. The list ranked so profiles showing current home addresses or children come first.

                ## Notes
                Opt-out forms sometimes ask for more data than the site holds. Give only what is needed to identify the record, and never a full date of birth or identity document unless the law requires the site to verify.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list records every broker profile found for each family member, with its URL, contents and opt-out route."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the people-search and broker sites active in each country of residence"
                - "Search each family member on each site and capture what is shown"
                - "Record each profile's URL, contents and opt-out route"
                - "Rank the profiles by how directly they point to a home"
            - name: Inventory of family photographs online
              description: |-
                ## Purpose
                Photographs give away more than names: faces of children, the layout of a home, a car registration, a boat's name at a marina. Finding where family photos sit online, on school sites, charity pages, club newsletters, architects' portfolios and friends' accounts, shows which ones to ask to have removed first.

                ## Milestones
                1. Image searches run for each family member's name and for each home address.
                2. Every photo found recorded with the site, the owner and what it shows.
                3. Photos showing children, home interiors, vehicles or routines flagged as priority.
                4. A removal request route identified for each flagged photo.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A photo inventory lists every family image found online with its owner and contents, and each priority image has a removal route."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run image searches for each family member's name"
                - "Search architects', builders' and designers' sites for the family homes"
                - "Record each photo's site, owner and what it reveals"
                - "Flag images of children, interiors and vehicles for removal first"
            - name: Privacy audit of the family office itself
              description: |-
                ## Purpose
                The family office often becomes the most visible thing about the family: a website listing staff, a LinkedIn page, job adverts describing the principal's homes and jets. Reviewing what the office publishes about itself, and how its staff describe their work online, closes a route that well-meaning employees open every day.

                ## Milestones
                1. The office's website, listings and social pages reviewed for family details.
                2. Recent job adverts checked for descriptions that identify the family.
                3. A staff guideline written on describing their employer online.
                4. Agreed changes made and the guideline added to staff onboarding.

                ## Notes
                Keep this to what the office says publicly. Device security, access rights and fraud controls belong with the office's cybersecurity work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The office's public pages and job adverts are reviewed, changes made, and a staff guideline on describing the employer is in onboarding."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Review the office's website, listings and social pages for family details"
                - "Check the last ten job adverts for identifying descriptions"
                - "Write a staff guideline on describing the employer online"
                - "Add the guideline to onboarding for new office staff"
            - name: Monthly name and address search sweep
              description: |-
                ## Purpose
                New exposures appear without warning: a planning application, a court listing, an old classmate's blog. A monthly sweep of the same searches used in the audit catches them while they are fresh and easiest to have corrected or removed.

                ## Milestones
                1. A fixed list of searches saved: each name, each address, each entity name and key phone numbers.
                2. The sweep done each month and new results compared with last month's.
                3. Every new exposure entered in the exposure register with a next action.
                4. A short note sent to the head of the family only when something material appears.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly sweeps are logged in a year, with every new exposure entered in the register within a week of being found."
                cadence: rolling
              tasks:
                - "Save the standard list of names, addresses and entities to search"
                - "Run the name and address sweep and compare with last month @recurring(monthly:9)"
                - "Enter each new exposure in the register with a next action"
                - "Tell the head of the family only about material new findings"
            - name: News alerts for family names and entities
              description: |-
                ## Purpose
                Learning about an article from a friend's text is the worst way to find out. Alerts on family names, the holding company, the foundation and major properties, read once a week by the privacy lead, give time to prepare a response or ask for a correction before the story travels.

                ## Milestones
                1. Alerts set up for each family name, the main entities and well-known properties.
                2. Alerts routed to the privacy lead's mailbox, not to family members.
                3. A weekly read of alerts with relevant items logged.
                4. Noise reduced by adjusting search terms after the first month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts cover every family name and main entity, and the privacy lead logs a weekly review of results for at least three months."
                cadence: rolling
              tasks:
                - "Set up news alerts for each family name and main entity"
                - "Route all alerts to the privacy lead's mailbox"
                - "Read the week's alerts and log anything relevant @recurring(weekly:mon)"
                - "Refine search terms after the first month to cut noise"
            - name: Data broker opt-out cycle
              description: |-
                ## Purpose
                Opting out of a people-search site is rarely permanent: brokers repopulate profiles from fresh records, and new sites appear. A quarterly cycle of checking and re-submitting opt-outs keeps the family's home addresses off the sites most often used to find people.

                ## Milestones
                1. First-round opt-outs submitted for every profile on the exposure list.
                2. Each opt-out logged with the date sent, confirmation received and date removed.
                3. Profiles that reappear re-submitted in the next quarter.
                4. New broker sites added to the list as they are found.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every known broker profile is checked and re-submitted if live, with dates logged for submission and removal."
                cadence: cyclic
              tasks:
                - "Submit opt-outs for the highest-ranked broker profiles this week"
                - "Log each opt-out with the date sent and any confirmation"
                - "Check every broker site and re-submit live profiles @recurring(quarterly)"
                - "Add any newly found broker sites to the exposure list"
            - name: Media enquiry log and response routine
              description: |-
                ## Purpose
                Without a log, the family cannot see that the same journalist has called three times, or that a rich list researcher is asking every business partner. Logging each enquiry with who asked, what they wanted, what was said and the deadline, and reviewing the log monthly, turns scattered calls into a pattern the family can respond to.

                ## Milestones
                1. A log set up with date, outlet, person, question, deadline, response and outcome.
                2. Every enquiry since the contact point opened entered.
                3. A rule agreed for which enquiries go to the head of the family and which to the lawyer.
                4. A monthly review held with the privacy lead and noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every media or outside enquiry is logged within one working day, and a monthly log review is recorded."
                cadence: rolling
              tasks:
                - "Set up the enquiry log with the agreed columns"
                - "Enter every enquiry received since the contact point opened"
                - "Agree which kinds of enquiry are escalated to the lawyer"
                - "Review the enquiry log with the privacy lead @recurring(monthly:20)"
            - name: Privacy check before each registry filing
              description: |-
                ## Purpose
                Annual returns, confirmation statements, director appointments and property transfers all ask for names and addresses, and one form filled from an old template can undo years of care. A check before each filing confirms the correspondence address is used and nothing optional is disclosed.

                ## Milestones
                1. A calendar of every recurring filing for family entities, with its filer.
                2. A short pre-filing checklist agreed with the company secretary.
                3. Each filing checked against the list before submission.
                4. Any filing that used a home address noted and corrected where possible.

                ## Notes
                Never leave out information a registry legally requires. The aim is to use the address and disclosure options the law allows, which the company secretary or counsel confirms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every filing for family entities in a year is checked against the pre-filing list, with exceptions recorded and followed up."
                cadence: cyclic
              tasks:
                - "Ask the company secretary for the calendar of recurring filings"
                - "Agree a five-point pre-filing privacy checklist"
                - "Review the filing calendar against the checklist with the secretary @recurring(yearly)"
                - "Note any filing that disclosed a home address and ask about correction"
            - name: Quarterly social media settings review
              description: |-
                ## Purpose
                Platforms change their defaults, and accounts set to private three years ago may now share location, contacts or tagged photos. A quarterly review with each willing family member checks visibility, tagging, location sharing and old posts, in about twenty minutes per person.

                ## Milestones
                1. A one-page checklist of settings for the platforms the family actually uses.
                2. Each adult's accounts reviewed with them, not for them.
                3. Location sharing, tag approval and contact discovery set to the agreed level.
                4. Old public posts that show homes, schools or routines archived or deleted by their owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every willing family member's accounts are checked against the settings list, with the date recorded."
                cadence: cyclic
              tasks:
                - "Write a one-page settings checklist for the platforms in use"
                - "Offer each adult a twenty-minute settings session"
                - "Run the settings review with each willing family member @recurring(quarterly)"
                - "Help owners archive old posts that show homes or routines"
            - name: Supplier and contractor mention checks
              description: |-
                ## Purpose
                Architects, interior designers, yacht builders, caterers and charities love naming impressive clients in portfolios and case studies, often with photographs. A standing clause in contracts plus a quarterly search of suppliers' websites keeps the family out of other people's marketing.

                ## Milestones
                1. A no-publicity clause agreed with counsel for use in supplier contracts.
                2. Current suppliers who have worked on homes, boats or events listed.
                3. Each supplier's website and social accounts checked for family names or recognisable images.
                4. Removal requests sent and confirmed for anything found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A no-publicity clause is in standard supplier contracts and each quarter's search of supplier sites is logged with any removals confirmed."
                cadence: rolling
              tasks:
                - "Ask counsel for a short no-publicity clause for supplier contracts"
                - "List suppliers who have worked on the homes, boats or events"
                - "Search supplier websites and accounts for family mentions @recurring(quarterly)"
                - "Send removal requests and log each confirmation"
            - name: Donor listing preferences with each charity
              description: |-
                ## Purpose
                Charity annual reports, donor walls and gala programmes publish names by default, often by giving band, which tells the world roughly what the family can afford. Recording each gift's listing preference and confirming it before each annual report goes to print keeps generosity from becoming a profile.

                ## Milestones
                1. Every charity the family gives to listed with the name it lists the donor under.
                2. A preferred listing chosen for each: anonymous, a family foundation name or the family name.
                3. Written confirmation of the preference received from each charity.
                4. A yearly reminder sent before annual report deadlines.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every charity supported has a written listing preference on file, reconfirmed in writing each year before its annual report."
                cadence: cyclic
              tasks:
                - "List every charity the family gives to and how each lists donors"
                - "Choose a listing preference for each gift"
                - "Ask each charity to confirm the preference in writing"
                - "Remind each charity of listing preferences before annual reports @recurring(yearly)"
            - name: Annual privacy review at the family council
              description: |-
                ## Purpose
                Looking back once a year keeps privacy on the family's agenda without making it a constant worry. Bringing the exposure register, the enquiry log and a short summary of removals to the family council shows what has improved, what is still exposed, and whether the profile level still suits everyone.

                ## Milestones
                1. A two-page annual privacy summary prepared by the privacy lead.
                2. Open high-severity exposures listed with a plan for each.
                3. The profile level reconfirmed or changed and minuted.
                4. Priorities for the coming year agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year the family council receives a written privacy summary and minutes a decision on the profile level and next year's priorities."
                cadence: cyclic
              tasks:
                - "Ask the agent to summarise the year's exposure register and enquiry log"
                - "Add open high-severity items with a proposed plan for each"
                - "Put the privacy summary on the family council agenda @recurring(yearly)"
                - "Record the profile decision and next year's priorities in the minutes"
            - name: How public registries and ownership registers work
              description: |-
                ## Purpose
                Knowing why a registry shows a name, who can search it and what exemptions exist lets the family ask advisers the right questions instead of hoping. A focused study of the land, company, beneficial ownership and court registries in the family's main countries pays back every time a new entity or property is set up.

                ## Milestones
                1. Notes on what each main registry publishes, who can search it and for what fee.
                2. The difference between legal owner, registered owner and beneficial owner understood and written down.
                3. Known exemption or suppression routes listed, to be confirmed by counsel.
                4. Questions for counsel collected in one list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the main registries in each family country, with exemption routes and open questions for counsel, is saved in the privacy folder."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read each main registry's own guidance on what it publishes"
                - "Write the difference between legal, registered and beneficial owner"
                - "List any exemption or suppression routes the guidance mentions"
                - "Collect the open questions for the next call with counsel"
            - name: Erasure and access rights under data protection law
              description: |-
                ## Purpose
                Many countries, including the EU and UK and a growing number in the Caribbean and the Americas, give people rights to see what an organisation holds about them and, in some cases, to have it erased. Understanding those rights in outline lets the family make requests that organisations have to answer, rather than polite asks they can ignore.

                ## Milestones
                1. The data protection law in each country of residence identified, with its regulator.
                2. The rights to access, correction, erasure and objection summarised for each.
                3. Limits noted, such as journalism, public records and legal obligations.
                4. Model request letters prepared, to be checked by counsel before first use.

                ## Notes
                Whether a right applies to a particular site or publisher is a legal question. Use this knowledge to prepare and ask, and let counsel decide on contested cases.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of data protection rights and limits for each country of residence, plus counsel-checked model request letters, is saved in the privacy folder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Identify the data protection law and regulator in each country of residence"
                - "Summarise the access, erasure and objection rights in a page each"
                - "Note the main exceptions for journalism and public records"
                - "Draft model request letters and send them to counsel for review"
            - name: Search engine removal requests
              description: |-
                ## Purpose
                Search engines offer forms to remove certain personal information, such as home addresses, phone numbers, images of minors and outdated pages, from their results even when the source page stays up. Learning the criteria and filing well-prepared requests removes the easiest routes to the family's front door.

                ## Milestones
                1. Each major search engine's removal policies read and summarised.
                2. Results that meet a removal criterion picked from the audit.
                3. Requests filed with clear evidence and logged.
                4. Outcomes tracked and refused requests reviewed for a second route.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every audit result that meets a search engine removal criterion has a filed request with its outcome logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the personal information removal policies of the main search engines"
                - "Pick audit results that meet a removal criterion"
                - "File removal requests with screenshots and log each one"
                - "Check the status of open removal requests @recurring(monthly:14)"
            - name: Media law basics with the family's lawyer
              description: |-
                ## Purpose
                When an article is being written, the family needs to know the difference between a story that is unwelcome and one that is unlawful. A session with a media lawyer on privacy, defamation, harassment, children's protections and the role of press regulators in the family's countries sets realistic expectations before anything is at stake.

                ## Milestones
                1. A one-hour briefing held with a media lawyer, with notes taken.
                2. The main grounds for complaint or legal action written in plain words.
                3. The press regulator or complaints body in each country identified.
                4. A short list kept of when to call the lawyer immediately.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from a media law briefing, including when to call the lawyer at once, are filed and shared with the privacy lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the family lawyer to recommend a media law specialist"
                - "Book a one-hour briefing and send questions in advance"
                - "Write up the grounds for complaint in plain words"
                - "Keep a short list of situations that need the lawyer at once"
            - name: How strangers piece together a family profile
              description: |-
                ## Purpose
                Anyone determined can join small, harmless facts into something harmful: a marathon result gives a running route, a flight tracker gives a holiday, a property sale gives a new address. Understanding the common open-source techniques in outline lets family members spot the clue they are about to give away.

                ## Milestones
                1. The main public sources used to profile people listed: registries, tracking sites, sports results, school and club pages.
                2. A worked example built from the family's own audit, shared only with adults.
                3. Three or four everyday habits identified that would close the biggest gaps.
                4. The findings folded into the next privacy briefing.

                ## Notes
                Keep this about recognising exposure. Physical security measures and threat assessment belong with the family's security specialist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of how the family's own public facts connect is shared with the adults, with three habits agreed to close the largest gaps."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the public sources most often used to build a profile"
                - "Build a worked example from the family's own audit findings"
                - "Pick three everyday habits that would close the biggest gaps"
                - "Add the findings to the next privacy briefing"
            - name: Photo metadata and location habits
              description: |-
                ## Purpose
                Phones stamp photos with location and time, and a picture posted live tells everyone where the family is right now. Learning to strip location data, post after leaving rather than while there, and check backgrounds for house numbers and car plates is a small skill every family member can pick up in an evening.

                ## Milestones
                1. Location tagging turned off in the camera settings of each family phone, by its owner.
                2. A simple way to remove metadata before sharing shown to each person.
                3. A habit agreed of posting after leaving a place.
                4. A background check routine for photos taken at home.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Each family member has location tagging off on their camera and knows how to remove metadata, confirmed in a short check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Show each family member how to turn off camera location tagging"
                - "Demonstrate one way to strip metadata before sharing a photo"
                - "Agree the post-after-leaving habit as a family"
                - "Practise checking a home photo's background for identifying details"
            - name: Choosing a personal data removal service
              description: |-
                ## Purpose
                Opt-outs across dozens of broker sites in several countries can take a privacy lead days each quarter, and specialist removal services now do it for a subscription. Comparing three services on coverage, method, data they require and reporting shows whether paying one beats doing it in-house.

                ## Milestones
                1. Three services shortlisted that cover the family's countries of residence.
                2. Each compared on sites covered, re-check frequency, data required, reporting and cost per person.
                3. References or independent reviews checked for each.
                4. A decision recorded to subscribe, run a trial or keep the work in-house.

                ## Notes
                Start from the **Purchase decision** template. Prefer a service that asks for the least personal data to do its job.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three removal services ends in a recorded decision to subscribe, trial or keep opt-outs in-house."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist three removal services covering the family's countries"
                - "Compare coverage, data required, reporting and cost per person"
                - "Check references or independent reviews for each service"
                - "Record the decision and the reasons in the privacy folder"
            - name: Retaining a press adviser on standby
              description: |-
                ## Purpose
                Finding a press adviser on the afternoon a story breaks means accepting whoever is free. Agreeing a standby arrangement now, with a small retainer or a pre-agreed day rate, gives the family someone who already knows its profile level and can answer a journalist within hours.

                ## Milestones
                1. Two or three advisers with private client experience met.
                2. A standby arrangement chosen: retainer, day rate or call-off.
                3. A confidentiality agreement and engagement letter signed.
                4. The adviser briefed on the profile statement and enquiry log.

                ## Notes
                Start from the **Vendor** template to keep the adviser's terms, contacts and review dates together.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A press adviser is engaged on signed standby terms, holds a confidentiality agreement and has been briefed on the family's profile statement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family lawyer and peers for adviser recommendations"
                - "Meet two or three advisers with private client experience"
                - "Agree standby terms and sign a confidentiality agreement"
                - "Brief the chosen adviser on the profile statement"
            - name: Nominee or trust ownership of the family homes
              description: |-
                ## Purpose
                Homes bought in personal names put the owner's name, and sometimes the price, on a searchable land register. Asking counsel whether holding a home through a company, trust or nominee would reduce visibility, and what it would cost in tax, transparency filings and administration, gives the family a clear choice for each property.

                ## Milestones
                1. Each family home listed with its current registered owner and what the register shows.
                2. Counsel's written view obtained on ownership options for each property.
                3. Tax, filing and running costs set against the privacy gained for each option.
                4. A decision recorded for each home: keep as is, restructure, or decide at the next purchase.

                ## Notes
                Holding structures can add tax and reporting duties and rarely make ownership invisible to authorities. This is a decision for the family with its lawyer and tax adviser, not a do-it-yourself fix.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each family home has a recorded ownership decision based on counsel's written view of privacy, tax and running costs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each home with its registered owner and what the register shows"
                - "Ask counsel for a written view on ownership options per property"
                - "Ask the tax adviser to cost each option"
                - "Record the decision for each home in the privacy folder"
            - name: Professional directors in place of family names
              description: |-
                ## Purpose
                Every directorship a family member holds is usually a public record with a name, birth month and service address, and the list of appointments maps the family's holdings. Where the business does not need a family member on the board, a professional director or corporate secretary service can take the seat, with control kept through shareholder rights.

                ## Milestones
                1. Every directorship held by a family member listed with the entity and its purpose.
                2. Each one assessed for whether a family director is needed for control or regulation.
                3. Professional director options and costs obtained for the rest.
                4. Changes agreed with counsel and the appointment filings made.

                ## Notes
                A professional director owes duties to the company and needs proper information and authority. Counsel should confirm that control and duties are properly documented.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each family directorship is assessed, and those replaced by professional directors have filings completed under counsel's advice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every directorship held by a family member"
                - "Mark which seats need a family member for control or regulation"
                - "Get quotes from two professional director providers"
                - "Agree changes with counsel before any filings are made"
            - name: Policy on rich lists and wealth rankings
              description: |-
                ## Purpose
                Rich lists estimate wealth from registry filings, property prices and company accounts, and researchers usually write first to ask the family to confirm or correct. Agreeing a standing policy, decline to comment, correct facts only, or cooperate, means the office answers the same way every year instead of deciding under deadline.

                ## Milestones
                1. The lists and rankings that have featured or approached the family identified.
                2. The three response options and their effects discussed with the press adviser.
                3. A standing policy chosen and written in two sentences.
                4. A template reply prepared for the privacy lead to send.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-sentence policy on rich list enquiries and a matching template reply are approved and filed with the enquiry log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every ranking that has featured or approached the family"
                - "Discuss the response options with the press adviser"
                - "Write the standing policy in two sentences"
                - "Prepare the template reply for the privacy lead"
            - name: Anonymous or named philanthropy decision
              description: |-
                ## Purpose
                Named giving can inspire others and honour a parent, but a building with the family name on it is also a signpost. Deciding, gift by gift or as a family rule, when to give anonymously, through a foundation with a neutral name or in the family name, makes philanthropy fit the profile level.

                ## Milestones
                1. Past gifts listed with how each was publicly credited.
                2. Reasons for and against naming discussed by the adults who give.
                3. A default rule agreed with the cases where naming is allowed.
                4. The rule shared with the foundation or donor-advised fund administrator.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written default rule on anonymous and named giving is agreed by the giving adults and sent to the giving vehicle's administrator."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List past gifts and how each was publicly credited"
                - "Discuss reasons for and against naming with the adults who give"
                - "Agree the default rule and its exceptions"
                - "Send the rule to the foundation or fund administrator"
            - name: Defensive domain names and social handles
              description: |-
                ## Purpose
                Strangers who register a domain or social handle in a family member's name can use it for impersonation, scams or mockery. Registering the obvious domains and reserving handles for each family name costs little and keeps them out of other hands, even if they are never used.

                ## Milestones
                1. The domains and handles worth holding listed for each family name and main entity.
                2. Domains registered with private registration and renewals on auto-pay.
                3. Handles reserved on the main platforms, set to private and empty.
                4. Ownership and login records kept by the privacy lead in the password manager.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Key domains for each family name are registered with privacy protection and handles reserved, all recorded with renewal dates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the domains and handles worth holding for each name"
                - "Register domains with private registration enabled"
                - "Reserve handles on the main platforms and leave them private"
                - "Check domain renewals and handle ownership @recurring(yearly)"
            - name: Removing old content and legacy profiles
              description: |-
                ## Purpose
                Old personal websites, forum accounts, wedding sites, university pages and long-forgotten profiles often hold more personal detail than anything recent. Working through them one by one, closing what the family controls and asking politely for the rest, shrinks the footprint in a way opt-outs cannot.

                ## Milestones
                1. Legacy accounts and pages found in the audit listed by owner.
                2. Accounts the family controls closed or emptied by their owners.
                3. Removal requests sent to site owners for pages the family does not control.
                4. Outcomes logged and stubborn cases passed to the erasure request process.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every legacy account the family controls is closed, and each remaining legacy page has a logged removal request and outcome."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List legacy accounts and pages from the audit by owner"
                - "Help each owner close or empty the accounts they control"
                - "Send polite removal requests to site owners for the rest"
                - "Log outcomes and pass refusals to the erasure request process"
            - name: Erasure and access request tracker
              description: |-
                ## Purpose
                Formal data protection requests come with response deadlines, and the family loses the benefit if nobody notices a missed one. A tracker that records each request, its legal basis, the date sent, the deadline and the reply lets the privacy lead chase on time and escalate refusals to counsel or the regulator.

                ## Milestones
                1. A tracker set up with organisation, request type, law relied on, date sent, deadline and outcome.
                2. Every request made so far entered.
                3. A chase routine for overdue replies agreed.
                4. An escalation path recorded for refusals, through counsel or the regulator.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every formal erasure or access request is tracked with its deadline, and overdue replies are chased within a week of the deadline."
                cadence: rolling
              tasks:
                - "Set up the tracker with the agreed columns"
                - "Enter every formal request made so far"
                - "Check deadlines and chase any overdue replies @recurring(monthly:25)"
                - "Pass refused requests to counsel with the correspondence"
            - name: Limiting public tracking of aircraft and vessels
              description: |-
                ## Purpose
                Flight tracking sites and vessel tracking services publish movements in near real time, so a registration number can show when the family flies and where the yacht is moored. Asking the aviation manager and yacht manager what privacy programmes and display options exist, within safety and legal rules, reduces how easily movements can be followed.

                ## Milestones
                1. Each aircraft and vessel listed with its registration and how its movements appear publicly.
                2. The managers' written advice obtained on lawful privacy options.
                3. Chosen options applied and their renewal dates recorded.
                4. Family members told that public tracking can never be fully switched off.

                ## Notes
                Transponders and vessel tracking exist for safety and must stay on as the rules require. Changes go through the aircraft or yacht management company, never on the family's own initiative.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each aircraft and vessel has a recorded decision on lawful privacy options, applied by its manager, with renewal dates in the calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search each registration on public tracking sites and note what shows"
                - "Ask the aviation and yacht managers for lawful privacy options"
                - "Apply the chosen options through the managers"
                - "Renew aircraft and vessel privacy enrolments with the managers @recurring(yearly)"
            - name: Privacy plan for a family wedding
              description: |-
                ## Purpose
                Weddings bring a guest list in the hundreds, a planner, photographers, a venue and every guest's phone, and the photos travel within the hour. A plan agreed with the couple early covers the venue's publicity rules, a phone-free ceremony if wanted, vendor confidentiality and what the couple are happy to share themselves.

                ## Milestones
                1. The couple's wishes on publicity agreed, since it is their day first.
                2. Confidentiality and no-publicity terms in every vendor contract.
                3. A guest note on photos and posting sent with the invitations or on the day.
                4. One official set of photos chosen for anyone who asks, so others are not needed.

                ## Notes
                Start from the **Operational checklist** template to track vendor terms, guest notes and the day's arrangements.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every wedding vendor has signed no-publicity terms and guests have received the photo and posting note before the day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the couple what they are comfortable sharing publicly"
                - "Add no-publicity terms to every wedding vendor contract"
                - "Write a warm guest note on photos and posting"
                - "Choose the official photos to release if anyone asks"
            - name: Privacy around a business sale or listing
              description: |-
                ## Purpose
                Selling the family business or taking it public turns private wealth into a reported number overnight, with the family's names in the press release and the deal coverage. Planning the announcement with the deal team, deciding which names appear and preparing the family for the attention that follows keeps the event from defining them.

                ## Milestones
                1. The deal team told about the family's profile level early in the process.
                2. Names and quotes in the announcement agreed, with family members left out where possible.
                3. The contact point and press adviser ready on announcement day.
                4. Every family member briefed on what to say and expect in the weeks after.

                ## Notes
                Disclosure rules for listed companies and regulated deals override family preference. Agree only what the deal lawyers confirm is allowed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement's family references are agreed in writing with the deal team and every family member is briefed before the announcement date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Share the family's profile statement with the deal lawyers"
                - "Agree which family names and quotes appear in the announcement"
                - "Put the press adviser on standby for announcement day"
                - "Brief each family member on what to say and expect"
            - name: Buying a home without broadcasting it
              description: |-
                ## Purpose
                New homes appear in land registry entries, planning applications, builders' boards and estate agent case studies, often before the family moves in. Planning privacy into the purchase, from the buying entity to the agent's confidentiality and the renovation contractors' terms, is far easier than undoing it afterwards.

                ## Milestones
                1. The buying entity and registered address agreed with counsel before an offer is made.
                2. Confidentiality agreed in writing with agents on both sides.
                3. Planning applications prepared with the architect so they reveal only what the law requires.
                4. Contractors' no-publicity terms signed before work starts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The purchase completes with the agreed buying entity, written agent confidentiality and signed contractor no-publicity terms."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel which entity and address should be used to buy"
                - "Request written confidentiality from both estate agents"
                - "Ask the architect what planning applications will publish"
                - "Add no-publicity terms to every renovation contract"
            - name: Responding to a profile article about the family
              description: |-
                ## Purpose
                When a journalist is writing a profile, silence leaves the story to former staff, rivals and old cuttings. With the press adviser, the family can decide whether to correct facts, offer a short statement or decline, and can make sure children and private addresses stay out of it where the law and the publication's standards allow.

                ## Milestones
                1. The request, deadline and known questions logged and passed to the press adviser.
                2. A response approach chosen: decline, factual corrections only or a statement.
                3. Any request about children or addresses made in writing, citing the publication's code where one applies.
                4. The published piece reviewed and any significant errors raised through the proper route.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A logged response is sent before the journalist's deadline, and the published article is reviewed with any errors raised in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log the request and send it to the press adviser the same day"
                - "Agree the response approach with the head of the family"
                - "Ask in writing that children and addresses be left out"
                - "Review the published piece and raise any significant errors"
            - name: Privacy after a death in the family
              description: |-
                ## Purpose
                Grief arrives alongside an obituary, a funeral notice, probate records and sometimes press interest in who inherits. Deciding what the obituary says, whether the funeral is private and what probate will make public, with the executors and lawyer, protects the family when it has least energy to think about it.

                ## Milestones
                1. The obituary and funeral notice agreed, leaving out home addresses and grandchildren's details.
                2. A decision recorded on a private funeral with a later public memorial, if wanted.
                3. The executors' lawyer asked what probate will publish and whether anything can be limited.
                4. The contact point told to handle condolence and press calls.

                ## Notes
                Probate and estate records are public in many countries. Only the lawyer can say what can be limited, and it should be asked early.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The obituary and notices avoid addresses and children's details, and the executors' lawyer has confirmed in writing what probate will publish."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the obituary wording with close family"
                - "Decide whether the funeral is private and when to hold a memorial"
                - "Ask the executors' lawyer what probate will make public"
                - "Route condolence and press calls to the contact point"
            - name: Privacy in court proceedings involving the family
              description: |-
                ## Purpose
                Divorces, trust disputes and business litigation can put family finances and children's names into public judgments and court lists. Raising privacy at the start, so counsel can consider anonymity orders, private hearings, sealed documents or private dispute resolution, is the only point at which these options are realistic.

                ## Milestones
                1. Counsel asked at the outset what in the case may become public.
                2. Options such as arbitration, mediation, anonymity or sealing considered and costed.
                3. A decision recorded on which protections to apply for.
                4. Family members briefed on not discussing the case online or with the press.

                ## Notes
                Courts decide anonymity and sealing, often in favour of open justice. Treat these as options to explore with counsel, not expectations.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "At the start of any proceedings, counsel's written view on publicity and protective options is on file with a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel what in the case may become public"
                - "Compare private resolution, anonymity and sealing options with counsel"
                - "Record the decision on which protections to seek"
                - "Brief family members on keeping the case offline"
            - name: Social media rules for teenagers in the family
              description: |-
                ## Purpose
                Teenagers live online, and a single post of a holiday villa, a school blazer or a birthday gift can undo every other privacy measure. Rules work best when teenagers help write them: a short agreement about location, home photos, family wealth and who to tell if someone asks odd questions, reviewed with a parent each month.

                ## Milestones
                1. A conversation held with each teenager about why the family keeps a low profile.
                2. A one-page agreement written together on location, home photos, wealth and strangers.
                3. Privacy settings checked side by side with each teenager.
                4. A monthly check-in agreed that feels like a chat, not an inspection.

                ## Notes
                Avoid secret monitoring. It tends to end trust when discovered, and trust is what makes a teenager report the strange message.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each teenager has a one-page social media agreement they helped write, and monthly check-ins are logged for three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Talk with each teenager about why the family keeps a low profile"
                - "Write a one-page social media agreement together"
                - "Check privacy settings side by side with each teenager"
                - "Hold a relaxed social media check-in with each teenager @recurring(monthly:3)"
            - name: Protecting younger children's privacy at school
              description: |-
                ## Purpose
                Schools publish class photos, sports results, newsletters and event pictures, and many collect consent for this once at enrolment and never ask again. Setting each child's photo and publicity consent deliberately, and asking the school to keep surnames and family details out of publications, protects children who cannot yet choose for themselves.

                ## Milestones
                1. Each school's photo and publicity consent forms obtained and completed with care.
                2. A quiet conversation held with the head or registrar about the family's wishes.
                3. School websites and newsletters checked for existing images of the children.
                4. Other parents' class chat groups handled with a simple rule on sharing photos.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each child's school has a completed publicity consent reflecting the family's wishes, and existing online images have been reviewed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request each school's photo and publicity consent forms"
                - "Speak with the head or registrar about the family's wishes"
                - "Check school websites and newsletters for existing images"
                - "Review school photo consents at the start of each school year @recurring(yearly)"
            - name: Low profile for young adults studying abroad
              description: |-
                ## Purpose
                University is often the first time a young adult explains the family to strangers, and a flat full of new friends will search their surname. A short conversation before departure about what to say, what not to post, how to handle a lavish lifestyle and who to call if something goes wrong helps them blend in without lying.

                ## Milestones
                1. A conversation held about how to describe the family simply and truthfully.
                2. Social media and registration habits for the new country covered.
                3. A local contact and the family privacy lead's number saved on their phone.
                4. A check-in scheduled after the first term.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before departure, the student has had the profile conversation and saved two contacts, with a first-term check-in booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Talk through a simple, truthful way to describe the family"
                - "Cover posting, flat addresses and registrations in the new country"
                - "Save a local contact and the privacy lead's number on their phone"
                - "Book a check-in call after the first term"
            - name: Family member with a public career
              description: |-
                ## Purpose
                An athlete, artist, politician or online creator in the family needs visibility for their work, while siblings and children need none of it. Drawing a clear line between the public person and the private family, agreed with that member, protects both their career and everyone else's privacy.

                ## Milestones
                1. The member's public needs listed: name, image, biography, appearances.
                2. Topics agreed as off limits: homes, children, family wealth and other members.
                3. Their agent, publicist or press office briefed on the line in writing.
                4. A yearly conversation scheduled to adjust as the career changes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written note agreed with the public family member sets out what is public and what is off limits, shared with their agent or publicist."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the member what their career needs to be public"
                - "Agree the topics that stay off limits"
                - "Send the agreed line in writing to their agent or publicist"
                - "Revisit the public and private line with the member @recurring(yearly)"
            - name: Privacy during a separation or divorce
              description: |-
                ## Purpose
                A separation is when old photos, shared accounts and court papers are most likely to surface, sometimes through the other side or their friends. Working through shared online accounts, joint registrations and what the proceedings may publish, with each party's lawyer, lowers the chance of private details becoming public in a hard season.

                ## Milestones
                1. Shared online accounts, photo libraries and registrations listed.
                2. Access to shared accounts changed or divided as lawyers advise.
                3. Counsel's view obtained on what the proceedings may make public.
                4. A family rule agreed not to comment publicly or online on the separation.

                ## Notes
                Take legal advice before changing access to any account the other party also uses.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Shared accounts and registrations are listed and handled on legal advice, and counsel's written view on publicity is on file."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List shared online accounts, photo libraries and registrations"
                - "Ask the lawyer before changing access to any shared account"
                - "Ask counsel what the proceedings may make public"
                - "Agree as a family not to comment on the separation online"
            - name: Privacy for an older parent online
              description: |-
                ## Purpose
                Older family members are often the most visible without knowing it: a public social profile with grandchildren's photos, a listed landline, a charity committee page with a home address. A patient, respectful session with them reduces exposure and the scam calls that follow it.

                ## Milestones
                1. The parent's public profiles and listings found and shown to them.
                2. Settings changed together, with their consent, on each account.
                3. Directory listings and committee pages corrected or removed.
                4. A simple rule agreed for unknown callers who mention the family.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The older parent's public profiles are reviewed with them, settings changed with consent and directory listings corrected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the parent's public profiles and directory listings"
                - "Sit with them and change account settings together"
                - "Ask directories and committees to remove the home address"
                - "Agree a simple rule for unknown callers who mention the family"
            - name: Managed public biography and approved images
              description: |-
                ## Purpose
                For families who choose a managed presence, an empty space online fills with guesses and unflattering photos. A short approved biography, two or three approved images and a clear line on what will never be discussed give journalists, event hosts and charities something accurate to use.

                ## Milestones
                1. A biography of 100 to 150 words drafted for each member who needs one.
                2. Two or three approved images chosen and rights confirmed.
                3. The materials placed with the press adviser and the contact point.
                4. A yearly refresh scheduled.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved biographies and images for each relevant member are held by the press adviser and contact point, refreshed each year."
                cadence: rolling
              tasks:
                - "Draft a 150-word biography for each member who needs one"
                - "Choose two or three approved images and confirm the rights"
                - "Give the materials to the press adviser and the contact point"
                - "Refresh the approved biographies and images @recurring(yearly)"
            - name: Privacy by design for new family structures
              description: |-
                ## Purpose
                Each new trust, company, foundation or property vehicle is a chance to repeat old exposures or avoid them. A short privacy checklist used by counsel and the office at the design stage, covering entity names, registered agents, directors, addresses and document trails, makes low visibility the default for everything that comes next.

                ## Milestones
                1. A one-page privacy checklist for new structures agreed with counsel.
                2. Neutral naming conventions for entities and properties chosen.
                3. The checklist added to the office's new structure process.
                4. The first new structure set up using the checklist and reviewed afterwards.

                ## Notes
                Privacy design must never hide ownership from those entitled by law to know it, such as tax authorities and regulated institutions. The aim is lawful discretion, not concealment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A privacy checklist for new structures is in the office's set-up process and has been used on at least one new structure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page privacy checklist for new structures"
                - "Agree neutral naming conventions for entities and properties"
                - "Review the checklist with counsel and add it to the set-up process"
                - "Use it on the next new structure and note what to change"
            - name: Cross-border personal data removal campaign
              description: |-
                ## Purpose
                A family spread across the Caribbean, North America and Europe faces different laws, brokers and regulators in each place, and a single country's opt-outs leave the rest untouched. A coordinated campaign, country by country, using local rights and local help where needed, brings the whole footprint down together.

                ## Milestones
                1. Each country of residence or frequent travel listed with its data law and main broker sites.
                2. The rights and routes available in each country summarised.
                3. Requests filed country by country and tracked in one place.
                4. A quarterly progress note showing live exposures by country.

                ## Notes
                Caribbean data protection laws differ in scope and maturity from island to island. Confirm local rights with a local lawyer before relying on them.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Removal requests have been filed in every listed country, with live exposures by country reported each quarter."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List each country of residence or frequent travel with its data law"
                - "Summarise the removal rights and routes in each country"
                - "File requests country by country and track them in one place"
                - "Report live exposures by country to the privacy lead @recurring(quarterly)"
---

# Family Privacy and Public Profile

This area is for the parent, elder or family office lead who has searched the family's name and not liked what came back, and for every family member whose habits decide how visible the family really is. It starts with foundations (a footprint audit, an agreed profile level, a map of the public registries that hold family names, one contact point for the press and a correspondence address), then the routines that keep the footprint small, the knowledge behind registries, erasure rights and media law, decisions about removal services, nominee ownership and anonymous giving, events such as a wedding, a business sale or a death, situations for teenagers, students abroad and members with public careers, and finally specialist work on privacy by design for new structures and cross-border removal campaigns.

What repeats is a weekly scan of news alerts, a monthly name and address sweep, a monthly review of media enquiries and erasure requests, quarterly data broker opt-outs and social media settings checks, and a yearly privacy review at the family council alongside registry filings and donor listings. The Purchase decision, Vendor, Operational checklist and Risk register templates pair with choosing a removal service, retaining a press adviser, event privacy and the exposure register. Anything that turns on what the law requires or allows, such as nominee arrangements, court anonymity or a complaint against a publisher, belongs with the family's lawyer. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
