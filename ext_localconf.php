<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName']['index']['sitemap.xml'] = array (
    'keyValues' => array(
        'type' => 20180709,
    ),
);
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache']['banUrlsRegExp'] = '/type=|eID=|tx_dpf_frontendsearch|tx_dlf|(?:^|\?|&)q=/';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'] = array(

  'apiConfiguration' => array(

    'qid' => array(
      'GETvar' => 'tx_dpf[qid]',
    ),
    'action' => array(
      'GETvar' => 'tx_dpf[action]',
    ),
    'attachement' => array(
      'GETvar' => 'tx_dpf[attachment]' ,
    ),
  ),

  # this doesnt work with realurl 1.3 as the qucosa ID (qucosa:1234) in interpretet as port :-(
  'landingPageConfiguration' => array(
    'id' => array(
      'GETvar' => 'tx_dlf[id]',
    ),
    'page' => array(
      'GETvar' => 'tx_dlf[page]' ,
    ),
  ),

);

/***************
 * TsConfig
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:slub_web_qucosa/Configuration/TsConfig/All.tsconfig">');

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['qucosa.de'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de'];

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['slub.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['slub.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['slub.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['slub.qucosa.de']['fixedPostVars']['20'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['slub.qucosa.de']['fixedPostVars']['24'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['monarch.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['monarch.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['monarch.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['monarch.qucosa.de']['fixedPostVars']['118'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['monarch.qucosa.de']['fixedPostVars']['106'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tubaf.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tubaf.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tubaf.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tubaf.qucosa.de']['fixedPostVars']['73'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tubaf.qucosa.de']['fixedPostVars']['68'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['ul.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['ul.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['ul.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['ul.qucosa.de']['fixedPostVars']['40'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['ul.qucosa.de']['fixedPostVars']['46'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['hzdr.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['hzdr.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['hzdr.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['hzdr.qucosa.de']['fixedPostVars']['95'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['hzdr.qucosa.de']['fixedPostVars']['87'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tud.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tud.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tud.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tud.qucosa.de']['fixedPostVars']['210'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['tud.qucosa.de']['fixedPostVars']['198'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htw-dresden.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htw-dresden.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htw-dresden.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htw-dresden.qucosa.de']['fixedPostVars']['129'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htw-dresden.qucosa.de']['fixedPostVars']['124'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['diu.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['diu.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['diu.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['diu.qucosa.de']['fixedPostVars']['147'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['diu.qucosa.de']['fixedPostVars']['142'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['musiconn.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['musiconn.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['musiconn.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['musiconn.qucosa.de']['fixedPostVars']['189'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['musiconn.qucosa.de']['fixedPostVars']['195'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['publish.fid-move.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['publish.fid-move.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['publish.fid-move.de']['fixedPostVars']= $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['publish.fid-move.de']['fixedPostVars']['60'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['publish.fid-move.de']['fixedPostVars']['50'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htwk-leipzig.qucosa.de']['cache'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['cache'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htwk-leipzig.qucosa.de']['fileName'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fileName'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htwk-leipzig.qucosa.de']['fixedPostVars'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars'];
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htwk-leipzig.qucosa.de']['fixedPostVars']['224'] = 'landingPageConfiguration';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['htwk-leipzig.qucosa.de']['fixedPostVars']['217'] = 'apiConfiguration';

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['www.qucosa.de']['fixedPostVars']['176'] = 'apiConfiguration';
