import React, {createContext, useContext, useState, useCallback, useEffect} from 'react';
import axios from 'axios';
const DataContext = createContext();

const DataProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [reached, setReached] = useState(false);

    const nextPage = useCallback(() => {
        if (!loading) {
            if (page >= 9) {
                setReached(true);
            }
            setPage(page + 1);
        }
    }, [page, loading]);

    useEffect(() => {
        const apiKey = 'fc88ff91f6ea43f8ab14039fcb1f6d26';
        const url = `https://newsapi.org/v2/everything?pageSize=10&q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}&page=${page}`;
        setLoading(true);
        axios.get(url).then((response) => {
            setLoading(false);
            if (response.data) {
                const responseData = response.data;
                setData([...data, ...responseData.articles]);
            }
        }).catch(console.error);
    }, [page]);



    const pass = {loading, data, nextPage, reached};

    return (
        <DataContext.Provider value={{...pass}}>
            {children}
        </DataContext.Provider>
    )

};

export const useDataContext = () => useContext(DataContext);
export default DataProvider;