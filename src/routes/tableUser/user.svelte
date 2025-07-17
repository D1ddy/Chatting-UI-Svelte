<script lang="ts">
    import Settings from './userSettings.svelte';
    let user:string = $state("Username");
    let status:any;
    let icon:any;
</script>
<style>
     @import url('https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&family=Iceland&family=Orbitron:wght@700&family=VT323&display=swap');
    #userDiv{
        display:grid;
        grid-template-columns:1vh 6vh 20vh 3vh 1fr 4vh;
        justify-items: center;
        align-items: center;
        
    }
    #profilePic{
        width: 5vh;
        height: 5vh;
        border-radius: 50%;
        grid-column: 2;
        background-color: #3b62cc;
    }
    #usernameStatusDiv{
        display: grid;
        grid-template-columns: 1fr 1vh 1fr;
        justify-self: start;
    }
    #username{
        font-size: 2.5vh;
        color: #d6cdcd;
        font-family: "Gelasio", serif;
    }
    #status{
        width: 1vh;
        height: 1vh;
        grid-column: 3;
        background-color: green;
        border-radius: 50%;
        justify-self: start;
        align-self: center;
    }
</style>
<div id = 'userDiv'>
    <div id = "profilePic" bind:this={icon}></div>
    <div id = "usernameStatusDiv">
        <div id = "username"> {user} </div>
        <div id = "status" bind:this={status}></div>
    </div>
    <Settings changeUser = {{user,status,icon}}/>
</div>