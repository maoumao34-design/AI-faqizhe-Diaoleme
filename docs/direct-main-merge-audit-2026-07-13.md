# Direct main merge audit - 2026-07-13

## What happened

The CC club Responses API fix was pushed directly to `main` instead of being merged through a pull request. This bypassed the repository workflow documented in `README.md` and left no closed PR for the change.

Affected commits:

- `ece780d fix: use Responses API for CC club`
- `86c6567 merge: integrate CC club Responses API fix`

## Change delivered

The backend now defaults CC club OpenAI-compatible requests to the Responses API, sends uploaded images as `input_image`, and parses Responses API `output_text`. The legacy Chat Completions path remains selectable with `OPENAI_API_MODE=chat_completions`.

## Validation performed

- `backend npm test`: passed
- `diaoleme npm run build`: passed with existing non-blocking Vite warnings
- `git diff --check`: passed
- Real CC club request with the configured key and `gpt-5.5`: returned `success: true`, `fallbackCode: null`, and `ai_source: openai_compatible`

## Risk and remediation

No functional rollback is planned because the fix is running successfully on `main`. This audit record is being added through a normal documentation PR so the process exception remains reviewable without rewriting published history.

For future changes:

1. Fetch and inspect existing open PRs before implementing or merging overlapping work.
2. Push changes only to `feature/*`, `fix/*`, or documentation branches.
3. Create or reuse a PR and record scope, validation, risk, and unresolved items.
4. Merge only after checks pass; do not push directly to `main` unless a human explicitly authorizes an emergency exception.
