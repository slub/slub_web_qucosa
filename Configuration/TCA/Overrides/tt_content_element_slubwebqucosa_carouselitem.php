<?php

/***************
 * Add content element to selector list
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:slub_web_qucosa/Resources/Private/Language/locallang_tca.xlf:tx_slubwebqucosa_carouselitem.label',
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
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
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
        'subheader' => [
            'label' => 'LLL:EXT:cms/locallang_ttc.xml:header_link',
            'exclude' => 0,
            'config' => [
                'type' => 'input',
                'renderType' => 'inputLink',
                'eval' => 'trim, required',
                'fieldControl' => [
                    'linkPopup' => [
                        'options' => [
                            'blindLinkOptions' => 'folder,file,mail',
                            'blindLinkFields' => 'class,params',
                            'windowOpenParameters' => 'height=800,width=1000,status=0,menubar=1,scrollbars=1'
                        ]
                    ]
                ]
            ],
        ],
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
