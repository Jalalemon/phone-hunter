const loadUsers = async(searchText) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
        .then(data => displayUsers(data.data))
}
const displayUsers = users => {
    const cardField = document.getElementById('cardField');
    cardField.textContent = '';

    // show all system
    
    const showall = document.getElementById('show-all');

    if (users.length > 5) {
        users = users.slice(0,5);
        showall.classList.remove('d-none');
    } else {
    showall.classList.add('d-none');
    }
    // no found message

   const noPhone= document.getElementById('no-found-message');
    if (users.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }
    for (const user of users) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('col');
        postDiv.innerHTML = `
        
         <div class="card">
            <img src="${user.image}" class="" alt="...">
            <div class="card-body">
                <h5 class="card-title">${user.brand}</h5>
                <p> ${user.phone_name} </p>
                <p> ${user.slug} </p>
            </div>
        </div>
        `;
        cardField.appendChild(postDiv);
        
    }
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';
    loadUsers(searchText);
})

// loadUsers()