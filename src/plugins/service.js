export default {
  install(app, options) {
    const { apiUrl } = options;
    const store = app.config.globalProperties.$store;

    app.config.globalProperties.$apiUrl = apiUrl;

    app.config.globalProperties.$get = async (endpoint) => {
      try {
        const response = await fetch(`${apiUrl}${endpoint}`);
        const data = await response.json();
        return data;
      } catch (error) {
        if (store) {
          store.dispatch("snackbar/showSnackbar", {
            message: "Error fetching data: " + error.message,
            color: "error",
          });
        }
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    app.config.globalProperties.$post = async (endpoint, payload) => {
      try {
        const response = await fetch(`${apiUrl}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        if (!response.ok) {
          const errorMessage = data.title || "Unknown error";
          throw new Error(errorMessage);
        }
        return data;
      } catch (error) {
        console.log("JAKSBHDJKABSKDJL");
        if (store) {
          store.dispatch("snackbar/showSnackbar", {
            message: "Error posting data: " + error.message,
            color: "error",
          });
        }
      }
    };

    app.config.globalProperties.$filterResponse = (response) => {
      return response.data;
    };
  },
};
