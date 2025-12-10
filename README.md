# Physical AI & Humanoid Robotics Textbook

This is a Next.js 15 application built with the App Router, TypeScript, Tailwind CSS, and Framer Motion. The application provides an interactive textbook for humanoid robotics education with a RAG-powered chatbot, personalized learning paths, and multilingual support (English/Urdu).

## Features

- **Interactive Textbook**: Comprehensive content on humanoid robotics covering ROS 2, simulation, NVIDIA Isaac, and Vision-Language-Action systems
- **RAG Chatbot**: AI-powered assistant that can answer questions based on textbook content (UI-only implementation)
- **Personalized Learning**: Content adapted to user's software and hardware skill levels
- **Multilingual Support**: One-click switching between English and Urdu
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Progress Tracking**: Mocked user progress tracking system

## Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- next-intl (for internationalization)
- Shadcn/UI components
- Lucide React (icons)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── chapters/          # Chapter reader with [slug] dynamic route
│   ├── chat/              # Full-page chat interface
│   ├── profile/           # User profile
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/                # Shadcn/UI base components
│   └── ...                # Custom components
├── lib/                   # Utilities and data
│   ├── data/              # Mocked chapter data
│   └── utils.ts           # Utility functions
├── locales/               # Internationalization files
├── public/                # Static assets
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend Integration Points

This frontend is designed to work with a backend API. The following API endpoints would need to be implemented for full functionality:

### Authentication API
- `POST /api/auth/register` - Register a new user with skill levels
- `POST /api/auth/login` - Authenticate user and return session token
- `GET /api/auth/profile` - Get authenticated user profile

### Content API
- `GET /api/content/chapters` - Get list of all chapters
- `GET /api/content/chapters/{chapterId}` - Get specific chapter content
- `GET /api/content/chapters/{chapterId}/translations/{language}` - Get translated chapter content

### Learning Progress API
- `POST /api/progress/{chapterId}` - Update user's progress for a chapter
- `GET /api/progress` - Get user's overall progress

### Chatbot API
- `POST /api/chat/new` - Start a new chat session
- `POST /api/chat/{sessionId}/query` - Send a query to the RAG chatbot
- `GET /api/chat/{sessionId}/history` - Get chat session history

## Internationalization

The application supports English and Urdu. Translation files are located in the `locales/` directory. The language toggle component allows switching between languages.

## TODO Comments

Throughout the codebase, you'll find `// TODO:` comments indicating where backend integration would be needed:

- API calls for authentication
- Backend hooks for user data
- RAG chatbot integration
- Real progress tracking
- Backend data fetching

## Deployment

This application is ready for deployment to platforms like Vercel or Netlify. For GitHub Pages deployment, additional configuration would be needed since Next.js apps are server-rendered by default.

To build for production:

```bash
npm run build
```

## Notes

- This is a frontend-only implementation with mocked data
- The RAG chatbot UI is implemented but not connected to any backend AI service
- All user data and progress are mocked for demonstration purposes
- The application follows accessibility best practices
- Responsive design ensures good experience on all devices

## License

This project is licensed under the MIT License.