import { useState, useEffect } from 'react';
import PokeApi from '../services/pokeapi';

const useRequest = url => {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        (async () => {
            try{
                const { data } = await PokeApi.get(url);
                setData(data.results || data);
                setLoading(false);
            }catch(err){
                setError(err);
                setLoading(false);
            }
        })()
    }, [url])

    return [
        data,
        error,
        loading
    ]
}

export default useRequest;