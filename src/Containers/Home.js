import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Imgbackground from "../Assets/img/imgbg.jpg";
import Cookies from "js-cookie";

const Home = ({ search, setSearch }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const userToken = Cookies.get("token");
  // console.log(userToken);
  useEffect(() => {
    const fetchData = async () => {
      // requete axios
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
      );

      setData(response.data);
      // condition départ pour affichage
      // console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [setData, search]); //a chaque fois que cela change cela va m afficher les données new request

  return isLoading ? (
    <p>En cours chargement...</p>
  ) : (
    <>
      <div className="home-hero">
        <img src={Imgbackground} alt="" className="imgbackground" />
        <div>
          <div className="homeready">
            Ready to sort your cupboards
            <Link to={"/Publish"}>
              <button>Start to sell</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-c-wrapper">
        {data.offers.map((offer, index) => {
          // console.log(offer);
          return (
            <div className="card-container">
              <Link to={`/offer/${offer._id}`} key={offer._id}>
                <img src={offer.product_image.secure_url} />
                <div className="cardbsize">
                  <span>{offer.product_price}€</span>
                  <span>{offer.product_details[1].TAILLE}</span>
                  <span>{offer.product_details[0].MARQUE}</span>
                  <span className="avataruser">
                    {offer.product_pictures.secure_url}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
