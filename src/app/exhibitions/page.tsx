"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

interface Exhibition {
  id: string;
  title: string;
  subtitle: string;
  artists: string[];
  date: string;
  endDate: string;
  description: string;
  longDescription: string;
  status: "current" | "upcoming" | "past";
  location: string;
  featured: boolean;
}

const ExhibitionsPage = () => {
  const [filter, setFilter] = useState<"all" | "current" | "upcoming" | "past">(
    "all",
  );

  const exhibitions: Exhibition[] = [
    {
      id: "1",
      title: "A Faraway Today",
      subtitle: "아득한 오늘",
      artists: [
        "Kim Beom",
        "Im Youngzoo",
        "Cho Hyun Taek",
        "Choe Sooryeon",
        "Choi Yun",
      ],
      date: "June 4, 2025",
      endDate: "July 20, 2025",
      description:
        "Contemporary reflections on distance and presence in modern art, exploring themes of isolation and connection in our digital age.",
      longDescription:
        "This groundbreaking exhibition brings together five contemporary artists who examine the paradoxes of our hyper-connected yet emotionally distant world. Through diverse media including video installation, sculpture, and performance documentation, these works explore how technology simultaneously brings us closer together while creating new forms of isolation.",
      status: "current",
      location: "K1 Main Gallery",
      featured: true,
    },
    {
      id: "2",
      title: "Silent Echoes",
      subtitle: "고요한 메아리",
      artists: ["Park Seobo", "Lee Ufan", "Ha Chong-Hyun"],
      date: "August 15, 2025",
      endDate: "September 30, 2025",
      description:
        "Monochrome expressions of Korean contemporary masters, featuring works that speak to the quieter moments of human experience.",
      longDescription:
        "A rare opportunity to see masterworks by three pioneers of Korean contemporary art. This exhibition showcases the evolution of Dansaekhwa (Korean monochrome painting) and its influence on contemporary art practices, highlighting the philosophical depth and material innovation of these groundbreaking artists.",
      status: "upcoming",
      location: "K2 Hanok Space",
      featured: true,
    },
    {
      id: "3",
      title: "Urban Fragments",
      subtitle: "도시의 파편들",
      artists: ["Bahc Yiso", "Kim Sooja", "Do Ho Suh"],
      date: "October 10, 2025",
      endDate: "November 25, 2025",
      description:
        "Exploring urban identity through conceptual installations that challenge our perception of space and community.",
      longDescription:
        "An exploration of urban displacement, migration, and the search for home in contemporary society. These artists use architectural elements, textile works, and conceptual frameworks to examine how globalization affects personal and cultural identity.",
      status: "upcoming",
      location: "K3 Project Space",
      featured: false,
    },
    {
      id: "4",
      title: "Material Translations",
      subtitle: "물질의 번역",
      artists: ["Suki Seokyeong Kang", "Haegue Yang", "Cody Choi"],
      date: "November 30, 2025",
      endDate: "January 15, 2026",
      description:
        "Contemporary artists reimagining traditional materials and techniques for the modern world.",
      longDescription:
        "This exhibition examines how contemporary Korean artists are reinterpreting traditional materials, techniques, and cultural practices for the 21st century. Through sculpture, installation, and performance, these artists create new dialogues between past and present.",
      status: "upcoming",
      location: "K1 Main Gallery",
      featured: false,
    },
    {
      id: "5",
      title: "Temporal Landscapes",
      subtitle: "시간의 풍경",
      artists: ["Yeesookyung", "Moon Kyungwon & Jeon Joonho", "Koo Jeong A"],
      date: "February 20, 2025",
      endDate: "April 30, 2025",
      description:
        "A journey through time and memory, examining how landscape shapes our understanding of history and identity.",
      longDescription:
        "An immersive exploration of how landscape and environment shape collective memory and cultural identity. These works examine the relationship between natural and constructed environments, investigating how places hold and transmit cultural knowledge across generations.",
      status: "past",
      location: "K2 Hanok Space",
      featured: false,
    },
    {
      id: "6",
      title: "Digital Vernacular",
      subtitle: "디지털 토착어",
      artists: ["Zach Lieberman", "Rafael Lozano-Hemmer", "teamLab"],
      date: "January 10, 2025",
      endDate: "March 20, 2025",
      description:
        "Exploring the intersection of technology and cultural expression in contemporary digital art practices.",
      longDescription:
        "A survey of how digital technologies are creating new forms of cultural expression and artistic practice. This exhibition features interactive installations, AI-generated artworks, and immersive digital environments that challenge traditional boundaries between artist, artwork, and audience.",
      status: "past",
      location: "K3 Project Space",
      featured: false,
    },
  ];

  const filteredExhibitions = exhibitions.filter(
    (exhibition) => filter === "all" || exhibition.status === filter,
  );

  const currentExhibition = exhibitions.find((ex) => ex.status === "current");

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section with Current Exhibition */}
      {currentExhibition && (
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroMeta}>
                <span className={styles.heroLabel}>Now Showing</span>
                <h1 className={styles.heroTitle}>{currentExhibition.title}</h1>
                <p className={styles.heroSubtitle}>
                  {currentExhibition.subtitle}
                </p>
              </div>

              <div className={styles.heroDetails}>
                <p className={styles.heroDate}>
                  {currentExhibition.date} – {currentExhibition.endDate}
                </p>
                <p className={styles.heroLocation}>
                  {currentExhibition.location}
                </p>

                <div className={styles.heroArtists}>
                  <h3 className={styles.heroArtistsTitle}>Featured Artists</h3>
                  {currentExhibition.artists.map((artist, index) => (
                    <p key={index} className={styles.heroArtist}>
                      {artist}
                    </p>
                  ))}
                </div>

                <p className={styles.heroDescription}>
                  {currentExhibition.longDescription}
                </p>
              </div>

              <div className={styles.heroButtons}>
                <Link
                  href={`/exhibitions/${currentExhibition.id}`}
                  className={styles.btnPrimary}
                >
                  View Details
                </Link>
                <button className={styles.btnSecondary}>Plan Your Visit</button>
              </div>
            </div>

            <div className={styles.heroImage}>
              <div className={styles.heroImageMain}>
                <div className={styles.heroImageContent}>
                  <div className={styles.heroImageShape}></div>
                  <div className={styles.heroImageShapeSmall}></div>
                  <div className={styles.heroImageShapeMedium}></div>
                </div>
                <div className={styles.heroImageOverlay}></div>
              </div>
              <div className={styles.heroImageDecorative}>
                <div className={styles.heroImageDecoBottom}></div>
                <div className={styles.heroImageDecoTop}></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.filterContent}>
          <div className={styles.filterHeader}>
            <h2 className={styles.filterTitle}>All Exhibitions</h2>
            <p className={styles.filterDescription}>
              Discover our complete collection of past, current, and upcoming
              exhibitions
            </p>
          </div>

          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${filter === "all" ? styles.active : ""}`}
              onClick={() => setFilter("all")}
            >
              All ({exhibitions.length})
            </button>
            <button
              className={`${styles.filterButton} ${filter === "current" ? styles.active : ""}`}
              onClick={() => setFilter("current")}
            >
              Current (
              {exhibitions.filter((ex) => ex.status === "current").length})
            </button>
            <button
              className={`${styles.filterButton} ${filter === "upcoming" ? styles.active : ""}`}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming (
              {exhibitions.filter((ex) => ex.status === "upcoming").length})
            </button>
            <button
              className={`${styles.filterButton} ${filter === "past" ? styles.active : ""}`}
              onClick={() => setFilter("past")}
            >
              Past ({exhibitions.filter((ex) => ex.status === "past").length})
            </button>
          </div>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className={styles.exhibitionsSection}>
        <div className={styles.exhibitionsContent}>
          {filteredExhibitions.length > 0 ? (
            <div className={styles.exhibitionsGrid}>
              {filteredExhibitions.map((exhibition) => (
                <div key={exhibition.id} className={styles.exhibitionCard}>
                  <div className={styles.exhibitionImage}>
                    <div className={styles.exhibitionImageContent}>
                      <div className={styles.exhibitionImageShape}></div>
                      <div className={styles.exhibitionImageShapeSmall}></div>
                    </div>
                    <div className={styles.exhibitionImageOverlay}>
                      <span
                        className={`${styles.exhibitionStatus} ${styles[exhibition.status]}`}
                      >
                        {exhibition.status}
                      </span>
                    </div>
                  </div>

                  <div className={styles.exhibitionInfo}>
                    <div className={styles.exhibitionHeader}>
                      <h3 className={styles.exhibitionTitle}>
                        {exhibition.title}
                      </h3>
                      <p className={styles.exhibitionSubtitle}>
                        {exhibition.subtitle}
                      </p>
                    </div>

                    <div className={styles.exhibitionMeta}>
                      <p className={styles.exhibitionDate}>
                        {exhibition.date} – {exhibition.endDate}
                      </p>
                      <p className={styles.exhibitionLocation}>
                        {exhibition.location}
                      </p>
                    </div>

                    <div className={styles.exhibitionArtists}>
                      {exhibition.artists.map((artist, index) => (
                        <span key={index} className={styles.exhibitionArtist}>
                          {artist}
                          {index < exhibition.artists.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>

                    <p className={styles.exhibitionDescription}>
                      {exhibition.description}
                    </p>

                    <Link
                      href={`/exhibitions/${exhibition.id}`}
                      className={styles.exhibitionLink}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>No exhibitions found</h3>
              <p>
                There are currently no exhibitions matching your selected
                filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterText}>
            <h2 className={styles.newsletterTitle}>Stay Connected</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter to receive updates about new
              exhibitions, opening receptions, artist talks, and special events.
            </p>
          </div>

          <div className={styles.newsletterForm}>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>Subscribe</button>
            </div>
            <p className={styles.newsletterDisclaimer}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExhibitionsPage;
