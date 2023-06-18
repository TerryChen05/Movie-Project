<script setup></script>

<template>
    <div class="footer-content">
        <div class="footer-container">
            <div class="first-text">
                <h4>Business inquiries?: &nbsp 1-800-xxx-xxx</h4>
            </div>
            <div class="secondary-text">
                <h4>English</h4>
                <h4>About Us</h4>
                <h4>Help</h4>
                <h4>Privacy Policy</h4>
            </div>
            <h4 class="footer-text">© Monkey Movies. All Rights Reserved.</h4>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Secular+One&display=swap');

* {
    margin: 0;
    padding: 0;

}

.footer-content {
    padding: 1em;
    padding-bottom: 0;
    padding-left: 0;
    padding-top: 0;

}
.footer-container {
    width: 100vw;
    height: 50vh;
    background-image: url('../assets/images/footer.jpeg');
    background-size: cover;
    background-position-y: 35%;
}

h4 {
    color: rgb(140, 210, 227);
    text-shadow: #000 1px 1px 1px;
    padding: 25px;
    font-size: 18px;
}
.footer-text {
    transform: translateY(6em);
}
.secondary-text {
    transform: translateY(-40%);
    display: flex;
}
</style>