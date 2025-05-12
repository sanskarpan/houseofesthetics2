# House of Esthete - Website Development Checklist

## Phase 0: Project Setup & Refinement (Existing Issues)

### General
- [x] Initial Project Analysis Completed
- [ ]  Consolidate `use-mobile.tsx` (remove from `components/ui/` or `hooks/`, ensure one source of truth).
- [ ]  Remove redundant `styles/globals.css` if `app/globals.css` is the sole source.
- [ ]  Enable Next.js Image Optimization (`next.config.mjs` - change `unoptimized: true` to `false` or configure loaders).
- [ ]  Review and clean up image `src` parameters in `app/page.tsx` to align with chosen image optimization strategy.
- [ ]  Establish a clear asset management strategy (naming conventions, organization in `public/`).

### Code Quality
- [ ]  Ensure all new components and pages follow existing TypeScript and ESLint rules.
- [ ]  Review and refactor any overly complex components from initial build if necessary.

## Phase 1: Foundation & Core Navigation

### Global Navigation Bar (Request 1 & 2)
- [ ] **Structure & Content:**
    - [ ]  Modify `components/navigation.tsx` or create a new navigation component.
    - [ ]  Add "Our Collections" navigation link.
    - [ ]  Add "Our Story" navigation link.
    - [ ]  Add "Media" navigation link.
    - [ ]  Integrate social media icons (Instagram, Pinterest - reuse from footer if possible, add LinkedIn SVG/icon).
    - [ ]  Position social media icons on the extreme right.
    - [ ]  Integrate the `logo.png` into the navbar.
- [ ] **Styling & Behavior:**
    - [ ]  Ensure navbar is fixed/sticky at the top.
    - [ ]  Implement gradual background transition on scroll (e.g., from transparent/semi-transparent to `bg-background-light/90 backdrop-blur-sm` as in current scroll logic, but make it smoother/gradient-like if possible).
    - [ ]  Style navigation links, hover states, and active states.
    - [ ]  Style social media icons for navbar context.
- [ ] **Responsiveness:**
    - [ ]  Design and implement mobile navigation (e.g., hamburger menu for main links, social icons may remain or move into menu).
    - [ ]  Test navbar on desktop, tablet, and mobile viewports.

## Phase 2: Landing Page - Hero & Video Section

### Hero/Banner Section (Request 3)
- [ ] **Slideshow/Carousel:**
    - [ ]  Choose and integrate a carousel/slideshow library (e.g., Embla Carousel, Swiper.js, or custom Framer Motion).
    - [ ]  Populate with placeholder product images initially, then actual product images (`prod1.png` - `prod5.png` can be used for now or specific hero shots if provided).
    - [ ]  Add navigation controls (dots/arrows) for the slideshow.
    - [ ]  Ensure slideshow is responsive.
- [ ] **Scroll Animation:**
    - [ ]  Implement "out-to-inward" type scroll animation for content/sections appearing immediately below the hero banner as the user scrolls down. (Utilize Framer Motion `useInView` and variants).

### Manufacturing Video Section (Request 4)
- [ ] **Background Transition:**
    - [ ]  Create a new section on `app/page.tsx`.
    - [ ]  Implement a smooth transition for the section background from light (e.g., `--background-light`) to dark (e.g., `--deep-neutral` or black) as it scrolls into view.
- [ ] **Logo Animation:**
    - [ ]  Display the "House of Esthete" logo (`public/logo.png`) within this section.
    - [ ]  Animate the logo's color to transition from black to white (or vice-versa) in sync with the background color change or as it becomes visible against the dark background.
- [ ] **Video Integration:**
    - [ ]  Embed the factory video (client to provide video file or link).
    - [ ]  Style video player controls or use a minimal player. Ensure autoplay (muted) if desired.
    - [ ]  Ensure video is responsive.
- [ ] **Product Gallery (within Video Section):**
    - [ ]  Design a gallery layout for showcasing products within this dark-themed section.
    - [ ]  Display product images (use `prod1-prod5.png` or other suitable images).
    - [ ]  Add short descriptive text for each product in the gallery.
    - [ ]  Style the gallery to fit the dark theme.
    - [ ]  Ensure gallery is responsive.

## Phase 3: Landing Page - Product Showcase & "Our Collections" Logic

### Quote Display (Request 6 - Part 1)
- [ ]  Design and implement a section to display a prominent quote (client to provide text).
- [ ]  Style the quote for visual impact.
- [ ]  Ensure quote section is responsive.

### Landing Page Product Display (Request 6 - Part 2)
- [ ]  Create a new section on `app/page.tsx` for the 5 core products.
- [ ]  Implement the specific layout for these products as per the client's reference image.
    - [ ] Product 1: Duchess - Chair (`prod1.png`)
    - [ ] Product 2: Vayuvega - Night Stand (`prod2.png`)
    - [ ] Product 3: Pinetta - Booze Stand (`prod3.png`)
    - [ ] Product 4: Rise of the Great - Standing Artefact (`prod4.png`)
    - [ ] Product 5: Basilisk - Bar Counter (`prod5.png`)
- [ ]  Include product names.
- [ ]  Add links from these products to their individual product detail pages (to be created in Phase 4).
- [ ]  Ensure this product display is responsive.

### "Our Collections" Navigation Preview (Request 5)
- [ ] **Dropdown/Mega-Menu:**
    - [ ]  Implement a dropdown or mega-menu for the "Our Collections" navbar link.
    - [ ]  Design the preview to show furniture categories (Tables, Beds, Artefacts, etc. - client to provide full list).
    - [ ]  Each category should link to a specific category/product listing page.
- [ ] **Placeholder Category Pages:**
    - [ ]  Create basic placeholder pages for each category (e.g., `/collections/tables`, `/collections/beds`).
- [ ] **Styling & Responsiveness:**
    - [ ]  Style the dropdown/mega-menu to match the site's aesthetic.
    - [ ]  Ensure the preview is responsive and usable on all devices.

## Phase 4: Product Detail Pages & "Our Story"

### Product Detail Pages (Request 8 - Part 1)
- [ ] **Page Template:**
    - [ ]  Design and create a reusable React component for the product detail page layout (as per client's reference image).
    - [ ]  Include areas for:
        - Product Name
        - Multiple Product Images (gallery/carousel if needed)
        - Detailed Description
        - Specifications (Dimensions, Materials, etc.)
        - "Product Inquiry" button
- [ ] **Individual Product Pages:**
    - [ ]  Create a dynamic route for products (e.g., `/products/[slug].tsx`).
    - [ ]  Populate pages for the 5 core products:
        - [ ] Duchess - Chair
        - [ ] Vayuvega - Night Stand
        - [ ] Pinetta - Booze Stand
        - [ ] Rise of the Great - Standing Artefact
        - [ ] Basilisk - Bar Counter
    - [ ]  Integrate actual content and images for each product.
- [ ] **Responsiveness:**
    - [ ]  Ensure product detail page template and content are fully responsive.

### "Product Inquiry" Pop-up (Request 8 - Part 2)
- [ ]  Design and implement a pop-up/modal component (use Shadcn/UI Dialog or similar).
- [ ]  Layout the pop-up form fields exactly as per the client's reference image.
    - [ ] Name
    - [ ] Email
    - [ ] Phone Number
    - [ ] Message/Inquiry
    - [ ] Submit Button
- [ ]  Implement form validation (e.g., using `react-hook-form` and `zod`).
- [ ]  Handle form submission (initially can be a `console.log` or a simple "Thank You" message; backend integration for actual email sending is out of current visual scope unless specified).
- [ ]  Ensure pop-up is responsive.

### "Our Story" Page/Section (Request 7)
- [ ] **Page/Section Creation:**
    - [ ]  Create a new page (e.g., `/our-story`) or a dedicated, linkable section on an existing page.
    - [ ]  Structure content with various titles/sub-sections (client to provide content and titles).
- [ ] **Navbar Preview Integration:**
    - [ ]  Implement a dropdown/preview from the "Our Story" navbar link.
    - [ ]  Links in the preview should navigate to the corresponding sub-sections on the "Our Story" page/area (using fragment identifiers #).
- [ ] **Content & Layout:**
    - [ ]  Populate with content, inspired by "Design Philosophy" or manufacturing images.
    - [ ]  Ensure layout is engaging and responsive.

## Phase 5: "Media" Page, Final Testing & Polish

### "Media" Page (Request 1)
- [ ]  Create a basic placeholder page for `/media`.
- [ ]  Add a title like "Media" or "In The Press."
- [ ]  Add a placeholder message like "Content coming soon."

### Testing & QA
- [ ] **Responsiveness Testing:**
    - [ ]  Thoroughly test all pages and components on major browsers (Chrome, Firefox, Safari, Edge).
    - [ ]  Test on various device sizes (desktop, common laptop sizes, tablets - portrait & landscape, mobile phones - portrait & landscape).
- [ ] **Functional Testing:**
    - [ ]  Test all navigation links, buttons, carousels, pop-ups, and animations.
    - [ ]  Test form submissions (Product Inquiry).
- [ ] **Performance:**
    - [ ]  Analyze image load times (LCP). Ensure images are appropriately sized and compressed.
    - [ ]  Profile animations for smoothness.
    - [ ]  Check Lighthouse scores and address major issues.
- [ ] **Accessibility (A11y):**
    - [ ]  Perform basic accessibility checks (keyboard navigation, sufficient color contrast, ARIA attributes where necessary).
    - [ ]  Ensure semantic HTML is used correctly.
- [ ] **Cross-Browser Compatibility:**
    - [ ]  Verify consistent appearance and functionality across target browsers.

### Final Polish & Deployment Prep
- [ ]  Review all content for typos and grammatical errors.
- [ ]  Remove any `console.log` statements or debug code.
- [ ]  Ensure all assets are finalized and optimized.
- [ ]  Prepare for deployment (build process, environment variables if any).
- [ ]  Client User Acceptance Testing (UAT) and incorporate feedback.