# Muhammad Aqib's Personal Portfolio

[![Vercel Deployment](https://vercel.com/button)](https://your-live-url.vercel.app/)

A dynamic and fully responsive personal portfolio built with React, Vite, and Tailwind CSS. This project showcases my skills in front-end development through a clean UI, interactive animations, a dual-theme system, and a functional contact form.

### [Live Demo](https://your-live-url.vercel.app/)

![Project Screenshot](./public/screenshot.png)
*(**Note:** Please replace `screenshot.png` with an actual screenshot of your project in the `public` folder for this to display correctly.)*

---

## ✨ Key Features

-   **Fully Responsive Design:** Adapts seamlessly to all screen sizes, from mobile phones to desktops.
-   **Dual Theme System:** A beautiful and functional Light/Dark mode toggle that persists in `localStorage`.
-   **Interactive Animated Backgrounds:**
    -   **Dark Mode:** A stunning, multi-colored starfield with falling "starburst" meteors.
    -   **Light Mode:** A clean, modern background with floating geometric particles.
-   **Smooth Animations & Transitions:** Built with Tailwind CSS and custom CSS for a fluid user experience.
-   **Functional Contact Form:** Integrated with **EmailJS** to send messages directly to my inbox and send an auto-reply to the user.
-   **Reusable Components:** Built with a modular and scalable component structure in React.
-   **Optimized & Fast:** Built with **Vite** for a blazing-fast development experience and optimized production builds.

---

## 🛠️ Tech Stack

-   **Framework:** React.js
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS
-   **Icons:** Lucide React
-   **Email Service:** EmailJS
-   **Deployment:** Vercel

---

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YourUsername/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of the project and add your EmailJS credentials. **This file is crucial for the contact form to work.**

    Create a file named `.env` and add the following content:
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_notification_template_id
    VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *(**Important:** The `.env` file is included in `.gitignore` and should never be committed to GitHub.)*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 🚀 Deployment

This project is deployed on **Vercel**.

The deployment process is automated. Every push to the `main` branch on GitHub will trigger a new deployment. The environment variables from the `.env` file were added directly to the Vercel project settings for the production build.