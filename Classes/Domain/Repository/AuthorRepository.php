<?php
namespace Slub\SlubWebQucosa\Domain\Repository;

/***
 *
 * This file is part of the "SlubWebQucosa" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2021 Eliseo Malo <ema@xima.de>, XIMA MEDIA GmbH
 *
 ***/

use TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings;
use TYPO3\CMS\Extbase\Persistence\Repository;

/**
 * Class TopicRepository
 * @package Slub\SlubWebQucosa\Domain\Repository
 */
class AuthorRepository extends Repository
{
    /**
     * initialize
     * @return void
     */
    public function initializeObject()
    {
        /** @var Typo3QuerySettings $querySettings */
        $querySettings = $this->objectManager->get(Typo3QuerySettings::class);
        $querySettings->setRespectStoragePage(false);
        $querySettings->setRespectSysLanguage(true);
        $querySettings->setLanguageUid($GLOBALS['TSFE']->sys_language_uid);
        $this->setDefaultQuerySettings($querySettings);
    }
}
