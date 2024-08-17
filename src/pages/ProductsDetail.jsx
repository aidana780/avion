import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Products from "./Products";
import Productsimag from "../components/productsimag/Productsimag";
import Card from "../components/card/Card";
import Text from "../components/text/Text";
import Footer from "../components/footer/Footer";
import Ceramics from "../components/ceramics/Ceramics";

const ProductsDetail = () => {
  const [avionData, setAvionData] = useState(null);
  const [image, setImage] = useState("");
  const [productAll, setProductAll] = useState([]);

  const params = useParams();
  console.log(params.id);
  const getById = async () => {
    try {
      const { data } = await axios.get(params.id);
      setAvionData(data);
      setImage(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getById();
  }, []);

  console.log(avionData, "avionData");
  if (avionData === null) {
    return <h2>loading..</h2>;
  }

  return (
    <div>
      <Productsimag
        productImg={image}
        productName={avionData.title}
        productPrice={avionData.price}
        productDes={avionData.description}
        productDis={avionData.designer}
        productCat={avionData.category}
        productWe={avionData.width}
        productHe={avionData.height}
        productDe={avionData.depth}
      />
      <Ceramics />
      <Products setImage={setImage} />
      <Card />
      <Text />
      <Footer />
    </div>
  );
};

export default ProductsDetail;
