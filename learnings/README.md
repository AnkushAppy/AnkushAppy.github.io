# Adding a Learning Topic

Each learning is a self-contained HTML canvas file embedded in the main page.

## Steps

1. **Copy the template**
   ```bash
   cp learnings/_template.html learnings/my-topic.html
   ```

2. **Edit the canvas HTML** — add your notes, diagrams, charts, or `<canvas>` visualizations in `learnings/my-topic.html`.

3. **Add an article block** in `index.html` inside `.learnings-content`:

   ```html
   <article id="topic-my-topic" class="learning-topic" data-title="My Topic Title">
     <header class="learning-header">
       <span class="learning-tag">Category</span>
       <h3>My Topic Title</h3>
       <p>Short description shown above the canvas.</p>
     </header>
     <div class="learning-canvas" data-src="learnings/my-topic.html">
       <iframe src="learnings/my-topic.html" title="My Topic Title" loading="lazy"></iframe>
     </div>
   </article>
   ```

4. The **table of contents auto-builds** from all `.learning-topic` articles — no manual TOC edits needed.

## Tips

- Use unique `id` values prefixed with `topic-` (e.g. `topic-dspy-workflows`).
- Set `data-title` for the TOC label (falls back to the `<h3>` text).
- Canvas files are iframe-embedded at 400px height; adjust in `assets/css/style.css` if needed.
- Keep each canvas file self-contained (inline CSS/JS) so it works standalone.
