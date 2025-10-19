import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React from 'react';

const FormContact = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 relative'>
            <div className='text-5xl text-black py-10 bold-charlie'>Get In Touch</div>
            <Image src='/faqs/cloud1.svg' alt='Cloud Illustration' width={212} height={150} className='absolute top-96 left-6' />
            <Image src='/faqs/cloud2.svg' alt='Cloud Illustration' width={212} height={150} className='absolute top-32 right-6' />

            <div className='md:w-8/12 w-11/12 max-w-3xl h-auto flex flex-col items-center justify-center'>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Full Name</Label>
                        <Input placeholder='John Doe' className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' />
                    </div>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Personal Email</Label>
                        <Input placeholder='you@gmail.com' className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' />
                    </div>
                </div>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Phone</Label>
                        <Input placeholder='(123) 456-7890' className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' />
                    </div>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Professional Email</Label>
                        <Input placeholder='you@company.com' className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' />
                    </div>
                </div>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Your College</Label>
                        <Input placeholder='Your College Name' className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' />
                    </div>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Your Position</Label>
                        <Input placeholder='Your Position' className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' />
                    </div>
                </div>
                <Textarea className='w-full h-32 mt-6 p-3 border-2 border-[#6f6f6f] bg-white rounded-lg text-lg placeholder:text-lg' placeholder='Your Message' />
                <Button className='mt-12 rounded-full bg-[#663399] hover:bg-[#77509e] border border-[#663399] text-lg h-10 w-full bold-charlie'>
                    Request a Demo
                </Button>
            </div>
        </div>
    )
}

export default FormContact