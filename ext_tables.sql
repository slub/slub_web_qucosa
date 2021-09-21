#
# Modifying pages table
#
CREATE TABLE pages (
       sharing_enabled tinyint(11) DEFAULT '0' NOT NULL,
       publication_date datetime DEFAULT NULL,
);
