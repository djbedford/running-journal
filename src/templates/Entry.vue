<template>
    <Layout>
        <div v-html="$page.entry.content"></div>
    </Layout>
</template>

<page-query>
query Entry ($path: String!) {
    entry: entry (path: $path) {
        title
        author
        content
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.entry.title
        }
    }
}
</script>

