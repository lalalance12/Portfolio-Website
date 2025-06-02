# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing design
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Beautiful animations using Framer Motion
- **TypeScript**: Full TypeScript support for better development experience
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for fast loading and great user experience

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   └── navigation.tsx
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Pages

- **Home**: Hero section, featured projects, and about preview
- **About**: Personal information, skills, experience timeline, and education
- **Projects**: Portfolio showcase with filtering and detailed project cards
- **Experience**: Professional experience, education, and certifications
- **Contact**: Contact form and social media links

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## ⚙️ Customization

### Personal Information
Update the following files with your personal information:
- `src/app/layout.tsx` - Meta tags and site title
- `src/app/page.tsx` - Hero section content
- `src/app/about/page.tsx` - Personal information and skills
- `src/app/experience/page.tsx` - Work experience and education
- `src/app/projects/page.tsx` - Your projects and portfolio
- `src/app/contact/page.tsx` - Contact information and social links

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for custom colors and themes
- Edit component styles in their respective files

### Fonts
The project uses three Google Fonts:
- **Inter** - Primary sans-serif font
- **Crimson Text** - Serif font for headings
- **JetBrains Mono** - Monospace font for code

You can change these in `src/app/layout.tsx`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Theme Customization

The website supports both light and dark themes. Colors are defined in CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other variables */
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
The website can be deployed to any platform that supports Node.js or static sites.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

If you have any questions or feedback, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS** 