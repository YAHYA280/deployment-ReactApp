#!/bin/bash

# Create a backup of the PostgreSQL database
pg_dump -U $POSTGRES_USER -h db $POSTGRES_DB > /backup/backup.sql

# You can add additional logic here to upload the backup to a remote storage or keep multiple backups with timestamps
