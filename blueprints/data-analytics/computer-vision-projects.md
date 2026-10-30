---
id: data-analytics.computer-vision-projects
name: Computer Vision Projects
description: "A vision task tied to a real decision, cameras and lighting surveyed on site, labelling rules and audits, leak-proof splits, honest field testing, and the routines that keep an image or video model working where it is installed."
category: business
version: 1.0.0
tags: [data-analytics, computer-vision-projects, engineer, researcher, object-detection, image-labelling, visual-inspection, edge-inference]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - reading-queue
    - metrics-log
    - meeting-notes
    - risk-register
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Computer Vision Projects
          description: "Building image and video models for tasks like detection, classification and inspection, including labelling data and testing in real conditions."
          projects:
            - name: Vision task definition and acceptance bar
              description: |-
                ## Purpose
                Most vision projects that stall were never clear on what the model must output or what happens next with that output. Classification, detection, segmentation and counting need different labels, different metrics and different budgets, and the cost of a missed defect is rarely the cost of a false alarm. Writing down the task, the decision it feeds and the accuracy the business will accept stops months of training towards the wrong target.

                ## Milestones
                1. The output type chosen (class, box, mask, count or track) with the downstream action it triggers named.
                2. The relative cost of a miss and a false alarm written down by the person who owns that downstream action.
                3. An acceptance bar agreed, such as recall of at least 95 percent on the critical class at no more than one false alarm per hour of footage.
                4. The latency and hardware limits of the place the model will run recorded beside the bar.

                ## Notes
                If nobody can say what they would do differently with a perfect prediction, pause the project. A vision model without a decision attached becomes a demo.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page task brief names the output type, the downstream action, the miss and false alarm costs and a numeric acceptance bar, signed by the action owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the person who acts on the output what they do with each prediction"
                - "Write the cost of a miss and the cost of a false alarm side by side"
                - "Agree one numeric acceptance bar for the most important class"
                - "Record the latency and hardware limits of the target location"
                - "Revisit the acceptance bar with the action owner @recurring(yearly)"
            - name: Camera, lens and lighting survey on site
              description: |-
                ## Purpose
                Images from a phone at a desk look nothing like frames from a fixed camera at the far end of a loading bay at dusk. Resolution on the object, motion blur, glare, night infrared and the angle of view decide what any model can learn, and fixing them with a lens or a lamp is often cheaper than months of modelling. A half-day survey at the real location tells you whether the task is even visible to the camera.

                ## Milestones
                1. Every camera position photographed and listed with model, resolution, frame rate and lens.
                2. The size of the target object in pixels measured at the near and far edges of the scene.
                3. Lighting recorded at three times of day, including night and direct sun where they occur.
                4. A short list of hardware changes, such as a polariser, a shorter shutter or a fixed lamp, with rough costs.

                ## Notes
                A useful rule of thumb is that a detector struggles below about 15 to 20 pixels across the object. Measure before promising anything.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A survey sheet lists every camera's specification, the target size in pixels at near and far range, and lighting at three times of day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a half day at the site with someone who knows the cameras"
                - "Photograph each camera position and note its model and settings"
                - "Measure the target object's size in pixels at near and far range"
                - "Capture sample frames in morning, midday and night light"
                - "List the cheapest hardware fixes for blur, glare and low light"
            - name: Image source and usage rights register
              description: |-
                ## Purpose
                Teams often train on scraped images, a client's footage or an open dataset with a non-commercial licence, and only find out at launch that they cannot ship the model. Images of people add consent and privacy duties on top. A register of where every image set came from, under what terms and with whose permission protects the work you are about to invest in.

                ## Milestones
                1. Every image and video source listed with its origin, owner, licence and date obtained.
                2. Sources with people, vehicles or private property in frame flagged for privacy handling.
                3. Each open dataset's licence checked for commercial use and model training terms.
                4. Doubtful sources either cleared in writing or removed from the training pool.

                ## Notes
                Licence questions are legal ones. This register organises the facts so your legal or privacy adviser can answer quickly; it does not answer for them.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rights register covers 100 percent of training images by source, with every doubtful source cleared in writing or removed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every folder and bucket of images the team has collected"
                - "Write the origin, owner and licence beside each source"
                - "Flag sources showing people or number plates for privacy review"
                - "Send the doubtful sources to your legal or privacy adviser"
                - "Recheck the register against new sources and licence changes @recurring(yearly)"
            - name: Pilot capture of five hundred real images
              description: |-
                ## Purpose
                Before labelling thousands of images, a small capture from the real cameras over real shifts shows the true class balance, the conditions that matter and how rare the interesting events are. Five hundred frames sampled across days, lighting and camera positions is usually enough to plan the labelling budget and spot a hardware problem. Teams that skip this step often discover after labelling that the positive class appears once a week.

                ## Milestones
                1. Five hundred frames sampled across at least five days, every camera and day and night conditions.
                2. Each frame tagged with camera, time and lighting in a simple index file.
                3. A rough count of how often each target class appears per hundred frames.
                4. An estimate of how many frames must be captured to reach 300 examples of the rarest important class.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pilot set of 500 indexed frames exists with per-class frequency counts and a written capture estimate for the rarest class."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set each camera to save one frame every few minutes for a week"
                - "Sample 500 frames spread across cameras, days and lighting"
                - "Tag each frame with camera, timestamp and lighting in an index"
                - "Count how often each target class appears in the sample"
                - "Estimate the capture time needed for 300 examples of the rarest class"
            - name: Labelling guideline with an edge-case gallery
              description: |-
                ## Purpose
                Two careful annotators will draw different boxes around a half-hidden pallet or argue about whether a scratch counts as a defect, and the model learns that disagreement as noise. A written guideline with box tightness rules, occlusion rules, a minimum size and a gallery of twenty hard examples settled in advance is the single biggest lever on label quality. It also gives a vendor or a new annotator something to be audited against.

                ## Milestones
                1. Class definitions written with one positive and one look-alike negative image each.
                2. Rules for box tightness, truncation, occlusion, minimum object size and crowds stated with pictures.
                3. A gallery of at least twenty edge cases, each with the agreed label and a sentence of reasoning.
                4. Two annotators labelling the same 50 images and their disagreements folded back into the guideline.

                ## Notes
                Keep an explicit ignore or unsure option. Forcing a guess on an unreadable object teaches the model to guess.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned labelling guideline with class definitions, geometry rules and at least 20 resolved edge cases is used by every annotator."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect twenty pilot images where the right label is not obvious"
                - "Write a definition and a look-alike negative for each class"
                - "Have two people label the same 50 images independently"
                - "Settle each disagreement and add it to the edge-case gallery"
                - "Add newly settled edge cases to the guideline @recurring(monthly:11)"
            - name: Choosing an annotation tool
              description: |-
                ## Purpose
                Annotation tools differ far more than their demos suggest: model-assisted pre-labelling, video interpolation, polygon editing speed, review workflows, export formats and where the images are stored. A tool that suits classification can make segmentation painfully slow, and a hosted tool may not be allowed to hold a client's footage. Comparing three options on your own pilot images, timed, avoids a costly switch halfway through labelling.

                ## Milestones
                1. Requirements written: label types, video support, review step, export format, hosting and user count.
                2. Three tools shortlisted, including at least one open source option that can run on your own servers.
                3. The same 30 pilot images labelled in each tool, with minutes per image recorded.
                4. A tool chosen with its data storage location approved by whoever owns the footage.

                ## Notes
                Start from the **Purchase decision** template. Check that exports round-trip into your training code before committing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tool decision compares three options on timed labelling of the same 30 images, with storage location approved by the data owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the label types, export format and hosting rules you need"
                - "Shortlist three annotation tools including one self-hosted option"
                - "Time the labelling of the same 30 images in each tool"
                - "Confirm each export loads cleanly into your training code"
                - "Get the data owner to approve where the chosen tool stores images"
            - name: Leak-proof splits by site, camera and scene
              description: |-
                ## Purpose
                Random splits flatter vision models badly: consecutive video frames, burst photos and repeated scenes end up on both sides, and the test score measures memory rather than skill. Splitting by site, camera, day or patient, and removing near duplicates across the boundary, gives a test score that predicts what happens on a new camera. Locking the test set now also stops it slowly turning into training data.

                ## Milestones
                1. A grouping key chosen (site, camera, recording session or subject) and the reason written down.
                2. Near-duplicate images detected with perceptual hashing or embeddings and kept on one side of each split.
                3. Train, validation and test sets created with class counts recorded for each.
                4. The test set frozen, versioned and read-only to everyone training models.

                ## Notes
                If you will deploy to new sites, hold at least one whole site out of training entirely. That is the score that matters.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Versioned splits grouped by a written key, with near duplicates confined to one side and a frozen read-only test set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide which grouping key matches how the model will meet new data"
                - "Run a near-duplicate check across the whole image pool"
                - "Build the three splits so no group or duplicate crosses a boundary"
                - "Record class counts for train, validation and test"
                - "Make the test set read-only and note its version"
            - name: Pretrained model baseline before custom training
              description: |-
                ## Purpose
                An off-the-shelf detector or a general image model with a simple linear head often gets surprisingly close on day one, and sometimes close enough. Measuring that baseline on your frozen test set sets the bar every custom model must beat and shows which classes are genuinely hard. It also gives stakeholders a realistic first number instead of a promise.

                ## Milestones
                1. One public pretrained detector or classifier run on the frozen test set without fine-tuning.
                2. A linear probe or light fine-tune on frozen pretrained features evaluated on the same set.
                3. Per-class results recorded, with the three hardest classes named.
                4. The baseline numbers written into the project brief as the bar to beat.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Zero-shot and linear-probe baselines are recorded per class on the frozen test set and written into the brief as the bar to beat."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick one widely used pretrained model suited to your output type"
                - "Run it on the frozen test set and save per-class results"
                - "Train a linear probe on frozen features and evaluate it"
                - "Write the baseline numbers into the project brief"
            - name: GPU budget and experiment tracking set-up
              description: |-
                ## Purpose
                Vision training burns compute quickly, and a month of untracked runs leaves nobody able to say which settings produced the best model or what it cost. Setting a monthly GPU budget, choosing where jobs run and logging every run's data version, config, metrics and sample predictions turns experiments into a record you can return to. It also makes the cost of each extra point of accuracy visible.

                ## Milestones
                1. A monthly GPU budget agreed, with the cost per training run estimated.
                2. Training location chosen: local workstation, shared cluster or rented cloud instances.
                3. An experiment tracker logging dataset version, config, metrics and sample prediction images for every run.
                4. A naming rule for runs and a place where the current best model is recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every training run in a month is logged with data version, config and metrics, and spend stays within the agreed GPU budget."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate the GPU hours and cost of one full training run"
                - "Agree a monthly compute budget with whoever pays for it"
                - "Set up an experiment tracker that logs data version and sample predictions"
                - "Write the run naming rule in the project readme"
                - "Compare last month's GPU spend with the budget @recurring(monthly:2)"
            - name: Weekly labelling quality audit
              description: |-
                ## Purpose
                Label quality drifts quietly as annotators speed up, new people join or a guideline change is missed. A weekly audit of a small random sample, rechecked by a senior labeller and scored for missed objects, wrong classes and sloppy boxes, catches the drift while it is still cheap to fix. The audit scores also tell you which classes need a clearer rule.

                ## Milestones
                1. A sample size fixed, such as 2 percent of the week's labels or at least 50 images.
                2. An error scheme with missed object, wrong class, poor geometry and wrong attribute.
                3. Weekly error rates recorded per annotator and per class.
                4. A threshold agreed at which a batch is sent back for relabelling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly audits are recorded with error rates per class, and every batch above the threshold has been relabelled."
                cadence: rolling
              tasks:
                - "Agree the audit sample size and the relabel threshold"
                - "Write the four error types into the audit sheet"
                - "Audit a random sample of this week's labels and log error rates @recurring(weekly:thu)"
                - "Send batches above the threshold back with examples"
            - name: Active learning queue for the next labelling batch
              description: |-
                ## Purpose
                Labelling images at random spends most of the budget on easy examples the model already gets right. Choosing each batch from frames where the model is uncertain, where models disagree, or where embeddings sit far from the training set usually buys more accuracy per labelled image. A monthly queue makes this a routine rather than an occasional clever idea.

                ## Milestones
                1. A pool of unlabelled frames refreshed from production or recent capture.
                2. A selection rule written, mixing uncertainty sampling with some random frames to avoid blind spots.
                3. Each monthly batch sent for labelling with the reason each frame was selected.
                4. The accuracy gain per batch compared with an equal-sized random batch at least once.

                ## Notes
                Keep around 20 percent of each batch random. Pure uncertainty sampling can chase noise and miss whole conditions the model is confidently wrong about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly batches selected by a written rule, with one comparison against a random batch recorded."
                cadence: rolling
              tasks:
                - "Write the selection rule and the share of random frames"
                - "Score the unlabelled pool and select the next batch @recurring(monthly:9)"
                - "Compare one active batch against a random batch of equal size"
                - "Record the selection reason for each frame sent to labelling"
            - name: Monthly failure gallery review
              description: |-
                ## Purpose
                Aggregate metrics hide the pattern in the mistakes: every miss at dusk, every false alarm on a reflective surface, every confusion between two similar parts. A gallery of the worst errors, reviewed once a month with someone who knows the domain, turns numbers into a list of fixable causes. Most of the useful improvements in a vision project start here.

                ## Milestones
                1. A script that pulls the highest-confidence false positives and the most confident misses from the latest evaluation.
                2. Each error tagged with a cause such as lighting, occlusion, label error, small object or look-alike.
                3. Cause counts tracked month to month.
                4. One action per month taken against the largest cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews recorded, each with tagged error causes and one action taken against the largest cause."
                cadence: rolling
              tasks:
                - "Write a script that exports the 50 worst errors as an image grid"
                - "Agree a short list of cause tags with the domain expert"
                - "Review the failure gallery and tag each error's cause @recurring(monthly:14)"
                - "Pick one fix for the largest cause and record it"
            - name: Versioned dataset releases with release notes
              description: |-
                ## Purpose
                When images, labels and guidelines change every week, nobody can say which data a model was trained on or why its score moved. Freezing the dataset into named releases, each with a manifest, class counts and a note of what changed, makes every result reproducible and every regression traceable. It also lets a researcher cite exactly what they used.

                ## Milestones
                1. A manifest format listing every image, its label file, split and source.
                2. Release one frozen with class counts and the guideline version it used.
                3. A release note template: images added, labels fixed, classes changed, known issues.
                4. Every trained model linked to the dataset release it used.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three dataset releases exist with manifests and release notes, and every current model names its release."
                cadence: rolling
              tasks:
                - "Choose a data versioning tool or a manifest and checksum approach"
                - "Freeze the current images and labels as release one"
                - "Write the release note template"
                - "Cut a new dataset release with notes and class counts @recurring(quarterly)"
            - name: Production frame sampling and human review
              description: |-
                ## Purpose
                Test sets age the moment a model goes live: seasons change, a camera is bumped, a new product appears on the line. Sampling a few hundred live frames each week and having a person label them blind gives a running field accuracy figure that no offline score can. It is the earliest warning that the model needs attention.

                ## Milestones
                1. A sampler saving a fixed number of random and low-confidence frames from each camera.
                2. A blind review step where the reviewer labels frames without seeing the prediction.
                3. Weekly field precision and recall recorded per camera in a log.
                4. An alert threshold agreed at which the team investigates.

                ## Notes
                Start from the **Metrics log** template. Separate random frames from low-confidence ones in the log, or the field score will look worse than it is.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of field precision and recall are logged per camera from blind-reviewed samples, with any breach of the threshold investigated."
                cadence: rolling
              tasks:
                - "Set up a sampler that saves random and low-confidence frames per camera"
                - "Create a field accuracy log from the metrics log template"
                - "Blind-review this week's sample and log precision and recall @recurring(weekly:tue)"
                - "Agree the field score that triggers an investigation"
            - name: Camera health and image quality checks
              description: |-
                ## Purpose
                Many apparent model failures are camera failures: a smeared lens, a spider web, a focus shift after cleaning, a bumped mount or a sensor turning pink. Simple automatic checks for blur, brightness, colour cast and scene shift against a reference frame catch these within a day, and a monthly visual check catches the rest. The site team fixes cameras far faster when told exactly which one and why.

                ## Milestones
                1. A reference frame saved for every camera in good conditions.
                2. Automatic checks for blur, exposure, colour cast and scene shift running on each camera.
                3. A named contact on site for cleaning and remounting cameras.
                4. A monthly sheet of camera issues raised and fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every camera has a reference frame and automated quality checks, and six months of camera issues are logged with fix dates."
                cadence: rolling
              tasks:
                - "Save a clean reference frame for each camera"
                - "Add blur, exposure and scene shift checks to the inference pipeline"
                - "Agree a site contact for cleaning and remounting cameras"
                - "Compare each camera's latest frame with its reference @recurring(monthly:17)"
            - name: Evaluation report and model card per release
              description: |-
                ## Purpose
                Shipping a model with only a single headline score invites people to use it where it was never tested. A short report for each release, with per-class and per-condition results, the dataset release, the known failure modes and the conditions it should not be used in, gives operators and reviewers what they need. Writing it every time also makes regressions obvious.

                ## Milestones
                1. A report template with per-class, per-camera and per-condition results.
                2. A limitations section listing conditions the model was not tested on.
                3. The first report written for the current model and stored with it.
                4. A rule that no model ships without a completed report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every model release in the past six months has a stored report with per-condition results and a limitations section."
                cadence: rolling
              tasks:
                - "Draft the report template with per-condition result tables"
                - "Ask the agent to draft the limitations section from the failure gallery tags"
                - "Complete the report for the model currently in use"
                - "Review the limitations section against recent field findings @recurring(quarterly)"
            - name: Labelling supplier management
              description: |-
                ## Purpose
                An outside labelling team can multiply throughput, but only if quality, turnaround and data handling are managed like any other supplier. Clear statements of work tied to your guideline, agreed audit thresholds, a security review for sensitive footage and a monthly scorecard keep the relationship honest. Without these, rework quietly eats the savings.

                ## Milestones
                1. A statement of work referencing the guideline version, label types, turnaround and acceptance thresholds.
                2. The supplier's data handling and access controls reviewed before any footage is shared.
                3. A monthly scorecard of volume, turnaround, audit error rate and rework.
                4. An exit plan covering label export and deletion of your images.

                ## Notes
                Start from the **Vendor** template. Pay for a paid pilot batch of a few hundred images before signing anything long term.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed statement of work with acceptance thresholds exists, and six monthly supplier scorecards are recorded."
                cadence: rolling
              tasks:
                - "Create a supplier record from the vendor template"
                - "Run a paid pilot batch and audit it against the guideline"
                - "Review the supplier's data handling before sharing footage"
                - "Score the supplier on turnaround, error rate and rework @recurring(monthly:25)"
            - name: Face and number plate blurring for stored footage
              description: |-
                ## Purpose
                Cameras pointed at a yard, a street or a shop floor capture people who never agreed to be in a training set. Blurring faces and number plates before footage is stored or labelled, keeping raw video only as long as needed and limiting who can see it, reduces the harm if anything leaks and is often what makes the project acceptable to staff. It needs to be built in early, not bolted on.

                ## Milestones
                1. The privacy duties for this footage confirmed with your privacy adviser or data protection lead.
                2. A blurring step applied to faces and number plates before images reach labelling.
                3. A retention period for raw footage agreed and enforced by an automatic purge.
                4. Access to unblurred footage limited to named people.

                ## Notes
                Check the blurring itself: sample frames regularly, since a face detector that misses side profiles leaves people identifiable.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All footage reaching labelling is blurred, raw footage is purged on an agreed schedule, and four quarterly checks of blur misses are recorded."
                cadence: rolling
              tasks:
                - "Ask your privacy lead what applies to footage from these cameras"
                - "Add a face and plate blurring step before images are labelled"
                - "Set an automatic purge for raw footage past the retention period"
                - "Sample blurred frames for missed faces and confirm the purge ran @recurring(quarterly)"
            - name: Detection metrics beyond a single mAP score
              description: |-
                ## Purpose
                Mean average precision averages over classes, IoU thresholds and confidence levels, so two models with the same score can behave very differently at the threshold you will actually run. Understanding precision recall curves, IoU choices, per-size results and the confusion between classes lets you pick the metric that matches your acceptance bar. It also stops arguments with stakeholders about what a number means.

                ## Milestones
                1. Precision, recall, IoU and average precision explained in your own words in a one-page note.
                2. Per-class precision recall curves plotted for your current model.
                3. Results split by small, medium and large objects.
                4. One operating point chosen and reported as precision and recall at a fixed threshold.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page metrics note exists, and the model's results are reported per class, per object size and at a fixed operating threshold."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read how the evaluation library you use computes average precision"
                - "Plot precision recall curves per class for the current model"
                - "Split results by object size and note where accuracy falls"
                - "Report precision and recall at the threshold you would deploy"
            - name: Augmentation matched to real-world conditions
              description: |-
                ## Purpose
                Default augmentation recipes flip, crop and jitter colours whether or not those changes happen at your site, and some, like horizontal flips for text or left and right parts, actively teach the wrong thing. Designing augmentations from the camera survey, such as motion blur, compression artefacts, rain, glare and low light, closes the gap between training and field images. Each one should earn its place with an ablation.

                ## Milestones
                1. A list of real variations seen on site, taken from the survey and failure gallery.
                2. Augmentations that break the task's meaning removed from the pipeline.
                3. Each new augmentation tested in an ablation against the frozen test set.
                4. The final augmentation set documented with the gain each one gave.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An augmentation list with an ablation result for each item is documented, and no augmentation remains that contradicts the task."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the variations the cameras really see from the site survey"
                - "Remove any default augmentation that changes the meaning of a label"
                - "Add blur, compression and low-light augmentations one at a time"
                - "Record the test score change for each augmentation"
            - name: Fine-tuning recipes for small labelled sets
              description: |-
                ## Purpose
                Most real vision projects have hundreds, not millions, of labelled images, and the training choices that matter change at that scale. Learning rate schedules, which layers to freeze, input resolution, class balancing and early stopping decide whether a pretrained model adapts or overfits. Working through them on your own data builds the judgement to train new models quickly later.

                ## Milestones
                1. A fixed training budget and the frozen validation set chosen for every comparison.
                2. Frozen backbone, partial unfreezing and full fine-tuning compared.
                3. Two input resolutions compared for the smallest important objects.
                4. A written default recipe the team uses for the next model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written default fine-tuning recipe is backed by logged comparisons of freezing strategy and input resolution on the same validation set."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Fix the training budget and validation set for all comparisons"
                - "Compare frozen, partly frozen and fully fine-tuned runs"
                - "Try a higher input resolution for the smallest objects"
                - "Write the winning settings as the team's default recipe"
            - name: Segmentation masks and boundary quality
              description: |-
                ## Purpose
                When the task needs area, shape or the exact edge of a crack, a bounding box is not enough, but masks cost several times more to label and are judged by different metrics. Learning when to use semantic, instance or panoptic segmentation, how to label masks efficiently with model assistance, and why boundary metrics matter for thin structures saves both budget and disappointment.

                ## Milestones
                1. A decision note on whether boxes, semantic masks or instance masks fit the task.
                2. Model-assisted mask labelling tried on 50 images with minutes per image recorded.
                3. Mask IoU and a boundary-focused metric computed for one trained model.
                4. Thin or small structures checked separately, since overall IoU hides them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written choice of output type is supported by timed mask labelling on 50 images and region and boundary metrics on one model."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down whether the task needs area, shape or only location"
                - "Label 50 images with model-assisted masks and time it"
                - "Compute mask IoU and a boundary metric for one model"
                - "Check results on thin and small structures separately"
            - name: Tracking and temporal smoothing for video
              description: |-
                ## Purpose
                Per-frame predictions on video flicker: an object appears, vanishes for a frame and is counted twice. Adding a tracker, smoothing predictions over a short window and deciding when a track counts as an event turn noisy frames into stable counts and alerts. Learning how trackers fail on occlusion and crossing paths matters as much as the detector itself.

                ## Milestones
                1. A simple tracking-by-detection method running on recorded footage.
                2. Track identity switches and fragmentation counted on a labelled clip.
                3. An event rule written, such as an object present in at least 8 of 10 frames.
                4. Counts or alerts compared before and after tracking on the same footage.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tracked and untracked outputs are compared on the same labelled clip, with identity switches counted and an event rule written."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Label object identities on one short representative clip"
                - "Run a standard tracker on the detector's outputs"
                - "Count identity switches and broken tracks on the clip"
                - "Write the rule for when a track becomes an event"
            - name: Per-class confidence thresholds and calibration
              description: |-
                ## Purpose
                One global threshold of 0.5 is almost never right: rare critical classes usually need a lower threshold and noisy classes a higher one. Calibrating confidence scores and setting thresholds per class from the miss and false alarm costs ties the model's behaviour directly to the acceptance bar. Reviewing them each quarter keeps them right as data and models change.

                ## Milestones
                1. A calibration curve for the current model on the validation set.
                2. Temperature scaling or a similar fix applied if scores are badly calibrated.
                3. Per-class thresholds chosen from the written miss and false alarm costs.
                4. Thresholds stored in configuration with the date and reason, not hard-coded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Per-class thresholds are stored in configuration with a recorded rationale tied to the acceptance bar, and reviewed each quarter."
                cadence: rolling
              tasks:
                - "Plot the calibration curve on the validation set"
                - "Apply temperature scaling if confidence is badly calibrated"
                - "Set each class's threshold from the miss and false alarm costs"
                - "Review per-class thresholds against field results @recurring(quarterly)"
            - name: Reproducing one published vision result
              description: |-
                ## Purpose
                Reading papers is easy; knowing which claims survive contact with your data is not. Reproducing the key table of one relevant paper, on its benchmark and then on your own images, teaches the training details papers leave out and shows how much of a reported gain transfers. A monthly reading habit around it keeps a researcher or engineer current without chasing every release.

                ## Milestones
                1. A reading list of ten papers relevant to your task, ranked by likely value.
                2. One paper's headline result reproduced within a stated tolerance on its own benchmark.
                3. The same method tried on your frozen test set.
                4. A short write-up of what transferred, what did not and the missing details.

                ## Notes
                Start from the **Reading queue** template. Choose a paper with released code for the first reproduction.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One paper's result is reproduced on its benchmark and tested on your data, with a written note on what transferred."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Start a reading queue of ten papers close to your task"
                - "Choose one with released code and a clear headline table"
                - "Reproduce the headline result on its original benchmark"
                - "Run the method on your own frozen test set"
                - "Read and summarise one paper from the queue @recurring(monthly:28)"
            - name: Long-tail and small-object classes
              description: |-
                ## Purpose
                The classes people care most about are often the rarest and the smallest: a hairline crack, a distant pedestrian, a rare species. Overall accuracy improves while these stay poor unless they get targeted treatment such as tiling, higher resolution, resampling, loss reweighting or copy-paste augmentation. Learning which of these work for your data focuses effort where the risk sits.

                ## Milestones
                1. Classes ranked by frequency and by object size, with the weakest five named.
                2. Two techniques tried for rare classes, such as resampling and loss reweighting.
                3. Two techniques tried for small objects, such as tiling and higher input resolution.
                4. Per-class results before and after recorded, with overall accuracy checked for loss.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Results for the five weakest classes are recorded before and after at least four targeted techniques, with overall accuracy checked."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Rank classes by frequency and median object size"
                - "Try resampling and loss reweighting for the rarest classes"
                - "Try tiled inference and a higher resolution for small objects"
                - "Record before and after results for the five weakest classes"
            - name: Architecture shortlist for accuracy against latency
              description: |-
                ## Purpose
                Picking the model family that topped a leaderboard ignores the frames per second, memory and hardware you actually have. Benchmarking three candidate architectures at two sizes each on your data and your target device gives an accuracy against latency curve to choose from. The choice then rests on numbers both engineers and the budget holder can read.

                ## Milestones
                1. Latency, memory and frame rate limits written from the task brief.
                2. Three architecture families shortlisted with two sizes each.
                3. Each trained with the default recipe and timed on the target device.
                4. An accuracy against latency chart and a written choice.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chart of accuracy against measured device latency for six candidate models supports a written architecture choice."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Copy the latency and memory limits from the task brief"
                - "Shortlist three architecture families with two sizes each"
                - "Train each candidate with the default recipe"
                - "Time each model on the target device, not a desktop GPU"
                - "Chart accuracy against latency and write the choice"
            - name: Build, buy or vision API decision
              description: |-
                ## Purpose
                General cloud vision APIs, specialist inspection products and an in-house model each win in different situations. An API is fast to try but may not see your defect type and charges per image forever; a product brings support but limits change; building gives control at the cost of a team. Comparing them on your own test images and a three-year cost avoids sinking a year into the wrong path.

                ## Milestones
                1. Two external options run on the same 200 test images as your own baseline.
                2. Three-year cost estimated for each, including per-image fees, hardware and staff time.
                3. Data handling terms checked for whether images leave your premises or are used for training.
                4. A decision recorded with the conditions that would reopen it.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least two external options and an in-house model on the same 200 images and on three-year cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick 200 test images that cover the hardest conditions"
                - "Run two external vision services or products on them"
                - "Estimate three-year cost for each option and for building"
                - "Check whether each provider stores or trains on your images"
                - "Record the decision and what would make you revisit it"
            - name: Synthetic data trial with a measured gain
              description: |-
                ## Purpose
                Rendered images, simulated scenes and generated defects promise endless labels, but the gap between synthetic and real pixels often wipes out the gain. A controlled trial, mixing synthetic images into training at a few ratios and scoring only on real test images, shows whether it helps your task. Rare defects and dangerous scenarios are where it most often pays off.

                ## Milestones
                1. A target named where real data is scarce, such as a rare defect or a hazardous event.
                2. A synthetic set of at least 1,000 images produced by rendering, simulation or generation.
                3. Models trained at three synthetic to real ratios and scored on real test images only.
                4. A decision to adopt, extend or drop synthetic data, with the measured difference.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three synthetic to real training ratios are scored on the real test set, and a recorded decision cites the measured difference."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Name the class or scenario where real examples are scarcest"
                - "Produce at least 1,000 synthetic images for that target"
                - "Train at three synthetic to real ratios"
                - "Score each model on real test images only and record the decision"
            - name: Edge or cloud inference decision
              description: |-
                ## Purpose
                Running the model beside the camera keeps video on site and cuts bandwidth, but limits model size and makes updates harder; sending frames to the cloud is simpler to run but depends on the connection and costs per frame. The right answer depends on frame rate, uplink speed, privacy rules and how fast an alert must arrive. Deciding with real numbers now shapes the architecture and the hardware order.

                ## Milestones
                1. Uplink bandwidth and reliability measured at the site over a week.
                2. End-to-end alert latency required by the task written down.
                3. Monthly cost estimated for cloud inference and for edge devices over three years.
                4. A decision recorded, including any hybrid split such as edge filtering with cloud review.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded edge, cloud or hybrid decision cites measured site bandwidth, the required alert latency and a three-year cost comparison."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure upload bandwidth at the site for a week"
                - "Write down how quickly an alert must reach someone"
                - "Price cloud inference per month and edge hardware over three years"
                - "Check whether privacy rules allow frames to leave the site"
                - "Record the decision and the hardware it implies"
            - name: Quantisation and compilation for the target device
              description: |-
                ## Purpose
                Forty frames per second on a workstation can become four on an edge box or a phone. Converting to the device's runtime, quantising to lower precision with a calibration set and checking accuracy on the frozen test set often gives several times the speed for a small, measured loss. The loss must be checked per class, because quantisation tends to hurt the rarest classes first.

                ## Milestones
                1. The model exported to the target device's runtime and running end to end.
                2. A calibration set of a few hundred representative frames chosen for quantisation.
                3. Latency, memory and per-class accuracy compared at full and reduced precision.
                4. A deployable build chosen, with the accuracy cost recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A quantised build runs on the target device with measured latency and per-class accuracy recorded against the full precision model."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Export the current model to the device's runtime format"
                - "Choose a few hundred calibration frames across all conditions"
                - "Quantise the model and measure latency on the device"
                - "Compare per-class accuracy at full and reduced precision"
            - name: Label error hunt in the training set
              description: |-
                ## Purpose
                Public benchmarks have been found to carry several percent wrong labels, and private datasets labelled in a hurry are often worse. Using the model's own disagreements, cross-validated predictions and embedding outliers to rank suspect labels, then fixing the top few hundred by hand, can give a bigger gain than a new architecture. It also improves the test set's credibility.

                ## Milestones
                1. Out-of-fold predictions produced for every training image.
                2. Images ranked by how strongly the model disagrees with the label.
                3. The top 300 suspects reviewed against the guideline and corrected where wrong.
                4. The model retrained on cleaned labels and the gain recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least 300 suspect labels are reviewed with the error rate recorded, and a retrained model's score on the frozen test set is compared."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Produce out-of-fold predictions for the whole training set"
                - "Rank images by disagreement between prediction and label"
                - "Review the top 300 against the guideline and fix errors"
                - "Retrain on the cleaned labels and compare test scores"
            - name: Low-confidence review queue for operators
              description: |-
                ## Purpose
                No vision model is right all the time, and the frames it is unsure about are exactly where a person adds most value. Routing low-confidence predictions to a queue where an operator confirms or corrects them protects the downstream decision and produces fresh labels for free. The queue has to be small enough that operators actually clear it.

                ## Milestones
                1. A confidence band chosen that sends a manageable number of frames per shift to review.
                2. A review screen with the frame, the prediction and one-click confirm or correct.
                3. Operator corrections flowing into the next labelling batch.
                4. Queue size, time to clear and correction rate reported weekly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Operators clear the review queue within each shift for four weeks, and their corrections feed the next dataset release."
                cadence: rolling
              tasks:
                - "Ask operators how many frames per shift they can realistically check"
                - "Set the confidence band to match that number"
                - "Build a review screen with confirm and correct buttons"
                - "Report queue size, clearing time and correction rate @recurring(weekly:mon)"
            - name: Adding a new class without losing the old ones
              description: |-
                ## Purpose
                Sooner or later someone asks for one more class: a new product variant, a new defect type, a new vehicle. Fine-tuning on the new class alone usually makes the model forget the old ones, and old images were never labelled for the new class, so they now teach it to ignore it. Planning the relabelling, the training mix and a regression check keeps the existing service intact.

                ## Milestones
                1. The new class defined in the guideline with look-alike negatives.
                2. Existing images that may contain the new class found and relabelled.
                3. A training mix of old and new data that keeps every existing class represented.
                4. Old class results compared before and after, with no class falling below its threshold.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new class meets its target while every existing class stays above its acceptance threshold on the frozen test set."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Add the new class and its look-alikes to the guideline"
                - "Search existing images for unlabelled instances of the new class"
                - "Retrain on a mix that keeps every old class represented"
                - "Check every old class against its threshold after retraining"
            - name: Shadow-mode pilot at one site
              description: |-
                ## Purpose
                Running the model live beside the existing process, without anyone acting on its output, is the safest way to learn how it behaves on real cameras, shifts and edge cases. Two to four weeks of shadow running, compared against what people actually found, gives an honest field score and builds trust with the site team. It also surfaces practical problems like camera outages and network gaps.

                ## Milestones
                1. One site, its cameras and a start and end date agreed with the site manager.
                2. The model running live with every prediction stored and nobody acting on it.
                3. Model outputs compared with the existing process's findings each week.
                4. A pilot summary with field precision, recall, uptime and the top five problems.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot of at least two weeks ends with a written summary of field precision, recall, uptime and the top five problems found."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the pilot site, cameras and dates with the site manager"
                - "Deploy the model in shadow mode and store every prediction"
                - "Compare model findings with the existing process each week"
                - "Write the pilot summary with field scores and top problems"
            - name: Go-live acceptance test with the site owner
              description: |-
                ## Purpose
                Going live means people will act on the model's output, so the decision deserves a formal test against the acceptance bar agreed at the start. A fixed test window, a jointly labelled sample, a rollback plan and a signed decision protect both the team and the site. It also sets the baseline later reviews will compare against.

                ## Milestones
                1. Acceptance test plan written: window, sample size, who labels, pass criteria.
                2. The test run and results compared with the acceptance bar.
                3. A rollback plan and a named person who can switch the model off.
                4. A go or no-go decision recorded and signed by the site owner.

                ## Notes
                Start from the **Meeting notes** template for the sign-off meeting.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A signed go or no-go decision cites acceptance test results against the original bar, with a named person able to switch the model off."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the acceptance test plan and share it with the site owner"
                - "Run the test window and score results against the bar"
                - "Name who can switch the model off and how"
                - "Hold the sign-off meeting and record the decision"
            - name: Stakeholder demo built around real failures
              description: |-
                ## Purpose
                Demos that show only perfect detections set expectations the field will break within a week. A demo that walks through typical successes, the known failure cases and what the system does when unsure earns more trust and better questions. Preparing it from the failure gallery and field log takes an afternoon and saves months of disappointment.

                ## Milestones
                1. Ten clips chosen: six typical successes, three known failures and one low-confidence case.
                2. The field accuracy figure shown with its sample size.
                3. A slide on what the model must not be used for.
                4. Questions and requests from the audience recorded with owners.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The demo is delivered with at least three real failure cases and a stated field accuracy, and audience requests are recorded with owners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick ten clips including three honest failures"
                - "Add the field accuracy figure and its sample size"
                - "Write one slide on what the model must not be used for"
                - "Record every request from the audience with an owner"
            - name: Benchmark or challenge submission
              description: |-
                ## Purpose
                A public benchmark or challenge gives a researcher an external, comparable result and a hard deadline that forces a finished system. The common traps are tuning on the test leaderboard, missing the rules on external data, and leaving the write-up to the last night. A planned entry with a validation scheme that mirrors the hidden test makes the result mean something.

                ## Milestones
                1. The rules read, with allowed external data, submission limits and deadline noted.
                2. A local validation split that tracks the public leaderboard within a stated margin.
                3. A final system submitted before the deadline with the code archived.
                4. A short method write-up completed and shared.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final entry is submitted before the deadline, with archived code and a method write-up, and local validation tracked the leaderboard."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Read the challenge rules and note the external data policy"
                - "Build a local validation split that mirrors the hidden test"
                - "Limit leaderboard submissions to planned checkpoints"
                - "Archive the final code and write the method summary"
            - name: Paper submission with dataset and code release
              description: |-
                ## Purpose
                Reviewers increasingly expect vision papers to come with code, trained weights and, where possible, the dataset, and a release planned from the start is far less painful than one assembled after acceptance. Working back from the conference deadline, with ablations, a datasheet for the dataset and a clean repository, gives the work a fair hearing and lets others build on it.

                ## Milestones
                1. Target venue and deadline chosen, with page limits and supplementary rules noted.
                2. All main table results reproducible from a tagged commit and dataset release.
                3. A datasheet for the dataset covering collection, consent, licence and known biases.
                4. Paper submitted, with code and weights ready for release on acceptance.

                ## Notes
                Check the image rights register before promising a dataset release. Some sources can be shared only as links or features.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The paper is submitted by the venue deadline, every main result reproduces from a tagged commit, and a dataset datasheet is complete."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Choose the venue and note its deadline and supplementary rules"
                - "Tag the commit and dataset release behind each main result"
                - "Write a datasheet covering collection, consent and licence"
                - "Prepare a clean public repository with weights and instructions"
            - name: Rollout to a second site or camera model
              description: |-
                ## Purpose
                Models that work well at one site often drop sharply at the next because of different lighting, angles, products or cameras. Treating the second site as its own small project, with a survey, a few hundred local labels, a held-out evaluation and a short shadow run, shows the real size of the gap before anyone relies on it. The lessons become the playbook for every site after.

                ## Milestones
                1. The new site surveyed with the same sheet as the first.
                2. A few hundred local frames labelled and the current model scored on them unchanged.
                3. A fine-tuned version evaluated if the unchanged score misses the bar.
                4. A one-page rollout playbook written from what differed.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The model meets the acceptance bar on locally labelled frames at the second site, and a rollout playbook is written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Survey the second site with the first site's survey sheet"
                - "Label a few hundred local frames before deploying anything"
                - "Score the unchanged model on the local frames"
                - "Write the rollout playbook from the differences found"
            - name: Solo engineer vision project on a small budget
              description: |-
                ## Purpose
                Many vision projects are one engineer, a laptop and a borrowed camera, with no labelling team and no cluster. Choosing a narrow task, labelling a few hundred images yourself with model assistance, fine-tuning a small pretrained model on rented GPU hours and deploying on cheap hardware can deliver real value. The discipline is saying no to scope that needs a team.

                ## Milestones
                1. One narrow task chosen that a single class or two can answer.
                2. Three hundred to five hundred images labelled personally with model-assisted pre-labelling.
                3. A small pretrained model fine-tuned within a capped GPU spend.
                4. A working demo on low-cost hardware shown to the person who asked for it.

                ## Notes
                Cap the cloud spend before the first run. Renting a GPU by the hour is cheap until an experiment is left running over a weekend.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model trained within a written GPU cap runs on low-cost hardware and has been demonstrated to the requester."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Narrow the task to one or two classes and write it down"
                - "Set a hard spending cap on the cloud GPU account"
                - "Label 300 images yourself with model-assisted pre-labelling"
                - "Fine-tune a small pretrained model and demo it on cheap hardware"
            - name: Factory visual inspection with the quality team
              description: |-
                ## Purpose
                On a production line, defects may be one in a thousand parts, the quality team already has a standard, and line speed sets a hard latency limit. Working with quality engineers on defect definitions, golden samples, lighting fixtures and a weekly review of rejected parts makes the system part of the quality process rather than a side experiment. Anomaly detection trained only on good parts is often a sensible first step when defects are rare.

                ## Milestones
                1. Defect classes mapped to the quality team's existing standard and limit samples.
                2. A fixed lighting and camera fixture installed so images are consistent part to part.
                3. A first model, possibly trained only on good parts, scored on a set of known defective parts.
                4. A weekly joint review of rejects and escapes with the quality engineer.

                ## Notes
                Never let the vision system be the only check on a safety-critical defect until the quality team has signed off its escape rate.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Defect classes match the quality standard, the system is scored on known defective parts, and eight weekly joint reject reviews are recorded."
                cadence: rolling
              tasks:
                - "Ask the quality engineer for the defect standard and limit samples"
                - "Agree a fixed camera and lighting fixture on the line"
                - "Score the first model on a box of known defective parts"
                - "Review rejects and escapes with the quality engineer @recurring(weekly:fri)"
            - name: Research image collection with ethics approval
              description: |-
                ## Purpose
                Collecting photos or video of people, homes, patients or wildlife sites usually requires ethics approval, consent forms and a data management plan before the first image is taken. Planning these with the ethics board early avoids losing a season of data that cannot be used or published. It also sets what can later be shared with other researchers.

                ## Milestones
                1. The institution's ethics requirements for image data confirmed with the ethics office.
                2. Consent forms and information sheets covering capture, labelling, publication and sharing.
                3. A data management plan with storage, access, retention and anonymisation steps.
                4. Approval granted before collection starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Ethics approval is granted before any capture, with consent forms and a data management plan that covers sharing and retention."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Email the ethics office to ask what image collection requires"
                - "Draft consent forms covering capture, publication and sharing"
                - "Write a data management plan for storage, access and retention"
                - "Submit the application and hold collection until approval"
            - name: Drone and aerial imagery with tiled inference
              description: |-
                ## Purpose
                Orthomosaics and satellite scenes are tens of thousands of pixels across, objects are tiny and seen from above, and the same plant or roof appears in several overlapping images. Tiling with overlap, merging duplicate detections across tile edges and keeping the georeference attached to every prediction are the core skills. Getting them right turns a model into counts and maps people can use.

                ## Milestones
                1. Ground sampling distance and target object size in pixels recorded for the imagery.
                2. A tiling scheme with overlap and a merge step for detections across tile edges.
                3. Predictions exported with coordinates that open correctly in a mapping tool.
                4. Counts checked against a hand-counted area of at least one hectare or equivalent.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tiled predictions with correct coordinates match a hand count on a sample area within a stated tolerance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record the ground sampling distance and target size in pixels"
                - "Write a tiling step with overlap between neighbouring tiles"
                - "Merge duplicate detections along tile edges"
                - "Compare model counts with a hand count of one sample area"
            - name: Safety-critical imaging under expert oversight
              description: |-
                ## Purpose
                Medical images, structural inspection and similar settings mean a wrong prediction can hurt someone, so qualified experts must define the labels, review errors and decide how outputs are used. The project's job is to organise that oversight: expert-labelled reference sets, disagreement between experts measured, a risk register and clear limits on use. Regulatory routes for such software vary by country and need specialist advice.

                ## Milestones
                1. A named clinical or domain lead who owns label definitions and intended use.
                2. A reference set labelled independently by at least two qualified experts, with their agreement measured.
                3. A risk register covering misses, false alarms, automation bias and use outside tested conditions.
                4. Regulatory and governance questions listed for the relevant specialist adviser.

                ## Notes
                Start from the **Risk register** template. The model supports expert judgement; it does not replace it, and its output should say so wherever it is shown.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A domain lead is named, a dual-expert reference set has measured agreement, and a risk register is reviewed by that lead."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Name the clinical or domain lead who owns intended use"
                - "Arrange two qualified experts to label a reference set independently"
                - "Measure agreement between the two experts"
                - "Start a risk register covering misses and automation bias"
                - "List the regulatory questions for a specialist adviser"
            - name: Handover of a vision system to a client team
              description: |-
                ## Purpose
                Consultants and internal teams often build a vision system and hand it to an operations or client team who did not build it. A good handover covers how to run it, how to read its outputs, what to do when a camera fails or accuracy drops, and who to call. Without one, the system is quietly switched off the first time it misbehaves.

                ## Milestones
                1. A runbook covering start, stop, restart, camera faults and model rollback.
                2. A one-page guide for operators on reading outputs and confidence.
                3. Two training sessions held with the receiving team.
                4. A support period agreed, with an end date and contact.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The receiving team has a runbook and operator guide, two training sessions are held, and a support end date is agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every action the receiving team will need to perform"
                - "Ask the agent to draft the runbook from the deployment notes"
                - "Write a one-page operator guide on reading outputs"
                - "Hold two training sessions and agree the support end date"
            - name: Open-set handling for unknown objects
              description: |-
                ## Purpose
                A closed-set model forced to choose among known classes will confidently label a never-seen object as whatever it most resembles. Detecting unfamiliar inputs, through confidence, energy scores or distance in embedding space, and routing them to review instead of a wrong label, matters wherever the world changes. Collected unknowns also become the candidates for the next new class.

                ## Milestones
                1. A held-out set of objects the model was never trained on.
                2. Two out-of-distribution scores compared on how well they separate known from unknown.
                3. An unknown route added that sends flagged inputs to review.
                4. A quarterly review of collected unknowns for possible new classes.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An unknown-object score is chosen on a held-out unknown set, flagged inputs route to review, and collected unknowns are reviewed quarterly."
                cadence: rolling
              tasks:
                - "Assemble a set of objects the model has never seen"
                - "Compare two scores for separating known from unknown inputs"
                - "Route inputs above the unknown score to the review queue"
                - "Review collected unknowns for possible new classes @recurring(quarterly)"
            - name: Stress testing against occlusion, glare and patches
              description: |-
                ## Purpose
                Experienced teams test how a model breaks before the world does: partial occlusion, heavy glare, lens dirt, unusual angles and, where people might want to fool it, printed adversarial patches. A repeatable stress suite with graded severity shows where accuracy collapses and whether a new model is sturdier than the last. Rerunning it each year keeps old weaknesses from returning.

                ## Milestones
                1. A stress suite with at least five corruption types at three severity levels.
                2. Physical tests recorded on site for occlusion and glare where safe and permitted.
                3. Accuracy against severity plotted for the current model.
                4. The suite added to the release checklist for every new model.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stress suite of at least five corruptions at three severities runs on every release, with results plotted for the current model."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose five corruption types that match real site conditions"
                - "Generate each at three severity levels"
                - "Plot accuracy against severity for the current model"
                - "Rerun the full stress suite and compare with last year @recurring(yearly)"
            - name: Self-supervised pretraining on your own images
              description: |-
                ## Purpose
                When you have hundreds of thousands of unlabelled frames from your own cameras and only a few thousand labels, pretraining a backbone on the unlabelled images can beat general pretrained weights, especially for unusual domains such as microscopy, thermal or industrial imagery. It costs real compute, so it is worth doing only with a fair comparison planned in advance.

                ## Milestones
                1. An unlabelled pool of at least 100,000 frames, deduplicated and covering all conditions.
                2. One self-supervised method run within a fixed compute budget.
                3. Fine-tuned results compared with general pretrained weights on the frozen test set.
                4. A decision on which backbone becomes the default.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Self-supervised and general pretrained backbones are compared on the same frozen test set within a fixed budget, and the default is recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Deduplicate and sample the unlabelled frame pool"
                - "Set a compute budget for the pretraining run"
                - "Pretrain one backbone with a self-supervised method"
                - "Fine-tune both backbones and compare on the frozen test set"
            - name: Multi-camera tracking across overlapping views
              description: |-
                ## Purpose
                Counting vehicles across a yard or parts across a line often needs one object followed through several cameras, which means calibration, a shared ground plane and matching appearances between views. It is among the hardest vision problems to get right, and errors compound into double counts. Where people are involved, cross-camera tracking raises privacy questions that must be settled before any build.

                ## Milestones
                1. Cameras calibrated to a shared floor plan or ground plane.
                2. A labelled multi-camera clip with object identities across views.
                3. Cross-camera identity switches and double counts measured on that clip.
                4. A written privacy review if any tracked object is a person.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Cross-camera identity switches and double counts are measured on a labelled clip, with a privacy review written if people are tracked."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Map each camera's view onto a shared floor plan"
                - "Label object identities across views on one clip"
                - "Measure identity switches and double counts across cameras"
                - "Write a privacy review before tracking any person"
---

# Computer Vision Projects

This area is for the engineer or researcher who has to make a camera see something useful: a defect on a line, a vehicle in a yard, a weed in a field, a cell in a slide. It starts with foundations (the task and its acceptance bar, a survey of the real cameras and light, image rights, a pilot capture, a labelling guideline, splits that cannot leak and a pretrained baseline), then the operating routines for label quality, active learning, failure review and field sampling, the skills from detection metrics to video tracking, decisions on architecture, edge hardware and buying versus building, dated pilots, go-lives and paper submissions, situations from the solo engineer to the factory floor and the research lab, and finally specialist work on unknown objects, stress testing, self-supervised pretraining and multi-camera tracking.

What repeats is a weekly label audit, a weekly sample of production frames and a weekly review of the low-confidence queue, monthly active learning batches, failure gallery reviews, camera health checks and vendor reviews, quarterly dataset releases, threshold reviews and footage purges, and a yearly rerun of the stress tests. The Purchase decision, Vendor, Reading queue, Metrics log, Meeting notes and Risk register templates pair with the annotation tool and build versus buy choices, the labelling supplier, the paper reading list, the field accuracy log, the go-live sign-off and the hazards of safety-critical imaging. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
