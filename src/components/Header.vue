<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="/"
      >
        <img
          src="../assets/LC_logo.png"
          alt="Logo"
          width="25"
          height="25"
          class="d-inline-block align-text-top"
        />
        Luis Caroca
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a
            class="nav-link"
            aria-current="page"
            ><router-link
              to="/"
              style="text-decoration: none"
              >Inicio</router-link
            ></a
          >
          <a class="nav-link"
            ><router-link
              to="/studies"
              style="text-decoration: none"
              >Estudios</router-link
            ></a
          >
          <a class="nav-link"
            ><router-link
              to="/projects"
              style="text-decoration: none"
              >Proyectos</router-link
            ></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
