# Publish list: written blueprints not yet live (2026-11-08)

Rule used: each blueprint must be a goal one person owns. This list covers the 997 blueprints that are written but not in `launch.json`. Nothing has been published: `launch.json`, `catalog.json` and the blueprint files are unchanged. The machine-readable copy is `publish-list-2026-11-08.json`.

## Summary

- **Tier 1, everyday life (publish first): 173.** These are relationships, family, mental wellbeing, physical health, and food. Together they nearly double the everyday pillars.
- **Tier 2, broad personal value: 109.** Personal wealth, plus the individual craft of software, data, product, sales, leadership and consulting work.
- **Tier 3, niche or professional: 353.** These pass the rule but serve a narrow audience: founders raising money, IB/PE/VC/quant careers, practice owners, engineers, farmers, property developers and family-office principals.
- **Hold: 362.** Most are team or organisation processes that fail the rule. 21 are health items that need clinical review. 2 are relationships items: one needs a safety review and one needs a founder content decision. 7 duplicate a live blueprint, and 23 have legal, regulatory or safety exposure.
- Totals: 553 live today. That becomes 726 if Tier 1 ships, and 835 with Tiers 1 and 2.
- **Notices:** `node scripts/add-notices.mjs --check` passes (522 present, 0 missing). Every Tier 1, 2 and 3 pick in a health, wellbeing, money or law subject already carries its notice: 98 in Tier 1, 30 in Tier 2 and 137 in Tier 3. See *Notice gaps* below for picks the script's subject map does not cover.
- **Content quality:** every written file is 72 to 96 KB, so none is thin. Spot checks (keto, low-FODMAP, leaving an unhealthy relationship, long covid) found careful safety wording, clinician check-points and crisis signposting. Holds for clinical review are a gate decision, not a finding of bad content.

### Live blueprints per pillar, before and after

| Pillar | Written | Live now | + Tier 1 | + Tiers 1+2 | Tier 3 | Hold |
|---|---:|---:|---:|---:|---:|---:|
| Physical Health | 50 | 12 | 42 | 42 | 0 | 8 |
| Food & Nutrition | 50 | 10 | 47 | 47 | 0 | 3 |
| Mental & Emotional Wellbeing | 50 | 13 | 40 | 40 | 0 | 10 |
| Relationships & Friendship | 50 | 4 | 48 | 48 | 0 | 2 |
| Family & Parenting | 50 | 15 | 50 | 50 | 0 | 0 |
| Wealth & Investing | 50 | 6 | 6 | 36 | 14 | 0 |
| Strategy & Leadership | 50 | 0 | 0 | 8 | 5 | 37 |
| Sales & Revenue | 50 | 0 | 0 | 16 | 5 | 29 |
| Product Management | 50 | 0 | 0 | 12 | 0 | 38 |
| Software Engineering | 50 | 8 | 8 | 21 | 0 | 29 |
| Data & Analytics | 50 | 2 | 2 | 19 | 7 | 24 |
| IT & Security | 1 | 0 | 0 | 0 | 0 | 1 |
| Finance & Accounting | 50 | 4 | 4 | 4 | 19 | 27 |
| Fundraising & Investor Relations | 50 | 6 | 6 | 6 | 32 | 12 |
| Engineering Practice | 50 | 2 | 2 | 2 | 33 | 15 |
| Private Equity & Venture Capital | 50 | 0 | 0 | 0 | 29 | 21 |
| Quantitative Finance & Trading | 50 | 6 | 6 | 6 | 40 | 4 |
| Investment Banking & Advisory | 50 | 0 | 0 | 0 | 21 | 29 |
| Real Estate Investing & Development | 50 | 3 | 3 | 3 | 32 | 15 |
| Management Consulting | 50 | 6 | 6 | 19 | 15 | 16 |
| Professional Practice Ownership | 50 | 1 | 1 | 1 | 37 | 12 |
| Family Office & Private Wealth | 50 | 0 | 0 | 0 | 21 | 29 |
| Agriculture & Agribusiness | 50 | 6 | 6 | 6 | 43 | 1 |

Pillars that are already fully live (career, personal finance, fitness, exams, certifications, diaspora, founding, trades) are left out of the table.

### Skill coverage for the thin skills

This counts blueprints that train each skill. The *before* figures come from the proposed skill map (`abl-skills/taxonomy/blueprint-skills.proposed.json`, 556 entries including the 3 legacy starters). That map only covers live blueprints, so the skills for new picks are my estimate, following the map's own conventions for each pillar (for example, Relationships gets Connection first).

| Skill | Any position: now | + Tier 1 | + Tiers 1+2 | As main skill: now | + Tier 1 | + Tiers 1+2 |
|---|---:|---:|---:|---:|---:|---:|
| Connection | 36 | 82 | 83 | 4 | 48 | 48 |
| Family | 41 | 89 | 91 | 16 | 51 | 51 |
| Community | 61 | 77 | 77 | 50 | 50 | 50 |
| Self-Care | 28 | 79 | 80 | 13 | 43 | 43 |
| Mindfulness | 19 | 46 | 48 | 13 | 40 | 40 |
| Resilience | 49 | 90 | 91 | 0 | 0 | 0 |
| Nutrition | 19 | 56 | 56 | 10 | 47 | 47 |
| Creativity | 24 | 43 | 43 | 0 | 0 | 0 |

Tier 1 roughly doubles or triples Connection, Family, Self-Care, Mindfulness and Nutrition. Connection as a main skill goes from 4 to 48. Community grows least (+16), because most community-building blueprints (volunteering, clubs) were never written. Creativity rises through cooking and celebrations, but the arts pillar is not written either. Resilience and Creativity are never the main skill in the existing map, so their main-skill count stays at 0.

### Notice gaps worth fixing before Tier 1 ships

The check passes, but `add-notices.mjs` decides which blueprints need a notice from a fixed subject map, and that map misses some picks that touch health, money or law:
- **Tier 1:** `family-parenting.co-parenting-after-separation`, `.adoption-journey`, `.foster-caring`, `.parental-leave-planning` and `.family-emergency-plan` (guardianship wishes) should probably get the legal notice. `family-parenting.puberty-growing-up-talks` and `relationships.intimacy-sex-life` should get the medical notice. `relationships.couples-counselling` and `.rebuilding-trust-after-infidelity` should get the mental notice. `relationships.money-conversations-as-couple` should get the financial notice.
- **Tier 3:** `investment-banking.health-under-banking-hours` should get the medical notice. All 21 `family-office.*` picks and the `private-equity-vc` fund and syndicate picks should get the financial notice. The `practice-ownership.*` picks should get the legal notice. Neither of those first two pillars is in the subject map.
- **Content follow-up:** `food-nutrition.macro-calorie-tracking` has no eating-disorder caution, while the intermittent-fasting and keto plans do. Consider adding one line.

## Tier 1: everyday life, publish first (173)

Within each pillar, items are ordered by likely demand from the 25 to 34 target audience. Condition-management plans of the same kind as the bucket-B items that are now live (asthma, thyroid, arthritis and so on) sit lower in the order. Those carrying the medical notice can ship. Higher-acuity conditions are in Hold.

### Relationships & Friendship (44), ids `relationships.*`

1. Making Friends as an Adult (`making-friends-as-an-adult`)
2. Online Dating Search (`online-dating-search`)
3. Early Dating & New Relationships (`early-dating-new-relationships`)
4. Getting Over a Breakup (`getting-over-a-breakup`)
5. Couple Conflict Repair (`couple-conflict-repair`)
6. Date Night Planning (`date-night-planning`)
7. Deepening Close Friendships (`deepening-close-friendships`)
8. Long-Distance Relationship (`long-distance-relationship`)
9. Money Conversations as a Couple (`money-conversations-as-couple`)
10. Difficult Conversations With Loved Ones (`difficult-conversations-loved-ones`)
11. Fair Division of Household Labour (`fair-division-of-household-labour`)
12. Long-Term Partnership Check-Ins (`long-term-partnership-check-ins`)
13. Love Languages & Appreciation (`love-languages-appreciation`)
14. Birthday & Gift Tracker (`birthday-gift-tracker`)
15. Conversation & Small Talk Skills (`conversation-small-talk-skills`)
16. Attachment Styles in Relationships (`attachment-styles-relationships`)
17. Couple's Shared Life Vision (`couples-shared-life-vision`)
18. Premarital Preparation (`premarital-preparation`)
19. Best Man & Bridesmaid Duties (`best-man-bridesmaid-duties`)
20. Friendships Through Life Changes (`friendships-through-life-changes`)
21. Reconnecting With Old Friends (`reconnecting-with-old-friends`)
22. Staying in Touch Across Time Zones (`staying-in-touch-across-time-zones`)
23. Social Calendar Balance (`social-calendar-balance`)
24. Introvert Social Energy Pacing (`introvert-social-energy-pacing`)
25. Hosting Friends at Home (`hosting-friends-at-home`)
26. Friend Group Gatherings & Reunions (`friend-group-gatherings-reunions`)
27. Anniversaries & Milestone Celebrations (`anniversaries-milestone-celebrations`)
28. Thoughtful Gestures & Surprises (`thoughtful-gestures-surprises`)
29. Couple Rituals & Shared Traditions (`couple-rituals-routines`)
30. Getting On With the In-Laws (`getting-on-with-in-laws`)
31. Supporting a Friend in Crisis (`supporting-a-friend-in-crisis`)
32. Workplace Friendships (`workplace-friendships`)
33. Friendship Fallouts & Endings (`friendship-fallouts-endings`)
34. Couples Counselling (`couples-counselling`)
35. Intimacy & Sex Life (`intimacy-sex-life`)
36. Adult Sibling Relationships (`adult-sibling-relationships`)
37. Online Friendships & Communities (`online-friendships-communities`)
38. LGBTQ+ Relationships & Chosen Family (`lgbtq-relationships-chosen-family`)
39. Rebuilding Trust After Infidelity (`rebuilding-trust-after-infidelity`)
40. Divorce & Separation Process (`divorce-separation-process`)
41. Dating as a Single Parent (`dating-as-a-single-parent`)
42. Dating Again After Loss (`dating-again-after-loss`)
43. Empty Nest Couple Reconnection (`empty-nest-couple-reconnection`)
44. Vow Renewal Planning (`vow-renewal-planning`)

### Family & Parenting (35), ids `family-parenting.*`

1. Working Parent Juggle (`working-parent-juggle`)
2. Parental Leave Planning (`parental-leave-planning`)
3. Childcare & Nursery Arrangements (`childcare-nursery-arrangements`)
4. Baby & Toddler Sleep (`baby-toddler-sleep`)
5. Family Calendar & Logistics (`family-calendar-logistics`)
6. Toddler Behaviour & Tantrums (`toddler-behaviour-tantrums`)
7. Potty Training (`potty-training`)
8. Children's Health Appointments (`childrens-health-appointments`)
9. School Holiday Childcare Planning (`school-holiday-childcare`)
10. School Run & Carpools (`school-run-carpools`)
11. Positive Discipline Strategies (`positive-discipline-strategies`)
12. Parenting Approach Agreement (`parenting-approach-agreement`)
13. Children's Online Safety (`childrens-online-safety`)
14. Kids' Clubs & Activities Schedule (`kids-clubs-activities-schedule`)
15. Children's Birthday Parties (`childrens-birthday-parties`)
16. Sibling Rivalry & Sharing (`sibling-rivalry-sharing`)
17. Family Emergency Plan (`family-emergency-plan`)
18. Kids' Household Jobs Chart (`kids-household-jobs-chart`)
19. Pocket Money & Kids' Money Lessons (`pocket-money-kids-money-lessons`)
20. Family Traditions & Rituals (`family-traditions-rituals`)
21. Family Meetings & Decisions (`family-meetings-decisions`)
22. Childhood Memories Keeping (`childhood-memories-keeping`)
23. Kids' Time With Grandparents (`kids-time-with-grandparents`)
24. Extended Family Gatherings (`extended-family-gatherings`)
25. Dealing With Bullying (`dealing-with-bullying`)
26. Puberty & Growing Up Talks (`puberty-growing-up-talks`)
27. Co-Parenting After Separation (`co-parenting-after-separation`)
28. Single Parent Juggling (`single-parent-juggling`)
29. Blended & Step-Family Life (`blended-step-family-life`)
30. Raising a Neurodivergent Child (`raising-neurodivergent-child`)
31. Twins & Multiples Parenting (`twins-multiples-parenting`)
32. Child Leaving Home (`child-leaving-home`)
33. Parenting Adult Children (`parenting-adult-children`)
34. Adoption Journey (`adoption-journey`)
35. Foster Caring (`foster-caring`)

### Mental & Emotional Wellbeing (27), ids `mental-wellbeing.*`

1. Generalised Anxiety Management (`generalised-anxiety-management`)
2. Low Mood & Depression Support (`low-mood-depression-support`)
3. Therapy & Counselling Journey (`therapy-counselling-journey`)
4. Emotional Regulation Skills (`emotional-regulation-skills`)
5. Worry Time & Rumination Control (`worry-time-rumination-control`)
6. Mood Tracking & Patterns (`mood-tracking-patterns`)
7. Breathwork & Nervous System Regulation (`breathwork-nervous-system`)
8. CBT Thought Record Practice (`cbt-thought-record-practice`)
9. Body Image & Self-Esteem (`body-image-self-esteem`)
10. Social Anxiety Exposure Work (`social-anxiety-exposure-work`)
11. Panic Attack Coping Plan (`panic-attack-coping-plan`)
12. Grief & Bereavement Support (`grief-bereavement-support`)
13. Loneliness & Isolation Support (`loneliness-isolation-support`)
14. Anger Management (`anger-management`)
15. Health Anxiety Management (`health-anxiety-management`)
16. Life Transition Adjustment (`life-transition-adjustment`)
17. Workplace Mental Health Adjustments (`workplace-mental-health-adjustments`)
18. Progressive Relaxation & Body Scans (`progressive-relaxation-body-scans`)
19. Men's Mental Health Check-Ins (`mens-mental-health-check-ins`)
20. Seasonal Affective Disorder Plan (`seasonal-affective-disorder`)
21. Phobia Exposure Therapy (`phobia-exposure-therapy`)
22. Attachment & Inner Child Work (`attachment-inner-child-work`)
23. Mental Health Peer Support Groups (`peer-support-groups`)
24. Climate & Eco-Anxiety (`climate-eco-anxiety`)
25. Somatic Therapy & Body Awareness (`somatic-therapy-body-awareness`)
26. Chronic Illness Emotional Coping (`chronic-illness-emotional-coping`)
27. Autistic Wellbeing & Sensory Needs (`autistic-wellbeing-sensory-needs`)

### Physical Health (30), ids `physical-health.*`

1. Sexual Health & STI Testing (`sexual-health-sti-testing`)
2. Menstrual Health & Endometriosis (`menstrual-health-endometriosis`)
3. Medical Test Results & Records (`medical-test-results-records`)
4. Prescription Medication Management (`prescription-medication-management`)
5. Eye Health & Vision Care (`eye-health-vision-care`)
6. Vaccination Schedule Tracking (`vaccination-schedule-tracking`)
7. Chronic Back & Neck Pain (`chronic-back-neck-pain`)
8. Migraine & Headache Management (`migraine-headache-management`)
9. Gut Health & IBS Management (`gut-health-ibs`)
10. Allergy & Hay Fever Management (`allergy-hay-fever-management`)
11. Sun Safety & Mole Monitoring (`sun-safety-mole-monitoring`)
12. Wearable Health Data Tracking (`wearable-health-data`)
13. Home First Aid Preparedness (`home-first-aid-preparedness`)
14. Cancer Screening Schedule (`cancer-screening-schedule`)
15. Physiotherapy Rehab Plans (`physiotherapy-rehab-plans`)
16. Specialist Referrals & Waiting Lists (`specialist-referrals-waiting-lists`)
17. Surgery Preparation & Aftercare (`surgery-preparation`)
18. Eczema & Psoriasis Care (`eczema-psoriasis-care`)
19. Hearing Health & Tinnitus (`hearing-health-tinnitus`)
20. Family Medical History & Genetics (`family-medical-history`)
21. Men's Health & Prostate Care (`mens-health-prostate`)
22. Menopause & Perimenopause Care (`menopause-perimenopause-care`)
23. Anaemia & Iron Deficiency (`anaemia-iron-deficiency`)
24. Thyroid Condition Management (`thyroid-condition-management`)
25. Asthma & COPD Care (`asthma-copd-care`)
26. Foot Health & Podiatry (`foot-health-podiatry`)
27. Sleep Disorder Treatment (`sleep-disorder-treatment`)
28. Arthritis & Joint Care (`arthritis-joint-care`)
29. Living With Physical Disability (`living-with-physical-disability`)
30. Bone Density & Osteoporosis (`bone-density-osteoporosis`)

### Food & Nutrition (37), ids `food-nutrition.*`

1. Grocery Shopping & Pantry Stock (`grocery-shopping-pantry-stock`)
2. Cooking for One (`cooking-for-one`)
3. Knife Skills & Kitchen Technique (`knife-skills-kitchen-technique`)
4. Macro & Calorie Tracking (`macro-calorie-tracking`)
5. Plant-Based & Vegan Eating (`plant-based-vegan-eating`)
6. Mediterranean Diet Transition (`mediterranean-diet-transition`)
7. Kitchen Food Waste Reduction (`kitchen-food-waste-reduction`)
8. Sugar & Ultra-Processed Food Reduction (`sugar-ultra-processed-reduction`)
9. Bread & Sourdough Baking (`bread-sourdough-baking`)
10. Specialty Coffee Brewing (`specialty-coffee-brewing`)
11. Dinner Party Hosting Menus (`dinner-party-hosting-menus`)
12. Cooking Through World Cuisines (`cooking-world-cuisines`)
13. Spice & Flavour Building (`spice-flavour-building`)
14. Homemade Pasta & Pizza (`homemade-pasta-pizza`)
15. Cooking With Seasonal Produce (`seasonal-produce-cooking`)
16. Intuitive Eating Practice (`intuitive-eating-practice`)
17. Food Hygiene & Safe Storage (`food-hygiene-safe-storage`)
18. Cocktail & Mocktail Making (`cocktail-mocktail-making`)
19. Barbecue & Live-Fire Cooking (`barbecue-live-fire-cooking`)
20. Cakes, Pastry & Desserts (`cakes-pastry-desserts`)
21. Holiday Feast Cooking (`holiday-feast-cooking`)
22. Restaurant Wishlist & Dining Out (`restaurant-wishlist-dining-out`)
23. Kitchen Equipment & Layout (`kitchen-equipment-layout`)
24. Shared Family Mealtimes (`shared-family-mealtimes`)
25. School Packed Lunches (`school-packed-lunches`)
26. Feeding Fussy-Eating Children (`feeding-fussy-eating-children`)
27. Family Recipe Collection (`family-recipe-collection`)
28. Intermittent Fasting Schedule (`intermittent-fasting-schedule`)
29. Wine & Food Pairing (`wine-food-pairing`)
30. Fermenting & Preserving (`fermenting-preserving`)
31. Meat & Fish Butchery Prep (`meat-fish-butchery-prep`)
32. Coeliac & Gluten-Free Eating (`coeliac-gluten-free-eating`)
33. Low-FODMAP & Gut-Friendly Diet (`low-fodmap-gut-friendly-diet`)
34. Halal & Kosher Kitchen (`halal-kosher-kitchen`)
35. Keto & Low-Carb Eating (`keto-low-carb-eating`)
36. Vitamins & Supplements Review (`vitamins-supplements-review`)
37. Nutrition for Older Adults (`nutrition-for-older-adults`)

## Tier 2: broad personal value (109)

These are personal-goal plans a general knowledge worker might want. In the work pillars, only the plans a single person practises (writing a PRD, running discovery calls, statistical analysis) pass the rule. The team versions are in Hold.

### Wealth & Investing (30), ids `wealth-investing.*`

1. Workplace Pension Optimisation (`workplace-pension-optimisation`)
2. Tax-Advantaged Investment Accounts (`tax-advantaged-investment-accounts`)
3. Employee Stock Options & RSUs (`employee-stock-options-rsus`)
4. Asset Allocation & Rebalancing (`asset-allocation-rebalancing`)
5. Investment Fee Reduction (`investment-fee-reduction`)
6. Investor Behaviour & Panic Control (`investor-behaviour-panic-control`)
7. Personal Investment Policy (`personal-investment-policy`)
8. Annual Wealth Review (`annual-wealth-review`)
9. Pension Consolidation (`pension-consolidation`)
10. Lost Pension Tracing (`lost-pension-tracing`)
11. Mortgage Overpayment vs Investing (`mortgage-overpayment-vs-investing`)
12. Cryptocurrency Holdings (`cryptocurrency-holdings`)
13. Individual Stock Research (`individual-stock-research`)
14. Ethical & Impact Investing (`ethical-impact-investing`)
15. Dividend Income Investing (`dividend-income-investing`)
16. Bonds & Fixed Income (`bonds-fixed-income`)
17. Capital Gains Tax Planning (`capital-gains-tax-planning`)
18. Couple's Retirement Plan Alignment (`couples-retirement-plan-alignment`)
19. Mini-Retirement Funding (`mini-retirement-funding`)
20. Self-Employed Retirement Saving (`self-employed-retirement-saving`)
21. Private Pension Accounts (`private-pension-accounts`)
22. Choosing a Financial Adviser (`choosing-financial-adviser`)
23. Children's Investment Accounts (`childrens-investment-accounts`)
24. REIT & Property Fund Investing (`reit-property-fund-investing`)
25. Buy-to-Let Property (`buy-to-let-property`)
26. State Pension & Social Security (`state-pension-social-security`)
27. Inflation Protection Strategy (`inflation-protection-strategy`)
28. Expat & Cross-Border Investing (`expat-cross-border-investing`)
29. Estate Planning & Inheritance Tax (`estate-planning-inheritance-tax`)
30. Options & Active Trading Rules (`active-trading-rules`)

### Software Engineering (13), ids `software-engineering.*`

1. System Architecture Design (`system-architecture-design`)
2. Database Schema Design (`database-schema-design`)
3. API Design & Versioning (`api-design-versioning`)
4. Containers & Kubernetes (`containers-kubernetes`)
5. Cloud Infrastructure Provisioning (`cloud-infrastructure-provisioning`)
6. Infrastructure as Code (`infrastructure-as-code`)
7. Application Performance Tuning (`application-performance-tuning`)
8. Secure Coding Practices (`secure-coding-practices`)
9. Automated Test Strategy (`automated-test-strategy`)
10. Distributed Systems Scaling (`distributed-systems-scaling`)
11. Engineering Team Management (`engineering-team-management`)
12. Desktop App Engineering (`desktop-app-engineering`)
13. Embedded & Firmware Engineering (`embedded-firmware-engineering`)

### Data & Analytics (17), ids `data-analytics.*`

1. Statistical Analysis Methods (`statistical-analysis-methods`)
2. Online Experimentation (A-B Tests) (`online-experimentation-ab-tests`)
3. Predictive Modelling (`predictive-modelling`)
4. Time Series Forecasting (`time-series-forecasting`)
5. Cohort Retention Analysis (`cohort-retention-analysis`)
6. Reproducible Analysis Workflows (`reproducible-analysis-workflows`)
7. Analytics Data Modelling (dbt) (`analytics-data-modelling-dbt`)
8. Business Intelligence Dashboards (`business-intelligence-dashboards`)
9. Web & App Traffic Analytics (`web-app-traffic-analytics`)
10. Survey Data Analysis (`survey-data-analysis`)
11. Causal Inference Studies (`causal-inference-studies`)
12. Customer Lifetime Value Analysis (`customer-lifetime-value-analysis`)
13. LLM Evaluation & RAG Data (`llm-evaluation-rag-data`)
14. Text & Sentiment Analytics (`text-sentiment-analytics`)
15. Geospatial Analysis (`geospatial-analysis`)
16. Open & Public Datasets (`open-public-datasets`)
17. Computer Vision Projects (`computer-vision-projects`)

### Product Management (12), ids `product-management.*`

1. Product Discovery Interviews (`product-discovery-interviews`)
2. Product Requirements Documents (`product-requirements-documents`)
3. Feature Prioritisation Frameworks (`feature-prioritisation-frameworks`)
4. Product Roadmap Planning (`product-roadmap-planning`)
5. Jobs-to-Be-Done Research (`jobs-to-be-done-research`)
6. Prototype Validation Tests (`prototype-validation-tests`)
7. Problem Framing & Opportunity Mapping (`problem-framing-opportunity-mapping`)
8. Product Vision Writing (`product-vision-writing`)
9. Product Stakeholder Alignment (`product-stakeholder-alignment`)
10. AI Feature Product Management (`ai-feature-product-management`)
11. Competitor Feature Analysis (`competitor-feature-analysis`)
12. Mobile App Product Management (`mobile-app-product-management`)

### Sales & Revenue (16), ids `sales-revenue.*`

1. Sales Discovery Calls (`sales-discovery-calls`)
2. Deal Negotiation & Closing (`deal-negotiation-closing`)
3. Sales Objection Handling (`sales-objection-handling`)
4. Cold Email Prospecting (`cold-email-prospecting-sequences`)
5. Cold Calling & Phone Outreach (`cold-calling-phone-outreach`)
6. LinkedIn Social Selling (`linkedin-social-selling`)
7. Sales Demo Delivery (`product-demo-delivery`)
8. Executive Sales Presentations (`executive-sales-presentations`)
9. Sales Proposal Writing (`sales-proposal-writing`)
10. Referral & Warm Introduction Selling (`referral-warm-introduction-selling`)
11. Deal Qualification (MEDDICC, BANT) (`deal-qualification-meddicc-bant`)
12. Deal Stakeholder Mapping (`deal-stakeholder-mapping`)
13. Mutual Action Plans (`mutual-action-plans`)
14. Key Account Management (`key-account-management`)
15. Account Expansion & Upsell Selling (`account-expansion-upsell`)
16. Front-Line Sales Management (`front-line-sales-management`)

### Strategy & Leadership (8), ids `strategy-leadership.*`

1. Executive Presence Development (`executive-presence-development`)
2. Strategy Narrative and Memo Writing (`strategy-narrative-and-memo-writing`)
3. Leadership 360 Feedback (`leadership-360-feedback`)
4. Executive Coaching Engagement (`executive-coaching-engagement`)
5. Leading Distributed Teams (`leading-distributed-teams`)
6. Building Psychological Safety (`building-psychological-safety`)
7. Ethical Leadership Dilemmas (`ethical-leadership-dilemmas`)
8. First Ninety Days as an Executive (`first-ninety-days-as-an-executive`)

### Management Consulting (13), ids `management-consulting.*`

1. Consulting Promotion Reviews (`consulting-promotion-reviews`)
2. Consulting Exit Options (`consulting-exit-options`)
3. Consulting Staffing and Project Choice (`consulting-staffing-and-project-choice`)
4. Consulting Travel Life (`consulting-travel-life`)
5. Written and Group Case Exercises (`written-and-group-case-exercises`)
6. Issue Trees and Problem Structuring (`issue-trees-and-problem-structuring`)
7. Slide Storylining and Action Titles (`slide-storylining-and-action-titles`)
8. Synthesis and Executive Summaries (`synthesis-and-executive-summaries`)
9. Workshop Facilitation (`workshop-facilitation`)
10. Consulting Excel Modelling (`consulting-excel-modelling`)
11. Client Interviews and Expert Calls (`client-interviews-and-expert-calls`)
12. Going Independent After a Firm (`going-independent-after-a-firm`)
13. MBA Consulting Internship (`mba-consulting-internship`)

## Tier 3: niche or professional (353)

These pass the rule for a narrow audience. Pillars are listed in rough order of audience size.

### Fundraising & Investor Relations (32), ids `fundraising-investors.*`

1. Series A Fundraise (`series-a-fundraise`)
2. SAFEs & Convertible Notes (`safes-convertible-notes`)
3. Term Sheet Negotiation (`term-sheet-negotiation`)
4. Investor Target List Building (`investor-target-list-building`)
5. Investor Warm Introductions (`investor-warm-introductions`)
6. Monthly Investor Updates (`monthly-investor-updates`)
7. Founder Dilution Planning (`founder-dilution-planning`)
8. Cap Table Management (`cap-table-management`)
9. Fundraising Financial Model (`fundraising-financial-model`)
10. Investor Data Room (`investor-data-room`)
11. Angel Syndicate Raises (`angel-syndicate-raises`)
12. Bridge Round & Extension (`bridge-round-extension`)
13. Option Pool Sizing (`option-pool-sizing`)
14. Round Closing & Completion (`round-closing-completion`)
15. Investor Reference Checks (`investor-reference-checks`)
16. Reward Crowdfunding Launch (`reward-crowdfunding-launch`)
17. Revenue-Based Financing (`revenue-based-financing`)
18. Equity Crowdfunding Campaign (`equity-crowdfunding-campaign`)
19. Investor Tax Relief Schemes (`investor-tax-relief-schemes`)
20. Impact Investor Fundraising (`impact-investor-fundraising`)
21. Corporate Venture Investors (`corporate-venture-investors`)
22. Family Office Relationships (`family-office-relationships`)
23. Post-Round Board Setup (`post-round-board-setup`)
24. Investor Board Reporting (`investor-board-reporting`)
25. Share Valuations & 409A (`share-valuations-409a`)
26. Venture Debt Facilities (`venture-debt-facilities`)
27. Growth Equity Rounds (`growth-equity-rounds`)
28. Down Round & Recapitalisation (`down-round-recapitalisation`)
29. Secondary Share Sales & Liquidity (`secondary-share-sales-liquidity`)
30. Company Sale & Exit Process (`company-sale-exit-process`)
31. Acquisition Financing (`acquisition-financing`)
32. Raising a Venture Fund (`raising-a-venture-fund`)

### Management Consulting (15), ids `management-consulting.*`

1. Engagement Manager Role (`engagement-manager-role`)
2. Workstream Leadership (`workstream-leadership`)
3. Partner Track and Selling Work (`partner-track-and-selling-work`)
4. Hypothesis-Driven Workplans (`hypothesis-driven-workplans`)
5. Managing Client Sponsors (`managing-client-sponsors`)
6. Client Data Requests and Analysis (`client-data-requests-and-analysis`)
7. Ethics and Conflicts in Consulting (`ethics-and-conflicts-in-consulting`)
8. Consulting Engagement Pricing (`consulting-engagement-pricing`)
9. Consulting Proposal Letters (`consulting-proposal-letters`)
10. Follow-On Work and Extensions (`follow-on-work-and-extensions`)
11. Consulting Thought Leadership (`consulting-thought-leadership`)
12. Expert Network Calls (`expert-network-calls`)
13. Subcontracting to Larger Firms (`subcontracting-to-larger-firms`)
14. Multilateral and Donor-Funded Consultancies (`multilateral-donor-funded-consultancies`)
15. Boutique Consulting Firm Building (`boutique-consulting-firm-building`)

### Wealth & Investing (14), ids `wealth-investing.*`

1. Angel Investing in Startups (`angel-investing-in-startups`)
2. Holiday Let Property (`holiday-let-property`)
3. Property Flipping (`property-flipping`)
4. Property Company Structure (`property-company-structure`)
5. Peer-to-Peer Lending (`peer-to-peer-lending`)
6. Precious Metals Holdings (`precious-metals-holdings`)
7. Alternative Collectible Investments (`alternative-collectible-investments`)
8. Royalty & Licensing Income (`royalty-licensing-income`)
9. Business Owner Exit Wealth Plan (`business-owner-exit-wealth`)
10. Annuity Decisions (`annuity-decisions`)
11. Retirement Income Drawdown (`retirement-income-drawdown`)
12. Family Trusts & Lifetime Gifting (`family-trusts-lifetime-gifting`)
13. Philanthropic Legacy Giving (`philanthropic-legacy-giving`)
14. Teaching Heirs About Wealth (`teaching-heirs-about-wealth`)

### Data & Analytics (7), ids `data-analytics.*`

1. Pricing Analytics (`pricing-analytics`)
2. Recommendation Systems (`recommendation-systems`)
3. ML Feature Engineering (`ml-feature-engineering`)
4. ML Model Deployment (MLOps) (`ml-model-deployment-mlops`)
5. Marketing Mix Modelling (`marketing-mix-modelling`)
6. Small Business Reporting Setup (`small-business-reporting-setup`)
7. Data Team Management (`data-team-management`)

### Sales & Revenue (5), ids `sales-revenue.*`

1. Ideal Customer Profile Definition (`ideal-customer-profile-sales`)
2. Enterprise Complex Deal Cycles (`enterprise-complex-deal-cycles`)
3. Navigating Buyer Procurement (`navigating-buyer-procurement`)
4. Field Sales & In-Person Visits (`field-sales-territory-visits`)
5. Public Sector Selling (`public-sector-selling`)

### Strategy & Leadership (5), ids `strategy-leadership.*`

1. Leading Through Managers (`leading-through-managers`)
2. Leading Through a Crisis (`leading-through-a-crisis`)
3. Small Business Owner Strategy Day (`small-business-owner-strategy-day`)
4. Family Business Leadership (`family-business-leadership`)
5. Public Sector Leadership (`public-sector-leadership`)

### Finance & Accounting (19), ids `finance-accounting.*`

1. Customer Invoicing & Billing (`customer-invoicing-billing`)
2. Receivables & Collections Management (`receivables-collections-management`)
3. Bank & Card Reconciliation (`bank-card-reconciliation`)
4. Outsourced Accountant Management (`outsourced-accountant-management`)
5. Three-Statement Financial Modelling (`three-statement-financial-modelling`)
6. Year-End Statutory Accounts (`year-end-statutory-accounts`)
7. Corporate Income Tax Returns (`corporate-income-tax-returns`)
8. Payment Processor Payout Reconciliation (`payment-processor-payout-reconciliation`)
9. Management Accounts Reporting (`management-accounts-reporting`)
10. Chart of Accounts Design (`chart-of-accounts-design`)
11. Accounting Software Implementation (`accounting-software-implementation`)
12. Product Margin Analysis (`product-margin-analysis`)
13. Project & Job Costing (`project-job-costing`)
14. Business Banking Relationships (`business-banking-relationships`)
15. Business Debt & Loan Servicing (`business-debt-loan-servicing`)
16. Payment Fraud Prevention (`payment-fraud-prevention`)
17. Contractor Payment Reporting (`contractor-payment-reporting`)
18. R&D Tax Credit Claims (`rd-tax-credit-claims`)
19. Finance Business Partnering (`finance-business-partnering`)

### Investment Banking & Advisory (21), ids `investment-banking.*`

1. Banking Exit Opportunities (`banking-exit-opportunities`)
2. Analyst to Associate Promotion (`analyst-to-associate-promotion`)
3. Boutique or Bulge Bracket Choice (`boutique-or-bulge-bracket-choice`)
4. IB Analyst Training Programme (`ib-analyst-training-programme`)
5. Excel and PowerPoint Speed (`excel-and-powerpoint-speed`)
6. Health Under Banking Hours (`health-under-banking-hours`)
7. IB Analyst Workflow (`ib-analyst-workflow`)
8. Deal Staffing and Hours (`deal-staffing-and-hours`)
9. DCF Valuation Work (`dcf-valuation-work`)
10. Trading Comparables Analysis (`trading-comparables-analysis`)
11. Precedent Transactions Analysis (`precedent-transactions-analysis`)
12. Merger Models and Accretion Dilution (`merger-models-and-accretion-dilution`)
13. Financial Model Checking (`financial-model-checking`)
14. Turning Comments from Seniors (`turning-comments-from-seniors`)
15. Pitch Book Preparation (`pitch-book-preparation`)
16. Banking Bonus Season (`banking-bonus-season`)
17. Lateral Moves Between Banks (`lateral-moves-between-banks`)
18. Associate Role in Banking (`associate-role-in-banking`)
19. Vice President Deal Leadership (`vice-president-deal-leadership`)
20. Client Coverage and Origination (`client-coverage-and-origination`)
21. Wall Crossing and Compliance (`wall-crossing-and-compliance`)

### Private Equity & Venture Capital (29), ids `private-equity-vc.*`

1. Breaking Into Venture Capital (`breaking-into-venture-capital`)
2. LBO Modelling (`lbo-modelling`)
3. PE Associate Years (`pe-associate-years`)
4. VC Career Growth (`vc-career-growth`)
5. PE Career Progression to Partner (`pe-career-progression-to-partner`)
6. Investment Committee Memos (`investment-committee-memos`)
7. Venture Investment Memos (`venture-investment-memos`)
8. Deal Screening and First Look (`deal-screening-and-first-look`)
9. Investment Thesis Development (`investment-thesis-development`)
10. Early-Stage Startup Diligence (`early-stage-startup-diligence`)
11. Management Team Assessment (`management-team-assessment`)
12. Carried Interest and Waterfalls (`carried-interest-and-waterfalls`)
13. Search Fund Launch (`search-fund-launch`)
14. Search Fund Acquisition Phase (`search-fund-acquisition-phase`)
15. Searcher as CEO (`searcher-as-ceo`)
16. Independent Sponsor Deals (`independent-sponsor-deals`)
17. Venture Scout Programmes (`venture-scout-programmes`)
18. VC Deal Flow (`vc-deal-flow`)
19. PE Deal Sourcing (`pe-deal-sourcing`)
20. Angel to Fund Manager (`angel-to-fund-manager`)
21. Leading an Angel Syndicate (`leading-an-angel-syndicate`)
22. Emerging Manager Fund Launch (`emerging-manager-fund-launch`)
23. VC Board Seats (`vc-board-seats`)
24. Portfolio Company Board Work (`portfolio-company-board-work`)
25. Operating Partner Role (`operating-partner-role`)
26. Working in Corporate Venture Capital (`working-in-corporate-venture-capital`)
27. VC Portfolio Support (`vc-portfolio-support`)
28. Track Record and Attribution (`track-record-and-attribution`)
29. Caribbean Private Capital Deals (`caribbean-private-capital-deals`)

### Quantitative Finance & Trading (40), ids `quant-finance.*`

1. Quant Trader Interviews (`quant-trader-interviews`)
2. Quant Researcher Interviews (`quant-researcher-interviews`)
3. Quant Developer Interviews (`quant-developer-interviews`)
4. Choosing a Quant Employer (`choosing-a-quant-employer`)
5. Quant Finance Masters Programmes (`quant-finance-masters-programmes`)
6. Quant Careers After a PhD (`quant-careers-after-a-phd`)
7. Trading Risk Rules and Kill Switches (`trading-risk-rules-and-kill-switches`)
8. Active Trading Tax Records (`active-trading-tax-records`)
9. Backtesting Discipline (`backtesting-discipline`)
10. Options Strategy Research (`options-strategy-research`)
11. Statistics for Finance (`statistics-for-finance`)
12. Stochastic Calculus Study (`stochastic-calculus-study`)
13. Overfitting and Multiple Testing (`overfitting-and-multiple-testing`)
14. Quant Research Log (`quant-research-log`)
15. Paper Replication (`paper-replication`)
16. Quant Research Competitions (`quant-research-competitions`)
17. Machine Learning for Finance (`machine-learning-for-finance`)
18. Financial Time Series Econometrics (`financial-time-series-econometrics`)
19. Derivatives Pricing Models (`derivatives-pricing-models`)
20. Backtesting Engine Build (`backtesting-engine-build`)
21. Broker and Exchange API Integration (`broker-exchange-api-integration`)
22. Market Data Sourcing (`market-data-sourcing`)
23. Tick Data Storage and Cleaning (`tick-data-storage-and-cleaning`)
24. Quant Development (C++ and Python) (`quant-development-cpp-python`)
25. Quant Research Code Quality (`quant-research-code-quality`)
26. Alpha Research Process (`alpha-research-process`)
27. Factor Models (`factor-models`)
28. Portfolio Construction and Optimisation (`portfolio-construction-optimisation`)
29. Portfolio Risk Models (`portfolio-risk-models`)
30. Strategy Stress Testing (`strategy-stress-testing`)
31. Live Strategy Monitoring (`live-strategy-monitoring`)
32. Systematic Strategy Retirement (`systematic-strategy-retirement`)
33. Transaction Cost Analysis (`transaction-cost-analysis`)
34. Trend-Following Research (`trend-following-research`)
35. Statistical Arbitrage Research (`statistical-arbitrage-research`)
36. Volatility Modelling (`volatility-modelling`)
37. Rates and Credit Modelling (`rates-and-credit-modelling`)
38. Market Microstructure Study (`market-microstructure-study`)
39. Market Making Strategy Research (`market-making-strategy-research`)
40. Non-Competes and Garden Leave (`non-competes-and-garden-leave`)

### Real Estate Investing & Development (32), ids `real-estate-development.*`

1. Real Estate Financial Modelling (`real-estate-financial-modelling`)
2. Cap Rates and Property Valuation (`cap-rates-and-property-valuation`)
3. Property Acquisition Due Diligence (`property-acquisition-due-diligence`)
4. Development Appraisal (`development-appraisal`)
5. Off-Market Deal Sourcing (`off-market-deal-sourcing`)
6. Multifamily Acquisitions (`multifamily-acquisitions`)
7. Distressed Property Acquisitions (`distressed-property-acquisitions`)
8. Real Estate Club Deals (`real-estate-club-deals`)
9. Site Finding and Land Acquisition (`site-finding-and-land-acquisition`)
10. Site Feasibility and Massing (`site-feasibility-and-massing`)
11. Appointing a Design Team (`appointing-a-design-team`)
12. Construction Finance (`construction-finance`)
13. Development Cost Control (`development-cost-control`)
14. Practical Completion and Handover (`practical-completion-and-handover`)
15. Site Utilities and Connections (`site-utilities-and-connections`)
16. Option and Conditional Land Deals (`option-and-conditional-land-deals`)
17. Land Banking and Strategic Land (`land-banking-and-strategic-land`)
18. Development Exit and Refinancing (`development-exit-and-refinancing`)
19. Development Joint Ventures (`development-joint-ventures`)
20. Development Project Delivery (`development-project-delivery`)
21. Property Development Company Setup (`property-development-company-setup`)
22. REIT Financial Analysis (`reit-financial-analysis`)
23. Commercial Property Underwriting (`commercial-property-underwriting`)
24. Commercial Real Estate Acquisitions (`commercial-real-estate-acquisitions`)
25. Commercial Real Estate Debt (`commercial-real-estate-debt`)
26. Industrial and Logistics Property (`industrial-and-logistics-property`)
27. Niche Property Sectors (`niche-property-sectors`)
28. Caribbean Development Approvals (`caribbean-development-approvals`)
29. Caribbean Land Subdivision Projects (`caribbean-land-subdivision-projects`)
30. Caribbean Tourism Real Estate (`caribbean-tourism-real-estate`)
31. Hurricane-Resilient Development (`hurricane-resilient-development`)
32. Property Management Company (`property-management-company`)

### Professional Practice Ownership (37), ids `practice-ownership.*`

1. Starting a Practice from Scratch (`starting-a-practice-from-scratch`)
2. Buying an Existing Practice (`buying-an-existing-practice`)
3. Owning a Dental Practice (`owning-a-dental-practice`)
4. Owning a Medical Clinic (`owning-a-medical-clinic`)
5. Owning a Law Firm (`owning-a-law-firm`)
6. Owning an Accounting Firm (`owning-an-accounting-firm`)
7. Owning a Physiotherapy Clinic (`owning-a-physiotherapy-clinic`)
8. Owning a Therapy Practice (`owning-a-therapy-practice`)
9. Owning a Pharmacy (`owning-a-pharmacy`)
10. Owning a Veterinary Practice (`owning-a-veterinary-practice`)
11. Owning an Optometry Practice (`owning-an-optometry-practice`)
12. Owning an Architecture Studio (`owning-an-architecture-studio`)
13. Owning an Engineering Consultancy (`owning-an-engineering-consultancy`)
14. Practice Owner Time Management (`practice-owner-time-management`)
15. Practice Fee Schedules (`practice-fee-schedules`)
16. Practice Financial Dashboard (`practice-financial-dashboard`)
17. Practice Valuation (`practice-valuation`)
18. Selling a Practice (`selling-a-practice`)
19. Selling to a Practice Group (`selling-to-a-practice-group`)
20. Practice Succession Planning (`practice-succession-planning`)
21. Partner Retirement and Exit (`partner-retirement-and-exit`)
22. Partner Profit Sharing Models (`partner-profit-sharing-models`)
23. Practice Equipment Finance (`practice-equipment-finance`)
24. Practice Premises and Fit-Out (`practice-premises-and-fit-out`)
25. Practice Management Software (`practice-management-software`)
26. Practice Manager Role (`practice-manager-role`)
27. Practice Marketing Within Professional Rules (`practice-marketing-professional-rules`)
28. Professional Indemnity for Practices (`professional-indemnity-for-practices`)
29. Professional Referral Networks (`professional-referral-networks`)
30. Setting Up a Caribbean Practice (`setting-up-a-caribbean-practice`)
31. Telehealth and Remote Services (`telehealth-and-remote-services`)
32. Work in Progress and Lockup (`work-in-progress-and-lockup`)
33. Locums and Contract Professionals (`locums-and-contract-professionals`)
34. Hiring Associates and Professionals (`hiring-associates-and-professionals`)
35. Hiring Front Desk and Support Staff (`hiring-front-desk-and-support-staff`)
36. Group Practice and Multi-Site Growth (`group-practice-and-multi-site-growth`)
37. Patient Billing and Insurance Claims (`patient-billing-and-insurance-claims`)

### Engineering Practice (33), ids `engineering-practice.*`

1. Mechanical Engineering Practice (`mechanical-engineering-practice`)
2. Electrical Engineering Practice (`electrical-engineering-practice`)
3. Structural Engineering Practice (`structural-engineering-practice`)
4. Chemical and Process Engineering (`chemical-and-process-engineering`)
5. Controls and Automation Engineering (`controls-and-automation-engineering`)
6. Petroleum Engineering Practice (`petroleum-engineering-practice`)
7. Environmental Engineering Practice (`environmental-engineering-practice`)
8. Biomedical Engineering Practice (`biomedical-engineering-practice`)
9. Aerospace Engineering Practice (`aerospace-engineering-practice`)
10. Marine Engineering Practice (`marine-engineering-practice`)
11. Mining and Minerals Engineering (`mining-and-minerals-engineering`)
12. Industrial and Manufacturing Engineering (`industrial-and-manufacturing-engineering`)
13. Engineering Report Writing (`engineering-report-writing`)
14. Engineering Calculation Packages (`engineering-calculation-packages`)
15. CAD Modelling and Drawings (`cad-modelling-and-drawings`)
16. Engineering Ethics (`engineering-ethics`)
17. Codes and Standards Compliance (`codes-and-standards-compliance`)
18. FEA and CFD Simulation (`fea-and-cfd-simulation`)
19. Process Simulation Modelling (`process-simulation-modelling`)
20. PLC Programming (`plc-programming`)
21. SCADA and HMI Systems (`scada-and-hmi-systems`)
22. Reliability Engineering (`reliability-engineering`)
23. Root Cause Analysis (`root-cause-analysis`)
24. FMEA Studies (`fmea-studies`)
25. Engineering Cost Estimating (`engineering-cost-estimating`)
26. Factory Acceptance Testing (`factory-acceptance-testing`)
27. Engineering Project Delivery (`engineering-project-delivery`)
28. Caribbean Wind and Seismic Design (`caribbean-wind-and-seismic-design`)
29. Energy Transition Engineering Projects (`energy-transition-engineering-projects`)
30. Trinidad Upstream Oil and Gas (`trinidad-upstream-oil-and-gas`)
31. Point Lisas Petrochemical Plants (`point-lisas-petrochemical-plants`)
32. LNG Plant Operations and Engineering (`lng-plant-operations-and-engineering`)
33. Offshore Platform Engineering (`offshore-platform-engineering`)

### Agriculture & Agribusiness (43), ids `agriculture.*`

1. Open-Field Vegetable Farming (`open-field-vegetable-farming`)
2. Herbs and Seasoning Crops (`herbs-and-seasoning-crops`)
3. Farm Budgets and Enterprise Costing (`farm-budgets-and-enterprise-costing`)
4. Farmers Markets and Direct Sales (`farmers-markets-and-direct-sales`)
5. Soil Testing and Fertility (`soil-testing-and-fertility`)
6. Farm Irrigation Systems (`farm-irrigation-systems`)
7. Integrated Pest Management (`integrated-pest-management`)
8. Root Crop Farming (`root-crop-farming`)
9. Tropical Fruit Orchards (`tropical-fruit-orchards`)
10. Broiler Production (`broiler-production`)
11. Goat and Sheep Farming (`goat-and-sheep-farming`)
12. Agro-Processing Business (`agro-processing-business`)
13. Farm Finance and Loans (`farm-finance-and-loans`)
14. Farm Records and Traceability (`farm-records-and-traceability`)
15. Post-Harvest Handling and Packing (`post-harvest-handling-and-packing`)
16. Supplying Hotels and Restaurants (`supplying-hotels-and-restaurants`)
17. Supermarket Supply Contracts (`supermarket-supply-contracts`)
18. Hurricane Resilience on the Farm (`hurricane-resilience-on-the-farm`)
19. Drought and Dry Season Planning (`drought-and-dry-season-planning`)
20. Farm Drainage and Flood Control (`farm-drainage-and-flood-control`)
21. Banana and Plantain Farming (`banana-and-plantain-farming`)
22. Citrus Orchards (`citrus-orchards`)
23. Cocoa Farming (`cocoa-farming`)
24. Coconut Farming (`coconut-farming`)
25. Coffee Farming (`coffee-farming`)
26. Nutmeg and Spice Crops (`nutmeg-and-spice-crops`)
27. Aquaponics Systems (`aquaponics-systems`)
28. Tilapia Aquaculture (`tilapia-aquaculture`)
29. Pig Farming (`pig-farming`)
30. Beef Cattle Farming (`beef-cattle-farming`)
31. Dairy Farming (`dairy-farming`)
32. Livestock Feed and Forage (`livestock-feed-and-forage`)
33. Livestock Health and Vet Care (`livestock-health-and-vet-care`)
34. Farm Machinery and Equipment (`farm-machinery-and-equipment`)
35. Farm Land Tenure and Leases (`farm-land-tenure-and-leases`)
36. Farm Labour and Workers (`farm-labour-and-workers`)
37. Contract Farming Agreements (`contract-farming-agreements`)
38. Wholesale Market Selling (`wholesale-market-selling`)
39. Agricultural Insurance (`agricultural-insurance`)
40. Agricultural Export Compliance (`agricultural-export-compliance`)
41. Food Safety and GAP Certification (`food-safety-and-gap-certification`)
42. Praedial Larceny Prevention (`praedial-larceny-prevention`)
43. Rice Farming in Guyana and Suriname (`rice-farming-in-guyana-and-suriname`)

### Family Office & Private Wealth (21), ids `family-office.*`

1. Multi-Family Office Selection (`multi-family-office-selection`)
2. Adviser and Manager Oversight (`adviser-and-manager-oversight`)
3. Consolidated Wealth Reporting (`consolidated-wealth-reporting`)
4. Family Investment Policy Statement (`family-investment-policy-statement`)
5. Bank and Custodian Relationships (`bank-and-custodian-relationships`)
6. Family Liquidity Planning (`family-liquidity-planning`)
7. Donor-Advised Funds (`donor-advised-funds`)
8. Family Grant-Making Strategy (`family-grant-making-strategy`)
9. Caribbean Family Philanthropy (`caribbean-family-philanthropy`)
10. Trustee Selection and Oversight (`trustee-selection-and-oversight`)
11. Family Risk and Insurance Review (`family-risk-and-insurance-review`)
12. Family Records and Archives (`family-records-and-archives`)
13. Family Privacy and Public Profile (`family-privacy-and-public-profile`)
14. Family Security Assessment (`family-security-assessment`)
15. Household Staff Employment (`household-staff-employment`)
16. Staff Vetting and Background Checks (`staff-vetting-and-background-checks`)
17. Estate Manager and House Manager (`estate-manager-and-house-manager`)
18. Multiple Residences Management (`multiple-residences-management`)
19. Art and Collection Management (`art-and-collection-management`)
20. Concierge and Lifestyle Management (`concierge-and-lifestyle-management`)
21. Aircraft and Yacht Ownership (`aircraft-and-yacht-ownership`)

## Hold (362)

### Physical Health (8)

- Autoimmune Condition Management (`autoimmune-condition-management`): Infusions, immunosuppressants and blood monitoring; needs clinical review.
- Cancer Treatment & Survivorship (`cancer-treatment-survivorship`): Active cancer treatment coordination; needs oncology/clinical review.
- Cardiac Rehabilitation (`cardiac-rehabilitation`): Post-heart-attack graded activity and medication adherence; needs clinical review.
- Chronic Fatigue & Long Covid (`chronic-fatigue-long-covid`): Activity-increase advice for ME/CFS is clinically contested (content does cover PEM); needs clinical review.
- Fertility Treatment & IVF (`fertility-treatment-ivf`): IVF medication schedules and costly treatment decisions; needs clinical review.
- Kidney & Liver Health Monitoring (`kidney-liver-health-monitoring`): Chronic kidney/liver disease with diet and medication advice; needs clinical review.
- Stroke Rehabilitation (`stroke-rehabilitation`): Post-stroke rehab and secondary prevention; needs clinical review.
- Type 1 Diabetes Management (`type-1-diabetes-management`): Insulin, pump and hypo management; dosing errors are dangerous, needs clinical review.

### Food & Nutrition (3)

- Baby Weaning & Toddler Meals (`baby-weaning-toddler-meals`): Infant feeding, allergen introduction and choking risk; needs a paediatric/dietitian review.
- Food Allergy Safe Kitchen (`food-allergy-safe-kitchen`): Anaphylaxis-level allergy management; needs clinical review.
- Pregnancy & Breastfeeding Nutrition (`pregnancy-breastfeeding-nutrition`): Foods to avoid and supplements in pregnancy; needs clinical review.

### Mental & Emotional Wellbeing (10)

- Addiction Recovery & Sobriety (`addiction-recovery-sobriety`): Clinical recovery and relapse planning; needs clinician review (same gate as bucket B).
- Bipolar Disorder Stability Plan (`bipolar-stability-plan`): Serious mental illness with medication and early-warning plans; needs psychiatric review.
- DBT Skills Practice (`dbt-skills-practice`): DBT is a clinical therapy usually delivered with a therapist, often for self-harm risk; needs clinician review.
- Eating Disorder Recovery Support (`eating-disorder-recovery-support`): High-risk condition with meal plans and relapse signs; needs specialist clinical review.
- Gambling Harm Recovery (`gambling-harm-recovery`): Addiction recovery with money safeguards; needs clinician review alongside addiction-recovery.
- Mental Health Crisis Safety Plan (`mental-health-crisis-safety-plan`): Suicide/crisis safety planning; highest-stakes content in the library, needs clinician sign-off.
- Mental Health Medication Tracking (`mental-health-medication-tracking`): Covers psychiatric medicine side effects and tapering; needs prescriber review.
- OCD Management (`ocd-management`): Exposure and response prevention is clinician-led; needs clinical review.
- Perinatal & Postnatal Mental Health (`perinatal-postnatal-mental-health`): Postnatal depression/anxiety (and psychosis risk) in a vulnerable period; needs clinical review.
- Trauma & PTSD Healing (`trauma-ptsd-healing`): Trauma and flashback management; self-directed exposure can retraumatise, needs clinical review.

### Relationships & Friendship (2)

- Ethical Non-Monogamy (`ethical-non-monogamy`): Passes the rule; needs a founder content decision before it sits in a mainstream catalogue.
- Leaving an Unhealthy Relationship (`leaving-an-unhealthy-relationship`): Domestic-abuse exit planning; content is careful, but a synced plan a partner might find is a safety risk. Needs a domestic-abuse specialist review first.

### Strategy & Leadership (37)

- Acquisition Strategy (`acquisition-strategy`): Organisation-level strategy or change process run by a leadership team.
- Annual Strategic Planning Cycle (`annual-strategic-planning-cycle`): Organisation-level strategy or change process run by a leadership team.
- Board Composition and Effectiveness (`board-composition-and-effectiveness`): Organisation-level strategy or change process run by a leadership team.
- Board Strategy Sessions (`board-strategy-sessions`): Organisation-level strategy or change process run by a leadership team.
- Business Turnaround Leadership (`business-turnaround-leadership`): Organisation-level strategy or change process run by a leadership team.
- Business Unit Portfolio Review (`business-unit-portfolio-review`): Organisation-level strategy or change process run by a leadership team.
- CEO and Executive Succession (`ceo-and-executive-succession`): Organisation-level strategy or change process run by a leadership team.
- Company Values and Culture Definition (`company-values-and-culture-definition`): Organisation-level strategy or change process run by a leadership team.
- Company Vision and Mission (`company-vision-and-mission`): Organisation-level strategy or change process run by a leadership team.
- Competitive Landscape Strategy Review (`competitive-landscape-strategy-review`): Organisation-level strategy or change process run by a leadership team.
- Corporate Sustainability Strategy (`corporate-sustainability-strategy`): Organisation-level strategy or change process run by a leadership team.
- Cross-Functional Strategic Alignment (`cross-functional-strategic-alignment`): Organisation-level strategy or change process run by a leadership team.
- Culture Change Initiative (`culture-change-initiative`): Organisation-level strategy or change process run by a leadership team.
- Digital Transformation Leadership (`digital-transformation-leadership`): Organisation-level strategy or change process run by a leadership team.
- Enterprise AI Strategy (`enterprise-ai-strategy`): Organisation-level strategy or change process run by a leadership team.
- Executive KPI Scorecard (`executive-kpi-scorecard`): Organisation-level strategy or change process run by a leadership team.
- Executive Team Formation (`executive-team-formation`): Organisation-level strategy or change process run by a leadership team.
- Executive Team Meeting Rhythm (`executive-team-meeting-rhythm`): Organisation-level strategy or change process run by a leadership team.
- First-Time Manager Leadership (`first-time-manager-leadership`): Duplicate of live career-growth.becoming-first-time-manager.
- Growth Strategy Options (`growth-strategy-options`): Organisation-level strategy or change process run by a leadership team.
- Innovation Portfolio Leadership (`innovation-portfolio-leadership`): Organisation-level strategy or change process run by a leadership team.
- Leadership Offsite Planning (`leadership-offsite-planning`): Organisation-level strategy or change process run by a leadership team.
- Leadership Pipeline Development (`leadership-pipeline-development`): Organisation-level strategy or change process run by a leadership team.
- Leading a Post-Merger Integration (`leading-a-post-merger-integration`): Organisation-level strategy or change process run by a leadership team.
- Leading All-Hands and Town Halls (`leading-all-hands-and-town-halls`): Organisation-level strategy or change process run by a leadership team.
- Long-Range Strategic Plan (`long-range-strategic-plan`): Organisation-level strategy or change process run by a leadership team.
- New Market Entry Strategy (`new-market-entry-strategy`): Organisation-level strategy or change process run by a leadership team.
- Nonprofit Strategic Planning (`nonprofit-strategic-planning`): Organisation-level strategy or change process run by a leadership team.
- OKR Setting and Tracking (`okr-setting-and-tracking`): Organisation-level strategy or change process run by a leadership team.
- Organisation Redesign (`organisation-redesign`): Organisation-level strategy or change process run by a leadership team.
- Organisational Change Management (`organisational-change-management`): Organisation-level strategy or change process run by a leadership team.
- Organisational Decision Rights (`organisational-decision-rights`): Organisation-level strategy or change process run by a leadership team.
- Serving as a Non-Executive Director (`serving-as-a-non-executive-director`): Overlaps live career-growth.non-executive-board-roles.
- Strategic Bets Prioritisation (`strategic-bets-prioritisation`): Organisation-level strategy or change process run by a leadership team.
- Strategic Scenario Planning (`strategic-scenario-planning`): Organisation-level strategy or change process run by a leadership team.
- Strategic Stakeholder Management (`strategic-stakeholder-management`): Organisation-level strategy or change process run by a leadership team.
- Strategy Execution Reviews (`strategy-execution-reviews`): Organisation-level strategy or change process run by a leadership team.

### Sales & Revenue (29)

- Account-Based Selling (`account-based-selling`): Sales-team or sales-ops process, not a goal one person owns.
- Annual Sales Kickoff (`annual-sales-kickoff`): Sales-team or sales-ops process, not a goal one person owns.
- Deal Desk & Discount Approvals (`deal-desk-discount-approvals`): Sales-team or sales-ops process, not a goal one person owns.
- Founder-Led Sales (`founder-led-sales`): Duplicate of live founding-startups.founder-led-selling.
- Inbound Lead Response & Routing (`inbound-lead-response-routing`): Sales-team or sales-ops process, not a goal one person owns.
- Selling Into New Countries (`international-sales-expansion`): Sales-team or sales-ops process, not a goal one person owns.
- Lost Deal Analysis (`lost-deal-analysis`): Sales-team or sales-ops process, not a goal one person owns.
- Product-Led Sales Motion (`product-led-sales-motion`): Sales-team or sales-ops process, not a goal one person owns.
- Quotes & CPQ Management (`quote-cpq-management`): Sales-team or sales-ops process, not a goal one person owns.
- Revenue Operations Setup (`revenue-operations-setup`): Sales-team or sales-ops process, not a goal one person owns.
- RFP Response Management (`rfp-response-management`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Activity & Conversion Metrics (`sales-activity-conversion-metrics`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Candidate Assessment (`sales-candidate-assessment`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Coaching & Call Review (`sales-coaching-call-review`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Commission Tracking & Payouts (`sales-commission-payouts`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Compensation Plan Design (`sales-compensation-plan-design`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Contests & SPIFFs (`sales-contests-spiffs`): Sales-team or sales-ops process, not a goal one person owns.
- Sales CRM Administration (`sales-crm-administration`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Development Team Management (`sales-development-team-management`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Enablement Content (`sales-enablement-content`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Methodology Adoption (`sales-methodology-adoption`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Pipeline Forecasting (`sales-pipeline-forecasting`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Pitch Deck (`sales-pitch-deck`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Playbook Development (`sales-playbook-development`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Quota & Capacity Modelling (`sales-quota-capacity-modelling`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Rep Onboarding & Ramp (`sales-rep-onboarding-ramp`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Tech Stack Selection (`sales-tech-stack-selection`): Sales-team or sales-ops process, not a goal one person owns.
- Sales Territory Planning (`sales-territory-planning`): Sales-team or sales-ops process, not a goal one person owns.
- Weekly Pipeline Review Cadence (`weekly-pipeline-review-cadence`): Sales-team or sales-ops process, not a goal one person owns.

### Product Management (38)

- API & Platform Products (`api-platform-products`): Product-team process, not a goal one person owns.
- Beta & Early Access Programmes (`beta-early-access-programmes`): Product-team process, not a goal one person owns.
- Build vs Buy Decisions (`build-vs-buy-decisions`): Product-team process, not a goal one person owns.
- Consumer App Engagement Loops (`consumer-app-engagement-loops`): Product-team process, not a goal one person owns.
- Customer Advisory Board (`customer-advisory-board`): Product-team process, not a goal one person owns.
- Customer Feedback Triage (`customer-feedback-triage`): Product-team process, not a goal one person owns.
- Enterprise Feature Readiness (`enterprise-feature-readiness`): Product-team process, not a goal one person owns.
- Feature Adoption Tracking (`feature-adoption-tracking`): Product-team process, not a goal one person owns.
- Feature Deprecation & Sunsetting (`feature-deprecation-sunsetting`): Product-team process, not a goal one person owns.
- Feature Request Voting Board (`feature-request-voting-board`): Product-team process, not a goal one person owns.
- Freemium & Trial Design (`freemium-trial-design`): Product-team process, not a goal one person owns.
- Hardware Product Development (`hardware-product-development`): Product-team process, not a goal one person owns.
- In-App Monetisation (`in-app-monetisation`): Product-team process, not a goal one person owns.
- Internal Tools Product Ownership (`internal-tools-product-ownership`): Product-team process, not a goal one person owns.
- MVP Scoping (`mvp-scoping`): Duplicate of live founding-startups.mvp-scoping-and-build (and a team process).
- New User Activation Flows (`new-user-activation-flows`): Product-team process, not a goal one person owns.
- North Star Metric & Inputs (`north-star-metric-inputs`): Product-team process, not a goal one person owns.
- Notifications & Messaging Features (`notifications-messaging-features`): Product-team process, not a goal one person owns.
- Pricing & Packaging Design (`pricing-packaging-design`): Product-team process, not a goal one person owns.
- Product Analytics Instrumentation (`product-analytics-instrumentation`): Product-team process, not a goal one person owns.
- Product Backlog Grooming (`product-backlog-grooming`): Product-team process, not a goal one person owns.
- Product Growth Experiments (`product-growth-experiments`): Product-team process, not a goal one person owns.
- Product Launch Management (`product-launch-management`): Product-team process, not a goal one person owns.
- Product-Led Retention (`product-led-retention`): Product-team process, not a goal one person owns.
- Product Line Extensions (`product-line-extensions`): Product-team process, not a goal one person owns.
- Product Localisation (`product-localisation`): Product-team process, not a goal one person owns.
- Product Operations (`product-operations`): Product-team process, not a goal one person owns.
- Product Portfolio Management (`product-portfolio-management`): Product-team process, not a goal one person owns.
- Product Team OKRs (`product-team-okrs`): Product-team process, not a goal one person owns.
- Product Trio Collaboration (`product-trio-collaboration`): Product-team process, not a goal one person owns.
- Product User Segment Definitions (`product-user-segment-definitions`): Product-team process, not a goal one person owns.
- Regulated Product Requirements (`regulated-product-requirements`): Product-team process, not a goal one person owns.
- Release Notes & Changelog (`release-notes-changelog`): Product-team process, not a goal one person owns.
- Search & Discovery Features (`search-discovery-features`): Product-team process, not a goal one person owns.
- Staged Feature Rollouts (`staged-feature-rollouts`): Product-team process, not a goal one person owns.
- Third-Party Integration Priorities (`third-party-integration-priorities`): Product-team process, not a goal one person owns.
- Two-Sided Marketplace Products (`two-sided-marketplace-products`): Overlaps live founding-startups.two-sided-marketplace-launch (and a team process).
- Usage-Based Billing Design (`usage-based-billing-design`): Product-team process, not a goal one person owns.

### Software Engineering (29)

- Application Security Testing (`application-security-testing`): Team engineering process, not a goal one person owns.
- Architecture Review Board (`architecture-review-board`): Team engineering process, not a goal one person owns.
- Build Systems & Monorepos (`build-systems-monorepos`): Team engineering process, not a goal one person owns.
- Chaos Engineering & Resilience (`chaos-engineering-resilience`): Team engineering process, not a goal one person owns.
- Cloud Cost Optimisation (FinOps) (`cloud-cost-optimisation-finops`): Team engineering process, not a goal one person owns.
- Code Review Practice (`code-review-practice`): Team engineering process, not a goal one person owns.
- Coding Standards & Linting (`coding-standards-linting`): Team engineering process, not a goal one person owns.
- Continuous Integration & Deployment (`continuous-integration-deployment`): Team engineering process, not a goal one person owns.
- Dependency Upgrades & Patching (`dependency-upgrades-patching`): Team engineering process, not a goal one person owns.
- Developer Experience Tooling (`developer-experience-tooling`): Team engineering process, not a goal one person owns.
- End-to-End Test Suites (`end-to-end-test-suites`): Team engineering process, not a goal one person owns.
- Engineer Onboarding (`engineer-onboarding`): Team engineering process, not a goal one person owns.
- Engineering Delivery Metrics (DORA) (`engineering-delivery-metrics-dora`): Team engineering process, not a goal one person owns.
- Engineering Documentation & ADRs (`engineering-documentation-adrs`): Team engineering process, not a goal one person owns.
- Engineering Interview Loops (`engineering-interview-loops`): Team engineering process, not a goal one person owns.
- Engineering Mentorship & Pairing (`engineering-mentorship-pairing`): Team engineering process, not a goal one person owns.
- Engineering On-Call Rotation (`engineering-on-call-rotation`): Team engineering process, not a goal one person owns.
- Incident Postmortems (`incident-postmortems`): Team engineering process, not a goal one person owns.
- Internal Developer Platform (`internal-developer-platform`): Team engineering process, not a goal one person owns.
- Internal Hackathons (`internal-hackathons`): Team engineering process, not a goal one person owns.
- Large-Scale Refactoring (`large-scale-refactoring`): Team engineering process, not a goal one person owns.
- Legacy System Migration (`legacy-system-migration`): Team engineering process, not a goal one person owns.
- Load & Capacity Testing (`load-capacity-testing`): Team engineering process, not a goal one person owns.
- Microservices Decomposition (`microservices-decomposition`): Team engineering process, not a goal one person owns.
- Observability & Monitoring (`observability-monitoring`): Team engineering process, not a goal one person owns.
- Service Level Objectives (`service-level-objectives`): Team engineering process, not a goal one person owns.
- Software Release Management (`software-release-management`): Team engineering process, not a goal one person owns.
- Sprint Planning & Estimation (`sprint-planning-estimation`): Team engineering process, not a goal one person owns.
- Technical Debt Paydown (`technical-debt-paydown`): Team engineering process, not a goal one person owns.

### Data & Analytics (24)

- Algorithmic Bias Review (`algorithmic-bias-review`): Organisation data-team process, not a goal one person owns.
- Analytics Request Intake (`analytics-request-intake`): Organisation data-team process, not a goal one person owns.
- Anomaly Detection Alerts (`anomaly-detection-alerts`): Organisation data-team process, not a goal one person owns.
- Churn Prediction Models (`churn-prediction-models`): Organisation data-team process, not a goal one person owns.
- Cloud Data Platform Selection (`cloud-data-platform-selection`): Organisation data-team process, not a goal one person owns.
- Customer Data Platform (`customer-data-platform`): Organisation data-team process, not a goal one person owns.
- Data Anonymisation & Privacy (`data-anonymisation-privacy`): Organisation data-team process, not a goal one person owns.
- Data Catalogue & Lineage (`data-catalogue-lineage`): Organisation data-team process, not a goal one person owns.
- Data Contracts & Schemas (`data-contracts-schemas`): Organisation data-team process, not a goal one person owns.
- Data Governance & Ownership (`data-governance-ownership`): Organisation data-team process, not a goal one person owns.
- Data Quality Monitoring (`data-quality-monitoring`): Organisation data-team process, not a goal one person owns.
- Data Warehouse Build (`data-warehouse-build`): Organisation data-team process, not a goal one person owns.
- Data Warehouse Cost Control (`data-warehouse-cost-control`): Organisation data-team process, not a goal one person owns.
- ELT Data Pipelines (`elt-data-pipelines`): Organisation data-team process, not a goal one person owns.
- KPI Metric Definitions (`kpi-metric-definitions`): Organisation data-team process, not a goal one person owns.
- Master Data Management (`master-data-management`): Organisation data-team process, not a goal one person owns.
- Model Drift Monitoring (`model-drift-monitoring`): Organisation data-team process, not a goal one person owns.
- Operations Analytics (`operations-analytics`): Organisation data-team process, not a goal one person owns.
- Organisation Data Literacy (`organisation-data-literacy`): Organisation data-team process, not a goal one person owns.
- Real-Time Streaming Data (`real-time-streaming-data`): Organisation data-team process, not a goal one person owns.
- Reverse ETL & Data Activation (`reverse-etl-data-activation`): Organisation data-team process, not a goal one person owns.
- Self-Serve Analytics Enablement (`self-serve-analytics-enablement`): Organisation data-team process, not a goal one person owns.
- SQL Training for Teams (`sql-training-for-teams`): Organisation data-team process, not a goal one person owns.
- Weekly Metrics Review Meeting (`weekly-metrics-review-meeting`): Organisation data-team process, not a goal one person owns.

### IT & Security (1)

- Single Sign-On & Identity (`single-sign-on-identity`): Organisation IT process (staff identity), not a personal goal.

### Finance & Accounting (27)

- Accounts Payable Operations (`accounts-payable-operations`): Company finance-function process run by a team.
- Annual Operating Budget Build (`annual-operating-budget-build`): Company finance-function process run by a team.
- Budget Versus Actual Variance Analysis (`budget-versus-actual-variance`): Company finance-function process run by a team.
- Business Cost Reduction Programme (`business-cost-reduction-programme`): Company finance-function process run by a team.
- Capital Expenditure Planning (`capital-expenditure-planning`): Company finance-function process run by a team.
- Cost Centre & Overhead Allocation (`cost-centre-overhead-allocation`): Company finance-function process run by a team.
- Customer Credit Risk Assessment (`customer-credit-risk-assessment`): Company finance-function process run by a team.
- Delegation of Financial Authority (`delegation-of-financial-authority`): Company finance-function process run by a team.
- Employee Expense Management (`employee-expense-management`): Company finance-function process run by a team.
- External Audit Preparation (`external-audit-preparation`): Company finance-function process run by a team.
- Fixed Asset Register & Depreciation (`fixed-asset-register-depreciation`): Company finance-function process run by a team.
- Foreign Exchange & Treasury Management (`foreign-exchange-treasury`): Company finance-function process run by a team.
- Headcount Cost Planning (`headcount-cost-planning`): Company finance-function process run by a team.
- Internal Financial Controls (`internal-financial-controls`): Company finance-function process run by a team.
- Inventory Costing & Valuation (`inventory-costing-valuation`): Company finance-function process run by a team.
- Lease Accounting Under IFRS 16 (`lease-accounting-ifrs-16`): Company finance-function process run by a team.
- Month-End Close Process (`month-end-close-process`): Company finance-function process run by a team.
- Multi-Entity Consolidation (`multi-entity-consolidation`): Company finance-function process run by a team.
- Nonprofit Fund Accounting (`nonprofit-fund-accounting`): Company finance-function process run by a team.
- Payroll Run Processing (`payroll-run-processing`): Company finance-function process run by a team.
- Revenue Recognition Policy (`revenue-recognition-policy`): Company finance-function process run by a team.
- Rolling Financial Forecasts (`rolling-financial-forecasts`): Company finance-function process run by a team.
- Subscription Revenue Accounting (`subscription-revenue-accounting`): Company finance-function process run by a team.
- Tax Investigation Response (`tax-investigation-response`): Live tax dispute with an authority; high-stakes, needs a tax adviser's review.
- Transfer Pricing Documentation (`transfer-pricing-documentation`): Company finance-function process run by a team.
- Unit Economics Modelling (`unit-economics-modelling`): Duplicate of live founding-startups.early-unit-economics-modelling.
- Working Capital Optimisation (`working-capital-optimisation`): Company finance-function process run by a team.

### Fundraising & Investor Relations (12)

- Accelerator & Incubator Applications (`accelerator-incubator-applications`): Duplicate of live founding-startups.accelerator-and-incubator-applications.
- Charitable Foundation Grants (`charitable-foundation-grants`): Listed-company or nonprofit team process, not a personal goal.
- Donor Stewardship & Reporting (`donor-stewardship-reporting`): Listed-company or nonprofit team process, not a personal goal.
- Fundraising Gala Events (`fundraising-gala-events`): Listed-company or nonprofit team process, not a personal goal.
- Investor Relations Website (`investor-relations-website`): Listed-company or nonprofit team process, not a personal goal.
- IPO Readiness Programme (`ipo-readiness-programme`): Listed-company or nonprofit team process, not a personal goal.
- Major Donor Fundraising (`major-donor-fundraising`): Listed-company or nonprofit team process, not a personal goal.
- Nonprofit Capital Campaign (`nonprofit-capital-campaign`): Listed-company or nonprofit team process, not a personal goal.
- Public Company Investor Relations (`public-company-investor-relations`): Listed-company or nonprofit team process, not a personal goal.
- Quarterly Earnings Communications (`quarterly-earnings-communications`): Listed-company or nonprofit team process, not a personal goal.
- Sell-Side Analyst Relations (`sell-side-analyst-relations`): Listed-company or nonprofit team process, not a personal goal.
- Shareholder AGM Preparation (`shareholder-agm-preparation`): Listed-company or nonprofit team process, not a personal goal.

### Engineering Practice (15)

- Asset Integrity and Inspection (`asset-integrity-and-inspection`): Plant- or project-team process, not a personal goal.
- Commissioning and Start-Up (`commissioning-and-start-up`): Plant- or project-team process, not a personal goal.
- Engineering Design Reviews (`engineering-design-reviews`): Plant- or project-team process, not a personal goal.
- Engineering Drawing and Document Control (`engineering-drawing-and-document-control`): Plant- or project-team process, not a personal goal.
- Engineering Tender Bids (`engineering-tender-bids`): Plant- or project-team process, not a personal goal.
- FEED Studies (`feed-studies`): Plant- or project-team process, not a personal goal.
- HAZOP Studies (`hazop-studies`): A team study led by a facilitator, not a personal goal; also safety-critical.
- Local Content in Energy Contracting (`local-content-in-energy-contracting`): Plant- or project-team process, not a personal goal.
- LOPA and Safety Integrity Levels (`lopa-and-safety-integrity-levels`): Safety-integrity calculations; needs a functional-safety engineer review.
- Maintenance Planning and Scheduling (`maintenance-planning-and-scheduling`): Plant- or project-team process, not a personal goal.
- Management of Change (`management-of-change`): Plant- or project-team process, not a personal goal.
- Natural Gas Curtailment Planning (`natural-gas-curtailment-planning`): Plant- or project-team process, not a personal goal.
- Permit to Work and Isolations (`permit-to-work-and-isolations`): Lockout and isolation errors can kill; needs a chartered engineer / safety review.
- Plant Turnarounds and Shutdowns (`plant-turnarounds-and-shutdowns`): Plant- or project-team process, not a personal goal.
- Process Safety Management (`process-safety-management`): Plant- or project-team process, not a personal goal.

### Private Equity & Venture Capital (21)

- 100-Day Plans (`100-day-plans`): Fund or portfolio-company process run by a firm.
- Add-On Acquisitions (`add-on-acquisitions`): Fund or portfolio-company process run by a firm.
- Co-Investment Deals (`co-investment-deals`): Fund or portfolio-company process run by a firm.
- Commercial Due Diligence (`commercial-due-diligence`): Fund or portfolio-company process run by a firm.
- Deal Pipeline CRM (`deal-pipeline-crm`): Fund or portfolio-company process run by a firm.
- Financial Due Diligence (QoE) (`financial-due-diligence-qoe`): Fund or portfolio-company process run by a firm.
- Follow-On Investment Decisions (`follow-on-investment-decisions`): Fund or portfolio-company process run by a firm.
- Fund Administration (`fund-administration`): Fund or portfolio-company process run by a firm.
- Fund Compliance and Regulatory Filings (`fund-compliance-and-regulatory-filings`): Fund or portfolio-company process run by a firm.
- Fund Terms and LPA Negotiation (`fund-terms-and-lpa-negotiation`): Fund or portfolio-company process run by a firm.
- GP Economics and Management Fees (`gp-economics-and-management-fees`): Fund or portfolio-company process run by a firm.
- Growth Equity Investing (`growth-equity-investing`): Fund or portfolio-company process run by a firm.
- LOIs and Bid Letters (`lois-and-bid-letters`): Fund or portfolio-company process run by a firm.
- LP Reporting and Annual Meetings (`lp-reporting-and-annual-meetings`): Fund or portfolio-company process run by a firm.
- Management Incentive Plans (`management-incentive-plans`): Fund or portfolio-company process run by a firm.
- PE Fund LP Fundraising (`pe-fund-lp-fundraising`): Fund or portfolio-company process run by a firm.
- Portfolio Company Exit Planning (`portfolio-company-exit-planning`): Fund or portfolio-company process run by a firm.
- Portfolio Monitoring and KPIs (`portfolio-monitoring-and-kpis`): Fund or portfolio-company process run by a firm.
- Secondaries and Continuation Funds (`secondaries-and-continuation-funds`): Fund or portfolio-company process run by a firm.
- Value Creation Plans (`value-creation-plans`): Fund or portfolio-company process run by a firm.
- VC Portfolio Construction (`vc-portfolio-construction`): Fund or portfolio-company process run by a firm.

### Quantitative Finance & Trading (4)

- Alternative Data Research (`alternative-data-research`): Firm-level trading infrastructure or function, not a personal goal.
- Execution Algorithms (`execution-algorithms`): Firm-level trading infrastructure or function, not a personal goal.
- Low-Latency Trading Systems (`low-latency-trading-systems`): Firm-level trading infrastructure or function, not a personal goal.
- Model Validation and Model Risk (`model-validation-and-model-risk`): Firm-level trading infrastructure or function, not a personal goal.

### Investment Banking & Advisory (29)

- Activism and Takeover Defence (`activism-and-takeover-defence`): Deal-team advisory process for a client, not a personal goal.
- Alternative Listing Routes (`alternative-listing-routes`): Deal-team advisory process for a client, not a personal goal.
- Bid Rounds and Process Letters (`bid-rounds-and-process-letters`): Deal-team advisory process for a client, not a personal goal.
- Buy-Side M&A Mandates (`buy-side-m-and-a-mandates`): Deal-team advisory process for a client, not a personal goal.
- Buyer and Investor Universe Mapping (`buyer-investor-universe-mapping`): Deal-team advisory process for a client, not a personal goal.
- Caribbean Corporate Finance Deals (`caribbean-corporate-finance-deals`): Deal-team advisory process for a client, not a personal goal.
- Carve-Outs and Divestitures (`carve-outs-and-divestitures`): Deal-team advisory process for a client, not a personal goal.
- Coordinating Deal Advisers (`coordinating-deal-advisers`): Deal-team advisory process for a client, not a personal goal.
- Credit Ratings Advisory (`credit-ratings-advisory`): Deal-team advisory process for a client, not a personal goal.
- Cross-Border M&A Execution (`cross-border-m-and-a-execution`): Deal-team advisory process for a client, not a personal goal.
- DCM Bond Issuance (`dcm-bond-issuance`): Deal-team advisory process for a client, not a personal goal.
- Debt Advisory for Mid-Market (`debt-advisory-for-mid-market`): Deal-team advisory process for a client, not a personal goal.
- Equity Story Development (`equity-story-development`): Deal-team advisory process for a client, not a personal goal.
- Fairness Opinions (`fairness-opinions`): Deal-team advisory process for a client, not a personal goal.
- Follow-Ons and Block Trades (`follow-ons-and-block-trades`): Deal-team advisory process for a client, not a personal goal.
- Independent Valuation Engagements (`independent-valuation-engagements`): Deal-team advisory process for a client, not a personal goal.
- Industry Coverage Group Work (`industry-coverage-group-work`): Deal-team advisory process for a client, not a personal goal.
- Information Memorandum Drafting (`information-memorandum-drafting`): Deal-team advisory process for a client, not a personal goal.
- IPO Execution (ECM) (`ipo-execution-ecm`): Deal-team advisory process for a client, not a personal goal.
- League Tables and Credentials (`league-tables-and-credentials`): Deal-team advisory process for a client, not a personal goal.
- Leveraged Finance Deals (`leveraged-finance-deals`): Deal-team advisory process for a client, not a personal goal.
- Liability Management Exercises (`liability-management-exercises`): Deal-team advisory process for a client, not a personal goal.
- Management Presentations (`management-presentations`): Deal-team advisory process for a client, not a personal goal.
- Privatisation and Public Sector Advisory (`privatisation-public-sector-advisory`): Deal-team advisory process for a client, not a personal goal.
- Project Finance Advisory (`project-finance-advisory`): Deal-team advisory process for a client, not a personal goal.
- Restructuring Advisory (`restructuring-advisory`): Deal-team advisory process for a client, not a personal goal.
- Sell-Side Data Room and Q&A (`sell-side-data-room-and-qa`): Deal-team advisory process for a client, not a personal goal.
- Sell-Side M&A Process (`sell-side-m-and-a-process`): Deal-team advisory process for a client, not a personal goal.
- Signing to Closing Workstreams (`signing-to-closing-workstreams`): Deal-team advisory process for a client, not a personal goal.

### Real Estate Investing & Development (15)

- Affordable Housing Development (`affordable-housing-development`): Property-business operation run by a company or team.
- Build-to-Rent Development (`build-to-rent-development`): Property-business operation run by a company or team.
- Building Capex Reserves (`building-capex-reserves`): Property-business operation run by a company or team.
- Commercial Property Asset Management (`commercial-property-asset-management`): Property-business operation run by a company or team.
- Hotel and Hospitality Property (`hotel-and-hospitality-property`): Property-business operation run by a company or team.
- Mixed-Use Development (`mixed-use-development`): Property-business operation run by a company or team.
- Multifamily Value-Add Programmes (`multifamily-value-add-programmes`): Property-business operation run by a company or team.
- Off-Plan and Development Sales (`off-plan-and-development-sales`): Property-business operation run by a company or team.
- Office and Retail Leasing (`office-and-retail-leasing`): Property-business operation run by a company or team.
- Property Portfolio Reporting (`property-portfolio-reporting`): Property-business operation run by a company or team.
- Real Estate Syndications (`real-estate-syndications`): Raising money from investors triggers securities law; needs legal review.
- Residential Property Management Operations (`residential-property-management-ops`): Property-business operation run by a company or team.
- Short-Let Portfolio Operations (`short-let-portfolio-operations`): Property-business operation run by a company or team.
- Sustainable Building Certification (`sustainable-building-certification`): Property-business operation run by a company or team.
- Syndication Investor Relations (`syndication-investor-relations`): Syndicate investor reporting, an organisation's process; and securities-law exposure.

### Management Consulting (16)

- Benchmarking Studies (`benchmarking-studies`): Client engagement or firm process delivered by a team.
- Consulting Firm Partnership Model (`consulting-firm-partnership-model`): Client engagement or firm process delivered by a team.
- Consulting Knowledge Reuse (`consulting-knowledge-reuse`): Client engagement or firm process delivered by a team.
- Cost Reduction Engagements (`cost-reduction-engagements`): Client engagement or firm process delivered by a team.
- Deliverable Quality Control (`deliverable-quality-control`): Client engagement or firm process delivered by a team.
- Engagement Kickoff (`engagement-kickoff`): Client engagement or firm process delivered by a team.
- Final Recommendations Readout (`final-recommendations-readout`): Client engagement or firm process delivered by a team.
- Hiring Consultants for a Boutique (`hiring-consultants-for-a-boutique`): Client engagement or firm process delivered by a team.
- Implementation Support Phases (`implementation-support-phases`): Client engagement or firm process delivered by a team.
- Operations Improvement Engagements (`operations-improvement-engagements`): Client engagement or firm process delivered by a team.
- Organisation Design Engagements (`organisation-design-engagements`): Client engagement or firm process delivered by a team.
- Pricing Strategy Engagements (`pricing-strategy-engagements`): Client engagement or firm process delivered by a team.
- Proprietary Frameworks and Tools (`proprietary-frameworks-and-tools`): Client engagement or firm process delivered by a team.
- Public Sector Consulting Engagements (`public-sector-consulting-engagements`): Client engagement or firm process delivered by a team.
- Steering Committee Meetings (`steering-committee-meetings`): Client engagement or firm process delivered by a team.
- Transformation Office Support (`transformation-office-support`): Client engagement or firm process delivered by a team.

### Professional Practice Ownership (12)

- Admitting New Partners (`admitting-new-partners`): Firm-internal partnership process, not one person's goal.
- AML Duties for Law and Accounting Firms (`aml-duties-law-accounting-firms`): Regulated AML compliance; errors carry legal liability, needs professional review.
- Associate to Equity Partner Path (`associate-to-equity-partner-path`): Firm-internal partnership process, not one person's goal.
- Billable Time and Fee Notes (`billable-time-and-fee-notes`): Firm-internal partnership process, not one person's goal.
- Client Trust Accounts (`client-trust-accounts`): Client-money rules; errors carry regulatory liability, needs professional review.
- Clinical Governance and Audits (`clinical-governance-and-audits`): Clinical governance system run across a practice; regulated, needs professional review.
- Complaints and Professional Discipline (`complaints-and-professional-discipline`): Regulatory discipline handling; needs professional review.
- Controlled Drugs and Pharmacy Registers (`controlled-drugs-pharmacy-registers`): Controlled-drug legal registers; needs pharmacist / regulator review.
- Infection Prevention in Practice (`infection-prevention-in-practice`): Clinical infection control; needs clinical review.
- Patient and Client Records (`patient-and-client-records`): Records retention and confidentiality law; needs professional review.
- Practice Partnership Agreements (`practice-partnership-agreements`): Legal agreement drafting; needs legal review.
- Practice Regulator Compliance (`practice-regulator-compliance`): Regulator rules vary by profession and country; needs professional review.

### Family Office & Private Wealth (29)

- Caribbean Family Business Groups (`caribbean-family-business-groups`): Run by a family collectively or its office staff, not one person; very narrow.
- Close Protection Arrangements (`close-protection-arrangements`): Personal-security arrangements for high-risk families; sensitive and very narrow.
- CRS and FATCA Reporting (`crs-and-fatca-reporting`): Regulatory reporting for family structures; needs legal/tax review.
- Family Bank and Member Loans (`family-bank-and-member-loans`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Conflict Resolution (`family-conflict-resolution`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Constitution Drafting (`family-constitution-drafting`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Council and Assembly (`family-council-and-assembly`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Crisis and Reputation Plan (`family-crisis-and-reputation-plan`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Employment Policy (`family-employment-policy`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Enterprise Ownership Rules (`family-enterprise-ownership-rules`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Governance Framework (`family-governance-framework`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Holding Company (`family-holding-company`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Investment Committee (`family-investment-committee`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Leadership Succession (`family-leadership-succession`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Office Budget and Costs (`family-office-budget-and-costs`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Office Cybersecurity (`family-office-cybersecurity`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Office Staffing (`family-office-staffing`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Office Systems (`family-office-systems`): Run by a family collectively or its office staff, not one person; very narrow.
- Family Prenuptial Policy (`family-prenuptial-policy`): Run by a family collectively or its office staff, not one person; very narrow.
- Kidnap and Extortion Preparedness (`kidnap-and-extortion-preparedness`): Kidnap and extortion response; sensitive, needs specialist review.
- Next-Generation Education Programme (`next-generation-education-programme`): Run by a family collectively or its office staff, not one person; very narrow.
- Pre-Immigration Wealth Planning (`pre-immigration-wealth-planning`): Cross-border tax-residency structuring; needs legal/tax review.
- Private Foundation Set-Up (`private-foundation-set-up`): Run by a family collectively or its office staff, not one person; very narrow.
- Private Trust Company (`private-trust-company`): Regulated trust company; needs legal review and serves very few.
- Rising Generation Leadership Roles (`rising-generation-leadership-roles`): Run by a family collectively or its office staff, not one person; very narrow.
- Single-Family Office Set-Up (`single-family-office-set-up`): Run by a family collectively or its office staff, not one person; very narrow.
- Trust Structures Across Jurisdictions (`trust-structures-across-jurisdictions`): Multi-jurisdiction trust structuring; needs legal review.
- Wealth Structuring Jurisdictions (`wealth-structuring-jurisdictions`): Offshore structuring comparisons; needs legal review.
- Welcoming Spouses into the Family (`welcoming-spouses-into-the-family`): Run by a family collectively or its office staff, not one person; very narrow.

### Agriculture & Agribusiness (1)

- Pesticide Safety and Records (`pesticide-safety-and-records`): Chemical handling safety; needs agronomist / safety review before publishing.
