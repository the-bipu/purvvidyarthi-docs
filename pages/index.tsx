import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ProductGuide from '@/components/MainPage/MainPage';

const Index = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="70x70" />
                <title>Documentation | PurvVidyarthi - Alumni Management Portal</title>
                <meta name="description" content="Complete documentation for PurvVidyarthi - Learn how to set up, manage, and optimize your alumni portal. Comprehensive guides, API references, and tutorials." />
                <meta name="keywords" content="PurvVidyarthi Documentation, Alumni Portal Guides, API Documentation, Setup Tutorials, Alumni Management System Docs, Integration Guides" />
                <meta name="author" content="PurvVidyarthi Team" />

                <meta property="og:title" content="Documentation | PurvVidyarthi - Alumni Management Portal" />
                <meta property="og:description" content="Access comprehensive documentation for PurvVidyarthi. Step-by-step guides, API references, and best practices for managing your alumni network." />
                <meta property="og:image" content="/metadata/og-purvvidyarthi.png" />
                <meta property="og:url" content="https://docs.purvvidyarthi.in" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Documentation | PurvVidyarthi - Alumni Management Portal" />
                <meta name="twitter:description" content="Everything you need to know about PurvVidyarthi. Detailed guides, tutorials, and API documentation." />
                <meta name="twitter:image" content="/metadata/og-purvvidyarthi.png" />
            </Head>

            <Navbar />

            <ProductGuide />

            <Footer />

        </div>
    )
}

export default Index