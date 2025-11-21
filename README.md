# LuxePort - Premium Client Portfolio

![LuxePort Banner](https://placehold.co/1200x400/0a192f/d4af37?text=LuxePort+Premium+Portfolio)

**LuxePort** is a high-end client management application designed for wealth managers and luxury service providers. Built with **Angular 18**, it features a sophisticated glassmorphism UI, signal-based state management, and a seamless user experience.

## 🌟 Features

- **Premium Design System**: A bespoke "Deep Navy & Gold" aesthetic with glassmorphism effects and smooth transitions.
- **Dashboard Overview**: A visual table view of high-net-worth clients with status indicators and tier badges.
- **Client Management (CRUD)**:
  - **Onboard**: Add new clients with a validated, premium form interface.
  - **Edit**: Update client profiles and net worth details.
  - **Remove**: Securely delete client records from the portfolio.
- **Reactive State**: Powered by **Angular Signals** for high-performance data handling.
- **Responsive**: Fully responsive layout that looks stunning on all devices.

## 🛠️ Tech Stack

- **Framework**: Angular 18 (Standalone Components)
- **Language**: TypeScript
- **Styling**: CSS3 (Variables, Flexbox, Grid, Glassmorphism)
- **State Management**: Angular Signals
- **Routing**: Angular Router
- **Fonts**: Playfair Display (Headings) & Inter (Body)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/luxe-port.git
    cd luxe-port
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm start
    ```
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📂 Project Structure

```
luxe-port/
├── src/
│   ├── app/
│   │   ├── crud/           # Add/Edit Client Component
│   │   ├── navbar/         # Navigation Component
│   │   ├── results-table/  # Dashboard Component
│   │   ├── app.routes.ts   # Routing Configuration
│   │   └── client.service.ts # Signal-based Data Service
│   ├── index.html          # Entry point with fonts
│   ├── main.ts             # App bootstrapper
│   └── styles.css          # Global premium styles
├── angular.json            # Angular workspace config
└── package.json            # Dependencies and scripts
```

## 🎨 Design Philosophy

LuxePort moves away from generic "Bootstrap" looks. It embraces a **luxury aesthetic**:
- **Colors**: Deep Navy (`#0a192f`) represents trust and stability, while Metallic Gold (`#d4af37`) adds a touch of exclusivity.
- **Typography**: *Playfair Display* brings a classic, editorial feel to headings, paired with *Inter* for clean, readable data.
- **Interaction**: Subtle hover effects and glass-like panels create a sense of depth and modernity.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
