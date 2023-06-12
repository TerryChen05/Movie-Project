<script setup></script>

<template>
    <div class="footer-content">
        <div class="footer-container">
            <div class="first-text">
                <h4>Business inquiries?: &nbsp 1-800-xxx-xxx</h4>
                <h4 class="footer-text">We at MONKEY MOVIES are a non-profit organization intended to support monkey????????</h4>
            </div>
            <div class="secondary-text">
                <h4>FAQ?</h4>
                <h4>ABOUT US?</h4>
                <h4>HELP?</h4>
                <h4>DONATE?</h4>
            </div>
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
}
.footer-container {
    width: 80vw;
    height: 25vh;
    display: block;
    margin: auto;
    background-image: url('../assets/images/footerbg.png');
    background-size: cover;
    background-position: 100%, 100%;
}

h4 {
    color: aliceblue;
    padding: 25px;
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