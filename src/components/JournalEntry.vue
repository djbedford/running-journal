<template>
    <div class="entry">
        <h1><g-link :to="entry.path">{{ entry.title }}</g-link></h1>
        <p class="small">Entered on {{ entry.date }} by {{ entry.author }}</p>
        <div class="content" v-html="entry.content"></div>
    </div>
</template>

<script>
export default {
    props: ['entry']
}
</script>

