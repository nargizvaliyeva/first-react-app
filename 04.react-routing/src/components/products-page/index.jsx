import React from "react";


const ProductsTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>CompanyName</th>
          <th>ContactName</th>
          <th>ContactTitle</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
