/* eslint-disable prettier/prettier */

"use client"

import React from 'react';

import ContactComponent from '@/components/ui/contact/Contact';

const Contact = () => {
    return (
        <div className='mt-12'>
            <h1 className='font-serif text-4xl text-pink-800 text-center'>Contact</h1>
            <ContactComponent/>
        </div>
    );
};

export default Contact;