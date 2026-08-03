import React from 'react';

interface LpPortalProps {
    onBack: () => void;
    onOpenDataRoom: () => void;
}

interface CapitalMetric {
    label: string;
    value: string;
    note: string;
}

interface PortalDocument {
    name: string;
    date: string;
    type: string;
}

interface Notice {
    title: string;
    date: string;
    body: string;
    tag: string;
}

const capitalMetrics: CapitalMetric[] = [
    { label: 'Committed Capital', value: '€50,000,000', note: 'Fund III — Committed' },
    { label: 'Capital Called', value: '€32,400,000', note: '64.8% of commitments' },
    { label: 'Distributions Received', value: '€9,800,000', note: 'DPI 0.31 (gross)' },
    { label: 'Current NAV', value: '€41,200,000', note: 'Net asset value, 31 Dec 2025' },
];

const portalDocuments: PortalDocument[] = [
    { name: 'Q4-2025 Quarterly Report — Fund III', date: '2026-01-25', type: 'Quarterly Report' },
    { name: 'Capital Account Statement — December 2025', date: '2026-01-10', type: 'Capital Account' },
    { name: 'Unaudited NAV — December 2025', date: '2026-01-08', type: 'NAV Statement' },
    { name: 'Distribution Notice — Special Dividend', date: '2025-12-18', type: 'Notice' },
];

const notices: Notice[] = [
    {
        title: 'Distribution — Special Dividend',
        date: '2025-12-18',
        tag: 'PAYMENT',
        body: 'A distribution of €4.20 per committed unit was initiated. Settlement is expected within 5 business days. Wire instructions on file remain valid.',
    },
    {
        title: 'Annual Limited Partner Meeting',
        date: '2026-02-10',
        tag: 'MEETING',
        body: 'The annual LP meeting will be held virtually on 10 March 2026. Agenda: portfolio review, Fund III deployment status, and 2026 liquidity plan.',
    },
    {
        title: 'KYC / AML Re-confirmation',
        date: '2026-01-15',
        tag: 'COMPLIANCE',
        body: 'Annual investor re-confirmation is due by 28 February 2026. Please ensure updated beneficial ownership information is on file.',
    },
];

export const LpPortal: React.FC<LpPortalProps> = ({ onBack, onOpenDataRoom }) => {
    return (
        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-obsidian">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-oldgold mb-3">Restricted — Authorized Investors Only</p>
                        <h1 className="text-3xl md:text-4xl font-light text-platinum tracking-tight">
                            LIMITED PARTNER <span className="text-oldgold italic">ACCESS</span>
                        </h1>
                        <p className="text-platinum/50 font-light mt-3 max-w-xl">
                            Fund III investor portal — capital accounts, quarterly reporting, notices and document access in one place.
                        </p>
                    </div>
                    <button
                        onClick={onBack}
                        className="text-gray-400 text-xs uppercase tracking-[0.2em] hover:text-oldgold transition-colors flex items-center gap-2 font-medium"
                    >
                        <span className="text-lg">&larr;</span> Sign Out
                    </button>
                </div>

                {/* Capital Snapshot */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {capitalMetrics.map((m) => (
                        <div key={m.label} className="bg-obsidian/40 border border-platinum/10 rounded-xl p-6 hover:border-oldgold/40 transition-all duration-300">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-platinum/40 mb-3">{m.label}</p>
                            <p className="text-xl md:text-2xl font-light text-platinum mb-1">{m.value}</p>
                            <p className="text-xs text-oldgold/70 font-light">{m.note}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Documents */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-obsidian/40 border border-platinum/10 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-platinum/10">
                                <h2 className="text-xl font-medium text-platinum">Latest Reports & Statements</h2>
                                <span className="text-xs text-platinum/40 uppercase tracking-widest">4 Documents</span>
                            </div>
                            <div className="space-y-3">
                                {portalDocuments.map((doc) => (
                                    <div key={doc.name} className="flex items-center justify-between p-4 rounded-xl bg-platinum/5 border border-transparent hover:border-oldgold/30 transition-all duration-300 group">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-obsidian text-platinum/40 group-hover:text-oldgold transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-platinum font-medium group-hover:text-oldgold transition-colors">{doc.name}</h4>
                                                <p className="text-xs text-platinum/30 mt-0.5">{doc.type} • {doc.date}</p>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-obsidian bg-platinum group-hover:bg-oldgold rounded-lg transition-all duration-300">
                                            Open
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={onOpenDataRoom}
                                className="mt-6 w-full py-4 bg-oldgold text-obsidian uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-all duration-300"
                            >
                                Enter Full Data Room
                            </button>
                        </div>

                        {/* Notices */}
                        <div className="bg-obsidian/40 border border-platinum/10 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-platinum/10">
                                <h2 className="text-xl font-medium text-platinum">Investor Notices</h2>
                                <span className="text-xs text-platinum/40 uppercase tracking-widest">3 Active</span>
                            </div>
                            <div className="space-y-6">
                                {notices.map((n) => (
                                    <div key={n.title} className="border-l-2 border-oldgold/50 pl-6 py-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[9px] font-bold tracking-[0.25em] text-oldgold bg-oldgold/10 px-2 py-1 rounded">{n.tag}</span>
                                            <h4 className="text-platinum font-medium">{n.title}</h4>
                                            <span className="text-xs text-platinum/30 ml-auto">{n.date}</span>
                                        </div>
                                        <p className="text-sm text-platinum/50 font-light leading-relaxed">{n.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contacts */}
                    <div className="space-y-4">
                        <div className="bg-obsidian/40 border border-platinum/10 rounded-2xl p-8">
                            <h2 className="text-xl font-medium text-platinum mb-6 pb-4 border-b border-platinum/10">Investor Relations</h2>
                            <div className="space-y-5">
                                {[
                                    { role: 'Investor Relations', name: 'jonas@roialscapital.com', sub: 'Capital accounts & reporting' },
                                    { role: 'Fund Administration', name: 'admin@fundadmin.com', sub: 'NAV, capital calls, distributions' },
                                    { role: 'Legal Counsel', name: 'legal@roialscapital.com', sub: 'Documents & subscriptions' },
                                ].map((c) => (
                                    <div key={c.role}>
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-platinum/40 mb-1">{c.role}</p>
                                        <p className="text-sm text-oldgold">{c.name}</p>
                                        <p className="text-xs text-platinum/30 font-light">{c.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-obsidian/40 border border-platinum/10 rounded-2xl p-8">
                            <h2 className="text-xl font-medium text-platinum mb-4">Security</h2>
                            <p className="text-sm text-platinum/50 font-light leading-relaxed">
                                All access is logged and audited. Documents are watermarked per investor and may not be redistributed. Session expires after 15 minutes of inactivity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fine print */}
                <p className="mt-12 text-[10px] text-platinum/25 uppercase tracking-[0.2em] text-center">
                    Illustrative portal — figures shown for demonstration. Authorized use only. © Roials Capital
                </p>
            </div>
        </section>
    );
};
