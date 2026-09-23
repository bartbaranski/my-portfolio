import React, { useState } from 'react';
import './Publications.css';

const publications = [
  {
    title: 'A Multi-Level Framework for Attribute Weighting',
    venue: 'Conference Poster - 7th Polish Conference on Artificial Intelligence, PP-RAI 2026, 20-22 April 2026, Katowice',
    authors: 'Authors: Bartłomiej Barański, Beata Zielosko, Urszula Stańczyk',
    year: '2026',
    link: 'https://github.com/bartbaranski/A-Multi-Level-Framework-for-Attribute-Weighting/blob/main/pprai_2026_baranski_poster.pdf',
    tags: ['Poster'],
  },
  {
    title: 'Hierarchical Approach to Attribute Weighting',
    venue: 'Springer',
    authors: 'Authors: Beata Zielosko, Urszula Stańczyk & Bartłomiej Barański',
    year: '2025',
    link: 'http://dx.doi.org/10.1007/978-3-032-06611-4_7',
    tags: ['Article'],
  },
  {
    title: 'Deep Learning for Automated Brain Tumor Detection in MRI Images',
    venue: 'Conference Poster - 6th Polish Conference on Artificial Intelligence, PP-RAI 2025, 7-9 April 2025, Katowice',
    authors: 'Authors: Bartłomiej Barański, Beata Zielosko',
    year: '2025',
    link: 'https://github.com/bartbaranski/tumor-detection/blob/main/MRI_tumor_poster_bb.pdf',
    tags: ['Poster'],
  },
];

const tagOrder = ['Article', 'Poster'];
const usedTags = Array.from(new Set(publications.flatMap((p) => p.tags))).sort(
  (a, b) => {
    const ia = tagOrder.indexOf(a);
    const ib = tagOrder.indexOf(b);
    return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
  }
);
const allTags = ['All', ...usedTags];

function Publications() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? publications
      : publications.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="page-content">
      <h2>Publications</h2>

      <div className="pub-filter" role="group" aria-label="Filter publications by tag">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`pub-filter-btn${activeTag === tag ? ' active' : ''}`}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.map((pub, index) => (
        <div className="publication-item" key={index}>
          <p className="title-pub">{pub.title}</p>
          <p className="journal-pub">{pub.venue}</p>
          <p className="authors-pub">{pub.authors}</p>
          <p className="date-pub">{pub.year}</p>
          <p className="link-pub">
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              Link to Publication
            </a>
          </p>
          <div className="tags-pub-list">
            {pub.tags.map((tag) => (
              <span className="tags-pub" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publications;
