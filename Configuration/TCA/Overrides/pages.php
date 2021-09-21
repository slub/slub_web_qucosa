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

$tmp_slub_web_qucosa_columns = [
    'sharing_enabled' => [
        'exclude' => 0,
        'label' => 'Teilenfunktion deaktivieren',
        'config' => [
            'type' => 'check',
            'default' => '1',
        ],
    ],
    'publication_date' => [
        'exclude' => 0,
        'label' => 'Veröffentlichungsdatum',
        'config' => [
            'dbType' => 'datetime',
            'type' => 'input',
            'renderType' => 'inputDateTime',
            'size' => 12,
            'eval' => 'datetime',
            'default' => null,
        ],
    ],
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $tmp_slub_web_qucosa_columns);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'standard',
    'publication_date',
    'after:doktype'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'layout',
    'sharing_enabled',
    'before:newUntil'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr(
    'tt_content',
    'EXT:slub_web_qucosa/Resources/Private/Language/locallang_csh_pages.xlf'
);
