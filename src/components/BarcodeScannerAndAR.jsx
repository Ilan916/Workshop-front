import React from 'react'
import { useEffect, useState } from 'react';

const BarcodeScannerAndAR = ({ barcode }) => {
  const [markerVisible, setMarkerVisible] = useState(false);

  useEffect(() => {
    // Logique pour déterminer si et quand le bloc jaune doit être affiché
    // en fonction du code-barres détecté.
    // Par exemple, afficher le bloc jaune si un certain code-barres est détecté :
    if (barcode === "votre_code_barre_spécifique") {
      setMarkerVisible(true);
    }
  }, [barcode]);

  return (
    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
      <a-marker preset="hiro" visible={markerVisible}>
        <a-box position="0 0.5 0" material="color: yellow;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default BarcodeScannerAndAR