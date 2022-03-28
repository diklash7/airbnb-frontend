<template>
 
<section class="order-details details-layout">
    <section class="order-details-container">
    <h1>Your trip:</h1>
    <div class="dates-order">
         <div>
          <h3>Dates:</h3>
          <span>Apr 22 – 24</span>
         </div>
       <router-link class="btn-edit" to="/">Edit</router-link>

     </div>
     <div class="guests-order">
          <div>
            <h3>Guests:</h3>
             <span>1 guest</span>
          </div>
        <router-link class="btn-edit" to="/">Edit</router-link>
       </div>

       <hr>
          <h2>Choose how to pay</h2>
          <h3> Pay in full</h3>
        <pre>
  Pay the total now and you're all set.
           </pre>
        <h3> Pay part now, part later </h3>
        <pre>
   Pay ₪342.36 now, and the rest (₪1,369.41)
   will be automatically charged to 
   the same payment method on Apr 13,
   2022. No extra fees.
        </pre>

      </section>

   </section>
    <hr>
</template>

<script>
export default {
 
methods: {
  
}
}
</script>