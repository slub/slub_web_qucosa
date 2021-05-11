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
    'tx_slubwebqucosa_pagesaddfield_author' => [
        'exclude' => false,
        'label' => 'Autoren (Bei mehr als 4 wird et al. ergänzt)',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectMultipleSideBySide',
            'foreign_table' => 'tx_slubwebqucosa_domain_model_author',
            'foreign_table_where' => 'AND tx_slubwebqucosa_domain_model_author.sys_language_uid = 0',
            'MM' => 'tx_slubwebqucosa_domain_model_author_mm',
            'size' => 4,
            'autoSizeMax' => 10,
            'minitems' => 0,
            'maxitems' => 4,
            'multiple' => 0,
            'enableMultiSelectFilterTextfield' => true,
            'fieldControl' => [
                'addRecord' => [
                    'disabled' => false,
                    'options' => [
                        'pid' => '###PAGE_TSCONFIG_ID###',
                    ],
                ],
                'editPopup' => [
                    'disabled' => false,
                ]
            ]
        ],

    ]
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tmp_slub_web_qucosa_columns);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr(
    'tt_content',
    'EXT:slub_web_qucosa/Resources/Private/Language/locallang_csh_pages.xlf'
);
