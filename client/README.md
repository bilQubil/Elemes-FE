# Elemes FE Client

A modern web application built with Next.js 15.3.1 and React 19, featuring a responsive and interactive user interface.

## Tech Stack

-   **Framework:** Next.js 15.3.1
-   **UI Library:** React 19
-   **Styling:** TailwindCSS 4
-   **Icons:** Ionicons and React Icons
-   **Language:** TypeScript
-   **Development Tools:**
    -   TurboPack for fast development builds
    -   ESLint for code quality
    -   TypeScript for type safety

## Getting Started

1. **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

2. **Run Development Server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The development server will start with TurboPack enabled for faster builds.
    Open [http://localhost:3000](http://localhost:3000) to view the application.

3. **Build for Production**

    ```bash
    npm run build
    # or
    yarn build
    ```

4. **Start Production Server**
    ```bash
    npm run start
    # or
    yarn start
    ```

## Project Structure

```
client/
├── src/
│   ├── app/         # Next.js app directory
│   └── components/  # Reusable React components
├── public/          # Static assets
└── ...config files
```

## Scripts

-   `dev` - Start development server with TurboPack
-   `build` - Create production build
-   `start` - Start production server
-   `lint` - Run ESLint for code quality checks
