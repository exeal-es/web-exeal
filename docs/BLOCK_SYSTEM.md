# 📦 Hugo Block System Documentation

This guide documents the reusable “block” system developed for static sites using Hugo. Each block is defined in the page’s front matter under a `blocks:` list, enabling modular, declarative page construction.

## 🔧 How It Works

In the front matter of any page (`.md`), define a list of `blocks`, each with a `type`, and the relevant parameters for that block. These are parsed and rendered using partial templates matched by `type`.

## 🧱 Available Blocks

### 1. `vsl-vidalytics`

**Purpose:** Embed a Vidalytics VSL (Video Sales Letter) video with header, subheader, and CTA.

**Params:**
- `id`: HTML section ID
- `className`: Extra classes for styling
- `header`: Main heading
- `subheader`: Subtitle
- `vidalyticsId`: Embed ID
- `vidalyticsUrl`: Full video URL
- `callToAction`: `{ text, scrollTo }`

**Example:**
```yaml
- type: vsl-vidalytics
  id: sect-vsl-vidalytics
  className: dark background background-01
  header: Bootcamp for software development
  subheader: Improve your skills, salary, and motivation.
  vidalyticsId: vidalytics_embed_ABC123
  vidalyticsUrl: https://fast.vidalytics.com/embeds/XYZ/ABC123/
  callToAction:
    text: Join now
    scrollTo: sect-cta
```

---

### 2. `hero`

**Purpose:** Prominent intro section with heading, subheading, and optional paragraph(s) and CTA.

**Params:**
- `id`
- `className`
- `header`
- `subheader`
- `paragraphs`: List of strings
- `callToAction`: `{ text, scrollTo }`

**Example:**
```yaml
- type: hero
  id: sect-hero
  className: dark background background-01
  header: Welcome to Our Bootcamp
  subheader: Change your career in 3 months
  paragraphs:
    - This is your opportunity to level up.
  callToAction:
    text: Start now
    scrollTo: sect-cta
```

---

### 3. `stakes-with-image`

**Purpose:** Explain the stakes or problems your product solves, with image and bullet points.

**Params:**
- `id`, `className`, `image`
- `header`
- `p1`, `p2`
- `list`: Array of strings

**Example:**
```yaml
- type: stakes-with-image
  id: sect-stakes
  className: light
  image: /images/problem.png
  header: Why this matters
  p1: Developers face many challenges...
  list:
    - Legacy code issues
    - Lack of mentorship
    - Burnout from poor practices
  p2: We help solve all of the above.
```

---

### 4. `ticked-list`

**Purpose:** Render a list of benefits or features with checkmarks.

**Params:**
- `id`, `className`, `header`
- `items`: List of strings
- `paragraph2` (optional)
- `callToAction`

**Example:**
```yaml
- type: ticked-list
  id: sect-benefits
  className: gloaming
  header: What you’ll get
  items:
    - Real projects
    - Live mentorship
    - Lifetime access
  callToAction:
    text: Enroll
    scrollTo: sect-cta
```

---

### 5. `content-image-left` / `content-image-right`

**Purpose:** Two-column layout with image and text. Image on left/right.

**Params:**
- `id`, `className`, `header`
- `p1`, `p2`
- `image`
- `callToAction`

**Example:**
```yaml
- type: content-image-left
  id: content-left
  className: light
  header: Learn by doing
  p1: Practice on real code
  p2: Supported by expert mentors
  image: /images/example.png
  callToAction:
    text: Start today
    scrollTo: sect-cta
```

---

### 6. `syllabus`

**Purpose:** Display a list of course modules.

**Params:**
- `id`, `className`, `header`
- `paragraph1`, `paragraph2`
- `modules`: List of `{ index, title, description }`
- `callToAction`

**Example:**
```yaml
- type: syllabus
  id: sect-syllabus
  header: What you'll learn
  paragraph1: This course includes:
  modules:
    - index: 1
      title: Clean Code
      description: Learn the fundamentals of readable and maintainable code.
    - index: 2
      title: TDD
      description: Test-driven development from theory to practice.
  callToAction:
    text: Join now
    scrollTo: sect-cta
```

---

### 7. `syllabus-extended`

**Purpose:** A more detailed syllabus with chapters and subtopics.

**Params:**
- `id`, `className`, `header`
- `chapters`: List of `{ chapter, number, topics[] }`

**Example:**
```yaml
- type: syllabus-extended
  id: sect-detailed-syllabus
  header: Full Course Breakdown
  chapters:
    - number: 1
      chapter: Fundamentals
      topics:
        - Clean code principles
        - Pair programming
```

---

### 8. `guide`

**Purpose:** Introduce a mentor or guide.

**Params:**
- `id`, `className`, `header`
- `p1`, `p2`
- `team`: List of `{ name }` (can be tied to team data)

**Example:**
```yaml
- type: guide
  id: sect-guide
  header: Meet Your Instructor
  team:
    - name: pedropardal
  p1: Pedro has coached dozens of developers...
```

---

### 9. `testimonials`

**Purpose:** Carousel or grid of user testimonials.

**Params:**
- `id`, `className`
- `testimonials`: List of `{ name, position, photo, text, active? }`

**Example:**
```yaml
- type: testimonials
  id: sect-testimonials
  testimonials:
    - name: John Doe
      position: Senior Dev
      photo: /images/john.jpg
      text: "Best training I've ever had."
      active: true
```

---

### 10. `clients` / `partners`

**Purpose:** Display logos of clients or partners (no params required).

**Params:**
None (logo list likely handled via `data` or internal loop)

**Example:**
```yaml
- type: clients
```

---

### 11. `case-studies`

**Purpose:** Showcase success stories with video and link.

**Params:**
- `id`, `header`, `subheader`
- `casestudies`: List of `{ youtube, title, description, link, cta }`

**Example:**
```yaml
- type: case-studies
  id: sect-case-studies
  header: Real Results
  subheader: Hear from our clients
  casestudies:
    - youtube: https://youtube.com/embed/xyz
      title: From junior to senior in 3 months
      description: This is how AIDA scaled up their team
      link: /case-study/aida
      cta: Learn more
```

---

### 12. `explaining-paragraph`

**Purpose:** Multi-paragraph explanatory section.

**Params:**
- `id`, `className`, `header`
- `paragraphs`: List of strings

**Example:**
```yaml
- type: explaining-paragraph
  header: Why we built this
  paragraphs:
    - We noticed many devs feel stuck...
    - This training is our solution...
```

---

### 13. `junk-drawer`

**Purpose:** Miscellaneous bullet list.

**Params:**
- `id`, `className`, `header`
- `items`: List of strings

**Example:**
```yaml
- type: junk-drawer
  header: Bonus content
  items:
    - Lifetime access
    - Templates
    - Slack group
```

---

### 14. `hero-with-image`

**Purpose:** Hero section with image included.

**Params:**
- `id`, `className`, `header`, `subheader`, `image`
- `callToAction`

**Example:**
```yaml
- type: hero-with-image
  header: Become a better dev
  subheader: Master legacy systems with confidence
  image: /images/hero.png
  callToAction:
    text: Sign up now
    scrollTo: sect-cta
```

---

### 15. `blocks`

**Purpose:** Nested block list with short content per item.

**Params:**
- `id`, `className`, `header`, `paragraph`
- `blocks`: List of strings

**Example:**
```yaml
- type: blocks
  header: What's included
  paragraph: Here's what you get
  blocks:
    - Personal mentorship
    - Deep-dive sessions
```

---

### 16. `valueprop-elements`

**Purpose:** List of value propositions with icons.

**Params:**
- `id`, `className`, `header`
- `elements`: List of `{ icon, text }`

**Example:**
```yaml
- type: valueprop-elements
  header: Why choose us?
  elements:
    - icon: /icons/clock.svg
      text: 16 hours of expert training
```

---

### 17. `three-traits`

**Purpose:** Showcase 3 key features or differentiators.

**Params:**
- `id`, `className`, `header`
- `traits`: List of `{ title, description, icon }`
- `callToAction`

**Example:**
```yaml
- type: three-traits
  header: What makes us different
  traits:
    - title: Stack agnostic
      description: Works across any language
      icon: /icons/icon1.svg
```

---

### 18. `featured-course`

**Purpose:** Highlight one course.

**Params:** Likely loaded via `data` or internally.

**Example:**
```yaml
- type: featured-course
```

---

### 19. `title-only`

**Purpose:** Visual separator with title only.

**Params:**
- `text`

**Example:**
```yaml
- type: title-only
  text: Advanced Programs
```

---

### 20. `all-courses`

**Purpose:** Display grid of all available courses.

**Params:**
- `id`

**Example:**
```yaml
- type: all-courses
  id: sect-courses
```

---

### 21. `call-to-action`

**Purpose:** Final CTA section.

**Params:**
- `id`, `className`, `header`
- `ctaLabel`, `ctaHref`

**Example:**
```yaml
- type: call-to-action
  id: sect-cta
  header: Ready to join?
  ctaLabel: Apply now
  ctaHref: https://example.com/apply
```

---

### 22. `calendly`

**Purpose:** Embed a Calendly scheduling widget.

**Params:**
- `id`, `className`, `header`, `paragraph`, `calendlyUrl`

**Example:**
```yaml
- type: calendly
  header: Book a free call
  calendlyUrl: https://calendly.com/exeal/call
```

---

### 23. `contact-form`

**Purpose:** Contact form section for inquiries or booking.

**Params:**
- `id`, `className`, `header`

**Example:**
```yaml
- type: contact-form
  header: Get in touch
```

## Sample page

Here's a **minimal sample Hugo page** using your block system, written in Markdown (`.md`) format. This demo combines several blocks into a simple, coherent page.

### 📄 `sample-page.md`

```yaml
---
title: "Sample Page"
description: "A minimal sample using Hugo blocks"
date: 2025-03-25
layout: pilaresdelsoftware
blocks:
  - type: hero
    id: sect-hero
    className: dark background background-01
    header: Learn to Build Better Software
    subheader: A hands-on training to level up your skills
    paragraphs:
      - Join hundreds of developers who’ve transformed their careers.
    callToAction:
      text: Get Started
      scrollTo: sect-cta

  - type: stakes-with-image
    id: sect-problem
    className: light
    image: /images/problem-solving.jpeg
    header: Why This Training Matters
    p1: Developers often struggle with legacy code, unclear standards, and lack of mentorship.
    list:
      - Work on real codebases
      - Improve testing and clean code skills
      - Accelerate your career growth
    p2: Our approach fixes these issues with practical training and expert guidance.

  - type: syllabus
    id: sect-syllabus
    className: gloaming
    header: What You’ll Learn
    paragraph1: A clear path to software craftsmanship.
    modules:
      - index: 1
        title: Clean Code
        description: Write maintainable, expressive, and professional-grade code.
      - index: 2
        title: TDD Fundamentals
        description: Learn to test-drive your design with confidence.
    paragraph2: Each module includes exercises, code reviews, and real-life scenarios.
    callToAction:
      text: View Full Curriculum
      scrollTo: sect-cta

  - type: testimonials
    id: sect-testimonials
    testimonials:
      - name: "Jane Smith"
        position: "Full-Stack Developer"
        photo: "/images/testimonials/jane.jpg"
        text: "This course gave me tools I now use daily — highly recommended."
        active: true

  - type: call-to-action
    id: sect-cta
    className: dark background background-07
    header: Ready to Join?
    ctaLabel: Enroll Now
    ctaHref: https://example.com/enroll
---
```
