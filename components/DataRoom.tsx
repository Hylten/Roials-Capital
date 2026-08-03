import React, { useMemo, useState } from 'react';

interface FileItem {
    name: string;
    type: 'pdf' | 'docx' | 'xlsx' | 'md' | 'csv';
    date: string;
    version: string;
    size: string;
    status?: 'new' | 'updated';
}

interface Folder {
    id: string;
    name: string;
    description: string;
    files: FileItem[];
}

interface DataRoomProps {
    onBack: () => void;
}

const dataRoomFolders: Folder[] = [
    {
        id: '01',
        name: '01_Fund_Governance',
        description: 'PPM, LPA, subscription documents and side letters.',
        files: [
            { name: 'Private_Placement_Memorandum_Fund_III.pdf', type: 'pdf', date: '2026-01-20', version: '2.1', size: '2.4 MB', status: 'updated' },
            { name: 'Limited_Partnership_Agreement_Fund_III.pdf', type: 'pdf', date: '2026-01-20', version: '1.8', size: '1.1 MB' },
            { name: 'Subscription_Agreement_Template.docx', type: 'docx', date: '2026-01-15', version: '1.2', size: '450 KB' },
            { name: 'Side_Letter_Policy_Summary.md', type: 'md', date: '2026-01-15', version: '1.0', size: '12 KB' }
        ]
    },
    {
        id: '02',
        name: '02_Investment_Strategy_Dealflow',
        description: 'The Modern Capital Playbook, mandate pipeline and dealflow logs.',
        files: [
            { name: 'Modern_Capital_Playbook_2026.pdf', type: 'pdf', date: '2026-01-25', version: '4.0', size: '5.2 MB', status: 'new' },
            { name: 'Active_Dealflow_Log_Q1_2026.xlsx', type: 'xlsx', date: '2026-01-24', version: '1.5', size: '890 KB' },
            { name: 'Fund_III_Mandate_Pipeline_Summary.md', type: 'md', date: '2026-01-22', version: '2.3', size: '28 KB' },
            { name: 'Buy_And_Build_Thesis_One_Pager.pdf', type: 'pdf', date: '2025-12-10', version: '1.0', size: '640 KB' }
        ]
    },
    {
        id: '03',
        name: '03_Performance_Track_Record',
        description: 'GIPS 2020 compliant composites and DPI-first reporting.',
        files: [
            { name: 'GIPS_2020_Performance_Composite.pdf', type: 'pdf', date: '2026-01-25', version: '1.0', size: '1.4 MB', status: 'new' },
            { name: 'Track_Record_Historical_2020_2025.xlsx', type: 'xlsx', date: '2026-01-20', version: '2.3', size: '3.1 MB' },
            { name: 'DPI_IRR_Summary_by_Vintage.pdf', type: 'pdf', date: '2026-01-18', version: '1.4', size: '820 KB' }
        ]
    },
    {
        id: '04',
        name: '04_Investor_Communications',
        description: 'Quarterly reports, capital account statements, NAV and notices.',
        files: [
            { name: 'Quarterly_Report_Q4_2025.pdf', type: 'pdf', date: '2026-01-25', version: '1.0', size: '3.6 MB', status: 'new' },
            { name: 'Capital_Account_Statement_Dec_2025.xlsx', type: 'xlsx', date: '2026-01-10', version: '1.1', size: '210 KB' },
            { name: 'Unaudited_NAV_Dec_2025.pdf', type: 'pdf', date: '2026-01-08', version: '1.0', size: '480 KB' },
            { name: 'Distribution_Notice_Special_Dividend.pdf', type: 'pdf', date: '2025-12-18', version: '1.0', size: '190 KB' }
        ]
    },
    {
        id: '05',
        name: '05_Subscription_Onboarding',
        description: 'KYC/AML pack, tax forms and the ILPA DDQ.',
        files: [
            { name: 'ILPA_DDQ_v2025_Filled.xlsx', type: 'xlsx', date: '2026-01-25', version: '1.0', size: '1.8 MB', status: 'new' },
            { name: 'KYC_AML_Investor_Pack.md', type: 'md', date: '2026-01-20', version: '2.0', size: '18 KB' },
            { name: 'W_8BEN_E_Instruction_Sheet.pdf', type: 'pdf', date: '2026-01-15', version: '1.2', size: '320 KB' },
            { name: 'Subscription_Checklist_Fund_III.md', type: 'md', date: '2026-01-15', version: '1.0', size: '9 KB' }
        ]
    },
    {
        id: '06',
        name: '06_Operational_Due_Diligence',
        description: 'Security posture, business continuity and operational guidelines.',
        files: [
            { name: 'SOC_2_Type_II_Report_2025.pdf', type: 'pdf', date: '2026-01-22', version: '1.0', size: '2.2 MB', status: 'new' },
            { name: 'Pentest_Report_Q4_2025.pdf', type: 'pdf', date: '2026-01-05', version: 'Final', size: '1.9 MB' },
            { name: 'BC_DR_Plan_Summary_2026.md', type: 'md', date: '2026-01-10', version: '3.1', size: '14 KB' },
            { name: 'Institutional_CRM_Schema_2026.csv', type: 'csv', date: '2026-01-25', version: '1.0', size: '12 KB' },
            { name: 'Operational_Guidelines_2026.md', type: 'md', date: '2026-01-25', version: '1.0', size: '8 KB' }
        ]
    },
    {
        id: '07',
        name: '07_Legal_Compliance',
        description: 'SFDR, AIFMD marketing delegation, ILPA NDA and compliance manual.',
        files: [
            { name: 'ILPA_Model_NDA_2026.md', type: 'md', date: '2026-01-25', version: '1.0', size: '15 KB' },
            { name: 'Marketing_Delegation_Memo_AIFMD_II.md', type: 'md', date: '2026-01-25', version: '1.0', size: '10 KB' },
            { name: 'Compliance_Manual_2026.pdf', type: 'pdf', date: '2026-01-20', version: '2.0', size: '1.1 MB' },
            { name: 'Anti_Money_Laundering_Policy.pdf', type: 'pdf', date: '2026-01-20', version: '1.7', size: '760 KB' }
        ]
    },
    {
        id: '08',
        name: '08_Financials',
        description: 'Audited statements, ILPA 2.0 fee template and cashflow forecasts.',
        files: [
            { name: 'Audited_Financial_Statement_2025.pdf', type: 'pdf', date: '2026-01-20', version: 'Final', size: '4.7 MB' },
            { name: 'ILPA_2.0_Fee_Template_v3.xlsx', type: 'xlsx', date: '2026-01-18', version: '3.0', size: '1.2 MB' },
            { name: 'Fund_III_Cashflow_Forecast_2026.xlsx', type: 'xlsx', date: '2026-01-15', version: '1.0', size: '540 KB', status: 'new' }
        ]
    },
    {
        id: '09',
        name: '09_Service_Providers',
        description: 'Fund administrator, auditor, legal counsel and custodian.',
        files: [
            { name: 'Service_Provider_Register_2026.md', type: 'md', date: '2026-01-25', version: '1.0', size: '6 KB' },
            { name: 'Fund_Administrator_SLA_Summary.pdf', type: 'pdf', date: '2026-01-20', version: '1.3', size: '410 KB' },
            { name: 'Auditor_Engagement_Letter_2026.pdf', type: 'pdf', date: '2026-01-12', version: '1.0', size: '280 KB' }
        ]
    },
    {
        id: '10',
        name: '10_ESG_Sustainability',
        description: 'SFDR Article 8 framework, ESG policy and TCFD alignment.',
        files: [
            { name: 'ESG_Article_8_Compliance_Framework.md', type: 'md', date: '2026-01-25', version: '1.0', size: '22 KB', status: 'updated' },
            { name: 'ESG_Policy_Statement_2026.pdf', type: 'pdf', date: '2026-01-20', version: '2.1', size: '510 KB' },
            { name: 'TCFD_Alignment_Report_2025.pdf', type: 'pdf', date: '2025-11-30', version: '1.0', size: '940 KB' }
        ]
    }
];

export const DataRoom: React.FC<DataRoomProps> = ({ onBack }) => {
    const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
    const [query, setQuery] = useState('');
    const [sortByDate, setSortByDate] = useState(false);
    const [downloadNote, setDownloadNote] = useState<string | null>(null);

    const totalFiles = useMemo(() => dataRoomFolders.reduce((acc, f) => acc + f.files.length, 0), []);
    const lastUpdate = useMemo(() => {
        const all = dataRoomFolders.flatMap(f => f.files.map(x => x.date));
        return all.sort().reverse()[0] || '';
    }, []);

    const filteredFolders = useMemo(() => {
        const q = query.trim().toLowerCase();
        let folders = dataRoomFolders;
        if (q) {
            folders = folders
                .map(f => ({
                    ...f,
                    files: f.files.filter(x => x.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)),
                }))
                .filter(f => f.files.length > 0 || f.name.toLowerCase().includes(q));
        }
        if (sortByDate) {
            folders = folders.map(f => ({
                ...f,
                files: [...f.files].sort((a, b) => (a.date < b.date ? 1 : -1)),
            }));
        }
        return folders;
    }, [query, sortByDate]);

    const selectedFiles = useMemo(() => {
        if (!selectedFolder) return [];
        const current = dataRoomFolders.find(f => f.id === selectedFolder.id) || selectedFolder;
        let files = [...current.files];
        if (sortByDate) files.sort((a, b) => (a.date < b.date ? 1 : -1));
        return files;
    }, [selectedFolder, sortByDate]);

    return (
        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-obsidian">
            <div className="absolute top-8 left-8 z-20">
                <button
                    onClick={onBack}
                    className="text-gray-400 text-xs uppercase tracking-[0.2em] hover:text-oldgold transition-colors flex items-center gap-2 font-medium"
                >
                    <span className="text-lg">&larr;</span> Logga ut
                </button>
            </div>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-oldgold mb-3">Restricted — Authorized Investors Only</p>
                    <h1 className="text-4xl md:text-5xl font-light text-platinum mb-4 tracking-tight">
                        CONFIDENTIAL <span className="text-oldgold font-medium italic">DATA ROOM</span>
                    </h1>
                    <p className="text-platinum/60 max-w-2xl text-lg font-light">
                        Institutional document repository — ILPA-aligned structure, 2026 ODD compliance, and watermark-tracked distribution.
                    </p>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Artifacts', value: String(totalFiles) },
                        { label: 'Folders', value: String(dataRoomFolders.length) },
                        { label: 'Last Updated', value: lastUpdate },
                        { label: 'Security', value: 'Watermarked' },
                    ].map(s => (
                        <div key={s.label} className="bg-obsidian/40 border border-platinum/10 rounded-xl px-5 py-4">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-platinum/40 mb-1">{s.label}</p>
                            <p className="text-sm text-platinum font-light">{s.value}</p>
                        </div>
                    ))}
                </div>

                {/* Search + sort */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex-1 min-w-[240px]">
                        <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search documents, folders, topics..."
                            className="w-full bg-white/[0.03] border border-white/10 text-platinum text-sm px-5 py-3.5 focus:outline-none focus:border-oldgold/60 transition-all duration-300 font-light placeholder-gray-600"
                        />
                    </div>
                    <button
                        onClick={() => setSortByDate(v => !v)}
                        className={`px-5 py-3.5 text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${sortByDate ? 'bg-oldgold text-obsidian border-oldgold' : 'bg-transparent text-platinum/60 border-white/10 hover:border-oldgold/50'}`}
                    >
                        {sortByDate ? 'Sorted: Newest' : 'Sort: Newest'}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Folders List */}
                    <div className="lg:col-span-1 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                        {filteredFolders.map((folder) => (
                            <button
                                key={folder.id}
                                onClick={() => setSelectedFolder(folder)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${selectedFolder?.id === folder.id
                                        ? 'bg-oldgold/10 border-oldgold shadow-[0_0_30px_rgba(197,161,90,0.1)]'
                                        : 'bg-obsidian/40 border-platinum/10 hover:border-oldgold/50'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium tracking-widest text-oldgold uppercase">Folder {folder.id}</span>
                                    <div className={`p-2 rounded-lg transition-colors ${selectedFolder?.id === folder.id ? 'bg-oldgold text-obsidian' : 'bg-platinum/5 text-platinum/40 group-hover:text-oldgold'}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium text-platinum mb-1">{folder.name.replace(/_/g, ' ').substring(3)}</h3>
                                <p className="text-sm text-platinum/40 font-light leading-relaxed mb-2">{folder.description}</p>
                                <p className="text-[10px] uppercase tracking-widest text-platinum/25">{folder.files.length} artifacts</p>
                            </button>
                        ))}
                        {filteredFolders.length === 0 && (
                            <div className="p-8 border border-dashed border-platinum/20 rounded-xl text-center text-platinum/40 font-light">
                                No folders match your search.
                            </div>
                        )}
                    </div>

                    {/* Files View */}
                    <div className="lg:col-span-2">
                        {selectedFiles.length > 0 ? (
                            <div className="bg-obsidian/40 border border-platinum/10 rounded-2xl p-8 backdrop-blur-sm sticky top-28">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-platinum/10">
                                    <div>
                                        <h2 className="text-2xl font-medium text-platinum">{selectedFolder?.name.replace(/_/g, ' ')}</h2>
                                        <p className="text-sm text-oldgold mt-1 uppercase tracking-widest">{selectedFiles.length} Institutional Artifacts</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {selectedFiles.map((file, idx) => (
                                        <div
                                            key={idx}
                                            className="group flex flex-wrap items-center justify-between p-4 rounded-xl bg-platinum/5 border border-transparent hover:border-oldgold/30 hover:bg-platinum/[0.07] transition-all duration-300"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-obsidian text-platinum/40 group-hover:text-oldgold transition-colors">
                                                    <FileTypeIcon type={file.type} />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="text-platinum font-medium group-hover:text-oldgold transition-colors">{file.name}</h4>
                                                        {file.status === 'new' && <span className="text-[8px] font-bold tracking-widest text-obsidian bg-oldgold px-1.5 py-0.5 rounded">NEW</span>}
                                                        {file.status === 'updated' && <span className="text-[8px] font-bold tracking-widest text-oldgold bg-oldgold/10 border border-oldgold/30 px-1.5 py-0.5 rounded">UPDATED</span>}
                                                    </div>
                                                    <p className="text-xs text-platinum/30 mt-0.5">
                                                        v{file.version} • {file.date} • {file.size}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setDownloadNote(file.name)}
                                                className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-obsidian bg-platinum group-hover:bg-oldgold rounded-lg transition-all duration-300 mt-4 sm:mt-0"
                                            >
                                                Download
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {downloadNote && (
                                    <div className="mt-6 p-4 border border-oldgold/30 bg-oldgold/5 rounded-xl">
                                        <p className="text-sm text-platinum/70 font-light">
                                            <span className="text-oldgold font-medium">{downloadNote}</span> — download requests are logged and watermarked per investor. For access, contact Investor Relations.
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center border border-dashed border-platinum/20 rounded-2xl bg-obsidian/20 p-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-platinum/5 flex items-center justify-center mb-6">
                                    <svg className="w-10 h-10 text-platinum/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl text-platinum font-light mb-2">Vault Locked</h3>
                                <p className="text-platinum/40 max-w-sm font-light">Select a folder to view institutional artifacts and performance data.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Compliance footer */}
                <div className="mt-14 pt-8 border-t border-platinum/10 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-platinum/25">
                    <span>Unauthorized distribution prohibited</span>
                    <span>All access logged & audited</span>
                    <span>Watermarked per investor</span>
                    <span>© Roials Capital 2026</span>
                </div>
            </div>
        </section>
    );
};

const FileTypeIcon: React.FC<{ type: FileItem['type'] }> = ({ type }) => {
    switch (type) {
        case 'pdf': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
        case 'docx': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
        case 'xlsx': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
        default: return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    }
};
