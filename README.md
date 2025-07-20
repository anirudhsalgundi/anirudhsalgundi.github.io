# Astrophysics Academic Portfolio Website

A professional and elegant dark-themed academic website for Anirudh Salgundi, designed to showcase academic experience, research projects, publications, and contact information.

## Features

- Dark astronomy theme with beautiful Southern Ring Nebula inspired design
- Animated text elements for enhanced user experience
- Separate pages for different sections (Home, CV, Projects, Publications, Contact)
- Mobile-responsive design that works on all devices
- Clean, modular code structure for easy updates
- Minimalist and professional aesthetic

## Project Structure

```
academic-website/
├── css/                    # CSS stylesheets
│   ├── main.css            # Main styles for all pages
│   ├── animations.css      # Animation styles
│   ├── home.css            # Home page specific styles
│   ├── cv.css              # CV page specific styles
│   ├── projects.css        # Projects page specific styles
│   ├── publications.css    # Publications page specific styles
│   └── contact.css         # Contact page specific styles
├── js/                     # JavaScript files
│   ├── main.js             # Main JavaScript functionality
│   ├── animations.js       # Animation effects
│   ├── publications.js     # Publications page filtering
│   └── contact.js          # Contact form handling
├── images/                 # Image assets
│   ├── icons/              # SVG icons for social links
│   └── projects/           # Project images
├── documents/              # Downloadable documents (CV, etc.)
├── index.html              # Home page
├── cv.html                 # CV/Resume page
├── projects.html           # Research projects page
├── publications.html       # Academic publications page
├── contact.html            # Contact page
└── README.md               # Project documentation
```

## How to Use

### Local Development

1. Download all the files to your computer
2. Open the folder in any code editor (like Visual Studio Code)
3. To view the website locally:
   - Double-click on the `index.html` file to open it in your browser
   - Alternatively, use a local development server if you have one

### Updating Content

#### Personal Information

To update your personal information:

1. Open `index.html` and modify:
   - Your name in the `<h1 class="animated-text">` tag
   - Your bio in the `<p class="bio">` tag
   - Social media links in the `.social-links` section

#### CV Information

1. Open `cv.html` and update the sections with your education, experience, skills, etc.
2. Add your actual CV PDF to the `documents` folder (name it `cv.pdf` or update the download link)

#### Projects

1. Open `projects.html` to update your research projects
2. For each project, modify:
   - Project title
   - Description
   - Details (duration, collaborators, tools)
   - Image (place new images in the `images/projects/` folder)

#### Publications

1. Open `publications.html` to update your publications
2. For each publication, modify:
   - Title
   - Authors
   - Journal information
   - Abstract
   - Links to DOI, arXiv, etc.

#### Contact Information

1. Open `contact.html` to update your contact information
2. Modify email address, academic affiliation, and social media links

### Customizing Design

#### Colors

To change the color scheme:

1. Open `css/main.css`
2. Find the `:root` section at the top
3. Modify the color variables (especially `--color-primary` for the main accent color)

#### Background

To change the background:

1. Replace `images/southern-ring-nebula.jpg` with your preferred image
2. Adjust the background settings in `css/home.css` if needed

#### Fonts

To change the fonts:

1. Update the Google Fonts link in the `<head>` section of each HTML file
2. Update the `--font-main` variable in `css/main.css`

## Deploying to GitHub Pages

1. Create a GitHub account if you don't have one
2. Create a new repository named `yourusername.github.io`
3. Upload all the website files to this repository
4. GitHub will automatically publish your website at `https://yourusername.github.io`

## Adding New Pages

To add a new page:

1. Copy the structure of an existing page (e.g., `projects.html`)
2. Update the content while keeping the header and footer the same
3. Add a link to the new page in the navigation menu of all HTML files
4. Create a new CSS file for page-specific styles if needed

## Technical Details

- Built with pure HTML, CSS, and JavaScript
- No frameworks or libraries required
- Responsive design using CSS Grid and Flexbox
- Optimized for all devices (desktop, tablet, mobile)
- Clean and maintainable code structure

## Credits

- Icons from Lucide (included as SVGs)
- Font: Anek Bangla from Google Fonts
- Southern Ring Nebula background image

---

Feel free to reach out if you need help customizing or updating the website!