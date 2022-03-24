<template>
  <section class="app-filter">
    <section class="filter-container flex align-center justify-center">
      <el-form
        class="max-filter flex space-between align-center"
        :model="form"
        label-width="120px"
      >
        <el-form-item class="location-input" label="Location">
          <el-input
            type="search"
            v-model="form.city"
            placeholder="Where are you going?"
          />
        </el-form-item>

        <!-- <el-cascader :options="options">
          <template #default="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </el-cascader> -->

        <div class="block">
          <el-date-picker
            v-model="value2"
            type="daterange"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
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
        date1: "",
        date2: "",
      },
    };
  },
};
</script>
