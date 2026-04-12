# My Professional Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI** - Clean and professional interface
- **Interactive Components** - Smooth animations and transitions
- **Easy to Customize** - Simple data structure for quick updates
- **Performance Optimized** - Fast loading and smooth scrolling
- **SEO Friendly** - Structured content for better search visibility

## 📁 Project Structure

```
my-portfolio/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── resume.pdf
│   └── images/
│       ├── profile/
│       ├── projects/
│       └── certifications/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── portfolioData.js
│   │
│   ├── App.jsx
│   └── index.js
│
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or download this project**

2. **Navigate to the project directory**
   ```bash
   cd my-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## ✏️ Customization Guide

### 1. Update Your Information

Edit `src/data/portfolioData.js` with your details:

```javascript
const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Professional Title",
    email: "your.email@example.com",
    // ... more fields
  },
  // ... other sections
};
```

### 2. Add Your Images

Place your images in the `public/images/` directory:
- `public/images/profile/headshot.jpg` - Your profile photo
- `public/images/projects/` - Project screenshots
- `public/images/certifications/` - Certification logos

### 3. Update Your Resume

Replace `public/resume.pdf` with your actual resume file.

### 4. Customize Colors (Optional)

The portfolio uses Tailwind CSS. To change colors, update the color classes in the component files:
- Primary color: `blue-600` → Change to your preferred color
- Accent colors: Various gradient combinations

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## 🚀 Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will auto-detect settings
4. Deploy!

### Deploy to GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/my-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 Sections Included

- **Hero** - Introduction with profile photo and contact buttons
- **About** - Professional summary and highlights
- **Experience** - Work history with achievements
- **Skills** - Technical and soft skills with progress bars
- **Projects** - Portfolio pieces with images and links
- **Education** - Academic background
- **Certifications** - Professional credentials
- **Contact** - Contact form and information
- **Footer** - Additional links and copyright

## 🎨 Customization Tips

1. **Change Navigation**: Edit the `sections` array in `App.jsx`
2. **Add/Remove Sections**: Import/remove components in `App.jsx`
3. **Modify Layouts**: Each component is self-contained in `src/components/`
4. **Update Icons**: Uses lucide-react - browse icons at [lucide.dev](https://lucide.dev)

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths in `portfolioData.js`
- Ensure images are in the `public/images/` directory
- Use relative paths starting with `/images/`

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

**Styling issues?**
- Tailwind uses JIT mode - restart dev server after changes
- Check for typos in Tailwind class names

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Support

If you have questions or need help, feel free to reach out!

---

Made with ❤️ using React and Tailwind CSS