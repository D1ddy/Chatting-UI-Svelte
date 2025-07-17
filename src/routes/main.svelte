<script lang="ts">
    import Header from './tableHeader/header.svelte';
    import Friends from './tableFriends/friends.svelte';
    import MsgArea from './tableMsgArea/msgArea.svelte';
    import User from './tableUser/user.svelte';
    import SendText from './tableMsgArea/sendText.svelte';
</script>
<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 5vh);
    }
    #centeredDiv{
        display: grid;
        grid-template-rows: 5vh 55vh 10vh;
        grid-template-columns: 40vh 1fr;
        height: 70vh;
        width: 120vh;
        background-color: #232425;
    }
</style>
<main>
    <div id = "centeredDiv">
        <Header />
        <Friends />
        <MsgArea  />
        <User />
        <SendText />        
    </div>
</main>
