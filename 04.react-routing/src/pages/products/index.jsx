import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import ProductsTable from "../../components/products-page";
import { Flex, Spin } from 'antd';
const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    try {
      setLoading(true);
      let response = await axios(`${BASE_URL}/suppliers`);
      //   console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="product">
      <div className="container">
        <div className="product">
          <h1>this is products</h1>
          {loading ? (
            <Flex align="center" gap="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Flex>
          ) : (
            <ProductsTable products={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
