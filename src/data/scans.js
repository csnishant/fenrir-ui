const scans = [
  {
    id: "1",
    name: "Production API Scan",
    type: "Full Scan",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 2, high: 5, medium: 8, low: 3 },
    lastScan: "2 hours ago"
  },
  {
    id: "2",
    name: "Staging Web App",
    type: "Quick Scan",
    status: "Failed",
    progress: 60,
    vulnerabilities: { critical: 1, high: 2, medium: 4, low: 1 },
    lastScan: "5 hours ago"
  },
  {
    id: "3",
    name: "Mobile Backend",
    type: "Scheduled",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: "Tomorrow"
  }
]

export default scans