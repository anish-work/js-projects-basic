class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3 mt-2">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View on GitHub</a>
                    </div> 
                    
                    <div class"col-md-9">
                         <span class="badge badge-primary" >Public Repos: ${user.public_repos}</span>
                         <span class="badge badge-primary" >Public Gists: ${user.public_gists}</span>
                         <span class="badge badge-primary" >Followers: ${user.followers}</span>
                         <span class="badge badge-primary" >Following: ${user.following}</span>
                         <br><br>
                         <ul class="list-group">
                             <li class="list-group-item">Name: ${user.name}</li>
                             <li class="list-group-item">Bio: ${user.bio}</li>
                             <li class="list-group-item">Location: ${user.location}</li>
                             <li class="list-group-item">Company: ${user.company}</li>
                         </ul>
                     </div>
                </div>
                <h3 class="page-heading">Latest Repos</h3>
                <div id="repos"></div>
        `
    }
        showRepos(repos){
            let output= '';

            repos.forEach((repo) => {
                output +=`
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary" >Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-primary" >Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-primary" >Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                
                </div>
                `
                document.getElementById('repos').innerHTML = output;
            })
        }
    //Clear UI
    clearUser() {
        this.profile.innerHTML = '';
    }

    //Show error message
    showError(){
        const error = document.querySelector('.alert')
        if(error){
            null;
        }
        else{
            const div = document.createElement('div');

            div.className = 'alert alert-danger';

            div.appendChild(document.createTextNode('User Not found'));
            
            const container = document.querySelector('.searchContainer');

            const search = document.querySelector('.search');

            container.insertBefore(div, search);

            setTimeout(() => {
                div.remove()
                }, 2000)
            }
        
    }
    
}   