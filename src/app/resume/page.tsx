'use client';
import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { RiGraduationCapLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import styles from './page.module.css';
import jmulogo from '../assets/jmulogo.svg';

export default function HomePage() {
    return (
        <div className={styles.main}>
            <Sidebar />

            <div className={styles.container}>
                <h1 className={styles.header}> Resume </h1>
                <h3>Software Engineer | Entrepreneur | Sports Enthusiast</h3>

                <div className={styles.education}>
                    <h3>Education</h3>
                    <div className={styles.test}>
                        <div>
                            <div className={styles.menuItem}>
                                <RiGraduationCapLine size={20} className={styles.icon} style={{ paddingRight: '1rem' }} />
                                <span style={{ color: 'white' }}>Computer Science</span>
                            </div>
                            <span style={{ color: 'lightgray', paddingLeft: '2.2rem', paddingTop: '2rem' }}>James Madison University, 2022</span>
                        </div>
                        <img src={jmulogo.src} alt="" className={styles.jmuLogo} />
                    </div>
                </div>

                <div style={{ paddingTop: '6rem' }}>
                    <h3>Professional Career</h3>
                    <div style={{ paddingTop: '2rem' }}>
                        <div className={styles.menuItem}>
                            <FaComputer size={20} className={styles.icon} style={{ paddingRight: '1rem' }} />
                            <span style={{ color: 'white' }}>Software Engineer</span>
                        </div>
                        <span style={{ color: 'lightgray', paddingLeft: '2.2rem', paddingTop: '2rem' }}>Sona Networks, Jan 2024 - Present</span>
                    </div>
                    <div style={{ paddingTop: '2rem' }}>
                        <div className={styles.menuItem}>
                            <FaComputer size={20} className={styles.icon} style={{ paddingRight: '1rem' }} />
                            <span style={{ color: 'white' }}>Full Stack Software Engineer</span>
                        </div>
                        <span style={{ color: 'lightgray', paddingLeft: '2.2rem', paddingTop: '2rem' }}>The Swift Group, Oct 2022 - Dec 2023</span>
                    </div>
                    <div style={{ paddingTop: '2rem' }}>
                        <div className={styles.menuItem}>
                            <FaComputer size={20} className={styles.icon} style={{ paddingRight: '1rem' }} />
                            <span style={{ color: 'white' }}>Software Engineer Intern</span>
                        </div>
                        <span style={{ color: 'lightgray', paddingLeft: '2.2rem', paddingTop: '2rem' }}>Diameter Health, May 2022 - Aug 2022</span>
                    </div>
                    <div style={{ paddingTop: '2rem' }}>
                        <div className={styles.menuItem}>
                            <FaComputer size={20} className={styles.icon} style={{ paddingRight: '1rem' }} />
                            <span style={{ color: 'white' }}>Mobile Software Engineer</span>
                        </div>
                        <span style={{ color: 'lightgray', paddingLeft: '2.2rem', paddingTop: '2rem' }}>Kickback Inc, Jan 2022 - May 2022</span>
                    </div>
                    <div style={{ paddingTop: '2rem' }}>
                        <div className={styles.menuItem}>
                            <FaComputer size={20} className={styles.icon} style={{ paddingRight: '1rem' }} />
                            <span style={{ color: 'white' }}>Founder</span>
                        </div>
                        <span style={{ color: 'lightgray', paddingLeft: '2.2rem', paddingTop: '2rem' }}>Purpl Apps, June 2020 - March 2021</span>
                    </div>
                </div>
            </div>
        </div>

    );
}