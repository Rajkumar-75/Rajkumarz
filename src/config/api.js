// Central place to point the frontend at the future Express + MongoDB API.
// Until the backend exists, all data comes from src/data/*.js (static).
//
// When the backend is ready:
// 1. Create a .env file with VITE_API_URL=http://localhost:5000/api
// 2. Replace static imports (e.g. `import { projects } from '../data/projects'`)
//    with a call to `apiFetch('/projects')` inside a useEffect/useState or a
//    small data hook (see src/hooks/useFetch.js for a starting pattern).
// 3. The contact form (src/components/Contact.jsx) already posts to
//    `${API_BASE_URL}/contact` — just stand up that route in Express.

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}
