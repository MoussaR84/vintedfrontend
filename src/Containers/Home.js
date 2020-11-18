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
    <span>en cours de chargement</span>
  ) : (
    <>
      <div className="container">
        <div className="home-hero">
          <img src={Imgbackground} alt="" className="home-hero-forme" />
          <Link to="/publish">
            <div>
              <div className="home-hero-ready">
                Prêt à faire du rangement dans vos placard ?
                <button>Start to sell</button>
              </div>
            </div>
          </Link>
        </div>
        <>
          <div className="home-card-wrapper">
            {data.offers.map((offer, id) => {
              return (
                <div key={id}>
                  <div className="card-container">
                    <div className="card-avatar-username">
                      <span>
                        {/*<img
                          src={item.owner.account.avatar.secure_url}
                          alt="avatar pic"
                          className="avat"
                        />*/}
                        <span>{offer.owner.account.username}</span>
                      </span>
                    </div>
                    <Link to={`/offer/${offer._id}`}>
                      <div>
                        <img src={offer.product_image.secure_url} alt="" />
                        <div className="card-price-brand-size">
                          <span>{offer.product_price} €</span>
                          <span>{offer.product_details[1].TAILLE}</span>
                          <span>{offer.product_details[0].MARQUE}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
};

export default Home;
