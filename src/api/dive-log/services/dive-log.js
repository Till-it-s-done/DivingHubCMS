'use strict';

/**
 * dive-log service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dive-log.dive-log');
