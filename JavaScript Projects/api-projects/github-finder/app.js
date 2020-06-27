const github = new GitHub;
const ui= new UI;


//Search Input
const searchUser = document.getElementById('searchUser')


//Add Keyboard Event
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){   
        github.getUser(userText)
            .then( data => {
                if(data.profile.message === 'Not Found'){
                    //Show alert
                    ui.showError();
                    ui.clearUser();
                }else{
                    //Show Profile
                   ui.showProfile(data.profile);
                   ui.showRepos(data.repos);
                }
            })
    }else{
        //Clear Profile
        ui.clearUser();
    }
})