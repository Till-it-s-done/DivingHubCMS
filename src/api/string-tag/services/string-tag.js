'use strict';

/**
 * string-tag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::string-tag.string-tag');
