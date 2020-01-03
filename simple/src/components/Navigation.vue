<template>
    <div>
        <nav class="navigation">
            <router-link to="/knock">Main</router-link>
            <router-link to="/around">둘러보기</router-link>
            <router-link to="/menu">메뉴</router-link>
            <router-link to="/reservation">예약하기</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navigation',

}
</script>
<style scoped>
    .navigation{
    border:2px solid red;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
}
.navigation>*{
    flex:1;
    border:2px solid orange;
    list-style:none;
    text-align: center;
    padding:10px 0;
    font-size: 1.3rem;
}
</style>