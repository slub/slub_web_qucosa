<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

if (TYPO3_MODE === 'BE') {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile (
       'slub_web_qucosa',
       'Configuration/TsConfig/Page/MUSICONN/setup.txt',
       'EXT:slub_web_qucosa: MUSICONN Page TS');

       \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile (
      'slub_web_qucosa',
      'Configuration/TsConfig/Page/FIDMOVE/setup.txt',
      'EXT:slub_web_qucosa: FID-Move Page TS');
}
