<template>
  <div class="container mb-5">
    <h4 class="my-4 fw-600 d-blue">Our top Food options</h4>
      <div class="row">
        <FoodItem v-for="meal in Meals" :key="meal.Item_id" :item="meal" v-on:click="foodDetails(items)" class="col-md-4 pointer"/>
      </div>
   
    <!-- <FoodItem :item="Meals[0]"/>
    <FoodItem :item="Meals[1]" />
    <FoodItem :item="Meals[2]" />
    <FoodItem :item="Meals[3]" />
    <FoodItem :item="Meals[4]" />
    <FoodItem :item="Meals[5]" />
    <FoodItem :item="Meals[6]" />
    <FoodItem :item="Meals[7]" />
    <FoodItem :item="Meals[8]" /> -->
  </div>
</template>

<script>
import FoodItem from "./FoodItem.vue"
import Meals from "../../public/data/data"
export default {
  data () {
    return {
        Meals: Meals
    }
  },
 
    name: 'MealMenu',

   components : {
    FoodItem
   }
};
</script>

<style scoped>

</style>