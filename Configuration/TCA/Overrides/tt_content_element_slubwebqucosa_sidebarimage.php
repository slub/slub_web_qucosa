<?php

/***************
 * Add content element to selector list
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:slub_web_qucosa/Resources/Private/Language/locallang_tca.xlf:tx_slubwebqucosa_logoitem.label',
        'tx_slubwebqucosa_sidebarimage',
        'tx-slubwebqucosa-content-beside-text-img-left'
    ],
    'header',
    'after'
);

/***************
 * Assign Icon
 */
$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['tx_slubwebqucosa_sidebarimage'] = 'tx-slubwebqucosa-content-beside-text-img-left';

$GLOBALS['TCA']['tt_content']['types']['tx_slubwebqucosa_sidebarimage'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
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
        'image' => [
            'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
                'image',
                [
                    'maxitems' => 1,
                    'minitems' => 1,
                    'appearance' => [
                        'createNewRelationLinkTitle' => 'LLL:EXT:frontend/Resources/Private/Language/Database.xlf:tt_content.asset_references.addFileReference',
                        'fileUploadAllowed' => 0
                    ],
                ],
                'jpeg,jpg,png'
            ),
        ],
    ]
];
