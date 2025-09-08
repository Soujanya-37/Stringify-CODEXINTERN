Stringify - Secure Random String & Password Generator
Stringify is a modern, feature-rich web application for generating secure random strings and complex passwords. Developed as a key project for the codeXintern Front-End Development internship, it showcases a robust implementation of core React principles, including hooks for state management and side effects, all wrapped in a sleek, fully responsive user interface built with Tailwind CSS.

Key Features
Customizable Generation: Tailor the output by specifying the exact string length (from 4 to 50 characters).

Character Set Control: Fine-grained control over the character pool, with options to include or exclude:

Uppercase Letters (A-Z)

Lowercase Letters (a-z)

Numbers (0-9)

Special Symbols (!@#$%^&*)

One-Click Copy: Instantly copy the generated string to the clipboard with a single click.

Generation History: Keeps a running list of the last 10 strings generated, allowing you to review and re-copy previous results.

Auto-Generation Mode: An optional mode to automatically generate a new string every few seconds.

Keyboard Shortcuts: Generate a new string with Enter or Space, and copy the current string with Ctrl+C.

Responsive Design: A seamless user experience across all devices, from mobile phones to desktops.

Technology Stack
This project was built entirely with modern front-end technologies, focusing on a minimal footprint and high performance.

React.js: The core of the application, used for building the dynamic and interactive user interface.

React Hooks (useState, useCallback, useEffect): Employed exclusively for state management, performance optimization, and handling side effects.

Tailwind CSS: A utility-first CSS framework used for all styling, enabling a rapid and consistent design process.

JavaScript (ES6+): Utilized for all application logic, including the string generation algorithm and event handling.

Vite: The development environment and build tool, providing a fast and efficient developer experience.

Core Concepts Implemented
This project was a practical exercise in mastering fundamental React concepts.

State Management with useState: All dynamic pieces of the application—such as the generated string, length, character set toggles, and UI state (like loading or copied status)—are managed cleanly using the useState hook.

Performance Optimization with useCallback: The primary string generation and copy-to-clipboard functions are wrapped in useCallback. This ensures that these functions are not needlessly recreated on every component re-render, optimizing performance, especially for features like keyboard event listeners.

Side Effect Handling with useEffect: The useEffect hook is used for several key side effects:

Initial Generation: To generate the first random string as soon as the application loads.

Event Listeners: To safely add and clean up global keyboard event listeners for an improved user experience.

Auto-Generation: To manage the setInterval for the auto-generate feature, ensuring it starts and stops correctly when the option is toggled.

Local Setup and Installation
To run this project on your local machine, follow these steps:

Clone the repository:

git clone [https://github.com/your-username/your-stringify-repo.git](https://github.com/your-username/your-stringify-repo.git)

Navigate to the project directory:

cd your-stringify-repo

Install the necessary dependencies:

npm install

Start the development server:

npm run dev

The application will now be running on http://localhost:5173.

Acknowledgments
This project was developed as a requirement for the codeXintern internship program. I am grateful for the excellent learning opportunity and the well-structured curriculum that guided the development of this application.

Developed by Soujanya Shanbhag
