// Front-end code (BarcodeScanner.js)
import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import axios from "axios";
import "aframe"; // Importez A-Frame


const BarcodeScanner = () => {
  // État pour stocker le code-barres scanné
  const [barcode, setBarcode] = useState("");

  // État pour stocker les informations du produit provenant du backend
  const [productInfo, setProductInfo] = useState(null);

  // État pour indiquer si le scan du code-barres a réussi
  const [scanSuccess, setScanSuccess] = useState(false);

  // Effet qui s'exécute une fois au montage du composant
  useEffect(() => {
    // Fonction pour gérer la détection du code-barres par Quagga
    const handleDetected = (data) => {
      // Met à jour l'état avec le code-barres scanné
      setBarcode(data.codeResult.code);
      // Arrête Quagga pour éviter de continuer la détection
      Quagga.offDetected();
      // Envoie le code-barres scanné au backend
      axios
        .post("http://localhost:3000/product/search-by-barcode", {
          barcode: data.codeResult.code,
        })
        .then((response) => {
          // Met à jour l'état avec les informations du produit provenant du backend
          setProductInfo(response.data);
          // Indique que le scan a réussi
          setScanSuccess(true);
        })
        .catch((error) => {
          console.error(
            "Error fetching product data from the back-end:",
            error
          );
          // En cas d'erreur, réinitialise les informations du produit
          setProductInfo(null);
        });
    };

    // Initialise Quagga avec la configuration
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
        // Gère les erreurs d'initialisation de Quagga
        if (err) {
          console.error(err);
          return;
        }
        // Démarre Quagga pour commencer la détection
        Quagga.start();
      }
    );

    // Configure la gestion de la détection du code-barres
    Quagga.onDetected(handleDetected);

    // Effet de nettoyage qui s'exécute au démontage du composant
    return () => {
      // Désactive la gestion de la détection
      Quagga.offDetected(handleDetected);
      // Arrête Quagga
      Quagga.stop();
    };
  }, []); // Dépendance vide, donc l'effet s'exécute une seule fois au montage

  // Rendu du composant
  return (
    <div>
      {/* Conteneur pour la vidéo du scanner Quagga */}
      <div
        id="scanner-container"
        style={{ width: "640px", height: "480px", backgroundColor: "black" }}
      />

      {/* Affiche le code-barres scanné s'il existe */}
      {barcode && <p style={{ color: "white" }}>Code-Barres: {barcode}</p>}

      {/* Affiche les informations du produit s'il y en a */}
      {productInfo && (
        <div>
          <h3 style={{ color: "white" }}>Informations sur le Produit</h3>
          <p style={{ color: "white" }}>Nom du Produit: {productInfo.name}</p>
          <p style={{ color: "white" }}>
            Description: {productInfo.description}
          </p>
          <p style={{ color: "white" }}>Catégorie: {productInfo.category}</p>
          {/* Ajoutez d'autres informations sur le produit ici */}
        </div>
      )}

      {/* Affiche un message si aucune information trouvée pour le produit */}
      {!productInfo && barcode && (
        <p style={{ color: "white" }}>
          Aucune information trouvée pour ce produit.
        </p>
      )}

      {/* Affiche un modèle 3D avec les informations du produit si le scan a réussi */}
      {scanSuccess && (
        <a-scene look-controls>
          <a-marker-camera preset="hiro" />
          <a-box
            position="0 0 -5"
            color="red"
            scale="2 2 2"
          >
            {/* Affiche le nom du produit sur une face du cube */}
            <a-text
              value={`Nom du Produit: ${productInfo.name}`}
              position="-0.5 0.3 0.5"
              color="black"
              align="left"
              width="1.0"
              wrap-count="20"
            ></a-text>
            {/* Affiche la catégorie du produit sur une autre face du cube */}
            <a-text
              value={`Catégorie: ${productInfo.description}`}
              position="-0.5 0.1 0.5"
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
