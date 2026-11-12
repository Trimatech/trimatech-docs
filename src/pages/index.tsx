import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import cards from "../data/plugins.json";
import styles from "./index.module.css";

/** The plugins with a docs section of their own get a full-width card at the top. */
const FEATURED: ReadonlySet<string> = new Set(["city-builder", "click-to-build"]);

function PluginCard({ card }: { readonly card: (typeof cards)[number] }): ReactNode {
	const icon = useBaseUrl(`/img/plugins/${card.slug}.png`);
	return (
		<Link className={clsx(styles.card, FEATURED.has(card.slug) && styles.featured)} to={card.docsPath}>
			<img src={icon} alt="" />
			<div>
				<h2>
					{card.name}
					<span className={styles.version}>v{card.version}</span>
				</h2>
				<p>{card.summary}</p>
			</div>
		</Link>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	const ordered = [...cards].sort((a, b) => Number(FEATURED.has(b.slug)) - Number(FEATURED.has(a.slug)));
	return (
		<Layout title="Docs" description={siteConfig.tagline}>
			<header className={styles.hero}>
				<h1>{siteConfig.title}</h1>
				<p>{siteConfig.tagline}. Pick a plugin, or search across all of them.</p>
			</header>
			<main className={styles.grid}>
				{ordered.map((card) => (
					<PluginCard key={card.slug} card={card} />
				))}
			</main>
		</Layout>
	);
}
