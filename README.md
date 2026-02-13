# LearningPlaywright

Example Playwright practice repository containing JavaScript examples used while learning Playwright.

## Repository structure

- `chapter_01_Basics/` — simple Playwright JS examples and setup verifications
- `chapter_02_Java_Concepts/` — placeholder for Java-related notes and files

## Prerequisites

- Node.js (14+ recommended)
- Git

## Quick start (run Playwright tests)

1. Initialize project and install Playwright Test:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

2. Run tests:

```bash
npx playwright test
```

(There are currently simple example files under `chapter_01_Basics/`.)

## Files added in this commit

- `.gitignore` — ignores Node modules, Playwright outputs, editor files, logs
- Example JS files under `chapter_01_Basics/`

## Notes

You can add a `package.json` `scripts` entry for convenience, for example:

```json
"scripts": {
  "test": "playwright test"
}
```

Then run `npm test`.
