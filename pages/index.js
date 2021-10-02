import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from "next/link";
import {getSortedPostsData} from "../lib/posts";
import {useState} from "react";

export default function Home({allPostsData}) {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');

    const changeText = (event) => {
        setText(event.target.value);
    }

    const changeText2 = (event) => {
        setText2(event.target.value);
    }

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <input type="text" onChange={changeText} value={text}/>
            <input type="text" onChange={changeText2} value={text2}/>

            Output:: {text}
            output2:: {text2}
            <section className={utilStyles.headingMd}>
                <p>Hi my name is Paulius Gaida. I am software engineer. Mainly focusing on web development. Back-end
                    technologies node.js, PHP.
                    Front-end technologies react, angular, vue.js.
                    SASS, TypeScript
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <Link href="/posts/first-post">
                <a>First Post</a>
            </Link>


            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br/>
                            {id}
                            <br/>
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
