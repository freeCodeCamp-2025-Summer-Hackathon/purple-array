# Contribution Guidelines

_Original documentation borrowed from [NHCarrigan Docs](https://docs.nhcarrigan.com/dev/contributing/)_

## 1. Scope and General Contribution Guidelines

### 1.1 Overview

This document outlines the general guidelines for contributing to our projects. It serves as a high-level framework for all contributors, whether you’re submitting code, documentation, or other forms of contribution.

### 1.2 Commit Signing Requirements

All commits must be cryptographically signed using either GPG or SSH. This requirement serves to verify the authenticity and integrity of your contributions.

- For GPG signing, ensure your GPG key is associated with your GitHub account.
- For SSH signing, use a key linked to your GitHub account.

By signing your commit, you are certifying that:

- You have read, understood, and agree to abide by the project's Code of Conduct in its entirety.
- Your contribution and participation align with the principles outlined in the Code of Conduct, including respect for all community members regardless of their identity or background.
- You have the right to submit the contribution under our project license.
- You understand and agree to our contribution terms.

### 1.3 Licensing of Contributions

All contributions to our projects, including but not limited to code, documentation, artwork, and other materials, will be licensed under our global software license. By submitting a contribution, you are agreeing to license your work under the terms of this license.

### 1.4 Intellectual Property

By contributing to our projects, you affirm that:

- You own the copyright to your contribution or have authorization from the copyright owner to submit it under our license.
- Your contribution does not infringe on any third-party intellectual property rights.
- You grant us a perpetual, worldwide, non-exclusive, royalty-free license to use, modify, and distribute your contribution.

### 1.5 Legal Compliance

Ensure all contributions comply with relevant laws and regulations, including export controls and data protection laws.

## 2. Setting Up Your Development Environment

### 2.1 Cloning the Repository for initial setup

1. Navigate to the original repository on GitHub.
2. Click the “Code” button and copy the URL (HTTPS or SSH, depending on your setup).
3. Open your terminal or command prompt.
4. Navigate to the directory where you want to store the project.
5. Run the following command, replacing `<url>` with the URL you copied:<br>

   `git clone <url>`

6. Enter your GitHub credentials if prompted.

### 2.2 Setting Up the Upstream Remote <a id="upstream"></a>

Adding the original repository as an upstream remote allows you to easily keep your fork up-to-date.

1. Change into the project directory: <br>

   `cd <project-name>`

2. Add the upstream remote: <br>

   `git remote add upstream <original-repository-url>` <br>

   Replace `<original-repository-url>` with the git URL of the original repository.

3. Verify the new remote: <br>
   `git remote -v` <br>

   You should see entries for both `origin` (your fork) and `upstream`.

### 2.3 Keeping Your Fork Up-to-Date

Regularly update your fork to incorporate changes from the upstream repository:

1. Fetch the branches and commits from the upstream repository: <br>

   `git fetch upstream`

2. Check out your fork’s local main branch: <br>

   `git checkout main`

3. Merge changes from upstream/main into your local main branch: <br>

   `git merge upstream/main`

### 2.4 Troubleshooting

If you encounter any issues during setup:

1. Check the project’s FAQ or troubleshooting guide (if available).
2. Search for similar issues in the project’s issue tracker.
3. If the problem persists, open a new issue with detailed information about the problem and steps to reproduce it.

## 3. Claiming an Issue

If an issue has not already been assigned to you:

### 3.1 Finding an Issue

1. Navigate to the project’s issue tracker.
2. Browse open issues or use filters to find tasks that interest you.
3. Read the issue description thoroughly to understand the requirements and context.

### 3.2 Already Assigned Issues

If an issue is already assigned:

1. Check the assignee and the last activity date.
2. If you’re still interested in contributing, you can:<br>
   a. Comment on the issue expressing your interest to collaborate.<br>
   b. Reach out to the assigned person to offer assistance or discuss collaboration.
3. We encourage collaboration and pair programming on complex issues!

### 3.3 Working on the Issue

1. Once assigned, create a new branch in your fork for this specific issue.
2. Use a descriptive branch name, e.g., fix/issue-123-button-alignment.
3. Make your changes, committing regularly with clear, concise commit messages.
4. Push your changes to your fork.
5. Open a pull request, using the **_Pull Request Template_** when ready for review.

### 3.4 Keeping the Community Updated

1. Provide regular updates on your progress in the issue comments.
2. If you encounter obstacles, don’t hesitate to ask for help in the issue thread.
3. If you need to step away from an issue, please let us know so it can be reassigned if necessary.

### 3.5 Time Management

- Try to start working on the issue quickly if possible.
- If you haven’t made progress within a day or two reach out to your fellow team members or Hackathon Leaders for support.
- If you need more time, communicate this in the issue comments.

### 3.6 Multiple Issues

- We encourage focusing on one issue at a time to ensure quality and timely completion.
- If you want to work on multiple issues, please complete one before beginning another.

### 3.7 Respectful Communication

- Always be courteous and professional in issue discussions.
- Respect the decisions of project maintainers regarding issue assignments and priorities.
- If you disagree with something, express your thoughts constructively and be open to feedback.

## 4. Working on Your Issue

### 4.1 Updating Your Fork

Before starting work, ensure your forked version is up to date with the original repository. If you’ve set up the `upstream` remote as mentioned in Section [2.2](#upstream), follow these steps:

1. Open your terminal and navigate to your project’s root directory.
2. Run the following commands:

```
git fetch upstream
git merge upstream/main
```

### 4.2 Creating a New Branch

Always create a new branch for your work:

1. Create and switch to a new branch with either the checkout or switch commands.

- Option 1: Checkout command <br>

  `git checkout -b <branchname>`

- Option 2: Switch command <br>

  `git switch -c <branchname>`

2. Follow the branch naming convention: type/description

- `type:` Indicates the nature of the changes (e.g., `feat/`, `fix/`, `docs/`, refactor)
- `description:` A brief, hyphenated description of the changes

Examples:

- `feat/add-login-page`
- `fix/resolve-memory-leak`
- `docs/update-api-endpoints`

### 4.3 Making Changes

1. Make your code changes, following the project’s coding standards and guidelines.

2. Regularly commit your changes with clear, concise messages.

3. Push your changes to your fork periodically: <br>

   `git push origin <branchname>`

### 4.4 Committing Changes

When you’re ready to commit your changes:

1. Stage your changes: <br>

   `git add .`

   Or stage specific files:

   `git add <file1> <file2> <file3>`

2. Commit: <br>

   `git commit`

### 4.5 Commit Message Guidelines

- Follow Conventional Commit standards: `type(scope): description` such as `docs: update contributing guidelines`.
- Use the present tense (“Add feature” not “Added feature”)
- Use the imperative mood (“Move cursor to…” not “Moves cursor to…“)
- Limit the first line to 50 characters or less
  - Additional information can be included in the body
- Do **NOT** reference issues/PRs in your commit

Example:

`feat: add user authentication system`

`Implement JWT-based authentication for API endpoints.`

### 4.7 Testing Your Changes

- Check your code against our style guidelines, and then run the a linter if you have one configured to ensure your code complies. <br>

  `pnpm lint # or the appropriate lint command for your project`

- Run any existing tests to ensure your changes haven’t broken anything:<br>

  `pnpm test # or the appropriate test command for your project`

- Add new tests for your changes if applicable.

### 4.8 Documentation

- Update relevant documentation to reflect your changes.
- If you’ve added new features, include appropriate documentation.

### 4.9 Preparing for Pull Request

Before submitting a pull request:

1. Check that your code adheres to the project’s style guidelines - the linters should pass.
2. Ensure the build succeeds.
3. Ensure all tests pass.
4. Review your changes and commit history.

If you’re unsure about any part of the process or need help, don’t hesitate to check in with the members of our team or our Hackathon leaders!

## 5. Submitting a Pull Request

### 5.1 Pushing Your Changes

1. Push your changes to your forked repository: <br>

   `git push -u origin <branchname>`

- `-u` sets the upstream, linking your local branch to the remote branch
- `origin` specifies your forked repository as the destination
  `<branchname>` is the name of your local branch

2. Ensure the push is successful and your changes appear in your repository on GitHub.

### 5.2 Creating the Pull Request

1. Navigate to your repository on GitHub
2. You should see a prompt to create a pull request for your recently pushed branch. If not, click on the “Pull requests” tab and then the “New pull request” button.
3. Ensure the base repository is the original project repository and the base branch is `main`.
4. Select your recently pushed branch as the compare branch.

### 5.3 Filling Out the Pull Request

1. Change the title of your pull request to be a conventional commit message summarizing all changes in that PR
2. Fill out the pull request description with as much information as possible. This typically includes:

   - A clear description of the changes
   - The issue number(s) your pull request addresses
   - Any additional context or explanations

3. Fill out the rest of the pull request form completely.
4. If your changes include visual elements, consider adding screenshots or GIFs to illustrate the modifications.

### 5.4 Pull Request Best Practices

- Ensure your PR addresses only one issue or adds one feature. If you have made multiple unrelated changes, consider breaking them into separate pull requests.
- Double-check that all tests pass and there are no conflicts with the base branch.
- If your PR is a work in progress, mark it as a draft pull request.

### 5.5 After Submitting

- Keep an eye on your pull request for any comments, requests for changes, or approval.
- Be prepared to make additional commits to your branch if changes are requested.

### 5.6 Updating Your Pull Request

If you need to make changes to your pull request:

1. Make the required changes in your local branch.

2. Commit the changes.

3. Push the new commits to your fork: <br>

`git push origin <branchname>`

4. The pull request will automatically update with your new commits.

### 5.7 Pull Request Etiquette

- Be patient. Everyone is likely managing multiple priorities.
- Be open to feedback and willing to make changes.
- Respond promptly to any questions or requests from reviewers.
- If there’s a delay in your ability to respond or make requested changes, leave a comment explaining the situation.

### 5.8 Merging and Closing

- Once your pull request is approved, a maintainer will merge it into the main project.
- After merging, you can delete your branch from your fork if you won’t be using it anymore.
- Celebrate your contribution to the project!

## 6. Pull Request Reviews

### 6.1 Review Process Overview

- All pull requests require at least one approved review before merging.
- The review process helps maintain code quality, consistency, and project standards.

### 6.2 Types of Review Outcomes

1. `Approved:` Your pull request is ready to be merged.
2. `Changes Requested:` Modifications or additional information is needed before approval.
3. `Commented:` The reviewer has provided feedback but hasn’t explicitly approved or requested changes.

### 6.3 Responding to Review Feedback

If changes are requested:

1. Read all comments carefully to understand the requested modifications.
2. Ask for clarification if any feedback is unclear.
3. Make the necessary changes in your local branch.
4. Commit and push the changes to update your pull request.
5. Respond to each comment, explaining how you addressed the feedback or why you chose a different approach.

### 6.4 Best Practices for Handling Reviews

- Respond promptly to review comments.
- Be open to constructive criticism and willing to make changes.
- If you disagree with a suggestion, explain your reasoning politely and be open to discussion.
- Use the review process as a learning opportunity to improve your coding skills.

### 6.5 Multiple Iterations

- Complex changes may require multiple rounds of reviews and revisions.
- Stay engaged throughout the process and be patient if additional iterations are needed.

### 6.6 Learning from the Review Process

- Take note of common feedback to improve future contributions.
- Consider reviewing other pull requests to gain insights into the project’s standards and practices.
