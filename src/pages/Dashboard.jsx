import scans from "../data/scans"
import StatusChip from "../components/StatusChip"
import SeverityBadge from "../components/SeverityBadge"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg p-6">
      
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">
        Scan Dashboard
      </h1>

      {/* Table */}
      <div className="bg-white dark:bg-darkSurface rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr className="text-sm text-gray-600 dark:text-gray-400">
              <th className="p-4">Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Vulnerabilities</th>
              <th>Last Scan</th>
            </tr>
          </thead>

          <tbody>
            {scans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <td className="p-4 font-medium dark:text-white">
                  {scan.name}
                </td>
                <td>{scan.type}</td>
                <td><StatusChip status={scan.status} /></td>
                <td>
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${scan.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="space-x-1">
                  <SeverityBadge type="critical" count={scan.vulnerabilities.critical} />
                  <SeverityBadge type="high" count={scan.vulnerabilities.high} />
                  <SeverityBadge type="medium" count={scan.vulnerabilities.medium} />
                  <SeverityBadge type="low" count={scan.vulnerabilities.low} />
                </td>
                <td>{scan.lastScan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}