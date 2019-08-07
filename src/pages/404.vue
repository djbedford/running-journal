<template>
    <div class="layout">
        <p>Ooops! Looks like you may have taken a wrong turn somewhere.</p>
        <g-link to="/">&larr;Return home</g-link>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    a {
        text-decoration: none;
        color: #0477BF;

        &:hover {
            color: #A3BFD9;
        }
    }
}
</style>
