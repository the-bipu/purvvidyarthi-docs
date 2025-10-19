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
                <title>Reach Us | PurvVidyarthi - Alumni Management Portal</title>
                <meta name="description" content="Get in touch with the PurvVidyarthi team for support, partnerships, or queries. We're here to help you strengthen your alumni connections." />
                <meta name="keywords" content="Reach PurvVidyarthi, Contact Alumni Portal, Get in Touch, PurvVidyarthi Team, Alumni Management Help, School College Alumni Queries" />
                <meta name="author" content="PurvVidyarthi Team" />

                <meta property="og:title" content="Reach Us | PurvVidyarthi - Alumni Management Portal" />
                <meta property="og:description" content="Reach out to the PurvVidyarthi team for any questions, support, or collaboration opportunities. Let's build a better alumni network together." />
                <meta property="og:image" content="/metadata/og-purvvidyarthi.png" />
                <meta property="og:url" content="https://purvvidyarthi.in/contact" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reach Us | PurvVidyarthi - Alumni Management Portal" />
                <meta name="twitter:description" content="Need assistance? Contact the PurvVidyarthi team for support, inquiries, or collaborations." />
                <meta name="twitter:image" content="/metadata/og-purvvidyarthi.png" />
            </Head>

            <Navbar />

            <FormContact />

            <Footer />
        </div>
    )
}

export default ReachUs