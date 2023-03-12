import { reactive } from "vue";
import axios from "../services/axios";
const state = reactive({
  currentStoryModalIndex: null,
  stories: [],
  loading: false,
  error: false,
  time: 5,
});

const mutations = {
  setTime: (payload) => (state.time = payload),
  setStories: (payload) => (state.stories = payload),
  setLoading: (payload) => (state.loading = payload),
  setError: (payload) => (state.error = payload),
  setCurrentStoryModalIndex(payload = null, type = null) {
    if (type == "inc") {
      state.currentStoryModalIndex = state.currentStoryModalIndex + 1;
      return;
    }
    if (type == "dec") {
      state.currentStoryModalIndex = state.currentStoryModalIndex - 1;
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
        mutations.setStories(
          data.data.map((item) => ({ ...item, isSeen: false, watchPercent: 0 }))
        );
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
  seeStory(storyId) {
    state.stories = state.stories.map((item) => {
      if (item.id === storyId) {
        return { ...item, isSeen: true };
      }
      return { ...item };
    });
  },
};

export default () => ({
  state,
  mutations,
  actions,
});
