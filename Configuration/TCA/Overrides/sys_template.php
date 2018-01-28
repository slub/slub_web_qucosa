<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'slub_web_qucosa',
    'Configuration/TypoScript/SLUB',
    'Qucosa: SLUB-Mandant'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'slub_web_qucosa',
    'Configuration/TypoScript/UBL',
    'Qucosa: UBL-Mandant'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'slub_web_qucosa',
    'Configuration/TypoScript/MONARCH',
    'Qucosa: Chemnitz-Mandant'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'slub_web_qucosa',
    'Configuration/TypoScript/MUSICONN',
    'Qucosa: Musiconn'
);
