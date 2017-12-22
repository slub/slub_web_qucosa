<?php
$EM_CONF[$_EXTKEY] = array(
	'title' => 'SLUB Qucosa',
	'description' => 'Templates, Images and Configuration for Qucosa Website',
	'category' => 'templates',
	'author' => 'Alexander Bigga',
	'author_email' => 'alexander.bigga@slub-dresden.de',
	'author_company' => 'SLUB Dresden',
	'state' => 'beta',
	'uploadfolder' => '0',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'version' => '0.1.0',
	'constraints' => array(
		'depends' => array(
			'extbase' => '6.2.0-7.6.99',
			'fluid' => '6.2.0-7.6.99',
			'typo3' => '6.2.0-7.6.99',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
);
