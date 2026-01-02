# Club360 UAE - Sports Club Management Platform

A comprehensive sports club management web application designed for the UAE market, featuring modern UI, bilingual support, and a complete suite of management tools.

## 🎯 Features

### Core Modules

- **Dashboard/Overview**
  - Today's insights (invoices, payment status)
  - Payment reports with status breakdown
  - Revenue graph visualization
  - Recent team events and posts feed
  - Welcome message with Club360 UAE branding

- **Payments & Registration System**
  - Invoice management dashboard
  - Payment status tracking (AED & EUR currency)
  - Subscription and installment options
  - Registration forms for members, tryouts, camps

- **Communication Hub**
  - Wall posts/announcements feed with media support
  - Team chat interface
  - Push notification system
  - Message read receipts
  - Segmented communication (club-wide, team-specific)

- **Scheduling & Calendar**
  - Integrated calendar view (club and team levels)
  - Event management (matches, practices, camps)
  - Attendance reporting with status indicators
  - Resource booking management
  - UAE timezone support (GST - Gulf Standard Time)

- **Training & Session Planning**
  - Drill/exercise library (coming soon)
  - Training session templates (coming soon)
  - Session planning tool (coming soon)

- **Video Platform**
  - Video upload and tagging system
  - Player highlight clips
  - Video library organization
  - Basic playback controls

- **Player Development**
  - Individual player profiles with stats
  - Goals tracking (in progress, done)
  - Development plans (IDPs)
  - Performance assessments
  - Physical strain monitoring

- **Statistics & Reporting**
  - Match statistics dashboard
  - Training activity tracking
  - Attendance analytics
  - Team performance metrics
  - Physical strain reports

## 🎨 Branding

- **Name**: Club360 UAE
- **Tagline**: "Complete Club Management Platform"
- **Color Scheme**:
  - Primary: Magenta/Pink (#D91E5C)
  - Secondary: Teal/Blue (#1B5E7E)
  - Accent: Gold (#FFD700) - for premium features
  - Neutral: Dark charcoal (#2D2D2D)

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Date Handling**: date-fns
- **i18n**: i18next, react-i18next

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   └── logo.svg          # Club360 UAE logo
├── components/           # Reusable components
│   ├── Layout.tsx        # Main layout with sidebar
│   ├── Logo.tsx          # Logo component
│   └── ...
├── pages/                # Page components
│   ├── Dashboard.tsx
│   ├── Payments.tsx
│   ├── Communication.tsx
│   ├── Scheduling.tsx
│   ├── Players.tsx
│   ├── Videos.tsx
│   └── Statistics.tsx
├── types/                # TypeScript type definitions
│   └── index.ts
├── data/                 # Mock data
│   └── mockData.ts
├── i18n/                 # Internationalization
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── ar.json
├── contexts/             # React contexts
│   └── CurrencyContext.tsx
├── utils/                # Utility functions
│   └── images.ts
├── App.tsx               # Main app component with routing
├── main.tsx              # Entry point
└── index.css             # Global styles with Tailwind
```

## 🌍 Internationalization

The application supports English and Arabic with RTL (Right-to-Left) layout support for Arabic. Users can switch languages using the language switcher in the navigation.

## 💱 Multi-Currency Support

The platform supports multiple currencies:
- **AED** (UAE Dirham) - Primary currency
- **EUR** (Euro) - Secondary currency

Users can switch currencies using the currency switcher, and all monetary values update accordingly.

## 📱 Responsive Design

The application is built with a mobile-first approach, ensuring optimal experience across all device sizes:
- Mobile phones
- Tablets
- Desktop computers

## 🇦🇪 UAE-Specific Features

- **Currency**: AED (UAE Dirham) with EUR support
- **Timezone**: Gulf Standard Time (GST / UTC+4)
- **Language**: English and Arabic (RTL support)
- **Sample Data**: Falcon Sports UAE (demo club)
- **Location**: Dubai Sports City

## 🔮 Future Enhancements

- Full calendar integration
- Training session planning with drag-and-drop
- Exercise library with visual diagrams
- Video upload and streaming
- Advanced analytics and reporting

## 📄 License

Copyright (c) 2026 Club360 UAE. All Rights Reserved.

---

**Club360 UAE** - Complete Club Management Platform
