<script lang="ts">
    let user:any = $props();
</script>
<style>
    #username{
        font-size: 2.5vh;
        color: #d6cdcd;
        font-family: "Gelasio", serif;
        grid-column: var(--grid-column);
        grid-row: var(--grid-row);
        justify-self: start;
    }
</style>
<div id = "username">{user.user}</div>