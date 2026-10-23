import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import PromptRunner from '../../components/PromptRunner'
import { SITE_NAME } from '../../../lib/site'
import { getPrompts, getPrompt, PROMPT_KATEGORIEN, TECHNIKEN } from '../../../lib/prompts'
import { getTool, toolHref, toolRel } from '../../../lib/tools'

export const dynamicParams = false

export function generateStaticParams() {
    return getPrompts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
    const p = getPrompt(params.slug)
    if (!p) return {}
    return {
        title: `Prompt: ${p.title}`,
        description: `${p.ziel} Vorlage auf Deutsch zum Ausfüllen, mit einem Klick an ChatGPT, Claude, Perplexity oder Grok.`.slice(0, 300),
        alternates: { canonical: `/prompts/${p.slug}` },
    }
}

export default function PromptPage({ params }) {
    const p = getPrompt(params.slug)
    if (!p) notFound()
    const kat = PROMPT_KATEGORIEN[p.kategorie]
    const tools = p.tools.map(getTool).filter(Boolean)
    const verwandt = getPrompts().filter((x) => x.kategorie === p.kategorie && x.slug !== p.slug)
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Prompts', path: '/prompts' },
        { name: p.title, path: `/prompts/${p.slug}` },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: p.title,
            description: p.ziel,
            step: [
                ...p.felder.map((f) => ({ '@type': 'HowToStep', name: `${f.label} eintragen`, text: `Beispiel: ${f.beispiel}` })),
                { '@type': 'HowToStep', name: 'An die KI senden', text: 'Prompt mit einem Klick an ChatGPT, Claude, Perplexity oder Grok schicken.' },
            ],
        },
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Prompt · {kat.name}</p>
                <h1>{p.title}</h1>
                <p className="lead">{p.ziel}</p>
            </section>
            <PromptRunner vorlage={p.vorlage} felder={p.felder} />
            <section aria-labelledby="warum">
                <h2 id="warum">Warum dieser Prompt funktioniert</h2>
                <dl className="technik-liste">
                    {p.techniken.map((t) => (
                        <div key={t}>
                            <dt>{TECHNIKEN[t][0]}</dt>
                            <dd>{TECHNIKEN[t][1]}</dd>
                        </div>
                    ))}
                </dl>
            </section>
            {tools.length > 0 && (
                <section aria-labelledby="tools">
                    <h2 id="tools">Damit setzt du das Ergebnis um</h2>
                    <ul className="link-cards">
                        {tools.map((t) => (
                            <li key={t.slug}>
                                <Link href={`/tools/${t.slug}`}>
                                    <strong>{t.name}</strong>
                                </Link>
                                <span>{t.summary_de}</span>
                                <a href={toolHref(t)} target="_blank" rel={toolRel(t)}>
                                    {t.name} ansehen ↗{t.affiliate && <sup>*</sup>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            {verwandt.length > 0 && (
                <section aria-labelledby="verwandt">
                    <h2 id="verwandt">Mehr Prompts für {kat.name}</h2>
                    <ul>
                        {verwandt.map((x) => (
                            <li key={x.slug}>
                                <Link href={`/prompts/${x.slug}`}>{x.title}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            <p>
                <Link href="/prompts">← Alle Prompts</Link> · <Link href="/prompt-baukasten">Eigenen Prompt bauen</Link>
            </p>
        </>
    )
}
