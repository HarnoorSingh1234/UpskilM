import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './App1.css'
const bloodReportData = [
    {
      name: "Hemoglobin",
      value: 13.5, // in g/dL
      normalRange: [13.0, 17.0], // Normal range for Hemoglobin
    },
    {
      name: "RBC",
      value: 4.8, // in million/uL
      normalRange: [4.5, 5.9], // Normal range for RBC
    },
    {
      name: "WBC",
      value: 6.1, // in thousand/uL
      normalRange: [4.0, 11.0], // Normal range for WBC
    },
    {
      name: "Platelets",
      value: 250, // in thousand/uL
      normalRange: [150, 400], // Normal range for Platelets
    },
    {
      name: "Hematocrit",
      value: 42, // in %
      normalRange: [38.0, 52.0], // Normal range for Hematocrit
    },
    {
      name: "MCV",
      value: 85, // in fL
      normalRange: [80.0, 100.0], // Normal range for MCV
    },
    {
      name: "MCH",
      value: 29.5, // in pg
      normalRange: [27.0, 32.0], // Normal range for MCH
    },
    {
      name: "MCHC",
      value: 34.0, // in g/dL
      normalRange: [32.0, 36.0], // Normal range for MCHC
    },
    {
      name: "RDW",
      value: 12.5, // in %
      normalRange: [11.5, 14.5], // Normal range for RDW
    }
  ];
  
function Dashboard(){
    return(<>
            <div className='box1'>This is your blood report</div>
            <AreaChart width={500} height={500} data={bloodReportData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Area  dataKey="value"></Area>
                <Area stroke="#8884d8" fill="#ff00c1" dataKey="normalRange" type='monotone'></Area>
            </AreaChart>
    
    
    
    
    
    </>)

}
export default Dashboard