# How To Get / Print Current Date in Unix / Linux Shell Script



Current date in Unix or Linux shell scripting and store it into a shell variable? How do I print the current date using Unix shell script? How can I display the current time in Linux shell script?\
\


| Tutorial details  |                                                |
| ----------------- | ---------------------------------------------- |
| Difficulty level  | [Easy](http://www.cyberciti.biz/faq/tag/easy/) |
| Root privileges   | No                                             |
| Requirements      | Linux or Unix                                  |
| Est. reading time | 3 minutes                                      |

You need to use the following syntax to print current date and time on screen:ADVERTISEMENT\


```
date
date +"%FORMAT"
var=$(date)
var=`date`
echo "$var"
```

### Print current date and time in Unix shell script

To store current date and time to a variable, enter:\
`now=$(date)`\
OR\
`` now=`date` ``

#### Print Current Date in Unix

To print this date either use the [printf or echo statement](https://www.cyberciti.biz/faq/how-to-write-output-to-terminal/):\
`echo "$now"`\
`echo "Current date: $now"`\
OR use the [printf command](https://bash.cyberciti.biz/guide/Printf\_command):\
`printf "%s\n" "$now"`\
OR\
`printf "Current date and time in Linux %s\n" "$now"`

### Getting the current date and time in Linux shell script

You can [format and display date using](https://www.cyberciti.biz/faq/linux-unix-formatting-dates-for-display/) the following syntax:

```
date +'FORMAT'
 
### mm/dd/yyyy ###
date +'%m/%d/%Y'
 
## Time in 12 hr format ###
date +'%r'
 
## backup dir format ##
backup_dir=$(date +'%m/%d/%Y')
echo "Backup dir for today: /nas04/backups/${backup_dir}"
```

![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM0MSIgd2lkdGg9IjU5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=)![How to find current date and time in Linux or Unix](https://www.cyberciti.biz/media/new/faq/2011/01/How-to-find-current-date-and-time-in-Linux-or-Unix.png)

Finding the current date and time in Linux or Unix using the date command

#### A list of date command format codes

| FORMAT code | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| %%          | a literal %                                                         |
| %a          | locale’s abbreviated weekday name (e.g., Sun)                       |
| %A          | locale’s full weekday name (e.g., Sunday)                           |
| %b          | locale’s abbreviated month name (e.g., Jan)                         |
| %B          | locale’s full month name (e.g., January)                            |
| %c          | locale’s date and time (e.g., Thu Mar 3 23:05:25 2005)              |
| %C          | century; like %Y, except omit last two digits (e.g., 20)            |
| %d          | day of month (e.g., 01)                                             |
| %D          | date; same as %m/%d/%y                                              |
| %e          | day of month, space padded; same as %\_d                            |
| %F          | full date; same as %Y-%m-%d                                         |
| %g          | last two digits of year of ISO week number (see %G)                 |
| %G          | year of ISO week number (see %V); normally useful only with %V      |
| %h          | same as %b                                                          |
| %H          | hour (00..23)                                                       |
| %I          | hour (01..12)                                                       |
| %j          | day of year (001..366)                                              |
| %k          | hour, space padded ( 0..23); same as %\_H                           |
| %l          | hour, space padded ( 1..12); same as %\_I                           |
| %m          | month (01..12)                                                      |
| %M          | minute (00..59)                                                     |
| %n          | a newline                                                           |
| %N          | nanoseconds (000000000..999999999)                                  |
| %p          | locale’s equivalent of either AM or PM; blank if not known          |
| %P          | like %p, but lower case                                             |
| %q          | quarter of year (1..4)                                              |
| %r          | locale’s 12-hour clock time (e.g., 11:11:04 PM)                     |
| %R          | 24-hour hour and minute; same as %H:%M                              |
| %s          | seconds since 1970-01-01 00:00:00 UTC                               |
| %S          | second (00..60)                                                     |
| %t          | a tab                                                               |
| %T          | time; same as %H:%M:%S                                              |
| %u          | day of week (1..7); 1 is Monday                                     |
| %U          | week number of year, with Sunday as first day of week (00..53)      |
| %V          | ISO week number, with Monday as first day of week (01..53)          |
| %w          | day of week (0..6); 0 is Sunday                                     |
| %W          | week number of year, with Monday as first day of week (00..53)      |
| %x          | locale’s date representation (e.g., 12/31/99)                       |
| %X          | locale’s time representation (e.g., 23:13:48)                       |
| %y          | last two digits of year (00..99)                                    |
| %Y          | year                                                                |
| %z          | +hhmm numeric time zone (e.g., -0400)                               |
| %:z         | +hh:mm numeric time zone (e.g., -04:00)                             |
| %::z        | +hh:mm:ss numeric time zone (e.g., -04:00:00)                       |
| %:::z       | numeric time zone with : to necessary precision (e.g., -04, +05:30) |
| %Z          | alphabetic time zone abbreviation (e.g., EDT)                       |

### Sample shell script to display the current date and time

```
#!/bin/bash
now="$(date)"
printf "Current date and time %s\n" "$now"
 
now="$(date +'%d/%m/%Y')"
printf "Current date in dd/mm/yyyy format %s\n" "$now"
 
echo "Starting backup at $now, please wait..."
# command to backup scripts goes here
# ...
```

\
