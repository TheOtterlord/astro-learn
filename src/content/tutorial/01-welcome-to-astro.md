---
title: Welcome to Astro
description: A quick introduction to Astro and its core features.
---

In this tutorial, you’ll learn Astro’s core features by building an interactive shopping basket 🚀

Along the way, you’ll:
- Create dynamic product pages using content collections
- Build Astro components to handle common UI pieces
- Sync user state with nanostores
- Add interactivity with a UI framework

## Getting Started

1. In the code editor to your top right, navigate in the file pane to `src/pages/index.astro` and click on it to open the file’s contents in an editable tab.

  The contents of your `index.astro` file should look like this:

  ```astro
  ---
  const message = 'Hello, world!'
  ---

  <h1>{message}</h1>
  ```

2. Edit the contents of the file to update the message:

  ```diff
  ---
  -const message = 'Hello, world!'
  +const message = 'Hello, user!'
  ---

  <h1>{message}</h1>
  ```

3. Check the browser preview in the bottom right and you should see your page content updated to the new text.

Congratulations! You are now one step closer to building your first website with Astro.
