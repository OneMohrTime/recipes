<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
	// Global settings
	'*' => [
		// https://docs.craftcms.com/v3/config/config-settings.html#aliases
		'aliases' => [
			'@env'     => getenv('ENVIRONMENT'),
			'@siteUrl' => getenv('SITE_URL'),
		],
		// Control panel trigger word
		'cpTrigger' => 'admin',
		// https://docs.craftcms.com/v3/config/config-settings.html#defaultsearchtermoptions
		'defaultSearchTermOptions' => [
			'subLeft'  => true,
			'subRight' => true,
		],
		// Default Week Start Day (0 = Sunday, 1 = Monday...)
		'defaultWeekStartDay' => 0,
		// https://docs.craftcms.com/v3/config/config-settings.html#generatetransformsbeforepageload
		'generateTransformsBeforePageLoad' => true,
		// Whether generated URLs should omit "index.php"
		'omitScriptNameInUrls' => true,
		// The secure key Craft will use for hashing and encrypting data
		'securityKey' => App::env('SECURITY_KEY'),
		// https://docs.craftcms.com/v3/config/config-settings.html#sendpoweredbyheader
		'sendPoweredByHeader' => false,
		// https://docs.craftcms.com/v3/config/config-settings.html#sitename
		'siteName' => getenv('SITE_NAME'),
		// https://docs.craftcms.com/v3/config/config-settings.html#siteurl
		'siteUrl' => getenv('SITE_URL'),
		// https://docs.craftcms.com/v3/config/config-settings.html#timezone
		'timezone' => getenv('SITE_TIMEZONE') ?: 'America/Detroit',
	],

	// Local environment settings
	'local' => [
		// https://craftcms.com/docs/3.x/config/config-settings.html#backuponupdate
		'backupOnUpdate' => false,
		// Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
		'devMode' => true,
		// Prevent crawlers from indexing pages and following links
		'disallowRobots' => true,
		// https://craftcms.com/docs/3.x/config/config-settings.html#enabletemplatecaching
		'enableTemplateCaching' => false,
	],

	// Dev environment settings
	'dev' => [
		// Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
		'devMode' => true,
		// Prevent crawlers from indexing pages and following links
		'disallowRobots' => true,
	],

	// Staging environment settings
	'staging' => [
		// Set this to `false` to prevent administrative changes from being made on Staging
		'allowAdminChanges' => false,
		// Don’t allow updates on Staging
		'allowUpdates' => false,
		// Prevent crawlers from indexing pages and following links
		'disallowRobots' => true,
	],

	// Production environment settings
	'production' => [
		// Set this to `false` to prevent administrative changes from being made on Production
		'allowAdminChanges' => false,
		// Don’t allow updates on Production
		'allowUpdates' => false,
	],
];
