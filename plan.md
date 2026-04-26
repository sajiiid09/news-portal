# COMPLETE PAGE-BY-PAGE SPECIFICATION – BORTOMANBANGLA CLONE

---

## GLOBAL ELEMENTS (Appear on 100% of pages)

These are **not page-specific** — they repeat everywhere.

### G1. Topmost Utility Bar (Sticky, z-index high)
| Element | Details |
|---------|---------|
| Left side | Hamburger menu icon (☰) — opens off-canvas mobile menu |
| Left side | Site logo (text or image) — links to homepage |
| Left side (optional) | Current date & location (e.g., "শুক্রবার, ২৪ এপ্রিল ২০২৬, ঢাকা") |
| Right side | "ই-পেপার" (E-paper) link with newspaper icon |
| Right side | "Eng" / "বাংলা" language switcher toggle |
| Right side | Search icon — opens search modal/overlay |
| Right side | Login/Profile icon — if logged out shows "লগইন"; if logged in shows profile avatar |
| Right side (on scroll) | "সর্বশেষ" (Latest) link may appear as sticky element |
| Background | White or off-white with subtle bottom border shadow |

### G2. Main Navigation Menu (Desktop – horizontal, Mobile – hamburger + accordion)
| Menu Item | Dropdown Content (Sub-menus) |
|-----------|----------------------------|
| সর্বশেষ (Latest) | No dropdown — links to /latest |
| বাংলাদেশ (Bangladesh) | Dropdown: ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, বরিশাল, সিলেট, রংপুর, ময়মনসিংহ, শিক্ষা, স্বাস্থ্য |
| রাজনীতি (Politics) | Dropdown: জাতীয়, আন্তর্জাতিক, নির্বাচন, সংসদ, স্থানীয় সরকার, আওয়ামী লীগ, বিএনপি, জাতীয় পার্টি |
| বিশ্ব (World) | Dropdown: দক্ষিণ এশিয়া, উত্তর আমেরিকা, ইউরোপ, মধ্যপ্রাচ্য, এশিয়া, আফ্রিকা, লাতিন আমেরিকা, অস্ট্রেলিয়া, প্রবাসী বাংলা |
| বাণিজ্য (Business) | Dropdown: অর্থনীতি, ব্যাংক ও বীমা, শেয়ারবাজার, কর্পোরেট, রফতানি-আমদানি, কৃষি, পর্যটন |
| মতামত (Opinion) | Dropdown: সম্পাদকীয়, কলাম, বিশ্লেষণ, পাঠকের মতামত, বিশেষ সংখ্যা |
| খেলা (Sports) | Dropdown: ক্রিকেট, ফুটবল, অন্যান্য খেলা, বাংলাদেশ ক্রিকেট, আন্তর্জাতিক ক্রিকেট, ক্লাব ফুটবল, এশিয়াড ও অলিম্পিক |
| বিনোদন (Entertainment) | Dropdown: চলচ্চিত্র, টিভি ও নাটক, সঙ্গীত, মঞ্চ ও থিয়েটার, মেরিল-প্রথম আলো অ্যাওয়ার্ডস, গপ্পো ও সাহিত্য |
| চাকরি (Jobs) | Dropdown: সরকারি চাকরি, বেসরকারি চাকরি, ব্যাংক চাকরি, শিক্ষক নিয়োগ, নিয়োগ বিজ্ঞপ্তি, ক্যারিয়ার উন্নয়ন |
| জীবনযাপন (Lifestyle) | Dropdown: স্বাস্থ্য ও সুস্থতা, রেসিপি ও খাবার, ফ্যাশন, ঘর ও বাগান, সম্পর্ক ও মন, টেকনোলজি, শিক্ষক ও শিক্ষার্থী |
| ভিডিও (Video) | Dropdown: সরাসরি (Live), সাক্ষাৎকার, রিপোর্টাজ, ফিচার, আলোচনা অনুষ্ঠান, খেলা, বিনোদন, ভাইরাল |

**Mobile Menu (Off-canvas):**
- Background overlay (dimmed)
- Slide-in from left (width 80%)
- User info at top (if logged in: name, avatar; if logged out: login/signup buttons)
- Search bar inside menu
- All categories as expandable accordion (tap to expand sub-categories)
- Dark/light mode toggle at bottom
- "Logout" button if logged in

### G3. Breaking News Ticker (Sticky, below nav)
| Element | Details |
|---------|---------|
| Label | "সর্বশেষ" or "ব্রেকিং নিউজ" with red background / blinking dot |
| Content | Horizontal scrolling marquee (or static carousel) of latest headlines — clickable to article |
| Controls | Pause/play on hover, left/right arrows, close button (optional) |
| Update behavior | Fetches new items via AJAX every 30–60 seconds |

### G4. Sidebar (Right Rail – exists on most content pages except full-width pages like e-paper)
| Section | Content |
|---------|---------|
| **Most Read** | Title: "সর্বাধিক পঠিত" → list of 5–10 headlines with rank numbers (1,2,3…) and view counts — refreshed daily/hourly |
| **Latest News** | Title: "সর্বশেষ খবর" → list of 10 headlines with timestamps (e.g., "২ ঘণ্টা আগে") — auto-refreshes |
| **Opinion Spotlight** | Title: "মতামত" → 2–3 featured columnists (photo, name, article headline) |
| **Video of the Day** | Embedded YouTube/Vimeo player with thumbnail and play button |
| **Photo Gallery Highlight** | Thumbnail grid of latest 3–4 galleries with "গ্যালারি দেখুন" link |
| **Newsletter Signup** | Email input field + "সাবস্ক্রাইব" button; success/error message |
| **E-paper Preview** | Small screenshot of today's front page with "বিস্তারিত" link |
| **Advertisement** | Multiple ad slots: 300x250, 300x600, native ads (marked "বিজ্ঞাপন") |
| **Social Media Box** | Facebook page like box, Twitter/X feed embed, YouTube subscribe button |
| **Tags / Trending Topics** | Cloud of trending hashtags/keywords (e.g., #তাপপ্রবাহ, #বাজেট২০২৬) |

### G5. Footer (Global, appears on all pages)
| Section | Links/Content |
|---------|--------------|
| **Logo + About** | Site logo, brief description ("প্রথম আলো বাংলা নিউজ পেপার"), copyright year |
| **Category Links** | All main categories (same as navigation) as text links |
| **Sub-category Links** | Popular sub-categories (e.g., শিক্ষা, স্বাস্থ্য, ক্রিকেট) |
| **Static Pages** | আমাদের সম্পর্কে, যোগাযোগ, বিজ্ঞাপন, চাকরি, নীতিমালা, গোপনীয়তা নীতি, ব্যবহারের শর্তাবলী |
| **Apps** | Google Play and App Store badges with links |
| **Social Media Icons** | Facebook, YouTube, Twitter/X, Instagram, LinkedIn, WhatsApp channel |
| **Contact Info** | Email: info@example.com, phone (if any), editorial contact |
| **RSS Feed** | Link to RSS |
| **Back to Top** | Button/arrow that scrolls to top |
| **Language/Region** | বাংলা / English selector, Bangladesh region |
| **Cookie Consent Reminder** | Small link to "Cookie Preferences" |

### G6. Search Overlay/Modal (Triggered by search icon)
| Element | Details |
|---------|---------|
| Full-screen or large centered modal | Background dimmed, close button (X) |
| Search input field | Placeholder: "খুঁজুন... কীওয়ার্ড, বিষয় বা লেখক" |
| Auto-suggest | Dropdown showing popular searches, recent searches (if logged in) |
| Search button | Magnifying glass icon or "সার্চ" text |
| Filter toggles | Category filter, date range (last 24h, week, month, year) |
| Recent searches list (optional) | Stored in localStorage |
| Trending searches | "জনপ্রিয় অনুসন্ধান" below input |

### G7. Cookie Consent Banner (if not accepted)
| Element | Details |
|---------|---------|
| Persistent bar at bottom or modal | Message: "By using this site, you agree to our Privacy Policy." |
| Buttons | "OK" (accept), "Settings" (customize), "Learn More" (link to privacy page) |
| After accept | Banner disappears, stores consent in localStorage/cookie |

### G8. Advertisement Units (Global placements)
| Position | Size | Label |
|----------|------|-------|
| Above hero section (Leaderboard) | 728x90 or 970x250 | "বিজ্ঞাপন" |
| Inside article body (after 3rd paragraph) | 300x250 or 468x60 | "বিজ্ঞাপন" |
| Sidebar (sticky) | 300x600 | "বিজ্ঞাপন" |
| Between news grid rows | 728x90 | "বিজ্ঞাপন" |
| Mobile interstitials | Full-width banner | "বিজ্ঞাপন" |
| Video pre-roll | Before video playback | "বিজ্ঞাপন" |

---

## PAGE 1: HOMEPAGE (Index)

### URL: `/`

### Layout: Multi-section, 2-column (Main content 70% / Sidebar 30%) but with full-width sections

### Detailed Component List (Top to Bottom)

#### H1. Breaking Ticker (Global G3)

#### H2. Hero Section (Full-width or near-full)
**Left (60%):**
- **Top Story (Primary)**
  - Large image (16:9, 800x450)
  - Category tag (e.g., "বাংলাদেশ") with background color
  - Headline (large font, 28-32px)
  - Summary (1-2 lines)
  - Author name or "স্টাফ রিপোর্টার"
  - Timestamp (e.g., "১ ঘণ্টা আগে")
  - "বিস্তারিত" (Read more) link or entire card clickable

**Right (40%):**
- **Secondary Hero Stories (2–3 items)**
  - Each: small image (1:1 or 4:3), headline (2 lines), timestamp, category
  - Optional: "সরাসরি" (Live) badge for live news

#### H3. Section: "সর্বশেষ" (Latest News) – Horizontal Scroll
| Element | Details |
|---------|---------|
| Header | "সর্বশেষ" with red underline, "সব দেখুন" link to /latest |
| Container | Horizontal scrollable row (desktop: 4–5 cards, mobile: 2 cards) |
| Each card | Image (120x80), headline (2 lines), timestamp, category (small) |
| Navigation | Left/right chevron arrows on hover |

#### H4. Section: "বাংলাদেশ" (Bangladesh) – Grid
| Element | Details |
|---------|---------|
| Header | "বাংলাদেশ" with category color (green?), "সব দেখুন" link to /bangladesh |
| Layout | Left: 1 featured story (large image + full headline + summary) |
| Right: 4–5 secondary stories (list layout: small image, headline, timestamp) |
| Bottom (optional) | "আরও খবর" button linking to category page |

#### H5. Section: "রাজনীতি" (Politics) – Same grid pattern as H4

#### H6. Section: "বিশ্ব" (World) – Same grid pattern

#### H7. Full-width Advertisement Break (728x90 or responsive)

#### H8. Section: "মতামত" (Opinion) – Special Layout
| Element | Details |
|---------|---------|
| Header | "মতামত" with "সব কলাম" link |
| Featured Columnist | Large card: columnist photo (circle or rectangle), name, designation, article headline, summary, timestamp |
| Other columns | 3–4 smaller cards: just headline, columnist name, timestamp |
| Editorial | Separate box: "সম্পাদকীয়" with headline and link |

#### H9. Section: "খেলা" (Sports) – Grid with tabs
| Element | Details |
|---------|---------|
| Tab bar | "ক্রিকেট", "ফুটবল", "অন্যান্য খেলা" — clicking loads different content via AJAX |
| Active tab | Underlined or highlighted |
| Content grid | 6–8 cards (2 rows of 4) — image, headline, timestamp |

#### H10. Section: "বিনোদন" (Entertainment) – Same as sports or mixed grid + video thumbnails

#### H11. Section: "ভিডিও" (Video Gallery) – Thumbnails with play icon
| Element | Details |
|---------|---------|
| Header | "ভিডিও", "সব দেখুন" link to /video |
| Layout | 4–6 video thumbnails in grid |
| Each video | Thumbnail (16:9), play icon overlay, duration (e.g., "3:45"), title, view count (optional) |
| Click behavior | Opens video player modal or video page |

#### H12. Section: "ছবি" (Photo Gallery)
| Element | Details |
|---------|---------|
| Header | "ছবি", "সব গ্যালারি" link |
| Layout | Horizontal scroll of gallery thumbnails |
| Each gallery | Thumbnail, title, number of photos (e.g., "১২ ছবি") |

#### H13. Section: "চাকরি" (Jobs) / "জীবনযাপন" (Lifestyle) – Mixed with small cards

#### H14. Section: "সর্বাধিক পঠিত" (Most Read) – Often placed in sidebar but can also appear as full-width

#### H15. Footer (Global G5)

### Interactive Elements on Homepage:
- Infinite scroll / "লোড আরও" button at bottom
- Lazy loading images
- Hover effects: image zoom, headline color change, shadow on card
- Click on card → goes to article page
- Section headers with category color coding
- "সরাসরি" (Live) badge if article is live blog

---

## PAGE 2: CATEGORY PAGE (e.g., /bangladesh)

### URL pattern: `/:category` (e.g., `/bangladesh`, `/world`, `/sports`)

### Layout: 2-column (Main 70% / Sidebar 30%)

### Components (Top to Bottom):

#### C1. Global Header + Nav + Ticker (G1–G3)

#### C2. Category Header Section
| Element | Details |
|---------|---------|
| Page title | "বাংলাদেশ" (H1) — large, bold, with category color |
| Subtitle/Description | Optional tagline (e.g., "দেশের খবর, সর্বশেষ আপডেট") |
| Sub-category navigation | Horizontal scrollable tabs: "সব", "ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "শিক্ষা", "স্বাস্থ্য" — active tab underlined |
| RSS icon | Link to category RSS feed |

#### C3. Featured Story (Top of main column)
- Large image (16:9)
- Headline (big)
- Summary
- Author, date
- Share buttons (Facebook, Twitter, WhatsApp)

#### C4. News Grid (Main Content Area)
| Setting | Value |
|---------|-------|
| Layout | 2 columns (desktop), 1 column (mobile) |
| Item per page | 20, then pagination or infinite scroll |
| Each card | Image (4:3), category sub-tag (e.g., "ঢাকা"), headline (2-3 lines), timestamp, optional brief |

#### C5. Pagination / Infinite Scroll
| Element | Details |
|---------|---------|
| If pagination | "পূর্ববর্তী" (Previous), page numbers (1,2,3...), "পরবর্তী" (Next) |
| If infinite scroll | "আরও লোড করুন" button, or auto-load on scroll to bottom |
| Loading indicator | Spinner while fetching |

#### C6. Sidebar (Global G4)

#### C7. Footer (Global G5)

### Special Category Page Variations:

#### /opinion (মতামত)
- No "featured story" — instead latest columns as list
- Columnist avatars appear next to headlines
- Filter by columnist (dropdown or sidebar)

#### /video (ভিডিও)
- Grid of video thumbnails (3 columns)
- Filter: "সর্বশেষ", "জনপ্রিয়", "সাক্ষাৎকার", "রিপোর্টাজ"
- Each video shows duration, view count, upload date

#### /jobs (চাকরি)
- Job circulars displayed as cards with: company logo, job title, deadline, "বিস্তারিত" button
- Filter by: government/private/bank, location, deadline
- Apply link (external)

---

## PAGE 3: SUB-CATEGORY PAGE (e.g., /bangladesh/dhaka)

### URL pattern: `/:category/:subcategory`

### Exactly same as category page but with:
- H1: "ঢাকা – বাংলাদেশ"
- Sub-category tabs show siblings (e.g., for Dhaka: "সব", "ঢাকা শহর", "নগর উন্নয়ন", "ট্রাফিক", "আবহাওয়া")
- Breadcrumb: Home > বাংলাদেশ > ঢাকা
- Meta title: "ঢাকার খবর – প্রথম আলো"
- URL updates, content filtered by `subcategory = "dhaka"`

---

## PAGE 4: SINGLE ARTICLE PAGE (News Detail)

### URL pattern: `/:category/:subcategory/:article-slug` or `/:year/:month/:day/:slug`

### Layout: Centered with side columns (Main 60% / Right sidebar 30% / Left margin 5% for social share)

### Detailed Components (Top to Bottom):

#### A1. Global Header + Nav (G1–G3)

#### A2. Breadcrumb (Schema markup)
- Home > বাংলাদেশ > ঢাকা > "শিরোনাম"

#### A3. Article Header
| Element | Details |
|---------|---------|
| Category tag | Clickable link to category page |
| Headline (H1) | Large, 32–42px, bold |
| Subheadline | 1–2 sentence summary, smaller |
| Author info | Name (clickable to author archive), author title (e.g., "সিনিয়র করেসপন্ডেন্ট"), author avatar (optional) |
| Date & time | Published: "২৪ এপ্রিল ২০২৬, ১০:৩০ AM" — Updated timestamp if edited |
| Reading time | "৩ মিনিট পড়া" |
| Share buttons (floating left or top) | Facebook, Twitter, WhatsApp, LinkedIn, Email, Copy link, Print |
| Bookmark/Save button | Icon (heart or bookmark) — only if logged in |

#### A4. Featured Image
| Element | Details |
|---------|---------|
| Image | Full width of main column, 16:9 or 4:3 |
| Caption | Below image (italic, small text) |
| Credit | Photographer name or source (e.g., "ছবি: প্রথম আলো") |

#### A5. Article Body
| Element | Details |
|---------|---------|
| Text | বাংলা font (SolaimanLipi, Kalpurush, or font-face) |
| Drop cap (first letter) | Optional large initial |
| Subheadings (H2, H3) | Inside content |
| Inline images | With caption and credit |
| Inline videos | Embedded YouTube/Vimeo or custom player |
| Blockquotes | Styled with border/background |
| Pull quotes | Large text floated left/right |
| Links | Internal (to other articles) and external (open in new tab) |
| Infographic/sidebar | Optional callout box with key numbers or facts |
| Related topics/tags | Clickable tags at end (e.g., "তাপপ্রবাহ", "আবহাওয়া") |

#### A6. In-article Advertisement
- After 3rd or 4th paragraph
- Also after 50% scroll

#### A7. Author Bio Box (below article)
| Element | Details |
|---------|---------|
| Author photo | Circle thumbnail |
| Author name | Link to author's all articles |
| Author bio | Short description (e.g., "ঢাকা প্রতিনিধি") |
| Social links | Twitter, Facebook, LinkedIn (if provided) |
| All articles link | "লেখকের অন্যান্য লেখা" |

#### A8. Article Footer
| Element | Details |
|---------|---------|
| Tags | Full list of tags (each clickable to tag archive) |
| Share buttons (again) | Same as top |
| Reactions | "আপনার প্রতিক্রিয়া জানান" with emojis (like, love, sad, angry, surprised) — tracks reactions count |

#### A9. Comments Section (if enabled)
| Element | Details |
|---------|---------|
| Comment count | "মন্তব্য (২৩)" |
| Comment form | Textarea, name, email (if guest), or auto if logged in |
| "Reply" button | On each comment |
| Nested comments | Indented, threaded |
| Sorting | "সর্বাধিক পঠিত" / "সর্বশেষ" |
| Moderation | Report inappropriate flag |
| Load more comments | Pagination inside comments |

#### A10. Related Articles (Below comments)
| Element | Details |
|---------|---------|
| Title | "সম্পর্কিত খবর" |
| Layout | Horizontal scroll or grid of 3–4 cards |
| Selection logic | Based on same category, same tags, or same author |

#### A11. Sidebar (Global G4 – but may have article-specific widgets like “এই লেখক সম্পর্কে”)

#### A12. Footer (Global G5)

---

## PAGE 5: LIVE BLOG PAGE (e.g., /live/national-election)

### URL pattern: `/live/:slug`

### Special template – different from standard article

#### L1. Header: "সরাসরি" (Live) badge + title
#### L2. Timestamp of last update
#### L3. Auto-refresh behavior: new posts appear every 30 seconds (with notification sound optional)
#### L4. Stream of updates (reverse chronological):
- Each update: timestamp, text, optional image, location (if any)
- "সরাসরি আপডেট" label for newest
#### L5. Scroll to latest button (floating)
#### L6. Reader comments/questions (can be embedded)

---

## PAGE 6: PHOTO GALLERY PAGE (Single Gallery)

### URL: `/photo/:gallery-slug`

### Layout: Full-width or centered with lightbox

#### P1. Gallery Title (H1)
#### P2. Date, number of photos (e.g., "মোট ১৫ ছবি")
#### P3. Thumbnail grid (4–5 columns)
#### P4. Click on thumbnail → opens lightbox slider:
- Large image
- Next/previous arrows
- Caption below image
- Counter (e.g., "৩/১৫")
- Share button
- Download button (optional)
- Close button (X)
- Autoplay slideshow option
#### P5. Related galleries below

---

## PAGE 7: E-PAPER VIEWER

### URL: `/epaper` and `/epaper/:date`

### Layout: Full-width

#### E1. Header: "ই-পেপার - প্রথম আলো" + date picker
#### E2. Thumbnails of pages (front page, page 2, page 3…)
#### E3. Click on a page → opens full-page PDF or large image viewer
#### E4. Zoom in/out, download PDF, print
#### E5. Archive navigation: "পূর্ববর্তী সংখ্যা" (Previous issue), "পরবর্তী সংখ্যা" (Next issue)
#### E6. Calendar view to jump to any date

---

## PAGE 8: SEARCH RESULTS PAGE

### URL: `/search?q=keyword`

### Layout: 2-column (results 70% / sidebar 30%)

#### S1. Search query displayed: "খুঁজে পাওয়া গেছে ‘তাপপ্রবাহ’ এর জন্য ২১২টি ফলাফল"
#### S2. Filters (horizontal bar):
- Category drop-down (সব, বাংলাদেশ, রাজনীতি...)
- Sort by: প্রাসঙ্গিকতা (relevance) / তারিখ (date)
- Date range: যেকোনো সময় / শেষ ২৪ ঘণ্টা / শেষ সপ্তাহ / শেষ মাস / কাস্টম রেঞ্জ
#### S3. Results list (each item):
- Image thumbnail (small)
- Category tag
- Headline (link)
- Summary (1 line)
- Date
- Author
- Highlight search terms in bold
#### S4. No results state: "কোনো ফলাফল পাওয়া যায়নি" + suggestions (check spelling, try different keywords)
#### S5. Pagination same as category page
#### S6. Sidebar: trending searches, recent searches

---

## PAGE 9: AUTHOR ARCHIVE PAGE

### URL: `/author/:author-name-slug`

### Layout: 2-column

#### AU1. Author header:
- Photo (avatar)
- Name
- Bio/designation
- Social links
- Total articles count
- "Follow" button (if user accounts exist)
#### AU2. List of articles by this author (reverse chronological)
- Same card style as category page
#### AU3. Pagination

---

## PAGE 10: TAG ARCHIVE PAGE

### URL: `/tag/:tag-name`

### Layout: Same as category page but H1 = tag name (e.g., "#তাপপ্রবাহ")
#### T1. Tag description (optional)
#### T2. List of articles with this tag

---

## PAGE 11: USER LOGIN / REGISTRATION

### URL: `/login`, `/register`, `/logout`

### Components:

#### Login Modal or Page:
- Email/phone field
- Password field
- Remember me checkbox
- "লগইন" button
- Forgot password link
- Social login: Google, Facebook

#### Registration Page:
- Name, Email, Phone (optional), Password, Confirm password
- Terms & conditions checkbox
- "নিবন্ধন" button

#### Forgot Password:
- Email field → send reset link

#### Logout: Destroys session, redirects to homepage

---

## PAGE 12: USER DASHBOARD (Logged in only)

### URL: `/dashboard`

### Tabs:
#### D1. Profile:
- Name, email, phone (editable)
- Profile picture upload
- Password change
- Save button

#### D2. Saved Articles (Bookmarks):
- List of saved articles with remove button
- Pagination

#### D3. Comment History:
- List of user's comments (click to view article)
- Edit/delete option (within time limit)

#### D4. Newsletter Subscription:
- Checkboxes: daily newsletter, breaking news alerts, category-specific

#### D5. Logout button

---

## PAGE 13: STATIC PAGES

### About Us (/about)
- History of newspaper
- Mission statement
- Editorial team photos + names
- Contact email/phone

### Contact (/contact)
- Form: নাম, ইমেইল, বিষয়, বার্তা → sends to admin email
- Office address with map (Google Maps embed)
- Phone numbers
- Social media links

### Privacy Policy (/privacy)
- Legal text, cookie usage, data collection

### Terms of Use (/terms)
- User guidelines, content usage rules

### Advertisement (/advertise)
- Rate card, contact person, banner sizes available

---

## PAGE 14: 404 NOT FOUND PAGE

### URL: `*` (catch-all)

### Components:
- 404 illustration
- "পৃষ্ঠাটি খুঁজে পাওয়া যায়নি"
- Search bar
- Back to homepage button
- Popular categories links

---

## PAGE 15: SPECIAL EVENT / AWARDS PAGE (e.g., BORTOMANBANGLA Awards)

### URL: `/bortoman-bangla-awards-2025`

### Components:
- Hero banner with event name, date
- Winners list (by category) – each with photo, name, award name
- Red carpet gallery (photo grid)
- Video highlights (YouTube playlist)
- Nominees list (optional)
- Sponsors logos
- Past years archive links

---

## ADDITIONAL TINY DETAILS (Often missed)

| Detail | Implementation |
|--------|----------------|
| **Reading progress bar** | At top of article page, fills as user scrolls |
| **Last updated timestamp** | In article header if modified after publish |
| **Estimated reading time** | Calculated from word count (average 200 words/minute) |
| **Social share image** | Open Graph meta tag for Facebook/Twitter card |
| **AMP version** | Separate `/amp/` URLs (optional) |
| **Sticky sidebar** | Sidebar follows scroll but stops before footer |
| **Back to top button** | Appears after scrolling 300px |
| **Font size adjuster** | A+ / A- buttons at top of article |
| **Dark mode toggle** | Moon/sun icon in header – persists via cookies |
| **Native lazy loading** | `loading="lazy"` on all images below the fold |
| **Responsive images** | `srcset` for different breakpoints (320px, 768px, 1024px) |
| **Schema.org markup** | Article, NewsArticle, BreadcrumbList, Person, Organization |
| **Meta tags** | Title, description, keywords, author, canonical URL |
| **Twitter Card** | `twitter:card`, `twitter:image`, `twitter:site` |
| **Open Graph** | `og:title`, `og:image`, `og:url`, `og:type` |
| **RSS Feeds** | `/rss.xml`, `/category/bangladesh/rss.xml` |
| **Sitemap** | `/sitemap.xml` | `/sitemap-index.xml` |
| **Robots.txt** | `/robots.txt` |
| **Favicon** | .ico, .png (multiple sizes), SVG |
| **PWA manifest** | `/manifest.json` for installable app |
| **Offline page** | Service worker caching shell |
| **Email sharing** | `mailto:` link with subject+body pre-filled |
| **WhatsApp share** | `wa.me/?text=URL` |
| **Copy link** | Clipboard API with "লিংক কপি হয়েছে" toast |
| **Inline comment replies** | Live update without page reload |
| **AJAX pagination** | Load next page without full refresh |
| **Infinite scroll throttle** | Fetch only when nearing bottom (debounced) |
| **Search debounce** | 300ms delay before API call |
| **Loading skeletons** | Gray placeholders while content loads |
| **Image placeholder** | Low-res blurhash or solid color before image loads |
| **Error boundary** | Fallback UI if component fails |
| **Scroll to comment form** | "মন্তব্য লিখুন" button scrolls to form |
| **User mention in comments** | `@username` linking to profile |
| **Notification bell** | If logged in: shows recent comments/replies |
| **Breaking news push** | Browser push notification for live updates |
| **E-paper page flip sound** | Optional audio on page turn |
| **Video autoplay mute** | Muted autoplay on scroll into view |
| **Gallery swipe on mobile** | Touch left/right for next image |
| **Double-tap zoom** | On images in gallery |
| **Share via QR code** | Modal showing QR code of current URL |
| **Email newsletter archive** | `/newsletter/archive` |
| **Poll/survey embed** | Interactive widget with results |
| **Weather widget** | In header or sidebar: ঢাকার তাপমাত্রা ৩২°C |
| **Cricket live scores** | Widget showing ongoing match score |
| **Currency converter** | USD/BDT, GBP/BDT (optional) |
| **Horoscope section** | Daily zodiac (lifestyle section) |
| **Prayer times** | For Dhaka (lifestyle section) |
| **Comic strip** | Daily cartoon (if available) |




# GLOBAL COLOR MAP – BortomanBangla (Black & White + Special Gradients)

## PRIMARY COLOR PALETTE (Base)

| Role | Color | Hex Code | Usage |
|------|-------|----------|-------|
| Pure Black | Black | `#000000` | Headlines (primary), body text (dark mode base), footer background |
| Pure White | White | `#FFFFFF` | Background (light mode), text on dark buttons, card backgrounds |
| Dark Gray | DARK_GRAY | `#1A1A1A` | Secondary text, meta info (timestamps, authors), borders (dark mode) |
| Medium Gray | MEDIUM_GRAY | `#666666` | Summaries, subheadlines, placeholder text |
| Light Gray | LIGHT_GRAY | `#E5E5E5` | Dividers, borders, disabled states |
| Off-White | OFF_WHITE | `#F5F5F5` | Section backgrounds, hover states (light mode) |

---

## GRADIENT COLOR SETUP

### Gradient 1 (Primary – Special Cards)
| Direction | Start Color | End Color |
|-----------|-------------|-----------|
| `135deg` (diagonal) | `#87CEE8` (Sky Blue) | `#FFFFFF` (White) |

**Usage:** Featured story cards, hero section backgrounds (as overlay), breaking news banner, award winner cards, special report cards.

**CSS Equivalent:**
```css
background: linear-gradient(135deg, #87CEE8, #FFFFFF);
```

**Text on this gradient:** Pure Black (`#000000`) for contrast, or Dark Gray when needed.

### Gradient 2 (Secondary – Category Headers, Subtle)
| Direction | Start Color | End Color |
|-----------|-------------|-----------|
| `90deg` (horizontal) | `#E8F1F8` (Very light blue) | `#FFFFFF` (White) |

**Usage:** Section headers, newsletter signup box, sidebar widget backgrounds.

---

## BUTTON COLOR SETUP

### Primary Buttons
| Property | Value |
|----------|-------|
| Background | `#B8C9DB` (Soft Steel Blue) |
| Text Color | `#000000` (Black) |
| Hover Background | `#A0B5CC` (Darker shade – 10% darken) |
| Hover Text | `#000000` |
| Active/Pressed Background | `#8AA3BF` (20% darken) |
| Border | `none` or `1px solid #000000` (if needed) |
| Border Radius | `4px` |
| Padding | `10px 20px` |

**Usage:** "বিস্তারিত" (Read more), "সাবস্ক্রাইব" (Subscribe), "লগইন" (Login), "সার্চ" (Search), "মন্তব্য" (Comment submit), "আরও লোড করুন" (Load more).

### Secondary Buttons (Outlined)
| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border | `1px solid #B8C9DB` |
| Text Color | `#000000` |
| Hover Background | `#B8C9DB` |
| Hover Text | `#000000` |
| Border Radius | `4px` |

**Usage:** "সব দেখুন" (See all), "পূর্ববর্তী" (Previous), "পরবর্তী" (Next), "বাতিল" (Cancel).

### Tertiary Buttons (Text only)
| Property | Value |
|----------|-------|
| Background | `transparent` |
| Text Color | `#000000` |
| Text Decoration | `underline` on hover |
| Border | `none` |

**Usage:** Footer links, "বিস্তারিত" in compact spaces, "লিংক কপি" (Copy link).

---

## STATUS & STATE COLORS

| State | Color | Hex | Usage |
|-------|-------|-----|-------|
| Error | Red | `#D32F2F` | Form validation, delete actions |
| Success | Green | `#2E7D32` | "সংরক্ষিত" (Saved), subscription confirmed |
| Warning | Yellow/Orange | `#F57C00` | Breaking news badge, "সাবধান" (Caution) |
| Info | Sky Blue (from gradient) | `#87CEE8` | Live badge background, info tooltips |
| Live Indicator | Red | `#FF0000` | "সরাসরি" (Live) dot + text |

---

## BACKGROUNDS (Page Sections)

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Body/Page Background | `#FFFFFF` | `#000000` |
| Header (Top bar) | `#FFFFFF` | `#0A0A0A` |
| Footer | `#000000` | `#000000` |
| Footer Text | `#FFFFFF` | `#FFFFFF` |
| Sidebar Background | `#FFFFFF` | `#0A0A0A` |
| Card Background (Regular) | `#FFFFFF` | `#1A1A1A` |
| Card Background (Special/Gradient) | `linear-gradient(135deg, #87CEE8, #FFFFFF)` | `linear-gradient(135deg, #87CEE8, #1A1A1A)` |
| Navigation Menu Background | `#FFFFFF` | `#0A0A0A` |
| Dropdown Menu Background | `#FFFFFF` | `#1A1A1A` |
| Modal Overlay | `rgba(0, 0, 0, 0.7)` | `rgba(0, 0, 0, 0.9)` |
| Breaking News Ticker | `#000000` | `#000000` |
| Breaking News Text | `#FFFFFF` | `#FFFFFF` |
| Cookie Consent Banner | `#1A1A1A` | `#1A1A1A` |
| Cookie Consent Text | `#FFFFFF` | `#FFFFFF` |

---

## TEXT COLORS

| Text Type | Light Mode | Dark Mode |
|-----------|-----------|-----------|
| Primary Headlines (H1-H6) | `#000000` | `#FFFFFF` |
| Body Text | `#1A1A1A` | `#E0E0E0` |
| Subheadlines / Summaries | `#666666` | `#AAAAAA` |
| Meta Info (Date, Author, Category) | `#666666` | `#999999` |
| Links (Standard) | `#000000` + underline on hover | `#FFFFFF` + underline |
| Links (Inside Gradient Cards) | `#000000` | `#000000` |
| Placeholder Text | `#999999` | `#666666` |
| Disabled Text | `#CCCCCC` | `#444444` |
| Footer Text | `#FFFFFF` | `#FFFFFF` |
| Footer Links | `#FFFFFF` (opacity 0.8) | `#FFFFFF` (opacity 0.8) |
| Footer Links Hover | `#FFFFFF` (opacity 1) | `#FFFFFF` (opacity 1) |

---

## BORDERS & DIVIDERS

| Element | Color | Hex |
|---------|-------|-----|
| Standard Border (Light Mode) | Light Gray | `#E5E5E5` |
| Standard Border (Dark Mode) | Dark Gray | `#333333` |
| Card Border (Regular) | `none` or Light Gray on hover | `#E5E5E5` |
| Input Field Border | Medium Gray | `#666666` |
| Input Field Focus Border | Button Color | `#B8C9DB` |
| Section Dividers | Light Gray | `#E5E5E5` |
| Horizontal Rule (`<hr>`) | Light Gray | `#E5E5E5` |

---

## HOVER & ACTIVE STATES

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Card Hover (Regular) | Border `#B8C9DB`, Shadow `rgba(0,0,0,0.1)` | Border `#B8C9DB`, Shadow `rgba(255,255,255,0.05)` |
| Card Hover (Gradient) | Slight brightness increase (`filter: brightness(0.98)`) | Same |
| Navigation Link Hover | Background `#F5F5F5` | Background `#1A1A1A` |
| Sidebar Widget Hover | Background `#F5F5F5` | Background `#1A1A1A` |

---

## SHADOWS

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Card Shadow (Regular) | `0 1px 3px rgba(0,0,0,0.08)` | `0 1px 3px rgba(255,255,255,0.05)` |
| Card Shadow (Hover) | `0 4px 12px rgba(0,0,0,0.12)` | `0 4px 12px rgba(255,255,255,0.08)` |
| Header Shadow | `0 2px 4px rgba(0,0,0,0.05)` | `0 2px 4px rgba(255,255,255,0.03)` |
| Modal Shadow | `0 20px 60px rgba(0,0,0,0.3)` | `0 20px 60px rgba(0,0,0,0.7)` |

---

## SPECIAL CARD VARIATIONS

### 1. Featured Hero Card (Gradient Background)
```css
background: linear-gradient(135deg, #87CEE8, #FFFFFF);
text-color: #000000;
button-background: #000000;
button-text: #FFFFFF;
```

### 2. Breaking News Card (Black Background)
```css
background: #000000;
text-color: #FFFFFF;
accent-color: #B8C9DB; /* for icons, borders */
```

### 3. Opinion / Columnist Card (White with subtle top border)
```css
background: #FFFFFF;
border-top: 4px solid #B8C9DB;
text-color: #000000;
```

### 4. Video Card (White + Play icon overlay)
```css
background: #000000; /* overlay */
play-icon: #FFFFFF;
play-icon-hover: #B8C9DB;
```

### 5. Photo Gallery Card
```css
background: #FFFFFF;
border: 1px solid #E5E5E5;
caption-text: #666666;
```

### 6. Job Circular Card (Special highlight)
```css
background: linear-gradient(90deg, #FFFFFF, #F5F9FC);
border-left: 4px solid #B8C9DB;
deadline-badge: #D32F2F (red);
```

---

## BUTTON SPECIFIC INSTANCES MAP

| Button Type | Background | Text Color | Hover BG |
|-------------|-----------|-----------|----------|
| **Read More (বিস্তারিত)** | `#B8C9DB` | `#000000` | `#A0B5CC` |
| **Subscribe (সাবস্ক্রাইব)** | `#000000` | `#FFFFFF` | `#333333` |
| **Login (লগইন)** | `#B8C9DB` | `#000000` | `#A0B5CC` |
| **Search (সার্চ)** | `#000000` | `#FFFFFF` | `#333333` |
| **Load More (আরও লোড করুন)** | `#FFFFFF` (outlined) | `#000000` | `#B8C9DB` |
| **Submit Comment** | `#000000` | `#FFFFFF` | `#333333` |
| **Cancel Comment** | `transparent` (text) | `#666666` | Underline |
| **Save Article (সংরক্ষণ)** | `transparent` | `#000000` | Icon fill `#B8C9DB` |
| **Share (শেয়ার)** | `#FFFFFF` | `#000000` | `#F5F5F5` |
| **Copy Link** | `#B8C9DB` | `#000000` | `#A0B5CC` |

---

## ACCENT & HIGHLIGHT COLORS (Limited Use)

| Element | Color | Hex |
|---------|-------|-----|
| Category Tags (Bangladesh) | Black | `#000000` |
| Category Tags (World) | Dark Gray | `#333333` |
| Category Tags (Sports) | Button Blue | `#B8C9DB` |
| Category Tags (Opinion) | Black + Italic | `#000000` |
| "সরাসরি" (Live) Badge | Red background + White text | `#FF0000` / `#FFFFFF` |
| "ব্রেকিং" Badge | Black background + White text | `#000000` / `#FFFFFF` |
| Quote Block Border | Button Blue | `#B8C9DB` |
| Link Underline | Button Blue (on hover) | `#B8C9DB` |
| Focus Ring (Inputs) | Button Blue | `#B8C9DB` |

---

## RESPONSIVE COLOR NOTES

| Screen Size | Behavior |
|-------------|----------|
| Desktop (>1024px) | Full contrast, gradients visible |
| Tablet (768px-1024px) | Same colors, reduced shadows |
| Mobile (<768px) | Background `#FFFFFF` always (light mode forced?) — or respect system preference |
| Dark Mode detection | Use `prefers-color-scheme: dark` media query |

---

## CSS VARIABLES (Global Implementation)

```css
:root {
  /* Base */
  --black: #000000;
  --white: #FFFFFF;
  --dark-gray: #1A1A1A;
  --medium-gray: #666666;
  --light-gray: #E5E5E5;
  --off-white: #F5F5F5;
  
  /* Special */
  --gradient-sky: linear-gradient(135deg, #87CEE8, #FFFFFF);
  --gradient-sky-dark: linear-gradient(135deg, #87CEE8, #1A1A1A);
  
  /* Buttons */
  --button-primary: #B8C9DB;
  --button-primary-hover: #A0B5CC;
  --button-primary-active: #8AA3BF;
  
  /* Status */
  --error-red: #D32F2F;
  --success-green: #2E7D32;
  --warning-orange: #F57C00;
  --live-red: #FF0000;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.3);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}

/* Dark Mode Override */
@media (prefers-color-scheme: dark) {
  :root {
    --white: #0A0A0A;
    --black: #FFFFFF;
    --dark-gray: #1A1A1A;
    --medium-gray: #AAAAAA;
    --light-gray: #333333;
    --off-white: #111111;
    --shadow-sm: 0 1px 3px rgba(255,255,255,0.05);
    --shadow-md: 0 4px 12px rgba(255,255,255,0.08);
  }
}
```

