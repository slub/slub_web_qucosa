<?php
namespace Slub\SlubWebQucosa\ViewHelpers;
    /***************************************************************
     *  Copyright notice
     *
     *  (c) 2017 Alexander Bigga <alexander.bigga@slub-dresden.de>
     *  All rights reserved
     *
     *  This script is part of the TYPO3 project. The TYPO3 project is
     *  free software; you can redistribute it and/or modify
     *  it under the terms of the GNU General Public License as published by
     *  the Free Software Foundation; either version 3 of the License, or
     *  (at your option) any later version.
     *
     *  The GNU General Public License can be found at
     *  http://www.gnu.org/copyleft/gpl.html.
     *
     *  This script is distributed in the hope that it will be useful,
     *  but WITHOUT ANY WARRANTY; without even the implied warranty of
     *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     *  GNU General Public License for more details.
     *
     *  This copyright notice MUST APPEAR in all copies of the script!
     ***************************************************************/

/**
 * ViewHelper to get page info
 *
 * # Example: Basic example
 * <code>
 * <si:pageInfo page="123">
 *	<span>123</span>
 * </code>
 * <output>
 * Will output the page record
 * </output>
 *
 * @package TYPO3
 */
// class Tx_SlubAddressbooks_ViewHelpers_PageInfoViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {
class PageInfoViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

    /**
     * Return all comments
     *
     * @param integer $uid uid of the page
		 * @param string $field of page record
     * @return array
     */
    public function render($uid, $field) {

			$pageUid = (integer) $uid;
			if (0 === $uid) {
					$pageUid = $GLOBALS['TSFE']->id;
			}
			$page = $GLOBALS['TSFE']->sys_page->getPage($pageUid);

			$output = $page[$field];

        return $output;
    }
}
