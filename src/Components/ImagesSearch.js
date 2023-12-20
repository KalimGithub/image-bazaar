import React, { useState,useEffect } from "react";
import axios from 'axios'


const ImagesSearch = ({ setImages }) => {

    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetchResult('', 'random')
    }, [])

    async function fetchResult(e,random) {
        if(e){
            e.preventDefault();
        }
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos',
                {
                    headers: {
                        "Accept-Version": "v1",
                        "Authorization": "Client-ID ZeO-h0AI5-ybKCaK9iyzs1t7LpB9JBOVusSmnOHtn5o" 
                    },
                    params: {
                        query: searchTerm || random
                    }
                }
            )
            console.log(response.data.results)
            setImages(response.data.results)
        }
        // .then((res) => {
        //     console.log(res.data.results)
        //     setImages(res.data.results)
        // })
        catch (error) {
            console.log(error)
        }
        setSearchTerm('')
    }
    // fetchResult()
    return (
        <div className='images-search'>
            <form onSubmit={fetchResult}>
                <input type='text'
                    placeholder='search images'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className='search-input'
                />
                <button id='search-btn' type='submit'>SEARCH</button>
            </form>
            <div>
                
            </div>
        </div>
    )
}

export default ImagesSearch;