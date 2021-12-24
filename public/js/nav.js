const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <a href="/">
    <img src="../imagess/icons8-pets-50.png" class="brand-logo" alt="">
    <a>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a>
            <img src="../imagess/icons8-user-30.png" id="user-img" alt="">
            <div class="login-logout-popup hide">
                <p class="account-info">Log in as, name</p>
                <button class="btn" id="user-btn">Log Out</button>
            </div>
        </a>
        <a href="/cart"><img src="../imagess/icons8-shopping-cart-100.png" alt=""></a>
    </div>
</div>

<ul class="links-container">
<li class="link-item"><a href="/" class="link">home</a></li>
<li class="link-item"><a href="#dog-products" class="link">Dog</a></li>
<li class="link-item"><a href="#cat-products" class="link">Cat</a></li>
<li class="link-item"><a href="/" class="link">Bird</a></li>
<li class="link-item"><a href="/" class="link">Small Pets</a></li>
</ul>
    `;
}

createNav();

// nav popup
const userImageBtn = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageBtn.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null)
    if (user != null) {
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // means user is logged out
        popuptext.innerHTML = "login to place order"
        actionBtn.innerHTML = 'log in'
        actionBtn.addEventListener('click', () => {
            location.href = '/login'
        })
    }
}

// search box
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if (searchBox.value.length) {
        location.href = `/search/${searchBox.value}`;
    }
})