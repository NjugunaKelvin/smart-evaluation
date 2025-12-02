'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-600">Last updated: December 1, 2025</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-purple max-w-none">
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By accessing or using the SmartEval platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h3>2. Use License</h3>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on SmartEval's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>

                    <h3>3. User Accounts</h3>
                    <p>
                        To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                    </p>

                    <h3>4. Opportunity Postings</h3>
                    <p>
                        Users posting opportunities warrant that the information provided is accurate, legal, and does not violate any third-party rights. SmartEval reserves the right to remove any content that violates these terms.
                    </p>

                    <h3>5. Fees and Payments</h3>
                    <p>
                        Some services on the platform may require payment of fees. You agree to pay all applicable fees in connection with your use of such services. All fees are non-refundable unless otherwise stated.
                    </p>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                        In no event shall SmartEval or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SmartEval's website.
                    </p>

                    <h3>7. Governing Law</h3>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>

                    <h3>8. Changes to Terms</h3>
                    <p>
                        SmartEval reserves the right to revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
