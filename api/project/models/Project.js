"use strict";
const axios = require("axios");

/**
 * Lifecycle callbacks for the `Config` model.
 */

module.exports = {
  afterCreate: async entry => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry).catch(() => {});
  },

  afterUpdate: async entry => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry).catch(() => {
      // Ignore
    });
  },

  afterDestroy: async entry => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry).catch(() => {
      // Ignore
    });
  }
};
