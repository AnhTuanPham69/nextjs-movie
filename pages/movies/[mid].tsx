import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import DetailMovie from '../../components/DetailMovie';
import Header from '../../components/Header';

function movie() {
    return (
        <div className="relative h-screen flex-col bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
            <Head>
                <title>Home - Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <section className="md:space-y-50">
                    <DetailMovie />
                </section>
            </main>
        </div>
    );
}

export default movie;
