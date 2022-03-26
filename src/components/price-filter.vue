// Vue.component("histo-gram")

  <template>
  <div class="price">
    <div class="chart" :style="columns" v-html="chart"></div>
    <div class="range-slider">
      <input type="range" v-model="bucket.price.min" :min="min" :max="max" />
      <input type="range" v-model="bucket.price.max" :min="min" :max="max" />
    </div>
    <input type="number" v-model="bucket.price.min" />
    <input type="number" v-model="bucket.price.max" />
  </div>
</template>

    <script>
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    histogram: {
      type: String,
      default: [],
    },
  },
  data: function () {
    return {
      steps: 50,
      maxHeight: 100,
      bucket: {
        price: {
          min: null,
          max: null,
        },
      },
    };
  },
  created() {
    this.bucket.price.min = this.min;
    this.bucket.price.max = this.max;
  },
  computed: {
    columns() {
      return {
        "grid-template-columns": "repeat(" + this.steps + ",1fr)",
      };
    },
    values: function () {
      return this.shortenAvgArray(
        this.histogram.split(",").map((a) => parseInt(a, 10)),
        this.steps
      );
    },
    chart: function () {
      const barHeight = Math.floor(this.maxHeight / Math.max(...this.values));
      const bars = [];
      const factor = this.max / this.steps;

      this.values.forEach((v, k) => {
        let div = document.createElement("div");
        div.classList.add("bar");

        if (k < this.bucket.price.min / factor) div.classList.add("inactive");
        if (k > this.bucket.price.max / factor) div.classList.add("inactive");

        div.style.height = Math.floor(v * barHeight) + "px";
        bars.push(div.outerHTML);
      });

      return bars.join("");
    },
  },
  methods: {
    shortenAvgArray: function (arr, outLength) {
      if (arr.length === 0) return false;

      // If to short just double it then start the transform
      while (arr.length < outLength) {
        const newArr = [];
        arr.forEach((i) => {
          newArr.push(i);
          newArr.push(i);
        });
        arr = newArr;
      }

      // incresefactor
      const n = arr.length / outLength;
      const result = [];

      let c = 0;
      while (result.length < outLength) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
          sum += arr[c + i] || 0;
        }
        result.push(sum / n);
        c++;
      }
      return result;
    },
  },
};

new Vue({ el: "#app" });
</script>

<style>
body,
html {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  background: #f2f2f2;
}

#app {
  padding: 30px;
  background: #fefefe;
  margin: auto;
  width: 50%;
}

.price {
  margin: auto;
  width: 100%;
  height: 100px;
  /* input[type="number"]:first-of-type { */
    float: left;
    width: 20%;
  }
  input[type="number"]:last-of-type {
    float: right;
    width: 20%;
  }

  .chart {
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    .bar {
      background: #003;
      min-height: 2px;
      align-self: end;
      margin: 1px;
      &.inactive {
        background: #eee;
      }
    }
  }
  .range-slider {
    position: relative;
    width: 100%;
    height: 40px;
    input[type="range"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      outline: none;
      -webkit-appearance: none;
      background: none;
      &::-webkit-slider-runnable-track,
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: none;
      }
      &::-webkit-slider-runnable-track {
        width: 200px;
        height: 1px;
        background: #003d7c;
      }
      &::-webkit-slider-thumb {
        position: relative;
        height: 30px;
        width: 15px;
        margin-top: -15px;
        background: #fff;
        border: 1px solid #003d7c;
        border-radius: 2px;
        z-index: 1;
      }

      &:nth-child(1)::-webkit-slider-thumb {
        z-index: 2;
      }
    }
  }
}
</style>




    
