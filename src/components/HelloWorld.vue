<template>
  <div class="hello">
    Name: {{ name }}
    Age: {{ age }}
  </div>
</template>

<script>
import { HTTP } from '../http_common.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      age: 0
    }
  },
  mounted() {
    HTTP.get('/people')
    .then(response => {
      response = response.data
      this.name = response[0].name
      this.age = response[0].age
    })
    .catch(e => {
      console.log("Error: ", e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
