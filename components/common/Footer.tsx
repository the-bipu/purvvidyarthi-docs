import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='w-full h-auto bg-white flex flex-col items-center justify-center md:py-8 py-0'>
            <div className='md:w-10/12 w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pt-6 md:pb-16 pb-8 md:px-10 px-4 md:mb-8 mb-0 bg-[#f8f8f8] md:rounded-b-3xl rounded-none'>

                <div className='lg:col-span-1 md:col-span-2 col-span-1 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-1 text-[22px]'>
                        <Link href="/">
                            <Image src="/logo/purvvidyarthi-long.svg" alt="logo" width={180} height={80} className='w-48 h-auto' priority={true} />
                        </Link>
                    </div>
                    <div className='text-[#000]'>
                        <div className='text-xl font-medium mb-4'>
                            Chat with us<br />
                            <span className='text-[#663399] text-xl font-bold'>+91 70048-17946</span>
                        </div>
                        <div className='text-base font-medium'>
                            Startupmed Marketing Pvt. Ltd.<br />
                            E-585, Jagjeet Nagar<br />
                            Shahdara, Delhi - 110053<br />
                            contact@internpluss.com <br />
                        </div>
                    </div>
                </div>

                {/* For Candidates */}
                <div className='flex flex-col gap-2 items-start justify-start w-auto text-base text-[#4c4c4c]'>
                    <p className='mb-2 text-[#000] text-[1rem] font-semibold'>For Candidates</p>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Browse Internships</a>
                    <a href='/' className='hover:text-[#663399] transition-colors'>Browse Category</a>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Candidate Dashboard</a>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Internship Alert</a>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>My Bookmarks</a>
                </div>

                {/* For Employers */}
                <div className='flex flex-col gap-2 items-start justify-start w-auto text-base text-[#4c4c4c]'>
                    <p className='mb-2 text-[#000] text-[1rem] font-semibold'>For Employers</p>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Browse Companies</a>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Employers Dashboard</a>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Submit Internships</a>
                    <a href='/internships' className='hover:text-[#663399] transition-colors'>Internship Packages</a>
                    <a href='/contact' className='hover:text-[#663399] transition-colors'>Report Problem</a>
                </div>

                {/* Company & Resources (Combined) */}
                <div className='flex flex-col gap-2 items-start justify-start w-auto text-base text-[#4c4c4c]'>
                    <p className='mb-2 text-[#000] text-[1rem] font-semibold'>Company & Resources</p>
                    <a href='/contact' className='hover:text-[#663399] transition-colors'>Contact Us</a>
                    <a href='/company' className='hover:text-[#663399] transition-colors'>About Company</a>
                    <a href='/internpluss-campus-connect' className='hover:text-[#663399] transition-colors'>Our Programs</a>
                    <a href='/blogs' className='hover:text-[#663399] transition-colors'>Blogs</a>
                    <a href='/faqs' className='hover:text-[#663399] transition-colors'>FAQs</a>
                    <a href='/terms' className='hover:text-[#663399] transition-colors'>Terms of Use</a>
                    <a href='/privacy' className='hover:text-[#663399] transition-colors'>Privacy Policy</a>
                </div>
            </div>

        </div>
    )
}

export default Footer