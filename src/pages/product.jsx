import React from "react";
function Product() {
  return <div>product</div>;
}

export const getServerSideProps = async () => {
  return {
    props: {
      data: "",
    },
  };
};

Product.auth = true;

export default Product;
