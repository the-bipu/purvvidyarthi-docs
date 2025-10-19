import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const Index = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="70x70" />
                <title>Documentation | PurvVidyarthi - Alumni Management Portal</title>
                <meta name="description" content="PurvVidyarthi is a comprehensive alumni management portal designed for colleges and schools. Build strong alumni networks, organize events, and stay connected with your institution's legacy." />
                <meta name="keywords" content="Alumni Management, PurvVidyarthi, College Alumni Portal, School Alumni Portal, Alumni Engagement, Alumni Events, Alumni Directory" />
                <meta name="author" content="PurvVidyarthi Team" />

                <meta property="og:title" content="Documentation | PurvVidyarthi - Alumni Management Portal" />
                <meta property="og:description" content="Empower your institution with PurvVidyarthi – the ultimate solution for alumni networking, event management, and long-term engagement." />
                <meta property="og:image" content="/metadata/og-purvvidyarthi.png" />
                <meta property="og:url" content="https://purvvidyarthi.in/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Documentation | PurvVidyarthi - Alumni Management Portal" />
                <meta name="twitter:description" content="PurvVidyarthi helps schools and colleges manage their alumni with ease. Connect, organize, and grow with our powerful platform." />
                <meta name="twitter:image" content="/metadata/og-purvvidyarthi.png" />
            </Head>

            <Navbar />

            <div className='w-full h-screen flex flex-col items-center justify-center text-4xl font-semibold bg-[#f3e7ff]'>
                We're currently working on the Documentation. Stay tuned!
            </div>

            <Footer />

        </div>
    )
}

export default Index