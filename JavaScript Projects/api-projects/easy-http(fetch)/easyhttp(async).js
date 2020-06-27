/**
 * Easy HTTP USING Fetch API with async requests
 * Librarty for making HTTP requests
 * 
 * @version 3.0
 * @author Anish Saxena
 * @license Self
 */


 class EasyHTTP{
     //Make HTTTP request
        async get(url){
        const response = await fetch(url)
        const data = await response.json();

        return data;
      
    }

    //Post HTTP Post Request
    async post(url, user) {
           const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await response.json();

            return data;
       
    }


    async put(url, user) {
          const response = await fetch(url, {
             method: 'PUT',
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(user)
         })
        const data = await response.json();

        return data;
       
    }


    async delete(url) {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await 'Resource Deleted';

            return data;
    }
}

   