# imrann

## Setup
# Clone the repository
git clone <https://github.com/Imranmeh/imrann>

# Navigate into the project folder
cd imrann-main/imrann-main/kanban-board

# Install dependencies
npm install

# Start the development server
npm run dev

After running the above commands, open the URL shown in the terminal (usually http://localhost:5173/) in your browser.


## Features
- Drag and drop tasks
- Three columns (To Do, In Progress, Done)
- Persistent state using localStorage

## Drag-and-Drop
Used native HTML5 drag and drop API.
Each task carries its ID and updates status on drop.

## Persistence
Tasks are stored in localStorage and loaded on app start.

## Design Decisions
- Used React hooks for state
- Kept global state in App component
- Simple component structure for clarity

## Future Improvements
- Add edit/delete tasks
- Add backend
- Add authentication
