# Tavi's Italian Restaurant — Bolt Build Prompt

## Overview

Build a complete, responsive **multi-page** restaurant website for **Tavi's Italian Restaurant**, a family-owned casual Italian eatery in Seven Points, Texas (Cedar Creek Lake area). This is NOT a template — it should feel like a custom-designed site that reflects the warmth, charm, and family atmosphere of this specific restaurant. No generic AI-looking design. Every section should feel intentional and handcrafted.

**Pages:** Home | Menu | About | Contact

Use React Router for client-side page navigation with smooth page transitions.

---

## Design Direction: Rustic Family Trattoria

### Aesthetic
Rustic Italian — think a cozy family trattoria that's been in the neighborhood for decades, not a luxury Tuscan villa. The vibe is warm, welcoming, and unpretentious. Old-world Mediterranean charm meets a small-town Texas lake community. The design should feel like stepping into a family-run Italian kitchen — textured, layered, lived-in, and full of character.

### Color Palette
- **Primary background:** Warm cream / aged parchment (#F5F0E8 range)
- **Secondary background:** Soft taupe / warm stone (#D9CFC1 range)
- **Primary accent:** Deep terracotta / Italian red (#8B3A2F or #A0522D range) — used for headings, buttons, and key elements
- **Secondary accent:** Olive green (#5C6B3C range) — used sparingly for highlights and decorative elements
- **Text:** Rich espresso brown (#3B2F2F) for body copy — NOT pure black
- **Italian flag tricolor (green #009246, white, red #CE2B37):** Used as subtle accent elements — a thin divider stripe, a decorative border, or within the logo placement area. Present but not dominant. These are the brand colors from their existing logo.
- **Warm gold/olive oil yellow (#C5A55A):** Very sparingly for small decorative touches

### Typography
- **Headings:** An elegant serif with Italian character — something like Playfair Display, Cormorant Garamond, or Lora. Should feel classic and warm, not stiff or corporate.
- **Section labels / category headers (like "Appetizers", "Seafood"):** A decorative script or italic serif that echoes hand-lettered Italian signage — similar to the script font used on their physical menu. Consider Italianno, Great Vibes, or Pinyon Script for decorative headers only.
- **Body text:** A clean, highly readable serif or sans-serif — Lato, Source Sans Pro, or similar. Needs to be easily legible at menu-item sizes.
- **Prices and details:** Slightly lighter weight of the body font

### Texture & Visual Treatment
- Subtle background textures throughout — aged paper, light fresco/plaster, or linen canvas feel. NOT flat solid colors.
- Sections should feel layered, with subtle shadows or slightly different texture tones to create depth between content areas.
- Decorative dividers between sections: thin hand-drawn lines, small olive branch illustrations, or subtle Italian tile-inspired borders.
- Food photography should feel warm-toned and inviting — if using any overlays, lean warm (slight golden/amber cast). All food images will be provided as original photos from the restaurant.

### Motifs & Decorative Elements
- Subtle botanical illustrations: olive branches, basil leaves, lemon sprigs — used as section dividers or background accents, NOT as the focal point
- A thin Italian tricolor stripe as a recurring design element (header border, section divider, footer accent)
- Vintage Italian-inspired decorative frames or borders around key content areas (like a featured dish or testimonial)
- Subtle background patterns inspired by Italian ceramic tile — very low opacity, texture only

---

## Shared Components (All Pages)

### Navigation Bar (Fixed/Sticky)
- Restaurant logo (will be provided as image file) on the left
- Nav links: Home | Menu | About | Contact
- "Call Now" button on the right with phone icon — links to tel:9034320330
- Active page indicator (underline, color change, or subtle highlight)
- Mobile: Hamburger menu with smooth slide-in overlay
- Background should be semi-transparent at page top, becoming solid with subtle shadow on scroll

### Footer (All Pages)
- Restaurant logo (smaller)
- Address, phone, hours (condensed)
- Social media links (Facebook icon — they have an active Facebook page)
- "Family Owned & Operated in Seven Points, Texas"
- Thin Italian tricolor stripe across the top of the footer as a design accent
- Quick nav links: Home | Menu | About | Contact
- Copyright line

---

## PAGE 1: HOME

### Section 1 — Hero
- Full-width hero with a warm, atmospheric food/restaurant image as background (will be provided or use a dark, warm Italian restaurant ambiance as placeholder)
- Overlay: Semi-transparent dark warm gradient (not pure black — dark brown/espresso)
- Restaurant logo prominently displayed (centered)
- Tagline: **"Family Owned & Operated"**
- Subtext: **"Authentic Italian Cuisine & New York Style Pizza on Cedar Creek Lake"**
- Two CTA buttons: **"View Our Menu"** (links to /menu) and **"Call to Order" (903) 432-0330**
- Include a small **"BYOB"** badge/ribbon element — this is a key selling point

### Section 2 — Welcome / About Preview
- Short introduction paragraph:
  > "Since opening our doors in Seven Points, Tavi's Italian Restaurant has been serving Cedar Creek Lake the kind of authentic Italian food that turns first-time visitors into family. Every dish is made with care using traditional recipes — from our hand-tossed New York style pizza to our homemade pastas and sauces. Come as a guest, leave as family."
- Accent with a small decorative Italian motif
- A small row of 3 feature icons/badges: **"Family Owned"** | **"Homemade Recipes"** | **"BYOB Welcome"**
- A "Learn More About Us" text link to /about

### Section 3 — Featured Dishes / House Favorites
- Section header: **"House Favorites"** in decorative script
- Horizontal scrollable card layout (desktop: 3 visible, mobile: 1 with swipe) showcasing 6 signature dishes with photos (photos will be provided)
- Featured items based on reviews and menu highlights:
  - **Lobster Ravioli** ($14.95)
  - **Chicken Scar Pella** ($14.95) — "A fan favorite"
  - **Tavi's Special Pizza** — "The works" ($14.95-$17.95)
  - **House Trio** — Lasagna, Chicken Parm & Fettuccine Alfredo ($14.95)
  - **Frutti di Mare** ($17.95)
  - **Chicken Marsala** ($12.95)
- Each card: Photo, dish name, brief one-line description, price
- Warm hover effect — slight zoom on photo, subtle shadow lift
- CTA button below the cards: **"View Full Menu"** linking to /menu

### Section 4 — Parallax Image Break
- **Full-width parallax scrolling section** that creates a dramatic visual pause between content areas
- Background: A large, warm-toned food or restaurant atmosphere image (will be provided — ideally a close-up of pasta being served, a table spread, or the restaurant interior)
- The image should be fixed-position (CSS `background-attachment: fixed`) so the content scrolls over it
- Semi-transparent dark warm overlay (espresso brown at ~40-50% opacity) so text is readable
- Centered overlay content — a single standout customer quote in large, elegant script typography:
  > *"This place is a hidden gem! Definitely the best Italian food on Cedar Creek Lake."*
  > — Ryan Clifford ⭐⭐⭐⭐⭐
- Decorative divider lines (thin, elegant) above and below the quote
- The parallax effect should be smooth and subtle — no jarring jumps
- Height: approximately 50-60vh so it feels immersive but doesn't dominate
- On mobile where `background-attachment: fixed` doesn't work well, fall back to a slow CSS transform-based scroll effect or a static image with the overlay content

### Section 5 — Testimonials Preview
- Section header: **"What Our Guests Say"** in decorative script
- Display 3 review cards in a row (desktop) / stacked or carousel (mobile)
- Each card: Quote excerpt, reviewer name, star rating
- Warm card backgrounds with subtle shadow
- Use these reviews:

**Review 1 — Steve Joplin:**
"The food was excellent, the staff was awesome and the atmosphere was pleasant. I had the lobster ravioli and it was outstanding. We will definitely be back!"
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5 | Atmosphere: 5/5

**Review 2 — Allison Doyle:**
"If I could give more stars I would. This place isn't just a restaurant, it's home. They are so welcoming and sweet."
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5 | Atmosphere: 5/5

**Review 3 — Karadi Kairn:**
"Fantastic service — I felt like I was being waited on hand and foot! The owner is delightful with a bright smile and came out and greeted our table."
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5 | Atmosphere: 5/5

- Small "See More Reviews" link pointing to the About page reviews section

### Section 6 — Location, Hours & CTA
- Two-column layout: Left = info, Right = embedded Google Map
- Address: **701 E Cedar Creek Pkwy, Seven Points, TX 75143**
- Phone: **(903) 432-0330** — large, tappable on mobile
- Hours:
  - **Monday:** Closed
  - **Sunday – Thursday:** 11am – 9pm
  - **Friday – Saturday:** 11am – 10pm
- Service options: **Dine-In** | **Drive-Thru** | **Takeout**
- Features: **BYOB Welcome** | **Free Wi-Fi** | **Outdoor Seating**
- "Get Directions" button linking to Google Maps
- On mobile: Stack vertically with map below info

---

## PAGE 2: MENU

### Menu Page Header
- Smaller hero/banner at top with a warm food image background and dark overlay
- Page title: **"Our Menu"** in decorative heading
- Subtitle: **"Authentic Italian Cuisine Made Fresh Daily"**
- Important callout banner: **"All entrees served with homemade rolls & house salad"**
- Secondary note: "Upgrade to Alfredo sauce for $2.95 · Upgrade to Caesar or Greek salad for $3.75"

### Menu Category Navigation
- Sticky horizontal category nav bar (scrollable on mobile) that stays below the main nav as you scroll
- Categories: Appetizers | Salads | Soups | Baked Pastas | Chicken & Veal | Seafood | House Specialties | Pizza | Baked Specialties | Subs | Kid's Menu | Sides | Desserts | Beverages
- Clicking a category smooth-scrolls to that section
- Active category highlights as you scroll through sections

### Menu Content Sections
Each category section has a decorative script header and a clean item layout showing name, description (if applicable), and price. Use a two-column grid on desktop, single column on mobile.

#### Complete Menu Data:

**Appetizers:**
- Artichoke & Spinach Dip — $8.95
- Calamari Fritti — $8.95
- Garlic Bread — $3.50 (Add cheese +$1.00)
- Bruschetta — Marinated diced tomatoes, basil, garlic, olive oil, onion & Parmesan cheese on freshly baked bread — $6.95
- Chicken Wings — 6pc $9.95 / 12pc $13.95, choice of Buffalo sauce or lemon pepper (*Add ranch or blue cheese $0.75 ea.)
- Stuffed Mushrooms — 6pc $8.95
- Fried Mushrooms — 12pc $7.95
- Fried Ravioli — 8pc $6.95
- Mozzarella Sticks — 6pc $6.95

**Salads:**
- Tossed Salad — $2.95
- Tavi's Salad — Mozzarella cheese, black olives, tomatoes, mushrooms — $7.95
- Chef Salad — Grilled chicken, roasted red peppers, tomatoes, fresh Mozzarella — $11.95
- Greek Salad Special — Onions, olives, Feta cheese, tomatoes, roasted red peppers in olive oil & red vinegar dressing — $7.95
- Antipasta Salad — Ham, salami, Provolone cheese, black olives, tomatoes, mushrooms, Mozzarella cheese — $8.95
- Grilled Chicken Meli's Salad — Black olives, onions, mushrooms, artichoke hearts, olive oil & vinegar dressing — $11.95
- Caesar Salad — $6.95 (with chicken $10.95)

**Fresh Homemade Soups:**
- Minestrone — Italian soup with vegetables & pasta — $6.50
- Chicken Noodle — Homemade traditional recipe — $6.50

**Sides:**
- Marinara Sauce — $1.75
- Alfredo Sauce — $4.45
- Alla Panna Sauce (Pink Sauce) — $4.45
- Garlic & Olive Oil — $2.00
- Grilled Chicken Breast — $3.95
- Meatballs or Sausage — $4.95

**Homemade Baked Pastas** (All served with homemade rolls & house salad; upgrade to Alfredo sauce +$2.95):
- Pasta Combo — Manicotti, Lasagna & Cannelloni — $9.95
- Lasagna — $8.95
- Cannelloni — $8.95
- Manicotti — $8.95
- Cheese Ravioli — $8.95
- Baked Ziti — $8.95
- Sausage & Peppers — Italian sausage & bell peppers sauteed in red sauce, topped with Mozzarella over spaghetti — $11.95
- Eggplant Parmigiana — $7.95
- Eggplant Rollatini — Fresh eggplant filled with Ricotta and Romana cheese, topped with Mozzarella — $11.95

**Chicken & Veal Entrees** (All served with homemade rolls & house salad):
- Parmigiana — Lightly breaded, fried, topped with marinara & mozzarella, served with spaghetti — Chicken $12.95 / Veal $14.95
- Florentine — Mushroom & spinach sauteed in creamy Alfredo with Fettuccine — Chicken $14.95 / Veal $16.95
- Cacciatore — Sauteed mushrooms, green peppers, roasted red peppers, onions in Sherry wine Marinara over spaghetti — Chicken $13.95 / Veal $15.95
- Marsala — Sauteed with fresh mushrooms and sweet Marsala wine sauce over spaghetti — Chicken $12.95 / Veal $14.95
- Piccata — Sauteed with lemon, butter & capers in white wine sauce over spaghetti — Chicken $12.95 / Veal $14.95
- Scar Pella — Sauteed with roasted red peppers, onions, mushrooms in creamy pink sauce, topped with Provolone over spaghetti — Chicken $14.95 / Veal $16.95
- Carciofi — Sauteed with mushrooms & artichoke hearts in pink sauce over linguine — Chicken $13.95 / Veal $15.95
- Aristocrat — Sauteed in creamy white wine sauce, topped with eggplant & Provolone over spaghetti — Chicken $13.95 / Veal $15.95
- Calabrese — Sauteed with mushrooms, artichoke hearts, roasted red pepper in creamy sauce over spaghetti — Chicken $14.95 / Veal $16.95
- Fettuccine Alfredo — Parmesan cream sauce with garlic over fettuccine — Chicken $12.95 / Veal $14.95
- Tavi's — Sauteed with mushrooms, tomatoes, artichoke hearts in white wine sauce over spaghetti — Chicken $14.95 / Veal $16.95
- Francese — Egg-battered with lemon butter sauce on linguine — Chicken $14.95 / Veal $16.95

**Seafood:**
- Lobster Ravioli — $14.95
- Shrimp Marinara — Sauteed shrimp in garlic & marinara over linguine — $14.95
- Shrimp Scampi — Sauteed shrimp with garlic in white wine lemon sauce over linguine — $15.95
- Shrimp Alfredo — Sauteed shrimp with fettuccine in fresh Alfredo sauce — $15.95
- Frutti di Mare — Shrimp, scallops, clams, mussels & calamari on linguine — $17.95
- Tilapia & Shrimp — Sauteed in white wine & lemon butter with capers, served with spaghetti — $17.95
- Salmon Verona — Sauteed with lemon, butter & capers in white wine sauce over spaghetti — $16.95
- Linguine with Clam Sauce — Red or white — $13.95
- Linguine Seafood — Shrimp, scallops & clams in creamy Alfredo sauce — $16.95
- Herb-Grilled Salmon — Italian herbs & extra virgin oil, sauteed broccoli & carrots in pesto sauce with tortellini — $16.95
- Seafood Primavera — Mussels, shrimp & scallops with mushrooms, carrots & broccoli in creamy Alfredo — $18.95

**House Specialties:**
- Spaghetti or Ziti — Choice of Marinara, meat sauce, meatballs, Italian sausage, or mushrooms — $7.95
- Fettuccine Carbonara — Sauteed ham, mushrooms & black olives in creamy sauce — $12.95
- Tortellini alla Panna — Cheese filled pasta in pink sauce — $11.95
- Penne Alla Vodka — Light pink cream sauce with Vodka — $11.95
- Pasta Primavera — Broccoli, carrots & mushrooms in creamy Alfredo over fettuccine — $12.95
- Spaghetti the "Works" — Meat sauce with meatballs, Italian sausage & mushrooms — $12.95
- Roma Special — Sauteed roasted red peppers, mushrooms, black olives, Italian sausage in creamy pink sauce over spaghetti — Chicken $15.95 / Veal $18.95
- House Trio — Homemade lasagna, chicken parmigiana & fettuccine Alfredo — $14.95
- Linguine Broccoli with Chicken — Broccoli in garlic & olive oil sauce over linguine — $13.95

**New York Style Pizza:**

| Pizza | 12" Small | 14" Medium | 16" Large | 18" X-Large |
|-------|-----------|------------|-----------|-------------|
| Neapolitan (thin crust cheese) | $8.95 | $9.95 | $10.95 | $11.95 |
| Verona's White (Ricotta & Mozzarella) | $10.95 | $11.95 | $12.95 | $13.95 |
| Tavi's Special (pepperoni, Canadian bacon, sausage, hamburger, mushrooms, green peppers, onions, black olives) | $14.95 | $15.95 | $16.95 | $17.95 |
| Tavi's Meat Lover's (pepperoni, Canadian bacon, sausage, hamburger) | $13.95 | $14.95 | $15.95 | $16.95 |
| Tavi's Veggie (mushrooms, green peppers, onions, black olives) | $12.95 | $13.95 | $14.95 | $15.95 |
| Alfredo Pizza (Alfredo sauce & Mozzarella) | $11.95 | $12.95 | $13.95 | $14.95 |
| Margarita Pizza (tomatoes, garlic, basil, olive oil, Mozzarella) | $12.95 | $13.95 | $14.95 | $15.95 |

Additional toppings: Pepperoni, Canadian bacon, sausage, hamburger, mushrooms, green peppers, onions, black olives, jalapenos, fresh garlic, green olives — $1.25 / $1.50 / $1.75 / $2.00

Special toppings: Extra cheese, Feta, sliced Italian sausage, meatballs, chicken, artichoke hearts, pineapple, spinach, fresh tomatoes, anchovies — $2.25 / $2.50 / $2.75 / $3.00

**Baked Specialties:**
- Sausage Calzone — Sausage, Ricotta & Mozzarella cheese — $7.95
- Stromboli Meat — Pepperoni, sausage, hamburger, Canadian bacon — $7.95

**Hot & Cold Subs:**
- Philly Cheese Steak — Mushrooms, bell peppers & onions — $7.95
- Chicken Parmigiana Sub — $7.95
- Meatball Parmigiana Sub — $7.95
- Sausage & Pepper Parmigiana Sub — $7.95
- Ham & Provolone Sub — Served with lettuce & tomatoes — $7.95

**Kid's Menu:**
- Baked Pasta — Choice of Lasagna, Cannelloni, Manicotti, Cheese Ravioli, or Baked Ziti — $5.99
- Spaghetti & Marinara — Or mushrooms, meat sauce, Italian sausage, meatball — $5.99
- Fettuccine Alfredo — $6.99

**Desserts:**
- Tiramisu — $5.25
- Three Layer Chocolate Mousse — $5.25
- Italian Cream Cake — $5.25
- Cannoli — $5.50
- New York Style Cheesecake — Plain or strawberry — $4.50

**Beverages:**
- Fountain Drinks — $2.50 (Coca Cola, Diet Coke, Sprite, Dr Pepper, Diet Dr Pepper, Orange Fanta, Iced Tea, Sweet Tea)
- Bottled Water — $2.50
- Coffee / Hot Tea — $2.50
- Bottled Root Beer — $2.50

---

## PAGE 3: ABOUT

### About Page Header
- Smaller hero/banner with a warm restaurant interior or family-style image
- Page title: **"Our Story"** in decorative heading
- Subtitle: **"A Family Tradition on Cedar Creek Lake"**

### Our Story Section
- Warm, personal narrative about the restaurant:
  > "Tavi's Italian Restaurant is more than a place to eat — it's a place to belong. Nestled on Cedar Creek Parkway in Seven Points, Texas, we've been welcoming families, friends, and neighbors to our table with the same warmth and care that goes into every dish we serve. Our recipes are rooted in Italian tradition — handmade pastas, slow-simmered sauces, and New York style pizza made fresh to order. Whether you're joining us for a weeknight dinner, picking up a pizza through our drive-thru, or celebrating a special occasion, you'll always be treated like family. That's not just a saying here — it's who we are."
- Pair with a photo of the restaurant or the family (placeholder if not provided)
- Accent with "BYOB — Bring Your Own Bottle" callout and "Free Wi-Fi" badge

### What Makes Us Special
- A grid or row of 4 feature highlights with icons:
  - **Family Owned & Operated** — "Run with love by the same family since day one"
  - **Homemade Everything** — "From our pasta to our sauces, made fresh in-house daily"
  - **New York Style Pizza** — "Hand-tossed, crispy crust, four sizes — the real deal"
  - **BYOB Welcome** — "Bring your favorite bottle and enjoy it with dinner"

### Full Reviews Section
- Section header: **"What Our Guests Say"**
- Display all 5 reviews as styled cards:

**Review 1 — Steve Joplin:**
"My wife and I took our granddaughter here for dinner for our first experience... We are so very glad we did! The food was excellent, the staff was awesome and the atmosphere was pleasant. I had the lobster ravioli and it was outstanding... We will definitely be back!"
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5 | Atmosphere: 5/5

**Review 2 — Allison Doyle:**
"If I could give more stars I would. This place isn't just a restaurant, it's home. They are so welcoming and sweet."
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5 | Atmosphere: 5/5

**Review 3 — Ryan Clifford:**
"This place is a hidden gem! Definitely the best Italian food on Cedar Creek Lake. From homemade Italian dressing to awesome marinara. The fresh bread was excellent."
⭐⭐⭐⭐⭐

**Review 4 — RuthiC:**
"The food is delicious, the service is so nice and warm hearted. Run like a family. The Chicken Scar Pella is hands down by far their best dish."
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5

**Review 5 — Karadi Kairn:**
"Fantastic service — I felt like I was being waited on hand and foot! The owner is delightful with a bright smile and came out and greeted our table."
⭐⭐⭐⭐⭐ Food: 5/5 | Service: 5/5 | Atmosphere: 5/5

- CTA: "Leave Us a Review on Google" button linking to their Google Business listing

### Photo Gallery (Optional)
- A small masonry or grid gallery of food photos (will be provided)
- Warm hover effect with slight zoom
- If no photos available, omit this section

---

## PAGE 4: CONTACT

### Contact Page Header
- Smaller hero/banner with warm image
- Page title: **"Visit Us"** in decorative heading
- Subtitle: **"We'd Love to See You"**

### Contact Information & Map
- Two-column layout (desktop), stacked (mobile)
- **Left column:**
  - Address: **701 E Cedar Creek Pkwy, Seven Points, TX 75143**
  - Phone: **(903) 432-0330** — large, tappable click-to-call on mobile
  - Hours:
    - **Monday:** Closed
    - **Sunday – Thursday:** 11am – 9pm
    - **Friday – Saturday:** 11am – 10pm
  - Service options with icons: **Dine-In** | **Drive-Thru** | **Takeout**
  - Features: **BYOB Welcome** | **Free Wi-Fi** | **Outdoor Seating**
  - "Get Directions" button linking to Google Maps directions
  - Facebook link/icon
- **Right column:**
  - Large embedded Google Map showing 701 E Cedar Creek Pkwy, Seven Points, TX 75143
  - Map should be interactive (zoom, drag)

### Simple Contact Form (Optional)
- Name, Email, Phone, Message fields
- "Send Message" button in terracotta accent color
- Note: This is optional — if included, it can be a simple mailto form or placeholder. The primary CTA should always be the phone number.

---

## Technical Requirements
- **Framework:** Vite + React + TypeScript
- **Routing:** React Router v6 for multi-page navigation
- **Styling:** Tailwind CSS
- **Fully responsive** — mobile-first design
- **Performance:** Lazy load images, optimized assets, code-split per route
- **SEO:** Proper meta tags and Open Graph tags per page, structured data (LocalBusiness schema on home/contact)
- **Accessibility:** Semantic HTML, proper heading hierarchy, alt text on all images, sufficient color contrast
- **Smooth scroll** within pages (menu category nav)
- **Page transitions:** Subtle fade or slide transition between routes
- **Click-to-call** on all phone numbers for mobile
- **Google Maps embed** on home and contact pages
- **Parallax:** CSS `background-attachment: fixed` for the parallax section on home, with a JavaScript or CSS transform fallback for mobile browsers

---

## Image Assets (Will Be Provided)
- Restaurant logo (JPG provided — use as-is, place on dark or cream backgrounds)
- Original food photography from the restaurant's Facebook page (multiple dish photos with descriptive filenames)
- The menu PDF pages can be referenced for the specials page photo (page 5 has food photos of Herb-Grilled Salmon, Seafood Primavera, Roma Special, Linguine Seafood, Linguine Broccoli with Chicken, House Trio)

---

## What to Avoid
- Generic stock photography of Italian food — use ONLY the provided photos or leave clear placeholder slots
- Flat, modern minimalist design — this should have warmth, texture, and depth
- Pure white backgrounds — always use warm cream/parchment tones
- Pure black text — use espresso brown
- Cookie-cutter restaurant template layouts — this should feel custom
- Overly busy or cluttered design — rustic doesn't mean chaotic. Clean hierarchy with warm personality.
- Any AI-generated imagery or illustrations that look obviously synthetic
- Gradients that feel digital or tech-y — any gradients should be subtle and warm
- Blue tones anywhere — this is Mediterranean warm, not corporate cool
- Single-page layout — this MUST be a multi-page site with React Router
