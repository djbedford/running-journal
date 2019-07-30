<template>
  <Layout>
    <div class="journal">
      <JournalEntry v-for="edges in $page.entries.edges" :key="edges.node.id" :entry="edges.node" />
    </div>
    <Pager :info="$page.entries.pageInfo"/>
  </Layout>
</template>

<page-query>
query Journal($page: Int) {
  entries: allEntry(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        date
        author
        path
        content
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import JournalEntry from '~/components/JournalEntry'

export default {
  metaInfo: {
    title: "djbedford"
  },
  components: {
    Pager,
    JournalEntry
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
