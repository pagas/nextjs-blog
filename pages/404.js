import styles from "../styles/404.module.scss"
import Link from "next/link";

export default function customer404() {
    return <div id={styles.main} >
        <div className={styles.fof}>
            <h1>404 - Page Not Found</h1>
            <div>
                <Link href="/">
                    <a>Go Home</a>
                </Link>
            </div>
        </div>


        <style global jsx>{`
        * {
            transition: all 0.6s;
        }
        
        body {
            font-family: 'Lato', sans-serif;
            color: #888;
            margin: 0; 
        }
      `}</style>


    </div>;
}
