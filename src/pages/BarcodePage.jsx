import { useState } from 'react'
import React from 'react'
import { BarCodeScanner } from '../components'
import ARComponent from '../components/BarcodeScannerAndAR'; 

function BarcodePage() {
  const [barcode, setBarcode] = useState(''); // Définir l'état ici

  return (
    <div>
      <BarCodeScanner onBarcodeDetected={setBarcode} /> {/* Passer setBarcode directement */}
      <ARComponent barcode={barcode} /> {/* Passer l'état barcode au composant AR */}
    </div>
  );
}

export default BarcodePage