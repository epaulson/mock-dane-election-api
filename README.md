# Dane County Election API Test Server

This is a very basic server that can be used to test against a mock version of the [Dane County Election Results API](https://api.countyofdane.com/Help), since the offical API is most interesting only on election night. This server returns the same data as the official API returned on the night of April 6th 2021.

The data was created by polling the API on election night every three minutes and saving the resulting JSON files, between 8pm and about 11pm. 

Rather than having to wait all three hours of an election night, the included server "fast fowards" through time. The election night results changed 21 times over the course of 3 hours. The included server, every 20 seconds, advances what data it will return to be one of those 21 different point in times, e.g. the server replays the entire election results in about 7 minutes, instead of needing three hours. The 'run.sh' in the data/apr2021 directory is what was used to capture the data

To use it, unzip the zip files in the data/ directory and run ``node server.js``. The server requires express, so you may need to use npm to install that. 

The Python notebook processes the data files to figure out the points in time when the data changed. You don't need it for anything, it's only included for reference. 

Note that for some reason, in the April election at the 23:11:14 sample point (timestamp 1617768674) something went wrong with grabbing data for one of the datapoints. I just removed the files for that entire timestep, since at that point election results were in and we already were fast and loose with time anyway, so the easy thing to do was to delete the data and ignore it. 

