/**
 * Meta Pixel — Lead Generation Event Tracking (hsios.in)
 *
 * Listens for clicks on existing CTAs/links and page context (project pages,
 * high-intent pages, location pages, UTM params) and fires the matching Meta
 * Ads event: Lead, Contact, Schedule, ViewContent, plus a few custom events
 * (PageLanding, ChatWidgetOpen, HighEngagement, QualityVisit).
 *
 * Must run AFTER the Meta Pixel base script in layout.tsx — `fbq` is defined
 * synchronously there (it queues calls even before fbevents.js finishes
 * loading over the network), so load order is safe as long as this script
 * tag comes after that one in the document.
 *
 * Rendered as an inline <script nonce={nonce}> in RootLayout — do not
 * convert to a next/script <Script> component without preserving nonce
 * compatibility (see CLAUDE.md "GA4 / Meta Pixel nonce").
 */
export const META_EVENT_TRACKING_JS = `
document.addEventListener('DOMContentLoaded', function () {

  // ======================
  // 1. LEAD EVENT — Highest Priority
  // ======================
  // Fires when someone clicks "Book a Consultation" or "Speak to Our Team"
  // These are your highest-intent CTAs

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button');
    if (!el) return;
    var text = (el.textContent || '').trim().toLowerCase();

    // "Book a Consultation" button clicks
    if (text.includes('book a consultation') || text.includes('book consultation')) {
      var src = window._hsiosSource || {};
      fbq('track', 'Lead', {
        content_name: 'Book a Consultation',
        content_category: 'Consultation Booking',
        value: 0,
        currency: 'INR',
        traffic_source: src.source || '(direct)',
        campaign_name: src.campaign || '(none)',
        keyword: src.keyword || '(none)',
        landing_page: src.landing_page || window.location.pathname
      });
    }

    // "Speak to Our Team" button clicks
    if (text.includes('speak to our team') || text.includes('speak to team')) {
      var src = window._hsiosSource || {};
      fbq('track', 'Lead', {
        content_name: 'Speak to Our Team',
        content_category: 'Team Contact',
        value: 0,
        currency: 'INR',
        traffic_source: src.source || '(direct)',
        campaign_name: src.campaign || '(none)',
        keyword: src.keyword || '(none)',
        landing_page: src.landing_page || window.location.pathname
      });
    }
  });


  // ======================
  // 2. CONTACT EVENT — WhatsApp Clicks
  // ======================
  // Fires when someone clicks any WhatsApp link (your primary contact method)

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a');
    if (!el) return;
    var href = (el.href || '').toLowerCase();
    var text = (el.textContent || '').trim().toLowerCase();

    // WhatsApp link clicks (wa.me or api.whatsapp.com)
    if (href.includes('wa.me') || href.includes('whatsapp.com') || href.includes('whatsapp')) {
      var src = window._hsiosSource || {};
      fbq('track', 'Contact', {
        content_name: 'WhatsApp Click',
        content_category: 'WhatsApp',
        traffic_source: src.source || '(direct)',
        campaign_name: src.campaign || '(none)',
        keyword: src.keyword || '(none)',
        landing_page: src.landing_page || window.location.pathname
      });
    }
  });


  // ======================
  // 3. CONTACT EVENT — Phone Call Clicks
  // ======================
  // Fires when someone clicks a tel: phone number link

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a');
    if (!el) return;
    var href = (el.href || '').toLowerCase();

    // Phone call clicks (tel: links)
    if (href.startsWith('tel:')) {
      var src = window._hsiosSource || {};
      fbq('track', 'Contact', {
        content_name: 'Phone Call Click',
        content_category: 'Phone',
        value: 0,
        currency: 'INR',
        traffic_source: src.source || '(direct)',
        campaign_name: src.campaign || '(none)',
        landing_page: src.landing_page || window.location.pathname
      });
    }
  });


  // ======================
  // 4. CONTACT EVENT — Email Clicks
  // ======================
  // Fires when someone clicks mailto:hello@hsios.in

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a');
    if (!el) return;
    var href = (el.href || '').toLowerCase();

    if (href.startsWith('mailto:')) {
      var src = window._hsiosSource || {};
      fbq('track', 'Contact', {
        content_name: 'Email Click',
        content_category: 'Email',
        traffic_source: src.source || '(direct)',
        campaign_name: src.campaign || '(none)',
        landing_page: src.landing_page || window.location.pathname
      });
    }
  });


  // ======================
  // 5. SCHEDULE EVENT — Consultation Booking Intent
  // ======================
  // Fires on "Book a Consultation" as a secondary event
  // (Lead fires first, Schedule adds scheduling intent signal)

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button');
    if (!el) return;
    var text = (el.textContent || '').trim().toLowerCase();

    if (text.includes('book a consultation') || text.includes('book consultation')) {
      fbq('track', 'Schedule', {
        content_name: 'Villa Consultation',
        content_category: 'Interior Consultation'
      });
    }
  });


  // ======================
  // 6. VIEW CONTENT — Project Pages
  // ======================
  // Fires when someone views a specific project (high-intent browsing)
  // Tracks which projects generate the most interest

  var projectPages = [
    { url: '/projects/casa-frangipani', name: 'Casa Frangipani' },
    { url: '/projects/serenity-villa', name: 'Serenity Villa' },
    { url: '/projects/villa-bellissimo', name: 'Villa Bellissimo' },
    { url: '/projects/villa-awas', name: 'Villa Awas' },
    { url: '/projects/cerulean', name: 'Cerulean' },
    { url: '/projects', name: 'All Projects' }
  ];

  var currentPath = window.location.pathname.toLowerCase();

  projectPages.forEach(function (project) {
    if (currentPath.includes(project.url)) {
      fbq('track', 'ViewContent', {
        content_name: project.name,
        content_type: 'property',
        content_category: 'Villa Project'
      });
    }
  });


  // ======================
  // 7. VIEW CONTENT — High-Intent Pages
  // ======================
  // Tracks visits to pages that signal strong buying intent

  var highIntentPages = [
    { url: '/pricing', name: 'Pricing Page', category: 'Pricing' },
    { url: '/how-we-work', name: 'How We Work', category: 'Process' },
    { url: '/services', name: 'Services Page', category: 'Services' },
    { url: '/digital-twin', name: 'Digital Twin', category: 'Technology' },
    { url: '/contact', name: 'Contact Page', category: 'Contact' }
  ];

  highIntentPages.forEach(function (page) {
    if (currentPath.includes(page.url)) {
      fbq('track', 'ViewContent', {
        content_name: page.name,
        content_type: 'page',
        content_category: page.category
      });
    }
  });


  // ======================
  // 8. VIEW CONTENT — Location Pages (Audience Segmentation)
  // ======================
  // Tracks which locations visitors are interested in
  // Helps you target ads by location interest

  var locationPages = [
    { url: '/alibag', name: 'Alibag Villas' },
    { url: '/mumbai', name: 'Mumbai' },
    { url: '/pune', name: 'Pune' },
    { url: '/karjat', name: 'Karjat & Lonavala' },
    { url: '/lonavala', name: 'Karjat & Lonavala' },
    { url: '/goa', name: 'Goa' },
    { url: '/nashik', name: 'Nashik' },
    { url: '/bangalore', name: 'Bangalore' }
  ];

  locationPages.forEach(function (loc) {
    if (currentPath.includes(loc.url)) {
      fbq('track', 'ViewContent', {
        content_name: loc.name,
        content_type: 'location',
        content_category: 'Location Interest'
      });
    }
  });


  // ======================
  // 9. VIEW CONTENT — NRI / Who We Serve Pages
  // ======================
  // NRI owners are a high-value segment — track them separately

  var audiencePages = [
    { url: '/nri', name: 'NRI Owners', category: 'NRI' },
    { url: '/villa-owners', name: 'Villa Owners', category: 'Villa Owner' },
    { url: '/architects', name: 'Architects & Designers', category: 'Professional' },
    { url: '/developers', name: 'Developers', category: 'Developer' },
    { url: '/commercial', name: 'Commercial Spaces', category: 'Commercial' }
  ];

  audiencePages.forEach(function (audience) {
    if (currentPath.includes(audience.url)) {
      fbq('track', 'ViewContent', {
        content_name: audience.name,
        content_type: 'audience_segment',
        content_category: audience.category
      });
    }
  });


  // ======================
  // 10. LANDING PAGE & SOURCE TRACKING
  // ======================
  // Fires on EVERY page load — captures WHERE the visitor came from
  // and WHICH page they landed on. This is your "keyword equivalent"
  // for Meta Ads. Use UTM parameters in your ad URLs to track campaigns.
  //
  // Example ad URL: https://hsios.in/alibag?utm_source=meta&utm_medium=cpc&utm_campaign=alibag_villas&utm_content=carousel_ad
  //
  // This data shows up in Events Manager under PageView parameters

  // Parse UTM parameters from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var utmSource = urlParams.get('utm_source') || '(direct)';
  var utmMedium = urlParams.get('utm_medium') || '(none)';
  var utmCampaign = urlParams.get('utm_campaign') || '(none)';
  var utmContent = urlParams.get('utm_content') || '(none)';
  var utmTerm = urlParams.get('utm_term') || '(none)';    // <-- this is your "keyword" field
  var fbclid = urlParams.get('fbclid');                     // Meta ad click ID

  // Fire a custom event that captures the full source info
  fbq('trackCustom', 'PageLanding', {
    landing_page: window.location.pathname,
    page_title: document.title,
    traffic_source: utmSource,
    traffic_medium: utmMedium,
    campaign_name: utmCampaign,
    ad_content: utmContent,
    keyword: utmTerm,
    full_url: window.location.href,
    referrer: document.referrer || '(direct)',
    is_meta_ad: fbclid ? 'yes' : 'no'
  });

  // Store source info so it's also sent with Lead/Contact events
  window._hsiosSource = {
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    content: utmContent,
    keyword: utmTerm,
    landing_page: window.location.pathname,
    is_meta_ad: fbclid ? 'yes' : 'no'
  };


  // ======================
  // 11. CUSTOM EVENT — Chat Widget Interaction
  // ======================
  // Fires when someone clicks "Chat with us" or "Ask a question"
  // The HSI Assistant widget is a soft lead capture

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button, div');
    if (!el) return;
    var text = (el.textContent || '').trim().toLowerCase();

    if (text.includes('chat with us') || text.includes('ask a question') || text.includes('ask us')) {
      fbq('trackCustom', 'ChatWidgetOpen', {
        content_name: 'HSI Assistant',
        content_category: 'Chat Widget'
      });
    }
  });


  // ======================
  // 12. CUSTOM EVENT — Scroll Depth (Engagement Signal)
  // ======================
  // Fires when someone scrolls 75% of the page
  // Signals high engagement — useful for building retargeting audiences

  var scrollFired = false;
  window.addEventListener('scroll', function () {
    if (scrollFired) return;
    var scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
    if (scrollPercent >= 75) {
      scrollFired = true;
      fbq('trackCustom', 'HighEngagement', {
        content_name: document.title,
        content_category: 'Scroll Depth 75%',
        page_path: window.location.pathname
      });
    }
  });


  // ======================
  // 13. CUSTOM EVENT — Time on Site (Quality Signal)
  // ======================
  // Fires after 60 seconds on a page
  // Helps identify quality visitors for lookalike audiences

  setTimeout(function () {
    fbq('trackCustom', 'QualityVisit', {
      content_name: document.title,
      content_category: 'Time on Page 60s',
      page_path: window.location.pathname
    });
  }, 60000);

});
`.replace(/<\/script/gi, '<\\/script')
