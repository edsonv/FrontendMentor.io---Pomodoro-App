# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshot

![](./Tablet%20-%20Color%201%20-%20Sans.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/edsonv/FrontendMentor.io---Pomodoro-App)
- Live Site URL: [Vercel Deployment](https://frontend-mentor-io-pomodoro-app.vercel.app/)

## My process

### Built with

- **React 19** - For component-based architecture
- **TypeScript** - For type safety and better developer experience
- **Vite** - For lightning-fast development and building
- **Framer Motion** - For smooth modal animations and transitions
- **Lucide React** - For clean, consistent iconography
- **CSS Custom Properties** - For the dynamic theme system (fonts and colors)
- **Responsive Design** - Custom-tailored layouts for Tablet (768px) and Mobile (375px)

### What I learned

One of the key technical challenges in this project was implementing the circular progress ring using SVG. Calculating the `stroke-dashoffset` based on the remaining time required a clear understanding of SVG geometry:

```tsx
const radius = 160;
const circumference = 2 * Math.PI * radius;
const dashOffset = circumference * (1 - progress / 100);

// Applied in the SVG:
<circle
  className="timer-progress"
  cx="170"
  cy="170"
  r={radius}
  strokeDasharray={circumference}
  strokeDashoffset={dashOffset}
  strokeLinecap="round"
/>
```

Additionally, modularizing the application by extracting reusable components like `NumberInput` and `TimerCircle` significantly improved the codebase's readability and maintainability.

### AI Collaboration

This project was built in collaboration with **Antigravity**, a coding assistant by Google DeepMind. Antigravity assisted with:

- **Architectural Design**: Planning the component structure and refactoring a monolithic setup into a clean, modular folder hierarchy.
- **Responsive Refinement**: Fine-tuning CSS media queries to match pixel-perfect design specifications for tablet and mobile screens.
- **Problem Solving**: Identifying and fixing CSS compatibility issues (like the standard `appearance` property) and ensuring state updates followed React best practices.
- **Documentation**: Generating this README to professionally showcase the project's features and technical implementation.

## Author

- Website - [EdsonV](https://github.com/edsonv)
- Frontend Mentor - [@edsonv](https://www.frontendmentor.io/profile/edsonv)
- Twitter - [@edsonv](https://www.twitter.com/edsonv)
