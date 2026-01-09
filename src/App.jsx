import Table1 from './Tables/table1.jsx'
import Table2 from './Tables/table2.jsx'
import Table3 from './Tables/table3.jsx'
import JeddahAirportDiagram from './pages/JeddahAirportDiagram.jsx'
import File from './Tables/file.jsx'
import File2 from './Tables/file2.jsx'
import File3 from './Tables/file3.jsx'
import File4 from './Tables/file4.jsx'
import File5 from './Tables/file5.jsx'
import KPIChart from './KPI/kpichart.jsx'
import KPIChart2 from './KPI/kpichart2.jsx'
import JeddahAirportKPIChart from './KPI/JeddahAirportKPIChart.jsx'
import KPIchart4  from './KPI/KPIchart4.jsx'





function App() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }}>

      {/* <File/>
      <File2/>
      <File3/>
      <File4/>
      <File5/> */}
<JeddahAirportKPIChart/>
<KPIChart/>
<KPIChart2/>

{/* <KPIchart4/> */}


    </div>
  )
}

export default App