import React from 'react';

export const Article = ({ title = null, date = null, text = null }) => {
  const articleDate = date;
  const dateISO = articleDate.toISOString().slice(0, 10);
  const dateLocaleString = articleDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time
            dateTime={dateISO}
            data-cy="date"
          >
            {dateLocaleString}
          </time>
        </p>

        <p data-cy="text">
          {text}
        </p>
      </div>
    </>
  );
};
