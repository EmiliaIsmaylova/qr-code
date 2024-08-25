import {Routes, Route} from "react-router-dom"
import { Navigation } from './Components/Navigation/Navigation';
import {QrCodeGenerator} from './Components/Generate/QrCodeGenerator'
import { QrCodeScanner } from './Components/Scan/QrCodeScanner'
import { GenerateHistory } from './Components/GenerateHistory'
import { ScanHistory } from './Components/ScanHistory'



const Layout = () => {
  return(
    <div>  
      <Navigation/>



      {/* <QrCodeGenerator/> */}

      {/* <QrCodeScanner/> */}

      <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator />}/>
        <Route path="/qr-code/scan" element={<QrCodeScanner />}/>
        <Route path="/qr-code/scanHistory" element={<ScanHistory/>}/>
        <Route path="/qr-code/generateHistory" element={<GenerateHistory/>}/>

      </Routes>
    </div>
  )
}


export {Layout}