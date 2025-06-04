'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import styles from './page.module.css'
import Footer from '../components/Footer'

const AboutPage = () => {
  const historyTimeline = [
    {
      year: '1982',
      title: 'Gallery Foundation',
      description: 'Kukje Gallery was founded in Seoul, establishing itself as a pioneer in contemporary art.'
    },
    {
      year: '1989',
      title: 'International Expansion',
      description: 'Began collaborating with international artists and galleries, introducing Korean art globally.'
    },
    {
      year: '1995',
      title: 'Hanok Space Opening',
      description: 'Opened our iconic Hanok space in Samcheong-dong, blending traditional architecture with contemporary art.'
    },
    {
      year: '2003',
      title: 'Tina Kim Gallery NYC',
      description: 'Launched sister gallery in New York, strengthening our international presence.'
    },
    {
      year: '2015',
      title: 'K3 Space Launch',
      description: 'Opened K3, our third exhibition space, expanding our capacity for larger installations.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Embraced digital platforms and virtual exhibitions, adapting to new ways of experiencing art.'
    }
  ]

  const team = [
    {
      name: 'Lee Hyun-sook',
      position: 'Director & Founder',
      description: 'Visionary leader who has shaped the contemporary art scene in Korea for over four decades.'
    },
    {
      name: 'Kim Tina',
      position: 'International Director',
      description: 'Oversees international relations and manages our New York operations.'
    },
    {
      name: 'Park Jae-min',
      position: 'Chief Curator',
      description: 'Leads curatorial vision and develops innovative exhibition concepts.'
    },
    {
      name: 'Choi Mi-young',
      position: 'Art Advisor',
      description: 'Provides expertise in contemporary art trends and artist development.'
    }
  ]

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>About Kukje Gallery</h1>
            <p className={styles.heroSubtitle}>
              For over four decades, we have been dedicated to fostering dialogue between 
              Korean and international contemporary art, creating a bridge that connects 
              diverse cultural perspectives.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageMain}>
              <div className={styles.heroImageContent}>
                <div className={styles.heroImageShape}></div>
                <div className={styles.heroImageShapeSmall}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <div className={styles.missionDescription}>
                <p>
                  Kukje Gallery is committed to presenting the most compelling contemporary art 
                  from Korea and around the world. We believe in the power of art to transcend 
                  cultural boundaries and create meaningful connections between artists, 
                  collectors, and the public.
                </p>
                <p>
                  Through our carefully curated exhibitions, we aim to challenge conventional 
                  thinking, inspire new perspectives, and contribute to the global conversation 
                  about contemporary art and culture.
                </p>
              </div>
            </div>
            <div className={styles.missionStats}>
              <div className={styles.stat}>
                <h3 className={styles.statNumber}>40+</h3>
                <p className={styles.statLabel}>Years of Excellence</p>
              </div>
              <div className={styles.stat}>
                <h3 className={styles.statNumber}>500+</h3>
                <p className={styles.statLabel}>Exhibitions Organized</p>
              </div>
              <div className={styles.stat}>
                <h3 className={styles.statNumber}>200+</h3>
                <p className={styles.statLabel}>Represented Artists</p>
              </div>
              <div className={styles.stat}>
                <h3 className={styles.statNumber}>3</h3>
                <p className={styles.statLabel}>Gallery Spaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className={styles.history}>
        <div className={styles.historyContent}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.timeline}>
            {historyTimeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.teamContent}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <div className={styles.memberImagePlaceholder}></div>
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Spaces */}
      <section className={styles.spaces}>
        <div className={styles.spacesContent}>
          <h2 className={styles.sectionTitle}>Gallery Spaces</h2>
          <div className={styles.spacesGrid}>
            <div className={styles.spaceCard}>
              <div className={styles.spaceImage}>
                <div className={styles.spaceImagePlaceholder}></div>
              </div>
              <div className={styles.spaceInfo}>
                <h3 className={styles.spaceTitle}>K1 - Main Gallery</h3>
                <p className={styles.spaceDescription}>
                  Our flagship space featuring major contemporary art exhibitions 
                  and installations by renowned international and Korean artists.
                </p>
                <p className={styles.spaceAddress}>54 Samcheong-ro, Jongno-gu, Seoul</p>
              </div>
            </div>
            
            <div className={styles.spaceCard}>
              <div className={styles.spaceImage}>
                <div className={styles.spaceImagePlaceholder}></div>
              </div>
              <div className={styles.spaceInfo}>
                <h3 className={styles.spaceTitle}>K2 - Hanok Space</h3>
                <p className={styles.spaceDescription}>
                  A traditional Korean hanok converted into a contemporary gallery space, 
                  offering an intimate setting for smaller exhibitions.
                </p>
                <p className={styles.spaceAddress}>40 Samcheong-ro, Jongno-gu, Seoul</p>
              </div>
            </div>
            
            <div className={styles.spaceCard}>
              <div className={styles.spaceImage}>
                <div className={styles.spaceImagePlaceholder}></div>
              </div>
              <div className={styles.spaceInfo}>
                <h3 className={styles.spaceTitle}>K3 - Project Space</h3>
                <p className={styles.spaceDescription}>
                  Dedicated to experimental works and emerging artists, 
                  providing a platform for innovative art practices.
                </p>
                <p className={styles.spaceAddress}>30 Samcheong-ro, Jongno-gu, Seoul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contact}>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>Visit Us</h2>
          <p className={styles.contactDescription}>
            Experience contemporary art in our beautifully designed gallery spaces. 
            We welcome visitors, collectors, and art enthusiasts from around the world.
          </p>
          <div className={styles.contactButtons}>
            <Link href="/contact" className={styles.btnPrimary}>
              Plan Your Visit
            </Link>
            <Link href="/exhibitions" className={styles.btnSecondary}>
              Current Exhibitions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage