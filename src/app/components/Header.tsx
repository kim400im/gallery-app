'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  const isActive = (path: string) => pathname === path

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          KUKJE GALLERY
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link 
            href="/exhibitions" 
            className={`${styles.navLink} ${isActive('/exhibitions') ? styles.active : ''}`}
          >
            Exhibitions
          </Link>
          <Link 
            href="/artists" 
            className={`${styles.navLink} ${isActive('/artists') ? styles.active : ''}`}
          >
            Artists
          </Link>
          <Link 
            href="/about" 
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
          >
            About
          </Link>
          <Link 
            href="/news" 
            className={`${styles.navLink} ${isActive('/news') ? styles.active : ''}`}
          >
            News
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className={styles.mobileMenuOverlay}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuContent}>
            <nav className={styles.mobileNav}>
              <Link 
                href="/exhibitions" 
                className={`${styles.mobileNavLink} ${isActive('/exhibitions') ? styles.mobileActive : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Exhibitions
              </Link>
              <Link 
                href="/artists" 
                className={`${styles.mobileNavLink} ${isActive('/artists') ? styles.mobileActive : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Artists
              </Link>
              <Link 
                href="/about" 
                className={`${styles.mobileNavLink} ${isActive('/about') ? styles.mobileActive : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/news" 
                className={`${styles.mobileNavLink} ${isActive('/news') ? styles.mobileActive : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/contact" 
                className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.mobileActive : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className={styles.mobileMenuFooter}>
              <p className={styles.mobileMenuAddress}>
                54 Samcheong-ro, Jongno-gu<br />
                Seoul 03049, Korea
              </p>
              <p className={styles.mobileMenuContact}>
                +82 2 735 8449
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header