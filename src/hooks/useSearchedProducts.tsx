import { useState, useEffect } from 'react';
import { ProductType } from '~/server/routers/product';

const useSearchedProducts = (
    allProducts: ProductType[],
    searchTerm: string,
) => {
    const [searchedProducts, setSearchedProducts] = useState(allProducts);

    useEffect(() => {
        if ((!searchedProducts.length && allProducts.length) || !searchTerm) {
            setSearchedProducts(allProducts);
        }

        if (searchTerm.length < 3) {
            return;
        }

        setSearchedProducts(
            allProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        );
    }, [searchTerm, allProducts?.length]);

    return searchedProducts;
};

export default useSearchedProducts;
