<template>
  <div id="app">
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item
            :to="'activities'"
            :active='$route.name === "Activities"'
          >
              Activities
          </b-nav-item>
          <b-nav-item
            :to="'my-list'"
            :active='$route.name === "MyList"'
          >
            My list
          </b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <router-view/>
      </b-card-body>
    </b-card>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  margin: auto;
}

#textarea {
  margin-bottom: 20px;
}
</style>
