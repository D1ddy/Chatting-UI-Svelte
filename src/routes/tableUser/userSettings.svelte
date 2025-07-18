<script lang="ts">
    let settings:boolean = $state(false);
    import UserIcon from "./userIcon.svelte";
	import { username } from '../userStore';
    let colors:Array<string> = ['#3b62cc','#7a3bcc','#cccc3b','#cc3b4a'];
    let inputValue:any = $state();
    let name:string = $state('');
    username.subscribe((value) => {
        name = value;
    })
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&family=Iceland&family=Orbitron:wght@700&family=VT323&display=swap');
    #settingsGear{
        grid-column: 5;
        justify-self: end;
        align-self: center;
        cursor: pointer;
    }
    #settings{
        position:absolute;
        top: 20%;
        left: 45%;
        width: 40vh;
        height: 50vh;
        background-color:rgb(71, 70, 75);
        border-radius: 5px;
        display: grid;
        grid-template-rows: 2vh 7vh 1fr 1fr 1fr;
        grid-template-columns: 2vh 1fr 3vh;
    }
    #settingsTag{
        grid-column: 2;
        grid-row: 2;
        font-size: 4vh;
        color: #d6d6d6;
        align-self: center;
        justify-self: center;
    }
    #chooseIcon{
        display: flex;
        grid-row: 4;
        grid-column: 2;
        place-self: center;
        gap: 2vh;
    }
    #changeUsername{
        grid-row: 3;
        grid-column: 2;
        outline: none;
        appearance: none;
        width: 100%;
        height: 30%;
        align-self: end;
        justify-content: center;
        border-radius: 10px;
        background-color: rgb(91, 90, 94);
        color: #d6d6d6;
        font-size: 2vh;
        font-family: "Gelasio", serif;
        border: 1px solid transparent;
    }
    #buttonsContainer{
        grid-column: 2;
        grid-row: 5;
        justify-self: center;
        align-self: top;
        justify-content: center;
    }
    .buttons{
        appearance: none;
        cursor: pointer;
        width: 10vh;
        height: 6vh;
        background-color: rgb(91, 90, 94);
        border: 1px solid transparent;   
        border-radius: 3px;
        color: #d6d6d6;
        font-size: 2vh;
        font-family: "Gelasio", serif;
    }
</style>
<div id = "settingsGear">
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svg xmlns="http://www.w3.org/2000/svg" width="2.5vh" height="2.5vh" fill="#d6cdcd" class="bi bi-gear" viewBox="0 0 16 16" onclick="{() => {
    if(settings){
        settings = false;
    }
    else settings = true;
}}">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>


</div>
{#if settings}
    <div id="settings">
            <div id="settingsTag"> Settings </div>
            <input type="text" id="changeUsername" placeholder="Change Username" bind:this={inputValue} >
            <div id = "chooseIcon">
            {#each colors as color}
                <!-- svelte-ignore attribute_quoted -->
                <UserIcon  --color = '{color}' />
            {/each}
            </div>
            <div id = "buttonsContainer">
                <button class="buttons" onclick="{() => {
                    username.update(name => inputValue.value);
                    settings = false;
                }}"> Confirm </button>
                <button class = "buttons" onclick='{() =>{
                    settings = false;
                }}'> Cancle </button>
            </div>
    </div>
{/if}