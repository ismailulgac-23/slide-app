import { reactive } from "vue";
import axios from "../services/axios";
const state = reactive({
  currentStoryModalIndex: null,
  stories: [],
  loading: false,
  error: false,
});

const mutations = {
  setStories: (payload) => (state.stories = payload),
  setLoading: (payload) => (state.loading = payload),
  setError: (payload) => (state.error = payload),
  setCurrentStoryModalIndex(payload = null, inc = true) {
    if (inc == true) {
      state.currentStoryModalIndex = state.currentStoryModalIndex + 1;
      return;
    }
    state.currentStoryModalIndex = payload;
  },
};

export const actions = {
  fetchStories() {
    mutations.setLoading(true);
    axios
      .get("users/stories")
      .then(({ data }) => {
        mutations.setStories(data.data);
        mutations.setError(false);
      })
      .catch(() => {
        mutations.setError(true);
        mutations.setStories([]);
      })
      .finally(() => {
        mutations.setLoading(false);
      });
  },
};

export default () => ({
  state,
  mutations,
  actions,
});
