'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GlossaryPage() {
    const terms = [
        { term: 'Bid Bond', definition: 'A debt secured by a bidder for the purpose of providing a guarantee that the successful bidder will enter into the contract.' },
        { term: 'Compliance', definition: 'Adherence to laws, regulations, guidelines, and specifications relevant to the business.' },
        { term: 'Contract', definition: 'A written or spoken agreement, especially one concerning employment, sales, or tenancy, that is intended to be enforceable by law.' },
        { term: 'Due Diligence', definition: 'Reasonable steps taken by a person in order to satisfy a legal requirement, especially in buying or selling something.' },
        { term: 'Evaluation Criteria', definition: 'The standards by which a tender submission is judged.' },
        { term: 'Expression of Interest (EOI)', definition: 'A screening process used by an organization to shortlist potential suppliers before seeking detailed bids.' },
        { term: 'Grant', definition: 'A sum of money given by a government or other organization for a particular purpose.' },
        { term: 'Procurement', definition: 'The action of obtaining or procuring something.' },
        { term: 'Proposal', definition: 'A plan or suggestion, especially a formal or written one, put forward for consideration by others.' },
        { term: 'RFP (Request for Proposal)', definition: 'A business document that announces and provides details about a project, as well as solicits bids from contractors who will help complete the project.' },
        { term: 'RFQ (Request for Quotation)', definition: 'A standard business process whose purpose is to invite suppliers into a bidding process to bid on specific products or services.' },
        { term: 'Tender', definition: 'An invitation to bid for a project or accept a formal offer such as a takeover bid.' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-[#3e0369] py-20 text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Industry Glossary</h1>
                    <p className="text-purple-200 text-lg">
                        Common terms and definitions used in the world of procurement and business opportunities.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {terms.map((item, index) => (
                        <div key={index} className="p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                            <h3 className="text-lg font-bold text-purple-700 mb-2">{item.term}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
