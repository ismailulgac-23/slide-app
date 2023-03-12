import { computed, reactive } from "vue";
import axios from "../services/axios";
const state = reactive({
  currentSlideItemIndex: 0,
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
    setTimeout(() => {
      if (type == "inc") {
        state.currentStoryModalIndex = state.currentStoryModalIndex + 1;
        return;
      }
      if (type == "dec") {
        state.currentStoryModalIndex = state.currentStoryModalIndex - 1;
        return;
      }
      state.currentStoryModalIndex = payload;
    }, 100);
  },
};
export const getters = {
  getStoryIsSeen: (idx) => computed(() => state.stories[idx].isSeen),
  getCurrentStoryItems: computed(
    () => state.stories[state.currentStoryModalIndex].items
  ),
  getStories: computed(() => state.stories),
  getCurrentSlideItemIndex: computed(() => state.currentSlideItemIndex),
};
export const actions = {
  prev: () => {
    actions.seeStory(null, true);
    if (state.currentSlideItemIndex != 0) {
      state.currentSlideItemIndex = state.currentSlideItemIndex - 1;
      return;
    }
    mutations.setCurrentStoryModalIndex(null, "dec");
  },

  next: () => {
    actions.seeStory();
    if (
      state.currentSlideItemIndex <
      state.stories[state.currentStoryModalIndex].items.length - 1
    ) {
      state.currentSlideItemIndex = state.currentSlideItemIndex + 1;
      return;
    }
    state.currentSlideItemIndex = 0;
    mutations.setCurrentStoryModalIndex(null, "inc");
  },
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
  seeStory(idx = null, isPrev = false) {
    function getIndex() {
      if (idx !== null) {
        return idx;
      } else if (!state.currentStoryModalIndex) {
        return 0;
      } else if (isPrev) {
        return state.currentStoryModalIndex - 1;
      } else {
        return state.currentStoryModalIndex;
      }
    }
    var _idx = getIndex();
    state.stories = state.stories.map((item, index) => {
      if (_idx === index) {
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
  getters,
});
