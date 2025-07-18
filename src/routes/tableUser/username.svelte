<script lang="ts">
    import { username } from "../userStore";
    let user:string = $state("");
    username.subscribe((value) => {
        user = value;
    })
</script>
<style>
    #username{
        font-size: 2.5vh;
        color: #d6cdcd;
        font-family: "Gelasio", serif;
    }
</style>
<div id = "username">{user}</div>

