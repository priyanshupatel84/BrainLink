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
    git clone https://github.com/your-username/brainlink.git
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

## Project Structure

```
.
├── app/                  # Next.js App Router directory containing all routes, API endpoints, and main layouts.
│   ├── (auth)/           # Grouped routes for authentication flows (e.g., sign-in, sign-up pages).
│   │   └── (routes)/     # Contains specific authentication pages.
│   ├── (invite)/         # Routes related to server invitation handling.
│   ├── (main)/           # Core application routes, including server, channel, and conversation views.
│   │   └── (routes)/     # Contains main application pages.
│   │       ├── servers/[serverId]/ # Dynamic routes for individual servers.
│   │       │   ├── channels/[channelId]/ # Dynamic routes for specific channels within a server.
│   │       │   └── conversations/[memberId]/ # Dynamic routes for direct messages with a member.
│   ├── api/              # Backend API routes (Next.js API Routes) for various functionalities.
│   │   ├── channels/     # API for channel creation, updates, and deletion.
│   │   ├── direct-messages/ # API for direct message handling.
│   │   ├── livekit/      # API for LiveKit token generation and related operations.
│   │   ├── members/      # API for server member management (roles, kicking).
│   │   ├── messages/     # API for sending and fetching chat messages.
│   │   ├── servers/      # API for server creation, updates, invites, and leaving.
│   │   └── uploadthing/  # API endpoint for Uploadthing file uploads.
│   ├── setup/            # Initial setup page for new users or first-time server creation.
│   ├── globals.css       # Global CSS styles for the application.
│   ├── layout.tsx        # Root layout for the entire application.
│   └── page.tsx          # Root page of the application.
├── components/           # Reusable React components organized by feature or type.
│   ├── chat/             # Components specifically for the chat interface (header, input, messages).
│   ├── landing/          # Components for the public-facing landing page.
│   ├── modals/           # Collection of modal components for various user interactions (e.g., create server, invite, edit channel).
│   ├── navigation/       # Components for the main navigation sidebar and related actions.
│   ├── providers/        # React context providers (e.g., ModalProvider, QueryProvider, SocketProvider, ThemeProvider).
│   ├── server/           # Components related to displaying and interacting with server-specific elements (header, channels, members).
│   ├── ui/               # Shadcn UI components, customized or directly used.
│   └── *.tsx             # Other general-purpose components (e.g., action-tooltip, file-upload, mode-toggle).
├── hooks/                # Custom React hooks to encapsulate reusable logic and stateful behavior.
│   ├── use-chat-query.ts # Hook for fetching chat messages with infinite scrolling.
│   ├── use-chat-scroll.ts # Hook for managing chat scroll behavior.
│   ├── use-chat-socket.ts # Hook for handling Socket.io events related to chat.
│   ├── use-mobile.tsx    # Hook to detect mobile viewports.
│   ├── use-modal-store.ts # Zustand store for managing modal states.
│   └── use-origin.ts     # Hook to get the current origin URL.
├── lib/                  # Utility functions, database connection, and helper functions.
│   ├── conversation.ts   # Utility functions for direct message conversations.
│   ├── current-profile-pages.ts # Helper for getting current profile in pages router (for socket API).
│   ├── current-profile.ts # Helper for getting current profile in app router.
│   ├── db.ts             # Database connection and Prisma client initialization.
│   ├── initial-profile.ts # Function to create an initial user profile on first login.
│   ├── uploadthing.ts    # Uploadthing configuration and utilities.
│   └── utils.ts          # General utility functions (e.g., `cn` for Tailwind class merging).
├── pages/api/socket/     # Dedicated API routes for Socket.io event handling (Next.js Pages Router).
│   ├── direct-messages/  # Socket API for direct messages.
│   └── messages/         # Socket API for channel messages.
├── prisma/               # Prisma schema definition and database migration files.
│   ├── schema.prisma     # Defines the database schema (models, relations).
│   └── migrations/       # Stores database migration history.
├── public/               # Static assets served directly by Next.js (images, fonts, etc.).
├── styles/               # Contains global CSS files or specific stylesheets.
│   └── sidebar.css       # Custom styles for the navigation sidebar.
├── .eslintrc.json        # ESLint configuration for code linting.
├── .gitignore            # Specifies intentionally untracked files to ignore by Git.
├── components.json       # Configuration for Shadcn UI components.
├── eslint.config.mjs     # ESLint configuration.
├── middleware.ts         # Next.js middleware for request handling (e.g., authentication).
├── next.config.js        # Next.js configuration file.
├── next.config.ts        # Next.js configuration file (TypeScript).
├── package.json          # Project dependencies and scripts.
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS.
├── README.md             # This README file.
├── server.js             # Custom Node.js server for integrating Socket.io with Next.js.
├── tailwind.config.ts    # Tailwind CSS configuration.
├── tsconfig.json         # TypeScript configuration.
└── types.ts              # Global TypeScript type definitions.
```

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
