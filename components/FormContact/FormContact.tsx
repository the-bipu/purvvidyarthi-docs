import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

const FormContact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            setSubmitting(true);
            setSubmitError(false);
            const response = await fetch('/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setSubmitSuccess(true);
                reset();
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                setSubmitError(true);
                console.error('Failed to submit form');
            }
        } catch (error) {
            setSubmitError(true);
            console.error('Error submitting form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 relative'>
            <div className='text-5xl text-black py-10 bold-charlie'>Get In Touch</div>
            <Image src='/contact/cloud1.svg' alt='Cloud Illustration' width={212} height={150} className='absolute top-96 left-6' />
            <Image src='/contact/cloud2.svg' alt='Cloud Illustration' width={212} height={150} className='absolute top-32 right-6' />

            <form onSubmit={handleSubmit(onSubmit)} className='md:w-8/12 w-11/12 max-w-3xl h-auto flex flex-col items-center justify-center'>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Full Name *</Label>
                        <Input 
                            {...register('fullName', { required: 'Full name is required' })}
                            placeholder='John Doe' 
                            className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' 
                        />
                        {errors.fullName && <span className='text-red-500 text-sm pl-5 mt-1'>{errors.fullName.message as string}</span>}
                    </div>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Personal Email *</Label>
                        <Input 
                            {...register('personalEmail', { 
                                required: 'Personal email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder='you@gmail.com' 
                            type='email'
                            className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' 
                        />
                        {errors.personalEmail && <span className='text-red-500 text-sm pl-5 mt-1'>{errors.personalEmail.message as string}</span>}
                    </div>
                </div>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Phone *</Label>
                        <Input 
                            {...register('phone', { required: 'Phone number is required' })}
                            placeholder='(123) 456-7890' 
                            type='tel'
                            className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' 
                        />
                        {errors.phone && <span className='text-red-500 text-sm pl-5 mt-1'>{errors.phone.message as string}</span>}
                    </div>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Professional Email</Label>
                        <Input 
                            {...register('professionalEmail', {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder='you@company.com' 
                            type='email'
                            className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' 
                        />
                        {errors.professionalEmail && <span className='text-red-500 text-sm pl-5 mt-1'>{errors.professionalEmail.message as string}</span>}
                    </div>
                </div>
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Your College *</Label>
                        <Input 
                            {...register('college', { required: 'College name is required' })}
                            placeholder='Your College Name' 
                            className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' 
                        />
                        {errors.college && <span className='text-red-500 text-sm pl-5 mt-1'>{errors.college.message as string}</span>}
                    </div>
                    <div className='w-full h-auto flex flex-col items-start justify-start'>
                        <Label className='text-base bold-charlie mb-1 pl-5'>Your Position *</Label>
                        <Input 
                            {...register('position', { required: 'Position is required' })}
                            placeholder='Your Position' 
                            className='indent-2 border-2 border-[#6f6f6f] bg-white rounded-full h-11 text-lg placeholder:text-lg' 
                        />
                        {errors.position && <span className='text-red-500 text-sm pl-5 mt-1'>{errors.position.message as string}</span>}
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col items-start justify-start mt-4'>
                    <Label className='text-base bold-charlie mb-1 pl-5'>Your Message</Label>
                    <Textarea 
                        {...register('message')}
                        className='w-full h-32 p-3 border-2 border-[#6f6f6f] bg-white rounded-lg text-lg placeholder:text-lg' 
                        placeholder='Tell us more about your requirements...' 
                    />
                </div>
                <Button 
                    type='submit'
                    disabled={submitting}
                    className='mt-12 rounded-full bg-[#663399] hover:bg-[#77509e] border border-[#663399] text-lg h-10 w-full bold-charlie disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {submitting ? 'Submitting...' : 'Request a Demo'}
                </Button>
                {submitSuccess && (
                    <div className="mt-4 p-4 bg-[#f3ebf9] border border-[#d4c5e0] rounded-lg text-[#663399] text-center w-full">
                        ✓ Demo request submitted successfully! We'll get back to you soon.
                    </div>
                )}
                {submitError && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center w-full">
                        ✗ Failed to submit request. Please try again.
                    </div>
                )}
            </form>
        </div>
    )
}

export default FormContact