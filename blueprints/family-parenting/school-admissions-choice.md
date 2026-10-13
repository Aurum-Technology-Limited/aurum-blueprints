---
id: family-parenting.school-admissions-choice
name: School Admissions & Choice
description: "Key dates, catchment and odds, a shortlist built on what your family values, visits that tell you something, preferences ranked well, and calm handling of offers, waiting lists and appeals."
category: personal
version: 1.0.0
tags: [family-parenting, school-admissions-choice, parent, school-places, open-days, catchment, appeals, secondary-transfer]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - purchase-decision
    - risk-register
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: School Admissions & Choice
          description: "Researching schools, visiting open days, meeting admission deadlines and handling appeals for primary and secondary places."
          projects:
            - name: Admissions timeline for your child's entry year
              description: |-
                ## Purpose
                School places are decided a long way ahead: applications usually open in early autumn, primary and secondary deadlines fall months apart, and offer day and the appeal window follow in spring. An application that arrives after the deadline is normally considered only after every on-time family, which at a popular school means no place. Putting every date in one calendar now turns the whole process from a scramble into a sequence.

                ## Milestones
                1. Your child's entry year confirmed against the local birth date cut-off.
                2. Opening date, closing deadline, offer day, acceptance date and appeal deadline written in one place.
                3. Each date in the family calendar with a reminder two weeks before.
                4. Any earlier dates for entrance test registration or supplementary forms added.

                ## Notes
                Primary and secondary deadlines are usually different, and some selective or faith schools close their own forms weeks before the main deadline.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single dated timeline from opening to appeal deadline is in the family calendar with reminders set for each key date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm which school year your child enters using their birth date and the local cut-off"
                - "Find the published admissions dates on your local authority or school district website"
                - "Put the deadline, offer day and appeal deadline in the family calendar with reminders"
                - "Note any earlier registration dates for entrance tests or supplementary forms"
                - "Recheck the published admissions dates when the new year's guide appears @recurring(yearly)"
            - name: How school admissions work where you live
              description: |-
                ## Purpose
                Every area runs admissions slightly differently: who sets the rules for each school, which criteria come first, how distance is measured and whether your order of preferences is visible to the schools. Parents who learn the system before they start visiting make better shortlists and avoid the tactical mistakes that cost children places. A single evening with the official parents' guide covers most of it.

                ## Milestones
                1. The official admissions guide for parents downloaded and read.
                2. The main oversubscription criteria summarised in five plain lines.
                3. The method for measuring home to school distance noted, including the measuring points.
                4. Each nearby school marked by who sets its admissions policy.

                ## Notes
                Community schools usually follow the local authority policy, while many faith, academy, charter or foundation schools set their own. Read both kinds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of local admissions rules, criteria order and distance method exists and both parents have read it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the main admissions guide for parents from your local authority or district"
                - "Summarise the oversubscription criteria in five lines"
                - "Note how home to school distance is measured and from which point"
                - "List which nearby schools set their own admissions policy"
            - name: Measuring your distance and catchment position
              description: |-
                ## Purpose
                Distance and catchment decide most places at oversubscribed schools, and many families assume they are in range when the boundary or the measuring point says otherwise. A straight-line distance from your front door can differ by hundreds of metres from the authority's method, which may measure from a fixed point on your property to a specific school gate. Measuring the official way now tells you where you really stand before you fall for a school.

                ## Milestones
                1. Catchment or priority area schools confirmed with the official address checker.
                2. Distance to each nearby school measured the same way the admissions authority measures it.
                3. Every figure entered in your school comparison notes.
                4. Any boundary doubt confirmed by the admissions team in writing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Official catchment status and measured distance are recorded for every nearby school, with any unclear boundary confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Enter your address in the official school catchment or address checker"
                - "Measure the distance to each nearby school using the authority's own method"
                - "Email the admissions team to confirm any catchment boundary you are unsure of"
                - "Recheck the catchment map each autumn before applying @recurring(yearly)"
            - name: Family priorities for choosing a school
              description: |-
                ## Purpose
                Without agreeing what matters before the visits, it is easy to be swayed by a polished open evening, a new sports hall or one neighbour's strong opinion. Ranking eight to ten factors such as travel time, size, pastoral care, academic progress, support for additional needs, clubs, wraparound care and friends going there gives every visit a yardstick. For secondary, the child's own top three belong on the sheet too.

                ## Milestones
                1. A list of eight to ten factors that matter to your family.
                2. Each factor marked as essential, helpful or not important by both parents separately.
                3. Your child's own top three wishes heard and written down.
                4. One agreed priorities sheet ready to take on every visit.

                ## Notes
                Give travel time real weight. A long school run twice a day for five or seven years wears on the whole family, whatever the results table says.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page priorities sheet ranking at least eight factors is agreed by both parents and includes the child's view where they are old enough."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the ten things that matter most to you in a school"
                - "Ask your partner to rank the same list on their own"
                - "Ask your child what they most want from their next school"
                - "Agree a one-page priorities sheet to take on every visit"
            - name: Long list of schools within realistic reach
              description: |-
                ## Purpose
                Most families only seriously consider the two schools everyone talks about, and miss a smaller or newer school ten minutes further away that would suit their child well. Drawing a circle based on the longest school run you would accept and listing every school inside it produces eight to twelve real options. Schools you cannot realistically get into come off the list early, before anyone gets attached.

                ## Milestones
                1. A map showing every school within your maximum acceptable travel time.
                2. Each school's type, age range and size noted.
                3. Schools whose criteria your child cannot meet struck out with the reason.
                4. A long list of eight to twelve schools ready for closer research.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written long list of eight to twelve schools within the agreed travel limit, each with type, size and age range noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every school within your maximum travel time on a map"
                - "Note each school's type, age range and number of pupils"
                - "Strike out any school whose admission criteria your child cannot meet"
                - "Revisit the long list each September in case schools open, merge or close @recurring(yearly)"
            - name: Admissions criteria comparison table
              description: |-
                ## Purpose
                Two schools on the same street can rank applicants completely differently: one by siblings then distance, another by feeder primaries, ability banding, faith practice or random allocation. Putting every school's criteria side by side in one table shows at a glance which category your child falls into at each, and which schools need an extra form or a test. It becomes the reference for every later decision.

                ## Milestones
                1. The current year's admissions policy saved for each school on the long list.
                2. One table with each school's criteria in priority order.
                3. Your child's category at each school marked.
                4. Schools needing a supplementary form, test or extra evidence highlighted.

                ## Notes
                Use the policy for your child's year of entry, not last year's. Policies are reviewed every year and sibling or feeder rules do change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comparison table covers every long-listed school's criteria for the correct entry year, with your child's category marked for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the admissions policy for your entry year for each long-listed school"
                - "Copy each school's criteria into one table in priority order"
                - "Mark which category your child falls into at each school"
                - "Highlight schools that need a supplementary form or a test"
            - name: Admissions evidence folder
              description: |-
                ## Purpose
                Admissions teams can ask for proof of address, a birth certificate, evidence of a sibling, a faith leader's signature or a professional's letter, often at short notice and sometimes after an offer is made. An offer can be withdrawn if the address cannot be proved, so gathering the documents early protects the place you win. One folder, paper and digital, also makes any appeal far easier.

                ## Milestones
                1. The list of accepted proofs of address for your admissions authority found.
                2. A copy of your child's birth certificate scanned and filed.
                3. Two recent proofs of address dated within the window the authority requires.
                4. Any supporting letters requested from doctors, social workers or faith leaders.

                ## Notes
                Never apply from a relative's or temporary address. Most authorities check, and offers obtained that way are routinely withdrawn, even after the child has started.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the birth certificate copy, two in-date proofs of address and any needed supporting letters, both on paper and digitally."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which proofs of address your admissions authority accepts"
                - "Scan your child's birth certificate and two recent proofs of address"
                - "Request any supporting letter from a doctor or faith leader early"
                - "Swap in a recent bill or statement as proof of address @recurring(quarterly)"
            - name: Realistic odds check for each school
              description: |-
                ## Purpose
                Last year's allocation figures, how many applied per place, how many places went to siblings and the furthest distance offered, say more than any open evening about whether a school is a realistic hope. Families who skip this often fill every preference with schools they had little chance of, then get allocated somewhere far away. Labelling each school likely, possible or unlikely makes the final ranking honest.

                ## Milestones
                1. Allocation figures for the last two or three years gathered for each school.
                2. Your child's position compared with the furthest distance or last criterion reached.
                3. Each school labelled likely, possible or unlikely.
                4. At least one likely school identified that you would be content with.

                ## Notes
                The last distance offered moves from year to year with sibling numbers and birth rates, so treat it as a range, not a promise.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every shortlisted school carries a likely, possible or unlikely label based on at least two years of allocation data."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find last year's allocation figures in the admissions guide or on school websites"
                - "Note the furthest distance offered for each of the past three years"
                - "Label each school likely, possible or unlikely for your child"
                - "Confirm at least one likely school that you would accept happily"
            - name: Admissions deadline and policy watch
              description: |-
                ## Purpose
                Through the year before applying, authorities publish revised guides, extra tour dates, changed catchments and late notices, and schools quietly update their policies. A ten-minute check once a month means nothing changes without you knowing. It matters most in the four months before the deadline, when late changes are most common.

                ## Milestones
                1. Bookmarks saved for the authority's admissions pages and each shortlisted school.
                2. A monthly check completed and dated in your admissions notes.
                3. Every policy change copied into the criteria comparison table.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Admissions pages are checked monthly through the application year, with each check dated and any change logged in the criteria table."
                cadence: rolling
              tasks:
                - "Bookmark the admissions pages for your authority and each shortlisted school"
                - "Check the admissions pages for new dates or policy changes @recurring(monthly:9)"
                - "Update the criteria table whenever a school's policy changes"
                - "Sign up for any admissions email updates the authority offers"
            - name: School visit notes kept the same way
              description: |-
                ## Purpose
                After the third open evening in a week, schools blur together, and the one with the best brass band can win by default. Writing every visit up the same way, within a day, against the same headings, gives you notes you can compare months later when you rank. Your child's comments, in their own words, belong in each one.

                ## Milestones
                1. One notes page per school with the same headings.
                2. Every visit written up within 24 hours.
                3. Your child's reactions recorded in their own words.
                4. Notes read back together before the final ranking.

                ## Notes
                Start from the **Meeting notes** template. Useful headings: first impression, answers to your questions, how pupils behaved, practical details, what your child said.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every school visited has a notes page with the same headings, written within a day of the visit and including the child's comments."
                cadence: rolling
              tasks:
                - "Create one notes page per school from the meeting notes template"
                - "Write up each visit within a day while it is fresh"
                - "Add your child's comments in their own words"
                - "Read back through the school notes and add anything new you heard @recurring(monthly:16)"
            - name: Open day and open evening calendar
              description: |-
                ## Purpose
                Secondary open evenings cluster into a few autumn weeks and often clash, while primary tours run from autumn to January and some need booking weeks ahead. Collecting every date in one calendar, with who is going to each, means no shortlisted school is missed because the tour filled up. The same list, refreshed each summer, serves younger children later.

                ## Milestones
                1. Visit dates collected for every school on the long list.
                2. Clashes resolved by splitting visits between parents or booking weekday tours.
                3. Every tour that needs booking booked.
                4. Each visit in the family calendar with who attends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every long-listed school has a visit date in the family calendar, with bookings confirmed and clashes resolved before the season starts."
                cadence: cyclic
              tasks:
                - "List the open day dates published by each school on your list"
                - "Book tours that need advance booking as soon as booking opens"
                - "Check school websites for newly added visit dates @recurring(monthly:3)"
                - "Rebuild the open day list each summer for the next admissions round @recurring(yearly)"
            - name: Waiting list position tracking
              description: |-
                ## Purpose
                After offer day, waiting lists move as families accept independent places, move house or turn offers down, and positions can also fall as new applicants with higher priority join. Logging your position each month shows whether a place is likely before the new term, and gives you a factual basis for deciding when to stop hoping. Most lists are ranked by the admissions criteria, not by how long you have been on them.

                ## Milestones
                1. Written confirmation that your child is on the waiting list for each higher preference.
                2. Position logged with the date at least monthly.
                3. A trend over three months visible in the log.
                4. A date agreed on which you will review whether to stay on each list.

                ## Notes
                Start from the **Metrics log** template. Check how long each list is kept open; some close at the end of the first term unless you ask to stay on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log records the waiting list position for each higher preference at least monthly, with written confirmation of every listing."
                cadence: rolling
              tasks:
                - "Confirm in writing that your child is on the waiting list for each higher preference"
                - "Ask the admissions team for your current list position @recurring(monthly:20)"
                - "Log each position with the date in the metrics log"
                - "Confirm each term that you still want to stay on every list @recurring(quarterly)"
            - name: Admissions correspondence log
              description: |-
                ## Purpose
                Appeals, complaints and late-application cases turn on what was sent and said, and when: the submission receipt, the offer email, the phone call where someone told you a form was not needed. Filing every message and noting every call takes minutes and can decide a case months later. Ask for anything important to be confirmed in writing.

                ## Milestones
                1. One admissions folder set up in email and on your computer.
                2. The application submission receipt saved as a PDF.
                3. Every phone call with admissions staff noted with date, name and what was said.
                4. All letters and emails filed in date order.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated log holds every admissions email, letter, receipt and call note from first contact through to the final place."
                cadence: rolling
              tasks:
                - "Create an admissions folder in your email and on your computer"
                - "Save the application submission receipt as a PDF"
                - "Note the date, name and gist of every phone call with admissions staff"
                - "File new admissions emails and letters into the folder @recurring(monthly:28)"
            - name: Younger siblings admissions calendar
              description: |-
                ## Purpose
                Families with two or three children apply in several different years, and sibling priority usually depends on the older child still being at the school when the younger one starts. Policies can narrow sibling rules or change catchments in between, so assuming a younger child will follow automatically is risky. A yearly check against each child's entry year spots the gaps early.

                ## Milestones
                1. Entry years for each child at primary and secondary written down.
                2. The overlap years when an older sibling will still be at each school noted.
                3. Each school's sibling definition checked against your family, including step and half siblings.
                4. Years when two children apply in the same round flagged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every child's entry years, with sibling overlap and each school's current sibling rule, is reviewed once a year."
                cadence: cyclic
              tasks:
                - "Write down the entry year for each child at primary and secondary"
                - "Check whether sibling priority still applies once the older child has left"
                - "Note any sibling rule change in each school's new policy @recurring(yearly)"
                - "Flag any year when two children apply in the same round"
            - name: School news and inspection watch
              description: |-
                ## Purpose
                A school can change a lot in a year: a new head, a disappointing inspection, a merger, falling rolls or a plan to expand. A quarterly look at inspection reports, results and local news for your shortlist means your view is current when you rank, not based on a reputation from five years ago. The yearly admissions consultation is where future catchment changes first appear.

                ## Milestones
                1. Sources for inspection reports, results and school news listed.
                2. A quarterly scan completed for each shortlisted school.
                3. Any change of head teacher, status or size noted in the school notes.
                4. The yearly local admissions consultation read.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each shortlisted school is checked quarterly for inspection, results and leadership news, with changes dated in the school notes."
                cadence: rolling
              tasks:
                - "List where inspection reports, results and school news are published"
                - "Scan inspection, results and news for shortlisted schools @recurring(quarterly)"
                - "Read the annual admissions consultation for your area @recurring(yearly)"
                - "Note any change of head teacher or school status in that school's notes"
            - name: Talking to current parents and pupils
              description: |-
                ## Purpose
                Open evenings show a school at its best; parents with a child there now know about homework load, how a bullying report was handled, how quickly emails get answered and what the morning gate is like. Asking two or three of them the same five questions gives a far more honest picture than any prospectus. Clubs, neighbours and older siblings' friends are the easiest way in.

                ## Milestones
                1. Five standard questions written for every current parent conversation.
                2. At least two current parents spoken to for each shortlisted school.
                3. A current pupil asked about their day where possible.
                4. Every conversation added to that school's notes with the date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Notes from at least two current parent conversations, using the same five questions, exist for every shortlisted school."
                cadence: rolling
              tasks:
                - "Write five questions to ask every current parent the same way"
                - "Ask friends, neighbours and clubs who has a child at each shortlisted school"
                - "Arrange a coffee or call with one current parent @recurring(monthly:12)"
                - "Add each conversation to that school's notes with the date"
            - name: Your child's view on their next school
              description: |-
                ## Purpose
                Children who feel heard settle better at secondary, even when they do not get their first choice, and a younger child's reaction to a classroom can tell you something adults miss. Short, regular conversations through the research year, rather than one big talk before the deadline, keep their view current and prepare them for any outcome. They should also know, in plain words, that places are decided by rules, not by how much they want it.

                ## Milestones
                1. Your child's reaction to each visit recorded in their own words.
                2. How places are allocated explained at a level they understand.
                3. A regular short check-in held through the application year.
                4. A conversation had about what happens if the first choice says no.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly check-ins with the child are held through the application year and their views are written into the school notes."
                cadence: rolling
              tasks:
                - "Ask your child what they noticed after each visit and write it down"
                - "Explain how school places are given out in words they understand"
                - "Hold a short check-in about school choices @recurring(monthly:24)"
                - "Talk through what happens if the first choice says no"
            - name: Reading a school inspection report properly
              description: |-
                ## Purpose
                Headline grades hide most of what matters, and a report from four years and one head teacher ago may describe a different school. Reading the whole report, its date, the areas for improvement and the comments on behaviour, safeguarding and leadership, turns it into questions you can put to the school. An hour per shortlisted school is enough.

                ## Milestones
                1. The latest inspection report read in full for each shortlisted school.
                2. The inspection date and any leadership change since then noted.
                3. Three strengths and the main improvement point written for each school.
                4. Each improvement point turned into a question for the visit.

                ## Notes
                Every country has its own inspectorate and grading words, such as Ofsted in England. Read your own inspectorate's guide to what each grade means.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of strengths, improvement points and inspection date exists for each shortlisted school, with at least one visit question drawn from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the latest inspection report for each shortlisted school"
                - "Note the inspection date and whether leadership has changed since"
                - "Write three strengths and the main improvement point for each"
                - "Turn each improvement point into a question for the visit"
            - name: Making sense of school results and progress data
              description: |-
                ## Purpose
                Raw exam results largely reflect who a school takes in, while progress measures show how much it adds for children like yours. Small year groups swing wildly, and a single year's dip can be one cohort, not a decline. Learning to read three years of attainment and progress side by side stops a league table position from making the decision for you.

                ## Milestones
                1. The difference between attainment and progress measures understood and written in a sentence.
                2. Three years of both measures gathered for each shortlisted school.
                3. Cohort sizes noted beside each year's figures.
                4. Any large swing raised as a question with the school.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sheet shows three years of attainment, progress and cohort size for each shortlisted school, with any big swing explained or queried."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official school performance tables for your country or region"
                - "Compare attainment and progress figures over three years for each school"
                - "Note cohort sizes, as small year groups swing widely"
                - "Ask each school what lies behind any big change in results"
            - name: Questions that get real answers on school visits
              description: |-
                ## Purpose
                The head's talk at an open evening is rehearsed; the useful information comes from questions staff do not hear every night. Asking how they help a child who falls behind, how many teaching posts are filled by temporary staff, what lunchtime looks like or how they handle a falling-out between friends reveals far more. A short bank of questions, chosen per school, makes every visit count.

                ## Milestones
                1. A bank of about fifteen questions grouped by learning, wellbeing and practicalities.
                2. The five most important questions chosen for each school.
                3. Answers recorded in that school's visit notes.
                4. Vague answers followed up by email after the visit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written question bank exists and each visited school has answers to its five chosen questions recorded in the notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a bank of fifteen questions grouped by learning, wellbeing and practicalities"
                - "Ask the agent to suggest follow-up questions for any answers that sound vague"
                - "Choose the five questions that matter most for each school"
                - "Ask to see a lesson in progress and the lunch hall at its busiest"
            - name: Tie-breakers and definitions in admissions policies
              description: |-
                ## Purpose
                Places at popular schools are often decided by the small print at the end of a policy: the tie-breaker, how a sibling is defined, which address counts when a child lives in two homes, and how flats in one building are separated. Families with step-siblings, shared care or a recent move are most often caught out. Reading those clauses for each school tells you exactly how your situation will be treated.

                ## Milestones
                1. The tie-breaker rule found for each shortlisted school.
                2. Each school's definitions of sibling and home address copied out.
                3. Any clause that affects your family underlined with a note on its effect.
                4. Unclear wording queried with the admissions team in writing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each shortlisted school records its tie-breaker and its sibling and address definitions, with their effect on your family stated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the tie-breaker rule at the end of each school's policy"
                - "Read how each policy defines a sibling and a home address"
                - "Check how the policy separates homes in the same building"
                - "Write which definitions affect your family and how"
            - name: Selective school entrance test familiarisation
              description: |-
                ## Purpose
                Selective and grammar schools often test in the autumn of a child's last primary year, with registration closing as early as the summer before. Knowing the format and trying the free sample papers in a relaxed way reduces nerves on the day; how much further preparation to do is a separate family decision. The bigger question is whether a selective school suits this particular child at all.

                ## Milestones
                1. Registration deadline, test date and format known for each selective school.
                2. The free familiarisation papers tried at home without pressure.
                3. A light weekly practice rhythm agreed with your child.
                4. A family decision recorded on whether to sit the test.

                ## Notes
                Keep practice short and kind. A child who dreads Saturday papers for a year often arrives at the test more anxious, not more prepared.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Test registration is completed or deliberately declined by the deadline, after at least two sample papers have been tried at home."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find each selective school's test registration deadline and format"
                - "Download the familiarisation papers the schools publish for free"
                - "Do one relaxed practice paper together @recurring(weekly:sat)"
                - "Decide together whether sitting the test is right for your child"
            - name: Faith school admissions requirements
              description: |-
                ## Purpose
                Faith schools often give priority by religious practice, defined as attendance over a set period such as two years and confirmed by a faith leader on a supplementary form. That form usually goes to the school separately from the main application, and missing it can drop a child to the lowest priority group. Checking each school's definition early leaves time to gather signatures without a rush.

                ## Milestones
                1. Each faith school's definition of practice and the period it covers written down.
                2. The supplementary form for each faith school downloaded.
                3. Signatures arranged with your faith leader well before the deadline.
                4. Both the main application and every supplementary form confirmed as received.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every faith school on the shortlist has a completed, signed supplementary form submitted and its receipt confirmed before the deadline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read each faith school's definition of practice and the period it covers"
                - "Download the supplementary form for each faith school"
                - "Ask your faith leader to sign the form well before the deadline"
                - "Note attendance dates if a school asks for a record of practice @recurring(monthly:6)"
            - name: How school admission appeals work
              description: |-
                ## Purpose
                Every family refused a place can appeal to an independent panel, but most do not know what the panel actually decides until the letter arrives. Typically it asks whether the policy was applied correctly, and then whether your child's need for that school outweighs the harm of one more pupil; infant class size rules are often stricter. Learning this before offer day means you can judge quickly whether an appeal is worth it.

                ## Milestones
                1. Your area's official guidance for parents on appeals read.
                2. The questions an appeal panel decides written in your own words.
                3. Last year's appeal success figures found for each shortlisted school.
                4. The appeal lodging deadline after offer day noted in the calendar.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written summary of the appeal tests, deadlines and local success rates exists before offer day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your area's official guidance for parents on admission appeals"
                - "Write the questions an appeal panel decides in your own words"
                - "Find how many appeals succeeded at each shortlisted school last year"
                - "Note the appeal lodging deadline that follows offer day"
            - name: Ranking your preferences in the right order
              description: |-
                ## Purpose
                In many areas schools rank applicants without seeing where you placed them, so listing your true favourite first never harms your chance at the others, and tactical ordering often backfires. Leaving out a likely school is the classic mistake: if no preference can be met, the child is allocated wherever has space left, which may be a long way off. Getting the order right is the single decision on the form that matters most.

                ## Milestones
                1. Your area's rule on how preferences are treated confirmed.
                2. The shortlist ranked in the order you genuinely prefer.
                3. Every preference slot on the form used.
                4. At least one school labelled likely included in the list.

                ## Notes
                If your area does not use an equal preference system, or a school gives priority to first preferences, read that rule closely and ask the admissions team before deciding.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A final preference order using every slot, including at least one likely school, is agreed and written down before the application opens."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm whether your area uses an equal preference system"
                - "Rank the shortlist in the order you truly prefer"
                - "Use every preference slot the form allows"
                - "Check that at least one preference is a school marked likely"
            - name: Visiting shortlisted schools on an ordinary day
              description: |-
                ## Purpose
                Open evenings are staged, with the best displays, the keenest pupils and the head on top form. A tour on a normal weekday morning shows corridors at lesson change, how staff speak to children, what is on the walls and how the playground feels. For your top three schools, it is the most revealing hour of the whole process.

                ## Milestones
                1. Weekday tours booked at your top three schools.
                2. A lesson change, playtime or lunch observed at each.
                3. Notes compared with what you saw at the open evening.
                4. Any difference between the two visits raised with the school.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your top three schools have each been visited on a normal teaching day, with notes comparing it to the open evening."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each top school whether they offer weekday tours"
                - "Book a morning tour in a normal teaching week"
                - "Watch a lesson change or playtime and note behaviour"
                - "Compare what you saw with your open evening notes"
            - name: Rush-hour travel trial to each shortlisted school
              description: |-
                ## Purpose
                Twenty minutes on a map can be fifty at ten to eight, and a route that looks fine on a Sunday may cross a busy junction your child would face alone at eleven. Doing the trip at real school times, by the way your child would actually travel, tests the one factor that touches every school day for years. It also tells you whether free or subsidised school transport applies.

                ## Milestones
                1. The morning trip timed at school time for each top school.
                2. The afternoon return timed at the end of the school day.
                3. Cost and safety of each route noted.
                4. Eligibility for free or subsidised school transport checked.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Morning and afternoon travel times, costs and safety notes are recorded for each top school, tested at real school times."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Do the morning trip to each top school at real school time on a weekday"
                - "Time the return trip at the end of the school day"
                - "Check eligibility for free or subsidised school transport"
                - "Walk or ride the route with your child if they will travel alone"
            - name: Final shortlist scoring and decision
              description: |-
                ## Purpose
                By the end of the visits you have more information than you can hold in your head, and the loudest recent impression tends to win. Scoring each shortlisted school against your priorities sheet, with its odds label beside the score, makes the trade-offs visible: the school you love but probably cannot get, the solid likely option, the outside chance. One evening of discussion then produces a list you can both explain.

                ## Milestones
                1. Three to six schools scored on the same factors from the priorities sheet.
                2. Each score shown next to that school's odds label.
                3. Both parents agreed on the final shortlist.
                4. A short paragraph written on why each school is on it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scored shortlist of three to six schools, each with its odds label and a written reason, is agreed by both parents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score each shortlisted school against the family priorities sheet"
                - "Put the odds label next to each school's score"
                - "Hold one evening discussion to agree the final shortlist"
                - "Write a short paragraph on why each school made the list"
            - name: State or independent school decision
              description: |-
                ## Purpose
                Fees for the full span of school years can add up to a sum on the scale of a house deposit, before uniforms, trips, lunches and yearly rises that often outpace inflation. Comparing the real total with the state options, and testing whether it stays affordable if one income drops, turns a feeling into a decision you can stand behind. This is an organising exercise; take money questions to a qualified adviser.

                ## Milestones
                1. Every fee, extra and likely trip listed for each independent option.
                2. The total estimated over all school years with yearly rises.
                3. Affordability checked on a reduced household income.
                4. The decision and reasons recorded by both parents.

                ## Notes
                Start from the **Purchase decision** template. Check the notice period for leaving too; a term's fees in lieu of notice is common.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on state or independent schooling, backed by a full-term cost estimate and an affordability check, is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every fee, extra and trip cost for each independent school"
                - "Estimate the total over all school years with yearly fee rises"
                - "Check whether the fees would still be affordable on one income"
                - "Record the decision and the reasons with your partner"
            - name: Bursary and scholarship applications
              description: |-
                ## Purpose
                Many independent schools offer means-tested bursaries, sometimes covering most of the fees, with detailed financial forms and occasionally a home visit, while scholarships are usually a smaller reduction for talent. Bursary deadlines often fall before the entrance tests, so families who look late miss them. Applying properly takes several evenings of gathering paperwork.

                ## Milestones
                1. Each school's bursary policy and income guide read.
                2. Payslips, tax returns and statements gathered for the forms.
                3. Every bursary form submitted before its deadline.
                4. Each award and its conditions for renewal recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Bursary forms are submitted on time to every independent school still under consideration, and each outcome is recorded with its renewal terms."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the bursary policy and income guide for each independent school"
                - "Gather the payslips, tax returns and statements the forms ask for"
                - "Submit each bursary form before the school's deadline"
                - "Record each award and the conditions for renewing it"
            - name: Moving house for a school catchment
              description: |-
                ## Purpose
                Moving for a catchment is the most expensive school decision a family can make, and it can still fail if the last distance offered shrinks or the boundary is redrawn. Authorities also check for short-term moves and second addresses, and some only count a move made by a set date. Weighing the cost and the risks on paper before viewing houses avoids a very costly gamble.

                ## Milestones
                1. Three years of last distance offered for the target school gathered.
                2. The authority's rules on changes of address and second homes read.
                3. The full cost of moving compared with other school options.
                4. Risks listed and a decision recorded by both parents.

                ## Notes
                Start from the **Risk register** template. Applying from an address you do not genuinely live at is treated as fraud by many authorities and the place can be withdrawn.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A risk register and cost comparison for a catchment move exist, ending in a recorded move or stay decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check how far the last distance offered has moved over three years"
                - "Read the authority's rules on changes of address and second homes"
                - "Cost the move including fees, taxes and any higher housing costs"
                - "List the risks in a risk register and decide with your partner"
            - name: Accepting or declining your school offer
              description: |-
                ## Purpose
                Offers usually have to be accepted by a stated date or they can be withdrawn, and many families wrongly think accepting a lower preference spoils an appeal or waiting list place for a higher one. In most systems it does not, so accepting what you have keeps your child safe while you pursue the rest. Independent schools often want a decision and a deposit by their own, earlier date.

                ## Milestones
                1. The offer letter read and the acceptance deadline noted.
                2. The offered place accepted in writing before the deadline.
                3. Your child added to the waiting list for each higher preference.
                4. Every independent school told your decision by its own deadline.

                ## Notes
                Check your own area's rules, but as a sensible default accept the place you have, even while appealing.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The offered place is accepted in writing before its deadline and waiting list requests are confirmed for every higher preference."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the offer letter and note the acceptance deadline"
                - "Accept the offered place in writing even if you plan to appeal"
                - "Ask to join the waiting list for each higher preference"
                - "Tell any independent school by its deadline whether you are taking the place"
            - name: Changing schools during the school year
              description: |-
                ## Purpose
                Moving house, a friendship breakdown or a school that simply is not working can all prompt a change, and in-year places follow different rules from the main round: you may apply to the school or to the authority, and a place depends on a vacancy in that year group. Securing the new place before withdrawing from the old one protects your child from weeks out of education. Talking honestly with the current school first sometimes solves the problem without a move.

                ## Milestones
                1. Reasons for a move written down, with what the current school has tried.
                2. Schools with a vacancy in your child's year group identified.
                3. An in-year application submitted to the right admissions body.
                4. A start date and handover confirmed before withdrawal from the current school.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new school place is confirmed in writing with a start date before the child is withdrawn from the current school."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down why a move is needed and what the current school has tried"
                - "Check which schools have vacancies in your child's year group"
                - "Submit an in-year application to the right admissions body"
                - "Keep your child at the current school until the new place is confirmed"
            - name: Primary school application submission
              description: |-
                ## Purpose
                Applications for a first school place usually close in the middle of the winter before the child starts, often with an online form that times out, asks for evidence uploads and has to be submitted, not just saved. Submitting a week early, with every preference in the agreed order and supplementary forms sent separately, avoids the last-night crash that catches thousands of parents. The confirmation email is your proof if anything goes wrong.

                ## Milestones
                1. An account created on the online admissions system.
                2. Every preference entered in the agreed order.
                3. Supplementary forms sent directly to the schools that ask for them.
                4. The application submitted at least a week early with the confirmation saved.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The primary application is submitted at least seven days before the deadline, with the confirmation and every supplementary form receipt filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create your account on the online admissions system"
                - "Enter every preference in your agreed order"
                - "Send supplementary forms directly to the schools that ask for them"
                - "Submit a week before the deadline and save the confirmation email"
            - name: Secondary school transfer application
              description: |-
                ## Purpose
                Secondary applications usually close in the autumn of the last primary year, just weeks after the open evenings and, in selective areas, soon after test results arrive. Your child is old enough to have strong views, and their friends will be comparing choices in the playground. Finalising the order with them present, checking test outcomes first and submitting early keeps the process calm.

                ## Milestones
                1. Any selective test results received and factored into the order.
                2. The final order agreed with your child present.
                3. The secondary application submitted early with its receipt saved.
                4. The primary school told which schools you applied to, if it asks.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The secondary transfer application is submitted before the deadline with the child's view recorded and the receipt filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Wait for any selective test results before fixing the order"
                - "Sit down with your child to confirm the final order together"
                - "Submit the secondary form early and file the receipt"
                - "Tell your child which schools are listed and in what order"
            - name: Offer day plan for every outcome
              description: |-
                ## Purpose
                Offers arrive by email or online portal on a fixed day, children hear each other's results in class, and parents who have not thought ahead can make rash calls in the first hour. Deciding beforehand what you will do with a first, lower or no preference, and how you will tell your child, keeps the day manageable. The next steps for waiting lists and appeals should already be written down.

                ## Milestones
                1. A written plan for a first preference, a lower preference and no preference.
                2. Time set aside on offer day to read the offer calmly.
                3. A decision made on how and when to tell your child.
                4. Waiting list and appeal steps ready to use if needed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written offer day plan covering every outcome is ready before offer day, and the offer is read and acted on within 48 hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what you will do with a first, lower or no preference offer"
                - "Set aside a calm half hour on offer day to read the result"
                - "Decide how and when you will tell your child"
                - "Prepare the waiting list and appeal steps in case you need them"
            - name: Entrance test day logistics
              description: |-
                ## Purpose
                Selective and independent school tests often take place on a Saturday at an unfamiliar site, sometimes across town with hundreds of other families arriving at once. A child who arrives late, hungry or flustered does not show what they can do. Sorting the practical details the week before means the day itself is about the test, not the car park.

                ## Milestones
                1. Venue, start time and what to bring confirmed for each test.
                2. The route trialled and arrival time set with a margin.
                3. A bag packed the night before with pencils, water and any paperwork.
                4. Something enjoyable planned for after the test, whatever the outcome.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your child arrives at each entrance test at least twenty minutes early with everything on the school's list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the venue, start time and kit list for each test"
                - "Trial the route and set an arrival time with a margin"
                - "Pack pencils, water, snack and paperwork the night before"
                - "Plan something enjoyable for after the test"
            - name: Admission appeal case and hearing
              description: |-
                ## Purpose
                An appeal must be lodged within a deadline set in the offer letter, often a few weeks, and it succeeds on reasons specific to your child and that school, not on general preference or how close you live. A clear one-page statement with supporting evidence, and a calm presentation at the hearing, gives the panel something concrete to weigh. Medical, social or educational needs that only this school can meet carry most weight.

                ## Milestones
                1. The appeal form lodged before the deadline.
                2. Supporting letters and documents gathered for your child's specific needs.
                3. A one-page statement written and the admission authority's case read.
                4. The hearing attended and the decision recorded.

                ## Notes
                Panels cannot consider how good a school is in general. Focus on what this school offers your child that the allocated school cannot.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An appeal is lodged on time with a written statement and evidence, the hearing is attended and the panel's decision is filed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Lodge the appeal form before the deadline in the offer letter"
                - "Gather letters and documents that support your child's specific needs"
                - "Ask the agent to draft a one-page appeal statement for you to edit"
                - "Read the admission authority's case and note the points to answer"
            - name: Secondary open evening season with your child
              description: |-
                ## Purpose
                Open evenings for secondary schools are often the first time a ten or eleven year old pictures themselves somewhere new, and three in a week can leave them overwhelmed. Agreeing in advance which evenings they come to, what each of you will watch for and how you will talk about it afterwards makes the season useful rather than exhausting. Many schools run the head's talk twice, so time visits around it.

                ## Milestones
                1. The evenings your child will attend agreed with them.
                2. What each of you will look out for decided before each visit.
                3. The head's talk times checked so you hear it at each school.
                4. A short debrief held on the way home after every evening.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your child has attended every agreed open evening, with a debrief note written after each one."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with your child which open evenings they will come to"
                - "Pick two things each of you will look out for at every school"
                - "Check what time each head's talk runs and plan the evening around it"
                - "Ask three open questions on the way home and note the answers"
            - name: Applying for a place from abroad or another area
              description: |-
                ## Purpose
                Relocating for work often means needing a school place before you have the keys, and many authorities will only use an address you live at, or one backed by a signed tenancy or completed purchase. Rules for children arriving from abroad, and the documents needed, vary a lot between areas and between main-round and in-year applications. Asking early and in writing avoids a child arriving with no school to go to.

                ## Milestones
                1. The new area's rules for applicants moving in confirmed in writing.
                2. The evidence of the new address it accepts identified and obtained.
                3. An application submitted at the earliest point the rules allow.
                4. A fallback plan agreed if no place is ready on arrival.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An application is submitted with accepted proof of the new address, and the move-in plan includes a written fallback if no place is offered in time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Email the new area's admissions team about rules for families moving in"
                - "Ask which proof of the new address they will accept"
                - "Gather school reports and records from the current school"
                - "Submit the application at the earliest point the rules allow"
            - name: Applying when parents live apart
              description: |-
                ## Purpose
                When parents have separated, the application usually has to use the address where the child lives for most of the school week, and only one application can normally be made. If both parents hold legal responsibility and disagree on the school, admissions teams may pause until it is resolved, sometimes by mediation or a court. Agreeing the address, the order and who submits well before the deadline protects the child from being caught in the middle.

                ## Milestones
                1. The admissions policy's definition of home address for shared care read.
                2. Both parents agreed on which address and which schools to use.
                3. One application submitted, with both parents sent a copy.
                4. A plan for sharing offer day news and any appeal agreed.

                ## Notes
                If you cannot agree, a family mediator is usually the first step. Admissions staff cannot decide between parents for you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One application using the agreed address and order is submitted, with written agreement from both parents on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read how the admissions policy defines home address for shared care"
                - "Agree the address and the school list with your co-parent in writing"
                - "Decide who submits the form and send the other parent a copy"
                - "Agree how you will share offer day news with your child"
            - name: Summer-born child entry timing decision
              description: |-
                ## Purpose
                A child born in the last months before the cut-off can be among the youngest in the class by almost a year. Depending on where you live, you may be able to defer the start within the year, go part time at first, or request entry a year later into the first class rather than straight into the second. The request often has to be made at the normal application time, and its effect at secondary transfer should be checked too.

                ## Milestones
                1. Your area's options for summer-born and young children read and summarised.
                2. Views gathered from the nursery or childminder who knows your child.
                3. A request made to the admissions authority by its deadline, if you choose to delay.
                4. The answer recorded, including any effect on secondary transfer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on start timing, with any delayed-entry request and the authority's written answer filed before the application deadline."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your area's policy on summer-born and deferred school entry"
                - "Ask the nursery or childminder how your child might cope next autumn"
                - "Submit any delayed entry request before the admissions deadline"
                - "Ask how a delayed start would affect the secondary transfer year"
            - name: Choosing a school for a child with additional needs
              description: |-
                ## Purpose
                For a child with additional needs, the special needs coordinator, the building and how the school handles transitions can matter more than any results table. Visiting with a specific list, meeting the coordinator and asking for examples of support for children like yours shows whether inclusion is real. Where a statutory support plan names a school, admission usually runs through that process rather than the normal round, so check which route applies.

                ## Milestones
                1. A list of the specific support your child needs at school.
                2. A meeting held with the special needs coordinator at each shortlisted school.
                3. Accessibility, quiet spaces and transition support seen in person.
                4. The admissions route that applies to your child confirmed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each shortlisted school has a recorded meeting with its special needs coordinator, and the correct admissions route for your child is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the specific support your child needs during the school day"
                - "Book a meeting with each school's special needs coordinator"
                - "Ask for examples of how they support children with similar needs"
                - "Confirm in writing which admissions route applies to your child"
            - name: Claiming priority for an adopted or previously looked-after child
              description: |-
                ## Purpose
                Many admissions systems give top or near-top priority to children who are or were in care, including those adopted or under special guardianship, and some give priority to children of service families. Families often miss it because the form tucks the question away or the school's own policy asks for evidence separately. Claiming it correctly can change the outcome at an oversubscribed school.

                ## Milestones
                1. Each school's policy checked for looked-after and previously looked-after priority.
                2. The evidence required, such as an adoption or guardianship order, identified.
                3. The priority claimed on the application with evidence supplied.
                4. Receipt of the evidence confirmed by each admissions body.

                ## Notes
                Your post-adoption support team or virtual school, where one exists, can often advise on wording and evidence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The priority is claimed on the application and every admissions body has confirmed receipt of the supporting evidence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check each school's policy for previously looked-after priority"
                - "Find the order or letter that proves your child's status"
                - "Tick the priority box and attach evidence on the application"
                - "Ask each admissions body to confirm they received the evidence"
            - name: Wraparound care as a school choice factor
              description: |-
                ## Purpose
                For working and single parents, whether a school runs a breakfast club and after-school care, and whether those clubs have their own waiting lists, can decide whether the place is workable at all. A brilliant school with no care before nine forces a daily scramble that lasts years. Asking about care, costs and availability on the visit puts it on the scoring sheet where it belongs.

                ## Milestones
                1. Breakfast and after-school provision recorded for each shortlisted school.
                2. Hours, costs and any club waiting lists noted.
                3. Nearby childminders who collect from each school identified.
                4. Wraparound care given a weight in the shortlist scoring.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Wraparound care hours, costs and availability are recorded for every shortlisted school and included in the scoring."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each school about breakfast and after-school club hours and costs"
                - "Check whether the clubs have their own waiting lists"
                - "Find childminders who collect from each shortlisted school"
                - "Add wraparound care as a weighted factor in your scoring"
            - name: Late application after a missed deadline
              description: |-
                ## Purpose
                Families who move, are unwell or simply miss the date are not out of options, but late applications are usually considered only after every on-time application, which at a popular school means a list position rather than a place. Some authorities accept a late form as on time when there is a good reason, such as a recent move, if you explain promptly with evidence. Acting within days, not weeks, is what matters.

                ## Milestones
                1. The authority's late application rules and any cut-off for good reasons read.
                2. A late application submitted with a written explanation.
                3. Evidence of the reason, such as a tenancy start date, attached.
                4. Waiting list places requested once offers are made.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A late application with a written reason and evidence is submitted within a week of discovering the missed deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone the admissions team to ask how late applications are handled"
                - "Write a short explanation of why the application is late"
                - "Attach evidence such as a new tenancy or a medical letter"
                - "Request waiting list places as soon as offers are released"
            - name: Running a waiting list and an appeal side by side
              description: |-
                ## Purpose
                Families refused their preferred school usually have two routes at once: the waiting list, which moves on criteria, and the appeal, which turns on your child's individual case. Run together they give two chances, but the timing matters, because a place from the list can arrive the week before a hearing. Keeping both moving, and knowing when to withdraw one, saves effort and stress.

                ## Milestones
                1. Waiting list position and appeal hearing date both in one timeline.
                2. A rule agreed for what you will do if a list place comes before the hearing.
                3. The appeal panel told promptly of any change in position.
                4. The final outcome of both routes recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A single timeline tracks the waiting list and the appeal, ending with a recorded outcome for each route."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Put the waiting list position and hearing date in one timeline"
                - "Agree what you will do if a list place arrives before the hearing"
                - "Tell the appeal clerk promptly if your list position changes"
                - "Record the final outcome of both the list and the appeal"
            - name: Juggling independent and state offer dates
              description: |-
                ## Purpose
                Independent schools often make offers and ask for a deposit weeks before state offer day, so families applying to both can be asked to commit, or pay to hold a place, before they know the state result. Knowing each school's dates, deposit terms and refund rules lets you decide calmly whether to hold a place and what it would cost to let it go. A clear date-by-date plan prevents losing a deposit by surprise.

                ## Milestones
                1. Offer, acceptance and deposit dates listed for every independent school.
                2. Deposit amounts and refund terms written down.
                3. A plan agreed for which places to hold until state offer day.
                4. Each school notified of the final decision by its deadline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated plan covers every independent and state offer, with each deposit decision made deliberately and each school notified on time."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List offer, acceptance and deposit dates for each independent school"
                - "Read each school's deposit refund and notice terms"
                - "Agree which places to hold until state offer day"
                - "Notify every school of your final decision by its deadline"
            - name: Responding to an admissions policy consultation
              description: |-
                ## Purpose
                Admissions authorities consult before changing catchment areas, sibling rules, feeder schools or the number of places, and a change often lands years later on families who did not notice the consultation. A short, factual response from a parent, ideally alongside others from your street or school, is read and summarised in the decision. Taking part helps younger children in your family and your neighbours.

                ## Milestones
                1. The consultation documents and closing date found.
                2. The likely effect on local families written in plain terms.
                3. A factual response of one page submitted before the deadline.
                4. The final decision and any changes recorded for your sibling calendar.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written consultation response is submitted before the closing date and the authority's final decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the current admissions consultation and its closing date"
                - "Work out how the proposed change would affect local families"
                - "Ask the agent to tighten your draft response into one clear page"
                - "Submit the response and note the date the decision is due"
            - name: Complaint to an ombudsman after an appeal
              description: |-
                ## Purpose
                Appeal panel decisions are normally final, but if the hearing was badly run, the panel ignored evidence or the clerk gave wrong information, many countries let you complain to an independent ombudsman or similar body. It cannot simply re-decide the appeal, only whether it was handled fairly, and it can order a fresh hearing. Most complaints succeed or fail on a clear, dated account of what went wrong.

                ## Milestones
                1. The relevant complaints body and its time limit identified.
                2. A dated account of the faults in the process written from your correspondence log.
                3. The complaint submitted with copies of key documents.
                4. The outcome and any fresh hearing recorded.

                ## Notes
                A complaint is about how the appeal was handled, not whether you agree with the result. Stick to process failings you can evidence.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complaint with a dated account of process faults is lodged within the time limit and its outcome is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find which body handles complaints about appeal hearings where you live"
                - "List the process failings with dates from your correspondence log"
                - "Submit the complaint with copies of the key documents"
                - "Record the outcome and any order for a fresh hearing"
---

# School Admissions & Choice

This area covers getting a child into a school you are happy with, at primary entry, at secondary transfer or mid-way through, for parents who want to understand the rules rather than rely on playground rumour. It starts with the foundations (your timeline, how admissions work locally, your distance and odds, what your family values and an evidence folder), then the routines that run through an admissions year, the skills of reading inspection reports, results and policies, the decisions about shortlists, preferences and fees, the dated moments from open evenings to offer day and appeal hearings, the situations that change the rules such as separated parents, summer-born children or a move from abroad, and finally the specialist work of waiting lists, consultations and complaints.

What repeats is a monthly check of admissions pages, visit notes and current-parent conversations through the research year, monthly waiting list calls after offer day, a quarterly look at school news and inspection results, and a yearly reset for younger siblings. The Meeting notes, Metrics log, Purchase decision and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
