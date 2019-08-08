<template>
    <Layout :show-author="false" :show-header="true">
        <div class="content">
            <div class="entry-header">
                <p class="entry-header-title">{{ $page.entry.title }}</p>
                <p class="entry-header-metadata small">By {{ $page.entry.author }}</p>
            </div>
            <div class="entry-content">
                <div class="entry-run-data">
                    <div class="table">
                        <div class="table-cell">
                            <span class="label">Date:</span> <span class="data">{{ $page.entry.runDate }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Start Time:</span> <span class="data">{{ $page.entry.startTime }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Run Time:</span> <span class="data">{{ $page.entry.timeRan }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Distance:</span> <span class="data">{{ $page.entry.distance }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Avg. Pace:</span> <span class="data">{{ $page.entry.avgPace }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Avg. Heart Rate:</span> <span class="data">{{ $page.entry.avgHeartRate }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Temperature:</span> <span class="data">{{ $page.entry.temperature }}</span>
                        </div>
                        <div class="table-cell">
                            <span class="label">Weather:</span> <span class="data">{{ $page.entry.weather }}</span>
                        </div>
                    </div>




                    <!-- <table class="table">
                        <tr>
                            <td><span class="label">Date:</span> <span class="data">{{ $page.entry.runDate }}</span></td>
                            <td><span class="label">Start Time:</span> <span class="data">{{ $page.entry.startTime }}</span></td>
                            <td><span class="label">Run Time:</span> <span class="data">{{ $page.entry.timeRan }}</span></td>
                            <td><span class="label">Distance:</span> <span class="data">{{ $page.entry.distance }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="label">Avg. Pace:</span> <span class="data">{{ $page.entry.avgPace }}</span></td>
                            <td><span class="label">Avg. Heart Rate:</span> <span class="data">{{ $page.entry.avgHeartRate }}</span></td>
                            <td><span class="label">Temperature:</span> <span class="data">{{ $page.entry.temperature }}</span></td>
                            <td><span class="label">Weather:</span> <span class="data">{{ $page.entry.weather }}</span></td>
                        </tr>
                    </table> -->
                </div>
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
        runDate
        startTime
        timeRan
        distance
        avgPace
        avgHeartRate
        temperature
        weather
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

    .entry-run-data {
        .table {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            &-cell {
                flex-grow: 1;
                padding: .4rem;

                .label {
                    font-weight: 600;
                }

                .data {
                    float: right;
                }
            }

            @media screen and (max-width: 500px) {
                .table {
                    display: block;

                    &-cell {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
