import { defineStore } from 'pinia'
import { firestore } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import axios from "axios";


export const useStore = defineStore('store', {
  state: () => ({
    user: null,
    cart: [],
  }),
  actions: {
    async populateFirestore() {
      const genres = new Map([[28, "Action"], [10751, "Family"], [878, "Science Fiction"], [12, "Adventure"], [14, "Fantasy"], [10770, "TV movie"], [16, "Animation"], [36,"History"], [53,"Thriller"], [35,"Comedy"], [27, "Horror"], [10752, "War"], [80, "Crime"], [10402, "Music"], [37, "Western"], [99, "Documentary"], [9648, "Mystery"], [18, "Drama"], [10749, "Romance"]]);

      genres.forEach(async (value, key) => {
        let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "261b287b93c009cd3f2fae376443794a",
            with_genres: key,
            include_adult: false,
          }
        })).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
            image: movie.poster_path,
          }
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },
    async addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });
      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    },
    async removeFromCart(index) {
      this.cart.splice(index, 1);
      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    }
  }
});