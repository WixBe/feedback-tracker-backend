# Feedback Tracker Frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

The **Feedback Tracker Frontend** is the user-facing web application of the Feedback Tracker platform. Built using TypeScript and modern web technologies, it allows users to submit, view, and track feedback seamlessly. This frontend application depends on the backend service ([Feedback Tracker Backend](https://github.com/WixBe/feedback-tracker-backend)) for data processing and storage.

## Features

- **Interactive UI**: Intuitive and responsive interface for submitting and managing feedback.
- **TypeScript-Based**: Strongly typed code for improved reliability and maintainability.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **REST API Integration**: Communicates with the backend to provide real-time functionality.

## Technology Stack

This repository is predominantly written in:
- **TypeScript** (63.5%)
- **CSS** (31.7%)
- **JavaScript** (3.4%)
- **HTML** (1.4%)

## Prerequisites

- Node.js version 14 or higher.
- [Feedback Tracker Backend](https://github.com/WixBe/feedback-tracker-backend) set up and running.

## Installation

To set up the frontend locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/WixBe/feedback-tracker-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Postmeow-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
    - Create a .env file in the root directory.
    - Add the following variables:
    ```code
    DATABASE_URL=postgresql://username:password@localhost:5432/feedback_tracker
    PORT=4000
    ```
5. Run database migrations:
   ```bash
   npm run migrate
   ```
6. Start the server:
   ```bash
   npm run start
   ```
   
## Usage

The server will be available at http://localhost:4000. Use tools like Postman or cURL to interact with the API.

## Directory Structure

```plaintext
.
├── src/                # Source code for the backend
├── config/             # Configuration files
├── tests/              # Unit and integration tests
├── docs/               # API documentation
├── README.md           # Project documentation
└── package.json        # Dependency and script management
```

## API Documentation
For detailed API documentation, refer to the docs/ directory or access the Swagger UI (if available).
