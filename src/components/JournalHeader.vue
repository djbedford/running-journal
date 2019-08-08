<template>
    <header class="header">
        <div class="layout">
            <g-link to="/">&larr; {{ $static.metaData.siteName }}</g-link>
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

<style lang="scss" scoped>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  a {
    margin-left: -10rem;
    text-decoration: none;
    color: #0477BF;

    @media screen and (max-width: 1200px) {
      margin-left: 0;
    }
  }
}

.header {
  top: 0;
  margin-bottom: .4rem;

  @media screen and (min-width: 1200px) {    
    position: sticky;
    width: 100%;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>

