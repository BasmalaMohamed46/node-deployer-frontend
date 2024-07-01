# WeBuild Backend

Welcome to the WeBuild Backend repository. This README serves as a comprehensive guide to the project's structure, setup instructions, features, API endpoints, additional information, resources, and contributions.

## Project Overview

WeBuild is a SaaS product designed to deliver a seamless project deployment experience. The backend repository houses the server-side code, responsible for handling authentication, user management, deployment service, and other essential functionalities.

## Features

### Authentication via GitHub/GitLab

- Users can authenticate using their GitHub or GitLab credentials.
- Steps:
  1. Click on the authentication button.
  2. Redirected to GitHub/GitLab login page.
  3. Enter credentials and grant permission.
  4. Redirected back to the application with an authenticated session.

### Connect to Repository

- Users can connect to their code repositories on GitHub or GitLab.
- Steps:
  1. Navigate to the repository connection page.
  2. Select GitHub or GitLab.
  3. Choose a repo and press connect.

### Generate .env File

- The system can generate environment configuration files (.env files) for deployment.
- Steps:
  1. Navigate to the .env file generation page.
  2. Input necessary environment variables.
  3. Click generate, and the system creates the .env file.

### Deploy Application

- Users can deploy applications directly from connected repositories.
- Steps:
  1. Navigate to the deployment page.
  2. Select the repository.
  3. Configure deployment settings.
  4. Click deploy, and the system initiates the deployment process.

### Monitor Container Events

- The system monitors container events and displays them in real-time.
- Steps:
  1. Continuously monitor container events.
  2. Log and display events in the dashboard.
  3. Users can view real-time events and statuses.

### Inspect Container Logs

- Users can inspect container logs for debugging and monitoring purposes.
- Steps:
  1. Select the container to inspect.
  2. Navigate to the container logs page.
  3. System displays the logs for the selected container.

### Analyze Container Performance

- The system provides tools to analyze CPU and memory usage of containers.
- Steps:
  1. Navigate to the performance analysis page.
  2. Select the container.
  3. Display CPU and memory usage statistics.

### Trigger Redeployment

- Users can trigger redeployment of applications as needed.
- Steps:
  1. Navigate to the deployments page.
  2. Select a past deployment.
  3. Click redeploy, and the system initiates the redeployment process.

### Stop and Resume Container

- Users can stop and resume containers for better control.
- Steps:
  1. Navigate to the container management page.
  2. Select the container to stop or resume.
  3. Click stop or resume, and the system performs the action.

### Remove Container

- Users can remove containers when they are no longer needed.
- Steps:
  1. Navigate to the container settings page.
  2. Click remove, and the system deletes the container.

### Select Subscription Tier

- Users can choose from different subscription tiers based on their needs.
- Steps:
  1. Navigate to the subscription page.
  2. Review available subscription tiers.
  3. Select a subscription tier and confirm the selection.

### Process Payment via Stripe

- The system processes payments using Stripe for subscription management.
- Steps:
  1. Navigate to the payment page.
  2. Enter payment details and confirm.
  3. System processes the payment via Stripe and updates the subscription status.
     
## Environment Variables

The `.env` file should contain the following variables:

1. **VITE_BACK_END_URL**
   - This variable specifies the URL for the backend server. It is used by the frontend to make API requests to the backend.

2. **VITE_WEBHOOKURL**
   - This variable is used to specify a URL for webhook events. Webhooks are used to notify your application when certain events occur, such as a deployment being completed.
     
## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/BasmalaMohamed46/node-deployer-frontend
   cd node-deployer-frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Install dependencies:**
   ```sh
   npm run dev
   ```
   
## Video Demo

Explore a comprehensive demonstration of WeBuild in action via the following video:

[![WeBuild Demo](https://img.youtube.com/vi/UXnWZMVCsUc/0.jpg)](https://youtu.be/UXnWZMVCsUc)


