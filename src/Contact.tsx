import React from 'react';

export function Github() {
  return (
    <a
      href="https://twitter.com/tjgrinn?ref_src=twsrc%5Etfw"
      className="tygr-contact github"
      aria-label="Follow @tjgrinn on Twitter"
      target="_blank"
    >
      <svg viewBox="0 0 16 16" width="14px" height="14px">
        <path
          fill="black"
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
      Follow @tjgrinn
    </a>
  );
}

export function Twitter() {
  return (
    <a
      className="tygr-contact twitter"
      href="https://github.com/tylergrinn"
      aria-label="Follow @tylergrinn on GitHub"
      target="_blank"
    >
      <svg width="14px" height="14px" viewBox="0 0 72 72">
        <path fill="none" d="M0 0h72v72H0z" />
        <path
          fill="#fff"
          d="M68.812 15.14c-2.348 1.04-4.87 1.744-7.52 2.06 2.704-1.62 4.78-4.186 5.757-7.243-2.53 1.5-5.33 2.592-8.314 3.176C56.35 10.59 52.948 9 49.182 9c-7.23 0-13.092 5.86-13.092 13.093 0 1.026.118 2.02.338 2.98C25.543 24.527 15.9 19.318 9.44 11.396c-1.125 1.936-1.77 4.184-1.77 6.58 0 4.543 2.312 8.552 5.824 10.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163 0 6.345 4.513 11.638 10.504 12.84-1.1.298-2.256.457-3.45.457-.845 0-1.666-.078-2.464-.23 1.667 5.2 6.5 8.985 12.23 9.09-4.482 3.51-10.13 5.605-16.26 5.605-1.055 0-2.096-.06-3.122-.184 5.794 3.717 12.676 5.882 20.067 5.882 24.083 0 37.25-19.95 37.25-37.25 0-.565-.013-1.133-.038-1.693 2.558-1.847 4.778-4.15 6.532-6.774z"
        />
      </svg>
      Follow @tylergrinn
    </a>
  );
}

export function Email() {
  return (
    <a
      className="tygr-contact email"
      href="mailto:tyler@tygr.info"
      aria-label="Send an email to Tyler"
      target="_blank"
    >
      <svg
        width="12px"
        height="9px"
        viewBox="0 0 100 75"
        vectorEffect="non-scaling-stroke"
      >
        <rect
          width="100"
          height="75"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fill="none"
          d="M0 0 L50 50 L100 0"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      tyler@tygr.info
    </a>
  );
}
