# Daniel Marks — academic website

Jekyll source for the homepage, research overview, publications, teaching, and CV.

## Run locally

Use the Ruby version in `.ruby-version`, then run:

```sh
bundle install
bundle exec jekyll serve -l -H localhost
```

Open http://localhost:4000. Stop the server with Ctrl+C. Restart it after changing `_config.yml`.

## Edit the site

- `_pages/about.md`: homepage, biography, and news.
- `_pages/research_overview.md`: research text and figures.
- `_pages/my_publications.md`: publication entries and paper links.
- `_pages/my_teaching.md`: teaching appointments and modules.
- `_pages/404.md`: missing-page message.
- `files/Daniel_Marks_CV.pdf`: the current CV. Replace this file to update it; the navigation link uses its modification time to refresh browser caches.
- `images/`: the profile photograph, current research figures, and site icons.
- `_data/navigation.yml`: navigation labels and destinations.
- `_config.yml`: site address, profile details, and Jekyll settings.
- `_includes/`, `_layouts/`, `_sass/`, and `assets/`: templates, styles, scripts, and icon fonts used to build the site.

## Build

```sh
bundle exec jekyll build
```

The generated site is written to `_site/`. Generated output, local caches, and installed gems are ignored by Git and are not source files to publish.

## Attribution

Based on [Academic Pages](https://academicpages.github.io/), derived from Michael Rose's Minimal Mistakes theme. Retain the included `LICENSE` and the license notices in bundled font and stylesheet files.
