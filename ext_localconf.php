<?php

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['qucosa'] = 'EXT:slub_web_qucosa/Configuration/RTE/Default.yaml';
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['musiconn'] = 'EXT:slub_web_qucosa/Configuration/RTE/MusiconnPublish/Default.yaml';

/***************
 * TsConfig
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:slub_web_qucosa/Configuration/TsConfig/All.tsconfig">');
