<script setup></script>

<template>
    <div class="footer-content">
        <div class="footer-container">
            <div class="first-text">
                <h4>Business inquiries?: &nbsp 1-800-xxx-xxx</h4>
            </div>
            <div class="secondary-text">
                <h4>FAQ?</h4>
                <h4>ABOUT US?</h4>
                <h4>HELP?</h4>
                <h4>DONATE?</h4>
            </div>
            <h4 class="footer-text">MOMKEY MOVIES</h4>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Secular+One&display=swap');

* {
    font-family: Secular One;

}

.footer-content {
    padding: 1em;
    padding-bottom: 0;
    padding-left: 0;
    padding-top: 0;
}
.footer-container {
    width: 100vw;
    height: 35vh;
    display: block;
    margin: auto;
    background-image: url('../assets/images/footerbg.jpg');
    background-size: cover;
    background-position-y: 25%;
}

h4 {
    color: rgb(255, 255, 255);
    text-shadow: #000 1px 1px 1px;
    padding: 25px;
    font-size: 20px;
}
.footer-text {
    width: 50%;
}
.first-text {
    display: flex;
}

.secondary-text {
    display: flex;
    transform: translateY(-40%);

}</style>