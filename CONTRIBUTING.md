# Contributing to RaylsShield

Thank you for your interest in contributing to RaylsShield! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git
- Basic understanding of:
  - Zero-Knowledge Proofs (ZK-SNARKs)
  - Solidity and Smart Contracts
  - Circom circuit language
  - Hardhat development framework

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/rayls-shield-BA.git
   cd rayls-shield-BA
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Compile contracts and circuits**
   ```bash
   npm run compile
   npx hardhat circom
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## 📝 Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Maintenance tasks

### 2. Make Changes

Follow these guidelines:

#### Smart Contracts (Solidity)
- Use Solidity 0.8.20
- Follow OpenZeppelin patterns for security
- Add comprehensive NatSpec comments
- Keep gas costs optimized
- Use ReentrancyGuard for external calls
- Validate all inputs

Example:
```solidity
/**
 * @notice Send a private cross-chain message
 * @param _dstChainId Destination chain ID
 * @param _destination Recipient address
 * @param _encryptedPayload Encrypted message data
 * @param _pA ZK proof point A
 * @param _pB ZK proof point B
 * @param _pC ZK proof point C
 * @param _publicSignals Public inputs [nullifierHash, commitment, recipientHash]
 */
function sendPrivateMessage(...) external payable nonReentrant {
    // Implementation
}
```

#### ZK Circuits (Circom)
- Keep circuits simple and auditable
- Add comments explaining constraints
- Use proven libraries (circomlib)
- Test thoroughly with multiple inputs
- Document circuit purpose and inputs

Example:
```circom
// Verify commitment = Poseidon(secret, nullifier, amount)
component commitmentHash = Poseidon(3);
commitmentHash.inputs[0] <== secret;
commitmentHash.inputs[1] <== nullifier;
commitmentHash.inputs[2] <== amount;
commitment === commitmentHash.out;
```

#### JavaScript/TypeScript
- Use ES6+ syntax
- Add JSDoc comments
- Handle errors properly
- Use async/await for async operations
- Follow existing code style

### 3. Write Tests

All new features must include tests:

```javascript
describe("New Feature", function () {
  it("Should work as expected", async function () {
    // Arrange
    const { contract } = await setup();

    // Act
    const result = await contract.newFeature();

    // Assert
    expect(result).to.equal(expectedValue);
  });
});
```

**Test coverage requirements:**
- Unit tests for all new functions
- Integration tests for complete workflows
- ZK proof generation tests
- Gas optimization tests (when relevant)

### 4. Run Quality Checks

Before committing:

```bash
# Run all tests
npm test

# Check test coverage
npx hardhat coverage

# Lint code (if linter is configured)
npm run lint

# Generate ZK proof to verify circuits work
npm run generate:proof
```

### 5. Commit Changes

Use conventional commit messages:

```bash
git commit -m "feat: add compliance verification circuit"
git commit -m "fix: prevent nullifier reuse attack"
git commit -m "docs: update frontend integration guide"
git commit -m "test: add cross-chain messaging tests"
```

**Commit message format:**
```
<type>: <short description>

<optional longer description>

<optional breaking changes>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting)
- `refactor` - Code refactoring
- `test` - Test additions/changes
- `chore` - Maintenance tasks
- `perf` - Performance improvements
- `security` - Security improvements

### 6. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 🔍 Pull Request Guidelines

### PR Title

Use conventional commit format:
```
feat: Add support for multi-recipient messages
fix: Resolve nullifier collision issue
docs: Improve frontend integration examples
```

### PR Description

Include:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] All tests pass
- [ ] New tests added
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests provide adequate coverage

## Screenshots (if applicable)

## Related Issues
Closes #123
```

### Review Process

1. **Automated checks** - CI will run tests automatically
2. **Code review** - Maintainers will review your code
3. **Requested changes** - Address any feedback
4. **Approval** - Once approved, your PR will be merged

## 🐛 Reporting Bugs

### Before Reporting

1. **Search existing issues** - Someone may have already reported it
2. **Try latest version** - Bug might already be fixed
3. **Reproduce** - Ensure you can consistently reproduce the issue

### Bug Report Template

```markdown
## Description
Clear description of the bug.

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- OS: [e.g., Ubuntu 22.04]
- Node version: [e.g., v18.17.0]
- npm version: [e.g., 9.6.7]
- RaylsShield version: [e.g., 1.0.0]

## Additional Context
Any other relevant information.

## Possible Solution (optional)
If you have ideas on how to fix it.
```

## 💡 Feature Requests

We welcome feature requests! Please:

1. **Check existing issues** first
2. **Describe the use case** clearly
3. **Explain why** it would be useful
4. **Provide examples** if possible

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature.

## Use Case
Why is this feature needed? What problem does it solve?

## Proposed Solution
How do you think it should work?

## Alternatives Considered
What other approaches did you consider?

## Additional Context
Any other relevant information.
```

## 🔐 Security

**Do not report security vulnerabilities in public issues!**

Instead, please email security concerns to the maintainers directly.

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## 📚 Documentation

### When to Update Documentation

- New features added
- API changes
- Configuration changes
- New dependencies
- Breaking changes

### Documentation Locations

- **README.md** - Project overview, quick start
- **FRONTEND.md** - Frontend integration guide
- **NEXT_STEPS.md** - Deployment guide
- **CLAUDE.md** - Development instructions
- **Code comments** - Inline documentation

## 🎯 Areas for Contribution

We especially welcome contributions in these areas:

### High Priority
- [ ] Security audits and improvements
- [ ] Gas optimization
- [ ] Additional ZK circuits (e.g., range proofs)
- [ ] Frontend UI/UX implementation
- [ ] Comprehensive documentation

### Medium Priority
- [ ] Additional test coverage
- [ ] Performance benchmarks
- [ ] Multi-language support
- [ ] Integration examples
- [ ] Developer tooling

### Nice to Have
- [ ] Example DApps
- [ ] Video tutorials
- [ ] Community templates
- [ ] Plugin ecosystem

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Other unprofessional conduct

## 📞 Getting Help

If you need help:

1. **Check documentation** - README.md, FRONTEND.md, etc.
2. **Search issues** - Someone may have asked before
3. **Ask in discussions** - GitHub Discussions
4. **Create an issue** - For specific problems

## 🙏 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Recognized in the community

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to RaylsShield! 🛡️

Your contributions help make privacy-preserving cross-chain transactions accessible to everyone.
