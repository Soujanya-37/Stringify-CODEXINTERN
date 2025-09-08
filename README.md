

# 🎲 Stringify - Secure Random String & Password Generator
A modern, feature-rich web application for generating secure random strings and complex passwords, built with React and Tailwind CSS. This project was developed as a key deliverable for the codeXintern Front-End Development internship program.

## ✨ Features
### 🚀 Core Generation
Customizable Length: Tailor the output by specifying the exact string length (from 4 to 50 characters).

Character Set Control: Fine-grained control over the character pool, with options to include/exclude uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special symbols (!@#$).

Auto-Generation Mode: An optional mode to automatically generate a new string every few seconds.

### 🎨 Modern UI/UX
Responsive Design: A seamless user experience across all devices, from mobile phones to desktops.

Intuitive Interface: A clean, user-friendly design with clear visual hierarchy and interactive elements.

Smooth Animations: Subtle hover effects and transitions for a polished feel.

Glassmorphism Effect: A modern "glass effect" UI for the main panels.

### 🔧 Advanced Features
One-Click Copy: Instantly copy the generated string to the clipboard.

Generation History: Keeps a running list of the last 10 strings generated, allowing you to review and re-copy previous results.

Visual Feedback: Clear loading states and "Copied!" notifications provide non-intrusive user feedback.

Keyboard Shortcuts: Generate a new string with Enter or Space, and copy the current string with Ctrl+C.

### 🛠️ Technologies Used
React.js: The core of the application, used for building the dynamic and interactive user interface.

React Hooks (useState, useCallback, useEffect): Employed exclusively for state management, performance optimization, and handling side effects.

Tailwind CSS: A utility-first CSS framework used for all styling, enabling a rapid and consistent design process.

JavaScript (ES6+): Utilized for all application logic, including the string generation algorithm and event handling.

Vite: The development environment and build tool, providing a fast and efficient developer experience.

### 🚀 Getting Started
Prerequisites
Node.js (v18.x or higher)

npm / yarn / pnpm

A modern web browser (Chrome, Firefox, Safari, Edge)

Installation & Local Development
Clone the repository:

git clone [https://github.com/your-username/your-stringify-repo.git](https://github.com/your-username/your-stringify-repo.git)

Navigate to the project directory:

cd your-stringify-repo

Install the necessary dependencies:

npm install

Start the development server:

npm run dev

The application will now be running on http://localhost:5173.

### 📖 How to Use
Adjust Length: Use the slider to set your desired string length.

Select Character Types: Use the checkboxes to include or exclude uppercase letters, lowercase letters, numbers, or symbols.

Generate: Click the "Generate New String" button or press Enter/Space.

Copy: Click the "Copy" button next to the generated string to copy it to your clipboard.

Review History: Recently generated strings appear in the "Recent History" panel. You can copy any of them by clicking the copy icon next to the entry.

### 🎯 Core Concepts Implemented
This project was a practical exercise in mastering fundamental React concepts.

State Management with useState: All dynamic pieces of the application—such as the generated string, length, character set toggles, and UI state (like loading or copied status)—are managed cleanly using the useState hook.

Performance Optimization with useCallback: The primary string generation and copy-to-clipboard functions are wrapped in useCallback. This ensures that these functions are not needlessly recreated on every component re-render, optimizing performance, especially for features like keyboard event listeners.

Side Effect Handling with useEffect: The useEffect hook is used for several key side effects:

Initial Generation: To generate the first random string as soon as the application loads.

Event Listeners: To safely add and clean up global keyboard event listeners for an improved user experience.

Auto-Generation: To manage the setInterval for the auto-generate feature, ensuring it starts and stops correctly when the option is toggled.

### 📱 Browser Support
✅ Chrome

✅ Firefox

✅ Safari

✅ Edge

### 🐛 Troubleshooting
Application does not load: Ensure you have run npm install and that the development server (npm run dev) is active.

Copy button doesn't work: The Clipboard API requires a secure context (HTTPS or localhost). If you are opening the index.html file directly, it may not work. Please use the development server.

### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

### 🤝 Contributing
Contributions are welcome! Please feel free to fork the repository and open a pull request.

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

### 🙏 Acknowledgments
This project was developed as a requirement for the codeXintern internship program. I am grateful for the excellent learning opportunity and the well-structured curriculum that guided the development of this application.

📞 Support
If you encounter any issues or have questions, please create an issue on this repository's GitHub page.

Built with ❤️ by Soujanya Shanbhag for the codeXintern Front-End Development Program.
