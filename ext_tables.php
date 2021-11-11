<?php
defined('TYPO3_MODE') || die();

// Register icons
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$iconRegistry->registerIcon(
    'tx-slubwebqucosa-exticon',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/ext_icon.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-accordion',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-accordion.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-image',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-image.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-bullets',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-bullets.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-text-teaser',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-text-teaser.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-teaser',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/teaser.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-grid-3-spalten',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/grid-3-spalten.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-grid-4-spalten',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/grid-4-spalten.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-grid-teaser',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/grid-teaser.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-above-left',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-above-left.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-above-right',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-above-right.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-below-center',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-below-center.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-below-left',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-below-left.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-left-teaser',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-left-teaser.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-left',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-left.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-right',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-right.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-briefcase',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-briefcase.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-carousel',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-carousel.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-carousel-header',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-carousel-header.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-carousel-image',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-carousel-image.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-carousel-imgtext',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-carousel-imgtext.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-clock',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-clock.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-elements-mailform',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-elements-mailform.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-info',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-info.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-inside-text-img-left',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-inside-text-img-left.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-inside-text-img-right',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-inside-text-img-right.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-media',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-media.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-quote',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-quote.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-gridelements-accordion',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/gridelements-accordion.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-gridelements-accordionitem',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/gridelements-accordionitem.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-gridelements-slider-dots',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/gridelements-slider-dots.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-gridelements-slider-startpage',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/gridelements-slider-startpage.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-menu-thumbnail',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-menu-thumbnail.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-text',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-text.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-panel',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-panel.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-beside-text-img-above-center',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-beside-text-img-above-center.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-grid-2-spalten',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/grid-2-spalten.svg']
);

$iconRegistry->registerIcon(
    'tx-slubwebqucosa-content-special-html',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:slub_web_qucosa/Resources/Public/Icons/backend/content-special-html.svg']
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_slubwebqucosa_domain_model_author', 'EXT:slub_web_qucosa/Resources/Private/Language/locallang_csh_tx_xmgtmpublications_domain_model_author.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_slubwebqucosa_domain_model_author');
