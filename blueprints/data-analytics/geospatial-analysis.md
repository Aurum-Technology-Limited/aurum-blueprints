---
id: data-analytics.geospatial-analysis
name: Geospatial Analysis
description: "A clear location question, a sound toolkit and coordinate rules, geocoded and joined data, routines that keep layers clean and current, spatial skills, catchment and site decisions, and specialist models from Huff to routing."
category: business
version: 1.0.0
tags: [data-analytics, geospatial-analysis, researcher, knowledge-worker, gis, maps, catchments, site-selection]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - risk-register
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Geospatial Analysis
          description: "Analysing location data with maps, regions and distances to answer questions about catchments, routes, site selection and coverage."
          projects:
            - name: Writing the location question before opening a map
              description: |-
                ## Purpose
                Before any layer is loaded, write down what the map or analysis has to decide: whether to open a site in the north of the city, which postcodes a service fails to reach, or how far patients travel to a clinic. Spatial work drifts into pretty maps that answer nothing when the question is vague, and a written question fixes the unit of analysis, the geography and the distance measure up front. It also tells you when you are finished.

                ## Milestones
                1. One location question written in a single sentence, with the decision it informs.
                2. The unit of analysis named: points, small areas, regions or routes.
                3. The geography and the distance measure listed as open choices to settle.
                4. The question agreed in writing with whoever asked for the work.

                ## Notes
                If the request is "can you map this", ask what someone will do differently once they see the map. The answer is usually the real question.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-sentence location question, its decision and its unit of analysis are written down and agreed by the requester before any layer is built."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the requester what decision the map or analysis should change"
                - "Write the location question and its decision in one sentence each"
                - "Name the unit of analysis and the geography the answer needs"
                - "Get the requester to confirm the question by email"
            - name: Choosing a GIS desktop and spatial code toolkit
              description: |-
                ## Purpose
                Most location work needs two tools: a desktop GIS for looking at and checking data, such as QGIS or a commercial equivalent, and a code or SQL route for repeatable analysis, such as Python with GeoPandas, R with sf, or a database with spatial functions. Choosing them deliberately, against your data volumes, colleagues' skills and licence budget, saves months of exporting shapefiles between tools nobody shares.

                ## Milestones
                1. Three requirements written down: typical data size, who else must open the files, and budget.
                2. Two desktop options and two code or SQL options scored against the same criteria.
                3. One desktop GIS and one analysis route chosen, with the reason recorded.
                4. Both installed and tested on a sample file of your own data.

                ## Notes
                Start from the **Purchase decision** template. Free tools are usually enough to start; pay only when a specific feature or support need appears.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen desktop GIS and analysis route are installed, tested on real data and recorded with the reasons in a purchase decision page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the data sizes, colleagues and budget your tools must cope with"
                - "Score two desktop GIS options and two code routes on the same criteria"
                - "Install the chosen tools and open a sample of your own data in both"
                - "Update the GIS and spatial libraries to their current stable release @recurring(quarterly)"
            - name: Coordinate reference system rules for every project
              description: |-
                ## Purpose
                Coordinates mean nothing without a reference system, and mixing latitude and longitude in degrees with a projected grid in metres is behind most wrong distances and areas. Setting one storage system, usually WGS84 for exchange, and one projected system for measuring in your region, then writing the rule down, stops buffers drawn in degrees and areas that are off by a factor of thousands.

                ## Milestones
                1. One storage reference system and one measuring reference system chosen for your region.
                2. The EPSG codes and the reason for each written on a one-page rule sheet.
                3. Every existing layer checked and its reference system recorded.
                4. A distance and an area calculated both ways to show the difference to colleagues.

                ## Notes
                Web maps display in Web Mercator, which badly distorts area away from the equator. Never measure areas or buffers in it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written rule sheet names the storage and measuring reference systems by EPSG code, and every current layer has its system recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the recommended projected reference system for your country or region"
                - "Write the storage and measuring EPSG codes on a one-page rule sheet"
                - "Check and record the reference system of every layer you hold"
                - "Measure one known distance in degrees and in metres to show the error"
            - name: Geocoding addresses with a measured match rate
              description: |-
                ## Purpose
                Addresses in a customer or patient table only become points after geocoding, and geocoders quietly drop, guess or place records at the centre of a town when they cannot match. Running a first batch with the match level recorded for every row, and hand-checking a sample, tells you how much of your map is real and how much is guesswork before anyone draws a conclusion from it.

                ## Milestones
                1. Addresses cleaned into consistent fields: street, locality, postcode and country.
                2. A first batch geocoded with the match level stored for every record.
                3. A random sample of 50 results checked by hand against a map.
                4. The match rate by match level written down, with unmatched records kept in a separate table.

                ## Notes
                Records matched only to a postcode or town centre should never be used for distances under a few kilometres. Flag them rather than mixing them in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every address has a point or a recorded failure, with match level per row and a hand-checked sample of 50 showing the error rate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Split the address column into street, locality, postcode and country"
                - "Geocode a first batch and keep the match level for each row"
                - "Check 50 random results by hand on a basemap"
                - "Write the match rate by level and park unmatched rows in their own table"
            - name: Boundary layers for the regions you report on
              description: |-
                ## Purpose
                Regions such as districts, census areas, postcode sectors or sales regions change shape over time, and joining this year's data to last decade's boundaries produces counts that do not add up. Collecting the official boundary files you report against, with their release year and generalisation level, gives every analysis the same frame and makes changes visible when a new release arrives.

                ## Milestones
                1. The region types you report on listed, from smallest to largest.
                2. Official boundary files for each type downloaded, with release year and source noted.
                3. Full-resolution and generalised versions kept apart, with a rule on when to use each.
                4. Boundary names and codes checked against the lookup tables your data uses.

                ## Notes
                Generalised boundaries are fine for display but can misplace points near borders. Use full-resolution boundaries for any point-in-polygon assignment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A boundary folder holds every reporting geography with release year, source and resolution recorded, and codes match the data lookups."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every region type your reports use"
                - "Download the official boundary file for each and note its release year"
                - "Separate full-resolution and generalised versions into named folders"
                - "Check the statistics office or mapping agency for new boundary releases @recurring(yearly)"
            - name: Spatial data source register
              description: |-
                ## Purpose
                Location projects collect layers fast: boundaries, points of interest, road networks, population grids, a client's site list. Without a register of where each came from, its date, its licence and its reference system, nobody can tell six months later whether a layer is current or whether it may be shared. A short register kept next to the data makes every map traceable.

                ## Milestones
                1. A register with columns for layer, source, date, licence, reference system and owner.
                2. Every layer currently in use entered, with gaps marked as unknown.
                3. Unknown sources traced or the layer marked for replacement.
                4. The register stored in the same folder or database as the layers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every spatial layer in use appears in the register with source, date, licence and reference system, and none is left as unknown without a replacement plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the register with layer, source, date, licence, system and owner columns"
                - "Enter every layer currently in your project folders"
                - "Trace the source of any layer marked unknown"
                - "Mark untraceable layers for replacement"
            - name: First reference map of sites and customers
              description: |-
                ## Purpose
                Plotting your sites and customers on one plain map is the fastest way to find bad data: points in the sea, a cluster at a warehouse address, a whole region missing. Making this reference map early, with no styling ambition, shows what the dataset really covers and gives you a picture to check every later analysis against.

                ## Milestones
                1. Sites and geocoded customers plotted on a neutral basemap.
                2. Obvious errors such as points at sea or at a depot address listed.
                3. Areas with surprisingly few or many points noted with a likely cause.
                4. The map saved as a dated image and project file for later comparison.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated reference map of sites and customers exists, with a written list of data errors and coverage oddities found on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Load sites and geocoded customers onto a neutral basemap"
                - "Zoom through each region and list points that look wrong"
                - "Note any region with suspiciously few or many points"
                - "Save the map as a dated image beside the project file"
            - name: Assigning points to regions with a spatial join
              description: |-
                ## Purpose
                Counting customers per district, incidents per ward or sales per territory needs each point assigned to the polygon it falls in. Points on borders, outside every polygon or inside overlapping ones are where totals go wrong, so a join with checks for each case gives counts you can defend when a regional manager says the numbers look low.

                ## Milestones
                1. Points and polygons in the same reference system before joining.
                2. Every point assigned to exactly one region, or flagged as outside or on a border.
                3. Regional counts summed and reconciled to the total number of points.
                4. The join method and the handling of edge cases written in a short note.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table assigns every point to one region or an explicit flag, and regional totals reconcile exactly to the point count."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Reproject points and polygons into the same measuring system"
                - "Run the point-in-polygon join and keep a flag column for misses"
                - "Reconcile the sum of regional counts with the total point count"
                - "Write how border and outside points were handled"
            - name: Straight-line or travel-time distance decision
              description: |-
                ## Purpose
                Distance as the crow flies is quick and often misleading: a river, a motorway or a one-way system can make a site two kilometres away a twenty minute drive. Deciding when straight-line distance is good enough and when you need road network or public transport travel time, and writing it down, keeps reports consistent and stops arguments about whose catchment is right.

                ## Milestones
                1. Straight-line and network travel time computed for a sample of 100 customer and site pairs.
                2. The size of the difference recorded, overall and for urban and rural pairs.
                3. A rule written for which measure each kind of question uses.
                4. The travel mode and time of day assumed for network distances recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule states which distance measure each type of question uses, backed by a 100-pair comparison of straight-line and travel-time distances."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draw a sample of 100 customer and site pairs"
                - "Compute straight-line and drive-time distance for each pair"
                - "Compare the two for urban and rural pairs separately"
                - "Write the rule for which measure to use and when"
            - name: Spatial database with indexed geometry tables
              description: |-
                ## Purpose
                Querying thousands of points in a desktop GIS is fine; joining millions of events to polygons every week is not. Putting your core layers in a spatial database such as PostGIS, or a warehouse with geography types, with spatial indexes on every geometry column, turns overnight jobs into minutes and lets colleagues query the same tables instead of passing files around.

                ## Milestones
                1. Core layers loaded as tables with a geometry column and a declared reference system.
                2. A spatial index created on every geometry column.
                3. One slow desktop join rerun in the database with the timing compared.
                4. Read access granted to colleagues who need the layers.

                ## Notes
                Check whether your warehouse already supports geography types before standing up a separate database. One less system to run is often the better choice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Core layers live in indexed spatial tables that colleagues can read, and one previously slow join runs at least five times faster there."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether your warehouse supports geometry or geography types"
                - "Load boundaries, sites and customers as geometry tables"
                - "Create a spatial index on each geometry column"
                - "Review the slowest spatial queries for missing index use @recurring(monthly:28)"
            - name: Monthly geocoding refresh and failed match queue
              description: |-
                ## Purpose
                New customers, moved sites and corrected addresses arrive every month, and a geocoded table that is never refreshed quietly decays. A monthly run that geocodes new and changed addresses, logs the match rate and puts failures in a queue for someone to fix keeps the points you analyse close to reality.

                ## Milestones
                1. A monthly job geocodes only new and changed addresses.
                2. The match rate for each run recorded in a log.
                3. Failed matches sent to a queue with an owner who works through it.
                4. A falling match rate investigated within the month it appears.

                ## Notes
                Start from the **Metrics log** template for the match rate history.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Geocoding runs every month with its match rate logged, and the failed match queue never holds records older than two months."
                cadence: rolling
              tasks:
                - "Set up a filter for addresses added or changed since the last run"
                - "Create a match rate log from the metrics log template"
                - "Geocode new and changed addresses and log the match rate @recurring(monthly:9)"
                - "Review the failed match queue and fix or close the oldest records @recurring(monthly:19)"
            - name: Dated snapshots of site and customer locations
              description: |-
                ## Purpose
                Questions like how the customer base has shifted since a competitor opened, or how many sites were in a region two years ago, are impossible if location tables are overwritten every month. Saving a dated snapshot of sites and customer points each month costs little storage and makes change over time something you can actually map.

                ## Milestones
                1. A snapshot table or folder structure keyed by month.
                2. Sites and customer points captured each month without overwriting.
                3. A simple comparison of two snapshots run to show what changed.
                4. A retention period agreed for snapshots containing personal data.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly location snapshots exist for at least six consecutive months, with a retention period agreed for those holding personal data."
                cadence: rolling
              tasks:
                - "Create a snapshot table keyed by snapshot month"
                - "Agree how long customer location snapshots may be kept"
                - "Save the month's site and customer location snapshot @recurring(monthly:22)"
                - "Map the difference between the two most recent snapshots"
            - name: Weekly geometry and coordinate quality checks
              description: |-
                ## Purpose
                Spatial data breaks in characteristic ways: latitude and longitude swapped, points at zero degrees in the Gulf of Guinea, self-intersecting polygons, empty geometries and duplicated sites a few metres apart. A short weekly checklist that tests for each of these catches errors before they reach a map that a director takes to a meeting.

                ## Milestones
                1. A checklist of tests: bounding box, zero coordinates, swapped axes, invalid and empty geometries, near duplicates.
                2. Each test written as a query that returns failing rows.
                3. The checks run weekly with results noted.
                4. Every failure fixed at source or recorded with a reason.

                ## Notes
                Start from the **Operational checklist** template. A bounding box test for your country catches more errors than any other single check.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six geometry tests run weekly as saved queries, and no failure stays open for more than two weeks without a recorded reason."
                cadence: rolling
              tasks:
                - "Write the bounding box test for the area your data should cover"
                - "Save queries for zero coordinates, swapped axes and invalid geometries"
                - "Run the geometry and coordinate checks and note the failures @recurring(weekly:mon)"
                - "Trace the source of repeat failures and fix them upstream @recurring(monthly:16)"
            - name: Catchment and coverage dashboard refresh
              description: |-
                ## Purpose
                Once catchments and coverage figures exist, people want them current: how many customers each site serves, how many live beyond a 30 minute drive, which areas are growing. A monthly refresh of a small location dashboard, with the data date shown on every map, keeps decisions based on this month's points rather than last year's export.

                ## Milestones
                1. A dashboard with catchment counts, coverage share and one map, showing its data date.
                2. The refresh steps written so another person could run them.
                3. The dashboard refreshed monthly with any large change annotated.
                4. Usage reviewed each quarter and unused views removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The location dashboard shows a data date within the last five weeks, with refresh steps documented and unused views pruned each quarter."
                cadence: rolling
              tasks:
                - "Write the refresh steps for the location dashboard"
                - "Add the data date to the title of every map on it"
                - "Refresh catchment counts and coverage figures and annotate big changes @recurring(monthly:4)"
                - "Check which views were opened last quarter and remove the rest @recurring(quarterly)"
            - name: House map style guide and layout template
              description: |-
                ## Purpose
                Maps made by different people in different tools end up with clashing colours, missing scale bars and legends that disagree about what red means. A one-page style guide with a colour palette for sequential and categorical data, standard symbols for sites, a layout template with title, source, scale and north arrow, and the required attribution, makes every map recognisable and honest.

                ## Milestones
                1. Sequential, diverging and categorical palettes chosen and tested for colour blindness.
                2. Standard symbols for sites, competitors and customers defined.
                3. A layout template with title, legend, scale, source line and attribution saved in the GIS.
                4. The guide reviewed once a quarter against maps actually produced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page map style guide and a saved layout template exist, and the last three published maps follow both."
                cadence: rolling
              tasks:
                - "Pick sequential, diverging and categorical palettes and test them for colour blindness"
                - "Define symbols for own sites, competitors and customers"
                - "Save a layout template with title, legend, scale, source and attribution"
                - "Compare recent maps against the style guide and update it @recurring(quarterly)"
            - name: Location data licence and attribution log
              description: |-
                ## Purpose
                Map data carries obligations: OpenStreetMap needs attribution and share-alike care, commercial basemaps limit printing and caching, and some boundary files forbid redistribution. Logging each layer's licence and the exact attribution line, and reviewing it quarterly, stops a published report or client deliverable from breaching terms nobody remembered.

                ## Milestones
                1. Every layer's licence type and required attribution line recorded.
                2. Layers that cannot be redistributed or printed clearly flagged.
                3. The attribution lines added to the map layout template.
                4. Licences reviewed each quarter for new layers and changed terms.

                ## Notes
                This log covers obligations specific to map layers and basemaps. Read the licence itself when in doubt and ask your legal contact before publishing anything restricted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every layer in the source register has a licence and attribution line recorded, reviewed within the last quarter."
                cadence: rolling
              tasks:
                - "Record the licence and attribution line for each layer in use"
                - "Flag layers that may not be redistributed, cached or printed"
                - "Add required attribution lines to the map layout template"
                - "Check new layers and changed basemap terms against the log @recurring(quarterly)"
            - name: Quarterly coverage gap review
              description: |-
                ## Purpose
                Coverage shifts as people move, sites close and roads change, so a gap found once is not a gap fixed. Reviewing each quarter which areas fall outside an agreed travel time or distance of a site, and how many people or customers live there, keeps the gap list current and gives planners a short, dated list to act on.

                ## Milestones
                1. A coverage standard agreed, such as share of population within 20 minutes of a site.
                2. Areas outside the standard mapped with population or customer counts.
                3. The gap list compared with the previous quarter, with new and closed gaps noted.
                4. The top three gaps sent to the planning owner with the figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated gap list with counts is produced every quarter, compared with the last, and the top three gaps go to a named planning owner."
                cadence: cyclic
              tasks:
                - "Agree the coverage standard with the planning owner"
                - "Map areas outside the standard and count the people in them @recurring(quarterly)"
                - "Send the top three gaps and their counts to the planning owner"
                - "Revisit whether the coverage standard is still the right one @recurring(yearly)"
            - name: Shared spatial query and snippet library
              description: |-
                ## Purpose
                Analysts write the same buffer, nearest-neighbour and point-in-polygon code again and again, each with slightly different handling of reference systems. A shared library of tested snippets, each with a sentence on when to use it and which reference system it expects, makes spatial work faster and the answers consistent between colleagues.

                ## Milestones
                1. Ten common operations written as tested snippets in one shared repository.
                2. Each snippet documented with inputs, expected reference system and an example.
                3. Colleagues pointed to the library and asked to add their own.
                4. Outdated or duplicated snippets cleared out monthly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared repository holds at least ten documented spatial snippets, each with a working example, tidied in the last month."
                cadence: rolling
              tasks:
                - "Collect the buffer, nearest-site and join code you have written before"
                - "Turn the ten most used into documented snippets with examples"
                - "Share the library link with colleagues who do spatial work"
                - "Merge duplicates and retire outdated snippets in the library @recurring(monthly:25)"
            - name: Location privacy rules for maps and exports
              description: |-
                ## Purpose
                Home addresses, patient locations and phone location trails can identify people even without names, and a dot map of customers in a village is effectively a list of households. Written rules on minimum counts per area, aggregation to grids or regions, jittering and who may see point-level data protect the people in the data and the organisation that holds it.

                ## Milestones
                1. Location data types classified by sensitivity, from site lists to individual home points.
                2. Minimum counts per area and an aggregation rule set for each published output.
                3. A risk register entry for each sensitive location dataset.
                4. Maps shared in the last month reviewed against the rules every month.

                ## Notes
                Start from the **Risk register** template. Agree the thresholds with your privacy or data protection lead; these rules organise their guidance, they do not replace it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written location privacy rules with minimum counts are agreed with the privacy lead, and every map shared in the past month has been checked against them."
                cadence: rolling
              tasks:
                - "List the location datasets you hold and rate each by sensitivity"
                - "Agree minimum counts per area with your privacy lead"
                - "Add each sensitive location dataset to the risk register"
                - "Check maps and exports shared in the last month against the rules @recurring(monthly:12)"
            - name: Projections and distortion through hands-on exercises
              description: |-
                ## Purpose
                Projections feel abstract until you watch Greenland shrink to its true size or measure a buffer that turns into an egg. Working through a few short exercises, comparing area, distance and shape across three projections for your own region, builds the intuition that stops reference system mistakes far better than reading about them.

                ## Milestones
                1. The same country polygon measured for area in three different projections.
                2. A 10 kilometre buffer drawn in degrees and in metres and compared.
                3. Equal-area, conformal and equidistant projections explained in your own words.
                4. A short note on which projection suits which kind of map in your work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three projection exercises are completed on your own region's data and a one-page note explains which projection to use for which map."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Measure the area of one country in three projections"
                - "Draw a 10 kilometre buffer in degrees and in metres and compare"
                - "Write the difference between equal-area, conformal and equidistant in your own words"
                - "Write which projection suits each kind of map you make"
            - name: Spatial SQL fundamentals
              description: |-
                ## Purpose
                Querying geometry with SQL opens up joins and distance filters on tables far too big for a desktop GIS. Learning the dozen functions that do most of the work, such as containment, intersection, buffers, distance within a radius and nearest neighbour, on your own data, turns spatial questions into queries anyone on the team can review.

                ## Milestones
                1. Containment, intersection and distance functions used on your own tables.
                2. A nearest-site query written that uses the spatial index.
                3. A buffer and dissolve query producing a service area polygon.
                4. Five practice queries saved with comments in the shared snippet library.

                ## Notes
                Function names differ slightly between PostGIS, warehouse geography types and DuckDB spatial. Learn the concepts once and keep a translation table.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five commented spatial SQL queries covering containment, distance, nearest neighbour and buffers run correctly on your own data."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through containment and intersection on your boundary and point tables"
                - "Write a query returning customers within a set radius of each site"
                - "Write a nearest-site query and confirm it uses the spatial index"
                - "Save five practice queries with comments to the snippet library"
            - name: Python geospatial stack in practice
              description: |-
                ## Purpose
                Python with GeoPandas, Shapely and a raster library covers reading, reprojecting, joining, buffering and plotting in a way that can be rerun next month. Building one small end-to-end analysis, from raw address file to a mapped result, teaches the stack in the order you will actually use it.

                ## Milestones
                1. An environment with GeoPandas, Shapely, a raster library and a plotting library installed and pinned.
                2. A notebook that reads, reprojects and joins two of your own layers.
                3. A buffer and summary analysis producing a table and a map.
                4. The notebook rerun from a clean start to prove it works end to end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook reproduces a full read, reproject, join, buffer and map analysis on your own data from a clean environment."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Create a pinned environment with GeoPandas, Shapely and a raster library"
                - "Read and reproject two of your own layers in a notebook"
                - "Buffer the sites, join customers and plot the result"
                - "Restart the notebook and run it top to bottom"
            - name: Honest choropleth maps and the areal unit problem
              description: |-
                ## Purpose
                Choropleth maps mislead in predictable ways: raw counts that just show where people live, large empty rural regions dominating the eye, class breaks chosen to tell a story, and results that change when the same data is aggregated to different units. Learning to normalise, choose classes deliberately and test a second set of boundaries makes regional maps say what the data says.

                ## Milestones
                1. One map redrawn from counts to a rate per person or per household.
                2. The same data shown with equal interval, quantile and natural breaks classes, and one chosen with a reason.
                3. The analysis rerun on a second set of boundaries to show the modifiable areal unit effect.
                4. A short checklist for choropleths added to the map style guide.

                ## Notes
                If a region's rate rests on very few cases, show it greyed or suppressed. A dark colour on five people is noise, not a finding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One regional map is rebuilt with normalised rates, a justified class scheme and a second boundary comparison, and a choropleth checklist is in the style guide."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Redraw one count map as a rate per resident or household"
                - "Compare three classification methods and record your choice"
                - "Rerun the map on a different boundary set and note the changes"
                - "Add a choropleth checklist to the map style guide"
            - name: Spatial autocorrelation and hot spot statistics
              description: |-
                ## Purpose
                Clusters jump out of every map, including ones made from random data, so spotting a hot spot by eye proves little. Learning global and local measures of spatial autocorrelation, such as Moran's I and Getis-Ord statistics, with the right neighbour definition and a correction for testing many areas, separates real clustering from patterns the eye invents.

                ## Milestones
                1. A neighbour definition chosen and justified: contiguity, distance band or nearest neighbours.
                2. Global Moran's I calculated for one variable with its significance.
                3. Local hot and cold spots mapped with a multiple testing correction applied.
                4. The result compared with a map of random data to show what chance looks like.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hot spot analysis on your own data reports Moran's I, a justified neighbour definition and corrected local clusters, alongside a random-data comparison."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose and justify a neighbour definition for your regions"
                - "Calculate global Moran's I for one rate variable"
                - "Map local hot and cold spots with a multiple testing correction"
                - "Run the same analysis on shuffled data and compare the maps"
            - name: Raster data basics with elevation and land cover
              description: |-
                ## Purpose
                Elevation models, land cover grids, population surfaces and satellite bands are rasters, and they behave differently from points and polygons: resolution, cell alignment and resampling decide what any summary means. Working with one elevation and one land cover raster for your area teaches clipping, reprojecting and zonal statistics, the operations most analyses need.

                ## Milestones
                1. An elevation and a land cover raster for your area downloaded with their resolution noted.
                2. Both clipped to your study area and reprojected without misaligned cells.
                3. Zonal statistics computed for your regions, such as mean elevation or share of built-up land.
                4. The effect of resampling method on one result recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Zonal statistics from an elevation and a land cover raster are computed for your regions, with resolution and resampling choices written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download an elevation and a land cover raster for your study area"
                - "Clip and reproject both, checking cells stay aligned"
                - "Compute zonal statistics for each of your regions"
                - "Compare nearest and bilinear resampling on one result"
            - name: Road network analysis and isochrones
              description: |-
                ## Purpose
                Travel-time catchments, nearest site by road and route lengths all need a network: roads as edges with speeds, junctions as nodes and rules for one-way streets. Building a network for your area from open road data and generating isochrones teaches where network results come from, and where they go wrong, before you rely on a paid routing service.

                ## Milestones
                1. A drivable road network for your study area built from open road data.
                2. Speeds assigned by road type, with the assumption written down.
                3. Isochrones at 10, 20 and 30 minutes generated for one site.
                4. The isochrones checked against a commercial routing estimate for five trips.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Isochrones for one site are built from your own road network, with speed assumptions recorded and five trips checked against a routing service."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download the road network for your study area from open map data"
                - "Assign travel speeds by road type and record the assumption"
                - "Generate 10, 20 and 30 minute isochrones for one site"
                - "Check five trip times against a routing service"
            - name: Kernel density and spatial interpolation
              description: |-
                ## Purpose
                Kernel density surfaces turn incident or customer points into a smooth picture of concentration, and interpolation estimates values such as air quality or prices between measured locations. Both depend heavily on bandwidth and method, so practising them with deliberate parameter changes shows how much a surface is data and how much is choice.

                ## Milestones
                1. A kernel density surface made from one point layer at three bandwidths.
                2. One bandwidth chosen with the reason written down.
                3. Inverse distance weighting and kriging compared on one measured variable.
                4. Interpolation error checked by leaving out a sample of measured points.

                ## Notes
                Never present a smoothed surface without saying what bandwidth or method produced it. Different settings can create or erase an apparent hot spot.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Density surfaces at three bandwidths and two interpolation methods are compared, with a hold-out error for the chosen interpolation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Make kernel density surfaces at three bandwidths from one point layer"
                - "Write which bandwidth you would publish and why"
                - "Interpolate one measured variable with two methods"
                - "Hold out a tenth of the points and compare the prediction errors"
            - name: Hexagon grids and H3 indexing for aggregation
              description: |-
                ## Purpose
                Administrative regions vary wildly in size and change over time, which makes them poor units for comparing density. Equal-area hexagon grids, or a hierarchical index such as H3, give stable cells that join quickly, aggregate cleanly to coarser levels and hide individual locations. Learning to choose a resolution and aggregate to it gives you a neutral geography for many questions.

                ## Milestones
                1. Points indexed to hexagon cells at two resolutions.
                2. A resolution chosen that keeps most cells above your minimum count.
                3. A hexagon map compared with the same data on administrative regions.
                4. A rule written for when to use hexagons instead of official regions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One dataset is aggregated to hexagon cells at a chosen resolution meeting the minimum count, with a written rule on when hexagons replace official regions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Index one point layer to hexagon cells at two resolutions"
                - "Count how many cells fall below your minimum count at each"
                - "Map the chosen resolution beside the same data on official regions"
                - "Write the rule for when hexagons are the better unit"
            - name: Drive-time catchments for existing sites
              description: |-
                ## Purpose
                Knowing which customers each site really serves is the basis for coverage, territory and new site decisions. Building travel-time catchments for every current site, then counting customers, population and revenue inside each and in overlaps, replaces rough radius circles with areas that reflect how people actually travel.

                ## Milestones
                1. Travel-time catchments at an agreed threshold built for every current site.
                2. Customers, population and revenue counted inside each catchment.
                3. Overlaps between neighbouring catchments measured.
                4. Customers outside every catchment counted and mapped.
                5. Results shared with site managers for a reality check.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every current site has a travel-time catchment with customer, population and revenue counts, overlaps measured and reviewed by site managers."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the travel threshold and mode with the people who will use it"
                - "Build travel-time catchments for every current site"
                - "Count customers, population and revenue in each catchment and overlap"
                - "Ask two site managers whether their catchment looks right"
                - "Rebuild the catchments with the latest road network and sites @recurring(yearly)"
            - name: Site selection scoring for a new location
              description: |-
                ## Purpose
                Choosing where to open a branch, clinic, depot or store is expensive to get wrong and easy to argue about. A transparent scoring model that weights a few agreed factors, such as population in the catchment, competitor distance, access and rent, and ranks candidate sites against them, makes the decision explainable and records why the chosen site won.

                ## Milestones
                1. Four to six scoring factors agreed with the decision maker, each with a weight.
                2. Candidate sites listed and each factor measured for every one.
                3. Sites ranked, with a sensitivity check showing whether the top site changes when weights move.
                4. A two-page recommendation with maps and the scoring table delivered.
                5. The final decision and its reasons recorded.

                ## Notes
                Visit or virtually walk the top two sites before recommending. Scores miss things such as a blind junction or a closed shop frontage next door.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored and ranked list of candidate sites with a weight sensitivity check and a recorded final decision is delivered to the decision maker."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree four to six scoring factors and their weights with the decision maker"
                - "Measure every factor for each candidate site"
                - "Rank the sites and test whether the winner survives weight changes"
                - "Walk the top two sites in person or on street-level imagery"
                - "Write the two-page recommendation with maps and scores"
            - name: Choosing a geocoding service on accuracy and terms
              description: |-
                ## Purpose
                Geocoders differ in accuracy by country, in price per thousand lookups and, often decisively, in terms: some forbid storing results or using them on another provider's map. Testing two or three services on the same sample of your own addresses, and reading their terms on storage and display, picks a service you can keep using without a surprise bill or breach.

                ## Milestones
                1. A test set of 200 of your own addresses with known correct locations.
                2. Two or three services run on the same test set.
                3. Match rate, positional error and cost per thousand compared in one table.
                4. Storage and display terms for each service summarised.
                5. One service chosen and the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Include an open geocoder in the comparison; it is often good enough for town-level work.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of geocoding service rests on a 200-address test comparing match rate, error, cost and storage terms for at least two services."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a test set of 200 addresses with known correct locations"
                - "Run the test set through two or three geocoding services"
                - "Compare match rate, error in metres and cost per thousand"
                - "Read each service's terms on storing results and display"
                - "Record the chosen service and why in the purchase decision page"
            - name: Balanced sales or service territory design
              description: |-
                ## Purpose
                Territories drawn years ago by postcode or county rarely balance today's workload: one rep drives four hours a day while another covers a dense city patch with twice the accounts. Redesigning territories to balance accounts, potential and travel time, while keeping them contiguous and respecting existing relationships, gives a fairer split you can show is fair.

                ## Milestones
                1. Current territories mapped with accounts, potential and travel time for each.
                2. Balance targets agreed, such as no territory more than 15 percent above the average workload.
                3. Two or three redesign options built and scored against the targets.
                4. One option chosen with the people affected and a switchover date set.

                ## Notes
                Show how many accounts change owner under each option. Relationship disruption is a real cost the balance numbers do not capture.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A new territory map is agreed in which every territory sits within the agreed workload tolerance, with account moves listed and a switchover date set."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map current territories with accounts, potential and drive time"
                - "Agree the workload tolerance with the sales or service lead"
                - "Build two or three contiguous redesign options and score them"
                - "List the accounts that change owner under each option"
                - "Check territory balance against the latest accounts and rebalance @recurring(yearly)"
            - name: Population coverage within a travel time of services
              description: |-
                ## Purpose
                Health services, libraries, charities and retailers are often asked what share of a population lives within a given travel time of their nearest site. Answering it properly needs a population grid or small-area counts, a travel mode and a threshold, and for public services a breakdown by groups such as older people or households without a car.

                ## Milestones
                1. The population layer chosen and its year and resolution recorded.
                2. Travel mode and threshold agreed, with public transport or walking where relevant.
                3. Coverage share calculated overall and for at least two population groups.
                4. Areas with the largest uncovered populations mapped and listed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A coverage figure for the whole population and at least two groups is delivered with a map of the largest uncovered areas and the assumptions listed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a population grid or small-area counts and note its year"
                - "Agree the travel mode and threshold with the service owner"
                - "Calculate coverage overall and for two population groups"
                - "Map and list the five largest uncovered areas"
            - name: Cannibalisation check between nearby sites
              description: |-
                ## Purpose
                Two sites a few minutes apart may compete for the same customers, so a new opening can add less than its own sales suggest. Comparing customer overlap and sales trends at the existing site before and after a nearby opening shows how much was new business and how much moved across, which matters for every future spacing decision.

                ## Milestones
                1. Pairs of nearby sites listed with their opening dates and travel time apart.
                2. Customers shared between paired sites counted.
                3. Sales at the older site compared before and after the newer site opened.
                4. An estimate of transferred versus new business written for each pair.

                ## Notes
                Compare with similar sites that had no new neighbour, otherwise seasonality and market changes will be read as cannibalisation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each nearby site pair has a written estimate of transferred versus new business, based on shared customers and a before and after comparison with control sites."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List site pairs within a set travel time of each other"
                - "Count customers who used both sites in each pair"
                - "Compare older site sales before and after each opening against control sites"
                - "Write the transferred and new business estimate for each pair"
            - name: Moving from shapefiles to GeoPackage and GeoParquet
              description: |-
                ## Purpose
                Shapefiles truncate column names to ten characters, split into several files that go missing, cap file size and mangle non-English text. Moving working data to GeoPackage for desktop use and GeoParquet for large analytical tables removes those traps and makes layers faster to load and easier to share in one file.

                ## Milestones
                1. Every shapefile in active use listed with its truncated column names.
                2. Each converted to GeoPackage or GeoParquet with full column names restored.
                3. Scripts and project files repointed to the new files.
                4. Old shapefiles archived after one month without use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No active project reads a shapefile, all working layers are in GeoPackage or GeoParquet with full column names, and old files are archived."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List shapefiles in active use and their truncated column names"
                - "Convert each to GeoPackage or GeoParquet and restore column names"
                - "Repoint scripts and GIS projects to the converted files"
                - "Archive the old shapefiles once nothing has read them for a month"
            - name: New site opening or closure impact read
              description: |-
                ## Purpose
                After a site opens or closes, leaders want to know within a few months what happened to customers in its catchment: did they switch to a neighbouring site, travel further, or stop coming. Setting up the read before the date, with a baseline, a control area and the measures fixed in advance, makes the answer credible rather than a story told after the fact.

                ## Milestones
                1. The opening or closure date, catchment and control area fixed before the event.
                2. Baseline customer counts, visits and travel distances recorded for both areas.
                3. Measures read at one and three months after the event.
                4. A short readout on customer movement, travel change and net effect delivered.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A readout three months after the opening or closure compares catchment and control area against a pre-event baseline on customers, visits and travel distance."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Fix the event date, catchment and a comparable control area"
                - "Record baseline customers, visits and travel distances for both"
                - "Read the measures one month after the event"
                - "Deliver the three-month readout on customer movement and net effect"
            - name: Map pack for a planning or funding application
              description: |-
                ## Purpose
                Planning applications, grant bids and public consultations often need a small set of maps: the site in context, the people it serves, access routes and nearby facilities. Preparing them to the funder's or authority's stated format, with sources and dates on each, ahead of the deadline avoids last-minute screenshots of web maps that breach licence terms.

                ## Milestones
                1. The required map list, formats and page sizes taken from the application guidance.
                2. Each map drafted using the house layout template with sources and dates.
                3. Licence terms checked for every basemap and layer used.
                4. The pack reviewed by the application lead and submitted before the deadline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete map pack meeting the application's stated formats, with sources, dates and cleared licences, is submitted before the deadline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Extract the required maps, formats and page sizes from the guidance"
                - "Draft each map on the house layout template with source and date"
                - "Check the licence of every basemap and layer used"
                - "Get the application lead to review the pack before submission"
            - name: Field data collection day with a mobile GIS app
              description: |-
                ## Purpose
                Sometimes the location data you need does not exist: the condition of bus stops, the entrances of community buildings, trees on a street. A planned field day with a mobile GIS form, defined attributes, photos and a test run, collects consistent data in hours rather than weeks of corrections afterwards.

                ## Milestones
                1. A mobile form built with the attributes, choice lists and photo fields needed.
                2. The form tested on a short walk and corrected.
                3. Collectors briefed, routes assigned and devices charged and offline maps loaded.
                4. Collected points synced, checked for gaps and loaded into the main project.

                ## Notes
                Plan for weak signal: download offline basemaps and check the app saves records without a connection. Agree a safety check-in time for anyone working alone.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A field day is completed with every assigned route surveyed, records synced and checked, and gaps listed for follow-up."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Build the mobile form with attributes, choice lists and a photo field"
                - "Test the form on a short walk and fix what goes wrong"
                - "Assign routes, load offline maps and agree a safety check-in time"
                - "Sync and check the collected points against the assigned routes"
            - name: Conference poster or paper map figures
              description: |-
                ## Purpose
                Reviewers and conference audiences judge spatial work partly on its figures, and maps that are unreadable at print size, use a rainbow palette or lack a scale undermine good analysis. Preparing the map figures early, at the journal's or poster's dimensions, leaves time for co-authors' comments before the submission deadline.

                ## Milestones
                1. Figure size, resolution and colour requirements taken from the author guidelines.
                2. Each map exported at final size with readable labels, scale and source.
                3. Figures checked in greyscale and for colour blindness.
                4. Co-author comments addressed and final files submitted on time.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Final map figures meeting the venue's size and resolution rules, checked in greyscale, are submitted before the deadline with co-author sign-off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Copy the figure size, resolution and colour rules from the author guidelines"
                - "Export each map at final size and check labels are readable"
                - "Check every figure in greyscale and a colour blindness simulator"
                - "Send the figures to co-authors with a date for comments"
            - name: Board presentation of a location expansion plan
              description: |-
                ## Purpose
                When an expansion plan goes to a board or investment committee, the maps carry much of the argument: where demand is, where competitors sit, and why these sites. Preparing a short, consistent set of slides with the evidence, the assumptions and the risks of the chosen locations helps directors challenge the plan rather than the maps.

                ## Milestones
                1. The decision the board is asked to make written at the top of the deck.
                2. Four to six maps showing demand, competition, catchments and the proposed sites.
                3. Key assumptions and their sensitivity on one slide.
                4. A rehearsal held with the sponsor and likely questions answered in an appendix.

                ## Notes
                Ask the agent to draft a list of the ten hardest questions a director might ask about the sites, then answer each in the appendix.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board receives a deck with the decision requested, four to six evidence maps, an assumptions slide and an appendix of answered questions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the board decision being requested in one sentence"
                - "Build four to six maps of demand, competition, catchments and sites"
                - "Ask the agent to draft the ten hardest director questions about the sites"
                - "Rehearse with the sponsor and finish the appendix answers"
            - name: Reproducible spatial methods for a thesis chapter
              description: |-
                ## Purpose
                Thesis examiners and journal reviewers increasingly ask to see the code and data behind a spatial chapter, and supervisors expect methods that someone else could rerun. Structuring the chapter's analysis from the start, with raw layers kept untouched, scripted processing, recorded reference systems and a methods section written alongside the code, saves weeks at write-up.

                ## Milestones
                1. A project folder with raw, processed and output layers kept separate.
                2. Every processing step scripted, with no manual edits in the desktop GIS.
                3. Reference systems, software versions and data sources recorded in a methods log.
                4. The full analysis rerun from raw data on a second machine.
                5. A methods section draft checked by the supervisor.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The chapter's spatial analysis reruns from raw data on a second machine, and the supervisor has reviewed a methods section that matches the code."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set up separate raw, processed and output folders for the chapter"
                - "Script each processing step instead of editing layers by hand"
                - "Keep a methods log of reference systems, versions and sources"
                - "Rerun the whole analysis on a second machine"
                - "Send the methods section draft to your supervisor"
            - name: Taking over an inherited GIS folder
              description: |-
                ## Purpose
                Analysts often inherit a shared drive of project files, half-named shapefiles and maps whose sources left with the previous person. Spending a few focused weeks on an inventory, finding which layers feed live reports, and rebuilding the critical ones properly, turns an anxious hand-over into something you can maintain and explain.

                ## Milestones
                1. Every file in the inherited folder listed with its last modified date.
                2. The layers that feed live reports or recurring maps identified.
                3. Sources found for those critical layers, or replacements chosen.
                4. Critical layers rebuilt into the current toolkit and the rest archived.

                ## Notes
                Ask the previous owner, if you can reach them, for a 30 minute call with the folder open. One conversation answers questions that would take days to reverse engineer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The inherited folder is inventoried, every layer feeding a live output has a known source and a rebuilt copy, and the rest is archived."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every file in the inherited folder with its last modified date"
                - "Find which layers feed live reports or regular maps"
                - "Book a short call with the previous owner if they are reachable"
                - "Rebuild the critical layers and archive everything else"
            - name: Location analysis without dedicated GIS software
              description: |-
                ## Purpose
                Plenty of knowledge workers need a map or a distance calculation but have only a spreadsheet and a BI tool, with no budget or permission to install GIS. Using the map visuals in the BI tool, a distance formula in the spreadsheet and region codes for joins covers most simple questions, and knowing where that stops tells you when to ask for proper tools.

                ## Milestones
                1. A great-circle distance formula working in your spreadsheet on latitude and longitude columns.
                2. A filled or point map built in your BI tool from region codes or coordinates.
                3. Customers counted by region using codes rather than geometry.
                4. A short list of questions that need real GIS tools, ready for your manager.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Distances, a map and regional counts are produced with only a spreadsheet and BI tool, plus a written list of questions that need GIS software."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add a great-circle distance formula to a spreadsheet of coordinates"
                - "Build a point or filled map in your BI tool"
                - "Count customers by region using region codes"
                - "List the questions you cannot answer without GIS software"
            - name: Small-area statistics for social and health research
              description: |-
                ## Purpose
                Small-area rates of illness, crime or deprivation are unstable because a handful of cases in a small population swings the figure, and published counts are often suppressed below a threshold. Researchers working at neighbourhood level need to handle suppression honestly, smooth or pool unstable rates and report uncertainty, so that maps of disadvantage do not stigmatise places on noise.

                ## Milestones
                1. The statistics producer's suppression and disclosure rules noted for every dataset used.
                2. Areas with small denominators flagged before any rate is mapped.
                3. Unstable rates pooled over years or smoothed, with the method recorded.
                4. Confidence intervals shown or reported for every mapped rate.

                ## Notes
                Agree with your ethics board or data provider how small counts may be shown. When in doubt, aggregate further rather than publish.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every small-area rate in the study is reported with its confidence interval, follows the provider's suppression rules and uses a recorded pooling or smoothing method."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write down the suppression and disclosure rules for each dataset"
                - "Flag areas whose denominators fall below your stability threshold"
                - "Pool years or apply smoothing to unstable rates and record the method"
                - "Add confidence intervals to every mapped rate"
            - name: One-off location study for a client
              description: |-
                ## Purpose
                Consultants and freelance analysts are often hired for a single location question: where to open, how far customers come, which areas a charity misses. Agreeing scope, data, geography and licence terms in writing at the start, and handing over maps, method and data the client may legally keep, protects both sides when the study is reused a year later.

                ## Milestones
                1. A scope note naming the question, geography, data sources and deliverables, signed by the client.
                2. Licence terms checked so the client may keep and reuse every delivered layer.
                3. The analysis and maps delivered with a two-page method note.
                4. A hand-over call held and the client's questions answered in writing.

                ## Notes
                Clients often want point data back; check first whether the source licence allows it, and agree in the scope note what form it will come in.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client signs off a scope note, receives maps, method note and licensed data they may keep, and a hand-over call is held."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft a scope note with question, geography, data and deliverables"
                - "Check every source licence allows the client to keep the outputs"
                - "Deliver the maps, data and a two-page method note"
                - "Hold a hand-over call and answer follow-up questions in writing"
            - name: Geographically weighted regression for varying effects
              description: |-
                ## Purpose
                Ordinary regression assumes a relationship, such as income and spending or distance and attendance, is the same everywhere, which across a city or country it rarely is. Checking the residuals for spatial pattern, then fitting spatial lag or error models and geographically weighted regression, shows whether and where effects vary and keeps you from reporting a national average that holds nowhere.

                ## Milestones
                1. An ordinary regression fitted and its residuals tested for spatial autocorrelation.
                2. A spatial lag or spatial error model fitted where the residuals show pattern.
                3. Geographically weighted regression fitted with the bandwidth chosen by a stated criterion.
                4. Local coefficient maps interpreted with their uncertainty and limitations written down.

                ## Notes
                Local coefficients from geographically weighted regression are noisy and correlated with each other. Treat the maps as exploration, not as proof that effects differ by place.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A model comparison of ordinary, spatial and geographically weighted regression is written up with residual diagnostics, bandwidth choice and local coefficient maps with caveats."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Fit an ordinary regression and test its residuals for spatial pattern"
                - "Fit a spatial lag or spatial error model if residuals cluster"
                - "Fit geographically weighted regression and record the bandwidth criterion"
                - "Write the interpretation and limitations of the local coefficient maps"
            - name: Gravity and Huff models for market share by location
              description: |-
                ## Purpose
                Customers do not always use the nearest site: bigger or more attractive sites pull people from further away. Gravity and Huff models estimate the probability that people in each small area choose each site, from size and travel time, and can predict how share shifts if a site opens, closes or grows. Calibrating one against your own customer data shows how far to trust its forecasts.

                ## Milestones
                1. Origins, sites, attractiveness measures and travel times assembled in one table.
                2. A Huff model fitted with its distance decay parameter calibrated to observed customer origins.
                3. Predicted and observed site shares compared with the error reported.
                4. One scenario, such as a new site, run and its predicted share shifts mapped.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A Huff model calibrated to observed customer origins reports its error against actual shares and produces one mapped what-if scenario."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Build a table of origins, sites, attractiveness and travel times"
                - "Calibrate the distance decay parameter to observed customer origins"
                - "Compare predicted and actual site shares and report the error"
                - "Run and map a new site scenario"
            - name: Multi-stop route optimisation study
              description: |-
                ## Purpose
                Delivery rounds, engineer visits and home care schedules are often planned by habit, with routes that cross each other or double back. A study that rebuilds a sample of real days with a vehicle routing solver, respecting time windows and capacities, estimates how many kilometres and hours better routing would save before anyone buys a scheduling system.

                ## Milestones
                1. A sample of real days with stops, time windows, durations and vehicle limits assembled.
                2. Travel time matrices built for every stop pair in the sample.
                3. Optimised routes produced and compared with actual routes on distance and time.
                4. A short note on likely savings and the constraints the solver missed.

                ## Notes
                Show the routes to the drivers or field staff. They know the loading bay that closes at noon and the gate code that adds ten minutes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Optimised and actual routes for a sample of real days are compared on distance and time, with savings and missing constraints written up for a decision."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect stops, time windows and vehicle limits for ten real days"
                - "Build travel time matrices for each day's stops"
                - "Solve the routes and compare with what actually happened"
                - "Review the optimised routes with two drivers or field staff"
            - name: Satellite imagery change detection for land use
              description: |-
                ## Purpose
                Freely available satellite imagery can show where land has been cleared, built on or flooded between two dates, which matters for environmental research, risk assessment and planning. Comparing vegetation or water indices from cloud-free scenes, and checking the detected changes against higher resolution imagery, produces a change map you can defend without training a custom model.

                ## Milestones
                1. Two cloud-free scenes for the same season and area selected and their dates recorded.
                2. A vegetation or water index computed for both and differenced.
                3. A change threshold chosen and the change areas mapped and measured.
                4. A sample of detected changes checked against higher resolution imagery with accuracy recorded.

                ## Notes
                Use scenes from the same season, or crop cycles and wet and dry seasons will look like land use change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A change map between two same-season scenes is produced with change areas measured and accuracy checked on a sample against higher resolution imagery."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Select two cloud-free same-season scenes for your study area"
                - "Compute and difference a vegetation or water index for both"
                - "Choose a change threshold and measure the changed areas"
                - "Check 50 detected changes against higher resolution imagery"
            - name: Mobility and footfall data validation
              description: |-
                ## Purpose
                Footfall counts and anonymised mobile location panels are sold as ready answers about visits and catchments, but panel bias, device sampling and vendor modelling can distort them badly. Validating a sample against counts you trust, such as tills, ticket gates or door counters, before buying a contract shows whether the data fits your question and your places.

                ## Milestones
                1. Two or three of your sites with trusted visit counts chosen as a test set.
                2. Vendor visit estimates for the same sites and weeks obtained.
                3. Correlation and error between vendor and trusted counts calculated.
                4. The vendor's panel method and privacy safeguards summarised in writing.
                5. A buy or do not buy decision recorded with the reasons.

                ## Notes
                Ask the vendor how visitors are counted when a panel is small in your area. Rural and lower income areas are often thinly sampled.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a mobility data purchase rests on a comparison against trusted counts at two or more sites and a written summary of panel method and safeguards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose two or three sites with visit counts you trust"
                - "Request vendor estimates for the same sites and weeks"
                - "Calculate correlation and error against the trusted counts"
                - "Ask the vendor for its panel method and privacy safeguards in writing"
---

# Geospatial Analysis

This area is for researchers and analysts who need to answer questions where location matters: which customers sit inside a catchment, where the coverage gaps are, which site to open next and how far people really travel. It starts with foundations (the location question, a toolkit, coordinate rules, geocoding, boundaries and the first spatial joins), then the routines that keep layers clean, current and safe to share, the skills behind honest maps and spatial statistics, catchment, territory and site decisions, dated events such as an opening read or a poster deadline, situations for thesis writers, inheritors of old GIS folders, analysts without GIS software and consultants, and finally specialist work such as geographically weighted regression, Huff models, routing and imagery change detection.

What repeats is a weekly geometry check, monthly geocoding refreshes, location snapshots, dashboard refreshes, privacy reviews and query library tidying, quarterly reviews of coverage, licences, map style and software versions, and yearly checks for new boundary releases, refreshed catchments and rebalanced territories. The Purchase decision, Metrics log, Operational checklist and Risk register templates pair with the tool and geocoder choices, the match rate log, the geometry checks and the location privacy rules. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
