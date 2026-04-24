# imrann

## Setup
npm install
npm run dev

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
