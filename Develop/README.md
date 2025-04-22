# Candidate Search Application

A React and TypeScript SPA that fetches GitHub user profiles, lets you save potential candidates, and review or remove them later. The app uses the GitHub REST API with a Personal Access Token to avoid rate limits, persists data in localStorage, and is deployed on Render.



## Live Demo

Access the live application:

https://<YOUR_RENDER_URL>



## Features

Fetches random GitHub users via GitHub API

Displays user details: name, username, avatar, location, email, company, and profile link

➕ Accept to save a candidate in browser localStorage

➖ Reject to skip to the next candidate

Persistent storage of accepted candidates across page reloads

View and remove saved candidates on a dedicated page




## Installation

1. Clone the repository

git clone https://github.com/<YOUR_GITHUB_USERNAME>/candidate-search-app.git

2. Navigate into the project directory

cd candidate-search-app

3. Install dependencies

npm install



## Configuration

1. Rename the environment folder to env

mv environment env

2. Create a .env file inside env/

touch env/.env

3. Add your GitHub Personal Access Token:

VITE_GITHUB_TOKEN=ghp_<YOUR_TOKEN_HERE>



## Usage

Start the development server:

npm run dev

Open your browser at http://localhost:5173



## Environment Variables

VITE_GITHUB_TOKEN={GitHub Personal Access Token(prefixed ghp_…)}



## Tech Stack

- React (with Hooks and react-router-dom)

- TypeScript for static typing

- Vite as the build tool and dev server

- GitHub REST API for fetching user data

- Render for deployment



## License

This project is licensed under the MIT License.