<?php

/***************
 * Add content element to selector list
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'Flipcard Item',
        'tx_slubwebqucosa_flipcarditem',
        'tx-slubwebqucosa-content-beside-text-img-left'
    ],
    'header',
    'after'
);

/***************
 * Assign Icon
 */
$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['tx_slubwebqucosa_flipcarditem'] = 'tx-slubwebqucosa-content-beside-text-img-left';

$GLOBALS['TCA']['tt_content']['types']['tx_slubwebqucosa_flipcarditem'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,pi_flexform,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
        --palette--;;hidden,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
        --div--;LLL:EXT:lang/Resources/Private/Language/locallang_tca.xlf:sys_category.tabs.category,categories,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,rowDescription,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
        --div--;LLL:EXT:gridelements/Resources/Private/Language/locallang_db.xlf:gridElements',
    'columnsOverrides' => [
        'bodytext' => [
            'config' => [
                'enableRichtext' => false,
                'eval' => 'required',
                'max' => 200,
                'rows' => 2,
            ]
        ],
    ]
];
// Add a flexform to the tx_slubwebqucosa_flipcarditem CType
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    '',
    'FILE:EXT:slub_web_qucosa/Configuration/FlexForms/tx_slubwebqucosa_flipcarditem_flexform.xml',
    'tx_slubwebqucosa_flipcarditem'
);
