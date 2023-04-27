<!--
 * @Author: QuestionMark001
 * @Date: 2023-04-27 13:44:04
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2023-04-27 14:16:07
 * @FilePath: /11-hello-dog-1/src/App.vue
 * @Description: dogCom1 main vue app
 * 
 * Copyright (c) 2023 by QuestionMark001, All Rights Reserved. 
-->
<template>
    <div>
        <dog-com-1></dog-com-1>
        <dog-com-1></dog-com-1>
        <dog-com-1></dog-com-1>
        <dog-com-1></dog-com-1>
    </div>
</template>

<script>
import DogCom1 from './components/dogCom1.vue'

export default {
    components: {
        DogCom1
    }
}
</script>

<style>

</style>
