// TODO: replace with real Sanity CMS queries once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
// This file is the single mock data source so swapping in Sanity later only requires
// changing /lib/sanity-client.ts call sites, not every page.

export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  heroImageAlt: string;
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacements for missing teeth.",
    description: [
      "Dental implants replace both the root and the crown of a missing tooth, giving you a result that looks, feels, and functions like a natural tooth. We use titanium implant posts that fuse with your jawbone over a few months, creating a stable foundation for a custom-matched crown.",
      "Most patients are candidates for implants regardless of how long ago they lost a tooth. During your consultation we take a 3D scan to evaluate bone density and plan exact implant placement before any drilling begins.",
    ],
    heroImageAlt: "Dentist showing a dental implant model to a patient",
    faqs: [
      {
        question: "How long does the implant process take?",
        answer:
          "From placement to final crown, most patients complete treatment in 3-6 months, which allows time for the implant to fully integrate with the jawbone.",
      },
      {
        question: "Are dental implants painful?",
        answer:
          "The placement procedure is done under local anesthesia (sedation options available), and most patients report less discomfort than they expected — typically managed with over-the-counter pain relievers for a few days.",
      },
      {
        question: "Does insurance cover dental implants?",
        answer:
          "Coverage varies widely by plan. Our team verifies your benefits before treatment and walks you through financing options on our Insurance & Financing page.",
      },
    ],
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    shortDescription: "Straighten your teeth discreetly with clear, removable aligners.",
    description: [
      "Invisalign uses a series of custom, clear aligners to gradually shift your teeth into alignment — no metal brackets or wires. Each set of aligners is worn for about two weeks before moving to the next in the series.",
      "Treatment typically takes 6-18 months depending on the complexity of your case. Because aligners are removable, you can eat, brush, and floss normally throughout treatment.",
    ],
    heroImageAlt: "Close-up of a clear Invisalign aligner being placed on teeth",
    faqs: [
      {
        question: "How is Invisalign different from traditional braces?",
        answer:
          "Invisalign aligners are clear, removable, and far less noticeable than metal braces. They're also easier to keep clean since you take them out to eat and brush.",
      },
      {
        question: "Will Invisalign work for my case?",
        answer:
          "Invisalign treats most mild-to-moderate alignment issues, including crowding, spacing, and some bite problems. We'll confirm candidacy with a complimentary consultation and digital scan.",
      },
      {
        question: "How much does Invisalign cost?",
        answer:
          "Cost depends on case complexity and treatment length, typically comparable to traditional braces. We provide an exact quote after your consultation and digital scan, and walk you through insurance and financing options.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "Professional-grade whitening for noticeably brighter results.",
    description: [
      "Our in-office whitening treatment uses a higher-concentration whitening gel than anything available over the counter, activated under a specialized light for faster, more even results — typically several shades brighter in one visit.",
      "We also offer custom take-home whitening trays for patients who prefer a gradual approach or want touch-up kits for maintenance.",
    ],
    heroImageAlt: "Before and after comparison of professionally whitened teeth",
    faqs: [
      {
        question: "How long do whitening results last?",
        answer:
          "Results typically last 6-12 months depending on your diet and oral hygiene habits. Avoiding coffee, red wine, and tobacco helps results last longer.",
      },
      {
        question: "Is professional whitening safe for sensitive teeth?",
        answer:
          "Yes — we assess your enamel and gum health beforehand and can adjust gel concentration or recommend desensitizing treatments for sensitive patients.",
      },
      {
        question: "How much does professional teeth whitening cost?",
        answer:
          "In-office whitening is a one-time, same-visit treatment, while take-home trays are priced separately for ongoing touch-ups. Exact pricing depends on which option fits your goals — we quote this at your consultation, before any treatment begins.",
      },
    ],
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    shortDescription: "Relieve pain and save an infected tooth from extraction.",
    description: [
      "Root canal therapy removes infected or inflamed pulp from inside a tooth, then cleans, disinfects, and seals the space to prevent further infection — relieving pain and saving the natural tooth.",
      "Modern root canal treatment is far more comfortable than its reputation suggests. Most patients report the procedure feels similar to getting a standard filling.",
    ],
    heroImageAlt: "Dental x-ray used to diagnose a tooth needing root canal therapy",
    faqs: [
      {
        question: "Is a root canal painful?",
        answer:
          "The procedure itself is performed under local anesthesia and is typically no more uncomfortable than a filling. The infection causing your pain beforehand is usually far more painful than the treatment.",
      },
      {
        question: "What happens after a root canal?",
        answer:
          "Most teeth need a crown afterward to restore strength and protect against future fracture. We'll walk you through next steps at your visit.",
      },
      {
        question: "How much does a root canal cost?",
        answer:
          "Cost varies by tooth location and case complexity, and whether a crown is needed afterward. Most PPO insurance plans cover a portion of root canal treatment — we verify your benefits and provide a clear estimate before starting.",
      },
    ],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortDescription: "Same-day care for dental pain, injuries, and urgent problems.",
    description: [
      "We reserve same-day appointment slots for dental emergencies — severe toothaches, broken or knocked-out teeth, lost fillings or crowns, and facial swelling. Call us as soon as a problem happens; many issues are far easier to treat (and less costly) the sooner we see you.",
      "After hours, our answering service will connect you with the on-call dentist for guidance until we can see you.",
    ],
    heroImageAlt: "Dentist examining a patient with a dental emergency",
    faqs: [
      {
        question: "What counts as a dental emergency?",
        answer:
          "Severe or sudden tooth pain, a knocked-out or broken tooth, uncontrolled bleeding, facial swelling, or a lost crown/filling that's causing pain all warrant an emergency call.",
      },
      {
        question: "Do you offer same-day emergency appointments?",
        answer:
          "Yes, we hold same-day slots specifically for emergencies. Call our office as early as possible so we can get you in quickly.",
      },
    ],
  },
  {
    slug: "veneers",
    name: "Veneers",
    shortDescription: "Thin, custom shells that transform the look of your smile.",
    description: [
      "Porcelain veneers are thin, custom-fabricated shells bonded to the front of your teeth to correct chips, gaps, discoloration, or minor misalignment — often completed in just two visits.",
      "Each veneer is shade-matched and shaped specifically for your face and smile, so results look natural rather than uniform or artificial.",
    ],
    heroImageAlt: "Dentist comparing porcelain veneer shade samples",
    faqs: [
      {
        question: "How long do veneers last?",
        answer:
          "With proper care, porcelain veneers typically last 10-15 years or longer before needing replacement.",
      },
      {
        question: "Are veneers reversible?",
        answer:
          "Veneers require removing a thin layer of enamel, so the process is not reversible. We'll discuss whether veneers or a non-invasive alternative is the better fit for your goals.",
      },
      {
        question: "How much do veneers cost?",
        answer:
          "Pricing depends on how many teeth you're treating and the shade/shape customization involved. We provide an itemized quote at your consultation, along with available financing options.",
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  targetKeyword: string;
  publishedAt: string;
  author: string;
  authorCredentials: string;
  reviewedBy?: string;
  coverImage?: string;
  coverImageAlt?: string;
  /** Each entry is rendered as raw HTML — may contain <h2>, <p>, <ul>, <a>, <strong>, etc. */
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "veneers-before-and-after-what-to-expect",
    title: "Veneers Before and After: What to Really Expect From Your Smile Transformation",
    excerpt:
      "Scrolling through veneers before and after photos? Here's what those transformations actually involve — the real process, timeline, cost, and limitations a dentist wants you to know first.",
    metaDescription:
      "Veneers before and after explained by a practicing dentist: what really changes, how the procedure works, U.S. cost ranges, how long results last, and honest risks to weigh first.",
    targetKeyword: "veneers before and after",
    publishedAt: "2026-10-22",
    author: "Dr. Sarah Bennett, DDS",
    authorCredentials:
      "Dr. Bennett has practiced general and cosmetic dentistry for over 12 years and has personally placed hundreds of porcelain veneer cases.",
    reviewedBy: "Clinically reviewed by the Bright Smile Dental clinical team",
    coverImage: "/images/blog-veneers-before-and-after-what-to-expect.png",
    coverImageAlt:
      "Close-up comparison of a patient's smile before and after porcelain veneers",
    content: [
      "<p>If you've spent any time scrolling cosmetic dentistry content, you've seen the dramatic <strong>veneers before and after</strong> photos — gapped, chipped, or discolored teeth transformed into a uniform, camera-ready smile in what looks like a single visit. As a dentist who has planned and placed hundreds of veneer cases, I want to walk you through what actually happens between those two photos: the real process, what changes (and what doesn't), how long it takes, what it costs in the U.S., and the honest limitations most marketing photos leave out.</p>",

      "<h2>What Veneers Actually Change — and What They Don't</h2><p>A veneer is a thin shell, usually made of porcelain or composite resin, bonded to the front surface of a tooth to change its color, shape, length, or alignment. Before-and-after photos typically show improvements in three areas: <strong>color</strong> (uniform, bright white instead of yellowed or stained enamel), <strong>shape</strong> (closing gaps, lengthening worn-down edges, softening overly pointed or jagged teeth), and <strong>alignment appearance</strong> (teeth that look straighter without orthodontics, because the veneer's shape camouflages minor rotation or crowding).</p><p>What veneers don't fix: they don't move teeth the way braces or Invisalign do, they don't treat gum disease or decay underneath, and they don't change your bite. If a \"before\" photo shows significant crowding or a bite problem, a responsible dentist addresses that first — veneers are a cosmetic finishing step, not a substitute for orthodontic or restorative treatment.</p>",

      "<h2>How the Veneer Process Actually Works</h2><ul><li><strong>Consultation and smile design.</strong> Your dentist evaluates tooth health, gum tissue, and bite, then discusses shape, shade, and how many teeth to treat — often just the teeth visible when you smile (typically 6-10 on the upper arch).</li><li><strong>Mock-up or digital preview.</strong> Many practices use a wax mock-up or digital smile design so you can see an approximation of the \"after\" before committing.</li><li><strong>Tooth preparation.</strong> For traditional porcelain veneers, a thin layer of enamel (often less than half a millimeter) is removed so the veneer sits flush rather than bulky. Minimal-prep or composite veneers may require little to no enamel removal.</li><li><strong>Impressions and temporaries.</strong> A digital scan or physical impression goes to a dental lab, and temporary veneers protect prepared teeth in the meantime.</li><li><strong>Bonding the final veneers.</strong> Once the custom veneers return from the lab (usually 1-3 weeks later), they're checked for fit and shade, then permanently bonded with a dental adhesive and cured with a special light.</li></ul><p>This is why the dramatic \"after\" photo usually represents two appointments spread a few weeks apart, not a single visit — something marketing images rarely clarify.</p>",

      "<h2>Who Actually Gets Good Before-and-After Results?</h2><p>The best candidates have healthy gums, adequate enamel, and no untreated decay or active periodontal disease. According to the <a href=\"https://www.mouthhealthy.org/all-topics-a-z/veneers\" target=\"_blank\" rel=\"noopener noreferrer\">American Dental Association's MouthHealthy resource</a>, veneers work well for teeth that are discolored, chipped, slightly misaligned, or unevenly shaped — but a dentist should first rule out issues that need different treatment, such as cavities, bruxism (teeth grinding), or a bite that's significantly off. Patients with severe grinding habits often need a nightguard alongside veneers, since biting forces that chip natural enamel can also chip porcelain.</p>",

      "<h2>Porcelain vs. Composite Veneers: Different \"Afters\"</h2><ul><li><strong>Porcelain veneers</strong> are lab-fabricated, highly stain-resistant, and typically last 10-15+ years with good care. They require enamel reduction and two or more visits, and they cost more per tooth.</li><li><strong>Composite resin veneers</strong> are sculpted directly onto the tooth in a single visit, cost less, and need minimal to no enamel removal — but they stain more easily and generally last 5-7 years before needing touch-ups or replacement.</li></ul><p>Both can produce convincing before-and-after transformations; the difference shows up in longevity, stain resistance, and how the edges age over time.</p>",

      "<h2>Veneers vs. Teeth Whitening vs. Orthodontics</h2><p>Before committing, it's worth knowing when a less invasive option gets you a similar \"after\": <strong>Teeth whitening</strong> addresses color only and works best on healthy, unrestored teeth — it won't change shape or close gaps. <strong>Orthodontics (braces or Invisalign)</strong> actually moves teeth into better alignment but doesn't change color or minor shape irregularities, and takes months to years rather than weeks. <strong>Veneers</strong> sit in between — they can simultaneously correct color, shape, and the appearance of alignment, but they are a permanent alteration to the tooth surface (for porcelain) that can't be undone once enamel is removed. A thorough consultation should walk through all three before you decide.</p>",

      "<h2>What Veneers Cost in the U.S.</h2><p>Cost varies by material, lab, geographic market, and how many teeth are treated. In the United States, porcelain veneers typically run <strong>$900 to $2,500+ per tooth</strong>, while composite veneers generally run <strong>$250 to $1,500 per tooth</strong>. A full \"smile makeover\" treating 6-10 upper teeth with porcelain veneers commonly falls between $6,000 and $20,000+ depending on the lab and materials used. Veneers are considered cosmetic, so dental insurance rarely covers them unless they're medically necessary (for example, restoring a tooth after trauma). Many practices offer in-house financing or third-party healthcare financing to spread the cost over monthly payments — always ask for an itemized quote that specifies the material, number of teeth, and what's included (mock-up, temporaries, adjustments) before signing.</p>",

      "<h2>Recovery and the Adjustment Period</h2><ul><li><strong>First few days:</strong> Mild gum sensitivity or tooth sensitivity to hot and cold is common, especially if enamel was removed, and typically resolves within a week.</li><li><strong>First 1-2 weeks:</strong> You may notice your bite feels slightly different as your mouth adjusts to the new tooth contours; minor adjustments at a follow-up visit are normal and expected, not a sign something went wrong.</li><li><strong>Ongoing care:</strong> Veneers are cared for like natural teeth — brushing, flossing, and regular checkups — but patients should avoid biting ice, fingernails, or opening packages with their front teeth, since porcelain can chip under concentrated force.</li></ul>",

      "<h2>Risks and Honest Limitations</h2><p>Veneers are a well-established cosmetic procedure, but they're not risk-free. Possible issues include increased tooth sensitivity after enamel removal, chipping or debonding over time (more common with poor bite management or grinding), color mismatch if whitening is done after veneers are placed (porcelain doesn't whiten), and the fact that porcelain veneer preparation is generally irreversible — once enamel is removed, the tooth will likely need a veneer or crown indefinitely. The <a href=\"https://my.clevelandclinic.org/health/treatments/10953-dental-veneers\" target=\"_blank\" rel=\"noopener noreferrer\">Cleveland Clinic</a> notes that with proper care, veneers can last well over a decade, but they aren't a permanent, one-time fix — replacement is eventually needed. Choosing an experienced cosmetic dentist and maintaining good oral hygiene are the biggest factors in how well your results hold up, and the <a href=\"https://www.nidcr.nih.gov/health-info\" target=\"_blank\" rel=\"noopener noreferrer\">National Institute of Dental and Craniofacial Research</a> emphasizes that any restorative or cosmetic dental work lasts longest alongside consistent preventive care.</p>",

      "<h2>Frequently Asked Questions</h2><p><strong>Do veneers look fake?</strong> Not when properly planned. Shade, translucency, and shape are customized to your face and remaining teeth — overly bright, uniform \"veneer smiles\" usually reflect a design choice, not a limitation of the material.</p><p><strong>How long does the full before-to-after process take?</strong> Typically 2-4 weeks from the first consultation to final placement, spread across 2-3 appointments.</p><p><strong>Can veneers be removed or reversed?</strong> Composite veneers can often be removed with minimal impact on the natural tooth. Traditional porcelain veneers involve permanent enamel removal, so the tooth will need some form of covering going forward.</p><p><strong>Will my veneers match my other teeth?</strong> Yes, when planned correctly — but because porcelain doesn't respond to whitening, it's best to whiten your natural teeth to your target shade <em>before</em> veneers are made, so everything matches going forward.</p>",

      "<h2>Deciding If Veneers Are Right for You</h2><p>The transformations in before-and-after photos are real, but the best results come from an honest evaluation of your dental health first — healthy gums, no active decay, and a bite that's been assessed for grinding or alignment issues. The only way to know what your own \"after\" could realistically look like is a clinical consultation with your specific teeth, not someone else's photos.</p><p>At <a href=\"/services/veneers\">Bright Smile Dental</a>, we walk every patient through a personalized smile design before recommending porcelain, composite, or an alternative entirely. If you're curious whether veneers are the right fit for you, <a href=\"/new-patients#book\">book a consultation</a> or <a href=\"/contact\">contact our Austin office</a> to get started.</p>",
    ],
  },
  {
    slug: "all-on-4-dental-implants-complete-guide",
    title: "All-on-4 Dental Implants: Complete 2026 Guide to Cost, Procedure & Recovery",
    excerpt:
      "Thinking about All-on-4 dental implants? Here's what the procedure involves, who's a candidate, real recovery timelines, and what it typically costs in the U.S.",
    metaDescription:
      "All-on-4 dental implants explained by a practicing dentist: how the procedure works, who qualifies, recovery timeline, U.S. cost ranges, and risks to know before you commit.",
    targetKeyword: "all on 4 dental implants",
    publishedAt: "2026-10-22",
    author: "Dr. Sarah Bennett, DDS",
    authorCredentials:
      "Dr. Bennett has practiced general and implant dentistry for over 12 years and has personally placed hundreds of full-arch implant cases.",
    reviewedBy: "Clinically reviewed by the Bright Smile Dental clinical team",
    coverImage: "/images/blog-all-on-4-dental-implants.png",
    coverImageAlt:
      "Dentist showing a patient a model of a full-arch All-on-4 dental implant restoration",
    content: [
      "<p>If you're missing most or all of your teeth in an arch — or facing a mouth full of failing teeth — <strong>All-on-4 dental implants</strong> are one of the most researched and widely recommended ways to get a full, fixed set of teeth back in a single surgical visit. As a practicing dentist who has placed and restored hundreds of full-arch implant cases, I wrote this guide to walk you through exactly what the procedure involves, who actually qualifies, what recovery really feels like, and what you should expect to pay in the United States — without the sales pitch.</p>",

      "<h2>What Are All-on-4 Dental Implants?</h2><p>All-on-4 is a full-arch tooth replacement technique that uses just <strong>four strategically placed implants</strong> to support an entire row of fixed replacement teeth — upper, lower, or both. Instead of placing a single implant for every missing tooth (which can require 6-8 implants per arch and extensive bone grafting), the All-on-4 approach angles the two back implants to maximize contact with available jawbone, often avoiding the need for a bone graft altogether.</p><p>The result is a full bridge of teeth that's permanently fixed in your mouth — not removable like traditional dentures — anchored by implants that fuse with your jawbone through a process called osseointegration. According to the <a href=\"https://www.mouthhealthy.org/all-topics-a-z/dental-implants\" target=\"_blank\" rel=\"noopener noreferrer\">American Dental Association's MouthHealthy resource</a>, implant-supported restorations are now considered a standard, well-established option for replacing missing teeth when a patient has adequate bone and good general health.</p>",

      "<h2>How the All-on-4 Procedure Works</h2><ul><li><strong>Consultation &amp; 3D imaging.</strong> A CBCT scan maps your jawbone density, nerve position, and sinus location to plan exact implant placement before any surgery happens.</li><li><strong>Extractions (if needed).</strong> Any remaining failing teeth in the arch are removed, often in the same visit as implant placement.</li><li><strong>Implant placement.</strong> Four titanium implants are placed — two positioned vertically in the front of the jaw, and two angled toward the back to engage the strongest available bone.</li><li><strong>Same-day temporary teeth.</strong> A full temporary bridge is attached the same day, so you leave with a functional, fixed set of teeth — not a gap.</li><li><strong>Healing &amp; integration.</strong> Over the following 3-6 months, the implants fuse with the jawbone.</li><li><strong>Final restoration.</strong> Once healing is confirmed, your temporary bridge is replaced with a custom-fabricated final prosthesis, typically made of zirconia.</li></ul>",

      "<h2>Who Is a Good Candidate for All-on-4?</h2><p>All-on-4 was specifically developed for patients who don't have enough bone for conventional implants without grafting — which is exactly why it has become so popular for people who've been told in the past that they \"don't qualify\" for implants. Good candidates typically include patients who:</p><ul><li>Are missing most or all of their teeth in an arch, or have teeth with a poor long-term prognosis</li><li>Are unhappy with loose, uncomfortable removable dentures</li><li>Have some jawbone remaining, even if there isn't enough for traditional implants</li><li>Are in good enough general health to tolerate minor oral surgery</li></ul><p>Factors like uncontrolled diabetes, active smoking, and certain bone-affecting medications can impact healing and implant success rates, so a thorough medical history review is a required part of any legitimate consultation. The <a href=\"https://www.nidcr.nih.gov/health-info/tooth-loss\" target=\"_blank\" rel=\"noopener noreferrer\">National Institute of Dental and Craniofacial Research</a> notes that overall health, bone quality, and oral hygiene habits are all meaningful factors in long-term implant success — which is why an honest evaluation matters more than a quick sales consultation.</p>",

      "<h2>All-on-4 vs. Traditional Implants vs. Dentures</h2><p>Patients often come in already comparing three options, so here's the real difference:</p><ul><li><strong>Traditional removable dentures</strong> rest on the gums, can slip while eating or speaking, and typically need relining every few years as the jawbone naturally shrinks from lack of stimulation.</li><li><strong>Individual implants for every tooth</strong> offer excellent long-term outcomes but usually require 6-8 implants per arch, more extensive bone grafting, and a higher total cost.</li><li><strong>All-on-4</strong> sits in between: fixed (non-removable) like individual implants, but using fewer implants and less bone grafting than a full individual-implant approach, which generally makes it faster and more affordable while still preserving jawbone through normal chewing function.</li></ul>",

      "<h2>Benefits Patients Notice Most</h2><ul><li><strong>Fixed, not removable</strong> — no adhesives, no taking teeth out at night</li><li><strong>Same-day teeth</strong> — you don't leave the office without a functional smile</li><li><strong>Preserves jawbone</strong> — chewing force transmitted through implants helps slow the bone loss that happens under traditional dentures</li><li><strong>Natural look and function</strong> — most patients report they can eat foods again that dentures made difficult, like apples or steak</li><li><strong>Fewer implants, often no grafting</strong> — lower surgical burden than a full individual-implant case</li></ul>",

      "<h2>What Does All-on-4 Cost in the U.S.?</h2><p>Cost is the question nearly every patient asks first, and it's fair — this is a significant investment. In the United States, a full-arch All-on-4 case (implants, abutments, temporary bridge, and final prosthesis) commonly runs <strong>$15,000 to $30,000+ per arch</strong>, with both arches (a \"full mouth\" case) often falling in the $30,000-$60,000 range depending on your geographic market, the implant brand used, and whether any extractions, sinus lifts, or sedation are needed.</p><p>What actually drives the price swing between practices is usually one of these: implant brand and material quality, whether the final prosthesis is acrylic (more affordable, more prone to wear) versus zirconia (more durable, pricier), the surgeon's experience level, and what's included in the quoted price versus billed separately afterward. Dental insurance rarely covers the full cost of implants, but many plans contribute toward extractions, anesthesia, or a portion of the prosthetic — and in-house financing or third-party healthcare financing can spread the cost over monthly payments. Always ask for an itemized, all-inclusive quote before committing.</p>",

      "<h2>Recovery Timeline: What to Actually Expect</h2><ul><li><strong>Days 1-3:</strong> Swelling and soreness peak, managed with prescribed or over-the-counter pain medication and a soft-food diet.</li><li><strong>Week 1-2:</strong> Most swelling resolves; patients typically return to work within a few days to a week depending on the job.</li><li><strong>Weeks 2-6:</strong> Soft-to-moderate diet continues while soft tissue heals around the temporary bridge.</li><li><strong>Months 3-6:</strong> Osseointegration completes — the implants fully fuse with the jawbone.</li><li><strong>Final restoration:</strong> The permanent zirconia bridge is placed once integration is confirmed via imaging.</li></ul><p>Pain is generally well controlled and most patients describe recovery as more manageable than they expected, especially compared to the discomfort of loose dentures they may have lived with for years.</p>",

      "<h2>Risks and Honest Limitations</h2><p>No surgical procedure is risk-free. Possible complications include infection, implant failure (which happens in a small percentage of cases, more often in smokers or patients with uncontrolled diabetes), prosthetic wear over time, and the normal risks associated with any oral surgery. The <a href=\"https://www.fda.gov/medical-devices/dental-devices/dental-implants\" target=\"_blank\" rel=\"noopener noreferrer\">U.S. Food and Drug Administration</a> classifies dental implants as a Class II medical device and outlines these general risks for any implant-based procedure. Maintaining good oral hygiene, attending regular maintenance visits, and addressing health conditions like diabetes or smoking cessation beforehand meaningfully improve long-term success rates, which multiple clinical studies place above 95% over 10 years for well-selected candidates.</p>",

      "<h2>Frequently Asked Questions</h2><p><strong>Is All-on-4 painful?</strong> The procedure is done under local anesthesia or sedation, and most patients report the recovery is more tolerable than anticipated — manageable with standard pain medication.</p><p><strong>How long do All-on-4 implants last?</strong> The titanium implant posts can last a lifetime with proper care. The prosthetic bridge itself typically lasts 10-20 years before needing replacement due to normal wear.</p><p><strong>Can I get All-on-4 if I've worn dentures for years?</strong> Yes — this is one of the most common patient profiles for All-on-4, even when significant bone loss has already occurred, since the angled implant placement is specifically designed to work with reduced bone volume.</p><p><strong>Will my teeth look natural?</strong> Modern zirconia prosthetics are shade-matched and custom-shaped, and most patients find the result looks and feels more natural than removable dentures ever did.</p>",

      "<h2>Is All-on-4 Right for You?</h2><p>All-on-4 isn't the right fit for every patient — some people are better candidates for individual implants, a removable implant-supported overdenture, or other restorative options. The only way to know for sure is a proper clinical evaluation with 3D imaging and an honest conversation about your bone health, medical history, and goals.</p><p>At <a href=\"/services/dental-implants\">Bright Smile Dental</a>, we walk every patient through their real options — including cost, timeline, and whether All-on-4 is genuinely the best fit — before recommending any treatment plan. If you're ready to find out whether you're a candidate, <a href=\"/new-patients#book\">book a consultation</a> or <a href=\"/contact\">contact our Austin office</a> and we'll get you scheduled.</p>",
    ],
  },
  {
    slug: "signs-you-need-a-root-canal",
    title: "5 Signs You Might Need a Root Canal",
    excerpt:
      "Persistent tooth pain isn't something to ignore. Here are the warning signs that mean it's time to call your dentist.",
    metaDescription:
      "Persistent tooth pain isn't something to ignore. Here are the warning signs that mean it's time to call your dentist.",
    targetKeyword: "signs you need a root canal",
    publishedAt: "2026-09-02",
    author: "Dr. Sarah Bennett, DDS",
    authorCredentials:
      "Dr. Bennett has practiced general dentistry for over 12 years.",
    content: [
      "<p>Tooth pain that lingers after eating something hot or cold, pain that wakes you up at night, or a tooth that's become sensitive to pressure are all signs worth getting checked out promptly.</p>",
      "<p>1. Persistent or throbbing pain. 2. Sensitivity to hot and cold that lingers. 3. Swollen or tender gums near a specific tooth. 4. A tooth that's darkened in color. 5. A recurring pimple-like bump on the gums.</p>",
      "<p>If you're noticing any of these symptoms, don't wait — call our office. Catching an infection early almost always means a simpler, less costly treatment.</p>",
    ],
  },
];

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

export const reviews: Review[] = [
  {
    author: "Jessica M.",
    rating: 5,
    text: "Best dental experience I've had in years. The whole team is friendly and they explained every step before doing anything.",
    date: "2026-08-14",
  },
  {
    author: "Marcus T.",
    rating: 5,
    text: "Got in same-day for a cracked tooth and they took great care of me. Highly recommend for anyone nervous about the dentist.",
    date: "2026-07-29",
  },
  {
    author: "Priya R.",
    rating: 4,
    text: "Clean, modern office and great with my kids. Scheduling was easy and wait times were short.",
    date: "2026-06-11",
  },
];

export const aggregateRating = {
  ratingValue:
    Math.round(
      (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
    ) / 10,
  reviewCount: reviews.length,
};
