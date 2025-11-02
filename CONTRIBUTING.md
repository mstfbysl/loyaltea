# Contributing to Loyaltea

First off, thank you for considering contributing to Loyaltea! It's people like you that make this project better for everyone.

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps to reproduce the problem** in as many details as possible.
* **Describe the behavior you observed** after following the steps.
* **Describe the behavior you expected** to see instead.
* **Include screenshots and animated GIFs** if applicable.
* **If the problem is related to performance**, include your system information (OS, browser, device).
* **Explain which environment you're using** (development, staging, production).

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description** of the suggested enhancement.
* **Provide specific examples** to demonstrate the steps.
* **Describe the current behavior** and explain the behavior you expected to see instead.
* **Explain why this enhancement would be useful** to most users.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the TypeScript and React styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code based on the Documentation Styleguide
* End all files with a newline

## Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure your code follows the project's style guidelines
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Coding Standards

### TypeScript

* Use TypeScript for all new code
* Avoid `any` types - use proper typing
* Use meaningful variable and function names
* Add comments for complex logic

### React

* Use functional components with hooks
* Keep components small and focused
* Use proper prop types or TypeScript interfaces
* Follow React best practices and patterns

### Styling

* Use Tailwind CSS utility classes
* Follow the existing design system
* Ensure responsive design for mobile and desktop
* Maintain accessibility standards

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

## Project Structure

Please maintain the existing project structure:

```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── contexts/       # React contexts
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets
```

## Testing

Before submitting your pull request, please test:

* Your changes work in the development environment
* The build completes without errors (`npm run build`)
* No linting errors (`npm run lint`)
* The application preview works (`npm run preview`)

## Questions?

If you have any questions about contributing, feel free to open an issue for discussion.

Thank you for contributing to Loyaltea! 🎉
