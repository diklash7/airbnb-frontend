<template>
  <section class="app-filter">
    <section class="filter-container flex align-center justify-center">
      <el-form
        class="max-filter flex space-between align-center"
        :model="form"
        label-width="120px"
      >
        <div class="search-container">
          <label class="search-label flex flex-column"
            >Location
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

        <div class="check-in-out">
          <div class="date-picker-title flex">
            <el-form-item label="Check in"> </el-form-item>
            <el-form-item label="Check out"> </el-form-item>
          </div>
          <el-date-picker
            v-model="form.dates"
            type="daterange"
            start-placeholder="Add dates"
            end-placeholder="Add dates"
            :default-value="[new Date(2022, 2, 1), new Date(2022, 3, 1)]"
          />
        </div>

        <Popper>
          <div class="guest-container">
            <label class="guest-label flex flex-column"
              >Guests
              <input
                type="text"
                v-model="form.city"
                placeholder="Add guests"
                disabled
              />
            </label>
          </div>
          <template #content>
            <div class="guests-modal flex flex-column">
              <div class="guest-type-label flex space-between align-center">
                <div class="guest-label flex flex-column">
                  <h3>Adults</h3>
                  <p>Ages 13 or above</p>
                </div>
                <div class="guest-btns flex align-center space-between">
                  <button type="button">
                    <span class="material-icons-sharp"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        /></svg
                    ></span>
                  </button>
                  <span class="guests-num">0</span>
                  <button type="button">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#222222"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <hr />

              <div class="guest-type-label flex space-between align-center">
                <div class="guest-label flex flex-column">
                  <h3>Children</h3>
                  <p>Ages 2-12</p>
                </div>
                <div class="guest-btns flex align-center space-between">
                  <button type="button">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        /></svg
                    ></span></button
                  ><span class="guests-num">0</span
                  ><button type="button">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#222222"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </Popper>

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
import Popper from "vue3-popper";
export default {
  data() {
    return {
      form: {
        city: "",
        dates: [],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/explore");
    },
  },
  components: {
    Popper,
  },
};
</script>
