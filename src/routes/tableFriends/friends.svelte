<script lang="ts">
    import Friend from './friend.svelte';
</script>
<style>
    div{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        border-bottom: 1px solid #2c2f33;
        border-right: 1px solid #2c2f33;
    }
</style>
<div>
    <Friend user = {{username: "Mitic", status : "green", icon: "#7a3bcc"}}/>
    <Friend user = {{username: "Biro", status : "#cc3b4a" , icon: "#cccc3b"}} />
    <Friend user = {{username : "Kure", status : "#cccc3b", icon:"purple"}} />
</div>
