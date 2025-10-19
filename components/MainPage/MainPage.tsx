import { BackpackIcon, DesktopIcon, GlobeIcon, Link2Icon, LockClosedIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

interface Section {
    id: string;
    title: string;
    heading: string;
    description: string;
    content: string;
}

const sections: Section[] = [
    {
        id: 'getting-started',
        title: 'Getting started',
        heading: 'Welcome to Purvvidyarthi',
        description: 'Everything you\'ll need to know',
        content: 'Whether you\'re an alumni looking to reconnect, a student seeking guidance, or an institution managing alumni relations, Purvvidyarthi helps you navigate the platform effortlessly. Our centralized SaaS-based portal brings together alumni, students, and institutions in one powerful ecosystem. Let\'s get started on building stronger connections!'
    },
    {
        id: 'alumni-portal',
        title: 'Alumni Portal',
        heading: 'Centralized Alumni Portal',
        description: 'Your all-in-one alumni management system',
        content: 'Our SaaS-based, white-label system offers no-code customization and seamless integration on your institution\'s server or domain. The portal is designed to be user-friendly with modular architecture that grows with your needs. Customize themes, branding, and content without any technical expertise using our intuitive no-code editor.'
    },
    {
        id: 'placement-mentorship',
        title: 'Placement & Mentorship Hub',
        heading: 'Career Growth & Mentorship',
        description: 'Connect students with opportunities',
        content: 'A comprehensive platform where alumni can post jobs and internships, mentor students, share referrals, and host webinars. Provide career guidance, conduct mock interviews, and help students navigate their professional journey. This one-stop hub bridges the gap between academic learning and real-world career success.'
    },
    {
        id: 'engagement-networking',
        title: 'Engagement & Networking',
        heading: 'Stay Connected & Engaged',
        description: 'Build lasting relationships',
        content: 'Create regional and international chapters, organize reunions with integrated ticketing systems, host online meetings, and enable direct messaging. Launch group campaigns, conduct chapter elections, create polls, manage donation drives, and award recognition badges. Keep your alumni community actively connected and engaged with diverse networking opportunities.'
    },
    {
        id: 'ai-career-guidance',
        title: 'AI-Powered Career Guidance',
        heading: 'Smart Career Assistance',
        description: 'AI-driven personalized support',
        content: 'Get intelligent resume and profile advice, identify skill gaps with actionable suggestions, and receive personalized career recommendations. Compare profiles with industry standards, match with relevant jobs and internships using AI, predict career paths, and receive networking and event alerts. Our AI chatbot provides instant support and guidance 24/7.'
    },
    {
        id: 'blockchain',
        title: 'Blockchain Integration',
        heading: 'Secure & Transparent',
        description: 'Blockchain-powered trust',
        content: 'Leverage blockchain technology for secure donations and transparent fundraising campaigns. Maintain verified digital IDs for alumni, track contributions securely, issue digital certifications, and record participation immutably. Our blockchain integration ensures complete transparency and security in all transactions and records.'
    },
    {
        id: 'events-reunions',
        title: 'Events & Reunions',
        heading: 'Memorable Gatherings',
        description: 'Organize and manage events seamlessly',
        content: 'Plan and execute events with integrated ticketing, registration management, and attendee tracking. Create event galleries to showcase success stories, share videos, and collect testimonials. Whether it\'s annual reunions, networking meets, or special celebrations, manage everything from invitations to post-event engagement in one place.'
    },
    {
        id: 'fundraising',
        title: 'Fundraising & Donations',
        heading: 'Support Your Institution',
        description: 'Make giving back easy',
        content: 'Launch targeted fundraising campaigns, manage donations transparently, and track contributions in real-time. Recognize donors with badges and certificates, create donation tiers, and showcase impact stories. Our integrated payment gateway supports multiple payment methods, making it simple for alumni to contribute to their alma mater\'s growth.'
    },
    {
        id: 'chapters',
        title: 'Regional Chapters',
        heading: 'Global Alumni Network',
        description: 'Connect locally, impact globally',
        content: 'Establish regional and international chapters to create localized alumni communities. Conduct chapter elections, organize local events, and coordinate activities that resonate with members in specific geographic regions. Each chapter can operate autonomously while staying connected to the larger alumni network.'
    },
    {
        id: 'admin-portal',
        title: 'Admin Portal',
        heading: 'Powerful Admin Controls',
        description: 'Manage with ease',
        content: 'Multi-role access system for chairman, president, coordinators, and other administrators. Generate one-click NAAC reports with document export functionality. Monitor platform analytics, manage user permissions, moderate content, and configure platform settings. Automated workflows minimize manual intervention while maintaining complete control.'
    },
    {
        id: 'profile-management',
        title: 'Profile Management',
        heading: 'AI-Based Profile Creation',
        description: 'Smart profile building',
        content: 'Create comprehensive profiles with AI assistance that suggests relevant information and optimizations. Showcase your professional journey, achievements, skills, and contributions. Connect your LinkedIn, GitHub, and other professional accounts for a unified digital identity. Keep your profile updated with automatic syncing and smart recommendations.'
    },
    {
        id: 'communication',
        title: 'Communication Tools',
        heading: 'Stay In Touch',
        description: 'Seamless connectivity',
        content: 'Direct messaging between alumni and students, group discussions, announcement broadcasts, and email campaigns. Integrated with SMS, email, and push notification services to ensure important updates reach everyone. Host virtual meetings using integrated Zoom API and maintain conversation history for future reference.'
    },
    {
        id: 'gallery-stories',
        title: 'Gallery & Success Stories',
        heading: 'Celebrate Achievements',
        description: 'Share your journey',
        content: 'Create rich media galleries showcasing events, alumni achievements, and institutional milestones. Share video testimonials, success stories, and impact narratives. Highlight notable alumni contributions and inspire current students with real-world success examples. Our gallery system supports images, videos, and interactive content.'
    },
    {
        id: 'integration',
        title: 'Third-Party Integration',
        heading: 'Connect Your Tools',
        description: 'Seamless ecosystem integration',
        content: 'Integrate with LinkedIn API for professional data, Google API for calendar and authentication, GitHub API for technical profiles, Razorpay for payments, Twilio for SMS, Cloudinary for media management, and Resend for email services. Our platform supports easy integration with your existing institutional systems and third-party tools.'
    }
];

const ProductGuide: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('getting-started');

    const currentSection = sections.find(s => s.id === activeSection) || sections[0];

    return (
        <div className="w-10/12 flex pt-24 pb-10 min-h-screen bg-white">
            <aside className="w-72 border-r border-gray-200 pr-6">
                <nav className="space-y-1">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full text-left px-4 py-3 transition-colors cursor-pointer ${activeSection === section.id
                                ? 'bg-[#f4e8ff] text-[#663399] font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 px-12 max-w-5xl">
                <div className="space-y-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 bold-charlie">
                        {currentSection.heading}
                    </h1>

                    <div className="flex items-start gap-8">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                {currentSection.description}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {currentSection.content}
                            </p>
                        </div>

                        {activeSection === 'getting-started' && (
                            <div className="flex-shrink-0">
                                <div className="w-64 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white rounded-lg shadow-md transform rotate-6 flex items-center justify-center">
                                            <div className="space-y-2">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                                </div>
                                                <div className="w-20 h-16 bg-blue-500 rounded-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 w-12 h-16 bg-yellow-400 rounded"></div>
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {activeSection === 'getting-started' && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                What is Purvvidyarthi?
                            </h3>
                            <div className='flex flex-col'>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Purvvidyarthi is a cutting-edge digital platform for centralized alumni data management and engagement.
                                    It serves as the single source of truth for your entire institution, connecting alumni, students, and faculty
                                    in a thriving ecosystem that extends far beyond graduation.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center shadow flex-shrink-0">
                                            <BackpackIcon className='w-5 h-5 text-blue-600' />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Career Support</h4>
                                            <p className="text-gray-600 text-sm">AI-powered guidance, job matching, and mentorship opportunities</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center shadow flex-shrink-0">
                                            <Link2Icon className='w-5 h-5 text-green-600' />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Blockchain Security</h4>
                                            <p className="text-gray-600 text-sm">Transparent donations and verified digital credentials</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center shadow flex-shrink-0">
                                            <GlobeIcon className='w-5 h-5 text-purple-600' />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Global Network</h4>
                                            <p className="text-gray-600 text-sm">Regional chapters and international alumni connections</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center shadow flex-shrink-0">
                                            <DesktopIcon className='w-5 h-5 text-orange-600' />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">No-Code Platform</h4>
                                            <p className="text-gray-600 text-sm">Easy customization without technical expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
};

export default ProductGuide;