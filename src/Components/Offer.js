import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
//  cuidado on va utiliser useeffect car is loading ou non //

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offer/" + id
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <>
      <div className="offer-body">
        <div className="offer-container">
          <div className="offer-picture">
            <img
              src={data.product_image.secure_url}
              className="offer-picture"
              alt=""
            />
          </div>

          <div className="offer-infos">
            <div>
              <span className="offer-price">{data.product_price}€</span>
            </div>

            {data.product_details.map((element, index) => {
              // on map pour afficher les infos du product detail et on mets des key[Ø] car c est le seul element//
              const keys = Object.keys(element);
              return (
                <>
                  <Link to="/Payment">
                    <div className="offer-infos">
                      <div>
                        <ul className="offer-list" key={index}>
                          <li>
                            <span>{keys[0]}</span>
                            <span>{element[keys[0]]}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Offer;
