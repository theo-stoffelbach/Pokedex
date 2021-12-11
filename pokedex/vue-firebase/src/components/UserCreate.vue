<template>
    <div class="card card-body mt-4">
        <form>

        </form>
    </div>
</template>
<script>
 import {createUser} from '@/firebase'
 import { reactive } from 'vue'

 export default {
     setup() {
         const form = reactive({ name:'',email:''})
         const onSubmit = async () => {}
         return { form, onSubmit}
     }
 }
</script>