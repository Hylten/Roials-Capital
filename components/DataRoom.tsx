import React, { useState } from 'react';

interface FileItem {
    name: string;
    type: 'pdf' | 'docx' | 'xlsx' | 'md' | 'csv';
    date: string;
    version: string;
    size: string;
}

interface Folder {
    id: string;
    name: string;
    description: string;
    files: FileItem[];
}

const dataRoomFolders: Folder[] = [
    {
        id: '01',
        name: '01_Fund_Governance',
        description: 'PPM, LPA, and Subscription Agreements.',
        files: [
            { name: 'Private_Placement_Memorandum.pdf', type: 'pdf', date: '2026-01-20', version: '2.1', size: '2.4 MB' },
            { name: 'Limited_Partnership_Agreement.pdf', type: 'pdf', date: '2026-01-20', version: '1.8', size: '1.1 MB' },
            { name: 'Subscription_Agreement_Template.docx', type: 'docx', date: '2026-01-15', version: '1.2', size: '450 KB' }
        ]
    },
    {
        id: '02',
        name: '02_Investment_Strategy',
        description: 'Dealflow logs and the Modern Capital Playbook.',
        files: [
            { name: 'Modern_Capital_Playbook_2026.pdf', type: 'pdf', date: '2026-01-25', version: '4.0', size: '5.2 MB' },
            { name: 'Active_Dealflow_Log_Q1.xlsx', type: 'xlsx', date: '2026-01-24', version: '1.5', size: '890 KB' }
        ]
    },
    {
        id: '03',
        name: '03_Performance_Track_Record',
        description: 'GIPS 2020 compliant composites and DPI-first reporting.',
        files: [
            { name: 'GIPS_2020_Performance_Composite.pdf', type: 'pdf', date: '2026-01-25', version: '1.0', size: '1.4 MB' },
            { name: 'Track_Record_Historical_2020_2025.xlsx', type: 'xlsx', date: '2026-01-20', version: '2.3', size: '3.1 MB' }
        ]
    },
    {
        id: '04',
        name: '04_Operational_Due_Diligence_Pack',
        description: 'Quarterly penetration tests and BC/DR plans.',
        files: [
            { name: 'Institutional_CRM_Schema_2026.csv', type: 'csv', date: '2026-01-25', version: '1.0', size: '12 KB' },
            { name: 'Operational_Guidelines_2026.md', type: 'md', date: '2026-01-25', version: '1.0', size: '8 KB' },
            { name: 'Pentest_Report_Q4_2025.pdf', type: 'pdf', date: '2026-01-05', version: 'Final', size: '1.9 MB' }
        ]
    },
    {
        id: '05',
        name: '05_Legal_and_Compliance',
        description: 'SFDR Article 8/9 Policy and ILPA Model NDA.',
        files: [
            { name: 'ILPA_Model_NDA_2026.md', type: 'md', date: '2026-01-25', version: '1.0', size: '15 KB' },
            { name: 'Marketing_Delegation_Memo_AIFMD_II.md', type: 'md', date: '2026-01-25', version: '1.0', size: '10 KB' },
            { name: 'ESG_Article_8_Compliance_Framework.md', type: 'md', date: '2026-01-25', version: '1.0', size: '22 KB' }
        ]
    },
    {
        id: '06',
        name: '06_Financials',
        description: '3–5 years of audited statements and ILPA 2.0 Fee Template.',
        files: [
            { name: 'Audited_Financial_Statement_2025.pdf', type: 'pdf', date: '2026-01-20', version: 'Final', size: '4.7 MB' },
            { name: 'ILPA_2.0_Fee_Template_v3.xlsx', type: 'xlsx', date: '2026-01-18', version: '3.0', size: '1.2 MB' }
        ]
    }
];

export const DataRoom: React.FC = () => {
    const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-light text-platinum mb-4 tracking-tight">
                        Institutional <span className="text-oldgold font-medium italic">Data Room</span>
                    </h1>
                    <p className="text-platinum/60 max-w-2xl text-lg font-light">
                        Secure investor portal for Roials Capital. Standardized 2026 ODD compliance and ILPA-grade artifact management.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Folders List */}
                    <div className="lg:col-span-1 space-y-4">
                        {dataRoomFolders.map((folder) => (
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
                                <h3 className="text-xl font-medium text-platinum mb-2">{folder.name.replace(/_/g, ' ').substring(3)}</h3>
                                <p className="text-sm text-platinum/40 font-light leading-relaxed">{folder.description}</p>
                            </button>
                        ))}
                    </div>

                    {/* Files View */}
                    <div className="lg:col-span-2">
                        {selectedFolder ? (
                            <div className="bg-obsidian/40 border border-platinum/10 rounded-2xl p-8 backdrop-blur-sm sticky top-32">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-platinum/10">
                                    <div>
                                        <h2 className="text-2xl font-medium text-platinum">{selectedFolder.name.replace(/_/g, ' ')}</h2>
                                        <p className="text-sm text-oldgold mt-1 uppercase tracking-widest">{selectedFolder.files.length} Institutional Artifacts</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {selectedFolder.files.map((file, idx) => (
                                        <div
                                            key={idx}
                                            className="group flex flex-wrap items-center justify-between p-4 rounded-xl bg-platinum/5 border border-transparent hover:border-oldgold/30 hover:bg-platinum/[0.07] transition-all duration-300"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-obsidian text-platinum/40 group-hover:text-oldgold transition-colors">
                                                    <FileTypeIcon type={file.type} />
                                                </div>
                                                <div>
                                                    <h4 className="text-platinum font-medium group-hover:text-oldgold transition-colors">{file.name}</h4>
                                                    <p className="text-xs text-platinum/30 mt-0.5">
                                                        v{file.version} • {file.date} • {file.size}
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-obsidian bg-platinum group-hover:bg-oldgold rounded-lg transition-all duration-300 mt-4 sm:mt-0">
                                                Download
                                            </button>
                                        </div>
                                    ))}
                                </div>
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
