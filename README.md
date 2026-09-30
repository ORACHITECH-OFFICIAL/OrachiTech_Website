# Welcome to your project

## Project info


## How can I edit this code?


**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
# ORACHITECH website and CMS

The website includes a Firebase-backed content management system at `/admin`.

## CMS setup

1. In the Firebase console for `orachi-tech-d5e5a`, enable **Email/Password** under Authentication → Sign-in method.
2. Add the first editor under Authentication → Users. There is intentionally no public sign-up screen.
3. Enable Firestore Database and Firebase Storage.
4. Deploy the included security configuration with `firebase deploy --only firestore:rules,storage`.
5. Run `npm run dev`, open `/admin`, and sign in with the editor account.

Editors can manage blog posts, case studies, services, team members, reusable page content, global contact settings, and uploaded images. Entries remain private while in draft and appear on the public site when published. Existing hard-coded website content remains as a fallback until its CMS collection has published entries.

## Development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.
