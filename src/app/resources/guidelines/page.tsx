'use client';

export default function ApplicationGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Application Guidelines</h1>
          <p className="text-xl text-purple-100">
            Expert strategies to increase your chances of winning tenders, grants, and contracts
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <p className="text-gray-600 leading-relaxed">
            Applying for opportunities requires careful preparation and attention to detail.
            This guide will walk you through proven strategies to create winning applications.
          </p>
        </div>

        {/* Strategy 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Read Requirements Thoroughly</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Before starting your application, carefully review all eligibility criteria,
                submission requirements, and evaluation criteria. Create a checklist to ensure
                you don&apos;t miss any requirements.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-purple-900 mb-2">Pro Tip:</p>
                <p className="text-sm text-purple-700">
                  Highlight key requirements in the opportunity document and address each one
                  explicitly in your application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Tailor Your Proposal</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Never use a generic template. Customize your proposal to align with the specific
                goals, values, and requirements of each opportunity. Research the organization
                and reference their mission in your application.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Address the organization by name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Reference specific goals from their description</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Explain how you align with their values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategy 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Demonstrate Impact</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Evaluators want to see tangible results. Use specific metrics, case studies,
                and examples to demonstrate your track record and potential impact.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-900 mb-2">Example:</p>
                <p className="text-sm text-gray-600">
                  Instead of: &quot;We improve community health&quot;<br />
                  Say: &quot;Our programs have reduced disease rates by 40% and served 10,000+
                  community members in the past 2 years&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy 4 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Submit Early</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Don&apos;t wait until the last minute. Submit your application at least 48 hours
                before the deadline to avoid technical issues and demonstrate professionalism.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy 5 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Proofread & Review</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Errors damage credibility. Have at least one other person review your application
                before submission. Check for grammar, formatting, and completeness.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-red-900 mb-2">Common Mistakes to Avoid:</p>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Spelling errors in organization names</li>
                  <li>• Missing attachments or documents</li>
                  <li>• Incorrect contact information</li>
                  <li>• Generic, copy-pasted content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-purple-100 mb-6">
            Browse available opportunities and start your winning application today
          </p>
          <a
            href="/opportunities"
            className="inline-block px-8 py-4 bg-white text-purple-700 rounded-lg font-bold hover:bg-purple-50 transition"
          >
            View Opportunities
          </a>
        </div>
      </div>
    </div>
  );
}