# Quick Start Guide 🚀

Get your portfolio running in 5 minutes!

## Prerequisites Check

```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 9.x or higher
```

Don't have Node.js? Download from [nodejs.org](https://nodejs.org)

## Installation Steps

### 1. Download & Extract
Download the portfolio folder to your computer

### 2. Open Terminal
```bash
cd path/to/portfolio
```

### 3. Install Dependencies
```bash
npm install
```

This will take 2-3 minutes. Grab a coffee! ☕

### 4. Start Development Server
```bash
npm run dev
```

### 5. View Your Portfolio
Open browser and go to: **http://localhost:3000**

## 🎉 Success!

Your portfolio is now running locally!

## Next Steps

### Customize Content

1. **Personal Info**: Edit `components/Hero.tsx` and `components/About.tsx`
2. **Projects**: Update `components/Projects.tsx` with your projects
3. **Skills**: Modify `components/Skills.tsx` with your skills
4. **Experience**: Update `components/Experience.tsx` with your experience
5. **Contact**: Update email/links in `components/Contact.tsx`

### Resume Already Included

✅ The resume is already in place! `public/resume.pdf` contains Nishant's actual resume and will download automatically when users click the button.

To use your own resume, simply replace `public/resume.pdf` with your file.

### Deploy to Production

Follow the `DEPLOYMENT.md` guide for detailed instructions.

**Quick deploy:**
1. Push code to GitHub
2. Import to Vercel
3. Click Deploy
4. Done! Your portfolio is live 🌐

## Troubleshooting

### "Command not found: npm"
Install Node.js from [nodejs.org](https://nodejs.org)

### "Port 3000 already in use"
```bash
# Try a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Need Help?

- 📧 Email: nishant4245@gmail.com
- 📖 Full README: See `README.md`
- 🚀 Deployment: See `DEPLOYMENT.md`

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

## File Structure Overview

```
portfolio/
├── app/              # Next.js app directory
├── components/       # React components (customize these!)
├── lib/             # Utilities and constants
├── public/          # Static files (add resume here)
├── package.json     # Dependencies
└── README.md        # Full documentation
```

## Tips

1. **Save frequently** - Changes auto-reload in browser
2. **Check browser console** for errors
3. **Test responsive** - Use browser dev tools
4. **Commit often** - Use git for version control

## Ready to Deploy?

Once you're happy with your portfolio:
1. Read `DEPLOYMENT.md`
2. Deploy to Vercel (free!)
3. Share your new portfolio 🎊

---

**You got this! 💪**

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
