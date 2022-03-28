<template>
    <div>
       <button :value="modelValue" @click="toggleBtn" >WiFi</button> 
    </div>
</template>

<script>
export default {
    props:{
    modelValue: Boolean,
    },

 methods: {
     toggleBtn(){
         console.log(modelValue);
         this.$emit('update:modelValue', !this.modelValue)
     }
 }
}
</script>