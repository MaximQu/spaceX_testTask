## About project

This project is a test app to apply for frontend developer position. The app itself its implementation of [spaceX API](https://docs.spacexdata.com/)

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
  - Running tests.
  - Linting code.
  - Building the application.

### Continuous Deployment (CD)

- Trigger: Upon merging a pull request to the main branch.
- Action: The CD pipeline automatically deploys the updated application.
- Purpose: This facilitates a smooth and automated deployment process, ensuring that the latest changes are promptly and consistently applied to the production environment. Deployment steps might include:
  - Running a final build.
  - Deploying the application to the desired environment (Netlify).
  - Notifying stakeholders or teams about the successful deployment.
