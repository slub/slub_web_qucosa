<?php

/***************
 * Add content element to selector list
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'Karussell-Element',
        'tx_slubwebqucosa_carouselitem',
        'tx-slubwebqucosa-content-beside-text-img-left'
    ],
    'header',
    'after'
);

/***************
 * Assign Icon
 */
$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['tx_slubwebqucosa_carouselitem'] = 'tx-slubwebqucosa-content-beside-text-img-left';

$GLOBALS['TCA']['tt_content']['types']['tx_slubwebqucosa_carouselitem'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,pi_flexform,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.images,image,
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
                'max' => 50,
                'rows' => 2,
            ]
        ],
        'header' => [
            'config' => [
                'eval' => 'required',
                'max' => 50,
            ]
        ],
    ]
];
// Add a flexform to the tx_xmtemplatesxima_textvideoteaser CType
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    '',
    'FILE:EXT:slub_web_qucosa/Configuration/FlexForms/tx_slubwebqucosa_carouselitem_flexform.xml',
    'tx_slubwebqucosa_carouselitem'
);
