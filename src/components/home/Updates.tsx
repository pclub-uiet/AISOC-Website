'use client'
import React, { useState } from 'react';
import { BellRing, Mail, CheckIcon, ChevronRightIcon } from 'lucide-react';
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { FlickeringGrid } from '@/components/ui/flickering-grid';

export const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            console.log(email);
        }
    };

    return (
        <div className='relative flex justify-center items-center bg-orange mt-20 px-2 py-20'>
            <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={4}
                gridGap={6}
                color="white"
                maxOpacity={0.5}
                flickerChance={0.5}
            />
            <div className='z-50 bg-white p-5 rounded-lg max-w-96 overflow-hidden'>
                <div
                    key="form"
                    className='flex flex-col justify-center items-center max-w-xl h-full'
                >
                    <div className='flex items-center gap-4 font-grotesk font-bold text-orange text-2xl'>
                        Subscribe
                        <BellRing />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 mt-10'>
                        <span className='font-semibold'>
                            Stay in the loop with us
                        </span>
                        <span className='text-gray-600 text-sm text-center'>
                            Never miss an update from us!
                            Get notified about important dates, project announcements, and many more straight to your inbox.
                        </span>
                    </div>
                    <div className="flex justify-center items-center mt-5 w-full">
                        <div className='relative flex items-center gap-4 bg-white px-4 border border-gray-300 rounded-full w-full h-10'>
                            <Mail className='text-gray-500' />
                            <input
                                type="email"
                                name="EmailInput"
                                id="EmailInput"
                                placeholder="Enter email"
                                className='flex-grow bg-transparent py-2 rounded-full outline-none text-gray-700 text-sm placeholder-gray-500'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <AnimatedSubscribeButton className="w-full" onClick={handleSubscribe}>
                        <span className="group inline-flex items-center">
                            Subscribe
                            <ChevronRightIcon className="size-4 transition-transform group-hover:translate-x-1 duration-300" />
                        </span>
                        <span className="group inline-flex items-center">
                            <CheckIcon className="mr-2 size-4" />
                            Subscribed
                        </span>
                    </AnimatedSubscribeButton>
                </div>
            </div>
        </div>
    );
}