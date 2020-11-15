import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // requete axios
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers/"
      );

      setData(response.data);
      // condition départ pour affichage
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours chargement...</p>
  ) : (
    // si ca marche pas encours sinon map sur tableau et afficher element que l on veut
    <div className="card-size-price-brand">
      {data.offers.map((offers, index) => {
        return (
          <Link to={`/offer/${offers._id}`} key={offers._id}>
            <img src={offers.product_image.secure_url} />
            <span>{offers.product_price}€</span>
            <span>{offers.product_details[1].TAILLE}</span>
            <span>{offers.product_details[0].MARQUE}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
