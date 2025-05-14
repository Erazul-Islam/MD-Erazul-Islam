/* eslint-disable prettier/prettier */

"use client"

import React from 'react';

import ContactComponent from '@/components/ui/contact/Contact';
import FloatingText from '@/components/gsap/floating-text';

const Contact = () => {
    return (
        <div className='mt-12'>
            <FloatingText className='font-serif text-4xl text-pink-800 text-center' text='Contact' />
            <ContactComponent/>
        </div>
    );
};

export default Contact;