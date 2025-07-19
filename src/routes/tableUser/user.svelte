<script lang="ts">
    import Settings from './userSettings.svelte';
    import UserIcon from './userIcon.svelte';
	import Status from './status.svelte';
	import Username from './username.svelte'
    import { icon } from '../userStore';
    let changeIcon:string = $state('');
    icon.subscribe((value) => {
        changeIcon = value;
    })
</script>
<style>
     @import url('https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&family=Iceland&family=Orbitron:wght@700&family=VT323&display=swap');
    #userDiv{
        display:grid;
        grid-template-columns:1vh 6vh 20vh 3vh 1fr 4vh;
        justify-items: center;
        align-items: center;  
    }
    #usernameStatusDiv{
        display: grid;
        grid-template-columns: 1fr 1vh 1fr;
        gap: 1vh;
        grid-column: var(--grid-column);
        grid-row: var(--grid-row);
        width: 100%;
        justify-self: start;
        align-self: center;
    }
</style>
<div id = 'userDiv'>
    <!-- svelte-ignore attribute_quoted -->
    <UserIcon --grid-column = 2  --color = '{changeIcon}'/>   
    <div id = "usernameStatusDiv">
        <Username />
        <Status --statusColor = "green"/>
    </div>
    <Settings />
</div>