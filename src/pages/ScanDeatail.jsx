import { useParams } from "react-router-dom"
import scans from "../data/scans"

export default function ScanDetail() {
  const { id } = useParams()
  const scan = scans.find(s => s.id === id)

  if (!scan) return <div>Scan not found</div>

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBg p-6">
      
      <h1 className="text-2xl font-semibold mb-4 dark:text-white">
        {scan.name}
      </h1>

      {/* Progress Section */}
      <div className="bg-white dark:bg-darkSurface rounded-xl p-6 shadow mb-6">
        <p className="text-lg dark:text-white mb-2">
          Status: {scan.status}
        </p>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-primary h-3 rounded-full"
            style={{ width: `${scan.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Live Console + Findings */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Console */}
        <div className="bg-black text-green-400 p-4 rounded-xl font-mono text-sm h-80 overflow-y-auto">
          <p>[12:01:02] Starting scan...</p>
          <p>[12:01:05] Spidering target...</p>
          <p>[12:01:10] Mapping endpoints...</p>
          <p className="text-red-400">
            [12:01:15] Critical vulnerability detected
          </p>
          <p>[12:01:20] Validating response headers...</p>
        </div>

        {/* Findings */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-darkSurface p-4 rounded-xl shadow">
            <span className="bg-critical text-white text-xs px-2 py-1 rounded">
              Critical
            </span>
            <h3 className="font-semibold mt-2 dark:text-white">
              SQL Injection
            </h3>
            <p className="text-sm text-gray-500">
              Endpoint: /api/users
            </p>
          </div>

          <div className="bg-white dark:bg-darkSurface p-4 rounded-xl shadow">
            <span className="bg-high text-white text-xs px-2 py-1 rounded">
              High
            </span>
            <h3 className="font-semibold mt-2 dark:text-white">
              XSS Vulnerability
            </h3>
            <p className="text-sm text-gray-500">
              Endpoint: /search?q=
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}