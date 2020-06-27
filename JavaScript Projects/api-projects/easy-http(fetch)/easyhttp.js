/**
 * Easy HTTP USING Fetch API
 * Librarty for making HTTP requests
 * 
 * @version 2.0
 * @author Anish Saxena
 * @license Self
 */


 class EasyHTTP{
     //Make HTTTP request
        get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
                 .then(res => res.json())
                 .then(data => resolve(data))
                 .catch(err => reject(err))
        })
    }

    //Post HTTP Post Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then( res => res.json())
            .then( data => resolve(data))
            .catch( err => reject(err))
        })
    }


    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then( res => res.json())
            .then( data => resolve(data))
            .catch( err => reject(err))
        })
    }


    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELeTE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then( res => res.json())
            .then( data => resolve('Resource Deleted'))
            .catch( err => reject(err))
        })
    }
}

   