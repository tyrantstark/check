<template>
  <div class="card-style">
    <b-card class="card-style">
      

        <b-card-img top="true" alt="PICTURE of meal" :src="item.IMG"  />
    
      <b-card :title="item.Item_name">
        <hr />

        <b-card-text>
          <b-row>
            <b-col md="6">
            {{ item.Type }}
            </b-col>
            <b-col md="6">
              <h6>Quantity</h6>

            </b-col>
          
          </b-row>
        </b-card-text>
        <b-row>
          <b-col md="6">Price :{{ item.Item_cost }} /-RS</b-col>
          <b-col md="6">
            <Button onClick={addToCartHandler} className="bg-warning text-white">
              Add to cart
            </Button>
          </b-col>
        </b-row>

      </b-card>
    </b-card>

    <b-modal id="modal-1">
      <b-modal-header closeButton>
        <b-modal-title>{{ item.Item_name }}</b-modal-title>
      </b-modal-header>
      <b-container>
        <div>
          <b-card-img top="true" :src="item.IMG" height="250px" />

        </div>
        <div>
          <h3>{{ item.Item_name }}</h3>
          <h6>{{ item.Discription }}</h6>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    item :{
    Item_name: String,
    IMG: String,
    Discription: String,
    Type : String,
    Item_cost: Number}
  },

  name: 'FoodItem',

  data() {
    return {
    
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style>
.card-style {
  display: inline-block;
  box-sizing: border-box;
  width :max-content;
  height: max-content;
  height: 515 px;


}

.card-img-top {
  object-fit: cover;
      width: 100%;
      max-width: 300px;
      height: inherit;
}
</style>