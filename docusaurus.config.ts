import path from "node:path";

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// Each large plugin keeps its docs as markdown in its own repo, so a change to a tool and its page
// land in one commit. Those repos are private, so their CI copies the pages into `content/` here and
// the deployed site builds from that copy. `DOCS_LOCAL=1` (what `pnpm start` sets) reads the sibling
// checkouts instead, so an edit in a plugin repo shows up at once.
const local = process.env.DOCS_LOCAL === "1";
const sources = path.resolve(__dirname, "..");
const cityBuilderDocs = local
	? path.join(sources, "city-builder-plugin/docs/user")
	: path.join(__dirname, "content/city-builder");
const clickToBuildDocs = local
	? path.join(sources, "click-to-build-plugin/website/docs")
	: path.join(__dirname, "content/click-to-build/docs");
const clickToBuildStatic = local
	? path.join(sources, "click-to-build-plugin/website/static")
	: path.join(__dirname, "content/click-to-build/static");

type MarkdownNode = {
	readonly type: string;
	url?: string;
	readonly children?: readonly MarkdownNode[];
};

/**
 * Click to Build's pages were written for a site that served them under /docs, and link to each
 * other that way. Here they live under /click-to-build.
 */
const rebaseLinks = (from: string, to: string) => () => (tree: MarkdownNode) => {
	const visit = (node: MarkdownNode) => {
		if (node.type === "link" && node.url?.startsWith(from)) {
			node.url = to + node.url.slice(from.length);
		}
		node.children?.forEach(visit);
	};
	visit(tree);
};

const config: Config = {
	title: "Trimatech Plugins",
	tagline: "Documentation for the Roblox Studio plugins by Trimatech Games",
	favicon: "img/favicon.ico",

	future: {
		v4: true,
	},

	url: "https://docs.trimatech.dev",
	baseUrl: "/",

	onBrokenLinks: "throw",

	markdown: {
		hooks: {
			onBrokenMarkdownLinks: "throw",
		},
		// Click to Build's pages set heading ids as `## Title {#id}`, which v4 turns off by default.
		mdx1Compat: {
			headingIds: true,
		},
	},

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	// Click to Build's pages point at images under /img in its own static folder.
	staticDirectories: ["static", clickToBuildStatic],

	presets: [
		[
			"classic",
			{
				docs: false,
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "city-builder",
				path: cityBuilderDocs,
				routeBasePath: "city-builder",
				sidebarPath: "./sidebars.ts",
				editUrl: "https://github.com/Trimatech/city-builder-plugin/edit/main/docs/user/",
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "click-to-build",
				path: clickToBuildDocs,
				routeBasePath: "click-to-build",
				sidebarPath: "./sidebars.ts",
				beforeDefaultRemarkPlugins: [rebaseLinks("/docs/", "/click-to-build/")],
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "plugins",
				path: "docs/plugins",
				routeBasePath: "plugins",
				sidebarPath: "./sidebars.ts",
			},
		],
		[
			"@easyops-cn/docusaurus-search-local",
			{
				hashed: true,
				indexBlog: false,
				docsRouteBasePath: ["city-builder", "click-to-build", "plugins"],
				docsDir: [cityBuilderDocs, clickToBuildDocs, "docs/plugins"],
				docsPluginIdForPreferredVersion: "city-builder",
			},
		],
	],

	themeConfig: {
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "Trimatech Plugins",
			logo: {
				alt: "",
				src: "img/logo.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "docs",
					docsPluginId: "city-builder",
					position: "left",
					label: "City Builder",
				},
				{
					type: "docSidebar",
					sidebarId: "docs",
					docsPluginId: "click-to-build",
					position: "left",
					label: "Click to Build",
				},
				{
					type: "docSidebar",
					sidebarId: "docs",
					docsPluginId: "plugins",
					position: "left",
					label: "More plugins",
				},
				{
					href: "https://trimatech.dev/en#plugins",
					label: "trimatech.dev",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{ label: "City Builder", to: "/city-builder/" },
						{ label: "Click to Build", to: "/click-to-build/intro" },
						{ label: "More plugins", to: "/plugins/perf-auditor" },
					],
				},
				{
					title: "Community",
					items: [
						{ label: "X", href: "https://x.com/MayGoRblx" },
						{ label: "YouTube", href: "https://www.youtube.com/@TrimatechGames" },
					],
				},
				{
					title: "More",
					items: [{ label: "All plugins", href: "https://trimatech.dev/en#plugins" }],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Trimatech Games.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["lua", "bash"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
