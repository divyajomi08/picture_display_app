

import axios from 'axios';

const api =async(term) => {
    
    const result=await axios.get('https://api.unsplash.com/search/photos', 
    { params: { query: term}, 
      headers: { Authorization: 'Client-ID l3IU9Mz6s10q3H43v1CxhfL6Z4wDJ7fWNmR7dTJeRGo' }
       
    }
    );
    return result;
};
export default api;