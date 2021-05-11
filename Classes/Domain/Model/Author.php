<?php
namespace Slub\SlubWebQucosa\Domain\Model;

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

/**
 * Author
 */
class Author extends \TYPO3\CMS\Extbase\DomainObject\AbstractValueObject
{
    /**
     * authorname
     *
     * @var string
     * @validate NotEmpty
     */
    protected $authorname = '';

    /**
     * Returns the authorname
     *
     * @return string $authorname
     */
    public function getAuthorname()
    {
        return $this->authorname;
    }

    /**
     * Sets the authorname
     *
     * @param string $authorname
     * @return void
     */
    public function setAuthorname($authorname)
    {
        $this->authorname = $authorname;
    }
}
