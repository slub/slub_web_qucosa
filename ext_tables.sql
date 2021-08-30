#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
    tx_slubwebqucosa_pagesaddfield_author  int(11) unsigned DEFAULT '0' NOT NULL,
);

#
# Modifying pages table
#
CREATE TABLE pages (
       sharing_enabled tinyint(11) DEFAULT '0' NOT NULL,
       publication_date datetime DEFAULT NULL,
);

#
# Table structure for table 'tx_slubwebqucosa_domain_model_author'
#
CREATE TABLE tx_slubwebqucosa_domain_model_author (

    uid int(11) NOT NULL auto_increment,
    pid int(11) DEFAULT '0' NOT NULL,

    authorname varchar(255) DEFAULT '' NOT NULL,

    tstamp int(11) unsigned DEFAULT '0' NOT NULL,
    crdate int(11) unsigned DEFAULT '0' NOT NULL,
    cruser_id int(11) unsigned DEFAULT '0' NOT NULL,
    deleted smallint(5) unsigned DEFAULT '0' NOT NULL,
    hidden smallint(5) unsigned DEFAULT '0' NOT NULL,

    t3ver_oid int(11) DEFAULT '0' NOT NULL,
    t3ver_id int(11) DEFAULT '0' NOT NULL,
    t3ver_wsid int(11) DEFAULT '0' NOT NULL,
    t3ver_label varchar(255) DEFAULT '' NOT NULL,
    t3ver_state smallint(6) DEFAULT '0' NOT NULL,
    t3ver_stage int(11) DEFAULT '0' NOT NULL,
    t3ver_count int(11) DEFAULT '0' NOT NULL,
    t3ver_tstamp int(11) DEFAULT '0' NOT NULL,
    t3ver_move_id int(11) DEFAULT '0' NOT NULL,
    sorting int(11) DEFAULT '0' NOT NULL,

    sys_language_uid int(11) DEFAULT '0' NOT NULL,
    l10n_parent int(11) DEFAULT '0' NOT NULL,
    l10n_diffsource mediumblob,
    l10n_state text,

    PRIMARY KEY (uid),
    KEY parent (pid),
    KEY t3ver_oid (t3ver_oid,t3ver_wsid),
    KEY language (l10n_parent,sys_language_uid)
);

#
# Table structure for table 'tx_slubwebqucosa_domain_model_author_mm'
#
CREATE TABLE tx_slubwebqucosa_domain_model_author_mm (
     uid_local int(11) unsigned DEFAULT '0' NOT NULL,
     uid_foreign int(11) unsigned DEFAULT '0' NOT NULL,
     sorting int(11) unsigned DEFAULT '0' NOT NULL,
     sorting_foreign int(11) unsigned DEFAULT '0' NOT NULL,

     PRIMARY KEY (uid_local,uid_foreign),
     KEY uid_local (uid_local),
     KEY uid_foreign (uid_foreign)
);
