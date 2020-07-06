//Create User Profiles
const data = [
    {   
        name: 'John Doe',
        age: '33',
        gender: 'male',
        lookingFor: 'female',
        location: 'Miami,FL',
        image: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    {   
        name: 'Jen Smith',
        age: '26',
        gender: 'female',
        lookingFor: 'male',
        location: 'Boston,MA',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {   
        name: 'William Johnson',
        age: '30',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston,MA',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    }
    
]

const profiles = profileIterator(data);

//Next Event
document.getElementById('next').addEventListener('click', nextProfile)

//Call first profile
nextProfile();
//Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name:${currentProfile.name}</li>
                <li class="list-group-item">Age:${currentProfile.age}</li>
                <li class="list-group-item">Gender:${currentProfile.gender}</li>
                <li class="list-group-item">Location:${currentProfile.location}</li>
                <li class="list-group-item">Looking For:${currentProfile.lookingFor}</li>
            </ul> `;

            document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    }else{
        window.location.reload();
    }

}

function profileIterator(profiles){
   let  nextIndex = 0;
   return {
       next : function() {
                return nextIndex < profiles.length ?
                    {
                        value: profiles[nextIndex++],
                        done:false
                    }:
                    {
                        done:true
                    }
        }
   }
}  