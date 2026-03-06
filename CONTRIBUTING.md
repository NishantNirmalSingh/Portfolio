# Contributing to Portfolio

Thank you for your interest in contributing to this portfolio project!

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Code Standards

### TypeScript
- Use strict TypeScript types
- Avoid `any` types
- Export interfaces for reusability

### Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Use meaningful prop names

### Styling
- Use TailwindCSS utility classes
- Follow the existing color scheme
- Maintain consistent spacing

### Naming Conventions
- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Files: camelCase for utilities (e.g., `constants.ts`)
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

## Commit Messages

Use conventional commits:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code restructuring
- `test:` adding tests
- `chore:` maintenance tasks

Example: `feat: add project filtering functionality`

## Pull Request Process

1. Update documentation if needed
2. Test thoroughly on multiple screen sizes
3. Ensure build passes: `npm run build`
4. Create PR with clear description
5. Wait for review

## Questions?

Contact: nishant4245@gmail.com

---

Thank you for contributing!
