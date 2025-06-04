'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Main Gallery Info */}
          <div className={styles.footerMain}>
            <h3 className={styles.footerTitle}>KUKJE GALLERY</h3>
            <div className={styles.footerAddresses}>
              {/* K1 Main Gallery */}
              <div className={styles.addressSection}>
                <h4 className={styles.locationTitle}>K1 - Main Gallery</h4>
                <p className={styles.address}>
                  54 Samcheong-ro, Jongno-gu<br />
                  Seoul 03049, Korea
                </p>
              </div>
              
              {/* K2 Hanok Space */}
              <div className={styles.addressSection}>
                <h4 className={styles.locationTitle}>K2 - Hanok Space</h4>
                <p className={styles.address}>
                  40 Samcheong-ro, Jongno-gu<br />
                  Seoul 03049, Korea
                </p>
              </div>
              
              {/* Contact Info */}
              <div className={styles.contactSection}>
                <p className={styles.contact}>
                  <strong>Tel:</strong> +82 2 735 8449<br />
                  <strong>Email:</strong> info@kukjegallery.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Gallery Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Gallery</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/exhibitions" className={styles.footerLink}>
                  Current Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/exhibitions?filter=upcoming" className={styles.footerLink}>
                  Upcoming Shows
                </Link>
              </li>
              <li>
                <Link href="/artists" className={styles.footerLink}>
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/news" className={styles.footerLink}>
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/publications" className={styles.footerLink}>
                  Publications
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Visit Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Visit</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/visit" className={styles.footerLink}>
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/directions" className={styles.footerLink}>
                  Directions
                </Link>
              </li>
              <li>
                <Link href="/press" className={styles.footerLink}>
                  Press Inquiries
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <a 
                  href="https://instagram.com/kukjegallery" 
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/kukjegallery" 
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/kukjegallery" 
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <Link href="/newsletter" className={styles.footerLink}>
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.footerLink}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} Kukje Gallery. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.legalLink}>
                Terms of Use
              </Link>
              <Link href="/accessibility" className={styles.legalLink}>
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer