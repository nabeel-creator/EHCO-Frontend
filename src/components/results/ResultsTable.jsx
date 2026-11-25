import { Link } from 'react-router-dom'
import { projectPath } from '../../routes/paths'
import sitesData from '../../../content/sites.json'

export default function ResultsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-base">
        <caption className="sr-only">EHCO project sites with dates and people reached</caption>
        <thead>
          <tr className="border-b-2 border-hairline">
            <th className="py-3 pr-4 text-forest font-semibold">Place</th>
            <th className="py-3 pr-4 text-forest font-semibold">Date</th>
            <th className="py-3 pr-4 text-forest font-semibold">What we did</th>
            <th className="py-3 text-forest font-semibold text-right">People</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-hairline">
          {sitesData.sites.map((site) => (
            <tr key={site.slug} className="hover:bg-mint/30 transition-colors">
              <td className="py-3 pr-4 font-medium">{site.name}</td>
              <td className="py-3 pr-4 text-navy/70">{site.date}</td>
              <td className="py-3 pr-4">
                {site.projectSlug ? (
                  <Link
                    to={projectPath(site.projectSlug)}
                    className="text-azure underline underline-offset-2 hover:text-azure-hover"
                  >
                    View project
                  </Link>
                ) : '—'}
              </td>
              <td className="py-3 text-right font-medium">
                {site.people ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Online work */}
      {sitesData.onlineWork && sitesData.onlineWork.length > 0 && (
        <div className="mt-8">
          <h3 className="text-forest font-semibold text-lg mb-3">Online work (not on the map)</h3>
          <ul className="divide-y divide-hairline">
            {sitesData.onlineWork.map((item) => (
              <li key={item.name} className="py-3 flex items-center justify-between">
                <span className="text-navy text-base">{item.name}</span>
                {item.people && (
                  <span className="text-navy/60 text-sm">{item.people} people</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
