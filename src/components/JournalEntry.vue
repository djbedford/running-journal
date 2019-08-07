<template>
    <div class="entry">
        <div class="entry-header">
            <g-link :to="entry.path" class="entry-header-title">{{ entry.title }}</g-link>
            <p class="entry-header-metadata small">Entered on {{ entry.date }} by {{ entry.author }}</p>
        </div>
        <div class="content" v-html="entry.content"></div>
    </div>
</template>

<script>
export default {
    props: ['entry']
}
</script>

<style lang="scss" scoped>
.entry {
    background: #ffffff;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    color: #3D3D3D;

    &-header {
        height: 5rem;
        padding: .5rem;
        border-bottom: 2px solid #aaaaaa;

        a {
            color: #0477BF;
            text-decoration: none;

            &:hover {
                color: #A3BFD9;
            }
        }

        p.small {
            font-size: .8rem;
        }

        &-title {
            font-size: 2rem;
        }

        &-metadata {
            color: #aaaaaa;
        }
    }
}
</style>
