# Website accessibility checklist

Use this checklist from the start of every website or content task. It helps us make
our site easier for everyone to use. Aim for **WCAG 2.2 Level AA**. This checklist
covers common issues, but it is not a full accessibility audit.

For each item, record whether it passed, failed, does not apply, or has not been
tested. Add any problems and unfinished checks to the pull request.

## 1. Before starting

- [ ] Read the project README and follow the team lead's setup and review process.
  Use existing components where possible. Check with the team lead before adding a
  new pattern or changing the setup.
- [ ] Add accessibility needs to the task. List the pages and user journeys affected,
  including navigation and exercises.
- [ ] Allow time to test with a keyboard, a screen reader, and zoom.

## 2. Content and design

- [ ] Use clear language. Make headings, links, and buttons describe what they do.
  For example, use “Read the guide” instead of “Click here”.
- [ ] Put headings in a sensible order. Follow the content structure in
  `content/README.md`.
- [ ] Add useful alternative text to images that give information. Give decorative
  images empty alternative text. Explain charts and diagrams in text too.
- [ ] Add accurate captions to recorded videos with audio. Check if the media also
  needs audio description or another accessible version.
- [ ] Do not use colour as the only way to share information. Check contrast is at
  least 4.5:1 for normal text and 3:1 for large text. Relevant controls and their
  visual states should have at least 3:1 contrast against adjacent colours.
- [ ] Make buttons and other controls easy to see and select, including on small
  screens. Check the WCAG 2.2 rules for target size and their exceptions.

## 3. Building the website

- [ ] Use the right HTML for each job, such as buttons for actions and links for
  navigation. Give each page a clear title and set its language.
- [ ] Make every action work with a keyboard. Show clearly which item is selected,
  move through items in a sensible order, and make sure focus is not hidden or trapped.
- [ ] Make menus, dialogs, and exercises work with a keyboard. When a dialog opens,
  move keyboard focus into it. When it closes, return focus to a sensible place.
- [ ] Give every form field a visible label and clear instructions. Explain errors in
  text, link each error to its field, and say how to fix it.
- [ ] Make sure screen readers can identify each control, what it does, and its state.
  Use ARIA only when the right HTML control cannot provide the needed behaviour.
- [ ] Make important updates, such as a form submission result, available to screen
  readers. Do not rely only on sound or a visual change.
- [ ] Offer another way to complete an action that requires dragging, where needed.
  Avoid unnecessary time limits, respect reduced-motion settings, and let people
  pause moving content when required.

## 4. Before finishing

- [ ] **Keyboard:** Complete the affected journey using Tab, Shift+Tab, Enter, Space,
  and arrow keys where appropriate. Check focus, menus, and dialogs.
- [ ] **Screen reader:** Test the journey using a screen reader and a supported
  browser. Check headings, control names, instructions, errors, and updates.
- [ ] **Zoom:** Check text at 200% and check the page at a narrow screen width
  equivalent to 400% zoom. People should still be able to read and use the page
  without unnecessary horizontal scrolling.
- [ ] **Contrast:** Use a contrast checker on text, controls, and focus indicators,
  including their different states.
- [ ] **Project checks:** Run an available accessibility checker on the affected
  pages and review the results. Run the relevant project checks in the README too.
  Lint, typecheck, and unit tests alone do not check accessibility.
- [ ] **Review:** In the pull request, record the pages, browser, screen reader,
  checks and results, and any problems still to fix. Ask a person to review the work.
- [ ] **Content:** Follow the writing and review steps in `content/README.md`.

Use the full guidance below for checks that are not covered here.

## References

- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [W3C guidance on accessibility evaluation tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/)
- [W3C guidance on involving users](https://www.w3.org/WAI/planning/involving-users/)
