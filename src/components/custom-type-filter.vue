<template>
  <div class="btn-expend">
    <span>Type of place</span>
  </div>
  <div class="type-filter-container">
    <div class="type-filter">
    <!-- <input class="dropdown-input" id="toggle" type="checkbox" checked /> -->
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Entire place</div>
          <div class="type-title">Have a place to yourself</div>
        </div>
        <input type="checkbox" id="entire place" value="Entire place" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Private room</div>
          <div class="type-title">
            Have your own room and share some common spaces
          </div>
        </div>
        <input type="checkbox" id="private room" value="Private room" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Hotel room</div>
          <div class="type-title">
            Have a private or shared room in a boutique hotel, hostel, and more
          </div>
        </div>
        <input type="checkbox" id="hotel room" value="Hotel room" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Shared room</div>
          <div class="type-title">
            Stay in a shared space, like a common room
          </div>
        </div>
        <input type="checkbox" id="shared room" value="Shared room" />
        <span class="checkmark"></span>
      </label>
    </div>
    </div>
    <hr />
    <div class="type-save">
      <button class="clear">Clear</button>
      <button class="save">Save</button>
    </div>
  </div>
   
</template>

<script>
export default {
  props: ["modelValue"],
  methods: {
    changeSection(section) {
      this.$emit("update:modelValue", section);
    },
  },
};
</script>

<style>

.type-filter-container .type-of-place .type .type-header {
    font-size: 16px;
    line-height: 20px;
    color: #222;
    /* font-weight: bold; */
}

.type-filter-container .type-of-place .type .type-title {
    font-size: 14px;
    line-height: 20px;
    color: #717171;
}

.type-filter-container .type-of-place .container{
  cursor: pointer;
  text-align:start;
  user-select: none;
}

.type-filter-container .type-of-place .checkmark {
    position: absolute;
    top: 12px;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    /* border-color: #b0b0b0; */
    border-radius: 4px;
}

.type-filter-container .type-of-place .container input {
    position: absolute;
    cursor: pointer;
    height: 0;
    width: 0;
}



.type-filter-container {
    position: absolute;
    top: 285px;
    left: 172px;
    width: 340px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    border: 0.5px solid hsla(0,0%,46.3%,.28);
    border-radius: 12px;
    box-shadow: 0 10px 37px rgb(0 0 0 / 15%);
    padding: 20px;
}

.type-filter-container .type-save {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    border-top: 1px solid #ebebeb;
}
.type-filter-container .type-save .clear {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #222;
    text-decoration: underline;
}

.type-filter-container .type-save .save {
    cursor: pointer;
    margin: 0;
    text-align: center;
    text-decoration: none;
    width: auto;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif!important;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    border-radius: 8px;
    outline: none;
    padding: 8px 16px;
    border: none;
    background: #222;
    color: #fff;
}

.type-filter-container .type-of-place .container input:checked~.checkmark {
    background-color: #222;
}

.type-filter-container .type-of-place .container {
    padding-top: 12px!important;
    display: block;
    position: relative;
    padding-left: 34px;
    margin-bottom: 12px;
    cursor: pointer;
    text-align: start;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

</style>