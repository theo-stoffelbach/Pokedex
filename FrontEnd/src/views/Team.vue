<template>
    <body>
        <div class = "all_txt">
            <div class = "first_text">
                <div class = "text_pika"><p>Pikachu</p></div>
                <div class = "text_charm"><p>Charmander</p></div>
                <div class = "text_pidgey"><p>Pidgey</p></div>
            </div>
            <div class = "second_text">
                <div class = "text_bulb"><p>Bulbasaure</p></div>
                <div class = "text_squir"><p>Squirtle</p></div>
                <div class = "text_blast"><p>Blastoise</p></div>
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

//300px width
<style>
body {
    background-color: #121233;
}
.all_text {
    justify-content: space-between;
}
.first_text {
    margin-top: 6em;
    position: absolute;
    top: -16px;
    right: 0em;
    color: #f88;
    display: flex;
    width: 300px;
    flex-direction: column;
    margin-right: 15em; 
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
    font-size: 30px;
    height: 70px;
    border: yellow 2px solid;
    border-radius: 30px;
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
    border: red 2px solid;
    display: inline;
    position: relative;
    right: 550px; 
    height: 190px;
    
}
</style>