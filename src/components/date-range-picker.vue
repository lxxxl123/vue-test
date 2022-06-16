<template>
  <el-date-picker
    :picker-options="pickerOptions"
    size="small"
    v-model="value"
    type="daterange"
    format="yyyy-MM-dd"
    value-format="yyyy-MM-dd"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    @focus="focus"
    @change="changeDateRange"
    v-on:input="$emit('input', value)"
  ></el-date-picker>

</template>
<script>

/* 日期范围选择框 */

export default {
  name: 'date-range-picker',
  props: {
    value : {
      type: Array,
      default: () => []
    },
    // 时间范围限制 , 天 , 不填则不限制
    limitRange : {
      type: Number,
    }
  },
  data () {
    return {
      pickerMinDate: '',
      pickerOptions: {
        onPick: ({maxDate, minDate}) => {
          this.pickerMinDate = new Date(minDate).getTime()
        },
        disabledDate: time => {
          if (!this.limitRange) return false
          if (this.pickerMinDate) {
            const day1 = this.limitRange * 24 * 3600 * 1000
            let maxTime = this.pickerMinDate + day1
            let minTime = this.pickerMinDate - day1
            return time.getTime() > maxTime || time.getTime() < minTime
          }
        }
      }

    }
  },
  methods: {
    focus () {
      if (!this.value || this.value.length <= 1) {
        this.pickerMinDate = null
      }
    },
    changeDateRange () {
      if (!this.value) {
        this.pickerMinDate = ''
        this.$emit('date-change',['',''])
      } else {
        this.$emit('date-change', [this.value[0],this.value[1]])
      }
    }
  }

}
</script>

