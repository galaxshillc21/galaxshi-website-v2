# Website Pre-Launch TODOs

This file is the working checklist for everything the site should have before it goes live. The goal is not only to make the website functional, but to make it a strong proof of Galaxshi's GA4 and GTM expertise.

The items below are written so future Copilot sessions can use them as implementation prompts.

## 1. Make the contact form actually work

### Goal

Turn the current audit form into a real lead capture flow that is simple, free to run, and easy to maintain.

### Recommended approach

Use Formspree for version 1.

Why this is the best first option:

- It is free for low-volume usage.
- It does not require building a custom backend.
- It works well with a Next.js frontend.
- It is fast to ship and easy to replace later if the site grows.

Alternative:

- If the site is definitely staying on Netlify and you want tighter platform integration, Netlify Forms can also work. Formspree is still the simpler default for a fast launch.

### Implementation TODOs

- Connect the existing form in `components/AuditForm.tsx` to a real submission endpoint.
- Add controlled inputs so the form can validate values before submission.
- Require at minimum: full name, email, platform, and message.
- Add inline validation messages for invalid email, empty required fields, and submission failures.
- Add a loading state to the submit button so users cannot submit multiple times.
- Add a success state that clearly confirms the request was sent.
- Add an error state with retry guidance if the network request fails.
- Keep the form text bilingual only if the rest of the site also becomes bilingual. Otherwise keep copy consistent in one language.
- Make sure the CTA anchor points to the correct section id. Right now there is a likely mismatch between `#contact` and the rendered `Contact` section id.

### Tracking TODOs for the form

- Fire a `generate_lead` event only after a successful submission.
- Fire a `form_start` event when a user first interacts with the form.
- Fire a `form_submit_attempt` event when they press submit.
- Fire a `form_error` event when validation or network submission fails.
- Include clean parameters such as `form_name`, `page_location`, `platform_selected`, and `submission_status`.
- Make sure no personally identifiable information is sent to GA4.

### Definition of done

- A real submission arrives in the chosen form inbox.
- The user sees success and error feedback.
- GA4 receives the correct lead events without sending private user data.
- The form works on desktop and mobile.

## 2. Build a fake analytics demo store

### Goal

Create a small demo storefront whose real purpose is to show event tracking, ecommerce measurement design, and data layer quality.

This should not behave like a real shop. It should behave like a controlled analytics sandbox.

### Product idea for version 1

- The Conversion Cookie
- The DataLayer Donut

Optional third item later if needed:

- The Attribution Espresso

### Core product requirements

- Add a dedicated page or route for the demo store instead of mixing it into the homepage.
- Show exactly 2 products at launch so the experience stays focused.
- Give each product a name, price, short description, image, SKU, and playful analytics-themed copy.
- Add a clear disclaimer that this is a demo experience and no real payment will happen.
- Store cart state locally in React state or localStorage. No backend is needed.

### Demo commerce flow

- Product listing page.
- Product detail modal or product detail page.
- Add to cart interaction.
- Mini cart or cart page.
- Fake checkout form.
- Fake order confirmation page.

### Why this matters

This demo will let Galaxshi prove it understands:

- ecommerce event design
- GA4 naming conventions
- GTM data layer structure
- debugging workflows
- how UX actions map to analytics events

### Definition of done

- A visitor can go from product view to fake purchase without errors.
- Every major step emits a visible analytics event.
- The store feels intentional, even if the payments are fake.

## 3. Create the analytics event showcase UI

### Goal

Make event tracking visible to visitors so the website teaches while it demos.

### UI behavior

- On desktop, show a compact persistent event drawer on the left or right side of the screen.
- On mobile, show a lightweight popup, toast stack, or bottom sheet whenever an event fires.
- The UI should not block the main experience or take too much space.

### What the viewer should display

- Event name.
- Timestamp.
- Key parameters.
- Whether the event was pushed to `dataLayer`, sent to GA4, or both.
- A simple status color for success, warning, or skipped.

### Implementation TODOs

- Build a central analytics event logger in JavaScript or TypeScript.
- Every tracked action should call that logger instead of directly pushing to `window.dataLayer` in random components.
- Save recent emitted events in a small in-memory store so the drawer can render them.
- Add a clear button to reset the visible event history.
- Add a collapse or hide button for the desktop drawer.
- Limit the mobile popup stack so it does not overwhelm the screen.
- Keep the event viewer visually branded and polished, not like a developer-only debug panel.

### Important constraint

The event viewer should help sell Galaxshi's expertise, so it should feel curated. Show enough detail to be credible, but not so much raw JSON that non-technical visitors get lost.

## 4. Define the GA4 and GTM event architecture before coding everything

### Goal

Avoid messy tracking by deciding the event schema before the demo store is built.

### Base events to implement

- `page_view`
- `view_item_list`
- `select_item`
- `view_item`
- `add_to_cart`
- `remove_from_cart`
- `view_cart`
- `begin_checkout`
- `add_payment_info` if you want to simulate a fuller checkout journey
- `purchase`
- `generate_lead`

### Data layer planning TODOs

- Create a standard event payload shape and use it consistently.
- Define item-level parameters for product events: `item_id`, `item_name`, `item_category`, `price`, `quantity`.
- Define page-level parameters when helpful: `page_type`, `content_group`, `cta_location`.
- Use GA4-recommended ecommerce structures wherever possible.
- Add a small helper that safely checks whether `window` and `dataLayer` are available before pushing events.
- Keep event names lowercase and consistent.
- Document the schema in the repo so it is easy to maintain.

### Definition of done

- The site has one documented source of truth for analytics events.
- New features can plug into tracking without inventing new payload shapes each time.

## 5. Add a real tracking layer to the codebase

### Goal

Move from ideas to actual reusable implementation.

### Implementation TODOs

- Create a small analytics utility module, for example in `utils/`, for all GA4 and data layer interactions.
- Add a typed event map if TypeScript helps keep payloads consistent.
- Initialize `window.dataLayer` safely on the client.
- Add a single reusable `trackEvent` helper.
- Add environment variable support for GA4 ids or GTM container ids.
- Make it possible to disable analytics cleanly in local development when needed.
- Make it possible to keep the event viewer active in development and optionally in production for the demo store.

### Suggested implementation order

1. Create the analytics helper.
2. Hook the homepage CTA and form interactions into it.
3. Hook the fake store flows into it.
4. Connect the event viewer UI to the same event source.

## 6. Improve the homepage so it supports the analytics story

### Goal

Make the landing page better explain what Galaxshi does and why the demo matters.

### Content TODOs

- Rewrite the metadata in `app/layout.tsx` so the title and description clearly describe GA4, GTM, and data layer implementation services.
- Replace any remaining starter or generic messaging with stronger positioning.
- Add a section that explains what problems Galaxshi solves in analytics implementations.
- Add a section or card that invites users to explore the demo store as a proof of execution.
- Add a short "How we track this demo" explanation for credibility.
- Make sure the main CTA labels match the sections they link to.

### Trust-building TODOs

- Add proof points, process details, or sample deliverables.
- Add screenshots or visuals that show dashboards, tag plans, or tracking audits.
- Consider a short FAQ around GA4 migrations, GTM setup, ecommerce tracking, and data layer planning.

## 7. Launch with baseline SEO and social sharing

### Goal

The site should be discoverable and shareable the day it goes live.

### SEO TODOs

- Replace the default metadata with real service-specific metadata.
- Add a proper page title strategy.
- Add Open Graph metadata for link previews.
- Add Twitter card metadata.
- Use strong, search-intent-friendly headings and supporting copy.
- Add descriptive alt text to marketing imagery.
- Make sure there is only one clear H1 on important pages.

### Technical SEO TODOs

- Create a sitemap.
- Create a robots policy.
- Add canonical urls if needed.
- Make sure page performance stays solid after animations and tracking are added.

## 8. Clean up UX, accessibility, and responsiveness

### Goal

The site should feel reliable before it is promoted.

### UX TODOs

- Review mobile spacing, text sizing, and CTA visibility.
- Make sure all buttons and links have obvious hover and focus states.
- Make sure sections scroll correctly when using anchor links.
- Make sure the event drawer does not cover important content on smaller laptop widths.

### Accessibility TODOs

- Ensure all forms have proper labels.
- Add keyboard accessibility for interactive components.
- Check color contrast across the site.
- Make sure toast or popup tracking messages do not create a confusing screen reader experience.
- Use semantic structure for headings and regions.

## 9. Add basic quality checks before launch

### Goal

Catch obvious issues before traffic starts hitting the site.

### QA TODOs

- Test the form submission flow end to end.
- Test fake store flows on desktop and mobile.
- Verify every tracked event in browser devtools and GA4 debug tooling.
- Verify that no PII is sent into analytics payloads.
- Test Chrome, Safari, Edge, and one mobile browser.
- Confirm images load correctly and pages do not shift excessively.
- Confirm links, anchors, and CTA buttons all work.

### Performance TODOs

- Audit Lighthouse scores after the event viewer is added.
- Keep JavaScript for the fake store lightweight.
- Avoid adding large analytics helper libraries if a custom lightweight utility can do the job.

## 10. Document the project so future Copilot sessions have context

### Goal

Make future development faster and more consistent.

### Documentation TODOs

- Replace the default `README.md` with a real project overview.
- Document the purpose of the site: service website plus analytics demo lab.
- Document how the fake store works.
- Document the analytics event map.
- Document any required environment variables.
- Document how to run the site locally.
- Document how to test the tracking flows.

### Why this matters

If the repo has clear documentation, future Copilot prompts can reference the intended architecture instead of rebuilding assumptions each time.

## Suggested build order

If you want to implement this in the cleanest order, use this sequence:

1. Fix metadata, anchors, and homepage messaging.
2. Make the contact form functional with a free form provider.
3. Create the analytics utility and event schema.
4. Add the event viewer UI.
5. Build the fake store route and ecommerce flow.
6. Connect store interactions to GA4 and the event viewer.
7. Run QA, accessibility, and analytics validation.
8. Rewrite the README and launch docs.

## Nice-to-have ideas after version 1

These are good future additions, but they should not block launch:

- A filterable event inspector that groups events by category.
- A toggle that switches between "user view" and "analytics view".
- A small panel explaining how GTM tags would consume the `dataLayer` events.
- A downloadable sample tracking plan pdf.
- A mini case study showing how improved instrumentation changes decision-making.
- A second demo for lead generation tracking outside ecommerce.
