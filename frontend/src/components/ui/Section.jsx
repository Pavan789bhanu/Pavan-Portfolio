import React from 'react';

export const Section = ({ id, muted=false, children }) => (
  <section id={id} className="section">
    <div className="sectionWrap">{children}</div>
  </section>
);

export const H1 = ({ children }) => (
  <h2 className="sectionH1">{children}</h2>
);

export const Card = ({ className='', children }) => (
  <div className={`card ${className}`}>{children}</div>
);
