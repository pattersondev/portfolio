import React from 'react';
import { FaHome, FaFileAlt, FaProjectDiagram, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiBooks } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import profilePic from '../../assets/prof_pic-transformed.jpeg'
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profilePicWrapper}>
                <img src={profilePic.src} alt="" className={styles.profilePic} />
            </div>
            <div className={styles.menuItem}>
                <FaHome size={20} className={styles.icon} />
                <span className={styles.label}>Home</span>
            </div>
            <div className={styles.menuItem}>
                <CgProfile size={20} className={styles.icon} />
                <span className={styles.label}>Resume</span>
            </div>
            <div className={styles.menuItem}>
                <PiBooks size={20} className={styles.icon} />
                <span className={styles.label}>Projects</span>
            </div>

            <div className={styles.socialIcons}>
                <FaInstagram size={20} className={styles.socialIcon} />
                <FaGithub size={20} className={styles.socialIcon} />
                <FaLinkedin size={20} className={styles.socialIcon} />
            </div>
        </div>
    );
}