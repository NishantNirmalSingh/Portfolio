# Deployment Guide

## Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying Next.js applications as it's built by the creators of Next.js.

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/NishantNirmalSingh/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Your site is live!**
   - Production URL: `https://your-project.vercel.app`
   - Custom domain can be configured in project settings

### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

If you add environment variables later:
1. Go to project settings in Vercel
2. Add environment variables under "Environment Variables"
3. Redeploy the project

## Alternative Platforms

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Custom Server

```bash
# Build for production
npm run build

# Start production server
npm run start
```

Server will run on port 3000 by default.

## Post-Deployment Checklist

- ✅ Verify all sections load correctly
- ✅ Test responsive design on mobile
- ✅ Check all links (GitHub, LinkedIn, Email)
- ✅ Test contact form functionality
- ✅ Verify animations work smoothly
- ✅ Run Lighthouse audit for performance
- ✅ Test SEO with Google Search Console
- ✅ Add custom domain (optional)
- ✅ Set up analytics (optional)

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for propagation (can take up to 48 hours)

## Performance Optimization

The portfolio is already optimized with:
- Static generation
- Image optimization (when images added)
- CSS/JS minification
- Tree shaking
- Code splitting

## Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics
- Error tracking (Sentry)

## Updates

To update your portfolio:
```bash
# Make changes locally
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys on push to main branch
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Verify all dependencies installed
- Check for TypeScript errors

### Slow Performance
- Enable Vercel Analytics
- Check Lighthouse scores
- Optimize images if added

### Links Not Working
- Verify URLs in component files
- Check GitHub profile is public
- Ensure resume PDF is in public folder

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

Need help? Contact: nishant4245@gmail.com
