import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import axios from "axios";
import "aframe"; // Importez A-Frame

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const [scanSuccess, setScanSuccess] = useState(false);

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

  return (
    <div>
      <div
        id="scanner-container"
        style={{ width: "640px", height: "480px", backgroundColor: "black" }}
      />

      {barcode && <p style={{ color: "white" }}>Code-Barres: {barcode}</p>}

      {productInfo && (
        <div>
          <h3 style={{ color: "white" }}>Informations sur le Produit</h3>
          <p style={{ color: "white" }}>Nom du Produit: {productInfo.name}</p>
          <p style={{ color: "white" }}>
            Description: {productInfo.description}
          </p>
          <p style={{ color: "white" }}>Catégorie: {productInfo.category}</p>
        </div>
      )}

      {!productInfo && barcode && (
        <p style={{ color: "white" }}>
          Aucune information trouvée pour ce produit.
        </p>
      )}

      {scanSuccess && (
        <a-scene>
          <a-marker-camera preset="hiro" />
          <a-box position="0 0 -5" color="red" scale="2 2 2">
            <a-text
              value={`Nom du Produit: ${productInfo.name}\nCatégorie: ${productInfo.category}`}
              position="-0.7 0.3 0.5"
              color="black"
              align="left"
              width="1.0"
              wrap-count="20"
            ></a-text>
          </a-box>
        </a-scene>
      )}
    </div>
  );
};

export default BarcodeScanner;
