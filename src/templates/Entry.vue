<template>
    <Layout :show-author="false" :show-header="true">
        <div class="content">
            <div class="entry-header">
                <p class="entry-header-title">{{ $page.entry.title }}</p>
                <p class="entry-header-metadata small">By {{ $page.entry.author }}</p>
            </div>
            <div class="entry-content">
                <RunningMetrics :metrics="$page.entry.runningMetrics" />
                <div v-html="$page.entry.content"></div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query Entry ($path: String!) {
    entry: entry (path: $path) {
        title
        author
        runningMetrics {
            runDate
            startTime
            timeRan
            distance
            avgPace
            avgHeartRate
            temperature
            weather
        }
        content
    }
}
</page-query>

<script>
import RunningMetrics from '~/components/RunningMetrics'

export default {
    metaInfo() {
        return {
            title: this.$page.entry.title
        }
    },
    components: {
        RunningMetrics
    }
}
</script>

<style lang="scss" scoped>
.content {
    background: #ffffff;
    border-radius: 10px;
    padding: 1rem 2rem;
    margin-top: 2rem;
}

.entry-header {
    margin-bottom: 2rem;

    &-title {
        color: #0477BF;
        font-size: 2rem;
        text-align: center;
        margin: 0;
    }

    &-metadata {
        color: #aaaaaa;
        margin-top: .5rem;
        text-align: center;
    }

    p.small {
        font-size: .8rem;
    }
}

.entry-content {
    color: #3D3D3D;
}
</style>
