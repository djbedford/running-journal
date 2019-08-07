<template>
  <div>
    <JournalHeader v-if="showHeader"></JournalHeader>
    <div v-if="showAuthor" class="layout author">
      <g-image class="author-image" src="~/assets/images/author.jpg"></g-image>
      <p class="author-intro">A personal record of my attempts to improve my fitness through running</p>
    </div>
    <div class="layout">
      <slot/>
    </div>
    <JournalFooter></JournalFooter>
  </div>
</template>

<script>
import JournalHeader from '~/components/JournalHeader'
import JournalFooter from '~/components/JournalFooter'

export default {
  components: {
    JournalHeader,
    JournalFooter
  },
  props: {
    showHeader: { default: true },
    showAuthor: { default: true },
  }
}
</script>


<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #eeeeee;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.author {
  margin: 4rem auto;
  text-align: center;

  &-image {
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin-bottom: 1em;
  }

  &-intro {
    width: 75%;
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    color: #3D3D3D;
    font-weight: 500;
  }
}
</style>
