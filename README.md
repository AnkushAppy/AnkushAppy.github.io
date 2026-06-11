# AnkushAppy.github.io

Personal learning page for [Ankush](https://github.com/AnkushAppy) — visual deep-dives into AI, systems, and ideas worth understanding.

## Local preview

```bash
# Python 3
python3 -m http.server 8080

# Or npx
npx serve .
```

Open http://localhost:8080

## Deploy to GitHub Pages

1. Create a repo named **`AnkushAppy.github.io`** on GitHub.
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial GitHub Pages site"
   git branch -M main
   git remote add origin git@github.com:AnkushAppy/AnkushAppy.github.io.git
   git push -u origin main
   ```
3. In repo **Settings → Pages**, set source to **Deploy from branch: main / (root)**.
4. Site will be live at https://ankushappy.github.io

## Structure

```
├── index.html              # Main page
├── assets/
│   ├── css/style.css       # Theme
│   └── js/main.js          # Nav, TOC, scroll spy
└── learnings/
    ├── _template.html      # Copy to add new topics
    ├── rag-evals.html      # Sample learning canvas
    └── vllm-optimization.html
```

See [learnings/README.md](learnings/README.md) for how to add new learning topics.
