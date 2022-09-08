const getAllProducts = `
    query Products {
                products {
                    data {
                        id
                        attributes {
                            title
                        }
                    }
                }
            }
`;

const products = {
    getAllProducts,
};

export default products;
