import { createContext, useEffect, useReducer } from 'react';
import { useState } from 'react'; // Add useState import
import filtersReducer from './filtersReducer';

// Filters-Context
const filtersContext = createContext();

// Initial State
const initialState = {
    allProducts: [],
    sortedValue: null,
    updatedBrandsMenu: [],
    updatedCategoryMenu: [],
    selectedPrice: {
        productOriginalPrice: 0,
        minPrice: 0,
        maxPrice: 0
    },
    mobFilterBar: {
        isMobSortVisible: false,
        isMobFilterVisible: false,
    },
};

// Filters-Provider Component
const FiltersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filtersReducer, initialState);
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track error

    // Function to fetch product data from API
    const fetchProductData = async () => {
        try {
            const response = await fetch('https://consultancy-server-o4z3.onrender.com/api/v1/products');
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const { data } = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Loading All Products on the initial render
    useEffect(() => {
        fetchProductData().then(data => {
            // Update state with fetched product data
            dispatch({
                type: 'LOAD_ALL_PRODUCTS',
                payload: { products: data }
            });
        });
    }, []);

    // Rest of your code remains unchanged...

    return (
        <filtersContext.Provider value={{ ...state }}>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                children
            )}
        </filtersContext.Provider>
    );
};

export default filtersContext;
export { FiltersProvider };
