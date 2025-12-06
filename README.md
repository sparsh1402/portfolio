# 🚀 Developer Profile - React Portfolio

A beautiful, modern portfolio website built with React + Vite. Perfect for learning React!

## 📚 React Concepts Covered

This project teaches you the following React concepts (check the code comments for explanations):

1. **Components** - Reusable UI building blocks
2. **JSX** - HTML-like syntax in JavaScript
3. **Props** - Passing data between components
4. **useState Hook** - Managing component state
5. **useEffect Hook** - Side effects (data fetching, event listeners)
6. **Conditional Rendering** - Showing/hiding content
7. **Lists & Keys** - Rendering arrays with .map()
8. **Form Handling** - Controlled inputs and form submission
9. **Event Handling** - onClick, onChange, onSubmit
10. **CSS Modules** - Component-scoped styling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx    # Navigation with scroll effects
│   ├── Hero.jsx      # Landing section with typing animation
│   ├── About.jsx     # About me section
│   ├── Skills.jsx    # Skills with progress bars
│   ├── Projects.jsx  # Project showcase with filters
│   └── Contact.jsx   # Contact form with validation
├── App.jsx           # Main app component
├── main.jsx          # React entry point
├── index.css         # Global styles & CSS variables
└── App.css           # App-specific styles
```

## 🎨 Customization

### Update Your Info

1. **Hero.jsx** - Update name, roles, and social links
2. **About.jsx** - Update bio and experience
3. **Skills.jsx** - Update your skill categories and levels
4. **Projects.jsx** - Add your real projects
5. **Contact.jsx** - Update contact information

### Change Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-accent-primary: #ff6b35;  /* Change primary accent */
  --color-accent-secondary: #f7931e; /* Change secondary accent */
  /* ... more variables */
}
```

## 🎓 Learning Tips

1. Read the comments in each file - they explain React concepts!
2. Try modifying props and see what happens
3. Add console.log() in useEffect to understand when it runs
4. Create a new component and import it into App.jsx
5. Try adding a new section to the portfolio

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **Google Fonts** - Typography (Outfit & Fira Code)

## 🚀 Deployment to GitHub Pages

### Step-by-Step Guide:

1. **Create a GitHub repository:**
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio` (or any name you like)
   - Keep it public
   - Don't initialize with README

2. **Update the base URL in `vite.config.js`:**
   ```js
   base: '/your-repo-name/',  // Change to match your repo name
   ```

3. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/sparsh1402/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"
   - The workflow will automatically deploy your site!

5. **Your site will be live at:**
   ```
   https://sparsh1402.github.io/portfolio/
   ```

### Manual Deployment (Alternative):

```bash
npm run build
# Upload the 'dist' folder to Netlify, Vercel, or any static hosting
```

## 📧 Setting Up Contact Form

The contact form uses **Web3Forms** (free service):

1. Go to [web3forms.com](https://web3forms.com/)
2. Enter your email: `sparsh1246@gmail.com`
3. Click "Create Access Key"
4. Check your email for the access key
5. Open `src/components/Contact.jsx`
6. Replace `YOUR_ACCESS_KEY_HERE` with your actual key

Now your contact form will send messages directly to your email! 🎉

---

Made with ❤️ while learning React!

