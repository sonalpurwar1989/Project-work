<template>
  <div>
    <h1>{{ joke }}</h1>
  </div>
    
</template>

<script>
import jokeService from '../services/JokeService'

export default {
  data(){
    return {
      joke: ''
    }
  },
  created() {
    jokeService.getRandomJoke()
    .then((response) => {
      this.joke = response.data;
    })
  }
}

</script>
