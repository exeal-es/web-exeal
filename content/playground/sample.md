---
title: "Sample Page"
description: "A minimal sample using Hugo blocks"
date: 2025-03-25
layout: blocks
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
