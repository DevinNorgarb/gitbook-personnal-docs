---
description: https://securitytrails.com/blog/osint-tools
---

# OSINT

When you start an IT security investigation, the first phase you will face is the **data reconnaissance and intel gathering about your target**. Once you finish gathering information about your objective you will have all the needed information like IP addresses, domain names, servers, technology and much more so you can finally conduct your security tests.

**What are the best OSINT tools to get this valuable information? Are you looking to track people & company data, domains, IPs, servers, and running software?**

We have the right answer to those questions. On this post, we will show you the top best Recon and Intel information gathering tools for IT Security Researchers.

* [How can I use OSINT tools in cybersecurity?](https://securitytrails.com/blog/osint-tools#content-how-can-i-use-osint-tools-in-cybersecurity)
  * [Find unknown-public assets](https://securitytrails.com/blog/osint-tools#content-find-unknown-public-assets)
  * [Detect outside critical company data](https://securitytrails.com/blog/osint-tools#content-detect-outside-critical-company-data)
  * [Group critical data into useful plans](https://securitytrails.com/blog/osint-tools#content-group-critical-data-into-useful-plans)
* [Best 25 OSINT Tools used by InfoSec Professionals](https://securitytrails.com/blog/osint-tools#content-best-25-osint-tools-used-by-infosec-professionals)
  * [1. OSINT Framework](https://securitytrails.com/blog/osint-tools#content-1-osint-framework)
  * [2. CheckUserNames](https://securitytrails.com/blog/osint-tools#content-2-checkusernames)
  * [3. HaveIbeenPwned](https://securitytrails.com/blog/osint-tools#content-3-haveibeenpwned)
  * [4. SecurityTrails API](https://securitytrails.com/blog/osint-tools#content-4-securitytrails-api)
  * [5. Censys](https://securitytrails.com/blog/osint-tools#content-5-censys)
  * [6. Wappalyzer](https://securitytrails.com/blog/osint-tools#content-6-wappalyzer)
  * [7. Google Dorks](https://securitytrails.com/blog/osint-tools#content-7-google-dorks)
  * [8. Maltego](https://securitytrails.com/blog/osint-tools#content-8-maltego)
  * [9. Recon-Ng](https://securitytrails.com/blog/osint-tools#content-9-recon-ng)
  * [10. theHarvester](https://securitytrails.com/blog/osint-tools#content-10-theharvester)
  * [11. Shodan](https://securitytrails.com/blog/osint-tools#content-11-shodan)
  * [12. Jigsaw](https://securitytrails.com/blog/osint-tools#content-12-jigsaw)
  * [13. SpiderFoot](https://securitytrails.com/blog/osint-tools#content-13-spiderfoot)
  * [14. Creepy](https://securitytrails.com/blog/osint-tools#content-14-creepy)
  * [15. Nmap](https://securitytrails.com/blog/osint-tools#content-15-nmap)
  * [16. WebShag](https://securitytrails.com/blog/osint-tools#content-16-webshag)
  * [17. OpenVAS](https://securitytrails.com/blog/osint-tools#content-17-openvas)
  * [18. Fierce](https://securitytrails.com/blog/osint-tools#content-18-fierce)
  * [19. Unicornscan](https://securitytrails.com/blog/osint-tools#content-19-unicornscan)
  * [20. Foca](https://securitytrails.com/blog/osint-tools#content-20-foca)
  * [21. ZoomEye](https://securitytrails.com/blog/osint-tools#content-21-zoomeye)
  * [22. OWASP Amass](https://securitytrails.com/blog/osint-tools#content-22-owasp-amass)
  * [23. IVRE](https://securitytrails.com/blog/osint-tools#content-23-ivre)
  * [24. Metagoofil](https://securitytrails.com/blog/osint-tools#content-24-metagoofil)
  * [25. Exiftool](https://securitytrails.com/blog/osint-tools#content-25-exiftool)

### [¶](https://securitytrails.com/blog/osint-tools#content-how-can-i-use-osint-tools-in-cybersecurity)How can I use OSINT tools in cybersecurity?

OSINT, as we explained in our previous article 'What is OSINT?', stands for Open Source Intelligence. And in the same way that military intelligence teams play a critical role in gaining advantage over the enemy, OSINT plays a critical role in the field of cybersecurity.

Open Source Intelligence fuels cybersecurity teams, letting blue, purple and red teams access a wide range of information such as network technologies, web-hosting servers, DNS records, software technologies, cloud assets, IoT devices, apps, databases, social media accounts, and much more.

OSINT is widely used within different types of organizations, companies, public and private agencies. Even the US government, back in 2005, [stated](https://www.govinfo.gov/content/pkg/CHRG-109hhrg24962/html/CHRG-109hhrg24962.htm) the importance of using Open Source Information effectively.

Imagine for a moment all that critical information falling into criminal hands. That could mark the beginning of an attack against your online assets.

Adopting the proper OSINT tools will help your company boost your cybersecurity defenses, or if you work on a red team, increase the amount of valuable information you'll get.

While Open Source Intelligence tools are frequently used toward a wide range of goals, they often focus on a few specific areas:

#### [¶](https://securitytrails.com/blog/osint-tools#content-find-unknown-public-assets)Find unknown-public assets

Public assets are all over the place, but the most dangerous assets are the ones you don't see, the unknown infrastructure assets. That's why creating a full map of your entire online infrastructure, as well as the other types of services you use, is the first thing that both the good guys and the bad guys will do during an information-gathering process.

This can lead to either a good-stronger defense, or falling victim to different kinds of cyber attacks launched against your organization.

#### [¶](https://securitytrails.com/blog/osint-tools#content-detect-outside-critical-company-data)Detect outside critical company data

Sometimes the data isn't on your company's public surface. Sometimes it's located elsewhere, and this often happens when you work with many 3rd- and 4th-party-related SaaS services. Among other common issues are mergers and acquisitions, that if overlooked, can invite external attack vectors into the parent company. And OSINT can prove highly useful during [cybersecurity auditing against mergers and acquisitions](https://securitytrails.com/blog/cybersecurity-mergers-acquisitions).

#### [¶](https://securitytrails.com/blog/osint-tools#content-group-critical-data-into-useful-plans)Group critical data into useful plans

Once you've found the most useful data from all fronts by using the right OSINT tools, then it's time to collate and group all that data and transform it into functional plans. What are we gonna do with these open ports? Who's in charge of updating this outdated software? When are we going to remove these stale DNS records? All these questions, and more, can inform the creation of your most appropriate and actionable plans, after you've grouped all your sensitive data as a foundation.

Now that you know what OSINT is, and how it's used for cybersecurity, let's jump right into the fun part: a brief review of all the recommended OSINT tools.

### [¶](https://securitytrails.com/blog/osint-tools#content-best-25-osint-tools-used-by-infosec-professionals)Best 25 OSINT Tools used by InfoSec Professionals

_**Important note**_ _before we start: remember that you should never use these tools on external networks/systems without previous authorization. These OSINT tools are presented here in order to help IT security researchers and private/public infosec investigators during the first phase of information gathering, which is one of the most important parts of a cybersecurity investigation._

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/top-osint-tools-banner4.jpg" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-1-osint-framework)1. OSINT Framework

While [OSINT Framework](http://osintframework.com/) isn't a tool to be run on your servers, it's a very useful way to get valuable information by querying free search engines, resources, and tools publicly available on the Internet. They are focused on bringing the best links to valuable sources of OSINT data.

While this web application was originally created focused on IT security, with the time it has evolved and today you can get other kinds of information from other industries as well. Most of the websites it uses to query the information are free, but some may require paying a low fee.

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/osint-framework.jpg" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-2-checkusernames)2. CheckUserNames

[CheckUserNames](https://checkusernames.com/) is an online OSINT tool that can help you to find usernames across over 170 social networks. This is especially useful if you are running an investigation to determine the usage of the same username on different social networks.

It can be also used to check for brand company names, not only individuals.

#### [¶](https://securitytrails.com/blog/osint-tools#content-3-haveibeenpwned)3. HaveIbeenPwned

[HaveIbeenPwned](https://haveibeenpwned.com/) can help you to check if your account has been compromised in the past. This site was developed by Troy Hunt, one of the most respected IT security professionals of this market, and it's been serving accurate reports since years.

If you suspect your account has been compromised, or want to verify for 3rd party compromises on external accounts, this is the perfect tool. It can track down web compromise from many sources like Gmail, Hotmail, Yahoo accounts, as well as LastFM, Kickstarter, Wordpress.com, Linkedin and many other popular websites.

Once you introduce your email address, the results will be displayed, showing something like:

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/haveibeenpwned.jpg" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-4-securitytrails-api)4. SecurityTrails API

The [SecurityTrails API](https://securitytrails.com/corp/api) allows you instant access to current DNS and historical records, domain details, and associated domains, IP information, as well as WHOIS data so you can integrate it within your own applications for asset discovery, threat intelligence, risk scoring, and much more. The best part is that you only need an HTTP request to retrieve the data, such as:

```sql
curl --request GET \
--url https://api.securitytrails.com/v1/history/netflix.com/dns/a \
--header 'apikey: >'
```

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/securitytrails-api.png" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-5-censys)5. Censys

[Censys](https://censys.io/) is a wonderful search engine used to get the latest and most accurate information about any device connected to the internet, it can be servers or domain names.

You will be able to find full geographic and technical details about 80 and 443 ports running on any server, as well as HTTP/S body content & GET response of the target website, Chrome TLS Handshake, full SSL Certificate Chain information, and WHOIS information.

#### [¶](https://securitytrails.com/blog/osint-tools#content-6-wappalyzer)6. Wappalyzer

[Wappalyzer](https://www.wappalyzer.com/) is a highly useful service that allows security researchers to quickly identify technologies on websites. With it, you can find a complete list of details for any technology stack running on any website. It also allows you to build lists of websites that use certain technologies, letting you add phone numbers and email addresses as well.

Their free plan includes instant results and up to 50 free monthly lookups. It’s perfect for tracking website technologies, discovering old/vulnerable software, finding organic data about your competitors, and last but not least, can be quickly triggered from the web browser with their Chrome/Firefox extensions.

If that isn’t enough, they also offer a handy API to automate technology lookups, and you can even set up website alerts to monitor your competition.

#### [¶](https://securitytrails.com/blog/osint-tools#content-7-google-dorks)7. Google Dorks

While investigating people or companies, a lot of IT security newbies forget the importance of using traditional search engines for recon and intel gathering.

In this case, [Google Dorks](https://securitytrails.com/blog/google-hacking-techniques) can be your best friend. They have been there since 2002 and can help you a lot in your intel reconnaissance.

Google Dorks are simply ways to query Google against certain information that may be useful for your security investigation.

Search engines index a lot of information about almost anything on the internet, including individual, companies, and their data.

Some popular operators used to perform Google Dorking:

* Filetype: you can use this dork to find any kind of filetypes.
* Ext: can help you to find files with specific extensions (eg. .txt, .log, etc).
* Intext: can perform queries helps to search for specific text inside any page.
* Intitle: it will search for any specific words inside the page title.
* Inurl: will look out for mentioned words inside the URL of any website.

Log files aren't supposed to be indexed by search engines, however, they do, and you can get valuable information from these Google Dorks, as you see below:

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/google_dorks.png" alt=""><figcaption></figcaption></figure>

Now let's focus on other more practical tools used by the most respected InfoSec professionals:

#### [¶](https://securitytrails.com/blog/osint-tools#content-8-maltego)8. Maltego

Is an amazing tool to track down footprints of any target you need to match. This piece of software has been developed by Paterva, and it's part of the Kali Linux distribution.

Using [Maltego](https://www.maltego.com/downloads/) will allow you to launch reconnaissance tests against specific targets.

One of the best things this software includes is what they call 'transforms'. Transforms are available for free in some cases, and on others, you will find commercial versions only. They will help you to run a different kind of tests and data integration with external applications.

In order to use Maltego you need to open a free account on their website, after that, you can launch a new machine or run transforms on the target from an existing one. Once you have chosen your transforms, Maltego app will start running all the transforms from Maltego servers.

Finally, Maltego will show you the results for the specified target, like IP, domains, AS numbers, and much more.

***

If you need to explore more Kali Linux utilities, check out this article: [Top 25 Kali Linux Tools](https://securitytrails.com/blog/kali-linux-tools)

***

#### [¶](https://securitytrails.com/blog/osint-tools#content-9-recon-ng)9. Recon-Ng

[Recon-ng](https://github.com/lanmaster53/recon-ng) comes already built in the Kali Linux distribution and is another great tool used to perform quickly and thoroughly reconnaissance on remote targets.

This web reconnaissance framework was written in Python and includes many modules, convenience functions and interactive help to guide you on how to use it properly.

The simple command-based interface allows you to run common operations like interacting with a database, run web requests, manage API keys or standardizing output content.

Fetching information about any target is pretty easy and can be done within seconds after installing. It includes interesting modules like google\_site\_web and bing\_domain\_web that can be used to find valuable information about the target domains.

While some recon-ng modules are pretty passive as they never hit the target network, others can launch interesting stuff right against the remote host.

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/recon-ng.png" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-10-theharvester)10. theHarvester

[theHarvester](https://securitytrails.com/blog/theharvester-tool) is another great alternative to fetch valuable information about any subdomain names, virtual hosts, open ports and email address of any company/website.

This is especially useful when you are in the first steps of a penetration test against your own local network, or against 3rd party authorized networks. Same as previous tools, theHarvester is included inside [Kali Linux](https://www.kali.org/) distro.

theHarvester uses many resources to fetch the data like PGP key servers, Bing, Baidu, Yahoo and Google search engine, and also social networks like Linkedin, Twitter and Google Plus.

It can also be used to launch active penetration test like DNS brute force based on dictionary attack, [rDNS lookups](https://securitytrails.com/blog/reverse-dns) and DNS TLD expansion using dictionary brute force enumeration.

#### [¶](https://securitytrails.com/blog/osint-tools#content-11-shodan)11. Shodan

[Shodan](https://www.shodan.io/) is a network security monitor and search engine focused on the deep web & the internet of things. It was created by John Matherly in 2009 to keep track of publicly accessible computers inside any network.

It is often called the 'search engine for hackers', as it lets you find and explore a different kind of devices connected to a network like servers, routers, webcams, and more.

Shodan is pretty much like Google, but instead of showing you fancy images and rich content / informative websites, it will show you things that are more related to the interest of IT security researchers like SSH, FTP, SNMP, Telnet, RTSP, IMAP and HTTP server banners and public information. Results will be shown ordered by country, operating system, network, and ports.

Shodan users are not only able to reach servers, webcams, and routers. It can be used to scan almost anything that is connected to the internet, including but not limited to traffic lights systems, home heating systems, water park control panels, water plants, nuclear power plants, and much more.

#### [¶](https://securitytrails.com/blog/osint-tools#content-12-jigsaw)12. Jigsaw

[Jigsaw](https://www.jigsawsecurityenterprise.com/) is used to gather information about any company employees. This tool works perfectly for companies like Google, Linkedin, or Microsoft, where we can just pick up one of their domain names (like google.com), and then gather all their employee's emails on the different company departments.

The only drawback is that these queries are launched against Jigsaw database located at jigsaw.com, so, we depend entirely on what information they allow us to explore inside their database. You will be able to find information about big companies, but if you are exploring a not so famous startup then you may be out of luck.

#### [¶](https://securitytrails.com/blog/osint-tools#content-13-spiderfoot)13. SpiderFoot

[SpiderFoot](https://www.spiderfoot.net/) is one of the best reconnaissance tools out there if you want to automate OSINT and have fast results for reconnaissance, threat intelligence, and perimeter monitoring.

It was written by our friend Steve Micallef, who did a great job building this app and writing the [SecurityTrails Addon for Splunk](https://securitytrails.com/blog/add-on-for-splunk)

This recon tool can help you to launch queries over 100 public data sources to gather intelligence on generic names, domain names, email addresses, and IP addresses.

Using Spiderfoot is pretty much easy, just specify the target, choose which modules you want to run, and Spiderfoot will do the hard job for you collecting all the intel data from the modules.

#### [¶](https://securitytrails.com/blog/osint-tools#content-14-creepy)14. Creepy

[Creepy](https://www.geocreepy.com/) is a geo-location OSINT tool for infosec professionals. It offers the ability to get full geolocation data from any individuals by querying social networking platforms like Twitter, Flickr, Facebook, etc.

If anyone uploads an image to any of these social networks with geolocation feature activated, then you will be able to see a full active mal where this person has been.

You will be able to filter based on exact locations, or even by date. After that, you can export the results in CSV or KML format.

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/creepy.jpg" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-15-nmap)15. Nmap

[Nmap](https://nmap.org/) is one of the most popular and widely used security auditing tools, its name means "Network Mapper". Is a free and open source utility utilized for security auditing and network exploration across local and remote hosts.

Some of the main features include:

* Host detection: Nmap has the ability to identify hosts inside any network that have certain ports open, or that can send a response to ICMP and TCP packets.
* IP and DNS information detection: including device type, Mac addresses and even reverse DNS names.
* Port detection: Nmap can detect any port open on the target network, and let you know the possible running services on it.
* OS detection: get full OS version detection and hardware specifications of any host connected.
* Version detection: Nmap is also able to get application name and version number.

#### [¶](https://securitytrails.com/blog/osint-tools#content-16-webshag)16. WebShag

[WebShag](https://github.com/wereallfeds/webshag) is a great server auditing tool used to scan HTTP and HTTPS protocols. Same as other tools, it's part of Kali Linux and can help you a lot in your IT security research & penetration testing.

You will be able to launch a simple scan, or use advanced methods like through a proxy, or over HTTP authentication.

Written in Python, it can be one of your best allies while auditing systems.

Main features include:

* [Port Scan](https://securitytrails.com/blog/best-port-scanners)
* URL scanning
* File fuzzing
* Website crawling

In order to avoid getting blocked by remote server security systems, it uses an intelligent IDS evasion system by launching random requests per HTTP proxy server, so you can keep auditing the server without being banned.

#### [¶](https://securitytrails.com/blog/osint-tools#content-17-openvas)17. OpenVAS

[OpenVAS](http://www.openvas.org/) (Open Vulnerability Assessment System) is a security framework that includes particular services and tools for infosec professionals.

This is an open source vulnerability scanner & security manager that was built after the famous Nessus switched from open source to private source. Then, the original developers of the Nessus vulnerability scanner decided to fork the original project and create OpenVAS.

While it is a little bit more difficult to setup than the old Nessus, it's quite effective while working with it to analyze the security of remote hosts.

The main tool included in OpenVAS is OpenVAS Scanner, a highly efficient agent that executes all the network vulnerability tests over the target machine.

On the other hand, another main component is called OpenVAS Manager, which is basically vulnerability management solution that allows you to store scanned data into an SQLite database, so then you can search, filter and order the scan results in a fancy and easy way.

#### [¶](https://securitytrails.com/blog/osint-tools#content-18-fierce)18. Fierce

[Fierce](https://github.com/mschwager/fierce) is an IP and DNS recon tool written in PERL, famous for helping IT sec professionals to find target IPs associated with domain names.

It was written originally by RSnake along with other members of the old [http://ha.ckers.org/](http://ha.ckers.org/). It's used mostly targetting local and remote corporate networks.

Once you have defined your target network, it will launch several scans against the selected domains and then it will try to find misconfigured networks and vulnerable points that can later leak private and valuable data.

The results will be ready within a few minutes, a little bit more than when you perform any other scan with similar tools like Nessus, [Nikto](https://securitytrails.com/blog/nikto-website-vulnerability-scanner), Unicornscan, etc.

<figure><img src="https://assets.securitytrails.com/cdn-cgi/image/width=789,quality=100,format=auto/blog/osint-tools/fierce.png" alt=""><figcaption></figcaption></figure>

#### [¶](https://securitytrails.com/blog/osint-tools#content-19-unicornscan)19. Unicornscan

[Unicornscan](https://github.com/dneufeld/unicornscan) is one of the top intel gathering tools for security research. It has also a built-in correlation engine that aims to be efficient, flexible and scalable at the same time.

Main features include:

* Full TCP/IP device/network scan.
* Asynchronous stateless TCP scanning (including all TCP Flags variations).
* Asynchronous TCP banner detection.
* UDP Protocol scanning.
* A/P OS identification.
* Application and component detection.
* Support for SQL Relational Output

#### [¶](https://securitytrails.com/blog/osint-tools#content-20-foca)20. Foca

[FOCA](https://www.elevenpaths.com/innovation-labs/technologies/foca) (Fingerprinting Organizations with Collected Archives) is a tool written by ElevenPaths that can be used to scan, analyze, extract and classify information from remote web servers and their hidden information.

Foca has the ability to analyze and collect valuable data from MS Office suite, OpenOffice, PDF, as well as Adobe InDesign and SVG and GIF files. This security tool also works actively with Google, Bing and DuckDuckGo search engines to collect additional data from those files. Once you have the full file list, it starts extracting information to attempt to identify more valuable data from the files.

#### [¶](https://securitytrails.com/blog/osint-tools#content-21-zoomeye)21. ZoomEye

In the cybersecurity world, we researchers are used to popular IoT search engines such as Shodan or Censys. For a while, however, a powerful new IoT search engine has been rapidly gaining followers. We're talking about ZoomEye.

[ZoomEye](https://www.zoomeye.org/) is a Chinese IoT OSINT search engine that allows users to grab public data from exposed devices and web services. In order to build its database it uses Wmap and Xmap, and then runs extensive fingerprinting against all the information found, ultimately presenting it to users in a filtered and curated way for easy visualization.

What information can you find with ZoomEye?

* IPs interacting with networks and hosts
* Open ports on remote servers
* Total number of hosted websites
* Total number of devices found
* Interactive map of users hitting different devices
* Vulnerabilities report

And much more. The public version offers access to a lot of data—but if you want to see what it can really do, we suggest you sign up for a free account. That way you'll get to test the real power of this OSINT tool.

#### [¶](https://securitytrails.com/blog/osint-tools#content-22-owasp-amass)22. OWASP Amass

Originally written by our friend Jeff Foley, [OWASP Amass](https://securitytrails.com/blog/owasp-amass) is probably one of the best reconnaissance and network mapping tools in the market. It's widely used for network discovery, DNS enumeration, and general attack surface mapping tasks with a varied set of techniques, with a heavy focus on intel gathering and data scrapping on HTTP, SSL/TLS, and DNS protocols.

And if that’s not enough, it also provides API integrations with popular cybersecurity data services, such as our own SecurityTrails API.

#### [¶](https://securitytrails.com/blog/osint-tools#content-23-ivre)23. IVRE

This infosec tool is frequently overlooked, but it has great potential in boosting your infosec discovery and analysis processes. [IVRE](https://doc.ivre.rocks/en/latest/) is an open source tool that's built on a base of popular projects like Nmap, Masscan, ZDNS, and ZGrab2.

Its framework uses these popular tools to gather network intelligence on any host, then uses a MongoDB database to store the data.

Its web-based interface makes it easy for both beginning and advanced infosec users to perform the following actions:

* Passive reconnaissance by flow analysis (from Zeek, Argus or nfdump)
* Active reconnaissance by using Zmap and Nmap
* Fingerprinting analysis
* Import data from other 3rd party infosec apps, such as Masscan/Nmap

IVRE can be installed by fetching the source from their official Github repo, or from 3rd-party repositories such as Kali Linux repo.

#### [¶](https://securitytrails.com/blog/osint-tools#content-24-metagoofil)24. Metagoofil

[Metagoofil](https://tools.kali.org/information-gathering/metagoofil) is another great intel-reconnaissance tool that aims to help infosec researchers, IT managers, and red teams to extract metadata from different types of files, such as:

* doc
* docx
* pdf
* xls
* xlsx
* ppt
* pptx

How does it work? This app performs a deep search on search engines like Google, focusing on these types of files. Once it detects such a file, it will download it to your local storage, then proceed to extract all of its valuable data.

Once the extraction is complete, you'll see a full report with usernames, software banners, app versions, hostnames and more, a valuable resource for your recon phase.

Metagoofil also includes a number of options to help you filter the types of files to search for, refine the results and tweak the output, among many other useful features.

#### [¶](https://securitytrails.com/blog/osint-tools#content-25-exiftool)25. Exiftool

While a lot of OSINT tools focus on data found on public files such as PDF, .DOC, HTML, .SQL, etc., there are other tools that are specifically designed to extract critical Open Source Intelligence data from image, video and audio files.

[Exiftool](https://exiftool.org/) reads, writes and extracts metadata from the following types of files:

* EXIF
* IPTC
* GPS
* XMP
* JFIF
* [And many others](https://exiftool.org/%23supported)

It also supports native files from a wide range of cameras, such as: Canon, Casio, FujiFilm, Kodak, Sony, and many others. It's also conveniently available on multiple platforms including Linux, Windows and MacOS.
