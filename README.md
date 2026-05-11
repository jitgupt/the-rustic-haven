# The Rustic Haven

A modern web application for managing cabin bookings, guest information, and property operations. Built with React and Vite, this system provides a comprehensive dashboard for cabin owners and staff to handle reservations, check-ins, check-outs, and property settings.

## Features

- **Cabin Management**: Create, edit, and manage cabin listings with details, pricing, and availability
- **Booking System**: Complete booking lifecycle management with reservation tracking
- **Guest Management**: Maintain comprehensive guest profiles and booking history
- **Check-In/Check-Out**: Streamlined check-in and check-out workflows
- **Dashboard**: Real-time overview of bookings, occupancy, and activity
- **User Authentication**: Secure login and signup with user profile management
- **Dark Mode**: Theme toggle for comfortable viewing in any lighting condition
- **Responsive Design**: Fully responsive UI for desktop and mobile devices
- **Settings Management**: Configure application preferences and user settings

## Tech Stack

- **Frontend**: React 18+ with Vite
- **Backend**: Supabase (for authentication, database, and API)
- **Styling**: Styled Components with global styles
- **Build Tool**: Vite with HMR (Hot Module Replacement)
- **Deployment**: Netlify

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Supabase account and API credentials

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-rustic-haven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── features/           # Feature modules
│   ├── authentication/ # User login, signup, and auth management
│   ├── bookings/       # Booking-related features
│   ├── cabins/         # Cabin management
│   ├── check-in-out/   # Check-in and check-out operations
│   ├── dashboard/      # Dashboard analytics
│   └── settings/       # Application settings
├── pages/              # Page components for routing
├── ui/                 # Reusable UI components
├── hooks/              # Custom React hooks
├── services/           # API service calls
├── context/            # React context (e.g., DarkModeContext)
├── data/               # Data files and utilities
├── styles/             # Global styles
└── utils/              # Helper functions and constants
```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Key Modules

### Authentication
Secure user authentication with login, signup, password reset, and profile management.

### Bookings
Complete booking management system with real-time status tracking and operations.

### Cabins
Full cabin inventory management with pricing, capacity, and amenities.

### Dashboard
Real-time analytics and activity overview for property operations.

## Deployment

The project is configured for deployment on Netlify. See `netlify.toml` for configuration details.

## License

Please see the LICENSE file for details.
