'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last updated: December 1, 2025</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-purple max-w-none">
                    <h3>1. Introduction</h3>
                    <p>
                        SmartEval ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>

                    <h3>2. Information We Collect</h3>
                    <p>
                        We collect information that you provide directly to us, such as when you create an account, update your profile, post opportunities, or communicate with us. This may include:
                    </p>
                    <ul>
                        <li>Personal identification information (Name, email address, phone number, etc.)</li>
                        <li>Business information (Company name, sector, registration details)</li>
                        <li>Payment information (processed securely by our third-party payment processors)</li>
                    </ul>

                    <h3>3. How We Use Your Information</h3>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send you technical notices, updates, security alerts, and support messages</li>
                        <li>Respond to your comments, questions, and requests</li>
                        <li>Communicate with you about products, services, offers, and events</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                    </p>

                    <h3>5. Sharing of Information</h3>
                    <p>
                        We do not sell your personal information. We may share your information with:
                    </p>
                    <ul>
                        <li>Service providers who perform services on our behalf</li>
                        <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                        <li>Regulatory and law enforcement authorities, as required by law</li>
                    </ul>

                    <h3>6. Your Rights</h3>
                    <p>
                        Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data.
                    </p>

                    <h3>7. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@smarteval.com.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
