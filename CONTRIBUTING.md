# Contributing to MOG Bot

Thank you for your interest in contributing to MOG Bot! This document provides guidelines and instructions for contributing to the ultimate bot mogging framework.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Git

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/mog-bot.git
   cd mog-bot
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Build all packages:
   ```bash
   pnpm build
   ```

5. Run tests:
   ```bash
   pnpm test
   ```

## Development Workflow

### Project Structure

```
mog-bot/
├── packages/
│   ├── core/       # Core mogging framework
│   ├── types/      # TypeScript definitions
│   ├── react/      # React integration
│   ├── cli/        # Command-line interface
│   ├── utils/      # Utility functions
│   └── logger/     # Logging utilities
├── docs/           # Website and documentation
└── examples/       # Usage examples
```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Write or update tests as needed

4. Ensure all tests pass:
   ```bash
   pnpm test
   ```

5. Check types:
   ```bash
   pnpm typecheck
   ```

6. Lint your code:
   ```bash
   pnpm lint
   ```

7. Format code:
   ```bash
   pnpm format
   ```

## Coding Standards

### TypeScript

- Use TypeScript for all code
- Enable strict mode
- Provide proper type annotations
- Avoid `any` types when possible
- Document public APIs with JSDoc comments

### Style Guide

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multiline objects/arrays
- Maximum line length: 80 characters
- Use meaningful variable and function names

### Naming Conventions

- **Files**: kebab-case (`mog-instance.ts`)
- **Classes/Interfaces**: PascalCase (`MogInstance`)
- **Functions/Variables**: camelCase (`createMog`)
- **Constants**: UPPER_SNAKE_CASE (`DEFAULT_OPTIONS`)

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Maintenance tasks

Example:
```
feat(core): add aggressive mogging mode

Implemented new aggressive mode that increases mogging intensity
by 300% for maximum dominance.
```

## Testing

### Writing Tests

- Place tests next to the code they test (`*.test.ts`)
- Use descriptive test names
- Test edge cases and error conditions
- Aim for high coverage (but remember: we're satirical)

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage

# Run tests for specific package
pnpm --filter @mog/core test
```

## Documentation

### Code Documentation

- Document all exported functions, classes, and interfaces
- Use JSDoc format
- Include usage examples for complex functionality
- Keep documentation up-to-date with code changes

### Website Documentation

- Update website docs when adding new features
- Include code examples
- Maintain consistent tone (professional yet satirical)

## Pull Request Process

1. Update README.md or documentation if needed
2. Ensure all tests pass and code is properly formatted
3. Update CHANGELOG.md with your changes
4. Submit PR with clear description of changes
5. Link any related issues
6. Wait for review from maintainers

### PR Title Format

Use conventional commit format:
```
feat(package): brief description of change
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Related Issues
Closes #123
```

## Release Process

Releases are managed by maintainers:

1. Update version in all package.json files
2. Update CHANGELOG.md
3. Create git tag
4. Publish to npm
5. Create GitHub release

## Getting Help

- **Questions**: Use [GitHub Discussions](https://github.com/mogbot/mog-bot/discussions)
- **Bugs**: Open an [issue](https://github.com/mogbot/mog-bot/issues)
- **Security**: Follow our [Security Policy](SECURITY.md)
- **Discord**: Join our [community server](https://discord.gg/mogbot)

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Forever honored in MOG Bot history

## License

By contributing to MOG Bot, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to MOG Bot and helping establish bot superiority across the ecosystem! 🎯
