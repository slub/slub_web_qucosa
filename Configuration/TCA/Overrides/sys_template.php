<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

/**
 * Temporary variables
 */
$extensionKey = 'slub_web_qucosa';

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/Main',
    'Qucosa: Hauptseite'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/SLUB',
    'Qucosa: SLUB Dresden (SLUB)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/UBL',
    'Qucosa: Universität Leipzig (UL)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/MONARCH',
    'Qucosa: Technische Universität Chemnitz (Monarch)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/MUSICONN',
    'Qucosa: Musiconn'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/DIU',
    'Qucosa: Dresden Internation University (DIU)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/HTW',
    'Qucosa: Hochschule für Technik und Wirtschaft Dresden (HTW)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/TUBAF',
    'Qucosa: Technische Universität Bergakademie Freiberg (TUBAF)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/HZDR',
    'Qucosa: Helmholtz-Zentrum Dresden-Rossendorf (HZDR)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/TUD',
    'Qucosa: Technische Universität Dresden (TUD)'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/FIDMOVE',
    'Qucosa: FID Move'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $extensionKey,
    'Configuration/TypoScript/HTWKLEIPZIG',
    'Qucosa: HTWK Leipzig'
);
