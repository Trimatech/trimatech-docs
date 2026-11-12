# Trimatech plugin docs

One Docusaurus site for every Trimatech Roblox Studio plugin, served at https://docs.trimatech.dev.

## Where the content lives

| Section | Written in | Copied here as |
| --- | --- | --- |
| `/city-builder` | `docs/user` in the city-builder-plugin repo | `content/city-builder` |
| `/click-to-build` | `website/docs` and `website/static/img` in the click-to-build-plugin repo | `content/click-to-build` |
| `/plugins` | `content/docs` in the trimatech repo | `docs/plugins`, by `pnpm import-docs` |

The plugin repos are private. Each one has a workflow that copies its pages into `content/` here on
a push to its main branch, and Vercel deploys this repo on every push. Do not edit `content/` by
hand: the next sync overwrites it.

## Commands

```bash
pnpm install
pnpm start         # dev server reading the sibling plugin checkouts directly; search does not work here
pnpm sync          # copy the sibling checkouts into content/
pnpm import-docs   # regenerate docs/plugins and src/data/plugins.json from the trimatech checkout
pnpm build         # production build from content/; fails on a broken link
pnpm serve         # serve the build, with search
```

`pnpm start`, `pnpm sync` and `pnpm import-docs` expect the plugin and trimatech repos checked out
beside this one.
