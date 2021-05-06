<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

/**
 * Temporary variables
 */
$extensionKey = 'slub_web_qucosa';

/**
 * Default PageTS for Qucosa
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/PageTS/All.txt',
    'Qucosa'
);

if (TYPO3_MODE === 'BE') {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile (
        $extensionKey,
       'Configuration/TsConfig/Page/MUSICONN/setup.txt',
       'EXT:slub_web_qucosa: MUSICONN Page TS');

       \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile (
      $extensionKey,
      'Configuration/TsConfig/Page/FIDMOVE/setup.txt',
      'EXT:slub_web_qucosa: FID-Move Page TS');
}
