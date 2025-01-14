# notipus.com

Notipus is a real-time customer intelligence platform that sends instant, contextual notifications to Slack about customer events from various services.

## Development

First, install dependencies:

```bash
npm install
```

To run the site locally:

```bash
# Start Tailwind CSS build in watch mode
npm run dev

# In another terminal, start the server:
docker-compose up
# or
python -m http.server 8080
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the master branch. The deployment process:

1. Builds the Tailwind CSS
2. Uploads the built files
3. Deploys to GitHub Pages

The deployment is handled by GitHub Actions, and you can view the status in the Actions tab.

## Structure

- `index.html` - Landing page
- `form.html` - Sign up form
- `css/` - Stylesheets
  - `input.css` - Source Tailwind CSS
  - `style.css` - Built CSS (generated)
- `img/` - Images and assets

## Form Integration

The sign-up form integrates with Google Forms for data collection. The form submission is handled by Google Apps Script.
