import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Joshua Scurfield. I'm a guitarist, producer and songwriter. You can stay up to date with my flagship project Shockpowder at shockpowder.com, or stick around here and check out what services I offer as a guitarist and producer.</p>
      </section>
    </Layout>
  );
}