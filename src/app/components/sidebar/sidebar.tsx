'use client'
import React from 'react';
import { FaHome, FaFileAlt, FaProjectDiagram, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiBooks } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import profilePic from '../../assets/prof_pic-transformed.jpeg'
import styles from './Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profilePicWrapper}>
                <img src={profilePic.src} alt="" className={styles.profilePic} />
            </div>
            <div className={styles.menuItem}>
                <Link href={'/'}>
                    <FaHome size={20} className={styles.icon} />
                    <span className={styles.label}>Home</span>
                </Link>
            </div>
            <div className={styles.menuItem}>
                <Link href={'/resume'}>
                    <CgProfile size={20} className={styles.icon} />
                    <span className={styles.label}>Resume</span>
                </Link>
            </div>

            <div className={styles.socialIcons}>
                <FaInstagram size={20} className={styles.socialIcon} onClick={() => window.open('https://instagram.com/sam.patt')} />
                <FaGithub size={20} className={styles.socialIcon} onClick={() => window.open('https://github.com/pattersondev')} />
                <FaLinkedin size={20} className={styles.socialIcon} onClick={() => window.open('https://www.linkedin.com/in/pattersonrsam/')} />
            </div>
        </div>
    );
}