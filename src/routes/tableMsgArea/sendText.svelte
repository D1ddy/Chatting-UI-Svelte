<script lang="ts">

</script>
<style>
     @import url('https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&family=Iceland&family=Orbitron:wght@700&family=VT323&display=swap');
    #sendTextDiv{
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1vh 1fr 5vh 5vh;
        border-left: 1px solid #2c2f33;
        border-top: 1px solid #2c2f33;
    }
    #textInput{
        appearance: none;
        background-color:rgb(71, 70, 75);
        width: 90%;
        height: 50%;
        border: 1px solid transparent;
        border-radius: 8px;
        box-shadow: 0 0 0 2px var(25%, transparent);
        grid-column: 2;
        justify-self: center;
        align-self: center;
        justify-content: center;
        outline: none;
        color: #d6cdcd;
        font-family: "Gelasio", serif;
        font-size: 2vh;
    }
    button{
        appearance: none;
        background-color: transparent;
        border: none;
    }
</style>
<div id = "sendTextDiv">
    <input type="text" id= "textInput">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="rgb(71, 70, 75)" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
    </button>
</div>