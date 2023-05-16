import Head from 'next/head';

<Head>
    <title>Joshua Scurfield</title>
</Head>

import Link from 'next/link';

import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

}