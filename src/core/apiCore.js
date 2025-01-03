import { API } from '../config';
import queryString from 'query-string';
export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method:'GET',
        mode: "cors"
    })
    .then(response => {
        console.log(response);
        return (response.json());
    })
    .catch(err => console.log(err));
};




export const getCategories = () => {
    return fetch(`${API}/categories`,{
        method:'GET'
    })
    .then(response => {
        return (response.json());
    })
    .catch(err => console.log(err));
};

export const getBrands = () => {
    return fetch(`${API}/brands`,{
        method:'GET'
    })
    .then(response => {
        return (response.json());
    })
    .catch(err => console.log(err));
};

export const getPcs = () => {
    return fetch(`${API}/pcs`,{
        method:'GET'
    })
    .then(response => {
        return (response.json());
    })
    .catch(err => console.log(err));
};

export const getHairs = () => {
    return fetch(`${API}/hairs`,{
        method:'GET'
    })
    .then(response => {
        return (response.json());
    })
    .catch(err => console.log(err));
};

export const getFilteredProducts = (skip,limit,filters = {}) => {
    const data = {
        limit,skip,filters
    }
    return fetch(`${API}/products/by/search`,{
           method:"POST",
           
           headers: {
                
                Accept: 'application/json',
                "Content-Type": "application/json"
           },
           body: JSON.stringify(data)
       })
       .then(response => {
           return (response.json());
        })
        .catch(err => {
            alert(err);
        });
   };

   export const list = params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`${API}/products/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return (response.json());
        })
        .catch(err => console.log(err));
};


export const read = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return (response.json());
        })
        .catch(err => console.log(err));
};

export const listRelated = productId => {
    return fetch(`${API}/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return (response.json());
        })
        .catch(err => console.log(err));
};


export const listRecommended = productId => {
    return fetch(`${API}/products/recommended/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return (response.json());
        })
        .catch(err => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return (response.json());
        })
        .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return (response.json());
        })
        .catch(err => console.log(err));
};

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ order: createOrderData })
    })
        .then(response => {
            return(response.json());
        })
        .catch(err => console.log(err));
};



export const addComment = (token, productId, comment) => {
    console.log(token);
    return fetch(`${API}/product/comment`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({productId, comment})
         
      })
      .then(response => {
        return response;
      })
      .catch(err => alert(err));
  };
  


export const contact = (user) => {
    return fetch(`${API}/contact`,{
           method:"POST",
           mode: "cors",
           headers: {
               //Accept: 'application/json',
               "Content-Type": "application/json"
           },
           dataType: 'text',
           body: JSON.stringify(user)
       })
       .then(response => {
           console.log(response);
           return (response.text());
        })
        .catch(err => {
            alert(err);
        })
   };

   export const socialLogin = user => {
    return fetch(`${API}/social-login`,
      {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        // credentials: 'include', // works only in the same origin
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .catch(err => console.log(err));
  };



