# Basic Course Website with Next.js, TypeScript, Firebase Authentication, and Non-Functional UI

This is a simple boilerplate project for creating a basic course website using Next.js and TypeScript with Firebase Authentication. The project includes a non-functional UI structure that you can build upon to create your course website.

## Features

- Next.js and TypeScript for building a modern web application.
- Firebase Authentication for user authentication.
- A basic UI structure for the course website.
- Easy-to-extend codebase to add your own functionality.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your development machine.
- Firebase project set up and configuration (Firebase Web API keys).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Devashish-Siwatch/CourseVerse.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CourseVerse
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a Firebase project and set up authentication.
2. Copy the Firebase Web API keys and configuration details.

   - Visit the Firebase Console: https://console.firebase.google.com/
   - Go to your project settings.
   - Under the "General" tab, scroll down to the "Your apps" section and click on the "Firebase SDK snippet" dropdown.
   - Select the "Config" option and copy the Firebase configuration object.

3. Create a `.env.local` file in the project root and add your Firebase configuration:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
   NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<your-measurement-id>
   ```

### Running the Application

To run the development server, use the following command:

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Folder Structure

The project structure is organized as follows:

- `pages/`: Contains Next.js pages and routing.
- `components/`: Houses React components used to build the UI.
- `styles/`: Contains global styles and CSS files.
- `firebase/`: Includes Firebase setup and authentication logic.
- `public/`: Stores public assets like images and fonts.

## Usage

You can start building your course website by extending the existing components and adding functionality as needed. Customize the UI, create new pages, and connect them to Firebase services for a fully functional course website.

## Deployment

This project is deployed at https://course-verse.vercel.app/.
You can deploy this project to your preferred hosting platform, such as Vercel, Netlify, or Firebase Hosting. Make sure to set up environment variables on your hosting platform for Firebase configuration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Basic UI taken from https://github.com/hiriski.
- The project is built with Next.js and Firebase, which are powerful tools for building web applications.
- The UI structure is basic and non-functional to serve as a starting point for your course website development.

Feel free to contribute to this project and make it better or use it as a foundation for your own course website. Happy coding!
