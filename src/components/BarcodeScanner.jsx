// BarcodeScanner.js
import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import axios from "axios";

const BarcodeScanner = ({ onBarcodeDetected }) => {
  const [barcode, setBarcode] = useState("");  // Définir ici
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(handleDetected);

    return () => {
      Quagga.offDetected(handleDetected);
      Quagga.stop();
    };
  }, []);

  const handleDetected = (data) => {
    setBarcode(data.codeResult.code);
    Quagga.offDetected();
    onBarcodeDetected(data.codeResult.code);

    axios
      .post("http://localhost:3000/product/search-by-barcode", {
        barcode: data.codeResult.code,
      })
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data from the back-end:", error);
        setProductInfo(null);
      });
  };

  return (
    <div className="scanner" style={{ color: "white" }}>
      <div
        id="scanner-container"
        style={{ width: "640px", height: "480px", backgroundColor: "black" }}
      />
      {barcode && <p>Code-Barres: {barcode}</p>}
      {productInfo && (
        <div>
          <h3>Informations sur le Produit</h3>
          <p>Nom du Produit: {productInfo.name}</p>
          <p>Description: {productInfo.description}</p>
          <p>Catégorie: {productInfo.category}</p>
          {/* Include more product information here */}
        </div>
      )}
      {!productInfo && barcode && (
        <p>Aucune information trouvée pour ce produit.</p>
      )}
    </div>
  );
};

export default BarcodeScanner;
