<script lang="ts">
	import Status from "../tableUser/status.svelte";
    import UserIcon from "../tableUser/userIcon.svelte";
    import FriendUsername from "./friendUsername.svelte";
    let { user } = $props();
    console.log(user.icon);
</script>
<style>
    div{
        display:grid;
        grid-template-columns:1vh 6vh 20vh 3vh 1fr 4vh;
        justify-items: center;
        align-items: center; 
        border-bottom: 1px solid #2c2f33;
    }
    div:hover{
        cursor: pointer;
        background-color: #3d3f42;
    }
</style>
<div>
    <!-- svelte-ignore attribute_quoted -->
    <UserIcon --color = "{user.icon}" --grid-column = 2/>
    <!-- svelte-ignore attribute_quoted -->
    <FriendUsername user = "{user.username}" --grid-column = 3/>
    <!-- svelte-ignore attribute_quoted -->
    <Status --statusColor = "{user.status}" --grid-column = 6/>
</div>