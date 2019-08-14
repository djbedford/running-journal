<template>
  <Layout :show-header="false">
    <div class="journal">
      <JournalEntry v-for="edges in $page.entries.edges" :key="edges.node.id" :entry="edges.node" />
    </div>
    <Pager :info="$page.entries.pageInfo" class="pagination"/>
  </Layout>
</template>

<page-query>
query Journal($page: Int) {
  entries: allEntry(order: DESC, perPage: 2, page: $page) @paginate {
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
        excerpt
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

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;

  & a {
    color: #3D3D3D;
    text-align: center;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      color: #aaaaaa;
    }
  }
}
</style>
