<template>
    <div class="entry-run-data">
        <div class="table">
            <div class="table-cell">
                <span class="label">Date:</span> <span class="data">{{ metrics.runDate }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Start Time:</span> <span class="data">{{ metrics.startTime }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Run Time:</span> <span class="data">{{ metrics.timeRan }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Distance:</span> <span class="data">{{ metrics.distance }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Avg. Pace:</span> <span class="data">{{ metrics.avgPace }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Avg. Heart Rate:</span> <span class="data">{{ metrics.avgHeartRate }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Temperature:</span> <span class="data">{{ metrics.temperature }}</span>
            </div>
            <div class="table-cell">
                <span class="label">Weather:</span> <span class="data">{{ metrics.weather }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['metrics']
}
</script>

<style lang="scss" scoped>
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
</style>
