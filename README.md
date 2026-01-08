# 🚀 Task Master: Gamified Productivity App

> **Turn your daily to-do list into a game.**  
> Track streaks, earn badges, focus with timers, and visualize your progress with professional analytics.

![Task Master Banner](https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2664&auto=format&fit=crop)
_(Replace with actual app screenshot)_

## ✨ Features

### 🎮 Gamification

- **Streaks**: Keep your momentum going by completing tasks every day.
- **Badges**: Unlock achievements like _Early Bird_, _Weekend Warrior_, and _Streak Master_.
- **Celebrations**: Enjoy satisfying confetti explosions upon task completion.

### ✅ Advanced Task Management

- **Recurring Tasks**: Habits made easy. Set tasks to repeat Daily, Weekly, or Monthly.
- **Organization**: Categorize by Work, Personal, Health, etc., and tag by Priority (High/Med/Low).
- **Proof of Work**: Require photo or text proof to mark specific tasks as complete.

### 🍅 Focus Mode (Pomodoro)

- **Built-in Timer**: Launch a distraction-free timer for any task.
- **Focus Tracking**: Automatically logs your total focus minutes.
- **Smart Verification**: Prompts for task completion immediately after the timer ends.

### 📊 Professional Analytics

- **Productivity Pulse**: Interactive Area Chart showing your activity trend over the last 7 days.
- **Category Breakdown**: Beautiful Donut Chart visualizing your work-life balance.
- **Priority Insights**: Rounded Bar Chart displaying task urgency distribution.
- **Metrics**: Track lifetime tasks, pending counts, and total focus time.

---

## 🛠️ Tech Stack

### Client

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

### Server

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose)
- **Auth**: JWT (JSON Web Tokens)
- **File Uploads**: Multer

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas URI)

### 1-Click Run (if available) or Manual Setup:

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-master.git
cd task-master
```

#### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm run dev
```

#### 3. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Visit `http://localhost:5173` to view the app!

---

## 📸 Screenshots

|              Dashboard              |            Analytics            |
| :---------------------------------: | :-----------------------------: |
| _(Place Dashboard Screenshot Here)_ | _(Place Stats Screenshot Here)_ |

|           Focus Mode            |          Proof Upload           |
| :-----------------------------: | :-----------------------------: |
| _(Place Timer Screenshot Here)_ | _(Place Modal Screenshot Here)_ |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
