<template>
    <body>
        <div class = "all_txt">
            <div class = "first_text">
                <p class = "text_pika">Pikachu</p>
                <p class = "text_charm">Charmander</p>
                <p class = "text_pidgey">Pidgey</p>
            </div>
            <div class = "second_text">
                <p class = "text_bulb">Bulbasaure</p>
                <p class = "text_squir">Squirtle</p>
                <p class = "text_blast">Blastoise</p>
            </div>
        </div>
        <div class = "pikachu_img"><img src="../assets/Pikachu.png"></div>
    </body>
</template>

<script>
export default ({
    name: 'Team_pok',
})
</script>

<style>
body {
    background-color: #121233;
}
.all_text {
    justify-content: space-between;
}
/* change opacity for the background*/
.first_text { 
    margin-top: 6em;
    display: flex;
    width: 300px;
    position: absolute;
    top: -16px;
    right: 0em;
    flex-direction: column;
    margin-right: 15em; 
    color: #f88;
}
.second_text {
    position: absolute;
    top: 0px;
    color: #f88;
    margin-top: 5em;
    display: flex;
    width: 300px;
    flex-direction: column;
    margin-left: 15em;
}
.text_pika {
    background-image: url("../assets/background_pika.png");
    background-size: 50%;
    font-size: 30px;
    height: 70px;
    border: yellow 2px solid;
    border-radius: 30px;
    padding-left: 50px;
    padding-top: 30px;
}
.text_charm {
    border: red 2px solid;
    border-radius: 30px;
    font-size: 30px;
    height: 70px;
}
.text_pidgey {
    border: grey 2px solid;
    border-radius: 30px; 
    font-size: 30px;
    height: 70px;
}
.text_bulb {
    border: green 2px solid;
    border-radius: 30px;
    font-size: 30px;
    height: 70px;
}
.text_squir {
    border: blue 2px solid;
    border-radius: 30px;
    font-size: 30px;
    height: 70px;
}
.text_blast {
    border: #3b147b 2px solid;
    border-radius: 30px;
    font-size: 30px;
    height: 70px;
}
.pikachu_img {
    display: inline;
    position: relative;
    right: -280px;
    top: 20px;
}
img {
    width: 90px;
	height: 90px;
}

</style>