import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import axios from "axios";
import "aframe"; // Importez A-Frame

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const [scanSuccess, setScanSuccess] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0, z: -5 });

  useEffect(() => {
    const handleDetected = (data) => {
      setBarcode(data.codeResult.code);
      Quagga.offDetected();

      axios
        .post("http://localhost:3000/product/search-by-barcode", {
          barcode: data.codeResult.code,
        })
        .then((response) => {
          setProductInfo(response.data);
          setScanSuccess(true);
        })
        .catch((error) => {
          console.error(
            "Error fetching product data from the back-end:",
            error
          );
          setProductInfo(null);
        });
    };

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

  useEffect(() => {
    if (productInfo) {
      // Calculer la position du texte en fonction des informations du visage (ou d'autres propriétés)
      // Pour l'instant, position fixe
      setTextPosition({ x: 0, y: 0, z: -5 });
    }
  }, [productInfo]);

  return (
    <div>
      <div
        id="scanner-container"
        style={{ width: "640px", height: "480px", backgroundColor: "black" }}
      />

      {barcode && <p style={{ color: "white" }}>Code-Barres: {barcode}</p>}

      {productInfo && (
        <a-scene look-controls>
          <a-marker-camera preset="hiro" />
          <a-text
            position={`${textPosition.x} ${textPosition.y} ${textPosition.z}`}
            color="white"
            align="left"
            value={`Nom: ${productInfo.name}\nDescription: ${productInfo.description}\nCatégorie: ${productInfo.category}\nIngrédients: ${productInfo.ingredients}`}
            wrap-count="40"
            font-size="2.5"
          />
        </a-scene>
      )}

      {!productInfo && barcode && (
        <p style={{ color: "white" }}>
          Aucune information trouvée pour ce produit.
        </p>
      )}

      {scanSuccess && !productInfo && (
        <p style={{ color: "white" }}>
          Chargement des informations du produit...
        </p>
      )}
    </div>
  );
};

export default BarcodeScanner;
