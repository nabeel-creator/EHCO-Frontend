export default function FactLine({ place, when, people }) {
  const facts = [place, when, people].filter(Boolean)
  if (facts.length === 0) return null

  return (
    <dl className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-navy/70 mt-2">
      {place && (
        <div className="flex gap-1">
          <dt className="sr-only">Place</dt>
          <dd>{place}</dd>
        </div>
      )}
      {when && (
        <div className="flex gap-1">
          <dt className="sr-only">When</dt>
          <dd>{place ? `· ${when}` : when}</dd>
        </div>
      )}
      {people && (
        <div className="flex gap-1">
          <dt className="sr-only">People</dt>
          <dd>{(place || when) ? `· ${people}` : people}</dd>
        </div>
      )}
    </dl>
  )
}
