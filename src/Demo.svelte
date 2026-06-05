<script lang="ts">
  let count = 0
  function inc() {
    count += 1
  }
</script>

<div class="demo">
  <section>
    <button on:click={inc}>点我累加</button>
    <p>点击次数：{count}</p>
  </section>
</div>

<style lang="less" scoped>
  .demo {
    background: #f0f0f0;
  }
</style>
