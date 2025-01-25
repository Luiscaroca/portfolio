<template>
  <footer class="bg-dark py-5 mt-5">
    <div class="container text-light text-center">
      <div class="row mb-5">
        <div class="col">
          <img
            src="../assets/LC_logo.png"
            alt="Logo"
            width="70"
            height="70"
            class="d-inline-block align-text-top"
          />
          <div class="col-6 offset-3 mt-1">
            <small class="text-white"
              >Hola! soy Luis Caroca y actualmente me dedico al desarrollo de
              aplicaciones, tanto web, como de escritorio. No dudes en
              contactarte conmigo en caso de que lo requieras!</small
            >
          </div>
        </div>
        <div class="col">
          <a>Contactos:</a>
          <div class="col mt-1">
            <!-- Google -->
            <a
              class="btn btn-floating m-1"
              style="background-color: #dd4b39"
              href="mailto:lj.caroca@gmail.com"
              role="button"
              ><font-awesome-icon
                :icon="['fab', 'google']"
                style="color: white"
            /></a>

            <!-- Linkedin -->
            <a
              class="btn btn-floating m-1"
              style="background-color: #0082ca"
              target="_blank"
              href="https://www.linkedin.com/in/luis-joaquín-caroca-araya-459a1b1b3/"
              role="button"
              ><font-awesome-icon
                :icon="['fab', 'linkedin-in']"
                style="color: white"
            /></a>

            <!-- Github -->
            <a
              class="btn btn-floating m-1"
              style="background-color: #333333"
              target="_blank"
              href="https://github.com/Luiscaroca"
              role="button"
              ><font-awesome-icon
                :icon="['fab', 'github']"
                style="color: white"
            /></a>

            <!-- Instagram -->
            <a
              class="btn btn-floating m-1"
              style="background-color: #ac2bac"
              target="_blank"
              href="https://www.instagram.com/lj.caroca/"
              role="button"
              ><font-awesome-icon
                :icon="['fab', 'instagram']"
                style="color: white"
            /></a>
          </div>
        </div>
      </div>
      <small class="text-white-50">&copy; Luis Caroca, 2025</small>
    </div>
  </footer>
</template>

<style scoped>
#nav a {
  color: white;
}
</style>
