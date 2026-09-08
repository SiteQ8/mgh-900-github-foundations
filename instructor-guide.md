# Instructor guide

## Teaching stance

This is a practice-first course. Keep explanations short, demonstrate one action, then let learners perform it. Ask learners to explain the intent of a change before they click Create, Commit, Open pull request, or Merge.

## Suggested flow

### Opening

- Ask learners to name one project they would like to make easier to collaborate on.
- Show the repository map and explain that each lab produces an artifact.
- Establish the safety rule: no secrets, private customer data, or credentials in class repositories.

### Repository basics

Emphasize that a repository is more than a code folder. It is a project boundary, history, collaboration space, and automation home. Pause after README creation and ask a partner to find the next action without verbal help.

### Commits and branches

Use the phrase: a branch is a safe place to propose change; a commit is a checkpoint with intent. If learners make a large change, ask them to separate it into two logical commits rather than fixing it for them.

### Pull requests

Model a review that asks about the work, not the person. Require every PR description to include intent and verification. Pair learners so every PR receives at least one review comment.

### Issues, Projects, and Actions

Contrast an issue with a chat message: an issue should preserve context, ownership, and a definition of done. Have learners inspect the validation workflow before they change anything so automation feels explainable rather than magical.

## Common misconceptions

- GitHub is not Git; Git is the version-control system and GitHub is a collaboration platform built around repositories.
- A branch is not a second copy that must be manually synchronized forever; it is a movable line of work that can be compared and merged.
- A pull request is not only a merge button; it is the review record around a proposed change.
- A green Action means the defined checks passed, not that the entire project is perfect.
- Deleting a file containing a secret does not revoke the secret.

## Recovery patterns

- If a learner cannot create a repository, use a fork or pair with a learner who can.
- If a learner loses track of a branch, use the branch selector and compare view rather than recreating work.
- If a PR is confusing, ask for a smaller change and a clearer title.
- If automation is unavailable, read the workflow line by line and evaluate the required-file checks manually.

## Closing questions

- Which GitHub object gives your team the most useful context?
- What would make a new contributor feel safe in your repository?
- What should be automated next, and what should remain a human decision?
