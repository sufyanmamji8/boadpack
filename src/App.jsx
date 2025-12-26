import KPIChart2 from './KPI/kpichart2.jsx'

function App() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',        // Prevent any scroll on app wrapper
      backgroundColor: '#1a1a1a' // Match chart background
    }}>
      <KPIChart2 />
    </div>
  )
}

export default App