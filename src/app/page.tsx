'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

interface Exhibition {
  title: string
  subtitle: string
  artists: string[]
  date: string
  description: string
  status: 'current' | 'upcoming' | 'past'
}

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const exhibitions: Exhibition[] = [
    {
      title: "A Faraway Today",
      subtitle: "아득한 오늘",
      artists: ["Kim Beom", "Im Youngzoo", "Cho Hyun Taek", "Choe Sooryeon", "Choi Yun"],
      date: "4 JUNE - 20 JULY 2025",
      description: "Contemporary reflections on distance and presence in modern art",
      status: 'current'
    },
    {
      title: "Silent Echoes",
      subtitle: "고요한 메아리",
      artists: ["Park Seobo", "Lee Ufan", "Ha Chong-Hyun"],
      date: "15 AUGUST - 30 SEPTEMBER 2025",
      description: "Monochrome expressions of Korean contemporary masters",
      status: 'upcoming'
    },
    {
      title: "Urban Fragments",
      subtitle: "도시의 파편들",
      artists: ["Bahc Yiso", "Kim Sooja", "Do Ho Suh"],
      date: "10 OCTOBER - 25 NOVEMBER 2025",
      description: "Exploring urban identity through conceptual installations",
      status: 'upcoming'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            KUKJE GALLERY
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="/exhibitions" className={styles.navLink}>
              Exhibitions
            </Link>
            <Link href="/artists" className={styles.navLink}>
              Artists
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/news" className={styles.navLink}>
              News
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></div>
          </button>

          {/* Mobile Menu */}
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.mobileMenuContent}>
              <nav className={styles.mobileNav}>
                <Link 
                  href="/exhibitions" 
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Exhibitions
                </Link>
                <Link 
                  href="/artists" 
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artists
                </Link>
                <Link 
                  href="/about" 
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/news" 
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  href="/contact" 
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.heroText}>
            <div className={styles.heroMeta}>
              <p className={styles.heroLabel}>Current Exhibition</p>
              <h1 className={styles.heroTitle}>
                A Faraway<br />Today
              </h1>
              <p className={styles.heroSubtitle}>아득한 오늘</p>
            </div>
            
            <div className={styles.heroDetails}>
              <p className={styles.heroDate}>June 4 – July 20, 2025</p>
              <div className={styles.heroArtists}>
                {exhibitions[0].artists.map((artist, index) => (
                  <p key={index} className={styles.heroArtist}>{artist}</p>
                ))}
              </div>
            </div>

            <div className={styles.heroButtons}>
              <Link href="/exhibitions" className={styles.btnPrimary}>
                View Exhibition
              </Link>
              <button className={styles.btnSecondary}>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.heroImage}>
            <div className={styles.heroImageMain}>
              <div className={styles.heroImageContent}>
                <div className={styles.heroImageShape}></div>
                <div className={styles.heroImageShapeSmall}></div>
                <div className={styles.heroImageShapeMedium}></div>
              </div>
              <div className={styles.heroImageOverlay}></div>
            </div>
            <div className={styles.heroImageDecoBottom}></div>
            <div className={styles.heroImageDecoTop}></div>
          </div>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className={styles.exhibitions}>
        <div className={styles.exhibitionsContent}>
          <div className={styles.exhibitionsHeader}>
            <h2 className={styles.sectionTitle}>Current & Upcoming</h2>
            <p className={styles.sectionSubtitle}>Discover our latest exhibitions</p>
          </div>

          <div className={styles.exhibitionsGrid}>
            {exhibitions.map((exhibition, index) => (
              <div key={index} className={styles.exhibitionCard}>
                <div className={styles.exhibitionImageContainer}>
                  <div className={styles.exhibitionImage}>
                    <div className={styles.exhibitionImageShape}></div>
                    <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gray-600 rounded-full opacity-30"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gray-400 rounded-full opacity-35"></div>
                  </div>
                </div>
                <div className={styles.exhibitionInfo}>
                  <div className={styles.exhibitionHeader}>
                    <h3 className={styles.exhibitionTitle}>{exhibition.title}</h3>
                    <span className={`${styles.exhibitionStatus} ${
                      exhibition.status === 'current' ? styles.statusCurrent :
                      exhibition.status === 'upcoming' ? styles.statusUpcoming :
                      styles.statusPast
                    }`}>
                      {exhibition.status}
                    </span>
                  </div>
                  <p className={styles.exhibitionSubtitle}>{exhibition.subtitle}</p>
                  <p className={styles.exhibitionDate}>{exhibition.date}</p>
                  <p className={styles.exhibitionDescription}>{exhibition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>About Kukje Gallery</h2>
            <div className={styles.aboutDescription}>
              <p>
                Founded in 1982, Kukje Gallery has been at the forefront of introducing contemporary art 
                to Korea and promoting Korean artists internationally.
              </p>
              <p>
                Our mission is to foster cultural exchange and dialogue through groundbreaking exhibitions 
                that challenge conventional boundaries in contemporary art.
              </p>
            </div>
            <Link href="/about" className={styles.aboutLink}>
              Read More
            </Link>
          </div>
          
          <div className={styles.aboutImage}>
            <div className={styles.aboutImageMain}>
              <div className={styles.aboutImageContent}>
                <div className={styles.aboutImageGrid}>
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`${styles.aboutImageGridItem} ${
                        i % 3 === 0 ? 'bg-gray-400' :
                        i % 3 === 1 ? 'bg-gray-300' : 'bg-gray-500'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerMain}>
              <h3 className={styles.footerTitle}>KUKJE GALLERY</h3>
              <div className={styles.footerAddress}>
                <div>
                  <p className={styles.footerLocation}>Hanok</p>
                  <p className={styles.footerContactInfo}>
                    54 Samcheong-ro, Jongno-gu<br />
                    Seoul 03049, Korea
                  </p>
                </div>
                <div>
                  <p>+82 2 735 8449</p>
                  <p>info@kukjegallery.com</p>
                </div>
              </div>
            </div>
            
            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>Gallery</h4>
              <div className={styles.footerLinks}>
                <Link href="/exhibitions" className={styles.footerLink}>Exhibitions</Link>
                <Link href="/artists" className={styles.footerLink}>Artists</Link>
                <Link href="/news" className={styles.footerLink}>News</Link>
                <Link href="/publications" className={styles.footerLink}>Publications</Link>
              </div>
            </div>
            
            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>Connect</h4>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>Instagram</a>
                <a href="#" className={styles.footerLink}>Facebook</a>
                <a href="#" className={styles.footerLink}>Newsletter</a>
                <Link href="/contact" className={styles.footerLink}>Contact</Link>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Kukje Gallery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage