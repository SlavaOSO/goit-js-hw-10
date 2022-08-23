export function fetchCountries(name) {
    const BASE_URL = "https://restcountries.com/v3.1/";
    return fetch(`${BASE_URL}name/${name}?`)
        .then((response) =>
        {        
        if (!response.ok) {            
            throw new Error ('Oops, there is no country with that name');
          }
                
            return response.json();
        //     if (response.status === 200) {            
        //     return response.json();
        //   }
                
        //   if (response.status === 404) {
        //     return Promise.reject('Error 404');
        //   }
    })
    
}