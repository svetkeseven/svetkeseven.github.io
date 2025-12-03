# Assistant Context (human-readable)

This repository includes a machine-readable file `assistant_context.json` that the assistant will read before making any changes.

Purpose
- Provide high-level information about the project so an assistant (human or programmatic) can make minimal, correct edits.
- Track a changelog of assistant-made edits.

How the assistant will use this file
- Read `assistant_context.json` before applying any patch.
- When making changes, append an entry to `modification_log` describing date, files changed and a short description.
- If available, use `scripts/update_assistant_context.py` to update the JSON safely.

What is stored in `assistant_context.json`
- `important_files`: quick map of files and roles
- `conventions`: coding and commit conventions to observe
- `link_mappings`: known social link selectors and their hrefs
- `modification_log`: array of change entries

Guidelines for humans and agents
- Keep changes minimal and targeted.
- Do not reformat entire files unless necessary.
- Preserve existing style and indentation.

If you want automation
- I added a simple script at `scripts/update_assistant_context.py` to append log entries. Run it with Python to add entries programmatically.
