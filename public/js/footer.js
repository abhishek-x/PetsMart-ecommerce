const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>
                <div class="footer-content">
                    <img src="../imagess/icons8-pets-50.png" class="logo" alt="">
                    <div class="footer-ul-container">
                        <ul class="category">
                            <li class="category-title">Dogs</li>
                            <li><a href="#" class="footer-link">Clothes</a></li>
                            <li><a href="#" class="footer-link">Grooming</a></li>
                            <li><a href="#" class="footer-link">Feeding Supplies</a></li>
                            <li><a href="#" class="footer-link">Beds and Furniture</a></li>
                            <li><a href="#" class="footer-link">Dog treats</a></li>
                            <li><a href="#" class="footer-link">Toys</a></li>
                    
                        </ul>
                        <ul class="category">
                            <li class="category-title">Cats</li>
                            <li><a href="#" class="footer-link">Clothes</a></li>
                            <li><a href="#" class="footer-link">Grooming</a></li>
                            <li><a href="#" class="footer-link">Feeding Supplies</a></li>
                            <li><a href="#" class="footer-link">Beds and Furniture</a></li>
                            <li><a href="#" class="footer-link">Cat treats</a></li>
                            <li><a href="#" class="footer-link">Toys</a></li>
                    
                        </ul>
                        </div>
                        </div>
                        <p class="footer-title">about company</p>
            <p class="info">We love all things dog!<br>
        
                PetsMart celebrates the love and passion pet parents have for their pets. Starting with the vision to provide and curate reliable information to pet lovers we have evolved into a platform that also brings you a wide range of pet products and services covering the entire lifecycle of a pet.
                
                PetsMart.in’s online shop, continues to compliment the product offerings with services such as our knowledge centre and breed selection tool, that provide in-depth information about dogs, cats, birds and other small pets.
                
                With trusted and secure payment options shopping with PetsMart.in’s online pet supply store, is as much fun as our furry friends.
                
                We at PetsMart.in truly believe that every pet deserves love and attention and our products ensure that your pet stays happy and pampered, always!</p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Made with <span class="heart">❤️<span> by @sakshi</p>
                    </footer>
    `;
}

createFooter();