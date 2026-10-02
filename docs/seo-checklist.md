# SEO checklist: what the site cannot do for itself

The website now has a page per service and per region, correct structured data, and an `llms.txt` summary. The steps below happen outside the codebase and matter at least as much, especially for "near me" searches.

## 1. Google Business Profile (decides "near me" and Maps results)

1. Search Google Maps for "Steradian Architects Moradabad" and "Steradian Architects Greater Noida".
2. If a listing exists, open it and choose "Claim this business". If not, create one at https://business.google.com.
3. One listing per real, staffed office. Do not create listings for cities without an office; Google suspends those.
4. Use exactly the details shown on the site:
   - Name: `Steradian Architects`
   - Moradabad: `Hotel New Castle Compound, Moradabad 244001, Uttar Pradesh`
   - Greater Noida: `A-722, T3, NX One, TechZone IV, Greater Noida 201318, Uttar Pradesh`
   - Phone: `+91 97616 74409`
   - Website: `https://steradian.in`
5. Primary category `Architect`; additional category `Interior designer`.
6. Add opening hours, photos of built work and the studio, and the services list.
7. Ask past clients for Google reviews and reply to each one. Reviews are the strongest ranking factor for local results.
8. Send the developer each listing's "Share" link, the office hours and the map coordinates. They go into `src/config/site.ts` (`mapUrl`, `openingHours`, `geo`) and from there into the structured data.

## 2. Google Search Console

1. Add `https://steradian.in` at https://search.google.com/search-console.
2. Verify with the HTML tag method: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the tag's `content` value in the hosting environment and redeploy.
3. Submit `https://steradian.in/sitemap.xml`.
4. Use "URL inspection → Request indexing" on the home page, each `/services/...` page and each `/architects/...` page.

## 3. Bing Webmaster Tools (feeds ChatGPT search and Copilot)

1. Add the site at https://www.bing.com/webmasters (it can import from Search Console).
2. If verifying by meta tag, set `NEXT_PUBLIC_BING_SITE_VERIFICATION` and redeploy.
3. Submit the sitemap.

## 4. Listings elsewhere

Create or correct profiles with the identical name, address and phone, each linking to https://steradian.in: Justdial, Sulekha, IndiaMART, Houzz India, the LinkedIn company page, the Instagram and Facebook bios, and the Council of Architecture directory. Consistent details across sites are how search engines and AI assistants confirm a business is real.

## 5. Content in Sanity

- Add a `location` (string, e.g. "Moradabad") field to the project document type. The site already reads it: it appears in project titles and structured data, and decides which projects show on each city page.
- Publish more projects. Only three are live; each project is a page that can rank for "{type} architect in {city}".
- Give each project a description of 100 words or more: brief, site, materials, what was built.

## 6. Facts the site is waiting for

These were left out rather than guessed. Send them and they can be added:

- Office hours and map coordinates for both studios.
- Council of Architecture registration numbers for the principals.
- Typical fee basis and project timelines, for the FAQ sections.
- Whether the three "Notes from the Studio" articles on the home page will be written. They currently show as titles without links.

## What to expect

New pages usually take two to eight weeks to be indexed and settle. Moradabad and the surrounding towns are realistic targets. Noida is far more competitive and will depend mostly on the Business Profile and reviews.
