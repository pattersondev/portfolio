import React from 'react';
import styles from './Home.module.css';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Hey, I'm Sam</h1>
            <h3>Software Engineer | Entrepreneur | Sports Enthusiast</h3>
            <div className={styles.description}>
                <span>I live in Arlington, VA and have a passion for all things software engineering. I attended
                    <span className={styles.keywords}> James Madison University </span>
                    where I studied <span className={styles.keywords}>Computer Science</span> and since then have been working as a software engineer
                    in the government contracting space.
                </span>
                <span>
                    In my free time I love learning new technologies, playing basketball, going golfing and spending time with my friends and family.
                </span>
                <span>
                    If I can be helpful or you'd like to chat please reach out! <br />
                    <span className={styles.keywords}>pattersonrsam@gmail.com</span>
                </span>
            </div>
        </div>
    );
}