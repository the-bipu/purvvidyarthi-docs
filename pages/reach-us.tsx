import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import FormContact from '@/components/FormContact/FormContact';

const ReachUs = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="70x70" />
                <title>Reach Us | PurvVidyarthi Documentation</title>
                <meta name="description" content="Need help with PurvVidyarthi? Contact our support team for technical assistance, documentation feedback, or general inquiries about the alumni management platform." />
                <meta name="keywords" content="Contact PurvVidyarthi, Documentation Support, Technical Help, PurvVidyarthi Team, Alumni Portal Assistance, Get Help" />
                <meta name="author" content="PurvVidyarthi Team" />

                <meta property="og:title" content="Reach Us | PurvVidyarthi Documentation" />
                <meta property="og:description" content="Get in touch with the PurvVidyarthi documentation team for support, feedback, or questions about our alumni management platform." />
                <meta property="og:image" content="/metadata/og-purvvidyarthi.png" />
                <meta property="og:url" content="https://docs.purvvidyarthi.in/reach-us" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reach Us | PurvVidyarthi Documentation" />
                <meta name="twitter:description" content="Contact the PurvVidyarthi team for technical support, documentation help, or general inquiries." />
                <meta name="twitter:image" content="/metadata/og-purvvidyarthi.png" />
            </Head>

            <Navbar />

            <FormContact />

            <Footer />
        </div>
    )
}

export default ReachUs