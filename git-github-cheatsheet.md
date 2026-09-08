# Git and GitHub cheat sheet

## GitHub web workflow

1. Open or fork a repository.
2. Create a branch before making a change.
3. Edit one focused part of the project.
4. Commit with an action-oriented message.
5. Open a pull request into the default branch.
6. Read review feedback and update the branch.
7. Merge when the change is understood and checks are acceptable.
8. Delete the branch when it is no longer useful.

## Core Git commands

| Intent | Command |
| --- | --- |
| Check current state | git status |
| See branches | git branch |
| Create and switch branch | git switch -c feature/my-change |
| Stage a file | git add path/to/file |
| Create a commit | git commit -m "Describe the change" |
| Show recent history | git log --oneline |
| Compare changes | git diff |
| Publish a branch | git push -u origin feature/my-change |
| Update local default branch | git pull |

## Good commit messages

Prefer:

- Add learner profile starter
- Clarify pull request review steps
- Fix broken lab link

Avoid:

- stuff
- update
- final final

## Safety reminders

- Inspect staged files before committing.
- Never paste a password or API key into a repository.
- Use a safe sample instead of real customer data.
- If a secret is exposed, revoke or rotate it immediately.
