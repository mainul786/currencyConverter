import { useEffect } from "react";

function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        .then(res => res.json())
        .then(data =>console.log(data))
    }, [])

}

export default useCurrencyInfo;