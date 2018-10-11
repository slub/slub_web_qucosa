<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

if (TYPO3_MODE === 'BE') {

    if (version_compare(TYPO3_version, '7.6.0', '>=')) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile (
       'slub_web_qucosa',
       'Configuration/TsConfig/Page/setup.txt',
       'EXT:slub_web_qucosa: MUSICONN Page TS');
    }
}
