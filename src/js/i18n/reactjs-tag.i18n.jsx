import {I18nUtil} from 'rainbowui-core';
import config from "config";
// import config from "../component-config";

/**
 * Load component I18N file
 */
try {
	module.exports = require("./reactjs-tag.i18n." + I18nUtil.getSystemI18N());
} catch(exception) {
	module.exports = require("./reactjs-tag.i18n." + config.DEFAULT_SYSTEM_I18N);
}
