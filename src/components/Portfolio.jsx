import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const projectsList = [
  {
    name: "HarrisonJK.com",
    slug: "HarrisonJK.github.io ",
    tagline: "The source code of this website!",
    url: "https://harrisonjk.github.io",
    // writeup: "/test",
    highlight: true,
  },
  {
    name: "Placeholder Project 1",
    slug: "HarrisonJK.github.io ",
    tagline: "Placeholder Project Description",
    url: "https://harrisonjk.github.io",
    // writeup: "/test",
    highlight: true,
  },
  {
    name: "Placeholder Project 2",
    slug: "HarrisonJK.github.io ",
    tagline: "Placeholder Project Description",
    url: "https://harrisonjk.github.io",
    // writeup: "/test",
    highlight: true,
  },
  {
    name: "Scribble Me This",
    slug: "/2022-Scribble-Me-This",
    tagline:
      "A Pictionary-style game where AI rates your drawings to award the winner!",
    url: "https://www.youtube.com/watch?v=eNn01r9uogw",
    highlight: true,
  },
];

export function ExternalLinkIcon() {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: "1rem", height: "1rem", fill: "currentColor" }}
    >
      <g data-name="Layer 2">
        <g data-name="external-link">
          <rect width="24" height="24" opacity="0"></rect>
          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
        </g>
      </g>
    </svg>
  );
}

export function Portfolio() {
  return (
    <div>
      <section className="segment">
        <div className="container">
          <div className="project-preview">
            {projectsList.map((project) => {
              return (
                <div className="card anchored large" key={project.slug}>
                  <div>
                    <a
                      className="card-header"
                      href={`https://github.com/HarrisonJK/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="links anchored">
                    {project.writeup && (
                      <Link className="button small" to={project.writeup}>
                        Article
                      </Link>
                    )}
                    {project.url && (
                      <a
                        className="button small flex"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                        <ExternalLinkIcon />
                      </a>
                    )}
                    <a
                      className="button"
                      href={`https://github.com/HarrisonJK/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
