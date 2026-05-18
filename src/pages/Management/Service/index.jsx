

import { useEffect, useState } from "react";
import { getProducts } from "../../../api/mockApi"; // adjust path if needed

const Service = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      console.log("Products:", data); //  check here
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h2>Service Page (Test API)</h2>

      {products.length === 0 ? (
        <p>No data</p>
      ) : (
        products.map((p) => (
          <div key={p.id}>
            {p.name} - ${p.price}
          </div>
        ))
      )}
    </div>
  );
};

export default Service;