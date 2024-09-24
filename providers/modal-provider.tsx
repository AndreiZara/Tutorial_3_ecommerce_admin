"use client";

import { useEffect, useState } from 'react';  //global import

import { StoreModal } from '@/components/modals/store-modal';  //local import

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
};