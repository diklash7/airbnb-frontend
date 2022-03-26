<template>
  <section class="app-filter">
    <section class="filter-container flex align-center justify-center">
      <el-form
        class="max-filter flex space-between align-center"
        :model="form"
        label-width="120px"
      >
        <div class="search-container flex flex-wrap">
          <label>Location
            <input
            class="search-location"
              type="search"
              list="location"
              v-model="form.city"
              placeholder="Where are you going?"
            />
            <datalist id="location">
              <option value="Tel Aviv"></option>
              <option value="Barcelona"></option>
              <option value="Paris"></option>
              <option value="Santorini"></option>
              <option value="New York"></option>
              <option value="Bali"></option>
            </datalist>
          </label>
        </div>

        <!-- <el-cascader :options="options">
          <template #default="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </el-cascader> -->

        <div class="block">
          <span class="date-picker-title flex space-between">
            <el-form-item label="Check in"> </el-form-item>
            <el-form-item label="Check out"> </el-form-item>
          </span>
          <el-date-picker
            v-model="dates"
            type="daterange"
            start-placeholder="Add dates"
            end-placeholder="Add dates"
            :default-value="[new Date(2022, 2, 1), new Date(2022, 3, 1)]"
          />
        </div>


        <el-form-item>
          <el-button class="submit-btn" type="primary" @click="onSubmit">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="17"
                fill="#ffffff"
                stroke="#ffffff"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg> </span
          ></el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        city: "",
        dates: [],
      },
    };
  },
};
</script>
