import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const history = useHistory();

  // la liste des states

  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  // les onChanges

  const handleChangeFile = (event) => {
    setFile(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeCondition = (event) => {
    setCondition(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  //on envoie le Formdata au serveur

  const formData = new FormData();

  formData.append("picture", files);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("city", city);
  formData.append("condition", condition);
  formData.append("price", price);

  // faire condition pour prix

  // on envoie le token vers  axios en post
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      files &&
      title &&
      description &&
      brand &&
      size &&
      color &&
      condition &&
      city &&
      price
    ) {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",

        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log(response.data);
      history.push("/");
    } else {
      alert("Il manque des informations !");
    }
  };

  return (
    <main>
      <div className="container">
        <h2>Vends ton article</h2>
        <form className="publish-form" onSubmit={handleSubmit}>
          <section>
            <input type="file" multiple={true} onChange={handleChangeFile} />
          </section>
          <section>
            <div>
              <h4>Titre</h4>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
                placeholder="ex: Chemise Sézane verte"
              />
            </div>
            <div>
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                cols="30"
                rows="10"
                placeholder="ex: Porté quelque fois, taille correctement"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
            </div>
          </section>
          <section>
            <div>
              <h4>Marque</h4>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={handleChangeBrand}
                placeholder="ex: Zara"
              />
            </div>
            <div>
              <h4>Taille</h4>
              <input
                type="text"
                name="size"
                value={size}
                onChange={handleChangeSize}
                placeholder="ex: L / 40 / 12"
              />
            </div>
            <div>
              <h4>Couleur</h4>
              <input
                type="text"
                name="color"
                value={color}
                onChange={handleChangeColor}
                placeholder="ex: Fushia"
              />
            </div>
            <div>
              <h4>État</h4>
              <input
                type="text"
                name="condition"
                value={condition}
                onChange={handleChangeCondition}
                placeholder="ex: Neuf avec étiquette"
              />
            </div>
            <div>
              <h4>Lieu</h4>
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleChangeCity}
                placeholder="ex: Paris"
              />
            </div>
          </section>
          <section>
            <div>
              <h4>Price</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={handleChangePrice}
                  placeholder="ex: 0,00 €"
                />

                <label htmlFor="checkbox">
                  <input name="checkbox" type="checkbox" /> Je suis intéressé(e)
                  par les échanges
                </label>
              </div>
            </div>
          </section>
          <button type="submit" text="Ajouter" />
        </form>
      </div>
    </main>
  );
};

export default Publish;
