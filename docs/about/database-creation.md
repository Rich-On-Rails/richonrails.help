---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: How it is Made
---

Sequel Formula is made using freely available Formula One data provided by the [Ergast](http://ergast.com/mrd) API, the service provides the files in a CSV format which is downloaded and processed by our build routine. 

To do this we download the latest copy of the zip file from the [Ergast](http://ergast.com/mrd) website using PowerShell, the process it using the following steps

1. Extract the zip file into the require location.
2. Rename all of the zip files to remove any `_` in the file name.
3. Process each CSV file to remove any non conforming line endings or terminators from the files. 
4. Check to make sure that the database exists with the name provided by the user.
   1. If not create the database.
5. Create the required tables in the database created in step 4.
6. Process the CSV files inputting them into the corresponding tables.
7. Once complete the files are archived and deleted from the source location.
8. All of the tables are scripted out for each version of SQL that we [support](supported-versions)
9. Once we are happy that the database has been created a backup is created. 
10. Once the backup has been created and if the cleanDatabase flag is provided the database will be dropped from the instance. 

The Source for the script we use to build the database can be found [here](https://github.com/Sequel-Formula/Sequel-Formula/blob/main/build_database.ps1)