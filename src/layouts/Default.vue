<template>
  <div>
    <JournalHeader></JournalHeader>
    <div class="layout">
      <slot/>
    </div>
  </div>
</template>

<script>
import JournalHeader from '~/components/JournalHeader'

export default {
  components: {
    JournalHeader
  }
}
</script>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #3D3D3D;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
