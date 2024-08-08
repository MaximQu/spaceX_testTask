## How to build project

- Install node modules

```bash
npm install
```

- Run development server

```bash
npm run dev
```

- Build project

```bash
npm run build
```

## CI/CD Pipeline Overview

### Continuous Integration (CI)

- Trigger: Every time a pull request is pushed to the repository.
- Action: The CI pipeline automatically initiates a build of the application.
- Purpose: This ensures that any changes in a pull request do not introduce errors or issues. The build process might include tasks such as:
  - Running unit tests.
  - Linting code.
  - Building the application.

### Continuous Deployment (CD)

- Trigger: Upon merging a pull request to the master branch.
- Action: The CD pipeline automatically deploys the updated application.
- Purpose: This facilitates a smooth and automated deployment process, ensuring that the latest changes are promptly and consistently applied to the production environment. Deployment steps might include:
  - Running a final build.
  - Deploying the application to the desired environment (e.g., Heroku, AWS, etc.).
  - Notifying stakeholders or teams about the successful deployment.

### Notifications

- Setup: Upon successful deployment to the master branch, notifications are automatically sent to the relevant channels or individuals.
- Purpose: Keeping the team informed about the status of the application in production.
