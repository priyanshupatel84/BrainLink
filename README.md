# BrainLink 

This project, **BrainLink**, is a feature-rich communication platform built with Next.js, designed to provide a comprehensive real-time communication experience. It encompasses server management, channel-based text chat, direct messaging, and integrated voice/video calls, all within a modern and responsive user interface.

## Features

*   **Real-time Chat:** Engage in instant messaging within dedicated channels and private direct message conversations. Messages are delivered and updated in real-time using Socket.io.
*   **Voice/Video Calls:** Seamlessly connect with other users through integrated voice and video communication, powered by LiveKit for robust real-time media streaming.
*   **Server Management:** Create and customize your own servers. Invite friends, organize discussions into various text and voice channels, and manage server settings.
*   **Channel Types:** Support for both text and audio/video channels, allowing for diverse communication methods within servers.
*   **User Authentication:** Secure and streamlined user authentication and management handled by Clerk, providing robust sign-up, sign-in, and profile management.
*   **Member Roles & Permissions:** Assign and manage different roles for server members, controlling their access and permissions within channels and the server.
*   **File Uploads:** Easily share images, documents, and other files directly within chat conversations using Uploadthing for secure and efficient file handling.
*   **Direct Messaging:** Initiate private one-on-one conversations with other users outside of server channels.
*   **Responsive Design:** The application is built with a mobile-first approach and utilizes Tailwind CSS to ensure a consistent and optimized experience across various devices and screen sizes.
*   **Emoji Support:** Enhance your messages with a wide range of emojis, integrated for a more expressive chat experience.
*   **Infinite Scrolling:** Efficiently load past messages in chat channels and direct messages with infinite scrolling capabilities.

## Technologies Used

*   **Framework:** Next.js 14 (App Router) - A React framework for building full-stack web applications.
*   **Styling:** Tailwind CSS - A utility-first CSS framework for rapidly building custom designs.
*   **UI Components:** Shadcn UI - A collection of reusable components built with Radix UI and Tailwind CSS.
*   **Database:** Prisma (ORM) - A next-generation ORM for Node.js and TypeScript, used for database access and management.
*   **Authentication:** Clerk - A complete user management platform for Next.js applications.
*   **Real-time Communication:**
    *   LiveKit - For real-time audio and video communication.
    *   Socket.io - For real-time bidirectional event-based communication (chat messages, presence).
*   **File Uploads:** Uploadthing - A simple file upload solution for Next.js.
*   **State Management:** Zustand - A small, fast, and scalable bear-bones state-management solution.
*   **Data Fetching:** React Query (TanStack Query) - For managing, caching, and synchronizing asynchronous data.
*   **Validation:** Zod - A TypeScript-first schema declaration and validation library.
*   **Forms:** React Hook Form - Performant, flexible, and extensible forms with easy-to-use validation.
*   **Utility Libraries:** `clsx`, `tailwind-merge`, `lucide-react`, `uuid`, `query-string`, `date-fns`.

## Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

*   Node.js (v18 or higher) - [Download Node.js](https://nodejs.org/)
*   npm or Yarn - Node.js comes with npm. For Yarn, [install Yarn](https://yarnpkg.com/)
*   A PostgreSQL or MySQL database (or any database supported by Prisma). You can use a local instance or a cloud-hosted service.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/priyanshupatel84/BrainLink.git
    cd discord-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory of your project. Copy the contents from `.env.example` (if provided, otherwise use the structure below) and fill in your credentials.

    ```env
    # Database
    DATABASE_URL="YOUR_DATABASE_URL" # e.g., postgresql://user:password@host:port/database

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
    CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    # Uploadthing
    UPLOADTHING_SECRET="YOUR_UPLOADTHING_SECRET"
    UPLOADTHING_APP_ID="YOUR_UPLOADTHING_APP_ID"

    # LiveKit (for Voice/Video Calls)
    LIVEKIT_API_KEY="YOUR_LIVEKIT_API_KEY"
    LIVEKIT_API_SECRET="YOUR_LIVEKIT_API_SECRET"
    NEXT_PUBLIC_LIVEKIT_URL="YOUR_LIVEKIT_URL" # e.g., wss://your-livekit-server.livekit.cloud
    ```
    *   **DATABASE_URL:** Connection string for your database.
    *   **Clerk Keys:** Obtain these from your [Clerk Dashboard](https://clerk.com/).
    *   **Uploadthing Keys:** Obtain these from your [Uploadthing Dashboard](https://uploadthing.com/).
    *   **LiveKit Keys:** Obtain these from your [LiveKit Cloud](https://cloud.livekit.io/) account or your self-hosted LiveKit instance.

4.  **Database Setup:**
    Apply your Prisma schema to the database and generate the Prisma client:
    ```bash
    npx prisma db push
    npx prisma generate
    ```
    `npx prisma db push` will sync your schema with the database, and `npx prisma generate` will generate the Prisma client based on your `schema.prisma`.

### Running the Development Server

To start the development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

To build the application for production deployment:

```bash
npm run build
# or
yarn build
```

This command will create an optimized production build in the `.next` directory.

### Running in Production

To run the built application in production mode:

```bash
npm run start
# or
yarn start
```

This will start the custom Node.js server (`server.js`) which handles both Next.js and Socket.io.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. It provides automatic deployments, global CDN, and all the features you need.

For more detailed information on deploying Next.js applications, refer to the official [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'feat: Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

Please ensure your code adheres to the existing style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. (Note: You might need to create a LICENSE file in your repository if you haven't already.)
