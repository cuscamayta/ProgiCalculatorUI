export default {
  install(app, options) {
    const { apiUrl, errorFormat } = options;
    app.config.globalProperties.$apiUrl = apiUrl;

    app.config.globalProperties.$get = async (endpoint) => {
      try {
        const response = await fetch(`${apiUrl}/progi${endpoint}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    app.config.globalProperties.$post = async (endpoint, payload) => {
      try {
        console.log(endpoint, payload);
        const response = await fetch(`${apiUrl}/progi${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error posting data:", error);
        throw error;
      }
    };

    app.config.globalProperties.$filterResponse = (response) => {
      return response.data;
    };

    app.config.globalProperties.$errorFormat = errorFormat;
  },
};
