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

                <div className="flex flex-col gap-3">
                    <h4 className="text-gray-900 text-lg font-semibold mb-2">For Alumni</h4>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Browse Jobs</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Find Mentorship</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Alumni Directory</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Events & Reunions</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Regional Chapters</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Donation Portal</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Success Stories</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-gray-900 text-lg font-semibold mb-2">For Administrators</h4>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Admin Dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Manage Alumni</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Event Management</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">NAAC Reports</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Analytics & Insights</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Campaign Management</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">User Permissions</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-gray-900 text-lg font-semibold mb-2">Company & Resources</h4>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">About Us</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Product Guide</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Case Studies</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Blog</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Help Center</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Contact Us</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Terms of Service</a>
                    <a href="#" className="text-gray-600 hover:text-[#663399] transition-colors text-base">Privacy Policy</a>
                </div>
            </div>

        </div>
    )
}

export default Footer