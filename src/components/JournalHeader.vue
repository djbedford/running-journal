<template>
    <header class="header">
        <div class="layout">
            <strong>
                <g-link to="/">{{ $static.metaData.siteName }}</g-link>
            </strong>
            <nav class="nav">
                <g-link class="nav__link" to="/">Home</g-link>
                <g-link class="nav__link" to="/about">About</g-link>
            </nav>
        </div>
    </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style scoped>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.header {
  margin-bottom: 20px;
  background: #0029FA;
}

.nav__link {
  margin-left: 20px;
}
</style>

